// auto-generated file
import { InternalHealthcarePartyFiltersObj } from '../cardinal-sdk-ts.mjs';
export const HealthcarePartyFilters = {
    all: () => InternalHealthcarePartyFiltersObj.getInstance().all(),
    byIdentifiers: (identifiers) => InternalHealthcarePartyFiltersObj.getInstance().byIdentifiers(identifiers),
    byCode: (codeType, options) => InternalHealthcarePartyFiltersObj.getInstance().byCode(codeType, options),
    byTag: (tagType, options) => InternalHealthcarePartyFiltersObj.getInstance().byTag(tagType, options),
    byIds: (ids) => InternalHealthcarePartyFiltersObj.getInstance().byIds(ids),
    byName: (searchString, options) => InternalHealthcarePartyFiltersObj.getInstance().byName(searchString, options),
    byNationalIdentifier: (searchString, options) => InternalHealthcarePartyFiltersObj.getInstance().byNationalIdentifier(searchString, options),
    byParentId: (parentId) => InternalHealthcarePartyFiltersObj.getInstance().byParentId(parentId),
    byTypeSpecialtyPostCode: (specialty, specCode, startPostCode, endPostCode) => InternalHealthcarePartyFiltersObj.getInstance().byTypeSpecialtyPostCode(specialty, specCode, startPostCode, endPostCode)
};
//# sourceMappingURL=HealthcarePartyFilters.mjs.map