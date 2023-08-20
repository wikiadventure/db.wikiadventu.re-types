/**
 * Applies http authentication to the request context.
 */
export class BasicAuthentication {
    /**
     * Configures the http authentication with the required details.
     *
     * @param username username for http basic authentication
     * @param password password for http basic authentication
     */
    constructor(username, password) {
        Object.defineProperty(this, "username", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: username
        });
        Object.defineProperty(this, "password", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: password
        });
    }
    getName() {
        return "basic";
    }
    applySecurityAuthentication(context) {
        let comb = Buffer.from(this.username + ":" + this.password, 'binary').toString('base64');
        context.setHeaderParam("Authorization", "Basic " + comb);
    }
}
/**
 * Applies http authentication to the request context.
 */
export class BearerAuthentication {
    /**
     * Configures the http authentication with the required details.
     *
     * @param tokenProvider service that can provide the up-to-date token when needed
     */
    constructor(tokenProvider) {
        Object.defineProperty(this, "tokenProvider", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: tokenProvider
        });
    }
    getName() {
        return "bearer";
    }
    async applySecurityAuthentication(context) {
        context.setHeaderParam("Authorization", "Bearer " + await this.tokenProvider.getToken());
    }
}
/**
 * Applies oauth2 authentication to the request context.
 */
export class Oauth2Authentication {
    /**
     * Configures OAuth2 with the necessary properties
     *
     * @param accessToken: The access token to be used for every request
     */
    constructor(accessToken) {
        Object.defineProperty(this, "accessToken", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: accessToken
        });
    }
    getName() {
        return "oauth2";
    }
    applySecurityAuthentication(context) {
        context.setHeaderParam("Authorization", "Bearer " + this.accessToken);
    }
}
/**
 * Applies http authentication to the request context.
 */
export class OryAccessTokenAuthentication {
    /**
     * Configures the http authentication with the required details.
     *
     * @param tokenProvider service that can provide the up-to-date token when needed
     */
    constructor(tokenProvider) {
        Object.defineProperty(this, "tokenProvider", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: tokenProvider
        });
    }
    getName() {
        return "oryAccessToken";
    }
    async applySecurityAuthentication(context) {
        context.setHeaderParam("Authorization", "Bearer " + await this.tokenProvider.getToken());
    }
}
/**
 * Creates the authentication methods from a swagger description.
 *
 */
export function configureAuthMethods(config) {
    let authMethods = {};
    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"];
    if (config["basic"]) {
        authMethods["basic"] = new BasicAuthentication(config["basic"]["username"], config["basic"]["password"]);
    }
    if (config["bearer"]) {
        authMethods["bearer"] = new BearerAuthentication(config["bearer"]["tokenProvider"]);
    }
    if (config["oauth2"]) {
        authMethods["oauth2"] = new Oauth2Authentication(config["oauth2"]["accessToken"]);
    }
    if (config["oryAccessToken"]) {
        authMethods["oryAccessToken"] = new OryAccessTokenAuthentication(config["oryAccessToken"]["tokenProvider"]);
    }
    return authMethods;
}
