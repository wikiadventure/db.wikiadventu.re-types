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
class UiNodeAnchorAttributes {
    /**
    * The link\'s href (destination) URL.  format: uri
    */
    'href';
    /**
    * A unique identifier
    */
    'id';
    /**
    * NodeType represents this node\'s types. It is a mirror of `node.type` and is primarily used to allow compatibility with OpenAPI 3.0.  In this struct it technically always is \"a\".
    */
    'node_type';
    'title';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "node_type",
            "baseName": "node_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "UiText",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return UiNodeAnchorAttributes.attributeTypeMap;
    }
    constructor() {
    }
}
export { UiNodeAnchorAttributes };
