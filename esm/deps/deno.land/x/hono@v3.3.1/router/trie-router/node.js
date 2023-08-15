import { METHOD_NAME_ALL } from '../../router.js';
import { splitPath, splitRoutingPath, getPattern } from '../../utils/url.js';
function findParam(node, name) {
    for (let i = 0, len = node.patterns.length; i < len; i++) {
        if (typeof node.patterns[i] === 'object' && node.patterns[i][1] === name) {
            return true;
        }
    }
    const nodes = Object.values(node.children);
    for (let i = 0, len = nodes.length; i < len; i++) {
        if (findParam(nodes[i], name)) {
            return true;
        }
    }
    return false;
}
export class Node {
    methods;
    children;
    patterns;
    order = 0;
    name;
    handlerSetCache;
    constructor(method, handler, children) {
        this.children = children || {};
        this.methods = [];
        this.name = '';
        if (method && handler) {
            const m = {};
            m[method] = { handler: handler, score: 0, name: this.name };
            this.methods = [m];
        }
        this.patterns = [];
        this.handlerSetCache = {};
    }
    insert(method, path, handler) {
        this.name = `${method} ${path}`;
        this.order = ++this.order;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let curNode = this;
        const parts = splitRoutingPath(path);
        const parentPatterns = [];
        const errorMessage = (name) => {
            return `Duplicate param name, use another name instead of '${name}' - ${method} ${path} <--- '${name}'`;
        };
        for (let i = 0, len = parts.length; i < len; i++) {
            const p = parts[i];
            if (Object.keys(curNode.children).includes(p)) {
                parentPatterns.push(...curNode.patterns);
                curNode = curNode.children[p];
                continue;
            }
            curNode.children[p] = new Node();
            const pattern = getPattern(p);
            if (pattern) {
                if (typeof pattern === 'object') {
                    for (let j = 0, len = parentPatterns.length; j < len; j++) {
                        if (typeof parentPatterns[j] === 'object' && parentPatterns[j][1] === pattern[1]) {
                            throw new Error(errorMessage(pattern[1]));
                        }
                    }
                    if (Object.values(curNode.children).some((n) => findParam(n, pattern[1]))) {
                        throw new Error(errorMessage(pattern[1]));
                    }
                }
                curNode.patterns.push(pattern);
                parentPatterns.push(...curNode.patterns);
            }
            parentPatterns.push(...curNode.patterns);
            curNode = curNode.children[p];
        }
        if (!curNode.methods.length) {
            curNode.methods = [];
        }
        const m = {};
        const handlerSet = { handler: handler, name: this.name, score: this.order };
        m[method] = handlerSet;
        curNode.methods.push(m);
        return curNode;
    }
    // getHandlerSets
    gHSets(node, method, wildcard) {
        return (node.handlerSetCache[`${method}:${wildcard ? '1' : '0'}`] ||= (() => {
            const handlerSets = [];
            for (let i = 0, len = node.methods.length; i < len; i++) {
                const m = node.methods[i];
                const handlerSet = m[method] || m[METHOD_NAME_ALL];
                if (handlerSet !== undefined) {
                    handlerSets.push(handlerSet);
                }
            }
            return handlerSets;
        })());
    }
    search(method, path) {
        const handlerSets = [];
        const params = {};
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const curNode = this;
        let curNodes = [curNode];
        const parts = splitPath(path);
        for (let i = 0, len = parts.length; i < len; i++) {
            const part = parts[i];
            const isLast = i === len - 1;
            const tempNodes = [];
            let matched = false;
            for (let j = 0, len2 = curNodes.length; j < len2; j++) {
                const node = curNodes[j];
                const nextNode = node.children[part];
                if (nextNode) {
                    if (isLast === true) {
                        // '/hello/*' => match '/hello'
                        if (nextNode.children['*']) {
                            handlerSets.push(...this.gHSets(nextNode.children['*'], method, true));
                        }
                        handlerSets.push(...this.gHSets(nextNode, method));
                        matched = true;
                    }
                    else {
                        tempNodes.push(nextNode);
                    }
                }
                for (let k = 0, len3 = node.patterns.length; k < len3; k++) {
                    const pattern = node.patterns[k];
                    // Wildcard
                    // '/hello/*/foo' => match /hello/bar/foo
                    if (pattern === '*') {
                        const astNode = node.children['*'];
                        if (astNode) {
                            handlerSets.push(...this.gHSets(astNode, method));
                            tempNodes.push(astNode);
                        }
                        continue;
                    }
                    if (part === '')
                        continue;
                    // Named match
                    // `/posts/:id` => match /posts/123
                    const [key, name, matcher] = pattern;
                    // `/js/:filename{[a-z]+.js}` => match /js/chunk/123.js
                    const restPathString = parts.slice(i).join('/');
                    if (matcher instanceof RegExp && matcher.test(restPathString)) {
                        handlerSets.push(...this.gHSets(node.children[key], method));
                        params[name] = restPathString;
                        continue;
                    }
                    if (matcher === true || (matcher instanceof RegExp && matcher.test(part))) {
                        if (typeof key === 'string') {
                            if (isLast === true) {
                                handlerSets.push(...this.gHSets(node.children[key], method));
                            }
                            else {
                                tempNodes.push(node.children[key]);
                            }
                        }
                        // `/book/a`     => no-slug
                        // `/book/:slug` => slug
                        // `/book/b`     => no-slug-b
                        // GET /book/a   ~> no-slug, param['slug'] => undefined
                        // GET /book/foo ~> slug, param['slug'] => foo
                        // GET /book/b   ~> no-slug-b, param['slug'] => b
                        if (typeof name === 'string' && !matched) {
                            params[name] = part;
                        }
                        else {
                            if (node.children[part]) {
                                params[name] = part;
                            }
                        }
                    }
                }
            }
            curNodes = tempNodes;
        }
        const len = handlerSets.length;
        if (len === 0)
            return null;
        if (len === 1)
            return { handlers: [handlerSets[0].handler], params };
        const handlers = handlerSets
            .sort((a, b) => {
            return a.score - b.score;
        })
            .map((s) => {
            return s.handler;
        });
        return { handlers, params };
    }
}
