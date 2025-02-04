import { FilterOptions, PaginatedListIterator, SortableFilterOptions } from '../cardinal-sdk-ts.mjs';
import { FormShareOptions } from '../crypto/entities/FormShareOptions.mjs';
import { Form } from '../model/Form.mjs';
import { Patient } from '../model/Patient.mjs';
export interface FormFlavouredApi<E extends Form> {
    shareWith(delegateId: string, form: E, options?: {
        options?: FormShareOptions | undefined;
    }): Promise<E>;
    shareWithMany(form: E, delegates: {
        [key: string]: FormShareOptions;
    }): Promise<E>;
    findFormsByHcPartyPatient(hcPartyId: string, patient: Patient, options?: {
        startDate?: number | undefined;
        endDate?: number | undefined;
        descending?: boolean | undefined;
    }): Promise<PaginatedListIterator<E>>;
    filterFormsBy(filter: FilterOptions<Form>): Promise<PaginatedListIterator<E>>;
    filterFormsBySorted(filter: SortableFilterOptions<Form>): Promise<PaginatedListIterator<E>>;
    modifyForm(entity: E): Promise<E>;
    undeleteFormById(id: string, rev: string): Promise<E>;
    undeleteForm(form: Form): Promise<E>;
    modifyForms(entities: Array<E>): Promise<Array<E>>;
    getForm(entityId: string): Promise<E>;
    getForms(entityIds: Array<string>): Promise<Array<E>>;
    getLatestFormByLogicalUuid(logicalUuid: string): Promise<E>;
    getLatestFormByUniqueId(uniqueId: string): Promise<E>;
    getFormsByLogicalUuid(logicalUuid: string): Promise<Array<E>>;
    getFormsByUniqueId(uniqueId: string): Promise<Array<E>>;
    getChildrenForms(hcPartyId: string, parentId: string): Promise<Array<E>>;
}
