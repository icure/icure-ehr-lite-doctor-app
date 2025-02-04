// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class IdWithRev {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
    }
}
//# sourceMappingURL=IdWithRev.mjs.map