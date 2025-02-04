import { BaseFilterOptions, BaseSortableFilterOptions } from '../cardinal-sdk-ts.mjs';
import { TimeTable } from '../model/TimeTable.mjs';
interface TimeTableFiltersFactory {
    byAgendaId(agendaId: string): BaseFilterOptions<TimeTable>;
    byPeriodAndAgendaId(agendaId: string, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): BaseSortableFilterOptions<TimeTable>;
}
export declare const TimeTableFilters: TimeTableFiltersFactory;
export {};
