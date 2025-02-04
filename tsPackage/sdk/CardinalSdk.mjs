var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { InternalSdkInitializers } from "../cardinal-sdk-ts.mjs";
export var CardinalSdk;
(function (CardinalSdk) {
    /**
     * Initialize a new instance of the icure sdk for a specific user.
     *
     * @param applicationId a string to uniquely identify your iCure application.
     * @param baseUrl the url of the iCure backend to use
     * @param authenticationMethod specifies how the sdk should authenticate.
     * @param baseStorage an implementation of {@link StorageFacade} or standard icure storage options, used for persistent
     * storage of various information including the user keys if {@link SdkOptions.keyStorage}1 is not provided.
     * @param options optional parameters for the initialization of the sdk.
     */
    function initialize(applicationId, baseUrl, authenticationMethod, baseStorage, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield InternalSdkInitializers.getInstance().initializeSdk(applicationId, baseUrl, authenticationMethod, baseStorage, options);
        });
    }
    CardinalSdk.initialize = initialize;
    /**
     * Initialize a new instance of the icure sdk for a specific user.
     * The authentication will be performed through an authentication process.
     *
     * @param applicationId a string to uniquely identify your iCure application.
     * @param baseUrl the url of the iCure backend to use
     * @param messageGatewayUrl the url of the iCure message gateway you want to use. Usually this should be
     * @param externalServicesSpecId an identifier that allows the message gateway to connect the request to your
     * services for email / sms communication of the process tokens.
     * @param processId the id of the process you want to execute.
     * @param userTelecomType the type of telecom number used for the user.
     * @param userTelecom the telecom number of the user for which you want to execute the process. This should be an
     * email address or phone number depending on the type of process you are executing.
     * @param captchaOptions the captcha options
     * @param baseStorage an implementation of the [StorageFacade], used for persistent storage of various
     * information including the user keys if [ApiOptions.keyStorage] is not provided.
     * @param authenticationProcessTemplateParameters optional parameters which may be used by sms/email templates.
     * @param options optional parameters for the initialization of the sdk.
     */
    function initializeWithProcess(applicationId, baseUrl, messageGatewayUrl, externalServicesSpecId, processId, userTelecomType, userTelecom, captchaOptions, baseStorage, authenticationProcessTemplateParameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield InternalSdkInitializers.getInstance().initializeWithProcess(applicationId, baseUrl, messageGatewayUrl, externalServicesSpecId, processId, userTelecomType, userTelecom, captchaOptions, baseStorage, authenticationProcessTemplateParameters, options);
        });
    }
    CardinalSdk.initializeWithProcess = initializeWithProcess;
})(CardinalSdk || (CardinalSdk = {}));
export var CardinalBaseSdk;
(function (CardinalBaseSdk) {
    /**
     * Initialize a new instance of the icure sdk for a specific user.
     *
     * @param applicationId a string to uniquely identify your iCure application.
     * @param baseUrl the url of the iCure backend to use
     * @param authenticationMethod specifies how the sdk should authenticate.
     * @param options optional parameters for the initialization of the sdk.
     */
    function initialize(applicationId, baseUrl, authenticationMethod, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield InternalSdkInitializers.getInstance().initializeBase(applicationId, baseUrl, authenticationMethod, options);
        });
    }
    CardinalBaseSdk.initialize = initialize;
})(CardinalBaseSdk || (CardinalBaseSdk = {}));
//# sourceMappingURL=CardinalSdk.mjs.map