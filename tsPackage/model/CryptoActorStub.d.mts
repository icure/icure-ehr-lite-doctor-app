import { CodeStub } from './base/CodeStub.mjs';
import { CryptoActor } from './base/CryptoActor.mjs';
import { HasTags } from './base/HasTags.mjs';
import { Versionable } from './base/Versionable.mjs';
import { HexString } from './specializations/HexString.mjs';
import { SpkiHexString } from './specializations/SpkiHexString.mjs';
export declare class CryptoActorStub implements Versionable<string>, CryptoActor, HasTags {
    id: string;
    rev: string;
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
    tags: Array<CodeStub>;
    parentId: string | undefined;
    readonly $ktClass: 'com.icure.cardinal.sdk.model.CryptoActorStub';
    constructor(partial: Partial<CryptoActorStub> & Pick<CryptoActorStub, "rev" | "publicKeysForOaepWithSha256">);
}
