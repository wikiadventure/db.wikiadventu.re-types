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
class Version {
    /**
    * Version is the service\'s version.
    */
    'version';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return Version.attributeTypeMap;
    }
    constructor() {
    }
}
export { Version };
