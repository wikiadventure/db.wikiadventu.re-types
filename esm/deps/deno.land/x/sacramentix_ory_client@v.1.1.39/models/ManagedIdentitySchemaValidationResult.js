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
* Ory Identity Schema Validation Result
*/
class ManagedIdentitySchemaValidationResult {
    static getAttributeTypeMap() {
        return ManagedIdentitySchemaValidationResult.attributeTypeMap;
    }
    constructor() {
        Object.defineProperty(this, 'message', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'valid', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(ManagedIdentitySchemaValidationResult, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(ManagedIdentitySchemaValidationResult, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "valid",
            "baseName": "valid",
            "type": "boolean",
            "format": ""
        }
    ]
});
export { ManagedIdentitySchemaValidationResult };
