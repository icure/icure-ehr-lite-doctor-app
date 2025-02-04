import { TimeTableHour } from './TimeTableHour.mjs';
export declare class TimeTableItem {
    rruleStartDate: number | undefined;
    rrule: string | undefined;
    notBeforeInMinutes: number | undefined;
    notAfterInMinutes: number | undefined;
    zoneId: string | undefined;
    days: Array<string>;
    recurrenceTypes: Array<string>;
    hours: Array<TimeTableHour>;
    calendarItemTypeId: string | undefined;
    homeVisit: boolean;
    placeId: string | undefined;
    publicTimeTableItem: boolean;
    acceptsNewPatient: boolean;
    unavailable: boolean;
    constructor(partial: Partial<TimeTableItem>);
}
