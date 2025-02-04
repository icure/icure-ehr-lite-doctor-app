// auto-generated file
import { InternalContactFiltersObj } from '../cardinal-sdk-ts.mjs';
export const ContactFilters = {
    allContactsForDataOwner: (dataOwnerId) => InternalContactFiltersObj.getInstance().allContactsForDataOwner(dataOwnerId),
    allContactsForSelf: () => InternalContactFiltersObj.getInstance().allContactsForSelf(),
    byFormIdsForDataOwner: (dataOwnerId, formIds) => InternalContactFiltersObj.getInstance().byFormIdsForDataOwner(dataOwnerId, formIds),
    byFormIdsForSelf: (formIds) => InternalContactFiltersObj.getInstance().byFormIdsForSelf(formIds),
    byPatientsOpeningDateForDataOwner: (dataOwnerId, patients, options) => InternalContactFiltersObj.getInstance().byPatientsOpeningDateForDataOwner(dataOwnerId, patients, options),
    byPatientsOpeningDateForSelf: (patients, options) => InternalContactFiltersObj.getInstance().byPatientsOpeningDateForSelf(patients, options),
    byPatientSecretIdsOpeningDateForDataOwner: (dataOwnerId, secretIds, options) => InternalContactFiltersObj.getInstance().byPatientSecretIdsOpeningDateForDataOwner(dataOwnerId, secretIds, options),
    byPatientSecretIdsOpeningDateForSelf: (secretIds, options) => InternalContactFiltersObj.getInstance().byPatientSecretIdsOpeningDateForSelf(secretIds, options),
    byExternalId: (externalId) => InternalContactFiltersObj.getInstance().byExternalId(externalId),
    byIdentifiersForSelf: (identifiers) => InternalContactFiltersObj.getInstance().byIdentifiersForSelf(identifiers),
    byIdentifiersForDataOwner: (dataOwnerId, identifiers) => InternalContactFiltersObj.getInstance().byIdentifiersForDataOwner(dataOwnerId, identifiers),
    byCodeAndOpeningDateForDataOwner: (dataOwnerId, codeType, options) => InternalContactFiltersObj.getInstance().byCodeAndOpeningDateForDataOwner(dataOwnerId, codeType, options),
    byCodeAndOpeningDateForSelf: (codeType, options) => InternalContactFiltersObj.getInstance().byCodeAndOpeningDateForSelf(codeType, options),
    byTagAndOpeningDateForDataOwner: (dataOwnerId, tagType, options) => InternalContactFiltersObj.getInstance().byTagAndOpeningDateForDataOwner(dataOwnerId, tagType, options),
    byOpeningDateForDataOwner: (dataOwnerId, options) => InternalContactFiltersObj.getInstance().byOpeningDateForDataOwner(dataOwnerId, options),
    byOpeningDateForSelf: (options) => InternalContactFiltersObj.getInstance().byOpeningDateForSelf(options),
    byServiceTagForSelf: (tagType, options) => InternalContactFiltersObj.getInstance().byServiceTagForSelf(tagType, options),
    byServiceTagForDataOwner: (dataOwnerId, tagType, options) => InternalContactFiltersObj.getInstance().byServiceTagForDataOwner(dataOwnerId, tagType, options),
    byServiceCodeForSelf: (codeType, options) => InternalContactFiltersObj.getInstance().byServiceCodeForSelf(codeType, options),
    byServiceCodeForDataOwner: (dataOwnerId, codeType, options) => InternalContactFiltersObj.getInstance().byServiceCodeForDataOwner(dataOwnerId, codeType, options),
    byTagAndOpeningDateForSelf: (tagType, options) => InternalContactFiltersObj.getInstance().byTagAndOpeningDateForSelf(tagType, options),
    byPatientsForDataOwner: (dataOwnerId, patients) => InternalContactFiltersObj.getInstance().byPatientsForDataOwner(dataOwnerId, patients),
    byPatientsForSelf: (patients) => InternalContactFiltersObj.getInstance().byPatientsForSelf(patients),
    byPatientsSecretIdsForDataOwner: (dataOwnerId, secretIds) => InternalContactFiltersObj.getInstance().byPatientsSecretIdsForDataOwner(dataOwnerId, secretIds),
    byPatientsSecretIdsForSelf: (secretIds) => InternalContactFiltersObj.getInstance().byPatientsSecretIdsForSelf(secretIds),
    byServiceIds: (serviceIds) => InternalContactFiltersObj.getInstance().byServiceIds(serviceIds)
};
//# sourceMappingURL=ContactFilters.mjs.map