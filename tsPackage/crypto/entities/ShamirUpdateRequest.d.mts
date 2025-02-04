export declare class ShamirUpdateRequest {
    notariesIds: Array<string>;
    minShares: number;
    constructor(partial: Partial<ShamirUpdateRequest> & Pick<ShamirUpdateRequest, "notariesIds" | "minShares">);
}
