// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class Code {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.context = undefined;
        this.type = undefined;
        this.code = undefined;
        this.version = undefined;
        this.label = undefined;
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
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('context' in partial)
            this.context = partial.context;
        if ('type' in partial)
            this.type = partial.type;
        if ('code' in partial)
            this.code = partial.code;
        if ('version' in partial)
            this.version = partial.version;
        if ('label' in partial)
            this.label = partial.label;
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
    }
}
//# sourceMappingURL=Code.mjs.map