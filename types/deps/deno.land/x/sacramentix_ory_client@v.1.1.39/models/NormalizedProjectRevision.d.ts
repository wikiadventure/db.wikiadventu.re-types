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
import { KetoNamespace } from './KetoNamespace.js';
import { NormalizedProjectRevisionHook } from './NormalizedProjectRevisionHook.js';
import { NormalizedProjectRevisionIdentitySchema } from './NormalizedProjectRevisionIdentitySchema.js';
import { NormalizedProjectRevisionThirdPartyProvider } from './NormalizedProjectRevisionThirdPartyProvider.js';
export declare class NormalizedProjectRevision {
    /**
    * The Project\'s Revision Creation Date
    */
    'created_at'?: Date;
    'hydra_oauth2_allowed_top_level_claims'?: Array<string>;
    /**
    * Automatically grant authorized OAuth2 Scope in OAuth2 Client Credentials Flow.  Each OAuth2 Client is allowed to request a predefined OAuth2 Scope (for example `read write`). If this option is enabled, the full scope is automatically granted when performing the OAuth2 Client Credentials flow.  If disabled, the OAuth2 Client has to request the scope in the OAuth2 request by providing the `scope` query parameter.  Setting this option to true is common if you need compatibility with MITREid.  This governs the \"oauth2.client_credentials.default_grant_allowed_scope\" setting.
    */
    'hydra_oauth2_client_credentials_default_grant_allowed_scope'?: boolean;
    /**
    * Set to true if you want to exclude claim `nbf (not before)` part of access token.  This governs the \"oauth2.exclude_not_before_claim\" setting.
    */
    'hydra_oauth2_exclude_not_before_claim'?: boolean;
    /**
    * Configures if the issued at (`iat`) claim is required in the JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grants (RFC7523).  If set to `false`, the `iat` claim is required. Set this value to `true` only after careful consideration.  This governs the \"oauth2.grant.jwt.iat_optional\" setting.
    */
    'hydra_oauth2_grant_jwt_iat_optional'?: boolean;
    /**
    * Configures if the JSON Web Token ID (`jti`) claim is required in the JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grants (RFC7523).  If set to `false`, the `jti` claim is required. Set this value to `true` only after careful consideration.  This governs the \"oauth2.grant.jwt.jti_optional\" setting.
    */
    'hydra_oauth2_grant_jwt_jti_optional'?: boolean;
    /**
    * Configures what the maximum age of a JWT assertion used in the JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grants (RFC7523) can be.  This feature uses the `exp` claim and `iat` claim to calculate assertion age. Assertions exceeding the max age will be denied.  Useful as a safety measure and recommended to keep below 720h.  This governs the \"oauth2.grant.jwt.max_ttl\" setting.
    */
    'hydra_oauth2_grant_jwt_max_ttl'?: string;
    /**
    * Configures whether PKCE should be enforced for all OAuth2 Clients.  This governs the \"oauth2.pkce.enforced\" setting.
    */
    'hydra_oauth2_pkce_enforced'?: boolean;
    /**
    * Configures whether PKCE should be enforced for OAuth2 Clients without a client secret (public clients).  This governs the \"oauth2.pkce.enforced_for_public_clients\" setting.
    */
    'hydra_oauth2_pkce_enforced_for_public_clients'?: boolean;
    /**
    * Sets the Refresh Token Hook Endpoint. If set this endpoint will be called during the OAuth2 Token Refresh grant update the OAuth2 Access Token claims.  This governs the \"oauth2.refresh_token_hook\" setting.
    */
    'hydra_oauth2_refresh_token_hook'?: string;
    'hydra_oidc_dynamic_client_registration_default_scope'?: Array<string>;
    /**
    * Configures OpenID Connect Dynamic Client Registration.  This governs the \"oidc.dynamic_client_registration.enabled\" setting.
    */
    'hydra_oidc_dynamic_client_registration_enabled'?: boolean;
    /**
    * Configures OpenID Connect Discovery and overwrites the pairwise algorithm  This governs the \"oidc.subject_identifiers.pairwise_salt\" setting.
    */
    'hydra_oidc_subject_identifiers_pairwise_salt'?: string;
    'hydra_oidc_subject_identifiers_supported_types'?: Array<string>;
    'hydra_secrets_cookie'?: Array<string>;
    'hydra_secrets_system'?: Array<string>;
    'hydra_serve_admin_cors_allowed_origins'?: Array<string>;
    /**
    * Configures the Ory Hydra CORS Settings  This governs the \"serve.admin.cors.enabled\" setting.
    */
    'hydra_serve_admin_cors_enabled'?: boolean;
    /**
    * Configures the Ory Hydra Cookie Same Site Legacy Workaround  This governs the \"serve.cookies.same_site_legacy_workaround\" setting.
    */
    'hydra_serve_cookies_same_site_legacy_workaround'?: boolean;
    /**
    * Configures the Ory Hydra Cookie Same Site Mode  This governs the \"serve.cookies.same_site_mode\" setting.
    */
    'hydra_serve_cookies_same_site_mode'?: string;
    'hydra_serve_public_cors_allowed_origins'?: Array<string>;
    /**
    * Configures the Ory Hydra CORS Settings  This governs the \"serve.public.cors.enabled\" setting.
    */
    'hydra_serve_public_cors_enabled'?: boolean;
    /**
    * Defines access token type. jwt is a bad idea, see https://www.ory.sh/docs/hydra/advanced#json-web-tokens  This governs the \"strategies.access_token\" setting. opaque Oauth2AccessTokenStrategyOpaque jwt Oauth2AccessTokenStrategyJwt
    */
    'hydra_strategies_access_token'?: NormalizedProjectRevisionHydraStrategiesAccessTokenEnum;
    /**
    * Defines how scopes are matched. For more details have a look at https://github.com/ory/fosite#scopes  This governs the \"strategies.scope\" setting. exact Oauth2ScopeStrategyExact wildcard Oauth2ScopeStrategyWildcard
    */
    'hydra_strategies_scope'?: NormalizedProjectRevisionHydraStrategiesScopeEnum;
    /**
    * This governs the \"ttl.access_token\" setting.
    */
    'hydra_ttl_access_token'?: string;
    /**
    * Configures how long refresh tokens are valid.  Set to -1 for refresh tokens to never expire. This is not recommended!  This governs the \"ttl.auth_code\" setting.
    */
    'hydra_ttl_auth_code'?: string;
    /**
    * This governs the \"ttl.id_token\" setting.
    */
    'hydra_ttl_id_token'?: string;
    /**
    * Configures how long a user login and consent flow may take.  This governs the \"ttl.login_consent_request\" setting.
    */
    'hydra_ttl_login_consent_request'?: string;
    /**
    * Configures how long refresh tokens are valid.  Set to -1 for refresh tokens to never expire. This is not recommended!  This governs the \"ttl.refresh_token\" setting.
    */
    'hydra_ttl_refresh_token'?: string;
    /**
    * Sets the OAuth2 Consent Endpoint URL of the OAuth2 User Login & Consent flow.  Defaults to the Ory Account Experience if left empty.  This governs the \"urls.consent\" setting.
    */
    'hydra_urls_consent'?: string;
    /**
    * Sets the OAuth2 Error URL of the OAuth2 User Login & Consent flow.  Defaults to the Ory Account Experience if left empty.  This governs the \"urls.error\" setting.
    */
    'hydra_urls_error'?: string;
    /**
    * Sets the OAuth2 Login Endpoint URL of the OAuth2 User Login & Consent flow.  Defaults to the Ory Account Experience if left empty.  This governs the \"urls.login\" setting.
    */
    'hydra_urls_login'?: string;
    /**
    * Sets the logout endpoint.  Defaults to the Ory Account Experience if left empty.  This governs the \"urls.logout\" setting.
    */
    'hydra_urls_logout'?: string;
    /**
    * When an OAuth2-related user agent requests to log out, they will be redirected to this url afterwards per default.  Defaults to the Ory Account Experience in development and your application in production mode when a custom domain is connected.  This governs the \"urls.post_logout_redirect\" setting.
    */
    'hydra_urls_post_logout_redirect'?: string;
    /**
    * This value will be used as the issuer in access and ID tokens. It must be specified and using HTTPS protocol, unless the development mode is enabled.  On the Ory Network it will be very rare that you want to modify this value. If left empty, it will default to the correct value for the Ory Network.  This governs the \"urls.self.issuer\" setting.
    */
    'hydra_urls_self_issuer'?: string;
    'hydra_webfinger_jwks_broadcast_keys'?: Array<string>;
    /**
    * Configures OpenID Connect Discovery and overwrites the OAuth2 Authorization URL.  This governs the \"webfinger.oidc.discovery.auth_url\" setting.
    */
    'hydra_webfinger_oidc_discovery_auth_url'?: string;
    /**
    * Configures OpenID Connect Discovery and overwrites the OpenID Connect Dynamic Client Registration Endpoint.  This governs the \"webfinger.oidc.discovery.client_registration_url\" setting.
    */
    'hydra_webfinger_oidc_discovery_client_registration_url'?: string;
    /**
    * Configures OpenID Connect Discovery and overwrites the JWKS URL.  This governs the \"webfinger.oidc.discovery.jwks_url\" setting.
    */
    'hydra_webfinger_oidc_discovery_jwks_url'?: string;
    'hydra_webfinger_oidc_discovery_supported_claims'?: Array<string>;
    'hydra_webfinger_oidc_discovery_supported_scope'?: Array<string>;
    /**
    * Configures OpenID Connect Discovery and overwrites the OAuth2 Token URL.  This governs the \"webfinger.oidc.discovery.token_url\" setting.
    */
    'hydra_webfinger_oidc_discovery_token_url'?: string;
    /**
    * Configures OpenID Connect Discovery and overwrites userinfo endpoint to be advertised at the OpenID Connect Discovery endpoint /.well-known/openid-configuration. Defaults to Ory Hydra\'s userinfo endpoint at /userinfo. Set this value if you want to handle this endpoint yourself.  This governs the \"webfinger.oidc.discovery.userinfo_url\" setting.
    */
    'hydra_webfinger_oidc_discovery_userinfo_url'?: string;
    /**
    * The revision ID.
    */
    'id'?: string;
    /**
    * The Revisions\' Keto Namespace Configuration  The string is a URL pointing to an OPL file with the configuration.
    */
    'keto_namespace_configuration'?: string;
    'keto_namespaces'?: Array<KetoNamespace>;
    'keto_read_max_depth'?: number | null;
    /**
    * Configures the Ory Kratos Cookie SameSite Attribute  This governs the \"cookies.same_site\" setting.
    */
    'kratos_cookies_same_site'?: string;
    /**
    * Configures the Ory Kratos SMTP Connection URI  This governs the \"courier.smtp.connection_uri\" setting.
    */
    'kratos_courier_smtp_connection_uri'?: string;
    /**
    * Configures the Ory Kratos SMTP From Address  This governs the \"courier.smtp.from_address\" setting.
    */
    'kratos_courier_smtp_from_address'?: string;
    /**
    * Configures the Ory Kratos SMTP From Name  This governs the \"courier.smtp.from_name\" setting.
    */
    'kratos_courier_smtp_from_name'?: string;
    /**
    * NullJSONRawMessage represents a json.RawMessage that works well with JSON, SQL, and Swagger and is NULLable-
    */
    'kratos_courier_smtp_headers'?: any | null;
    /**
    * Configures the Ory Kratos Invalid Recovery via Code Email Body HTML Template  This governs the \"courier.smtp.templates.recovery_code.invalid.email.body.html\" setting.
    */
    'kratos_courier_templates_recovery_code_invalid_email_body_html'?: string;
    /**
    * Configures the Ory Kratos Invalid Recovery via Code Email Body Plaintext Template  This governs the \"courier.smtp.templates.recovery_code.invalid.email.body.plaintext\" setting.
    */
    'kratos_courier_templates_recovery_code_invalid_email_body_plaintext'?: string;
    /**
    * Configures the Ory Kratos Invalid Recovery via Code Email Subject Template  This governs the \"courier.smtp.templates.recovery_code.invalid.email.body.html\" setting.
    */
    'kratos_courier_templates_recovery_code_invalid_email_subject'?: string;
    /**
    * Configures the Ory Kratos Valid Recovery via Code Email Body HTML Template  This governs the \"courier.smtp.templates.recovery_code.valid.email.body.html\" setting.
    */
    'kratos_courier_templates_recovery_code_valid_email_body_html'?: string;
    /**
    * Configures the Ory Kratos Valid Recovery via Code Email Body Plaintext Template  This governs the \"courier.smtp.templates.recovery_code.valid.email.body.plaintext\" setting.
    */
    'kratos_courier_templates_recovery_code_valid_email_body_plaintext'?: string;
    /**
    * Configures the Ory Kratos Valid Recovery via Code Email Subject Template  This governs the \"courier.smtp.templates.recovery_code.valid.email.subject\" setting.
    */
    'kratos_courier_templates_recovery_code_valid_email_subject'?: string;
    /**
    * Configures the Ory Kratos Invalid Recovery Email Body HTML Template  This governs the \"courier.smtp.templates.recovery.invalid.email.body.html\" setting.
    */
    'kratos_courier_templates_recovery_invalid_email_body_html'?: string;
    /**
    * Configures the Ory Kratos Invalid Recovery Email Body Plaintext Template  This governs the \"courier.smtp.templates.recovery.invalid.email.body.plaintext\" setting.
    */
    'kratos_courier_templates_recovery_invalid_email_body_plaintext'?: string;
    /**
    * Configures the Ory Kratos Invalid Recovery Email Subject Template  This governs the \"courier.smtp.templates.recovery.invalid.email.body.html\" setting.
    */
    'kratos_courier_templates_recovery_invalid_email_subject'?: string;
    /**
    * Configures the Ory Kratos Valid Recovery Email Body HTML Template  This governs the \"courier.smtp.templates.recovery.valid.email.body.html\" setting.
    */
    'kratos_courier_templates_recovery_valid_email_body_html'?: string;
    /**
    * Configures the Ory Kratos Valid Recovery Email Body Plaintext Template  This governs the \"courier.smtp.templates.recovery.valid.email.body.plaintext\" setting.
    */
    'kratos_courier_templates_recovery_valid_email_body_plaintext'?: string;
    /**
    * Configures the Ory Kratos Valid Recovery Email Subject Template  This governs the \"courier.smtp.templates.recovery.valid.email.subject\" setting.
    */
    'kratos_courier_templates_recovery_valid_email_subject'?: string;
    /**
    * Configures the Ory Kratos Invalid Verification via Code Email Body HTML Template  This governs the \"courier.smtp.templates.verification_code.invalid.email.body.html\" setting.
    */
    'kratos_courier_templates_verification_code_invalid_email_body_html'?: string;
    /**
    * Configures the Ory Kratos Invalid Verification via Code Email Body Plaintext Template  This governs the \"courier.smtp.templates.verification_code.invalid.email.body.plaintext\" setting.
    */
    'kratos_courier_templates_verification_code_invalid_email_body_plaintext'?: string;
    /**
    * Configures the Ory Kratos Invalid Verification via Code Email Subject Template  This governs the \"courier.smtp.templates.verification_code.invalid.email.subject\" setting.
    */
    'kratos_courier_templates_verification_code_invalid_email_subject'?: string;
    /**
    * Configures the Ory Kratos Valid Verification via Code Email Body HTML Template  This governs the \"courier.smtp.templates.verification_code.valid.email.body.html\" setting.
    */
    'kratos_courier_templates_verification_code_valid_email_body_html'?: string;
    /**
    * Configures the Ory Kratos Valid Verification via Code Email Body Plaintext Template  This governs the \"courier.smtp.templates.verification_code.valid.email.body.plaintext\" setting.
    */
    'kratos_courier_templates_verification_code_valid_email_body_plaintext'?: string;
    /**
    * Configures the Ory Kratos Valid Verification via Code Email Subject Template  This governs the \"courier.smtp.templates.verification_code.valid.email.subject\" setting.
    */
    'kratos_courier_templates_verification_code_valid_email_subject'?: string;
    /**
    * Configures the Ory Kratos Invalid Verification Email Body HTML Template  This governs the \"courier.smtp.templates.verification.invalid.email.body.html\" setting.
    */
    'kratos_courier_templates_verification_invalid_email_body_html'?: string;
    /**
    * Configures the Ory Kratos Invalid Verification Email Body Plaintext Template  This governs the \"courier.smtp.templates.verification.invalid.email.body.plaintext\" setting.
    */
    'kratos_courier_templates_verification_invalid_email_body_plaintext'?: string;
    /**
    * Configures the Ory Kratos Invalid Verification Email Subject Template  This governs the \"courier.smtp.templates.verification.invalid.email.subject\" setting.
    */
    'kratos_courier_templates_verification_invalid_email_subject'?: string;
    /**
    * Configures the Ory Kratos Valid Verification Email Body HTML Template  This governs the \"courier.smtp.templates.verification.valid.email.body.html\" setting.
    */
    'kratos_courier_templates_verification_valid_email_body_html'?: string;
    /**
    * Configures the Ory Kratos Valid Verification Email Body Plaintext Template  This governs the \"courier.smtp.templates.verification.valid.email.body.plaintext\" setting.
    */
    'kratos_courier_templates_verification_valid_email_body_plaintext'?: string;
    /**
    * Configures the Ory Kratos Valid Verification Email Subject Template  This governs the \"courier.smtp.templates.verification.valid.email.subject\" setting.
    */
    'kratos_courier_templates_verification_valid_email_subject'?: string;
    /**
    * Configures the Ory Kratos Session caching feature flag  This governs the \"feature_flags.cacheable_sessions\" setting.
    */
    'kratos_feature_flags_cacheable_sessions'?: boolean;
    'kratos_identity_schemas'?: Array<NormalizedProjectRevisionIdentitySchema>;
    /**
    * NullJSONRawMessage represents a json.RawMessage that works well with JSON, SQL, and Swagger and is NULLable-
    */
    'kratos_oauth2_provider_headers'?: any | null;
    /**
    * Kratos OAuth2 Provider Override Return To  Enabling this allows Kratos to set the return_to parameter automatically to the OAuth2 request URL on the login flow, allowing complex flows such as recovery to continue to the initial OAuth2 flow.
    */
    'kratos_oauth2_provider_override_return_to'?: boolean;
    /**
    * The Revisions\' OAuth2 Provider Integration URL  This governs the \"oauth2_provider.url\" setting.
    */
    'kratos_oauth2_provider_url'?: string;
    'kratos_secrets_cipher'?: Array<string>;
    'kratos_secrets_cookie'?: Array<string>;
    'kratos_secrets_default'?: Array<string>;
    'kratos_selfservice_allowed_return_urls'?: Array<string>;
    /**
    * Configures the Ory Kratos Default Return URL  This governs the \"selfservice.allowed_return_urls\" setting.
    */
    'kratos_selfservice_default_browser_return_url'?: string;
    /**
    * Configures the Ory Kratos Error UI URL  This governs the \"selfservice.flows.error.ui_url\" setting.
    */
    'kratos_selfservice_flows_error_ui_url'?: string;
    'kratos_selfservice_flows_hooks'?: Array<NormalizedProjectRevisionHook>;
    /**
    * Configures the Ory Kratos Login Default Return URL  This governs the \"selfservice.flows.login.after.default_browser_return_url\" setting.
    */
    'kratos_selfservice_flows_login_after_default_browser_return_url'?: string;
    /**
    * Configures the Ory Kratos Login After OIDC Default Return URL  This governs the \"selfservice.flows.login.after.oidc.default_browser_return_url\" setting.
    */
    'kratos_selfservice_flows_login_after_oidc_default_browser_return_url'?: string;
    /**
    * Configures the Ory Kratos Login After Password Default Return URL  This governs the \"selfservice.flows.login.after.password.default_browser_return_url\" setting.
    */
    'kratos_selfservice_flows_login_after_password_default_browser_return_url'?: string;
    /**
    * Configures the Ory Kratos Login After WebAuthn Default Return URL  This governs the \"selfservice.flows.login.after.webauthn.default_browser_return_url\" setting.
    */
    'kratos_selfservice_flows_login_after_webauthn_default_browser_return_url'?: string;
    /**
    * Configures the Ory Kratos Login Lifespan  This governs the \"selfservice.flows.login.lifespan\" setting.
    */
    'kratos_selfservice_flows_login_lifespan'?: string;
    /**
    * Configures the Ory Kratos Login UI URL  This governs the \"selfservice.flows.login.ui_url\" setting.
    */
    'kratos_selfservice_flows_login_ui_url'?: string;
    /**
    * Configures the Ory Kratos Logout Default Return URL  This governs the \"selfservice.flows.logout.after.default_browser_return_url\" setting.
    */
    'kratos_selfservice_flows_logout_after_default_browser_return_url'?: string;
    /**
    * Configures the Ory Kratos Recovery Default Return URL  This governs the \"selfservice.flows.recovery.after.default_browser_return_url\" setting.
    */
    'kratos_selfservice_flows_recovery_after_default_browser_return_url'?: string;
    /**
    * Configures the Ory Kratos Recovery Enabled Setting  This governs the \"selfservice.flows.recovery.enabled\" setting.
    */
    'kratos_selfservice_flows_recovery_enabled'?: boolean;
    /**
    * Configures the Ory Kratos Recovery Lifespan  This governs the \"selfservice.flows.recovery.lifespan\" setting.
    */
    'kratos_selfservice_flows_recovery_lifespan'?: string;
    /**
    * Configures whether to notify unknown recipients of a Ory Kratos recovery flow  This governs the \"selfservice.flows.recovery.notify_unknown_recipients\" setting.
    */
    'kratos_selfservice_flows_recovery_notify_unknown_recipients'?: boolean;
    /**
    * Configures the Ory Kratos Recovery UI URL  This governs the \"selfservice.flows.recovery.ui_url\" setting.
    */
    'kratos_selfservice_flows_recovery_ui_url'?: string;
    /**
    * Configures the Ory Kratos Recovery strategy to use (\"link\" or \"code\")  This governs the \"selfservice.flows.recovery.use\" setting. link SelfServiceMessageVerificationStrategyLink code SelfServiceMessageVerificationStrategyCode
    */
    'kratos_selfservice_flows_recovery_use'?: NormalizedProjectRevisionKratosSelfserviceFlowsRecoveryUseEnum;
    /**
    * Configures the Ory Kratos Registration Default Return URL  This governs the \"selfservice.flows.registration.after.default_browser_return_url\" setting.
    */
    'kratos_selfservice_flows_registration_after_default_browser_return_url'?: string;
    /**
    * Configures the Ory Kratos Registration After OIDC Default Return URL  This governs the \"selfservice.flows.registration.after.oidc.default_browser_return_url\" setting.
    */
    'kratos_selfservice_flows_registration_after_oidc_default_browser_return_url'?: string;
    /**
    * Configures the Ory Kratos Registration After Password Default Return URL  This governs the \"selfservice.flows.registration.after.password.default_browser_return_url\" setting.
    */
    'kratos_selfservice_flows_registration_after_password_default_browser_return_url'?: string;
    /**
    * Configures the Ory Kratos Registration After Password Default Return URL  This governs the \"selfservice.flows.registration.after.password.default_browser_return_url\" setting.
    */
    'kratos_selfservice_flows_registration_after_webauthn_default_browser_return_url'?: string;
    /**
    * Configures the Whether Ory Kratos Registration is Enabled  This governs the \"selfservice.flows.registration.enabled\" setting.0
    */
    'kratos_selfservice_flows_registration_enabled'?: boolean;
    /**
    * Configures the Ory Kratos Registration Lifespan  This governs the \"selfservice.flows.registration.lifespan\" setting.
    */
    'kratos_selfservice_flows_registration_lifespan'?: string;
    /**
    * Configures the Ory Kratos Registration UI URL  This governs the \"selfservice.flows.registration.ui_url\" setting.
    */
    'kratos_selfservice_flows_registration_ui_url'?: string;
    /**
    * Configures the Ory Kratos Settings Default Return URL  This governs the \"selfservice.flows.settings.after.default_browser_return_url\" setting.
    */
    'kratos_selfservice_flows_settings_after_default_browser_return_url'?: string;
    /**
    * Configures the Ory Kratos Settings Default Return URL After Updating Passwords  This governs the \"selfservice.flows.settings.after.password.default_browser_return_url\" setting.
    */
    'kratos_selfservice_flows_settings_after_password_default_browser_return_url'?: string;
    /**
    * Configures the Ory Kratos Settings Default Return URL After Updating Profiles  This governs the \"selfservice.flows.settings.after.profile.default_browser_return_url\" setting.
    */
    'kratos_selfservice_flows_settings_after_profile_default_browser_return_url'?: string;
    /**
    * Configures the Ory Kratos Settings Lifespan  This governs the \"selfservice.flows.settings.lifespan\" setting.
    */
    'kratos_selfservice_flows_settings_lifespan'?: string;
    /**
    * Configures the Ory Kratos Settings Privileged Session Max Age  This governs the \"selfservice.flows.settings.privileged_session_max_age\" setting.
    */
    'kratos_selfservice_flows_settings_privileged_session_max_age'?: string;
    /**
    * Configures the Ory Kratos Settings Required AAL  This governs the \"selfservice.flows.settings.required_aal\" setting.
    */
    'kratos_selfservice_flows_settings_required_aal'?: string;
    /**
    * Configures the Ory Kratos Settings UI URL  This governs the \"selfservice.flows.settings.ui_url\" setting.
    */
    'kratos_selfservice_flows_settings_ui_url'?: string;
    /**
    * Configures the Ory Kratos Verification Default Return URL  This governs the \"selfservice.flows.verification.after.default_browser_return_url\" setting.
    */
    'kratos_selfservice_flows_verification_after_default_browser_return_url'?: string;
    /**
    * Configures the Ory Kratos Verification Enabled Setting  This governs the \"selfservice.flows.verification.enabled\" setting.
    */
    'kratos_selfservice_flows_verification_enabled'?: boolean;
    /**
    * Configures the Ory Kratos Verification Lifespan  This governs the \"selfservice.flows.verification.lifespan\" setting.
    */
    'kratos_selfservice_flows_verification_lifespan'?: string;
    /**
    * Configures whether to notify unknown recipients of a Ory Kratos verification flow  This governs the \"selfservice.flows.verification.notify_unknown_recipients\" setting.
    */
    'kratos_selfservice_flows_verification_notify_unknown_recipients'?: boolean;
    /**
    * Configures the Ory Kratos Verification UI URL  This governs the \"selfservice.flows.verification.ui_url\" setting.
    */
    'kratos_selfservice_flows_verification_ui_url'?: string;
    /**
    * Configures the Ory Kratos Strategy to use for Verification  This governs the \"selfservice.flows.verification.use\" setting. link SelfServiceMessageVerificationStrategyLink code SelfServiceMessageVerificationStrategyCode
    */
    'kratos_selfservice_flows_verification_use'?: NormalizedProjectRevisionKratosSelfserviceFlowsVerificationUseEnum;
    /**
    * Configures the Ory Kratos Code Method\'s lifespan  This governs the \"selfservice.methods.code.config.lifespan\" setting.
    */
    'kratos_selfservice_methods_code_config_lifespan'?: string;
    /**
    * Configures whether Ory Kratos Code Method is enabled  This governs the \"selfservice.methods.code.enabled\" setting.
    */
    'kratos_selfservice_methods_code_enabled'?: boolean;
    /**
    * Configures the Base URL which Recovery, Verification, and Login Links Point to  It is recommended to leave this value empty. It will be appropriately configured to the best matching domain (e.g. when using custom domains) automatically.  This governs the \"selfservice.methods.link.config.base_url\" setting.
    */
    'kratos_selfservice_methods_link_config_base_url'?: string;
    /**
    * Configures the Ory Kratos Link Method\'s lifespan  This governs the \"selfservice.methods.link.config.lifespan\" setting.
    */
    'kratos_selfservice_methods_link_config_lifespan'?: string;
    /**
    * Configures whether Ory Kratos Link Method is enabled  This governs the \"selfservice.methods.link.enabled\" setting.
    */
    'kratos_selfservice_methods_link_enabled'?: boolean;
    /**
    * Configures whether Ory Kratos TOTP Lookup Secret is enabled  This governs the \"selfservice.methods.lookup_secret.enabled\" setting.
    */
    'kratos_selfservice_methods_lookup_secret_enabled'?: boolean;
    /**
    * Configures the Ory Kratos Third Party / OpenID Connect base redirect URI  This governs the \"selfservice.methods.oidc.config.base_redirect_uri\" setting.
    */
    'kratos_selfservice_methods_oidc_config_base_redirect_uri'?: string;
    'kratos_selfservice_methods_oidc_config_providers'?: Array<NormalizedProjectRevisionThirdPartyProvider>;
    /**
    * Configures whether Ory Kratos Third Party / OpenID Connect Login is enabled  This governs the \"selfservice.methods.oidc.enabled\" setting.
    */
    'kratos_selfservice_methods_oidc_enabled'?: boolean;
    /**
    * Configures whether Ory Kratos Password HIBP Checks is enabled  This governs the \"selfservice.methods.password.config.haveibeenpwned_enabled\" setting.
    */
    'kratos_selfservice_methods_password_config_haveibeenpwned_enabled'?: boolean;
    /**
    * Configures whether Ory Kratos Password should disable the similarity policy.  This governs the \"selfservice.methods.password.config.identifier_similarity_check_enabled\" setting.
    */
    'kratos_selfservice_methods_password_config_identifier_similarity_check_enabled'?: boolean;
    /**
    * Configures whether Ory Kratos Password Should ignore HIBPWND Network Errors  This governs the \"selfservice.methods.password.config.ignore_network_errors\" setting.
    */
    'kratos_selfservice_methods_password_config_ignore_network_errors'?: boolean;
    /**
    * Configures Ory Kratos Password Max Breaches Detection  This governs the \"selfservice.methods.password.config.max_breaches\" setting.
    */
    'kratos_selfservice_methods_password_config_max_breaches'?: number;
    /**
    * Configures the minimum length of passwords.  This governs the \"selfservice.methods.password.config.min_password_length\" setting.
    */
    'kratos_selfservice_methods_password_config_min_password_length'?: number;
    /**
    * Configures whether Ory Kratos Password Method is enabled  This governs the \"selfservice.methods.password.enabled\" setting.
    */
    'kratos_selfservice_methods_password_enabled'?: boolean;
    /**
    * Configures whether Ory Kratos Profile Method is enabled  This governs the \"selfservice.methods.profile.enabled\" setting.
    */
    'kratos_selfservice_methods_profile_enabled'?: boolean;
    /**
    * Configures Ory Kratos TOTP Issuer  This governs the \"selfservice.methods.totp.config.issuer\" setting.
    */
    'kratos_selfservice_methods_totp_config_issuer'?: string;
    /**
    * Configures whether Ory Kratos TOTP Method is enabled  This governs the \"selfservice.methods.totp.enabled\" setting.
    */
    'kratos_selfservice_methods_totp_enabled'?: boolean;
    /**
    * Configures whether Ory Kratos Webauthn is used for passwordless flows  This governs the \"selfservice.methods.webauthn.config.passwordless\" setting.
    */
    'kratos_selfservice_methods_webauthn_config_passwordless'?: boolean;
    /**
    * Configures the Ory Kratos Webauthn RP Display Name  This governs the \"selfservice.methods.webauthn.config.rp.display_name\" setting.
    */
    'kratos_selfservice_methods_webauthn_config_rp_display_name'?: string;
    /**
    * Configures the Ory Kratos Webauthn RP Icon  This governs the \"selfservice.methods.webauthn.config.rp.icon\" setting.
    */
    'kratos_selfservice_methods_webauthn_config_rp_icon'?: string;
    /**
    * Configures the Ory Kratos Webauthn RP ID  This governs the \"selfservice.methods.webauthn.config.rp.id\" setting.
    */
    'kratos_selfservice_methods_webauthn_config_rp_id'?: string;
    /**
    * Configures the Ory Kratos Webauthn RP Origin  This governs the \"selfservice.methods.webauthn.config.rp.origin\" setting.
    */
    'kratos_selfservice_methods_webauthn_config_rp_origin'?: string;
    /**
    * Configures whether Ory Kratos Webauthn is enabled  This governs the \"selfservice.methods.webauthn.enabled\" setting.
    */
    'kratos_selfservice_methods_webauthn_enabled'?: boolean;
    /**
    * Configures the Ory Kratos Session Cookie Persistent Attribute  This governs the \"session.cookie.persistent\" setting.
    */
    'kratos_session_cookie_persistent'?: boolean;
    /**
    * Configures the Ory Kratos Session Cookie SameSite Attribute  This governs the \"session.cookie.same_site\" setting.
    */
    'kratos_session_cookie_same_site'?: string;
    /**
    * Configures the Ory Kratos Session Lifespan  This governs the \"session.lifespan\" setting.
    */
    'kratos_session_lifespan'?: string;
    /**
    * Configures the Ory Kratos Session Whoami AAL requirement  This governs the \"session.whoami.required_aal\" setting.
    */
    'kratos_session_whoami_required_aal'?: string;
    /**
    * The project\'s name.
    */
    'name': string;
    /**
    * Whether this project is in production mode or not.  In development mode, a low-security profile is used making it easier to develop against your, for example, local environment.
    */
    'production'?: boolean;
    /**
    * The Revision\'s Project ID
    */
    'project_id'?: string;
    /**
    * Last Time Project\'s Revision was Updated
    */
    'updated_at'?: Date;
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
export type NormalizedProjectRevisionHydraStrategiesAccessTokenEnum = "opaque" | "jwt";
export type NormalizedProjectRevisionHydraStrategiesScopeEnum = "exact" | "wildcard";
export type NormalizedProjectRevisionKratosSelfserviceFlowsRecoveryUseEnum = "link" | "code";
export type NormalizedProjectRevisionKratosSelfserviceFlowsVerificationUseEnum = "link" | "code";
