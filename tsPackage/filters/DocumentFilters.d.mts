import { BaseSortableFilterOptions, FilterOptions, SortableFilterOptions } from '../cardinal-sdk-ts.mjs';
import { Document } from '../model/Document.mjs';
import { Patient } from '../model/Patient.mjs';
import { DocumentType } from '../model/embed/DocumentType.mjs';
interface DocumentFiltersFactory {
    byPatientsCreatedForDataOwner(dataOwnerId: string, patients: Array<Patient>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<Document>;
    byPatientsCreatedForSelf(patients: Array<Patient>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<Document>;
    byPatientSecretIdsCreatedForDataOwner(dataOwnerId: string, secretIds: Array<string>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): BaseSortableFilterOptions<Document>;
    byPatientSecretIdsCreatedForSelf(secretIds: Array<string>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<Document>;
    byPatientsAndTypeForDataOwner(dataOwnerId: string, documentType: DocumentType, patients: Array<Patient>): FilterOptions<Document>;
    byPatientsAndTypeForSelf(documentType: DocumentType, patients: Array<Patient>): FilterOptions<Document>;
    byPatientSecretIdsAndTypeForDataOwner(dataOwnerId: string, documentType: DocumentType, secretIds: Array<string>): FilterOptions<Document>;
    byPatientSecretIdsAndTypeForSelf(documentType: DocumentType, secretIds: Array<string>): FilterOptions<Document>;
}
export declare const DocumentFilters: DocumentFiltersFactory;
export {};
