import { InternalCardinalKeyStorageOptionsFactory, InternalCardinalStorageOptionsFactory } from "../cardinal-sdk-ts.mjs";
export var StorageFacade;
(function (StorageFacade) {
    /**
     * Factory method returning storage options that will cause the sdk to store the data as files at the provided
     * directory. These options are usable only on node.
     * @param directory
     */
    function usingFileSystem(directory) {
        return InternalCardinalStorageOptionsFactory.getInstance().fileSystem(directory);
    }
    StorageFacade.usingFileSystem = usingFileSystem;
    /**
     * Factory method returning storage options that will cause the sdk to store the data as entries on the browser
     * local storage. These options require the `localStorage` global to be available
     */
    function usingBrowserLocalStorage() {
        return InternalCardinalStorageOptionsFactory.getInstance().browserLocalStorage();
    }
    StorageFacade.usingBrowserLocalStorage = usingBrowserLocalStorage;
})(StorageFacade || (StorageFacade = {}));
export var KeyStorageFacade;
(function (KeyStorageFacade) {
    /**
     * Factory method returning storage options that will cause the sdk to store the keys as string entries on the
     * provided storage facade. The raw keys data (spki or pkcs8) will be encoded as base 64
     */
    function encodingAsBase64(baseStorage) {
        return InternalCardinalKeyStorageOptionsFactory.getInstance().encodingAsBase64(baseStorage);
    }
    KeyStorageFacade.encodingAsBase64 = encodingAsBase64;
    /**
     * Factory method returning storage options that will cause the sdk to store the keys as string entries on the
     * provided storage facade. The keys will be stored as json in jwk format.
     */
    function encodingAsJwk(baseStorage) {
        return InternalCardinalKeyStorageOptionsFactory.getInstance().encodingAsJwk(baseStorage);
    }
    KeyStorageFacade.encodingAsJwk = encodingAsJwk;
})(KeyStorageFacade || (KeyStorageFacade = {}));
//# sourceMappingURL=StorageFacade.mjs.map