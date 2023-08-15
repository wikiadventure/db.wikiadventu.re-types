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
* Update Registration Flow with WebAuthn Method
*/
export declare class UpdateRegistrationFlowWithWebAuthnMethod {
    /**
    * CSRFToken is the anti-CSRF token
    */
    'csrf_token'?: string;
    /**
    * Method  Should be set to \"webauthn\" when trying to add, update, or remove a webAuthn pairing.
    */
    'method': string;
    /**
    * The identity\'s traits
    */
    'traits': any;
    /**
    * Transient data to pass along to any webhooks
    */
    'transient_payload'?: any;
    /**
    * Register a WebAuthn Security Key  It is expected that the JSON returned by the WebAuthn registration process is included here.
    */
    'webauthn_register'?: string;
    /**
    * Name of the WebAuthn Security Key to be Added  A human-readable name for the security key which will be added.
    */
    'webauthn_register_displayname'?: string;
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