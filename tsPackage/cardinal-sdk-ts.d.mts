import * as filters from './filters.mjs'
import * as options from './options.mjs'
import * as crypto from './crypto.mjs'
import * as auth from './auth.mjs'
import * as utils from './utils.mjs'
import * as storage from './storage.mjs'
import * as subscription from './subscription.mjs'
import * as sdk from './sdk.mjs'
import * as model from './model.mjs'
import * as api from './api.mjs'
import * as kerberus from './kerberus.mjs'
type Nullable<T> = T | null | undefined
export declare interface Challenge {
    readonly id: string;
    readonly salts: Array<string>;
    readonly difficultyFactor: number;
}
export declare function resolveChallenge(config: Challenge, serializedInput: string, cryptoService?: Nullable<crypto.XCryptoService>, onProgress?: (p0: number) => void): Promise<Solution>;
export declare function validateSolution(config: Challenge, result: Solution, serializedInput: string, cryptoService?: Nullable<crypto.XCryptoService>): Promise<boolean>;
export declare interface Solution {
    readonly id: string;
    readonly nonces: Array<string>;
}
export declare class RevisionConflictException extends Error {
    constructor();
}
export declare const InternalSdkInitializers: {
    getInstance(): {
        initializeSdk(applicationId: Nullable<string>, baseUrl: string, authenticationMethod: options.AuthenticationMethod, storageFacade: any, options: Nullable<options.SdkOptions>): Promise<sdk.CardinalSdk>;
        initializeWithProcess(applicationId: Nullable<string>, baseUrl: string, messageGatewayUrl: string, externalServicesSpecId: string, processId: string, userTelecomType: string, userTelecom: string, captchaOptions: auth.CaptchaOptions, baseStorage: any, authenticationProcessTemplateParameters: Nullable<options.AuthenticationProcessTemplateParameters>, options: Nullable<options.SdkOptions>): Promise<sdk.CardinalSdk.AuthenticationWithProcessStep>;
        initializeBase(applicationId: Nullable<string>, baseUrl: string, authenticationMethod: options.AuthenticationMethod, options: Nullable<options.BasicSdkOptions>): Promise<sdk.CardinalBaseSdk>;
    };
};
export declare function spkiHexKeyToFingerprintV1(key: string): string;
export declare function spkiHexKeyToFingerprintV2(key: string): string;
export declare function fingerprintV1ToFingerprintV2(fingerprint: string): string;
export declare class CancellationException extends Error {
    constructor();
}
export declare interface FilterOptions<T extends model.Identifiable<string>> {
    readonly __doNotUseOrImplementIt: {
        readonly "com.icure.cardinal.sdk.js.filters.FilterOptions": unique symbol;
    };
}
export declare interface SortableFilterOptions<T extends model.Identifiable<string>> extends FilterOptions<T> {
    readonly __doNotUseOrImplementIt: {
        readonly "com.icure.cardinal.sdk.js.filters.SortableFilterOptions": unique symbol;
    } & FilterOptions<T>["__doNotUseOrImplementIt"];
}
export declare interface BaseFilterOptions<T extends model.Identifiable<string>> extends FilterOptions<T> {
    readonly __doNotUseOrImplementIt: {
        readonly "com.icure.cardinal.sdk.js.filters.BaseFilterOptions": unique symbol;
    } & FilterOptions<T>["__doNotUseOrImplementIt"];
}
export declare interface BaseSortableFilterOptions<T extends model.Identifiable<string>> extends BaseFilterOptions<T>, SortableFilterOptions<T> {
    readonly __doNotUseOrImplementIt: {
        readonly "com.icure.cardinal.sdk.js.filters.BaseSortableFilterOptions": unique symbol;
    } & BaseFilterOptions<T>["__doNotUseOrImplementIt"] & SortableFilterOptions<T>["__doNotUseOrImplementIt"];
}
export declare const InternalFilterOptions: {
    getInstance(): {
        union<T extends model.Identifiable<string>>(a: FilterOptions<T>, b: FilterOptions<T>, others: Array<FilterOptions<T>>): FilterOptions<T>;
        intersection<T extends model.Identifiable<string>>(a: FilterOptions<T>, b: FilterOptions<T>, others: Array<FilterOptions<T>>): FilterOptions<T>;
        difference<T extends model.Identifiable<string>>(of: FilterOptions<T>, subtracting: FilterOptions<T>): FilterOptions<T>;
    };
};
export declare const InternalAccessLogFiltersObj: {
    getInstance(): {
        byPatientsDateForDataOwner(dataOwnerId: string, patients: Array<model.Patient>, options: any): SortableFilterOptions<model.AccessLog>;
        byPatientsDateForSelf(patients: Array<model.Patient>, options: any): SortableFilterOptions<model.AccessLog>;
        byPatientSecretIdsDateForDataOwner(dataOwnerId: string, secretIds: Array<string>, options: any): BaseSortableFilterOptions<model.AccessLog>;
        byPatientSecretIdsDateForSelf(secretIds: Array<string>, options: any): SortableFilterOptions<model.AccessLog>;
        byDate(options: any): BaseSortableFilterOptions<model.AccessLog>;
        byUserTypeDate(userId: string, options: any): BaseSortableFilterOptions<model.AccessLog>;
    };
};
export declare const InternalAgendaFiltersObj: {
    getInstance(): {
        all(): BaseFilterOptions<model.Agenda>;
        byUser(userId: string): BaseFilterOptions<model.Agenda>;
        readableByUser(userId: string): BaseFilterOptions<model.Agenda>;
    };
};
export declare const InternalCalendarItemFiltersObj: {
    getInstance(): {
        byPatientsStartTimeForDataOwner(dataOwnerId: string, patients: Array<model.Patient>, options: any): SortableFilterOptions<model.CalendarItem>;
        byPatientsStartTimeForSelf(patients: Array<model.Patient>, options: any): SortableFilterOptions<model.CalendarItem>;
        byPatientSecretIdsStartTimeForDataOwner(dataOwnerId: string, secretIds: Array<string>, options: any): BaseSortableFilterOptions<model.CalendarItem>;
        byPatientSecretIdsStartTimeForSelf(secretIds: Array<string>, options: any): SortableFilterOptions<model.CalendarItem>;
        byPeriodAndAgenda(agendaId: string, from: number, to: number, options: any): BaseSortableFilterOptions<model.CalendarItem>;
        byPeriodForDataOwner(dataOwnerId: string, from: number, to: number): BaseFilterOptions<model.CalendarItem>;
        byPeriodForSelf(from: number, to: number): FilterOptions<model.CalendarItem>;
        byRecurrenceId(recurrenceId: string): FilterOptions<model.CalendarItem>;
    };
};
export declare const InternalClassificationFiltersObj: {
    getInstance(): {
        byPatientsCreatedForDataOwner(dataOwnerId: string, patients: Array<model.Patient>, options: any): SortableFilterOptions<model.Classification>;
        byPatientsCreatedForSelf(patients: Array<model.Patient>, options: any): SortableFilterOptions<model.Classification>;
        byPatientSecretIdsCreatedForDataOwner(dataOwnerId: string, secretIds: Array<string>, options: any): BaseSortableFilterOptions<model.Classification>;
        byPatientSecretIdsCreatedForSelf(secretIds: Array<string>, options: any): SortableFilterOptions<model.Classification>;
    };
};
export declare const InternalCodeFiltersObj: {
    getInstance(): {
        all(): BaseFilterOptions<model.Code>;
        byIds(ids: Array<string>): BaseSortableFilterOptions<model.Code>;
        byQualifiedLink(linkType: string, options: any): BaseFilterOptions<model.Code>;
        byRegionTypeCodeVersion(region: string, options: any): BaseFilterOptions<model.Code>;
        byLanguageTypeLabelRegion(language: string, type: string, options: any): BaseFilterOptions<model.Code>;
        byLanguageTypesLabelRegionVersion(language: string, types: Array<string>, label: string, options: any): BaseFilterOptions<model.Code>;
    };
};
export declare const InternalContactFiltersObj: {
    getInstance(): {
        allContactsForDataOwner(dataOwnerId: string): BaseFilterOptions<model.Contact>;
        allContactsForSelf(): FilterOptions<model.Contact>;
        byFormIdsForDataOwner(dataOwnerId: string, formIds: Array<string>): BaseFilterOptions<model.Contact>;
        byFormIdsForSelf(formIds: Array<string>): FilterOptions<model.Contact>;
        byPatientsOpeningDateForDataOwner(dataOwnerId: string, patients: Array<model.Patient>, options: any): SortableFilterOptions<model.Contact>;
        byPatientsOpeningDateForSelf(patients: Array<model.Patient>, options: any): SortableFilterOptions<model.Contact>;
        byPatientSecretIdsOpeningDateForDataOwner(dataOwnerId: string, secretIds: Array<string>, options: any): BaseSortableFilterOptions<model.Contact>;
        byPatientSecretIdsOpeningDateForSelf(secretIds: Array<string>, options: any): SortableFilterOptions<model.Contact>;
        byExternalId(externalId: string): BaseFilterOptions<model.Contact>;
        byIdentifiersForSelf(identifiers: Array<model.Identifier>): SortableFilterOptions<model.Contact>;
        byIdentifiersForDataOwner(dataOwnerId: string, identifiers: Array<model.Identifier>): BaseSortableFilterOptions<model.Contact>;
        byCodeAndOpeningDateForDataOwner(dataOwnerId: string, codeType: string, options: any): BaseSortableFilterOptions<model.Contact>;
        byCodeAndOpeningDateForSelf(codeType: string, options: any): SortableFilterOptions<model.Contact>;
        byTagAndOpeningDateForDataOwner(dataOwnerId: string, tagType: string, options: any): BaseSortableFilterOptions<model.Contact>;
        byOpeningDateForDataOwner(dataOwnerId: string, options: any): BaseSortableFilterOptions<model.Contact>;
        byOpeningDateForSelf(options: any): SortableFilterOptions<model.Contact>;
        byServiceTagForSelf(tagType: string, options: any): FilterOptions<model.Contact>;
        byServiceTagForDataOwner(dataOwnerId: string, tagType: string, options: any): BaseFilterOptions<model.Contact>;
        byServiceCodeForSelf(codeType: string, options: any): FilterOptions<model.Contact>;
        byServiceCodeForDataOwner(dataOwnerId: string, codeType: string, options: any): BaseFilterOptions<model.Contact>;
        byTagAndOpeningDateForSelf(tagType: string, options: any): SortableFilterOptions<model.Contact>;
        byPatientsForDataOwner(dataOwnerId: string, patients: Array<model.Patient>): SortableFilterOptions<model.Contact>;
        byPatientsForSelf(patients: Array<model.Patient>): SortableFilterOptions<model.Contact>;
        byPatientsSecretIdsForDataOwner(dataOwnerId: string, secretIds: Array<string>): BaseSortableFilterOptions<model.Contact>;
        byPatientsSecretIdsForSelf(secretIds: Array<string>): SortableFilterOptions<model.Contact>;
        byServiceIds(serviceIds: Array<string>): BaseSortableFilterOptions<model.Contact>;
    };
};
export declare const InternalDeviceFiltersObj: {
    getInstance(): {
        all(): BaseFilterOptions<model.Device>;
        byResponsible(responsibleId: string): BaseFilterOptions<model.Device>;
        byIds(ids: Array<string>): BaseSortableFilterOptions<model.Device>;
    };
};
export declare const InternalDocumentFiltersObj: {
    getInstance(): {
        byPatientsCreatedForDataOwner(dataOwnerId: string, patients: Array<model.Patient>, options: any): SortableFilterOptions<model.Document>;
        byPatientsCreatedForSelf(patients: Array<model.Patient>, options: any): SortableFilterOptions<model.Document>;
        byPatientSecretIdsCreatedForDataOwner(dataOwnerId: string, secretIds: Array<string>, options: any): BaseSortableFilterOptions<model.Document>;
        byPatientSecretIdsCreatedForSelf(secretIds: Array<string>, options: any): SortableFilterOptions<model.Document>;
        byPatientsAndTypeForDataOwner(dataOwnerId: string, documentType: string, patients: Array<model.Patient>): FilterOptions<model.Document>;
        byPatientsAndTypeForSelf(documentType: string, patients: Array<model.Patient>): FilterOptions<model.Document>;
        byPatientSecretIdsAndTypeForDataOwner(dataOwnerId: string, documentType: string, secretIds: Array<string>): FilterOptions<model.Document>;
        byPatientSecretIdsAndTypeForSelf(documentType: string, secretIds: Array<string>): FilterOptions<model.Document>;
    };
};
export declare const InternalFormFiltersObj: {
    getInstance(): {
        byParentIdForDataOwner(dataOwnerId: string, parentId: string): BaseFilterOptions<model.Form>;
        byParentIdForSelf(parentId: string): FilterOptions<model.Form>;
        byPatientsOpeningDateForDataOwner(dataOwnerId: string, patients: Array<model.Patient>, options: any): SortableFilterOptions<model.Form>;
        byPatientsOpeningDateForSelf(patients: Array<model.Patient>, options: any): SortableFilterOptions<model.Form>;
        byPatientSecretIdsOpeningDateForDataOwner(dataOwnerId: string, secretIds: Array<string>, options: any): BaseSortableFilterOptions<model.Form>;
        byPatientSecretIdsOpeningDateForSelf(secretIds: Array<string>, options: any): SortableFilterOptions<model.Form>;
        byLogicalUuid(logicalUuid: string, options: any): BaseSortableFilterOptions<model.Form>;
        byUniqueId(uniqueId: string, options: any): BaseSortableFilterOptions<model.Form>;
    };
};
export declare const InternalGroupFiltersObj: {
    getInstance(): {
        all(): BaseFilterOptions<model.Group>;
        bySuperGroup(superGroupId: string): BaseFilterOptions<model.Group>;
        withContent(superGroupId: string, searchString: string): BaseSortableFilterOptions<model.Group>;
    };
};
export declare const InternalHealthElementFiltersObj: {
    getInstance(): {
        allHealthElementsForDataOwner(dataOwnerId: string): BaseFilterOptions<model.HealthElement>;
        allHealthElementsForSelf(): FilterOptions<model.HealthElement>;
        byIdentifiersForDataOwner(dataOwnerId: string, identifiers: Array<model.Identifier>): BaseSortableFilterOptions<model.HealthElement>;
        byIdentifiersForSelf(identifiers: Array<model.Identifier>): SortableFilterOptions<model.HealthElement>;
        byCodeForDataOwner(dataOwnerId: string, codeType: string, options: any): BaseSortableFilterOptions<model.HealthElement>;
        byCodeForSelf(codeType: string, options: any): SortableFilterOptions<model.HealthElement>;
        byTagForDataOwner(dataOwnerId: string, tagType: string, options: any): BaseSortableFilterOptions<model.HealthElement>;
        byTagForSelf(tagType: string, options: any): SortableFilterOptions<model.HealthElement>;
        byPatientsForDataOwner(dataOwnerId: string, patients: Array<model.Patient>): SortableFilterOptions<model.HealthElement>;
        byPatientsForSelf(patients: Array<model.Patient>): SortableFilterOptions<model.HealthElement>;
        byPatientsSecretIdsForDataOwner(dataOwnerId: string, secretIds: Array<string>): BaseSortableFilterOptions<model.HealthElement>;
        byPatientsSecretIdsForSelf(secretIds: Array<string>): SortableFilterOptions<model.HealthElement>;
        byIds(ids: Array<string>): BaseSortableFilterOptions<model.HealthElement>;
        byPatientsOpeningDateForDataOwner(dataOwnerId: string, patients: Array<model.Patient>, options: any): SortableFilterOptions<model.HealthElement>;
        byPatientsOpeningDateForSelf(patients: Array<model.Patient>, options: any): SortableFilterOptions<model.HealthElement>;
        byPatientSecretIdsOpeningDateForDataOwner(dataOwnerId: string, secretIds: Array<string>, options: any): BaseSortableFilterOptions<model.HealthElement>;
        byPatientSecretIdsOpeningDateForSelf(secretIds: Array<string>, options: any): SortableFilterOptions<model.HealthElement>;
        byStatusForDataOwner(dataOwnerId: string, status: number): BaseFilterOptions<model.HealthElement>;
        byStatusForSelf(status: number): FilterOptions<model.HealthElement>;
    };
};
export declare const InternalHealthcarePartyFiltersObj: {
    getInstance(): {
        all(): BaseFilterOptions<model.HealthcareParty>;
        byIdentifiers(identifiers: Array<model.Identifier>): BaseFilterOptions<model.HealthcareParty>;
        byCode(codeType: string, options: any): BaseSortableFilterOptions<model.HealthcareParty>;
        byTag(tagType: string, options: any): BaseSortableFilterOptions<model.HealthcareParty>;
        byIds(ids: Array<string>): SortableFilterOptions<model.HealthcareParty>;
        byName(searchString: string, options: any): BaseSortableFilterOptions<model.HealthcareParty>;
        byNationalIdentifier(searchString: string, options: any): BaseSortableFilterOptions<model.HealthcareParty>;
        byParentId(parentId: string): BaseFilterOptions<model.HealthcareParty>;
        byTypeSpecialtyPostCode(specialty: string, specCode: string, startPostCode: string, endPostCode: string): BaseFilterOptions<model.HealthcareParty>;
    };
};
export declare const InternalMaintenanceTaskFiltersObj: {
    getInstance(): {
        byIds(ids: Array<string>): BaseSortableFilterOptions<model.MaintenanceTask>;
        byIdentifiersForDataOwner(dataOwnerId: string, identifiers: Array<model.Identifier>): BaseSortableFilterOptions<model.MaintenanceTask>;
        byIdentifiersForSelf(identifiers: Array<model.Identifier>): SortableFilterOptions<model.MaintenanceTask>;
        byTypeForDataOwner(dataOwnerId: string, type: string): BaseFilterOptions<model.MaintenanceTask>;
        byTypeForSelf(type: string): FilterOptions<model.MaintenanceTask>;
        afterDateForDataOwner(dataOwnerId: string, date: number): BaseSortableFilterOptions<model.MaintenanceTask>;
        afterDateForSelf(date: number): SortableFilterOptions<model.MaintenanceTask>;
    };
};
export declare const InternalMedicalLocationFiltersObj: {
    getInstance(): {
        all(): BaseFilterOptions<model.MedicalLocation>;
        byPostCode(postCode: string): BaseFilterOptions<model.MedicalLocation>;
    };
};
export declare const InternalMessageFiltersObj: {
    getInstance(): {
        allMessagesForDataOwner(dataOwnerId: string): BaseFilterOptions<model.Message>;
        allMessagesForSelf(): FilterOptions<model.Message>;
        byTransportGuidForDataOwner(dataOwnerId: string, transportGuid: string): BaseSortableFilterOptions<model.Message>;
        byTransportGuidForSelf(transportGuid: string): SortableFilterOptions<model.Message>;
        fromAddressForDataOwner(dataOwnerId: string, address: string): BaseFilterOptions<model.Message>;
        fromAddressForSelf(address: string): FilterOptions<model.Message>;
        byPatientsSentDateForDataOwner(dataOwnerId: string, patients: Array<model.Patient>, options: any): SortableFilterOptions<model.Message>;
        byPatientsSentDateForSelf(patients: Array<model.Patient>, options: any): SortableFilterOptions<model.Message>;
        byPatientSecretIdsSentDateForDataOwner(dataOwnerId: string, secretIds: Array<string>, options: any): BaseSortableFilterOptions<model.Message>;
        byPatientSecretIdsSentDateForSelf(secretIds: Array<string>, options: any): SortableFilterOptions<model.Message>;
        toAddressForDataOwner(dataOwnerId: string, address: string): BaseFilterOptions<model.Message>;
        toAddressForSelf(address: string): FilterOptions<model.Message>;
        byTransportGuidSentDateForDataOwner(dataOwnerId: string, transportGuid: string, from: number, to: number, options: any): BaseSortableFilterOptions<model.Message>;
        byTransportGuidSentDateForSelf(transportGuid: string, from: number, to: number, options: any): SortableFilterOptions<model.Message>;
        latestByTransportGuidForDataOwner(dataOwnerId: string, transportGuid: string): BaseFilterOptions<model.Message>;
        latestByTransportGuidForSelf(transportGuid: string): FilterOptions<model.Message>;
        byInvoiceIds(invoiceIds: Array<string>): BaseFilterOptions<model.Message>;
        byParentIds(parentIds: Array<string>): BaseFilterOptions<model.Message>;
    };
};
export declare const InternalPatientFiltersObj: {
    getInstance(): {
        allPatientsForDataOwner(dataOwnerId: string): BaseFilterOptions<model.Patient>;
        allPatientsForSelf(): FilterOptions<model.Patient>;
        byIds(ids: Array<string>): SortableFilterOptions<model.Patient>;
        byIdentifiersForDataOwner(dataOwnerId: string, identifiers: Array<model.Identifier>): BaseSortableFilterOptions<model.Patient>;
        bySsinsForDataOwner(dataOwnerId: string, ssins: Array<string>): BaseSortableFilterOptions<model.Patient>;
        byDateOfBirthBetweenForDataOwner(dataOwnerId: string, fromDate: number, toDate: number): BaseSortableFilterOptions<model.Patient>;
        byFuzzyNameForDataOwner(dataOwnerId: string, searchString: string): BaseFilterOptions<model.Patient>;
        byGenderEducationProfessionForDataOwner(dataOwnerId: string, gender: string, options: any): BaseSortableFilterOptions<model.Patient>;
        byActiveForDataOwner(dataOwnerId: string, active: boolean): BaseFilterOptions<model.Patient>;
        byTelecomForDataOwner(dataOwnerId: string, searchString: string): BaseSortableFilterOptions<model.Patient>;
        byAddressPostalCodeHouseNumberForDataOwner(dataOwnerId: string, searchString: string, postalCode: string, options: any): BaseSortableFilterOptions<model.Patient>;
        byAddressForDataOwner(dataOwnerId: string, searchString: string): BaseSortableFilterOptions<model.Patient>;
        byExternalIdForDataOwner(dataOwnerId: string, externalIdPrefix: string): BaseSortableFilterOptions<model.Patient>;
        byIdentifiersForSelf(identifiers: Array<model.Identifier>): SortableFilterOptions<model.Patient>;
        bySsinsForSelf(ssins: Array<string>): SortableFilterOptions<model.Patient>;
        byDateOfBirthBetweenForSelf(fromDate: number, toDate: number): SortableFilterOptions<model.Patient>;
        byNameForSelf(searchString: string): FilterOptions<model.Patient>;
        byGenderEducationProfessionForSelf(gender: string, options: any): SortableFilterOptions<model.Patient>;
        byActiveForSelf(active: boolean): FilterOptions<model.Patient>;
        byTelecomForSelf(searchString: string): SortableFilterOptions<model.Patient>;
        byAddressPostalCodeHouseNumberForSelf(searchString: string, postalCode: string, options: any): SortableFilterOptions<model.Patient>;
        byAddressForSelf(searchString: string): SortableFilterOptions<model.Patient>;
        byExternalIdForSelf(externalIdPrefix: string): SortableFilterOptions<model.Patient>;
    };
};
export declare const InternalServiceFiltersObj: {
    getInstance(): {
        allServicesForDataOwner(dataOwnerId: string): BaseFilterOptions<model.Service>;
        allServicesForSelf(): FilterOptions<model.Service>;
        byIdentifiersForDataOwner(dataOwnerId: string, identifiers: Array<model.Identifier>): BaseSortableFilterOptions<model.Service>;
        byCodeAndValueDateForDataOwner(dataOwnerId: string, codeType: string, options: any): BaseSortableFilterOptions<model.Service>;
        byTagAndValueDateForDataOwner(dataOwnerId: string, tagType: string, options: any): BaseSortableFilterOptions<model.Service>;
        byPatientsForDataOwner(dataOwnerId: string, patients: Array<model.Patient>): SortableFilterOptions<model.Service>;
        byPatientsSecretIdsForDataOwner(dataOwnerId: string, secretIds: Array<string>): BaseSortableFilterOptions<model.Service>;
        byHealthElementIdFromSubContactForDataOwner(dataOwnerId: string, healthElementIds: Array<string>): BaseSortableFilterOptions<model.Service>;
        byIdentifiersForSelf(identifiers: Array<model.Identifier>): SortableFilterOptions<model.Service>;
        byCodeAndValueDateForSelf(codeType: string, options: any): SortableFilterOptions<model.Service>;
        byTagAndValueDateForSelf(tagType: string, options: any): SortableFilterOptions<model.Service>;
        byPatientsForSelf(patients: Array<model.Patient>): SortableFilterOptions<model.Service>;
        byPatientsSecretIdsForSelf(secretIds: Array<string>): SortableFilterOptions<model.Service>;
        byHealthElementIdFromSubContactForSelf(healthElementIds: Array<string>): SortableFilterOptions<model.Service>;
        byIds(ids: Array<string>): BaseSortableFilterOptions<model.Service>;
        byAssociationId(associationId: string): BaseFilterOptions<model.Service>;
        byQualifiedLink(linkValues: Array<string>, options: any): BaseFilterOptions<model.Service>;
        byPatientsDateForDataOwner(dataOwnerId: string, patients: Array<model.Patient>, options: any): SortableFilterOptions<model.Service>;
        byPatientsDateForSelf(patients: Array<model.Patient>, options: any): SortableFilterOptions<model.Service>;
        byPatientSecretIdsDateForDataOwner(dataOwnerId: string, secretIds: Array<string>, options: any): BaseSortableFilterOptions<model.Service>;
        byPatientSecretIdsDateForSelf(secretIds: Array<string>, options: any): SortableFilterOptions<model.Service>;
    };
};
export declare const InternalTimeTableFiltersObj: {
    getInstance(): {
        byAgendaId(agendaId: string): BaseFilterOptions<model.TimeTable>;
        byPeriodAndAgendaId(agendaId: string, options: any): BaseSortableFilterOptions<model.TimeTable>;
    };
};
export declare const InternalTopicFiltersObj: {
    getInstance(): {
        allTopicsForDataOwner(dataOwnerId: string): BaseFilterOptions<model.Topic>;
        allTopicsForSelf(): FilterOptions<model.Topic>;
        byParticipant(participantId: string): FilterOptions<model.Topic>;
    };
};
export declare const InternalUserFiltersObj: {
    getInstance(): {
        all(): BaseFilterOptions<model.User>;
        byIds(ids: Array<string>): BaseSortableFilterOptions<model.User>;
        byPatientId(patientId: string): BaseFilterOptions<model.User>;
        byHealthcarePartyId(healthcarePartyId: string): BaseFilterOptions<model.User>;
        byNameEmailOrPhone(searchString: string): BaseFilterOptions<model.User>;
    };
};
export declare const InternalKeyPairUpdateNotificationJs_COMPANION: {
    getInstance(): {
        get TASK_TYPE(): string;
        parseFromMaintenanceTask(task: model.DecryptedMaintenanceTask): model.KeyPairUpdateNotification;
    };
};
export declare interface CardinalStorageOptions {
    readonly __doNotUseOrImplementIt: {
        readonly "com.icure.cardinal.sdk.js.storage.CardinalStorageOptions": unique symbol;
    };
}
export declare interface CardinalKeyStorageOptions {
    readonly __doNotUseOrImplementIt: {
        readonly "com.icure.cardinal.sdk.js.storage.CardinalKeyStorageOptions": unique symbol;
    };
}
export declare const InternalCardinalStorageOptionsFactory: {
    getInstance(): {
        fileSystem(directory: string): CardinalStorageOptions;
        browserLocalStorage(): CardinalStorageOptions;
    };
};
export declare const InternalCardinalKeyStorageOptionsFactory: {
    getInstance(): {
        encodingAsBase64(baseStorage: any): CardinalKeyStorageOptions;
        encodingAsJwk(baseStorage: any): CardinalKeyStorageOptions;
    };
};
export declare function base32Encode(bytes: Int8Array): string;
export declare function base32Decode(base32String: string): Int8Array;
export declare function hexEncode(bytes: Int8Array): string;
export declare function hexDecode(hexString: string): Int8Array;
export declare function base64Encode(bytes: Int8Array): string;
export declare function base64Decode(base64String: string): Int8Array;
export declare function allPublicKeysOf(cryptoActor: model.CryptoActor): Array<string>;
export declare interface PaginatedListIterator<T extends any> {
    hasNext(): Promise<boolean>;
    next(limit: number): Promise<Array<T>>;
    readonly __doNotUseOrImplementIt: {
        readonly "com.icure.cardinal.sdk.js.utils.pagination.PaginatedListIterator": unique symbol;
    };
}
export * from './filters.mjs'
export * from './options.mjs'
export * from './crypto.mjs'
export * from './auth.mjs'
export * from './utils.mjs'
export * from './storage.mjs'
export * from './subscription.mjs'
export * from './sdk.mjs'
export * from './model.mjs'
export * from './api.mjs'
export * from './kerberus.mjs'
