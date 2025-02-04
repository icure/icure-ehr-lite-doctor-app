// auto-generated file
import { InternalMessageFiltersObj } from '../cardinal-sdk-ts.mjs';
export const MessageFilters = {
    allMessagesForDataOwner: (dataOwnerId) => InternalMessageFiltersObj.getInstance().allMessagesForDataOwner(dataOwnerId),
    allMessagesForSelf: () => InternalMessageFiltersObj.getInstance().allMessagesForSelf(),
    byTransportGuidForDataOwner: (dataOwnerId, transportGuid) => InternalMessageFiltersObj.getInstance().byTransportGuidForDataOwner(dataOwnerId, transportGuid),
    byTransportGuidForSelf: (transportGuid) => InternalMessageFiltersObj.getInstance().byTransportGuidForSelf(transportGuid),
    fromAddressForDataOwner: (dataOwnerId, address) => InternalMessageFiltersObj.getInstance().fromAddressForDataOwner(dataOwnerId, address),
    fromAddressForSelf: (address) => InternalMessageFiltersObj.getInstance().fromAddressForSelf(address),
    byPatientsSentDateForDataOwner: (dataOwnerId, patients, options) => InternalMessageFiltersObj.getInstance().byPatientsSentDateForDataOwner(dataOwnerId, patients, options),
    byPatientsSentDateForSelf: (patients, options) => InternalMessageFiltersObj.getInstance().byPatientsSentDateForSelf(patients, options),
    byPatientSecretIdsSentDateForDataOwner: (dataOwnerId, secretIds, options) => InternalMessageFiltersObj.getInstance().byPatientSecretIdsSentDateForDataOwner(dataOwnerId, secretIds, options),
    byPatientSecretIdsSentDateForSelf: (secretIds, options) => InternalMessageFiltersObj.getInstance().byPatientSecretIdsSentDateForSelf(secretIds, options),
    toAddressForDataOwner: (dataOwnerId, address) => InternalMessageFiltersObj.getInstance().toAddressForDataOwner(dataOwnerId, address),
    toAddressForSelf: (address) => InternalMessageFiltersObj.getInstance().toAddressForSelf(address),
    byTransportGuidSentDateForDataOwner: (dataOwnerId, transportGuid, from, to, options) => InternalMessageFiltersObj.getInstance().byTransportGuidSentDateForDataOwner(dataOwnerId, transportGuid, from, to, options),
    byTransportGuidSentDateForSelf: (transportGuid, from, to, options) => InternalMessageFiltersObj.getInstance().byTransportGuidSentDateForSelf(transportGuid, from, to, options),
    latestByTransportGuidForDataOwner: (dataOwnerId, transportGuid) => InternalMessageFiltersObj.getInstance().latestByTransportGuidForDataOwner(dataOwnerId, transportGuid),
    latestByTransportGuidForSelf: (transportGuid) => InternalMessageFiltersObj.getInstance().latestByTransportGuidForSelf(transportGuid),
    byInvoiceIds: (invoiceIds) => InternalMessageFiltersObj.getInstance().byInvoiceIds(invoiceIds),
    byParentIds: (parentIds) => InternalMessageFiltersObj.getInstance().byParentIds(parentIds)
};
//# sourceMappingURL=MessageFilters.mjs.map