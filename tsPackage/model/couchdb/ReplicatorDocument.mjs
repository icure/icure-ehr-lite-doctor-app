// auto-generated file
import { randomUuid } from '../../utils/Id.mjs';
export class ReplicatorDocument {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.source = undefined;
        this.target = undefined;
        this.owner = undefined;
        this.create_target = undefined;
        this.continuous = undefined;
        this.doc_ids = undefined;
        this.replicationState = undefined;
        this.replicationStateTime = undefined;
        this.replicationStats = undefined;
        this.errorCount = undefined;
        this.revsInfo = undefined;
        this.revHistory = undefined;
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('source' in partial)
            this.source = partial.source;
        if ('target' in partial)
            this.target = partial.target;
        if ('owner' in partial)
            this.owner = partial.owner;
        if ('create_target' in partial)
            this.create_target = partial.create_target;
        if ('continuous' in partial)
            this.continuous = partial.continuous;
        if ('doc_ids' in partial)
            this.doc_ids = partial.doc_ids;
        if ('replicationState' in partial)
            this.replicationState = partial.replicationState;
        if ('replicationStateTime' in partial)
            this.replicationStateTime = partial.replicationStateTime;
        if ('replicationStats' in partial)
            this.replicationStats = partial.replicationStats;
        if ('errorCount' in partial)
            this.errorCount = partial.errorCount;
        if ('revsInfo' in partial)
            this.revsInfo = partial.revsInfo;
        if ('revHistory' in partial)
            this.revHistory = partial.revHistory;
    }
}
//# sourceMappingURL=ReplicatorDocument.mjs.map