import { BaseFilterOptions, BaseSortableFilterOptions, FilterOptions, SortableFilterOptions } from '../cardinal-sdk-ts.mjs';
import { Message } from '../model/Message.mjs';
import { Patient } from '../model/Patient.mjs';
interface MessageFiltersFactory {
    allMessagesForDataOwner(dataOwnerId: string): BaseFilterOptions<Message>;
    allMessagesForSelf(): FilterOptions<Message>;
    byTransportGuidForDataOwner(dataOwnerId: string, transportGuid: string): BaseSortableFilterOptions<Message>;
    byTransportGuidForSelf(transportGuid: string): SortableFilterOptions<Message>;
    fromAddressForDataOwner(dataOwnerId: string, address: string): BaseFilterOptions<Message>;
    fromAddressForSelf(address: string): FilterOptions<Message>;
    byPatientsSentDateForDataOwner(dataOwnerId: string, patients: Array<Patient>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<Message>;
    byPatientsSentDateForSelf(patients: Array<Patient>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<Message>;
    byPatientSecretIdsSentDateForDataOwner(dataOwnerId: string, secretIds: Array<string>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): BaseSortableFilterOptions<Message>;
    byPatientSecretIdsSentDateForSelf(secretIds: Array<string>, options?: {
        from?: number | undefined;
        to?: number | undefined;
        descending?: boolean;
    }): SortableFilterOptions<Message>;
    toAddressForDataOwner(dataOwnerId: string, address: string): BaseFilterOptions<Message>;
    toAddressForSelf(address: string): FilterOptions<Message>;
    byTransportGuidSentDateForDataOwner(dataOwnerId: string, transportGuid: string, from: number, to: number, options?: {
        descending?: boolean;
    }): BaseSortableFilterOptions<Message>;
    byTransportGuidSentDateForSelf(transportGuid: string, from: number, to: number, options?: {
        descending?: boolean;
    }): SortableFilterOptions<Message>;
    latestByTransportGuidForDataOwner(dataOwnerId: string, transportGuid: string): BaseFilterOptions<Message>;
    latestByTransportGuidForSelf(transportGuid: string): FilterOptions<Message>;
    byInvoiceIds(invoiceIds: Array<string>): BaseFilterOptions<Message>;
    byParentIds(parentIds: Array<string>): BaseFilterOptions<Message>;
}
export declare const MessageFilters: MessageFiltersFactory;
export {};
