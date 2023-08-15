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
/**
* Includes links to several endpoints (for example `/oauth2/token`) and exposes information on supported signature algorithms among others.
*/
class OidcConfiguration {
    /**
    * OAuth 2.0 Authorization Endpoint URL
    */
    'authorization_endpoint';
    /**
    * OpenID Connect Back-Channel Logout Session Required  Boolean value specifying whether the OP can pass a sid (session ID) Claim in the Logout Token to identify the RP session with the OP. If supported, the sid Claim is also included in ID Tokens issued by the OP
    */
    'backchannel_logout_session_supported';
    /**
    * OpenID Connect Back-Channel Logout Supported  Boolean value specifying whether the OP supports back-channel logout, with true indicating support.
    */
    'backchannel_logout_supported';
    /**
    * OpenID Connect Claims Parameter Parameter Supported  Boolean value specifying whether the OP supports use of the claims parameter, with true indicating support.
    */
    'claims_parameter_supported';
    /**
    * OpenID Connect Supported Claims  JSON array containing a list of the Claim Names of the Claims that the OpenID Provider MAY be able to supply values for. Note that for privacy or other reasons, this might not be an exhaustive list.
    */
    'claims_supported';
    /**
    * OAuth 2.0 PKCE Supported Code Challenge Methods  JSON array containing a list of Proof Key for Code Exchange (PKCE) [RFC7636] code challenge methods supported by this authorization server.
    */
    'code_challenge_methods_supported';
    /**
    * OpenID Connect End-Session Endpoint  URL at the OP to which an RP can perform a redirect to request that the End-User be logged out at the OP.
    */
    'end_session_endpoint';
    /**
    * OpenID Connect Front-Channel Logout Session Required  Boolean value specifying whether the OP can pass iss (issuer) and sid (session ID) query parameters to identify the RP session with the OP when the frontchannel_logout_uri is used. If supported, the sid Claim is also included in ID Tokens issued by the OP.
    */
    'frontchannel_logout_session_supported';
    /**
    * OpenID Connect Front-Channel Logout Supported  Boolean value specifying whether the OP supports HTTP-based logout, with true indicating support.
    */
    'frontchannel_logout_supported';
    /**
    * OAuth 2.0 Supported Grant Types  JSON array containing a list of the OAuth 2.0 Grant Type values that this OP supports.
    */
    'grant_types_supported';
    /**
    * OpenID Connect Default ID Token Signing Algorithms  Algorithm used to sign OpenID Connect ID Tokens.
    */
    'id_token_signed_response_alg';
    /**
    * OpenID Connect Supported ID Token Signing Algorithms  JSON array containing a list of the JWS signing algorithms (alg values) supported by the OP for the ID Token to encode the Claims in a JWT.
    */
    'id_token_signing_alg_values_supported';
    /**
    * OpenID Connect Issuer URL  An URL using the https scheme with no query or fragment component that the OP asserts as its IssuerURL Identifier. If IssuerURL discovery is supported , this value MUST be identical to the issuer value returned by WebFinger. This also MUST be identical to the iss Claim value in ID Tokens issued from this IssuerURL.
    */
    'issuer';
    /**
    * OpenID Connect Well-Known JSON Web Keys URL  URL of the OP\'s JSON Web Key Set [JWK] document. This contains the signing key(s) the RP uses to validate signatures from the OP. The JWK Set MAY also contain the Server\'s encryption key(s), which are used by RPs to encrypt requests to the Server. When both signing and encryption keys are made available, a use (Key Use) parameter value is REQUIRED for all keys in the referenced JWK Set to indicate each key\'s intended usage. Although some algorithms allow the same key to be used for both signatures and encryption, doing so is NOT RECOMMENDED, as it is less secure. The JWK x5c parameter MAY be used to provide X.509 representations of keys provided. When used, the bare key values MUST still be present and MUST match those in the certificate.
    */
    'jwks_uri';
    /**
    * OpenID Connect Dynamic Client Registration Endpoint URL
    */
    'registration_endpoint';
    /**
    * OpenID Connect Supported Request Object Signing Algorithms  JSON array containing a list of the JWS signing algorithms (alg values) supported by the OP for Request Objects, which are described in Section 6.1 of OpenID Connect Core 1.0 [OpenID.Core]. These algorithms are used both when the Request Object is passed by value (using the request parameter) and when it is passed by reference (using the request_uri parameter).
    */
    'request_object_signing_alg_values_supported';
    /**
    * OpenID Connect Request Parameter Supported  Boolean value specifying whether the OP supports use of the request parameter, with true indicating support.
    */
    'request_parameter_supported';
    /**
    * OpenID Connect Request URI Parameter Supported  Boolean value specifying whether the OP supports use of the request_uri parameter, with true indicating support.
    */
    'request_uri_parameter_supported';
    /**
    * OpenID Connect Requires Request URI Registration  Boolean value specifying whether the OP requires any request_uri values used to be pre-registered using the request_uris registration parameter.
    */
    'require_request_uri_registration';
    /**
    * OAuth 2.0 Supported Response Modes  JSON array containing a list of the OAuth 2.0 response_mode values that this OP supports.
    */
    'response_modes_supported';
    /**
    * OAuth 2.0 Supported Response Types  JSON array containing a list of the OAuth 2.0 response_type values that this OP supports. Dynamic OpenID Providers MUST support the code, id_token, and the token id_token Response Type values.
    */
    'response_types_supported';
    /**
    * OAuth 2.0 Token Revocation URL  URL of the authorization server\'s OAuth 2.0 revocation endpoint.
    */
    'revocation_endpoint';
    /**
    * OAuth 2.0 Supported Scope Values  JSON array containing a list of the OAuth 2.0 [RFC6749] scope values that this server supports. The server MUST support the openid scope value. Servers MAY choose not to advertise some supported scope values even when this parameter is used
    */
    'scopes_supported';
    /**
    * OpenID Connect Supported Subject Types  JSON array containing a list of the Subject Identifier types that this OP supports. Valid types include pairwise and public.
    */
    'subject_types_supported';
    /**
    * OAuth 2.0 Token Endpoint URL
    */
    'token_endpoint';
    /**
    * OAuth 2.0 Supported Client Authentication Methods  JSON array containing a list of Client Authentication methods supported by this Token Endpoint. The options are client_secret_post, client_secret_basic, client_secret_jwt, and private_key_jwt, as described in Section 9 of OpenID Connect Core 1.0
    */
    'token_endpoint_auth_methods_supported';
    /**
    * OpenID Connect Userinfo URL  URL of the OP\'s UserInfo Endpoint.
    */
    'userinfo_endpoint';
    /**
    * OpenID Connect User Userinfo Signing Algorithm  Algorithm used to sign OpenID Connect Userinfo Responses.
    */
    'userinfo_signed_response_alg';
    /**
    * OpenID Connect Supported Userinfo Signing Algorithm  JSON array containing a list of the JWS [JWS] signing algorithms (alg values) [JWA] supported by the UserInfo Endpoint to encode the Claims in a JWT [JWT].
    */
    'userinfo_signing_alg_values_supported';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "authorization_endpoint",
            "baseName": "authorization_endpoint",
            "type": "string",
            "format": ""
        },
        {
            "name": "backchannel_logout_session_supported",
            "baseName": "backchannel_logout_session_supported",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "backchannel_logout_supported",
            "baseName": "backchannel_logout_supported",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "claims_parameter_supported",
            "baseName": "claims_parameter_supported",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "claims_supported",
            "baseName": "claims_supported",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "code_challenge_methods_supported",
            "baseName": "code_challenge_methods_supported",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "end_session_endpoint",
            "baseName": "end_session_endpoint",
            "type": "string",
            "format": ""
        },
        {
            "name": "frontchannel_logout_session_supported",
            "baseName": "frontchannel_logout_session_supported",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "frontchannel_logout_supported",
            "baseName": "frontchannel_logout_supported",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "grant_types_supported",
            "baseName": "grant_types_supported",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "id_token_signed_response_alg",
            "baseName": "id_token_signed_response_alg",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "id_token_signing_alg_values_supported",
            "baseName": "id_token_signing_alg_values_supported",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string",
            "format": ""
        },
        {
            "name": "jwks_uri",
            "baseName": "jwks_uri",
            "type": "string",
            "format": ""
        },
        {
            "name": "registration_endpoint",
            "baseName": "registration_endpoint",
            "type": "string",
            "format": ""
        },
        {
            "name": "request_object_signing_alg_values_supported",
            "baseName": "request_object_signing_alg_values_supported",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "request_parameter_supported",
            "baseName": "request_parameter_supported",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "request_uri_parameter_supported",
            "baseName": "request_uri_parameter_supported",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "require_request_uri_registration",
            "baseName": "require_request_uri_registration",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "response_modes_supported",
            "baseName": "response_modes_supported",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "response_types_supported",
            "baseName": "response_types_supported",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "revocation_endpoint",
            "baseName": "revocation_endpoint",
            "type": "string",
            "format": ""
        },
        {
            "name": "scopes_supported",
            "baseName": "scopes_supported",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "subject_types_supported",
            "baseName": "subject_types_supported",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "token_endpoint",
            "baseName": "token_endpoint",
            "type": "string",
            "format": ""
        },
        {
            "name": "token_endpoint_auth_methods_supported",
            "baseName": "token_endpoint_auth_methods_supported",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "userinfo_endpoint",
            "baseName": "userinfo_endpoint",
            "type": "string",
            "format": ""
        },
        {
            "name": "userinfo_signed_response_alg",
            "baseName": "userinfo_signed_response_alg",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "userinfo_signing_alg_values_supported",
            "baseName": "userinfo_signing_alg_values_supported",
            "type": "Array<string>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return OidcConfiguration.attributeTypeMap;
    }
    constructor() {
    }
}
export { OidcConfiguration };