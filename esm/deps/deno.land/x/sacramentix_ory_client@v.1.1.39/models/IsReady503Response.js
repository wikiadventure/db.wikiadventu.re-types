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
class IsReady503Response {
    static getAttributeTypeMap() {
        return IsReady503Response.attributeTypeMap;
    }
    constructor() {
        /**
        * Errors contains a list of errors that caused the not ready status.
        */
        Object.defineProperty(this, 'errors', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(IsReady503Response, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(IsReady503Response, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "{ [key: string]: string; }",
            "format": ""
        }
    ]
});
export { IsReady503Response };
