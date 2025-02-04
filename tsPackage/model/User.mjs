// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class User {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.created = undefined;
        this.identifier = [];
        this.name = undefined;
        this.properties = [];
        this.permissions = [];
        this.roles = [];
        this.type = undefined;
        this.status = undefined;
        this.login = undefined;
        this.passwordHash = undefined;
        this.groupId = undefined;
        this.healthcarePartyId = undefined;
        this.patientId = undefined;
        this.deviceId = undefined;
        this.autoDelegations = {};
        this.createdDate = undefined;
        this.termsOfUseDate = undefined;
        this.email = undefined;
        this.mobilePhone = undefined;
        this.applicationTokens = {};
        this.authenticationTokens = {};
        this.systemMetadata = undefined;
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('created' in partial)
            this.created = partial.created;
        if ('identifier' in partial && partial.identifier !== undefined)
            this.identifier = partial.identifier;
        if ('name' in partial)
            this.name = partial.name;
        if ('properties' in partial && partial.properties !== undefined)
            this.properties = partial.properties;
        if ('permissions' in partial && partial.permissions !== undefined)
            this.permissions = partial.permissions;
        if ('roles' in partial && partial.roles !== undefined)
            this.roles = partial.roles;
        if ('type' in partial)
            this.type = partial.type;
        if ('status' in partial)
            this.status = partial.status;
        if ('login' in partial)
            this.login = partial.login;
        if ('passwordHash' in partial)
            this.passwordHash = partial.passwordHash;
        if ('groupId' in partial)
            this.groupId = partial.groupId;
        if ('healthcarePartyId' in partial)
            this.healthcarePartyId = partial.healthcarePartyId;
        if ('patientId' in partial)
            this.patientId = partial.patientId;
        if ('deviceId' in partial)
            this.deviceId = partial.deviceId;
        if ('autoDelegations' in partial && partial.autoDelegations !== undefined)
            this.autoDelegations = partial.autoDelegations;
        if ('createdDate' in partial)
            this.createdDate = partial.createdDate;
        if ('termsOfUseDate' in partial)
            this.termsOfUseDate = partial.termsOfUseDate;
        if ('email' in partial)
            this.email = partial.email;
        if ('mobilePhone' in partial)
            this.mobilePhone = partial.mobilePhone;
        if ('applicationTokens' in partial && partial.applicationTokens !== undefined)
            this.applicationTokens = partial.applicationTokens;
        if ('authenticationTokens' in partial && partial.authenticationTokens !== undefined)
            this.authenticationTokens = partial.authenticationTokens;
        if ('systemMetadata' in partial)
            this.systemMetadata = partial.systemMetadata;
    }
}
(function (User) {
    class SystemMetadata {
        constructor(partial) {
            this.roles = partial.roles;
            this.isAdmin = partial.isAdmin;
            this.inheritsRoles = partial.inheritsRoles;
        }
    }
    User.SystemMetadata = SystemMetadata;
})(User || (User = {}));
//# sourceMappingURL=User.mjs.map