export class DecryptedMedicalHouseContract {
    constructor(partial) {
        this.contractId = undefined;
        this.validFrom = undefined;
        this.validTo = undefined;
        this.mmNihii = undefined;
        this.hcpId = undefined;
        this.changeType = undefined;
        this.parentContractId = undefined;
        this.changedBy = undefined;
        this.startOfContract = undefined;
        this.startOfCoverage = undefined;
        this.endOfContract = undefined;
        this.endOfCoverage = undefined;
        this.kine = false;
        this.gp = false;
        this.ptd = false;
        this.nurse = false;
        this.noKine = false;
        this.noGp = false;
        this.noNurse = false;
        this.unsubscriptionReasonId = undefined;
        this.ptdStart = undefined;
        this.ptdEnd = undefined;
        this.ptdLastInvoiced = undefined;
        this.startOfSuspension = undefined;
        this.endOfSuspension = undefined;
        this.suspensionReason = undefined;
        this.suspensionSource = undefined;
        this.forcedSuspension = false;
        this.signatureType = undefined;
        this.status = undefined;
        this.options = {};
        this.receipts = {};
        this.encryptedSelf = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        if ('contractId' in partial)
            this.contractId = partial.contractId;
        if ('validFrom' in partial)
            this.validFrom = partial.validFrom;
        if ('validTo' in partial)
            this.validTo = partial.validTo;
        if ('mmNihii' in partial)
            this.mmNihii = partial.mmNihii;
        if ('hcpId' in partial)
            this.hcpId = partial.hcpId;
        if ('changeType' in partial)
            this.changeType = partial.changeType;
        if ('parentContractId' in partial)
            this.parentContractId = partial.parentContractId;
        if ('changedBy' in partial)
            this.changedBy = partial.changedBy;
        if ('startOfContract' in partial)
            this.startOfContract = partial.startOfContract;
        if ('startOfCoverage' in partial)
            this.startOfCoverage = partial.startOfCoverage;
        if ('endOfContract' in partial)
            this.endOfContract = partial.endOfContract;
        if ('endOfCoverage' in partial)
            this.endOfCoverage = partial.endOfCoverage;
        if ('kine' in partial && partial.kine !== undefined)
            this.kine = partial.kine;
        if ('gp' in partial && partial.gp !== undefined)
            this.gp = partial.gp;
        if ('ptd' in partial && partial.ptd !== undefined)
            this.ptd = partial.ptd;
        if ('nurse' in partial && partial.nurse !== undefined)
            this.nurse = partial.nurse;
        if ('noKine' in partial && partial.noKine !== undefined)
            this.noKine = partial.noKine;
        if ('noGp' in partial && partial.noGp !== undefined)
            this.noGp = partial.noGp;
        if ('noNurse' in partial && partial.noNurse !== undefined)
            this.noNurse = partial.noNurse;
        if ('unsubscriptionReasonId' in partial)
            this.unsubscriptionReasonId = partial.unsubscriptionReasonId;
        if ('ptdStart' in partial)
            this.ptdStart = partial.ptdStart;
        if ('ptdEnd' in partial)
            this.ptdEnd = partial.ptdEnd;
        if ('ptdLastInvoiced' in partial)
            this.ptdLastInvoiced = partial.ptdLastInvoiced;
        if ('startOfSuspension' in partial)
            this.startOfSuspension = partial.startOfSuspension;
        if ('endOfSuspension' in partial)
            this.endOfSuspension = partial.endOfSuspension;
        if ('suspensionReason' in partial)
            this.suspensionReason = partial.suspensionReason;
        if ('suspensionSource' in partial)
            this.suspensionSource = partial.suspensionSource;
        if ('forcedSuspension' in partial && partial.forcedSuspension !== undefined)
            this.forcedSuspension = partial.forcedSuspension;
        if ('signatureType' in partial)
            this.signatureType = partial.signatureType;
        if ('status' in partial)
            this.status = partial.status;
        if ('options' in partial && partial.options !== undefined)
            this.options = partial.options;
        if ('receipts' in partial && partial.receipts !== undefined)
            this.receipts = partial.receipts;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
export class EncryptedMedicalHouseContract {
    constructor(partial) {
        this.contractId = undefined;
        this.validFrom = undefined;
        this.validTo = undefined;
        this.mmNihii = undefined;
        this.hcpId = undefined;
        this.changeType = undefined;
        this.parentContractId = undefined;
        this.changedBy = undefined;
        this.startOfContract = undefined;
        this.startOfCoverage = undefined;
        this.endOfContract = undefined;
        this.endOfCoverage = undefined;
        this.kine = false;
        this.gp = false;
        this.ptd = false;
        this.nurse = false;
        this.noKine = false;
        this.noGp = false;
        this.noNurse = false;
        this.unsubscriptionReasonId = undefined;
        this.ptdStart = undefined;
        this.ptdEnd = undefined;
        this.ptdLastInvoiced = undefined;
        this.startOfSuspension = undefined;
        this.endOfSuspension = undefined;
        this.suspensionReason = undefined;
        this.suspensionSource = undefined;
        this.forcedSuspension = false;
        this.signatureType = undefined;
        this.status = undefined;
        this.options = {};
        this.receipts = {};
        this.encryptedSelf = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        if ('contractId' in partial)
            this.contractId = partial.contractId;
        if ('validFrom' in partial)
            this.validFrom = partial.validFrom;
        if ('validTo' in partial)
            this.validTo = partial.validTo;
        if ('mmNihii' in partial)
            this.mmNihii = partial.mmNihii;
        if ('hcpId' in partial)
            this.hcpId = partial.hcpId;
        if ('changeType' in partial)
            this.changeType = partial.changeType;
        if ('parentContractId' in partial)
            this.parentContractId = partial.parentContractId;
        if ('changedBy' in partial)
            this.changedBy = partial.changedBy;
        if ('startOfContract' in partial)
            this.startOfContract = partial.startOfContract;
        if ('startOfCoverage' in partial)
            this.startOfCoverage = partial.startOfCoverage;
        if ('endOfContract' in partial)
            this.endOfContract = partial.endOfContract;
        if ('endOfCoverage' in partial)
            this.endOfCoverage = partial.endOfCoverage;
        if ('kine' in partial && partial.kine !== undefined)
            this.kine = partial.kine;
        if ('gp' in partial && partial.gp !== undefined)
            this.gp = partial.gp;
        if ('ptd' in partial && partial.ptd !== undefined)
            this.ptd = partial.ptd;
        if ('nurse' in partial && partial.nurse !== undefined)
            this.nurse = partial.nurse;
        if ('noKine' in partial && partial.noKine !== undefined)
            this.noKine = partial.noKine;
        if ('noGp' in partial && partial.noGp !== undefined)
            this.noGp = partial.noGp;
        if ('noNurse' in partial && partial.noNurse !== undefined)
            this.noNurse = partial.noNurse;
        if ('unsubscriptionReasonId' in partial)
            this.unsubscriptionReasonId = partial.unsubscriptionReasonId;
        if ('ptdStart' in partial)
            this.ptdStart = partial.ptdStart;
        if ('ptdEnd' in partial)
            this.ptdEnd = partial.ptdEnd;
        if ('ptdLastInvoiced' in partial)
            this.ptdLastInvoiced = partial.ptdLastInvoiced;
        if ('startOfSuspension' in partial)
            this.startOfSuspension = partial.startOfSuspension;
        if ('endOfSuspension' in partial)
            this.endOfSuspension = partial.endOfSuspension;
        if ('suspensionReason' in partial)
            this.suspensionReason = partial.suspensionReason;
        if ('suspensionSource' in partial)
            this.suspensionSource = partial.suspensionSource;
        if ('forcedSuspension' in partial && partial.forcedSuspension !== undefined)
            this.forcedSuspension = partial.forcedSuspension;
        if ('signatureType' in partial)
            this.signatureType = partial.signatureType;
        if ('status' in partial)
            this.status = partial.status;
        if ('options' in partial && partial.options !== undefined)
            this.options = partial.options;
        if ('receipts' in partial && partial.receipts !== undefined)
            this.receipts = partial.receipts;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
//# sourceMappingURL=MedicalHouseContract.mjs.map