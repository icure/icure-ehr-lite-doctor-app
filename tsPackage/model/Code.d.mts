import { AppendixType } from './base/AppendixType.mjs';
import { CodeFlag } from './base/CodeFlag.mjs';
import { CodeIdentification } from './base/CodeIdentification.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { Periodicity } from './embed/Periodicity.mjs';
export declare class Code implements StoredDocument, CodeIdentification<string> {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    context: string | undefined;
    type: string | undefined;
    code: string | undefined;
    version: string | undefined;
    label: {
        [key: string]: string;
    } | undefined;
    author: string | undefined;
    regions: Array<string>;
    periodicity: Array<Periodicity>;
    level: number | undefined;
    links: Array<string>;
    qualifiedLinks: {
        [key: string]: Array<string>;
    };
    flags: Array<CodeFlag>;
    searchTerms: {
        [key: string]: Array<string>;
    };
    data: string | undefined;
    appendices: {
        [key in AppendixType]?: string;
    };
    disabled: boolean;
    constructor(partial: Partial<Code>);
}
