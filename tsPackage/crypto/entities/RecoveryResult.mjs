export var RecoveryResult;
(function (RecoveryResult) {
    class Success {
        constructor(partial) {
            this.$ktClass = 'com.icure.cardinal.sdk.crypto.entities.RecoveryResult.Success';
            this.data = partial.data;
        }
    }
    RecoveryResult.Success = Success;
    class Failure {
        constructor(partial) {
            this.$ktClass = 'com.icure.cardinal.sdk.crypto.entities.RecoveryResult.Failure';
            this.reason = partial.reason;
        }
    }
    RecoveryResult.Failure = Failure;
})(RecoveryResult || (RecoveryResult = {}));
//# sourceMappingURL=RecoveryResult.mjs.map