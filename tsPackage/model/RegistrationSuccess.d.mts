export declare class RegistrationSuccess {
    groupId: string;
    userId: string;
    token: string;
    constructor(partial: Partial<RegistrationSuccess> & Pick<RegistrationSuccess, "groupId" | "userId" | "token">);
}
