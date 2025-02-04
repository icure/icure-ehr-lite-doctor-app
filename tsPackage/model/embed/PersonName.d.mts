import { PersonNameUse } from './PersonNameUse.mjs';
export declare class PersonName {
    lastName: string | undefined;
    firstNames: Array<string>;
    start: number | undefined;
    end: number | undefined;
    prefix: Array<string>;
    suffix: Array<string>;
    text: string | undefined;
    use: PersonNameUse | undefined;
    constructor(partial: Partial<PersonName>);
}
