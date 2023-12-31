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
class IsReady200Response {
    static getAttributeTypeMap() {
        return IsReady200Response.attributeTypeMap;
    }
    constructor() {
        /**
        * Always \"ok\".
        */
        Object.defineProperty(this, 'status', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(IsReady200Response, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(IsReady200Response, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        }
    ]
});
export { IsReady200Response };
