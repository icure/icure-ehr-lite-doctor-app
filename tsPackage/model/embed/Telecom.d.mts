import { Base64String } from '../specializations/Base64String.mjs';
import { Encryptable } from './Encryptable.mjs';
import { TelecomType } from './TelecomType.mjs';
export interface Telecom extends Encryptable {
    telecomType: TelecomType | undefined;
    telecomNumber: string | undefined;
    telecomDescription: string | undefined;
    readonly isEncrypted: boolean;
}
export declare class DecryptedTelecom {
    telecomType: TelecomType | undefined;
    telecomNumber: string | undefined;
    telecomDescription: string | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedTelecom>);
}
export declare class EncryptedTelecom {
    telecomType: TelecomType | undefined;
    telecomNumber: string | undefined;
    telecomDescription: string | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedTelecom>);
}
