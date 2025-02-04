import { PaginatedDocumentKeyIdPair } from './PaginatedDocumentKeyIdPair.mjs';
export declare class PaginatedList<T> {
    rows: Array<T>;
    nextKeyPair: PaginatedDocumentKeyIdPair | undefined;
    constructor(partial: Partial<PaginatedList<T>>);
}
