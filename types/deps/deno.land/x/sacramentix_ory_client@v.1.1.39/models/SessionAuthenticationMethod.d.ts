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
import { AuthenticatorAssuranceLevel } from './AuthenticatorAssuranceLevel.js';
/**
* A singular authenticator used during authentication / login.
*/
export declare class SessionAuthenticationMethod {
    'aal'?: AuthenticatorAssuranceLevel;
    /**
    * When the authentication challenge was completed.
    */
    'completed_at'?: Date;
    'method'?: SessionAuthenticationMethodMethodEnum;
    /**
    * OIDC or SAML provider id used for authentication
    */
    'provider'?: string;
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
export type SessionAuthenticationMethodMethodEnum = "link_recovery" | "code_recovery" | "password" | "totp" | "oidc" | "webauthn" | "lookup_secret" | "v0.6_legacy_session";
