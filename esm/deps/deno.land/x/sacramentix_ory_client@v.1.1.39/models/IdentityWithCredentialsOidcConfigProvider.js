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
* Create Identity and Import Social Sign In Credentials Configuration
*/
class IdentityWithCredentialsOidcConfigProvider {
    /**
    * The OpenID Connect provider to link the subject to. Usually something like `google` or `github`.
    */
    'provider';
    /**
    * The subject (`sub`) of the OpenID Connect connection. Usually the `sub` field of the ID Token.
    */
    'subject';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return IdentityWithCredentialsOidcConfigProvider.attributeTypeMap;
    }
    constructor() {
    }
}
export { IdentityWithCredentialsOidcConfigProvider };