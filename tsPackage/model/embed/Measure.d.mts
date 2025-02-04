import { CodeStub } from '../base/CodeStub.mjs';
import { ReferenceRange } from './ReferenceRange.mjs';
export declare class Measure {
    value: number | undefined;
    ref: number | undefined;
    severity: number | undefined;
    severityCode: string | undefined;
    evolution: number | undefined;
    unit: string | undefined;
    unitCodes: Array<CodeStub> | undefined;
    comment: string | undefined;
    comparator: string | undefined;
    sign: string | undefined;
    referenceRanges: Array<ReferenceRange>;
    constructor(partial: Partial<Measure>);
}
