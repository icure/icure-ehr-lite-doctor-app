// auto-generated file
import { InternalUserFiltersObj } from '../cardinal-sdk-ts.mjs';
export const UserFilters = {
    all: () => InternalUserFiltersObj.getInstance().all(),
    byIds: (ids) => InternalUserFiltersObj.getInstance().byIds(ids),
    byPatientId: (patientId) => InternalUserFiltersObj.getInstance().byPatientId(patientId),
    byHealthcarePartyId: (healthcarePartyId) => InternalUserFiltersObj.getInstance().byHealthcarePartyId(healthcarePartyId),
    byNameEmailOrPhone: (searchString) => InternalUserFiltersObj.getInstance().byNameEmailOrPhone(searchString)
};
//# sourceMappingURL=UserFilters.mjs.map