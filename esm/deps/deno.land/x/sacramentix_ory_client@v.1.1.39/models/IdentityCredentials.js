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
* Credentials represents a specific credential type
*/
class IdentityCredentials {
    static getAttributeTypeMap() {
        return IdentityCredentials.attributeTypeMap;
    }
    constructor() {
        Object.defineProperty(this, 'config', {
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
        * Identifiers represents a list of unique identifiers this credential type matches.
        */
        Object.defineProperty(this, 'identifiers', {
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
        /**
        * Version refers to the version of the credential. Useful when changing the config schema.
        */
        Object.defineProperty(this, 'version', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(IdentityCredentials, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(IdentityCredentials, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "config",
            "baseName": "config",
            "type": "any",
            "format": ""
        },
        {
            "name": "created_at",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "identifiers",
            "baseName": "identifiers",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IdentityCredentialsType",
            "format": ""
        },
        {
            "name": "updated_at",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number",
            "format": "int64"
        }
    ]
});
export { IdentityCredentials };
