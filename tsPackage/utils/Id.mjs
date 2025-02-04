let initializedCrypto;
export function randomUuid() {
    if (!initializedCrypto) {
        if (typeof crypto !== 'undefined') {
            initializedCrypto = crypto;
        }
        else if (typeof window !== 'undefined' && window.crypto !== undefined) {
            initializedCrypto = window.crypto;
        }
        else if (typeof self !== 'undefined' && self.crypto !== undefined) {
            initializedCrypto = self.crypto;
        }
        else
            throw new Error("Can't generate uuid as crypto is not available. Initialising an instance of iCure API with a crypto service for this environment should solve the issue.");
    }
    return initializedCrypto.randomUUID();
}
//# sourceMappingURL=Id.mjs.map