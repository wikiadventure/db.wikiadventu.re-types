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
class CheckOplSyntaxResult {
    /**
    * The list of syntax errors
    */
    'errors';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<ParseError>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return CheckOplSyntaxResult.attributeTypeMap;
    }
    constructor() {
    }
}
export { CheckOplSyntaxResult };