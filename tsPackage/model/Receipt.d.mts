import { CodeStub } from './base/CodeStub.mjs';
import { HasEncryptionMetadata } from './base/HasEncryptionMetadata.mjs';
import { ICureDocument } from './base/ICureDocument.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { Delegation } from './embed/Delegation.mjs';
import { Encryptable } from './embed/Encryptable.mjs';
import { ReceiptBlobType } from './embed/ReceiptBlobType.mjs';
import { SecurityMetadata } from './embed/SecurityMetadata.mjs';
import { Base64String } from './specializations/Base64String.mjs';
export interface Receipt extends StoredDocument, ICureDocument<string>, HasEncryptionMetadata, Encryptable {
    attachmentIds: {
        [key in ReceiptBlobType]?: string;
    };
    references: Array<string>;
    documentId: string | undefined;
    category: string | undefined;
    subCategory: string | undefined;
    readonly isEncrypted: boolean;
}
export declare class DecryptedReceipt {
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
    attachmentIds: {
        [key in ReceiptBlobType]?: string;
    };
    references: Array<string>;
    documentId: string | undefined;
    category: string | undefined;
    subCategory: string | undefined;
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
    constructor(partial: Partial<DecryptedReceipt>);
}
export declare class EncryptedReceipt {
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
    attachmentIds: {
        [key in ReceiptBlobType]?: string;
    };
    references: Array<string>;
    documentId: string | undefined;
    category: string | undefined;
    subCategory: string | undefined;
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
    constructor(partial: Partial<EncryptedReceipt>);
}
