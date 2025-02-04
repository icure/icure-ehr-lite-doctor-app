import { BaseFilterOptions, BaseSortableFilterOptions, FilterOptions, SortableFilterOptions } from '../cardinal-sdk-ts.mjs';
import { HealthElement } from '../model/HealthElement.mjs';
import { Patient } from '../model/Patient.mjs';
import { Identifier } from '../model/base/Identifier.mjs';
interface HealthElementFiltersFactory {
    allHealthElementsForDataOwner(dataOwnerId: string): BaseFilterOptions<HealthElement>;
    allHealthElementsForSelf(): FilterOptions<HealthElement>;
    byIdentifiersForDataOwner(dataOwnerId: string, identifiers: Array<Identifier>): BaseSortableFilterOptions<HealthElement>;
    byIdentifiersForSelf(identifiers: Array<Identifier>): SortableFilterOptions<HealthElement>;
    byCodeForDataOwner(dataOwnerId: string, codeType: string, options?: {
        codeCode?: string | undefined;
    }): BaseSortableFilterOptions<HealthElement>;
    byCodeForSelf(codeType: string, options?: {
        codeCode?: string | undefined;
    }): SortableFilterOptions<HealthElement>;
    byTagForDataOwner(dataOwnerId: string, tagType: string, options?: {
        tagCode?: string | undefined;
    }): BaseSortableFilterOptions<HealthElement>;
    byTagForSelf(tagType: string, options?: {
        tagCode?: string | undefined;
    }): SortableFilterOptions<HealthElement>;
    byPatientsForDataOwner(dataOwnerId: string, patients: Array<Patient>): SortableFilterOptions<HealthElement>;
    byPatientsForSelf(patients: Array<Patient>): SortableFilterOptions<HealthElement>;
    byPatientsSecretIdsForDataOwner(dataOwnerId: string, secretIds: Array<string>): BaseSortableFilterOptions<HealthElement>;
    byPatientsSecretIdsForSelf(secretIds: Array<string>): SortableFilterOptions<HealthElement>;
    byIds(ids: Array<string>): BaseSortableFilterOptions<HealthElement>;
    byPatientsOpeningDateForDataOwner(dataOwnerId: string, patients: Array<Patient>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<HealthElement>;
    byPatientsOpeningDateForSelf(patients: Array<Patient>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<HealthElement>;
    byPatientSecretIdsOpeningDateForDataOwner(dataOwnerId: string, secretIds: Array<string>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): BaseSortableFilterOptions<HealthElement>;
    byPatientSecretIdsOpeningDateForSelf(secretIds: Array<string>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<HealthElement>;
    byStatusForDataOwner(dataOwnerId: string, status: number): BaseFilterOptions<HealthElement>;
    byStatusForSelf(status: number): FilterOptions<HealthElement>;
}
export declare const HealthElementFilters: HealthElementFiltersFactory;
export {};
