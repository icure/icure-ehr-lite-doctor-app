// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class Place {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.name = undefined;
        this.address = undefined;
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('name' in partial)
            this.name = partial.name;
        if ('address' in partial)
            this.address = partial.address;
    }
}
//# sourceMappingURL=Place.mjs.map