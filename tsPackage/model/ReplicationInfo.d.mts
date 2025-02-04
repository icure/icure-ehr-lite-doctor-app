export declare class ReplicationInfo {
    active: boolean;
    running: boolean;
    pendingFrom: number | undefined;
    pendingTo: number | undefined;
    constructor(partial: Partial<ReplicationInfo>);
}
