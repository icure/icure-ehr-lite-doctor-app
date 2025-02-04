export class Identifier {
    constructor(partial) {
        this.id = undefined;
        this.assigner = undefined;
        this.start = undefined;
        this.end = undefined;
        this.system = undefined;
        this.type = undefined;
        this.use = undefined;
        this.value = undefined;
        if ('id' in partial)
            this.id = partial.id;
        if ('assigner' in partial)
            this.assigner = partial.assigner;
        if ('start' in partial)
            this.start = partial.start;
        if ('end' in partial)
            this.end = partial.end;
        if ('system' in partial)
            this.system = partial.system;
        if ('type' in partial)
            this.type = partial.type;
        if ('use' in partial)
            this.use = partial.use;
        if ('value' in partial)
            this.value = partial.value;
    }
}
//# sourceMappingURL=Identifier.mjs.map