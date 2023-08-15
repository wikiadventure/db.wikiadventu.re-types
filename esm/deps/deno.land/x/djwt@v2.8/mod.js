import { base64url } from "./deps.js";
import { create as createSignature, verify as verifySignature, } from "./signature.js";
import { verify as verifyAlgorithm } from "./algorithm.js";
import { decoder, encoder, isArray, isDefined, isNotNumber, isNotString, isNumber, isObject, isString, isUndefined, } from "./util.js";
function isExpired(exp, leeway) {
    return exp + leeway < Date.now() / 1000;
}
function isTooEarly(nbf, leeway) {
    return nbf - leeway > Date.now() / 1000;
}
function is3Tuple(arr) {
    return arr.length === 3;
}
function hasInvalidTimingClaims(...claimValues) {
    return claimValues.some((claimValue) => isDefined(claimValue) && isNotNumber(claimValue));
}
function validateTimingClaims(payload, { expLeeway = 1, nbfLeeway = 1 } = {}) {
    if (hasInvalidTimingClaims(payload.exp, payload.nbf)) {
        throw new Error(`The jwt has an invalid 'exp' or 'nbf' claim.`);
    }
    if (isNumber(payload.exp) && isExpired(payload.exp, expLeeway)) {
        throw RangeError("The jwt is expired.");
    }
    if (isNumber(payload.nbf) && isTooEarly(payload.nbf, nbfLeeway)) {
        throw RangeError("The jwt is used too early.");
    }
}
function hasValidAudClaim(claimValue) {
    if (isUndefined(claimValue) || isString(claimValue))
        return true;
    else
        return isArray(claimValue) && claimValue.every(isString);
}
function validateAudClaim(aud, audience) {
    if (hasValidAudClaim(aud)) {
        if (isUndefined(aud)) {
            throw new Error("The jwt has no 'aud' claim.");
        }
        const audArray = isString(aud) ? [aud] : aud;
        const audienceArrayOrRegex = isString(audience) ? [audience] : audience;
        if (!audArray.some((audString) => isArray(audienceArrayOrRegex)
            ? audienceArrayOrRegex.includes(audString)
            : audienceArrayOrRegex.test(audString))) {
            throw new Error("The identification with the value in the 'aud' claim has failed.");
        }
    }
    else {
        throw new Error(`The jwt has an invalid 'aud' claim.`);
    }
}
/**
 * Takes a `jwt` and returns a 3-tuple `[unknown, unknown, Uint8Array]` if the
 * jwt has a valid _serialization_. Otherwise it throws an `Error`. This function
 * does **not** verify the digital signature.
 */
export function decode(jwt) {
    try {
        const arr = jwt
            .split(".")
            .map(base64url.decode)
            .map((uint8Array, index) => index === 0 || index === 1
            ? JSON.parse(decoder.decode(uint8Array))
            : uint8Array);
        if (is3Tuple(arr))
            return arr;
        else
            throw new Error();
    }
    catch {
        throw Error("The serialization of the jwt is invalid.");
    }
}
/** It does **not** verify the digital signature. */
export function validate(
// deno-lint-ignore no-explicit-any
[header, payload, signature], options) {
    if (isNotString(header?.alg)) {
        throw new Error(`The jwt's 'alg' header parameter value must be a string.`);
    }
    /*
     * JWT §7.2: Verify that the resulting octet sequence is a UTF-8-encoded
     * representation of a completely valid JSON object conforming to RFC 7159;
     * let the JWT Claims Set be this JSON object.
     */
    if (isObject(payload)) {
        validateTimingClaims(payload, options);
        if (isDefined(options?.audience)) {
            validateAudClaim(payload.aud, options.audience);
        }
        return {
            header,
            payload,
            signature,
        };
    }
    else {
        throw new Error(`The jwt claims set is not a JSON object.`);
    }
}
/**
 * Takes jwt, `CryptoKey` and `VerifyOptions` and returns the `Payload` of the
 * jwt if the jwt is valid. Otherwise it throws an `Error`.
 */
export async function verify(jwt, key, options) {
    const { header, payload, signature } = validate(decode(jwt), options);
    if (verifyAlgorithm(header.alg, key)) {
        if (!(await verifySignature(signature, key, header.alg, jwt.slice(0, jwt.lastIndexOf("."))))) {
            throw new Error("The jwt's signature does not match the verification signature.");
        }
        return payload;
    }
    else {
        throw new Error(`The jwt's alg '${header.alg}' does not match the key's algorithm.`);
    }
}
/**
 * JWT §3: JWTs represent a set of claims as a JSON object that is encoded in
 * a JWS and/or JWE structure. This JSON object is the JWT Claims Set.
 * JSW §7.1: The JWS Compact Serialization represents digitally signed or MACed
 * content as a compact, URL-safe string. This string is:
 *       BASE64URL(UTF8(JWS Protected Header)) || '.' ||
 *       BASE64URL(JWS Payload) || '.' ||
 *       BASE64URL(JWS Signature)
 */
function createSigningInput(header, payload) {
    return `${base64url.encode(encoder.encode(JSON.stringify(header)))}.${base64url.encode(encoder.encode(JSON.stringify(payload)))}`;
}
/**
 * Takes `Header`, `Payload` and `CryptoKey` and returns the url-safe encoded
 * jwt.
 */
export async function create(header, payload, key) {
    if (verifyAlgorithm(header.alg, key)) {
        const signingInput = createSigningInput(header, payload);
        const signature = await createSignature(header.alg, key, signingInput);
        return `${signingInput}.${signature}`;
    }
    else {
        throw new Error(`The jwt's alg '${header.alg}' does not match the key's algorithm.`);
    }
}
/**
 * This helper function simplifies setting a `NumericDate`. It takes either a
 * `Date` object or a `number` (in seconds) and returns the `number` of seconds
 * from 1970-01-01T00:00:00Z UTC until the specified UTC date/time.
 */
export function getNumericDate(exp) {
    return Math.round((exp instanceof Date ? exp.getTime() : Date.now() + exp * 1000) / 1000);
}
