import { Identifiable } from './base/Identifiable.mjs';
import { Named } from './base/Named.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { DatabaseSynchronization } from './embed/DatabaseSynchronization.mjs';
export declare class Replication implements StoredDocument, Identifiable<string>, Named {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    name: string | undefined;
    context: string | undefined;
    databaseSynchronizations: Array<DatabaseSynchronization>;
    constructor(partial: Partial<Replication>);
}
