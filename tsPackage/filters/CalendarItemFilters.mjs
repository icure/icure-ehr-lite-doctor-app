// auto-generated file
import { InternalCalendarItemFiltersObj } from '../cardinal-sdk-ts.mjs';
export const CalendarItemFilters = {
    byPatientsStartTimeForDataOwner: (dataOwnerId, patients, options) => InternalCalendarItemFiltersObj.getInstance().byPatientsStartTimeForDataOwner(dataOwnerId, patients, options),
    byPatientsStartTimeForSelf: (patients, options) => InternalCalendarItemFiltersObj.getInstance().byPatientsStartTimeForSelf(patients, options),
    byPatientSecretIdsStartTimeForDataOwner: (dataOwnerId, secretIds, options) => InternalCalendarItemFiltersObj.getInstance().byPatientSecretIdsStartTimeForDataOwner(dataOwnerId, secretIds, options),
    byPatientSecretIdsStartTimeForSelf: (secretIds, options) => InternalCalendarItemFiltersObj.getInstance().byPatientSecretIdsStartTimeForSelf(secretIds, options),
    byPeriodAndAgenda: (agendaId, from, to, options) => InternalCalendarItemFiltersObj.getInstance().byPeriodAndAgenda(agendaId, from, to, options),
    byPeriodForDataOwner: (dataOwnerId, from, to) => InternalCalendarItemFiltersObj.getInstance().byPeriodForDataOwner(dataOwnerId, from, to),
    byPeriodForSelf: (from, to) => InternalCalendarItemFiltersObj.getInstance().byPeriodForSelf(from, to),
    byRecurrenceId: (recurrenceId) => InternalCalendarItemFiltersObj.getInstance().byRecurrenceId(recurrenceId)
};
//# sourceMappingURL=CalendarItemFilters.mjs.map