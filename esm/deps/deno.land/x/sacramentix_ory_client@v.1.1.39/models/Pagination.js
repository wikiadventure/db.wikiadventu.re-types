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
class Pagination {
    static getAttributeTypeMap() {
        return Pagination.attributeTypeMap;
    }
    constructor() {
        /**
        * Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
        */
        Object.defineProperty(this, 'page', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
        /**
        * Items per Page  This is the number of items per page.
        */
        Object.defineProperty(this, 'per_page', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(Pagination, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(Pagination, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "page",
            "baseName": "page",
            "type": "number",
            "format": "int64"
        },
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
        },
        {
            "name": "per_page",
            "baseName": "per_page",
            "type": "number",
            "format": "int64"
        }
    ]
});
export { Pagination };
