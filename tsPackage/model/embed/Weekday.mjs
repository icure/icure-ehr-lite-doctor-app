export class Weekday {
    constructor(partial) {
        this.weekday = undefined;
        this.weekNumber = undefined;
        if ('weekday' in partial)
            this.weekday = partial.weekday;
        if ('weekNumber' in partial)
            this.weekNumber = partial.weekNumber;
    }
}
//# sourceMappingURL=Weekday.mjs.map