import { AccessLevel } from '../../model/embed/AccessLevel.mjs';
export declare class EntityAccessInformation {
    permissionsByDataOwnerId: {
        [key: string]: AccessLevel;
    };
    hasUnknownAnonymousDataOwners: boolean;
    constructor(partial: Partial<EntityAccessInformation> & Pick<EntityAccessInformation, "permissionsByDataOwnerId" | "hasUnknownAnonymousDataOwners">);
}
