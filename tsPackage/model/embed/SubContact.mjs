export class DecryptedSubContact {
    constructor(partial) {
        this.id = undefined;
        this.created = undefined;
        this.modified = undefined;
        this.author = undefined;
        this.responsible = undefined;
        this.medicalLocationId = undefined;
        this.tags = [];
        this.codes = [];
        this.endOfLife = undefined;
        this.descr = undefined;
        this.protocol = undefined;
        this.status = undefined;
        this.formId = undefined;
        this.planOfActionId = undefined;
        this.healthElementId = undefined;
        this.classificationId = undefined;
        this.services = [];
        this.encryptedSelf = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        if ('id' in partial)
            this.id = partial.id;
        if ('created' in partial)
            this.created = partial.created;
        if ('modified' in partial)
            this.modified = partial.modified;
        if ('author' in partial)
            this.author = partial.author;
        if ('responsible' in partial)
            this.responsible = partial.responsible;
        if ('medicalLocationId' in partial)
            this.medicalLocationId = partial.medicalLocationId;
        if ('tags' in partial && partial.tags !== undefined)
            this.tags = partial.tags;
        if ('codes' in partial && partial.codes !== undefined)
            this.codes = partial.codes;
        if ('endOfLife' in partial)
            this.endOfLife = partial.endOfLife;
        if ('descr' in partial)
            this.descr = partial.descr;
        if ('protocol' in partial)
            this.protocol = partial.protocol;
        if ('status' in partial)
            this.status = partial.status;
        if ('formId' in partial)
            this.formId = partial.formId;
        if ('planOfActionId' in partial)
            this.planOfActionId = partial.planOfActionId;
        if ('healthElementId' in partial)
            this.healthElementId = partial.healthElementId;
        if ('classificationId' in partial)
            this.classificationId = partial.classificationId;
        if ('services' in partial && partial.services !== undefined)
            this.services = partial.services;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
export class EncryptedSubContact {
    constructor(partial) {
        this.id = undefined;
        this.created = undefined;
        this.modified = undefined;
        this.author = undefined;
        this.responsible = undefined;
        this.medicalLocationId = undefined;
        this.tags = [];
        this.codes = [];
        this.endOfLife = undefined;
        this.descr = undefined;
        this.protocol = undefined;
        this.status = undefined;
        this.formId = undefined;
        this.planOfActionId = undefined;
        this.healthElementId = undefined;
        this.classificationId = undefined;
        this.services = [];
        this.encryptedSelf = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        if ('id' in partial)
            this.id = partial.id;
        if ('created' in partial)
            this.created = partial.created;
        if ('modified' in partial)
            this.modified = partial.modified;
        if ('author' in partial)
            this.author = partial.author;
        if ('responsible' in partial)
            this.responsible = partial.responsible;
        if ('medicalLocationId' in partial)
            this.medicalLocationId = partial.medicalLocationId;
        if ('tags' in partial && partial.tags !== undefined)
            this.tags = partial.tags;
        if ('codes' in partial && partial.codes !== undefined)
            this.codes = partial.codes;
        if ('endOfLife' in partial)
            this.endOfLife = partial.endOfLife;
        if ('descr' in partial)
            this.descr = partial.descr;
        if ('protocol' in partial)
            this.protocol = partial.protocol;
        if ('status' in partial)
            this.status = partial.status;
        if ('formId' in partial)
            this.formId = partial.formId;
        if ('planOfActionId' in partial)
            this.planOfActionId = partial.planOfActionId;
        if ('healthElementId' in partial)
            this.healthElementId = partial.healthElementId;
        if ('classificationId' in partial)
            this.classificationId = partial.classificationId;
        if ('services' in partial && partial.services !== undefined)
            this.services = partial.services;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
//# sourceMappingURL=SubContact.mjs.map