// auto-generated file
import { InternalDocumentFiltersObj } from '../cardinal-sdk-ts.mjs';
export const DocumentFilters = {
    byPatientsCreatedForDataOwner: (dataOwnerId, patients, options) => InternalDocumentFiltersObj.getInstance().byPatientsCreatedForDataOwner(dataOwnerId, patients, options),
    byPatientsCreatedForSelf: (patients, options) => InternalDocumentFiltersObj.getInstance().byPatientsCreatedForSelf(patients, options),
    byPatientSecretIdsCreatedForDataOwner: (dataOwnerId, secretIds, options) => InternalDocumentFiltersObj.getInstance().byPatientSecretIdsCreatedForDataOwner(dataOwnerId, secretIds, options),
    byPatientSecretIdsCreatedForSelf: (secretIds, options) => InternalDocumentFiltersObj.getInstance().byPatientSecretIdsCreatedForSelf(secretIds, options),
    byPatientsAndTypeForDataOwner: (dataOwnerId, documentType, patients) => InternalDocumentFiltersObj.getInstance().byPatientsAndTypeForDataOwner(dataOwnerId, documentType, patients),
    byPatientsAndTypeForSelf: (documentType, patients) => InternalDocumentFiltersObj.getInstance().byPatientsAndTypeForSelf(documentType, patients),
    byPatientSecretIdsAndTypeForDataOwner: (dataOwnerId, documentType, secretIds) => InternalDocumentFiltersObj.getInstance().byPatientSecretIdsAndTypeForDataOwner(dataOwnerId, documentType, secretIds),
    byPatientSecretIdsAndTypeForSelf: (documentType, secretIds) => InternalDocumentFiltersObj.getInstance().byPatientSecretIdsAndTypeForSelf(documentType, secretIds)
};
//# sourceMappingURL=DocumentFilters.mjs.map