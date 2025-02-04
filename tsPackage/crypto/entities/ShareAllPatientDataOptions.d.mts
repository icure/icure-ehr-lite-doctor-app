import { EncryptedPatient } from '../../model/Patient.mjs';
import { FailedRequestDetails } from './FailedRequestDetails.mjs';
import { ShareAllPatientDataOptions as ShareAllPatientDataOptions_ } from './ShareAllPatientDataOptions.mjs';
export declare namespace ShareAllPatientDataOptions {
    enum Tag {
        All = "All",
        MedicalInformation = "MedicalInformation",
        FinancialInformation = "FinancialInformation"
    }
    enum ShareableEntity {
        CalendarItem = "CalendarItem",
        Contact = "Contact",
        Classification = "Classification",
        Document = "Document",
        Form = "Form",
        HealthElement = "HealthElement",
        Invoice = "Invoice",
        Patient = "Patient"
    }
    class EntityResult {
        success: boolean | undefined;
        error: ShareAllPatientDataOptions_.SharePatientDataError | undefined;
        modified: number;
        constructor(partial: Partial<EntityResult> & Pick<EntityResult, "modified">);
    }
    class Result {
        patient: EncryptedPatient;
        statuses: {
            [key in ShareAllPatientDataOptions_.ShareableEntity]?: ShareAllPatientDataOptions_.EntityResult;
        };
        constructor(partial: Partial<Result> & Pick<Result, "patient" | "statuses">);
    }
    type SharePatientDataError = BulkShareFailure | FailedRequest;
    class BulkShareFailure {
        errors: Array<FailedRequestDetails>;
        message: string;
        readonly $ktClass: 'com.icure.cardinal.sdk.crypto.entities.ShareAllPatientDataOptions.BulkShareFailure';
        constructor(partial: Partial<BulkShareFailure> & Pick<BulkShareFailure, "errors" | "message">);
    }
    class FailedRequest {
        description: string;
        readonly $ktClass: 'com.icure.cardinal.sdk.crypto.entities.ShareAllPatientDataOptions.FailedRequest';
        constructor(partial: Partial<FailedRequest> & Pick<FailedRequest, "description">);
    }
}
