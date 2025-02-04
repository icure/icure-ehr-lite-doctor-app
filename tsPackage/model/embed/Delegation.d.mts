import { HexString } from '../specializations/HexString.mjs';
export declare class Delegation {
    owner: string | undefined;
    delegatedTo: string | undefined;
    key: HexString | undefined;
    tags: Array<string>;
    constructor(partial: Partial<Delegation>);
}
