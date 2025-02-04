export declare class MultipleChoice {
    field: string;
    shortLabel: string | undefined;
    rows: number | undefined;
    columns: number | undefined;
    grows: boolean | undefined;
    multiline: boolean | undefined;
    schema: string | undefined;
    tags: Array<string> | undefined;
    codifications: Array<string> | undefined;
    options: {
        [key: string]: string;
    } | undefined;
    labels: {
        [key: string]: string;
    } | undefined;
    value: string | undefined;
    unit: string | undefined;
    required: boolean | undefined;
    hideCondition: string | undefined;
    now: boolean | undefined;
    translate: boolean | undefined;
    readonly $ktClass: 'com.icure.cardinal.sdk.model.embed.form.template.MultipleChoice';
    constructor(partial: Partial<MultipleChoice> & Pick<MultipleChoice, "field">);
}
