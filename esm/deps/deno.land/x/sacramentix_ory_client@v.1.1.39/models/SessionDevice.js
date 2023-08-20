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
    static getAttributeTypeMap() {
        return SessionDevice.attributeTypeMap;
    }
    constructor() {
        /**
        * Device record ID
        */
        Object.defineProperty(this, 'id', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * IPAddress of the client
        */
        Object.defineProperty(this, 'ip_address', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Geo Location corresponding to the IP Address
        */
        Object.defineProperty(this, 'location', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * UserAgent of the client
        */
        Object.defineProperty(this, 'user_agent', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(SessionDevice, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(SessionDevice, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
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
    ]
});
export { SessionDevice };
