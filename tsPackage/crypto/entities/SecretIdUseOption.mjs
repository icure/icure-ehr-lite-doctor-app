// auto-generated file
export var SecretIdUseOption;
(function (SecretIdUseOption) {
    SecretIdUseOption.UseAnyConfidential = {
        $ktClass: 'com.icure.cardinal.sdk.crypto.entities.SecretIdUseOption.UseAnyConfidential'
    };
    SecretIdUseOption.UseAllConfidential = {
        $ktClass: 'com.icure.cardinal.sdk.crypto.entities.SecretIdUseOption.UseAllConfidential'
    };
    SecretIdUseOption.UseAnySharedWithParent = {
        $ktClass: 'com.icure.cardinal.sdk.crypto.entities.SecretIdUseOption.UseAnySharedWithParent'
    };
    SecretIdUseOption.UseAllSharedWithParent = {
        $ktClass: 'com.icure.cardinal.sdk.crypto.entities.SecretIdUseOption.UseAllSharedWithParent'
    };
    class Use {
        constructor(partial) {
            this.$ktClass = 'com.icure.cardinal.sdk.crypto.entities.SecretIdUseOption.Use';
            this.secretIds = partial.secretIds;
        }
    }
    SecretIdUseOption.Use = Use;
    SecretIdUseOption.UseNone = {
        $ktClass: 'com.icure.cardinal.sdk.crypto.entities.SecretIdUseOption.UseNone'
    };
})(SecretIdUseOption || (SecretIdUseOption = {}));
//# sourceMappingURL=SecretIdUseOption.mjs.map