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
class ExpandedPermissionTree {
    static getAttributeTypeMap() {
        return ExpandedPermissionTree.attributeTypeMap;
    }
    constructor() {
        /**
        * The children of the node, possibly none.
        */
        Object.defineProperty(this, 'children', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'tuple', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * The type of the node. union TreeNodeUnion exclusion TreeNodeExclusion intersection TreeNodeIntersection leaf TreeNodeLeaf tuple_to_subject_set TreeNodeTupleToSubjectSet computed_subject_set TreeNodeComputedSubjectSet not TreeNodeNot unspecified TreeNodeUnspecified
        */
        Object.defineProperty(this, 'type', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(ExpandedPermissionTree, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(ExpandedPermissionTree, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "children",
            "baseName": "children",
            "type": "Array<ExpandedPermissionTree>",
            "format": ""
        },
        {
            "name": "tuple",
            "baseName": "tuple",
            "type": "Relationship",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ExpandedPermissionTreeTypeEnum",
            "format": ""
        }
    ]
});
export { ExpandedPermissionTree };
