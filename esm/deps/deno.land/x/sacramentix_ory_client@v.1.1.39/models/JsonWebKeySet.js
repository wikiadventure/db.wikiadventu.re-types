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
* JSON Web Key Set
*/
class JsonWebKeySet {
    static getAttributeTypeMap() {
        return JsonWebKeySet.attributeTypeMap;
    }
    constructor() {
        /**
        * List of JSON Web Keys  The value of the \"keys\" parameter is an array of JSON Web Key (JWK) values. By default, the order of the JWK values within the array does not imply an order of preference among them, although applications of JWK Sets can choose to assign a meaning to the order for their purposes, if desired.
        */
        Object.defineProperty(this, 'keys', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(JsonWebKeySet, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(JsonWebKeySet, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "keys",
            "baseName": "keys",
            "type": "Array<JsonWebKey>",
            "format": ""
        }
    ]
});
export { JsonWebKeySet };
