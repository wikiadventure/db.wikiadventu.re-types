import type { MiddlewareHandler } from '../../types.js';
type EncodingType = 'gzip' | 'deflate';
interface CompressionOptions {
    encoding?: EncodingType;
}
export declare const compress: (options?: CompressionOptions) => MiddlewareHandler;
export {};
