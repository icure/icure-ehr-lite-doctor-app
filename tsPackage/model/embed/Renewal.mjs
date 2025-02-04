export class Renewal {
    constructor(partial) {
        this.decimal = undefined;
        this.duration = undefined;
        if ('decimal' in partial)
            this.decimal = partial.decimal;
        if ('duration' in partial)
            this.duration = partial.duration;
    }
}
//# sourceMappingURL=Renewal.mjs.map