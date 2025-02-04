import { RecoveryDataUseFailureReason } from './RecoveryDataUseFailureReason.mjs';
export type RecoveryResult<T> = RecoveryResult.Success<T> | RecoveryResult.Failure;
export declare namespace RecoveryResult {
    class Success<T> {
        data: T;
        readonly $ktClass: 'com.icure.cardinal.sdk.crypto.entities.RecoveryResult.Success';
        constructor(partial: Partial<Success<T>> & Pick<Success<T>, "data">);
    }
    class Failure {
        reason: RecoveryDataUseFailureReason;
        readonly $ktClass: 'com.icure.cardinal.sdk.crypto.entities.RecoveryResult.Failure';
        constructor(partial: Partial<Failure> & Pick<Failure, "reason">);
    }
}
