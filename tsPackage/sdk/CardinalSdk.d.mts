import { AccessLogApi } from "../api/AccessLogApi.mjs";
import { CalendarItemApi } from "../api/CalendarItemApi.mjs";
import { ClassificationApi } from "../api/ClassificationApi.mjs";
import { ContactApi } from "../api/ContactApi.mjs";
import { DeviceApi } from "../api/DeviceApi.mjs";
import { DocumentApi } from "../api/DocumentApi.mjs";
import { FormApi } from "../api/FormApi.mjs";
import { HealthElementApi } from "../api/HealthElementApi.mjs";
import { InvoiceApi } from "../api/InvoiceApi.mjs";
import { MaintenanceTaskApi } from "../api/MaintenanceTaskApi.mjs";
import { MessageApi } from "../api/MessageApi.mjs";
import { PatientApi } from "../api/PatientApi.mjs";
import { PermissionApi } from "../api/PermissionApi.mjs";
import { ReceiptApi } from "../api/ReceiptApi.mjs";
import { TimeTableApi } from "../api/TimeTableApi.mjs";
import { TopicApi } from "../api/TopicApi.mjs";
import { CryptoApi } from "../api/CryptoApi.mjs";
import { DataOwnerApi } from "../api/DataOwnerApi.mjs";
import { UserApi } from "../api/UserApi.mjs";
import { CardinalMaintenanceTaskApi } from "../api/CardinalMaintenanceTaskApi.mjs";
import { RecoveryApi } from "../api/RecoveryApi.mjs";
import { AuthenticationMethod, AuthenticationProcessTelecomType, AuthenticationProcessTemplateParameters } from "../options/AuthenticationMethod.mjs";
import { StorageFacade } from "../storage/StorageFacade.mjs";
import { CardinalStorageOptions } from "../cardinal-sdk-ts.mjs";
import { SdkOptions, BasicSdkOptions } from "../options/SdkOptions.mjs";
import { ApplicationSettingsApi } from "../api/ApplicationSettingsApi.mjs";
import { CodeApi } from "../api/CodeApi.mjs";
import { DocumentTemplateApi } from "../api/DocumentTemplateApi.mjs";
import { EntityReferenceApi } from "../api/EntityReferenceApi.mjs";
import { EntityTemplateApi } from "../api/EntityTemplateApi.mjs";
import { FrontEndMigrationApi } from "../api/FrontEndMigrationApi.mjs";
import { GroupApi } from "../api/GroupApi.mjs";
import { HealthcarePartyApi } from "../api/HealthcarePartyApi.mjs";
import { SystemApi } from "../api/SystemApi.mjs";
import { InsuranceApi } from "../api/InsuranceApi.mjs";
import { KeywordApi } from "../api/KeywordApi.mjs";
import { PlaceApi } from "../api/PlaceApi.mjs";
import { RoleApi } from "../api/RoleApi.mjs";
import { TarificationApi } from "../api/TarificationApi.mjs";
import { AccessLogBasicApi } from "../api/AccessLogBasicApi.mjs";
import { CalendarItemBasicApi } from "../api/CalendarItemBasicApi.mjs";
import { ClassificationBasicApi } from "../api/ClassificationBasicApi.mjs";
import { ContactBasicApi } from "../api/ContactBasicApi.mjs";
import { DocumentBasicApi } from "../api/DocumentBasicApi.mjs";
import { FormBasicApi } from "../api/FormBasicApi.mjs";
import { HealthElementBasicApi } from "../api/HealthElementBasicApi.mjs";
import { InvoiceBasicApi } from "../api/InvoiceBasicApi.mjs";
import { MaintenanceTaskBasicApi } from "../api/MaintenanceTaskBasicApi.mjs";
import { MessageBasicApi } from "../api/MessageBasicApi.mjs";
import { PatientBasicApi } from "../api/PatientBasicApi.mjs";
import { ReceiptBasicApi } from "../api/ReceiptBasicApi.mjs";
import { TimeTableBasicApi } from "../api/TimeTableBasicApi.mjs";
import { TopicBasicApi } from "../api/TopicBasicApi.mjs";
import { AgendaApi } from "../api/AgendaApi.mjs";
import { MedicalLocationApi } from "../api/MedicalLocationApi.mjs";
import { CaptchaOptions } from "../auth/CaptchaOptions.mjs";
export interface CardinalApis {
    readonly applicationSettings: ApplicationSettingsApi;
    readonly code: CodeApi;
    readonly device: DeviceApi;
    readonly documentTemplate: DocumentTemplateApi;
    readonly entityReference: EntityReferenceApi;
    readonly entityTemplate: EntityTemplateApi;
    readonly frontEndMigration: FrontEndMigrationApi;
    readonly group: GroupApi;
    readonly healthcareParty: HealthcarePartyApi;
    readonly system: SystemApi;
    readonly insurance: InsuranceApi;
    readonly keyword: KeywordApi;
    readonly permission: PermissionApi;
    readonly place: PlaceApi;
    readonly role: RoleApi;
    readonly tarification: TarificationApi;
    readonly user: UserApi;
    readonly medicalLocationApi: MedicalLocationApi;
    readonly agendaApi: AgendaApi;
    readonly accessLog: AccessLogApi;
    readonly calendarItem: CalendarItemApi;
    readonly classification: ClassificationApi;
    readonly contact: ContactApi;
    readonly document: DocumentApi;
    readonly form: FormApi;
    readonly healthElement: HealthElementApi;
    readonly invoice: InvoiceApi;
    readonly maintenanceTask: MaintenanceTaskApi;
    readonly message: MessageApi;
    readonly patient: PatientApi;
    readonly receipt: ReceiptApi;
    readonly timeTable: TimeTableApi;
    readonly topic: TopicApi;
    readonly crypto: CryptoApi;
    readonly recovery: RecoveryApi;
    readonly cardinalMaintenanceTask: CardinalMaintenanceTaskApi;
    readonly dataOwner: DataOwnerApi;
}
/**
 * Main entry point to use iCure, provides access to the various apis with encryption capabilities.
 * Only data owner users with a valid keypair can use these apis.
 */
export interface CardinalSdk extends CardinalApis {
    /**
     * Get a new sdk using the same configurations and user authentication methods but for a different group.
     * To use this method, the authentication method provided at initialization of this sdk must be valid also for the
     * new group.
     *
     * @param groupId the id of the new group to switch to
     * @return a new sdk for executing requests in the provided group
     */
    switchGroup(groupId: String): Promise<CardinalSdk>;
}
export interface CardinalBaseApis {
    readonly applicationSettings: ApplicationSettingsApi;
    readonly code: CodeApi;
    readonly device: DeviceApi;
    readonly documentTemplate: DocumentTemplateApi;
    readonly entityReference: EntityReferenceApi;
    readonly entityTemplate: EntityTemplateApi;
    readonly frontEndMigration: FrontEndMigrationApi;
    readonly group: GroupApi;
    readonly healthcareParty: HealthcarePartyApi;
    readonly system: SystemApi;
    readonly insurance: InsuranceApi;
    readonly keyword: KeywordApi;
    readonly permission: PermissionApi;
    readonly place: PlaceApi;
    readonly role: RoleApi;
    readonly tarification: TarificationApi;
    readonly user: UserApi;
    readonly medicalLocationApi: MedicalLocationApi;
    readonly agendaApi: AgendaApi;
    readonly accessLog: AccessLogBasicApi;
    readonly calendarItem: CalendarItemBasicApi;
    readonly classification: ClassificationBasicApi;
    readonly contact: ContactBasicApi;
    readonly document: DocumentBasicApi;
    readonly form: FormBasicApi;
    readonly healthElement: HealthElementBasicApi;
    readonly invoice: InvoiceBasicApi;
    readonly maintenanceTask: MaintenanceTaskBasicApi;
    readonly message: MessageBasicApi;
    readonly patient: PatientBasicApi;
    readonly receipt: ReceiptBasicApi;
    readonly timeTable: TimeTableBasicApi;
    readonly topic: TopicBasicApi;
}
/**
 * A stripped down version of the iCure SDK that can be used also by users that aren't data owners.
 * This could be useful, for example, if you want to perform some system maintenance using an admin user, or compile
 * some statistics without using any encrypted information
 */
export interface CardinalBaseSdk extends CardinalBaseApis {
    /**
     * Get a new sdk using the same configurations and user authentication methods but for a different group.
     * To use this method, the authentication method provided at initialization of this sdk must be valid also for the
     * new group.
     *
     * @param groupId the id of the new group to switch to
     * @return a new sdk for executing requests in the provided group
     */
    switchGroup(groupId: string): Promise<CardinalBaseSdk>;
}
export declare namespace CardinalSdk {
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
    function initialize(applicationId: string | undefined, baseUrl: string, authenticationMethod: AuthenticationMethod, baseStorage: StorageFacade | CardinalStorageOptions, options?: SdkOptions): Promise<CardinalSdk>;
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
    function initializeWithProcess(applicationId: string | undefined, baseUrl: string, messageGatewayUrl: string, externalServicesSpecId: string, processId: string, userTelecomType: AuthenticationProcessTelecomType, userTelecom: string, captchaOptions: CaptchaOptions, baseStorage: StorageFacade | CardinalStorageOptions, authenticationProcessTemplateParameters?: AuthenticationProcessTemplateParameters, options?: SdkOptions): Promise<AuthenticationWithProcessStep>;
    /**
     * Represents an intermediate stage in the initialization of an SDK through an authentication process
     * The initialization can complete only after the user provides the validation code received via email/sms.
     */
    interface AuthenticationWithProcessStep {
        /**
         * Complete the authentication of the user and finishes the initialization of the SDK.
         * In case the provided validation code is wrong this method will throw an exception, but it is still possible
         * to call to re-attempt authentication by calling this method with a different validation code.
         */
        completeAuthentication(validationCode: String): Promise<CardinalSdk>;
    }
}
export declare namespace CardinalBaseSdk {
    /**
     * Initialize a new instance of the icure sdk for a specific user.
     *
     * @param applicationId a string to uniquely identify your iCure application.
     * @param baseUrl the url of the iCure backend to use
     * @param authenticationMethod specifies how the sdk should authenticate.
     * @param options optional parameters for the initialization of the sdk.
     */
    function initialize(applicationId: string | undefined, baseUrl: string, authenticationMethod: AuthenticationMethod, options?: BasicSdkOptions): Promise<CardinalBaseSdk>;
}
