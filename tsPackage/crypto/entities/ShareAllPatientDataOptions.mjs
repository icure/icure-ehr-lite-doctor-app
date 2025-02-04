export var ShareAllPatientDataOptions;
(function (ShareAllPatientDataOptions) {
    let Tag;
    (function (Tag) {
        Tag["All"] = "All";
        Tag["MedicalInformation"] = "MedicalInformation";
        Tag["FinancialInformation"] = "FinancialInformation";
    })(Tag = ShareAllPatientDataOptions.Tag || (ShareAllPatientDataOptions.Tag = {}));
    let ShareableEntity;
    (function (ShareableEntity) {
        ShareableEntity["CalendarItem"] = "CalendarItem";
        ShareableEntity["Contact"] = "Contact";
        ShareableEntity["Classification"] = "Classification";
        ShareableEntity["Document"] = "Document";
        ShareableEntity["Form"] = "Form";
        ShareableEntity["HealthElement"] = "HealthElement";
        ShareableEntity["Invoice"] = "Invoice";
        ShareableEntity["Patient"] = "Patient";
    })(ShareableEntity = ShareAllPatientDataOptions.ShareableEntity || (ShareAllPatientDataOptions.ShareableEntity = {}));
    class EntityResult {
        constructor(partial) {
            this.success = undefined;
            this.error = undefined;
            if ('success' in partial)
                this.success = partial.success;
            if ('error' in partial)
                this.error = partial.error;
            this.modified = partial.modified;
        }
    }
    ShareAllPatientDataOptions.EntityResult = EntityResult;
    class Result {
        constructor(partial) {
            this.patient = partial.patient;
            this.statuses = partial.statuses;
        }
    }
    ShareAllPatientDataOptions.Result = Result;
    class BulkShareFailure {
        constructor(partial) {
            this.$ktClass = 'com.icure.cardinal.sdk.crypto.entities.ShareAllPatientDataOptions.BulkShareFailure';
            this.errors = partial.errors;
            this.message = partial.message;
        }
    }
    ShareAllPatientDataOptions.BulkShareFailure = BulkShareFailure;
    class FailedRequest {
        constructor(partial) {
            this.$ktClass = 'com.icure.cardinal.sdk.crypto.entities.ShareAllPatientDataOptions.FailedRequest';
            this.description = partial.description;
        }
    }
    ShareAllPatientDataOptions.FailedRequest = FailedRequest;
})(ShareAllPatientDataOptions || (ShareAllPatientDataOptions = {}));
//# sourceMappingURL=ShareAllPatientDataOptions.mjs.map