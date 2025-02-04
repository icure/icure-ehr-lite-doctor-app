export class DecryptedPatientHealthCareParty {
    constructor(partial) {
        this.type = undefined;
        this.healthcarePartyId = undefined;
        this.sendFormats = {};
        this.referralPeriods = [];
        this.referral = false;
        this.encryptedSelf = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        if ('type' in partial)
            this.type = partial.type;
        if ('healthcarePartyId' in partial)
            this.healthcarePartyId = partial.healthcarePartyId;
        if ('sendFormats' in partial && partial.sendFormats !== undefined)
            this.sendFormats = partial.sendFormats;
        if ('referralPeriods' in partial && partial.referralPeriods !== undefined)
            this.referralPeriods = partial.referralPeriods;
        if ('referral' in partial && partial.referral !== undefined)
            this.referral = partial.referral;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
export class EncryptedPatientHealthCareParty {
    constructor(partial) {
        this.type = undefined;
        this.healthcarePartyId = undefined;
        this.sendFormats = {};
        this.referralPeriods = [];
        this.referral = false;
        this.encryptedSelf = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        if ('type' in partial)
            this.type = partial.type;
        if ('healthcarePartyId' in partial)
            this.healthcarePartyId = partial.healthcarePartyId;
        if ('sendFormats' in partial && partial.sendFormats !== undefined)
            this.sendFormats = partial.sendFormats;
        if ('referralPeriods' in partial && partial.referralPeriods !== undefined)
            this.referralPeriods = partial.referralPeriods;
        if ('referral' in partial && partial.referral !== undefined)
            this.referral = partial.referral;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
//# sourceMappingURL=PatientHealthCareParty.mjs.map