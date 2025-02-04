import { StoredDocument } from './base/StoredDocument.mjs';
export declare class EntityTemplate implements StoredDocument {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    userId: string | undefined;
    descr: string | undefined;
    keywords: Array<string> | undefined;
    entityType: string | undefined;
    subType: string | undefined;
    defaultTemplate: boolean | undefined;
    entity: Array<any>;
    constructor(partial: Partial<EntityTemplate>);
}
