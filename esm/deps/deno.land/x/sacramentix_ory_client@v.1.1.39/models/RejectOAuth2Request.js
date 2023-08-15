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
class RejectOAuth2Request {
    /**
    * The error should follow the OAuth2 error format (e.g. `invalid_request`, `login_required`).  Defaults to `request_denied`.
    */
    'error';
    /**
    * Debug contains information to help resolve the problem as a developer. Usually not exposed to the public but only in the server logs.
    */
    'error_debug';
    /**
    * Description of the error in a human readable format.
    */
    'error_description';
    /**
    * Hint to help resolve the error.
    */
    'error_hint';
    /**
    * Represents the HTTP status code of the error (e.g. 401 or 403)  Defaults to 400
    */
    'status_code';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        },
        {
            "name": "error_debug",
            "baseName": "error_debug",
            "type": "string",
            "format": ""
        },
        {
            "name": "error_description",
            "baseName": "error_description",
            "type": "string",
            "format": ""
        },
        {
            "name": "error_hint",
            "baseName": "error_hint",
            "type": "string",
            "format": ""
        },
        {
            "name": "status_code",
            "baseName": "status_code",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return RejectOAuth2Request.attributeTypeMap;
    }
    constructor() {
    }
}
export { RejectOAuth2Request };