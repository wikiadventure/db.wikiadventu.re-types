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
class InternalProvisionMockSubscription {
    /**
    * Currency usd USD eur Euro
    */
    'currency';
    /**
    * Identity ID
    */
    'identity_id';
    /**
    * Billing Interval monthly Monthly yearly Yearly
    */
    'interval';
    /**
    * Plan ID
    */
    'plan';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "InternalProvisionMockSubscriptionCurrencyEnum",
            "format": ""
        },
        {
            "name": "identity_id",
            "baseName": "identity_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "InternalProvisionMockSubscriptionIntervalEnum",
            "format": ""
        },
        {
            "name": "plan",
            "baseName": "plan",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return InternalProvisionMockSubscription.attributeTypeMap;
    }
    constructor() {
    }
}
export { InternalProvisionMockSubscription };
