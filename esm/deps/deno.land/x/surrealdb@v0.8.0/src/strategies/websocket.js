import { NoActiveSocket, UnexpectedResponse } from "../errors.js";
import { Pinger } from "../library/Pinger.js";
import { SurrealSocket } from "../library/SurrealSocket.js";
export class WebSocketStrategy {
    socket;
    pinger;
    connection = {};
    ready;
    resolveReady;
    /**
     * Establish a socket connection to the database
     * @param connection - Connection details
     */
    constructor(url, options = {}) {
        this.resolveReady = () => { }; // Purely for typescript typing :)
        this.ready = new Promise((r) => (this.resolveReady = r));
        if (url)
            this.connect(url, options);
    }
    /**
     * Establish a socket connection to the database
     * @param connection - Connection details
     */
    connect(url, { prepare, auth, ns, db } = {}) {
        this.connection = {
            auth,
            ns,
            db,
        };
        this.socket?.close(1000);
        this.pinger = new Pinger(30000);
        this.socket = new SurrealSocket({
            url,
            onOpen: async () => {
                this.pinger?.start(() => this.ping());
                if (this.connection.ns && this.connection.db) {
                    await this.use({});
                }
                if (typeof this.connection.auth === "string") {
                    await this.authenticate(this.connection.auth);
                }
                else if (this.connection.auth) {
                    await this.signin(this.connection.auth);
                }
                await prepare?.(this);
                this.resolveReady();
            },
            onClose: () => {
                this.pinger?.stop();
                this.resetReady();
            },
        });
        this.socket.open();
    }
    /**
     * Disconnect the socket to the database
     */
    async close() {
        await this.socket?.close(1000);
        this.socket = undefined;
    }
    /**
     * Check if connection is ready
     */
    async wait() {
        if (!this.socket)
            throw new NoActiveSocket();
        await this.ready;
    }
    /**
     * Get status of the socket connection
     */
    get status() {
        if (!this.socket)
            throw new NoActiveSocket();
        return this.socket.connectionStatus;
    }
    /**
     * Ping SurrealDB instance
     */
    async ping() {
        const { error } = await this.send("ping");
        if (error)
            throw new Error(error.message);
    }
    /**
     * Switch to a specific namespace and database.
     * @param ns - Switches to a specific namespace.
     * @param db - Switches to a specific database.
     */
    async use({ ns, db }) {
        if (!ns && !this.connection.ns) {
            throw new Error("Please specify a namespace to use.");
        }
        if (!db && !this.connection.db) {
            throw new Error("Please specify a database to use.");
        }
        this.connection.ns = ns ?? this.connection.ns;
        this.connection.db = db ?? this.connection.db;
        const { error } = await this.send("use", [
            this.connection.ns,
            this.connection.db,
        ]);
        if (error)
            throw new Error(error.message);
    }
    /**
     * Retrieve info about the current Surreal instance
     * @return Returns nothing!
     */
    async info() {
        const res = await this.send("info");
        if (res.error)
            throw new Error(res.error.message);
    }
    /**
     * Signs up to a specific authentication scope.
     * @param vars - Variables used in a signup query.
     * @return The authentication token.
     */
    async signup(vars) {
        const res = await this.send("signup", [vars]);
        if (res.error)
            throw new Error(res.error.message);
        this.connection.auth = res.result;
        return res.result;
    }
    /**
     * Signs in to a specific authentication scope.
     * @param vars - Variables used in a signin query.
     * @return The authentication token.
     */
    async signin(vars) {
        const res = await this.send("signin", [vars]);
        if (res.error)
            throw new Error(res.error.message);
        this.connection.auth = res.result ?? vars;
        return res.result;
    }
    /**
     * Authenticates the current connection with a JWT token.
     * @param token - The JWT authentication token.
     */
    async authenticate(token) {
        const res = await this.send("authenticate", [token]);
        if (res.error)
            throw new Error(res.error.message);
        this.connection.auth = token;
    }
    /**
     * Invalidates the authentication for the current connection.
     */
    async invalidate() {
        const res = await this.send("invalidate");
        if (res.error)
            throw new Error(res.error.message);
        this.connection.auth = undefined;
    }
    /**
     * Specify a variable for the current socket connection.
     * @param key - Specifies the name of the variable.
     * @param val - Assigns the value to the variable name.
     */
    async let(variable, value) {
        const res = await this.send("let", [variable, value]);
        if (res.error)
            throw new Error(res.error.message);
    }
    /**
     * Remove a variable from the current socket connection.
     * @param key - Specifies the name of the variable.
     */
    async unset(variable) {
        const res = await this.send("unset", [variable]);
        if (res.error)
            throw new Error(res.error.message);
    }
    /**
     * Start a live query and listen for the responses
     * @param query - The query that you want to receive live results for.
     * @param callback - Callback function that receives updates.
     */
    async live(query, callback) {
        await this.ready;
        const res = await this.send("live", [query]);
        if (res.error)
            throw new Error(res.error.message);
        if (callback)
            this.listenLive(res.result, callback);
        return res.result;
    }
    /**
     * Listen for live query responses by it's uuid
     * @param queryUuid - The LQ uuid that you want to receive live results for.
     * @param callback - Callback function that receives updates.
     */
    async listenLive(queryUuid, callback) {
        await this.ready;
        if (!this.socket)
            throw new NoActiveSocket();
        this.socket.listenLive(queryUuid, callback);
    }
    /**
     * Kill a live query
     * @param uuid - The query that you want to kill.
     */
    async kill(queryUuid) {
        await this.ready;
        if (!this.socket)
            throw new NoActiveSocket();
        await this.socket.kill(queryUuid);
    }
    /**
     * Runs a set of SurrealQL statements against the database.
     * @param query - Specifies the SurrealQL statements.
     * @param vars - Assigns variables which can be used in the query.
     */
    async query(query, vars) {
        await this.ready;
        const res = await this.send("query", [query, vars]);
        if (res.error)
            throw new Error(res.error.message);
        return res.result;
    }
    /**
     * Selects all records in a table, or a specific record, from the database.
     * @param thing - The table name or a record ID to select.
     */
    async select(thing) {
        await this.ready;
        const res = await this.send("select", [thing]);
        return this.outputHandler(res);
    }
    /**
     * Creates a record in the database.
     * @param thing - The table name or the specific record ID to create.
     * @param data - The document / record data to insert.
     */
    async create(thing, data) {
        await this.ready;
        const res = await this.send("create", [
            thing,
            data,
        ]);
        return this.outputHandler(res);
    }
    /**
     * Updates all records in a table, or a specific record, in the database.
     *
     * ***NOTE: This function replaces the current document / record data with the specified data.***
     * @param thing - The table name or the specific record ID to update.
     * @param data - The document / record data to insert.
     */
    async update(thing, data) {
        await this.ready;
        const res = await this.send("update", [
            thing,
            data,
        ]);
        return this.outputHandler(res);
    }
    /**
     * Modifies all records in a table, or a specific record, in the database.
     *
     * ***NOTE: This function merges the current document / record data with the specified data.***
     * @param thing - The table name or the specific record ID to change.
     * @param data - The document / record data to insert.
     */
    async merge(thing, data) {
        await this.ready;
        const res = await this.send("merge", [
            thing,
            data,
        ]);
        return this.outputHandler(res);
    }
    /**
     * Applies JSON Patch changes to all records, or a specific record, in the database.
     *
     * ***NOTE: This function patches the current document / record data with the specified JSON Patch data.***
     * @param thing - The table name or the specific record ID to modify.
     * @param data - The JSON Patch data with which to modify the records.
     */
    async patch(thing, data) {
        await this.ready;
        const res = await this.send("patch", [thing, data]);
        return this.outputHandler(res);
    }
    /**
     * Deletes all records in a table, or a specific record, from the database.
     * @param thing - The table name or a record ID to select.
     */
    async delete(thing) {
        await this.ready;
        const res = await this.send("delete", [thing]);
        return this.outputHandler(res);
    }
    /**
     * Send a raw message to the SurrealDB instance
     * @param method - Type of message to send.
     * @param params - Parameters for the message.
     */
    send(method, params) {
        return new Promise((resolve) => {
            if (!this.socket)
                throw new NoActiveSocket();
            this.socket.send(method, params ?? [], (r) => resolve(r));
        });
    }
    /**
     * Process a response by the SurrealDB instance
     * @param res - The raw response
     * @param thing - What thing did you query (table vs record).
     */
    outputHandler(res) {
        if (res.error)
            throw new Error(res.error.message);
        if (Array.isArray(res.result)) {
            return res.result;
        }
        else if ("id" in (res.result ?? {})) {
            return [res.result];
        }
        else if (res.result === null) {
            return [];
        }
        console.debug({ res });
        throw new UnexpectedResponse();
    }
    /**
     * Reset the ready mechanism.
     */
    resetReady() {
        this.ready = new Promise((r) => (this.resolveReady = r));
    }
}
