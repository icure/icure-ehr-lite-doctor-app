import { CodeStub } from '../base/CodeStub.mjs';
import { Identifiable } from '../base/Identifiable.mjs';
import { Base64String } from '../specializations/Base64String.mjs';
import { CareTeamMemberType } from './CareTeamMemberType.mjs';
import { Encryptable } from './Encryptable.mjs';
export interface CareTeamMember extends Encryptable, Identifiable<string> {
    careTeamMemberType: CareTeamMemberType | undefined;
    healthcarePartyId: string | undefined;
    quality: CodeStub | undefined;
    readonly isEncrypted: boolean;
}
export declare class DecryptedCareTeamMember {
    id: string;
    careTeamMemberType: CareTeamMemberType | undefined;
    healthcarePartyId: string | undefined;
    quality: CodeStub | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedCareTeamMember>);
}
export declare class EncryptedCareTeamMember {
    id: string;
    careTeamMemberType: CareTeamMemberType | undefined;
    healthcarePartyId: string | undefined;
    quality: CodeStub | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedCareTeamMember>);
}
