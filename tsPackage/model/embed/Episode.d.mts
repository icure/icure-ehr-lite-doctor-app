import { Identifiable } from '../base/Identifiable.mjs';
import { Named } from '../base/Named.mjs';
import { Base64String } from '../specializations/Base64String.mjs';
import { Encryptable } from './Encryptable.mjs';
export interface Episode extends Encryptable, Identifiable<string>, Named {
    comment: string | undefined;
    startDate: number | undefined;
    endDate: number | undefined;
    readonly isEncrypted: boolean;
}
export declare class DecryptedEpisode {
    id: string;
    name: string | undefined;
    comment: string | undefined;
    startDate: number | undefined;
    endDate: number | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedEpisode>);
}
export declare class EncryptedEpisode {
    id: string;
    name: string | undefined;
    comment: string | undefined;
    startDate: number | undefined;
    endDate: number | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedEpisode>);
}
