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
* OAuth2 JWT Bearer Grant Type Issuer Trusted JSON Web Key
*/
export declare class TrustedOAuth2JwtGrantJsonWebKey {
    /**
    * The \"key_id\" is key unique identifier (same as kid header in jws/jwt).
    */
    'kid'?: string;
    /**
    * The \"set\" is basically a name for a group(set) of keys. Will be the same as \"issuer\" in grant.
    */
    'set'?: string;
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
