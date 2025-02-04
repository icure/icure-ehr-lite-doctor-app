import { Device } from './Device.mjs';
import { HealthcareParty } from './HealthcareParty.mjs';
import { EncryptedPatient } from './Patient.mjs';
export type DataOwnerWithType = DataOwnerWithType.HcpDataOwner | DataOwnerWithType.PatientDataOwner | DataOwnerWithType.DeviceDataOwner;
export declare namespace DataOwnerWithType {
    class HcpDataOwner {
        dataOwner: HealthcareParty;
        readonly $ktClass: 'com.icure.cardinal.sdk.model.DataOwnerWithType.HcpDataOwner';
        constructor(partial: Partial<HcpDataOwner> & Pick<HcpDataOwner, "dataOwner">);
    }
    class PatientDataOwner {
        dataOwner: EncryptedPatient;
        readonly $ktClass: 'com.icure.cardinal.sdk.model.DataOwnerWithType.PatientDataOwner';
        constructor(partial: Partial<PatientDataOwner> & Pick<PatientDataOwner, "dataOwner">);
    }
    class DeviceDataOwner {
        dataOwner: Device;
        readonly $ktClass: 'com.icure.cardinal.sdk.model.DataOwnerWithType.DeviceDataOwner';
        constructor(partial: Partial<DeviceDataOwner> & Pick<DeviceDataOwner, "dataOwner">);
    }
}
