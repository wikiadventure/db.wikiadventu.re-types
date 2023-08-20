import { METHOD_NAME_ALL, METHODS, UnsupportedPathError } from '../../router.js';
import { checkOptionalParameter } from '../../utils/url.js';
import { PATH_ERROR } from './node.js';
import { Trie } from './trie.js';
const methodNames = [METHOD_NAME_ALL, ...METHODS].map((method) => method.toUpperCase());
const emptyParam = {};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const nullMatcher = [/^$/, [], {}];
let wildcardRegExpCache = {};
function buildWildcardRegExp(path) {
    return (wildcardRegExpCache[path] ??= new RegExp(path === '*' ? '' : `^${path.replace(/\/\*/, '(?:|/.*)')}$`));
}
function clearWildcardRegExpCache() {
    wildcardRegExpCache = {};
}
function buildMatcherFromPreprocessedRoutes(routes) {
    const trie = new Trie();
    const handlerData = [];
    if (routes.length === 0) {
        return nullMatcher;
    }
    const routesWithStaticPathFlag = routes
        .map((route) => [!/\*|\/:/.test(route[0]), ...route])
        .sort(([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length);
    const staticMap = {};
    for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
        const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
        if (pathErrorCheckOnly) {
            staticMap[path] = { handlers, params: emptyParam };
        }
        else {
            j++;
        }
        let paramMap;
        try {
            paramMap = trie.insert(path, j, pathErrorCheckOnly);
        }
        catch (e) {
            throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
        }
        if (pathErrorCheckOnly) {
            continue;
        }
        handlerData[j] =
            paramMap.length === 0 ? [{ handlers, params: emptyParam }, null] : [handlers, paramMap];
    }
    const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
    for (let i = 0, len = handlerData.length; i < len; i++) {
        const paramMap = handlerData[i][1];
        if (paramMap) {
            for (let j = 0, len = paramMap.length; j < len; j++) {
                paramMap[j][1] = paramReplacementMap[paramMap[j][1]];
            }
        }
    }
    const handlerMap = [];
    // using `in` because indexReplacementMap is a sparse array
    for (const i in indexReplacementMap) {
        handlerMap[i] = handlerData[indexReplacementMap[i]];
    }
    return [regexp, handlerMap, staticMap];
}
function findMiddleware(middleware, path) {
    if (!middleware) {
        return undefined;
    }
    for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
        if (buildWildcardRegExp(k).test(path)) {
            return [...middleware[k]];
        }
    }
    return undefined;
}
export class RegExpRouter {
    constructor() {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'RegExpRouter'
        });
        Object.defineProperty(this, "middleware", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "routes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.middleware = { [METHOD_NAME_ALL]: {} };
        this.routes = { [METHOD_NAME_ALL]: {} };
    }
    add(method, path, handler) {
        const { middleware, routes } = this;
        if (!middleware || !routes) {
            throw new Error('Can not add a route since the matcher is already built.');
        }
        if (methodNames.indexOf(method) === -1)
            methodNames.push(method);
        if (!middleware[method]) {
            ;
            [middleware, routes].forEach((handlerMap) => {
                handlerMap[method] = {};
                Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
                    handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
                });
            });
        }
        if (path === '/*') {
            path = '*';
        }
        if (/\*$/.test(path)) {
            const re = buildWildcardRegExp(path);
            if (method === METHOD_NAME_ALL) {
                Object.keys(middleware).forEach((m) => {
                    middleware[m][path] ||=
                        findMiddleware(middleware[m], path) ||
                            findMiddleware(middleware[METHOD_NAME_ALL], path) ||
                            [];
                });
            }
            else {
                middleware[method][path] ||=
                    findMiddleware(middleware[method], path) ||
                        findMiddleware(middleware[METHOD_NAME_ALL], path) ||
                        [];
            }
            Object.keys(middleware).forEach((m) => {
                if (method === METHOD_NAME_ALL || method === m) {
                    Object.keys(middleware[m]).forEach((p) => {
                        re.test(p) && middleware[m][p].push(handler);
                    });
                }
            });
            Object.keys(routes).forEach((m) => {
                if (method === METHOD_NAME_ALL || method === m) {
                    Object.keys(routes[m]).forEach((p) => re.test(p) && routes[m][p].push(handler));
                }
            });
            return;
        }
        const paths = checkOptionalParameter(path) || [path];
        for (let i = 0, len = paths.length; i < len; i++) {
            const path = paths[i];
            Object.keys(routes).forEach((m) => {
                if (method === METHOD_NAME_ALL || method === m) {
                    routes[m][path] ||= [
                        ...(findMiddleware(middleware[m], path) ||
                            findMiddleware(middleware[METHOD_NAME_ALL], path) ||
                            []),
                    ];
                    routes[m][path].push(handler);
                }
            });
        }
    }
    match(method, path) {
        clearWildcardRegExpCache(); // no longer used.
        const matchers = this.buildAllMatchers();
        this.match = (method, path) => {
            const matcher = matchers[method];
            const staticMatch = matcher[2][path];
            if (staticMatch) {
                return staticMatch;
            }
            const match = path.match(matcher[0]);
            if (!match) {
                return null;
            }
            const index = match.indexOf('', 1);
            const [handlers, paramMap] = matcher[1][index];
            if (!paramMap) {
                return handlers;
            }
            const params = {};
            for (let i = 0, len = paramMap.length; i < len; i++) {
                params[paramMap[i][0]] = match[paramMap[i][1]];
            }
            return { handlers, params };
        };
        return this.match(method, path);
    }
    buildAllMatchers() {
        const matchers = {};
        methodNames.forEach((method) => {
            matchers[method] = this.buildMatcher(method) || matchers[METHOD_NAME_ALL];
        });
        // Release cache
        this.middleware = this.routes = undefined;
        return matchers;
    }
    buildMatcher(method) {
        const routes = [];
        let hasOwnRoute = method === METHOD_NAME_ALL;
        [this.middleware, this.routes].forEach((r) => {
            const ownRoute = r[method]
                ? Object.keys(r[method]).map((path) => [path, r[method][path]])
                : [];
            if (ownRoute.length !== 0) {
                hasOwnRoute ||= true;
                routes.push(...ownRoute);
            }
            else if (method !== METHOD_NAME_ALL) {
                routes.push(...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]]));
            }
        });
        if (!hasOwnRoute) {
            return null;
        }
        else {
            return buildMatcherFromPreprocessedRoutes(routes);
        }
    }
}
