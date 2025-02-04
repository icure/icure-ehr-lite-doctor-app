import { AppendixType } from './base/AppendixType.mjs';
import { CodeFlag } from './base/CodeFlag.mjs';
import { CodeIdentification } from './base/CodeIdentification.mjs';
import { LinkQualification } from './base/LinkQualification.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { LetterValue } from './embed/LetterValue.mjs';
import { Periodicity } from './embed/Periodicity.mjs';
import { DecryptedValorisation } from './embed/Valorisation.mjs';
export declare class Tarification implements StoredDocument, CodeIdentification<string> {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    label: {
        [key: string]: string;
    } | undefined;
    context: string | undefined;
    type: string | undefined;
    code: string | undefined;
    version: string | undefined;
    author: string | undefined;
    regions: Array<string>;
    periodicity: Array<Periodicity>;
    level: number | undefined;
    links: Array<string>;
    qualifiedLinks: {
        [key in LinkQualification]?: Array<string>;
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
    valorisations: Array<DecryptedValorisation>;
    category: {
        [key: string]: string;
    };
    consultationCode: boolean | undefined;
    hasRelatedCode: boolean | undefined;
    needsPrescriber: boolean | undefined;
    relatedCodes: Array<string>;
    ngroup: string | undefined;
    letterValues: Array<LetterValue>;
    constructor(partial: Partial<Tarification>);
}
