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
class Message {
    static getAttributeTypeMap() {
        return Message.attributeTypeMap;
    }
    constructor() {
        Object.defineProperty(this, 'body', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * CreatedAt is a helper struct field for gobuffalo.pop.
        */
        Object.defineProperty(this, 'created_at', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Dispatches store information about the attempts of delivering a message May contain an error if any happened, or just the `success` state.
        */
        Object.defineProperty(this, 'dispatches', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'id', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'recipient', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'send_count', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'status', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'subject', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        *  recovery_invalid TypeRecoveryInvalid recovery_valid TypeRecoveryValid recovery_code_invalid TypeRecoveryCodeInvalid recovery_code_valid TypeRecoveryCodeValid verification_invalid TypeVerificationInvalid verification_valid TypeVerificationValid verification_code_invalid TypeVerificationCodeInvalid verification_code_valid TypeVerificationCodeValid otp TypeOTP stub TypeTestStub
        */
        Object.defineProperty(this, 'template_type', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'type', {
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
Object.defineProperty(Message, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(Message, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "body",
            "baseName": "body",
            "type": "string",
            "format": ""
        },
        {
            "name": "created_at",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "dispatches",
            "baseName": "dispatches",
            "type": "Array<MessageDispatch>",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "recipient",
            "baseName": "recipient",
            "type": "string",
            "format": ""
        },
        {
            "name": "send_count",
            "baseName": "send_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CourierMessageStatus",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        },
        {
            "name": "template_type",
            "baseName": "template_type",
            "type": "MessageTemplateTypeEnum",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CourierMessageType",
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
export { Message };
