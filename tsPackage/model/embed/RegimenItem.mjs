export class RegimenItem {
    constructor(partial) {
        this.date = undefined;
        this.dayNumber = undefined;
        this.weekday = undefined;
        this.dayPeriod = undefined;
        this.timeOfDay = undefined;
        this.administratedQuantity = undefined;
        if ('date' in partial)
            this.date = partial.date;
        if ('dayNumber' in partial)
            this.dayNumber = partial.dayNumber;
        if ('weekday' in partial)
            this.weekday = partial.weekday;
        if ('dayPeriod' in partial)
            this.dayPeriod = partial.dayPeriod;
        if ('timeOfDay' in partial)
            this.timeOfDay = partial.timeOfDay;
        if ('administratedQuantity' in partial)
            this.administratedQuantity = partial.administratedQuantity;
    }
}
//# sourceMappingURL=RegimenItem.mjs.map