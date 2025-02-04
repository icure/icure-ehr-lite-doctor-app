export declare class RecoveryDataKey {
    private readonly _hex;
    private constructor();
    asHexString(): string;
    asRawBytes(): Int8Array;
    asBase32(): string;
    static fromBase32(base32String: string): RecoveryDataKey;
    static fromRawBytes(rawBytes: Int8Array): RecoveryDataKey;
    static fromHexString(hexString: string): RecoveryDataKey;
}
