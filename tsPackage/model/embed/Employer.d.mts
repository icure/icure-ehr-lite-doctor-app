import { Named } from '../base/Named.mjs';
import { DecryptedAddress } from './Address.mjs';
export declare class Employer implements Named {
    name: string | undefined;
    addresse: DecryptedAddress | undefined;
    constructor(partial: Partial<Employer>);
}
