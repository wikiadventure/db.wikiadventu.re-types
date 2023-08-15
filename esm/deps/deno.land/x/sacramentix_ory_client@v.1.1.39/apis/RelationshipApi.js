// TODO: better import syntax?
import { BaseAPIRequestFactory } from './baseapi.js';
import { HttpMethod } from '../http/http.js';
import { ObjectSerializer } from '../models/ObjectSerializer.js';
import { ApiException } from './exception.js';
import { isCodeInRange } from '../util.js';
/**
 * no description
 */
export class RelationshipApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * The OPL file is expected in the body of the request.
     * Check the syntax of an OPL file
     * @param body
     */
    async checkOplSyntax(body, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/opl/syntax/check';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "text/plain"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(ObjectSerializer.serialize(body, "string", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Use this endpoint to create a relationship.
     * Create a Relationship
     * @param createRelationshipBody
     */
    async createRelationship(createRelationshipBody, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/admin/relation-tuples';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(ObjectSerializer.serialize(createRelationshipBody, "CreateRelationshipBody", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Use this endpoint to delete relationships
     * Delete Relationships
     * @param namespace Namespace of the Relationship
     * @param object Object of the Relationship
     * @param relation Relation of the Relationship
     * @param subjectId SubjectID of the Relationship
     * @param subjectSetNamespace Namespace of the Subject Set
     * @param subjectSetObject Object of the Subject Set
     * @param subjectSetRelation Relation of the Subject Set
     */
    async deleteRelationships(namespace, object, relation, subjectId, subjectSetNamespace, subjectSetObject, subjectSetRelation, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/admin/relation-tuples';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (namespace !== undefined) {
            requestContext.setQueryParam("namespace", ObjectSerializer.serialize(namespace, "string", ""));
        }
        // Query Params
        if (object !== undefined) {
            requestContext.setQueryParam("object", ObjectSerializer.serialize(object, "string", ""));
        }
        // Query Params
        if (relation !== undefined) {
            requestContext.setQueryParam("relation", ObjectSerializer.serialize(relation, "string", ""));
        }
        // Query Params
        if (subjectId !== undefined) {
            requestContext.setQueryParam("subject_id", ObjectSerializer.serialize(subjectId, "string", ""));
        }
        // Query Params
        if (subjectSetNamespace !== undefined) {
            requestContext.setQueryParam("subject_set.namespace", ObjectSerializer.serialize(subjectSetNamespace, "string", ""));
        }
        // Query Params
        if (subjectSetObject !== undefined) {
            requestContext.setQueryParam("subject_set.object", ObjectSerializer.serialize(subjectSetObject, "string", ""));
        }
        // Query Params
        if (subjectSetRelation !== undefined) {
            requestContext.setQueryParam("subject_set.relation", ObjectSerializer.serialize(subjectSetRelation, "string", ""));
        }
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get all relationships that match the query. Only the namespace field is required.
     * Query relationships
     * @param pageToken
     * @param pageSize
     * @param namespace Namespace of the Relationship
     * @param object Object of the Relationship
     * @param relation Relation of the Relationship
     * @param subjectId SubjectID of the Relationship
     * @param subjectSetNamespace Namespace of the Subject Set
     * @param subjectSetObject Object of the Subject Set
     * @param subjectSetRelation Relation of the Subject Set
     */
    async getRelationships(pageToken, pageSize, namespace, object, relation, subjectId, subjectSetNamespace, subjectSetObject, subjectSetRelation, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/relation-tuples';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("page_token", ObjectSerializer.serialize(pageToken, "string", ""));
        }
        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", "int64"));
        }
        // Query Params
        if (namespace !== undefined) {
            requestContext.setQueryParam("namespace", ObjectSerializer.serialize(namespace, "string", ""));
        }
        // Query Params
        if (object !== undefined) {
            requestContext.setQueryParam("object", ObjectSerializer.serialize(object, "string", ""));
        }
        // Query Params
        if (relation !== undefined) {
            requestContext.setQueryParam("relation", ObjectSerializer.serialize(relation, "string", ""));
        }
        // Query Params
        if (subjectId !== undefined) {
            requestContext.setQueryParam("subject_id", ObjectSerializer.serialize(subjectId, "string", ""));
        }
        // Query Params
        if (subjectSetNamespace !== undefined) {
            requestContext.setQueryParam("subject_set.namespace", ObjectSerializer.serialize(subjectSetNamespace, "string", ""));
        }
        // Query Params
        if (subjectSetObject !== undefined) {
            requestContext.setQueryParam("subject_set.object", ObjectSerializer.serialize(subjectSetObject, "string", ""));
        }
        // Query Params
        if (subjectSetRelation !== undefined) {
            requestContext.setQueryParam("subject_set.relation", ObjectSerializer.serialize(subjectSetRelation, "string", ""));
        }
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get all namespaces
     * Query namespaces
     */
    async listRelationshipNamespaces(_options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/namespaces';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Use this endpoint to patch one or more relationships.
     * Patch Multiple Relationships
     * @param relationshipPatch
     */
    async patchRelationships(relationshipPatch, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/admin/relation-tuples';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(ObjectSerializer.serialize(relationshipPatch, "Array<RelationshipPatch>", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
}
export class RelationshipApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkOplSyntax
     * @throws ApiException if the response code was not in [200, 299]
     */
    async checkOplSyntax(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "CheckOplSyntaxResult", "");
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "CheckOplSyntaxResult", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRelationship
     * @throws ApiException if the response code was not in [200, 299]
     */
    async createRelationship(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Relationship", "");
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Relationship", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRelationships
     * @throws ApiException if the response code was not in [200, 299]
     */
    async deleteRelationships(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "void", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRelationships
     * @throws ApiException if the response code was not in [200, 299]
     */
    async getRelationships(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Relationships", "");
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Relationships", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRelationshipNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    async listRelationshipNamespaces(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "RelationshipNamespaces", "");
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "RelationshipNamespaces", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchRelationships
     * @throws ApiException if the response code was not in [200, 299]
     */
    async patchRelationships(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "void", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
}
