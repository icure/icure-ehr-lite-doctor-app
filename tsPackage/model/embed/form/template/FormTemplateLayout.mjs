export class FormTemplateLayout {
    constructor(partial) {
        this.actions = [];
        this.sections = [];
        this.description = undefined;
        this.keywords = undefined;
        this.form = partial.form;
        if ('actions' in partial && partial.actions !== undefined)
            this.actions = partial.actions;
        if ('sections' in partial && partial.sections !== undefined)
            this.sections = partial.sections;
        if ('description' in partial)
            this.description = partial.description;
        if ('keywords' in partial)
            this.keywords = partial.keywords;
    }
}
//# sourceMappingURL=FormTemplateLayout.mjs.map