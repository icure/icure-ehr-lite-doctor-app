import { StoredDocument } from './base/StoredDocument.mjs';
import { DecryptedAddress } from './embed/Address.mjs';
export declare class Insurance implements StoredDocument {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    name: {
        [key: string]: string;
    };
    privateInsurance: boolean;
    hospitalisationInsurance: boolean;
    ambulatoryInsurance: boolean;
    code: string | undefined;
    agreementNumber: string | undefined;
    parent: string | undefined;
    address: DecryptedAddress;
    constructor(partial: Partial<Insurance> & Pick<Insurance, "address">);
}
