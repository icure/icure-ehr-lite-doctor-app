// auto-generated file
import { randomUuid } from '../utils/Id.mjs';
import { DeactivationReason } from './embed/DeactivationReason.mjs';
import { Gender } from './embed/Gender.mjs';
import { PersonalStatus } from './embed/PersonalStatus.mjs';
export class DecryptedPatient {
    constructor(partial) {
        var _a;
        this.identifier = [];
        this.rev = undefined;
        this.created = undefined;
        this.modified = undefined;
        this.author = undefined;
        this.responsible = undefined;
        this.tags = [];
        this.codes = [];
        this.endOfLife = undefined;
        this.deletionDate = undefined;
        this.firstName = undefined;
        this.lastName = undefined;
        this.names = [];
        this.companyName = undefined;
        this.languages = [];
        this.addresses = [];
        this.civility = undefined;
        this.gender = Gender.Unknown;
        this.birthSex = Gender.Unknown;
        this.mergeToPatientId = undefined;
        this.mergedIds = [];
        this.alias = undefined;
        this.active = true;
        this.deactivationReason = DeactivationReason.None;
        this.deactivationDate = undefined;
        this.ssin = undefined;
        this.maidenName = undefined;
        this.spouseName = undefined;
        this.partnerName = undefined;
        this.personalStatus = PersonalStatus.Unknown;
        this.dateOfBirth = undefined;
        this.dateOfDeath = undefined;
        this.timestampOfLatestEidReading = undefined;
        this.placeOfBirth = undefined;
        this.placeOfDeath = undefined;
        this.deceased = undefined;
        this.education = undefined;
        this.profession = undefined;
        this.notes = [];
        this.note = undefined;
        this.administrativeNote = undefined;
        this.nationality = undefined;
        this.race = undefined;
        this.ethnicity = undefined;
        this.preferredUserId = undefined;
        this.picture = undefined;
        this.externalId = undefined;
        this.insurabilities = [];
        this.partnerships = [];
        this.patientHealthCareParties = [];
        this.financialInstitutionInformation = [];
        this.medicalHouseContracts = [];
        this.patientProfessions = [];
        this.parameters = {};
        this.properties = [];
        this.hcPartyKeys = {};
        this.aesExchangeKeys = {};
        this.transferKeys = {};
        this.privateKeyShamirPartitions = {};
        this.publicKey = undefined;
        this.publicKeysForOaepWithSha256 = [];
        this.secretForeignKeys = [];
        this.cryptedForeignKeys = {};
        this.delegations = {};
        this.encryptionKeys = {};
        this.encryptedSelf = undefined;
        this.securityMetadata = undefined;
        this.medicalLocationId = undefined;
        this.nonDuplicateIds = [];
        this.encryptedAdministrativesDocuments = [];
        this.comment = undefined;
        this.warning = undefined;
        this.fatherBirthCountry = undefined;
        this.birthCountry = undefined;
        this.nativeCountry = undefined;
        this.socialStatus = undefined;
        this.mainSourceOfIncome = undefined;
        this.schoolingInfos = [];
        this.employementInfos = [];
        this.parentId = undefined;
        this.isEncrypted = false;
        this.$ktClass = 'com.icure.cardinal.sdk.model.DecryptedPatient';
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== false)
            throw new Error('partial.isEncrypted must be undefined or false');
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('identifier' in partial && partial.identifier !== undefined)
            this.identifier = partial.identifier;
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('created' in partial)
            this.created = partial.created;
        if ('modified' in partial)
            this.modified = partial.modified;
        if ('author' in partial)
            this.author = partial.author;
        if ('responsible' in partial)
            this.responsible = partial.responsible;
        if ('tags' in partial && partial.tags !== undefined)
            this.tags = partial.tags;
        if ('codes' in partial && partial.codes !== undefined)
            this.codes = partial.codes;
        if ('endOfLife' in partial)
            this.endOfLife = partial.endOfLife;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('firstName' in partial)
            this.firstName = partial.firstName;
        if ('lastName' in partial)
            this.lastName = partial.lastName;
        if ('names' in partial && partial.names !== undefined)
            this.names = partial.names;
        if ('companyName' in partial)
            this.companyName = partial.companyName;
        if ('languages' in partial && partial.languages !== undefined)
            this.languages = partial.languages;
        if ('addresses' in partial && partial.addresses !== undefined)
            this.addresses = partial.addresses;
        if ('civility' in partial)
            this.civility = partial.civility;
        if ('gender' in partial)
            this.gender = partial.gender;
        if ('birthSex' in partial)
            this.birthSex = partial.birthSex;
        if ('mergeToPatientId' in partial)
            this.mergeToPatientId = partial.mergeToPatientId;
        if ('mergedIds' in partial && partial.mergedIds !== undefined)
            this.mergedIds = partial.mergedIds;
        if ('alias' in partial)
            this.alias = partial.alias;
        if ('active' in partial && partial.active !== undefined)
            this.active = partial.active;
        if ('deactivationReason' in partial && partial.deactivationReason !== undefined)
            this.deactivationReason = partial.deactivationReason;
        if ('deactivationDate' in partial)
            this.deactivationDate = partial.deactivationDate;
        if ('ssin' in partial)
            this.ssin = partial.ssin;
        if ('maidenName' in partial)
            this.maidenName = partial.maidenName;
        if ('spouseName' in partial)
            this.spouseName = partial.spouseName;
        if ('partnerName' in partial)
            this.partnerName = partial.partnerName;
        if ('personalStatus' in partial)
            this.personalStatus = partial.personalStatus;
        if ('dateOfBirth' in partial)
            this.dateOfBirth = partial.dateOfBirth;
        if ('dateOfDeath' in partial)
            this.dateOfDeath = partial.dateOfDeath;
        if ('timestampOfLatestEidReading' in partial)
            this.timestampOfLatestEidReading = partial.timestampOfLatestEidReading;
        if ('placeOfBirth' in partial)
            this.placeOfBirth = partial.placeOfBirth;
        if ('placeOfDeath' in partial)
            this.placeOfDeath = partial.placeOfDeath;
        if ('deceased' in partial)
            this.deceased = partial.deceased;
        if ('education' in partial)
            this.education = partial.education;
        if ('profession' in partial)
            this.profession = partial.profession;
        if ('notes' in partial && partial.notes !== undefined)
            this.notes = partial.notes;
        if ('note' in partial)
            this.note = partial.note;
        if ('administrativeNote' in partial)
            this.administrativeNote = partial.administrativeNote;
        if ('nationality' in partial)
            this.nationality = partial.nationality;
        if ('race' in partial)
            this.race = partial.race;
        if ('ethnicity' in partial)
            this.ethnicity = partial.ethnicity;
        if ('preferredUserId' in partial)
            this.preferredUserId = partial.preferredUserId;
        if ('picture' in partial)
            this.picture = partial.picture;
        if ('externalId' in partial)
            this.externalId = partial.externalId;
        if ('insurabilities' in partial && partial.insurabilities !== undefined)
            this.insurabilities = partial.insurabilities;
        if ('partnerships' in partial && partial.partnerships !== undefined)
            this.partnerships = partial.partnerships;
        if ('patientHealthCareParties' in partial && partial.patientHealthCareParties !== undefined)
            this.patientHealthCareParties = partial.patientHealthCareParties;
        if ('financialInstitutionInformation' in partial && partial.financialInstitutionInformation !== undefined)
            this.financialInstitutionInformation = partial.financialInstitutionInformation;
        if ('medicalHouseContracts' in partial && partial.medicalHouseContracts !== undefined)
            this.medicalHouseContracts = partial.medicalHouseContracts;
        if ('patientProfessions' in partial && partial.patientProfessions !== undefined)
            this.patientProfessions = partial.patientProfessions;
        if ('parameters' in partial && partial.parameters !== undefined)
            this.parameters = partial.parameters;
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
        if ('secretForeignKeys' in partial && partial.secretForeignKeys !== undefined)
            this.secretForeignKeys = partial.secretForeignKeys;
        if ('cryptedForeignKeys' in partial && partial.cryptedForeignKeys !== undefined)
            this.cryptedForeignKeys = partial.cryptedForeignKeys;
        if ('delegations' in partial && partial.delegations !== undefined)
            this.delegations = partial.delegations;
        if ('encryptionKeys' in partial && partial.encryptionKeys !== undefined)
            this.encryptionKeys = partial.encryptionKeys;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
        if ('securityMetadata' in partial)
            this.securityMetadata = partial.securityMetadata;
        if ('medicalLocationId' in partial)
            this.medicalLocationId = partial.medicalLocationId;
        if ('nonDuplicateIds' in partial && partial.nonDuplicateIds !== undefined)
            this.nonDuplicateIds = partial.nonDuplicateIds;
        if ('encryptedAdministrativesDocuments' in partial && partial.encryptedAdministrativesDocuments !== undefined)
            this.encryptedAdministrativesDocuments = partial.encryptedAdministrativesDocuments;
        if ('comment' in partial)
            this.comment = partial.comment;
        if ('warning' in partial)
            this.warning = partial.warning;
        if ('fatherBirthCountry' in partial)
            this.fatherBirthCountry = partial.fatherBirthCountry;
        if ('birthCountry' in partial)
            this.birthCountry = partial.birthCountry;
        if ('nativeCountry' in partial)
            this.nativeCountry = partial.nativeCountry;
        if ('socialStatus' in partial)
            this.socialStatus = partial.socialStatus;
        if ('mainSourceOfIncome' in partial)
            this.mainSourceOfIncome = partial.mainSourceOfIncome;
        if ('schoolingInfos' in partial && partial.schoolingInfos !== undefined)
            this.schoolingInfos = partial.schoolingInfos;
        if ('employementInfos' in partial && partial.employementInfos !== undefined)
            this.employementInfos = partial.employementInfos;
        if ('parentId' in partial)
            this.parentId = partial.parentId;
    }
}
export class EncryptedPatient {
    constructor(partial) {
        var _a;
        this.identifier = [];
        this.rev = undefined;
        this.created = undefined;
        this.modified = undefined;
        this.author = undefined;
        this.responsible = undefined;
        this.tags = [];
        this.codes = [];
        this.endOfLife = undefined;
        this.deletionDate = undefined;
        this.firstName = undefined;
        this.lastName = undefined;
        this.names = [];
        this.companyName = undefined;
        this.languages = [];
        this.addresses = [];
        this.civility = undefined;
        this.gender = Gender.Unknown;
        this.birthSex = Gender.Unknown;
        this.mergeToPatientId = undefined;
        this.mergedIds = [];
        this.alias = undefined;
        this.active = true;
        this.deactivationReason = DeactivationReason.None;
        this.deactivationDate = undefined;
        this.ssin = undefined;
        this.maidenName = undefined;
        this.spouseName = undefined;
        this.partnerName = undefined;
        this.personalStatus = PersonalStatus.Unknown;
        this.dateOfBirth = undefined;
        this.dateOfDeath = undefined;
        this.timestampOfLatestEidReading = undefined;
        this.placeOfBirth = undefined;
        this.placeOfDeath = undefined;
        this.deceased = undefined;
        this.education = undefined;
        this.profession = undefined;
        this.notes = [];
        this.note = undefined;
        this.administrativeNote = undefined;
        this.nationality = undefined;
        this.race = undefined;
        this.ethnicity = undefined;
        this.preferredUserId = undefined;
        this.picture = undefined;
        this.externalId = undefined;
        this.insurabilities = [];
        this.partnerships = [];
        this.patientHealthCareParties = [];
        this.financialInstitutionInformation = [];
        this.medicalHouseContracts = [];
        this.patientProfessions = [];
        this.parameters = {};
        this.properties = [];
        this.hcPartyKeys = {};
        this.aesExchangeKeys = {};
        this.transferKeys = {};
        this.privateKeyShamirPartitions = {};
        this.publicKey = undefined;
        this.publicKeysForOaepWithSha256 = [];
        this.secretForeignKeys = [];
        this.cryptedForeignKeys = {};
        this.delegations = {};
        this.encryptionKeys = {};
        this.encryptedSelf = undefined;
        this.securityMetadata = undefined;
        this.medicalLocationId = undefined;
        this.nonDuplicateIds = [];
        this.encryptedAdministrativesDocuments = [];
        this.comment = undefined;
        this.warning = undefined;
        this.fatherBirthCountry = undefined;
        this.birthCountry = undefined;
        this.nativeCountry = undefined;
        this.socialStatus = undefined;
        this.mainSourceOfIncome = undefined;
        this.schoolingInfos = [];
        this.employementInfos = [];
        this.parentId = undefined;
        this.isEncrypted = true;
        this.$ktClass = 'com.icure.cardinal.sdk.model.EncryptedPatient';
        if (partial.isEncrypted !== undefined && partial.isEncrypted !== true)
            throw new Error('partial.isEncrypted must be undefined or true');
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('identifier' in partial && partial.identifier !== undefined)
            this.identifier = partial.identifier;
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('created' in partial)
            this.created = partial.created;
        if ('modified' in partial)
            this.modified = partial.modified;
        if ('author' in partial)
            this.author = partial.author;
        if ('responsible' in partial)
            this.responsible = partial.responsible;
        if ('tags' in partial && partial.tags !== undefined)
            this.tags = partial.tags;
        if ('codes' in partial && partial.codes !== undefined)
            this.codes = partial.codes;
        if ('endOfLife' in partial)
            this.endOfLife = partial.endOfLife;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('firstName' in partial)
            this.firstName = partial.firstName;
        if ('lastName' in partial)
            this.lastName = partial.lastName;
        if ('names' in partial && partial.names !== undefined)
            this.names = partial.names;
        if ('companyName' in partial)
            this.companyName = partial.companyName;
        if ('languages' in partial && partial.languages !== undefined)
            this.languages = partial.languages;
        if ('addresses' in partial && partial.addresses !== undefined)
            this.addresses = partial.addresses;
        if ('civility' in partial)
            this.civility = partial.civility;
        if ('gender' in partial)
            this.gender = partial.gender;
        if ('birthSex' in partial)
            this.birthSex = partial.birthSex;
        if ('mergeToPatientId' in partial)
            this.mergeToPatientId = partial.mergeToPatientId;
        if ('mergedIds' in partial && partial.mergedIds !== undefined)
            this.mergedIds = partial.mergedIds;
        if ('alias' in partial)
            this.alias = partial.alias;
        if ('active' in partial && partial.active !== undefined)
            this.active = partial.active;
        if ('deactivationReason' in partial && partial.deactivationReason !== undefined)
            this.deactivationReason = partial.deactivationReason;
        if ('deactivationDate' in partial)
            this.deactivationDate = partial.deactivationDate;
        if ('ssin' in partial)
            this.ssin = partial.ssin;
        if ('maidenName' in partial)
            this.maidenName = partial.maidenName;
        if ('spouseName' in partial)
            this.spouseName = partial.spouseName;
        if ('partnerName' in partial)
            this.partnerName = partial.partnerName;
        if ('personalStatus' in partial)
            this.personalStatus = partial.personalStatus;
        if ('dateOfBirth' in partial)
            this.dateOfBirth = partial.dateOfBirth;
        if ('dateOfDeath' in partial)
            this.dateOfDeath = partial.dateOfDeath;
        if ('timestampOfLatestEidReading' in partial)
            this.timestampOfLatestEidReading = partial.timestampOfLatestEidReading;
        if ('placeOfBirth' in partial)
            this.placeOfBirth = partial.placeOfBirth;
        if ('placeOfDeath' in partial)
            this.placeOfDeath = partial.placeOfDeath;
        if ('deceased' in partial)
            this.deceased = partial.deceased;
        if ('education' in partial)
            this.education = partial.education;
        if ('profession' in partial)
            this.profession = partial.profession;
        if ('notes' in partial && partial.notes !== undefined)
            this.notes = partial.notes;
        if ('note' in partial)
            this.note = partial.note;
        if ('administrativeNote' in partial)
            this.administrativeNote = partial.administrativeNote;
        if ('nationality' in partial)
            this.nationality = partial.nationality;
        if ('race' in partial)
            this.race = partial.race;
        if ('ethnicity' in partial)
            this.ethnicity = partial.ethnicity;
        if ('preferredUserId' in partial)
            this.preferredUserId = partial.preferredUserId;
        if ('picture' in partial)
            this.picture = partial.picture;
        if ('externalId' in partial)
            this.externalId = partial.externalId;
        if ('insurabilities' in partial && partial.insurabilities !== undefined)
            this.insurabilities = partial.insurabilities;
        if ('partnerships' in partial && partial.partnerships !== undefined)
            this.partnerships = partial.partnerships;
        if ('patientHealthCareParties' in partial && partial.patientHealthCareParties !== undefined)
            this.patientHealthCareParties = partial.patientHealthCareParties;
        if ('financialInstitutionInformation' in partial && partial.financialInstitutionInformation !== undefined)
            this.financialInstitutionInformation = partial.financialInstitutionInformation;
        if ('medicalHouseContracts' in partial && partial.medicalHouseContracts !== undefined)
            this.medicalHouseContracts = partial.medicalHouseContracts;
        if ('patientProfessions' in partial && partial.patientProfessions !== undefined)
            this.patientProfessions = partial.patientProfessions;
        if ('parameters' in partial && partial.parameters !== undefined)
            this.parameters = partial.parameters;
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
        if ('secretForeignKeys' in partial && partial.secretForeignKeys !== undefined)
            this.secretForeignKeys = partial.secretForeignKeys;
        if ('cryptedForeignKeys' in partial && partial.cryptedForeignKeys !== undefined)
            this.cryptedForeignKeys = partial.cryptedForeignKeys;
        if ('delegations' in partial && partial.delegations !== undefined)
            this.delegations = partial.delegations;
        if ('encryptionKeys' in partial && partial.encryptionKeys !== undefined)
            this.encryptionKeys = partial.encryptionKeys;
        if ('encryptedSelf' in partial)
            this.encryptedSelf = partial.encryptedSelf;
        if ('securityMetadata' in partial)
            this.securityMetadata = partial.securityMetadata;
        if ('medicalLocationId' in partial)
            this.medicalLocationId = partial.medicalLocationId;
        if ('nonDuplicateIds' in partial && partial.nonDuplicateIds !== undefined)
            this.nonDuplicateIds = partial.nonDuplicateIds;
        if ('encryptedAdministrativesDocuments' in partial && partial.encryptedAdministrativesDocuments !== undefined)
            this.encryptedAdministrativesDocuments = partial.encryptedAdministrativesDocuments;
        if ('comment' in partial)
            this.comment = partial.comment;
        if ('warning' in partial)
            this.warning = partial.warning;
        if ('fatherBirthCountry' in partial)
            this.fatherBirthCountry = partial.fatherBirthCountry;
        if ('birthCountry' in partial)
            this.birthCountry = partial.birthCountry;
        if ('nativeCountry' in partial)
            this.nativeCountry = partial.nativeCountry;
        if ('socialStatus' in partial)
            this.socialStatus = partial.socialStatus;
        if ('mainSourceOfIncome' in partial)
            this.mainSourceOfIncome = partial.mainSourceOfIncome;
        if ('schoolingInfos' in partial && partial.schoolingInfos !== undefined)
            this.schoolingInfos = partial.schoolingInfos;
        if ('employementInfos' in partial && partial.employementInfos !== undefined)
            this.employementInfos = partial.employementInfos;
        if ('parentId' in partial)
            this.parentId = partial.parentId;
    }
}
//# sourceMappingURL=Patient.mjs.map