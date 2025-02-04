import { DecryptedPropertyStub, EncryptedPropertyStub, PropertyStub } from './PropertyStub.mjs';
import { CodeStub } from './base/CodeStub.mjs';
import { CryptoActor } from './base/CryptoActor.mjs';
import { HasEncryptionMetadata } from './base/HasEncryptionMetadata.mjs';
import { ICureDocument } from './base/ICureDocument.mjs';
import { Identifier } from './base/Identifier.mjs';
import { Person } from './base/Person.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { DecryptedAddress, EncryptedAddress } from './embed/Address.mjs';
import { Annotation } from './embed/Annotation.mjs';
import { DeactivationReason } from './embed/DeactivationReason.mjs';
import { Delegation } from './embed/Delegation.mjs';
import { DecryptedEmploymentInfo, EmploymentInfo, EncryptedEmploymentInfo } from './embed/EmploymentInfo.mjs';
import { Encryptable } from './embed/Encryptable.mjs';
import { DecryptedFinancialInstitutionInformation, EncryptedFinancialInstitutionInformation, FinancialInstitutionInformation } from './embed/FinancialInstitutionInformation.mjs';
import { Gender } from './embed/Gender.mjs';
import { DecryptedInsurability, EncryptedInsurability, Insurability } from './embed/Insurability.mjs';
import { DecryptedMedicalHouseContract, EncryptedMedicalHouseContract, MedicalHouseContract } from './embed/MedicalHouseContract.mjs';
import { Partnership } from './embed/Partnership.mjs';
import { DecryptedPatientHealthCareParty, EncryptedPatientHealthCareParty, PatientHealthCareParty } from './embed/PatientHealthCareParty.mjs';
import { PersonName } from './embed/PersonName.mjs';
import { PersonalStatus } from './embed/PersonalStatus.mjs';
import { DecryptedSchoolingInfo, EncryptedSchoolingInfo, SchoolingInfo } from './embed/SchoolingInfo.mjs';
import { SecurityMetadata } from './embed/SecurityMetadata.mjs';
import { Base64String } from './specializations/Base64String.mjs';
import { HexString } from './specializations/HexString.mjs';
import { SpkiHexString } from './specializations/SpkiHexString.mjs';
export interface Patient extends StoredDocument, ICureDocument<string>, Person, HasEncryptionMetadata, Encryptable, CryptoActor {
    identifier: Array<Identifier>;
    birthSex: Gender | undefined;
    mergeToPatientId: string | undefined;
    mergedIds: Array<string>;
    alias: string | undefined;
    active: boolean;
    deactivationReason: DeactivationReason;
    deactivationDate: number | undefined;
    ssin: string | undefined;
    maidenName: string | undefined;
    spouseName: string | undefined;
    partnerName: string | undefined;
    personalStatus: PersonalStatus | undefined;
    dateOfBirth: number | undefined;
    dateOfDeath: number | undefined;
    timestampOfLatestEidReading: number | undefined;
    placeOfBirth: string | undefined;
    placeOfDeath: string | undefined;
    deceased: boolean | undefined;
    education: string | undefined;
    profession: string | undefined;
    notes: Array<Annotation>;
    note: string | undefined;
    administrativeNote: string | undefined;
    nationality: string | undefined;
    race: string | undefined;
    ethnicity: string | undefined;
    preferredUserId: string | undefined;
    picture: Int8Array | undefined;
    externalId: string | undefined;
    insurabilities: Array<Insurability>;
    partnerships: Array<Partnership>;
    patientHealthCareParties: Array<PatientHealthCareParty>;
    financialInstitutionInformation: Array<FinancialInstitutionInformation>;
    medicalHouseContracts: Array<MedicalHouseContract>;
    patientProfessions: Array<CodeStub>;
    parameters: {
        [key: string]: Array<string>;
    };
    properties: Array<PropertyStub>;
    nonDuplicateIds: Array<string>;
    encryptedAdministrativesDocuments: Array<string>;
    comment: string | undefined;
    warning: string | undefined;
    fatherBirthCountry: CodeStub | undefined;
    birthCountry: CodeStub | undefined;
    nativeCountry: CodeStub | undefined;
    socialStatus: CodeStub | undefined;
    mainSourceOfIncome: CodeStub | undefined;
    schoolingInfos: Array<SchoolingInfo>;
    employementInfos: Array<EmploymentInfo>;
    readonly isEncrypted: boolean;
}
export declare class DecryptedPatient {
    id: string;
    identifier: Array<Identifier>;
    rev: string | undefined;
    created: number | undefined;
    modified: number | undefined;
    author: string | undefined;
    responsible: string | undefined;
    tags: Array<CodeStub>;
    codes: Array<CodeStub>;
    endOfLife: number | undefined;
    deletionDate: number | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    names: Array<PersonName>;
    companyName: string | undefined;
    languages: Array<string>;
    addresses: Array<DecryptedAddress>;
    civility: string | undefined;
    gender: Gender | undefined;
    birthSex: Gender | undefined;
    mergeToPatientId: string | undefined;
    mergedIds: Array<string>;
    alias: string | undefined;
    active: boolean;
    deactivationReason: DeactivationReason;
    deactivationDate: number | undefined;
    ssin: string | undefined;
    maidenName: string | undefined;
    spouseName: string | undefined;
    partnerName: string | undefined;
    personalStatus: PersonalStatus | undefined;
    dateOfBirth: number | undefined;
    dateOfDeath: number | undefined;
    timestampOfLatestEidReading: number | undefined;
    placeOfBirth: string | undefined;
    placeOfDeath: string | undefined;
    deceased: boolean | undefined;
    education: string | undefined;
    profession: string | undefined;
    notes: Array<Annotation>;
    note: string | undefined;
    administrativeNote: string | undefined;
    nationality: string | undefined;
    race: string | undefined;
    ethnicity: string | undefined;
    preferredUserId: string | undefined;
    picture: Int8Array | undefined;
    externalId: string | undefined;
    insurabilities: Array<DecryptedInsurability>;
    partnerships: Array<Partnership>;
    patientHealthCareParties: Array<DecryptedPatientHealthCareParty>;
    financialInstitutionInformation: Array<DecryptedFinancialInstitutionInformation>;
    medicalHouseContracts: Array<DecryptedMedicalHouseContract>;
    patientProfessions: Array<CodeStub>;
    parameters: {
        [key: string]: Array<string>;
    };
    properties: Array<DecryptedPropertyStub>;
    hcPartyKeys: {
        [key: string]: Array<HexString>;
    };
    aesExchangeKeys: {
        [key: string]: {
            [key: string]: {
                [key: string]: HexString;
            };
        };
    };
    transferKeys: {
        [key: string]: {
            [key: string]: HexString;
        };
    };
    privateKeyShamirPartitions: {
        [key: string]: HexString;
    };
    publicKey: SpkiHexString | undefined;
    publicKeysForOaepWithSha256: Array<SpkiHexString>;
    secretForeignKeys: Array<string>;
    cryptedForeignKeys: {
        [key: string]: Array<Delegation>;
    };
    delegations: {
        [key: string]: Array<Delegation>;
    };
    encryptionKeys: {
        [key: string]: Array<Delegation>;
    };
    encryptedSelf: Base64String | undefined;
    securityMetadata: SecurityMetadata | undefined;
    medicalLocationId: string | undefined;
    nonDuplicateIds: Array<string>;
    encryptedAdministrativesDocuments: Array<string>;
    comment: string | undefined;
    warning: string | undefined;
    fatherBirthCountry: CodeStub | undefined;
    birthCountry: CodeStub | undefined;
    nativeCountry: CodeStub | undefined;
    socialStatus: CodeStub | undefined;
    mainSourceOfIncome: CodeStub | undefined;
    schoolingInfos: Array<DecryptedSchoolingInfo>;
    employementInfos: Array<DecryptedEmploymentInfo>;
    parentId: never | undefined;
    readonly isEncrypted: false;
    readonly $ktClass: 'com.icure.cardinal.sdk.model.DecryptedPatient';
    constructor(partial: Partial<DecryptedPatient>);
}
export declare class EncryptedPatient {
    id: string;
    identifier: Array<Identifier>;
    rev: string | undefined;
    created: number | undefined;
    modified: number | undefined;
    author: string | undefined;
    responsible: string | undefined;
    tags: Array<CodeStub>;
    codes: Array<CodeStub>;
    endOfLife: number | undefined;
    deletionDate: number | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    names: Array<PersonName>;
    companyName: string | undefined;
    languages: Array<string>;
    addresses: Array<EncryptedAddress>;
    civility: string | undefined;
    gender: Gender | undefined;
    birthSex: Gender | undefined;
    mergeToPatientId: string | undefined;
    mergedIds: Array<string>;
    alias: string | undefined;
    active: boolean;
    deactivationReason: DeactivationReason;
    deactivationDate: number | undefined;
    ssin: string | undefined;
    maidenName: string | undefined;
    spouseName: string | undefined;
    partnerName: string | undefined;
    personalStatus: PersonalStatus | undefined;
    dateOfBirth: number | undefined;
    dateOfDeath: number | undefined;
    timestampOfLatestEidReading: number | undefined;
    placeOfBirth: string | undefined;
    placeOfDeath: string | undefined;
    deceased: boolean | undefined;
    education: string | undefined;
    profession: string | undefined;
    notes: Array<Annotation>;
    note: string | undefined;
    administrativeNote: string | undefined;
    nationality: string | undefined;
    race: string | undefined;
    ethnicity: string | undefined;
    preferredUserId: string | undefined;
    picture: Int8Array | undefined;
    externalId: string | undefined;
    insurabilities: Array<EncryptedInsurability>;
    partnerships: Array<Partnership>;
    patientHealthCareParties: Array<EncryptedPatientHealthCareParty>;
    financialInstitutionInformation: Array<EncryptedFinancialInstitutionInformation>;
    medicalHouseContracts: Array<EncryptedMedicalHouseContract>;
    patientProfessions: Array<CodeStub>;
    parameters: {
        [key: string]: Array<string>;
    };
    properties: Array<EncryptedPropertyStub>;
    hcPartyKeys: {
        [key: string]: Array<HexString>;
    };
    aesExchangeKeys: {
        [key: string]: {
            [key: string]: {
                [key: string]: HexString;
            };
        };
    };
    transferKeys: {
        [key: string]: {
            [key: string]: HexString;
        };
    };
    privateKeyShamirPartitions: {
        [key: string]: HexString;
    };
    publicKey: SpkiHexString | undefined;
    publicKeysForOaepWithSha256: Array<SpkiHexString>;
    secretForeignKeys: Array<string>;
    cryptedForeignKeys: {
        [key: string]: Array<Delegation>;
    };
    delegations: {
        [key: string]: Array<Delegation>;
    };
    encryptionKeys: {
        [key: string]: Array<Delegation>;
    };
    encryptedSelf: Base64String | undefined;
    securityMetadata: SecurityMetadata | undefined;
    medicalLocationId: string | undefined;
    nonDuplicateIds: Array<string>;
    encryptedAdministrativesDocuments: Array<string>;
    comment: string | undefined;
    warning: string | undefined;
    fatherBirthCountry: CodeStub | undefined;
    birthCountry: CodeStub | undefined;
    nativeCountry: CodeStub | undefined;
    socialStatus: CodeStub | undefined;
    mainSourceOfIncome: CodeStub | undefined;
    schoolingInfos: Array<EncryptedSchoolingInfo>;
    employementInfos: Array<EncryptedEmploymentInfo>;
    parentId: never | undefined;
    readonly isEncrypted: true;
    readonly $ktClass: 'com.icure.cardinal.sdk.model.EncryptedPatient';
    constructor(partial: Partial<EncryptedPatient>);
}
