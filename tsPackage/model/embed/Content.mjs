export class DecryptedContent {
    constructor(partial) {
        this.stringValue = undefined;
        this.numberValue = undefined;
        this.booleanValue = undefined;
        this.instantValue = undefined;
        this.fuzzyDateValue = undefined;
        this.binaryValue = undefined;
        this.documentId = undefined;
        this.measureValue = undefined;
        this.medicationValue = undefined;
        this.timeSeries = undefined;
        this.compoundValue = undefined;
        this.ratio = undefined;
        this.range = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        if ('stringValue' in partial)
            this.stringValue = partial.stringValue;
        if ('numberValue' in partial)
            this.numberValue = partial.numberValue;
        if ('booleanValue' in partial)
            this.booleanValue = partial.booleanValue;
        if ('instantValue' in partial)
            this.instantValue = partial.instantValue;
        if ('fuzzyDateValue' in partial)
            this.fuzzyDateValue = partial.fuzzyDateValue;
        if ('binaryValue' in partial)
            this.binaryValue = partial.binaryValue;
        if ('documentId' in partial)
            this.documentId = partial.documentId;
        if ('measureValue' in partial)
            this.measureValue = partial.measureValue;
        if ('medicationValue' in partial)
            this.medicationValue = partial.medicationValue;
        if ('timeSeries' in partial)
            this.timeSeries = partial.timeSeries;
        if ('compoundValue' in partial)
            this.compoundValue = partial.compoundValue;
        if ('ratio' in partial)
            this.ratio = partial.ratio;
        if ('range' in partial)
            this.range = partial.range;
    }
}
export class EncryptedContent {
    constructor(partial) {
        this.stringValue = undefined;
        this.numberValue = undefined;
        this.booleanValue = undefined;
        this.instantValue = undefined;
        this.fuzzyDateValue = undefined;
        this.binaryValue = undefined;
        this.documentId = undefined;
        this.measureValue = undefined;
        this.medicationValue = undefined;
        this.timeSeries = undefined;
        this.compoundValue = undefined;
        this.ratio = undefined;
        this.range = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        if ('stringValue' in partial)
            this.stringValue = partial.stringValue;
        if ('numberValue' in partial)
            this.numberValue = partial.numberValue;
        if ('booleanValue' in partial)
            this.booleanValue = partial.booleanValue;
        if ('instantValue' in partial)
            this.instantValue = partial.instantValue;
        if ('fuzzyDateValue' in partial)
            this.fuzzyDateValue = partial.fuzzyDateValue;
        if ('binaryValue' in partial)
            this.binaryValue = partial.binaryValue;
        if ('documentId' in partial)
            this.documentId = partial.documentId;
        if ('measureValue' in partial)
            this.measureValue = partial.measureValue;
        if ('medicationValue' in partial)
            this.medicationValue = partial.medicationValue;
        if ('timeSeries' in partial)
            this.timeSeries = partial.timeSeries;
        if ('compoundValue' in partial)
            this.compoundValue = partial.compoundValue;
        if ('ratio' in partial)
            this.ratio = partial.ratio;
        if ('range' in partial)
            this.range = partial.range;
    }
}
//# sourceMappingURL=Content.mjs.map