// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class Device {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.identifiers = [];
        this.created = undefined;
        this.modified = undefined;
        this.author = undefined;
        this.responsible = undefined;
        this.tags = [];
        this.codes = [];
        this.endOfLife = undefined;
        this.medicalLocationId = undefined;
        this.externalId = undefined;
        this.name = undefined;
        this.type = undefined;
        this.brand = undefined;
        this.model = undefined;
        this.serialNumber = undefined;
        this.parentId = undefined;
        this.picture = undefined;
        this.properties = [];
        this.hcPartyKeys = {};
        this.aesExchangeKeys = {};
        this.transferKeys = {};
        this.privateKeyShamirPartitions = {};
        this.publicKey = undefined;
        this.publicKeysForOaepWithSha256 = [];
        this.$ktClass = 'com.icure.cardinal.sdk.model.Device';
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('identifiers' in partial && partial.identifiers !== undefined)
            this.identifiers = partial.identifiers;
        if ('created' in partial)
            this.created = partial.created;
        if ('modified' in partial)
            this.modified = partial.modified;
        if ('author' in partial)
            this.author = partial.author;
        if ('responsible' in partial)
            this.responsible = partial.responsible;
        if ('tags' in partial && partial.tags !== undefined)
            this.tags = partial.tags;
        if ('codes' in partial && partial.codes !== undefined)
            this.codes = partial.codes;
        if ('endOfLife' in partial)
            this.endOfLife = partial.endOfLife;
        if ('medicalLocationId' in partial)
            this.medicalLocationId = partial.medicalLocationId;
        if ('externalId' in partial)
            this.externalId = partial.externalId;
        if ('name' in partial)
            this.name = partial.name;
        if ('type' in partial)
            this.type = partial.type;
        if ('brand' in partial)
            this.brand = partial.brand;
        if ('model' in partial)
            this.model = partial.model;
        if ('serialNumber' in partial)
            this.serialNumber = partial.serialNumber;
        if ('parentId' in partial)
            this.parentId = partial.parentId;
        if ('picture' in partial)
            this.picture = partial.picture;
        if ('properties' in partial && partial.properties !== undefined)
            this.properties = partial.properties;
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
        if ('publicKeysForOaepWithSha256' in partial && partial.publicKeysForOaepWithSha256 !== undefined)
            this.publicKeysForOaepWithSha256 = partial.publicKeysForOaepWithSha256;
    }
}
//# sourceMappingURL=Device.mjs.map