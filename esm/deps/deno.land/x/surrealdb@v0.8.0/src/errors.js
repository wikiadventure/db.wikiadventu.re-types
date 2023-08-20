export class NoActiveSocket extends Error {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "NoActiveSocket"
        });
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "No socket is currently connected to a SurrealDB instance. Please call the .connect() method first!"
        });
    }
}
export class NoConnectionDetails extends Error {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "NoConnectionDetails"
        });
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "No connection details for the HTTP api have been provided. Please call the .connect() method first!"
        });
    }
}
export class UnexpectedResponse extends Error {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "UnexpectedResponse"
        });
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "The returned response from the SurrealDB instance is in an unexpected format. Unable to process response!"
        });
    }
}
export class InvalidURLProvided extends Error {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "InvalidURLProvided"
        });
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "The provided string is either not a URL or is a URL but with an invalid protocol!"
        });
    }
}
