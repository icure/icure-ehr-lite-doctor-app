// auto-generated file
export class DatabaseSynchronization {
    constructor(partial) {
        this.source = undefined;
        this.target = undefined;
        this.filter = undefined;
        this.localTarget = undefined;
        if ('source' in partial)
            this.source = partial.source;
        if ('target' in partial)
            this.target = partial.target;
        if ('filter' in partial)
            this.filter = partial.filter;
        if ('localTarget' in partial)
            this.localTarget = partial.localTarget;
    }
}
(function (DatabaseSynchronization) {
    let Target;
    (function (Target) {
        Target["Base"] = "Base";
        Target["Healthdata"] = "Healthdata";
        Target["Patient"] = "Patient";
    })(Target = DatabaseSynchronization.Target || (DatabaseSynchronization.Target = {}));
})(DatabaseSynchronization || (DatabaseSynchronization = {}));
//# sourceMappingURL=DatabaseSynchronization.mjs.map