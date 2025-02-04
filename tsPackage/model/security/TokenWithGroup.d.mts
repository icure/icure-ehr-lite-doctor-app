export declare class TokenWithGroup {
    token: string;
    groupId: string;
    groupName: string | undefined;
    constructor(partial: Partial<TokenWithGroup> & Pick<TokenWithGroup, "token" | "groupId">);
}
