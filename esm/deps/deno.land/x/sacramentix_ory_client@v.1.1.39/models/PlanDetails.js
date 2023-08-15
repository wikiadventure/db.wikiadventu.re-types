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
class PlanDetails {
    /**
    * BaseFeeMonthly is the monthly base fee for the plan.
    */
    'base_fee_monthly';
    /**
    * BaseFeeYearly is the yearly base fee for the plan.
    */
    'base_fee_yearly';
    /**
    * Custom is true if the plan is custom. This means it will be hidden from the pricing page.
    */
    'custom';
    /**
    * Description is the description of the plan.
    */
    'description';
    /**
    * Features are the feature definitions included in the plan.
    */
    'features';
    /**
    * Name is the name of the plan.
    */
    'name';
    /**
    * Version is the version of the plan. The combination of `name@version` must be unique.
    */
    'version';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "base_fee_monthly",
            "baseName": "base_fee_monthly",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "base_fee_yearly",
            "baseName": "base_fee_yearly",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "custom",
            "baseName": "custom",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "{ [key: string]: GenericUsage; }",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return PlanDetails.attributeTypeMap;
    }
    constructor() {
    }
}
export { PlanDetails };
