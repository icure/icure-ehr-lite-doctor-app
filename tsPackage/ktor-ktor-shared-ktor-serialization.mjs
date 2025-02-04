import {
  Exceptiondt2hlxn7j7vw as Exception,
  VOID7hggqo3abtya as VOID,
  Exception_init_$Init$2t8qsqvbxaqim as Exception_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Unit_instanceat14thlj150z as Unit_instance,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  isInterface3d6p8outrmvmk as isInterface,
  hashCodeq5arwsb9dgti as hashCode,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Charsets_getInstance193f5sla8amhs as Charsets_getInstance,
  forName2faodmskqnoz5 as forName,
  isSupported2nf870ypy50et as isSupported,
} from './ktor-ktor-io.mjs';
import {
  HttpHeaders_getInstance2mkud6v3erele as HttpHeaders_getInstance,
  parseAndSortHeader33xgq5fx7y6j1 as parseAndSortHeader,
  NullBody_instance3dxn6cf98q9mv as NullBody_instance,
} from './ktor-ktor-http.mjs';
import {
  FlowCollector26clgpmzihvke as FlowCollector,
  Flow3375h4584bu3w as Flow,
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull6qzpet0vqiov as firstOrNull,
} from './kotlinx-coroutines-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(ContentConvertException, 'ContentConvertException', VOID, Exception);
initMetadataForClass(JsonConvertException, 'JsonConvertException', VOID, ContentConvertException);
function register$default(contentType, converter, configuration, $super) {
  var tmp;
  if (configuration === VOID) {
    tmp = Configuration$register$lambda;
  } else {
    tmp = configuration;
  }
  configuration = tmp;
  var tmp_0;
  if ($super === VOID) {
    this.b36(contentType, converter, configuration);
    tmp_0 = Unit_instance;
  } else {
    tmp_0 = $super.b36.call(this, contentType, converter, configuration);
  }
  return tmp_0;
}
initMetadataForInterface(Configuration, 'Configuration');
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForLambda(deserialize$o$collect$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($collectCOROUTINE$1, CoroutineImpl);
initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, [Flow], [1]);
initMetadataForLambda(deserialize$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($deserializeCOROUTINE$0, CoroutineImpl);
//endregion
function ContentConvertException(message, cause) {
  cause = cause === VOID ? null : cause;
  Exception_init_$Init$(message, cause, this);
  captureStack(this, ContentConvertException);
}
function JsonConvertException(message, cause) {
  cause = cause === VOID ? null : cause;
  ContentConvertException.call(this, message, cause);
  captureStack(this, JsonConvertException);
}
function deserialize(_this__u8e3s4, body, typeInfo, charset, $completion) {
  var tmp = new $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
}
function suitableCharset(_this__u8e3s4, defaultCharset) {
  defaultCharset = defaultCharset === VOID ? Charsets_getInstance().o1r_1 : defaultCharset;
  var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
  return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
}
function Configuration$register$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function Configuration() {
}
function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
  defaultCharset = defaultCharset === VOID ? Charsets_getInstance().o1r_1 : defaultCharset;
  var _iterator__ex2g4s = parseAndSortHeader(_this__u8e3s4.ud(HttpHeaders_getInstance().n2m_1)).p();
  while (_iterator__ex2g4s.q()) {
    var charset = _iterator__ex2g4s.r().xa();
    if (charset === '*')
      return defaultCharset;
    else if (isSupported(Charsets_getInstance(), charset))
      return forName(Charsets_getInstance(), charset);
  }
  return null;
}
function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
  this.d36_1 = function_0;
}
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).p19 = function (value, $completion) {
  return this.d36_1(value, $completion);
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).t3 = function () {
  return this.d36_1;
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
function deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation) {
  this.m36_1 = $$this$unsafeFlow;
  this.n36_1 = $charset;
  this.o36_1 = $typeInfo;
  this.p36_1 = $body;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(deserialize$o$collect$slambda).v36 = function (value, $completion) {
  var tmp = this.w36(value, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
protoOf(deserialize$o$collect$slambda).x9 = function (p1, $completion) {
  return this.v36((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(deserialize$o$collect$slambda).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 3;
          var tmp_0 = this;
          tmp_0.r36_1 = this.m36_1;
          var tmp_1 = this;
          tmp_1.s36_1 = this.q36_1;
          var tmp_2 = this;
          tmp_2.t36_1 = this.s36_1;
          this.f9_1 = 1;
          suspendResult = this.t36_1.x36(this.n36_1, this.o36_1, this.p36_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.u36_1 = suspendResult;
          this.f9_1 = 2;
          suspendResult = this.r36_1.p19(this.u36_1, this);
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
protoOf(deserialize$o$collect$slambda).w36 = function (value, completion) {
  var i = new deserialize$o$collect$slambda(this.m36_1, this.n36_1, this.o36_1, this.p36_1, completion);
  i.q36_1 = value;
  return i;
};
function deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation) {
  var i = new deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation);
  var l = function (value, $completion) {
    return i.v36(value, $completion);
  };
  l.$arity = 1;
  return l;
}
function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.g37_1 = _this__u8e3s4;
  this.h37_1 = collector;
}
protoOf($collectCOROUTINE$1).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 2;
          var tmp_0 = this;
          tmp_0.i37_1 = this.h37_1;
          this.f9_1 = 1;
          var tmp_1 = deserialize$o$collect$slambda_0(this.i37_1, this.g37_1.k37_1, this.g37_1.l37_1, this.g37_1.m37_1, null);
          suspendResult = this.g37_1.j37_1.y18(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
function _no_name_provided__qut3iv($this, $charset, $typeInfo, $body) {
  this.j37_1 = $this;
  this.k37_1 = $charset;
  this.l37_1 = $typeInfo;
  this.m37_1 = $body;
}
protoOf(_no_name_provided__qut3iv).q19 = function (collector, $completion) {
  var tmp = new $collectCOROUTINE$1(this, collector, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
protoOf(_no_name_provided__qut3iv).y18 = function (collector, $completion) {
  return this.q19(collector, $completion);
};
function deserialize$slambda($body, resultContinuation) {
  this.v37_1 = $body;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(deserialize$slambda).x37 = function (it, $completion) {
  var tmp = this.w36(it, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
protoOf(deserialize$slambda).x9 = function (p1, $completion) {
  return this.x37((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(deserialize$slambda).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      if (tmp === 0) {
        this.g9_1 = 1;
        return !(this.w37_1 == null) || this.v37_1.x1m();
      } else if (tmp === 1) {
        throw this.i9_1;
      }
    } catch ($p) {
      var e = $p;
      throw e;
    }
   while (true);
};
protoOf(deserialize$slambda).w36 = function (it, completion) {
  var i = new deserialize$slambda(this.v37_1, completion);
  i.w37_1 = it;
  return i;
};
function deserialize$slambda_0($body, resultContinuation) {
  var i = new deserialize$slambda($body, resultContinuation);
  var l = function (it, $completion) {
    return i.x37(it, $completion);
  };
  l.$arity = 1;
  return l;
}
function $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.x35_1 = _this__u8e3s4;
  this.y35_1 = body;
  this.z35_1 = typeInfo;
  this.a36_1 = charset;
}
protoOf($deserializeCOROUTINE$0).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 2;
          this.f9_1 = 1;
          var this_0 = asFlow(this.x35_1);
          var tmp_0 = new _no_name_provided__qut3iv(this_0, this.a36_1, this.z35_1, this.y35_1);
          suspendResult = firstOrNull(tmp_0, deserialize$slambda_0(this.y35_1, null), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_1;
          if (!(result == null)) {
            tmp_1 = result;
          } else {
            if (!this.y35_1.x1m()) {
              tmp_1 = this.y35_1;
            } else {
              var tmp0_safe_receiver = this.z35_1.i2k_1;
              if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sb()) === true) {
                tmp_1 = NullBody_instance;
              } else {
                throw new ContentConvertException('No suitable converter found for ' + this.z35_1.toString());
              }
            }
          }

          return tmp_1;
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
//region block: exports
export {
  deserialize as deserialize2wnohscat0mh6,
  register$default as register$default3adwmu6p4dd5l,
  Configuration as Configuration20xgygxdzhlk5,
  JsonConvertException as JsonConvertExceptiongnc5x6xwaf77,
  suitableCharset as suitableCharset1jgdcpdzbzgzn,
};
//endregion

//# sourceMappingURL=ktor-ktor-shared-ktor-serialization.mjs.map
