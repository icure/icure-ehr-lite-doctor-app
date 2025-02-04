import { BaseFilterOptions, BaseSortableFilterOptions } from '../cardinal-sdk-ts.mjs';
import { Group } from '../model/Group.mjs';
interface GroupFiltersFactory {
    all(): BaseFilterOptions<Group>;
    bySuperGroup(superGroupId: string): BaseFilterOptions<Group>;
    withContent(superGroupId: string, searchString: string): BaseSortableFilterOptions<Group>;
}
export declare const GroupFilters: GroupFiltersFactory;
export {};
