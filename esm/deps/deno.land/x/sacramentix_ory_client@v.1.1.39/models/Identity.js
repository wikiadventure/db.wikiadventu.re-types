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
* An [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) represents a (human) user in Ory.
*/
class Identity {
    static getAttributeTypeMap() {
        return Identity.attributeTypeMap;
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
        /**
        * Credentials represents all credentials that can be used for authenticating this identity.
        */
        Object.defineProperty(this, 'credentials', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * ID is the identity\'s unique identifier.  The Identity ID can not be changed and can not be chosen. This ensures future compatibility and optimization for distributed stores such as CockroachDB.
        */
        Object.defineProperty(this, 'id', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * NullJSONRawMessage represents a json.RawMessage that works well with JSON, SQL, and Swagger and is NULLable-
        */
        Object.defineProperty(this, 'metadata_admin', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * NullJSONRawMessage represents a json.RawMessage that works well with JSON, SQL, and Swagger and is NULLable-
        */
        Object.defineProperty(this, 'metadata_public', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * RecoveryAddresses contains all the addresses that can be used to recover an identity.
        */
        Object.defineProperty(this, 'recovery_addresses', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * SchemaID is the ID of the JSON Schema to be used for validating the identity\'s traits.
        */
        Object.defineProperty(this, 'schema_id', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * SchemaURL is the URL of the endpoint where the identity\'s traits schema can be fetched from.  format: url
        */
        Object.defineProperty(this, 'schema_url', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'state', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'state_changed_at', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Traits represent an identity\'s traits. The identity is able to create, modify, and delete traits in a self-service manner. The input will always be validated against the JSON Schema defined in `schema_url`.
        */
        Object.defineProperty(this, 'traits', {
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
        * VerifiableAddresses contains all the addresses that can be verified by the user.
        */
        Object.defineProperty(this, 'verifiable_addresses', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(Identity, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(Identity, "attributeTypeMap", {
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
            "name": "credentials",
            "baseName": "credentials",
            "type": "{ [key: string]: IdentityCredentials; }",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "metadata_admin",
            "baseName": "metadata_admin",
            "type": "any",
            "format": ""
        },
        {
            "name": "metadata_public",
            "baseName": "metadata_public",
            "type": "any",
            "format": ""
        },
        {
            "name": "recovery_addresses",
            "baseName": "recovery_addresses",
            "type": "Array<RecoveryIdentityAddress>",
            "format": ""
        },
        {
            "name": "schema_id",
            "baseName": "schema_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "schema_url",
            "baseName": "schema_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "IdentityState",
            "format": ""
        },
        {
            "name": "state_changed_at",
            "baseName": "state_changed_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "traits",
            "baseName": "traits",
            "type": "any",
            "format": ""
        },
        {
            "name": "updated_at",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "verifiable_addresses",
            "baseName": "verifiable_addresses",
            "type": "Array<VerifiableIdentityAddress>",
            "format": ""
        }
    ]
});
export { Identity };
