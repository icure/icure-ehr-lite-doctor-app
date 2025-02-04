import { DataOwnerType } from "../model/DataOwnerType.mjs";
/**
 * Allows customizing the behavior of the crypto api to better suit your needs.
 *
 * An important task which should be done in these crypto strategies is public key verification: in general there is no guarantee that the public keys
 * stored in the iCure database are authentic, i.e. created by the data owner they are associated to. This is because the database admins or a
 * malicious attacker may have added his own public keys to the data owner's public keys.
 * Sharing any kind of data using unverified public keys could potentially cause a data leak: this is why when creating new exchange keys or when
 * creating recovery data only verified keys will be considered. For decrypting existing data instead unverified keys will be used without issues.
 */
export class CryptoStrategies {
    /**
     * Method called during initialization of the crypto API to validate keys recovered through iCure's recovery methods and/or to allow recovery of
     * missing keys using means external to iCure.
     * On startup the iCure sdk will try to load all keys for the current data owner and its parent hierarchy: if the sdk can't find some of the keys
     * for any of the data owners (according to the public keys for the data owner in the iCure server) and/or the sdk could recover some private keys
     * but can't verify the authenticity of the key pairs this method will be called.
     * The recovered and verified keys will automatically be cached using the current api {@link KeyStorageFacade} and {@link StorageFacade}
     *
     * The input is a list containing an object for each data owner part of the current data owner hierarchy. The objects are ordered from the data
     * for the topmost parent of the current data owner hierarchy (first element) to the data for the current data owner (last element).
     *
     * The returned value must be an object associating to each data owner id an object with:
     * - `recoveredKeys`:
     * - `keyAuthenticity`: an object
     * @param keysData all information on unknown and unavailable keys for each data owner part of the current data owner hierarchy.
     * @param cryptoPrimitives cryptographic primitives you can use to support the process.
     * @param keyPairRecoverer a key pair recoverer you can use to support the process
     * @return a map that associates to each given data owner id the recovered data.
     */
    recoverAndVerifySelfHierarchyKeys(keysData, cryptoPrimitives, keyPairRecoverer) {
        const res = {};
        for (const data of keysData) {
            res[data.dataOwnerDetails.dataOwner.id] = { recoveredKeys: {}, keyAuthenticity: {} };
        }
        return Promise.resolve(res);
    }
    /**
     * The correct initialisation of the crypto API requires that at least 1 verified (or device) key pair is available for each data owner part of the
     * current data owner hierarchy. If no verified key is available for any of the data owner parents the api initialisation will automatically fail,
     * however if there is no verified key for the current data owner you can instead create a new crypto key.
     * @param self the current data owner.
     * @param cryptoPrimitives cryptographic primitives you can use to support the process.
     * @return an instance of [KeyGenerationRequestResult] specifying how the SDK should behave.
     * @throws Exception you can throw any exception, and it will simply propagate to the api initialisation method.
     */
    generateNewKeyForDataOwner(self, cryptoPrimitives) {
        return Promise.resolve(true);
    }
    /**
     * Verifies if the public keys of a data owner which will be the delegate of a new exchange key do actually belong to the person the data owner
     * represents. This method is not called when the delegate would be the current data owner for the api.
     *
     * The user will have to obtain the verified public keys of the delegate from outside iCure, for example by email with another hcp, by checking the
     * personal website of the other user, or by scanning verification qr codes at the doctor office...
     *
     * As long as one of the public keys is verified the creation of a new exchange key will succeed. If no public key is verified the operation will
     * fail.
     * @param delegate the potential data owner delegate.
     * @param publicKeys public keys requiring verification, in spki hex-encoded format.
     * @param cryptoPrimitives cryptographic primitives you can use to support the process.
     * @return all verified public keys, in spki hex-encoded format.
     */
    verifyDelegatePublicKeys(delegate, publicKeys, cryptoPrimitives) {
        return Promise.resolve(publicKeys);
    }
    /**
     * Specifies if a data owner requires anonymous delegations, i.e. his id should not appear unencrypted in new secure
     * delegations.
     * This should always be the case for patient data owners.
     * @param dataOwner a data owner.
     * @return true if the delegations for the provided data owner should be anonymous.
     */
    dataOwnerRequiresAnonymousDelegation(dataOwner) {
        return Promise.resolve(dataOwner.type != DataOwnerType.Hcp);
    }
    /**
     * Notifies that a new key for the current data owner was created.
     * This method is called after the initialization of the other SDK apis.
     * @param apis the initialized cardinal apis.
     * @param key the newly created key.
     * @param cryptoPrimitives cryptographic primitives you can use to support the process.
     */
    notifyNewKeyCreated(apis, key, cryptoPrimitives) {
        return Promise.resolve();
    }
}
//# sourceMappingURL=CryptoStrategies.mjs.map