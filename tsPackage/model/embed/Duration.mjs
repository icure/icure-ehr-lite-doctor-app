export class Duration {
    constructor(partial) {
        this.value = undefined;
        this.unit = undefined;
        if ('value' in partial)
            this.value = partial.value;
        if ('unit' in partial)
            this.unit = partial.unit;
    }
}
//# sourceMappingURL=Duration.mjs.map