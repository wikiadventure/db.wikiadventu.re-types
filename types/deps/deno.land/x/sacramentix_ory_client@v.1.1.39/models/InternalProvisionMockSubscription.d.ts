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
* Internal Provision Mock Subscription Request Body
*/
export declare class InternalProvisionMockSubscription {
    /**
    * Currency usd USD eur Euro
    */
    'currency': InternalProvisionMockSubscriptionCurrencyEnum;
    /**
    * Identity ID
    */
    'identity_id': string;
    /**
    * Billing Interval monthly Monthly yearly Yearly
    */
    'interval': InternalProvisionMockSubscriptionIntervalEnum;
    /**
    * Plan ID
    */
    'plan': string;
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
export type InternalProvisionMockSubscriptionCurrencyEnum = "usd" | "eur";
export type InternalProvisionMockSubscriptionIntervalEnum = "monthly" | "yearly";
