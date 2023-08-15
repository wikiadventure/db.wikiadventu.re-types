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
* Update Login Flow with TOTP Method
*/
class UpdateLoginFlowWithTotpMethod {
    /**
    * Sending the anti-csrf token is only required for browser login flows.
    */
    'csrf_token';
    /**
    * Method should be set to \"totp\" when logging in using the TOTP strategy.
    */
    'method';
    /**
    * The TOTP code.
    */
    'totp_code';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "csrf_token",
            "baseName": "csrf_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string",
            "format": ""
        },
        {
            "name": "totp_code",
            "baseName": "totp_code",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return UpdateLoginFlowWithTotpMethod.attributeTypeMap;
    }
    constructor() {
    }
}
export { UpdateLoginFlowWithTotpMethod };