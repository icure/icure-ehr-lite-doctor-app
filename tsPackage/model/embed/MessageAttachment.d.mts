import { DocumentLocation } from './DocumentLocation.mjs';
export declare class MessageAttachment {
    type: DocumentLocation | undefined;
    ids: Array<string>;
    constructor(partial: Partial<MessageAttachment>);
}
