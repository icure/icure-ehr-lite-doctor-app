export declare class ReplicationStats {
    revisionsChecked: number | undefined;
    missingRevisionsFound: number | undefined;
    docsRead: number | undefined;
    docsWritten: number | undefined;
    changesPending: number | undefined;
    docWriteFailures: number | undefined;
    checkpointedSourceSeq: string | undefined;
    startTime: string | undefined;
    error: string | undefined;
    constructor(partial: Partial<ReplicationStats>);
}
