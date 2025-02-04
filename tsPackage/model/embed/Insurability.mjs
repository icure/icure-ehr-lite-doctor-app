export class DecryptedInsurability {
    constructor(partial) {
        this.parameters = {};
        this.hospitalisation = undefined;
        this.ambulatory = undefined;
        this.dental = undefined;
        this.identificationNumber = undefined;
        this.insuranceId = undefined;
        this.startDate = undefined;
        this.endDate = undefined;
        this.titularyId = undefined;
        this.encryptedSelf = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        if ('parameters' in partial && partial.parameters !== undefined)
            this.parameters = partial.parameters;
        if ('hospitalisation' in partial)
            this.hospitalisation = partial.hospitalisation;
        if ('ambulatory' in partial)
            this.ambulatory = partial.ambulatory;
        if ('dental' in partial)
            this.dental = partial.dental;
        if ('identificationNumber' in partial)
            this.identificationNumber = partial.identificationNumber;
        if ('insuranceId' in partial)
            this.insuranceId = partial.insuranceId;
        if ('startDate' in partial)
            this.startDate = partial.startDate;
        if ('endDate' in partial)
            this.endDate = partial.endDate;
        if ('titularyId' in partial)
            this.titularyId = partial.titularyId;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
export class EncryptedInsurability {
    constructor(partial) {
        this.parameters = {};
        this.hospitalisation = undefined;
        this.ambulatory = undefined;
        this.dental = undefined;
        this.identificationNumber = undefined;
        this.insuranceId = undefined;
        this.startDate = undefined;
        this.endDate = undefined;
        this.titularyId = undefined;
        this.encryptedSelf = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        if ('parameters' in partial && partial.parameters !== undefined)
            this.parameters = partial.parameters;
        if ('hospitalisation' in partial)
            this.hospitalisation = partial.hospitalisation;
        if ('ambulatory' in partial)
            this.ambulatory = partial.ambulatory;
        if ('dental' in partial)
            this.dental = partial.dental;
        if ('identificationNumber' in partial)
            this.identificationNumber = partial.identificationNumber;
        if ('insuranceId' in partial)
            this.insuranceId = partial.insuranceId;
        if ('startDate' in partial)
            this.startDate = partial.startDate;
        if ('endDate' in partial)
            this.endDate = partial.endDate;
        if ('titularyId' in partial)
            this.titularyId = partial.titularyId;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
//# sourceMappingURL=Insurability.mjs.map