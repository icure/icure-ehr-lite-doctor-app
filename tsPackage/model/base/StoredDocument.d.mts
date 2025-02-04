import { Versionable } from './Versionable.mjs';
export interface StoredDocument extends Versionable<string> {
    deletionDate: number | undefined;
}
