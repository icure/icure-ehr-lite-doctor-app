// auto-generated file
import { randomUuid } from '../../utils/Id.mjs';
export class DecryptedService {
    constructor(partial) {
        var _a;
        this.transactionId = undefined;
        this.identifier = [];
        this.contactId = undefined;
        this.subContactIds = undefined;
        this.plansOfActionIds = undefined;
        this.healthElementsIds = undefined;
        this.formIds = undefined;
        this.secretForeignKeys = [];
        this.cryptedForeignKeys = {};
        this.delegations = {};
        this.encryptionKeys = {};
        this.label = undefined;
        this.index = undefined;
        this.content = {};
        this.encryptedContent = undefined;
        this.textIndexes = {};
        this.valueDate = undefined;
        this.openingDate = undefined;
        this.closingDate = undefined;
        this.formId = undefined;
        this.created = undefined;
        this.modified = undefined;
        this.endOfLife = undefined;
        this.author = undefined;
        this.responsible = undefined;
        this.medicalLocationId = undefined;
        this.comment = undefined;
        this.status = undefined;
        this.invoicingCodes = [];
        this.notes = [];
        this.qualifiedLinks = {};
        this.codes = [];
        this.tags = [];
        this.encryptedSelf = undefined;
        this.securityMetadata = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('transactionId' in partial)
            this.transactionId = partial.transactionId;
        if ('identifier' in partial && partial.identifier !== undefined)
            this.identifier = partial.identifier;
        if ('contactId' in partial)
            this.contactId = partial.contactId;
        if ('subContactIds' in partial)
            this.subContactIds = partial.subContactIds;
        if ('plansOfActionIds' in partial)
            this.plansOfActionIds = partial.plansOfActionIds;
        if ('healthElementsIds' in partial)
            this.healthElementsIds = partial.healthElementsIds;
        if ('formIds' in partial)
            this.formIds = partial.formIds;
        if ('secretForeignKeys' in partial)
            this.secretForeignKeys = partial.secretForeignKeys;
        if ('cryptedForeignKeys' in partial && partial.cryptedForeignKeys !== undefined)
            this.cryptedForeignKeys = partial.cryptedForeignKeys;
        if ('delegations' in partial && partial.delegations !== undefined)
            this.delegations = partial.delegations;
        if ('encryptionKeys' in partial && partial.encryptionKeys !== undefined)
            this.encryptionKeys = partial.encryptionKeys;
        if ('label' in partial)
            this.label = partial.label;
        if ('index' in partial)
            this.index = partial.index;
        if ('content' in partial && partial.content !== undefined)
            this.content = partial.content;
        if ('encryptedContent' in partial)
            this.encryptedContent = partial.encryptedContent;
        if ('textIndexes' in partial && partial.textIndexes !== undefined)
            this.textIndexes = partial.textIndexes;
        if ('valueDate' in partial)
            this.valueDate = partial.valueDate;
        if ('openingDate' in partial)
            this.openingDate = partial.openingDate;
        if ('closingDate' in partial)
            this.closingDate = partial.closingDate;
        if ('formId' in partial)
            this.formId = partial.formId;
        if ('created' in partial)
            this.created = partial.created;
        if ('modified' in partial)
            this.modified = partial.modified;
        if ('endOfLife' in partial)
            this.endOfLife = partial.endOfLife;
        if ('author' in partial)
            this.author = partial.author;
        if ('responsible' in partial)
            this.responsible = partial.responsible;
        if ('medicalLocationId' in partial)
            this.medicalLocationId = partial.medicalLocationId;
        if ('comment' in partial)
            this.comment = partial.comment;
        if ('status' in partial)
            this.status = partial.status;
        if ('invoicingCodes' in partial && partial.invoicingCodes !== undefined)
            this.invoicingCodes = partial.invoicingCodes;
        if ('notes' in partial && partial.notes !== undefined)
            this.notes = partial.notes;
        if ('qualifiedLinks' in partial && partial.qualifiedLinks !== undefined)
            this.qualifiedLinks = partial.qualifiedLinks;
        if ('codes' in partial && partial.codes !== undefined)
            this.codes = partial.codes;
        if ('tags' in partial && partial.tags !== undefined)
            this.tags = partial.tags;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
        if ('securityMetadata' in partial)
            this.securityMetadata = partial.securityMetadata;
    }
}
export class EncryptedService {
    constructor(partial) {
        var _a;
        this.transactionId = undefined;
        this.identifier = [];
        this.contactId = undefined;
        this.subContactIds = undefined;
        this.plansOfActionIds = undefined;
        this.healthElementsIds = undefined;
        this.formIds = undefined;
        this.secretForeignKeys = [];
        this.cryptedForeignKeys = {};
        this.delegations = {};
        this.encryptionKeys = {};
        this.label = undefined;
        this.index = undefined;
        this.content = {};
        this.encryptedContent = undefined;
        this.textIndexes = {};
        this.valueDate = undefined;
        this.openingDate = undefined;
        this.closingDate = undefined;
        this.formId = undefined;
        this.created = undefined;
        this.modified = undefined;
        this.endOfLife = undefined;
        this.author = undefined;
        this.responsible = undefined;
        this.medicalLocationId = undefined;
        this.comment = undefined;
        this.status = undefined;
        this.invoicingCodes = [];
        this.notes = [];
        this.qualifiedLinks = {};
        this.codes = [];
        this.tags = [];
        this.encryptedSelf = undefined;
        this.securityMetadata = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('transactionId' in partial)
            this.transactionId = partial.transactionId;
        if ('identifier' in partial && partial.identifier !== undefined)
            this.identifier = partial.identifier;
        if ('contactId' in partial)
            this.contactId = partial.contactId;
        if ('subContactIds' in partial)
            this.subContactIds = partial.subContactIds;
        if ('plansOfActionIds' in partial)
            this.plansOfActionIds = partial.plansOfActionIds;
        if ('healthElementsIds' in partial)
            this.healthElementsIds = partial.healthElementsIds;
        if ('formIds' in partial)
            this.formIds = partial.formIds;
        if ('secretForeignKeys' in partial)
            this.secretForeignKeys = partial.secretForeignKeys;
        if ('cryptedForeignKeys' in partial && partial.cryptedForeignKeys !== undefined)
            this.cryptedForeignKeys = partial.cryptedForeignKeys;
        if ('delegations' in partial && partial.delegations !== undefined)
            this.delegations = partial.delegations;
        if ('encryptionKeys' in partial && partial.encryptionKeys !== undefined)
            this.encryptionKeys = partial.encryptionKeys;
        if ('label' in partial)
            this.label = partial.label;
        if ('index' in partial)
            this.index = partial.index;
        if ('content' in partial && partial.content !== undefined)
            this.content = partial.content;
        if ('encryptedContent' in partial)
            this.encryptedContent = partial.encryptedContent;
        if ('textIndexes' in partial && partial.textIndexes !== undefined)
            this.textIndexes = partial.textIndexes;
        if ('valueDate' in partial)
            this.valueDate = partial.valueDate;
        if ('openingDate' in partial)
            this.openingDate = partial.openingDate;
        if ('closingDate' in partial)
            this.closingDate = partial.closingDate;
        if ('formId' in partial)
            this.formId = partial.formId;
        if ('created' in partial)
            this.created = partial.created;
        if ('modified' in partial)
            this.modified = partial.modified;
        if ('endOfLife' in partial)
            this.endOfLife = partial.endOfLife;
        if ('author' in partial)
            this.author = partial.author;
        if ('responsible' in partial)
            this.responsible = partial.responsible;
        if ('medicalLocationId' in partial)
            this.medicalLocationId = partial.medicalLocationId;
        if ('comment' in partial)
            this.comment = partial.comment;
        if ('status' in partial)
            this.status = partial.status;
        if ('invoicingCodes' in partial && partial.invoicingCodes !== undefined)
            this.invoicingCodes = partial.invoicingCodes;
        if ('notes' in partial && partial.notes !== undefined)
            this.notes = partial.notes;
        if ('qualifiedLinks' in partial && partial.qualifiedLinks !== undefined)
            this.qualifiedLinks = partial.qualifiedLinks;
        if ('codes' in partial && partial.codes !== undefined)
            this.codes = partial.codes;
        if ('tags' in partial && partial.tags !== undefined)
            this.tags = partial.tags;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
        if ('securityMetadata' in partial)
            this.securityMetadata = partial.securityMetadata;
    }
}
//# sourceMappingURL=Service.mjs.map