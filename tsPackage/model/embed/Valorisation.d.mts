import { Base64String } from '../specializations/Base64String.mjs';
import { Encryptable } from './Encryptable.mjs';
export interface Valorisation extends Encryptable {
    startOfValidity: number | undefined;
    endOfValidity: number | undefined;
    predicate: string | undefined;
    reference: Array<number> | undefined;
    totalAmount: number | undefined;
    reimbursement: number | undefined;
    patientIntervention: number | undefined;
    doctorSupplement: number | undefined;
    vat: number | undefined;
    label: {
        [key: string]: string;
    } | undefined;
    readonly isEncrypted: boolean;
}
export declare class DecryptedValorisation {
    startOfValidity: number | undefined;
    endOfValidity: number | undefined;
    predicate: string | undefined;
    reference: Array<number> | undefined;
    totalAmount: number | undefined;
    reimbursement: number | undefined;
    patientIntervention: number | undefined;
    doctorSupplement: number | undefined;
    vat: number | undefined;
    label: {
        [key: string]: string;
    } | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedValorisation>);
}
export declare class EncryptedValorisation {
    startOfValidity: number | undefined;
    endOfValidity: number | undefined;
    predicate: string | undefined;
    reference: Array<number> | undefined;
    totalAmount: number | undefined;
    reimbursement: number | undefined;
    patientIntervention: number | undefined;
    doctorSupplement: number | undefined;
    vat: number | undefined;
    label: {
        [key: string]: string;
    } | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedValorisation>);
}
