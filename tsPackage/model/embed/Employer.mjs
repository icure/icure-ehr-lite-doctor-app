export class Employer {
    constructor(partial) {
        this.name = undefined;
        this.addresse = undefined;
        if ('name' in partial)
            this.name = partial.name;
        if ('addresse' in partial)
            this.addresse = partial.addresse;
    }
}
//# sourceMappingURL=Employer.mjs.map