export declare class DataOwnerRegistrationSuccess {
    userLogin: string;
    userId: string;
    token: string;
    constructor(partial: Partial<DataOwnerRegistrationSuccess> & Pick<DataOwnerRegistrationSuccess, "userLogin" | "userId" | "token">);
}
