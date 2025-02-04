import { BaseFilterOptions, BaseSortableFilterOptions } from '../cardinal-sdk-ts.mjs';
import { User } from '../model/User.mjs';
interface UserFiltersFactory {
    all(): BaseFilterOptions<User>;
    byIds(ids: Array<string>): BaseSortableFilterOptions<User>;
    byPatientId(patientId: string): BaseFilterOptions<User>;
    byHealthcarePartyId(healthcarePartyId: string): BaseFilterOptions<User>;
    byNameEmailOrPhone(searchString: string): BaseFilterOptions<User>;
}
export declare const UserFilters: UserFiltersFactory;
export {};
