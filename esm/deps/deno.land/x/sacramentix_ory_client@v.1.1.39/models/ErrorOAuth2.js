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
* Error
*/
class ErrorOAuth2 {
    static getAttributeTypeMap() {
        return ErrorOAuth2.attributeTypeMap;
    }
    constructor() {
        /**
        * Error
        */
        Object.defineProperty(this, 'error', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Error Debug Information  Only available in dev mode.
        */
        Object.defineProperty(this, 'error_debug', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Error Description
        */
        Object.defineProperty(this, 'error_description', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Error Hint  Helps the user identify the error cause.
        */
        Object.defineProperty(this, 'error_hint', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * HTTP Status Code
        */
        Object.defineProperty(this, 'status_code', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(ErrorOAuth2, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(ErrorOAuth2, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        },
        {
            "name": "error_debug",
            "baseName": "error_debug",
            "type": "string",
            "format": ""
        },
        {
            "name": "error_description",
            "baseName": "error_description",
            "type": "string",
            "format": ""
        },
        {
            "name": "error_hint",
            "baseName": "error_hint",
            "type": "string",
            "format": ""
        },
        {
            "name": "status_code",
            "baseName": "status_code",
            "type": "number",
            "format": "int64"
        }
    ]
});
export { ErrorOAuth2 };
