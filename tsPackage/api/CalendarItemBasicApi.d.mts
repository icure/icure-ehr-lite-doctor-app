import { BaseFilterOptions, BaseSortableFilterOptions, FilterOptions, PaginatedListIterator } from '../cardinal-sdk-ts.mjs';
import { CalendarItem, EncryptedCalendarItem } from '../model/CalendarItem.mjs';
import { IdWithMandatoryRev } from '../model/IdWithMandatoryRev.mjs';
import { PaginatedList } from '../model/PaginatedList.mjs';
import { DocIdentifier } from '../model/couchdb/DocIdentifier.mjs';
import { EntitySubscription } from '../subscription/EntitySubscription.mjs';
import { EntitySubscriptionConfiguration } from '../subscription/EntitySubscriptionConfiguration.mjs';
import { SubscriptionEventType } from '../subscription/SubscriptionEventType.mjs';
export interface CalendarItemBasicApi {
    matchCalendarItemsBy(filter: BaseFilterOptions<CalendarItem>): Promise<Array<string>>;
    matchCalendarItemsBySorted(filter: BaseSortableFilterOptions<CalendarItem>): Promise<Array<string>>;
    filterCalendarItemsBy(filter: BaseFilterOptions<CalendarItem>): Promise<PaginatedListIterator<EncryptedCalendarItem>>;
    filterCalendarItemsBySorted(filter: BaseSortableFilterOptions<CalendarItem>): Promise<PaginatedListIterator<EncryptedCalendarItem>>;
    deleteCalendarItemUnsafe(entityId: string): Promise<DocIdentifier>;
    deleteCalendarItemsUnsafe(entityIds: Array<string>): Promise<Array<DocIdentifier>>;
    deleteCalendarItemById(entityId: string, rev: string): Promise<DocIdentifier>;
    deleteCalendarItemsByIds(entityIds: Array<IdWithMandatoryRev>): Promise<Array<DocIdentifier>>;
    purgeCalendarItemById(id: string, rev: string): Promise<void>;
    deleteCalendarItem(calendarItem: CalendarItem): Promise<DocIdentifier>;
    deleteCalendarItems(calendarItems: Array<CalendarItem>): Promise<Array<DocIdentifier>>;
    purgeCalendarItem(calendarItem: CalendarItem): Promise<void>;
    undeleteCalendarItemById(id: string, rev: string): Promise<EncryptedCalendarItem>;
    undeleteCalendarItem(calendarItem: CalendarItem): Promise<EncryptedCalendarItem>;
    modifyCalendarItem(entity: EncryptedCalendarItem): Promise<EncryptedCalendarItem>;
    getCalendarItem(entityId: string): Promise<EncryptedCalendarItem>;
    getCalendarItems(entityIds: Array<string>): Promise<Array<EncryptedCalendarItem>>;
    getCalendarItemsByPeriodAndHcPartyId(startDate: number, endDate: number, hcPartyId: string): Promise<Array<EncryptedCalendarItem>>;
    getCalendarsByPeriodAndAgendaId(startDate: number, endDate: number, agendaId: string): Promise<Array<EncryptedCalendarItem>>;
    findCalendarItemsByRecurrenceId(recurrenceId: string, startKey: string | undefined, startDocumentId: string | undefined, limit: number): Promise<PaginatedList<EncryptedCalendarItem>>;
    subscribeToEvents(events: Array<SubscriptionEventType>, filter: FilterOptions<CalendarItem>, options?: {
        subscriptionConfig?: EntitySubscriptionConfiguration | undefined;
    }): Promise<EntitySubscription<EncryptedCalendarItem>>;
}
