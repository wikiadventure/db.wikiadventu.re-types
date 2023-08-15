export const poweredBy = () => {
    return async (c, next) => {
        await next();
        c.res.headers.set('X-Powered-By', 'Hono');
    };
};
