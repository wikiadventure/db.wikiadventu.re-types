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
* Create Identity and Import Credentials
*/
class IdentityWithCredentials {
    static getAttributeTypeMap() {
        return IdentityWithCredentials.attributeTypeMap;
    }
    constructor() {
        Object.defineProperty(this, 'oidc', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'password', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(IdentityWithCredentials, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(IdentityWithCredentials, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "oidc",
            "baseName": "oidc",
            "type": "IdentityWithCredentialsOidc",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "IdentityWithCredentialsPassword",
            "format": ""
        }
    ]
});
export { IdentityWithCredentials };
