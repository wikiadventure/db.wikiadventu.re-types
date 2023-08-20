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
class AcceptOAuth2LoginRequest {
    static getAttributeTypeMap() {
        return AcceptOAuth2LoginRequest.attributeTypeMap;
    }
    constructor() {
        /**
        * ACR sets the Authentication AuthorizationContext Class Reference value for this authentication session. You can use it to express that, for example, a user authenticated using two factor authentication.
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
        Object.defineProperty(this, 'context', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Extend OAuth2 authentication session lifespan  If set to `true`, the OAuth2 authentication cookie lifespan is extended. This is for example useful if you want the user to be able to use `prompt=none` continuously.  This value can only be set to `true` if the user has an authentication, which is the case if the `skip` value is `true`.
        */
        Object.defineProperty(this, 'extend_session_lifespan', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * ForceSubjectIdentifier forces the \"pairwise\" user ID of the end-user that authenticated. The \"pairwise\" user ID refers to the (Pairwise Identifier Algorithm)[http://openid.net/specs/openid-connect-core-1_0.html#PairwiseAlg] of the OpenID Connect specification. It allows you to set an obfuscated subject (\"user\") identifier that is unique to the client.  Please note that this changes the user ID on endpoint /userinfo and sub claim of the ID Token. It does not change the sub claim in the OAuth 2.0 Introspection.  Per default, ORY Hydra handles this value with its own algorithm. In case you want to set this yourself you can use this field. Please note that setting this field has no effect if `pairwise` is not configured in ORY Hydra or the OAuth 2.0 Client does not expect a pairwise identifier (set via `subject_type` key in the client\'s configuration).  Please also be aware that ORY Hydra is unable to properly compute this value during authentication. This implies that you have to compute this value on every authentication process (probably depending on the client ID or some other unique value).  If you fail to compute the proper value, then authentication processes which have id_token_hint set might fail.
        */
        Object.defineProperty(this, 'force_subject_identifier', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Remember, if set to true, tells ORY Hydra to remember this user by telling the user agent (browser) to store a cookie with authentication data. If the same user performs another OAuth 2.0 Authorization Request, he/she will not be asked to log in again.
        */
        Object.defineProperty(this, 'remember', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * RememberFor sets how long the authentication should be remembered for in seconds. If set to `0`, the authorization will be remembered for the duration of the browser session (using a session cookie).
        */
        Object.defineProperty(this, 'remember_for', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
        * Subject is the user ID of the end-user that authenticated.
        */
        Object.defineProperty(this, 'subject', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
Object.defineProperty(AcceptOAuth2LoginRequest, "discriminator", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: undefined
});
Object.defineProperty(AcceptOAuth2LoginRequest, "attributeTypeMap", {
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
            "name": "context",
            "baseName": "context",
            "type": "any",
            "format": ""
        },
        {
            "name": "extend_session_lifespan",
            "baseName": "extend_session_lifespan",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "force_subject_identifier",
            "baseName": "force_subject_identifier",
            "type": "string",
            "format": ""
        },
        {
            "name": "remember",
            "baseName": "remember",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "remember_for",
            "baseName": "remember_for",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        }
    ]
});
export { AcceptOAuth2LoginRequest };
