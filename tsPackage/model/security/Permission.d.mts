import { PermissionItem } from './PermissionItem.mjs';
export declare class Permission {
    grants: Array<PermissionItem>;
    revokes: Array<PermissionItem>;
    constructor(partial: Partial<Permission>);
}
