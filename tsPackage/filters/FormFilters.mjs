// auto-generated file
import { InternalFormFiltersObj } from '../cardinal-sdk-ts.mjs';
export const FormFilters = {
    byParentIdForDataOwner: (dataOwnerId, parentId) => InternalFormFiltersObj.getInstance().byParentIdForDataOwner(dataOwnerId, parentId),
    byParentIdForSelf: (parentId) => InternalFormFiltersObj.getInstance().byParentIdForSelf(parentId),
    byPatientsOpeningDateForDataOwner: (dataOwnerId, patients, options) => InternalFormFiltersObj.getInstance().byPatientsOpeningDateForDataOwner(dataOwnerId, patients, options),
    byPatientsOpeningDateForSelf: (patients, options) => InternalFormFiltersObj.getInstance().byPatientsOpeningDateForSelf(patients, options),
    byPatientSecretIdsOpeningDateForDataOwner: (dataOwnerId, secretIds, options) => InternalFormFiltersObj.getInstance().byPatientSecretIdsOpeningDateForDataOwner(dataOwnerId, secretIds, options),
    byPatientSecretIdsOpeningDateForSelf: (secretIds, options) => InternalFormFiltersObj.getInstance().byPatientSecretIdsOpeningDateForSelf(secretIds, options),
    byLogicalUuid: (logicalUuid, options) => InternalFormFiltersObj.getInstance().byLogicalUuid(logicalUuid, options),
    byUniqueId: (uniqueId, options) => InternalFormFiltersObj.getInstance().byUniqueId(uniqueId, options)
};
//# sourceMappingURL=FormFilters.mjs.map