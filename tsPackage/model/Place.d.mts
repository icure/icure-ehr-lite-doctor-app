import { Named } from './base/Named.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { DecryptedAddress } from './embed/Address.mjs';
export declare class Place implements StoredDocument, Named {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    name: string | undefined;
    address: DecryptedAddress | undefined;
    constructor(partial: Partial<Place>);
}
