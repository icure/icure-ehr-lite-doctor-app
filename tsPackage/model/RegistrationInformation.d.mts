export declare class RegistrationInformation {
    firstName: string;
    lastName: string;
    emailAddress: string;
    userOptions: string | undefined;
    userRoles: Array<string>;
    minimumKrakenVersion: string | undefined;
    constructor(partial: Partial<RegistrationInformation> & Pick<RegistrationInformation, "firstName" | "lastName" | "emailAddress">);
}
