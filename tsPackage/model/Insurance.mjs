// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class Insurance {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.name = {};
        this.privateInsurance = false;
        this.hospitalisationInsurance = false;
        this.ambulatoryInsurance = false;
        this.code = undefined;
        this.agreementNumber = undefined;
        this.parent = undefined;
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('name' in partial && partial.name !== undefined)
            this.name = partial.name;
        if ('privateInsurance' in partial && partial.privateInsurance !== undefined)
            this.privateInsurance = partial.privateInsurance;
        if ('hospitalisationInsurance' in partial && partial.hospitalisationInsurance !== undefined)
            this.hospitalisationInsurance = partial.hospitalisationInsurance;
        if ('ambulatoryInsurance' in partial && partial.ambulatoryInsurance !== undefined)
            this.ambulatoryInsurance = partial.ambulatoryInsurance;
        if ('code' in partial)
            this.code = partial.code;
        if ('agreementNumber' in partial)
            this.agreementNumber = partial.agreementNumber;
        if ('parent' in partial)
            this.parent = partial.parent;
        this.address = partial.address;
    }
}
//# sourceMappingURL=Insurance.mjs.map