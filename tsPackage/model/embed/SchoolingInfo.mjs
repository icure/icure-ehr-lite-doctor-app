export class DecryptedSchoolingInfo {
    constructor(partial) {
        this.startDate = undefined;
        this.endDate = undefined;
        this.school = undefined;
        this.typeOfEducation = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        if ('startDate' in partial)
            this.startDate = partial.startDate;
        if ('endDate' in partial)
            this.endDate = partial.endDate;
        if ('school' in partial)
            this.school = partial.school;
        if ('typeOfEducation' in partial)
            this.typeOfEducation = partial.typeOfEducation;
        this.encryptedSelf = partial.encryptedSelf;
    }
}
export class EncryptedSchoolingInfo {
    constructor(partial) {
        this.startDate = undefined;
        this.endDate = undefined;
        this.school = undefined;
        this.typeOfEducation = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        if ('startDate' in partial)
            this.startDate = partial.startDate;
        if ('endDate' in partial)
            this.endDate = partial.endDate;
        if ('school' in partial)
            this.school = partial.school;
        if ('typeOfEducation' in partial)
            this.typeOfEducation = partial.typeOfEducation;
        this.encryptedSelf = partial.encryptedSelf;
    }
}
//# sourceMappingURL=SchoolingInfo.mjs.map