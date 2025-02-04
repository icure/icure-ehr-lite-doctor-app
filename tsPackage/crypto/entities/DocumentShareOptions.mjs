// auto-generated file
import { RequestedPermission } from '../../model/requests/RequestedPermission.mjs';
import { SecretIdShareOptions } from './SecretIdShareOptions.mjs';
import { ShareMetadataBehaviour } from './ShareMetadataBehaviour.mjs';
export class DocumentShareOptions {
    constructor(partial) {
        this.requestedPermissions = RequestedPermission.MaxWrite;
        this.shareEncryptionKey = ShareMetadataBehaviour.IfAvailable;
        this.shareMessageId = ShareMetadataBehaviour.IfAvailable;
        this.shareSecretIds = new SecretIdShareOptions.AllAvailable({ requireAtLeastOne: false });
        if ('requestedPermissions' in partial && partial.requestedPermissions !== undefined)
            this.requestedPermissions = partial.requestedPermissions;
        if ('shareEncryptionKey' in partial && partial.shareEncryptionKey !== undefined)
            this.shareEncryptionKey = partial.shareEncryptionKey;
        if ('shareMessageId' in partial && partial.shareMessageId !== undefined)
            this.shareMessageId = partial.shareMessageId;
        if ('shareSecretIds' in partial && partial.shareSecretIds !== undefined)
            this.shareSecretIds = partial.shareSecretIds;
    }
}
//# sourceMappingURL=DocumentShareOptions.mjs.map