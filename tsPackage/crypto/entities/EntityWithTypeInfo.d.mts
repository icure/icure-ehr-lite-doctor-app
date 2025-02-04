import { HasEncryptionMetadata } from "../../model/base/HasEncryptionMetadata.mjs";
export declare class EntityWithTypeInfo<T extends HasEncryptionMetadata> {
    entity: T;
    type: String;
    constructor(entity: T, type: String);
}
