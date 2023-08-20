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
class TokenPagination {
    static getAttributeTypeMap() {
        return TokenPagination.attributeTypeMap;
    }
    constructor() {
        /**
        * Items per page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
        */
        Object.defineProperty(this, 'page_size', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
        */
        Object.defineProperty(this, 'page_token', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(TokenPagination, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(TokenPagination, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "page_size",
            "baseName": "page_size",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "page_token",
            "baseName": "page_token",
            "type": "string",
            "format": ""
        }
    ]
});
export { TokenPagination };
