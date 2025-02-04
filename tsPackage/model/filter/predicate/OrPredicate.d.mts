import { Predicate } from './Predicate.mjs';
export declare class OrPredicate {
    predicates: Array<Predicate>;
    readonly $ktClass: 'com.icure.cardinal.sdk.model.filter.predicate.OrPredicate';
    constructor(partial: Partial<OrPredicate>);
}
