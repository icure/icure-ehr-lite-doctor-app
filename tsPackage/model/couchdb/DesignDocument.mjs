// auto-generated file
import { randomUuid } from '../../utils/Id.mjs';
export class DesignDocument {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.revHistory = {};
        this.language = undefined;
        this.views = {};
        this.lists = {};
        this.shows = {};
        this.updateHandlers = undefined;
        this.filters = {};
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('revHistory' in partial && partial.revHistory !== undefined)
            this.revHistory = partial.revHistory;
        if ('language' in partial)
            this.language = partial.language;
        if ('views' in partial && partial.views !== undefined)
            this.views = partial.views;
        if ('lists' in partial && partial.lists !== undefined)
            this.lists = partial.lists;
        if ('shows' in partial && partial.shows !== undefined)
            this.shows = partial.shows;
        if ('updateHandlers' in partial)
            this.updateHandlers = partial.updateHandlers;
        if ('filters' in partial && partial.filters !== undefined)
            this.filters = partial.filters;
    }
}
//# sourceMappingURL=DesignDocument.mjs.map