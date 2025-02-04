export class SecureDelegation {
    constructor(partial) {
        this.delegator = undefined;
        this.delegate = undefined;
        this.secretIds = [];
        this.encryptionKeys = [];
        this.owningEntityIds = [];
        this.parentDelegations = [];
        this.exchangeDataId = undefined;
        if ('delegator' in partial)
            this.delegator = partial.delegator;
        if ('delegate' in partial)
            this.delegate = partial.delegate;
        if ('secretIds' in partial && partial.secretIds !== undefined)
            this.secretIds = partial.secretIds;
        if ('encryptionKeys' in partial && partial.encryptionKeys !== undefined)
            this.encryptionKeys = partial.encryptionKeys;
        if ('owningEntityIds' in partial && partial.owningEntityIds !== undefined)
            this.owningEntityIds = partial.owningEntityIds;
        if ('parentDelegations' in partial && partial.parentDelegations !== undefined)
            this.parentDelegations = partial.parentDelegations;
        if ('exchangeDataId' in partial)
            this.exchangeDataId = partial.exchangeDataId;
        this.permissions = partial.permissions;
    }
}
//# sourceMappingURL=SecureDelegation.mjs.map