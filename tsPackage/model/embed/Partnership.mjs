export class Partnership {
    constructor(partial) {
        this.type = undefined;
        this.status = undefined;
        this.partnerId = undefined;
        this.meToOtherRelationshipDescription = undefined;
        this.otherToMeRelationshipDescription = undefined;
        if ('type' in partial)
            this.type = partial.type;
        if ('status' in partial)
            this.status = partial.status;
        if ('partnerId' in partial)
            this.partnerId = partial.partnerId;
        if ('meToOtherRelationshipDescription' in partial)
            this.meToOtherRelationshipDescription = partial.meToOtherRelationshipDescription;
        if ('otherToMeRelationshipDescription' in partial)
            this.otherToMeRelationshipDescription = partial.otherToMeRelationshipDescription;
    }
}
//# sourceMappingURL=Partnership.mjs.map