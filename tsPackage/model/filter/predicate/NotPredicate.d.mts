import { Predicate } from './Predicate.mjs';
export declare class NotPredicate {
    predicate: Predicate;
    readonly $ktClass: 'com.icure.cardinal.sdk.model.filter.predicate.NotPredicate';
    constructor(partial: Partial<NotPredicate> & Pick<NotPredicate, "predicate">);
}
