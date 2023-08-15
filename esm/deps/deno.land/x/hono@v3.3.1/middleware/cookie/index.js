import { parse, serialize } from '../../utils/cookie.js';
export const getCookie = (c, key) => {
    const cookie = c.req.raw.headers.get('Cookie');
    if (typeof key === 'string') {
        if (!cookie)
            return undefined;
        const obj = parse(cookie);
        return obj[key];
    }
    if (!cookie)
        return {};
    const obj = parse(cookie);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return obj;
};
export const setCookie = (c, name, value, opt) => {
    const cookie = serialize(name, value, opt);
    c.header('set-cookie', cookie, { append: true });
};
export const deleteCookie = (c, name, opt) => {
    setCookie(c, name, '', { ...opt, maxAge: 0 });
};
