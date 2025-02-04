import { CodeStub } from './base/CodeStub.mjs';
import { HasEncryptionMetadata } from './base/HasEncryptionMetadata.mjs';
import { ICureDocument } from './base/ICureDocument.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { DataAttachment } from './embed/DataAttachment.mjs';
import { Delegation } from './embed/Delegation.mjs';
import { DeletedAttachment } from './embed/DeletedAttachment.mjs';
import { DocumentLocation } from './embed/DocumentLocation.mjs';
import { DocumentStatus } from './embed/DocumentStatus.mjs';
import { DocumentType } from './embed/DocumentType.mjs';
import { Encryptable } from './embed/Encryptable.mjs';
import { SecurityMetadata } from './embed/SecurityMetadata.mjs';
import { Base64String } from './specializations/Base64String.mjs';
export interface Document extends StoredDocument, ICureDocument<string>, HasEncryptionMetadata, Encryptable {
    documentLocation: DocumentLocation | undefined;
    documentType: DocumentType | undefined;
    documentStatus: DocumentStatus | undefined;
    externalUri: string | undefined;
    name: string | undefined;
    version: string | undefined;
    storedICureDocumentId: string | undefined;
    externalUuid: string | undefined;
    size: number | undefined;
    hash: string | undefined;
    openingContactId: string | undefined;
    attachmentId: string | undefined;
    objectStoreReference: string | undefined;
    mainUti: string | undefined;
    otherUtis: Array<string>;
    secondaryAttachments: {
        [key: string]: DataAttachment;
    };
    deletedAttachments: Array<DeletedAttachment>;
    encryptedAttachment: Int8Array | undefined;
    decryptedAttachment: Int8Array | undefined;
    readonly isEncrypted: boolean;
}
export declare class DecryptedDocument {
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
    documentLocation: DocumentLocation | undefined;
    documentType: DocumentType | undefined;
    documentStatus: DocumentStatus | undefined;
    externalUri: string | undefined;
    name: string | undefined;
    version: string | undefined;
    storedICureDocumentId: string | undefined;
    externalUuid: string | undefined;
    size: number | undefined;
    hash: string | undefined;
    openingContactId: string | undefined;
    attachmentId: string | undefined;
    objectStoreReference: string | undefined;
    mainUti: string | undefined;
    otherUtis: Array<string>;
    secondaryAttachments: {
        [key: string]: DataAttachment;
    };
    deletedAttachments: Array<DeletedAttachment>;
    encryptedAttachment: Int8Array | undefined;
    decryptedAttachment: Int8Array | undefined;
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
    constructor(partial: Partial<DecryptedDocument>);
}
export declare class EncryptedDocument {
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
    documentLocation: DocumentLocation | undefined;
    documentType: DocumentType | undefined;
    documentStatus: DocumentStatus | undefined;
    externalUri: string | undefined;
    name: string | undefined;
    version: string | undefined;
    storedICureDocumentId: string | undefined;
    externalUuid: string | undefined;
    size: number | undefined;
    hash: string | undefined;
    openingContactId: string | undefined;
    attachmentId: string | undefined;
    objectStoreReference: string | undefined;
    mainUti: string | undefined;
    otherUtis: Array<string>;
    secondaryAttachments: {
        [key: string]: DataAttachment;
    };
    deletedAttachments: Array<DeletedAttachment>;
    encryptedAttachment: Int8Array | undefined;
    decryptedAttachment: Int8Array | undefined;
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
    constructor(partial: Partial<EncryptedDocument>);
}
