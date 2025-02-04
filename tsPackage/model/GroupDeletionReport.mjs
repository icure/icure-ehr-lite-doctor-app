// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class GroupDeletionReport {
    constructor(partial) {
        var _a;
        this.type = partial.type;
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        this.server = partial.server;
    }
}
//# sourceMappingURL=GroupDeletionReport.mjs.map