import * as dntShim from "../../../../../_dnt.shims.js";
import { replaceUrlParam, mergePath, removeIndexString, deepMerge } from './utils.js';
const createProxy = (callback, path) => {
    const proxy = new Proxy(() => { }, {
        get(_obj, key) {
            if (typeof key !== 'string')
                return undefined;
            return createProxy(callback, [...path, key]);
        },
        apply(_1, _2, args) {
            return callback({
                path,
                args,
            });
        },
    });
    return proxy;
};
class ClientRequestImpl {
    url;
    method;
    queryParams = undefined;
    pathParams = {};
    rBody;
    cType = undefined;
    constructor(url, method) {
        this.url = url;
        this.method = method;
    }
    fetch = (args, opt) => {
        if (args) {
            if (args.query) {
                for (const [k, v] of Object.entries(args.query)) {
                    this.queryParams ||= new URLSearchParams();
                    if (Array.isArray(v)) {
                        for (const v2 of v) {
                            this.queryParams.append(k, v2);
                        }
                    }
                    else {
                        this.queryParams.set(k, v);
                    }
                }
            }
            if (args.queries) {
                for (const [k, v] of Object.entries(args.queries)) {
                    for (const v2 of v) {
                        this.queryParams ||= new URLSearchParams();
                        this.queryParams.append(k, v2);
                    }
                }
            }
            if (args.form) {
                const form = new dntShim.FormData();
                for (const [k, v] of Object.entries(args.form)) {
                    form.append(k, v);
                }
                this.rBody = form;
            }
            if (args.json) {
                this.rBody = JSON.stringify(args.json);
                this.cType = 'application/json';
            }
            if (args.param) {
                this.pathParams = args.param;
            }
        }
        let methodUpperCase = this.method.toUpperCase();
        let setBody = !(methodUpperCase === 'GET' || methodUpperCase === 'HEAD');
        const headerValues = opt?.headers ? opt.headers : {};
        if (this.cType)
            headerValues['Content-Type'] = this.cType;
        const headers = new dntShim.Headers(headerValues ?? undefined);
        let url = this.url;
        url = removeIndexString(url);
        url = replaceUrlParam(url, this.pathParams);
        if (this.queryParams) {
            url = url + '?' + this.queryParams.toString();
        }
        methodUpperCase = this.method.toUpperCase();
        setBody = !(methodUpperCase === 'GET' || methodUpperCase === 'HEAD');
        // Pass URL string to 1st arg for testing with MSW and node-fetch
        return (opt?.fetch || dntShim.fetch)(url, {
            body: setBody ? this.rBody : undefined,
            method: methodUpperCase,
            headers: headers,
        });
    };
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hc = (baseUrl, options) => createProxy(async (opts) => {
    const parts = [...opts.path];
    let method = '';
    if (/^\$/.test(parts[parts.length - 1])) {
        const last = parts.pop();
        if (last) {
            method = last.replace(/^\$/, '');
        }
    }
    const path = parts.join('/');
    const url = mergePath(baseUrl, path);
    const req = new ClientRequestImpl(url, method);
    if (method) {
        options ??= {};
        const args = deepMerge(options, { ...(opts.args[1] ?? {}) });
        return req.fetch(opts.args[0], args);
    }
    return req;
}, []);
