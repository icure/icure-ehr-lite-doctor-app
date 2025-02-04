import { RequestedPermission } from '../../model/requests/RequestedPermission.mjs';
import { SecretIdShareOptions } from './SecretIdShareOptions.mjs';
import { ShareMetadataBehaviour } from './ShareMetadataBehaviour.mjs';
export declare class FormShareOptions {
    requestedPermissions: RequestedPermission;
    shareEncryptionKey: ShareMetadataBehaviour;
    sharePatientId: ShareMetadataBehaviour;
    shareSecretIds: SecretIdShareOptions;
    constructor(partial: Partial<FormShareOptions>);
}
