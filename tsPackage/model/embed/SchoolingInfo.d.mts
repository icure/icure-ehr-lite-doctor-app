import { CodeStub } from '../base/CodeStub.mjs';
import { Base64String } from '../specializations/Base64String.mjs';
import { Encryptable } from './Encryptable.mjs';
export interface SchoolingInfo extends Encryptable {
    startDate: number | undefined;
    endDate: number | undefined;
    school: string | undefined;
    typeOfEducation: CodeStub | undefined;
    readonly isEncrypted: boolean;
}
export declare class DecryptedSchoolingInfo {
    startDate: number | undefined;
    endDate: number | undefined;
    school: string | undefined;
    typeOfEducation: CodeStub | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedSchoolingInfo> & Pick<DecryptedSchoolingInfo, "encryptedSelf">);
}
export declare class EncryptedSchoolingInfo {
    startDate: number | undefined;
    endDate: number | undefined;
    school: string | undefined;
    typeOfEducation: CodeStub | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedSchoolingInfo> & Pick<EncryptedSchoolingInfo, "encryptedSelf">);
}
