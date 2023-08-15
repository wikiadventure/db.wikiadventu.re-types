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
class SessionDevice {
    /**
    * Device record ID
    */
    'id';
    /**
    * IPAddress of the client
    */
    'ip_address';
    /**
    * Geo Location corresponding to the IP Address
    */
    'location';
    /**
    * UserAgent of the client
    */
    'user_agent';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "ip_address",
            "baseName": "ip_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string",
            "format": ""
        },
        {
            "name": "user_agent",
            "baseName": "user_agent",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return SessionDevice.attributeTypeMap;
    }
    constructor() {
    }
}
export { SessionDevice };
