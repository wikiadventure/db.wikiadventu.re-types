/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.
 *
 * OpenAPI spec version: v1.1.39
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
* OAuth2 JWT Bearer Grant Type Issuer Trusted JSON Web Key
*/
class TrustedOAuth2JwtGrantJsonWebKey {
    static getAttributeTypeMap() {
        return TrustedOAuth2JwtGrantJsonWebKey.attributeTypeMap;
    }
    constructor() {
        /**
        * The \"key_id\" is key unique identifier (same as kid header in jws/jwt).
        */
        Object.defineProperty(this, 'kid', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * The \"set\" is basically a name for a group(set) of keys. Will be the same as \"issuer\" in grant.
        */
        Object.defineProperty(this, 'set', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(TrustedOAuth2JwtGrantJsonWebKey, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(TrustedOAuth2JwtGrantJsonWebKey, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "kid",
            "baseName": "kid",
            "type": "string",
            "format": ""
        },
        {
            "name": "set",
            "baseName": "set",
            "type": "string",
            "format": ""
        }
    ]
});
export { TrustedOAuth2JwtGrantJsonWebKey };
