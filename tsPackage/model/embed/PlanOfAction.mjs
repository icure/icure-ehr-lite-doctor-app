// auto-generated file
import { randomUuid } from '../../utils/Id.mjs';
export class DecryptedPlanOfAction {
    constructor(partial) {
        var _a;
        this.created = undefined;
        this.modified = undefined;
        this.author = undefined;
        this.responsible = undefined;
        this.medicalLocationId = undefined;
        this.tags = [];
        this.codes = [];
        this.endOfLife = undefined;
        this.prescriberId = undefined;
        this.valueDate = undefined;
        this.openingDate = undefined;
        this.closingDate = undefined;
        this.deadlineDate = undefined;
        this.name = undefined;
        this.descr = undefined;
        this.note = undefined;
        this.idOpeningContact = undefined;
        this.idClosingContact = undefined;
        this.status = 0;
        this.documentIds = [];
        this.numberOfCares = undefined;
        this.careTeamMemberships = [];
        this.relevant = true;
        this.encryptedSelf = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('created' in partial)
            this.created = partial.created;
        if ('modified' in partial)
            this.modified = partial.modified;
        if ('author' in partial)
            this.author = partial.author;
        if ('responsible' in partial)
            this.responsible = partial.responsible;
        if ('medicalLocationId' in partial)
            this.medicalLocationId = partial.medicalLocationId;
        if ('tags' in partial && partial.tags !== undefined)
            this.tags = partial.tags;
        if ('codes' in partial && partial.codes !== undefined)
            this.codes = partial.codes;
        if ('endOfLife' in partial)
            this.endOfLife = partial.endOfLife;
        if ('prescriberId' in partial)
            this.prescriberId = partial.prescriberId;
        if ('valueDate' in partial)
            this.valueDate = partial.valueDate;
        if ('openingDate' in partial)
            this.openingDate = partial.openingDate;
        if ('closingDate' in partial)
            this.closingDate = partial.closingDate;
        if ('deadlineDate' in partial)
            this.deadlineDate = partial.deadlineDate;
        if ('name' in partial)
            this.name = partial.name;
        if ('descr' in partial)
            this.descr = partial.descr;
        if ('note' in partial)
            this.note = partial.note;
        if ('idOpeningContact' in partial)
            this.idOpeningContact = partial.idOpeningContact;
        if ('idClosingContact' in partial)
            this.idClosingContact = partial.idClosingContact;
        if ('status' in partial && partial.status !== undefined)
            this.status = partial.status;
        if ('documentIds' in partial && partial.documentIds !== undefined)
            this.documentIds = partial.documentIds;
        if ('numberOfCares' in partial)
            this.numberOfCares = partial.numberOfCares;
        if ('careTeamMemberships' in partial && partial.careTeamMemberships !== undefined)
            this.careTeamMemberships = partial.careTeamMemberships;
        if ('relevant' in partial && partial.relevant !== undefined)
            this.relevant = partial.relevant;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
export class EncryptedPlanOfAction {
    constructor(partial) {
        var _a;
        this.created = undefined;
        this.modified = undefined;
        this.author = undefined;
        this.responsible = undefined;
        this.medicalLocationId = undefined;
        this.tags = [];
        this.codes = [];
        this.endOfLife = undefined;
        this.prescriberId = undefined;
        this.valueDate = undefined;
        this.openingDate = undefined;
        this.closingDate = undefined;
        this.deadlineDate = undefined;
        this.name = undefined;
        this.descr = undefined;
        this.note = undefined;
        this.idOpeningContact = undefined;
        this.idClosingContact = undefined;
        this.status = 0;
        this.documentIds = [];
        this.numberOfCares = undefined;
        this.careTeamMemberships = [];
        this.relevant = true;
        this.encryptedSelf = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('created' in partial)
            this.created = partial.created;
        if ('modified' in partial)
            this.modified = partial.modified;
        if ('author' in partial)
            this.author = partial.author;
        if ('responsible' in partial)
            this.responsible = partial.responsible;
        if ('medicalLocationId' in partial)
            this.medicalLocationId = partial.medicalLocationId;
        if ('tags' in partial && partial.tags !== undefined)
            this.tags = partial.tags;
        if ('codes' in partial && partial.codes !== undefined)
            this.codes = partial.codes;
        if ('endOfLife' in partial)
            this.endOfLife = partial.endOfLife;
        if ('prescriberId' in partial)
            this.prescriberId = partial.prescriberId;
        if ('valueDate' in partial)
            this.valueDate = partial.valueDate;
        if ('openingDate' in partial)
            this.openingDate = partial.openingDate;
        if ('closingDate' in partial)
            this.closingDate = partial.closingDate;
        if ('deadlineDate' in partial)
            this.deadlineDate = partial.deadlineDate;
        if ('name' in partial)
            this.name = partial.name;
        if ('descr' in partial)
            this.descr = partial.descr;
        if ('note' in partial)
            this.note = partial.note;
        if ('idOpeningContact' in partial)
            this.idOpeningContact = partial.idOpeningContact;
        if ('idClosingContact' in partial)
            this.idClosingContact = partial.idClosingContact;
        if ('status' in partial && partial.status !== undefined)
            this.status = partial.status;
        if ('documentIds' in partial && partial.documentIds !== undefined)
            this.documentIds = partial.documentIds;
        if ('numberOfCares' in partial)
            this.numberOfCares = partial.numberOfCares;
        if ('careTeamMemberships' in partial && partial.careTeamMemberships !== undefined)
            this.careTeamMemberships = partial.careTeamMemberships;
        if ('relevant' in partial && partial.relevant !== undefined)
            this.relevant = partial.relevant;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
//# sourceMappingURL=PlanOfAction.mjs.map