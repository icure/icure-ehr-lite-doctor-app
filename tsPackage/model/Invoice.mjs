// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class DecryptedInvoice {
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
        this.invoiceDate = undefined;
        this.sentDate = undefined;
        this.printedDate = undefined;
        this.invoicingCodes = [];
        this.receipts = {};
        this.recipientType = undefined;
        this.recipientId = undefined;
        this.invoiceReference = undefined;
        this.thirdPartyReference = undefined;
        this.thirdPartyPaymentJustification = undefined;
        this.thirdPartyPaymentReason = undefined;
        this.reason = undefined;
        this.invoiceType = undefined;
        this.sentMediumType = undefined;
        this.interventionType = undefined;
        this.groupId = undefined;
        this.paymentType = undefined;
        this.paid = undefined;
        this.payments = undefined;
        this.gnotionNihii = undefined;
        this.gnotionSsin = undefined;
        this.gnotionLastName = undefined;
        this.gnotionFirstName = undefined;
        this.gnotionCdHcParty = undefined;
        this.invoicePeriod = undefined;
        this.careProviderType = undefined;
        this.internshipNihii = undefined;
        this.internshipSsin = undefined;
        this.internshipLastName = undefined;
        this.internshipFirstName = undefined;
        this.internshipCdHcParty = undefined;
        this.internshipCbe = undefined;
        this.supervisorNihii = undefined;
        this.supervisorSsin = undefined;
        this.supervisorLastName = undefined;
        this.supervisorFirstName = undefined;
        this.supervisorCdHcParty = undefined;
        this.supervisorCbe = undefined;
        this.error = undefined;
        this.encounterLocationName = undefined;
        this.encounterLocationNihii = undefined;
        this.encounterLocationNorm = undefined;
        this.longDelayJustification = undefined;
        this.correctiveInvoiceId = undefined;
        this.correctedInvoiceId = undefined;
        this.creditNote = undefined;
        this.creditNoteRelatedInvoiceId = undefined;
        this.idDocument = undefined;
        this.admissionDate = undefined;
        this.locationNihii = undefined;
        this.locationService = undefined;
        this.cancelReason = undefined;
        this.cancelDate = undefined;
        this.options = {};
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
        if ('invoiceDate' in partial)
            this.invoiceDate = partial.invoiceDate;
        if ('sentDate' in partial)
            this.sentDate = partial.sentDate;
        if ('printedDate' in partial)
            this.printedDate = partial.printedDate;
        if ('invoicingCodes' in partial && partial.invoicingCodes !== undefined)
            this.invoicingCodes = partial.invoicingCodes;
        if ('receipts' in partial && partial.receipts !== undefined)
            this.receipts = partial.receipts;
        if ('recipientType' in partial)
            this.recipientType = partial.recipientType;
        if ('recipientId' in partial)
            this.recipientId = partial.recipientId;
        if ('invoiceReference' in partial)
            this.invoiceReference = partial.invoiceReference;
        if ('thirdPartyReference' in partial)
            this.thirdPartyReference = partial.thirdPartyReference;
        if ('thirdPartyPaymentJustification' in partial)
            this.thirdPartyPaymentJustification = partial.thirdPartyPaymentJustification;
        if ('thirdPartyPaymentReason' in partial)
            this.thirdPartyPaymentReason = partial.thirdPartyPaymentReason;
        if ('reason' in partial)
            this.reason = partial.reason;
        if ('invoiceType' in partial)
            this.invoiceType = partial.invoiceType;
        if ('sentMediumType' in partial)
            this.sentMediumType = partial.sentMediumType;
        if ('interventionType' in partial)
            this.interventionType = partial.interventionType;
        if ('groupId' in partial)
            this.groupId = partial.groupId;
        if ('paymentType' in partial)
            this.paymentType = partial.paymentType;
        if ('paid' in partial)
            this.paid = partial.paid;
        if ('payments' in partial)
            this.payments = partial.payments;
        if ('gnotionNihii' in partial)
            this.gnotionNihii = partial.gnotionNihii;
        if ('gnotionSsin' in partial)
            this.gnotionSsin = partial.gnotionSsin;
        if ('gnotionLastName' in partial)
            this.gnotionLastName = partial.gnotionLastName;
        if ('gnotionFirstName' in partial)
            this.gnotionFirstName = partial.gnotionFirstName;
        if ('gnotionCdHcParty' in partial)
            this.gnotionCdHcParty = partial.gnotionCdHcParty;
        if ('invoicePeriod' in partial)
            this.invoicePeriod = partial.invoicePeriod;
        if ('careProviderType' in partial)
            this.careProviderType = partial.careProviderType;
        if ('internshipNihii' in partial)
            this.internshipNihii = partial.internshipNihii;
        if ('internshipSsin' in partial)
            this.internshipSsin = partial.internshipSsin;
        if ('internshipLastName' in partial)
            this.internshipLastName = partial.internshipLastName;
        if ('internshipFirstName' in partial)
            this.internshipFirstName = partial.internshipFirstName;
        if ('internshipCdHcParty' in partial)
            this.internshipCdHcParty = partial.internshipCdHcParty;
        if ('internshipCbe' in partial)
            this.internshipCbe = partial.internshipCbe;
        if ('supervisorNihii' in partial)
            this.supervisorNihii = partial.supervisorNihii;
        if ('supervisorSsin' in partial)
            this.supervisorSsin = partial.supervisorSsin;
        if ('supervisorLastName' in partial)
            this.supervisorLastName = partial.supervisorLastName;
        if ('supervisorFirstName' in partial)
            this.supervisorFirstName = partial.supervisorFirstName;
        if ('supervisorCdHcParty' in partial)
            this.supervisorCdHcParty = partial.supervisorCdHcParty;
        if ('supervisorCbe' in partial)
            this.supervisorCbe = partial.supervisorCbe;
        if ('error' in partial)
            this.error = partial.error;
        if ('encounterLocationName' in partial)
            this.encounterLocationName = partial.encounterLocationName;
        if ('encounterLocationNihii' in partial)
            this.encounterLocationNihii = partial.encounterLocationNihii;
        if ('encounterLocationNorm' in partial)
            this.encounterLocationNorm = partial.encounterLocationNorm;
        if ('longDelayJustification' in partial)
            this.longDelayJustification = partial.longDelayJustification;
        if ('correctiveInvoiceId' in partial)
            this.correctiveInvoiceId = partial.correctiveInvoiceId;
        if ('correctedInvoiceId' in partial)
            this.correctedInvoiceId = partial.correctedInvoiceId;
        if ('creditNote' in partial)
            this.creditNote = partial.creditNote;
        if ('creditNoteRelatedInvoiceId' in partial)
            this.creditNoteRelatedInvoiceId = partial.creditNoteRelatedInvoiceId;
        if ('idDocument' in partial)
            this.idDocument = partial.idDocument;
        if ('admissionDate' in partial)
            this.admissionDate = partial.admissionDate;
        if ('locationNihii' in partial)
            this.locationNihii = partial.locationNihii;
        if ('locationService' in partial)
            this.locationService = partial.locationService;
        if ('cancelReason' in partial)
            this.cancelReason = partial.cancelReason;
        if ('cancelDate' in partial)
            this.cancelDate = partial.cancelDate;
        if ('options' in partial && partial.options !== undefined)
            this.options = partial.options;
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
export class EncryptedInvoice {
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
        this.invoiceDate = undefined;
        this.sentDate = undefined;
        this.printedDate = undefined;
        this.invoicingCodes = [];
        this.receipts = {};
        this.recipientType = undefined;
        this.recipientId = undefined;
        this.invoiceReference = undefined;
        this.thirdPartyReference = undefined;
        this.thirdPartyPaymentJustification = undefined;
        this.thirdPartyPaymentReason = undefined;
        this.reason = undefined;
        this.invoiceType = undefined;
        this.sentMediumType = undefined;
        this.interventionType = undefined;
        this.groupId = undefined;
        this.paymentType = undefined;
        this.paid = undefined;
        this.payments = undefined;
        this.gnotionNihii = undefined;
        this.gnotionSsin = undefined;
        this.gnotionLastName = undefined;
        this.gnotionFirstName = undefined;
        this.gnotionCdHcParty = undefined;
        this.invoicePeriod = undefined;
        this.careProviderType = undefined;
        this.internshipNihii = undefined;
        this.internshipSsin = undefined;
        this.internshipLastName = undefined;
        this.internshipFirstName = undefined;
        this.internshipCdHcParty = undefined;
        this.internshipCbe = undefined;
        this.supervisorNihii = undefined;
        this.supervisorSsin = undefined;
        this.supervisorLastName = undefined;
        this.supervisorFirstName = undefined;
        this.supervisorCdHcParty = undefined;
        this.supervisorCbe = undefined;
        this.error = undefined;
        this.encounterLocationName = undefined;
        this.encounterLocationNihii = undefined;
        this.encounterLocationNorm = undefined;
        this.longDelayJustification = undefined;
        this.correctiveInvoiceId = undefined;
        this.correctedInvoiceId = undefined;
        this.creditNote = undefined;
        this.creditNoteRelatedInvoiceId = undefined;
        this.idDocument = undefined;
        this.admissionDate = undefined;
        this.locationNihii = undefined;
        this.locationService = undefined;
        this.cancelReason = undefined;
        this.cancelDate = undefined;
        this.options = {};
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
        if ('invoiceDate' in partial)
            this.invoiceDate = partial.invoiceDate;
        if ('sentDate' in partial)
            this.sentDate = partial.sentDate;
        if ('printedDate' in partial)
            this.printedDate = partial.printedDate;
        if ('invoicingCodes' in partial && partial.invoicingCodes !== undefined)
            this.invoicingCodes = partial.invoicingCodes;
        if ('receipts' in partial && partial.receipts !== undefined)
            this.receipts = partial.receipts;
        if ('recipientType' in partial)
            this.recipientType = partial.recipientType;
        if ('recipientId' in partial)
            this.recipientId = partial.recipientId;
        if ('invoiceReference' in partial)
            this.invoiceReference = partial.invoiceReference;
        if ('thirdPartyReference' in partial)
            this.thirdPartyReference = partial.thirdPartyReference;
        if ('thirdPartyPaymentJustification' in partial)
            this.thirdPartyPaymentJustification = partial.thirdPartyPaymentJustification;
        if ('thirdPartyPaymentReason' in partial)
            this.thirdPartyPaymentReason = partial.thirdPartyPaymentReason;
        if ('reason' in partial)
            this.reason = partial.reason;
        if ('invoiceType' in partial)
            this.invoiceType = partial.invoiceType;
        if ('sentMediumType' in partial)
            this.sentMediumType = partial.sentMediumType;
        if ('interventionType' in partial)
            this.interventionType = partial.interventionType;
        if ('groupId' in partial)
            this.groupId = partial.groupId;
        if ('paymentType' in partial)
            this.paymentType = partial.paymentType;
        if ('paid' in partial)
            this.paid = partial.paid;
        if ('payments' in partial)
            this.payments = partial.payments;
        if ('gnotionNihii' in partial)
            this.gnotionNihii = partial.gnotionNihii;
        if ('gnotionSsin' in partial)
            this.gnotionSsin = partial.gnotionSsin;
        if ('gnotionLastName' in partial)
            this.gnotionLastName = partial.gnotionLastName;
        if ('gnotionFirstName' in partial)
            this.gnotionFirstName = partial.gnotionFirstName;
        if ('gnotionCdHcParty' in partial)
            this.gnotionCdHcParty = partial.gnotionCdHcParty;
        if ('invoicePeriod' in partial)
            this.invoicePeriod = partial.invoicePeriod;
        if ('careProviderType' in partial)
            this.careProviderType = partial.careProviderType;
        if ('internshipNihii' in partial)
            this.internshipNihii = partial.internshipNihii;
        if ('internshipSsin' in partial)
            this.internshipSsin = partial.internshipSsin;
        if ('internshipLastName' in partial)
            this.internshipLastName = partial.internshipLastName;
        if ('internshipFirstName' in partial)
            this.internshipFirstName = partial.internshipFirstName;
        if ('internshipCdHcParty' in partial)
            this.internshipCdHcParty = partial.internshipCdHcParty;
        if ('internshipCbe' in partial)
            this.internshipCbe = partial.internshipCbe;
        if ('supervisorNihii' in partial)
            this.supervisorNihii = partial.supervisorNihii;
        if ('supervisorSsin' in partial)
            this.supervisorSsin = partial.supervisorSsin;
        if ('supervisorLastName' in partial)
            this.supervisorLastName = partial.supervisorLastName;
        if ('supervisorFirstName' in partial)
            this.supervisorFirstName = partial.supervisorFirstName;
        if ('supervisorCdHcParty' in partial)
            this.supervisorCdHcParty = partial.supervisorCdHcParty;
        if ('supervisorCbe' in partial)
            this.supervisorCbe = partial.supervisorCbe;
        if ('error' in partial)
            this.error = partial.error;
        if ('encounterLocationName' in partial)
            this.encounterLocationName = partial.encounterLocationName;
        if ('encounterLocationNihii' in partial)
            this.encounterLocationNihii = partial.encounterLocationNihii;
        if ('encounterLocationNorm' in partial)
            this.encounterLocationNorm = partial.encounterLocationNorm;
        if ('longDelayJustification' in partial)
            this.longDelayJustification = partial.longDelayJustification;
        if ('correctiveInvoiceId' in partial)
            this.correctiveInvoiceId = partial.correctiveInvoiceId;
        if ('correctedInvoiceId' in partial)
            this.correctedInvoiceId = partial.correctedInvoiceId;
        if ('creditNote' in partial)
            this.creditNote = partial.creditNote;
        if ('creditNoteRelatedInvoiceId' in partial)
            this.creditNoteRelatedInvoiceId = partial.creditNoteRelatedInvoiceId;
        if ('idDocument' in partial)
            this.idDocument = partial.idDocument;
        if ('admissionDate' in partial)
            this.admissionDate = partial.admissionDate;
        if ('locationNihii' in partial)
            this.locationNihii = partial.locationNihii;
        if ('locationService' in partial)
            this.locationService = partial.locationService;
        if ('cancelReason' in partial)
            this.cancelReason = partial.cancelReason;
        if ('cancelDate' in partial)
            this.cancelDate = partial.cancelDate;
        if ('options' in partial && partial.options !== undefined)
            this.options = partial.options;
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
//# sourceMappingURL=Invoice.mjs.map