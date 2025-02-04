import { DecryptedPropertyStub, EncryptedPropertyStub, PropertyStub } from './PropertyStub.mjs';
import { CodeStub } from './base/CodeStub.mjs';
import { HasEncryptionMetadata } from './base/HasEncryptionMetadata.mjs';
import { ICureDocument } from './base/ICureDocument.mjs';
import { Identifier } from './base/Identifier.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { Delegation } from './embed/Delegation.mjs';
import { Encryptable } from './embed/Encryptable.mjs';
import { SecurityMetadata } from './embed/SecurityMetadata.mjs';
import { TaskStatus } from './embed/TaskStatus.mjs';
import { Base64String } from './specializations/Base64String.mjs';
export interface MaintenanceTask extends StoredDocument, ICureDocument<string>, HasEncryptionMetadata, Encryptable {
    identifier: Array<Identifier>;
    taskType: string | undefined;
    properties: Array<PropertyStub>;
    status: TaskStatus;
    readonly isEncrypted: boolean;
}
export declare class DecryptedMaintenanceTask {
    id: string;
    rev: string | undefined;
    identifier: Array<Identifier>;
    created: number | undefined;
    modified: number | undefined;
    author: string | undefined;
    responsible: string | undefined;
    medicalLocationId: string | undefined;
    tags: Array<CodeStub>;
    codes: Array<CodeStub>;
    endOfLife: number | undefined;
    deletionDate: number | undefined;
    taskType: string | undefined;
    properties: Array<DecryptedPropertyStub>;
    status: TaskStatus;
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
    constructor(partial: Partial<DecryptedMaintenanceTask>);
}
export declare class EncryptedMaintenanceTask {
    id: string;
    rev: string | undefined;
    identifier: Array<Identifier>;
    created: number | undefined;
    modified: number | undefined;
    author: string | undefined;
    responsible: string | undefined;
    medicalLocationId: string | undefined;
    tags: Array<CodeStub>;
    codes: Array<CodeStub>;
    endOfLife: number | undefined;
    deletionDate: number | undefined;
    taskType: string | undefined;
    properties: Array<EncryptedPropertyStub>;
    status: TaskStatus;
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
    constructor(partial: Partial<EncryptedMaintenanceTask>);
}
