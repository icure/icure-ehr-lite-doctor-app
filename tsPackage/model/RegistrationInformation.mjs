// auto-generated file
export class RegistrationInformation {
    constructor(partial) {
        this.userOptions = undefined;
        this.userRoles = [];
        this.minimumKrakenVersion = undefined;
        this.firstName = partial.firstName;
        this.lastName = partial.lastName;
        this.emailAddress = partial.emailAddress;
        if ('userOptions' in partial)
            this.userOptions = partial.userOptions;
        if ('userRoles' in partial && partial.userRoles !== undefined)
            this.userRoles = partial.userRoles;
        if ('minimumKrakenVersion' in partial)
            this.minimumKrakenVersion = partial.minimumKrakenVersion;
    }
}
//# sourceMappingURL=RegistrationInformation.mjs.map