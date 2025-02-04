import {
  protoOf180f3jzyo7rfj as protoOf,
  Unit_instanceat14thlj150z as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  StringBuilder_init_$Create$zzhi687lupah as StringBuilder_init_$Create$,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID7hggqo3abtya as VOID,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  Enum3alwj03lh1n41 as Enum,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  stackTraceToString2670q6lbhdojj as stackTraceToString,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(BaseLogger, 'BaseLogger');
initMetadataForClass(LogWriter, 'LogWriter');
function formatSeverity(severity) {
  return severity.toString() + ':';
}
function formatTag(tag) {
  return '(' + _Tag___get_tag__impl__7z9hd6(tag) + ')';
}
function formatMessage(severity, tag, message) {
  var tmp;
  if (severity == null) {
    var tmp_0 = tag;
    tmp = (tmp_0 == null ? null : new Tag(tmp_0)) == null;
  } else {
    tmp = false;
  }
  if (tmp)
    return _Message___get_message__impl__3t69n4(message);
  var sb = StringBuilder_init_$Create$();
  if (!(severity == null)) {
    sb.k8(this.w6z(severity)).k8(' ');
  }
  var tmp_1;
  var tmp_2 = tag;
  if (!((tmp_2 == null ? null : new Tag(tmp_2)) == null)) {
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = _Tag___get_tag__impl__7z9hd6(tag);
    tmp_1 = charSequenceLength(this_0) > 0;
  } else {
    tmp_1 = false;
  }
  if (tmp_1) {
    sb.k8(this.x6z(tag)).k8(' ');
  }
  sb.k8(_Message___get_message__impl__3t69n4(message));
  return sb.toString();
}
initMetadataForInterface(MessageStringFormatter, 'MessageStringFormatter');
initMetadataForObject(DefaultFormatter, 'DefaultFormatter', VOID, VOID, [MessageStringFormatter]);
initMetadataForClass(Tag, 'Tag');
initMetadataForClass(Severity, 'Severity', VOID, Enum);
initMetadataForClass(ConsoleWriter, 'ConsoleWriter', ConsoleWriter_init_$Create$, LogWriter);
initMetadataForClass(JsMutableLoggerConfig, 'JsMutableLoggerConfig');
initMetadataForObject(ConsoleActual, 'ConsoleActual');
//endregion
function get_DEFAULT_MIN_SEVERITY() {
  _init_properties_BaseLogger_kt__lobnq7();
  return DEFAULT_MIN_SEVERITY;
}
var DEFAULT_MIN_SEVERITY;
function BaseLogger(config) {
  this.r6z_1 = config;
}
protoOf(BaseLogger).l3a = function () {
  return this.r6z_1;
};
protoOf(BaseLogger).s6z = function (severity, tag, throwable, message) {
  // Inline function 'kotlin.collections.forEach' call
  var tmp0_iterator = this.l3a().t6z().p();
  while (tmp0_iterator.q()) {
    var element = tmp0_iterator.r();
    // Inline function 'co.touchlab.kermit.BaseLogger.processLog.<anonymous>' call
    if (element.v6z(tag, severity)) {
      element.u6z(severity, message, tag, throwable);
    }
  }
};
var properties_initialized_BaseLogger_kt_e6qv19;
function _init_properties_BaseLogger_kt__lobnq7() {
  if (!properties_initialized_BaseLogger_kt_e6qv19) {
    properties_initialized_BaseLogger_kt_e6qv19 = true;
    DEFAULT_MIN_SEVERITY = Severity_Verbose_getInstance();
  }
}
function LogWriter() {
}
protoOf(LogWriter).v6z = function (tag, severity) {
  return true;
};
function MessageStringFormatter() {
}
function DefaultFormatter() {
}
var DefaultFormatter_instance;
function DefaultFormatter_getInstance() {
  return DefaultFormatter_instance;
}
function _Tag___init__impl__opaqzl(tag) {
  return tag;
}
function _Tag___get_tag__impl__7z9hd6($this) {
  return $this;
}
function Tag__toString_impl_tvevk7($this) {
  return 'Tag(tag=' + $this + ')';
}
function Tag__hashCode_impl_848yrc($this) {
  return getStringHashCode($this);
}
function Tag__equals_impl_6ocp5g($this, other) {
  if (!(other instanceof Tag))
    return false;
  if (!($this === (other instanceof Tag ? other.z6z_1 : THROW_CCE())))
    return false;
  return true;
}
function Tag(tag) {
  this.z6z_1 = tag;
}
protoOf(Tag).toString = function () {
  return Tag__toString_impl_tvevk7(this.z6z_1);
};
protoOf(Tag).hashCode = function () {
  return Tag__hashCode_impl_848yrc(this.z6z_1);
};
protoOf(Tag).equals = function (other) {
  return Tag__equals_impl_6ocp5g(this.z6z_1, other);
};
function _Message___init__impl__p3e8y6(message) {
  return message;
}
function _Message___get_message__impl__3t69n4($this) {
  return $this;
}
var Severity_Verbose_instance;
var Severity_Debug_instance;
var Severity_Info_instance;
var Severity_Warn_instance;
var Severity_Error_instance;
var Severity_Assert_instance;
var Severity_entriesInitialized;
function Severity_initEntries() {
  if (Severity_entriesInitialized)
    return Unit_instance;
  Severity_entriesInitialized = true;
  Severity_Verbose_instance = new Severity('Verbose', 0);
  Severity_Debug_instance = new Severity('Debug', 1);
  Severity_Info_instance = new Severity('Info', 2);
  Severity_Warn_instance = new Severity('Warn', 3);
  Severity_Error_instance = new Severity('Error', 4);
  Severity_Assert_instance = new Severity('Assert', 5);
}
function Severity(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function Severity_Verbose_getInstance() {
  Severity_initEntries();
  return Severity_Verbose_instance;
}
function Severity_Debug_getInstance() {
  Severity_initEntries();
  return Severity_Debug_instance;
}
function Severity_Warn_getInstance() {
  Severity_initEntries();
  return Severity_Warn_instance;
}
function ConsoleWriter_init_$Init$(messageStringFormatter, $this) {
  messageStringFormatter = messageStringFormatter === VOID ? DefaultFormatter_instance : messageStringFormatter;
  ConsoleWriter.call($this, messageStringFormatter, ConsoleActual_instance);
  return $this;
}
function ConsoleWriter_init_$Create$(messageStringFormatter) {
  return ConsoleWriter_init_$Init$(messageStringFormatter, objectCreate(protoOf(ConsoleWriter)));
}
function ConsoleWriter(messageStringFormatter, console) {
  LogWriter.call(this);
  this.a70_1 = messageStringFormatter;
  this.b70_1 = console;
}
protoOf(ConsoleWriter).u6z = function (severity, message, tag, throwable) {
  var output = this.a70_1.y6z(null, _Tag___init__impl__opaqzl(tag), _Message___init__impl__p3e8y6(message));
  if (throwable == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    output = output + (' ' + stackTraceToString(throwable));
  }
  switch (severity.v2_1) {
    case 5:
    case 4:
      this.b70_1.c70(output);
      break;
    case 3:
      this.b70_1.d70(output);
      break;
    case 2:
      this.b70_1.e70(output);
      break;
    case 1:
    case 0:
      this.b70_1.f70(output);
      break;
  }
};
function JsMutableLoggerConfig(logWriters) {
  this.g70_1 = get_DEFAULT_MIN_SEVERITY();
  this.h70_1 = logWriters;
}
protoOf(JsMutableLoggerConfig).i70 = function () {
  return this.g70_1;
};
protoOf(JsMutableLoggerConfig).t6z = function () {
  return this.h70_1;
};
function mutableLoggerConfigInit(logWriters) {
  return new JsMutableLoggerConfig(logWriters);
}
function platformLogWriter(messageStringFormatter) {
  messageStringFormatter = messageStringFormatter === VOID ? DefaultFormatter_instance : messageStringFormatter;
  return ConsoleWriter_init_$Create$();
}
function ConsoleActual() {
}
protoOf(ConsoleActual).c70 = function (output) {
  console.error(output);
};
protoOf(ConsoleActual).d70 = function (output) {
  console.warn(output);
};
protoOf(ConsoleActual).e70 = function (output) {
  console.info(output);
};
protoOf(ConsoleActual).f70 = function (output) {
  console.log(output);
};
var ConsoleActual_instance;
function ConsoleActual_getInstance() {
  return ConsoleActual_instance;
}
//region block: post-declaration
protoOf(DefaultFormatter).w6z = formatSeverity;
protoOf(DefaultFormatter).x6z = formatTag;
protoOf(DefaultFormatter).y6z = formatMessage;
//endregion
//region block: init
DefaultFormatter_instance = new DefaultFormatter();
ConsoleActual_instance = new ConsoleActual();
//endregion
//region block: exports
export {
  BaseLogger as BaseLogger15vxnko5xe4r1,
  mutableLoggerConfigInit as mutableLoggerConfigInit3a48t6gios6eh,
  platformLogWriter as platformLogWritersobyk8c3gam2,
  Severity_Debug_getInstance as Severity_Debug_getInstance73ghh67ianxz,
  Severity_Warn_getInstance as Severity_Warn_getInstance1zppha5vvp3j9,
};
//endregion

//# sourceMappingURL=Kermit-kermit-core.mjs.map
