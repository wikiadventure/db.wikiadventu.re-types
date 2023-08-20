import * as dntShim from "../../../../_dnt.shims.js";
import { HonoRequest } from './request.js';
import { FetchEventLike } from './types.js';
import { serialize } from './utils/cookie.js';
export class Context {
    constructor(req, options) {
        Object.defineProperty(this, "env", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "finalized", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "error", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.defineProperty(this, "_req", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_status", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 200
        });
        Object.defineProperty(this, "_exCtx", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        }); // _executionCtx
        Object.defineProperty(this, "_pre", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        }); // _pretty
        Object.defineProperty(this, "_preS", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 2
        }); // _prettySpace
        Object.defineProperty(this, "_map", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_h", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        }); //  _headers
        Object.defineProperty(this, "_pH", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        }); // _preparedHeaders
        Object.defineProperty(this, "_res", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_path", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: '/'
        });
        Object.defineProperty(this, "_params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "rawRequest", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "notFoundHandler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => new dntShim.Response()
        });
        Object.defineProperty(this, "header", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (name, value, options) => {
                // Clear the header
                if (value === undefined) {
                    if (this._h) {
                        this._h.delete(name);
                    }
                    else if (this._pH) {
                        delete this._pH[name.toLocaleLowerCase()];
                    }
                    if (this.finalized) {
                        this.res.headers.delete(name);
                    }
                    return;
                }
                if (options?.append) {
                    if (!this._h) {
                        this._h = new dntShim.Headers(this._pH);
                        this._pH = {};
                    }
                    this._h.append(name, value);
                }
                else {
                    if (this._h) {
                        this._h.set(name, value);
                    }
                    else {
                        this._pH ??= {};
                        this._pH[name.toLowerCase()] = value;
                    }
                }
                if (this.finalized) {
                    if (options?.append) {
                        this.res.headers.append(name, value);
                    }
                    else {
                        this.res.headers.set(name, value);
                    }
                }
            }
        });
        Object.defineProperty(this, "status", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (status) => {
                this._status = status;
            }
        });
        Object.defineProperty(this, "set", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, value) => {
                this._map ||= {};
                this._map[key] = value;
            }
        });
        Object.defineProperty(this, "get", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key) => {
                return this._map ? this._map[key] : undefined;
            }
        });
        Object.defineProperty(this, "pretty", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (prettyJSON, space = 2) => {
                this._pre = prettyJSON;
                this._preS = space;
            }
        });
        Object.defineProperty(this, "newResponse", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (data, arg, headers) => {
                // Optimized
                if (!headers && !this._h && !this._res && !arg && this._status === 200) {
                    return new dntShim.Response(data, {
                        headers: this._pH,
                    });
                }
                // Return Response immediately if arg is RequestInit.
                if (arg && typeof arg !== 'number') {
                    const res = new dntShim.Response(data, arg);
                    const contentType = this._pH?.['content-type'];
                    if (contentType) {
                        res.headers.set('content-type', contentType);
                    }
                    return res;
                }
                const status = arg ?? this._status;
                this._pH ??= {};
                this._h ??= new dntShim.Headers();
                for (const [k, v] of Object.entries(this._pH)) {
                    this._h.set(k, v);
                }
                if (this._res) {
                    this._res.headers.forEach((v, k) => {
                        this._h?.set(k, v);
                    });
                    for (const [k, v] of Object.entries(this._pH)) {
                        this._h.set(k, v);
                    }
                }
                headers ??= {};
                for (const [k, v] of Object.entries(headers)) {
                    if (typeof v === 'string') {
                        this._h.set(k, v);
                    }
                    else {
                        this._h.delete(k);
                        for (const v2 of v) {
                            this._h.append(k, v2);
                        }
                    }
                }
                return new dntShim.Response(data, {
                    status,
                    headers: this._h,
                });
            }
        });
        Object.defineProperty(this, "body", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (data, arg, headers) => {
                return typeof arg === 'number'
                    ? this.newResponse(data, arg, headers)
                    : this.newResponse(data, arg);
            }
        });
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (text, arg, headers) => {
                // If the header is empty, return Response immediately.
                // Content-Type will be added automatically as `text/plain`.
                if (!this._pH) {
                    if (!headers && !this._res && !this._h && !arg) {
                        return new dntShim.Response(text);
                    }
                    this._pH = {};
                }
                // If Content-Type is not set, we don't have to set `text/plain`.
                // Fewer the header values, it will be faster.
                if (this._pH['content-type']) {
                    this._pH['content-type'] = 'text/plain; charset=UTF-8';
                }
                return typeof arg === 'number'
                    ? this.newResponse(text, arg, headers)
                    : this.newResponse(text, arg);
            }
        });
        Object.defineProperty(this, "json", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (object, arg, headers) => {
                const body = this._pre ? JSON.stringify(object, null, this._preS) : JSON.stringify(object);
                this._pH ??= {};
                this._pH['content-type'] = 'application/json; charset=UTF-8';
                return typeof arg === 'number'
                    ? this.newResponse(body, arg, headers)
                    : this.newResponse(body, arg);
            }
        });
        Object.defineProperty(this, "jsonT", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (object, arg, headers) => {
                return {
                    response: typeof arg === 'number' ? this.json(object, arg, headers) : this.json(object, arg),
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    data: object,
                    format: 'json',
                };
            }
        });
        Object.defineProperty(this, "html", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (html, arg, headers) => {
                this._pH ??= {};
                this._pH['content-type'] = 'text/html; charset=UTF-8';
                return typeof arg === 'number'
                    ? this.newResponse(html, arg, headers)
                    : this.newResponse(html, arg);
            }
        });
        Object.defineProperty(this, "redirect", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (location, status = 302) => {
                this._h ??= new dntShim.Headers();
                this._h.set('Location', location);
                return this.newResponse(null, status);
            }
        });
        /** @deprecated
         * Use Cookie Middleware instead of `c.cookie()`. The `c.cookie()` will be removed in v4.
         *
         * @example
         *
         * import { setCookie } from 'hono/cookie'
         * // ...
         * app.get('/', (c) => {
         *   setCookie(c, 'key', 'value')
         *   //...
         * })
         */
        Object.defineProperty(this, "cookie", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (name, value, opt) => {
                const cookie = serialize(name, value, opt);
                this.header('set-cookie', cookie, { append: true });
            }
        });
        Object.defineProperty(this, "notFound", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                return this.notFoundHandler(this);
            }
        });
        this.rawRequest = req;
        if (options) {
            this._exCtx = options.executionCtx;
            this._path = options.path ?? '/';
            this._params = options.params;
            this.env = options.env;
            if (options.notFoundHandler) {
                this.notFoundHandler = options.notFoundHandler;
            }
        }
    }
    get req() {
        if (this._req) {
            return this._req;
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this._req = new HonoRequest(this.rawRequest, this._path, this._params);
            this.rawRequest = undefined;
            this._params = undefined;
            return this._req;
        }
    }
    get event() {
        if (this._exCtx instanceof FetchEventLike) {
            return this._exCtx;
        }
        else {
            throw Error('This context has no FetchEvent');
        }
    }
    get executionCtx() {
        if (this._exCtx) {
            return this._exCtx;
        }
        else {
            throw Error('This context has no ExecutionContext');
        }
    }
    get res() {
        return (this._res ||= new dntShim.Response('404 Not Found', { status: 404 }));
    }
    set res(_res) {
        if (this._res && _res) {
            this._res.headers.delete('content-type');
            this._res.headers.forEach((v, k) => {
                _res.headers.set(k, v);
            });
        }
        this._res = _res;
        this.finalized = true;
    }
    get runtime() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const global = dntShim.dntGlobalThis;
        if (global?.Deno !== undefined) {
            return 'deno';
        }
        if (global?.Bun !== undefined) {
            return 'bun';
        }
        if (typeof global?.WebSocketPair === 'function') {
            return 'workerd';
        }
        if (typeof global?.EdgeRuntime === 'string') {
            return 'edge-light';
        }
        if (global?.fastly !== undefined) {
            return 'fastly';
        }
        if (global?.__lagon__ !== undefined) {
            return 'lagon';
        }
        if (global?.process?.release?.name === 'node') {
            return 'node';
        }
        return 'other';
    }
}
