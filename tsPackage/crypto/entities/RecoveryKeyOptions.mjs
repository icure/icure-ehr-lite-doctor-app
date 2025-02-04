export var RecoveryKeyOptions;
(function (RecoveryKeyOptions) {
    class Generate {
        constructor(partial) {
            this.$ktClass = 'com.icure.cardinal.sdk.crypto.entities.RecoveryKeyOptions.Generate';
            this.recoveryKeySize = partial.recoveryKeySize;
        }
    }
    RecoveryKeyOptions.Generate = Generate;
    class Use {
        constructor(partial) {
            this.$ktClass = 'com.icure.cardinal.sdk.crypto.entities.RecoveryKeyOptions.Use';
            this.key = partial.key;
        }
    }
    RecoveryKeyOptions.Use = Use;
})(RecoveryKeyOptions || (RecoveryKeyOptions = {}));
//# sourceMappingURL=RecoveryKeyOptions.mjs.map