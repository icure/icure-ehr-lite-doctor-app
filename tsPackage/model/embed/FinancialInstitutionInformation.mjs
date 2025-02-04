export class DecryptedFinancialInstitutionInformation {
    constructor(partial) {
        this.name = undefined;
        this.key = undefined;
        this.bankAccount = undefined;
        this.bic = undefined;
        this.proxyBankAccount = undefined;
        this.proxyBic = undefined;
        this.preferredFiiForPartners = [];
        this.encryptedSelf = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        if ('name' in partial)
            this.name = partial.name;
        if ('key' in partial)
            this.key = partial.key;
        if ('bankAccount' in partial)
            this.bankAccount = partial.bankAccount;
        if ('bic' in partial)
            this.bic = partial.bic;
        if ('proxyBankAccount' in partial)
            this.proxyBankAccount = partial.proxyBankAccount;
        if ('proxyBic' in partial)
            this.proxyBic = partial.proxyBic;
        if ('preferredFiiForPartners' in partial && partial.preferredFiiForPartners !== undefined)
            this.preferredFiiForPartners = partial.preferredFiiForPartners;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
export class EncryptedFinancialInstitutionInformation {
    constructor(partial) {
        this.name = undefined;
        this.key = undefined;
        this.bankAccount = undefined;
        this.bic = undefined;
        this.proxyBankAccount = undefined;
        this.proxyBic = undefined;
        this.preferredFiiForPartners = [];
        this.encryptedSelf = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        if ('name' in partial)
            this.name = partial.name;
        if ('key' in partial)
            this.key = partial.key;
        if ('bankAccount' in partial)
            this.bankAccount = partial.bankAccount;
        if ('bic' in partial)
            this.bic = partial.bic;
        if ('proxyBankAccount' in partial)
            this.proxyBankAccount = partial.proxyBankAccount;
        if ('proxyBic' in partial)
            this.proxyBic = partial.proxyBic;
        if ('preferredFiiForPartners' in partial && partial.preferredFiiForPartners !== undefined)
            this.preferredFiiForPartners = partial.preferredFiiForPartners;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
//# sourceMappingURL=FinancialInstitutionInformation.mjs.map