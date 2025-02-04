export declare class DatabaseInfo {
    id: string;
    updateSeq: string | undefined;
    fileSize: number | undefined;
    externalSize: number | undefined;
    activeSize: number | undefined;
    docs: number | undefined;
    q: number | undefined;
    n: number | undefined;
    w: number | undefined;
    r: number | undefined;
    constructor(partial: Partial<DatabaseInfo>);
}
