import * as dntShim from "../../../../../../_dnt.shims.js";
import { NoConnectionDetails } from "../errors.js";
import { processUrl } from "./processUrl.js";
export class SurrealHTTP {
    url;
    authorization;
    namespace;
    database;
    fetch;
    constructor(url, { fetcher, } = {}) {
        this.fetch = fetcher ?? dntShim.fetch;
        this.url = processUrl(url, {
            ws: "http",
            wss: "https",
        });
    }
    ready() {
        return !!(this.url && this.namespace && this.database);
    }
    setTokenAuth(token) {
        this.authorization = `Bearer ${token}`;
    }
    createRootAuth(username, password) {
        this.authorization = `Basic ${btoa(`${username}:${password}`)}`;
    }
    clearAuth() {
        this.authorization = undefined;
    }
    use({ ns, db }) {
        if (ns)
            this.namespace = ns;
        if (db)
            this.database = db;
    }
    async request(path, options) {
        path = path.startsWith("/") ? path.slice(1) : path;
        if (!this.ready())
            throw new NoConnectionDetails();
        return (await this.fetch(`${this.url}/${path}`, {
            method: options?.method ?? "POST",
            headers: {
                "Content-Type": options?.plainBody
                    ? "text/plain"
                    : "application/json",
                "Accept": "application/json",
                "NS": this.namespace,
                "DB": this.database,
                ...(this.authorization
                    ? { "Authorization": this.authorization }
                    : {}),
            },
            body: typeof options?.body == "string"
                ? options?.body
                : JSON.stringify(options?.body),
        })).json();
    }
}
