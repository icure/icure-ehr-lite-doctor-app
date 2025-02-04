export class PaginatedList {
    constructor(partial) {
        this.rows = [];
        this.nextKeyPair = undefined;
        if ('rows' in partial && partial.rows !== undefined)
            this.rows = partial.rows;
        if ('nextKeyPair' in partial)
            this.nextKeyPair = partial.nextKeyPair;
    }
}
//# sourceMappingURL=PaginatedList.mjs.map