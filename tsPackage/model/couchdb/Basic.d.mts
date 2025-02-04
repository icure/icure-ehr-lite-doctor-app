export declare class Basic {
    username: string;
    password: string;
    constructor(partial: Partial<Basic> & Pick<Basic, "username" | "password">);
}
