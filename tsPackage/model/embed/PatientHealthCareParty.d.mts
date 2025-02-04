import { Base64String } from '../specializations/Base64String.mjs';
import { Encryptable } from './Encryptable.mjs';
import { PatientHealthCarePartyType } from './PatientHealthCarePartyType.mjs';
import { ReferralPeriod } from './ReferralPeriod.mjs';
import { TelecomType } from './TelecomType.mjs';
export interface PatientHealthCareParty extends Encryptable {
    type: PatientHealthCarePartyType | undefined;
    healthcarePartyId: string | undefined;
    sendFormats: {
        [key in TelecomType]?: string;
    };
    referralPeriods: Array<ReferralPeriod>;
    referral: boolean;
    readonly isEncrypted: boolean;
}
export declare class DecryptedPatientHealthCareParty {
    type: PatientHealthCarePartyType | undefined;
    healthcarePartyId: string | undefined;
    sendFormats: {
        [key in TelecomType]?: string;
    };
    referralPeriods: Array<ReferralPeriod>;
    referral: boolean;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedPatientHealthCareParty>);
}
export declare class EncryptedPatientHealthCareParty {
    type: PatientHealthCarePartyType | undefined;
    healthcarePartyId: string | undefined;
    sendFormats: {
        [key in TelecomType]?: string;
    };
    referralPeriods: Array<ReferralPeriod>;
    referral: boolean;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedPatientHealthCareParty>);
}
