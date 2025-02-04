export class DecryptedAddress {
    constructor(partial) {
        this.tags = [];
        this.codes = [];
        this.identifier = [];
        this.addressType = undefined;
        this.descr = undefined;
        this.street = undefined;
        this.houseNumber = undefined;
        this.postboxNumber = undefined;
        this.postalCode = undefined;
        this.city = undefined;
        this.state = undefined;
        this.country = undefined;
        this.note = undefined;
        this.notes = [];
        this.telecoms = [];
        this.encryptedSelf = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        if ('tags' in partial && partial.tags !== undefined)
            this.tags = partial.tags;
        if ('codes' in partial && partial.codes !== undefined)
            this.codes = partial.codes;
        if ('identifier' in partial && partial.identifier !== undefined)
            this.identifier = partial.identifier;
        if ('addressType' in partial)
            this.addressType = partial.addressType;
        if ('descr' in partial)
            this.descr = partial.descr;
        if ('street' in partial)
            this.street = partial.street;
        if ('houseNumber' in partial)
            this.houseNumber = partial.houseNumber;
        if ('postboxNumber' in partial)
            this.postboxNumber = partial.postboxNumber;
        if ('postalCode' in partial)
            this.postalCode = partial.postalCode;
        if ('city' in partial)
            this.city = partial.city;
        if ('state' in partial)
            this.state = partial.state;
        if ('country' in partial)
            this.country = partial.country;
        if ('note' in partial)
            this.note = partial.note;
        if ('notes' in partial && partial.notes !== undefined)
            this.notes = partial.notes;
        if ('telecoms' in partial && partial.telecoms !== undefined)
            this.telecoms = partial.telecoms;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
export class EncryptedAddress {
    constructor(partial) {
        this.tags = [];
        this.codes = [];
        this.identifier = [];
        this.addressType = undefined;
        this.descr = undefined;
        this.street = undefined;
        this.houseNumber = undefined;
        this.postboxNumber = undefined;
        this.postalCode = undefined;
        this.city = undefined;
        this.state = undefined;
        this.country = undefined;
        this.note = undefined;
        this.notes = [];
        this.telecoms = [];
        this.encryptedSelf = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        if ('tags' in partial && partial.tags !== undefined)
            this.tags = partial.tags;
        if ('codes' in partial && partial.codes !== undefined)
            this.codes = partial.codes;
        if ('identifier' in partial && partial.identifier !== undefined)
            this.identifier = partial.identifier;
        if ('addressType' in partial)
            this.addressType = partial.addressType;
        if ('descr' in partial)
            this.descr = partial.descr;
        if ('street' in partial)
            this.street = partial.street;
        if ('houseNumber' in partial)
            this.houseNumber = partial.houseNumber;
        if ('postboxNumber' in partial)
            this.postboxNumber = partial.postboxNumber;
        if ('postalCode' in partial)
            this.postalCode = partial.postalCode;
        if ('city' in partial)
            this.city = partial.city;
        if ('state' in partial)
            this.state = partial.state;
        if ('country' in partial)
            this.country = partial.country;
        if ('note' in partial)
            this.note = partial.note;
        if ('notes' in partial && partial.notes !== undefined)
            this.notes = partial.notes;
        if ('telecoms' in partial && partial.telecoms !== undefined)
            this.telecoms = partial.telecoms;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
//# sourceMappingURL=Address.mjs.map