// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class Tarification {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.label = undefined;
        this.context = undefined;
        this.type = undefined;
        this.code = undefined;
        this.version = undefined;
        this.author = undefined;
        this.regions = [];
        this.periodicity = [];
        this.level = undefined;
        this.links = [];
        this.qualifiedLinks = {};
        this.flags = [];
        this.searchTerms = {};
        this.data = undefined;
        this.appendices = {};
        this.disabled = false;
        this.valorisations = [];
        this.category = {};
        this.consultationCode = undefined;
        this.hasRelatedCode = undefined;
        this.needsPrescriber = undefined;
        this.relatedCodes = [];
        this.ngroup = undefined;
        this.letterValues = [];
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('label' in partial)
            this.label = partial.label;
        if ('context' in partial)
            this.context = partial.context;
        if ('type' in partial)
            this.type = partial.type;
        if ('code' in partial)
            this.code = partial.code;
        if ('version' in partial)
            this.version = partial.version;
        if ('author' in partial)
            this.author = partial.author;
        if ('regions' in partial && partial.regions !== undefined)
            this.regions = partial.regions;
        if ('periodicity' in partial && partial.periodicity !== undefined)
            this.periodicity = partial.periodicity;
        if ('level' in partial)
            this.level = partial.level;
        if ('links' in partial && partial.links !== undefined)
            this.links = partial.links;
        if ('qualifiedLinks' in partial && partial.qualifiedLinks !== undefined)
            this.qualifiedLinks = partial.qualifiedLinks;
        if ('flags' in partial && partial.flags !== undefined)
            this.flags = partial.flags;
        if ('searchTerms' in partial && partial.searchTerms !== undefined)
            this.searchTerms = partial.searchTerms;
        if ('data' in partial)
            this.data = partial.data;
        if ('appendices' in partial && partial.appendices !== undefined)
            this.appendices = partial.appendices;
        if ('disabled' in partial && partial.disabled !== undefined)
            this.disabled = partial.disabled;
        if ('valorisations' in partial && partial.valorisations !== undefined)
            this.valorisations = partial.valorisations;
        if ('category' in partial && partial.category !== undefined)
            this.category = partial.category;
        if ('consultationCode' in partial)
            this.consultationCode = partial.consultationCode;
        if ('hasRelatedCode' in partial)
            this.hasRelatedCode = partial.hasRelatedCode;
        if ('needsPrescriber' in partial)
            this.needsPrescriber = partial.needsPrescriber;
        if ('relatedCodes' in partial && partial.relatedCodes !== undefined)
            this.relatedCodes = partial.relatedCodes;
        if ('ngroup' in partial)
            this.ngroup = partial.ngroup;
        if ('letterValues' in partial && partial.letterValues !== undefined)
            this.letterValues = partial.letterValues;
    }
}
//# sourceMappingURL=Tarification.mjs.map