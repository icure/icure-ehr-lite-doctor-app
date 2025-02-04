import { Action } from './Action.mjs';
import { Section } from './Section.mjs';
export declare class FormTemplateLayout {
    form: string;
    actions: Array<Action>;
    sections: Array<Section>;
    description: string | undefined;
    keywords: Array<string> | undefined;
    constructor(partial: Partial<FormTemplateLayout> & Pick<FormTemplateLayout, "form">);
}
