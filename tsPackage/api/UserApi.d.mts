import { BaseFilterOptions, BaseSortableFilterOptions, FilterOptions, PaginatedListIterator } from '../cardinal-sdk-ts.mjs';
import { ListOfIds } from '../model/ListOfIds.mjs';
import { PaginatedList } from '../model/PaginatedList.mjs';
import { EncryptedPropertyStub } from '../model/PropertyStub.mjs';
import { User } from '../model/User.mjs';
import { UserGroup } from '../model/UserGroup.mjs';
import { DocIdentifier } from '../model/couchdb/DocIdentifier.mjs';
import { Enable2faRequest } from '../model/security/Enable2faRequest.mjs';
import { TokenWithGroup } from '../model/security/TokenWithGroup.mjs';
import { EntitySubscription } from '../subscription/EntitySubscription.mjs';
import { EntitySubscriptionConfiguration } from '../subscription/EntitySubscriptionConfiguration.mjs';
import { SubscriptionEventType } from '../subscription/SubscriptionEventType.mjs';
export interface UserApi {
    deleteUserUnsafe(entityId: string): Promise<DocIdentifier>;
    getCurrentUser(): Promise<User>;
    listUsersBy(options?: {
        startKey?: string | undefined;
        startDocumentId?: string | undefined;
        limit?: number | undefined;
        skipPatients?: boolean | undefined;
    }): Promise<PaginatedList<User>>;
    createUser(user: User): Promise<User>;
    getUser(userId: string): Promise<User>;
    getUsers(userIds: Array<string>): Promise<Array<User>>;
    getUserByEmail(email: string): Promise<User>;
    getUserByPhoneNumber(phoneNumber: string): Promise<User>;
    findByHcpartyId(id: string): Promise<Array<string>>;
    findByPatientId(id: string): Promise<Array<string>>;
    modifyUser(user: User): Promise<User>;
    assignHealthcareParty(healthcarePartyId: string): Promise<User>;
    modifyProperties(userId: string, properties: Array<EncryptedPropertyStub> | undefined): Promise<User>;
    getToken(userId: string, key: string, options?: {
        tokenValidity?: number | undefined;
        token?: string | undefined;
    }): Promise<string>;
    filterUsersBy(filter: BaseFilterOptions<User>): Promise<PaginatedListIterator<User>>;
    matchUsersBy(filter: BaseFilterOptions<User>): Promise<Array<string>>;
    filterUsersBySorted(filter: BaseSortableFilterOptions<User>): Promise<PaginatedListIterator<User>>;
    matchUsersBySorted(filter: BaseSortableFilterOptions<User>): Promise<Array<string>>;
    getMatchingUsers(): Promise<Array<UserGroup>>;
    getUsersInGroup(groupId: string, userIds: Array<string>): Promise<Array<User>>;
    listUsersInGroup(groupId: string, options?: {
        startKey?: string | undefined;
        startDocumentId?: string | undefined;
        limit?: number | undefined;
    }): Promise<PaginatedList<User>>;
    createUserInGroup(groupId: string, user: User): Promise<User>;
    modifyUserInGroup(groupId: string, user: User): Promise<User>;
    setUserRoles(userId: string, rolesId: ListOfIds): Promise<User>;
    setUserRolesInGroup(userId: string, groupId: string, rolesId: ListOfIds): Promise<User>;
    resetUserRoles(userId: string): Promise<User>;
    resetUserRolesInGroup(userId: string, groupId: string): Promise<User>;
    getTokenInGroup(groupId: string, userId: string, key: string, options?: {
        token?: string | undefined;
        tokenValidity?: number | undefined;
    }): Promise<string>;
    getTokenInAllGroups(userIdentifier: string, key: string, options?: {
        token?: string | undefined;
        tokenValidity?: number | undefined;
    }): Promise<Array<TokenWithGroup>>;
    filterUsersInGroupBy(groupId: string, filter: BaseFilterOptions<User>): Promise<PaginatedListIterator<User>>;
    matchUsersInGroupBy(groupId: string, filter: BaseFilterOptions<User>): Promise<Array<string>>;
    filterUsersInGroupBySorted(groupId: string, filter: BaseSortableFilterOptions<User>): Promise<PaginatedListIterator<User>>;
    matchUsersInGroupBySorted(groupId: string, filter: BaseSortableFilterOptions<User>): Promise<Array<string>>;
    enable2faForUser(userId: string, groupId: string, request: Enable2faRequest): Promise<void>;
    enable2faForUser(userId: string, request: Enable2faRequest): Promise<void>;
    disable2faForUser(userId: string, groupId: string): Promise<void>;
    disable2faForUser(userId: string): Promise<void>;
    createAdminUser(user: User): Promise<User>;
    createAdminUserInGroup(groupId: string, user: User): Promise<User>;
    deleteUserById(entityId: string, rev: string): Promise<DocIdentifier>;
    deleteUserInGroupById(groupId: string, entityId: string, rev: string): Promise<DocIdentifier>;
    purgeUserById(id: string, rev: string): Promise<void>;
    undeleteUserById(id: string, rev: string): Promise<User>;
    deleteUser(user: User): Promise<DocIdentifier>;
    deleteUserInGroup(groupId: string, user: User): Promise<DocIdentifier>;
    purgeUser(user: User): Promise<void>;
    undeleteUser(user: User): Promise<User>;
    subscribeToEvents(events: Array<SubscriptionEventType>, filter: FilterOptions<User>, options?: {
        subscriptionConfig?: EntitySubscriptionConfiguration | undefined;
    }): Promise<EntitySubscription<User>>;
}
