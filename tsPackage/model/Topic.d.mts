import { TopicRole } from './TopicRole.mjs';
import { CodeStub } from './base/CodeStub.mjs';
import { HasEncryptionMetadata } from './base/HasEncryptionMetadata.mjs';
import { ICureDocument } from './base/ICureDocument.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { Delegation } from './embed/Delegation.mjs';
import { Encryptable } from './embed/Encryptable.mjs';
import { SecurityMetadata } from './embed/SecurityMetadata.mjs';
import { Base64String } from './specializations/Base64String.mjs';
export interface Topic extends StoredDocument, ICureDocument<string>, HasEncryptionMetadata, Encryptable {
    healthElementId: string | undefined;
    contactId: string | undefined;
    description: string | undefined;
    activeParticipants: {
        [key: string]: TopicRole;
    };
    linkedHealthElements: Array<string>;
    linkedServices: Array<string>;
    readonly isEncrypted: boolean;
}
export declare class DecryptedTopic {
    id: string;
    rev: string | undefined;
    created: number | undefined;
    modified: number | undefined;
    healthElementId: string | undefined;
    contactId: string | undefined;
    description: string | undefined;
    codes: Array<CodeStub>;
    tags: Array<CodeStub>;
    author: string | undefined;
    responsible: string | undefined;
    medicalLocationId: string | undefined;
    endOfLife: number | undefined;
    deletionDate: number | undefined;
    activeParticipants: {
        [key: string]: TopicRole;
    };
    securityMetadata: SecurityMetadata | undefined;
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
    linkedHealthElements: Array<string>;
    linkedServices: Array<string>;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedTopic>);
}
export declare class EncryptedTopic {
    id: string;
    rev: string | undefined;
    created: number | undefined;
    modified: number | undefined;
    healthElementId: string | undefined;
    contactId: string | undefined;
    description: string | undefined;
    codes: Array<CodeStub>;
    tags: Array<CodeStub>;
    author: string | undefined;
    responsible: string | undefined;
    medicalLocationId: string | undefined;
    endOfLife: number | undefined;
    deletionDate: number | undefined;
    activeParticipants: {
        [key: string]: TopicRole;
    };
    securityMetadata: SecurityMetadata | undefined;
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
    linkedHealthElements: Array<string>;
    linkedServices: Array<string>;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedTopic>);
}
