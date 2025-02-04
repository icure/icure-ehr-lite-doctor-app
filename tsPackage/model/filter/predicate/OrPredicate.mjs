export class OrPredicate {
    constructor(partial) {
        this.predicates = [];
        this.$ktClass = 'com.icure.cardinal.sdk.model.filter.predicate.OrPredicate';
        if ('predicates' in partial && partial.predicates !== undefined)
            this.predicates = partial.predicates;
    }
}
//# sourceMappingURL=OrPredicate.mjs.map