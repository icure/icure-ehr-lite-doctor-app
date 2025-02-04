export class MessageAttachment {
    constructor(partial) {
        this.type = undefined;
        this.ids = [];
        if ('type' in partial)
            this.type = partial.type;
        if ('ids' in partial && partial.ids !== undefined)
            this.ids = partial.ids;
    }
}
//# sourceMappingURL=MessageAttachment.mjs.map