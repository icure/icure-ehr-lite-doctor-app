export class Remote {
    constructor(partial) {
        this.auth = undefined;
        this.url = partial.url;
        if ('auth' in partial)
            this.auth = partial.auth;
    }
}
//# sourceMappingURL=Remote.mjs.map