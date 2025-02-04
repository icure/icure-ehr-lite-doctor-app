export class ReferenceRange {
    constructor(partial) {
        this.low = undefined;
        this.high = undefined;
        this.stringValue = undefined;
        this.tags = [];
        this.codes = [];
        this.notes = [];
        this.age = undefined;
        if ('low' in partial)
            this.low = partial.low;
        if ('high' in partial)
            this.high = partial.high;
        if ('stringValue' in partial)
            this.stringValue = partial.stringValue;
        if ('tags' in partial && partial.tags !== undefined)
            this.tags = partial.tags;
        if ('codes' in partial && partial.codes !== undefined)
            this.codes = partial.codes;
        if ('notes' in partial && partial.notes !== undefined)
            this.notes = partial.notes;
        if ('age' in partial)
            this.age = partial.age;
    }
}
//# sourceMappingURL=ReferenceRange.mjs.map