export class ListOfProperties {
    constructor(partial) {
        this.properties = [];
        if ('properties' in partial && partial.properties !== undefined)
            this.properties = partial.properties;
    }
}
//# sourceMappingURL=ListOfProperties.mjs.map