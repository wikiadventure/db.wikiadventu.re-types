import "../_dnt.polyfills.js";
export declare const db_wikiadventu_re: {
    "get-account": {
        $get: (args?: {} | undefined, options?: import("../deps/deno.land/x/hono@v3.3.1/mod.js").ClientRequestOptions | undefined) => Promise<import("../deps/deno.land/x/hono@v3.3.1/client/types.js").ClientResponse<import("../surreal/query/getAccountOrCreate/index.js").Account>>;
    };
} & {
    "get-account": {
        "six-degree": {
            $get: (args?: {} | undefined, options?: import("../deps/deno.land/x/hono@v3.3.1/mod.js").ClientRequestOptions | undefined) => Promise<import("../deps/deno.land/x/hono@v3.3.1/client/types.js").ClientResponse<import("../surreal/query/getAccountOrCreate/six_degree.js").SixDegreeAccount>>;
        };
    };
} & {
    "get-account": {
        $post: (args?: {} | undefined, options?: import("../deps/deno.land/x/hono@v3.3.1/mod.js").ClientRequestOptions | undefined) => Promise<import("../deps/deno.land/x/hono@v3.3.1/client/types.js").ClientResponse<{}>>;
    };
} & {
    "get-account": {
        "six-degree": {
            $post: (args?: {} | undefined, options?: import("../deps/deno.land/x/hono@v3.3.1/mod.js").ClientRequestOptions | undefined) => Promise<import("../deps/deno.land/x/hono@v3.3.1/client/types.js").ClientResponse<{}>>;
        };
    };
};
