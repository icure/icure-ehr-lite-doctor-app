// auto-generated file
export class ReplicationStats {
    constructor(partial) {
        this.revisionsChecked = undefined;
        this.missingRevisionsFound = undefined;
        this.docsRead = undefined;
        this.docsWritten = undefined;
        this.changesPending = undefined;
        this.docWriteFailures = undefined;
        this.checkpointedSourceSeq = undefined;
        this.startTime = undefined;
        this.error = undefined;
        if ('revisionsChecked' in partial)
            this.revisionsChecked = partial.revisionsChecked;
        if ('missingRevisionsFound' in partial)
            this.missingRevisionsFound = partial.missingRevisionsFound;
        if ('docsRead' in partial)
            this.docsRead = partial.docsRead;
        if ('docsWritten' in partial)
            this.docsWritten = partial.docsWritten;
        if ('changesPending' in partial)
            this.changesPending = partial.changesPending;
        if ('docWriteFailures' in partial)
            this.docWriteFailures = partial.docWriteFailures;
        if ('checkpointedSourceSeq' in partial)
            this.checkpointedSourceSeq = partial.checkpointedSourceSeq;
        if ('startTime' in partial)
            this.startTime = partial.startTime;
        if ('error' in partial)
            this.error = partial.error;
    }
}
//# sourceMappingURL=ReplicationStats.mjs.map