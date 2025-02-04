export class DecryptedValorisation {
    constructor(partial) {
        this.startOfValidity = undefined;
        this.endOfValidity = undefined;
        this.predicate = undefined;
        this.reference = undefined;
        this.totalAmount = undefined;
        this.reimbursement = undefined;
        this.patientIntervention = undefined;
        this.doctorSupplement = undefined;
        this.vat = undefined;
        this.label = {};
        this.encryptedSelf = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        if ('startOfValidity' in partial)
            this.startOfValidity = partial.startOfValidity;
        if ('endOfValidity' in partial)
            this.endOfValidity = partial.endOfValidity;
        if ('predicate' in partial)
            this.predicate = partial.predicate;
        if ('reference' in partial)
            this.reference = partial.reference;
        if ('totalAmount' in partial)
            this.totalAmount = partial.totalAmount;
        if ('reimbursement' in partial)
            this.reimbursement = partial.reimbursement;
        if ('patientIntervention' in partial)
            this.patientIntervention = partial.patientIntervention;
        if ('doctorSupplement' in partial)
            this.doctorSupplement = partial.doctorSupplement;
        if ('vat' in partial)
            this.vat = partial.vat;
        if ('label' in partial)
            this.label = partial.label;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
export class EncryptedValorisation {
    constructor(partial) {
        this.startOfValidity = undefined;
        this.endOfValidity = undefined;
        this.predicate = undefined;
        this.reference = undefined;
        this.totalAmount = undefined;
        this.reimbursement = undefined;
        this.patientIntervention = undefined;
        this.doctorSupplement = undefined;
        this.vat = undefined;
        this.label = {};
        this.encryptedSelf = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        if ('startOfValidity' in partial)
            this.startOfValidity = partial.startOfValidity;
        if ('endOfValidity' in partial)
            this.endOfValidity = partial.endOfValidity;
        if ('predicate' in partial)
            this.predicate = partial.predicate;
        if ('reference' in partial)
            this.reference = partial.reference;
        if ('totalAmount' in partial)
            this.totalAmount = partial.totalAmount;
        if ('reimbursement' in partial)
            this.reimbursement = partial.reimbursement;
        if ('patientIntervention' in partial)
            this.patientIntervention = partial.patientIntervention;
        if ('doctorSupplement' in partial)
            this.doctorSupplement = partial.doctorSupplement;
        if ('vat' in partial)
            this.vat = partial.vat;
        if ('label' in partial)
            this.label = partial.label;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
//# sourceMappingURL=Valorisation.mjs.map