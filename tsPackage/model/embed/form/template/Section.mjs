export class Section {
    constructor(partial) {
        this.description = undefined;
        this.keywords = undefined;
        this.section = partial.section;
        this.fields = partial.fields;
        if ('description' in partial)
            this.description = partial.description;
        if ('keywords' in partial)
            this.keywords = partial.keywords;
    }
}
//# sourceMappingURL=Section.mjs.map