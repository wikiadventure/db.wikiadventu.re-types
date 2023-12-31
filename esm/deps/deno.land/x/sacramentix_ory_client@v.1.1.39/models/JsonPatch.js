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
* A JSONPatch document as defined by RFC 6902
*/
class JsonPatch {
    static getAttributeTypeMap() {
        return JsonPatch.attributeTypeMap;
    }
    constructor() {
        /**
        * This field is used together with operation \"move\" and uses JSON Pointer notation.  Learn more [about JSON Pointers](https://datatracker.ietf.org/doc/html/rfc6901#section-5).
        */
        Object.defineProperty(this, '_from', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * The operation to be performed. One of \"add\", \"remove\", \"replace\", \"move\", \"copy\", or \"test\".
        */
        Object.defineProperty(this, 'op', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * The path to the target path. Uses JSON pointer notation.  Learn more [about JSON Pointers](https://datatracker.ietf.org/doc/html/rfc6901#section-5).
        */
        Object.defineProperty(this, 'path', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * The value to be used within the operations.  Learn more [about JSON Pointers](https://datatracker.ietf.org/doc/html/rfc6901#section-5).
        */
        Object.defineProperty(this, 'value', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(JsonPatch, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(JsonPatch, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "_from",
            "baseName": "from",
            "type": "string",
            "format": ""
        },
        {
            "name": "op",
            "baseName": "op",
            "type": "JsonPatchOpEnum",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "any",
            "format": ""
        }
    ]
});
export { JsonPatch };
