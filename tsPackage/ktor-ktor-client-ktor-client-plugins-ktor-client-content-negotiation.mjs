import {
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  plus1ogy4liedzq5j as plus,
  toMutableSetjdpdbr9jsqq8 as toMutableSet,
  ArrayList_init_$Create$2rimpp4x9tjd3 as ArrayList_init_$Create$,
  Unit_instanceat14thlj150z as Unit_instance,
  VOID7hggqo3abtya as VOID,
  Exceptiondt2hlxn7j7vw as Exception,
  Exception_init_$Init$3c1h61we8oiuv as Exception_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  isInterface3d6p8outrmvmk as isInterface,
  toString1pkumu07cwy4m as toString,
  Collection1k04j3hzsbod0 as Collection,
  getKClassFromExpression3vpejubogshaw as getKClassFromExpression,
  Unitkvevlwgzwiuc as Unit,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  equals2au1ep9vhcato as equals,
  joinToString1cxrrlmo0chqs as joinToString,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  ArrayList_init_$Create$3m1kyiqequwm5 as ArrayList_init_$Create$_0,
  PrimitiveClasses_getInstanceeand5azd2sul as PrimitiveClasses_getInstance,
  getKClass1s3j9wy1cofik as getKClass,
  setOf45ia9pnfhe90 as setOf,
  startsWith26w8qjqapeeq6 as startsWith,
  endsWith3cq61xxngobwh as endsWith,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  LinkedHashSet_init_$Create$161uomhguzhxi as LinkedHashSet_init_$Create$,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Application_getInstance2kmfyp5stwhta as Application_getInstance,
  contentType317fn4f991q9a as contentType,
  HttpHeaders_getInstance2mkud6v3erele as HttpHeaders_getInstance,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
  contentType2zzm38yxo3syt as contentType_0,
  charset1dribv3ku48b1 as charset,
  NullBody_instance3dxn6cf98q9mv as NullBody_instance,
  HttpStatusCode3o1wkms10pg4k as HttpStatusCode,
} from './ktor-ktor-http.mjs';
import {
  register$default3adwmu6p4dd5l as register$default,
  Configuration20xgygxdzhlk5 as Configuration,
  suitableCharset1jgdcpdzbzgzn as suitableCharset,
  deserialize2wnohscat0mh6 as deserialize,
} from './ktor-ktor-shared-ktor-serialization.mjs';
import {
  Charsets_getInstance193f5sla8amhs as Charsets_getInstance,
  ByteReadChannel2wzou76jce72d as ByteReadChannel,
} from './ktor-ktor-io.mjs';
import {
  TransformRequestBodyContext3ll40opqaho0d as TransformRequestBodyContext,
  HttpRequestBuilder15f2nnx9sjuv1 as HttpRequestBuilder,
  TransformResponseBodyContext1axf7xx6ifwbj as TransformResponseBodyContext,
  HttpResponse1532ob1hsse1y as HttpResponse,
  get_request3dwcif5y0fvf1 as get_request,
  accept2gi3b7wj4jds9 as accept,
  EmptyContent_getInstance25tnzbc1zmttj as EmptyContent_getInstance,
  createClientPluginjwpvufjows5r as createClientPlugin,
} from './ktor-ktor-client-ktor-client-core.mjs';
import {
  TypeInfo2nbxsuf4v8os2 as TypeInfo,
  KtorSimpleLogger1xdphsp5l4e48 as KtorSimpleLogger,
} from './ktor-ktor-utils.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(ConverterRegistration, 'ConverterRegistration');
initMetadataForClass(ContentNegotiationConfig$defaultMatcher$1);
initMetadataForClass(ContentNegotiationConfig, 'ContentNegotiationConfig', ContentNegotiationConfig, VOID, [Configuration]);
initMetadataForClass(ContentConverterException, 'ContentConverterException', VOID, Exception);
initMetadataForLambda(ContentNegotiation$lambda$slambda, CoroutineImpl, VOID, [4]);
initMetadataForLambda(ContentNegotiation$lambda$slambda_1, CoroutineImpl, VOID, [4]);
initMetadataForCoroutine($invoke$convertRequestCOROUTINE$0, CoroutineImpl);
initMetadataForCoroutine($invoke$convertResponseCOROUTINE$1, CoroutineImpl);
initMetadataForObject(JsonContentTypeMatcher, 'JsonContentTypeMatcher');
//endregion
function get_LOGGER() {
  _init_properties_ContentNegotiation_kt__o183go();
  return LOGGER;
}
var LOGGER;
function get_DefaultCommonIgnoredTypes() {
  _init_properties_ContentNegotiation_kt__o183go();
  return DefaultCommonIgnoredTypes;
}
var DefaultCommonIgnoredTypes;
function get_ContentNegotiation() {
  _init_properties_ContentNegotiation_kt__o183go();
  return ContentNegotiation;
}
var ContentNegotiation;
function ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher) {
  this.g4g_1 = converter;
  this.h4g_1 = contentTypeToSend;
  this.i4g_1 = contentTypeMatcher;
}
function defaultMatcher($this, pattern) {
  return new ContentNegotiationConfig$defaultMatcher$1(pattern);
}
function ContentNegotiationConfig$defaultMatcher$1($pattern) {
  this.j4g_1 = $pattern;
}
protoOf(ContentNegotiationConfig$defaultMatcher$1).k4g = function (contentType) {
  return contentType.g2m(this.j4g_1);
};
function ContentNegotiationConfig() {
  this.l4g_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.m4g_1 = ArrayList_init_$Create$();
}
protoOf(ContentNegotiationConfig).b36 = function (contentType, converter, configuration) {
  var matcher = contentType.equals(Application_getInstance().y2k_1) ? JsonContentTypeMatcher_instance : defaultMatcher(this, contentType);
  this.n4g(contentType, converter, matcher, configuration);
};
protoOf(ContentNegotiationConfig).n4g = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
  // Inline function 'kotlin.apply' call
  // Inline function 'kotlin.contracts.contract' call
  configuration(converter);
  var registration = new ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher);
  this.m4g_1.k(registration);
};
function ContentConverterException(message) {
  Exception_init_$Init$(message, this);
  captureStack(this, ContentConverterException);
}
function ContentNegotiationConfig$_init_$ref_1ne3ob() {
  var l = function () {
    return new ContentNegotiationConfig();
  };
  l.callableName = '<init>';
  return l;
}
function ContentNegotiation$lambda($this$createClientPlugin) {
  _init_properties_ContentNegotiation_kt__o183go();
  var registrations = $this$createClientPlugin.s3i_1.m4g_1;
  var ignoredTypes = $this$createClientPlugin.s3i_1.l4g_1;
  $this$createClientPlugin.c40(ContentNegotiation$lambda$slambda_0(registrations, ignoredTypes, $this$createClientPlugin, null));
  $this$createClientPlugin.y3s(ContentNegotiation$lambda$slambda_2(ignoredTypes, registrations, $this$createClientPlugin, null));
  return Unit_instance;
}
function invoke$convertRequest(registrations, ignoredTypes, $this_createClientPlugin, request, body, $completion) {
  var tmp = new $invoke$convertRequestCOROUTINE$0(registrations, ignoredTypes, $this_createClientPlugin, request, body, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
}
function invoke$convertResponse(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion) {
  charset = charset === VOID ? Charsets_getInstance().o1r_1 : charset;
  var tmp = new $invoke$convertResponseCOROUTINE$1(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
}
function ContentNegotiation$lambda$slambda($registrations, $ignoredTypes, $this_createClientPlugin, resultContinuation) {
  this.h4i_1 = $registrations;
  this.i4i_1 = $ignoredTypes;
  this.j4i_1 = $this_createClientPlugin;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(ContentNegotiation$lambda$slambda).o4i = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) {
  var tmp = this.p4i($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
protoOf(ContentNegotiation$lambda$slambda).d3u = function (p1, p2, p3, p4, $completion) {
  var tmp = p1 instanceof TransformRequestBodyContext ? p1 : THROW_CCE();
  var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
  var tmp_1 = !(p3 == null) ? p3 : THROW_CCE();
  return this.o4i(tmp, tmp_0, tmp_1, (p4 == null ? true : p4 instanceof TypeInfo) ? p4 : THROW_CCE(), $completion);
};
protoOf(ContentNegotiation$lambda$slambda).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 2;
          this.f9_1 = 1;
          suspendResult = invoke$convertRequest(this.h4i_1, this.i4i_1, this.j4i_1, this.l4i_1, this.m4i_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          return suspendResult;
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
protoOf(ContentNegotiation$lambda$slambda).p4i = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, completion) {
  var i = new ContentNegotiation$lambda$slambda(this.h4i_1, this.i4i_1, this.j4i_1, completion);
  i.k4i_1 = $this$transformRequestBody;
  i.l4i_1 = request;
  i.m4i_1 = body;
  i.n4i_1 = _unused_var__etf5q3;
  return i;
};
function ContentNegotiation$lambda$slambda_0($registrations, $ignoredTypes, $this_createClientPlugin, resultContinuation) {
  var i = new ContentNegotiation$lambda$slambda($registrations, $ignoredTypes, $this_createClientPlugin, resultContinuation);
  var l = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) {
    return i.o4i($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion);
  };
  l.$arity = 4;
  return l;
}
function ContentNegotiation$lambda$slambda_1($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation) {
  this.y4i_1 = $ignoredTypes;
  this.z4i_1 = $registrations;
  this.a4j_1 = $this_createClientPlugin;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(ContentNegotiation$lambda$slambda_1).b3u = function ($this$transformResponseBody, response, body, info, $completion) {
  var tmp = this.c3u($this$transformResponseBody, response, body, info, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
protoOf(ContentNegotiation$lambda$slambda_1).d3u = function (p1, p2, p3, p4, $completion) {
  var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
  var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
  var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
  return this.b3u(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
};
protoOf(ContentNegotiation$lambda$slambda_1).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 2;
          var tmp_0 = this;
          var tmp0_elvis_lhs = contentType(this.c4j_1);
          var tmp_1;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_1 = tmp0_elvis_lhs;
          }

          tmp_0.f4j_1 = tmp_1;
          this.g4j_1 = suitableCharset(get_request(this.c4j_1).p2q());
          this.f9_1 = 1;
          suspendResult = invoke$convertResponse(this.y4i_1, this.z4i_1, this.a4j_1, get_request(this.c4j_1).r3c(), this.e4j_1, this.d4j_1, this.f4j_1, this.g4j_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          return suspendResult;
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
protoOf(ContentNegotiation$lambda$slambda_1).c3u = function ($this$transformResponseBody, response, body, info, completion) {
  var i = new ContentNegotiation$lambda$slambda_1(this.y4i_1, this.z4i_1, this.a4j_1, completion);
  i.b4j_1 = $this$transformResponseBody;
  i.c4j_1 = response;
  i.d4j_1 = body;
  i.e4j_1 = info;
  return i;
};
function ContentNegotiation$lambda$slambda_2($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation) {
  var i = new ContentNegotiation$lambda$slambda_1($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation);
  var l = function ($this$transformResponseBody, response, body, info, $completion) {
    return i.b3u($this$transformResponseBody, response, body, info, $completion);
  };
  l.$arity = 4;
  return l;
}
function ContentNegotiation$lambda$convertRequest$lambda(it) {
  _init_properties_ContentNegotiation_kt__o183go();
  return toString(it.g4g_1);
}
function $invoke$convertRequestCOROUTINE$0(registrations, ignoredTypes, $this_createClientPlugin, request, body, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.w4g_1 = registrations;
  this.x4g_1 = ignoredTypes;
  this.y4g_1 = $this_createClientPlugin;
  this.z4g_1 = request;
  this.a4h_1 = body;
}
protoOf($invoke$convertRequestCOROUTINE$0).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 7;
          var tmp0_iterator = this.w4g_1.p();
          while (tmp0_iterator.q()) {
            var element = tmp0_iterator.r();
            l$ret$1: do {
              get_LOGGER().l2k('Adding Accept=' + element.h4g_1.c2m_1 + ' header for ' + this.z4g_1.f3a_1.toString());
              if (this.z4g_1.h3a_1.r2g(HttpHeaders_getInstance().m2m_1, element.h4g_1.toString())) {
                break l$ret$1;
              }
              accept(this.z4g_1, element.h4g_1);
            }
             while (false);
          }

          var tmp_0;
          var tmp_1 = this.a4h_1;
          if (tmp_1 instanceof OutgoingContent) {
            tmp_0 = true;
          } else {
            var tmp$ret$2;
            l$ret$3: do {
              var this_0 = this.x4g_1;
              var tmp_2;
              if (isInterface(this_0, Collection)) {
                tmp_2 = this_0.h();
              } else {
                tmp_2 = false;
              }
              if (tmp_2) {
                tmp$ret$2 = false;
                break l$ret$3;
              }
              var tmp0_iterator_0 = this_0.p();
              while (tmp0_iterator_0.q()) {
                var element_0 = tmp0_iterator_0.r();
                if (element_0.cb(this.a4h_1)) {
                  tmp$ret$2 = true;
                  break l$ret$3;
                }
              }
              tmp$ret$2 = false;
            }
             while (false);
            tmp_0 = tmp$ret$2;
          }

          if (tmp_0) {
            get_LOGGER().l2k('Body type ' + toString(getKClassFromExpression(this.a4h_1)) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.z4g_1.f3a_1.toString() + '.'));
            return null;
          }

          var tmp_3 = this;
          var tmp0_elvis_lhs = contentType_0(this.z4g_1);
          var tmp_4;
          if (tmp0_elvis_lhs == null) {
            this.y4g_1;
            get_LOGGER().l2k("Request doesn't have Content-Type header. Skipping ContentNegotiation for " + this.z4g_1.f3a_1.toString() + '.');
            return null;
          } else {
            tmp_4 = tmp0_elvis_lhs;
          }

          tmp_3.b4h_1 = tmp_4;
          var tmp_5 = this.a4h_1;
          if (tmp_5 instanceof Unit) {
            get_LOGGER().l2k('Sending empty body for ' + this.z4g_1.f3a_1.toString());
            this.z4g_1.h3a_1.w2g(HttpHeaders_getInstance().e2n_1);
            return EmptyContent_getInstance();
          }

          var tmp_6 = this;
          var this_1 = this.w4g_1;
          var destination = ArrayList_init_$Create$();
          var tmp0_iterator_1 = this_1.p();
          while (tmp0_iterator_1.q()) {
            var element_1 = tmp0_iterator_1.r();
            if (element_1.i4g_1.k4g(this.b4h_1)) {
              destination.k(element_1);
            }
          }

          var tmp_7;
          if (!destination.h()) {
            tmp_7 = destination;
          } else {
            tmp_7 = null;
          }

          var tmp1_elvis_lhs = tmp_7;
          var tmp_8;
          if (tmp1_elvis_lhs == null) {
            this.y4g_1;
            get_LOGGER().l2k('None of the registered converters match request Content-Type=' + this.b4h_1.toString() + '. ' + ('Skipping ContentNegotiation for ' + this.z4g_1.f3a_1.toString() + '.'));
            return null;
          } else {
            tmp_8 = tmp1_elvis_lhs;
          }

          tmp_6.c4h_1 = tmp_8;
          if (this.z4g_1.z41() == null) {
            get_LOGGER().l2k('Request has unknown body type. Skipping ContentNegotiation for ' + this.z4g_1.f3a_1.toString() + '.');
            return null;
          }

          this.z4g_1.h3a_1.w2g(HttpHeaders_getInstance().e2n_1);
          this.f9_1 = 1;
          continue $sm;
        case 1:
          var tmp_9 = this;
          tmp_9.e4h_1 = this.c4h_1;
          this.f4h_1 = this.e4h_1.p();
          this.f9_1 = 2;
          continue $sm;
        case 2:
          if (!this.f4h_1.q()) {
            this.f9_1 = 5;
            continue $sm;
          }

          this.g4h_1 = this.f4h_1.r();
          var tmp_10 = this;
          tmp_10.h4h_1 = this.g4h_1;
          this.f9_1 = 3;
          var tmp0_elvis_lhs_0 = charset(this.b4h_1);
          var tmp_11 = tmp0_elvis_lhs_0 == null ? Charsets_getInstance().o1r_1 : tmp0_elvis_lhs_0;
          var tmp_12 = ensureNotNull(this.z4g_1.z41());
          var this_2 = this.a4h_1;
          var tmp_13;
          if (!equals(this_2, NullBody_instance)) {
            tmp_13 = this_2;
          } else {
            tmp_13 = null;
          }

          suspendResult = this.h4h_1.g4g_1.h4j(this.b4h_1, tmp_11, tmp_12, tmp_13, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 3:
          var result = suspendResult;
          if (!(result == null)) {
            get_LOGGER().l2k('Converted request body using ' + toString(this.h4h_1.g4g_1) + ' for ' + this.z4g_1.f3a_1.toString());
          }

          var result_0 = result;
          if (!(result_0 == null)) {
            this.d4h_1 = result_0;
            this.f9_1 = 6;
            continue $sm;
          } else {
            this.f9_1 = 4;
            continue $sm;
          }

        case 4:
          this.f9_1 = 2;
          continue $sm;
        case 5:
          this.d4h_1 = null;
          if (false) {
            this.f9_1 = 1;
            continue $sm;
          }

          this.f9_1 = 6;
          continue $sm;
        case 6:
          var tmp2_elvis_lhs = this.d4h_1;
          var tmp_14;
          if (tmp2_elvis_lhs == null) {
            var tmp_15 = "Can't convert " + toString(this.a4h_1) + ' with contentType ' + this.b4h_1.toString() + ' using converters ';
            throw new ContentConverterException(tmp_15 + joinToString(this.c4h_1, VOID, VOID, VOID, VOID, VOID, ContentNegotiation$lambda$convertRequest$lambda));
          } else {
            tmp_14 = tmp2_elvis_lhs;
          }

          var serializedContent = tmp_14;
          return serializedContent;
        case 7:
          throw this.i9_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.g9_1 === 7) {
        throw e;
      } else {
        this.f9_1 = this.g9_1;
        this.i9_1 = e;
      }
    }
   while (true);
};
function $invoke$convertResponseCOROUTINE$1(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.q4h_1 = ignoredTypes;
  this.r4h_1 = registrations;
  this.s4h_1 = $this_createClientPlugin;
  this.t4h_1 = requestUrl;
  this.u4h_1 = info;
  this.v4h_1 = body;
  this.w4h_1 = responseContentType;
  this.x4h_1 = charset;
}
protoOf($invoke$convertResponseCOROUTINE$1).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 2;
          var tmp_0 = this.v4h_1;
          if (!isInterface(tmp_0, ByteReadChannel)) {
            get_LOGGER().l2k('Response body is already transformed. Skipping ContentNegotiation for ' + this.t4h_1.toString() + '.');
            return null;
          }

          if (this.q4h_1.w(this.u4h_1.h2k_1)) {
            get_LOGGER().l2k('Response body type ' + toString(this.u4h_1.h2k_1) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.t4h_1.toString() + '.'));
            return null;
          }

          var tmp_1 = this;
          var this_0 = this.r4h_1;
          var destination = ArrayList_init_$Create$();
          var tmp0_iterator = this_0.p();
          while (tmp0_iterator.q()) {
            var element = tmp0_iterator.r();
            if (element.i4g_1.k4g(this.w4h_1)) {
              destination.k(element);
            }
          }

          var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
          var tmp0_iterator_0 = destination.p();
          while (tmp0_iterator_0.q()) {
            var item = tmp0_iterator_0.r();
            destination_0.k(item.g4g_1);
          }

          var tmp_2;
          if (!destination_0.h()) {
            tmp_2 = destination_0;
          } else {
            tmp_2 = null;
          }

          var tmp0_elvis_lhs = tmp_2;
          var tmp_3;
          if (tmp0_elvis_lhs == null) {
            this.s4h_1;
            get_LOGGER().l2k('None of the registered converters match response with Content-Type=' + this.w4h_1.toString() + '. ' + ('Skipping ContentNegotiation for ' + this.t4h_1.toString() + '.'));
            return null;
          } else {
            tmp_3 = tmp0_elvis_lhs;
          }

          tmp_1.y4h_1 = tmp_3;
          this.f9_1 = 1;
          suspendResult = deserialize(this.y4h_1, this.v4h_1, this.u4h_1, this.x4h_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          if (!isInterface(result, ByteReadChannel)) {
            get_LOGGER().l2k('Response body was converted to ' + toString(getKClassFromExpression(result)) + ' for ' + this.t4h_1.toString() + '.');
          }

          return result;
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
var properties_initialized_ContentNegotiation_kt_1ayduy;
function _init_properties_ContentNegotiation_kt__o183go() {
  if (!properties_initialized_ContentNegotiation_kt_1ayduy) {
    properties_initialized_ContentNegotiation_kt_1ayduy = true;
    LOGGER = KtorSimpleLogger('io.ktor.client.plugins.contentnegotiation.ContentNegotiation');
    DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().lc(), PrimitiveClasses_getInstance().hc(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
    var tmp = ContentNegotiationConfig$_init_$ref_1ne3ob();
    ContentNegotiation = createClientPlugin('ContentNegotiation', tmp, ContentNegotiation$lambda);
  }
}
function JsonContentTypeMatcher() {
}
protoOf(JsonContentTypeMatcher).k4g = function (contentType) {
  if (contentType.g2m(Application_getInstance().y2k_1)) {
    return true;
  }
  var value = contentType.f2m().toString();
  return startsWith(value, 'application/', true) && endsWith(value, '+json', true);
};
var JsonContentTypeMatcher_instance;
function JsonContentTypeMatcher_getInstance() {
  return JsonContentTypeMatcher_instance;
}
function get_DefaultIgnoredTypes() {
  _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1();
  return DefaultIgnoredTypes;
}
var DefaultIgnoredTypes;
var properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt;
function _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1() {
  if (!properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt) {
    properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt = true;
    // Inline function 'kotlin.collections.mutableSetOf' call
    DefaultIgnoredTypes = LinkedHashSet_init_$Create$();
  }
}
//region block: post-declaration
protoOf(ContentNegotiationConfig).c36 = register$default;
//endregion
//region block: init
JsonContentTypeMatcher_instance = new JsonContentTypeMatcher();
//endregion
//region block: exports
export {
  get_ContentNegotiation as get_ContentNegotiationcp59ye9rorjc,
};
//endregion

//# sourceMappingURL=ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation.mjs.map
