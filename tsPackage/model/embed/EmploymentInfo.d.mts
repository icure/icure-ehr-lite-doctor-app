import { CodeStub } from '../base/CodeStub.mjs';
import { Base64String } from '../specializations/Base64String.mjs';
import { Employer } from './Employer.mjs';
import { Encryptable } from './Encryptable.mjs';
export interface EmploymentInfo extends Encryptable {
    startDate: number | undefined;
    endDate: number | undefined;
    professionType: CodeStub | undefined;
    employer: Employer | undefined;
    readonly isEncrypted: boolean;
}
export declare class DecryptedEmploymentInfo {
    startDate: number | undefined;
    endDate: number | undefined;
    professionType: CodeStub | undefined;
    employer: Employer | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedEmploymentInfo> & Pick<DecryptedEmploymentInfo, "encryptedSelf">);
}
export declare class EncryptedEmploymentInfo {
    startDate: number | undefined;
    endDate: number | undefined;
    professionType: CodeStub | undefined;
    employer: Employer | undefined;
    encryptedSelf: Base64String | undefined;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedEmploymentInfo> & Pick<EncryptedEmploymentInfo, "encryptedSelf">);
}
