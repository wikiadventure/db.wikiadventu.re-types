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
* Device corresponding to a Session
*/
export declare class SessionDevice {
    /**
    * Device record ID
    */
    'id': string;
    /**
    * IPAddress of the client
    */
    'ip_address'?: string;
    /**
    * Geo Location corresponding to the IP Address
    */
    'location'?: string;
    /**
    * UserAgent of the client
    */
    'user_agent'?: string;
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
