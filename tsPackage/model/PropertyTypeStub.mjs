export class PropertyTypeStub {
    constructor(partial) {
        this.identifier = undefined;
        this.type = undefined;
        if ('identifier' in partial)
            this.identifier = partial.identifier;
        if ('type' in partial)
            this.type = partial.type;
    }
}
//# sourceMappingURL=PropertyTypeStub.mjs.map