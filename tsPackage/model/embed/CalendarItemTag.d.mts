import { Base64String } from '../specializations/Base64String.mjs';
import { Encryptable } from './Encryptable.mjs';
export interface CalendarItemTag extends Encryptable {
    code: string | undefined;
    date: number | undefined;
    userId: string | undefined;
    userName: string | undefined;
    readonly isEncrypted: boolean;
}
export declare class DecryptedCalendarItemTag {
    code: string | undefined;
    date: number | undefined;
    userId: string | undefined;
    userName: string | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedCalendarItemTag> & Pick<DecryptedCalendarItemTag, "encryptedSelf">);
}
export declare class EncryptedCalendarItemTag {
    code: string | undefined;
    date: number | undefined;
    userId: string | undefined;
    userName: string | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedCalendarItemTag> & Pick<EncryptedCalendarItemTag, "encryptedSelf">);
}
