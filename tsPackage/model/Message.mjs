// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class DecryptedMessage {
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
        this.fromAddress = undefined;
        this.fromHealthcarePartyId = undefined;
        this.formId = undefined;
        this.status = undefined;
        this.recipientsType = undefined;
        this.recipients = [];
        this.toAddresses = [];
        this.received = undefined;
        this.sent = undefined;
        this.metas = {};
        this.readStatus = {};
        this.messageAttachments = [];
        this.transportGuid = undefined;
        this.remark = undefined;
        this.conversationGuid = undefined;
        this.subject = undefined;
        this.invoiceIds = [];
        this.parentId = undefined;
        this.externalRef = undefined;
        this.unassignedResults = [];
        this.assignedResults = {};
        this.senderReferences = {};
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
        if ('fromAddress' in partial)
            this.fromAddress = partial.fromAddress;
        if ('fromHealthcarePartyId' in partial)
            this.fromHealthcarePartyId = partial.fromHealthcarePartyId;
        if ('formId' in partial)
            this.formId = partial.formId;
        if ('status' in partial)
            this.status = partial.status;
        if ('recipientsType' in partial)
            this.recipientsType = partial.recipientsType;
        if ('recipients' in partial && partial.recipients !== undefined)
            this.recipients = partial.recipients;
        if ('toAddresses' in partial && partial.toAddresses !== undefined)
            this.toAddresses = partial.toAddresses;
        if ('received' in partial)
            this.received = partial.received;
        if ('sent' in partial)
            this.sent = partial.sent;
        if ('metas' in partial && partial.metas !== undefined)
            this.metas = partial.metas;
        if ('readStatus' in partial && partial.readStatus !== undefined)
            this.readStatus = partial.readStatus;
        if ('messageAttachments' in partial && partial.messageAttachments !== undefined)
            this.messageAttachments = partial.messageAttachments;
        if ('transportGuid' in partial)
            this.transportGuid = partial.transportGuid;
        if ('remark' in partial)
            this.remark = partial.remark;
        if ('conversationGuid' in partial)
            this.conversationGuid = partial.conversationGuid;
        if ('subject' in partial)
            this.subject = partial.subject;
        if ('invoiceIds' in partial && partial.invoiceIds !== undefined)
            this.invoiceIds = partial.invoiceIds;
        if ('parentId' in partial)
            this.parentId = partial.parentId;
        if ('externalRef' in partial)
            this.externalRef = partial.externalRef;
        if ('unassignedResults' in partial && partial.unassignedResults !== undefined)
            this.unassignedResults = partial.unassignedResults;
        if ('assignedResults' in partial && partial.assignedResults !== undefined)
            this.assignedResults = partial.assignedResults;
        if ('senderReferences' in partial && partial.senderReferences !== undefined)
            this.senderReferences = partial.senderReferences;
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
export class EncryptedMessage {
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
        this.fromAddress = undefined;
        this.fromHealthcarePartyId = undefined;
        this.formId = undefined;
        this.status = undefined;
        this.recipientsType = undefined;
        this.recipients = [];
        this.toAddresses = [];
        this.received = undefined;
        this.sent = undefined;
        this.metas = {};
        this.readStatus = {};
        this.messageAttachments = [];
        this.transportGuid = undefined;
        this.remark = undefined;
        this.conversationGuid = undefined;
        this.subject = undefined;
        this.invoiceIds = [];
        this.parentId = undefined;
        this.externalRef = undefined;
        this.unassignedResults = [];
        this.assignedResults = {};
        this.senderReferences = {};
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
        if ('fromAddress' in partial)
            this.fromAddress = partial.fromAddress;
        if ('fromHealthcarePartyId' in partial)
            this.fromHealthcarePartyId = partial.fromHealthcarePartyId;
        if ('formId' in partial)
            this.formId = partial.formId;
        if ('status' in partial)
            this.status = partial.status;
        if ('recipientsType' in partial)
            this.recipientsType = partial.recipientsType;
        if ('recipients' in partial && partial.recipients !== undefined)
            this.recipients = partial.recipients;
        if ('toAddresses' in partial && partial.toAddresses !== undefined)
            this.toAddresses = partial.toAddresses;
        if ('received' in partial)
            this.received = partial.received;
        if ('sent' in partial)
            this.sent = partial.sent;
        if ('metas' in partial && partial.metas !== undefined)
            this.metas = partial.metas;
        if ('readStatus' in partial && partial.readStatus !== undefined)
            this.readStatus = partial.readStatus;
        if ('messageAttachments' in partial && partial.messageAttachments !== undefined)
            this.messageAttachments = partial.messageAttachments;
        if ('transportGuid' in partial)
            this.transportGuid = partial.transportGuid;
        if ('remark' in partial)
            this.remark = partial.remark;
        if ('conversationGuid' in partial)
            this.conversationGuid = partial.conversationGuid;
        if ('subject' in partial)
            this.subject = partial.subject;
        if ('invoiceIds' in partial && partial.invoiceIds !== undefined)
            this.invoiceIds = partial.invoiceIds;
        if ('parentId' in partial)
            this.parentId = partial.parentId;
        if ('externalRef' in partial)
            this.externalRef = partial.externalRef;
        if ('unassignedResults' in partial && partial.unassignedResults !== undefined)
            this.unassignedResults = partial.unassignedResults;
        if ('assignedResults' in partial && partial.assignedResults !== undefined)
            this.assignedResults = partial.assignedResults;
        if ('senderReferences' in partial && partial.senderReferences !== undefined)
            this.senderReferences = partial.senderReferences;
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
//# sourceMappingURL=Message.mjs.map