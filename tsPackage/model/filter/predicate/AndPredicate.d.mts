import { Predicate } from './Predicate.mjs';
export declare class AndPredicate {
    predicates: Array<Predicate>;
    readonly $ktClass: 'com.icure.cardinal.sdk.model.filter.predicate.AndPredicate';
    constructor(partial: Partial<AndPredicate>);
}
