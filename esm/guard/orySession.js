import * as dntShim from "../_dnt.shims.js";
import { HTTPException } from "hono/http-exception";
import { getCookie } from "hono/cookie";
import { env } from "../env/index.js";
export async function guardOrySession(c) {
    const ory_session_cookie = Object.entries(getCookie(c) ?? {}).find(([k, v]) => k.startsWith("ory_session"));
    if (ory_session_cookie == null)
        throw new HTTPException(401, { message: "The user is not authenticated" });
    const ory_session = await dntShim.fetch(env.ORY_BASE_PATH + "/sessions/whoami", {
        headers: c.req.headers,
    })
        .then(r => r.json())
        .catch(e => { throw new HTTPException(401, { message: "Could not validate the ory session" }); });
    const user = {
        id: ory_session.identity.id,
        name: ory_session.identity.traits.username,
        email: ory_session.identity.traits.email
    };
    return { ory_session, user };
}
