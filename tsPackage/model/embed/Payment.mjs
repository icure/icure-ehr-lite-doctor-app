export class Payment {
    constructor(partial) {
        this.paymentDate = 0;
        this.paymentType = undefined;
        this.paid = undefined;
        if ('paymentDate' in partial && partial.paymentDate !== undefined)
            this.paymentDate = partial.paymentDate;
        if ('paymentType' in partial)
            this.paymentType = partial.paymentType;
        if ('paid' in partial)
            this.paid = partial.paid;
    }
}
//# sourceMappingURL=Payment.mjs.map