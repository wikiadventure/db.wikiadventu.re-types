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
import { ContinueWith } from './ContinueWith.js';
import { Identity } from './Identity.js';
import { SettingsFlowState } from './SettingsFlowState.js';
import { UiContainer } from './UiContainer.js';
/**
* This flow is used when an identity wants to update settings (e.g. profile data, passwords, ...) in a selfservice manner.  We recommend reading the [User Settings Documentation](../self-service/flows/user-settings)
*/
export declare class SettingsFlow {
    /**
    * Active, if set, contains the registration method that is being used. It is initially not set.
    */
    'active'?: string;
    /**
    * Contains a list of actions, that could follow this flow  It can, for example, contain a reference to the verification flow, created as part of the user\'s registration.
    */
    'continue_with'?: Array<ContinueWith>;
    /**
    * ExpiresAt is the time (UTC) when the flow expires. If the user still wishes to update the setting, a new flow has to be initiated.
    */
    'expires_at': Date;
    /**
    * ID represents the flow\'s unique ID. When performing the settings flow, this represents the id in the settings ui\'s query parameter: http://<selfservice.flows.settings.ui_url>?flow=<id>
    */
    'id': string;
    'identity': Identity;
    /**
    * IssuedAt is the time (UTC) when the flow occurred.
    */
    'issued_at': Date;
    /**
    * RequestURL is the initial URL that was requested from Ory Kratos. It can be used to forward information contained in the URL\'s path or query for example.
    */
    'request_url': string;
    /**
    * ReturnTo contains the requested return_to URL.
    */
    'return_to'?: string;
    'state': SettingsFlowState;
    /**
    * The flow type can either be `api` or `browser`.
    */
    'type': string;
    'ui': UiContainer;
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
