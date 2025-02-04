export class DecryptedCareTeamMembership {
    constructor(partial) {
        this.startDate = undefined;
        this.endDate = undefined;
        this.careTeamMemberId = undefined;
        this.membershipType = undefined;
        this.encryptedSelf = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        if ('startDate' in partial)
            this.startDate = partial.startDate;
        if ('endDate' in partial)
            this.endDate = partial.endDate;
        if ('careTeamMemberId' in partial)
            this.careTeamMemberId = partial.careTeamMemberId;
        if ('membershipType' in partial)
            this.membershipType = partial.membershipType;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
export class EncryptedCareTeamMembership {
    constructor(partial) {
        this.startDate = undefined;
        this.endDate = undefined;
        this.careTeamMemberId = undefined;
        this.membershipType = undefined;
        this.encryptedSelf = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        if ('startDate' in partial)
            this.startDate = partial.startDate;
        if ('endDate' in partial)
            this.endDate = partial.endDate;
        if ('careTeamMemberId' in partial)
            this.careTeamMemberId = partial.careTeamMemberId;
        if ('membershipType' in partial)
            this.membershipType = partial.membershipType;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
//# sourceMappingURL=CareTeamMembership.mjs.map