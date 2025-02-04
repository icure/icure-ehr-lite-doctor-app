// auto-generated file
export class DataAttachment {
    constructor(partial) {
        this.couchDbAttachmentId = undefined;
        this.objectStoreAttachmentId = undefined;
        this.utis = [];
        if ('couchDbAttachmentId' in partial)
            this.couchDbAttachmentId = partial.couchDbAttachmentId;
        if ('objectStoreAttachmentId' in partial)
            this.objectStoreAttachmentId = partial.objectStoreAttachmentId;
        if ('utis' in partial && partial.utis !== undefined)
            this.utis = partial.utis;
    }
}
//# sourceMappingURL=DataAttachment.mjs.map