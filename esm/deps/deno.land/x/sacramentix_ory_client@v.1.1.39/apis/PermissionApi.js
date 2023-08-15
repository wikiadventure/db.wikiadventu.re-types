// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.js';
import { HttpMethod } from '../http/http.js';
import { ObjectSerializer } from '../models/ObjectSerializer.js';
import { ApiException } from './exception.js';
import { isCodeInRange } from '../util.js';
/**
 * no description
 */
export class PermissionApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     * @param namespace Namespace of the Relationship
     * @param object Object of the Relationship
     * @param relation Relation of the Relationship
     * @param subjectId SubjectID of the Relationship
     * @param subjectSetNamespace Namespace of the Subject Set
     * @param subjectSetObject Object of the Subject Set
     * @param subjectSetRelation Relation of the Subject Set
     * @param maxDepth
     */
    async checkPermission(namespace, object, relation, subjectId, subjectSetNamespace, subjectSetObject, subjectSetRelation, maxDepth, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/relation-tuples/check/openapi';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
        // Query Params
        if (maxDepth !== undefined) {
            requestContext.setQueryParam("max-depth", ObjectSerializer.serialize(maxDepth, "number", "int64"));
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
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     * @param namespace Namespace of the Relationship
     * @param object Object of the Relationship
     * @param relation Relation of the Relationship
     * @param subjectId SubjectID of the Relationship
     * @param subjectSetNamespace Namespace of the Subject Set
     * @param subjectSetObject Object of the Subject Set
     * @param subjectSetRelation Relation of the Subject Set
     * @param maxDepth
     */
    async checkPermissionOrError(namespace, object, relation, subjectId, subjectSetNamespace, subjectSetObject, subjectSetRelation, maxDepth, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/relation-tuples/check';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
        // Query Params
        if (maxDepth !== undefined) {
            requestContext.setQueryParam("max-depth", ObjectSerializer.serialize(maxDepth, "number", "int64"));
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
     * Use this endpoint to expand a relationship tuple into permissions.
     * Expand a Relationship into permissions.
     * @param namespace Namespace of the Subject Set
     * @param object Object of the Subject Set
     * @param relation Relation of the Subject Set
     * @param maxDepth
     */
    async expandPermissions(namespace, object, relation, maxDepth, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("PermissionApi", "expandPermissions", "namespace");
        }
        // verify required parameter 'object' is not null or undefined
        if (object === null || object === undefined) {
            throw new RequiredError("PermissionApi", "expandPermissions", "object");
        }
        // verify required parameter 'relation' is not null or undefined
        if (relation === null || relation === undefined) {
            throw new RequiredError("PermissionApi", "expandPermissions", "relation");
        }
        // Path Params
        const localVarPath = '/relation-tuples/expand';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
        if (maxDepth !== undefined) {
            requestContext.setQueryParam("max-depth", ObjectSerializer.serialize(maxDepth, "number", "int64"));
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
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     * @param maxDepth
     * @param postCheckPermissionBody
     */
    async postCheckPermission(maxDepth, postCheckPermissionBody, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/relation-tuples/check/openapi';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (maxDepth !== undefined) {
            requestContext.setQueryParam("max-depth", ObjectSerializer.serialize(maxDepth, "number", "int64"));
        }
        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(ObjectSerializer.serialize(postCheckPermissionBody, "PostCheckPermissionBody", ""), contentType);
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
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     * @param maxDepth nolint:deadcode,unused
     * @param postCheckPermissionOrErrorBody
     */
    async postCheckPermissionOrError(maxDepth, postCheckPermissionOrErrorBody, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/relation-tuples/check';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (maxDepth !== undefined) {
            requestContext.setQueryParam("max-depth", ObjectSerializer.serialize(maxDepth, "number", "int64"));
        }
        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(ObjectSerializer.serialize(postCheckPermissionOrErrorBody, "PostCheckPermissionOrErrorBody", ""), contentType);
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
export class PermissionApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkPermission
     * @throws ApiException if the response code was not in [200, 299]
     */
    async checkPermission(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "CheckPermissionResult", "");
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
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "CheckPermissionResult", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkPermissionOrError
     * @throws ApiException if the response code was not in [200, 299]
     */
    async checkPermissionOrError(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "CheckPermissionResult", "");
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "CheckPermissionResult", "");
            throw new ApiException(response.httpStatusCode, "checkPermissionResult", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "CheckPermissionResult", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to expandPermissions
     * @throws ApiException if the response code was not in [200, 299]
     */
    async expandPermissions(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ExpandedPermissionTree", "");
            return body;
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
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ExpandedPermissionTree", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postCheckPermission
     * @throws ApiException if the response code was not in [200, 299]
     */
    async postCheckPermission(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "CheckPermissionResult", "");
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
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "CheckPermissionResult", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postCheckPermissionOrError
     * @throws ApiException if the response code was not in [200, 299]
     */
    async postCheckPermissionOrError(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "CheckPermissionResult", "");
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "CheckPermissionResult", "");
            throw new ApiException(response.httpStatusCode, "checkPermissionResult", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "CheckPermissionResult", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
}
