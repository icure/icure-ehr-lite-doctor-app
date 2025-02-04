import { CodeStub } from '../base/CodeStub.mjs';
export declare class Medicinalproduct {
    intendedcds: Array<CodeStub>;
    deliveredcds: Array<CodeStub>;
    intendedname: string | undefined;
    deliveredname: string | undefined;
    productId: string | undefined;
    constructor(partial: Partial<Medicinalproduct>);
}
