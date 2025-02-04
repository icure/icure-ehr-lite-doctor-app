import { CodeStub } from '../base/CodeStub.mjs';
import { ICureDocument } from '../base/ICureDocument.mjs';
import { Base64String } from '../specializations/Base64String.mjs';
import { Encryptable } from './Encryptable.mjs';
import { ServiceLink } from './ServiceLink.mjs';
export interface SubContact extends Encryptable, ICureDocument<string | undefined> {
    descr: string | undefined;
    protocol: string | undefined;
    status: number | undefined;
    formId: string | undefined;
    planOfActionId: string | undefined;
    healthElementId: string | undefined;
    classificationId: string | undefined;
    services: Array<ServiceLink>;
    readonly isEncrypted: boolean;
}
export declare class DecryptedSubContact {
    id: string | undefined;
    created: number | undefined;
    modified: number | undefined;
    author: string | undefined;
    responsible: string | undefined;
    medicalLocationId: string | undefined;
    tags: Array<CodeStub>;
    codes: Array<CodeStub>;
    endOfLife: number | undefined;
    descr: string | undefined;
    protocol: string | undefined;
    status: number | undefined;
    formId: string | undefined;
    planOfActionId: string | undefined;
    healthElementId: string | undefined;
    classificationId: string | undefined;
    services: Array<ServiceLink>;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedSubContact>);
}
export declare class EncryptedSubContact {
    id: string | undefined;
    created: number | undefined;
    modified: number | undefined;
    author: string | undefined;
    responsible: string | undefined;
    medicalLocationId: string | undefined;
    tags: Array<CodeStub>;
    codes: Array<CodeStub>;
    endOfLife: number | undefined;
    descr: string | undefined;
    protocol: string | undefined;
    status: number | undefined;
    formId: string | undefined;
    planOfActionId: string | undefined;
    healthElementId: string | undefined;
    classificationId: string | undefined;
    services: Array<ServiceLink>;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedSubContact>);
}
