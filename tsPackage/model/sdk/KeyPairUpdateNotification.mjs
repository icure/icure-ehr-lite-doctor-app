import { InternalKeyPairUpdateNotificationJs_COMPANION } from "../../cardinal-sdk-ts.mjs";
export class KeyPairUpdateNotification {
    constructor(partial) {
        this.newPublicKey = partial.newPublicKey;
        this.concernedDataOwnerId = partial.concernedDataOwnerId;
    }
    static get TASK_TYPE() {
        return InternalKeyPairUpdateNotificationJs_COMPANION.getInstance().TASK_TYPE;
    }
    static parseFromMaintenanceTask(task) {
        return InternalKeyPairUpdateNotificationJs_COMPANION.getInstance().parseFromMaintenanceTask(task);
    }
}
//# sourceMappingURL=KeyPairUpdateNotification.mjs.map