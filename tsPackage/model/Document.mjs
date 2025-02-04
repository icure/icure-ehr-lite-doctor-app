// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class DecryptedDocument {
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
        this.documentLocation = undefined;
        this.documentType = undefined;
        this.documentStatus = undefined;
        this.externalUri = undefined;
        this.name = undefined;
        this.version = undefined;
        this.storedICureDocumentId = undefined;
        this.externalUuid = undefined;
        this.size = undefined;
        this.hash = undefined;
        this.openingContactId = undefined;
        this.attachmentId = undefined;
        this.objectStoreReference = undefined;
        this.mainUti = undefined;
        this.otherUtis = [];
        this.secondaryAttachments = {};
        this.deletedAttachments = [];
        this.encryptedAttachment = undefined;
        this.decryptedAttachment = undefined;
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
        if ('documentLocation' in partial)
            this.documentLocation = partial.documentLocation;
        if ('documentType' in partial)
            this.documentType = partial.documentType;
        if ('documentStatus' in partial)
            this.documentStatus = partial.documentStatus;
        if ('externalUri' in partial)
            this.externalUri = partial.externalUri;
        if ('name' in partial)
            this.name = partial.name;
        if ('version' in partial)
            this.version = partial.version;
        if ('storedICureDocumentId' in partial)
            this.storedICureDocumentId = partial.storedICureDocumentId;
        if ('externalUuid' in partial)
            this.externalUuid = partial.externalUuid;
        if ('size' in partial)
            this.size = partial.size;
        if ('hash' in partial)
            this.hash = partial.hash;
        if ('openingContactId' in partial)
            this.openingContactId = partial.openingContactId;
        if ('attachmentId' in partial)
            this.attachmentId = partial.attachmentId;
        if ('objectStoreReference' in partial)
            this.objectStoreReference = partial.objectStoreReference;
        if ('mainUti' in partial)
            this.mainUti = partial.mainUti;
        if ('otherUtis' in partial && partial.otherUtis !== undefined)
            this.otherUtis = partial.otherUtis;
        if ('secondaryAttachments' in partial && partial.secondaryAttachments !== undefined)
            this.secondaryAttachments = partial.secondaryAttachments;
        if ('deletedAttachments' in partial && partial.deletedAttachments !== undefined)
            this.deletedAttachments = partial.deletedAttachments;
        if ('encryptedAttachment' in partial)
            this.encryptedAttachment = partial.encryptedAttachment;
        if ('decryptedAttachment' in partial)
            this.decryptedAttachment = partial.decryptedAttachment;
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
export class EncryptedDocument {
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
        this.documentLocation = undefined;
        this.documentType = undefined;
        this.documentStatus = undefined;
        this.externalUri = undefined;
        this.name = undefined;
        this.version = undefined;
        this.storedICureDocumentId = undefined;
        this.externalUuid = undefined;
        this.size = undefined;
        this.hash = undefined;
        this.openingContactId = undefined;
        this.attachmentId = undefined;
        this.objectStoreReference = undefined;
        this.mainUti = undefined;
        this.otherUtis = [];
        this.secondaryAttachments = {};
        this.deletedAttachments = [];
        this.encryptedAttachment = undefined;
        this.decryptedAttachment = undefined;
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
        if ('documentLocation' in partial)
            this.documentLocation = partial.documentLocation;
        if ('documentType' in partial)
            this.documentType = partial.documentType;
        if ('documentStatus' in partial)
            this.documentStatus = partial.documentStatus;
        if ('externalUri' in partial)
            this.externalUri = partial.externalUri;
        if ('name' in partial)
            this.name = partial.name;
        if ('version' in partial)
            this.version = partial.version;
        if ('storedICureDocumentId' in partial)
            this.storedICureDocumentId = partial.storedICureDocumentId;
        if ('externalUuid' in partial)
            this.externalUuid = partial.externalUuid;
        if ('size' in partial)
            this.size = partial.size;
        if ('hash' in partial)
            this.hash = partial.hash;
        if ('openingContactId' in partial)
            this.openingContactId = partial.openingContactId;
        if ('attachmentId' in partial)
            this.attachmentId = partial.attachmentId;
        if ('objectStoreReference' in partial)
            this.objectStoreReference = partial.objectStoreReference;
        if ('mainUti' in partial)
            this.mainUti = partial.mainUti;
        if ('otherUtis' in partial && partial.otherUtis !== undefined)
            this.otherUtis = partial.otherUtis;
        if ('secondaryAttachments' in partial && partial.secondaryAttachments !== undefined)
            this.secondaryAttachments = partial.secondaryAttachments;
        if ('deletedAttachments' in partial && partial.deletedAttachments !== undefined)
            this.deletedAttachments = partial.deletedAttachments;
        if ('encryptedAttachment' in partial)
            this.encryptedAttachment = partial.encryptedAttachment;
        if ('decryptedAttachment' in partial)
            this.decryptedAttachment = partial.decryptedAttachment;
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
//# sourceMappingURL=Document.mjs.map