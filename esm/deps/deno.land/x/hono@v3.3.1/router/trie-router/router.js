import { checkOptionalParameter } from '../../utils/url.js';
import { Node } from './node.js';
export class TrieRouter {
    name = 'TrieRouter';
    node;
    constructor() {
        this.node = new Node();
    }
    add(method, path, handler) {
        const results = checkOptionalParameter(path);
        if (results) {
            for (const p of results) {
                this.node.insert(method, p, handler);
            }
            return;
        }
        this.node.insert(method, path, handler);
    }
    match(method, path) {
        return this.node.search(method, path);
    }
}
