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
* Update Registration Flow with WebAuthn Method
*/
class UpdateRegistrationFlowWithWebAuthnMethod {
    static getAttributeTypeMap() {
        return UpdateRegistrationFlowWithWebAuthnMethod.attributeTypeMap;
    }
    constructor() {
        /**
        * CSRFToken is the anti-CSRF token
        */
        Object.defineProperty(this, 'csrf_token', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Method  Should be set to \"webauthn\" when trying to add, update, or remove a webAuthn pairing.
        */
        Object.defineProperty(this, 'method', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * The identity\'s traits
        */
        Object.defineProperty(this, 'traits', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Transient data to pass along to any webhooks
        */
        Object.defineProperty(this, 'transient_payload', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Register a WebAuthn Security Key  It is expected that the JSON returned by the WebAuthn registration process is included here.
        */
        Object.defineProperty(this, 'webauthn_register', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Name of the WebAuthn Security Key to be Added  A human-readable name for the security key which will be added.
        */
        Object.defineProperty(this, 'webauthn_register_displayname', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(UpdateRegistrationFlowWithWebAuthnMethod, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(UpdateRegistrationFlowWithWebAuthnMethod, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "csrf_token",
            "baseName": "csrf_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string",
            "format": ""
        },
        {
            "name": "traits",
            "baseName": "traits",
            "type": "any",
            "format": ""
        },
        {
            "name": "transient_payload",
            "baseName": "transient_payload",
            "type": "any",
            "format": ""
        },
        {
            "name": "webauthn_register",
            "baseName": "webauthn_register",
            "type": "string",
            "format": ""
        },
        {
            "name": "webauthn_register_displayname",
            "baseName": "webauthn_register_displayname",
            "type": "string",
            "format": ""
        }
    ]
});
export { UpdateRegistrationFlowWithWebAuthnMethod };
