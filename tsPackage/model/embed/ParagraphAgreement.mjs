export class ParagraphAgreement {
    constructor(partial) {
        this.timestamp = undefined;
        this.paragraph = undefined;
        this.accepted = undefined;
        this.inTreatment = undefined;
        this.canceled = undefined;
        this.careProviderReference = undefined;
        this.decisionReference = undefined;
        this.start = undefined;
        this.end = undefined;
        this.cancelationDate = undefined;
        this.quantityValue = undefined;
        this.quantityUnit = undefined;
        this.ioRequestReference = undefined;
        this.responseType = undefined;
        this.refusalJustification = undefined;
        this.verses = undefined;
        this.coverageType = undefined;
        this.unitNumber = undefined;
        this.strength = undefined;
        this.strengthUnit = undefined;
        this.agreementAppendices = undefined;
        this.documentId = undefined;
        if ('timestamp' in partial)
            this.timestamp = partial.timestamp;
        if ('paragraph' in partial)
            this.paragraph = partial.paragraph;
        if ('accepted' in partial)
            this.accepted = partial.accepted;
        if ('inTreatment' in partial)
            this.inTreatment = partial.inTreatment;
        if ('canceled' in partial)
            this.canceled = partial.canceled;
        if ('careProviderReference' in partial)
            this.careProviderReference = partial.careProviderReference;
        if ('decisionReference' in partial)
            this.decisionReference = partial.decisionReference;
        if ('start' in partial)
            this.start = partial.start;
        if ('end' in partial)
            this.end = partial.end;
        if ('cancelationDate' in partial)
            this.cancelationDate = partial.cancelationDate;
        if ('quantityValue' in partial)
            this.quantityValue = partial.quantityValue;
        if ('quantityUnit' in partial)
            this.quantityUnit = partial.quantityUnit;
        if ('ioRequestReference' in partial)
            this.ioRequestReference = partial.ioRequestReference;
        if ('responseType' in partial)
            this.responseType = partial.responseType;
        if ('refusalJustification' in partial)
            this.refusalJustification = partial.refusalJustification;
        if ('verses' in partial)
            this.verses = partial.verses;
        if ('coverageType' in partial)
            this.coverageType = partial.coverageType;
        if ('unitNumber' in partial)
            this.unitNumber = partial.unitNumber;
        if ('strength' in partial)
            this.strength = partial.strength;
        if ('strengthUnit' in partial)
            this.strengthUnit = partial.strengthUnit;
        if ('agreementAppendices' in partial)
            this.agreementAppendices = partial.agreementAppendices;
        if ('documentId' in partial)
            this.documentId = partial.documentId;
    }
}
//# sourceMappingURL=ParagraphAgreement.mjs.map