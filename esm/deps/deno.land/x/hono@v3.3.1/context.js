import * as dntShim from "../../../../_dnt.shims.js";
import { HonoRequest } from './request.js';
import { FetchEventLike } from './types.js';
import { serialize } from './utils/cookie.js';
export class Context {
    env = {};
    finalized = false;
    error = undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _req;
    _status = 200;
    _exCtx; // _executionCtx
    _pre = false; // _pretty
    _preS = 2; // _prettySpace
    _map;
    _h = undefined; //  _headers
    _pH = undefined; // _preparedHeaders
    _res;
    _path = '/';
    _params;
    rawRequest;
    notFoundHandler = () => new dntShim.Response();
    constructor(req, options) {
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
    header = (name, value, options) => {
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
    };
    status = (status) => {
        this._status = status;
    };
    set = (key, value) => {
        this._map ||= {};
        this._map[key] = value;
    };
    get = (key) => {
        return this._map ? this._map[key] : undefined;
    };
    pretty = (prettyJSON, space = 2) => {
        this._pre = prettyJSON;
        this._preS = space;
    };
    newResponse = (data, arg, headers) => {
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
    };
    body = (data, arg, headers) => {
        return typeof arg === 'number'
            ? this.newResponse(data, arg, headers)
            : this.newResponse(data, arg);
    };
    text = (text, arg, headers) => {
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
    };
    json = (object, arg, headers) => {
        const body = this._pre ? JSON.stringify(object, null, this._preS) : JSON.stringify(object);
        this._pH ??= {};
        this._pH['content-type'] = 'application/json; charset=UTF-8';
        return typeof arg === 'number'
            ? this.newResponse(body, arg, headers)
            : this.newResponse(body, arg);
    };
    jsonT = (object, arg, headers) => {
        return {
            response: typeof arg === 'number' ? this.json(object, arg, headers) : this.json(object, arg),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data: object,
            format: 'json',
        };
    };
    html = (html, arg, headers) => {
        this._pH ??= {};
        this._pH['content-type'] = 'text/html; charset=UTF-8';
        return typeof arg === 'number'
            ? this.newResponse(html, arg, headers)
            : this.newResponse(html, arg);
    };
    redirect = (location, status = 302) => {
        this._h ??= new dntShim.Headers();
        this._h.set('Location', location);
        return this.newResponse(null, status);
    };
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
    cookie = (name, value, opt) => {
        const cookie = serialize(name, value, opt);
        this.header('set-cookie', cookie, { append: true });
    };
    notFound = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return this.notFoundHandler(this);
    };
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
