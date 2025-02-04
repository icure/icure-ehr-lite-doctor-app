export class Permission {
    constructor(partial) {
        this.grants = [];
        this.revokes = [];
        if ('grants' in partial && partial.grants !== undefined)
            this.grants = partial.grants;
        if ('revokes' in partial && partial.revokes !== undefined)
            this.revokes = partial.revokes;
    }
}
//# sourceMappingURL=Permission.mjs.map