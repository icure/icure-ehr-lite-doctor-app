export class FailedRequestDetails {
    constructor(partial) {
        this.entityId = partial.entityId;
        this.delegateId = partial.delegateId;
        this.updatedForMigration = partial.updatedForMigration;
        this.code = partial.code;
        this.reason = partial.reason;
        this.request = partial.request;
        this.shouldRetry = partial.shouldRetry;
    }
}
//# sourceMappingURL=FailedRequestDetails.mjs.map