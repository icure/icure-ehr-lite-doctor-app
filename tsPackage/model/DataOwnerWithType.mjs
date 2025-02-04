export var DataOwnerWithType;
(function (DataOwnerWithType) {
    class HcpDataOwner {
        constructor(partial) {
            this.$ktClass = 'com.icure.cardinal.sdk.model.DataOwnerWithType.HcpDataOwner';
            this.dataOwner = partial.dataOwner;
        }
    }
    DataOwnerWithType.HcpDataOwner = HcpDataOwner;
    class PatientDataOwner {
        constructor(partial) {
            this.$ktClass = 'com.icure.cardinal.sdk.model.DataOwnerWithType.PatientDataOwner';
            this.dataOwner = partial.dataOwner;
        }
    }
    DataOwnerWithType.PatientDataOwner = PatientDataOwner;
    class DeviceDataOwner {
        constructor(partial) {
            this.$ktClass = 'com.icure.cardinal.sdk.model.DataOwnerWithType.DeviceDataOwner';
            this.dataOwner = partial.dataOwner;
        }
    }
    DataOwnerWithType.DeviceDataOwner = DeviceDataOwner;
})(DataOwnerWithType || (DataOwnerWithType = {}));
//# sourceMappingURL=DataOwnerWithType.mjs.map