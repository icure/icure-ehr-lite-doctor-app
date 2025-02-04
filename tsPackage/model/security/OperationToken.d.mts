import { Operation } from './Operation.mjs';
export declare class OperationToken {
    tokenHash: string;
    creationTime: number;
    validity: number;
    operation: Operation;
    description: string | undefined;
    constructor(partial: Partial<OperationToken> & Pick<OperationToken, "tokenHash" | "creationTime" | "validity" | "operation">);
}
