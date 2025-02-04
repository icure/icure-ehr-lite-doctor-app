import {
  StringSerializer_getInstance100dxy5jlaaom as StringSerializer_getInstance,
  ArrayListSerializer7k5wnrulb3y6 as ArrayListSerializer,
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  UnknownFieldException_init_$Create$3p6j2tgfvvykj as UnknownFieldException_init_$Create$,
  IntSerializer_getInstance3jjhuzya8j8kz as IntSerializer_getInstance,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID7hggqo3abtya as VOID,
  Unit_instanceat14thlj150z as Unit_instance,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  ArrayList_init_$Create$3m1kyiqequwm5 as ArrayList_init_$Create$,
  encodeToByteArray1onwao0uakjfh as encodeToByteArray,
  primitiveArrayConcatwxgknw08pmlb as primitiveArrayConcat,
  toLongw1zpgk99d84b as toLong,
  until1jbpn0z3f8lbg as until,
  sliceArray2hu2ljigibgmi as sliceArray,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  Long2qws0ah9gnpki as Long,
  checkIndexOverflow3frtmheghr0th as checkIndexOverflow,
  toList3jhuyej2anx2q as toList,
  withIndex37cl61h9v5txo as withIndex,
  Collection1k04j3hzsbod0 as Collection,
  isInterface3d6p8outrmvmk as isInterface,
  toLongkk4waq8msp1k as toLong_0,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  to2cs3ny02qtbcb as to,
  copyToArray2j022khrow2yi as copyToArray,
  json3n35pf5np6si4 as json,
  toList383f556t1dixk as toList_0,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
} from './kotlin-kotlin-stdlib.mjs';
import {
  BigInteger_init_$Create$37pjqls8za4oh as BigInteger_init_$Create$,
  Companion_getInstancesa2rg9la17ea as Companion_getInstance,
  Sign_POSITIVE_getInstance3j3193wbkzpdq as Sign_POSITIVE_getInstance,
} from './KotlinBigInteger-bignum.mjs';
import {
  get_defaultCryptoService3se6h24t6bp5v as get_defaultCryptoService,
  adaptExternalCryptoService1ul8uw60bqm2i as adaptExternalCryptoService,
} from './kryptom-lib.mjs';
import {
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
  GlobalScope_instance3m5vaygder2s9 as GlobalScope_instance,
  launch1c91vkjzdi9sd as launch,
} from './kotlinx-coroutines-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForCompanion(Companion);
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Challenge, 'Challenge', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForCompanion(Companion_0);
initMetadataForCoroutine($scoreCOROUTINE$0, CoroutineImpl);
initMetadataForCoroutine($calculateCOROUTINE$1, CoroutineImpl);
initMetadataForCoroutine($resolveCOROUTINE$2, CoroutineImpl);
initMetadataForCoroutine($validateCOROUTINE$3, CoroutineImpl);
initMetadataForClass(ChallengePieceResolver, 'ChallengePieceResolver', VOID, VOID, VOID, [1, 2]);
initMetadataForCoroutine($resolveChallengeCOROUTINE$4, CoroutineImpl);
initMetadataForCoroutine($validateSolutionCOROUTINE$5, CoroutineImpl);
initMetadataForCompanion(Companion_1);
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ProofOfWork, 'ProofOfWork', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_2);
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Solution, 'Solution', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForLambda(resolveChallengeJs$lambda$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(validateSolutionJs$lambda$slambda, CoroutineImpl, VOID, [1]);
//endregion
function Companion() {
  Companion_instance = this;
  var tmp = this;
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  tmp.e6u_1 = [null, new ArrayListSerializer(StringSerializer_getInstance()), null];
}
var Companion_instance;
function Companion_getInstance_0() {
  if (Companion_instance == null)
    new Companion();
  return Companion_instance;
}
function $serializer() {
  $serializer_instance = this;
  var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.icure.kerberus.Challenge', this, 3);
  tmp0_serialDesc.p23('id', false);
  tmp0_serialDesc.p23('salts', false);
  tmp0_serialDesc.p23('difficultyFactor', false);
  this.f6u_1 = tmp0_serialDesc;
}
protoOf($serializer).g6u = function (encoder, value) {
  var tmp0_desc = this.f6u_1;
  var tmp1_output = encoder.d1w(tmp0_desc);
  var tmp2_cached = Companion_getInstance_0().e6u_1;
  tmp1_output.s1x(tmp0_desc, 0, value.h6u_1);
  tmp1_output.u1x(tmp0_desc, 1, tmp2_cached[1], value.i6u_1);
  tmp1_output.n1x(tmp0_desc, 2, value.j6u_1);
  tmp1_output.e1w(tmp0_desc);
};
protoOf($serializer).s1s = function (encoder, value) {
  return this.g6u(encoder, value instanceof Challenge ? value : THROW_CCE());
};
protoOf($serializer).t1s = function (decoder) {
  var tmp0_desc = this.f6u_1;
  var tmp1_flag = true;
  var tmp2_index = 0;
  var tmp3_bitMask0 = 0;
  var tmp4_local0 = null;
  var tmp5_local1 = null;
  var tmp6_local2 = 0;
  var tmp7_input = decoder.d1w(tmp0_desc);
  var tmp8_cached = Companion_getInstance_0().e6u_1;
  if (tmp7_input.t1w()) {
    tmp4_local0 = tmp7_input.n1w(tmp0_desc, 0);
    tmp3_bitMask0 = tmp3_bitMask0 | 1;
    tmp5_local1 = tmp7_input.p1w(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
    tmp3_bitMask0 = tmp3_bitMask0 | 2;
    tmp6_local2 = tmp7_input.i1w(tmp0_desc, 2);
    tmp3_bitMask0 = tmp3_bitMask0 | 4;
  } else
    while (tmp1_flag) {
      tmp2_index = tmp7_input.u1w(tmp0_desc);
      switch (tmp2_index) {
        case -1:
          tmp1_flag = false;
          break;
        case 0:
          tmp4_local0 = tmp7_input.n1w(tmp0_desc, 0);
          tmp3_bitMask0 = tmp3_bitMask0 | 1;
          break;
        case 1:
          tmp5_local1 = tmp7_input.p1w(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
          tmp3_bitMask0 = tmp3_bitMask0 | 2;
          break;
        case 2:
          tmp6_local2 = tmp7_input.i1w(tmp0_desc, 2);
          tmp3_bitMask0 = tmp3_bitMask0 | 4;
          break;
        default:
          throw UnknownFieldException_init_$Create$(tmp2_index);
      }
    }
  tmp7_input.e1w(tmp0_desc);
  return Challenge_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
};
protoOf($serializer).r1s = function () {
  return this.f6u_1;
};
protoOf($serializer).i24 = function () {
  var tmp0_cached = Companion_getInstance_0().e6u_1;
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return [StringSerializer_getInstance(), tmp0_cached[1], IntSerializer_getInstance()];
};
var $serializer_instance;
function $serializer_getInstance() {
  if ($serializer_instance == null)
    new $serializer();
  return $serializer_instance;
}
function Challenge_init_$Init$(seen0, id, salts, difficultyFactor, serializationConstructorMarker, $this) {
  if (!(7 === (7 & seen0))) {
    throwMissingFieldException(seen0, 7, $serializer_getInstance().f6u_1);
  }
  $this.h6u_1 = id;
  $this.i6u_1 = salts;
  $this.j6u_1 = difficultyFactor;
  return $this;
}
function Challenge_init_$Create$(seen0, id, salts, difficultyFactor, serializationConstructorMarker) {
  return Challenge_init_$Init$(seen0, id, salts, difficultyFactor, serializationConstructorMarker, objectCreate(protoOf(Challenge)));
}
function Challenge(id, salts, difficultyFactor) {
  Companion_getInstance_0();
  this.h6u_1 = id;
  this.i6u_1 = salts;
  this.j6u_1 = difficultyFactor;
}
function Companion_0() {
  Companion_instance_0 = this;
  this.k6u_1 = BigInteger_init_$Create$(2).d6q(128).s6p(Companion_getInstance().x6k_1);
  this.l6u_1 = this.k6u_1.h6q(false);
}
protoOf(Companion_0).m6u = function (config, serializedInput, cryptoService) {
  // Inline function 'kotlin.collections.map' call
  var this_0 = config.i6u_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
  var tmp0_iterator = this_0.p();
  while (tmp0_iterator.q()) {
    var item = tmp0_iterator.r();
    // Inline function 'com.icure.kerberus.Companion.forChallenge.<anonymous>' call
    var tmp$ret$0 = new ChallengePieceResolver(item, serializedInput, config.j6u_1, cryptoService.z5k());
    destination.k(tmp$ret$0);
  }
  return destination;
};
var Companion_instance_0;
function Companion_getInstance_1() {
  if (Companion_instance_0 == null)
    new Companion_0();
  return Companion_instance_0;
}
function _get_prefix__wiwq7t($this) {
  // Inline function 'kotlin.collections.plus' call
  var this_0 = encodeToByteArray($this.n6u_1);
  var elements = encodeToByteArray($this.o6u_1);
  return primitiveArrayConcat([this_0, elements]);
}
function _get_difficulty__gn5kuo($this) {
  var maxValue = Companion_getInstance_1().k6u_1;
  return maxValue.s6p(maxValue.y6p(Companion_getInstance().l6m(toLong($this.p6u_1))));
}
function firstBytesAsBigInteger($this, bytes) {
  var first16Bytes = sliceArray(bytes, until(0, 16));
  return Companion_getInstance().s6o(first16Bytes, Sign_POSITIVE_getInstance());
}
function sha256($this, input, $completion) {
  return $this.q6u_1.y5s(input, $completion);
}
function score($this, prefixHash, nonce, $completion) {
  var tmp = new $scoreCOROUTINE$0($this, prefixHash, nonce, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
}
function calculate($this, nonce, $completion) {
  var tmp = new $calculateCOROUTINE$1($this, nonce, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
}
function $scoreCOROUTINE$0(_this__u8e3s4, prefixHash, nonce, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.z6u_1 = _this__u8e3s4;
  this.a6v_1 = prefixHash;
  this.b6v_1 = nonce;
}
protoOf($scoreCOROUTINE$0).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 2;
          this.c6v_1 = encodeToByteArray(this.b6v_1.toString());
          var tmp_0 = this;
          var this_0 = this.a6v_1;
          var elements = this.c6v_1;
          tmp_0.d6v_1 = primitiveArrayConcat([this_0, elements]);
          this.f9_1 = 1;
          suspendResult = sha256(this.z6u_1, this.d6v_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var hash = suspendResult;
          return firstBytesAsBigInteger(this.z6u_1, hash);
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
function $calculateCOROUTINE$1(_this__u8e3s4, nonce, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.m6v_1 = _this__u8e3s4;
  this.n6v_1 = nonce;
}
protoOf($calculateCOROUTINE$1).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 3;
          this.f9_1 = 1;
          suspendResult = sha256(this.m6v_1, _get_prefix__wiwq7t(this.m6v_1), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.o6v_1 = suspendResult;
          this.f9_1 = 2;
          suspendResult = score(this.m6v_1, this.o6v_1, this.n6v_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          return suspendResult;
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
function $resolveCOROUTINE$2(_this__u8e3s4, onProgress, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.x6v_1 = _this__u8e3s4;
  this.y6v_1 = onProgress;
}
protoOf($resolveCOROUTINE$2).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 5;
          this.f9_1 = 1;
          suspendResult = sha256(this.x6v_1, _get_prefix__wiwq7t(this.x6v_1), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.z6v_1 = suspendResult;
          this.a6w_1 = _get_difficulty__gn5kuo(this.x6v_1).h6q(false) / Companion_getInstance_1().l6u_1;
          this.b6w_1 = 1.0;
          this.c6w_1 = new Long(0, 0);
          this.d6w_1 = Companion_getInstance().w6k_1;
          this.f9_1 = 2;
          continue $sm;
        case 2:
          if (!(this.d6w_1.m6n(_get_difficulty__gn5kuo(this.x6v_1)) < 0)) {
            this.f9_1 = 4;
            continue $sm;
          }

          var tmp_0 = this;
          tmp_0.c6w_1 = this.c6w_1.b3(toLong(1));
          this.f9_1 = 3;
          suspendResult = score(this.x6v_1, this.z6v_1, this.c6w_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 3:
          this.d6w_1 = suspendResult;
          this.b6w_1 = this.b6w_1 * this.a6w_1;
          this.y6v_1(1 - this.b6w_1);
          this.f9_1 = 2;
          continue $sm;
        case 4:
          return new ProofOfWork(this.c6w_1.toString());
        case 5:
          throw this.i9_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.g9_1 === 5) {
        throw e;
      } else {
        this.f9_1 = this.g9_1;
        this.i9_1 = e;
      }
    }
   while (true);
};
function $validateCOROUTINE$3(_this__u8e3s4, nonce, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.m6w_1 = _this__u8e3s4;
  this.n6w_1 = nonce;
}
protoOf($validateCOROUTINE$3).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 2;
          this.f9_1 = 1;
          suspendResult = calculate(this.m6w_1, this.n6w_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var calculatedResult = suspendResult;
          return calculatedResult.m6n(_get_difficulty__gn5kuo(this.m6w_1)) >= 0;
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
function ChallengePieceResolver(salt, serializedInput, difficultyFactor, digestService) {
  Companion_getInstance_1();
  this.n6u_1 = salt;
  this.o6u_1 = serializedInput;
  this.p6u_1 = difficultyFactor;
  this.q6u_1 = digestService;
}
protoOf(ChallengePieceResolver).o6w = function (onProgress, $completion) {
  var tmp = new $resolveCOROUTINE$2(this, onProgress, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
protoOf(ChallengePieceResolver).p6w = function (nonce, $completion) {
  var tmp = new $validateCOROUTINE$3(this, nonce, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
function resolveChallenge(config, serializedInput, cryptoService, onProgress, $completion) {
  cryptoService = cryptoService === VOID ? null : cryptoService;
  var tmp;
  if (onProgress === VOID) {
    tmp = resolveChallenge$lambda;
  } else {
    tmp = onProgress;
  }
  onProgress = tmp;
  var tmp_0 = new $resolveChallengeCOROUTINE$4(config, serializedInput, cryptoService, onProgress, $completion);
  tmp_0.h9_1 = Unit_instance;
  tmp_0.i9_1 = null;
  return tmp_0.n9();
}
function validateSolution(config, result, serializedInput, cryptoService, $completion) {
  cryptoService = cryptoService === VOID ? null : cryptoService;
  var tmp = new $validateSolutionCOROUTINE$5(config, result, serializedInput, cryptoService, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
}
function resolveChallenge$lambda(it) {
  return Unit_instance;
}
function resolveChallenge$lambda_0($index, $challenges, $lastSentProgress, $onProgress) {
  return function (challengeProgress) {
    var progress = ($index + challengeProgress) / $challenges.s();
    var tmp;
    if (progress - $lastSentProgress._v > 0.01) {
      $lastSentProgress._v = progress;
      tmp = $onProgress(progress);
    }
    return Unit_instance;
  };
}
function $resolveChallengeCOROUTINE$4(config, serializedInput, cryptoService, onProgress, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.y6w_1 = config;
  this.z6w_1 = serializedInput;
  this.a6x_1 = cryptoService;
  this.b6x_1 = onProgress;
}
protoOf($resolveChallengeCOROUTINE$4).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 4;
          var tmp_0 = this;
          var tmp_1 = Companion_getInstance_1();
          var tmp0_elvis_lhs = this.a6x_1;
          tmp_0.c6x_1 = tmp_1.m6u(this.y6w_1, this.z6w_1, tmp0_elvis_lhs == null ? get_defaultCryptoService() : tmp0_elvis_lhs);
          this.d6x_1 = {_v: 0.0};
          this.e6x_1 = this.y6w_1.h6u_1;
          var tmp_2 = this;
          tmp_2.f6x_1 = this.c6x_1;
          var tmp_3 = this;
          tmp_3.g6x_1 = this.f6x_1;
          var tmp_4 = this;
          tmp_4.h6x_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this.f6x_1, 10));
          this.i6x_1 = 0;
          this.j6x_1 = this.g6x_1.p();
          this.f9_1 = 1;
          continue $sm;
        case 1:
          if (!this.j6x_1.q()) {
            this.f9_1 = 3;
            continue $sm;
          }

          this.k6x_1 = this.j6x_1.r();
          var tmp_5 = this;
          var tmp1 = this.i6x_1;
          this.i6x_1 = tmp1 + 1 | 0;
          tmp_5.l6x_1 = checkIndexOverflow(tmp1);
          var tmp_6 = this;
          tmp_6.m6x_1 = this.k6x_1;
          this.f9_1 = 2;
          suspendResult = this.m6x_1.o6w(resolveChallenge$lambda_0(this.l6x_1, this.c6x_1, this.d6x_1, this.b6x_1), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          var ARGUMENT = suspendResult;
          this.h6x_1.k(ARGUMENT);
          this.f9_1 = 1;
          continue $sm;
        case 3:
          var this_0 = this.h6x_1;
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
          var tmp0_iterator = this_0.p();
          while (tmp0_iterator.q()) {
            var item = tmp0_iterator.r();
            destination.k(item.h6y_1);
          }

          var ARGUMENT_0 = destination;
          var ARGUMENT_1 = toList(ARGUMENT_0);
          var this_1 = new Solution(this.e6x_1, ARGUMENT_1);
          this.b6x_1(1.0);
          return this_1;
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
function $validateSolutionCOROUTINE$5(config, result, serializedInput, cryptoService, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.v6x_1 = config;
  this.w6x_1 = result;
  this.x6x_1 = serializedInput;
  this.y6x_1 = cryptoService;
}
protoOf($validateSolutionCOROUTINE$5).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 7;
          var tmp_0 = this;
          var tmp_1 = Companion_getInstance_1();
          var tmp0_elvis_lhs = this.y6x_1;
          tmp_0.z6x_1 = tmp_1.m6u(this.v6x_1, this.x6x_1, tmp0_elvis_lhs == null ? get_defaultCryptoService() : tmp0_elvis_lhs);
          this.f9_1 = 1;
          continue $sm;
        case 1:
          var tmp_2 = this;
          tmp_2.b6y_1 = withIndex(this.z6x_1);
          var tmp_3;
          var tmp_4 = this.b6y_1;
          if (isInterface(tmp_4, Collection)) {
            tmp_3 = this.b6y_1.h();
          } else {
            tmp_3 = false;
          }

          if (tmp_3) {
            this.a6y_1 = true;
            this.f9_1 = 8;
            continue $sm;
          } else {
            this.f9_1 = 2;
            continue $sm;
          }

        case 2:
          this.c6y_1 = this.b6y_1.p();
          this.f9_1 = 3;
          continue $sm;
        case 3:
          if (!this.c6y_1.q()) {
            this.f9_1 = 6;
            continue $sm;
          }

          this.d6y_1 = this.c6y_1.r();
          var tmp_5 = this;
          tmp_5.e6y_1 = this.d6y_1;
          this.f6y_1 = this.e6y_1.xa();
          this.g6y_1 = this.e6y_1.ya();
          this.f9_1 = 4;
          suspendResult = this.g6y_1.p6w(toLong_0(this.w6x_1.j6y_1.u(this.f6y_1)), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 4:
          var ARGUMENT = suspendResult;
          if (!ARGUMENT) {
            this.a6y_1 = false;
            this.f9_1 = 8;
            continue $sm;
          } else {
            this.f9_1 = 5;
            continue $sm;
          }

        case 5:
          this.f9_1 = 3;
          continue $sm;
        case 6:
          this.a6y_1 = true;
          if (false) {
            this.f9_1 = 1;
            continue $sm;
          }

          this.f9_1 = 8;
          continue $sm;
        case 7:
          throw this.i9_1;
        case 8:
          return this.a6y_1;
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
function Companion_1() {
}
var Companion_instance_1;
function Companion_getInstance_2() {
  return Companion_instance_1;
}
function $serializer_0() {
  $serializer_instance_0 = this;
  var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.icure.kerberus.ProofOfWork', this, 1);
  tmp0_serialDesc.p23('nonce', false);
  this.k6y_1 = tmp0_serialDesc;
}
protoOf($serializer_0).l6y = function (encoder, value) {
  var tmp0_desc = this.k6y_1;
  var tmp1_output = encoder.d1w(tmp0_desc);
  tmp1_output.s1x(tmp0_desc, 0, value.h6y_1);
  tmp1_output.e1w(tmp0_desc);
};
protoOf($serializer_0).s1s = function (encoder, value) {
  return this.l6y(encoder, value instanceof ProofOfWork ? value : THROW_CCE());
};
protoOf($serializer_0).t1s = function (decoder) {
  var tmp0_desc = this.k6y_1;
  var tmp1_flag = true;
  var tmp2_index = 0;
  var tmp3_bitMask0 = 0;
  var tmp4_local0 = null;
  var tmp5_input = decoder.d1w(tmp0_desc);
  if (tmp5_input.t1w()) {
    tmp4_local0 = tmp5_input.n1w(tmp0_desc, 0);
    tmp3_bitMask0 = tmp3_bitMask0 | 1;
  } else
    while (tmp1_flag) {
      tmp2_index = tmp5_input.u1w(tmp0_desc);
      switch (tmp2_index) {
        case -1:
          tmp1_flag = false;
          break;
        case 0:
          tmp4_local0 = tmp5_input.n1w(tmp0_desc, 0);
          tmp3_bitMask0 = tmp3_bitMask0 | 1;
          break;
        default:
          throw UnknownFieldException_init_$Create$(tmp2_index);
      }
    }
  tmp5_input.e1w(tmp0_desc);
  return ProofOfWork_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
};
protoOf($serializer_0).r1s = function () {
  return this.k6y_1;
};
protoOf($serializer_0).i24 = function () {
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return [StringSerializer_getInstance()];
};
var $serializer_instance_0;
function $serializer_getInstance_0() {
  if ($serializer_instance_0 == null)
    new $serializer_0();
  return $serializer_instance_0;
}
function ProofOfWork_init_$Init$(seen0, nonce, serializationConstructorMarker, $this) {
  if (!(1 === (1 & seen0))) {
    throwMissingFieldException(seen0, 1, $serializer_getInstance_0().k6y_1);
  }
  $this.h6y_1 = nonce;
  return $this;
}
function ProofOfWork_init_$Create$(seen0, nonce, serializationConstructorMarker) {
  return ProofOfWork_init_$Init$(seen0, nonce, serializationConstructorMarker, objectCreate(protoOf(ProofOfWork)));
}
function ProofOfWork(nonce) {
  this.h6y_1 = nonce;
}
protoOf(ProofOfWork).toString = function () {
  return 'ProofOfWork(nonce=' + this.h6y_1 + ')';
};
protoOf(ProofOfWork).hashCode = function () {
  return getStringHashCode(this.h6y_1);
};
protoOf(ProofOfWork).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof ProofOfWork))
    return false;
  var tmp0_other_with_cast = other instanceof ProofOfWork ? other : THROW_CCE();
  if (!(this.h6y_1 === tmp0_other_with_cast.h6y_1))
    return false;
  return true;
};
function Companion_2() {
  Companion_instance_2 = this;
  var tmp = this;
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  tmp.m6y_1 = [null, new ArrayListSerializer(StringSerializer_getInstance())];
}
var Companion_instance_2;
function Companion_getInstance_3() {
  if (Companion_instance_2 == null)
    new Companion_2();
  return Companion_instance_2;
}
function $serializer_1() {
  $serializer_instance_1 = this;
  var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.icure.kerberus.Solution', this, 2);
  tmp0_serialDesc.p23('id', false);
  tmp0_serialDesc.p23('nonces', false);
  this.n6y_1 = tmp0_serialDesc;
}
protoOf($serializer_1).o6y = function (encoder, value) {
  var tmp0_desc = this.n6y_1;
  var tmp1_output = encoder.d1w(tmp0_desc);
  var tmp2_cached = Companion_getInstance_3().m6y_1;
  tmp1_output.s1x(tmp0_desc, 0, value.i6y_1);
  tmp1_output.u1x(tmp0_desc, 1, tmp2_cached[1], value.j6y_1);
  tmp1_output.e1w(tmp0_desc);
};
protoOf($serializer_1).s1s = function (encoder, value) {
  return this.o6y(encoder, value instanceof Solution ? value : THROW_CCE());
};
protoOf($serializer_1).t1s = function (decoder) {
  var tmp0_desc = this.n6y_1;
  var tmp1_flag = true;
  var tmp2_index = 0;
  var tmp3_bitMask0 = 0;
  var tmp4_local0 = null;
  var tmp5_local1 = null;
  var tmp6_input = decoder.d1w(tmp0_desc);
  var tmp7_cached = Companion_getInstance_3().m6y_1;
  if (tmp6_input.t1w()) {
    tmp4_local0 = tmp6_input.n1w(tmp0_desc, 0);
    tmp3_bitMask0 = tmp3_bitMask0 | 1;
    tmp5_local1 = tmp6_input.p1w(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
    tmp3_bitMask0 = tmp3_bitMask0 | 2;
  } else
    while (tmp1_flag) {
      tmp2_index = tmp6_input.u1w(tmp0_desc);
      switch (tmp2_index) {
        case -1:
          tmp1_flag = false;
          break;
        case 0:
          tmp4_local0 = tmp6_input.n1w(tmp0_desc, 0);
          tmp3_bitMask0 = tmp3_bitMask0 | 1;
          break;
        case 1:
          tmp5_local1 = tmp6_input.p1w(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
          tmp3_bitMask0 = tmp3_bitMask0 | 2;
          break;
        default:
          throw UnknownFieldException_init_$Create$(tmp2_index);
      }
    }
  tmp6_input.e1w(tmp0_desc);
  return Solution_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
};
protoOf($serializer_1).r1s = function () {
  return this.n6y_1;
};
protoOf($serializer_1).i24 = function () {
  var tmp0_cached = Companion_getInstance_3().m6y_1;
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return [StringSerializer_getInstance(), tmp0_cached[1]];
};
var $serializer_instance_1;
function $serializer_getInstance_1() {
  if ($serializer_instance_1 == null)
    new $serializer_1();
  return $serializer_instance_1;
}
function Solution_init_$Init$(seen0, id, nonces, serializationConstructorMarker, $this) {
  if (!(3 === (3 & seen0))) {
    throwMissingFieldException(seen0, 3, $serializer_getInstance_1().n6y_1);
  }
  $this.i6y_1 = id;
  $this.j6y_1 = nonces;
  return $this;
}
function Solution_init_$Create$(seen0, id, nonces, serializationConstructorMarker) {
  return Solution_init_$Init$(seen0, id, nonces, serializationConstructorMarker, objectCreate(protoOf(Solution)));
}
function Solution(id, nonces) {
  Companion_getInstance_3();
  this.i6y_1 = id;
  this.j6y_1 = nonces;
}
function resolveChallenge_0(config, serializedInput, cryptoService, onProgress) {
  cryptoService = cryptoService === VOID ? null : cryptoService;
  var tmp;
  if (onProgress === VOID) {
    tmp = resolveChallengeJs$lambda;
  } else {
    tmp = onProgress;
  }
  onProgress = tmp;
  return new Promise(resolveChallengeJs$lambda_0(config, serializedInput, cryptoService, onProgress));
}
function validateSolution_0(config, result, serializedInput, cryptoService) {
  cryptoService = cryptoService === VOID ? null : cryptoService;
  return new Promise(validateSolutionJs$lambda(config, result, serializedInput, cryptoService));
}
function toSolutionJs(_this__u8e3s4) {
  var tmp = to('id', _this__u8e3s4.i6y_1);
  // Inline function 'kotlin.collections.toTypedArray' call
  var this_0 = _this__u8e3s4.j6y_1;
  var tmp$ret$0 = copyToArray(this_0);
  var tmp_0 = json([tmp, to('nonces', tmp$ret$0)]);
  return !(tmp_0 == null) ? tmp_0 : THROW_CCE();
}
function toConfig(_this__u8e3s4) {
  return new Challenge(_this__u8e3s4.id, toList_0(_this__u8e3s4.salts), _this__u8e3s4.difficultyFactor);
}
function toSolution(_this__u8e3s4) {
  return new Solution(_this__u8e3s4.id, toList_0(_this__u8e3s4.nonces));
}
function resolveChallengeJs$lambda(it) {
  return Unit_instance;
}
function resolveChallengeJs$lambda$slambda($resolve, $config, $serializedInput, $cryptoService, $onProgress, resultContinuation) {
  this.x6y_1 = $resolve;
  this.y6y_1 = $config;
  this.z6y_1 = $serializedInput;
  this.a6z_1 = $cryptoService;
  this.b6z_1 = $onProgress;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(resolveChallengeJs$lambda$slambda).k1r = function ($this$launch, $completion) {
  var tmp = this.l1r($this$launch, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
protoOf(resolveChallengeJs$lambda$slambda).x9 = function (p1, $completion) {
  return this.k1r((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(resolveChallengeJs$lambda$slambda).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 2;
          this.f9_1 = 1;
          var tmp_0 = toConfig(this.y6y_1);
          var tmp0_safe_receiver = this.a6z_1;
          var tmp_1;
          if (tmp0_safe_receiver == null) {
            tmp_1 = null;
          } else {
            tmp_1 = adaptExternalCryptoService(tmp0_safe_receiver);
          }

          var tmp1_elvis_lhs = tmp_1;
          suspendResult = resolveChallenge(tmp_0, this.z6y_1, tmp1_elvis_lhs == null ? get_defaultCryptoService() : tmp1_elvis_lhs, this.b6z_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var ARGUMENT = suspendResult;
          var ARGUMENT_0 = toSolutionJs(ARGUMENT);
          this.x6y_1(ARGUMENT_0);
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
protoOf(resolveChallengeJs$lambda$slambda).l1r = function ($this$launch, completion) {
  var i = new resolveChallengeJs$lambda$slambda(this.x6y_1, this.y6y_1, this.z6y_1, this.a6z_1, this.b6z_1, completion);
  i.c6z_1 = $this$launch;
  return i;
};
function resolveChallengeJs$lambda$slambda_0($resolve, $config, $serializedInput, $cryptoService, $onProgress, resultContinuation) {
  var i = new resolveChallengeJs$lambda$slambda($resolve, $config, $serializedInput, $cryptoService, $onProgress, resultContinuation);
  var l = function ($this$launch, $completion) {
    return i.k1r($this$launch, $completion);
  };
  l.$arity = 1;
  return l;
}
function resolveChallengeJs$lambda_0($config, $serializedInput, $cryptoService, $onProgress) {
  return function (resolve, _unused_var__etf5q3) {
    var tmp = GlobalScope_instance;
    launch(tmp, VOID, VOID, resolveChallengeJs$lambda$slambda_0(resolve, $config, $serializedInput, $cryptoService, $onProgress, null));
    return Unit_instance;
  };
}
function validateSolutionJs$lambda$slambda($resolve, $config, $result, $serializedInput, $cryptoService, resultContinuation) {
  this.l6z_1 = $resolve;
  this.m6z_1 = $config;
  this.n6z_1 = $result;
  this.o6z_1 = $serializedInput;
  this.p6z_1 = $cryptoService;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(validateSolutionJs$lambda$slambda).k1r = function ($this$launch, $completion) {
  var tmp = this.l1r($this$launch, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
protoOf(validateSolutionJs$lambda$slambda).x9 = function (p1, $completion) {
  return this.k1r((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(validateSolutionJs$lambda$slambda).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 2;
          this.f9_1 = 1;
          var tmp_0 = toConfig(this.m6z_1);
          var tmp_1 = toSolution(this.n6z_1);
          var tmp0_safe_receiver = this.p6z_1;
          var tmp_2;
          if (tmp0_safe_receiver == null) {
            tmp_2 = null;
          } else {
            tmp_2 = adaptExternalCryptoService(tmp0_safe_receiver);
          }

          var tmp1_elvis_lhs = tmp_2;
          suspendResult = validateSolution(tmp_0, tmp_1, this.o6z_1, tmp1_elvis_lhs == null ? get_defaultCryptoService() : tmp1_elvis_lhs, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var ARGUMENT = suspendResult;
          this.l6z_1(ARGUMENT);
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
protoOf(validateSolutionJs$lambda$slambda).l1r = function ($this$launch, completion) {
  var i = new validateSolutionJs$lambda$slambda(this.l6z_1, this.m6z_1, this.n6z_1, this.o6z_1, this.p6z_1, completion);
  i.q6z_1 = $this$launch;
  return i;
};
function validateSolutionJs$lambda$slambda_0($resolve, $config, $result, $serializedInput, $cryptoService, resultContinuation) {
  var i = new validateSolutionJs$lambda$slambda($resolve, $config, $result, $serializedInput, $cryptoService, resultContinuation);
  var l = function ($this$launch, $completion) {
    return i.k1r($this$launch, $completion);
  };
  l.$arity = 1;
  return l;
}
function validateSolutionJs$lambda($config, $result, $serializedInput, $cryptoService) {
  return function (resolve, _unused_var__etf5q3) {
    var tmp = GlobalScope_instance;
    launch(tmp, VOID, VOID, validateSolutionJs$lambda$slambda_0(resolve, $config, $result, $serializedInput, $cryptoService, null));
    return Unit_instance;
  };
}
//region block: post-declaration
protoOf($serializer).j24 = typeParametersSerializers;
protoOf($serializer_0).j24 = typeParametersSerializers;
protoOf($serializer_1).j24 = typeParametersSerializers;
//endregion
//region block: init
Companion_instance_1 = new Companion_1();
//endregion
//region block: exports
export {
  resolveChallenge_0 as resolveChallenge,
  validateSolution_0 as validateSolution,
};
export {
  Challenge as Challenge4lodadd2dc9x,
  Solution as Solution3a9kygahi3ko,
  resolveChallenge as resolveChallenge1j8uxz5cmknwn,
};
//endregion

//# sourceMappingURL=kerberus.mjs.map
