import { StructureElement } from './StructureElement.mjs';
export declare class FieldsGroup {
    group: string;
    fields: Array<StructureElement> | undefined;
    readonly $ktClass: 'com.icure.cardinal.sdk.model.embed.form.template.FieldsGroup';
    constructor(partial: Partial<FieldsGroup> & Pick<FieldsGroup, "group">);
}
