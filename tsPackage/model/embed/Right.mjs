// auto-generated file
export class Right {
    constructor(partial) {
        this.userId = undefined;
        this.read = false;
        this.write = false;
        this.administration = false;
        if ('userId' in partial)
            this.userId = partial.userId;
        if ('read' in partial && partial.read !== undefined)
            this.read = partial.read;
        if ('write' in partial && partial.write !== undefined)
            this.write = partial.write;
        if ('administration' in partial && partial.administration !== undefined)
            this.administration = partial.administration;
    }
}
//# sourceMappingURL=Right.mjs.map