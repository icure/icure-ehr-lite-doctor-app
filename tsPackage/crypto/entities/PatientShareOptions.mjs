// auto-generated file
import { RequestedPermission } from '../../model/requests/RequestedPermission.mjs';
import { SecretIdShareOptions } from './SecretIdShareOptions.mjs';
import { ShareMetadataBehaviour } from './ShareMetadataBehaviour.mjs';
export class PatientShareOptions {
    constructor(partial) {
        this.requestedPermissions = RequestedPermission.MaxWrite;
        this.shareEncryptionKey = ShareMetadataBehaviour.IfAvailable;
        this.shareSecretIds = new SecretIdShareOptions.AllAvailable({ requireAtLeastOne: false });
        if ('requestedPermissions' in partial && partial.requestedPermissions !== undefined)
            this.requestedPermissions = partial.requestedPermissions;
        if ('shareEncryptionKey' in partial && partial.shareEncryptionKey !== undefined)
            this.shareEncryptionKey = partial.shareEncryptionKey;
        if ('shareSecretIds' in partial && partial.shareSecretIds !== undefined)
            this.shareSecretIds = partial.shareSecretIds;
    }
}
//# sourceMappingURL=PatientShareOptions.mjs.map