// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class DecryptedForm {
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
        this.endOfLife = undefined;
        this.deletionDate = undefined;
        this.openingDate = undefined;
        this.status = undefined;
        this.version = undefined;
        this.logicalUuid = undefined;
        this.descr = undefined;
        this.uniqueId = undefined;
        this.formTemplateId = undefined;
        this.contactId = undefined;
        this.healthElementId = undefined;
        this.planOfActionId = undefined;
        this.parent = undefined;
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
        if ('openingDate' in partial)
            this.openingDate = partial.openingDate;
        if ('status' in partial)
            this.status = partial.status;
        if ('version' in partial)
            this.version = partial.version;
        if ('logicalUuid' in partial)
            this.logicalUuid = partial.logicalUuid;
        if ('descr' in partial)
            this.descr = partial.descr;
        if ('uniqueId' in partial)
            this.uniqueId = partial.uniqueId;
        if ('formTemplateId' in partial)
            this.formTemplateId = partial.formTemplateId;
        if ('contactId' in partial)
            this.contactId = partial.contactId;
        if ('healthElementId' in partial)
            this.healthElementId = partial.healthElementId;
        if ('planOfActionId' in partial)
            this.planOfActionId = partial.planOfActionId;
        if ('parent' in partial)
            this.parent = partial.parent;
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
export class EncryptedForm {
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
        this.endOfLife = undefined;
        this.deletionDate = undefined;
        this.openingDate = undefined;
        this.status = undefined;
        this.version = undefined;
        this.logicalUuid = undefined;
        this.descr = undefined;
        this.uniqueId = undefined;
        this.formTemplateId = undefined;
        this.contactId = undefined;
        this.healthElementId = undefined;
        this.planOfActionId = undefined;
        this.parent = undefined;
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
        if ('openingDate' in partial)
            this.openingDate = partial.openingDate;
        if ('status' in partial)
            this.status = partial.status;
        if ('version' in partial)
            this.version = partial.version;
        if ('logicalUuid' in partial)
            this.logicalUuid = partial.logicalUuid;
        if ('descr' in partial)
            this.descr = partial.descr;
        if ('uniqueId' in partial)
            this.uniqueId = partial.uniqueId;
        if ('formTemplateId' in partial)
            this.formTemplateId = partial.formTemplateId;
        if ('contactId' in partial)
            this.contactId = partial.contactId;
        if ('healthElementId' in partial)
            this.healthElementId = partial.healthElementId;
        if ('planOfActionId' in partial)
            this.planOfActionId = partial.planOfActionId;
        if ('parent' in partial)
            this.parent = partial.parent;
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
//# sourceMappingURL=Form.mjs.map