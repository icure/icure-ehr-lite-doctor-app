export class Delegation {
    constructor(partial) {
        this.owner = undefined;
        this.delegatedTo = undefined;
        this.key = undefined;
        this.tags = [];
        if ('owner' in partial)
            this.owner = partial.owner;
        if ('delegatedTo' in partial)
            this.delegatedTo = partial.delegatedTo;
        if ('key' in partial)
            this.key = partial.key;
        if ('tags' in partial && partial.tags !== undefined)
            this.tags = partial.tags;
    }
}
//# sourceMappingURL=Delegation.mjs.map