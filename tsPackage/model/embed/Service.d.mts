import { CodeStub } from '../base/CodeStub.mjs';
import { ICureDocument } from '../base/ICureDocument.mjs';
import { Identifier } from '../base/Identifier.mjs';
import { LinkQualification } from '../base/LinkQualification.mjs';
import { Base64String } from '../specializations/Base64String.mjs';
import { Annotation } from './Annotation.mjs';
import { Content, DecryptedContent, EncryptedContent } from './Content.mjs';
import { Delegation } from './Delegation.mjs';
import { Encryptable } from './Encryptable.mjs';
import { SecurityMetadata } from './SecurityMetadata.mjs';
export interface Service extends Encryptable, ICureDocument<string> {
    transactionId: string | undefined;
    identifier: Array<Identifier>;
    contactId: string | undefined;
    subContactIds: Array<string> | undefined;
    plansOfActionIds: Array<string> | undefined;
    healthElementsIds: Array<string> | undefined;
    formIds: Array<string> | undefined;
    secretForeignKeys: Array<string> | undefined;
    cryptedForeignKeys: {
        [key: string]: Array<Delegation>;
    };
    delegations: {
        [key: string]: Array<Delegation>;
    };
    encryptionKeys: {
        [key: string]: Array<Delegation>;
    };
    label: string | undefined;
    index: number | undefined;
    content: {
        [key: string]: Content;
    };
    encryptedContent: string | undefined;
    textIndexes: {
        [key: string]: string;
    };
    valueDate: number | undefined;
    openingDate: number | undefined;
    closingDate: number | undefined;
    formId: string | undefined;
    comment: string | undefined;
    status: number | undefined;
    invoicingCodes: Array<string>;
    notes: Array<Annotation>;
    qualifiedLinks: {
        [key in LinkQualification]?: {
            [key: string]: string;
        };
    };
    securityMetadata: SecurityMetadata | undefined;
    readonly isEncrypted: boolean;
}
export declare class DecryptedService {
    id: string;
    transactionId: string | undefined;
    identifier: Array<Identifier>;
    contactId: string | undefined;
    subContactIds: Array<string> | undefined;
    plansOfActionIds: Array<string> | undefined;
    healthElementsIds: Array<string> | undefined;
    formIds: Array<string> | undefined;
    secretForeignKeys: Array<string> | undefined;
    cryptedForeignKeys: {
        [key: string]: Array<Delegation>;
    };
    delegations: {
        [key: string]: Array<Delegation>;
    };
    encryptionKeys: {
        [key: string]: Array<Delegation>;
    };
    label: string | undefined;
    index: number | undefined;
    content: {
        [key: string]: DecryptedContent;
    };
    encryptedContent: string | undefined;
    textIndexes: {
        [key: string]: string;
    };
    valueDate: number | undefined;
    openingDate: number | undefined;
    closingDate: number | undefined;
    formId: string | undefined;
    created: number | undefined;
    modified: number | undefined;
    endOfLife: number | undefined;
    author: string | undefined;
    responsible: string | undefined;
    medicalLocationId: string | undefined;
    comment: string | undefined;
    status: number | undefined;
    invoicingCodes: Array<string>;
    notes: Array<Annotation>;
    qualifiedLinks: {
        [key in LinkQualification]?: {
            [key: string]: string;
        };
    };
    codes: Array<CodeStub>;
    tags: Array<CodeStub>;
    encryptedSelf: Base64String | undefined;
    securityMetadata: SecurityMetadata | undefined;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedService>);
}
export declare class EncryptedService {
    id: string;
    transactionId: string | undefined;
    identifier: Array<Identifier>;
    contactId: string | undefined;
    subContactIds: Array<string> | undefined;
    plansOfActionIds: Array<string> | undefined;
    healthElementsIds: Array<string> | undefined;
    formIds: Array<string> | undefined;
    secretForeignKeys: Array<string> | undefined;
    cryptedForeignKeys: {
        [key: string]: Array<Delegation>;
    };
    delegations: {
        [key: string]: Array<Delegation>;
    };
    encryptionKeys: {
        [key: string]: Array<Delegation>;
    };
    label: string | undefined;
    index: number | undefined;
    content: {
        [key: string]: EncryptedContent;
    };
    encryptedContent: string | undefined;
    textIndexes: {
        [key: string]: string;
    };
    valueDate: number | undefined;
    openingDate: number | undefined;
    closingDate: number | undefined;
    formId: string | undefined;
    created: number | undefined;
    modified: number | undefined;
    endOfLife: number | undefined;
    author: string | undefined;
    responsible: string | undefined;
    medicalLocationId: string | undefined;
    comment: string | undefined;
    status: number | undefined;
    invoicingCodes: Array<string>;
    notes: Array<Annotation>;
    qualifiedLinks: {
        [key in LinkQualification]?: {
            [key: string]: string;
        };
    };
    codes: Array<CodeStub>;
    tags: Array<CodeStub>;
    encryptedSelf: Base64String | undefined;
    securityMetadata: SecurityMetadata | undefined;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedService>);
}
