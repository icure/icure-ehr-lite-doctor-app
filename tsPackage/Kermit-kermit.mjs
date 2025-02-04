import {
  platformLogWritersobyk8c3gam2 as platformLogWriter,
  mutableLoggerConfigInit3a48t6gios6eh as mutableLoggerConfigInit,
  BaseLogger15vxnko5xe4r1 as BaseLogger,
} from './Kermit-kermit-core.mjs';
import {
  listOfvhqybd2zx248 as listOf,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID7hggqo3abtya as VOID,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(Logger, 'Logger', VOID, BaseLogger);
initMetadataForCompanion(Companion, Logger);
//endregion
function Companion() {
  Companion_instance = this;
  Logger.call(this, mutableLoggerConfigInit(listOf(platformLogWriter())), '');
}
protoOf(Companion).l70 = function () {
  return get_defaultTag();
};
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance == null)
    new Companion();
  return Companion_instance;
}
function Logger(config, tag) {
  Companion_getInstance();
  tag = tag === VOID ? '' : tag;
  BaseLogger.call(this, config);
  this.n70_1 = tag;
}
protoOf(Logger).l70 = function () {
  return this.n70_1;
};
protoOf(Logger).o70 = function (tag) {
  return new Logger(this.l3a(), tag);
};
function get_defaultTag() {
  return defaultTag;
}
var defaultTag;
//region block: init
defaultTag = '';
//endregion
//region block: exports
export {
  Companion_getInstance as Companion_getInstance56ov3opxpssr,
};
//endregion

//# sourceMappingURL=Kermit-kermit.mjs.map
