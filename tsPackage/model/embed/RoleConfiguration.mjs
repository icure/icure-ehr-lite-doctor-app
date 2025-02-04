// auto-generated file
export class RoleConfiguration {
    constructor(partial) {
        this.roles = [];
        this.source = partial.source;
        if ('roles' in partial && partial.roles !== undefined)
            this.roles = partial.roles;
    }
}
(function (RoleConfiguration) {
    let Source;
    (function (Source) {
        Source["Configuration"] = "Configuration";
        Source["Inherited"] = "Inherited";
        Source["Default"] = "Default";
    })(Source = RoleConfiguration.Source || (RoleConfiguration.Source = {}));
})(RoleConfiguration || (RoleConfiguration = {}));
//# sourceMappingURL=RoleConfiguration.mjs.map