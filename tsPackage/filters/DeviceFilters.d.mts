import { BaseFilterOptions, BaseSortableFilterOptions } from '../cardinal-sdk-ts.mjs';
import { Device } from '../model/Device.mjs';
interface DeviceFiltersFactory {
    all(): BaseFilterOptions<Device>;
    byResponsible(responsibleId: string): BaseFilterOptions<Device>;
    byIds(ids: Array<string>): BaseSortableFilterOptions<Device>;
}
export declare const DeviceFilters: DeviceFiltersFactory;
export {};
