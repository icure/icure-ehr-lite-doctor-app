import { Named } from './base/Named.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { DecryptedAddress } from './embed/Address.mjs';
export declare class MedicalLocation implements StoredDocument, Named {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    name: string | undefined;
    description: string | undefined;
    responsible: string | undefined;
    guardPost: boolean | undefined;
    cbe: string | undefined;
    bic: string | undefined;
    bankAccount: string | undefined;
    nihii: string | undefined;
    ssin: string | undefined;
    address: DecryptedAddress | undefined;
    agendaIds: Array<string>;
    options: {
        [key: string]: string;
    };
    publicInformations: {
        [key: string]: string;
    };
    constructor(partial: Partial<MedicalLocation>);
}
