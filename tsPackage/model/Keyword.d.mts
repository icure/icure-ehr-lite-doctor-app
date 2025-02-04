import { CodeStub } from './base/CodeStub.mjs';
import { ICureDocument } from './base/ICureDocument.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { KeywordSubword } from './embed/KeywordSubword.mjs';
export declare class Keyword implements StoredDocument, ICureDocument<string> {
    id: string;
    rev: string | undefined;
    created: number | undefined;
    modified: number | undefined;
    author: string | undefined;
    responsible: string | undefined;
    medicalLocationId: string | undefined;
    tags: Array<CodeStub>;
    codes: Array<CodeStub>;
    endOfLife: number | undefined;
    deletionDate: number | undefined;
    value: string | undefined;
    subWords: Array<KeywordSubword>;
    userId: string | undefined;
    constructor(partial: Partial<Keyword>);
}
