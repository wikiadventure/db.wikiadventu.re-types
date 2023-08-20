import { NoConnectionDetails } from "../errors.js";
import { SurrealHTTP } from "../library/SurrealHTTP.js";
export class HTTPStrategy {
    /**
     * Establish a socket connection to the database
     * @param connection - Connection details
     */
    constructor(url, options = {}) {
        Object.defineProperty(this, "http", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ready", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "resolveReady", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.resolveReady = () => { }; // Purely for typescript typing :)
        this.ready = new Promise((r) => (this.resolveReady = r));
        if (url)
            this.connect(url, options);
    }
    /**
     * Establish a socket connection to the database
     * @param connection - Connection details
     */
    async connect(url, { fetch: fetcher, prepare, auth, ns, db } = {}) {
        this.http = new SurrealHTTP(url, { fetcher });
        await this.use({ ns, db });
        if (typeof auth === "string") {
            await this.authenticate(auth);
        }
        else if (auth) {
            await this.signin(auth);
        }
        await prepare?.(this);
        this.resolveReady();
        await this.ready;
    }
    /**
     * Disconnect the socket to the database
     */
    close() {
        this.http = undefined;
        this.resetReady();
    }
    /**
     * Check if connection is ready
     */
    wait() {
        if (!this.http)
            throw new NoConnectionDetails();
        return this.ready;
    }
    /**
     * Get status of the socket connection
     */
    get status() {
        return this.request("/status");
    }
    /**
     * Ping SurrealDB instance
     */
    async ping() {
        await this.request("/health");
    }
    /**
     * Switch to a specific namespace and database.
     * @param ns - Switches to a specific namespace.
     * @param db - Switches to a specific database.
     */
    use({ ns, db }) {
        if (!this.http)
            throw new NoConnectionDetails();
        return this.http.use({ ns, db });
    }
    /**
     * Signs up to a specific authentication scope.
     * @param vars - Variables used in a signup query.
     * @return The authentication token.
     */
    async signup(vars) {
        const res = await this.request("/signup", {
            method: "POST",
            body: vars,
        });
        if (res.description)
            throw new Error(res.description);
        if (!res.token)
            throw new Error("Did not receive authentication token");
        this.http?.setTokenAuth(res.token);
        return res.token;
    }
    /**
     * Signs in to a specific authentication scope.
     * @param vars - Variables used in a signin query.
     * @return The authentication token, unless signed in as root.
     */
    async signin(vars) {
        const res = await this.request("/signin", {
            method: "POST",
            body: vars,
        });
        if (res.description)
            throw new Error(res.description);
        if (!res.token) {
            this.http?.createRootAuth(vars.user, vars.pass);
        }
        else {
            this.http?.setTokenAuth(res.token);
            return res.token;
        }
    }
    /**
     * Authenticates the current connection with a JWT token.
     * @param token - The JWT authentication token.
     */
    authenticate(token) {
        this.http?.setTokenAuth(token);
    }
    /**
     * Invalidates the authentication for the current connection.
     */
    invalidate() {
        this.http?.clearAuth();
    }
    /**
     * Runs a set of SurrealQL statements against the database.
     * @param query - Specifies the SurrealQL statements.
     * @param vars - Assigns variables which can be used in the query.
     */
    async query(query) {
        await this.ready;
        const res = await this.request("/sql", {
            body: query,
            plainBody: true,
            method: "POST",
        });
        if ("information" in res)
            throw new Error(res.information);
        return res;
    }
    get request() {
        if (!this.http)
            throw new NoConnectionDetails();
        return this.http.request;
    }
    /**
     * Reset the ready mechanism.
     */
    resetReady() {
        this.ready = new Promise((r) => (this.resolveReady = r));
    }
}
