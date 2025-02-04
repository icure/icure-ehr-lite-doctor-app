import { Measure } from './Measure.mjs';
import { Medication } from './Medication.mjs';
import { DecryptedService, EncryptedService, Service } from './Service.mjs';
import { TimeSeries } from './TimeSeries.mjs';
export interface Content {
    stringValue: string | undefined;
    numberValue: number | undefined;
    booleanValue: boolean | undefined;
    instantValue: number | undefined;
    fuzzyDateValue: number | undefined;
    binaryValue: Int8Array | undefined;
    documentId: string | undefined;
    measureValue: Measure | undefined;
    medicationValue: Medication | undefined;
    timeSeries: TimeSeries | undefined;
    compoundValue: Array<Service> | undefined;
    ratio: Array<Measure> | undefined;
    range: Array<Measure> | undefined;
    readonly isEncrypted: boolean;
}
export declare class DecryptedContent {
    stringValue: string | undefined;
    numberValue: number | undefined;
    booleanValue: boolean | undefined;
    instantValue: number | undefined;
    fuzzyDateValue: number | undefined;
    binaryValue: Int8Array | undefined;
    documentId: string | undefined;
    measureValue: Measure | undefined;
    medicationValue: Medication | undefined;
    timeSeries: TimeSeries | undefined;
    compoundValue: Array<DecryptedService> | undefined;
    ratio: Array<Measure> | undefined;
    range: Array<Measure> | undefined;
    readonly isEncrypted: false;
    constructor(partial: Partial<DecryptedContent>);
}
export declare class EncryptedContent {
    stringValue: string | undefined;
    numberValue: number | undefined;
    booleanValue: boolean | undefined;
    instantValue: number | undefined;
    fuzzyDateValue: number | undefined;
    binaryValue: Int8Array | undefined;
    documentId: string | undefined;
    measureValue: Measure | undefined;
    medicationValue: Medication | undefined;
    timeSeries: TimeSeries | undefined;
    compoundValue: Array<EncryptedService> | undefined;
    ratio: Array<Measure> | undefined;
    range: Array<Measure> | undefined;
    readonly isEncrypted: true;
    constructor(partial: Partial<EncryptedContent>);
}
