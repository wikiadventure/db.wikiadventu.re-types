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
class RecoveryIdentityAddress {
    static getAttributeTypeMap() {
        return RecoveryIdentityAddress.attributeTypeMap;
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
        Object.defineProperty(this, 'id', {
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
        Object.defineProperty(this, 'value', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'via', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(RecoveryIdentityAddress, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(RecoveryIdentityAddress, "attributeTypeMap", {
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
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "updated_at",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "via",
            "baseName": "via",
            "type": "string",
            "format": ""
        }
    ]
});
export { RecoveryIdentityAddress };
