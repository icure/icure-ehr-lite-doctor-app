// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class DecryptedContact {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.created = undefined;
        this.modified = undefined;
        this.author = undefined;
        this.responsible = undefined;
        this.medicalLocationId = undefined;
        this.tags = [];
        this.codes = [];
        this.identifier = [];
        this.endOfLife = undefined;
        this.deletionDate = undefined;
        this.groupId = undefined;
        this.openingDate = undefined;
        this.closingDate = undefined;
        this.descr = undefined;
        this.location = undefined;
        this.externalId = undefined;
        this.encounterType = undefined;
        this.encounterLocation = undefined;
        this.subContacts = [];
        this.services = [];
        this.participants = {};
        this.healthcarePartyId = undefined;
        this.modifiedContactId = undefined;
        this.secretForeignKeys = [];
        this.cryptedForeignKeys = {};
        this.delegations = {};
        this.encryptionKeys = {};
        this.encryptedSelf = undefined;
        this.securityMetadata = undefined;
        this.notes = [];
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
        if ('identifier' in partial && partial.identifier !== undefined)
            this.identifier = partial.identifier;
        if ('endOfLife' in partial)
            this.endOfLife = partial.endOfLife;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('groupId' in partial)
            this.groupId = partial.groupId;
        if ('openingDate' in partial)
            this.openingDate = partial.openingDate;
        if ('closingDate' in partial)
            this.closingDate = partial.closingDate;
        if ('descr' in partial)
            this.descr = partial.descr;
        if ('location' in partial)
            this.location = partial.location;
        if ('externalId' in partial)
            this.externalId = partial.externalId;
        if ('encounterType' in partial)
            this.encounterType = partial.encounterType;
        if ('encounterLocation' in partial)
            this.encounterLocation = partial.encounterLocation;
        if ('subContacts' in partial && partial.subContacts !== undefined)
            this.subContacts = partial.subContacts;
        if ('services' in partial && partial.services !== undefined)
            this.services = partial.services;
        if ('participants' in partial && partial.participants !== undefined)
            this.participants = partial.participants;
        if ('healthcarePartyId' in partial)
            this.healthcarePartyId = partial.healthcarePartyId;
        if ('modifiedContactId' in partial)
            this.modifiedContactId = partial.modifiedContactId;
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
        if ('notes' in partial && partial.notes !== undefined)
            this.notes = partial.notes;
    }
}
export class EncryptedContact {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.created = undefined;
        this.modified = undefined;
        this.author = undefined;
        this.responsible = undefined;
        this.medicalLocationId = undefined;
        this.tags = [];
        this.codes = [];
        this.identifier = [];
        this.endOfLife = undefined;
        this.deletionDate = undefined;
        this.groupId = undefined;
        this.openingDate = undefined;
        this.closingDate = undefined;
        this.descr = undefined;
        this.location = undefined;
        this.externalId = undefined;
        this.encounterType = undefined;
        this.encounterLocation = undefined;
        this.subContacts = [];
        this.services = [];
        this.participants = {};
        this.healthcarePartyId = undefined;
        this.modifiedContactId = undefined;
        this.secretForeignKeys = [];
        this.cryptedForeignKeys = {};
        this.delegations = {};
        this.encryptionKeys = {};
        this.encryptedSelf = undefined;
        this.securityMetadata = undefined;
        this.notes = [];
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
        if ('identifier' in partial && partial.identifier !== undefined)
            this.identifier = partial.identifier;
        if ('endOfLife' in partial)
            this.endOfLife = partial.endOfLife;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('groupId' in partial)
            this.groupId = partial.groupId;
        if ('openingDate' in partial)
            this.openingDate = partial.openingDate;
        if ('closingDate' in partial)
            this.closingDate = partial.closingDate;
        if ('descr' in partial)
            this.descr = partial.descr;
        if ('location' in partial)
            this.location = partial.location;
        if ('externalId' in partial)
            this.externalId = partial.externalId;
        if ('encounterType' in partial)
            this.encounterType = partial.encounterType;
        if ('encounterLocation' in partial)
            this.encounterLocation = partial.encounterLocation;
        if ('subContacts' in partial && partial.subContacts !== undefined)
            this.subContacts = partial.subContacts;
        if ('services' in partial && partial.services !== undefined)
            this.services = partial.services;
        if ('participants' in partial && partial.participants !== undefined)
            this.participants = partial.participants;
        if ('healthcarePartyId' in partial)
            this.healthcarePartyId = partial.healthcarePartyId;
        if ('modifiedContactId' in partial)
            this.modifiedContactId = partial.modifiedContactId;
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
        if ('notes' in partial && partial.notes !== undefined)
            this.notes = partial.notes;
    }
}
//# sourceMappingURL=Contact.mjs.map