// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class FrontEndMigration {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.name = undefined;
        this.startDate = undefined;
        this.endDate = undefined;
        this.status = undefined;
        this.logs = undefined;
        this.userId = undefined;
        this.startKey = undefined;
        this.startKeyDocId = undefined;
        this.processCount = undefined;
        this.properties = [];
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('name' in partial)
            this.name = partial.name;
        if ('startDate' in partial)
            this.startDate = partial.startDate;
        if ('endDate' in partial)
            this.endDate = partial.endDate;
        if ('status' in partial)
            this.status = partial.status;
        if ('logs' in partial)
            this.logs = partial.logs;
        if ('userId' in partial)
            this.userId = partial.userId;
        if ('startKey' in partial)
            this.startKey = partial.startKey;
        if ('startKeyDocId' in partial)
            this.startKeyDocId = partial.startKeyDocId;
        if ('processCount' in partial)
            this.processCount = partial.processCount;
        if ('properties' in partial && partial.properties !== undefined)
            this.properties = partial.properties;
    }
}
//# sourceMappingURL=FrontEndMigration.mjs.map