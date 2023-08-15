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
import { ContinueWithVerificationUiFlow } from './ContinueWithVerificationUiFlow.js';
export declare class ContinueWith {
    /**
    * Action will always be `set_ory_session_token` set_ory_session_token ContinueWithActionSetOrySessionToken show_verification_ui ContinueWithActionShowVerificationUI
    */
    'action': ContinueWithActionEnum;
    'flow': ContinueWithVerificationUiFlow;
    /**
    * Token is the token of the session
    */
    'ory_session_token': string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export type ContinueWithActionEnum = "set_ory_session_token" | "show_verification_ui";