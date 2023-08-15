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
export declare class ProjectMetadata {
    /**
    * The Project\'s Creation Date
    */
    'created_at': Date;
    'hosts': Array<string>;
    /**
    * The project\'s ID.
    */
    'id': string;
    /**
    * The project\'s name if set
    */
    'name': string;
    /**
    * The project\'s slug
    */
    'slug'?: string;
    /**
    * The state of the project. running Running halted Halted deleted Deleted
    */
    'state': ProjectMetadataStateEnum;
    'subscription_id'?: string | null;
    /**
    * Last Time Project was Updated
    */
    'updated_at': Date;
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
export type ProjectMetadataStateEnum = "running" | "halted" | "deleted";