import { HonoBase } from './hono-base.js';
import { RegExpRouter } from './router/reg-exp-router/index.js';
import { SmartRouter } from './router/smart-router/index.js';
import { TrieRouter } from './router/trie-router/index.js';
export class Hono extends HonoBase {
    constructor(init = {}) {
        super(init);
        this.router =
            init.router ??
                new SmartRouter({
                    routers: [new RegExpRouter(), new TrieRouter()],
                });
    }
}
