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
* Update Registration Request Body
*/
class UpdateRegistrationFlowBody {
    /**
    * CSRFToken is the anti-CSRF token
    */
    'csrf_token';
    /**
    * Method  Should be set to \"webauthn\" when trying to add, update, or remove a webAuthn pairing.
    */
    'method';
    /**
    * Password to sign the user up with
    */
    'password';
    /**
    * The identity\'s traits
    */
    'traits';
    /**
    * Transient data to pass along to any webhooks
    */
    'transient_payload';
    /**
    * The provider to register with
    */
    'provider';
    /**
    * UpstreamParameters are the parameters that are passed to the upstream identity provider.  These parameters are optional and depend on what the upstream identity provider supports. Supported parameters are: `login_hint` (string): The `login_hint` parameter suppresses the account chooser and either pre-fills the email box on the sign-in form, or selects the proper session. `hd` (string): The `hd` parameter limits the login/registration process to a Google Organization, e.g. `mycollege.edu`. `prompt` (string): The `prompt` specifies whether the Authorization Server prompts the End-User for reauthentication and consent, e.g. `select_account`.
    */
    'upstream_parameters';
    /**
    * Register a WebAuthn Security Key  It is expected that the JSON returned by the WebAuthn registration process is included here.
    */
    'webauthn_register';
    /**
    * Name of the WebAuthn Security Key to be Added  A human-readable name for the security key which will be added.
    */
    'webauthn_register_displayname';
    static discriminator = "method";
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
            "name": "password",
            "baseName": "password",
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
            "name": "transient_payload",
            "baseName": "transient_payload",
            "type": "any",
            "format": ""
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string",
            "format": ""
        },
        {
            "name": "upstream_parameters",
            "baseName": "upstream_parameters",
            "type": "any",
            "format": ""
        },
        {
            "name": "webauthn_register",
            "baseName": "webauthn_register",
            "type": "string",
            "format": ""
        },
        {
            "name": "webauthn_register_displayname",
            "baseName": "webauthn_register_displayname",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return UpdateRegistrationFlowBody.attributeTypeMap;
    }
    constructor() {
        this.method = "UpdateRegistrationFlowBody";
    }
}
export { UpdateRegistrationFlowBody };
