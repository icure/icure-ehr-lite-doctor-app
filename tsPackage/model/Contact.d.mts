import { CodeStub } from './base/CodeStub.mjs';
import { HasEncryptionMetadata } from './base/HasEncryptionMetadata.mjs';
import { ICureDocument } from './base/ICureDocument.mjs';
import { Identifier } from './base/Identifier.mjs';
import { ParticipantType } from './base/ParticipantType.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { Address, DecryptedAddress, EncryptedAddress } from './embed/Address.mjs';
import { Annotation } from './embed/Annotation.mjs';
import { Delegation } from './embed/Delegation.mjs';
import { Encryptable } from './embed/Encryptable.mjs';
import { SecurityMetadata } from './embed/SecurityMetadata.mjs';
import { DecryptedService, EncryptedService, Service } from './embed/Service.mjs';
import { DecryptedSubContact, EncryptedSubContact, SubContact } from './embed/SubContact.mjs';
import { Base64String } from './specializations/Base64String.mjs';
export interface Contact extends StoredDocument, ICureDocument<string>, HasEncryptionMetadata, Encryptable {
    identifier: Array<Identifier>;
    groupId: string | undefined;
    openingDate: number | undefined;
    closingDate: number | undefined;
    descr: string | undefined;
    location: string | undefined;
    externalId: string | undefined;
    encounterType: CodeStub | undefined;
    encounterLocation: Address | undefined;
    subContacts: Array<SubContact>;
    services: Array<Service>;
    participants: {
        [key in ParticipantType]?: string;
    };
    healthcarePartyId: string | undefined;
    modifiedContactId: string | undefined;
    notes: Array<Annotation>;
    readonly isEncrypted: boolean;
}
export declare class DecryptedContact {
    id: string;
    rev: string | undefined;
    created: number | undefined;
    modified: number | undefined;
    author: string | undefined;
    responsible: string | undefined;
    medicalLocationId: string | undefined;
    tags: Array<CodeStub>;
    codes: Array<CodeStub>;
    identifier: Array<Identifier>;
    endOfLife: number | undefined;
    deletionDate: number | undefined;
    groupId: string | undefined;
    openingDate: number | undefined;
    closingDate: number | undefined;
    descr: string | undefined;
    location: string | undefined;
    externalId: string | undefined;
    encounterType: CodeStub | undefined;
    encounterLocation: DecryptedAddress | undefined;
    subContacts: Array<DecryptedSubContact>;
    services: Array<DecryptedService>;
    participants: {
        [key in ParticipantType]?: string;
    };
    healthcarePartyId: string | undefined;
    modifiedContactId: string | undefined;
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
    notes: Array<Annotation>;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedContact>);
}
export declare class EncryptedContact {
    id: string;
    rev: string | undefined;
    created: number | undefined;
    modified: number | undefined;
    author: string | undefined;
    responsible: string | undefined;
    medicalLocationId: string | undefined;
    tags: Array<CodeStub>;
    codes: Array<CodeStub>;
    identifier: Array<Identifier>;
    endOfLife: number | undefined;
    deletionDate: number | undefined;
    groupId: string | undefined;
    openingDate: number | undefined;
    closingDate: number | undefined;
    descr: string | undefined;
    location: string | undefined;
    externalId: string | undefined;
    encounterType: CodeStub | undefined;
    encounterLocation: EncryptedAddress | undefined;
    subContacts: Array<EncryptedSubContact>;
    services: Array<EncryptedService>;
    participants: {
        [key in ParticipantType]?: string;
    };
    healthcarePartyId: string | undefined;
    modifiedContactId: string | undefined;
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
    notes: Array<Annotation>;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedContact>);
}
