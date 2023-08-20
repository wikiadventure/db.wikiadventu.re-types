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
class ContinueWith {
    static getAttributeTypeMap() {
        return ContinueWith.attributeTypeMap;
    }
    constructor() {
        /**
        * Action will always be `set_ory_session_token` set_ory_session_token ContinueWithActionSetOrySessionToken show_verification_ui ContinueWithActionShowVerificationUI
        */
        Object.defineProperty(this, 'action', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'flow', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Token is the token of the session
        */
        Object.defineProperty(this, 'ory_session_token', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.action = "ContinueWith";
    }
}
Object.defineProperty(ContinueWith, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "action"
});
Object.defineProperty(ContinueWith, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "action",
            "baseName": "action",
            "type": "ContinueWithActionEnum",
            "format": ""
        },
        {
            "name": "flow",
            "baseName": "flow",
            "type": "ContinueWithVerificationUiFlow",
            "format": ""
        },
        {
            "name": "ory_session_token",
            "baseName": "ory_session_token",
            "type": "string",
            "format": ""
        }
    ]
});
export { ContinueWith };
