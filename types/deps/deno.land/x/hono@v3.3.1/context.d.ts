/// <reference types="node" />
import * as dntShim from "../../../../_dnt.shims.js";
import { HonoRequest } from './request.js';
import { FetchEventLike } from './types.js';
import type { Env, NotFoundHandler, Input, TypedResponse } from './types.js';
import type { CookieOptions } from './utils/cookie.js';
import type { StatusCode } from './utils/http-status.js';
import type { JSONValue, InterfaceToType } from './utils/types.js';
type Runtime = 'node' | 'deno' | 'bun' | 'workerd' | 'fastly' | 'edge-light' | 'lagon' | 'other';
type HeaderRecord = Record<string, string | string[]>;
type Data = string | ArrayBuffer | dntShim.ReadableStream;
export interface ExecutionContext {
    waitUntil(promise: Promise<unknown>): void;
    passThroughOnException(): void;
}
export interface ContextVariableMap {
}
interface Get<E extends Env> {
    <Key extends keyof ContextVariableMap>(key: Key): ContextVariableMap[Key];
    <Key extends keyof E['Variables']>(key: Key): E['Variables'][Key];
}
interface Set<E extends Env> {
    <Key extends keyof ContextVariableMap>(key: Key, value: ContextVariableMap[Key]): void;
    <Key extends keyof E['Variables']>(key: Key, value: E['Variables'][Key]): void;
}
interface NewResponse {
    (data: Data | null, status?: StatusCode, headers?: HeaderRecord): dntShim.Response;
    (data: Data | null, init?: dntShim.ResponseInit): dntShim.Response;
}
interface BodyRespond extends NewResponse {
}
interface TextRespond {
    (text: string, status?: StatusCode, headers?: HeaderRecord): dntShim.Response;
    (text: string, init?: dntShim.ResponseInit): dntShim.Response;
}
interface JSONRespond {
    <T = JSONValue>(object: T, status?: StatusCode, headers?: HeaderRecord): dntShim.Response;
    <T = JSONValue>(object: T, init?: dntShim.ResponseInit): dntShim.Response;
}
interface JSONTRespond {
    <T>(object: InterfaceToType<T> extends JSONValue ? T : JSONValue, status?: StatusCode, headers?: HeaderRecord): TypedResponse<InterfaceToType<T> extends JSONValue ? JSONValue extends InterfaceToType<T> ? never : T : never>;
    <T>(object: InterfaceToType<T> extends JSONValue ? T : JSONValue, init?: dntShim.ResponseInit): TypedResponse<InterfaceToType<T> extends JSONValue ? JSONValue extends InterfaceToType<T> ? never : T : never>;
}
interface HTMLRespond {
    (html: string, status?: StatusCode, headers?: HeaderRecord): dntShim.Response;
    (html: string, init?: dntShim.ResponseInit): dntShim.Response;
}
type ContextOptions<E extends Env> = {
    env: E['Bindings'];
    executionCtx?: FetchEventLike | ExecutionContext | undefined;
    notFoundHandler?: NotFoundHandler<E>;
    path?: string;
    params?: Record<string, string>;
};
export declare class Context<E extends Env = any, P extends string = any, I extends Input = {}> {
    env: E['Bindings'];
    finalized: boolean;
    error: Error | undefined;
    private _req?;
    private _status;
    private _exCtx;
    private _pre;
    private _preS;
    private _map;
    private _h;
    private _pH;
    private _res;
    private _path;
    private _params?;
    private rawRequest?;
    private notFoundHandler;
    constructor(req: dntShim.Request, options?: ContextOptions<E>);
    get req(): HonoRequest<P, I['out']>;
    get event(): FetchEventLike;
    get executionCtx(): ExecutionContext;
    get res(): dntShim.Response;
    set res(_res: dntShim.Response | undefined);
    header: (name: string, value: string | undefined, options?: {
        append?: boolean;
    }) => void;
    status: (status: StatusCode) => void;
    set: Set<E>;
    get: Get<E>;
    pretty: (prettyJSON: boolean, space?: number) => void;
    newResponse: NewResponse;
    body: BodyRespond;
    text: TextRespond;
    json: JSONRespond;
    jsonT: JSONTRespond;
    html: HTMLRespond;
    redirect: (location: string, status?: StatusCode) => dntShim.Response;
    /** @deprecated
     * Use Cookie Middleware instead of `c.cookie()`. The `c.cookie()` will be removed in v4.
     *
     * @example
     *
     * import { setCookie } from 'hono/cookie'
     * // ...
     * app.get('/', (c) => {
     *   setCookie(c, 'key', 'value')
     *   //...
     * })
     */
    cookie: (name: string, value: string, opt?: CookieOptions) => void;
    notFound: () => dntShim.Response | Promise<dntShim.Response>;
    get runtime(): Runtime;
}
export {};
