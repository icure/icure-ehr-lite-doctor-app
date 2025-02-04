export class Medicinalproduct {
    constructor(partial) {
        this.intendedcds = [];
        this.deliveredcds = [];
        this.intendedname = undefined;
        this.deliveredname = undefined;
        this.productId = undefined;
        if ('intendedcds' in partial && partial.intendedcds !== undefined)
            this.intendedcds = partial.intendedcds;
        if ('deliveredcds' in partial && partial.deliveredcds !== undefined)
            this.deliveredcds = partial.deliveredcds;
        if ('intendedname' in partial)
            this.intendedname = partial.intendedname;
        if ('deliveredname' in partial)
            this.deliveredname = partial.deliveredname;
        if ('productId' in partial)
            this.productId = partial.productId;
    }
}
//# sourceMappingURL=Medicinalproduct.mjs.map