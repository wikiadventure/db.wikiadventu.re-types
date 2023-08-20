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
import { IdentityState } from './IdentityState.js';
import { IdentityWithCredentials } from './IdentityWithCredentials.js';
/**
* Update Identity Body
*/
export declare class UpdateIdentityBody {
    'credentials'?: IdentityWithCredentials;
    /**
    * Store metadata about the user which is only accessible through admin APIs such as `GET /admin/identities/<id>`.
    */
    'metadata_admin'?: any | null;
    /**
    * Store metadata about the identity which the identity itself can see when calling for example the session endpoint. Do not store sensitive information (e.g. credit score) about the identity in this field.
    */
    'metadata_public'?: any | null;
    /**
    * SchemaID is the ID of the JSON Schema to be used for validating the identity\'s traits. If set will update the Identity\'s SchemaID.
    */
    'schema_id': string;
    'state': IdentityState;
    /**
    * Traits represent an identity\'s traits. The identity is able to create, modify, and delete traits in a self-service manner. The input will always be validated against the JSON Schema defined in `schema_id`.
    */
    'traits': any;
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