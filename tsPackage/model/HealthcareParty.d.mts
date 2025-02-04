import { DecryptedPropertyStub } from './PropertyStub.mjs';
import { CodeStub } from './base/CodeStub.mjs';
import { CryptoActor } from './base/CryptoActor.mjs';
import { DataOwner } from './base/DataOwner.mjs';
import { HasCodes } from './base/HasCodes.mjs';
import { HasTags } from './base/HasTags.mjs';
import { Identifier } from './base/Identifier.mjs';
import { Named } from './base/Named.mjs';
import { Person } from './base/Person.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { DecryptedAddress } from './embed/Address.mjs';
import { DecryptedFinancialInstitutionInformation } from './embed/FinancialInstitutionInformation.mjs';
import { DecryptedFlatRateTarification } from './embed/FlatRateTarification.mjs';
import { Gender } from './embed/Gender.mjs';
import { HealthcarePartyHistoryStatus } from './embed/HealthcarePartyHistoryStatus.mjs';
import { HealthcarePartyStatus } from './embed/HealthcarePartyStatus.mjs';
import { PersonName } from './embed/PersonName.mjs';
import { TelecomType } from './embed/TelecomType.mjs';
import { HexString } from './specializations/HexString.mjs';
import { SpkiHexString } from './specializations/SpkiHexString.mjs';
export declare class HealthcareParty implements StoredDocument, Named, Person, CryptoActor, DataOwner, HasCodes, HasTags {
    id: string;
    rev: string | undefined;
    created: number | undefined;
    modified: number | undefined;
    deletionDate: number | undefined;
    identifier: Array<Identifier>;
    tags: Array<CodeStub>;
    codes: Array<CodeStub>;
    name: string | undefined;
    lastName: string | undefined;
    firstName: string | undefined;
    names: Array<PersonName>;
    gender: Gender | undefined;
    civility: string | undefined;
    companyName: string | undefined;
    speciality: string | undefined;
    bankAccount: string | undefined;
    bic: string | undefined;
    proxyBankAccount: string | undefined;
    proxyBic: string | undefined;
    invoiceHeader: string | undefined;
    cbe: string | undefined;
    ehp: string | undefined;
    userId: string | undefined;
    parentId: string | undefined;
    convention: number | undefined;
    nihii: string | undefined;
    nihiiSpecCode: string | undefined;
    ssin: string | undefined;
    addresses: Array<DecryptedAddress>;
    languages: Array<string>;
    picture: Int8Array | undefined;
    statuses: Array<HealthcarePartyStatus>;
    statusHistory: Array<HealthcarePartyHistoryStatus>;
    specialityCodes: Array<CodeStub>;
    sendFormats: {
        [key in TelecomType]?: string;
    };
    notes: string | undefined;
    financialInstitutionInformation: Array<DecryptedFinancialInstitutionInformation>;
    descr: {
        [key: string]: string;
    } | undefined;
    billingType: string | undefined;
    type: string | undefined;
    contactPerson: string | undefined;
    contactPersonHcpId: string | undefined;
    supervisorId: string | undefined;
    flatRateTarifications: Array<DecryptedFlatRateTarification>;
    importedData: {
        [key: string]: string;
    };
    options: {
        [key: string]: string;
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
    readonly $ktClass: 'com.icure.cardinal.sdk.model.HealthcareParty';
    constructor(partial: Partial<HealthcareParty>);
}
