import { CodeStub } from './base/CodeStub.mjs';
import { HasEncryptionMetadata } from './base/HasEncryptionMetadata.mjs';
import { ICureDocument } from './base/ICureDocument.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { Delegation } from './embed/Delegation.mjs';
import { Encryptable } from './embed/Encryptable.mjs';
import { MessageAttachment } from './embed/MessageAttachment.mjs';
import { MessageReadStatus } from './embed/MessageReadStatus.mjs';
import { SecurityMetadata } from './embed/SecurityMetadata.mjs';
import { Base64String } from './specializations/Base64String.mjs';
export interface Message extends StoredDocument, ICureDocument<string>, HasEncryptionMetadata, Encryptable {
    fromAddress: string | undefined;
    fromHealthcarePartyId: string | undefined;
    formId: string | undefined;
    status: number | undefined;
    recipientsType: string | undefined;
    recipients: Array<string>;
    toAddresses: Array<string>;
    received: number | undefined;
    sent: number | undefined;
    metas: {
        [key: string]: string;
    };
    readStatus: {
        [key: string]: MessageReadStatus;
    };
    messageAttachments: Array<MessageAttachment>;
    transportGuid: string | undefined;
    remark: string | undefined;
    conversationGuid: string | undefined;
    subject: string | undefined;
    invoiceIds: Array<string>;
    parentId: string | undefined;
    externalRef: string | undefined;
    unassignedResults: Array<string>;
    assignedResults: {
        [key: string]: string;
    };
    senderReferences: {
        [key: string]: string;
    };
    readonly isEncrypted: boolean;
}
export declare class DecryptedMessage {
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
    fromAddress: string | undefined;
    fromHealthcarePartyId: string | undefined;
    formId: string | undefined;
    status: number | undefined;
    recipientsType: string | undefined;
    recipients: Array<string>;
    toAddresses: Array<string>;
    received: number | undefined;
    sent: number | undefined;
    metas: {
        [key: string]: string;
    };
    readStatus: {
        [key: string]: MessageReadStatus;
    };
    messageAttachments: Array<MessageAttachment>;
    transportGuid: string | undefined;
    remark: string | undefined;
    conversationGuid: string | undefined;
    subject: string | undefined;
    invoiceIds: Array<string>;
    parentId: string | undefined;
    externalRef: string | undefined;
    unassignedResults: Array<string>;
    assignedResults: {
        [key: string]: string;
    };
    senderReferences: {
        [key: string]: string;
    };
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
    constructor(partial: Partial<DecryptedMessage>);
}
export declare class EncryptedMessage {
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
    fromAddress: string | undefined;
    fromHealthcarePartyId: string | undefined;
    formId: string | undefined;
    status: number | undefined;
    recipientsType: string | undefined;
    recipients: Array<string>;
    toAddresses: Array<string>;
    received: number | undefined;
    sent: number | undefined;
    metas: {
        [key: string]: string;
    };
    readStatus: {
        [key: string]: MessageReadStatus;
    };
    messageAttachments: Array<MessageAttachment>;
    transportGuid: string | undefined;
    remark: string | undefined;
    conversationGuid: string | undefined;
    subject: string | undefined;
    invoiceIds: Array<string>;
    parentId: string | undefined;
    externalRef: string | undefined;
    unassignedResults: Array<string>;
    assignedResults: {
        [key: string]: string;
    };
    senderReferences: {
        [key: string]: string;
    };
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
    constructor(partial: Partial<EncryptedMessage>);
}
