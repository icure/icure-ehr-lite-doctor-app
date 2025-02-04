export class DatabaseInitialisation {
    constructor(partial) {
        this.users = [];
        this.healthcareParties = [];
        this.replication = undefined;
        this.minimumKrakenVersion = undefined;
        if ('users' in partial)
            this.users = partial.users;
        if ('healthcareParties' in partial)
            this.healthcareParties = partial.healthcareParties;
        if ('replication' in partial)
            this.replication = partial.replication;
        if ('minimumKrakenVersion' in partial)
            this.minimumKrakenVersion = partial.minimumKrakenVersion;
    }
}
//# sourceMappingURL=DatabaseInitialisation.mjs.map