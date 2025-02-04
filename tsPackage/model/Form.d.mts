import { CodeStub } from './base/CodeStub.mjs';
import { HasEncryptionMetadata } from './base/HasEncryptionMetadata.mjs';
import { ICureDocument } from './base/ICureDocument.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { Delegation } from './embed/Delegation.mjs';
import { Encryptable } from './embed/Encryptable.mjs';
import { SecurityMetadata } from './embed/SecurityMetadata.mjs';
import { Base64String } from './specializations/Base64String.mjs';
export interface Form extends StoredDocument, ICureDocument<string>, HasEncryptionMetadata, Encryptable {
    openingDate: number | undefined;
    status: string | undefined;
    version: number | undefined;
    logicalUuid: string | undefined;
    descr: string | undefined;
    uniqueId: string | undefined;
    formTemplateId: string | undefined;
    contactId: string | undefined;
    healthElementId: string | undefined;
    planOfActionId: string | undefined;
    parent: string | undefined;
    readonly isEncrypted: boolean;
}
export declare class DecryptedForm {
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
    openingDate: number | undefined;
    status: string | undefined;
    version: number | undefined;
    logicalUuid: string | undefined;
    descr: string | undefined;
    uniqueId: string | undefined;
    formTemplateId: string | undefined;
    contactId: string | undefined;
    healthElementId: string | undefined;
    planOfActionId: string | undefined;
    parent: string | undefined;
    secretForeignKeys: Array<string>;
    cryptedForeignKeys: {
        [key: string]: Array<Delegation>;
    };
    delegations: {
        [key: string]: Array<Delegation>;
    };
    encryptionKeys: {
        [key: string]: Array<Delegation>;
    };
    encryptedSelf: Base64String | undefined;
    securityMetadata: SecurityMetadata | undefined;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedForm>);
}
export declare class EncryptedForm {
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
    openingDate: number | undefined;
    status: string | undefined;
    version: number | undefined;
    logicalUuid: string | undefined;
    descr: string | undefined;
    uniqueId: string | undefined;
    formTemplateId: string | undefined;
    contactId: string | undefined;
    healthElementId: string | undefined;
    planOfActionId: string | undefined;
    parent: string | undefined;
    secretForeignKeys: Array<string>;
    cryptedForeignKeys: {
        [key: string]: Array<Delegation>;
    };
    delegations: {
        [key: string]: Array<Delegation>;
    };
    encryptionKeys: {
        [key: string]: Array<Delegation>;
    };
    encryptedSelf: Base64String | undefined;
    securityMetadata: SecurityMetadata | undefined;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedForm>);
}
