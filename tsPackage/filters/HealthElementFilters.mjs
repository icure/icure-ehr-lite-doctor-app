// auto-generated file
import { InternalHealthElementFiltersObj } from '../cardinal-sdk-ts.mjs';
export const HealthElementFilters = {
    allHealthElementsForDataOwner: (dataOwnerId) => InternalHealthElementFiltersObj.getInstance().allHealthElementsForDataOwner(dataOwnerId),
    allHealthElementsForSelf: () => InternalHealthElementFiltersObj.getInstance().allHealthElementsForSelf(),
    byIdentifiersForDataOwner: (dataOwnerId, identifiers) => InternalHealthElementFiltersObj.getInstance().byIdentifiersForDataOwner(dataOwnerId, identifiers),
    byIdentifiersForSelf: (identifiers) => InternalHealthElementFiltersObj.getInstance().byIdentifiersForSelf(identifiers),
    byCodeForDataOwner: (dataOwnerId, codeType, options) => InternalHealthElementFiltersObj.getInstance().byCodeForDataOwner(dataOwnerId, codeType, options),
    byCodeForSelf: (codeType, options) => InternalHealthElementFiltersObj.getInstance().byCodeForSelf(codeType, options),
    byTagForDataOwner: (dataOwnerId, tagType, options) => InternalHealthElementFiltersObj.getInstance().byTagForDataOwner(dataOwnerId, tagType, options),
    byTagForSelf: (tagType, options) => InternalHealthElementFiltersObj.getInstance().byTagForSelf(tagType, options),
    byPatientsForDataOwner: (dataOwnerId, patients) => InternalHealthElementFiltersObj.getInstance().byPatientsForDataOwner(dataOwnerId, patients),
    byPatientsForSelf: (patients) => InternalHealthElementFiltersObj.getInstance().byPatientsForSelf(patients),
    byPatientsSecretIdsForDataOwner: (dataOwnerId, secretIds) => InternalHealthElementFiltersObj.getInstance().byPatientsSecretIdsForDataOwner(dataOwnerId, secretIds),
    byPatientsSecretIdsForSelf: (secretIds) => InternalHealthElementFiltersObj.getInstance().byPatientsSecretIdsForSelf(secretIds),
    byIds: (ids) => InternalHealthElementFiltersObj.getInstance().byIds(ids),
    byPatientsOpeningDateForDataOwner: (dataOwnerId, patients, options) => InternalHealthElementFiltersObj.getInstance().byPatientsOpeningDateForDataOwner(dataOwnerId, patients, options),
    byPatientsOpeningDateForSelf: (patients, options) => InternalHealthElementFiltersObj.getInstance().byPatientsOpeningDateForSelf(patients, options),
    byPatientSecretIdsOpeningDateForDataOwner: (dataOwnerId, secretIds, options) => InternalHealthElementFiltersObj.getInstance().byPatientSecretIdsOpeningDateForDataOwner(dataOwnerId, secretIds, options),
    byPatientSecretIdsOpeningDateForSelf: (secretIds, options) => InternalHealthElementFiltersObj.getInstance().byPatientSecretIdsOpeningDateForSelf(secretIds, options),
    byStatusForDataOwner: (dataOwnerId, status) => InternalHealthElementFiltersObj.getInstance().byStatusForDataOwner(dataOwnerId, status),
    byStatusForSelf: (status) => InternalHealthElementFiltersObj.getInstance().byStatusForSelf(status)
};
//# sourceMappingURL=HealthElementFilters.mjs.map