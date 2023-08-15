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
* Update Settings Flow with Lookup Method
*/
class UpdateSettingsFlowWithLookupMethod {
    /**
    * CSRFToken is the anti-CSRF token
    */
    'csrf_token';
    /**
    * If set to true will save the regenerated lookup secrets
    */
    'lookup_secret_confirm';
    /**
    * Disables this method if true.
    */
    'lookup_secret_disable';
    /**
    * If set to true will regenerate the lookup secrets
    */
    'lookup_secret_regenerate';
    /**
    * If set to true will reveal the lookup secrets
    */
    'lookup_secret_reveal';
    /**
    * Method  Should be set to \"lookup\" when trying to add, update, or remove a lookup pairing.
    */
    'method';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "csrf_token",
            "baseName": "csrf_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "lookup_secret_confirm",
            "baseName": "lookup_secret_confirm",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lookup_secret_disable",
            "baseName": "lookup_secret_disable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lookup_secret_regenerate",
            "baseName": "lookup_secret_regenerate",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lookup_secret_reveal",
            "baseName": "lookup_secret_reveal",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return UpdateSettingsFlowWithLookupMethod.attributeTypeMap;
    }
    constructor() {
    }
}
export { UpdateSettingsFlowWithLookupMethod };
