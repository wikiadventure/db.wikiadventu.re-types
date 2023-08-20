export class Observable {
    constructor(promise) {
        Object.defineProperty(this, "promise", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: promise
        });
    }
    toPromise() {
        return this.promise;
    }
    pipe(callback) {
        return new Observable(this.promise.then(callback));
    }
}
export function from(promise) {
    return new Observable(promise);
}
export function of(value) {
    return new Observable(Promise.resolve(value));
}
export function mergeMap(callback) {
    return (value) => callback(value).toPromise();
}
export function map(callback) {
    return callback;
}
