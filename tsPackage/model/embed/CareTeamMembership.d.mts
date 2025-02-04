import { Base64String } from '../specializations/Base64String.mjs';
import { Encryptable } from './Encryptable.mjs';
import { MembershipType } from './MembershipType.mjs';
export interface CareTeamMembership extends Encryptable {
    startDate: number | undefined;
    endDate: number | undefined;
    careTeamMemberId: string | undefined;
    membershipType: MembershipType | undefined;
    readonly isEncrypted: boolean;
}
export declare class DecryptedCareTeamMembership {
    startDate: number | undefined;
    endDate: number | undefined;
    careTeamMemberId: string | undefined;
    membershipType: MembershipType | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedCareTeamMembership>);
}
export declare class EncryptedCareTeamMembership {
    startDate: number | undefined;
    endDate: number | undefined;
    careTeamMemberId: string | undefined;
    membershipType: MembershipType | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedCareTeamMembership>);
}
