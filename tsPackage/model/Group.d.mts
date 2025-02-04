import { DecryptedPropertyStub } from './PropertyStub.mjs';
import { CodeStub } from './base/CodeStub.mjs';
import { HasTags } from './base/HasTags.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { AuthenticationClass } from './embed/AuthenticationClass.mjs';
import { UserType } from './embed/UserType.mjs';
import { ExternalJwtSelector } from './security/ExternalJwtSelector.mjs';
import { OperationToken } from './security/OperationToken.mjs';
export declare class Group implements StoredDocument, HasTags {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    tags: Array<CodeStub>;
    name: string | undefined;
    password: string | undefined;
    servers: Array<string> | undefined;
    superAdmin: boolean;
    properties: Array<DecryptedPropertyStub>;
    defaultUserRoles: {
        [key in UserType]?: Array<string>;
    };
    operationTokens: {
        [key: string]: OperationToken;
    };
    sharedEntities: {
        [key: string]: string;
    };
    minimumKrakenVersion: string | undefined;
    externalJwtPublicKeys: {
        [key: string]: ExternalJwtSelector;
    };
    minimumAuthenticationClassForElevatedPrivileges: AuthenticationClass;
    superGroup: string | undefined;
    applicationId: string | undefined;
    constructor(partial: Partial<Group> & Pick<Group, "minimumAuthenticationClassForElevatedPrivileges">);
}
