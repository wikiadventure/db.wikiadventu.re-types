import * as dntShim from "../../../../../../_dnt.shims.js";
export const cache = (options) => {
    if (options.wait === undefined) {
        options.wait = false;
    }
    const addHeader = (response) => {
        if (options.cacheControl)
            response.headers.set('Cache-Control', options.cacheControl);
    };
    return async (c, next) => {
        const key = c.req.url;
        const cache = await caches.open(options.cacheName);
        const response = await cache.match(key);
        if (!response) {
            await next();
            if (!c.res.ok) {
                return;
            }
            addHeader(c.res);
            const response = c.res.clone();
            if (options.wait) {
                await cache.put(key, response);
            }
            else {
                c.executionCtx.waitUntil(cache.put(key, response));
            }
        }
        else {
            return new dntShim.Response(response.body, response);
        }
    };
};
