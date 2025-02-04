export class OperationToken {
    constructor(partial) {
        this.description = undefined;
        this.tokenHash = partial.tokenHash;
        this.creationTime = partial.creationTime;
        this.validity = partial.validity;
        this.operation = partial.operation;
        if ('description' in partial)
            this.description = partial.description;
    }
}
//# sourceMappingURL=OperationToken.mjs.map