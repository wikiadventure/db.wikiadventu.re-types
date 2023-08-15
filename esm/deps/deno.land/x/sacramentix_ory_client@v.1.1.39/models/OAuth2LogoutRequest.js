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
class OAuth2LogoutRequest {
    /**
    * Challenge is the identifier (\"logout challenge\") of the logout authentication request. It is used to identify the session.
    */
    'challenge';
    'client';
    /**
    * RequestURL is the original Logout URL requested.
    */
    'request_url';
    /**
    * RPInitiated is set to true if the request was initiated by a Relying Party (RP), also known as an OAuth 2.0 Client.
    */
    'rp_initiated';
    /**
    * SessionID is the login session ID that was requested to log out.
    */
    'sid';
    /**
    * Subject is the user for whom the logout was request.
    */
    'subject';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "challenge",
            "baseName": "challenge",
            "type": "string",
            "format": ""
        },
        {
            "name": "client",
            "baseName": "client",
            "type": "OAuth2Client",
            "format": ""
        },
        {
            "name": "request_url",
            "baseName": "request_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "rp_initiated",
            "baseName": "rp_initiated",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sid",
            "baseName": "sid",
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
        return OAuth2LogoutRequest.attributeTypeMap;
    }
    constructor() {
    }
}
export { OAuth2LogoutRequest };