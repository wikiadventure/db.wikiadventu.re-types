import * as dntShim from "../../../../_dnt.shims.js";
import { getAlgorithm } from "./algorithm.js";
import { base64url } from "./deps.js";
import { encoder, isNull } from "./util.js";
export async function verify(signature, key, alg, signingInput) {
    return isNull(key) ? signature.length === 0 : await dntShim.crypto.subtle.verify(getAlgorithm(alg), key, signature, encoder.encode(signingInput));
}
export async function create(alg, key, signingInput) {
    return isNull(key) ? "" : base64url.encode(new Uint8Array(await dntShim.crypto.subtle.sign(getAlgorithm(alg), key, encoder.encode(signingInput))));
}
