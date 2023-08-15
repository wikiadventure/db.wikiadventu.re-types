import { FrontendApi } from "../deps/deno.land/x/sacramentix_ory_client@v.1.1.39/index.js";
import { createConfiguration } from "../deps/deno.land/x/sacramentix_ory_client@v.1.1.39/configuration.js";
import { env } from "../env/index.js";
import { ServerConfiguration } from "../deps/deno.land/x/sacramentix_ory_client@v.1.1.39/servers.js";
// export const oryConfig = createConfiguration({
//     // basePath: env.ORY_BASE_PATH,
//     authMethods: {
//         oryAccessToken: {
//             tokenProvider: {
//                 getToken: ()=>env.ORY_ACCESS_TOKEN
//             }
//         }
//     },
// });
// export const oryId = new IdentityApi(oryConfig);
export const ory = new FrontendApi(createConfiguration({
    baseServer: new ServerConfiguration(env.ORY_BASE_PATH, {})
}));
