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
class ProjectServices {
    'identity';
    'oauth2';
    'permission';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "identity",
            "baseName": "identity",
            "type": "ProjectServiceIdentity",
            "format": ""
        },
        {
            "name": "oauth2",
            "baseName": "oauth2",
            "type": "ProjectServiceOAuth2",
            "format": ""
        },
        {
            "name": "permission",
            "baseName": "permission",
            "type": "ProjectServicePermission",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ProjectServices.attributeTypeMap;
    }
    constructor() {
    }
}
export { ProjectServices };
