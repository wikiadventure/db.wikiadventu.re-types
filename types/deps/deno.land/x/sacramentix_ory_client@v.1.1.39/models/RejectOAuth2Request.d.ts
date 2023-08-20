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
export declare class RejectOAuth2Request {
    /**
    * The error should follow the OAuth2 error format (e.g. `invalid_request`, `login_required`).  Defaults to `request_denied`.
    */
    'error'?: string;
    /**
    * Debug contains information to help resolve the problem as a developer. Usually not exposed to the public but only in the server logs.
    */
    'error_debug'?: string;
    /**
    * Description of the error in a human readable format.
    */
    'error_description'?: string;
    /**
    * Hint to help resolve the error.
    */
    'error_hint'?: string;
    /**
    * Represents the HTTP status code of the error (e.g. 401 or 403)  Defaults to 400
    */
    'status_code'?: number;
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
