import { BaseFilterOptions, BaseSortableFilterOptions, PaginatedListIterator } from '../cardinal-sdk-ts.mjs';
import { Agenda } from '../model/Agenda.mjs';
import { IdWithMandatoryRev } from '../model/IdWithMandatoryRev.mjs';
import { PaginatedList } from '../model/PaginatedList.mjs';
import { DocIdentifier } from '../model/couchdb/DocIdentifier.mjs';
export interface AgendaApi {
    getAllAgendas(startDocumentId: string | undefined, limit: number | undefined): Promise<PaginatedList<Agenda>>;
    createAgenda(agendaDto: Agenda): Promise<Agenda>;
    deleteAgendaUnsafe(entityId: string): Promise<DocIdentifier>;
    deleteAgendasUnsafe(entityIds: Array<string>): Promise<Array<DocIdentifier>>;
    deleteAgendaById(entityId: string, rev: string): Promise<DocIdentifier>;
    deleteAgendasByIds(entityIds: Array<IdWithMandatoryRev>): Promise<Array<DocIdentifier>>;
    purgeAgendaById(id: string, rev: string): Promise<void>;
    undeleteAgendaById(id: string, rev: string): Promise<Agenda>;
    deleteAgenda(agenda: Agenda): Promise<DocIdentifier>;
    deleteAgendas(agendas: Array<Agenda>): Promise<Array<DocIdentifier>>;
    purgeAgenda(agenda: Agenda): Promise<void>;
    undeleteAgenda(agenda: Agenda): Promise<Agenda>;
    getAgenda(agendaId: string): Promise<Agenda>;
    getAgendas(agendaIds: Array<string>): Promise<Array<Agenda>>;
    getAgendasForUser(userId: string): Promise<Agenda>;
    getReadableAgendasForUser(userId: string): Promise<Array<Agenda>>;
    modifyAgenda(agendaDto: Agenda): Promise<Agenda>;
    matchAgendasBy(filter: BaseFilterOptions<Agenda>): Promise<Array<string>>;
    matchAgendasBySorted(filter: BaseSortableFilterOptions<Agenda>): Promise<Array<string>>;
    filterAgendasBy(filter: BaseFilterOptions<Agenda>): Promise<PaginatedListIterator<Agenda>>;
    filterAgendasBySorted(filter: BaseSortableFilterOptions<Agenda>): Promise<PaginatedListIterator<Agenda>>;
}
