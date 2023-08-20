import * as dntShim from "../../../../../../_dnt.shims.js";
import { HTTPException } from '../../http-exception.js';
import { timingSafeEqual } from '../../utils/buffer.js';
import { decodeBase64 } from '../../utils/encode.js';
const CREDENTIALS_REGEXP = /^ *(?:[Bb][Aa][Ss][Ii][Cc]) +([A-Za-z0-9._~+/-]+=*) *$/;
const USER_PASS_REGEXP = /^([^:]*):(.*)$/;
const utf8Decoder = new TextDecoder();
const auth = (req) => {
    const match = CREDENTIALS_REGEXP.exec(req.headers.get('Authorization') || '');
    if (!match) {
        return undefined;
    }
    let userPass = undefined;
    // If an invalid string is passed to atob(), it throws a `DOMException`.
    try {
        userPass = USER_PASS_REGEXP.exec(utf8Decoder.decode(decodeBase64(match[1])));
    }
    catch { } // Do nothing
    if (!userPass) {
        return undefined;
    }
    return { username: userPass[1], password: userPass[2] };
};
export const basicAuth = (options, ...users) => {
    if (!options) {
        throw new Error('basic auth middleware requires options for "username and password"');
    }
    if (!options.realm) {
        options.realm = 'Secure Area';
    }
    users.unshift({ username: options.username, password: options.password });
    return async (ctx, next) => {
        const requestUser = auth(ctx.req);
        if (requestUser) {
            for (const user of users) {
                const usernameEqual = await timingSafeEqual(user.username, requestUser.username, options.hashFunction);
                const passwordEqual = await timingSafeEqual(user.password, requestUser.password, options.hashFunction);
                if (usernameEqual && passwordEqual) {
                    await next();
                    return;
                }
            }
        }
        const res = new dntShim.Response('Unauthorized', {
            status: 401,
            headers: {
                'WWW-Authenticate': 'Basic realm="' + options.realm?.replace(/"/g, '\\"') + '"',
            },
        });
        throw new HTTPException(401, { res });
    };
};
