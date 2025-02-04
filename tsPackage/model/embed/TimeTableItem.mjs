export class TimeTableItem {
    constructor(partial) {
        this.rruleStartDate = undefined;
        this.rrule = undefined;
        this.notBeforeInMinutes = undefined;
        this.notAfterInMinutes = undefined;
        this.zoneId = undefined;
        this.days = [];
        this.recurrenceTypes = [];
        this.hours = [];
        this.calendarItemTypeId = undefined;
        this.homeVisit = false;
        this.placeId = undefined;
        this.publicTimeTableItem = false;
        this.acceptsNewPatient = true;
        this.unavailable = false;
        if ('rruleStartDate' in partial)
            this.rruleStartDate = partial.rruleStartDate;
        if ('rrule' in partial)
            this.rrule = partial.rrule;
        if ('notBeforeInMinutes' in partial)
            this.notBeforeInMinutes = partial.notBeforeInMinutes;
        if ('notAfterInMinutes' in partial)
            this.notAfterInMinutes = partial.notAfterInMinutes;
        if ('zoneId' in partial)
            this.zoneId = partial.zoneId;
        if ('days' in partial && partial.days !== undefined)
            this.days = partial.days;
        if ('recurrenceTypes' in partial && partial.recurrenceTypes !== undefined)
            this.recurrenceTypes = partial.recurrenceTypes;
        if ('hours' in partial && partial.hours !== undefined)
            this.hours = partial.hours;
        if ('calendarItemTypeId' in partial)
            this.calendarItemTypeId = partial.calendarItemTypeId;
        if ('homeVisit' in partial && partial.homeVisit !== undefined)
            this.homeVisit = partial.homeVisit;
        if ('placeId' in partial)
            this.placeId = partial.placeId;
        if ('publicTimeTableItem' in partial && partial.publicTimeTableItem !== undefined)
            this.publicTimeTableItem = partial.publicTimeTableItem;
        if ('acceptsNewPatient' in partial && partial.acceptsNewPatient !== undefined)
            this.acceptsNewPatient = partial.acceptsNewPatient;
        if ('unavailable' in partial && partial.unavailable !== undefined)
            this.unavailable = partial.unavailable;
    }
}
//# sourceMappingURL=TimeTableItem.mjs.map