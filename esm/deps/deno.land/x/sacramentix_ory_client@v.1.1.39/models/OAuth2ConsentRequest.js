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
class OAuth2ConsentRequest {
    static getAttributeTypeMap() {
        return OAuth2ConsentRequest.attributeTypeMap;
    }
    constructor() {
        /**
        * ACR represents the Authentication AuthorizationContext Class Reference value for this authentication session. You can use it to express that, for example, a user authenticated using two factor authentication.
        */
        Object.defineProperty(this, 'acr', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'amr', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * ID is the identifier (\"authorization challenge\") of the consent authorization request. It is used to identify the session.
        */
        Object.defineProperty(this, 'challenge', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'client', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'context', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * LoginChallenge is the login challenge this consent challenge belongs to. It can be used to associate a login and consent request in the login & consent app.
        */
        Object.defineProperty(this, 'login_challenge', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * LoginSessionID is the login session ID. If the user-agent reuses a login session (via cookie / remember flag) this ID will remain the same. If the user-agent did not have an existing authentication session (e.g. remember is false) this will be a new random value. This value is used as the \"sid\" parameter in the ID Token and in OIDC Front-/Back- channel logout. It\'s value can generally be used to associate consecutive login requests by a certain user.
        */
        Object.defineProperty(this, 'login_session_id', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'oidc_context', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * RequestURL is the original OAuth 2.0 Authorization URL requested by the OAuth 2.0 client. It is the URL which initiates the OAuth 2.0 Authorization Code or OAuth 2.0 Implicit flow. This URL is typically not needed, but might come in handy if you want to deal with additional request parameters.
        */
        Object.defineProperty(this, 'request_url', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'requested_access_token_audience', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'requested_scope', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Skip, if true, implies that the client has requested the same scopes from the same user previously. If true, you must not ask the user to grant the requested scopes. You must however either allow or deny the consent request using the usual API call.
        */
        Object.defineProperty(this, 'skip', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Subject is the user ID of the end-user that authenticated. Now, that end user needs to grant or deny the scope requested by the OAuth 2.0 client.
        */
        Object.defineProperty(this, 'subject', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(OAuth2ConsentRequest, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(OAuth2ConsentRequest, "attributeTypeMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            "name": "acr",
            "baseName": "acr",
            "type": "string",
            "format": ""
        },
        {
            "name": "amr",
            "baseName": "amr",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "challenge",
            "baseName": "challenge",
            "type": "string",
            "format": ""
        },
        {
            "name": "client",
            "baseName": "client",
            "type": "OAuth2Client",
            "format": ""
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "any",
            "format": ""
        },
        {
            "name": "login_challenge",
            "baseName": "login_challenge",
            "type": "string",
            "format": ""
        },
        {
            "name": "login_session_id",
            "baseName": "login_session_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "oidc_context",
            "baseName": "oidc_context",
            "type": "OAuth2ConsentRequestOpenIDConnectContext",
            "format": ""
        },
        {
            "name": "request_url",
            "baseName": "request_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "requested_access_token_audience",
            "baseName": "requested_access_token_audience",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "requested_scope",
            "baseName": "requested_scope",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "skip",
            "baseName": "skip",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        }
    ]
});
export { OAuth2ConsentRequest };
