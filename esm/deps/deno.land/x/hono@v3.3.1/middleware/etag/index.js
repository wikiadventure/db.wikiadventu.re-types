import * as dntShim from "../../../../../../_dnt.shims.js";
import { sha1 } from '../../utils/crypto.js';
/**
 * Default headers to pass through on 304 responses. From the spec:
 * > The response must not contain a body and must include the headers that
 * > would have been sent in an equivalent 200 OK response: Cache-Control,
 * > Content-Location, Date, ETag, Expires, and Vary.
 */
const RETAINED_304_HEADERS = [
    'cache-control', 'content-location', 'date', 'etag', 'expires', 'vary'
];
function etagMatches(etag, ifNoneMatch) {
    return ifNoneMatch != null && ifNoneMatch.split(/,\s*/).indexOf(etag) > -1;
}
export const etag = (options) => {
    const retainedHeaders = options?.retainedHeaders ?? RETAINED_304_HEADERS;
    const weak = options?.weak ?? false;
    return async (c, next) => {
        const ifNoneMatch = c.req.headers.get('If-None-Match');
        await next();
        const res = c.res;
        let undisturbedRes = res;
        let etag = res.headers.get('ETag');
        if (!etag) {
            undisturbedRes = res.clone();
            const hash = await sha1(res.body || '');
            etag = weak ? `W/"${hash}"` : `"${hash}"`;
        }
        if (etagMatches(etag, ifNoneMatch)) {
            await undisturbedRes.blob(); // Force using body
            c.res = new dntShim.Response(null, {
                status: 304,
                statusText: 'Not Modified',
                headers: {
                    ETag: etag,
                },
            });
            c.res.headers.forEach((_, key) => {
                if (retainedHeaders.indexOf(key.toLowerCase()) === -1) {
                    c.res.headers.delete(key);
                }
            });
        }
        else {
            c.res = new dntShim.Response(undisturbedRes.body, undisturbedRes);
            c.res.headers.set('ETag', etag);
        }
    };
};
