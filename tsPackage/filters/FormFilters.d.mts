import { BaseFilterOptions, BaseSortableFilterOptions, FilterOptions, SortableFilterOptions } from '../cardinal-sdk-ts.mjs';
import { Form } from '../model/Form.mjs';
import { Patient } from '../model/Patient.mjs';
interface FormFiltersFactory {
    byParentIdForDataOwner(dataOwnerId: string, parentId: string): BaseFilterOptions<Form>;
    byParentIdForSelf(parentId: string): FilterOptions<Form>;
    byPatientsOpeningDateForDataOwner(dataOwnerId: string, patients: Array<Patient>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<Form>;
    byPatientsOpeningDateForSelf(patients: Array<Patient>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<Form>;
    byPatientSecretIdsOpeningDateForDataOwner(dataOwnerId: string, secretIds: Array<string>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): BaseSortableFilterOptions<Form>;
    byPatientSecretIdsOpeningDateForSelf(secretIds: Array<string>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<Form>;
    byLogicalUuid(logicalUuid: string, options?: {
        descending?: boolean;
    }): BaseSortableFilterOptions<Form>;
    byUniqueId(uniqueId: string, options?: {
        descending?: boolean;
    }): BaseSortableFilterOptions<Form>;
}
export declare const FormFilters: FormFiltersFactory;
export {};
