// auto-generated file
import { randomUuid } from '../../utils/Id.mjs';
export class DecryptedEpisode {
    constructor(partial) {
        var _a;
        this.name = undefined;
        this.comment = undefined;
        this.startDate = undefined;
        this.endDate = undefined;
        this.encryptedSelf = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('name' in partial)
            this.name = partial.name;
        if ('comment' in partial)
            this.comment = partial.comment;
        if ('startDate' in partial)
            this.startDate = partial.startDate;
        if ('endDate' in partial)
            this.endDate = partial.endDate;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
export class EncryptedEpisode {
    constructor(partial) {
        var _a;
        this.name = undefined;
        this.comment = undefined;
        this.startDate = undefined;
        this.endDate = undefined;
        this.encryptedSelf = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('name' in partial)
            this.name = partial.name;
        if ('comment' in partial)
            this.comment = partial.comment;
        if ('startDate' in partial)
            this.startDate = partial.startDate;
        if ('endDate' in partial)
            this.endDate = partial.endDate;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
//# sourceMappingURL=Episode.mjs.map