export declare class DatabaseSynchronization {
    source: string | undefined;
    target: string | undefined;
    filter: string | undefined;
    localTarget: DatabaseSynchronization.Target | undefined;
    constructor(partial: Partial<DatabaseSynchronization>);
}
export declare namespace DatabaseSynchronization {
    enum Target {
        Base = "Base",
        Healthdata = "Healthdata",
        Patient = "Patient"
    }
}
