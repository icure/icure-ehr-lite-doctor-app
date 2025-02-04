import { StructureElement } from './StructureElement.mjs';
export declare class Section {
    section: string;
    fields: Array<StructureElement>;
    description: string | undefined;
    keywords: Array<string> | undefined;
    constructor(partial: Partial<Section> & Pick<Section, "section" | "fields">);
}
