export declare class LabelledOccurence {
    label: string;
    occurence: number;
    constructor(partial: Partial<LabelledOccurence> & Pick<LabelledOccurence, "label" | "occurence">);
}
