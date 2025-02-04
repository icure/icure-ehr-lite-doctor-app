export class SecurityMetadata {
    constructor(partial) {
        this.keysEquivalences = {};
        this.secureDelegations = partial.secureDelegations;
        if ('keysEquivalences' in partial && partial.keysEquivalences !== undefined)
            this.keysEquivalences = partial.keysEquivalences;
    }
}
//# sourceMappingURL=SecurityMetadata.mjs.map