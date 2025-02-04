export class DecryptedTypedValue {
    constructor(partial) {
        this.type = undefined;
        this.booleanValue = undefined;
        this.integerValue = undefined;
        this.doubleValue = undefined;
        this.stringValue = undefined;
        this.dateValue = undefined;
        this.encryptedSelf = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        if ('type' in partial)
            this.type = partial.type;
        if ('booleanValue' in partial)
            this.booleanValue = partial.booleanValue;
        if ('integerValue' in partial)
            this.integerValue = partial.integerValue;
        if ('doubleValue' in partial)
            this.doubleValue = partial.doubleValue;
        if ('stringValue' in partial)
            this.stringValue = partial.stringValue;
        if ('dateValue' in partial)
            this.dateValue = partial.dateValue;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
export class EncryptedTypedValue {
    constructor(partial) {
        this.type = undefined;
        this.booleanValue = undefined;
        this.integerValue = undefined;
        this.doubleValue = undefined;
        this.stringValue = undefined;
        this.dateValue = undefined;
        this.encryptedSelf = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        if ('type' in partial)
            this.type = partial.type;
        if ('booleanValue' in partial)
            this.booleanValue = partial.booleanValue;
        if ('integerValue' in partial)
            this.integerValue = partial.integerValue;
        if ('doubleValue' in partial)
            this.doubleValue = partial.doubleValue;
        if ('stringValue' in partial)
            this.stringValue = partial.stringValue;
        if ('dateValue' in partial)
            this.dateValue = partial.dateValue;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
//# sourceMappingURL=TypedValue.mjs.map