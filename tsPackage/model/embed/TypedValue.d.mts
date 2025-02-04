import { Base64String } from '../specializations/Base64String.mjs';
import { Encryptable } from './Encryptable.mjs';
import { TypedValuesType } from './TypedValuesType.mjs';
export interface TypedValue extends Encryptable {
    type: TypedValuesType | undefined;
    booleanValue: boolean | undefined;
    integerValue: number | undefined;
    doubleValue: number | undefined;
    stringValue: string | undefined;
    dateValue: number | undefined;
    readonly isEncrypted: boolean;
}
export declare class DecryptedTypedValue {
    type: TypedValuesType | undefined;
    booleanValue: boolean | undefined;
    integerValue: number | undefined;
    doubleValue: number | undefined;
    stringValue: string | undefined;
    dateValue: number | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedTypedValue>);
}
export declare class EncryptedTypedValue {
    type: TypedValuesType | undefined;
    booleanValue: boolean | undefined;
    integerValue: number | undefined;
    doubleValue: number | undefined;
    stringValue: string | undefined;
    dateValue: number | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedTypedValue>);
}
