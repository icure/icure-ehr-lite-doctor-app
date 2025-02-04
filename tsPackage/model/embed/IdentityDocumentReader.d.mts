export declare class IdentityDocumentReader {
    justificatifDocumentNumber: string | undefined;
    supportSerialNumber: string | undefined;
    timeReadingEIdDocument: number | undefined;
    eidDocumentSupportType: number;
    reasonManualEncoding: number;
    reasonUsingVignette: number;
    constructor(partial: Partial<IdentityDocumentReader>);
}
