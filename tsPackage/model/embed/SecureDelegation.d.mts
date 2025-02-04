import { Base64String } from '../specializations/Base64String.mjs';
import { SecureDelegationKeyString } from '../specializations/SecureDelegationKeyString.mjs';
import { AccessLevel } from './AccessLevel.mjs';
export declare class SecureDelegation {
    delegator: string | undefined;
    delegate: string | undefined;
    secretIds: Array<Base64String>;
    encryptionKeys: Array<Base64String>;
    owningEntityIds: Array<Base64String>;
    parentDelegations: Array<SecureDelegationKeyString>;
    exchangeDataId: string | undefined;
    permissions: AccessLevel;
    constructor(partial: Partial<SecureDelegation> & Pick<SecureDelegation, "permissions">);
}
