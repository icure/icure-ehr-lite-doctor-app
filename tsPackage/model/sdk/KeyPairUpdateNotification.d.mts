import { SpkiHexString } from '../specializations/SpkiHexString.mjs';
import { DecryptedMaintenanceTask } from "../MaintenanceTask.mjs";
export declare class KeyPairUpdateNotification {
    newPublicKey: SpkiHexString;
    concernedDataOwnerId: string;
    constructor(partial: Partial<KeyPairUpdateNotification> & Pick<KeyPairUpdateNotification, "newPublicKey" | "concernedDataOwnerId">);
    static get TASK_TYPE(): string;
    static parseFromMaintenanceTask(task: DecryptedMaintenanceTask): KeyPairUpdateNotification;
}
