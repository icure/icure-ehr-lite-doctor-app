// auto-generated file
import { randomUuid } from '../../utils/Id.mjs';
export class DecryptedCareTeamMember {
    constructor(partial) {
        var _a;
        this.careTeamMemberType = undefined;
        this.healthcarePartyId = undefined;
        this.quality = undefined;
        this.encryptedSelf = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('careTeamMemberType' in partial)
            this.careTeamMemberType = partial.careTeamMemberType;
        if ('healthcarePartyId' in partial)
            this.healthcarePartyId = partial.healthcarePartyId;
        if ('quality' in partial)
            this.quality = partial.quality;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
export class EncryptedCareTeamMember {
    constructor(partial) {
        var _a;
        this.careTeamMemberType = undefined;
        this.healthcarePartyId = undefined;
        this.quality = undefined;
        this.encryptedSelf = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('careTeamMemberType' in partial)
            this.careTeamMemberType = partial.careTeamMemberType;
        if ('healthcarePartyId' in partial)
            this.healthcarePartyId = partial.healthcarePartyId;
        if ('quality' in partial)
            this.quality = partial.quality;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
//# sourceMappingURL=CareTeamMember.mjs.map