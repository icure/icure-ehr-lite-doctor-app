import { RequestedPermission } from '../../model/requests/RequestedPermission.mjs';
import { HexString } from '../../model/specializations/HexString.mjs';
export declare class DelegateShareOptions {
    shareSecretIds: Array<string>;
    shareEncryptionKeys: Array<HexString>;
    shareOwningEntityIds: Array<string>;
    requestedPermissions: RequestedPermission;
    constructor(partial: Partial<DelegateShareOptions> & Pick<DelegateShareOptions, "shareSecretIds" | "shareEncryptionKeys" | "shareOwningEntityIds" | "requestedPermissions">);
}
