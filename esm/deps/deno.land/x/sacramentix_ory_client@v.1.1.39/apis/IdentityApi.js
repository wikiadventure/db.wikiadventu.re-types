// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.js';
import { HttpMethod } from '../http/http.js';
import { ObjectSerializer } from '../models/ObjectSerializer.js';
import { ApiException } from './exception.js';
import { isCodeInRange } from '../util.js';
/**
 * no description
 */
export class IdentityApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Creates or delete multiple [identities](https://www.ory.sh/docs/kratos/concepts/identity-user-model). This endpoint can also be used to [import credentials](https://www.ory.sh/docs/kratos/manage-identities/import-user-accounts-identities) for instance passwords, social sign in configurations or multifactor methods.
     * Create and deletes multiple identities
     * @param patchIdentitiesBody
     */
    async batchPatchIdentities(patchIdentitiesBody, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/admin/identities';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(ObjectSerializer.serialize(patchIdentitiesBody, "PatchIdentitiesBody", ""), contentType);
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
     * Create an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model).  This endpoint can also be used to [import credentials](https://www.ory.sh/docs/kratos/manage-identities/import-user-accounts-identities) for instance passwords, social sign in configurations or multifactor methods.
     * Create an Identity
     * @param createIdentityBody
     */
    async createIdentity(createIdentityBody, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/admin/identities';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(ObjectSerializer.serialize(createIdentityBody, "CreateIdentityBody", ""), contentType);
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
     * This endpoint creates a recovery code which should be given to the user in order for them to recover (or activate) their account.
     * Create a Recovery Code
     * @param createRecoveryCodeForIdentityBody
     */
    async createRecoveryCodeForIdentity(createRecoveryCodeForIdentityBody, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/admin/recovery/code';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(ObjectSerializer.serialize(createRecoveryCodeForIdentityBody, "CreateRecoveryCodeForIdentityBody", ""), contentType);
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
     * This endpoint creates a recovery link which should be given to the user in order for them to recover (or activate) their account.
     * Create a Recovery Link
     * @param createRecoveryLinkForIdentityBody
     */
    async createRecoveryLinkForIdentity(createRecoveryLinkForIdentityBody, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/admin/recovery/link';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(ObjectSerializer.serialize(createRecoveryLinkForIdentityBody, "CreateRecoveryLinkForIdentityBody", ""), contentType);
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
     * Calling this endpoint irrecoverably and permanently deletes the [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) given its ID. This action can not be undone. This endpoint returns 204 when the identity was deleted or when the identity was not found, in which case it is assumed that is has been deleted already.
     * Delete an Identity
     * @param id ID is the identity\&#39;s ID.
     */
    async deleteIdentity(id, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("IdentityApi", "deleteIdentity", "id");
        }
        // Path Params
        const localVarPath = '/admin/identities/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
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
     * Delete an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) credential by its type You can only delete second factor (aal2) credentials.
     * Delete a credential for a specific identity
     * @param id ID is the identity\&#39;s ID.
     * @param type Type is the credential\&#39;s Type. One of totp, webauthn, lookup
     */
    async deleteIdentityCredentials(id, type, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("IdentityApi", "deleteIdentityCredentials", "id");
        }
        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new RequiredError("IdentityApi", "deleteIdentityCredentials", "type");
        }
        // Path Params
        const localVarPath = '/admin/identities/{id}/credentials/{type}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'type' + '}', encodeURIComponent(String(type)));
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
     * Calling this endpoint irrecoverably and permanently deletes and invalidates all sessions that belong to the given Identity.
     * Delete & Invalidate an Identity\'s Sessions
     * @param id ID is the identity\&#39;s ID.
     */
    async deleteIdentitySessions(id, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("IdentityApi", "deleteIdentitySessions", "id");
        }
        // Path Params
        const localVarPath = '/admin/identities/{id}/sessions'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
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
     * Calling this endpoint deactivates the specified session. Session data is not deleted.
     * Deactivate a Session
     * @param id ID is the session\&#39;s ID.
     */
    async disableSession(id, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("IdentityApi", "disableSession", "id");
        }
        // Path Params
        const localVarPath = '/admin/sessions/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
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
     * Calling this endpoint extends the given session ID. If `session.earliest_possible_extend` is set it will only extend the session after the specified time has passed.  Retrieve the session ID from the `/sessions/whoami` endpoint / `toSession` SDK method.
     * Extend a Session
     * @param id ID is the session\&#39;s ID.
     */
    async extendSession(id, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("IdentityApi", "extendSession", "id");
        }
        // Path Params
        const localVarPath = '/admin/sessions/{id}/extend'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
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
     * Return an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) by its ID. You can optionally include credentials (e.g. social sign in connections) in the response by using the `include_credential` query parameter.
     * Get an Identity
     * @param id ID must be set to the ID of identity you want to get
     * @param includeCredential Include Credentials in Response  Include any credential, for example &#x60;password&#x60; or &#x60;oidc&#x60;, in the response. When set to &#x60;oidc&#x60;, This will return the initial OAuth 2.0 Access Token, OAuth 2.0 Refresh Token and the OpenID Connect ID Token if available.
     */
    async getIdentity(id, includeCredential, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("IdentityApi", "getIdentity", "id");
        }
        // Path Params
        const localVarPath = '/admin/identities/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (includeCredential !== undefined) {
            requestContext.setQueryParam("include_credential", ObjectSerializer.serialize(includeCredential, "Array<'password' | 'totp' | 'oidc' | 'webauthn' | 'lookup_secret'>", ""));
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
     * Return a specific identity schema.
     * Get Identity JSON Schema
     * @param id ID must be set to the ID of schema you want to get
     */
    async getIdentitySchema(id, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("IdentityApi", "getIdentitySchema", "id");
        }
        // Path Params
        const localVarPath = '/schemas/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * This endpoint is useful for:  Getting a session object with all specified expandables that exist in an administrative context.
     * Get Session
     * @param id ID is the session\&#39;s ID.
     * @param expand ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session. Example - ?expand&#x3D;Identity&amp;expand&#x3D;Devices If no value is provided, the expandable properties are skipped.
     */
    async getSession(id, expand, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("IdentityApi", "getSession", "id");
        }
        // Path Params
        const localVarPath = '/admin/sessions/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (expand !== undefined) {
            requestContext.setQueryParam("expand", ObjectSerializer.serialize(expand, "Array<string>", ""));
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
     * Lists all [identities](https://www.ory.sh/docs/kratos/concepts/identity-user-model) in the system.
     * List Identities
     * @param perPage Items per Page  This is the number of items per page.
     * @param page Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     * @param credentialsIdentifier CredentialsIdentifier is the identifier (username, email) of the credentials to look up.
     */
    async listIdentities(perPage, page, credentialsIdentifier, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/admin/identities';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int64"));
        }
        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int64"));
        }
        // Query Params
        if (credentialsIdentifier !== undefined) {
            requestContext.setQueryParam("credentials_identifier", ObjectSerializer.serialize(credentialsIdentifier, "string", ""));
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
     * Returns a list of all identity schemas currently in use.
     * Get all Identity Schemas
     * @param perPage Items per Page  This is the number of items per page.
     * @param page Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     */
    async listIdentitySchemas(perPage, page, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/schemas';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int64"));
        }
        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int64"));
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * This endpoint returns all sessions that belong to the given Identity.
     * List an Identity\'s Sessions
     * @param id ID is the identity\&#39;s ID.
     * @param perPage Items per Page  This is the number of items per page.
     * @param page Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     * @param active Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned.
     */
    async listIdentitySessions(id, perPage, page, active, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("IdentityApi", "listIdentitySessions", "id");
        }
        // Path Params
        const localVarPath = '/admin/identities/{id}/sessions'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int64"));
        }
        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int64"));
        }
        // Query Params
        if (active !== undefined) {
            requestContext.setQueryParam("active", ObjectSerializer.serialize(active, "boolean", ""));
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
     * Listing all sessions that exist.
     * List All Sessions
     * @param pageSize Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param pageToken Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param active Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned.
     * @param expand ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session. If no value is provided, the expandable properties are skipped.
     */
    async listSessions(pageSize, pageToken, active, expand, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/admin/sessions';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", "int64"));
        }
        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("page_token", ObjectSerializer.serialize(pageToken, "string", ""));
        }
        // Query Params
        if (active !== undefined) {
            requestContext.setQueryParam("active", ObjectSerializer.serialize(active, "boolean", ""));
        }
        // Query Params
        if (expand !== undefined) {
            requestContext.setQueryParam("expand", ObjectSerializer.serialize(expand, "Array<string>", ""));
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
     * Partially updates an [identity\'s](https://www.ory.sh/docs/kratos/concepts/identity-user-model) field using [JSON Patch](https://jsonpatch.com/). The fields `id`, `stateChangedAt` and `credentials` can not be updated using this method.
     * Patch an Identity
     * @param id ID must be set to the ID of identity you want to update
     * @param jsonPatch
     */
    async patchIdentity(id, jsonPatch, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("IdentityApi", "patchIdentity", "id");
        }
        // Path Params
        const localVarPath = '/admin/identities/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
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
     * This endpoint updates an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model). The full identity payload (except credentials) is expected. It is possible to update the identity\'s credentials as well.
     * Update an Identity
     * @param id ID must be set to the ID of identity you want to update
     * @param updateIdentityBody
     */
    async updateIdentity(id, updateIdentityBody, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("IdentityApi", "updateIdentity", "id");
        }
        // Path Params
        const localVarPath = '/admin/identities/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(ObjectSerializer.serialize(updateIdentityBody, "UpdateIdentityBody", ""), contentType);
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
export class IdentityApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to batchPatchIdentities
     * @throws ApiException if the response code was not in [200, 299]
     */
    async batchPatchIdentities(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "BatchPatchIdentitiesResponse", "");
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "BatchPatchIdentitiesResponse", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createIdentity
     * @throws ApiException if the response code was not in [200, 299]
     */
    async createIdentity(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Identity", "");
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Identity", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRecoveryCodeForIdentity
     * @throws ApiException if the response code was not in [200, 299]
     */
    async createRecoveryCodeForIdentity(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "RecoveryCodeForIdentity", "");
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
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "RecoveryCodeForIdentity", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRecoveryLinkForIdentity
     * @throws ApiException if the response code was not in [200, 299]
     */
    async createRecoveryLinkForIdentity(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "RecoveryLinkForIdentity", "");
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
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "RecoveryLinkForIdentity", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIdentity
     * @throws ApiException if the response code was not in [200, 299]
     */
    async deleteIdentity(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
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
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIdentityCredentials
     * @throws ApiException if the response code was not in [200, 299]
     */
    async deleteIdentityCredentials(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Identity", "");
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
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Identity", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIdentitySessions
     * @throws ApiException if the response code was not in [200, 299]
     */
    async deleteIdentitySessions(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
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
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to disableSession
     * @throws ApiException if the response code was not in [200, 299]
     */
    async disableSession(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
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
     * @params response Response returned by the server for a request to extendSession
     * @throws ApiException if the response code was not in [200, 299]
     */
    async extendSession(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Session", "");
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
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Session", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIdentity
     * @throws ApiException if the response code was not in [200, 299]
     */
    async getIdentity(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Identity", "");
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
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Identity", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIdentitySchema
     * @throws ApiException if the response code was not in [200, 299]
     */
    async getIdentitySchema(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "any", "");
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
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "any", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSession
     * @throws ApiException if the response code was not in [200, 299]
     */
    async getSession(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Session", "");
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
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Session", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIdentities
     * @throws ApiException if the response code was not in [200, 299]
     */
    async listIdentities(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Array<Identity>", "");
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Array<Identity>", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIdentitySchemas
     * @throws ApiException if the response code was not in [200, 299]
     */
    async listIdentitySchemas(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Array<IdentitySchemaContainer>", "");
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Array<IdentitySchemaContainer>", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIdentitySessions
     * @throws ApiException if the response code was not in [200, 299]
     */
    async listIdentitySessions(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Array<Session>", "");
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
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Array<Session>", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
    async listSessions(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Array<Session>", "");
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
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Array<Session>", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchIdentity
     * @throws ApiException if the response code was not in [200, 299]
     */
    async patchIdentity(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Identity", "");
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
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Identity", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateIdentity
     * @throws ApiException if the response code was not in [200, 299]
     */
    async updateIdentity(response) {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Identity", "");
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
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "ErrorGeneric", "");
            throw new ApiException(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer.deserialize(ObjectSerializer.parse(await response.body.text(), contentType), "Identity", "");
            return body;
        }
        throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
}
