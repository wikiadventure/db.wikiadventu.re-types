import * as dntShim from "../../../../../../_dnt.shims.js";
export const compress = (options) => {
    return async (ctx, next) => {
        await next();
        const accepted = ctx.req.headers.get('Accept-Encoding');
        const pattern = options?.encoding ?? /gzip|deflate/;
        const match = accepted?.match(pattern);
        if (!accepted || !match || !ctx.res.body) {
            return;
        }
        const encoding = match[0];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const stream = new CompressionStream(encoding);
        ctx.res = new dntShim.Response(ctx.res.body.pipeThrough(stream), ctx.res);
        ctx.res.headers.set('Content-Encoding', encoding);
    };
};
