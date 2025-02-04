export class KeywordSubword {
    constructor(partial) {
        this.value = undefined;
        this.subWords = undefined;
        if ('value' in partial)
            this.value = partial.value;
        if ('subWords' in partial)
            this.subWords = partial.subWords;
    }
}
//# sourceMappingURL=KeywordSubword.mjs.map