// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class DecryptedHealthElement {
    constructor(partial) {
        var _a;
        this.identifiers = [];
        this.rev = undefined;
        this.created = undefined;
        this.modified = undefined;
        this.author = undefined;
        this.responsible = undefined;
        this.medicalLocationId = undefined;
        this.tags = [];
        this.codes = [];
        this.endOfLife = undefined;
        this.deletionDate = undefined;
        this.healthElementId = undefined;
        this.valueDate = undefined;
        this.openingDate = undefined;
        this.closingDate = undefined;
        this.descr = undefined;
        this.note = undefined;
        this.notes = [];
        this.relevant = true;
        this.idOpeningContact = undefined;
        this.idClosingContact = undefined;
        this.idService = undefined;
        this.status = 0;
        this.laterality = undefined;
        this.plansOfAction = [];
        this.episodes = [];
        this.careTeam = [];
        this.secretForeignKeys = [];
        this.cryptedForeignKeys = {};
        this.delegations = {};
        this.encryptionKeys = {};
        this.encryptedSelf = undefined;
        this.securityMetadata = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('identifiers' in partial && partial.identifiers !== undefined)
            this.identifiers = partial.identifiers;
        if ('rev' in partial)
            this.rev = partial.rev;
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
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('healthElementId' in partial)
            this.healthElementId = partial.healthElementId;
        if ('valueDate' in partial)
            this.valueDate = partial.valueDate;
        if ('openingDate' in partial)
            this.openingDate = partial.openingDate;
        if ('closingDate' in partial)
            this.closingDate = partial.closingDate;
        if ('descr' in partial)
            this.descr = partial.descr;
        if ('note' in partial)
            this.note = partial.note;
        if ('notes' in partial && partial.notes !== undefined)
            this.notes = partial.notes;
        if ('relevant' in partial && partial.relevant !== undefined)
            this.relevant = partial.relevant;
        if ('idOpeningContact' in partial)
            this.idOpeningContact = partial.idOpeningContact;
        if ('idClosingContact' in partial)
            this.idClosingContact = partial.idClosingContact;
        if ('idService' in partial)
            this.idService = partial.idService;
        if ('status' in partial && partial.status !== undefined)
            this.status = partial.status;
        if ('laterality' in partial)
            this.laterality = partial.laterality;
        if ('plansOfAction' in partial && partial.plansOfAction !== undefined)
            this.plansOfAction = partial.plansOfAction;
        if ('episodes' in partial && partial.episodes !== undefined)
            this.episodes = partial.episodes;
        if ('careTeam' in partial && partial.careTeam !== undefined)
            this.careTeam = partial.careTeam;
        if ('secretForeignKeys' in partial && partial.secretForeignKeys !== undefined)
            this.secretForeignKeys = partial.secretForeignKeys;
        if ('cryptedForeignKeys' in partial && partial.cryptedForeignKeys !== undefined)
            this.cryptedForeignKeys = partial.cryptedForeignKeys;
        if ('delegations' in partial && partial.delegations !== undefined)
            this.delegations = partial.delegations;
        if ('encryptionKeys' in partial && partial.encryptionKeys !== undefined)
            this.encryptionKeys = partial.encryptionKeys;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
        if ('securityMetadata' in partial)
            this.securityMetadata = partial.securityMetadata;
    }
}
export class EncryptedHealthElement {
    constructor(partial) {
        var _a;
        this.identifiers = [];
        this.rev = undefined;
        this.created = undefined;
        this.modified = undefined;
        this.author = undefined;
        this.responsible = undefined;
        this.medicalLocationId = undefined;
        this.tags = [];
        this.codes = [];
        this.endOfLife = undefined;
        this.deletionDate = undefined;
        this.healthElementId = undefined;
        this.valueDate = undefined;
        this.openingDate = undefined;
        this.closingDate = undefined;
        this.descr = undefined;
        this.note = undefined;
        this.notes = [];
        this.relevant = true;
        this.idOpeningContact = undefined;
        this.idClosingContact = undefined;
        this.idService = undefined;
        this.status = 0;
        this.laterality = undefined;
        this.plansOfAction = [];
        this.episodes = [];
        this.careTeam = [];
        this.secretForeignKeys = [];
        this.cryptedForeignKeys = {};
        this.delegations = {};
        this.encryptionKeys = {};
        this.encryptedSelf = undefined;
        this.securityMetadata = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('identifiers' in partial && partial.identifiers !== undefined)
            this.identifiers = partial.identifiers;
        if ('rev' in partial)
            this.rev = partial.rev;
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
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('healthElementId' in partial)
            this.healthElementId = partial.healthElementId;
        if ('valueDate' in partial)
            this.valueDate = partial.valueDate;
        if ('openingDate' in partial)
            this.openingDate = partial.openingDate;
        if ('closingDate' in partial)
            this.closingDate = partial.closingDate;
        if ('descr' in partial)
            this.descr = partial.descr;
        if ('note' in partial)
            this.note = partial.note;
        if ('notes' in partial && partial.notes !== undefined)
            this.notes = partial.notes;
        if ('relevant' in partial && partial.relevant !== undefined)
            this.relevant = partial.relevant;
        if ('idOpeningContact' in partial)
            this.idOpeningContact = partial.idOpeningContact;
        if ('idClosingContact' in partial)
            this.idClosingContact = partial.idClosingContact;
        if ('idService' in partial)
            this.idService = partial.idService;
        if ('status' in partial && partial.status !== undefined)
            this.status = partial.status;
        if ('laterality' in partial)
            this.laterality = partial.laterality;
        if ('plansOfAction' in partial && partial.plansOfAction !== undefined)
            this.plansOfAction = partial.plansOfAction;
        if ('episodes' in partial && partial.episodes !== undefined)
            this.episodes = partial.episodes;
        if ('careTeam' in partial && partial.careTeam !== undefined)
            this.careTeam = partial.careTeam;
        if ('secretForeignKeys' in partial && partial.secretForeignKeys !== undefined)
            this.secretForeignKeys = partial.secretForeignKeys;
        if ('cryptedForeignKeys' in partial && partial.cryptedForeignKeys !== undefined)
            this.cryptedForeignKeys = partial.cryptedForeignKeys;
        if ('delegations' in partial && partial.delegations !== undefined)
            this.delegations = partial.delegations;
        if ('encryptionKeys' in partial && partial.encryptionKeys !== undefined)
            this.encryptionKeys = partial.encryptionKeys;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
        if ('securityMetadata' in partial)
            this.securityMetadata = partial.securityMetadata;
    }
}
//# sourceMappingURL=HealthElement.mjs.map