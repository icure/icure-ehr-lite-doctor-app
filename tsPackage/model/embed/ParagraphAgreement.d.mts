import { AgreementAppendix } from './AgreementAppendix.mjs';
export declare class ParagraphAgreement {
    timestamp: number | undefined;
    paragraph: string | undefined;
    accepted: boolean | undefined;
    inTreatment: boolean | undefined;
    canceled: boolean | undefined;
    careProviderReference: string | undefined;
    decisionReference: string | undefined;
    start: number | undefined;
    end: number | undefined;
    cancelationDate: number | undefined;
    quantityValue: number | undefined;
    quantityUnit: string | undefined;
    ioRequestReference: string | undefined;
    responseType: string | undefined;
    refusalJustification: {
        [key: string]: string;
    } | undefined;
    verses: Array<number> | undefined;
    coverageType: string | undefined;
    unitNumber: number | undefined;
    strength: number | undefined;
    strengthUnit: string | undefined;
    agreementAppendices: Array<AgreementAppendix> | undefined;
    documentId: string | undefined;
    constructor(partial: Partial<ParagraphAgreement>);
}
