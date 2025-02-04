export declare class AuthenticationToken {
    token: string | undefined;
    creationTime: number;
    validity: number;
    deletionDate: number | undefined;
    constructor(partial: Partial<AuthenticationToken> & Pick<AuthenticationToken, "creationTime" | "validity">);
}
