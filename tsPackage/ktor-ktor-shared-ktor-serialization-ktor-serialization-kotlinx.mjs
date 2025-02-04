import {
  ArrayList_init_$Create$2rimpp4x9tjd3 as ArrayList_init_$Create$,
  Unit_instanceat14thlj150z as Unit_instance,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  protoOf180f3jzyo7rfj as protoOf,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  VOID7hggqo3abtya as VOID,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  toString1pkumu07cwy4m as toString,
  IllegalStateException_init_$Create$1nm9y6jd3c9iy as IllegalStateException_init_$Create$,
  isInterface3d6p8outrmvmk as isInterface,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  hashCodeq5arwsb9dgti as hashCode,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalArgumentException_init_$Create$sfel9vrfa7w2 as IllegalArgumentException_init_$Create$,
  getKClassFromExpression3vpejubogshaw as getKClassFromExpression,
  KtMap140uvy3s5zad8 as KtMap,
  KtSetjrjc7fhfd6b9 as KtSet,
  firstOrNull1gk7vzkf4h3nq as firstOrNull,
  StringCompanionObject_instance1kavzb69ik84p as StringCompanionObject_instance,
  isArray1hxjqtqy632bc as isArray,
  KtList3hktaavzmj137 as KtList,
  filterNotNull3qfgcwmxhwfxe as filterNotNull,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  ArrayList_init_$Create$3m1kyiqequwm5 as ArrayList_init_$Create$_0,
  HashSet_init_$Create$2bsk5herqkxxm as HashSet_init_$Create$,
  singleOrNullrknfaxokm1sl as singleOrNull,
  Collection1k04j3hzsbod0 as Collection,
  emptyList1g2z5xcrvp2zy as emptyList,
} from './kotlin-kotlin-stdlib.mjs';
import {
  KSerializerzf77vz1967fq as KSerializer,
  BinaryFormat3f3aelhmz0ro1 as BinaryFormat,
  StringFormat2r2ka8mzcb3mi as StringFormat,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  serializerOrNull31x2b6nu6gruj as serializerOrNull,
  serializer1rka18p0rjk4x as serializer,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  SetSerializert3lb0yy9iftr as SetSerializer,
  serializer1x79l67jvwntn as serializer_0,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  get_nullable197rfua9r7fsz as get_nullable,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  ByteArrayContent9zol65b22hp0 as ByteArrayContent,
  withCharsetIfNeeded3sz33ys0x9vfx as withCharsetIfNeeded,
  TextContent1rb6ftlpvl1d2 as TextContent,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
} from './ktor-ktor-http.mjs';
import {
  FlowCollector26clgpmzihvke as FlowCollector,
  Flow3375h4584bu3w as Flow,
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull6qzpet0vqiov as firstOrNull_0,
} from './kotlinx-coroutines-core.mjs';
import {
  readRemaining1h8rbofkekiud as readRemaining,
  discard3ugntd47xyll6 as discard,
  readText27783kyxjxi1g as readText,
} from './ktor-ktor-io.mjs';
import { readByteArray1ri21h2rciakw as readByteArray } from './kotlinx-io-kotlinx-io-core.mjs';
import { JsonConvertExceptiongnc5x6xwaf77 as JsonConvertException } from './ktor-ktor-shared-ktor-serialization.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForLambda(KotlinxSerializationConverter$serialize$o$collect$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($collectCOROUTINE$2, CoroutineImpl);
initMetadataForLambda(KotlinxSerializationConverter$deserialize$o$collect$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($collectCOROUTINE$3, CoroutineImpl);
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, [Flow], [1]);
initMetadataForLambda(KotlinxSerializationConverter$serialize$slambda, CoroutineImpl, VOID, [1]);
initMetadataForClass(_no_name_provided__qut3iv_0, VOID, VOID, VOID, [Flow], [1]);
initMetadataForLambda(KotlinxSerializationConverter$deserialize$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($serializeCOROUTINE$0, CoroutineImpl);
initMetadataForCoroutine($deserializeCOROUTINE$1, CoroutineImpl);
initMetadataForClass(KotlinxSerializationConverter, 'KotlinxSerializationConverter', VOID, VOID, VOID, [4, 3]);
//endregion
function extensions(format) {
  // Inline function 'kotlin.collections.mapNotNull' call
  // Inline function 'kotlin.collections.mapNotNullTo' call
  var this_0 = get_providers();
  var destination = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.forEach' call
  var tmp0_iterator = this_0.p();
  while (tmp0_iterator.q()) {
    var element = tmp0_iterator.r();
    // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
    // Inline function 'io.ktor.serialization.kotlinx.extensions.<anonymous>' call
    var tmp0_safe_receiver = element.i4j(format);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      destination.k(tmp0_safe_receiver);
    }
  }
  return destination;
}
function serialization(_this__u8e3s4, contentType, format) {
  _this__u8e3s4.c36(contentType, new KotlinxSerializationConverter(format));
}
function KotlinxSerializationConverter$serialize$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
  this.r4j_1 = $$this$unsafeFlow;
  this.s4j_1 = $contentType;
  this.t4j_1 = $charset;
  this.u4j_1 = $typeInfo;
  this.v4j_1 = $value;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).v36 = function (value, $completion) {
  var tmp = this.w36(value, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).x9 = function (p1, $completion) {
  return this.v36((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 3;
          var tmp_0 = this;
          tmp_0.x4j_1 = this.r4j_1;
          var tmp_1 = this;
          tmp_1.y4j_1 = this.w4j_1;
          var tmp_2 = this;
          tmp_2.z4j_1 = this.y4j_1;
          this.f9_1 = 1;
          suspendResult = this.z4j_1.h4j(this.s4j_1, this.t4j_1, this.u4j_1, this.v4j_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.a4k_1 = suspendResult;
          this.f9_1 = 2;
          suspendResult = this.x4j_1.p19(this.a4k_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          return Unit_instance;
        case 3:
          throw this.i9_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.g9_1 === 3) {
        throw e;
      } else {
        this.f9_1 = this.g9_1;
        this.i9_1 = e;
      }
    }
   while (true);
};
protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).w36 = function (value, completion) {
  var i = new KotlinxSerializationConverter$serialize$o$collect$slambda(this.r4j_1, this.s4j_1, this.t4j_1, this.u4j_1, this.v4j_1, completion);
  i.w4j_1 = value;
  return i;
};
function KotlinxSerializationConverter$serialize$o$collect$slambda_0($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
  var i = new KotlinxSerializationConverter$serialize$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation);
  var l = function (value, $completion) {
    return i.v36(value, $completion);
  };
  l.$arity = 1;
  return l;
}
function $collectCOROUTINE$2(_this__u8e3s4, collector, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.j4k_1 = _this__u8e3s4;
  this.k4k_1 = collector;
}
protoOf($collectCOROUTINE$2).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 2;
          var tmp_0 = this;
          tmp_0.l4k_1 = this.k4k_1;
          this.f9_1 = 1;
          var tmp_1 = KotlinxSerializationConverter$serialize$o$collect$slambda_0(this.l4k_1, this.j4k_1.n4k_1, this.j4k_1.o4k_1, this.j4k_1.p4k_1, this.j4k_1.q4k_1, null);
          suspendResult = this.j4k_1.m4k_1.y18(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          return Unit_instance;
        case 2:
          throw this.i9_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.g9_1 === 2) {
        throw e;
      } else {
        this.f9_1 = this.g9_1;
        this.i9_1 = e;
      }
    }
   while (true);
};
function KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation) {
  this.z4k_1 = $$this$unsafeFlow;
  this.a4l_1 = $charset;
  this.b4l_1 = $typeInfo;
  this.c4l_1 = $content;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).v36 = function (value, $completion) {
  var tmp = this.w36(value, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).x9 = function (p1, $completion) {
  return this.v36((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 3;
          var tmp_0 = this;
          tmp_0.e4l_1 = this.z4k_1;
          var tmp_1 = this;
          tmp_1.f4l_1 = this.d4l_1;
          var tmp_2 = this;
          tmp_2.g4l_1 = this.f4l_1;
          this.f9_1 = 1;
          suspendResult = this.g4l_1.x36(this.a4l_1, this.b4l_1, this.c4l_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.h4l_1 = suspendResult;
          this.f9_1 = 2;
          suspendResult = this.e4l_1.p19(this.h4l_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          return Unit_instance;
        case 3:
          throw this.i9_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.g9_1 === 3) {
        throw e;
      } else {
        this.f9_1 = this.g9_1;
        this.i9_1 = e;
      }
    }
   while (true);
};
protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).w36 = function (value, completion) {
  var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda(this.z4k_1, this.a4l_1, this.b4l_1, this.c4l_1, completion);
  i.d4l_1 = value;
  return i;
};
function KotlinxSerializationConverter$deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation) {
  var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation);
  var l = function (value, $completion) {
    return i.v36(value, $completion);
  };
  l.$arity = 1;
  return l;
}
function $collectCOROUTINE$3(_this__u8e3s4, collector, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.q4l_1 = _this__u8e3s4;
  this.r4l_1 = collector;
}
protoOf($collectCOROUTINE$3).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 2;
          var tmp_0 = this;
          tmp_0.s4l_1 = this.r4l_1;
          this.f9_1 = 1;
          var tmp_1 = KotlinxSerializationConverter$deserialize$o$collect$slambda_0(this.s4l_1, this.q4l_1.u4l_1, this.q4l_1.v4l_1, this.q4l_1.w4l_1, null);
          suspendResult = this.q4l_1.t4l_1.y18(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          return Unit_instance;
        case 2:
          throw this.i9_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.g9_1 === 2) {
        throw e;
      } else {
        this.f9_1 = this.g9_1;
        this.i9_1 = e;
      }
    }
   while (true);
};
function serializeContent($this, serializer, format, value, contentType, charset) {
  var tmp;
  if (isInterface(format, StringFormat)) {
    var content = format.s1t(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
    tmp = new TextContent(content, withCharsetIfNeeded(contentType, charset));
  } else {
    if (isInterface(format, BinaryFormat)) {
      var content_0 = format.v1t(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      tmp = new ByteArrayContent(content_0, contentType);
    } else {
      var message = 'Unsupported format ' + toString(format);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  return tmp;
}
function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
  this.x4l_1 = function_0;
}
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).p19 = function (value, $completion) {
  return this.x4l_1(value, $completion);
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).t3 = function () {
  return this.x4l_1;
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, FlowCollector) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.t3(), other.t3());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
  return hashCode(this.t3());
};
function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
  this.y4l_1 = function_0;
}
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).p19 = function (value, $completion) {
  return this.y4l_1(value, $completion);
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).t3 = function () {
  return this.y4l_1;
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, FlowCollector) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.t3(), other.t3());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
  return hashCode(this.t3());
};
function _no_name_provided__qut3iv($this, $contentType, $charset, $typeInfo, $value) {
  this.m4k_1 = $this;
  this.n4k_1 = $contentType;
  this.o4k_1 = $charset;
  this.p4k_1 = $typeInfo;
  this.q4k_1 = $value;
}
protoOf(_no_name_provided__qut3iv).q19 = function (collector, $completion) {
  var tmp = new $collectCOROUTINE$2(this, collector, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
protoOf(_no_name_provided__qut3iv).y18 = function (collector, $completion) {
  return this.q19(collector, $completion);
};
function KotlinxSerializationConverter$serialize$slambda(resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(KotlinxSerializationConverter$serialize$slambda).i4m = function (it, $completion) {
  var tmp = this.j4m(it, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
protoOf(KotlinxSerializationConverter$serialize$slambda).x9 = function (p1, $completion) {
  return this.i4m((p1 == null ? true : p1 instanceof OutgoingContent) ? p1 : THROW_CCE(), $completion);
};
protoOf(KotlinxSerializationConverter$serialize$slambda).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      if (tmp === 0) {
        this.g9_1 = 1;
        return !(this.h4m_1 == null);
      } else if (tmp === 1) {
        throw this.i9_1;
      }
    } catch ($p) {
      var e = $p;
      throw e;
    }
   while (true);
};
protoOf(KotlinxSerializationConverter$serialize$slambda).j4m = function (it, completion) {
  var i = new KotlinxSerializationConverter$serialize$slambda(completion);
  i.h4m_1 = it;
  return i;
};
function KotlinxSerializationConverter$serialize$slambda_0(resultContinuation) {
  var i = new KotlinxSerializationConverter$serialize$slambda(resultContinuation);
  var l = function (it, $completion) {
    return i.i4m(it, $completion);
  };
  l.$arity = 1;
  return l;
}
function _no_name_provided__qut3iv_0($this, $charset, $typeInfo, $content) {
  this.t4l_1 = $this;
  this.u4l_1 = $charset;
  this.v4l_1 = $typeInfo;
  this.w4l_1 = $content;
}
protoOf(_no_name_provided__qut3iv_0).q19 = function (collector, $completion) {
  var tmp = new $collectCOROUTINE$3(this, collector, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
protoOf(_no_name_provided__qut3iv_0).y18 = function (collector, $completion) {
  return this.q19(collector, $completion);
};
function KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation) {
  this.s4m_1 = $content;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(KotlinxSerializationConverter$deserialize$slambda).x37 = function (it, $completion) {
  var tmp = this.w36(it, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
protoOf(KotlinxSerializationConverter$deserialize$slambda).x9 = function (p1, $completion) {
  return this.x37((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(KotlinxSerializationConverter$deserialize$slambda).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      if (tmp === 0) {
        this.g9_1 = 1;
        return !(this.t4m_1 == null) || this.s4m_1.x1m();
      } else if (tmp === 1) {
        throw this.i9_1;
      }
    } catch ($p) {
      var e = $p;
      throw e;
    }
   while (true);
};
protoOf(KotlinxSerializationConverter$deserialize$slambda).w36 = function (it, completion) {
  var i = new KotlinxSerializationConverter$deserialize$slambda(this.s4m_1, completion);
  i.t4m_1 = it;
  return i;
};
function KotlinxSerializationConverter$deserialize$slambda_0($content, resultContinuation) {
  var i = new KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation);
  var l = function (it, $completion) {
    return i.x37(it, $completion);
  };
  l.$arity = 1;
  return l;
}
function $serializeCOROUTINE$0(_this__u8e3s4, contentType, charset, typeInfo, value, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.c4n_1 = _this__u8e3s4;
  this.d4n_1 = contentType;
  this.e4n_1 = charset;
  this.f4n_1 = typeInfo;
  this.g4n_1 = value;
}
protoOf($serializeCOROUTINE$0).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 2;
          this.f9_1 = 1;
          var this_0 = asFlow(this.c4n_1.i4n_1);
          var tmp_0 = new _no_name_provided__qut3iv(this_0, this.d4n_1, this.e4n_1, this.f4n_1, this.g4n_1);
          suspendResult = firstOrNull_0(tmp_0, KotlinxSerializationConverter$serialize$slambda_0(null), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var fromExtension = suspendResult;
          if (!(fromExtension == null))
            return fromExtension;
          var tmp_1;
          try {
            tmp_1 = serializerForTypeInfo(this.c4n_1.h4n_1.u1t(), this.f4n_1);
          } catch ($p) {
            var tmp_2;
            if ($p instanceof SerializationException) {
              var cause = $p;
              tmp_2 = guessSerializer(this.g4n_1, this.c4n_1.h4n_1.u1t());
            } else {
              throw $p;
            }
            tmp_1 = tmp_2;
          }

          var serializer = tmp_1;
          return serializeContent(this.c4n_1, serializer, this.c4n_1.h4n_1, this.g4n_1, this.d4n_1, this.e4n_1);
        case 2:
          throw this.i9_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.g9_1 === 2) {
        throw e;
      } else {
        this.f9_1 = this.g9_1;
        this.i9_1 = e;
      }
    }
   while (true);
};
function $deserializeCOROUTINE$1(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.r4n_1 = _this__u8e3s4;
  this.s4n_1 = charset;
  this.t4n_1 = typeInfo;
  this.u4n_1 = content;
}
protoOf($deserializeCOROUTINE$1).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 4;
          this.f9_1 = 1;
          var this_0 = asFlow(this.r4n_1.i4n_1);
          var tmp_0 = new _no_name_provided__qut3iv_0(this_0, this.s4n_1, this.t4n_1, this.u4n_1);
          suspendResult = firstOrNull_0(tmp_0, KotlinxSerializationConverter$deserialize$slambda_0(this.u4n_1, null), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.v4n_1 = suspendResult;
          var tmp_1;
          if (!this.r4n_1.i4n_1.h()) {
            tmp_1 = !(this.v4n_1 == null) || this.u4n_1.x1m();
          } else {
            tmp_1 = false;
          }

          if (tmp_1)
            return this.v4n_1;
          this.w4n_1 = serializerForTypeInfo(this.r4n_1.h4n_1.u1t(), this.t4n_1);
          this.f9_1 = 2;
          suspendResult = readRemaining(this.u4n_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          var contentPacket = suspendResult;
          this.g9_1 = 3;
          var tmp0_subject = this.r4n_1.h4n_1;
          var tmp_2;
          if (isInterface(tmp0_subject, StringFormat)) {
            tmp_2 = this.r4n_1.h4n_1.t1t(this.w4n_1, readText(contentPacket, this.s4n_1));
          } else {
            if (isInterface(tmp0_subject, BinaryFormat)) {
              tmp_2 = this.r4n_1.h4n_1.w1t(this.w4n_1, readByteArray(contentPacket));
            } else {
              discard(contentPacket);
              var message = 'Unsupported format ' + toString(this.r4n_1.h4n_1);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }

          return tmp_2;
        case 3:
          this.g9_1 = 4;
          var tmp_3 = this.i9_1;
          if (tmp_3 instanceof Error) {
            var cause = this.i9_1;
            throw new JsonConvertException('Illegal input: ' + cause.message, cause);
          } else {
            throw this.i9_1;
          }

        case 4:
          throw this.i9_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.g9_1 === 4) {
        throw e;
      } else {
        this.f9_1 = this.g9_1;
        this.i9_1 = e;
      }
    }
   while (true);
};
function KotlinxSerializationConverter(format) {
  this.h4n_1 = format;
  this.i4n_1 = extensions(this.h4n_1);
  // Inline function 'kotlin.require' call
  var tmp;
  var tmp_0 = this.h4n_1;
  if (isInterface(tmp_0, BinaryFormat)) {
    tmp = true;
  } else {
    var tmp_1 = this.h4n_1;
    tmp = isInterface(tmp_1, StringFormat);
  }
  // Inline function 'kotlin.contracts.contract' call
  if (!tmp) {
    // Inline function 'io.ktor.serialization.kotlinx.KotlinxSerializationConverter.<anonymous>' call
    var message = 'Only binary and string formats are supported, ' + toString(this.h4n_1) + ' is not supported.';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
}
protoOf(KotlinxSerializationConverter).x4n = function (contentType, charset, typeInfo, value, $completion) {
  var tmp = new $serializeCOROUTINE$0(this, contentType, charset, typeInfo, value, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
protoOf(KotlinxSerializationConverter).h4j = function (contentType, charset, typeInfo, value, $completion) {
  return this.x4n(contentType, charset, typeInfo, value, $completion);
};
protoOf(KotlinxSerializationConverter).x36 = function (charset, typeInfo, content, $completion) {
  var tmp = new $deserializeCOROUTINE$1(this, charset, typeInfo, content, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
function serializerForTypeInfo(_this__u8e3s4, typeInfo) {
  var module_0 = _this__u8e3s4;
  var tmp0_safe_receiver = typeInfo.i2k_1;
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.serialization.kotlinx.serializerForTypeInfo.<anonymous>' call
    var tmp_0;
    if (tmp0_safe_receiver.rb().h()) {
      tmp_0 = null;
    } else {
      tmp_0 = serializerOrNull(module_0, tmp0_safe_receiver);
    }
    tmp = tmp_0;
  }
  var tmp1_elvis_lhs = tmp;
  var tmp_1;
  if (tmp1_elvis_lhs == null) {
    var tmp2_safe_receiver = module_0.z1t(typeInfo.h2k_1);
    tmp_1 = tmp2_safe_receiver == null ? null : maybeNullable(tmp2_safe_receiver, typeInfo);
  } else {
    tmp_1 = tmp1_elvis_lhs;
  }
  var tmp3_elvis_lhs = tmp_1;
  return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.h2k_1), typeInfo) : tmp3_elvis_lhs;
}
function guessSerializer(value, module_0) {
  var tmp;
  if (value == null) {
    tmp = get_nullable(serializer_0(StringCompanionObject_instance));
  } else {
    if (!(value == null) ? isInterface(value, KtList) : false) {
      tmp = ListSerializer(elementSerializer(value, module_0));
    } else {
      if (!(value == null) ? isArray(value) : false) {
        var tmp1_safe_receiver = firstOrNull(value);
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'io.ktor.serialization.kotlinx.guessSerializer.<anonymous>' call
          tmp_0 = guessSerializer(tmp1_safe_receiver, module_0);
        }
        var tmp2_elvis_lhs = tmp_0;
        tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_instance)) : tmp2_elvis_lhs;
      } else {
        if (!(value == null) ? isInterface(value, KtSet) : false) {
          tmp = SetSerializer(elementSerializer(value, module_0));
        } else {
          if (!(value == null) ? isInterface(value, KtMap) : false) {
            var keySerializer = elementSerializer(value.p2(), module_0);
            var valueSerializer = elementSerializer(value.q2(), module_0);
            tmp = MapSerializer(keySerializer, valueSerializer);
          } else {
            var tmp3_elvis_lhs = module_0.z1t(getKClassFromExpression(value));
            tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
          }
        }
      }
    }
  }
  var tmp_1 = tmp;
  return isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
}
function maybeNullable(_this__u8e3s4, typeInfo) {
  var tmp;
  var tmp0_safe_receiver = typeInfo.i2k_1;
  if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sb()) === true) {
    tmp = get_nullable(_this__u8e3s4);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function elementSerializer(_this__u8e3s4, module_0) {
  // Inline function 'kotlin.collections.distinctBy' call
  // Inline function 'kotlin.collections.map' call
  var this_0 = filterNotNull(_this__u8e3s4);
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var tmp0_iterator = this_0.p();
  while (tmp0_iterator.q()) {
    var item = tmp0_iterator.r();
    // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
    var tmp$ret$0 = guessSerializer(item, module_0);
    destination.k(tmp$ret$0);
  }
  var set = HashSet_init_$Create$();
  var list = ArrayList_init_$Create$();
  var tmp0_iterator_0 = destination.p();
  while (tmp0_iterator_0.q()) {
    var e = tmp0_iterator_0.r();
    // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
    var key = e.r1s().r1t();
    if (set.k(key)) {
      list.k(e);
    }
  }
  var serializers = list;
  if (serializers.s() > 1) {
    // Inline function 'kotlin.error' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(serializers, 10));
    var tmp0_iterator_1 = serializers.p();
    while (tmp0_iterator_1.q()) {
      var item_0 = tmp0_iterator_1.r();
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      var tmp$ret$5 = item_0.r1s().r1t();
      destination_0.k(tmp$ret$5);
    }
    var message = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + toString(destination_0));
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var tmp0_elvis_lhs = singleOrNull(serializers);
  var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_instance) : tmp0_elvis_lhs;
  if (selected.r1s().d1u()) {
    return selected;
  }
  if (!isInterface(selected, KSerializer))
    THROW_CCE();
  var tmp$ret$8;
  $l$block_0: {
    // Inline function 'kotlin.collections.any' call
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = _this__u8e3s4.h();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$8 = false;
      break $l$block_0;
    }
    var tmp0_iterator_2 = _this__u8e3s4.p();
    while (tmp0_iterator_2.q()) {
      var element = tmp0_iterator_2.r();
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      if (element == null) {
        tmp$ret$8 = true;
        break $l$block_0;
      }
    }
    tmp$ret$8 = false;
  }
  if (tmp$ret$8) {
    return get_nullable(selected);
  }
  return selected;
}
function get_providers() {
  return emptyList();
}
//region block: exports
export {
  serialization as serialization1fpeds7cruos4,
};
//endregion

//# sourceMappingURL=ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx.mjs.map
