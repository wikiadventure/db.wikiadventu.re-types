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
* Update Login Flow with WebAuthn Method
*/
class UpdateLoginFlowWithWebAuthnMethod {
    static getAttributeTypeMap() {
        return UpdateLoginFlowWithWebAuthnMethod.attributeTypeMap;
    }
    constructor() {
        /**
        * Sending the anti-csrf token is only required for browser login flows.
        */
        Object.defineProperty(this, 'csrf_token', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Identifier is the email or username of the user trying to log in.
        */
        Object.defineProperty(this, 'identifier', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Method should be set to \"webAuthn\" when logging in using the WebAuthn strategy.
        */
        Object.defineProperty(this, 'method', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Login a WebAuthn Security Key  This must contain the ID of the WebAuthN connection.
        */
        Object.defineProperty(this, 'webauthn_login', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(UpdateLoginFlowWithWebAuthnMethod, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(UpdateLoginFlowWithWebAuthnMethod, "attributeTypeMap", {
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
            "name": "identifier",
            "baseName": "identifier",
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
            "name": "webauthn_login",
            "baseName": "webauthn_login",
            "type": "string",
            "format": ""
        }
    ]
});
export { UpdateLoginFlowWithWebAuthnMethod };
