import { PropertyTypeStub } from './PropertyTypeStub.mjs';
import { Encryptable } from './embed/Encryptable.mjs';
import { DecryptedTypedValue, EncryptedTypedValue, TypedValue } from './embed/TypedValue.mjs';
import { Base64String } from './specializations/Base64String.mjs';
export interface PropertyStub extends Encryptable {
    id: string | undefined;
    type: PropertyTypeStub | undefined;
    typedValue: TypedValue | undefined;
    deletionDate: number | undefined;
    readonly isEncrypted: boolean;
}
export declare class DecryptedPropertyStub {
    id: string | undefined;
    type: PropertyTypeStub | undefined;
    typedValue: DecryptedTypedValue | undefined;
    deletionDate: number | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedPropertyStub>);
}
export declare class EncryptedPropertyStub {
    id: string | undefined;
    type: PropertyTypeStub | undefined;
    typedValue: EncryptedTypedValue | undefined;
    deletionDate: number | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedPropertyStub>);
}
