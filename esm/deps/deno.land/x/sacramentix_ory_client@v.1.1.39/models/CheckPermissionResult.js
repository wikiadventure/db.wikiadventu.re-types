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
* The content of the allowed field is mirrored in the HTTP status code.
*/
class CheckPermissionResult {
    /**
    * whether the relation tuple is allowed
    */
    'allowed';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "allowed",
            "baseName": "allowed",
            "type": "boolean",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return CheckPermissionResult.attributeTypeMap;
    }
    constructor() {
    }
}
export { CheckPermissionResult };