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
* Update Custom Hostname Body
*/
class SetCustomDomainBody {
    /**
    * The domain where cookies will be set. Has to be a parent domain of the custom hostname to work.
    */
    'cookie_domain';
    /**
    * CORS Allowed origins for the custom hostname.
    */
    'cors_allowed_origins';
    /**
    * CORS Enabled for the custom hostname.
    */
    'cors_enabled';
    /**
    * The custom UI base URL where the UI will be exposed.
    */
    'custom_ui_base_url';
    /**
    * The custom hostname where the API will be exposed.
    */
    'hostname';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "cookie_domain",
            "baseName": "cookie_domain",
            "type": "string",
            "format": ""
        },
        {
            "name": "cors_allowed_origins",
            "baseName": "cors_allowed_origins",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "cors_enabled",
            "baseName": "cors_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "custom_ui_base_url",
            "baseName": "custom_ui_base_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "hostname",
            "baseName": "hostname",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return SetCustomDomainBody.attributeTypeMap;
    }
    constructor() {
    }
}
export { SetCustomDomainBody };