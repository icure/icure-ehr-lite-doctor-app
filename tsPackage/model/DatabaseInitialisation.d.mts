import { HealthcareParty } from './HealthcareParty.mjs';
import { Replication } from './Replication.mjs';
import { User } from './User.mjs';
export declare class DatabaseInitialisation {
    users: Array<User> | undefined;
    healthcareParties: Array<HealthcareParty> | undefined;
    replication: Replication | undefined;
    minimumKrakenVersion: string | undefined;
    constructor(partial: Partial<DatabaseInitialisation>);
}
