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
* Update Settings Flow with TOTP Method
*/
export declare class UpdateSettingsFlowWithTotpMethod {
    /**
    * CSRFToken is the anti-CSRF token
    */
    'csrf_token'?: string;
    /**
    * Method  Should be set to \"totp\" when trying to add, update, or remove a totp pairing.
    */
    'method': string;
    /**
    * ValidationTOTP must contain a valid TOTP based on the
    */
    'totp_code'?: string;
    /**
    * UnlinkTOTP if true will remove the TOTP pairing, effectively removing the credential. This can be used to set up a new TOTP device.
    */
    'totp_unlink'?: boolean;
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
