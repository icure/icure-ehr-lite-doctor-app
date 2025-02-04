// auto-generated file
import { randomUuid } from '../../utils/Id.mjs';
export class DatabaseInfo {
    constructor(partial) {
        var _a;
        this.updateSeq = undefined;
        this.fileSize = undefined;
        this.externalSize = undefined;
        this.activeSize = undefined;
        this.docs = undefined;
        this.q = undefined;
        this.n = undefined;
        this.w = undefined;
        this.r = undefined;
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('updateSeq' in partial)
            this.updateSeq = partial.updateSeq;
        if ('fileSize' in partial)
            this.fileSize = partial.fileSize;
        if ('externalSize' in partial)
            this.externalSize = partial.externalSize;
        if ('activeSize' in partial)
            this.activeSize = partial.activeSize;
        if ('docs' in partial)
            this.docs = partial.docs;
        if ('q' in partial)
            this.q = partial.q;
        if ('n' in partial)
            this.n = partial.n;
        if ('w' in partial)
            this.w = partial.w;
        if ('r' in partial)
            this.r = partial.r;
    }
}
//# sourceMappingURL=DatabaseInfo.mjs.map