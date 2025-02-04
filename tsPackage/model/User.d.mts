import { DecryptedPropertyStub } from './PropertyStub.mjs';
import { Identifier } from './base/Identifier.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { DelegationTag } from './embed/DelegationTag.mjs';
import { UsersStatus } from './enums/UsersStatus.mjs';
import { UsersType } from './enums/UsersType.mjs';
import { AuthenticationToken } from './security/AuthenticationToken.mjs';
import { Permission } from './security/Permission.mjs';
export declare class User implements StoredDocument {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    created: number | undefined;
    identifier: Array<Identifier>;
    name: string | undefined;
    properties: Array<DecryptedPropertyStub>;
    permissions: Array<Permission>;
    roles: Array<string>;
    type: UsersType | undefined;
    status: UsersStatus | undefined;
    login: string | undefined;
    passwordHash: string | undefined;
    groupId: string | undefined;
    healthcarePartyId: string | undefined;
    patientId: string | undefined;
    deviceId: string | undefined;
    autoDelegations: {
        [key in DelegationTag]?: Array<string>;
    };
    createdDate: number | undefined;
    termsOfUseDate: number | undefined;
    email: string | undefined;
    mobilePhone: string | undefined;
    applicationTokens: {
        [key: string]: string;
    };
    authenticationTokens: {
        [key: string]: AuthenticationToken;
    };
    systemMetadata: User.SystemMetadata | undefined;
    constructor(partial: Partial<User>);
}
export declare namespace User {
    class SystemMetadata {
        roles: Array<string>;
        isAdmin: boolean;
        inheritsRoles: boolean;
        constructor(partial: Partial<SystemMetadata> & Pick<SystemMetadata, "roles" | "isAdmin" | "inheritsRoles">);
    }
}
