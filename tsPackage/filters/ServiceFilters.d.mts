import { BaseFilterOptions, BaseSortableFilterOptions, FilterOptions, SortableFilterOptions } from '../cardinal-sdk-ts.mjs';
import { Patient } from '../model/Patient.mjs';
import { Identifier } from '../model/base/Identifier.mjs';
import { LinkQualification } from '../model/base/LinkQualification.mjs';
import { Service } from '../model/embed/Service.mjs';
interface ServiceFiltersFactory {
    allServicesForDataOwner(dataOwnerId: string): BaseFilterOptions<Service>;
    allServicesForSelf(): FilterOptions<Service>;
    byIdentifiersForDataOwner(dataOwnerId: string, identifiers: Array<Identifier>): BaseSortableFilterOptions<Service>;
    byCodeAndValueDateForDataOwner(dataOwnerId: string, codeType: string, options?: {
        codeCode?: string | undefined;
        startOfServiceValueDate?: number | undefined;
        endOfServiceValueDate?: number | undefined;
    }): BaseSortableFilterOptions<Service>;
    byTagAndValueDateForDataOwner(dataOwnerId: string, tagType: string, options?: {
        tagCode?: string | undefined;
        startOfServiceValueDate?: number | undefined;
        endOfServiceValueDate?: number | undefined;
    }): BaseSortableFilterOptions<Service>;
    byPatientsForDataOwner(dataOwnerId: string, patients: Array<Patient>): SortableFilterOptions<Service>;
    byPatientsSecretIdsForDataOwner(dataOwnerId: string, secretIds: Array<string>): BaseSortableFilterOptions<Service>;
    byHealthElementIdFromSubContactForDataOwner(dataOwnerId: string, healthElementIds: Array<string>): BaseSortableFilterOptions<Service>;
    byIdentifiersForSelf(identifiers: Array<Identifier>): SortableFilterOptions<Service>;
    byCodeAndValueDateForSelf(codeType: string, options?: {
        codeCode?: string | undefined;
        startOfServiceValueDate?: number | undefined;
        endOfServiceValueDate?: number | undefined;
    }): SortableFilterOptions<Service>;
    byTagAndValueDateForSelf(tagType: string, options?: {
        tagCode?: string | undefined;
        startOfServiceValueDate?: number | undefined;
        endOfServiceValueDate?: number | undefined;
    }): SortableFilterOptions<Service>;
    byPatientsForSelf(patients: Array<Patient>): SortableFilterOptions<Service>;
    byPatientsSecretIdsForSelf(secretIds: Array<string>): SortableFilterOptions<Service>;
    byHealthElementIdFromSubContactForSelf(healthElementIds: Array<string>): SortableFilterOptions<Service>;
    byIds(ids: Array<string>): BaseSortableFilterOptions<Service>;
    byAssociationId(associationId: string): BaseFilterOptions<Service>;
    byQualifiedLink(linkValues: Array<string>, options?: {
        linkQualification?: LinkQualification | undefined;
    }): BaseFilterOptions<Service>;
    byPatientsDateForDataOwner(dataOwnerId: string, patients: Array<Patient>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<Service>;
    byPatientsDateForSelf(patients: Array<Patient>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<Service>;
    byPatientSecretIdsDateForDataOwner(dataOwnerId: string, secretIds: Array<string>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): BaseSortableFilterOptions<Service>;
    byPatientSecretIdsDateForSelf(secretIds: Array<string>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<Service>;
}
export declare const ServiceFilters: ServiceFiltersFactory;
export {};
