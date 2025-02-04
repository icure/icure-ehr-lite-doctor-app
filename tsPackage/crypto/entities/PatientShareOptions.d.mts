import { RequestedPermission } from '../../model/requests/RequestedPermission.mjs';
import { SecretIdShareOptions } from './SecretIdShareOptions.mjs';
import { ShareMetadataBehaviour } from './ShareMetadataBehaviour.mjs';
export declare class PatientShareOptions {
    requestedPermissions: RequestedPermission;
    shareEncryptionKey: ShareMetadataBehaviour;
    shareSecretIds: SecretIdShareOptions;
    constructor(partial: Partial<PatientShareOptions>);
}
