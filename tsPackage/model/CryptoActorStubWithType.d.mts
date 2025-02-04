import { CryptoActorStub } from './CryptoActorStub.mjs';
import { DataOwnerType } from './DataOwnerType.mjs';
export declare class CryptoActorStubWithType {
    type: DataOwnerType;
    stub: CryptoActorStub;
    constructor(partial: Partial<CryptoActorStubWithType> & Pick<CryptoActorStubWithType, "type" | "stub">);
}
