import { Base64String } from '../specializations/Base64String.mjs';
import { Encryptable } from './Encryptable.mjs';
export interface FinancialInstitutionInformation extends Encryptable {
    name: string | undefined;
    key: string | undefined;
    bankAccount: string | undefined;
    bic: string | undefined;
    proxyBankAccount: string | undefined;
    proxyBic: string | undefined;
    preferredFiiForPartners: Array<string>;
    readonly isEncrypted: boolean;
}
export declare class DecryptedFinancialInstitutionInformation {
    name: string | undefined;
    key: string | undefined;
    bankAccount: string | undefined;
    bic: string | undefined;
    proxyBankAccount: string | undefined;
    proxyBic: string | undefined;
    preferredFiiForPartners: Array<string>;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedFinancialInstitutionInformation>);
}
export declare class EncryptedFinancialInstitutionInformation {
    name: string | undefined;
    key: string | undefined;
    bankAccount: string | undefined;
    bic: string | undefined;
    proxyBankAccount: string | undefined;
    proxyBic: string | undefined;
    preferredFiiForPartners: Array<string>;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedFinancialInstitutionInformation>);
}
