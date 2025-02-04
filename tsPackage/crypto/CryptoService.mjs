export var AesKeySize;
(function (AesKeySize) {
    AesKeySize[AesKeySize["Aes128"] = 128] = "Aes128";
    AesKeySize[AesKeySize["Aes256"] = 256] = "Aes256";
})(AesKeySize || (AesKeySize = {}));
export var AesAlgorithm;
(function (AesAlgorithm) {
    AesAlgorithm["AesCbcPkcs7"] = "AesCbcPkcs7";
})(AesAlgorithm || (AesAlgorithm = {}));
export var HmacAlgorithm;
(function (HmacAlgorithm) {
    HmacAlgorithm["HmacSha512"] = "HmacSha512";
    HmacAlgorithm["HmacSha256"] = "HmacSha256";
})(HmacAlgorithm || (HmacAlgorithm = {}));
export var RsaKeySize;
(function (RsaKeySize) {
    RsaKeySize[RsaKeySize["Rsa2048"] = 2048] = "Rsa2048";
    RsaKeySize[RsaKeySize["Rsa4096"] = 4096] = "Rsa4096";
})(RsaKeySize || (RsaKeySize = {}));
export var RsaEncryptionAlgorithm;
(function (RsaEncryptionAlgorithm) {
    RsaEncryptionAlgorithm["OaepWithSha1"] = "OaepWithSha1";
    RsaEncryptionAlgorithm["OaepWithSha256"] = "OaepWithSha256";
})(RsaEncryptionAlgorithm || (RsaEncryptionAlgorithm = {}));
export var RsaSignatureAlgorithm;
(function (RsaSignatureAlgorithm) {
    RsaSignatureAlgorithm["PssWithSha256"] = "PssWithSha256";
})(RsaSignatureAlgorithm || (RsaSignatureAlgorithm = {}));
//# sourceMappingURL=CryptoService.mjs.map