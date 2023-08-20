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
class GetVersion200Response {
    static getAttributeTypeMap() {
        return GetVersion200Response.attributeTypeMap;
    }
    constructor() {
        /**
        * The version of Ory Kratos.
        */
        Object.defineProperty(this, 'version', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(GetVersion200Response, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(GetVersion200Response, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        }
    ]
});
export { GetVersion200Response };
