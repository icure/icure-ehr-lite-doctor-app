import { BaseFilterOptions, BaseSortableFilterOptions, FilterOptions, SortableFilterOptions } from '../cardinal-sdk-ts.mjs';
import { MaintenanceTask } from '../model/MaintenanceTask.mjs';
import { Identifier } from '../model/base/Identifier.mjs';
interface MaintenanceTaskFiltersFactory {
    byIds(ids: Array<string>): BaseSortableFilterOptions<MaintenanceTask>;
    byIdentifiersForDataOwner(dataOwnerId: string, identifiers: Array<Identifier>): BaseSortableFilterOptions<MaintenanceTask>;
    byIdentifiersForSelf(identifiers: Array<Identifier>): SortableFilterOptions<MaintenanceTask>;
    byTypeForDataOwner(dataOwnerId: string, type: string): BaseFilterOptions<MaintenanceTask>;
    byTypeForSelf(type: string): FilterOptions<MaintenanceTask>;
    afterDateForDataOwner(dataOwnerId: string, date: number): BaseSortableFilterOptions<MaintenanceTask>;
    afterDateForSelf(date: number): SortableFilterOptions<MaintenanceTask>;
}
export declare const MaintenanceTaskFilters: MaintenanceTaskFiltersFactory;
export {};
