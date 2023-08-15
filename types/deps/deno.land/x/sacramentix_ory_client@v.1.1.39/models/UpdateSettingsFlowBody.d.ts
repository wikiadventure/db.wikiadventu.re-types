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
* Update Settings Flow Request Body
*/
export declare class UpdateSettingsFlowBody {
    /**
    * CSRFToken is the anti-CSRF token
    */
    'csrf_token'?: string;
    /**
    * Method  Should be set to \"lookup\" when trying to add, update, or remove a lookup pairing.
    */
    'method': string;
    /**
    * Password is the updated password
    */
    'password': string;
    /**
    * The identity\'s traits  in: body
    */
    'traits': any;
    /**
    * Flow ID is the flow\'s ID.  in: query
    */
    'flow'?: string;
    /**
    * Link this provider  Either this or `unlink` must be set.  type: string in: body
    */
    'link'?: string;
    /**
    * Unlink this provider  Either this or `link` must be set.  type: string in: body
    */
    'unlink'?: string;
    /**
    * UpstreamParameters are the parameters that are passed to the upstream identity provider.  These parameters are optional and depend on what the upstream identity provider supports. Supported parameters are: `login_hint` (string): The `login_hint` parameter suppresses the account chooser and either pre-fills the email box on the sign-in form, or selects the proper session. `hd` (string): The `hd` parameter limits the login/registration process to a Google Organization, e.g. `mycollege.edu`. `prompt` (string): The `prompt` specifies whether the Authorization Server prompts the End-User for reauthentication and consent, e.g. `select_account`.
    */
    'upstream_parameters'?: any;
    /**
    * ValidationTOTP must contain a valid TOTP based on the
    */
    'totp_code'?: string;
    /**
    * UnlinkTOTP if true will remove the TOTP pairing, effectively removing the credential. This can be used to set up a new TOTP device.
    */
    'totp_unlink'?: boolean;
    /**
    * Register a WebAuthn Security Key  It is expected that the JSON returned by the WebAuthn registration process is included here.
    */
    'webauthn_register'?: string;
    /**
    * Name of the WebAuthn Security Key to be Added  A human-readable name for the security key which will be added.
    */
    'webauthn_register_displayname'?: string;
    /**
    * Remove a WebAuthn Security Key  This must contain the ID of the WebAuthN connection.
    */
    'webauthn_remove'?: string;
    /**
    * If set to true will save the regenerated lookup secrets
    */
    'lookup_secret_confirm'?: boolean;
    /**
    * Disables this method if true.
    */
    'lookup_secret_disable'?: boolean;
    /**
    * If set to true will regenerate the lookup secrets
    */
    'lookup_secret_regenerate'?: boolean;
    /**
    * If set to true will reveal the lookup secrets
    */
    'lookup_secret_reveal'?: boolean;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
