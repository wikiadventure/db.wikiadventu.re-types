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
import { AcceptOAuth2ConsentRequestSession } from './AcceptOAuth2ConsentRequestSession.js';
export declare class AcceptOAuth2ConsentRequest {
    'grant_access_token_audience'?: Array<string>;
    'grant_scope'?: Array<string>;
    'handled_at'?: Date;
    /**
    * Remember, if set to true, tells ORY Hydra to remember this consent authorization and reuse it if the same client asks the same user for the same, or a subset of, scope.
    */
    'remember'?: boolean;
    /**
    * RememberFor sets how long the consent authorization should be remembered for in seconds. If set to `0`, the authorization will be remembered indefinitely.
    */
    'remember_for'?: number;
    'session'?: AcceptOAuth2ConsentRequestSession;
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