export class DecryptedFlatRateTarification {
    constructor(partial) {
        this.code = undefined;
        this.flatRateType = undefined;
        this.label = undefined;
        this.valorisations = [];
        this.encryptedSelf = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        if ('code' in partial)
            this.code = partial.code;
        if ('flatRateType' in partial)
            this.flatRateType = partial.flatRateType;
        if ('label' in partial)
            this.label = partial.label;
        if ('valorisations' in partial && partial.valorisations !== undefined)
            this.valorisations = partial.valorisations;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
export class EncryptedFlatRateTarification {
    constructor(partial) {
        this.code = undefined;
        this.flatRateType = undefined;
        this.label = undefined;
        this.valorisations = [];
        this.encryptedSelf = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        if ('code' in partial)
            this.code = partial.code;
        if ('flatRateType' in partial)
            this.flatRateType = partial.flatRateType;
        if ('label' in partial)
            this.label = partial.label;
        if ('valorisations' in partial && partial.valorisations !== undefined)
            this.valorisations = partial.valorisations;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
//# sourceMappingURL=FlatRateTarification.mjs.map