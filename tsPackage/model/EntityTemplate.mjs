// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class EntityTemplate {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.userId = undefined;
        this.descr = undefined;
        this.keywords = undefined;
        this.entityType = undefined;
        this.subType = undefined;
        this.defaultTemplate = undefined;
        this.entity = [];
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('userId' in partial)
            this.userId = partial.userId;
        if ('descr' in partial)
            this.descr = partial.descr;
        if ('keywords' in partial)
            this.keywords = partial.keywords;
        if ('entityType' in partial)
            this.entityType = partial.entityType;
        if ('subType' in partial)
            this.subType = partial.subType;
        if ('defaultTemplate' in partial)
            this.defaultTemplate = partial.defaultTemplate;
        if ('entity' in partial && partial.entity !== undefined)
            this.entity = partial.entity;
    }
}
//# sourceMappingURL=EntityTemplate.mjs.map