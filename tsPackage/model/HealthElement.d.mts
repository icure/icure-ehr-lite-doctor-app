import { CodeStub } from './base/CodeStub.mjs';
import { HasEncryptionMetadata } from './base/HasEncryptionMetadata.mjs';
import { ICureDocument } from './base/ICureDocument.mjs';
import { Identifier } from './base/Identifier.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { Annotation } from './embed/Annotation.mjs';
import { CareTeamMember, DecryptedCareTeamMember, EncryptedCareTeamMember } from './embed/CareTeamMember.mjs';
import { Delegation } from './embed/Delegation.mjs';
import { Encryptable } from './embed/Encryptable.mjs';
import { DecryptedEpisode, EncryptedEpisode, Episode } from './embed/Episode.mjs';
import { Laterality } from './embed/Laterality.mjs';
import { DecryptedPlanOfAction, EncryptedPlanOfAction, PlanOfAction } from './embed/PlanOfAction.mjs';
import { SecurityMetadata } from './embed/SecurityMetadata.mjs';
import { Base64String } from './specializations/Base64String.mjs';
export interface HealthElement extends StoredDocument, ICureDocument<string>, HasEncryptionMetadata, Encryptable {
    identifiers: Array<Identifier>;
    healthElementId: string | undefined;
    valueDate: number | undefined;
    openingDate: number | undefined;
    closingDate: number | undefined;
    descr: string | undefined;
    note: string | undefined;
    notes: Array<Annotation>;
    relevant: boolean;
    idOpeningContact: string | undefined;
    idClosingContact: string | undefined;
    idService: string | undefined;
    status: number;
    laterality: Laterality | undefined;
    plansOfAction: Array<PlanOfAction>;
    episodes: Array<Episode>;
    careTeam: Array<CareTeamMember>;
    readonly isEncrypted: boolean;
}
export declare class DecryptedHealthElement {
    id: string;
    identifiers: Array<Identifier>;
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
    healthElementId: string | undefined;
    valueDate: number | undefined;
    openingDate: number | undefined;
    closingDate: number | undefined;
    descr: string | undefined;
    note: string | undefined;
    notes: Array<Annotation>;
    relevant: boolean;
    idOpeningContact: string | undefined;
    idClosingContact: string | undefined;
    idService: string | undefined;
    status: number;
    laterality: Laterality | undefined;
    plansOfAction: Array<DecryptedPlanOfAction>;
    episodes: Array<DecryptedEpisode>;
    careTeam: Array<DecryptedCareTeamMember>;
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
    constructor(partial: Partial<DecryptedHealthElement>);
}
export declare class EncryptedHealthElement {
    id: string;
    identifiers: Array<Identifier>;
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
    healthElementId: string | undefined;
    valueDate: number | undefined;
    openingDate: number | undefined;
    closingDate: number | undefined;
    descr: string | undefined;
    note: string | undefined;
    notes: Array<Annotation>;
    relevant: boolean;
    idOpeningContact: string | undefined;
    idClosingContact: string | undefined;
    idService: string | undefined;
    status: number;
    laterality: Laterality | undefined;
    plansOfAction: Array<EncryptedPlanOfAction>;
    episodes: Array<EncryptedEpisode>;
    careTeam: Array<EncryptedCareTeamMember>;
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
    constructor(partial: Partial<EncryptedHealthElement>);
}
