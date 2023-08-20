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
class CreateProjectApiKeyRequest {
    static getAttributeTypeMap() {
        return CreateProjectApiKeyRequest.attributeTypeMap;
    }
    constructor() {
        /**
        * The Token Name  A descriptive name for the token.  in: body
        */
        Object.defineProperty(this, 'name', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(CreateProjectApiKeyRequest, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(CreateProjectApiKeyRequest, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ]
});
export { CreateProjectApiKeyRequest };
