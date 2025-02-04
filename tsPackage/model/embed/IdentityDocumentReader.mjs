// auto-generated file
export class IdentityDocumentReader {
    constructor(partial) {
        this.justificatifDocumentNumber = undefined;
        this.supportSerialNumber = undefined;
        this.timeReadingEIdDocument = undefined;
        this.eidDocumentSupportType = 0;
        this.reasonManualEncoding = 0;
        this.reasonUsingVignette = 0;
        if ('justificatifDocumentNumber' in partial)
            this.justificatifDocumentNumber = partial.justificatifDocumentNumber;
        if ('supportSerialNumber' in partial)
            this.supportSerialNumber = partial.supportSerialNumber;
        if ('timeReadingEIdDocument' in partial)
            this.timeReadingEIdDocument = partial.timeReadingEIdDocument;
        if ('eidDocumentSupportType' in partial && partial.eidDocumentSupportType !== undefined)
            this.eidDocumentSupportType = partial.eidDocumentSupportType;
        if ('reasonManualEncoding' in partial && partial.reasonManualEncoding !== undefined)
            this.reasonManualEncoding = partial.reasonManualEncoding;
        if ('reasonUsingVignette' in partial && partial.reasonUsingVignette !== undefined)
            this.reasonUsingVignette = partial.reasonUsingVignette;
    }
}
//# sourceMappingURL=IdentityDocumentReader.mjs.map