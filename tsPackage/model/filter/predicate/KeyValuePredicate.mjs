export class KeyValuePredicate {
    constructor(partial) {
        this.key = undefined;
        this.operator = undefined;
        this.value = undefined;
        this.$ktClass = 'com.icure.cardinal.sdk.model.filter.predicate.KeyValuePredicate';
        if ('key' in partial)
            this.key = partial.key;
        if ('operator' in partial)
            this.operator = partial.operator;
        if ('value' in partial)
            this.value = partial.value;
    }
}
//# sourceMappingURL=KeyValuePredicate.mjs.map