import { BaseFilterOptions } from '../cardinal-sdk-ts.mjs';
import { Agenda } from '../model/Agenda.mjs';
interface AgendaFiltersFactory {
    all(): BaseFilterOptions<Agenda>;
    byUser(userId: string): BaseFilterOptions<Agenda>;
    readableByUser(userId: string): BaseFilterOptions<Agenda>;
}
export declare const AgendaFilters: AgendaFiltersFactory;
export {};
