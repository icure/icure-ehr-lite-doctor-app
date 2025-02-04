import { StoredDocument } from './base/StoredDocument.mjs';
export declare class EntityReference implements StoredDocument {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    docId: string | undefined;
    constructor(partial: Partial<EntityReference>);
}
