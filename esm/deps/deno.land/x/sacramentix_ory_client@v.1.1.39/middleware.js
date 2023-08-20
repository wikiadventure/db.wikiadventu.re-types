import { from } from './rxjsStub.js';
export class PromiseMiddlewareWrapper {
    constructor(middleware) {
        Object.defineProperty(this, "middleware", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: middleware
        });
    }
    pre(context) {
        return from(this.middleware.pre(context));
    }
    post(context) {
        return from(this.middleware.post(context));
    }
}
