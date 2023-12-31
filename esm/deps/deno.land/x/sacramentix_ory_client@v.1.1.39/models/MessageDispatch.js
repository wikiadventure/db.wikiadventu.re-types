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
* MessageDispatch represents an attempt of sending a courier message It contains the status of the attempt (failed or successful) and the error if any occured
*/
class MessageDispatch {
    static getAttributeTypeMap() {
        return MessageDispatch.attributeTypeMap;
    }
    constructor() {
        /**
        * CreatedAt is a helper struct field for gobuffalo.pop.
        */
        Object.defineProperty(this, 'created_at', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'error', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * The ID of this message dispatch
        */
        Object.defineProperty(this, 'id', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * The ID of the message being dispatched
        */
        Object.defineProperty(this, 'message_id', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * The status of this dispatch Either \"failed\" or \"success\" failed CourierMessageDispatchStatusFailed success CourierMessageDispatchStatusSuccess
        */
        Object.defineProperty(this, 'status', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * UpdatedAt is a helper struct field for gobuffalo.pop.
        */
        Object.defineProperty(this, 'updated_at', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(MessageDispatch, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(MessageDispatch, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "created_at",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "any",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "message_id",
            "baseName": "message_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "MessageDispatchStatusEnum",
            "format": ""
        },
        {
            "name": "updated_at",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        }
    ]
});
export { MessageDispatch };
