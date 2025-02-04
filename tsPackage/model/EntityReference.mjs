// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class EntityReference {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.docId = undefined;
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('docId' in partial)
            this.docId = partial.docId;
    }
}
//# sourceMappingURL=EntityReference.mjs.map