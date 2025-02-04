import { Base64String } from '../specializations/Base64String.mjs';
import { Encryptable } from './Encryptable.mjs';
import { FlatRateType } from './FlatRateType.mjs';
import { DecryptedValorisation, EncryptedValorisation, Valorisation } from './Valorisation.mjs';
export interface FlatRateTarification extends Encryptable {
    code: string | undefined;
    flatRateType: FlatRateType | undefined;
    label: {
        [key: string]: string;
    } | undefined;
    valorisations: Array<Valorisation>;
    readonly isEncrypted: boolean;
}
export declare class DecryptedFlatRateTarification {
    code: string | undefined;
    flatRateType: FlatRateType | undefined;
    label: {
        [key: string]: string;
    } | undefined;
    valorisations: Array<DecryptedValorisation>;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedFlatRateTarification>);
}
export declare class EncryptedFlatRateTarification {
    code: string | undefined;
    flatRateType: FlatRateType | undefined;
    label: {
        [key: string]: string;
    } | undefined;
    valorisations: Array<EncryptedValorisation>;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedFlatRateTarification>);
}
