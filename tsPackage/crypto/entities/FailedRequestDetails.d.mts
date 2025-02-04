import { DelegateShareOptions } from './DelegateShareOptions.mjs';
export declare class FailedRequestDetails {
    entityId: string;
    delegateId: string;
    updatedForMigration: boolean;
    code: number | undefined;
    reason: string | undefined;
    request: DelegateShareOptions | undefined;
    shouldRetry: boolean;
    constructor(partial: Partial<FailedRequestDetails> & Pick<FailedRequestDetails, "entityId" | "delegateId" | "updatedForMigration" | "code" | "reason" | "request" | "shouldRetry">);
}
