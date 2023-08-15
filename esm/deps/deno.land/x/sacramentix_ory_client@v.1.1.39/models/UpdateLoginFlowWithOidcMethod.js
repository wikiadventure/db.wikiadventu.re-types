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
* Update Login Flow with OpenID Connect Method
*/
class UpdateLoginFlowWithOidcMethod {
    /**
    * The CSRF Token
    */
    'csrf_token';
    /**
    * Method to use  This field must be set to `oidc` when using the oidc method.
    */
    'method';
    /**
    * The provider to register with
    */
    'provider';
    /**
    * The identity traits. This is a placeholder for the registration flow.
    */
    'traits';
    /**
    * UpstreamParameters are the parameters that are passed to the upstream identity provider.  These parameters are optional and depend on what the upstream identity provider supports. Supported parameters are: `login_hint` (string): The `login_hint` parameter suppresses the account chooser and either pre-fills the email box on the sign-in form, or selects the proper session. `hd` (string): The `hd` parameter limits the login/registration process to a Google Organization, e.g. `mycollege.edu`. `prompt` (string): The `prompt` specifies whether the Authorization Server prompts the End-User for reauthentication and consent, e.g. `select_account`.
    */
    'upstream_parameters';
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
            "name": "provider",
            "baseName": "provider",
            "type": "string",
            "format": ""
        },
        {
            "name": "traits",
            "baseName": "traits",
            "type": "any",
            "format": ""
        },
        {
            "name": "upstream_parameters",
            "baseName": "upstream_parameters",
            "type": "any",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return UpdateLoginFlowWithOidcMethod.attributeTypeMap;
    }
    constructor() {
    }
}
export { UpdateLoginFlowWithOidcMethod };
