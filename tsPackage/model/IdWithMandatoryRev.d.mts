export declare class IdWithMandatoryRev {
    id: string;
    rev: string;
    constructor(partial: Partial<IdWithMandatoryRev> & Pick<IdWithMandatoryRev, "rev">);
}
