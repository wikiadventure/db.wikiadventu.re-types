import { parseBody } from './utils/body.js';
import { parse } from './utils/cookie.js';
import { getQueryParam, getQueryParams, decodeURIComponent_ } from './utils/url.js';
export class HonoRequest {
    raw;
    paramData;
    vData; // Short name of validatedData
    path;
    constructor(request, path = '/', paramData) {
        this.raw = request;
        this.path = path;
        this.paramData = paramData;
        this.vData = {};
    }
    param(key) {
        if (this.paramData) {
            if (key) {
                const param = this.paramData[key];
                return param ? (/\%/.test(param) ? decodeURIComponent_(param) : param) : undefined;
            }
            else {
                const decoded = {};
                for (const [key, value] of Object.entries(this.paramData)) {
                    if (value && typeof value === 'string') {
                        decoded[key] = /\%/.test(value) ? decodeURIComponent_(value) : value;
                    }
                }
                return decoded;
            }
        }
        return null;
    }
    query(key) {
        return getQueryParam(this.url, key);
    }
    queries(key) {
        return getQueryParams(this.url, key);
    }
    header(name) {
        if (name)
            return this.raw.headers.get(name.toLowerCase()) ?? undefined;
        const headerData = {};
        this.raw.headers.forEach((value, key) => {
            headerData[key] = value;
        });
        return headerData;
    }
    cookie(key) {
        const cookie = this.raw.headers.get('Cookie');
        if (!cookie)
            return;
        const obj = parse(cookie);
        if (key) {
            const value = obj[key];
            return value;
        }
        else {
            return obj;
        }
    }
    async parseBody() {
        return await parseBody(this.raw);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    json() {
        return this.raw.json();
    }
    text() {
        return this.raw.text();
    }
    arrayBuffer() {
        return this.raw.arrayBuffer();
    }
    blob() {
        return this.raw.blob();
    }
    formData() {
        return this.raw.formData();
    }
    addValidatedData(target, data) {
        this.vData[target] = data;
    }
    valid(target) {
        if (target) {
            return this.vData[target];
        }
    }
    get url() {
        return this.raw.url;
    }
    get method() {
        return this.raw.method;
    }
    get headers() {
        return this.raw.headers;
    }
    get body() {
        return this.raw.body;
    }
    get bodyUsed() {
        return this.raw.bodyUsed;
    }
    get integrity() {
        return this.raw.integrity;
    }
    get keepalive() {
        return this.raw.keepalive;
    }
    get referrer() {
        return this.raw.referrer;
    }
    get signal() {
        return this.raw.signal;
    }
}
