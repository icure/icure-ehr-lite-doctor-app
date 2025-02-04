import { Sha256HexString } from '../specializations/Sha256HexString.mjs';
import { SecureDelegation } from './SecureDelegation.mjs';
export declare class SecurityMetadata {
    secureDelegations: {
        [key: string]: SecureDelegation;
    };
    keysEquivalences: {
        [key: string]: Sha256HexString;
    };
    constructor(partial: Partial<SecurityMetadata> & Pick<SecurityMetadata, "secureDelegations">);
}
