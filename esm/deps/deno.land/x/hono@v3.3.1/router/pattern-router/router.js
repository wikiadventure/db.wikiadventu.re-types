import { METHOD_NAME_ALL } from '../../router.js';
export class PatternRouter {
    constructor() {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PatternRouter'
        });
        Object.defineProperty(this, "routes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "dNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        }); // Short name of duplicatedNames
    }
    add(method, path, handler) {
        const endsWithWildcard = path[path.length - 1] === '*';
        if (endsWithWildcard) {
            path = path.slice(0, -2);
        }
        const parts = path.match(/\/?(:\w+(?:{[^}]+})?)|\/?[^\/\?]+|(\?)/g) || [];
        if (parts[parts.length - 1] === '?') {
            this.add(method, parts.slice(0, parts.length - 2).join(''), handler);
            parts.pop();
        }
        for (let i = 0, len = parts.length; i < len; i++) {
            // Check duplicated names
            const match = parts[i].match(/^\/:([^{]+)(?:{(.*)})?/);
            if (match) {
                const label = match[1];
                const pos = this.dNames[label];
                if (typeof pos === 'number' && pos !== i) {
                    throw new Error(`Duplicate param name, use another name instead of '${label}' - ${method} ${path} <--- '${label}'`);
                }
                this.dNames[label] = i;
                parts[i] = `/(?<${label}>${match[2] || '[^/]+'})`;
            }
            else if (parts[i] === '/*') {
                parts[i] = '/[^/]+';
            }
        }
        this.routes.push([
            new RegExp(`^${parts.join('')}${endsWithWildcard ? '' : '/?$'}`),
            method,
            handler,
        ]);
    }
    match(method, path) {
        const handlers = [];
        const params = {};
        for (const [pattern, routeMethod, handler] of this.routes) {
            const isRegExp = pattern.source.charCodeAt(pattern.source.length - 1) === 36;
            if (routeMethod === METHOD_NAME_ALL || routeMethod === method) {
                const match = pattern.exec(path);
                if (match) {
                    handlers.push(handler);
                    if (isRegExp) {
                        Object.assign(params, match.groups);
                    }
                }
            }
        }
        return handlers.length
            ? {
                handlers,
                params,
            }
            : null;
    }
}
