// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class IdWithMandatoryRev {
    constructor(partial) {
        var _a;
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        this.rev = partial.rev;
    }
}
//# sourceMappingURL=IdWithMandatoryRev.mjs.map