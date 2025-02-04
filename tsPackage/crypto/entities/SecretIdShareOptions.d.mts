export type SecretIdShareOptions = SecretIdShareOptions.AllAvailable | SecretIdShareOptions.UseExactly;
export declare namespace SecretIdShareOptions {
    class AllAvailable {
        requireAtLeastOne: boolean;
        readonly $ktClass: 'com.icure.cardinal.sdk.crypto.entities.SecretIdShareOptions.AllAvailable';
        constructor(partial: Partial<AllAvailable> & Pick<AllAvailable, "requireAtLeastOne">);
    }
    class UseExactly {
        secretIds: Array<string>;
        createUnknownSecretIds: boolean;
        readonly $ktClass: 'com.icure.cardinal.sdk.crypto.entities.SecretIdShareOptions.UseExactly';
        constructor(partial: Partial<UseExactly> & Pick<UseExactly, "secretIds" | "createUnknownSecretIds">);
    }
}
