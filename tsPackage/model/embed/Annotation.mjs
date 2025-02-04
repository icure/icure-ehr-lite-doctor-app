// auto-generated file
import { randomUuid } from '../../utils/Id.mjs';
export class Annotation {
    constructor(partial) {
        var _a;
        this.author = undefined;
        this.created = undefined;
        this.modified = undefined;
        this.text = undefined;
        this.markdown = {};
        this.location = undefined;
        this.confidential = undefined;
        this.tags = [];
        this.encryptedSelf = undefined;
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('author' in partial)
            this.author = partial.author;
        if ('created' in partial)
            this.created = partial.created;
        if ('modified' in partial)
            this.modified = partial.modified;
        if ('text' in partial)
            this.text = partial.text;
        if ('markdown' in partial && partial.markdown !== undefined)
            this.markdown = partial.markdown;
        if ('location' in partial)
            this.location = partial.location;
        if ('confidential' in partial)
            this.confidential = partial.confidential;
        if ('tags' in partial && partial.tags !== undefined)
            this.tags = partial.tags;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
//# sourceMappingURL=Annotation.mjs.map