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
* Indicates, that the UI flow could be continued by showing a verification ui
*/
class ContinueWithVerificationUi {
    /**
    * Action will always be `show_verification_ui` set_ory_session_token ContinueWithActionSetOrySessionToken show_verification_ui ContinueWithActionShowVerificationUI
    */
    'action';
    'flow';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "action",
            "baseName": "action",
            "type": "ContinueWithVerificationUiActionEnum",
            "format": ""
        },
        {
            "name": "flow",
            "baseName": "flow",
            "type": "ContinueWithVerificationUiFlow",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ContinueWithVerificationUi.attributeTypeMap;
    }
    constructor() {
    }
}
export { ContinueWithVerificationUi };