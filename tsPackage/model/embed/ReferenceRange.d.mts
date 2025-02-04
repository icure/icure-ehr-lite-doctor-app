import { CodeStub } from '../base/CodeStub.mjs';
import { Annotation } from './Annotation.mjs';
import { Range } from './Range.mjs';
export declare class ReferenceRange {
    low: number | undefined;
    high: number | undefined;
    stringValue: string | undefined;
    tags: Array<CodeStub>;
    codes: Array<CodeStub>;
    notes: Array<Annotation>;
    age: Range | undefined;
    constructor(partial: Partial<ReferenceRange>);
}
