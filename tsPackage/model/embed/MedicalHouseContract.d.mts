import { Base64String } from '../specializations/Base64String.mjs';
import { ContractChangeType } from './ContractChangeType.mjs';
import { Encryptable } from './Encryptable.mjs';
import { MhcSignatureType } from './MhcSignatureType.mjs';
import { SuspensionReason } from './SuspensionReason.mjs';
export interface MedicalHouseContract extends Encryptable {
    contractId: string | undefined;
    validFrom: number | undefined;
    validTo: number | undefined;
    mmNihii: string | undefined;
    hcpId: string | undefined;
    changeType: ContractChangeType | undefined;
    parentContractId: string | undefined;
    changedBy: string | undefined;
    startOfContract: number | undefined;
    startOfCoverage: number | undefined;
    endOfContract: number | undefined;
    endOfCoverage: number | undefined;
    kine: boolean;
    gp: boolean;
    ptd: boolean;
    nurse: boolean;
    noKine: boolean;
    noGp: boolean;
    noNurse: boolean;
    unsubscriptionReasonId: number | undefined;
    ptdStart: number | undefined;
    ptdEnd: number | undefined;
    ptdLastInvoiced: number | undefined;
    startOfSuspension: number | undefined;
    endOfSuspension: number | undefined;
    suspensionReason: SuspensionReason | undefined;
    suspensionSource: string | undefined;
    forcedSuspension: boolean;
    signatureType: MhcSignatureType | undefined;
    status: number | undefined;
    options: {
        [key: string]: string;
    };
    receipts: {
        [key: string]: string;
    };
    readonly isEncrypted: boolean;
}
export declare class DecryptedMedicalHouseContract {
    contractId: string | undefined;
    validFrom: number | undefined;
    validTo: number | undefined;
    mmNihii: string | undefined;
    hcpId: string | undefined;
    changeType: ContractChangeType | undefined;
    parentContractId: string | undefined;
    changedBy: string | undefined;
    startOfContract: number | undefined;
    startOfCoverage: number | undefined;
    endOfContract: number | undefined;
    endOfCoverage: number | undefined;
    kine: boolean;
    gp: boolean;
    ptd: boolean;
    nurse: boolean;
    noKine: boolean;
    noGp: boolean;
    noNurse: boolean;
    unsubscriptionReasonId: number | undefined;
    ptdStart: number | undefined;
    ptdEnd: number | undefined;
    ptdLastInvoiced: number | undefined;
    startOfSuspension: number | undefined;
    endOfSuspension: number | undefined;
    suspensionReason: SuspensionReason | undefined;
    suspensionSource: string | undefined;
    forcedSuspension: boolean;
    signatureType: MhcSignatureType | undefined;
    status: number | undefined;
    options: {
        [key: string]: string;
    };
    receipts: {
        [key: string]: string;
    };
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedMedicalHouseContract>);
}
export declare class EncryptedMedicalHouseContract {
    contractId: string | undefined;
    validFrom: number | undefined;
    validTo: number | undefined;
    mmNihii: string | undefined;
    hcpId: string | undefined;
    changeType: ContractChangeType | undefined;
    parentContractId: string | undefined;
    changedBy: string | undefined;
    startOfContract: number | undefined;
    startOfCoverage: number | undefined;
    endOfContract: number | undefined;
    endOfCoverage: number | undefined;
    kine: boolean;
    gp: boolean;
    ptd: boolean;
    nurse: boolean;
    noKine: boolean;
    noGp: boolean;
    noNurse: boolean;
    unsubscriptionReasonId: number | undefined;
    ptdStart: number | undefined;
    ptdEnd: number | undefined;
    ptdLastInvoiced: number | undefined;
    startOfSuspension: number | undefined;
    endOfSuspension: number | undefined;
    suspensionReason: SuspensionReason | undefined;
    suspensionSource: string | undefined;
    forcedSuspension: boolean;
    signatureType: MhcSignatureType | undefined;
    status: number | undefined;
    options: {
        [key: string]: string;
    };
    receipts: {
        [key: string]: string;
    };
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedMedicalHouseContract>);
}
