// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
export class HealthcareParty {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.created = undefined;
        this.modified = undefined;
        this.deletionDate = undefined;
        this.identifier = [];
        this.tags = [];
        this.codes = [];
        this.name = undefined;
        this.lastName = undefined;
        this.firstName = undefined;
        this.names = [];
        this.gender = undefined;
        this.civility = undefined;
        this.companyName = undefined;
        this.speciality = undefined;
        this.bankAccount = undefined;
        this.bic = undefined;
        this.proxyBankAccount = undefined;
        this.proxyBic = undefined;
        this.invoiceHeader = undefined;
        this.cbe = undefined;
        this.ehp = undefined;
        this.userId = undefined;
        this.parentId = undefined;
        this.convention = undefined;
        this.nihii = undefined;
        this.nihiiSpecCode = undefined;
        this.ssin = undefined;
        this.addresses = [];
        this.languages = [];
        this.picture = undefined;
        this.statuses = [];
        this.statusHistory = [];
        this.specialityCodes = [];
        this.sendFormats = {};
        this.notes = undefined;
        this.financialInstitutionInformation = [];
        this.descr = {};
        this.billingType = undefined;
        this.type = undefined;
        this.contactPerson = undefined;
        this.contactPersonHcpId = undefined;
        this.supervisorId = undefined;
        this.flatRateTarifications = [];
        this.importedData = {};
        this.options = {};
        this.properties = [];
        this.hcPartyKeys = {};
        this.aesExchangeKeys = {};
        this.transferKeys = {};
        this.privateKeyShamirPartitions = {};
        this.publicKey = undefined;
        this.publicKeysForOaepWithSha256 = [];
        this.$ktClass = 'com.icure.cardinal.sdk.model.HealthcareParty';
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('created' in partial)
            this.created = partial.created;
        if ('modified' in partial)
            this.modified = partial.modified;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('identifier' in partial && partial.identifier !== undefined)
            this.identifier = partial.identifier;
        if ('tags' in partial && partial.tags !== undefined)
            this.tags = partial.tags;
        if ('codes' in partial && partial.codes !== undefined)
            this.codes = partial.codes;
        if ('name' in partial)
            this.name = partial.name;
        if ('lastName' in partial)
            this.lastName = partial.lastName;
        if ('firstName' in partial)
            this.firstName = partial.firstName;
        if ('names' in partial && partial.names !== undefined)
            this.names = partial.names;
        if ('gender' in partial)
            this.gender = partial.gender;
        if ('civility' in partial)
            this.civility = partial.civility;
        if ('companyName' in partial)
            this.companyName = partial.companyName;
        if ('speciality' in partial)
            this.speciality = partial.speciality;
        if ('bankAccount' in partial)
            this.bankAccount = partial.bankAccount;
        if ('bic' in partial)
            this.bic = partial.bic;
        if ('proxyBankAccount' in partial)
            this.proxyBankAccount = partial.proxyBankAccount;
        if ('proxyBic' in partial)
            this.proxyBic = partial.proxyBic;
        if ('invoiceHeader' in partial)
            this.invoiceHeader = partial.invoiceHeader;
        if ('cbe' in partial)
            this.cbe = partial.cbe;
        if ('ehp' in partial)
            this.ehp = partial.ehp;
        if ('userId' in partial)
            this.userId = partial.userId;
        if ('parentId' in partial)
            this.parentId = partial.parentId;
        if ('convention' in partial)
            this.convention = partial.convention;
        if ('nihii' in partial)
            this.nihii = partial.nihii;
        if ('nihiiSpecCode' in partial)
            this.nihiiSpecCode = partial.nihiiSpecCode;
        if ('ssin' in partial)
            this.ssin = partial.ssin;
        if ('addresses' in partial && partial.addresses !== undefined)
            this.addresses = partial.addresses;
        if ('languages' in partial && partial.languages !== undefined)
            this.languages = partial.languages;
        if ('picture' in partial)
            this.picture = partial.picture;
        if ('statuses' in partial && partial.statuses !== undefined)
            this.statuses = partial.statuses;
        if ('statusHistory' in partial && partial.statusHistory !== undefined)
            this.statusHistory = partial.statusHistory;
        if ('specialityCodes' in partial && partial.specialityCodes !== undefined)
            this.specialityCodes = partial.specialityCodes;
        if ('sendFormats' in partial && partial.sendFormats !== undefined)
            this.sendFormats = partial.sendFormats;
        if ('notes' in partial)
            this.notes = partial.notes;
        if ('financialInstitutionInformation' in partial && partial.financialInstitutionInformation !== undefined)
            this.financialInstitutionInformation = partial.financialInstitutionInformation;
        if ('descr' in partial)
            this.descr = partial.descr;
        if ('billingType' in partial)
            this.billingType = partial.billingType;
        if ('type' in partial)
            this.type = partial.type;
        if ('contactPerson' in partial)
            this.contactPerson = partial.contactPerson;
        if ('contactPersonHcpId' in partial)
            this.contactPersonHcpId = partial.contactPersonHcpId;
        if ('supervisorId' in partial)
            this.supervisorId = partial.supervisorId;
        if ('flatRateTarifications' in partial && partial.flatRateTarifications !== undefined)
            this.flatRateTarifications = partial.flatRateTarifications;
        if ('importedData' in partial && partial.importedData !== undefined)
            this.importedData = partial.importedData;
        if ('options' in partial && partial.options !== undefined)
            this.options = partial.options;
        if ('properties' in partial && partial.properties !== undefined)
            this.properties = partial.properties;
        if ('hcPartyKeys' in partial && partial.hcPartyKeys !== undefined)
            this.hcPartyKeys = partial.hcPartyKeys;
        if ('aesExchangeKeys' in partial && partial.aesExchangeKeys !== undefined)
            this.aesExchangeKeys = partial.aesExchangeKeys;
        if ('transferKeys' in partial && partial.transferKeys !== undefined)
            this.transferKeys = partial.transferKeys;
        if ('privateKeyShamirPartitions' in partial && partial.privateKeyShamirPartitions !== undefined)
            this.privateKeyShamirPartitions = partial.privateKeyShamirPartitions;
        if ('publicKey' in partial)
            this.publicKey = partial.publicKey;
        if ('publicKeysForOaepWithSha256' in partial && partial.publicKeysForOaepWithSha256 !== undefined)
            this.publicKeysForOaepWithSha256 = partial.publicKeysForOaepWithSha256;
    }
}
//# sourceMappingURL=HealthcareParty.mjs.map