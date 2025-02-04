import { StoredDocument } from './base/StoredDocument.mjs';
export declare class Role implements StoredDocument {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    name: string | undefined;
    permissions: Array<string>;
    constructor(partial: Partial<Role>);
}
