// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class MedicalLocation {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.name = undefined;
        this.description = undefined;
        this.responsible = undefined;
        this.guardPost = undefined;
        this.cbe = undefined;
        this.bic = undefined;
        this.bankAccount = undefined;
        this.nihii = undefined;
        this.ssin = undefined;
        this.address = undefined;
        this.agendaIds = [];
        this.options = {};
        this.publicInformations = {};
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('name' in partial)
            this.name = partial.name;
        if ('description' in partial)
            this.description = partial.description;
        if ('responsible' in partial)
            this.responsible = partial.responsible;
        if ('guardPost' in partial)
            this.guardPost = partial.guardPost;
        if ('cbe' in partial)
            this.cbe = partial.cbe;
        if ('bic' in partial)
            this.bic = partial.bic;
        if ('bankAccount' in partial)
            this.bankAccount = partial.bankAccount;
        if ('nihii' in partial)
            this.nihii = partial.nihii;
        if ('ssin' in partial)
            this.ssin = partial.ssin;
        if ('address' in partial)
            this.address = partial.address;
        if ('agendaIds' in partial && partial.agendaIds !== undefined)
            this.agendaIds = partial.agendaIds;
        if ('options' in partial && partial.options !== undefined)
            this.options = partial.options;
        if ('publicInformations' in partial && partial.publicInformations !== undefined)
            this.publicInformations = partial.publicInformations;
    }
}
//# sourceMappingURL=MedicalLocation.mjs.map