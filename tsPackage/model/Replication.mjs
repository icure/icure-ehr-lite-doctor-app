// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class Replication {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.name = undefined;
        this.context = undefined;
        this.databaseSynchronizations = [];
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('name' in partial)
            this.name = partial.name;
        if ('context' in partial)
            this.context = partial.context;
        if ('databaseSynchronizations' in partial && partial.databaseSynchronizations !== undefined)
            this.databaseSynchronizations = partial.databaseSynchronizations;
    }
}
//# sourceMappingURL=Replication.mjs.map