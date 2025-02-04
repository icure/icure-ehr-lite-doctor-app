export class UserGroup {
    constructor(partial) {
        this.groupId = undefined;
        this.groupName = undefined;
        this.groupsHierarchy = [];
        this.userId = undefined;
        this.login = undefined;
        this.name = undefined;
        this.email = undefined;
        this.phone = undefined;
        this.patientId = undefined;
        this.healthcarePartyId = undefined;
        this.deviceId = undefined;
        this.nameOfParentOfTopmostGroupInHierarchy = undefined;
        if ('groupId' in partial)
            this.groupId = partial.groupId;
        if ('groupName' in partial)
            this.groupName = partial.groupName;
        if ('groupsHierarchy' in partial && partial.groupsHierarchy !== undefined)
            this.groupsHierarchy = partial.groupsHierarchy;
        if ('userId' in partial)
            this.userId = partial.userId;
        if ('login' in partial)
            this.login = partial.login;
        if ('name' in partial)
            this.name = partial.name;
        if ('email' in partial)
            this.email = partial.email;
        if ('phone' in partial)
            this.phone = partial.phone;
        if ('patientId' in partial)
            this.patientId = partial.patientId;
        if ('healthcarePartyId' in partial)
            this.healthcarePartyId = partial.healthcarePartyId;
        if ('deviceId' in partial)
            this.deviceId = partial.deviceId;
        if ('nameOfParentOfTopmostGroupInHierarchy' in partial)
            this.nameOfParentOfTopmostGroupInHierarchy = partial.nameOfParentOfTopmostGroupInHierarchy;
    }
}
//# sourceMappingURL=UserGroup.mjs.map