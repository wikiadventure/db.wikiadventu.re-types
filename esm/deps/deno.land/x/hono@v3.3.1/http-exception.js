import * as dntShim from "../../../../_dnt.shims.js";
export class HTTPException extends Error {
    res;
    status;
    constructor(status = 500, options) {
        super(options?.message);
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
