import Surreal from "../deps/deno.land/x/surrealdb@v0.8.0/mod.js";
import { env } from "../env/index.js";
export const db = new Surreal(env.SURREAL_URL);
await db.signin({
    user: env.SURREAL_USER,
    pass: env.SURREAL_PASSWORD,
});
await db.use({
    ns: "account",
    db: "account"
});
