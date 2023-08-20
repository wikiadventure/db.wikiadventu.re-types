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
* Response for a single identity patch
*/
class IdentityPatchResponse {
    static getAttributeTypeMap() {
        return IdentityPatchResponse.attributeTypeMap;
    }
    constructor() {
        /**
        * The action for this specific patch create ActionCreate  Create this identity.
        */
        Object.defineProperty(this, 'action', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * The identity ID payload of this patch
        */
        Object.defineProperty(this, 'identity', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * The ID of this patch response, if an ID was specified in the patch.
        */
        Object.defineProperty(this, 'patch_id', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(IdentityPatchResponse, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(IdentityPatchResponse, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "action",
            "baseName": "action",
            "type": "IdentityPatchResponseActionEnum",
            "format": ""
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "patch_id",
            "baseName": "patch_id",
            "type": "string",
            "format": "uuid"
        }
    ]
});
export { IdentityPatchResponse };
