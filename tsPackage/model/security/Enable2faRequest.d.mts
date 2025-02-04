export declare class Enable2faRequest {
    secret: string;
    otpLength: number;
    constructor(partial: Partial<Enable2faRequest> & Pick<Enable2faRequest, "secret" | "otpLength">);
}
