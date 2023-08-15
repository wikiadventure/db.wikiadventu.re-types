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
class OAuth2ConsentSessionExpiresAt {
    'access_token';
    'authorize_code';
    'id_token';
    'par_context';
    'refresh_token';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "access_token",
            "baseName": "access_token",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "authorize_code",
            "baseName": "authorize_code",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "id_token",
            "baseName": "id_token",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "par_context",
            "baseName": "par_context",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "refresh_token",
            "baseName": "refresh_token",
            "type": "Date",
            "format": "date-time"
        }
    ];
    static getAttributeTypeMap() {
        return OAuth2ConsentSessionExpiresAt.attributeTypeMap;
    }
    constructor() {
    }
}
export { OAuth2ConsentSessionExpiresAt };
