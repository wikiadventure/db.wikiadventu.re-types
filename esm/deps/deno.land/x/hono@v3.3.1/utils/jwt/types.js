export class JwtAlgorithmNotImplemented extends Error {
    constructor(token) {
        super(`invalid JWT token: ${token}`);
        this.name = 'JwtAlgorithmNotImplemented';
    }
}
/**
 * Export for backward compatibility
 * @deprecated Use JwtAlgorithmNotImplemented instead
 **/
export const JwtAlorithmNotImplemented = JwtAlgorithmNotImplemented;
export class JwtTokenInvalid extends Error {
    constructor(token) {
        super(`invalid JWT token: ${token}`);
        this.name = 'JwtTokenInvalid';
    }
}
export class JwtTokenNotBefore extends Error {
    constructor(token) {
        super(`token (${token}) is being used before it's valid`);
        this.name = 'JwtTokenNotBefore';
    }
}
export class JwtTokenExpired extends Error {
    constructor(token) {
        super(`token (${token}) expired`);
        this.name = 'JwtTokenExpired';
    }
}
export class JwtTokenIssuedAt extends Error {
    constructor(currentTimestamp, iat) {
        super(`Incorrect "iat" claim must be a older than "${currentTimestamp}" (iat: "${iat}")`);
        this.name = 'JwtTokenIssuedAt';
    }
}
export class JwtTokenSignatureMismatched extends Error {
    constructor(token) {
        super(`token(${token}) signature mismatched`);
        this.name = 'JwtTokenSignatureMismatched';
    }
}
export var AlgorithmTypes;
(function (AlgorithmTypes) {
    AlgorithmTypes["HS256"] = "HS256";
    AlgorithmTypes["HS384"] = "HS384";
    AlgorithmTypes["HS512"] = "HS512";
})(AlgorithmTypes || (AlgorithmTypes = {}));
