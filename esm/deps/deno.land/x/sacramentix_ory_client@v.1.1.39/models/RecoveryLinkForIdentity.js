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
* Used when an administrator creates a recovery link for an identity.
*/
class RecoveryLinkForIdentity {
    static getAttributeTypeMap() {
        return RecoveryLinkForIdentity.attributeTypeMap;
    }
    constructor() {
        /**
        * Recovery Link Expires At  The timestamp when the recovery link expires.
        */
        Object.defineProperty(this, 'expires_at', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Recovery Link  This link can be used to recover the account.
        */
        Object.defineProperty(this, 'recovery_link', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(RecoveryLinkForIdentity, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(RecoveryLinkForIdentity, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "expires_at",
            "baseName": "expires_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "recovery_link",
            "baseName": "recovery_link",
            "type": "string",
            "format": ""
        }
    ]
});
export { RecoveryLinkForIdentity };
