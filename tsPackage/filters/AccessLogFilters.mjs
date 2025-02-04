// auto-generated file
import { InternalAccessLogFiltersObj } from '../cardinal-sdk-ts.mjs';
export const AccessLogFilters = {
    byPatientsDateForDataOwner: (dataOwnerId, patients, options) => InternalAccessLogFiltersObj.getInstance().byPatientsDateForDataOwner(dataOwnerId, patients, options),
    byPatientsDateForSelf: (patients, options) => InternalAccessLogFiltersObj.getInstance().byPatientsDateForSelf(patients, options),
    byPatientSecretIdsDateForDataOwner: (dataOwnerId, secretIds, options) => InternalAccessLogFiltersObj.getInstance().byPatientSecretIdsDateForDataOwner(dataOwnerId, secretIds, options),
    byPatientSecretIdsDateForSelf: (secretIds, options) => InternalAccessLogFiltersObj.getInstance().byPatientSecretIdsDateForSelf(secretIds, options),
    byDate: (options) => InternalAccessLogFiltersObj.getInstance().byDate(options),
    byUserTypeDate: (userId, options) => InternalAccessLogFiltersObj.getInstance().byUserTypeDate(userId, options)
};
//# sourceMappingURL=AccessLogFilters.mjs.map