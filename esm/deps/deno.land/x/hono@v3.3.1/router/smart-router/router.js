import { UnsupportedPathError } from '../../router.js';
export class SmartRouter {
    constructor(init) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SmartRouter'
        });
        Object.defineProperty(this, "routers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "routes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.assign(this, init);
    }
    add(method, path, handler) {
        if (!this.routes) {
            throw new Error('Can not add a route since the matcher is already built.');
        }
        this.routes.push([method, path, handler]);
    }
    match(method, path) {
        if (!this.routes) {
            throw new Error('Fatal error');
        }
        const { routers, routes } = this;
        const len = routers.length;
        let i = 0;
        let res;
        for (; i < len; i++) {
            const router = routers[i];
            try {
                routes.forEach((args) => {
                    router.add(...args);
                });
                res = router.match(method, path);
            }
            catch (e) {
                if (e instanceof UnsupportedPathError) {
                    continue;
                }
                throw e;
            }
            this.match = router.match.bind(router);
            this.routers = [router];
            this.routes = undefined;
            break;
        }
        if (i === len) {
            // not found
            throw new Error('Fatal error');
        }
        // e.g. "SmartRouter + RegExpRouter"
        this.name = `SmartRouter + ${this.activeRouter.name}`;
        return res || null;
    }
    get activeRouter() {
        if (this.routes || this.routers.length !== 1) {
            throw new Error('No active router has been determined yet.');
        }
        return this.routers[0];
    }
}
