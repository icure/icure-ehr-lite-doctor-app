import { CodeStub } from './CodeStub.mjs';
export declare class Identifier {
    id: string | undefined;
    assigner: string | undefined;
    start: string | undefined;
    end: string | undefined;
    system: string | undefined;
    type: CodeStub | undefined;
    use: string | undefined;
    value: string | undefined;
    constructor(partial: Partial<Identifier>);
}
