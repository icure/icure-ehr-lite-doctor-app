import { CodeStub } from '../base/CodeStub.mjs';
import { HasCodes } from '../base/HasCodes.mjs';
import { HasTags } from '../base/HasTags.mjs';
import { Identifier } from '../base/Identifier.mjs';
import { Base64String } from '../specializations/Base64String.mjs';
import { AddressType } from './AddressType.mjs';
import { Annotation } from './Annotation.mjs';
import { Encryptable } from './Encryptable.mjs';
import { DecryptedTelecom, EncryptedTelecom, Telecom } from './Telecom.mjs';
export interface Address extends Encryptable, HasTags, HasCodes {
    identifier: Array<Identifier>;
    addressType: AddressType | undefined;
    descr: string | undefined;
    street: string | undefined;
    houseNumber: string | undefined;
    postboxNumber: string | undefined;
    postalCode: string | undefined;
    city: string | undefined;
    state: string | undefined;
    country: string | undefined;
    note: string | undefined;
    notes: Array<Annotation>;
    telecoms: Array<Telecom>;
    readonly isEncrypted: boolean;
}
export declare class DecryptedAddress {
    tags: Array<CodeStub>;
    codes: Array<CodeStub>;
    identifier: Array<Identifier>;
    addressType: AddressType | undefined;
    descr: string | undefined;
    street: string | undefined;
    houseNumber: string | undefined;
    postboxNumber: string | undefined;
    postalCode: string | undefined;
    city: string | undefined;
    state: string | undefined;
    country: string | undefined;
    note: string | undefined;
    notes: Array<Annotation>;
    telecoms: Array<DecryptedTelecom>;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedAddress>);
}
export declare class EncryptedAddress {
    tags: Array<CodeStub>;
    codes: Array<CodeStub>;
    identifier: Array<Identifier>;
    addressType: AddressType | undefined;
    descr: string | undefined;
    street: string | undefined;
    houseNumber: string | undefined;
    postboxNumber: string | undefined;
    postalCode: string | undefined;
    city: string | undefined;
    state: string | undefined;
    country: string | undefined;
    note: string | undefined;
    notes: Array<Annotation>;
    telecoms: Array<EncryptedTelecom>;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedAddress>);
}
