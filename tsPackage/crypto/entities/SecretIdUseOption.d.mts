export type SecretIdUseOption = typeof SecretIdUseOption.UseAnyConfidential | typeof SecretIdUseOption.UseAllConfidential | typeof SecretIdUseOption.UseAnySharedWithParent | typeof SecretIdUseOption.UseAllSharedWithParent | SecretIdUseOption.Use | typeof SecretIdUseOption.UseNone;
export declare namespace SecretIdUseOption {
    const UseAnyConfidential: {
        readonly $ktClass: 'com.icure.cardinal.sdk.crypto.entities.SecretIdUseOption.UseAnyConfidential';
    };
    const UseAllConfidential: {
        readonly $ktClass: 'com.icure.cardinal.sdk.crypto.entities.SecretIdUseOption.UseAllConfidential';
    };
    const UseAnySharedWithParent: {
        readonly $ktClass: 'com.icure.cardinal.sdk.crypto.entities.SecretIdUseOption.UseAnySharedWithParent';
    };
    const UseAllSharedWithParent: {
        readonly $ktClass: 'com.icure.cardinal.sdk.crypto.entities.SecretIdUseOption.UseAllSharedWithParent';
    };
    class Use {
        secretIds: Array<string>;
        readonly $ktClass: 'com.icure.cardinal.sdk.crypto.entities.SecretIdUseOption.Use';
        constructor(partial: Partial<Use> & Pick<Use, "secretIds">);
    }
    const UseNone: {
        readonly $ktClass: 'com.icure.cardinal.sdk.crypto.entities.SecretIdUseOption.UseNone';
    };
}
