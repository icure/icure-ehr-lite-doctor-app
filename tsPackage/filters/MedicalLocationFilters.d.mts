import { BaseFilterOptions } from '../cardinal-sdk-ts.mjs';
import { MedicalLocation } from '../model/MedicalLocation.mjs';
interface MedicalLocationFiltersFactory {
    all(): BaseFilterOptions<MedicalLocation>;
    byPostCode(postCode: string): BaseFilterOptions<MedicalLocation>;
}
export declare const MedicalLocationFilters: MedicalLocationFiltersFactory;
export {};
