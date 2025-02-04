import { PartnershipStatus } from './PartnershipStatus.mjs';
import { PartnershipType } from './PartnershipType.mjs';
export declare class Partnership {
    type: PartnershipType | undefined;
    status: PartnershipStatus | undefined;
    partnerId: string | undefined;
    meToOtherRelationshipDescription: string | undefined;
    otherToMeRelationshipDescription: string | undefined;
    constructor(partial: Partial<Partnership>);
}
