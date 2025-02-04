// auto-generated file
import { InternalServiceFiltersObj } from '../cardinal-sdk-ts.mjs';
export const ServiceFilters = {
    allServicesForDataOwner: (dataOwnerId) => InternalServiceFiltersObj.getInstance().allServicesForDataOwner(dataOwnerId),
    allServicesForSelf: () => InternalServiceFiltersObj.getInstance().allServicesForSelf(),
    byIdentifiersForDataOwner: (dataOwnerId, identifiers) => InternalServiceFiltersObj.getInstance().byIdentifiersForDataOwner(dataOwnerId, identifiers),
    byCodeAndValueDateForDataOwner: (dataOwnerId, codeType, options) => InternalServiceFiltersObj.getInstance().byCodeAndValueDateForDataOwner(dataOwnerId, codeType, options),
    byTagAndValueDateForDataOwner: (dataOwnerId, tagType, options) => InternalServiceFiltersObj.getInstance().byTagAndValueDateForDataOwner(dataOwnerId, tagType, options),
    byPatientsForDataOwner: (dataOwnerId, patients) => InternalServiceFiltersObj.getInstance().byPatientsForDataOwner(dataOwnerId, patients),
    byPatientsSecretIdsForDataOwner: (dataOwnerId, secretIds) => InternalServiceFiltersObj.getInstance().byPatientsSecretIdsForDataOwner(dataOwnerId, secretIds),
    byHealthElementIdFromSubContactForDataOwner: (dataOwnerId, healthElementIds) => InternalServiceFiltersObj.getInstance().byHealthElementIdFromSubContactForDataOwner(dataOwnerId, healthElementIds),
    byIdentifiersForSelf: (identifiers) => InternalServiceFiltersObj.getInstance().byIdentifiersForSelf(identifiers),
    byCodeAndValueDateForSelf: (codeType, options) => InternalServiceFiltersObj.getInstance().byCodeAndValueDateForSelf(codeType, options),
    byTagAndValueDateForSelf: (tagType, options) => InternalServiceFiltersObj.getInstance().byTagAndValueDateForSelf(tagType, options),
    byPatientsForSelf: (patients) => InternalServiceFiltersObj.getInstance().byPatientsForSelf(patients),
    byPatientsSecretIdsForSelf: (secretIds) => InternalServiceFiltersObj.getInstance().byPatientsSecretIdsForSelf(secretIds),
    byHealthElementIdFromSubContactForSelf: (healthElementIds) => InternalServiceFiltersObj.getInstance().byHealthElementIdFromSubContactForSelf(healthElementIds),
    byIds: (ids) => InternalServiceFiltersObj.getInstance().byIds(ids),
    byAssociationId: (associationId) => InternalServiceFiltersObj.getInstance().byAssociationId(associationId),
    byQualifiedLink: (linkValues, options) => InternalServiceFiltersObj.getInstance().byQualifiedLink(linkValues, options),
    byPatientsDateForDataOwner: (dataOwnerId, patients, options) => InternalServiceFiltersObj.getInstance().byPatientsDateForDataOwner(dataOwnerId, patients, options),
    byPatientsDateForSelf: (patients, options) => InternalServiceFiltersObj.getInstance().byPatientsDateForSelf(patients, options),
    byPatientSecretIdsDateForDataOwner: (dataOwnerId, secretIds, options) => InternalServiceFiltersObj.getInstance().byPatientSecretIdsDateForDataOwner(dataOwnerId, secretIds, options),
    byPatientSecretIdsDateForSelf: (secretIds, options) => InternalServiceFiltersObj.getInstance().byPatientSecretIdsDateForSelf(secretIds, options)
};
//# sourceMappingURL=ServiceFilters.mjs.map