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
class UpdateLoginFlowBody {
    /**
    * Sending the anti-csrf token is only required for browser login flows.
    */
    'csrf_token';
    /**
    * Identifier is the email or username of the user trying to log in.
    */
    'identifier';
    /**
    * Method should be set to \"lookup_secret\" when logging in using the lookup_secret strategy.
    */
    'method';
    /**
    * The user\'s password.
    */
    'password';
    /**
    * Identifier is the email or username of the user trying to log in. This field is deprecated!
    */
    'password_identifier';
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
    /**
    * The TOTP code.
    */
    'totp_code';
    /**
    * Login a WebAuthn Security Key  This must contain the ID of the WebAuthN connection.
    */
    'webauthn_login';
    /**
    * The lookup secret.
    */
    'lookup_secret';
    static discriminator = "method";
    static attributeTypeMap = [
        {
            "name": "csrf_token",
            "baseName": "csrf_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "identifier",
            "baseName": "identifier",
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
            "name": "password_identifier",
            "baseName": "password_identifier",
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
        },
        {
            "name": "totp_code",
            "baseName": "totp_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "webauthn_login",
            "baseName": "webauthn_login",
            "type": "string",
            "format": ""
        },
        {
            "name": "lookup_secret",
            "baseName": "lookup_secret",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return UpdateLoginFlowBody.attributeTypeMap;
    }
    constructor() {
        this.method = "UpdateLoginFlowBody";
    }
}
export { UpdateLoginFlowBody };
