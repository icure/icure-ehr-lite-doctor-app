import { BaseFilterOptions, BaseSortableFilterOptions, FilterOptions, SortableFilterOptions } from '../cardinal-sdk-ts.mjs';
import { CalendarItem } from '../model/CalendarItem.mjs';
import { Patient } from '../model/Patient.mjs';
interface CalendarItemFiltersFactory {
    byPatientsStartTimeForDataOwner(dataOwnerId: string, patients: Array<Patient>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<CalendarItem>;
    byPatientsStartTimeForSelf(patients: Array<Patient>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<CalendarItem>;
    byPatientSecretIdsStartTimeForDataOwner(dataOwnerId: string, secretIds: Array<string>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): BaseSortableFilterOptions<CalendarItem>;
    byPatientSecretIdsStartTimeForSelf(secretIds: Array<string>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<CalendarItem>;
    byPeriodAndAgenda(agendaId: string, from: number, to: number, options?: {
        descending?: boolean;
    }): BaseSortableFilterOptions<CalendarItem>;
    byPeriodForDataOwner(dataOwnerId: string, from: number, to: number): BaseFilterOptions<CalendarItem>;
    byPeriodForSelf(from: number, to: number): FilterOptions<CalendarItem>;
    byRecurrenceId(recurrenceId: string): FilterOptions<CalendarItem>;
}
export declare const CalendarItemFilters: CalendarItemFiltersFactory;
export {};
