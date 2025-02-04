export class DecryptedPropertyStub {
    constructor(partial) {
        this.id = undefined;
        this.type = undefined;
        this.typedValue = undefined;
        this.deletionDate = undefined;
        this.encryptedSelf = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        if ('id' in partial)
            this.id = partial.id;
        if ('type' in partial)
            this.type = partial.type;
        if ('typedValue' in partial)
            this.typedValue = partial.typedValue;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
export class EncryptedPropertyStub {
    constructor(partial) {
        this.id = undefined;
        this.type = undefined;
        this.typedValue = undefined;
        this.deletionDate = undefined;
        this.encryptedSelf = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        if ('id' in partial)
            this.id = partial.id;
        if ('type' in partial)
            this.type = partial.type;
        if ('typedValue' in partial)
            this.typedValue = partial.typedValue;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
//# sourceMappingURL=PropertyStub.mjs.map