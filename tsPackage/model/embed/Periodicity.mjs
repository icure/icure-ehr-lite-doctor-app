export class Periodicity {
    constructor(partial) {
        this.relatedCode = undefined;
        this.relatedPeriodicity = undefined;
        if ('relatedCode' in partial)
            this.relatedCode = partial.relatedCode;
        if ('relatedPeriodicity' in partial)
            this.relatedPeriodicity = partial.relatedPeriodicity;
    }
}
//# sourceMappingURL=Periodicity.mjs.map