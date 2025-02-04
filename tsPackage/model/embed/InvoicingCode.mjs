export class DecryptedInvoicingCode {
    constructor(partial) {
        this.dateCode = undefined;
        this.logicalId = undefined;
        this.label = undefined;
        this.userId = undefined;
        this.contactId = undefined;
        this.serviceId = undefined;
        this.tarificationId = undefined;
        this.code = undefined;
        this.paymentType = undefined;
        this.paid = undefined;
        this.totalAmount = undefined;
        this.reimbursement = undefined;
        this.patientIntervention = undefined;
        this.doctorSupplement = undefined;
        this.conventionAmount = undefined;
        this.vat = undefined;
        this.error = undefined;
        this.contract = undefined;
        this.contractDate = undefined;
        this.units = undefined;
        this.side = undefined;
        this.timeOfDay = undefined;
        this.eidReadingHour = undefined;
        this.eidReadingValue = undefined;
        this.override3rdPayerCode = undefined;
        this.override3rdPayerReason = undefined;
        this.transplantationCode = undefined;
        this.prescriberNorm = undefined;
        this.percentNorm = undefined;
        this.prescriberNihii = undefined;
        this.relatedCode = undefined;
        this.prescriptionDate = undefined;
        this.derogationMaxNumber = undefined;
        this.prescriberSsin = undefined;
        this.prescriberLastName = undefined;
        this.prescriberFirstName = undefined;
        this.prescriberCdHcParty = undefined;
        this.locationNihii = undefined;
        this.locationCdHcParty = undefined;
        this.locationService = undefined;
        this.admissionDate = undefined;
        this.canceled = undefined;
        this.accepted = undefined;
        this.pending = undefined;
        this.resent = undefined;
        this.archived = undefined;
        this.lost = undefined;
        this.insuranceJustification = undefined;
        this.cancelPatientInterventionReason = undefined;
        this.status = undefined;
        this.encryptedSelf = undefined;
        this.isEncrypted = false;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        this.id = partial.id;
        if ('dateCode' in partial)
            this.dateCode = partial.dateCode;
        if ('logicalId' in partial)
            this.logicalId = partial.logicalId;
        if ('label' in partial)
            this.label = partial.label;
        if ('userId' in partial)
            this.userId = partial.userId;
        if ('contactId' in partial)
            this.contactId = partial.contactId;
        if ('serviceId' in partial)
            this.serviceId = partial.serviceId;
        if ('tarificationId' in partial)
            this.tarificationId = partial.tarificationId;
        if ('code' in partial)
            this.code = partial.code;
        if ('paymentType' in partial)
            this.paymentType = partial.paymentType;
        if ('paid' in partial)
            this.paid = partial.paid;
        if ('totalAmount' in partial)
            this.totalAmount = partial.totalAmount;
        if ('reimbursement' in partial)
            this.reimbursement = partial.reimbursement;
        if ('patientIntervention' in partial)
            this.patientIntervention = partial.patientIntervention;
        if ('doctorSupplement' in partial)
            this.doctorSupplement = partial.doctorSupplement;
        if ('conventionAmount' in partial)
            this.conventionAmount = partial.conventionAmount;
        if ('vat' in partial)
            this.vat = partial.vat;
        if ('error' in partial)
            this.error = partial.error;
        if ('contract' in partial)
            this.contract = partial.contract;
        if ('contractDate' in partial)
            this.contractDate = partial.contractDate;
        if ('units' in partial)
            this.units = partial.units;
        if ('side' in partial)
            this.side = partial.side;
        if ('timeOfDay' in partial)
            this.timeOfDay = partial.timeOfDay;
        if ('eidReadingHour' in partial)
            this.eidReadingHour = partial.eidReadingHour;
        if ('eidReadingValue' in partial)
            this.eidReadingValue = partial.eidReadingValue;
        if ('override3rdPayerCode' in partial)
            this.override3rdPayerCode = partial.override3rdPayerCode;
        if ('override3rdPayerReason' in partial)
            this.override3rdPayerReason = partial.override3rdPayerReason;
        if ('transplantationCode' in partial)
            this.transplantationCode = partial.transplantationCode;
        if ('prescriberNorm' in partial)
            this.prescriberNorm = partial.prescriberNorm;
        if ('percentNorm' in partial)
            this.percentNorm = partial.percentNorm;
        if ('prescriberNihii' in partial)
            this.prescriberNihii = partial.prescriberNihii;
        if ('relatedCode' in partial)
            this.relatedCode = partial.relatedCode;
        if ('prescriptionDate' in partial)
            this.prescriptionDate = partial.prescriptionDate;
        if ('derogationMaxNumber' in partial)
            this.derogationMaxNumber = partial.derogationMaxNumber;
        if ('prescriberSsin' in partial)
            this.prescriberSsin = partial.prescriberSsin;
        if ('prescriberLastName' in partial)
            this.prescriberLastName = partial.prescriberLastName;
        if ('prescriberFirstName' in partial)
            this.prescriberFirstName = partial.prescriberFirstName;
        if ('prescriberCdHcParty' in partial)
            this.prescriberCdHcParty = partial.prescriberCdHcParty;
        if ('locationNihii' in partial)
            this.locationNihii = partial.locationNihii;
        if ('locationCdHcParty' in partial)
            this.locationCdHcParty = partial.locationCdHcParty;
        if ('locationService' in partial)
            this.locationService = partial.locationService;
        if ('admissionDate' in partial)
            this.admissionDate = partial.admissionDate;
        if ('canceled' in partial)
            this.canceled = partial.canceled;
        if ('accepted' in partial)
            this.accepted = partial.accepted;
        if ('pending' in partial)
            this.pending = partial.pending;
        if ('resent' in partial)
            this.resent = partial.resent;
        if ('archived' in partial)
            this.archived = partial.archived;
        if ('lost' in partial)
            this.lost = partial.lost;
        if ('insuranceJustification' in partial)
            this.insuranceJustification = partial.insuranceJustification;
        if ('cancelPatientInterventionReason' in partial)
            this.cancelPatientInterventionReason = partial.cancelPatientInterventionReason;
        if ('status' in partial)
            this.status = partial.status;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
export class EncryptedInvoicingCode {
    constructor(partial) {
        this.dateCode = undefined;
        this.logicalId = undefined;
        this.label = undefined;
        this.userId = undefined;
        this.contactId = undefined;
        this.serviceId = undefined;
        this.tarificationId = undefined;
        this.code = undefined;
        this.paymentType = undefined;
        this.paid = undefined;
        this.totalAmount = undefined;
        this.reimbursement = undefined;
        this.patientIntervention = undefined;
        this.doctorSupplement = undefined;
        this.conventionAmount = undefined;
        this.vat = undefined;
        this.error = undefined;
        this.contract = undefined;
        this.contractDate = undefined;
        this.units = undefined;
        this.side = undefined;
        this.timeOfDay = undefined;
        this.eidReadingHour = undefined;
        this.eidReadingValue = undefined;
        this.override3rdPayerCode = undefined;
        this.override3rdPayerReason = undefined;
        this.transplantationCode = undefined;
        this.prescriberNorm = undefined;
        this.percentNorm = undefined;
        this.prescriberNihii = undefined;
        this.relatedCode = undefined;
        this.prescriptionDate = undefined;
        this.derogationMaxNumber = undefined;
        this.prescriberSsin = undefined;
        this.prescriberLastName = undefined;
        this.prescriberFirstName = undefined;
        this.prescriberCdHcParty = undefined;
        this.locationNihii = undefined;
        this.locationCdHcParty = undefined;
        this.locationService = undefined;
        this.admissionDate = undefined;
        this.canceled = undefined;
        this.accepted = undefined;
        this.pending = undefined;
        this.resent = undefined;
        this.archived = undefined;
        this.lost = undefined;
        this.insuranceJustification = undefined;
        this.cancelPatientInterventionReason = undefined;
        this.status = undefined;
        this.encryptedSelf = undefined;
        this.isEncrypted = true;
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        this.id = partial.id;
        if ('dateCode' in partial)
            this.dateCode = partial.dateCode;
        if ('logicalId' in partial)
            this.logicalId = partial.logicalId;
        if ('label' in partial)
            this.label = partial.label;
        if ('userId' in partial)
            this.userId = partial.userId;
        if ('contactId' in partial)
            this.contactId = partial.contactId;
        if ('serviceId' in partial)
            this.serviceId = partial.serviceId;
        if ('tarificationId' in partial)
            this.tarificationId = partial.tarificationId;
        if ('code' in partial)
            this.code = partial.code;
        if ('paymentType' in partial)
            this.paymentType = partial.paymentType;
        if ('paid' in partial)
            this.paid = partial.paid;
        if ('totalAmount' in partial)
            this.totalAmount = partial.totalAmount;
        if ('reimbursement' in partial)
            this.reimbursement = partial.reimbursement;
        if ('patientIntervention' in partial)
            this.patientIntervention = partial.patientIntervention;
        if ('doctorSupplement' in partial)
            this.doctorSupplement = partial.doctorSupplement;
        if ('conventionAmount' in partial)
            this.conventionAmount = partial.conventionAmount;
        if ('vat' in partial)
            this.vat = partial.vat;
        if ('error' in partial)
            this.error = partial.error;
        if ('contract' in partial)
            this.contract = partial.contract;
        if ('contractDate' in partial)
            this.contractDate = partial.contractDate;
        if ('units' in partial)
            this.units = partial.units;
        if ('side' in partial)
            this.side = partial.side;
        if ('timeOfDay' in partial)
            this.timeOfDay = partial.timeOfDay;
        if ('eidReadingHour' in partial)
            this.eidReadingHour = partial.eidReadingHour;
        if ('eidReadingValue' in partial)
            this.eidReadingValue = partial.eidReadingValue;
        if ('override3rdPayerCode' in partial)
            this.override3rdPayerCode = partial.override3rdPayerCode;
        if ('override3rdPayerReason' in partial)
            this.override3rdPayerReason = partial.override3rdPayerReason;
        if ('transplantationCode' in partial)
            this.transplantationCode = partial.transplantationCode;
        if ('prescriberNorm' in partial)
            this.prescriberNorm = partial.prescriberNorm;
        if ('percentNorm' in partial)
            this.percentNorm = partial.percentNorm;
        if ('prescriberNihii' in partial)
            this.prescriberNihii = partial.prescriberNihii;
        if ('relatedCode' in partial)
            this.relatedCode = partial.relatedCode;
        if ('prescriptionDate' in partial)
            this.prescriptionDate = partial.prescriptionDate;
        if ('derogationMaxNumber' in partial)
            this.derogationMaxNumber = partial.derogationMaxNumber;
        if ('prescriberSsin' in partial)
            this.prescriberSsin = partial.prescriberSsin;
        if ('prescriberLastName' in partial)
            this.prescriberLastName = partial.prescriberLastName;
        if ('prescriberFirstName' in partial)
            this.prescriberFirstName = partial.prescriberFirstName;
        if ('prescriberCdHcParty' in partial)
            this.prescriberCdHcParty = partial.prescriberCdHcParty;
        if ('locationNihii' in partial)
            this.locationNihii = partial.locationNihii;
        if ('locationCdHcParty' in partial)
            this.locationCdHcParty = partial.locationCdHcParty;
        if ('locationService' in partial)
            this.locationService = partial.locationService;
        if ('admissionDate' in partial)
            this.admissionDate = partial.admissionDate;
        if ('canceled' in partial)
            this.canceled = partial.canceled;
        if ('accepted' in partial)
            this.accepted = partial.accepted;
        if ('pending' in partial)
            this.pending = partial.pending;
        if ('resent' in partial)
            this.resent = partial.resent;
        if ('archived' in partial)
            this.archived = partial.archived;
        if ('lost' in partial)
            this.lost = partial.lost;
        if ('insuranceJustification' in partial)
            this.insuranceJustification = partial.insuranceJustification;
        if ('cancelPatientInterventionReason' in partial)
            this.cancelPatientInterventionReason = partial.cancelPatientInterventionReason;
        if ('status' in partial)
            this.status = partial.status;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
    }
}
//# sourceMappingURL=InvoicingCode.mjs.map