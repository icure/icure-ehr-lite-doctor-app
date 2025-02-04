// auto-generated file
export class ReplicationInfo {
    constructor(partial) {
        this.active = false;
        this.running = false;
        this.pendingFrom = undefined;
        this.pendingTo = undefined;
        if ('active' in partial && partial.active !== undefined)
            this.active = partial.active;
        if ('running' in partial && partial.running !== undefined)
            this.running = partial.running;
        if ('pendingFrom' in partial)
            this.pendingFrom = partial.pendingFrom;
        if ('pendingTo' in partial)
            this.pendingTo = partial.pendingTo;
    }
}
//# sourceMappingURL=ReplicationInfo.mjs.map