// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class DocumentTemplate {
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
        this.attachment = undefined;
        this.documentType = undefined;
        this.mainUti = undefined;
        this.name = undefined;
        this.otherUtis = [];
        this.attachmentId = undefined;
        this.version = undefined;
        this.owner = undefined;
        this.guid = undefined;
        this.group = undefined;
        this.descr = undefined;
        this.disabled = undefined;
        this.specialty = undefined;
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
        if ('attachment' in partial)
            this.attachment = partial.attachment;
        if ('documentType' in partial)
            this.documentType = partial.documentType;
        if ('mainUti' in partial)
            this.mainUti = partial.mainUti;
        if ('name' in partial)
            this.name = partial.name;
        if ('otherUtis' in partial && partial.otherUtis !== undefined)
            this.otherUtis = partial.otherUtis;
        if ('attachmentId' in partial)
            this.attachmentId = partial.attachmentId;
        if ('version' in partial)
            this.version = partial.version;
        if ('owner' in partial)
            this.owner = partial.owner;
        if ('guid' in partial)
            this.guid = partial.guid;
        if ('group' in partial)
            this.group = partial.group;
        if ('descr' in partial)
            this.descr = partial.descr;
        if ('disabled' in partial)
            this.disabled = partial.disabled;
        if ('specialty' in partial)
            this.specialty = partial.specialty;
    }
}
//# sourceMappingURL=DocumentTemplate.mjs.map