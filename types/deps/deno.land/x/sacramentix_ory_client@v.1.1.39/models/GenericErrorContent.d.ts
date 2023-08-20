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
* Error response
*/
export declare class GenericErrorContent {
    /**
    * Debug contains debug information. This is usually not available and has to be enabled.
    */
    'debug'?: string;
    /**
    * Name is the error name.
    */
    'error'?: string;
    /**
    * Description contains further information on the nature of the error.
    */
    'error_description'?: string;
    /**
    * Message contains the error message.
    */
    'message'?: string;
    /**
    * Code represents the error status code (404, 403, 401, ...).
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