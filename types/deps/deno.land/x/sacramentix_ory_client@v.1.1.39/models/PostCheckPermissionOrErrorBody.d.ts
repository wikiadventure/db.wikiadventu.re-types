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
import { SubjectSet } from './SubjectSet.js';
/**
* Post Check Permission Or Error Body
*/
export declare class PostCheckPermissionOrErrorBody {
    /**
    * Namespace to query
    */
    'namespace'?: string;
    /**
    * Object to query
    */
    'object'?: string;
    /**
    * Relation to query
    */
    'relation'?: string;
    /**
    * SubjectID to query  Either SubjectSet or SubjectID can be provided.
    */
    'subject_id'?: string;
    'subject_set'?: SubjectSet;
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