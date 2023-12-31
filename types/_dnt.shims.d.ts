/// <reference types="node" />
import { Deno } from "@deno/shim-deno";
export { Deno } from "@deno/shim-deno";
export { crypto, type Crypto, type SubtleCrypto, type AlgorithmIdentifier, type Algorithm, type RsaOaepParams, type BufferSource, type AesCtrParams, type AesCbcParams, type AesGcmParams, type CryptoKey, type KeyAlgorithm, type KeyType, type KeyUsage, type EcdhKeyDeriveParams, type HkdfParams, type HashAlgorithmIdentifier, type Pbkdf2Params, type AesDerivedKeyParams, type HmacImportParams, type JsonWebKey, type RsaOtherPrimesInfo, type KeyFormat, type RsaHashedKeyGenParams, type RsaKeyGenParams, type BigInteger, type EcKeyGenParams, type NamedCurve, type CryptoKeyPair, type AesKeyGenParams, type HmacKeyGenParams, type RsaHashedImportParams, type EcKeyImportParams, type AesKeyAlgorithm, type RsaPssParams, type EcdsaParams } from "@deno/shim-crypto";
import { fetch, File, FormData, Headers, Request, Response } from "undici";
export { fetch, File, FormData, Headers, Request, Response, type BodyInit, type HeadersInit, type RequestInit, type ResponseInit } from "undici";
import { ReadableStream, TransformStream } from "stream/web";
export { ReadableStream, TransformStream } from "stream/web";
export declare const dntGlobalThis: Omit<typeof globalThis, "Deno" | "crypto" | "fetch" | "File" | "FormData" | "Headers" | "Request" | "Response" | "ReadableStream" | "TransformStream"> & {
    Deno: typeof Deno;
    crypto: import("@deno/shim-crypto").Crypto;
    fetch: typeof fetch;
    File: typeof File;
    FormData: typeof FormData;
    Headers: typeof Headers;
    Request: typeof Request;
    Response: typeof Response;
    ReadableStream: {
        new (underlyingSource: import("stream/web").UnderlyingByteSource, strategy?: import("stream/web").QueuingStrategy<Uint8Array> | undefined): ReadableStream<Uint8Array>;
        new <R = any>(underlyingSource?: import("stream/web").UnderlyingSource<R> | undefined, strategy?: import("stream/web").QueuingStrategy<R> | undefined): ReadableStream<R>;
        prototype: ReadableStream<any>;
    };
    TransformStream: {
        new <I = any, O = any>(transformer?: import("stream/web").Transformer<I, O> | undefined, writableStrategy?: import("stream/web").QueuingStrategy<I> | undefined, readableStrategy?: import("stream/web").QueuingStrategy<O> | undefined): TransformStream<I, O>;
        prototype: TransformStream<any, any>;
    };
};
