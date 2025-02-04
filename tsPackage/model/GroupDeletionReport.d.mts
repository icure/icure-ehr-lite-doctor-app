export declare class GroupDeletionReport {
    type: string;
    id: string;
    server: string;
    constructor(partial: Partial<GroupDeletionReport> & Pick<GroupDeletionReport, "type" | "server">);
}
