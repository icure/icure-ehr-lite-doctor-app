export class RemoteAuthentication {
    constructor(partial) {
        this.basic = undefined;
        if ('basic' in partial)
            this.basic = partial.basic;
    }
}
//# sourceMappingURL=RemoteAuthentication.mjs.map