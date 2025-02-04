export class DecryptedCalendarItemTag {
    constructor(partial) {
        this.code = undefined;
        this.date = undefined;
        this.userId = undefined;
        this.userName = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        if ('code' in partial)
            this.code = partial.code;
        if ('date' in partial)
            this.date = partial.date;
        if ('userId' in partial)
            this.userId = partial.userId;
        if ('userName' in partial)
            this.userName = partial.userName;
        this.encryptedSelf = partial.encryptedSelf;
    }
}
export class EncryptedCalendarItemTag {
    constructor(partial) {
        this.code = undefined;
        this.date = undefined;
        this.userId = undefined;
        this.userName = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        if ('code' in partial)
            this.code = partial.code;
        if ('date' in partial)
            this.date = partial.date;
        if ('userId' in partial)
            this.userId = partial.userId;
        if ('userName' in partial)
            this.userName = partial.userName;
        this.encryptedSelf = partial.encryptedSelf;
    }
}
//# sourceMappingURL=CalendarItemTag.mjs.map