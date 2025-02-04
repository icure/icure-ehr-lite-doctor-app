export class PersonName {
    constructor(partial) {
        this.lastName = undefined;
        this.firstNames = [];
        this.start = undefined;
        this.end = undefined;
        this.prefix = [];
        this.suffix = [];
        this.text = undefined;
        this.use = undefined;
        if ('lastName' in partial)
            this.lastName = partial.lastName;
        if ('firstNames' in partial && partial.firstNames !== undefined)
            this.firstNames = partial.firstNames;
        if ('start' in partial)
            this.start = partial.start;
        if ('end' in partial)
            this.end = partial.end;
        if ('prefix' in partial && partial.prefix !== undefined)
            this.prefix = partial.prefix;
        if ('suffix' in partial && partial.suffix !== undefined)
            this.suffix = partial.suffix;
        if ('text' in partial)
            this.text = partial.text;
        if ('use' in partial)
            this.use = partial.use;
    }
}
//# sourceMappingURL=PersonName.mjs.map