import { BaseFilterOptions, BaseSortableFilterOptions, SortableFilterOptions } from '../cardinal-sdk-ts.mjs';
import { HealthcareParty } from '../model/HealthcareParty.mjs';
import { Identifier } from '../model/base/Identifier.mjs';
interface HealthcarePartyFiltersFactory {
    all(): BaseFilterOptions<HealthcareParty>;
    byIdentifiers(identifiers: Array<Identifier>): BaseFilterOptions<HealthcareParty>;
    byCode(codeType: string, options?: {
        codeCode?: string | undefined;
    }): BaseSortableFilterOptions<HealthcareParty>;
    byTag(tagType: string, options?: {
        tagCode?: string | undefined;
    }): BaseSortableFilterOptions<HealthcareParty>;
    byIds(ids: Array<string>): SortableFilterOptions<HealthcareParty>;
    byName(searchString: string, options?: {
        descending?: boolean;
    }): BaseSortableFilterOptions<HealthcareParty>;
    byNationalIdentifier(searchString: string, options?: {
        descending?: boolean;
    }): BaseSortableFilterOptions<HealthcareParty>;
    byParentId(parentId: string): BaseFilterOptions<HealthcareParty>;
    byTypeSpecialtyPostCode(specialty: string, specCode: string, startPostCode: string, endPostCode: string): BaseFilterOptions<HealthcareParty>;
}
export declare const HealthcarePartyFilters: HealthcarePartyFiltersFactory;
export {};
