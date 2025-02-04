export class DecryptedTelecom {
    constructor(partial) {
        this.telecomType = undefined;
        this.telecomNumber = undefined;
        this.telecomDescription = undefined;
        this.encryptedSelf = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        if ('telecomType' in partial)
            this.telecomType = partial.telecomType;
        if ('telecomNumber' in partial)
            this.telecomNumber = partial.telecomNumber;
        if ('telecomDescription' in partial)
            this.telecomDescription = partial.telecomDescription;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
export class EncryptedTelecom {
    constructor(partial) {
        this.telecomType = undefined;
        this.telecomNumber = undefined;
        this.telecomDescription = undefined;
        this.encryptedSelf = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        if ('telecomType' in partial)
            this.telecomType = partial.telecomType;
        if ('telecomNumber' in partial)
            this.telecomNumber = partial.telecomNumber;
        if ('telecomDescription' in partial)
            this.telecomDescription = partial.telecomDescription;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
//# sourceMappingURL=Telecom.mjs.map