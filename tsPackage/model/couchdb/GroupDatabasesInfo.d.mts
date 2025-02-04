import { DatabaseInfo } from './DatabaseInfo.mjs';
export declare class GroupDatabasesInfo {
    groupId: string;
    databasesInfo: Array<DatabaseInfo>;
    gcpStorageSize: number;
    constructor(partial: Partial<GroupDatabasesInfo> & Pick<GroupDatabasesInfo, "groupId" | "databasesInfo" | "gcpStorageSize">);
}
