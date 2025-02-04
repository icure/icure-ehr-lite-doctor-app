export declare class DeletedAttachment {
    couchDbAttachmentId: string | undefined;
    objectStoreAttachmentId: string | undefined;
    key: string | undefined;
    deletionTime: number | undefined;
    constructor(partial: Partial<DeletedAttachment>);
}
