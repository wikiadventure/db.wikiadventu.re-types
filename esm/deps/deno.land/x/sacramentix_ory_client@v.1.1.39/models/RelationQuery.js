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
* Relation Query
*/
class RelationQuery {
    static getAttributeTypeMap() {
        return RelationQuery.attributeTypeMap;
    }
    constructor() {
        /**
        * Namespace to query
        */
        Object.defineProperty(this, 'namespace', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Object to query
        */
        Object.defineProperty(this, 'object', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Relation to query
        */
        Object.defineProperty(this, 'relation', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * SubjectID to query  Either SubjectSet or SubjectID can be provided.
        */
        Object.defineProperty(this, 'subject_id', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'subject_set', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(RelationQuery, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(RelationQuery, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string",
            "format": ""
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "relation",
            "baseName": "relation",
            "type": "string",
            "format": ""
        },
        {
            "name": "subject_id",
            "baseName": "subject_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "subject_set",
            "baseName": "subject_set",
            "type": "SubjectSet",
            "format": ""
        }
    ]
});
export { RelationQuery };
