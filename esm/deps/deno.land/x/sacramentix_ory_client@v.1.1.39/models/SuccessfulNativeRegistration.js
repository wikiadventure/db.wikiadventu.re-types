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
* The Response for Registration Flows via API
*/
class SuccessfulNativeRegistration {
    /**
    * Contains a list of actions, that could follow this flow  It can, for example, this will contain a reference to the verification flow, created as part of the user\'s registration or the token of the session.
    */
    'continue_with';
    'identity';
    'session';
    /**
    * The Session Token  This field is only set when the session hook is configured as a post-registration hook.  A session token is equivalent to a session cookie, but it can be sent in the HTTP Authorization Header:  Authorization: bearer ${session-token}  The session token is only issued for API flows, not for Browser flows!
    */
    'session_token';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "continue_with",
            "baseName": "continue_with",
            "type": "Array<ContinueWith>",
            "format": ""
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "Identity",
            "format": ""
        },
        {
            "name": "session",
            "baseName": "session",
            "type": "Session",
            "format": ""
        },
        {
            "name": "session_token",
            "baseName": "session_token",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return SuccessfulNativeRegistration.attributeTypeMap;
    }
    constructor() {
    }
}
export { SuccessfulNativeRegistration };