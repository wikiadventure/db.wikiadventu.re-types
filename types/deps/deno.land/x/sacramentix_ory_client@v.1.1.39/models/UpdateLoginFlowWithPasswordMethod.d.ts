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
* Update Login Flow with Password Method
*/
export declare class UpdateLoginFlowWithPasswordMethod {
    /**
    * Sending the anti-csrf token is only required for browser login flows.
    */
    'csrf_token'?: string;
    /**
    * Identifier is the email or username of the user trying to log in.
    */
    'identifier': string;
    /**
    * Method should be set to \"password\" when logging in using the identifier and password strategy.
    */
    'method': string;
    /**
    * The user\'s password.
    */
    'password': string;
    /**
    * Identifier is the email or username of the user trying to log in. This field is deprecated!
    */
    'password_identifier'?: string;
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
