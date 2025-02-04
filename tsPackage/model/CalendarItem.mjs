// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class DecryptedCalendarItem {
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
        this.title = undefined;
        this.calendarItemTypeId = undefined;
        this.masterCalendarItemId = undefined;
        this.patientId = undefined;
        this.important = undefined;
        this.homeVisit = undefined;
        this.phoneNumber = undefined;
        this.placeId = undefined;
        this.address = undefined;
        this.addressText = undefined;
        this.startTime = undefined;
        this.endTime = undefined;
        this.confirmationTime = undefined;
        this.cancellationTimestamp = undefined;
        this.confirmationId = undefined;
        this.duration = undefined;
        this.allDay = undefined;
        this.details = undefined;
        this.wasMigrated = undefined;
        this.agendaId = undefined;
        this.hcpId = undefined;
        this.recurrenceId = undefined;
        this.meetingTags = [];
        this.flowItem = undefined;
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
        if ('title' in partial)
            this.title = partial.title;
        if ('calendarItemTypeId' in partial)
            this.calendarItemTypeId = partial.calendarItemTypeId;
        if ('masterCalendarItemId' in partial)
            this.masterCalendarItemId = partial.masterCalendarItemId;
        if ('patientId' in partial)
            this.patientId = partial.patientId;
        if ('important' in partial)
            this.important = partial.important;
        if ('homeVisit' in partial)
            this.homeVisit = partial.homeVisit;
        if ('phoneNumber' in partial)
            this.phoneNumber = partial.phoneNumber;
        if ('placeId' in partial)
            this.placeId = partial.placeId;
        if ('address' in partial)
            this.address = partial.address;
        if ('addressText' in partial)
            this.addressText = partial.addressText;
        if ('startTime' in partial)
            this.startTime = partial.startTime;
        if ('endTime' in partial)
            this.endTime = partial.endTime;
        if ('confirmationTime' in partial)
            this.confirmationTime = partial.confirmationTime;
        if ('cancellationTimestamp' in partial)
            this.cancellationTimestamp = partial.cancellationTimestamp;
        if ('confirmationId' in partial)
            this.confirmationId = partial.confirmationId;
        if ('duration' in partial)
            this.duration = partial.duration;
        if ('allDay' in partial)
            this.allDay = partial.allDay;
        if ('details' in partial)
            this.details = partial.details;
        if ('wasMigrated' in partial)
            this.wasMigrated = partial.wasMigrated;
        if ('agendaId' in partial)
            this.agendaId = partial.agendaId;
        if ('hcpId' in partial)
            this.hcpId = partial.hcpId;
        if ('recurrenceId' in partial)
            this.recurrenceId = partial.recurrenceId;
        if ('meetingTags' in partial && partial.meetingTags !== undefined)
            this.meetingTags = partial.meetingTags;
        if ('flowItem' in partial)
            this.flowItem = partial.flowItem;
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
export class EncryptedCalendarItem {
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
        this.title = undefined;
        this.calendarItemTypeId = undefined;
        this.masterCalendarItemId = undefined;
        this.patientId = undefined;
        this.important = undefined;
        this.homeVisit = undefined;
        this.phoneNumber = undefined;
        this.placeId = undefined;
        this.address = undefined;
        this.addressText = undefined;
        this.startTime = undefined;
        this.endTime = undefined;
        this.confirmationTime = undefined;
        this.cancellationTimestamp = undefined;
        this.confirmationId = undefined;
        this.duration = undefined;
        this.allDay = undefined;
        this.details = undefined;
        this.wasMigrated = undefined;
        this.agendaId = undefined;
        this.hcpId = undefined;
        this.recurrenceId = undefined;
        this.meetingTags = [];
        this.flowItem = undefined;
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
        if ('title' in partial)
            this.title = partial.title;
        if ('calendarItemTypeId' in partial)
            this.calendarItemTypeId = partial.calendarItemTypeId;
        if ('masterCalendarItemId' in partial)
            this.masterCalendarItemId = partial.masterCalendarItemId;
        if ('patientId' in partial)
            this.patientId = partial.patientId;
        if ('important' in partial)
            this.important = partial.important;
        if ('homeVisit' in partial)
            this.homeVisit = partial.homeVisit;
        if ('phoneNumber' in partial)
            this.phoneNumber = partial.phoneNumber;
        if ('placeId' in partial)
            this.placeId = partial.placeId;
        if ('address' in partial)
            this.address = partial.address;
        if ('addressText' in partial)
            this.addressText = partial.addressText;
        if ('startTime' in partial)
            this.startTime = partial.startTime;
        if ('endTime' in partial)
            this.endTime = partial.endTime;
        if ('confirmationTime' in partial)
            this.confirmationTime = partial.confirmationTime;
        if ('cancellationTimestamp' in partial)
            this.cancellationTimestamp = partial.cancellationTimestamp;
        if ('confirmationId' in partial)
            this.confirmationId = partial.confirmationId;
        if ('duration' in partial)
            this.duration = partial.duration;
        if ('allDay' in partial)
            this.allDay = partial.allDay;
        if ('details' in partial)
            this.details = partial.details;
        if ('wasMigrated' in partial)
            this.wasMigrated = partial.wasMigrated;
        if ('agendaId' in partial)
            this.agendaId = partial.agendaId;
        if ('hcpId' in partial)
            this.hcpId = partial.hcpId;
        if ('recurrenceId' in partial)
            this.recurrenceId = partial.recurrenceId;
        if ('meetingTags' in partial && partial.meetingTags !== undefined)
            this.meetingTags = partial.meetingTags;
        if ('flowItem' in partial)
            this.flowItem = partial.flowItem;
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
//# sourceMappingURL=CalendarItem.mjs.map