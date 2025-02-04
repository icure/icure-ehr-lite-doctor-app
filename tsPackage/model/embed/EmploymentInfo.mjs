export class DecryptedEmploymentInfo {
    constructor(partial) {
        this.startDate = undefined;
        this.endDate = undefined;
        this.professionType = undefined;
        this.employer = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        if ('startDate' in partial)
            this.startDate = partial.startDate;
        if ('endDate' in partial)
            this.endDate = partial.endDate;
        if ('professionType' in partial)
            this.professionType = partial.professionType;
        if ('employer' in partial)
            this.employer = partial.employer;
        this.encryptedSelf = partial.encryptedSelf;
    }
}
export class EncryptedEmploymentInfo {
    constructor(partial) {
        this.startDate = undefined;
        this.endDate = undefined;
        this.professionType = undefined;
        this.employer = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        if ('startDate' in partial)
            this.startDate = partial.startDate;
        if ('endDate' in partial)
            this.endDate = partial.endDate;
        if ('professionType' in partial)
            this.professionType = partial.professionType;
        if ('employer' in partial)
            this.employer = partial.employer;
        this.encryptedSelf = partial.encryptedSelf;
    }
}
//# sourceMappingURL=EmploymentInfo.mjs.map