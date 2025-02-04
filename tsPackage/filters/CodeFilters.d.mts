import { BaseFilterOptions, BaseSortableFilterOptions } from '../cardinal-sdk-ts.mjs';
import { Code } from '../model/Code.mjs';
interface CodeFiltersFactory {
    all(): BaseFilterOptions<Code>;
    byIds(ids: Array<string>): BaseSortableFilterOptions<Code>;
    byQualifiedLink(linkType: string, options?: {
        linkedId?: string | undefined;
    }): BaseFilterOptions<Code>;
    byRegionTypeCodeVersion(region: string, options?: {
        type?: string | undefined;
        code?: string | undefined;
        version?: string | undefined;
    }): BaseFilterOptions<Code>;
    byLanguageTypeLabelRegion(language: string, type: string, options?: {
        label?: string | undefined;
        region?: string | undefined;
    }): BaseFilterOptions<Code>;
    byLanguageTypesLabelRegionVersion(language: string, types: Array<string>, label: string, options?: {
        region?: string | undefined;
        version?: string | undefined;
    }): BaseFilterOptions<Code>;
}
export declare const CodeFilters: CodeFiltersFactory;
export {};
