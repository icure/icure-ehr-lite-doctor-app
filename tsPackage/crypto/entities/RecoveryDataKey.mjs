import { hexEncode, hexDecode, base32Encode, base32Decode, } from "../../cardinal-sdk-ts.mjs";
export class RecoveryDataKey {
    constructor(_hex) {
        this._hex = _hex;
    }
    asHexString() {
        return this._hex;
    }
    asRawBytes() {
        return hexDecode(this._hex);
    }
    asBase32() {
        return base32Encode(hexDecode(this._hex)).replace(/=+$/, '');
    }
    static fromBase32(base32String) {
        return new RecoveryDataKey(hexEncode(base32Decode(base32String)));
    }
    static fromRawBytes(rawBytes) {
        return new RecoveryDataKey(hexEncode(rawBytes));
    }
    static fromHexString(hexString) {
        return new RecoveryDataKey(hexString);
    }
}
//# sourceMappingURL=RecoveryDataKey.mjs.map