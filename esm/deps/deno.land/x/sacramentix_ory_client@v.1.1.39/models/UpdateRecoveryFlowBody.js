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
* Update Recovery Flow Request Body
*/
class UpdateRecoveryFlowBody {
    /**
    * Sending the anti-csrf token is only required for browser login flows.
    */
    'csrf_token';
    /**
    * The email address of the account to recover  If the email belongs to a valid account, a recovery email will be sent.  If you want to notify the email address if the account does not exist, see the [notify_unknown_recipients flag](https://www.ory.sh/docs/kratos/self-service/flows/account-recovery-password-reset#attempted-recovery-notifications)  If a code was already sent, including this field in the payload will invalidate the sent code and re-send a new code.  format: email
    */
    'email';
    /**
    * Method is the method that should be used for this recovery flow  Allowed values are `link` and `code`. link RecoveryStrategyLink code RecoveryStrategyCode
    */
    'method';
    /**
    * Code from the recovery email  If you want to submit a code, use this field, but make sure to _not_ include the email field, as well.
    */
    'code';
    static discriminator = "method";
    static attributeTypeMap = [
        {
            "name": "csrf_token",
            "baseName": "csrf_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "UpdateRecoveryFlowBodyMethodEnum",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return UpdateRecoveryFlowBody.attributeTypeMap;
    }
    constructor() {
        this.method = "UpdateRecoveryFlowBody";
    }
}
export { UpdateRecoveryFlowBody };