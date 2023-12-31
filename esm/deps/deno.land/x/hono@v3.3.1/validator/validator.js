import * as dntShim from "../../../../../_dnt.shims.js";
import { parseBody } from '../utils/body.js';
export const validator = (target, validationFunc) => {
    return async (c, next) => {
        let value = {};
        switch (target) {
            case 'json':
                try {
                    value = await c.req.raw.clone().json();
                }
                catch {
                    console.error('Error: Malformed JSON in request body');
                    return c.json({
                        success: false,
                        message: 'Malformed JSON in request body',
                    }, 400);
                }
                break;
            case 'form':
                value = await parseBody(c.req.raw.clone());
                break;
            case 'query':
                value = Object.fromEntries(Object.entries(c.req.queries()).map(([k, v]) => {
                    return v.length === 1 ? [k, v[0]] : [k, v];
                }));
                break;
            case 'queries':
                value = c.req.queries();
                break;
            case 'param':
                value = c.req.param();
                break;
        }
        const res = validationFunc(value, c);
        if (res instanceof dntShim.Response || res instanceof Promise) {
            return res;
        }
        c.req.addValidatedData(target, res);
        await next();
    };
};
