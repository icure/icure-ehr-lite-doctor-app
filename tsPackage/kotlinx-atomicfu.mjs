import {
  fillArrayVali8eppxapiek4 as fillArrayVal,
  protoOf180f3jzyo7rfj as protoOf,
  defineProp3hxgpk2knu2px as defineProp,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID7hggqo3abtya as VOID,
  toString30pk9tzaqopn as toString,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(atomicfu$AtomicRefArray$ref, 'AtomicArray');
initMetadataForClass(atomicfu$TraceBase, 'TraceBase');
initMetadataForObject(None, 'None', VOID, atomicfu$TraceBase);
initMetadataForClass(AtomicRef, 'AtomicRef');
initMetadataForClass(AtomicBoolean, 'AtomicBoolean');
initMetadataForClass(AtomicLong, 'AtomicLong');
initMetadataForClass(AtomicInt, 'AtomicInt');
//endregion
function atomicfu$AtomicRefArray$ref(size) {
  var tmp = this;
  var tmp_0 = 0;
  // Inline function 'kotlin.arrayOfNulls' call
  var tmp_1 = fillArrayVal(Array(size), null);
  while (tmp_0 < size) {
    tmp_1[tmp_0] = atomic$ref$1(null);
    tmp_0 = tmp_0 + 1 | 0;
  }
  tmp.no_1 = tmp_1;
}
protoOf(atomicfu$AtomicRefArray$ref).oo = function () {
  return this.no_1.length;
};
protoOf(atomicfu$AtomicRefArray$ref).atomicfu$get = function (index) {
  return this.no_1[index];
};
function atomicfu$AtomicRefArray$ofNulls(size) {
  return new atomicfu$AtomicRefArray$ref(size);
}
function None() {
  None_instance = this;
  atomicfu$TraceBase.call(this);
}
var None_instance;
function None_getInstance() {
  if (None_instance == null)
    new None();
  return None_instance;
}
function atomicfu$TraceBase() {
}
protoOf(atomicfu$TraceBase).atomicfu$Trace$append$1 = function (event) {
};
protoOf(atomicfu$TraceBase).atomicfu$Trace$append$2 = function (event1, event2) {
};
protoOf(atomicfu$TraceBase).atomicfu$Trace$append$3 = function (event1, event2, event3) {
};
protoOf(atomicfu$TraceBase).atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
};
function AtomicRef(value) {
  this.kotlinx$atomicfu$value = value;
}
protoOf(AtomicRef).po = function (_set____db54di) {
  this.kotlinx$atomicfu$value = _set____db54di;
};
protoOf(AtomicRef).qo = function () {
  return this.kotlinx$atomicfu$value;
};
protoOf(AtomicRef).atomicfu$compareAndSet = function (expect, update) {
  if (!(this.kotlinx$atomicfu$value === expect))
    return false;
  this.kotlinx$atomicfu$value = update;
  return true;
};
protoOf(AtomicRef).atomicfu$getAndSet = function (value) {
  var oldValue = this.kotlinx$atomicfu$value;
  this.kotlinx$atomicfu$value = value;
  return oldValue;
};
protoOf(AtomicRef).toString = function () {
  return toString(this.kotlinx$atomicfu$value);
};
function atomic$ref$1(initial) {
  return atomic$ref$(initial, None_getInstance());
}
function AtomicBoolean(value) {
  this.kotlinx$atomicfu$value = value;
}
protoOf(AtomicBoolean).ro = function (_set____db54di) {
  this.kotlinx$atomicfu$value = _set____db54di;
};
protoOf(AtomicBoolean).qo = function () {
  return this.kotlinx$atomicfu$value;
};
protoOf(AtomicBoolean).atomicfu$compareAndSet = function (expect, update) {
  if (!(this.kotlinx$atomicfu$value === expect))
    return false;
  this.kotlinx$atomicfu$value = update;
  return true;
};
protoOf(AtomicBoolean).atomicfu$getAndSet = function (value) {
  var oldValue = this.kotlinx$atomicfu$value;
  this.kotlinx$atomicfu$value = value;
  return oldValue;
};
protoOf(AtomicBoolean).toString = function () {
  return this.kotlinx$atomicfu$value.toString();
};
function atomic$boolean$1(initial) {
  return atomic$boolean$(initial, None_getInstance());
}
function AtomicLong(value) {
  this.kotlinx$atomicfu$value = value;
}
protoOf(AtomicLong).so = function (_set____db54di) {
  this.kotlinx$atomicfu$value = _set____db54di;
};
protoOf(AtomicLong).qo = function () {
  return this.kotlinx$atomicfu$value;
};
protoOf(AtomicLong).atomicfu$compareAndSet = function (expect, update) {
  if (!this.kotlinx$atomicfu$value.equals(expect))
    return false;
  this.kotlinx$atomicfu$value = update;
  return true;
};
protoOf(AtomicLong).atomicfu$getAndSet = function (value) {
  var oldValue = this.kotlinx$atomicfu$value;
  this.kotlinx$atomicfu$value = value;
  return oldValue;
};
protoOf(AtomicLong).atomicfu$getAndIncrement$long = function () {
  var _unary__edvuaz = this.kotlinx$atomicfu$value;
  this.kotlinx$atomicfu$value = _unary__edvuaz.g3();
  return _unary__edvuaz;
};
protoOf(AtomicLong).atomicfu$getAndDecrement$long = function () {
  var _unary__edvuaz = this.kotlinx$atomicfu$value;
  this.kotlinx$atomicfu$value = _unary__edvuaz.h3();
  return _unary__edvuaz;
};
protoOf(AtomicLong).atomicfu$getAndAdd$long = function (delta) {
  var oldValue = this.kotlinx$atomicfu$value;
  this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.b3(delta);
  return oldValue;
};
protoOf(AtomicLong).atomicfu$addAndGet$long = function (delta) {
  this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.b3(delta);
  return this.kotlinx$atomicfu$value;
};
protoOf(AtomicLong).atomicfu$incrementAndGet$long = function () {
  this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.g3();
  return this.kotlinx$atomicfu$value;
};
protoOf(AtomicLong).atomicfu$decrementAndGet$long = function () {
  this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.h3();
  return this.kotlinx$atomicfu$value;
};
protoOf(AtomicLong).toString = function () {
  return this.kotlinx$atomicfu$value.toString();
};
function atomic$long$1(initial) {
  return atomic$long$(initial, None_getInstance());
}
function AtomicInt(value) {
  this.kotlinx$atomicfu$value = value;
}
protoOf(AtomicInt).to = function (_set____db54di) {
  this.kotlinx$atomicfu$value = _set____db54di;
};
protoOf(AtomicInt).qo = function () {
  return this.kotlinx$atomicfu$value;
};
protoOf(AtomicInt).atomicfu$compareAndSet = function (expect, update) {
  if (!(this.kotlinx$atomicfu$value === expect))
    return false;
  this.kotlinx$atomicfu$value = update;
  return true;
};
protoOf(AtomicInt).atomicfu$getAndSet = function (value) {
  var oldValue = this.kotlinx$atomicfu$value;
  this.kotlinx$atomicfu$value = value;
  return oldValue;
};
protoOf(AtomicInt).atomicfu$getAndIncrement = function () {
  var _unary__edvuaz = this.kotlinx$atomicfu$value;
  this.kotlinx$atomicfu$value = _unary__edvuaz + 1 | 0;
  return _unary__edvuaz;
};
protoOf(AtomicInt).atomicfu$getAndDecrement = function () {
  var _unary__edvuaz = this.kotlinx$atomicfu$value;
  this.kotlinx$atomicfu$value = _unary__edvuaz - 1 | 0;
  return _unary__edvuaz;
};
protoOf(AtomicInt).atomicfu$getAndAdd = function (delta) {
  var oldValue = this.kotlinx$atomicfu$value;
  this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + delta | 0;
  return oldValue;
};
protoOf(AtomicInt).atomicfu$addAndGet = function (delta) {
  this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + delta | 0;
  return this.kotlinx$atomicfu$value;
};
protoOf(AtomicInt).atomicfu$incrementAndGet = function () {
  this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + 1 | 0;
  return this.kotlinx$atomicfu$value;
};
protoOf(AtomicInt).atomicfu$decrementAndGet = function () {
  this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value - 1 | 0;
  return this.kotlinx$atomicfu$value;
};
protoOf(AtomicInt).toString = function () {
  return this.kotlinx$atomicfu$value.toString();
};
function atomic$int$1(initial) {
  return atomic$int$(initial, None_getInstance());
}
function atomic$ref$(initial, trace) {
  trace = trace === VOID ? None_getInstance() : trace;
  return new AtomicRef(initial);
}
function atomic$boolean$(initial, trace) {
  trace = trace === VOID ? None_getInstance() : trace;
  return new AtomicBoolean(initial);
}
function atomic$long$(initial, trace) {
  trace = trace === VOID ? None_getInstance() : trace;
  return new AtomicLong(initial);
}
function atomic$int$(initial, trace) {
  trace = trace === VOID ? None_getInstance() : trace;
  return new AtomicInt(initial);
}
//region block: post-declaration
defineProp(protoOf(atomicfu$AtomicRefArray$ref), 'atomicfu$size', protoOf(atomicfu$AtomicRefArray$ref).oo);
//endregion
//region block: exports
export {
  atomicfu$AtomicRefArray$ofNulls as atomicfu$AtomicRefArray$ofNulls2kz3j9ehigwa3,
  atomic$boolean$1 as atomic$boolean$1iggki4z65a2h,
  atomic$long$1 as atomic$long$129k9zwo6n9ogd,
  atomic$ref$1 as atomic$ref$130aurmcwdfdf1,
  atomic$int$1 as atomic$int$11d5swdyn6j0pu,
};
//endregion

//# sourceMappingURL=kotlinx-atomicfu.mjs.map
