// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class CryptoActorStub {
    constructor(partial) {
        var _a;
        this.hcPartyKeys = {};
        this.aesExchangeKeys = {};
        this.transferKeys = {};
        this.privateKeyShamirPartitions = {};
        this.publicKey = undefined;
        this.tags = [];
        this.parentId = undefined;
        this.$ktClass = 'com.icure.cardinal.sdk.model.CryptoActorStub';
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        this.rev = partial.rev;
        if ('hcPartyKeys' in partial && partial.hcPartyKeys !== undefined)
            this.hcPartyKeys = partial.hcPartyKeys;
        if ('aesExchangeKeys' in partial && partial.aesExchangeKeys !== undefined)
            this.aesExchangeKeys = partial.aesExchangeKeys;
        if ('transferKeys' in partial && partial.transferKeys !== undefined)
            this.transferKeys = partial.transferKeys;
        if ('privateKeyShamirPartitions' in partial && partial.privateKeyShamirPartitions !== undefined)
            this.privateKeyShamirPartitions = partial.privateKeyShamirPartitions;
        if ('publicKey' in partial)
            this.publicKey = partial.publicKey;
        this.publicKeysForOaepWithSha256 = partial.publicKeysForOaepWithSha256;
        if ('tags' in partial && partial.tags !== undefined)
            this.tags = partial.tags;
        if ('parentId' in partial)
            this.parentId = partial.parentId;
    }
}
//# sourceMappingURL=CryptoActorStub.mjs.map