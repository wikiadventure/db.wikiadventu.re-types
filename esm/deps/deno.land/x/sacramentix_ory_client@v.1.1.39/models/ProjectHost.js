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
class ProjectHost {
    /**
    * The project\'s host.
    */
    'host';
    /**
    * The mapping\'s ID.
    */
    'id';
    /**
    * The Revision\'s Project ID
    */
    'project_id';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "host",
            "baseName": "host",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "project_id",
            "baseName": "project_id",
            "type": "string",
            "format": "uuid"
        }
    ];
    static getAttributeTypeMap() {
        return ProjectHost.attributeTypeMap;
    }
    constructor() {
    }
}
export { ProjectHost };