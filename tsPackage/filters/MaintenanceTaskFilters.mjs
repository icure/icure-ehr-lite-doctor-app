// auto-generated file
import { InternalMaintenanceTaskFiltersObj } from '../cardinal-sdk-ts.mjs';
export const MaintenanceTaskFilters = {
    byIds: (ids) => InternalMaintenanceTaskFiltersObj.getInstance().byIds(ids),
    byIdentifiersForDataOwner: (dataOwnerId, identifiers) => InternalMaintenanceTaskFiltersObj.getInstance().byIdentifiersForDataOwner(dataOwnerId, identifiers),
    byIdentifiersForSelf: (identifiers) => InternalMaintenanceTaskFiltersObj.getInstance().byIdentifiersForSelf(identifiers),
    byTypeForDataOwner: (dataOwnerId, type) => InternalMaintenanceTaskFiltersObj.getInstance().byTypeForDataOwner(dataOwnerId, type),
    byTypeForSelf: (type) => InternalMaintenanceTaskFiltersObj.getInstance().byTypeForSelf(type),
    afterDateForDataOwner: (dataOwnerId, date) => InternalMaintenanceTaskFiltersObj.getInstance().afterDateForDataOwner(dataOwnerId, date),
    afterDateForSelf: (date) => InternalMaintenanceTaskFiltersObj.getInstance().afterDateForSelf(date)
};
//# sourceMappingURL=MaintenanceTaskFilters.mjs.map