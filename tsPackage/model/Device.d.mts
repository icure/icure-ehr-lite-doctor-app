import { DecryptedPropertyStub } from './PropertyStub.mjs';
import { CodeStub } from './base/CodeStub.mjs';
import { CryptoActor } from './base/CryptoActor.mjs';
import { DataOwner } from './base/DataOwner.mjs';
import { ICureDocument } from './base/ICureDocument.mjs';
import { Identifier } from './base/Identifier.mjs';
import { Named } from './base/Named.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { HexString } from './specializations/HexString.mjs';
import { SpkiHexString } from './specializations/SpkiHexString.mjs';
export declare class Device implements StoredDocument, ICureDocument<string>, Named, CryptoActor, DataOwner {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    identifiers: Array<Identifier>;
    created: number | undefined;
    modified: number | undefined;
    author: string | undefined;
    responsible: string | undefined;
    tags: Array<CodeStub>;
    codes: Array<CodeStub>;
    endOfLife: number | undefined;
    medicalLocationId: string | undefined;
    externalId: string | undefined;
    name: string | undefined;
    type: string | undefined;
    brand: string | undefined;
    model: string | undefined;
    serialNumber: string | undefined;
    parentId: string | undefined;
    picture: Int8Array | undefined;
    properties: Array<DecryptedPropertyStub>;
    hcPartyKeys: {
        [key: string]: Array<HexString>;
    };
    aesExchangeKeys: {
        [key: string]: {
            [key: string]: {
                [key: string]: HexString;
            };
        };
    };
    transferKeys: {
        [key: string]: {
            [key: string]: HexString;
        };
    };
    privateKeyShamirPartitions: {
        [key: string]: HexString;
    };
    publicKey: SpkiHexString | undefined;
    publicKeysForOaepWithSha256: Array<SpkiHexString>;
    readonly $ktClass: 'com.icure.cardinal.sdk.model.Device';
    constructor(partial: Partial<Device>);
}
