/// <reference types="node" />
import * as dntShim from "../../../../../_dnt.shims.js";
type Algorithm = {
    name: string;
    alias: string;
};
type Data = string | boolean | number | object | ArrayBufferView | ArrayBuffer | dntShim.ReadableStream;
export declare const sha256: (data: Data) => Promise<string | null>;
export declare const sha1: (data: Data) => Promise<string | null>;
export declare const md5: (data: Data) => Promise<string | null>;
export declare const createHash: (data: Data, algorithm: Algorithm) => Promise<string | null>;
export {};
