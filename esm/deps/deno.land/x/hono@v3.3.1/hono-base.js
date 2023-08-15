import * as dntShim from "../../../../_dnt.shims.js";
import { compose } from './compose.js';
import { Context } from './context.js';
import { HTTPException } from './http-exception.js';
import { METHOD_NAME_ALL, METHOD_NAME_ALL_LOWERCASE, METHODS } from './router.js';
import { getPath, getPathNoStrict, getQueryStrings, mergePath } from './utils/url.js';
function defineDynamicClass() {
    return class {
    };
}
const notFoundHandler = (c) => {
    return c.text('404 Not Found', 404);
};
const errorHandler = (err, c) => {
    if (err instanceof HTTPException) {
        return err.getResponse();
    }
    console.trace(err);
    const message = 'Internal Server Error';
    return c.text(message, 500);
};
class Hono extends defineDynamicClass() {
    /*
      This class is like an abstract class and does not have a router.
      To use it, inherit the class and implement router in the constructor.
    */
    router;
    getPath;
    _basePath = '';
    path = '*';
    routes = [];
    constructor(init = {}) {
        super();
        // Implementation of app.get(...handlers[]) or app.get(path, ...handlers[])
        const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
        allMethods.map((method) => {
            this[method] = (args1, ...args) => {
                if (typeof args1 === 'string') {
                    this.path = args1;
                }
                else {
                    this.addRoute(method, this.path, args1);
                }
                args.map((handler) => {
                    if (typeof handler !== 'string') {
                        this.addRoute(method, this.path, handler);
                    }
                });
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return this;
            };
        });
        // Implementation of app.on(method, path, ...handlers[])
        this.on = (method, path, ...handlers) => {
            if (!method)
                return this;
            this.path = path;
            for (const m of [method].flat()) {
                handlers.map((handler) => {
                    this.addRoute(m.toUpperCase(), this.path, handler);
                });
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return this;
        };
        // Implementation of app.use(...handlers[]) or app.get(path, ...handlers[])
        this.use = (arg1, ...handlers) => {
            if (typeof arg1 === 'string') {
                this.path = arg1;
            }
            else {
                handlers.unshift(arg1);
            }
            handlers.map((handler) => {
                this.addRoute(METHOD_NAME_ALL, this.path, handler);
            });
            return this;
        };
        const strict = init.strict ?? true;
        delete init.strict;
        Object.assign(this, init);
        this.getPath ||= strict ? getPath : getPathNoStrict;
    }
    clone() {
        const clone = new Hono({
            router: this.router,
            getPath: this.getPath,
        });
        clone.routes = this.routes;
        return clone;
    }
    notFoundHandler = notFoundHandler;
    errorHandler = errorHandler;
    route(path, app) {
        const subApp = this.basePath(path);
        if (!app) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return subApp;
        }
        app.routes.map((r) => {
            const handler = app.errorHandler === errorHandler
                ? r.handler
                : async (c, next) => (await compose([r.handler], app.errorHandler)(c, next)).res;
            subApp.addRoute(r.method, r.path, handler);
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return this;
    }
    basePath(path) {
        const subApp = this.clone();
        subApp._basePath = mergePath(this._basePath, path);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return subApp;
    }
    onError(handler) {
        this.errorHandler = handler;
        return this;
    }
    notFound(handler) {
        this.notFoundHandler = handler;
        return this;
    }
    showRoutes() {
        const length = 8;
        this.routes.map((route) => {
            console.log(`\x1b[32m${route.method}\x1b[0m ${' '.repeat(length - route.method.length)} ${route.path}`);
        });
    }
    /**
     * @experimental
     * `app.mount()` is an experimental feature.
     * The API might be changed.
     */
    mount(path, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    applicationHandler, optionHandler) {
        const mergedPath = mergePath(this._basePath, path);
        const pathPrefixLength = mergedPath === '/' ? 0 : mergedPath.length;
        const handler = async (c, next) => {
            let executionContext = undefined;
            try {
                executionContext = c.executionCtx;
            }
            catch { } // Do nothing
            const options = optionHandler ? optionHandler(c) : [c.env, executionContext];
            const optionsArray = Array.isArray(options) ? options : [options];
            const queryStrings = getQueryStrings(c.req.url);
            const res = await applicationHandler(new dntShim.Request(new URL((c.req.path.slice(pathPrefixLength) || '/') + queryStrings, c.req.url), c.req.raw), ...optionsArray);
            if (res)
                return res;
            await next();
        };
        this.addRoute(METHOD_NAME_ALL, mergePath(path, '*'), handler);
        return this;
    }
    get routerName() {
        this.matchRoute('GET', '/');
        return this.router.name;
    }
    /**
     * @deprecate
     * `app.head()` is no longer used.
     * `app.get()` implicitly handles the HEAD method.
     */
    head = () => {
        console.warn('`app.head()` is no longer used. `app.get()` implicitly handles the HEAD method.');
        return this;
    };
    addRoute(method, path, handler) {
        method = method.toUpperCase();
        if (this._basePath) {
            path = mergePath(this._basePath, path);
        }
        this.router.add(method, path, handler);
        const r = { path: path, method: method, handler: handler };
        this.routes.push(r);
    }
    matchRoute(method, path) {
        return this.router.match(method, path) || { handlers: [], params: {} };
    }
    handleError(err, c) {
        if (err instanceof Error) {
            return this.errorHandler(err, c);
        }
        throw err;
    }
    dispatch(request, executionCtx, env, method) {
        const path = this.getPath(request);
        // Handle HEAD method
        if (method === 'HEAD') {
            return (async () => new dntShim.Response(null, await this.dispatch(request, executionCtx, env, 'GET')))();
        }
        const { handlers, params } = this.matchRoute(method, path);
        const c = new Context(request, {
            env,
            executionCtx,
            notFoundHandler: this.notFoundHandler,
            path,
            params,
        });
        // Do not `compose` if it has only one handler
        if (handlers.length === 1) {
            let res;
            try {
                res = handlers[0](c, async () => { });
                if (!res) {
                    return this.notFoundHandler(c);
                }
            }
            catch (err) {
                return this.handleError(err, c);
            }
            if (res instanceof dntShim.Response)
                return res;
            if ('response' in res) {
                res = res.response;
            }
            if (res instanceof dntShim.Response)
                return res;
            return (async () => {
                let awaited;
                try {
                    awaited = await res;
                    if (awaited !== undefined && 'response' in awaited) {
                        awaited = awaited['response'];
                    }
                    if (!awaited) {
                        return this.notFoundHandler(c);
                    }
                }
                catch (err) {
                    return this.handleError(err, c);
                }
                return awaited;
            })();
        }
        const composed = compose(handlers, this.errorHandler, this.notFoundHandler);
        return (async () => {
            try {
                const tmp = composed(c);
                const context = tmp instanceof Promise ? await tmp : tmp;
                if (!context.finalized) {
                    throw new Error('Context is not finalized. You may forget returning Response object or `await next()`');
                }
                return context.res;
            }
            catch (err) {
                return this.handleError(err, c);
            }
        })();
    }
    handleEvent = (event) => {
        return this.dispatch(event.request, event, undefined, event.request.method);
    };
    fetch = (request, Env, executionCtx) => {
        return this.dispatch(request, executionCtx, Env, request.method);
    };
    request = async (input, requestInit) => {
        if (input instanceof dntShim.Request) {
            if (requestInit !== undefined) {
                input = new dntShim.Request(input, requestInit);
            }
            return await this.fetch(input);
        }
        input = input.toString();
        const path = /^https?:\/\//.test(input) ? input : `http://localhost${mergePath('/', input)}`;
        const req = new dntShim.Request(path, requestInit);
        return await this.fetch(req);
    };
    fire = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        addEventListener('fetch', (event) => {
            void event.respondWith(this.handleEvent(event));
        });
    };
}
export { Hono as HonoBase };
