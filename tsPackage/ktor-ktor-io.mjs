import {
  Companion_instance144r68bk89en4 as Companion_instance,
  Unit_instanceat14thlj150z as Unit_instance,
  _Result___init__impl__xyqfz8oelep8i0cbta as _Result___init__impl__xyqfz8,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  toString30pk9tzaqopn as toString,
  hashCodeq5arwsb9dgti as hashCode,
  equals2au1ep9vhcato as equals,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  createFailure8paxfkfa5dc7 as createFailure,
  Result3t1vadv16kmzk as Result,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  toString1h6jjoch8cjt8 as toString_0,
  newThrowablezl37abp36p5f as newThrowable,
  stackTraceToString2670q6lbhdojj as stackTraceToString,
  VOID7hggqo3abtya as VOID,
  isInterface3d6p8outrmvmk as isInterface,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  toLongw1zpgk99d84b as toLong,
  numberToLong1a4cndvg6c52s as numberToLong,
  intercepted2ogpsikxxj4u0 as intercepted,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  returnIfSuspendednggonvg9333x as returnIfSuspended,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  Long2qws0ah9gnpki as Long,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  IllegalStateException_init_$Init$27pxl8fa8xc9a as IllegalStateException_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  EmptyCoroutineContext_getInstance7yleecrz3jzr as EmptyCoroutineContext_getInstance,
  Continuation1aa2oekvx7jm7 as Continuation,
  initMetadataForFunctionReferencen3g5fpj34t8u as initMetadataForFunctionReference,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  CancellationException_init_$Create$1eqo789zqov68 as CancellationException_init_$Create$,
  CancellationException3b36o9qz53rgr as CancellationException,
  StringBuilder_init_$Create$1ckbfpj83l95o as StringBuilder_init_$Create$,
  toString1pkumu07cwy4m as toString_1,
  IllegalStateException_init_$Create$1nm9y6jd3c9iy as IllegalStateException_init_$Create$,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  encodeToByteArray22651fhg4p67t as encodeToByteArray,
  _Char___init__impl__6a9atx367vrx0avsvbg as _Char___init__impl__6a9atx,
  replaceqbix900hl8kl as replace,
  IllegalArgumentException_init_$Create$sfel9vrfa7w2 as IllegalArgumentException_init_$Create$,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  charSequenceSubSequence1iwpdba8s3jc7 as charSequenceSubSequence,
  isCharSequence1ju9jr1w86plq as isCharSequence,
  trim11nh7r46at6sx as trim,
  toByte4i43936u611k as toByte,
  decodeToString1x4faah2liw2p as decodeToString,
  setOf45ia9pnfhe90 as setOf,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  Char__toInt_impl_vasixd17daqndsyg0ov as Char__toInt_impl_vasixd,
  fillArrayVali8eppxapiek4 as fillArrayVal,
} from './kotlin-kotlin-stdlib.mjs';
import {
  CancellableContinuationImpl1cx201opicavg as CancellableContinuationImpl,
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
  launch1c91vkjzdi9sd as launch,
  startCoroutineCancellable18shtfwdieib as startCoroutineCancellable,
  get_job2zvlvce9o9a29 as get_job,
  Job13y4jkazwjho0 as Job,
  cancel1xim2hrvjmwpn as cancel,
  CopyableThrowable1mvc99jcyvivf as CopyableThrowable,
} from './kotlinx-coroutines-core.mjs';
import {
  Buffergs925ekssbch as Buffer,
  IOException_init_$Create$2ud7rnqxh44u0 as IOException_init_$Create$,
  EOFException_init_$Create$1rbgrvr26c6ad as EOFException_init_$Create$,
  IOException1wyutdmfe71nu as IOException,
  IOException_init_$Create$667agappkj1h as IOException_init_$Create$_0,
  readString2nvggcfaijfhd as readString,
  readByteArray1fhzfwi2j014k as readByteArray,
  readString3v6duspiz33tv as readString_0,
  writeString33ca4btrgctw7 as writeString,
  IOException_init_$Init$ixjqjud2vd5a as IOException_init_$Init$,
  readByteArray1ri21h2rciakw as readByteArray_0,
} from './kotlinx-io-kotlinx-io-core.mjs';
import { atomic$ref$130aurmcwdfdf1 as atomic$ref$1 } from './kotlinx-atomicfu.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForCompanion(Companion);
initMetadataForObject(Empty, 'Empty');
initMetadataForClass(Closed, 'Closed');
function resume() {
  return this.s1k().q9(Companion_getInstance().p1k_1);
}
function resume_0(throwable) {
  var tmp = this.s1k();
  var tmp_0;
  if (throwable == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.Task.resume.<anonymous>' call
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(throwable));
    tmp_0 = new Result(tmp$ret$2);
  }
  var tmp1_elvis_lhs = tmp_0;
  return tmp.q9(tmp1_elvis_lhs == null ? Companion_getInstance().p1k_1 : tmp1_elvis_lhs.em_1);
}
initMetadataForInterface(Task, 'Task');
initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
initMetadataForCoroutine($awaitContentCOROUTINE$0, CoroutineImpl);
initMetadataForCoroutine($flushCOROUTINE$1, CoroutineImpl);
initMetadataForCoroutine($flushAndCloseCOROUTINE$2, CoroutineImpl);
function awaitContent$default(min, $completion, $super) {
  min = min === VOID ? 1 : min;
  return $super === VOID ? this.y1m(min, $completion) : $super.y1m.call(this, min, $completion);
}
initMetadataForInterface(ByteReadChannel_1, 'ByteReadChannel', VOID, VOID, VOID, [1]);
initMetadataForClass(ByteChannel, 'ByteChannel', ByteChannel, VOID, [ByteReadChannel_1], [1, 0]);
initMetadataForClass(ConcurrentIOException, 'ConcurrentIOException', VOID, IllegalStateException);
initMetadataForClass(ByteReadChannel$Companion$Empty$1, VOID, VOID, VOID, [ByteReadChannel_1], [1]);
initMetadataForCompanion(Companion_0);
initMetadataForCoroutine($readRemainingCOROUTINE$3, CoroutineImpl);
initMetadataForCoroutine($readPacketCOROUTINE$4, CoroutineImpl);
initMetadataForCoroutine($readAvailableCOROUTINE$8, CoroutineImpl);
initMetadataForCoroutine($toByteArrayCOROUTINE$10, CoroutineImpl);
initMetadataForCoroutine($copyToCOROUTINE$11, CoroutineImpl);
initMetadataForCoroutine($readBufferCOROUTINE$13, CoroutineImpl);
initMetadataForCoroutine($flushIfNeededCOROUTINE$14, CoroutineImpl);
initMetadataForClass(WriterJob, 'WriterJob');
initMetadataForClass(WriterScope, 'WriterScope', VOID, VOID, [CoroutineScope]);
initMetadataForClass(NO_CALLBACK$1, VOID, VOID, VOID, [Continuation]);
initMetadataForFunctionReference(ByteWriteChannel$flushAndClose$ref, VOID, VOID, [0]);
initMetadataForLambda(writer$slambda, CoroutineImpl, VOID, [1]);
initMetadataForClass(CloseToken, 'CloseToken');
initMetadataForClass(SourceByteReadChannel, 'SourceByteReadChannel', VOID, VOID, [ByteReadChannel_1], [1]);
initMetadataForClass(DefaultPool, 'DefaultPool');
initMetadataForClass(ByteArrayPool$1, VOID, VOID, DefaultPool);
initMetadataForCompanion(Companion_1);
initMetadataForClass(Charset, 'Charset');
initMetadataForObject(Charsets, 'Charsets');
initMetadataForClass(MalformedInputException, 'MalformedInputException', VOID, IOException);
initMetadataForClass(CharsetDecoder, 'CharsetDecoder');
initMetadataForClass(CharsetEncoder, 'CharsetEncoder');
initMetadataForClass(CharsetImpl, 'CharsetImpl', VOID, Charset);
initMetadataForClass(CharsetEncoderImpl, 'CharsetEncoderImpl', VOID, CharsetEncoder);
initMetadataForClass(CharsetDecoderImpl, 'CharsetDecoderImpl', VOID, CharsetDecoder);
initMetadataForClass(toKtor$1);
initMetadataForClass(TextDecoderFallback, 'TextDecoderFallback');
//endregion
function Companion() {
  Companion_instance_0 = this;
  this.o1k_1 = new Closed(null);
  var tmp = this;
  // Inline function 'kotlin.Companion.success' call
  tmp.p1k_1 = _Result___init__impl__xyqfz8(Unit_instance);
}
var Companion_instance_0;
function Companion_getInstance() {
  if (Companion_instance_0 == null)
    new Companion();
  return Companion_instance_0;
}
function Empty() {
}
protoOf(Empty).toString = function () {
  return 'Empty';
};
protoOf(Empty).hashCode = function () {
  return -231472095;
};
protoOf(Empty).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Empty))
    return false;
  other instanceof Empty || THROW_CCE();
  return true;
};
var Empty_instance;
function Empty_getInstance() {
  return Empty_instance;
}
function Closed(cause) {
  this.q1k_1 = cause;
}
protoOf(Closed).toString = function () {
  return 'Closed(cause=' + toString(this.q1k_1) + ')';
};
protoOf(Closed).hashCode = function () {
  return this.q1k_1 == null ? 0 : hashCode(this.q1k_1);
};
protoOf(Closed).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Closed))
    return false;
  var tmp0_other_with_cast = other instanceof Closed ? other : THROW_CCE();
  if (!equals(this.q1k_1, tmp0_other_with_cast.q1k_1))
    return false;
  return true;
};
function Task() {
}
function Read(continuation) {
  this.w1k_1 = continuation;
  this.x1k_1 = null;
  if (get_DEVELOPMENT_MODE()) {
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.w1k_1), 16));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.Read.<anonymous>' call
    stackTraceToString(this_0);
    tmp.x1k_1 = this_0;
  }
}
protoOf(Read).s1k = function () {
  return this.w1k_1;
};
protoOf(Read).r1k = function () {
  return this.x1k_1;
};
protoOf(Read).t1k = function () {
  return 'read';
};
function Write(continuation) {
  this.y1k_1 = continuation;
  this.z1k_1 = null;
  if (get_DEVELOPMENT_MODE()) {
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.y1k_1), 16));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.Write.<anonymous>' call
    stackTraceToString(this_0);
    tmp.z1k_1 = this_0;
  }
}
protoOf(Write).s1k = function () {
  return this.y1k_1;
};
protoOf(Write).r1k = function () {
  return this.z1k_1;
};
protoOf(Write).t1k = function () {
  return 'write';
};
function moveFlushToReadBuffer($this) {
  // Inline function 'io.ktor.utils.io.locks.synchronized' call
  $this.d1l_1;
  $this.b1l_1.s1i($this.f1l_1);
  $this.c1l_1 = 0;
  // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
  var current = $this.e1l_1.kotlinx$atomicfu$value;
  var tmp;
  if (current instanceof Write) {
    tmp = $this.e1l_1.atomicfu$compareAndSet(current, Empty_instance);
  } else {
    tmp = false;
  }
  if (tmp) {
    current.u1k();
  }
}
function closeSlot($this, cause) {
  var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().o1k_1;
  var continuation = $this.e1l_1.atomicfu$getAndSet(closeContinuation);
  if (!isInterface(continuation, Task))
    return Unit_instance;
  continuation.v1k(cause);
}
function $awaitContentCOROUTINE$0(_this__u8e3s4, min, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.q1l_1 = _this__u8e3s4;
  this.r1l_1 = min;
}
protoOf($awaitContentCOROUTINE$0).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 4;
          rethrowCloseCauseIfNeeded_1(this.q1l_1);
          if (this.q1l_1.f1l_1.s().g1(toLong(this.r1l_1)) >= 0)
            return true;
          var tmp_0 = this;
          tmp_0.s1l_1 = this.q1l_1;
          this.f9_1 = 1;
          continue $sm;
        case 1:
          if (!(numberToLong(this.q1l_1.c1l_1).b3(this.q1l_1.f1l_1.s()).g1(toLong(this.r1l_1)) < 0 && this.q1l_1.h1l_1.kotlinx$atomicfu$value == null)) {
            this.f9_1 = 3;
            continue $sm;
          }

          this.f9_1 = 2;
          var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
          cancellable.qt();
          l$ret$1: do {
            var this_0 = this.s1l_1;
            var slot = new Read(cancellable);
            var previous = this_0.e1l_1.kotlinx$atomicfu$value;
            if (!(previous instanceof Closed)) {
              if (!this_0.e1l_1.atomicfu$compareAndSet(previous, slot)) {
                slot.u1k();
                break l$ret$1;
              }
            }
            if (previous instanceof Read) {
              previous.v1k(new ConcurrentIOException(slot.t1k(), previous.r1k()));
            } else {
              if (isInterface(previous, Task)) {
                previous.u1k();
              } else {
                if (previous instanceof Closed) {
                  slot.v1k(previous.q1k_1);
                  break l$ret$1;
                } else {
                  if (!equals(previous, Empty_instance)) {
                    noWhenBranchMatchedException();
                  }
                }
              }
            }
            if (!(numberToLong(this.q1l_1.c1l_1).b3(this.q1l_1.f1l_1.s()).g1(toLong(this.r1l_1)) < 0 && this.q1l_1.h1l_1.kotlinx$atomicfu$value == null)) {
              var current = this_0.e1l_1.kotlinx$atomicfu$value;
              var tmp_1;
              if (current instanceof Read) {
                tmp_1 = this_0.e1l_1.atomicfu$compareAndSet(current, Empty_instance);
              } else {
                tmp_1 = false;
              }
              if (tmp_1) {
                current.u1k();
              }
            }
          }
           while (false);
          suspendResult = returnIfSuspended(cancellable.yt(), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          this.f9_1 = 1;
          continue $sm;
        case 3:
          if (this.q1l_1.f1l_1.s().g1(new Long(1048576, 0)) < 0) {
            moveFlushToReadBuffer(this.q1l_1);
          }

          return this.q1l_1.f1l_1.s().g1(toLong(this.r1l_1)) >= 0;
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
function $flushCOROUTINE$1(_this__u8e3s4, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.b1m_1 = _this__u8e3s4;
}
protoOf($flushCOROUTINE$1).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 4;
          rethrowCloseCauseIfNeeded_1(this.b1m_1);
          this.b1m_1.d1m();
          if (this.b1m_1.c1l_1 < 1048576)
            return Unit_instance;
          var tmp_0 = this;
          tmp_0.c1m_1 = this.b1m_1;
          this.f9_1 = 1;
          continue $sm;
        case 1:
          if (!(this.b1m_1.c1l_1 >= 1048576 && this.b1m_1.h1l_1.kotlinx$atomicfu$value == null)) {
            this.f9_1 = 3;
            continue $sm;
          }

          this.f9_1 = 2;
          var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
          cancellable.qt();
          l$ret$1: do {
            var this_0 = this.c1m_1;
            var slot = new Write(cancellable);
            var previous = this_0.e1l_1.kotlinx$atomicfu$value;
            if (!(previous instanceof Closed)) {
              if (!this_0.e1l_1.atomicfu$compareAndSet(previous, slot)) {
                slot.u1k();
                break l$ret$1;
              }
            }
            if (previous instanceof Write) {
              previous.v1k(new ConcurrentIOException(slot.t1k(), previous.r1k()));
            } else {
              if (isInterface(previous, Task)) {
                previous.u1k();
              } else {
                if (previous instanceof Closed) {
                  slot.v1k(previous.q1k_1);
                  break l$ret$1;
                } else {
                  if (!equals(previous, Empty_instance)) {
                    noWhenBranchMatchedException();
                  }
                }
              }
            }
            if (!(this.b1m_1.c1l_1 >= 1048576 && this.b1m_1.h1l_1.kotlinx$atomicfu$value == null)) {
              var current = this_0.e1l_1.kotlinx$atomicfu$value;
              var tmp_1;
              if (current instanceof Write) {
                tmp_1 = this_0.e1l_1.atomicfu$compareAndSet(current, Empty_instance);
              } else {
                tmp_1 = false;
              }
              if (tmp_1) {
                current.u1k();
              }
            }
          }
           while (false);
          suspendResult = returnIfSuspended(cancellable.yt(), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          this.f9_1 = 1;
          continue $sm;
        case 3:
          return Unit_instance;
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
function $flushAndCloseCOROUTINE$2(_this__u8e3s4, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.m1m_1 = _this__u8e3s4;
}
protoOf($flushAndCloseCOROUTINE$2).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 4;
          var tmp_0 = this;
          tmp_0.n1m_1 = this.m1m_1;
          this.g9_1 = 2;
          var tmp_1 = this;
          tmp_1.p1m_1 = Companion_instance;
          var tmp_2 = this;
          tmp_2.q1m_1 = this.n1m_1;
          this.f9_1 = 1;
          suspendResult = this.q1m_1.r1m(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.o1m_1 = _Result___init__impl__xyqfz8(Unit_instance);
          this.g9_1 = 4;
          this.f9_1 = 3;
          continue $sm;
        case 2:
          this.g9_1 = 4;
          var tmp_3 = this.i9_1;
          if (tmp_3 instanceof Error) {
            var e = this.i9_1;
            var tmp_4 = this;
            tmp_4.o1m_1 = _Result___init__impl__xyqfz8(createFailure(e));
            this.f9_1 = 3;
            continue $sm;
          } else {
            throw this.i9_1;
          }

        case 3:
          this.g9_1 = 4;
          if (!this.m1m_1.h1l_1.atomicfu$compareAndSet(null, get_CLOSED()))
            return Unit_instance;
          closeSlot(this.m1m_1, null);
          return Unit_instance;
        case 4:
          throw this.i9_1;
      }
    } catch ($p) {
      var e_0 = $p;
      if (this.g9_1 === 4) {
        throw e_0;
      } else {
        this.f9_1 = this.g9_1;
        this.i9_1 = e_0;
      }
    }
   while (true);
};
function ByteChannel(autoFlush) {
  autoFlush = autoFlush === VOID ? false : autoFlush;
  this.a1l_1 = autoFlush;
  this.b1l_1 = new Buffer();
  this.c1l_1 = 0;
  this.d1l_1 = new Object();
  this.e1l_1 = atomic$ref$1(Empty_instance);
  this.f1l_1 = new Buffer();
  this.g1l_1 = new Buffer();
  this.h1l_1 = atomic$ref$1(null);
}
protoOf(ByteChannel).s1m = function () {
  var tmp0_safe_receiver = this.t1m();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    throw tmp0_safe_receiver;
  }
  if (this.f1l_1.p1h()) {
    moveFlushToReadBuffer(this);
  }
  return this.f1l_1;
};
protoOf(ByteChannel).u1m = function () {
  var tmp0_safe_receiver = this.t1m();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    throw tmp0_safe_receiver;
  }
  if (this.v1m()) {
    throw IOException_init_$Create$('Channel is closed for write');
  }
  return this.g1l_1;
};
protoOf(ByteChannel).t1m = function () {
  var tmp0_safe_receiver = this.h1l_1.kotlinx$atomicfu$value;
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w9();
};
protoOf(ByteChannel).v1m = function () {
  return !(this.h1l_1.kotlinx$atomicfu$value == null);
};
protoOf(ByteChannel).x1m = function () {
  return !(this.t1m() == null) || (this.v1m() && this.c1l_1 === 0 && this.f1l_1.p1h());
};
protoOf(ByteChannel).y1m = function (min, $completion) {
  var tmp = new $awaitContentCOROUTINE$0(this, min, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
protoOf(ByteChannel).r1m = function ($completion) {
  var tmp = new $flushCOROUTINE$1(this, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
protoOf(ByteChannel).d1m = function () {
  if (this.g1l_1.p1h())
    return Unit_instance;
  // Inline function 'io.ktor.utils.io.locks.synchronized' call
  this.d1l_1;
  var count = this.g1l_1.s().l1();
  this.b1l_1.g1j(this.g1l_1);
  this.c1l_1 = this.c1l_1 + count | 0;
  // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
  var current = this.e1l_1.kotlinx$atomicfu$value;
  var tmp;
  if (current instanceof Read) {
    tmp = this.e1l_1.atomicfu$compareAndSet(current, Empty_instance);
  } else {
    tmp = false;
  }
  if (tmp) {
    current.u1k();
  }
};
protoOf(ByteChannel).a1n = function ($completion) {
  var tmp = new $flushAndCloseCOROUTINE$2(this, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
protoOf(ByteChannel).b1n = function (cause) {
  if (!(this.h1l_1.kotlinx$atomicfu$value == null))
    return Unit_instance;
  var closedToken = new CloseToken(cause);
  this.h1l_1.atomicfu$compareAndSet(null, closedToken);
  var actualCause = closedToken.w9();
  closeSlot(this, actualCause);
};
protoOf(ByteChannel).toString = function () {
  return 'ByteChannel[' + hashCode(this) + ']';
};
function ConcurrentIOException(taskName, cause) {
  cause = cause === VOID ? null : cause;
  IllegalStateException_init_$Init$('Concurrent ' + taskName + ' attempts', cause, this);
  captureStack(this, ConcurrentIOException);
}
function ByteReadChannel(content, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? content.length : length;
  // Inline function 'kotlin.also' call
  var this_0 = new Buffer();
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'io.ktor.utils.io.ByteReadChannel.<anonymous>' call
  this_0.y1i(content, offset, offset + length | 0);
  var source = this_0;
  return ByteReadChannel_0(source);
}
function ByteReadChannel_0(source) {
  return new SourceByteReadChannel(source);
}
function ByteReadChannel$Companion$Empty$1() {
  this.c1n_1 = null;
  this.d1n_1 = new Buffer();
}
protoOf(ByteReadChannel$Companion$Empty$1).t1m = function () {
  return this.c1n_1;
};
protoOf(ByteReadChannel$Companion$Empty$1).x1m = function () {
  return true;
};
protoOf(ByteReadChannel$Companion$Empty$1).s1m = function () {
  return this.d1n_1;
};
protoOf(ByteReadChannel$Companion$Empty$1).y1m = function (min, $completion) {
  return false;
};
protoOf(ByteReadChannel$Companion$Empty$1).b1n = function (cause) {
};
function Companion_0() {
  Companion_instance_1 = this;
  var tmp = this;
  tmp.e1n_1 = new ByteReadChannel$Companion$Empty$1();
}
var Companion_instance_1;
function Companion_getInstance_0() {
  if (Companion_instance_1 == null)
    new Companion_0();
  return Companion_instance_1;
}
function ByteReadChannel_1() {
}
function cancel_0(_this__u8e3s4) {
  _this__u8e3s4.b1n(IOException_init_$Create$('Channel was cancelled'));
}
function readRemaining(_this__u8e3s4, $completion) {
  var tmp = new $readRemainingCOROUTINE$3(_this__u8e3s4, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
}
function get_availableForRead(_this__u8e3s4) {
  return _this__u8e3s4.s1m().o1h().s().l1();
}
function readPacket(_this__u8e3s4, packet, $completion) {
  var tmp = new $readPacketCOROUTINE$4(_this__u8e3s4, packet, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
}
function readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  var tmp = new $readAvailableCOROUTINE$8(_this__u8e3s4, buffer, offset, length, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
}
function toByteArray(_this__u8e3s4, $completion) {
  var tmp = new $toByteArrayCOROUTINE$10(_this__u8e3s4, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
}
function copyTo(_this__u8e3s4, channel, limit, $completion) {
  var tmp = new $copyToCOROUTINE$11(_this__u8e3s4, channel, limit, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
}
function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.t1m();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    throw tmp0_safe_receiver;
  }
}
function readBuffer(_this__u8e3s4, $completion) {
  var tmp = new $readBufferCOROUTINE$13(_this__u8e3s4, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
}
function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.t1m();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    throw tmp0_safe_receiver;
  }
}
function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.t1m();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    throw tmp0_safe_receiver;
  }
}
function $readRemainingCOROUTINE$3(_this__u8e3s4, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.n1n_1 = _this__u8e3s4;
}
protoOf($readRemainingCOROUTINE$3).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 4;
          this.o1n_1 = BytePacketBuilder();
          this.f9_1 = 1;
          continue $sm;
        case 1:
          if (!!this.n1n_1.x1m()) {
            this.f9_1 = 3;
            continue $sm;
          }

          this.o1n_1.g1j(this.n1n_1.s1m());
          this.f9_1 = 2;
          suspendResult = this.n1n_1.z1m(VOID, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          this.f9_1 = 1;
          continue $sm;
        case 3:
          rethrowCloseCauseIfNeeded(this.n1n_1);
          return this.o1n_1.o1h();
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
function $readPacketCOROUTINE$4(_this__u8e3s4, packet, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.x1n_1 = _this__u8e3s4;
  this.y1n_1 = packet;
}
protoOf($readPacketCOROUTINE$4).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 6;
          this.z1n_1 = new Buffer();
          this.f9_1 = 1;
          continue $sm;
        case 1:
          if (!(this.z1n_1.s().g1(toLong(this.y1n_1)) < 0)) {
            this.f9_1 = 5;
            continue $sm;
          }

          if (this.x1n_1.s1m().p1h()) {
            this.f9_1 = 2;
            suspendResult = this.x1n_1.z1m(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            this.f9_1 = 3;
            continue $sm;
          }

        case 2:
          this.f9_1 = 3;
          continue $sm;
        case 3:
          if (this.x1n_1.x1m()) {
            this.f9_1 = 5;
            continue $sm;
          } else {
            this.f9_1 = 4;
            continue $sm;
          }

        case 4:
          if (get_remaining(this.x1n_1.s1m()).g1(numberToLong(this.y1n_1).c3(this.z1n_1.s())) > 0) {
            this.x1n_1.s1m().r1i(this.z1n_1, numberToLong(this.y1n_1).c3(this.z1n_1.s()));
          } else {
            this.x1n_1.s1m().s1i(this.z1n_1);
          }

          this.f9_1 = 1;
          continue $sm;
        case 5:
          if (this.z1n_1.s().g1(toLong(this.y1n_1)) < 0) {
            throw EOFException_init_$Create$('Not enough data available, required ' + this.y1n_1 + ' bytes but only ' + this.z1n_1.s().toString() + ' available');
          }

          return this.z1n_1;
        case 6:
          throw this.i9_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.g9_1 === 6) {
        throw e;
      } else {
        this.f9_1 = this.g9_1;
        this.i9_1 = e;
      }
    }
   while (true);
};
function $readAvailableCOROUTINE$8(_this__u8e3s4, buffer, offset, length, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.i1o_1 = _this__u8e3s4;
  this.j1o_1 = buffer;
  this.k1o_1 = offset;
  this.l1o_1 = length;
}
protoOf($readAvailableCOROUTINE$8).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 3;
          if (this.i1o_1.x1m())
            return -1;
          if (this.i1o_1.s1m().p1h()) {
            this.f9_1 = 1;
            suspendResult = this.i1o_1.z1m(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            this.f9_1 = 2;
            continue $sm;
          }

        case 1:
          this.f9_1 = 2;
          continue $sm;
        case 2:
          if (this.i1o_1.x1m())
            return -1;
          return readAvailable_0(this.i1o_1.s1m(), this.j1o_1, this.k1o_1, this.l1o_1);
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
function $toByteArrayCOROUTINE$10(_this__u8e3s4, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.u1o_1 = _this__u8e3s4;
}
protoOf($toByteArrayCOROUTINE$10).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 2;
          this.f9_1 = 1;
          suspendResult = readBuffer(this.u1o_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var ARGUMENT = suspendResult;
          return readBytes(ARGUMENT);
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
function $copyToCOROUTINE$11(_this__u8e3s4, channel, limit, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.d1p_1 = _this__u8e3s4;
  this.e1p_1 = channel;
  this.f1p_1 = limit;
}
protoOf($copyToCOROUTINE$11).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 12;
          this.g1p_1 = this.f1p_1;
          this.f9_1 = 1;
          continue $sm;
        case 1:
          this.g9_1 = 8;
          this.g9_1 = 7;
          this.f9_1 = 2;
          continue $sm;
        case 2:
          if (!(!this.d1p_1.x1m() && this.g1p_1.g1(new Long(0, 0)) > 0)) {
            this.f9_1 = 6;
            continue $sm;
          }

          if (this.d1p_1.s1m().p1h()) {
            this.f9_1 = 3;
            suspendResult = this.d1p_1.z1m(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            this.f9_1 = 4;
            continue $sm;
          }

        case 3:
          this.f9_1 = 4;
          continue $sm;
        case 4:
          var tmp_0 = this;
          var a = this.g1p_1;
          var b = get_remaining(this.d1p_1.s1m());
          tmp_0.i1p_1 = a.g1(b) <= 0 ? a : b;
          this.d1p_1.s1m().r1i(this.e1p_1.u1m(), this.i1p_1);
          this.g1p_1 = this.g1p_1.c3(this.i1p_1);
          this.f9_1 = 5;
          suspendResult = this.e1p_1.r1m(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 5:
          this.f9_1 = 2;
          continue $sm;
        case 6:
          this.h1p_1 = Unit_instance;
          this.g9_1 = 12;
          this.f9_1 = 10;
          continue $sm;
        case 7:
          this.g9_1 = 8;
          var tmp_1 = this.i9_1;
          if (tmp_1 instanceof Error) {
            this.j1p_1 = this.i9_1;
            var tmp_2 = this;
            this.d1p_1.b1n(this.j1p_1);
            close(this.e1p_1, this.j1p_1);
            throw this.j1p_1;
          } else {
            throw this.i9_1;
          }

        case 8:
          this.g9_1 = 12;
          this.k1p_1 = this.i9_1;
          this.f9_1 = 9;
          suspendResult = this.e1p_1.r1m(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 9:
          throw this.k1p_1;
        case 10:
          this.g9_1 = 12;
          this.f9_1 = 11;
          suspendResult = this.e1p_1.r1m(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 11:
          return this.f1p_1.c3(this.g1p_1);
        case 12:
          throw this.i9_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.g9_1 === 12) {
        throw e;
      } else {
        this.f9_1 = this.g9_1;
        this.i9_1 = e;
      }
    }
   while (true);
};
function $readBufferCOROUTINE$13(_this__u8e3s4, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.t1p_1 = _this__u8e3s4;
}
protoOf($readBufferCOROUTINE$13).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 4;
          this.u1p_1 = new Buffer();
          this.f9_1 = 1;
          continue $sm;
        case 1:
          if (!!this.t1p_1.x1m()) {
            this.f9_1 = 3;
            continue $sm;
          }

          this.u1p_1.g1j(this.t1p_1.s1m());
          this.f9_1 = 2;
          suspendResult = this.t1p_1.z1m(VOID, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          this.f9_1 = 1;
          continue $sm;
        case 3:
          var tmp0_safe_receiver = this.t1p_1.t1m();
          if (tmp0_safe_receiver == null)
            null;
          else {
            throw tmp0_safe_receiver;
          }

          return this.u1p_1;
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
function flushIfNeeded(_this__u8e3s4, $completion) {
  var tmp = new $flushIfNeededCOROUTINE$14(_this__u8e3s4, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
}
function $flushIfNeededCOROUTINE$14(_this__u8e3s4, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.d1q_1 = _this__u8e3s4;
}
protoOf($flushIfNeededCOROUTINE$14).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 3;
          rethrowCloseCauseIfNeeded_0(this.d1q_1);
          var tmp_0;
          var tmp_1 = this.d1q_1;
          var tmp0_safe_receiver = tmp_1 instanceof ByteChannel ? tmp_1 : null;
          if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1l_1) === true) {
            tmp_0 = true;
          } else {
            tmp_0 = get_size(this.d1q_1.u1m()) >= 1048576;
          }

          if (tmp_0) {
            this.f9_1 = 1;
            suspendResult = this.d1q_1.r1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            this.f9_1 = 2;
            continue $sm;
          }

        case 1:
          this.f9_1 = 2;
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
function get_NO_CALLBACK() {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return NO_CALLBACK;
}
var NO_CALLBACK;
function WriterJob(channel, job) {
  this.e1q_1 = channel;
  this.f1q_1 = job;
}
protoOf(WriterJob).av = function () {
  return this.f1q_1;
};
function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
  coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
  autoFlush = autoFlush === VOID ? false : autoFlush;
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return writer_0(_this__u8e3s4, coroutineContext, new ByteChannel(), block);
}
function WriterScope(channel, coroutineContext) {
  this.g1q_1 = channel;
  this.h1q_1 = coroutineContext;
}
protoOf(WriterScope).ap = function () {
  return this.h1q_1;
};
function writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? value.length : endIndex;
  _this__u8e3s4.u1m().y1i(value, startIndex, endIndex);
  return flushIfNeeded(_this__u8e3s4, $completion);
}
function writePacket(_this__u8e3s4, copy, $completion) {
  _this__u8e3s4.u1m().g1j(copy);
  return flushIfNeeded(_this__u8e3s4, $completion);
}
function get_isCompleted(_this__u8e3s4) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return _this__u8e3s4.av().wp();
}
function close(_this__u8e3s4, cause) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  if (cause == null) {
    fireAndForget(ByteWriteChannel$flushAndClose$ref_0(_this__u8e3s4));
  } else {
    _this__u8e3s4.b1n(cause);
  }
}
function invokeOnCompletion(_this__u8e3s4, block) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  var tmp = _this__u8e3s4.av();
  tmp.dq(invokeOnCompletion$lambda(block));
}
function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
  coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  // Inline function 'kotlin.apply' call
  var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel, null));
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'io.ktor.utils.io.writer.<anonymous>' call
  this_0.dq(writer$lambda(channel));
  var job = this_0;
  return new WriterJob(channel, job);
}
function fireAndForget(_this__u8e3s4) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
}
function NO_CALLBACK$1() {
  this.i1q_1 = EmptyCoroutineContext_getInstance();
}
protoOf(NO_CALLBACK$1).l9 = function () {
  return this.i1q_1;
};
protoOf(NO_CALLBACK$1).m9 = function (result) {
  return Unit_instance;
};
protoOf(NO_CALLBACK$1).q9 = function (result) {
  return this.m9(result);
};
function ByteWriteChannel$flushAndClose$ref($boundThis) {
  this.j1q_1 = $boundThis;
}
protoOf(ByteWriteChannel$flushAndClose$ref).k1q = function ($completion) {
  return this.j1q_1.a1n($completion);
};
protoOf(ByteWriteChannel$flushAndClose$ref).ua = function ($completion) {
  return this.k1q($completion);
};
function ByteWriteChannel$flushAndClose$ref_0($boundThis) {
  var i = new ByteWriteChannel$flushAndClose$ref($boundThis);
  var l = function ($completion) {
    return i.k1q($completion);
  };
  l.callableName = 'flushAndClose';
  l.$arity = 0;
  return l;
}
function invokeOnCompletion$lambda($block) {
  return function (it) {
    $block();
    return Unit_instance;
  };
}
function writer$slambda($block, $channel, resultContinuation) {
  this.t1q_1 = $block;
  this.u1q_1 = $channel;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(writer$slambda).k1r = function ($this$launch, $completion) {
  var tmp = this.l1r($this$launch, $completion);
  tmp.h9_1 = Unit_instance;
  tmp.i9_1 = null;
  return tmp.n9();
};
protoOf(writer$slambda).x9 = function (p1, $completion) {
  return this.k1r((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(writer$slambda).n9 = function () {
  var suspendResult = this.h9_1;
  $sm: do
    try {
      var tmp = this.f9_1;
      switch (tmp) {
        case 0:
          this.g9_1 = 14;
          this.w1q_1 = Job(get_job(this.v1q_1.ap()));
          this.f9_1 = 1;
          continue $sm;
        case 1:
          this.g9_1 = 4;
          this.g9_1 = 3;
          this.f9_1 = 2;
          suspendResult = this.t1q_1(new WriterScope(this.u1q_1, this.v1q_1.ap().qi(this.w1q_1)), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          this.w1q_1.wv();
          var tmp_0 = this;
          var tmp_1;
          if (get_job(this.v1q_1.ap()).xp()) {
            this.u1q_1.b1n(get_job(this.v1q_1.ap()).aq());
            tmp_1 = Unit_instance;
          }

          tmp_0.x1q_1 = tmp_1;
          this.g9_1 = 14;
          this.f9_1 = 9;
          continue $sm;
        case 3:
          this.g9_1 = 4;
          var tmp_2 = this.i9_1;
          if (tmp_2 instanceof Error) {
            this.y1q_1 = this.i9_1;
            var tmp_3 = this;
            cancel(this.w1q_1, 'Exception thrown while writing to channel', this.y1q_1);
            this.u1q_1.b1n(this.y1q_1);
            tmp_3.x1q_1 = Unit_instance;
            this.g9_1 = 14;
            this.f9_1 = 9;
            continue $sm;
          } else {
            throw this.i9_1;
          }

        case 4:
          this.g9_1 = 14;
          this.z1q_1 = this.i9_1;
          this.f9_1 = 5;
          suspendResult = this.w1q_1.xv(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 5:
          var tmp_4 = this;
          tmp_4.a1r_1 = this.v1q_1;
          this.g9_1 = 7;
          var tmp_5 = this;
          tmp_5.c1r_1 = Companion_instance;
          var tmp_6 = this;
          tmp_6.d1r_1 = this.a1r_1;
          this.f9_1 = 6;
          suspendResult = this.u1q_1.a1n(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 6:
          var tmp_7 = this;
          tmp_7.e1r_1 = Unit_instance;
          this.b1r_1 = _Result___init__impl__xyqfz8(this.e1r_1);
          this.g9_1 = 14;
          this.f9_1 = 8;
          continue $sm;
        case 7:
          this.g9_1 = 14;
          var tmp_8 = this.i9_1;
          if (tmp_8 instanceof Error) {
            this.f1r_1 = this.i9_1;
            var tmp_9 = this;
            var exception = this.f1r_1;
            tmp_9.b1r_1 = _Result___init__impl__xyqfz8(createFailure(exception));
            this.f9_1 = 8;
            continue $sm;
          } else {
            throw this.i9_1;
          }

        case 8:
          this.g9_1 = 14;
          throw this.z1q_1;
        case 9:
          this.g9_1 = 14;
          this.f9_1 = 10;
          suspendResult = this.w1q_1.xv(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 10:
          var tmp_10 = this;
          tmp_10.g1r_1 = this.v1q_1;
          this.g9_1 = 12;
          var tmp_11 = this;
          tmp_11.i1r_1 = Companion_instance;
          var tmp_12 = this;
          tmp_12.j1r_1 = this.g1r_1;
          this.f9_1 = 11;
          suspendResult = this.u1q_1.a1n(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 11:
          this.h1r_1 = _Result___init__impl__xyqfz8(Unit_instance);
          this.g9_1 = 14;
          this.f9_1 = 13;
          continue $sm;
        case 12:
          this.g9_1 = 14;
          var tmp_13 = this.i9_1;
          if (tmp_13 instanceof Error) {
            var e = this.i9_1;
            var tmp_14 = this;
            tmp_14.h1r_1 = _Result___init__impl__xyqfz8(createFailure(e));
            this.f9_1 = 13;
            continue $sm;
          } else {
            throw this.i9_1;
          }

        case 13:
          this.g9_1 = 14;
          return Unit_instance;
        case 14:
          throw this.i9_1;
      }
    } catch ($p) {
      var e_0 = $p;
      if (this.g9_1 === 14) {
        throw e_0;
      } else {
        this.f9_1 = this.g9_1;
        this.i9_1 = e_0;
      }
    }
   while (true);
};
protoOf(writer$slambda).l1r = function ($this$launch, completion) {
  var i = new writer$slambda(this.t1q_1, this.u1q_1, completion);
  i.v1q_1 = $this$launch;
  return i;
};
function writer$slambda_0($block, $channel, resultContinuation) {
  var i = new writer$slambda($block, $channel, resultContinuation);
  var l = function ($this$launch, $completion) {
    return i.k1r($this$launch, $completion);
  };
  l.$arity = 1;
  return l;
}
function writer$lambda($channel) {
  return function (it) {
    var tmp;
    if (!(it == null) && !$channel.v1m()) {
      $channel.b1n(it);
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
var properties_initialized_ByteWriteChannelOperations_kt_acrf6u;
function _init_properties_ByteWriteChannelOperations_kt__i7slrs() {
  if (!properties_initialized_ByteWriteChannelOperations_kt_acrf6u) {
    properties_initialized_ByteWriteChannelOperations_kt_acrf6u = true;
    NO_CALLBACK = new NO_CALLBACK$1();
  }
}
function get_CLOSED() {
  _init_properties_CloseToken_kt__9ucr41();
  return CLOSED;
}
var CLOSED;
function CloseToken(origin) {
  var tmp = this;
  var tmp_0;
  if (origin == null) {
    tmp_0 = null;
  } else {
    if (origin instanceof CancellationException) {
      var tmp_1;
      if (isInterface(origin, CopyableThrowable)) {
        tmp_1 = origin.fw();
      } else {
        var tmp0_elvis_lhs = origin.message;
        tmp_1 = CancellationException_init_$Create$(tmp0_elvis_lhs == null ? 'Channel was cancelled' : tmp0_elvis_lhs, origin);
      }
      tmp_0 = tmp_1;
    } else {
      var tmp_2;
      if (origin instanceof IOException) {
        tmp_2 = isInterface(origin, CopyableThrowable);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_0 = origin.fw();
      } else {
        var tmp1_elvis_lhs = origin.message;
        tmp_0 = IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was closed' : tmp1_elvis_lhs, origin);
      }
    }
  }
  tmp.w1m_1 = tmp_0;
}
protoOf(CloseToken).w9 = function () {
  var tmp;
  if (this.w1m_1 == null) {
    tmp = null;
  } else {
    var tmp_0 = this.w1m_1;
    if (tmp_0 instanceof IOException) {
      var tmp_1;
      var tmp_2 = this.w1m_1;
      if (isInterface(tmp_2, CopyableThrowable)) {
        tmp_1 = this.w1m_1.fw();
      } else {
        tmp_1 = IOException_init_$Create$_0(this.w1m_1.message, this.w1m_1);
      }
      tmp = tmp_1;
    } else {
      var tmp_3 = this.w1m_1;
      if (!(tmp_3 == null) ? isInterface(tmp_3, CopyableThrowable) : false) {
        var tmp0_elvis_lhs = this.w1m_1.fw();
        tmp = tmp0_elvis_lhs == null ? CancellationException_init_$Create$(this.w1m_1.message, this.w1m_1) : tmp0_elvis_lhs;
      } else {
        tmp = CancellationException_init_$Create$(this.w1m_1.message, this.w1m_1);
      }
    }
  }
  return tmp;
};
var properties_initialized_CloseToken_kt_lgg8zn;
function _init_properties_CloseToken_kt__9ucr41() {
  if (!properties_initialized_CloseToken_kt_lgg8zn) {
    properties_initialized_CloseToken_kt_lgg8zn = true;
    CLOSED = new CloseToken(null);
  }
}
function readText(_this__u8e3s4) {
  return readString(_this__u8e3s4);
}
function SourceByteReadChannel(source) {
  this.m1r_1 = source;
  this.n1r_1 = null;
}
protoOf(SourceByteReadChannel).t1m = function () {
  var tmp0_safe_receiver = this.n1r_1;
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w9();
};
protoOf(SourceByteReadChannel).x1m = function () {
  return this.m1r_1.p1h();
};
protoOf(SourceByteReadChannel).s1m = function () {
  var tmp0_safe_receiver = this.t1m();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    throw tmp0_safe_receiver;
  }
  return this.m1r_1;
};
protoOf(SourceByteReadChannel).y1m = function (min, $completion) {
  var tmp0_safe_receiver = this.t1m();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    throw tmp0_safe_receiver;
  }
  return get_remaining(this.m1r_1).g1(toLong(min)) >= 0;
};
protoOf(SourceByteReadChannel).b1n = function (cause) {
  if (!(this.n1r_1 == null))
    return Unit_instance;
  this.m1r_1.l1j();
  var tmp = this;
  var tmp1_elvis_lhs = cause == null ? null : cause.message;
  tmp.n1r_1 = new CloseToken(IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
};
function decode(_this__u8e3s4, input, max) {
  max = max === VOID ? 2147483647 : max;
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.comparisons.minOf' call
  var a = toLong(max);
  var b = input.o1h().s();
  var capacity = (a.g1(b) <= 0 ? a : b).l1();
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$(capacity);
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
  decode_0(_this__u8e3s4, input, this_0, max);
  return this_0.toString();
}
function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
  var start = fromIndex;
  if (start >= toIndex)
    return Unit_instance;
  $l$loop: while (true) {
    var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, destination);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(rc >= 0)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString_1(message));
    }
    start = start + rc | 0;
    if (start >= toIndex)
      break $l$loop;
  }
}
function encode(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  // Inline function 'io.ktor.utils.io.core.buildPacket' call
  var builder = new Buffer();
  // Inline function 'io.ktor.utils.io.charsets.encode.<anonymous>' call
  encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
  return builder;
}
function canRead(_this__u8e3s4) {
  return !_this__u8e3s4.p1h();
}
function readBytes(_this__u8e3s4, count) {
  count = count === VOID ? _this__u8e3s4.s().l1() : count;
  return readByteArray(_this__u8e3s4, count);
}
function BytePacketBuilder() {
  return new Buffer();
}
function writePacket_0(_this__u8e3s4, packet) {
  _this__u8e3s4.g1j(packet);
}
function build(_this__u8e3s4) {
  return _this__u8e3s4.o1h();
}
function get_size(_this__u8e3s4) {
  return _this__u8e3s4.o1h().s().l1();
}
function writeFully_0(_this__u8e3s4, buffer, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  _this__u8e3s4.y1i(buffer, offset, offset + length | 0);
}
var ByteReadPacketEmpty;
function get_remaining(_this__u8e3s4) {
  _init_properties_ByteReadPacket_kt__28475y();
  return _this__u8e3s4.o1h().s();
}
function discard(_this__u8e3s4, count) {
  count = count === VOID ? new Long(-1, 2147483647) : count;
  _init_properties_ByteReadPacket_kt__28475y();
  _this__u8e3s4.r1h(count);
  // Inline function 'kotlin.comparisons.minOf' call
  var b = get_remaining(_this__u8e3s4);
  var countToDiscard = count.g1(b) <= 0 ? count : b;
  _this__u8e3s4.o1h().l1i(countToDiscard);
  return countToDiscard;
}
function takeWhile(_this__u8e3s4, block) {
  _init_properties_ByteReadPacket_kt__28475y();
  while (!_this__u8e3s4.p1h() && block(_this__u8e3s4.o1h())) {
  }
}
var properties_initialized_ByteReadPacket_kt_hw4st4;
function _init_properties_ByteReadPacket_kt__28475y() {
  if (!properties_initialized_ByteReadPacket_kt_hw4st4) {
    properties_initialized_ByteReadPacket_kt_hw4st4 = true;
    ByteReadPacketEmpty = new Buffer();
  }
}
function readAvailable_0(_this__u8e3s4, buffer, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  var result = _this__u8e3s4.m1i(buffer, offset, offset + length | 0);
  return result === -1 ? 0 : result;
}
function readText_0(_this__u8e3s4, charset, max) {
  charset = charset === VOID ? Charsets_getInstance().o1r_1 : charset;
  max = max === VOID ? 2147483647 : max;
  if (charset.equals(Charsets_getInstance().o1r_1)) {
    if (max === 2147483647)
      return readString(_this__u8e3s4);
    // Inline function 'kotlin.math.min' call
    var a = _this__u8e3s4.o1h().s();
    var b = toLong(max);
    var count = a.g1(b) <= 0 ? a : b;
    return readString_0(_this__u8e3s4, count);
  }
  return decode(charset.r1r(), _this__u8e3s4, max);
}
function toByteArray_0(_this__u8e3s4, charset) {
  charset = charset === VOID ? Charsets_getInstance().o1r_1 : charset;
  if (charset.equals(Charsets_getInstance().o1r_1))
    return encodeToByteArray(_this__u8e3s4, VOID, VOID, true);
  return encodeToByteArray_0(charset.s1r(), _this__u8e3s4, 0, _this__u8e3s4.length);
}
function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
  charset = charset === VOID ? Charsets_getInstance().o1r_1 : charset;
  if (charset === Charsets_getInstance().o1r_1) {
    return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
  }
  encodeToImpl(charset.s1r(), _this__u8e3s4, text, fromIndex, toIndex);
}
function get_ByteArrayPool() {
  _init_properties_ByteArrayPool_kt__kfi3uj();
  return ByteArrayPool;
}
var ByteArrayPool;
function ByteArrayPool$1() {
  DefaultPool.call(this, 128);
}
protoOf(ByteArrayPool$1).w1r = function () {
  return new Int8Array(4096);
};
var properties_initialized_ByteArrayPool_kt_td6pfh;
function _init_properties_ByteArrayPool_kt__kfi3uj() {
  if (!properties_initialized_ByteArrayPool_kt_td6pfh) {
    properties_initialized_ByteArrayPool_kt_td6pfh = true;
    ByteArrayPool = new ByteArrayPool$1();
  }
}
function Companion_1() {
}
protoOf(Companion_1).f1s = function (name) {
  switch (name) {
    case 'UTF-8':
    case 'utf-8':
    case 'UTF8':
    case 'utf8':
      return Charsets_getInstance().o1r_1;
  }
  var tmp;
  var tmp_0;
  switch (name) {
    case 'ISO-8859-1':
    case 'iso-8859-1':
      tmp_0 = true;
      break;
    default:
      // Inline function 'kotlin.let' call

      // Inline function 'kotlin.contracts.contract' call

      // Inline function 'io.ktor.utils.io.charsets.Companion.forName.<anonymous>' call

      var it = replace(name, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
      var tmp_1;
      if (it === 'iso-8859-1') {
        tmp_1 = true;
      } else {
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = it.toLowerCase() === 'iso-8859-1';
      }

      tmp_0 = tmp_1;
      break;
  }
  if (tmp_0) {
    tmp = true;
  } else {
    tmp = name === 'latin1' || name === 'Latin1';
  }
  if (tmp) {
    return Charsets_getInstance().p1r_1;
  }
  throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
};
protoOf(Companion_1).g1s = function (charset) {
  var tmp;
  switch (charset) {
    case 'UTF-8':
    case 'utf-8':
    case 'UTF8':
    case 'utf8':
      tmp = true;
      break;
    default:
      var tmp_0;
      var tmp_1;
      switch (charset) {
        case 'ISO-8859-1':
        case 'iso-8859-1':
          tmp_1 = true;
          break;
        default:
          // Inline function 'kotlin.let' call

          // Inline function 'kotlin.contracts.contract' call

          // Inline function 'io.ktor.utils.io.charsets.Companion.isSupported.<anonymous>' call

          var it = replace(charset, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
          var tmp_2;
          if (it === 'iso-8859-1') {
            tmp_2 = true;
          } else {
            // Inline function 'kotlin.text.lowercase' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp_2 = it.toLowerCase() === 'iso-8859-1';
          }

          tmp_1 = tmp_2;
          break;
      }

      if (tmp_1) {
        tmp_0 = true;
      } else {
        tmp_0 = charset === 'latin1';
      }

      if (tmp_0) {
        tmp = true;
      } else {
        tmp = false;
      }

      break;
  }
  return tmp;
};
var Companion_instance_2;
function Companion_getInstance_1() {
  return Companion_instance_2;
}
function Charset(_name) {
  this.q1r_1 = _name;
}
protoOf(Charset).equals = function (other) {
  if (this === other)
    return true;
  if (other == null || !(this.constructor == other.constructor))
    return false;
  if (!(other instanceof Charset))
    THROW_CCE();
  return this.q1r_1 === other.q1r_1;
};
protoOf(Charset).hashCode = function () {
  return getStringHashCode(this.q1r_1);
};
protoOf(Charset).toString = function () {
  return this.q1r_1;
};
function get_name(_this__u8e3s4) {
  return _this__u8e3s4.q1r_1;
}
function Charsets() {
  Charsets_instance = this;
  this.o1r_1 = new CharsetImpl('UTF-8');
  this.p1r_1 = new CharsetImpl('ISO-8859-1');
}
var Charsets_instance;
function Charsets_getInstance() {
  if (Charsets_instance == null)
    new Charsets();
  return Charsets_instance;
}
function MalformedInputException(message) {
  IOException_init_$Init$(message, this);
  captureStack(this, MalformedInputException);
}
function CharsetDecoder(_charset) {
  this.h1s_1 = _charset;
}
function CharsetEncoder(_charset) {
  this.i1s_1 = _charset;
}
function CharsetImpl(name) {
  Charset.call(this, name);
}
protoOf(CharsetImpl).s1r = function () {
  return new CharsetEncoderImpl(this);
};
protoOf(CharsetImpl).r1r = function () {
  return new CharsetDecoderImpl(this);
};
function CharsetEncoderImpl(charset) {
  CharsetEncoder.call(this, charset);
  this.l1s_1 = charset;
}
protoOf(CharsetEncoderImpl).toString = function () {
  return 'CharsetEncoderImpl(charset=' + this.l1s_1.toString() + ')';
};
protoOf(CharsetEncoderImpl).hashCode = function () {
  return this.l1s_1.hashCode();
};
protoOf(CharsetEncoderImpl).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof CharsetEncoderImpl))
    return false;
  var tmp0_other_with_cast = other instanceof CharsetEncoderImpl ? other : THROW_CCE();
  if (!this.l1s_1.equals(tmp0_other_with_cast.l1s_1))
    return false;
  return true;
};
function CharsetDecoderImpl(charset) {
  CharsetDecoder.call(this, charset);
  this.n1s_1 = charset;
}
protoOf(CharsetDecoderImpl).toString = function () {
  return 'CharsetDecoderImpl(charset=' + this.n1s_1.toString() + ')';
};
protoOf(CharsetDecoderImpl).hashCode = function () {
  return this.n1s_1.hashCode();
};
protoOf(CharsetDecoderImpl).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof CharsetDecoderImpl))
    return false;
  var tmp0_other_with_cast = other instanceof CharsetDecoderImpl ? other : THROW_CCE();
  if (!this.n1s_1.equals(tmp0_other_with_cast.n1s_1))
    return false;
  return true;
};
function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  return encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex);
}
function decode_0(_this__u8e3s4, input, dst, max) {
  var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
  // Inline function 'kotlin.comparisons.minOf' call
  var a = input.o1h().s();
  var b = toLong(max);
  var count = a.g1(b) <= 0 ? a : b;
  var tmp = readByteArray(input, count.l1());
  var array = tmp instanceof Int8Array ? tmp : THROW_CCE();
  var tmp_0;
  try {
    tmp_0 = decoder.o1s(array);
  } catch ($p) {
    var tmp_1;
    if ($p instanceof Error) {
      var cause = $p;
      var tmp0_elvis_lhs = cause.message;
      throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
    } else {
      throw $p;
    }
  }
  var result = tmp_0;
  dst.o(result);
  return result.length;
}
function encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  var start = fromIndex;
  if (start >= toIndex)
    return new Int8Array(0);
  var dst = new Buffer();
  var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, dst);
  start = start + rc | 0;
  if (start === toIndex) {
    return readByteArray_0(dst);
  }
  encodeToImpl(_this__u8e3s4, dst, input, start, toIndex);
  return readByteArray_0(dst);
}
function get_charset(_this__u8e3s4) {
  return _this__u8e3s4.h1s_1;
}
function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(fromIndex <= toIndex)) {
    // Inline function 'kotlin.require.<anonymous>' call
    var message = 'Failed requirement.';
    throw IllegalArgumentException_init_$Create$(toString_1(message));
  }
  if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().p1r_1)) {
    return encodeISO88591(input, fromIndex, toIndex, dst);
  }
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().o1r_1)) {
    // Inline function 'io.ktor.utils.io.charsets.encodeImpl.<anonymous>' call
    var message_0 = 'Only UTF-8 encoding is supported in JS';
    throw IllegalArgumentException_init_$Create$(toString_1(message_0));
  }
  var encoder = new TextEncoder();
  // Inline function 'kotlin.text.substring' call
  var tmp$ret$2 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
  var result = encoder.encode(tmp$ret$2);
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  dst.b1j(result);
  return result.length;
}
function get_charset_0(_this__u8e3s4) {
  return _this__u8e3s4.i1s_1;
}
function forName(_this__u8e3s4, name) {
  return Companion_instance_2.f1s(name);
}
function isSupported(_this__u8e3s4, name) {
  return Companion_instance_2.g1s(name);
}
function Decoder(encoding, fatal) {
  fatal = fatal === VOID ? true : fatal;
  var tmp;
  try {
    tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var cause = $p;
      tmp_0 = new TextDecoderFallback(encoding, fatal);
    } else {
      throw $p;
    }
    tmp = tmp_0;
  }
  return tmp;
}
function toKtor(_this__u8e3s4) {
  return new toKtor$1(_this__u8e3s4);
}
function textDecoderOptions(fatal) {
  fatal = fatal === VOID ? false : fatal;
  // Inline function 'kotlin.apply' call
  var this_0 = new Object();
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'io.ktor.utils.io.charsets.textDecoderOptions.<anonymous>' call
  // Inline function 'kotlin.with' call
  // Inline function 'kotlin.js.asDynamic' call
  // Inline function 'kotlin.contracts.contract' call
  this_0.fatal = fatal;
  return this_0;
}
function toKtor$1($this_toKtor) {
  this.p1s_1 = $this_toKtor;
}
protoOf(toKtor$1).o1s = function (buffer) {
  return this.p1s_1.decode(buffer);
};
function get_ENCODING_ALIASES() {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return ENCODING_ALIASES;
}
var ENCODING_ALIASES;
function get_REPLACEMENT() {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return REPLACEMENT;
}
var REPLACEMENT;
function TextDecoderFallback(encoding, fatal) {
  this.q1s_1 = fatal;
  // Inline function 'kotlin.text.lowercase' call
  // Inline function 'kotlin.text.trim' call
  // Inline function 'kotlin.js.asDynamic' call
  var requestedEncoding = toString_1(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  if (!get_ENCODING_ALIASES().w(requestedEncoding)) {
    // Inline function 'io.ktor.utils.io.charsets.TextDecoderFallback.<anonymous>' call
    var message = encoding + ' is not supported.';
    throw IllegalStateException_init_$Create$(toString_1(message));
  }
}
protoOf(TextDecoderFallback).o1s = function (buffer) {
  // Inline function 'io.ktor.utils.io.core.buildPacket' call
  var builder = new Buffer();
  // Inline function 'io.ktor.utils.io.charsets.TextDecoderFallback.decode.<anonymous>' call
  var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
  var inductionVariable = 0;
  var last = bytes.length;
  if (inductionVariable < last)
    $l$loop: do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var byte = bytes[index];
      var point = toCodePoint(byte);
      if (point < 0) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!this.q1s_1) {
          // Inline function 'io.ktor.utils.io.charsets.TextDecoderFallback.decode.<anonymous>.<anonymous>' call
          var message = 'Invalid character: ' + point;
          throw IllegalStateException_init_$Create$(toString_1(message));
        }
        writeFully_0(builder, get_REPLACEMENT());
        continue $l$loop;
      }
      if (point > 255) {
        builder.h1j(toByte(point >> 8));
      }
      builder.h1j(toByte(point & 255));
    }
     while (inductionVariable < last);
  return decodeToString(readByteArray_0(builder));
};
function toCodePoint(_this__u8e3s4) {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  var value = _this__u8e3s4 & 255;
  if (isASCII(value)) {
    return value;
  }
  return get_WIN1252_TABLE()[value - 128 | 0];
}
function isASCII(_this__u8e3s4) {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
}
var properties_initialized_TextDecoderFallback_js_kt_6rekzk;
function _init_properties_TextDecoderFallback_js_kt__an7r6m() {
  if (!properties_initialized_TextDecoderFallback_js_kt_6rekzk) {
    properties_initialized_TextDecoderFallback_js_kt_6rekzk = true;
    ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
    // Inline function 'kotlin.byteArrayOf' call
    REPLACEMENT = new Int8Array([-17, -65, -67]);
  }
}
function encodeISO88591(input, fromIndex, toIndex, dst) {
  if (fromIndex >= toIndex)
    return 0;
  var inductionVariable = fromIndex;
  if (inductionVariable < toIndex)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var this_0 = charSequenceGet(input, index);
      var character = Char__toInt_impl_vasixd(this_0);
      if (character > 255) {
        failedToMapError(character);
      }
      dst.h1j(toByte(character));
    }
     while (inductionVariable < toIndex);
  return toIndex - fromIndex | 0;
}
function failedToMapError(ch) {
  throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
}
function get_WIN1252_TABLE() {
  _init_properties_Win1252Table_kt__tl0v64();
  return WIN1252_TABLE;
}
var WIN1252_TABLE;
var properties_initialized_Win1252Table_kt_pkmjoq;
function _init_properties_Win1252Table_kt__tl0v64() {
  if (!properties_initialized_Win1252Table_kt_pkmjoq) {
    properties_initialized_Win1252Table_kt_pkmjoq = true;
    // Inline function 'kotlin.intArrayOf' call
    WIN1252_TABLE = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
  }
}
function DefaultPool(capacity) {
  this.x1r_1 = capacity;
  var tmp = this;
  // Inline function 'kotlin.arrayOfNulls' call
  var size = this.x1r_1;
  tmp.y1r_1 = fillArrayVal(Array(size), null);
  this.z1r_1 = 0;
}
protoOf(DefaultPool).a1s = function (instance) {
};
protoOf(DefaultPool).b1s = function (instance) {
  return instance;
};
protoOf(DefaultPool).c1s = function (instance) {
};
protoOf(DefaultPool).d1s = function () {
  if (this.z1r_1 === 0)
    return this.w1r();
  this.z1r_1 = this.z1r_1 - 1 | 0;
  var idx = this.z1r_1;
  var tmp = this.y1r_1[idx];
  var instance = !(tmp == null) ? tmp : THROW_CCE();
  this.y1r_1[idx] = null;
  return this.b1s(instance);
};
protoOf(DefaultPool).e1s = function (instance) {
  this.c1s(instance);
  if (this.z1r_1 === this.x1r_1) {
    this.a1s(instance);
  } else {
    var _unary__edvuaz = this.z1r_1;
    this.z1r_1 = _unary__edvuaz + 1 | 0;
    this.y1r_1[_unary__edvuaz] = instance;
  }
};
function get_DEVELOPMENT_MODE() {
  return false;
}
//region block: post-declaration
protoOf(Read).u1k = resume;
protoOf(Read).v1k = resume_0;
protoOf(Write).u1k = resume;
protoOf(Write).v1k = resume_0;
protoOf(ByteChannel).z1m = awaitContent$default;
protoOf(ByteReadChannel$Companion$Empty$1).z1m = awaitContent$default;
protoOf(SourceByteReadChannel).z1m = awaitContent$default;
//endregion
//region block: init
Empty_instance = new Empty();
Companion_instance_2 = new Companion_1();
//endregion
//region block: exports
export {
  copyTo as copyTo2jmcpj5fnpt4h,
  readAvailable as readAvailable3e4l2qe492evd,
  readPacket as readPacket2ch7zl4hyiuos,
  readRemaining as readRemaining1h8rbofkekiud,
  toByteArray as toByteArray3plm6bkzs3r2t,
  writeFully as writeFully1yzd63iuxqbzp,
  writePacket as writePacket2fmobuaidxg6o,
  Charsets_getInstance as Charsets_getInstance193f5sla8amhs,
  Companion_getInstance_0 as Companion_getInstance188zj85eyts3x,
  MalformedInputException as MalformedInputExceptionbvc6h5ij0ias,
  decode as decode1t43jmuxrxpmo,
  encode as encode35e4rpnc94tb5,
  forName as forName2faodmskqnoz5,
  isSupported as isSupported2nf870ypy50et,
  get_name as get_name2f11g4r0d5pxp,
  BytePacketBuilder as BytePacketBuilder2biodf4wxvlba,
  build as buildjygoh729rhy8,
  canRead as canRead1guo8vbveth0f,
  discard as discard3ugntd47xyll6,
  readText_0 as readText27783kyxjxi1g,
  get_size as get_size2imoy2jq11jxl,
  takeWhile as takeWhile34751tcfg6owx,
  toByteArray_0 as toByteArray1i3ns5jnoqlv6,
  writeFully_0 as writeFully359t6q8kam2g5,
  writePacket_0 as writePacket1weetk0dtcyx2,
  writeText as writeText19qfzm98fbm4l,
  get_ByteArrayPool as get_ByteArrayPool3f7yrgvqxz9ct,
  ByteChannel as ByteChannel3cxdguezl3lu7,
  ByteReadChannel as ByteReadChannel1cb89sbyipkce,
  ByteReadChannel_1 as ByteReadChannel2wzou76jce72d,
  WriterScope as WriterScope3b0bo1enaee6b,
  get_availableForRead as get_availableForRead28yb35u7qm4tu,
  cancel_0 as canceldn4b3cdqcfny,
  close as close3semq7pafb42g,
  invokeOnCompletion as invokeOnCompletionvmw9mjsupd6z,
  get_isCompleted as get_isCompleted2vv2dxgxvs29m,
  readText as readText3frapgncbqrcg,
  writer as writer1eia5its2a1fh,
};
//endregion

//# sourceMappingURL=ktor-ktor-io.mjs.map
