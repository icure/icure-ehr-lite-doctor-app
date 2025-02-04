import { HealthcarePartyStatus } from './HealthcarePartyStatus.mjs';
export declare class HealthcarePartyHistoryStatus {
    status: HealthcarePartyStatus;
    specialisationCode: string;
    startDate: number;
    active: boolean;
    constructor(partial: Partial<HealthcarePartyHistoryStatus> & Pick<HealthcarePartyHistoryStatus, "status" | "specialisationCode" | "startDate" | "active">);
}
