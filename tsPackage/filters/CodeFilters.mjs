// auto-generated file
import { InternalCodeFiltersObj } from '../cardinal-sdk-ts.mjs';
export const CodeFilters = {
    all: () => InternalCodeFiltersObj.getInstance().all(),
    byIds: (ids) => InternalCodeFiltersObj.getInstance().byIds(ids),
    byQualifiedLink: (linkType, options) => InternalCodeFiltersObj.getInstance().byQualifiedLink(linkType, options),
    byRegionTypeCodeVersion: (region, options) => InternalCodeFiltersObj.getInstance().byRegionTypeCodeVersion(region, options),
    byLanguageTypeLabelRegion: (language, type, options) => InternalCodeFiltersObj.getInstance().byLanguageTypeLabelRegion(language, type, options),
    byLanguageTypesLabelRegionVersion: (language, types, label, options) => InternalCodeFiltersObj.getInstance().byLanguageTypesLabelRegionVersion(language, types, label, options)
};
//# sourceMappingURL=CodeFilters.mjs.map