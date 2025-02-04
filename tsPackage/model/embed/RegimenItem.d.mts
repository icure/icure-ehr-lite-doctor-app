import { CodeStub } from '../base/CodeStub.mjs';
import { AdministrationQuantity } from './AdministrationQuantity.mjs';
import { Weekday } from './Weekday.mjs';
export declare class RegimenItem {
    date: number | undefined;
    dayNumber: number | undefined;
    weekday: Weekday | undefined;
    dayPeriod: CodeStub | undefined;
    timeOfDay: number | undefined;
    administratedQuantity: AdministrationQuantity | undefined;
    constructor(partial: Partial<RegimenItem>);
}
