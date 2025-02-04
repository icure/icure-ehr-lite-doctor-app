import { PermissionType } from './PermissionType.mjs';
export declare class AlwaysPermissionItem {
    type: PermissionType;
    readonly $ktClass: 'com.icure.cardinal.sdk.model.security.AlwaysPermissionItem';
    constructor(partial: Partial<AlwaysPermissionItem> & Pick<AlwaysPermissionItem, "type">);
}
