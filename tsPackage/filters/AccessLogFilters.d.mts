import { BaseSortableFilterOptions, SortableFilterOptions } from '../cardinal-sdk-ts.mjs';
import { AccessLog } from '../model/AccessLog.mjs';
import { Patient } from '../model/Patient.mjs';
interface AccessLogFiltersFactory {
    byPatientsDateForDataOwner(dataOwnerId: string, patients: Array<Patient>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<AccessLog>;
    byPatientsDateForSelf(patients: Array<Patient>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<AccessLog>;
    byPatientSecretIdsDateForDataOwner(dataOwnerId: string, secretIds: Array<string>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): BaseSortableFilterOptions<AccessLog>;
    byPatientSecretIdsDateForSelf(secretIds: Array<string>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<AccessLog>;
    byDate(options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): BaseSortableFilterOptions<AccessLog>;
    byUserTypeDate(userId: string, options?: {
        accessType?: string | undefined;
        from?: number | undefined;
        descending?: boolean;
    }): BaseSortableFilterOptions<AccessLog>;
}
export declare const AccessLogFilters: AccessLogFiltersFactory;
export {};
