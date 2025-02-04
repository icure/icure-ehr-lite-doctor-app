// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class FormTemplate {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.templateLayout = undefined;
        this.rawTemplateLayout = undefined;
        this.name = undefined;
        this.guid = undefined;
        this.group = undefined;
        this.descr = undefined;
        this.disabled = undefined;
        this.specialty = undefined;
        this.author = undefined;
        this.formInstancePreferredLocation = undefined;
        this.keyboardShortcut = undefined;
        this.shortReport = undefined;
        this.mediumReport = undefined;
        this.longReport = undefined;
        this.reports = [];
        this.tags = [];
        this.layoutAttachmentId = undefined;
        this.templateLayoutAttachmentId = undefined;
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('templateLayout' in partial)
            this.templateLayout = partial.templateLayout;
        if ('rawTemplateLayout' in partial)
            this.rawTemplateLayout = partial.rawTemplateLayout;
        if ('name' in partial)
            this.name = partial.name;
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
        if ('author' in partial)
            this.author = partial.author;
        if ('formInstancePreferredLocation' in partial)
            this.formInstancePreferredLocation = partial.formInstancePreferredLocation;
        if ('keyboardShortcut' in partial)
            this.keyboardShortcut = partial.keyboardShortcut;
        if ('shortReport' in partial)
            this.shortReport = partial.shortReport;
        if ('mediumReport' in partial)
            this.mediumReport = partial.mediumReport;
        if ('longReport' in partial)
            this.longReport = partial.longReport;
        if ('reports' in partial && partial.reports !== undefined)
            this.reports = partial.reports;
        if ('tags' in partial && partial.tags !== undefined)
            this.tags = partial.tags;
        if ('layoutAttachmentId' in partial)
            this.layoutAttachmentId = partial.layoutAttachmentId;
        if ('templateLayoutAttachmentId' in partial)
            this.templateLayoutAttachmentId = partial.templateLayoutAttachmentId;
    }
}
//# sourceMappingURL=FormTemplate.mjs.map