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
* Relationship
*/
class Relationship {
    /**
    * Namespace of the Relation Tuple
    */
    'namespace';
    /**
    * Object of the Relation Tuple
    */
    'object';
    /**
    * Relation of the Relation Tuple
    */
    'relation';
    /**
    * SubjectID of the Relation Tuple  Either SubjectSet or SubjectID can be provided.
    */
    'subject_id';
    'subject_set';
    static discriminator = undefined;
    static attributeTypeMap = [
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
    ];
    static getAttributeTypeMap() {
        return Relationship.attributeTypeMap;
    }
    constructor() {
    }
}
export { Relationship };