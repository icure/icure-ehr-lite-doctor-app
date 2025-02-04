// auto-generated file
import { InternalPatientFiltersObj } from '../cardinal-sdk-ts.mjs';
export const PatientFilters = {
    allPatientsForDataOwner: (dataOwnerId) => InternalPatientFiltersObj.getInstance().allPatientsForDataOwner(dataOwnerId),
    allPatientsForSelf: () => InternalPatientFiltersObj.getInstance().allPatientsForSelf(),
    byIds: (ids) => InternalPatientFiltersObj.getInstance().byIds(ids),
    byIdentifiersForDataOwner: (dataOwnerId, identifiers) => InternalPatientFiltersObj.getInstance().byIdentifiersForDataOwner(dataOwnerId, identifiers),
    bySsinsForDataOwner: (dataOwnerId, ssins) => InternalPatientFiltersObj.getInstance().bySsinsForDataOwner(dataOwnerId, ssins),
    byDateOfBirthBetweenForDataOwner: (dataOwnerId, fromDate, toDate) => InternalPatientFiltersObj.getInstance().byDateOfBirthBetweenForDataOwner(dataOwnerId, fromDate, toDate),
    byFuzzyNameForDataOwner: (dataOwnerId, searchString) => InternalPatientFiltersObj.getInstance().byFuzzyNameForDataOwner(dataOwnerId, searchString),
    byGenderEducationProfessionForDataOwner: (dataOwnerId, gender, options) => InternalPatientFiltersObj.getInstance().byGenderEducationProfessionForDataOwner(dataOwnerId, gender, options),
    byActiveForDataOwner: (dataOwnerId, active) => InternalPatientFiltersObj.getInstance().byActiveForDataOwner(dataOwnerId, active),
    byTelecomForDataOwner: (dataOwnerId, searchString) => InternalPatientFiltersObj.getInstance().byTelecomForDataOwner(dataOwnerId, searchString),
    byAddressPostalCodeHouseNumberForDataOwner: (dataOwnerId, searchString, postalCode, options) => InternalPatientFiltersObj.getInstance().byAddressPostalCodeHouseNumberForDataOwner(dataOwnerId, searchString, postalCode, options),
    byAddressForDataOwner: (dataOwnerId, searchString) => InternalPatientFiltersObj.getInstance().byAddressForDataOwner(dataOwnerId, searchString),
    byExternalIdForDataOwner: (dataOwnerId, externalIdPrefix) => InternalPatientFiltersObj.getInstance().byExternalIdForDataOwner(dataOwnerId, externalIdPrefix),
    byIdentifiersForSelf: (identifiers) => InternalPatientFiltersObj.getInstance().byIdentifiersForSelf(identifiers),
    bySsinsForSelf: (ssins) => InternalPatientFiltersObj.getInstance().bySsinsForSelf(ssins),
    byDateOfBirthBetweenForSelf: (fromDate, toDate) => InternalPatientFiltersObj.getInstance().byDateOfBirthBetweenForSelf(fromDate, toDate),
    byNameForSelf: (searchString) => InternalPatientFiltersObj.getInstance().byNameForSelf(searchString),
    byGenderEducationProfessionForSelf: (gender, options) => InternalPatientFiltersObj.getInstance().byGenderEducationProfessionForSelf(gender, options),
    byActiveForSelf: (active) => InternalPatientFiltersObj.getInstance().byActiveForSelf(active),
    byTelecomForSelf: (searchString) => InternalPatientFiltersObj.getInstance().byTelecomForSelf(searchString),
    byAddressPostalCodeHouseNumberForSelf: (searchString, postalCode, options) => InternalPatientFiltersObj.getInstance().byAddressPostalCodeHouseNumberForSelf(searchString, postalCode, options),
    byAddressForSelf: (searchString) => InternalPatientFiltersObj.getInstance().byAddressForSelf(searchString),
    byExternalIdForSelf: (externalIdPrefix) => InternalPatientFiltersObj.getInstance().byExternalIdForSelf(externalIdPrefix)
};
//# sourceMappingURL=PatientFilters.mjs.map