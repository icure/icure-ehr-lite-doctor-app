import { FilterOptions, PaginatedListIterator, SortableFilterOptions } from '../cardinal-sdk-ts.mjs';
import { AccessLogShareOptions } from '../crypto/entities/AccessLogShareOptions.mjs';
import { AccessLog } from '../model/AccessLog.mjs';
import { PaginatedList } from '../model/PaginatedList.mjs';
import { Patient } from '../model/Patient.mjs';
export interface AccessLogFlavouredApi<E extends AccessLog> {
    shareWith(delegateId: string, accessLog: E, options?: {
        options?: AccessLogShareOptions | undefined;
    }): Promise<E>;
    shareWithMany(accessLog: E, delegates: {
        [key: string]: AccessLogShareOptions;
    }): Promise<E>;
    findAccessLogsByHcPartyPatient(hcPartyId: string, patient: Patient, options?: {
        startDate?: number | undefined;
        endDate?: number | undefined;
        descending?: boolean | undefined;
    }): Promise<PaginatedListIterator<E>>;
    filterAccessLogsBy(filter: FilterOptions<AccessLog>): Promise<PaginatedListIterator<E>>;
    filterAccessLogsBySorted(filter: SortableFilterOptions<AccessLog>): Promise<PaginatedListIterator<E>>;
    undeleteAccessLogById(id: string, rev: string): Promise<E>;
    undeleteAccessLog(accessLog: AccessLog): Promise<E>;
    modifyAccessLog(entity: E): Promise<E>;
    getAccessLog(entityId: string): Promise<E>;
    getAccessLogs(entityIds: Array<string>): Promise<Array<E>>;
    findAccessLogsBy(fromEpoch: number | undefined, toEpoch: number | undefined, startKey: number | undefined, startDocumentId: string | undefined, limit: number | undefined): Promise<PaginatedList<E>>;
    findAccessLogsByUserAfterDate(userId: string, options?: {
        accessType?: string | undefined;
        startDate?: number | undefined;
        startKey?: string | undefined;
        startDocumentId?: string | undefined;
        limit?: number | undefined;
        descending?: boolean | undefined;
    }): Promise<PaginatedList<E>>;
    findAccessLogsInGroup(groupId: string, options?: {
        fromEpoch?: number | undefined;
        toEpoch?: number | undefined;
        startKey?: number | undefined;
        startDocumentId?: string | undefined;
        limit?: number | undefined;
    }): Promise<PaginatedList<E>>;
}
