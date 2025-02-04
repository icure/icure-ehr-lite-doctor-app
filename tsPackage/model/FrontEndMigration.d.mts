import { DecryptedPropertyStub } from './PropertyStub.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { FrontEndMigrationStatus } from './embed/FrontEndMigrationStatus.mjs';
export declare class FrontEndMigration implements StoredDocument {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    name: string | undefined;
    startDate: number | undefined;
    endDate: number | undefined;
    status: FrontEndMigrationStatus | undefined;
    logs: string | undefined;
    userId: string | undefined;
    startKey: string | undefined;
    startKeyDocId: string | undefined;
    processCount: number | undefined;
    properties: Array<DecryptedPropertyStub>;
    constructor(partial: Partial<FrontEndMigration>);
}
