export class AdministrationQuantity {
    constructor(partial) {
        this.quantity = undefined;
        this.administrationUnit = undefined;
        this.unit = undefined;
        if ('quantity' in partial)
            this.quantity = partial.quantity;
        if ('administrationUnit' in partial)
            this.administrationUnit = partial.administrationUnit;
        if ('unit' in partial)
            this.unit = partial.unit;
    }
}
//# sourceMappingURL=AdministrationQuantity.mjs.map