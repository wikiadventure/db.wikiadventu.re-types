// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.js';
import { HttpMethod } from '../http/http.js';
import { ObjectSerializer } from '../models/ObjectSerializer.js';
import { ApiException } from './exception.js';
import { isCodeInRange } from '../util.js';
/**
 * no description
 */
export class ProjectApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Creates a new project.
     * Create a Project
     * @param createProjectBody
     */
    async createProject(createProjectBody, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/projects';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(ObjectSerializer.serialize(createProjectBody, "CreateProjectBody", ""), contentType);
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
     * Create an API token for a project.
     * Create project API token
     * @param project The Project ID or Project slug
     * @param createProjectApiKeyRequest
     */
    async createProjectApiKey(project, createProjectApiKeyRequest, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'project' is not null or undefined
        if (project === null || project === undefined) {
            throw new RequiredError("ProjectApi", "createProjectApiKey", "project");
        }
        // Path Params
        const localVarPath = '/projects/{project}/tokens'
            .replace('{' + 'project' + '}', encodeURIComponent(String(project)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(ObjectSerializer.serialize(createProjectApiKeyRequest, "CreateProjectApiKeyRequest", ""), contentType);
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
     * Deletes an API token and immediately removes it.
     * Delete project API token
     * @param project The Project ID or Project slug
     * @param tokenId The Token ID
     */
    async deleteProjectApiKey(project, tokenId, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'project' is not null or undefined
        if (project === null || project === undefined) {
            throw new RequiredError("ProjectApi", "deleteProjectApiKey", "project");
        }
        // verify required parameter 'tokenId' is not null or undefined
        if (tokenId === null || tokenId === undefined) {
            throw new RequiredError("ProjectApi", "deleteProjectApiKey", "tokenId");
        }
        // Path Params
        const localVarPath = '/projects/{project}/tokens/{token_id}'
            .replace('{' + 'project' + '}', encodeURIComponent(String(project)))
            .replace('{' + 'token_id' + '}', encodeURIComponent(String(tokenId)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Use this API to get your active project in the Ory Network Console UI.
     * Returns the Ory Network Project selected in the Ory Network Console
     */
    async getActiveProjectInConsole(_options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/console/active/project';
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
     * Get a projects you have access to by its ID.
     * Get a Project
     * @param projectId Project ID  The project\&#39;s ID.
     */
    async getProject(projectId, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new RequiredError("ProjectApi", "getProject", "projectId");
        }
        // Path Params
        const localVarPath = '/projects/{project_id}'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)));
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
     * This endpoint requires the user to be a member of the project with the role `OWNER` or `DEVELOPER`.
     * Get all members associated with this project
     * @param projectId Project ID  The project\&#39;s ID.
     */
    async getProjectMembers(projectId, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new RequiredError("ProjectApi", "getProjectMembers", "projectId");
        }
        // Path Params
        const localVarPath = '/projects/{project_id}/members'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)));
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
     * Retrieves project metrics for the specified event type and time range
     * @param projectId Project ID
     * @param eventType The event type to query for
     * @param resolution The resolution of the buckets  The minimum resolution is 1 hour.
     * @param _from The start time of the time window
     * @param to The end time of the time window
     */
    async getProjectMetrics(projectId, eventType, resolution, _from, to, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new RequiredError("ProjectApi", "getProjectMetrics", "projectId");
        }
        // verify required parameter 'eventType' is not null or undefined
        if (eventType === null || eventType === undefined) {
            throw new RequiredError("ProjectApi", "getProjectMetrics", "eventType");
        }
        // verify required parameter 'resolution' is not null or undefined
        if (resolution === null || resolution === undefined) {
            throw new RequiredError("ProjectApi", "getProjectMetrics", "resolution");
        }
        // verify required parameter '_from' is not null or undefined
        if (_from === null || _from === undefined) {
            throw new RequiredError("ProjectApi", "getProjectMetrics", "_from");
        }
        // verify required parameter 'to' is not null or undefined
        if (to === null || to === undefined) {
            throw new RequiredError("ProjectApi", "getProjectMetrics", "to");
        }
        // Path Params
        const localVarPath = '/projects/{project_id}/metrics'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (eventType !== undefined) {
            requestContext.setQueryParam("event_type", ObjectSerializer.serialize(eventType, "string", ""));
        }
        // Query Params
        if (resolution !== undefined) {
            requestContext.setQueryParam("resolution", ObjectSerializer.serialize(resolution, "string", ""));
        }
        // Query Params
        if (_from !== undefined) {
            requestContext.setQueryParam("from", ObjectSerializer.serialize(_from, "Date", "date-time"));
        }
        // Query Params
        if (to !== undefined) {
            requestContext.setQueryParam("to", ObjectSerializer.serialize(to, "Date", "date-time"));
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
     * A list of all the project\'s API tokens.
     * List a project\'s API Tokens
     * @param project The Project ID or Project slug
     */
    async listProjectApiKeys(project, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'project' is not null or undefined
        if (project === null || project === undefined) {
            throw new RequiredError("ProjectApi", "listProjectApiKeys", "project");
        }
        // Path Params
        const localVarPath = '/projects/{project}/tokens'
            .replace('{' + 'project' + '}', encodeURIComponent(String(project)));
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
     * Lists all projects you have access to.
     * List All Projects
     */
    async listProjects(_options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/projects';
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
     * Deprecated: Use the `patchProjectWithRevision` endpoint instead to specify the exact revision the patch was generated for.  This endpoints allows you to patch individual Ory Network project configuration keys for Ory\'s services (identity, permission, ...). The configuration format is fully compatible with the open source projects for the respective services (e.g. Ory Kratos for Identity, Ory Keto for Permissions).  This endpoint expects the `version` key to be set in the payload. If it is unset, it will try to import the config as if it is from the most recent version.  If you have an older version of a configuration, you should set the version key in the payload!  While this endpoint is able to process all configuration items related to features (e.g. password reset), it does not support operational configuration items (e.g. port, tracing, logging) otherwise available in the open source.  For configuration items that can not be translated to the Ory Network, this endpoint will return a list of warnings to help you understand which parts of your config could not be processed.
     * Patch an Ory Network Project Configuration
     * @param projectId Project ID  The project\&#39;s ID.
     * @param jsonPatch
     */
    async patchProject(projectId, jsonPatch, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new RequiredError("ProjectApi", "patchProject", "projectId");
        }
        // Path Params
        const localVarPath = '/projects/{project_id}'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(ObjectSerializer.serialize(jsonPatch, "Array<JsonPatch>", ""), contentType);
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
     * !! Use with extreme caution !!  Using this API endpoint you can purge (completely delete) a project and its data. This action can not be undone and will delete ALL your data.  !! Use with extreme caution !!
     * Irrecoverably purge a project
     * @param projectId Project ID  The project\&#39;s ID.
     */
    async purgeProject(projectId, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new RequiredError("ProjectApi", "purgeProject", "projectId");
        }
        // Path Params
        const localVarPath = '/projects/{project_id}'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * This also sets their invite status to `REMOVED`. This endpoint requires the user to be a member of the project with the role `OWNER`.
     * Remove a member associated with this project
     * @param projectId Project ID  The project\&#39;s ID.
     * @param memberId Member ID
     */
    async removeProjectMember(projectId, memberId, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new RequiredError("ProjectApi", "removeProjectMember", "projectId");
        }
        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("ProjectApi", "removeProjectMember", "memberId");
        }
        // Path Params
        const localVarPath = '/projects/{project_id}/members/{member_id}'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)))
            .replace('{' + 'member_id' + '}', encodeURIComponent(String(memberId)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Use this API to set your active project in the Ory Network Console UI.
     * Sets the Ory Network Project active in the Ory Network Console
     * @param setActiveProjectInConsoleBody
     */
    async setActiveProjectInConsole(setActiveProjectInConsoleBody, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/console/active/project';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(ObjectSerializer.serialize(setActiveProjectInConsoleBody, "SetActiveProjectInConsoleBody", ""), contentType);
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
     * This endpoints allows you to update the Ory Network project configuration for individual services (identity, permission, ...). The configuration is fully compatible with the open source projects for the respective services (e.g. Ory Kratos for Identity, Ory Keto for Permissions).  This endpoint expects the `version` key to be set in the payload. If it is unset, it will try to import the config as if it is from the most recent version.  If you have an older version of a configuration, you should set the version key in the payload!  While this endpoint is able to process all configuration items related to features (e.g. password reset), it does not support operational configuration items (e.g. port, tracing, logging) otherwise available in the open source.  For configuration items that can not be translated to the Ory Network, this endpoint will return a list of warnings to help you understand which parts of your config could not be processed.  Be aware that updating any service\'s configuration will completely override your current configuration for that service!
     * Update an Ory Network Project Configuration
     * @param projectId Project ID  The project\&#39;s ID.
     * @param setProject
     */
    async setProject(projectId, setProject, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new RequiredError("ProjectApi", "setProject", "projectId");
        }
        // Path Params
        const localVarPath = '/projects/{project_id}'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(ObjectSerializer.serialize(setProject, "SetProject", ""), contentType);
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
export class ProjectApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createProject
     * @throws ApiException if the response code was not in [200, 299]
     */
    async createProject(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Project", "");
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
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
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Project", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createProjectApiKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    async createProjectApiKey(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ProjectApiKey", "");
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ProjectApiKey", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteProjectApiKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    async deleteProjectApiKey(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
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
     * @params response Response returned by the server for a request to getActiveProjectInConsole
     * @throws ApiException if the response code was not in [200, 299]
     */
    async getActiveProjectInConsole(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ActiveProjectInConsole", "");
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new ApiException(response.httpStatusCode, "genericError", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new ApiException(response.httpStatusCode, "genericError", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ActiveProjectInConsole", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProject
     * @throws ApiException if the response code was not in [200, 299]
     */
    async getProject(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Project", "");
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
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
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Project", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProjectMembers
     * @throws ApiException if the response code was not in [200, 299]
     */
    async getProjectMembers(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Array<CloudAccount>", "");
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new ApiException(response.httpStatusCode, "genericError", body, response.headers);
        }
        if (isCodeInRange("406", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new ApiException(response.httpStatusCode, "genericError", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new ApiException(response.httpStatusCode, "genericError", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Array<CloudAccount>", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProjectMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    async getProjectMetrics(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "GetProjectMetricsResponse", "");
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new ApiException(response.httpStatusCode, "genericError", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new ApiException(response.httpStatusCode, "genericError", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new ApiException(response.httpStatusCode, "genericError", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "GetProjectMetricsResponse", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listProjectApiKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    async listProjectApiKeys(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Array<ProjectApiKey>", "");
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Array<ProjectApiKey>", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listProjects
     * @throws ApiException if the response code was not in [200, 299]
     */
    async listProjects(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Array<ProjectMetadata>", "");
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
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
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Array<ProjectMetadata>", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchProject
     * @throws ApiException if the response code was not in [200, 299]
     */
    async patchProject(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "SuccessfulProjectUpdate", "");
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
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
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "SuccessfulProjectUpdate", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to purgeProject
     * @throws ApiException if the response code was not in [200, 299]
     */
    async purgeProject(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new ApiException(response.httpStatusCode, "genericError", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new ApiException(response.httpStatusCode, "genericError", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new ApiException(response.httpStatusCode, "genericError", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new ApiException(response.httpStatusCode, "genericError", body, response.headers);
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
     * @params response Response returned by the server for a request to removeProjectMember
     * @throws ApiException if the response code was not in [200, 299]
     */
    async removeProjectMember(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new ApiException(response.httpStatusCode, "genericError", body, response.headers);
        }
        if (isCodeInRange("406", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new ApiException(response.httpStatusCode, "genericError", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new ApiException(response.httpStatusCode, "genericError", body, response.headers);
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
     * @params response Response returned by the server for a request to setActiveProjectInConsole
     * @throws ApiException if the response code was not in [200, 299]
     */
    async setActiveProjectInConsole(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new ApiException(response.httpStatusCode, "genericError", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new ApiException(response.httpStatusCode, "genericError", body, response.headers);
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
     * @params response Response returned by the server for a request to setProject
     * @throws ApiException if the response code was not in [200, 299]
     */
    async setProject(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "SuccessfulProjectUpdate", "");
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
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
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "SuccessfulProjectUpdate", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
}
