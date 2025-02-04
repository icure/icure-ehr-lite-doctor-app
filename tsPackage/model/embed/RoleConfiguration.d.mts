export declare class RoleConfiguration {
    source: RoleConfiguration.Source;
    roles: Array<string>;
    constructor(partial: Partial<RoleConfiguration> & Pick<RoleConfiguration, "source">);
}
export declare namespace RoleConfiguration {
    enum Source {
        Configuration = "Configuration",
        Inherited = "Inherited",
        Default = "Default"
    }
}
