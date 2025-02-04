import { RequestedPermission } from '../../model/requests/RequestedPermission.mjs';
import { SecretIdShareOptions } from './SecretIdShareOptions.mjs';
import { ShareMetadataBehaviour } from './ShareMetadataBehaviour.mjs';
export declare class DocumentShareOptions {
    requestedPermissions: RequestedPermission;
    shareEncryptionKey: ShareMetadataBehaviour;
    shareMessageId: ShareMetadataBehaviour;
    shareSecretIds: SecretIdShareOptions;
    constructor(partial: Partial<DocumentShareOptions>);
}
