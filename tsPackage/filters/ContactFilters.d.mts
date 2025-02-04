import { BaseFilterOptions, BaseSortableFilterOptions, FilterOptions, SortableFilterOptions } from '../cardinal-sdk-ts.mjs';
import { Contact } from '../model/Contact.mjs';
import { Patient } from '../model/Patient.mjs';
import { Identifier } from '../model/base/Identifier.mjs';
interface ContactFiltersFactory {
    allContactsForDataOwner(dataOwnerId: string): BaseFilterOptions<Contact>;
    allContactsForSelf(): FilterOptions<Contact>;
    byFormIdsForDataOwner(dataOwnerId: string, formIds: Array<string>): BaseFilterOptions<Contact>;
    byFormIdsForSelf(formIds: Array<string>): FilterOptions<Contact>;
    byPatientsOpeningDateForDataOwner(dataOwnerId: string, patients: Array<Patient>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<Contact>;
    byPatientsOpeningDateForSelf(patients: Array<Patient>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<Contact>;
    byPatientSecretIdsOpeningDateForDataOwner(dataOwnerId: string, secretIds: Array<string>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): BaseSortableFilterOptions<Contact>;
    byPatientSecretIdsOpeningDateForSelf(secretIds: Array<string>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<Contact>;
    byExternalId(externalId: string): BaseFilterOptions<Contact>;
    byIdentifiersForSelf(identifiers: Array<Identifier>): SortableFilterOptions<Contact>;
    byIdentifiersForDataOwner(dataOwnerId: string, identifiers: Array<Identifier>): BaseSortableFilterOptions<Contact>;
    byCodeAndOpeningDateForDataOwner(dataOwnerId: string, codeType: string, options?: {
        codeCode?: string | undefined;
        startOfContactOpeningDate?: number | undefined;
        endOfContactOpeningDate?: number | undefined;
    }): BaseSortableFilterOptions<Contact>;
    byCodeAndOpeningDateForSelf(codeType: string, options?: {
        codeCode?: string | undefined;
        startOfContactOpeningDate?: number | undefined;
        endOfContactOpeningDate?: number | undefined;
    }): SortableFilterOptions<Contact>;
    byTagAndOpeningDateForDataOwner(dataOwnerId: string, tagType: string, options?: {
        tagCode?: string | undefined;
        startOfContactOpeningDate?: number | undefined;
        endOfContactOpeningDate?: number | undefined;
    }): BaseSortableFilterOptions<Contact>;
    byOpeningDateForDataOwner(dataOwnerId: string, options?: {
        startDate?: number | undefined;
        endDate?: number | undefined;
        descending?: boolean;
    }): BaseSortableFilterOptions<Contact>;
    byOpeningDateForSelf(options?: {
        startDate?: number | undefined;
        endDate?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<Contact>;
    byServiceTagForSelf(tagType: string, options?: {
        tagCode?: string | undefined;
    }): FilterOptions<Contact>;
    byServiceTagForDataOwner(dataOwnerId: string, tagType: string, options?: {
        tagCode?: string | undefined;
    }): BaseFilterOptions<Contact>;
    byServiceCodeForSelf(codeType: string, options?: {
        codeCode?: string | undefined;
    }): FilterOptions<Contact>;
    byServiceCodeForDataOwner(dataOwnerId: string, codeType: string, options?: {
        codeCode?: string | undefined;
    }): BaseFilterOptions<Contact>;
    byTagAndOpeningDateForSelf(tagType: string, options?: {
        tagCode?: string | undefined;
        startOfContactOpeningDate?: number | undefined;
        endOfContactOpeningDate?: number | undefined;
    }): SortableFilterOptions<Contact>;
    byPatientsForDataOwner(dataOwnerId: string, patients: Array<Patient>): SortableFilterOptions<Contact>;
    byPatientsForSelf(patients: Array<Patient>): SortableFilterOptions<Contact>;
    byPatientsSecretIdsForDataOwner(dataOwnerId: string, secretIds: Array<string>): BaseSortableFilterOptions<Contact>;
    byPatientsSecretIdsForSelf(secretIds: Array<string>): SortableFilterOptions<Contact>;
    byServiceIds(serviceIds: Array<string>): BaseSortableFilterOptions<Contact>;
}
export declare const ContactFilters: ContactFiltersFactory;
export {};
