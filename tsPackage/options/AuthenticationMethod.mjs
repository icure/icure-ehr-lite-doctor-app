export var ThirdPartyProvider;
(function (ThirdPartyProvider) {
    ThirdPartyProvider["GOOGLE"] = "GOOGLE";
})(ThirdPartyProvider || (ThirdPartyProvider = {}));
export var AuthenticationMethod;
(function (AuthenticationMethod) {
    /**
     * The sdk will perform requests using jwt obtained from the provided credentials.
     *
     * When using this authentication method, the sdk will cache the credentials and will automatically request updated
     * tokens as needed.
     * However, if the provided credentials expire, the SDK will become unusable.
     *
     * This authentication method can also be used for the execution of requests that require an elevated security context
     * as long as the credentials provided can be used to create a suitable token.
     *
     * Not that when using this authentication method the provided credentials will be cached (in volatile memory)
     * without expiration.
     */
    let UsingCredentials;
    (function (UsingCredentials) {
        class UsernamePassword {
            constructor(
            /**
             * A public identifier of the user logging in. This could be:
             * - {@link User.id}
             * - {@link Group.id}:{@link User.id}
             * - {@link User.login}
             * - {@link User.email}
             */
            username, 
            /**
             * The password of the user
             */
            password) {
                this.username = username;
                this.password = password;
            }
        }
        UsingCredentials.UsernamePassword = UsernamePassword;
        class UsernameLongToken {
            constructor(
            /**
             * A public identifier of the user logging in. This could be:
             * - {@link User.id}
             * - {@link Group.id}:{@link User.id}
             * - {@link User.login}
             * - {@link User.email}
             */
            username, 
            /**
             * A long-lived token of the user
             */
            token) {
                this.username = username;
                this.token = token;
            }
        }
        UsingCredentials.UsernameLongToken = UsernameLongToken;
        class ThirdPartyAuth {
            constructor(
            /**
             * A token used to perform the third party authentication
             */
            token, 
            /**
             * The authentication provider
             */
            provider) {
                this.token = token;
                this.provider = provider;
            }
        }
        UsingCredentials.ThirdPartyAuth = ThirdPartyAuth;
        class JwtCredentials {
            constructor(
            /**
             * A refresh token of the user
             */
            refresh, 
            /**
             * An initial bearer token of the user, optional.
             */
            bearer) {
                this.refresh = refresh;
                this.bearer = bearer;
            }
        }
        UsingCredentials.JwtCredentials = JwtCredentials;
    })(UsingCredentials = AuthenticationMethod.UsingCredentials || (AuthenticationMethod.UsingCredentials = {}));
    /**
     * Allows the SDK to perform authentication using secrets obtained from an [AuthSecretProvider].
     *
     * The iCure SDK can authenticate to the backend using different kinds of secrets, such as passwords, long-lived authentication tokens, and
     * short-lived authentication tokens generated through the message gateway.
     * iCure associates to each kind of secret a certain security level, and for some sensitive operations, depending on the configurations of
     * the user and his group, some operations may require a secret of a certain security level.
     *
     * For example, with the default configurations, to change his own email the user can't have logged in with a long-lived token, but he
     * needs to provide his current password or a short-lived token.
     *
     * By using this authentication option, the iCure SDK will automatically request and cache the secret from the [AuthSecretProvider] only when
     * needed, which should help to minimize the interaction with the user.
     *
     * Another advantage of using this authentication option over others is that in case all the cached tokens and secrets were to expire while
     * performing a request, instead of having the request fail the SDK will ask for a new secret from the [SmartAuthProvider] and the request will
     * automatically be retried with the new secret.
     */
    class UsingSecretProvider {
        constructor(secretProvider, options) {
            this.secretProvider = secretProvider;
            this.options = options;
        }
    }
    AuthenticationMethod.UsingSecretProvider = UsingSecretProvider;
})(AuthenticationMethod || (AuthenticationMethod = {}));
export var SecretProviderAuthenticationOptions;
(function (SecretProviderAuthenticationOptions) {
    let InitialSecret;
    (function (InitialSecret) {
        class Password {
            constructor(password) {
                this.password = password;
            }
        }
        InitialSecret.Password = Password;
        class LongLivedToken {
            constructor(token) {
                this.token = token;
            }
        }
        InitialSecret.LongLivedToken = LongLivedToken;
        class OAuth {
            constructor(secret, oauthType) {
                this.secret = secret;
                this.oauthType = oauthType;
            }
        }
        InitialSecret.OAuth = OAuth;
    })(InitialSecret = SecretProviderAuthenticationOptions.InitialSecret || (SecretProviderAuthenticationOptions.InitialSecret = {}));
})(SecretProviderAuthenticationOptions || (SecretProviderAuthenticationOptions = {}));
export var AuthSecretDetails;
(function (AuthSecretDetails) {
    class PasswordDetails {
        /**
         * @param secret the password of the user
         */
        constructor(secret) {
            this.secret = secret;
        }
    }
    AuthSecretDetails.PasswordDetails = PasswordDetails;
    class TwoFactorAuthTokenDetails {
        /**
         * @param secret the current two-factor authentication token of the user.
         */
        constructor(secret) {
            this.secret = secret;
        }
    }
    AuthSecretDetails.TwoFactorAuthTokenDetails = TwoFactorAuthTokenDetails;
    class ShortLivedTokenDetails {
        /**
         * @param secret a short-lived token obtained through an authentication process
         * @param authenticationProcessInfo the authentication process that was used to create the secret
         */
        constructor(secret, authenticationProcessInfo) {
            this.secret = secret;
            this.authenticationProcessInfo = authenticationProcessInfo;
        }
    }
    AuthSecretDetails.ShortLivedTokenDetails = ShortLivedTokenDetails;
    class LongLivedTokenDetails {
        /**
         * @param secret a long-lived token of the user.
         */
        constructor(secret) {
            this.secret = secret;
        }
    }
    AuthSecretDetails.LongLivedTokenDetails = LongLivedTokenDetails;
    class ExternalAuthenticationDetails {
        /**
         * @param secret some token or another secret that can be used to authenticate the user to a supported third party service
         * @param oauthType the third party service that should recognize the provided secret.
         */
        constructor(secret, oauthType) {
            this.secret = secret;
            this.oauthType = oauthType;
        }
    }
    AuthSecretDetails.ExternalAuthenticationDetails = ExternalAuthenticationDetails;
    class DigitalIdDetails {
        /**
         * Not yet implemented
         */
        constructor(secret) {
            this.secret = secret;
        }
    }
    AuthSecretDetails.DigitalIdDetails = DigitalIdDetails;
})(AuthSecretDetails || (AuthSecretDetails = {}));
export var AuthenticationProcessTelecomType;
(function (AuthenticationProcessTelecomType) {
    AuthenticationProcessTelecomType["Email"] = "Email";
    AuthenticationProcessTelecomType["MobilePhone"] = "MobilePhone";
})(AuthenticationProcessTelecomType || (AuthenticationProcessTelecomType = {}));
/**
 * Holds information on an authentication process request done through the {@link AuthenticationProcessApi}.
 *
 * You should not instantiate this class directly or use its properties, as they are for internal use and may be changed
 * without notice.
 */
export class AuthenticationProcessRequest {
    constructor(messageGwUrl, specId, requestId) {
        this.messageGwUrl = messageGwUrl;
        this.specId = specId;
        this.requestId = requestId;
    }
}
//# sourceMappingURL=AuthenticationMethod.mjs.map