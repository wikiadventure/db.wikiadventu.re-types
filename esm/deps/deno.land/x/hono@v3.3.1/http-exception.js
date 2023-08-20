import * as dntShim from "../../../../_dnt.shims.js";
export class HTTPException extends Error {
    constructor(status = 500, options) {
        super(options?.message);
        Object.defineProperty(this, "res", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "status", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.res = options?.res;
        this.status = status;
    }
    getResponse() {
        if (this.res) {
            return this.res;
        }
        return new dntShim.Response(this.message, {
            status: this.status,
        });
    }
}
