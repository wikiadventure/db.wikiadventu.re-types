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
* Payload for patching a relationship
*/
class RelationshipPatch {
    static getAttributeTypeMap() {
        return RelationshipPatch.attributeTypeMap;
    }
    constructor() {
        Object.defineProperty(this, 'action', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'relation_tuple', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(RelationshipPatch, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(RelationshipPatch, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "action",
            "baseName": "action",
            "type": "RelationshipPatchActionEnum",
            "format": ""
        },
        {
            "name": "relation_tuple",
            "baseName": "relation_tuple",
            "type": "Relationship",
            "format": ""
        }
    ]
});
export { RelationshipPatch };
