import { Base64String } from '../specializations/Base64String.mjs';
import { Encryptable } from './Encryptable.mjs';
export interface Insurability extends Encryptable {
    parameters: {
        [key: string]: string;
    };
    hospitalisation: boolean | undefined;
    ambulatory: boolean | undefined;
    dental: boolean | undefined;
    identificationNumber: string | undefined;
    insuranceId: string | undefined;
    startDate: number | undefined;
    endDate: number | undefined;
    titularyId: string | undefined;
    readonly isEncrypted: boolean;
}
export declare class DecryptedInsurability {
    parameters: {
        [key: string]: string;
    };
    hospitalisation: boolean | undefined;
    ambulatory: boolean | undefined;
    dental: boolean | undefined;
    identificationNumber: string | undefined;
    insuranceId: string | undefined;
    startDate: number | undefined;
    endDate: number | undefined;
    titularyId: string | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedInsurability>);
}
export declare class EncryptedInsurability {
    parameters: {
        [key: string]: string;
    };
    hospitalisation: boolean | undefined;
    ambulatory: boolean | undefined;
    dental: boolean | undefined;
    identificationNumber: string | undefined;
    insuranceId: string | undefined;
    startDate: number | undefined;
    endDate: number | undefined;
    titularyId: string | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedInsurability>);
}
