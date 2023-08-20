import { Hono } from "./deps/deno.land/x/hono@v3.3.1/mod.js";
import { cors } from "./deps/deno.land/x/hono@v3.3.1/middleware.js";
import { z } from "./deps/deno.land/x/zod@v3.21.4/mod.js";
import { zValidator } from "@hono/zod-validator";
import { serve } from "./deps/deno.land/std@0.182.0/http/server.js";
import { getAccount } from "./surreal/query/getAccountOrCreate/index.js";
import { getSixDegreeAccount, six_degree_achivements_id } from "./surreal/query/getAccountOrCreate/six_degree.js";
import { achieve } from "./surreal/query/achieve.js";
import { guardOrySession } from "./guard/orySession.js";
import { getLangFromHeaders } from "./utils/lang.js";
const app = new Hono();
app.use("/*", cors({
    origin: (origin) => origin,
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
    allowHeaders: ["cookie"],
    credentials: true
}));
const route = app
    .get('/get-account', async (c) => {
    const { user } = await guardOrySession(c);
    return c.jsonT(await getAccount(user));
})
    .get('/get-account/six-degree', async (c) => {
    const { user } = await guardOrySession(c);
    return c.jsonT(await getSixDegreeAccount(user, getLangFromHeaders(c.req)));
})
    .post("/achieve/:achievement", zValidator('param', z.object({
    achievement: z.enum(six_degree_achivements_id)
})), async (c) => {
    const { achievement } = await c.req.param();
    const { user } = await guardOrySession(c);
    return c.jsonT(await achieve(user, achievement));
});
const port = 9009;
serve(app.fetch, { port: port });
