// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class Group {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.tags = [];
        this.name = undefined;
        this.password = undefined;
        this.servers = undefined;
        this.superAdmin = false;
        this.properties = [];
        this.defaultUserRoles = {};
        this.operationTokens = {};
        this.sharedEntities = {};
        this.minimumKrakenVersion = undefined;
        this.externalJwtPublicKeys = {};
        this.superGroup = undefined;
        this.applicationId = undefined;
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('tags' in partial && partial.tags !== undefined)
            this.tags = partial.tags;
        if ('name' in partial)
            this.name = partial.name;
        if ('password' in partial)
            this.password = partial.password;
        if ('servers' in partial)
            this.servers = partial.servers;
        if ('superAdmin' in partial && partial.superAdmin !== undefined)
            this.superAdmin = partial.superAdmin;
        if ('properties' in partial && partial.properties !== undefined)
            this.properties = partial.properties;
        if ('defaultUserRoles' in partial && partial.defaultUserRoles !== undefined)
            this.defaultUserRoles = partial.defaultUserRoles;
        if ('operationTokens' in partial && partial.operationTokens !== undefined)
            this.operationTokens = partial.operationTokens;
        if ('sharedEntities' in partial && partial.sharedEntities !== undefined)
            this.sharedEntities = partial.sharedEntities;
        if ('minimumKrakenVersion' in partial)
            this.minimumKrakenVersion = partial.minimumKrakenVersion;
        if ('externalJwtPublicKeys' in partial && partial.externalJwtPublicKeys !== undefined)
            this.externalJwtPublicKeys = partial.externalJwtPublicKeys;
        this.minimumAuthenticationClassForElevatedPrivileges = partial.minimumAuthenticationClassForElevatedPrivileges;
        if ('superGroup' in partial)
            this.superGroup = partial.superGroup;
        if ('applicationId' in partial)
            this.applicationId = partial.applicationId;
    }
}
//# sourceMappingURL=Group.mjs.map