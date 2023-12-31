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
* The Active Project ID
*/
class ActiveProjectInConsole {
    static getAttributeTypeMap() {
        return ActiveProjectInConsole.attributeTypeMap;
    }
    constructor() {
        /**
        * The Active Project ID  format: uuid
        */
        Object.defineProperty(this, 'project_id', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(ActiveProjectInConsole, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(ActiveProjectInConsole, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "project_id",
            "baseName": "project_id",
            "type": "string",
            "format": ""
        }
    ]
});
export { ActiveProjectInConsole };
