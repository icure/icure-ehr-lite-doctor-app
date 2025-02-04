import { Group } from './Group.mjs';
export declare class UserGroup {
    groupId: string | undefined;
    groupName: string | undefined;
    groupsHierarchy: Array<Group>;
    userId: string | undefined;
    login: string | undefined;
    name: string | undefined;
    email: string | undefined;
    phone: string | undefined;
    patientId: string | undefined;
    healthcarePartyId: string | undefined;
    deviceId: string | undefined;
    nameOfParentOfTopmostGroupInHierarchy: string | undefined;
    constructor(partial: Partial<UserGroup>);
}
