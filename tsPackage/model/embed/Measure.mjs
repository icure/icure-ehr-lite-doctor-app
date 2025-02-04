export class Measure {
    constructor(partial) {
        this.value = undefined;
        this.ref = undefined;
        this.severity = undefined;
        this.severityCode = undefined;
        this.evolution = undefined;
        this.unit = undefined;
        this.unitCodes = undefined;
        this.comment = undefined;
        this.comparator = undefined;
        this.sign = undefined;
        this.referenceRanges = [];
        if ('value' in partial)
            this.value = partial.value;
        if ('ref' in partial)
            this.ref = partial.ref;
        if ('severity' in partial)
            this.severity = partial.severity;
        if ('severityCode' in partial)
            this.severityCode = partial.severityCode;
        if ('evolution' in partial)
            this.evolution = partial.evolution;
        if ('unit' in partial)
            this.unit = partial.unit;
        if ('unitCodes' in partial)
            this.unitCodes = partial.unitCodes;
        if ('comment' in partial)
            this.comment = partial.comment;
        if ('comparator' in partial)
            this.comparator = partial.comparator;
        if ('sign' in partial)
            this.sign = partial.sign;
        if ('referenceRanges' in partial && partial.referenceRanges !== undefined)
            this.referenceRanges = partial.referenceRanges;
    }
}
//# sourceMappingURL=Measure.mjs.map