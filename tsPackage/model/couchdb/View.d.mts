export declare class View {
    map: string;
    reduce: string | undefined;
    constructor(partial: Partial<View> & Pick<View, "map">);
}
