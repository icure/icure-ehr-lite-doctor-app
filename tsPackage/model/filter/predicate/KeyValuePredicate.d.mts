import { Operator } from './Operator.mjs';
export declare class KeyValuePredicate {
    key: string | undefined;
    operator: Operator | undefined;
    value: any | undefined;
    readonly $ktClass: 'com.icure.cardinal.sdk.model.filter.predicate.KeyValuePredicate';
    constructor(partial: Partial<KeyValuePredicate>);
}
