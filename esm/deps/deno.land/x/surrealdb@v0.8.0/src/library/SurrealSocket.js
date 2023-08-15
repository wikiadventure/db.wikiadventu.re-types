import { WebsocketStatus, } from "../types.js";
import WebSocket from "./WebSocket/deno.js";
import { getIncrementalID } from "./getIncrementalID.js";
import { processUrl } from "./processUrl.js";
export class SurrealSocket {
    url;
    onOpen;
    onClose;
    ws;
    status = WebsocketStatus.CLOSED;
    queue = {};
    liveQueue = {};
    unprocessedLiveResponses = {};
    ready;
    resolveReady;
    closed;
    resolveClosed;
    socketClosureReason = {
        1000: "CLOSE_NORMAL",
    };
    constructor({ url, onOpen, onClose, }) {
        this.resolveReady = () => { }; // Purely for typescript typing :)
        this.ready = new Promise((r) => (this.resolveReady = r));
        this.resolveClosed = () => { }; // Purely for typescript typing :)
        this.closed = new Promise((r) => (this.resolveClosed = r));
        this.onOpen = onOpen;
        this.onClose = onClose;
        this.url = processUrl(url, {
            http: "ws",
            https: "wss",
        }) + "/rpc";
    }
    open() {
        // Close any possibly connected sockets, reset status;
        this.close(1000);
        this.resetReady();
        // Connect to Surreal instance
        this.ws = new WebSocket(this.url);
        this.ws.addEventListener("open", (_e) => {
            this.status = WebsocketStatus.OPEN;
            this.resolveReady();
            this.onOpen?.();
        });
        this.ws.addEventListener("close", (_e) => {
            this.resolveClosed();
            this.resetClosed();
            Object.values(this.liveQueue).map((query) => {
                query.map((cb) => cb({
                    action: "CLOSE",
                    detail: "SOCKET_CLOSED",
                }));
            });
            this.queue = {};
            this.liveQueue = {};
            this.unprocessedLiveResponses = {};
            // Connection retry mechanism
            if (this.status !== WebsocketStatus.CLOSED) {
                this.status = WebsocketStatus.RECONNECTING;
                setTimeout(() => {
                    this.open();
                }, 2500);
                this.onClose?.();
            }
        });
        this.ws.addEventListener("message", (e) => {
            const res = JSON.parse(e.data.toString());
            if ("method" in res && res.method === "notify") {
                this.handleLiveBatch(res.params);
            }
            else if (res.id && res.id in this.queue) {
                this.queue[res.id](res);
                delete this.queue[res.id];
            }
        });
    }
    // Extracting the pure object to prevent any getters/setters that could break stuff
    // Prevent user from overwriting ID that is being sent
    async send(method, params, callback) {
        await this.ready;
        const id = getIncrementalID();
        this.queue[id] = callback;
        this.ws?.send(JSON.stringify({ id, method, params }));
    }
    async listenLive(queryUuid, callback) {
        if (!(queryUuid in this.liveQueue))
            this.liveQueue[queryUuid] = [];
        this.liveQueue[queryUuid].push(callback);
        // Cleanup unprocessed messages queue
        await Promise.all(this.unprocessedLiveResponses[queryUuid]?.map(callback) ?? []);
        delete this.unprocessedLiveResponses[queryUuid];
    }
    async kill(queryUuid) {
        if (queryUuid in this.liveQueue) {
            this.liveQueue[queryUuid].forEach((cb) => cb({
                action: "CLOSE",
                detail: "QUERY_KILLED",
            }));
            delete this.liveQueue[queryUuid];
        }
        await new Promise((r) => {
            this.send("kill", [queryUuid], (_) => {
                if (queryUuid in this.unprocessedLiveResponses) {
                    delete this.unprocessedLiveResponses[queryUuid];
                }
                r();
            });
        });
    }
    async handleLiveBatch(messages) {
        await Promise.all(messages.map(async ({ query: queryUuid, ...message }) => {
            if (this.liveQueue[queryUuid]) {
                await Promise.all(this.liveQueue[queryUuid].map(async (cb) => await cb(message)));
            }
            else {
                if (!(queryUuid in this.unprocessedLiveResponses)) {
                    this.unprocessedLiveResponses[queryUuid] = [];
                }
                this.unprocessedLiveResponses[queryUuid].push(message);
            }
        }));
    }
    async close(reason) {
        this.status = WebsocketStatus.CLOSED;
        this.ws?.close(reason, this.socketClosureReason[reason]);
        this.onClose?.();
        await this.closed;
    }
    get connectionStatus() {
        return this.status;
    }
    resetReady() {
        this.ready = new Promise((r) => (this.resolveReady = r));
    }
    resetClosed() {
        this.closed = new Promise((r) => (this.resetClosed = r));
    }
}
