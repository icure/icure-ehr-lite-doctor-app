// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class DecryptedTopic {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.created = undefined;
        this.modified = undefined;
        this.healthElementId = undefined;
        this.contactId = undefined;
        this.description = undefined;
        this.codes = [];
        this.tags = [];
        this.author = undefined;
        this.responsible = undefined;
        this.medicalLocationId = undefined;
        this.endOfLife = undefined;
        this.deletionDate = undefined;
        this.activeParticipants = {};
        this.securityMetadata = undefined;
        this.secretForeignKeys = [];
        this.cryptedForeignKeys = {};
        this.delegations = {};
        this.encryptionKeys = {};
        this.encryptedSelf = undefined;
        this.linkedHealthElements = [];
        this.linkedServices = [];
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('created' in partial)
            this.created = partial.created;
        if ('modified' in partial)
            this.modified = partial.modified;
        if ('healthElementId' in partial)
            this.healthElementId = partial.healthElementId;
        if ('contactId' in partial)
            this.contactId = partial.contactId;
        if ('description' in partial)
            this.description = partial.description;
        if ('codes' in partial && partial.codes !== undefined)
            this.codes = partial.codes;
        if ('tags' in partial && partial.tags !== undefined)
            this.tags = partial.tags;
        if ('author' in partial)
            this.author = partial.author;
        if ('responsible' in partial)
            this.responsible = partial.responsible;
        if ('medicalLocationId' in partial)
            this.medicalLocationId = partial.medicalLocationId;
        if ('endOfLife' in partial)
            this.endOfLife = partial.endOfLife;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('activeParticipants' in partial && partial.activeParticipants !== undefined)
            this.activeParticipants = partial.activeParticipants;
        if ('securityMetadata' in partial)
            this.securityMetadata = partial.securityMetadata;
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
        if ('linkedHealthElements' in partial && partial.linkedHealthElements !== undefined)
            this.linkedHealthElements = partial.linkedHealthElements;
        if ('linkedServices' in partial && partial.linkedServices !== undefined)
            this.linkedServices = partial.linkedServices;
    }
}
export class EncryptedTopic {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.created = undefined;
        this.modified = undefined;
        this.healthElementId = undefined;
        this.contactId = undefined;
        this.description = undefined;
        this.codes = [];
        this.tags = [];
        this.author = undefined;
        this.responsible = undefined;
        this.medicalLocationId = undefined;
        this.endOfLife = undefined;
        this.deletionDate = undefined;
        this.activeParticipants = {};
        this.securityMetadata = undefined;
        this.secretForeignKeys = [];
        this.cryptedForeignKeys = {};
        this.delegations = {};
        this.encryptionKeys = {};
        this.encryptedSelf = undefined;
        this.linkedHealthElements = [];
        this.linkedServices = [];
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('created' in partial)
            this.created = partial.created;
        if ('modified' in partial)
            this.modified = partial.modified;
        if ('healthElementId' in partial)
            this.healthElementId = partial.healthElementId;
        if ('contactId' in partial)
            this.contactId = partial.contactId;
        if ('description' in partial)
            this.description = partial.description;
        if ('codes' in partial && partial.codes !== undefined)
            this.codes = partial.codes;
        if ('tags' in partial && partial.tags !== undefined)
            this.tags = partial.tags;
        if ('author' in partial)
            this.author = partial.author;
        if ('responsible' in partial)
            this.responsible = partial.responsible;
        if ('medicalLocationId' in partial)
            this.medicalLocationId = partial.medicalLocationId;
        if ('endOfLife' in partial)
            this.endOfLife = partial.endOfLife;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('activeParticipants' in partial && partial.activeParticipants !== undefined)
            this.activeParticipants = partial.activeParticipants;
        if ('securityMetadata' in partial)
            this.securityMetadata = partial.securityMetadata;
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
        if ('linkedHealthElements' in partial && partial.linkedHealthElements !== undefined)
            this.linkedHealthElements = partial.linkedHealthElements;
        if ('linkedServices' in partial && partial.linkedServices !== undefined)
            this.linkedServices = partial.linkedServices;
    }
}
//# sourceMappingURL=Topic.mjs.map