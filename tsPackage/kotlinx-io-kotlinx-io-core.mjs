import {
  IndexOutOfBoundsException_init_$Create$lgvynu6unvfx as IndexOutOfBoundsException_init_$Create$,
  Long2qws0ah9gnpki as Long,
  IllegalArgumentException_init_$Create$sfel9vrfa7w2 as IllegalArgumentException_init_$Create$,
  _Char___init__impl__6a9atx367vrx0avsvbg as _Char___init__impl__6a9atx,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  protoOf180f3jzyo7rfj as protoOf,
  toString1pkumu07cwy4m as toString,
  Unit_instanceat14thlj150z as Unit_instance,
  toShort36kaw0zjdq3ex as toShort,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  toLongw1zpgk99d84b as toLong,
  StringBuilder_init_$Create$1ckbfpj83l95o as StringBuilder_init_$Create$,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID7hggqo3abtya as VOID,
  IllegalStateException_init_$Create$1nm9y6jd3c9iy as IllegalStateException_init_$Create$,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  arrayCopytctsywo3h7gj as arrayCopy,
  toByte4i43936u611k as toByte,
  IllegalArgumentException_init_$Create$3czm0y2xr5n58 as IllegalArgumentException_init_$Create$_0,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  Char__toInt_impl_vasixd17daqndsyg0ov as Char__toInt_impl_vasixd,
  charArray2ujmm1qusno00 as charArray,
  numberToChar93r9buh19yek as numberToChar,
  concatToString3cxf0c1gqonpo as concatToString,
  Exception_init_$Init$25rnrjp6anyxk as Exception_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  Exception_init_$Init$3c1h61we8oiuv as Exception_init_$Init$_0,
  Exception_init_$Init$2t8qsqvbxaqim as Exception_init_$Init$_1,
  Exceptiondt2hlxn7j7vw as Exception,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
function readAtMostTo$default(sink, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? sink.length : endIndex;
  return $super === VOID ? this.m1i(sink, startIndex, endIndex) : $super.m1i.call(this, sink, startIndex, endIndex);
}
initMetadataForInterface(Source, 'Source');
function write$default(source, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? source.length : endIndex;
  var tmp;
  if ($super === VOID) {
    this.y1i(source, startIndex, endIndex);
    tmp = Unit_instance;
  } else {
    tmp = $super.y1i.call(this, source, startIndex, endIndex);
  }
  return tmp;
}
initMetadataForInterface(Sink, 'Sink');
initMetadataForClass(Buffer, 'Buffer', Buffer, VOID, [Source, Sink]);
initMetadataForClass(PeekSource, 'PeekSource');
initMetadataForClass(RealSource, 'RealSource', VOID, VOID, [Source]);
initMetadataForCompanion(Companion);
initMetadataForClass(Segment, 'Segment');
initMetadataForClass(SegmentCopyTracker, 'SegmentCopyTracker');
initMetadataForObject(AlwaysSharedCopyTracker, 'AlwaysSharedCopyTracker', VOID, SegmentCopyTracker);
initMetadataForObject(UnsafeBufferOperations, 'UnsafeBufferOperations');
initMetadataForClass(SegmentReadContextImpl$1);
initMetadataForClass(SegmentWriteContextImpl$1);
initMetadataForClass(BufferIterationContextImpl$1);
initMetadataForClass(IOException, 'IOException', IOException_init_$Create$, Exception);
initMetadataForClass(EOFException, 'EOFException', EOFException_init_$Create$, IOException);
initMetadataForObject(SegmentPool, 'SegmentPool');
//endregion
function get_HEX_DIGIT_CHARS() {
  _init_properties__Util_kt__g8tcl9();
  return HEX_DIGIT_CHARS;
}
var HEX_DIGIT_CHARS;
function checkBounds(size, startIndex, endIndex) {
  _init_properties__Util_kt__g8tcl9();
  if (startIndex.g1(new Long(0, 0)) < 0 || endIndex.g1(size) > 0) {
    throw IndexOutOfBoundsException_init_$Create$('startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
  if (startIndex.g1(endIndex) > 0) {
    throw IllegalArgumentException_init_$Create$('startIndex (' + startIndex.toString() + ') > endIndex (' + endIndex.toString() + ')');
  }
}
function checkOffsetAndCount(size, offset, byteCount) {
  _init_properties__Util_kt__g8tcl9();
  if (offset.g1(new Long(0, 0)) < 0 || offset.g1(size) > 0 || size.c3(offset).g1(byteCount) < 0 || byteCount.g1(new Long(0, 0)) < 0) {
    throw IllegalArgumentException_init_$Create$('offset (' + offset.toString() + ') and byteCount (' + byteCount.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
}
var properties_initialized__Util_kt_67kc5b;
function _init_properties__Util_kt__g8tcl9() {
  if (!properties_initialized__Util_kt_67kc5b) {
    properties_initialized__Util_kt_67kc5b = true;
    // Inline function 'kotlin.charArrayOf' call
    HEX_DIGIT_CHARS = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102)]);
  }
}
function throwEof($this, byteCount) {
  throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + $this.s().toString() + ', required: ' + byteCount.toString() + ')');
}
function Buffer() {
  this.l1h_1 = null;
  this.m1h_1 = null;
  this.n1h_1 = new Long(0, 0);
}
protoOf(Buffer).s = function () {
  return this.n1h_1;
};
protoOf(Buffer).o1h = function () {
  return this;
};
protoOf(Buffer).p1h = function () {
  return this.s().equals(new Long(0, 0));
};
protoOf(Buffer).q1h = function (byteCount) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(byteCount.g1(new Long(0, 0)) >= 0)) {
    // Inline function 'kotlinx.io.Buffer.require.<anonymous>' call
    var message = 'byteCount: ' + byteCount.toString();
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  if (this.s().g1(byteCount) < 0) {
    throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + this.s().toString() + ', required: ' + byteCount.toString() + ')');
  }
};
protoOf(Buffer).r1h = function (byteCount) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(byteCount.g1(new Long(0, 0)) >= 0)) {
    // Inline function 'kotlinx.io.Buffer.request.<anonymous>' call
    var message = 'byteCount: ' + byteCount.toString() + ' < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return this.s().g1(byteCount) >= 0;
};
protoOf(Buffer).s1h = function () {
  var tmp0_elvis_lhs = this.l1h_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throwEof(this, new Long(1, 0));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var segment = tmp;
  var segmentSize = segment.a1i();
  if (segmentSize === 0) {
    this.b1i();
    return this.s1h();
  }
  var v = segment.c1i();
  this.n1h_1 = this.n1h_1.c3(new Long(1, 0));
  if (segmentSize === 1) {
    this.b1i();
  }
  return v;
};
protoOf(Buffer).d1i = function () {
  var tmp0_elvis_lhs = this.l1h_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throwEof(this, new Long(2, 0));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var segment = tmp;
  var segmentSize = segment.a1i();
  if (segmentSize < 2) {
    this.q1h(new Long(2, 0));
    if (segmentSize === 0) {
      this.b1i();
      return this.d1i();
    }
    // Inline function 'kotlinx.io.and' call
    var tmp_0 = (this.s1h() & 255) << 8;
    // Inline function 'kotlinx.io.and' call
    var tmp$ret$1 = this.s1h() & 255;
    return toShort(tmp_0 | tmp$ret$1);
  }
  var v = segment.e1i();
  this.n1h_1 = this.n1h_1.c3(new Long(2, 0));
  if (segmentSize === 2) {
    this.b1i();
  }
  return v;
};
protoOf(Buffer).f1i = function () {
  return Unit_instance;
};
protoOf(Buffer).g1i = function (out, startIndex, endIndex) {
  checkBounds(this.s(), startIndex, endIndex);
  if (startIndex.equals(endIndex))
    return Unit_instance;
  var currentOffset = startIndex;
  var remainingByteCount = endIndex.c3(startIndex);
  out.n1h_1 = out.n1h_1.b3(remainingByteCount);
  var s = this.l1h_1;
  while (currentOffset.g1(toLong(ensureNotNull(s).v1h_1 - s.u1h_1 | 0)) >= 0) {
    currentOffset = currentOffset.c3(toLong(s.v1h_1 - s.u1h_1 | 0));
    s = s.y1h_1;
  }
  while (remainingByteCount.g1(new Long(0, 0)) > 0) {
    var copy = ensureNotNull(s).h1i();
    copy.u1h_1 = copy.u1h_1 + currentOffset.l1() | 0;
    var tmp = copy;
    // Inline function 'kotlin.comparisons.minOf' call
    var a = copy.u1h_1 + remainingByteCount.l1() | 0;
    var b = copy.v1h_1;
    tmp.v1h_1 = Math.min(a, b);
    // Inline function 'kotlinx.io.Buffer.pushSegment' call
    if (out.l1h_1 == null) {
      out.l1h_1 = copy;
      out.m1h_1 = copy;
    } else if (false) {
      out.m1h_1 = ensureNotNull(out.m1h_1).i1i(copy).j1i();
      if (ensureNotNull(out.m1h_1).z1h_1 == null) {
        out.l1h_1 = out.m1h_1;
      }
    } else {
      out.m1h_1 = ensureNotNull(out.m1h_1).i1i(copy);
    }
    remainingByteCount = remainingByteCount.c3(toLong(copy.v1h_1 - copy.u1h_1 | 0));
    currentOffset = new Long(0, 0);
    s = s.y1h_1;
  }
};
protoOf(Buffer).k1i = function () {
  var result = this.s();
  if (result.equals(new Long(0, 0)))
    return new Long(0, 0);
  var tail = ensureNotNull(this.m1h_1);
  if (tail.v1h_1 < 8192 && tail.x1h_1) {
    result = result.c3(toLong(tail.v1h_1 - tail.u1h_1 | 0));
  }
  return result;
};
protoOf(Buffer).i2 = function () {
  return this.l1i(this.s());
};
protoOf(Buffer).l1i = function (byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(byteCount.g1(new Long(0, 0)) >= 0)) {
    // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
    var message = 'byteCount (' + byteCount.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var remainingByteCount = byteCount;
  while (remainingByteCount.g1(new Long(0, 0)) > 0) {
    var tmp0_elvis_lhs = this.l1h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw EOFException_init_$Create$_0('Buffer exhausted before skipping ' + byteCount.toString() + ' bytes.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    // Inline function 'kotlinx.io.minOf' call
    var a = remainingByteCount;
    var b = head.v1h_1 - head.u1h_1 | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b_0 = toLong(b);
    var toSkip = (a.g1(b_0) <= 0 ? a : b_0).l1();
    this.n1h_1 = this.n1h_1.c3(toLong(toSkip));
    remainingByteCount = remainingByteCount.c3(toLong(toSkip));
    head.u1h_1 = head.u1h_1 + toSkip | 0;
    if (head.u1h_1 === head.v1h_1) {
      this.b1i();
    }
  }
};
protoOf(Buffer).m1i = function (sink, startIndex, endIndex) {
  // Inline function 'kotlinx.io.checkBounds' call
  var size = sink.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  var tmp0_elvis_lhs = this.l1h_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return -1;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var s = tmp;
  // Inline function 'kotlin.comparisons.minOf' call
  var a = endIndex - startIndex | 0;
  var b = s.a1i();
  var toCopy = Math.min(a, b);
  s.n1i(sink, startIndex, startIndex + toCopy | 0);
  this.n1h_1 = this.n1h_1.c3(toLong(toCopy));
  if (isEmpty(s)) {
    this.b1i();
  }
  return toCopy;
};
protoOf(Buffer).p1i = function (sink, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(byteCount.g1(new Long(0, 0)) >= 0)) {
    // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
    var message = 'byteCount (' + byteCount.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  if (this.s().equals(new Long(0, 0)))
    return new Long(-1, -1);
  var bytesWritten = byteCount.g1(this.s()) > 0 ? this.s() : byteCount;
  sink.q1i(this, bytesWritten);
  return bytesWritten;
};
protoOf(Buffer).r1i = function (sink, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(byteCount.g1(new Long(0, 0)) >= 0)) {
    // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
    var message = 'byteCount (' + byteCount.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  if (this.s().g1(byteCount) < 0) {
    sink.q1i(this, this.s());
    throw EOFException_init_$Create$_0('Buffer exhausted before writing ' + byteCount.toString() + ' bytes. Only ' + this.s().toString() + ' bytes were written.');
  }
  sink.q1i(this, byteCount);
};
protoOf(Buffer).s1i = function (sink) {
  var byteCount = this.s();
  if (byteCount.g1(new Long(0, 0)) > 0) {
    sink.q1i(this, byteCount);
  }
  return byteCount;
};
protoOf(Buffer).t1i = function () {
  return buffered(new PeekSource(this));
};
protoOf(Buffer).u1i = function (minimumCapacity) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
    // Inline function 'kotlinx.io.Buffer.writableSegment.<anonymous>' call
    var message = 'unexpected capacity';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  if (this.m1h_1 == null) {
    var result = SegmentPool_instance.x1i();
    this.l1h_1 = result;
    this.m1h_1 = result;
    return result;
  }
  var t = ensureNotNull(this.m1h_1);
  if ((t.v1h_1 + minimumCapacity | 0) > 8192 || !t.x1h_1) {
    var newTail = t.i1i(SegmentPool_instance.x1i());
    this.m1h_1 = newTail;
    return newTail;
  }
  return t;
};
protoOf(Buffer).y1i = function (source, startIndex, endIndex) {
  // Inline function 'kotlinx.io.checkBounds' call
  var size = source.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  var currentOffset = startIndex;
  while (currentOffset < endIndex) {
    var tail = this.u1i(1);
    // Inline function 'kotlin.comparisons.minOf' call
    var a = endIndex - currentOffset | 0;
    var b = tail.z1i();
    var toCopy = Math.min(a, b);
    tail.a1j(source, currentOffset, currentOffset + toCopy | 0);
    currentOffset = currentOffset + toCopy | 0;
  }
  var tmp = this;
  // Inline function 'kotlin.Long.plus' call
  var this_0 = this.n1h_1;
  var other = endIndex - startIndex | 0;
  tmp.n1h_1 = this_0.b3(toLong(other));
};
protoOf(Buffer).q1i = function (source, byteCount) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!!(source === this)) {
    // Inline function 'kotlinx.io.Buffer.write.<anonymous>' call
    var message = 'source == this';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  checkOffsetAndCount(source.n1h_1, new Long(0, 0), byteCount);
  var remainingByteCount = byteCount;
  while (remainingByteCount.g1(new Long(0, 0)) > 0) {
    if (remainingByteCount.g1(toLong(ensureNotNull(source.l1h_1).a1i())) < 0) {
      var tail = this.m1h_1;
      var tmp;
      if (!(tail == null) && tail.x1h_1) {
        // Inline function 'kotlin.Long.minus' call
        // Inline function 'kotlin.Long.plus' call
        var this_0 = remainingByteCount;
        var other = tail.v1h_1;
        var this_1 = this_0.b3(toLong(other));
        var other_0 = tail.c1j() ? 0 : tail.u1h_1;
        tmp = this_1.c3(toLong(other_0)).g1(new Long(8192, 0)) <= 0;
      } else {
        tmp = false;
      }
      if (tmp) {
        ensureNotNull(source.l1h_1).e1j(tail, remainingByteCount.l1());
        source.n1h_1 = source.n1h_1.c3(remainingByteCount);
        this.n1h_1 = this.n1h_1.b3(remainingByteCount);
        return Unit_instance;
      } else {
        source.l1h_1 = ensureNotNull(source.l1h_1).d1j(remainingByteCount.l1());
      }
    }
    var segmentToMove = ensureNotNull(source.l1h_1);
    var movedByteCount = toLong(segmentToMove.a1i());
    source.l1h_1 = segmentToMove.f1j();
    if (source.l1h_1 == null) {
      source.m1h_1 = null;
    }
    // Inline function 'kotlinx.io.Buffer.pushSegment' call
    if (this.l1h_1 == null) {
      this.l1h_1 = segmentToMove;
      this.m1h_1 = segmentToMove;
    } else if (true) {
      this.m1h_1 = ensureNotNull(this.m1h_1).i1i(segmentToMove).j1i();
      if (ensureNotNull(this.m1h_1).z1h_1 == null) {
        this.l1h_1 = this.m1h_1;
      }
    } else {
      this.m1h_1 = ensureNotNull(this.m1h_1).i1i(segmentToMove);
    }
    source.n1h_1 = source.n1h_1.c3(movedByteCount);
    this.n1h_1 = this.n1h_1.b3(movedByteCount);
    remainingByteCount = remainingByteCount.c3(movedByteCount);
  }
};
protoOf(Buffer).g1j = function (source) {
  var totalBytesRead = new Long(0, 0);
  $l$loop: while (true) {
    var readCount = source.p1i(this, new Long(8192, 0));
    if (readCount.equals(new Long(-1, -1)))
      break $l$loop;
    totalBytesRead = totalBytesRead.b3(readCount);
  }
  return totalBytesRead;
};
protoOf(Buffer).h1j = function (byte) {
  this.u1i(1).i1j(byte);
  this.n1h_1 = this.n1h_1.b3(new Long(1, 0));
};
protoOf(Buffer).j1j = function (short) {
  this.u1i(2).k1j(short);
  this.n1h_1 = this.n1h_1.b3(new Long(2, 0));
};
protoOf(Buffer).l1j = function () {
  return Unit_instance;
};
protoOf(Buffer).toString = function () {
  if (this.s().equals(new Long(0, 0)))
    return 'Buffer(size=0)';
  var maxPrintableBytes = 64;
  // Inline function 'kotlinx.io.minOf' call
  var b = this.s();
  // Inline function 'kotlin.comparisons.minOf' call
  var a = toLong(maxPrintableBytes);
  var len = (a.g1(b) <= 0 ? a : b).l1();
  var builder = StringBuilder_init_$Create$(imul(len, 2) + (this.s().g1(toLong(maxPrintableBytes)) > 0 ? 1 : 0) | 0);
  var bytesWritten = 0;
  // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
  var curr = this.l1h_1;
  while (!(curr == null)) {
    // Inline function 'kotlinx.io.Buffer.toString.<anonymous>' call
    var ctx = get_SegmentReadContextImpl();
    var segment = curr;
    var idx = 0;
    while (bytesWritten < len && idx < segment.a1i()) {
      var _unary__edvuaz = idx;
      idx = _unary__edvuaz + 1 | 0;
      var b_0 = ctx.m1j(segment, _unary__edvuaz);
      bytesWritten = bytesWritten + 1 | 0;
      var tmp = get_HEX_DIGIT_CHARS();
      // Inline function 'kotlinx.io.shr' call
      var tmp$ret$2 = b_0 >> 4;
      var tmp_0 = builder.l8(tmp[tmp$ret$2 & 15]);
      var tmp_1 = get_HEX_DIGIT_CHARS();
      // Inline function 'kotlinx.io.and' call
      var tmp$ret$3 = b_0 & 15;
      tmp_0.l8(tmp_1[tmp$ret$3]);
    }
    curr = curr.y1h_1;
  }
  if (this.s().g1(toLong(maxPrintableBytes)) > 0) {
    builder.l8(_Char___init__impl__6a9atx(8230));
  }
  return 'Buffer(size=' + this.s().toString() + ' hex=' + builder.toString() + ')';
};
protoOf(Buffer).b1i = function () {
  var oldHead = ensureNotNull(this.l1h_1);
  var nextHead = oldHead.y1h_1;
  this.l1h_1 = nextHead;
  if (nextHead == null) {
    this.m1h_1 = null;
  } else {
    nextHead.z1h_1 = null;
  }
  oldHead.y1h_1 = null;
  SegmentPool_instance.n1j(oldHead);
};
protoOf(Buffer).o1j = function () {
  var oldTail = ensureNotNull(this.m1h_1);
  var newTail = oldTail.z1h_1;
  this.m1h_1 = newTail;
  if (newTail == null) {
    this.l1h_1 = null;
  } else {
    newTail.y1h_1 = null;
  }
  oldTail.z1h_1 = null;
  SegmentPool_instance.n1j(oldTail);
};
function buffered(_this__u8e3s4) {
  return new RealSource(_this__u8e3s4);
}
function PeekSource(upstream) {
  this.p1j_1 = upstream;
  this.q1j_1 = this.p1j_1.o1h();
  this.r1j_1 = this.q1j_1.l1h_1;
  var tmp = this;
  var tmp0_safe_receiver = this.q1j_1.l1h_1;
  var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u1h_1;
  tmp.s1j_1 = tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
  this.t1j_1 = false;
  this.u1j_1 = new Long(0, 0);
}
protoOf(PeekSource).p1i = function (sink, byteCount) {
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  if (!!this.t1j_1) {
    // Inline function 'kotlinx.io.PeekSource.readAtMostTo.<anonymous>' call
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlinx.io.checkByteCount' call
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(byteCount.g1(new Long(0, 0)) >= 0)) {
    // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
    var message_0 = 'byteCount (' + byteCount.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(this.r1j_1 == null || (this.r1j_1 === this.q1j_1.l1h_1 && this.s1j_1 === ensureNotNull(this.q1j_1.l1h_1).u1h_1))) {
    // Inline function 'kotlinx.io.PeekSource.readAtMostTo.<anonymous>' call
    var message_1 = 'Peek source is invalid because upstream source was used';
    throw IllegalStateException_init_$Create$(toString(message_1));
  }
  if (byteCount.equals(new Long(0, 0)))
    return new Long(0, 0);
  // Inline function 'kotlin.Long.plus' call
  var tmp$ret$3 = this.u1j_1.b3(toLong(1));
  if (!this.p1j_1.r1h(tmp$ret$3))
    return new Long(-1, -1);
  if (this.r1j_1 == null && !(this.q1j_1.l1h_1 == null)) {
    this.r1j_1 = this.q1j_1.l1h_1;
    this.s1j_1 = ensureNotNull(this.q1j_1.l1h_1).u1h_1;
  }
  // Inline function 'kotlin.comparisons.minOf' call
  var b = this.q1j_1.s().c3(this.u1j_1);
  var toCopy = byteCount.g1(b) <= 0 ? byteCount : b;
  this.q1j_1.g1i(sink, this.u1j_1, this.u1j_1.b3(toCopy));
  this.u1j_1 = this.u1j_1.b3(toCopy);
  return toCopy;
};
protoOf(PeekSource).l1j = function () {
  this.t1j_1 = true;
};
function RealSource(source) {
  this.v1j_1 = source;
  this.w1j_1 = false;
  this.x1j_1 = new Buffer();
}
protoOf(RealSource).o1h = function () {
  return this.x1j_1;
};
protoOf(RealSource).p1i = function (sink, byteCount) {
  // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  if (!!this.w1j_1) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(byteCount.g1(new Long(0, 0)) >= 0)) {
    // Inline function 'kotlinx.io.RealSource.readAtMostTo.<anonymous>' call
    var message_0 = 'byteCount: ' + byteCount.toString();
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
  if (this.x1j_1.s().equals(new Long(0, 0))) {
    var read = this.v1j_1.p1i(this.x1j_1, new Long(8192, 0));
    if (read.equals(new Long(-1, -1)))
      return new Long(-1, -1);
  }
  // Inline function 'kotlin.comparisons.minOf' call
  var b = this.x1j_1.s();
  var toRead = byteCount.g1(b) <= 0 ? byteCount : b;
  return this.x1j_1.p1i(sink, toRead);
};
protoOf(RealSource).p1h = function () {
  // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  if (!!this.w1j_1) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  return this.x1j_1.p1h() && this.v1j_1.p1i(this.x1j_1, new Long(8192, 0)).equals(new Long(-1, -1));
};
protoOf(RealSource).q1h = function (byteCount) {
  if (!this.r1h(byteCount))
    throw EOFException_init_$Create$_0("Source doesn't contain required number of bytes (" + byteCount.toString() + ').');
};
protoOf(RealSource).r1h = function (byteCount) {
  // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  if (!!this.w1j_1) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(byteCount.g1(new Long(0, 0)) >= 0)) {
    // Inline function 'kotlinx.io.RealSource.request.<anonymous>' call
    var message_0 = 'byteCount: ' + byteCount.toString();
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
  while (this.x1j_1.s().g1(byteCount) < 0) {
    if (this.v1j_1.p1i(this.x1j_1, new Long(8192, 0)).equals(new Long(-1, -1)))
      return false;
  }
  return true;
};
protoOf(RealSource).m1i = function (sink, startIndex, endIndex) {
  // Inline function 'kotlinx.io.checkBounds' call
  var size = sink.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  if (this.x1j_1.s().equals(new Long(0, 0))) {
    var read = this.v1j_1.p1i(this.x1j_1, new Long(8192, 0));
    if (read.equals(new Long(-1, -1)))
      return -1;
  }
  // Inline function 'kotlinx.io.minOf' call
  var a = endIndex - startIndex | 0;
  var b = this.x1j_1.s();
  // Inline function 'kotlin.comparisons.minOf' call
  var a_0 = toLong(a);
  var toRead = (a_0.g1(b) <= 0 ? a_0 : b).l1();
  return this.x1j_1.m1i(sink, startIndex, startIndex + toRead | 0);
};
protoOf(RealSource).r1i = function (sink, byteCount) {
  try {
    this.q1h(byteCount);
  } catch ($p) {
    if ($p instanceof EOFException) {
      var e = $p;
      sink.q1i(this.x1j_1, this.x1j_1.s());
      throw e;
    } else {
      throw $p;
    }
  }
  this.x1j_1.r1i(sink, byteCount);
};
protoOf(RealSource).s1i = function (sink) {
  var totalBytesWritten = new Long(0, 0);
  while (!this.v1j_1.p1i(this.x1j_1, new Long(8192, 0)).equals(new Long(-1, -1))) {
    var emitByteCount = this.x1j_1.k1i();
    if (emitByteCount.g1(new Long(0, 0)) > 0) {
      totalBytesWritten = totalBytesWritten.b3(emitByteCount);
      sink.q1i(this.x1j_1, emitByteCount);
    }
  }
  if (this.x1j_1.s().g1(new Long(0, 0)) > 0) {
    totalBytesWritten = totalBytesWritten.b3(this.x1j_1.s());
    sink.q1i(this.x1j_1, this.x1j_1.s());
  }
  return totalBytesWritten;
};
protoOf(RealSource).d1i = function () {
  this.q1h(new Long(2, 0));
  return this.x1j_1.d1i();
};
protoOf(RealSource).t1i = function () {
  // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  if (!!this.w1j_1) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  return buffered(new PeekSource(this));
};
protoOf(RealSource).l1j = function () {
  if (this.w1j_1)
    return Unit_instance;
  this.w1j_1 = true;
  this.v1j_1.l1j();
  this.x1j_1.i2();
};
protoOf(RealSource).toString = function () {
  return 'buffered(' + toString(this.v1j_1) + ')';
};
function Segment_init_$Init$($this) {
  Segment.call($this);
  $this.t1h_1 = new Int8Array(8192);
  $this.x1h_1 = true;
  $this.w1h_1 = null;
  return $this;
}
function Segment_init_$Create$() {
  return Segment_init_$Init$(objectCreate(protoOf(Segment)));
}
function Segment_init_$Init$_0(data, pos, limit, shareToken, owner, $this) {
  Segment.call($this);
  $this.t1h_1 = data;
  $this.u1h_1 = pos;
  $this.v1h_1 = limit;
  $this.w1h_1 = shareToken;
  $this.x1h_1 = owner;
  return $this;
}
function Segment_init_$Create$_0(data, pos, limit, shareToken, owner) {
  return Segment_init_$Init$_0(data, pos, limit, shareToken, owner, objectCreate(protoOf(Segment)));
}
function Companion() {
  this.y1j_1 = 8192;
  this.z1j_1 = 1024;
}
protoOf(Companion).a1k = function () {
  return Segment_init_$Create$();
};
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
protoOf(Segment).c1j = function () {
  var tmp1_safe_receiver = this.w1h_1;
  var tmp0_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b1k();
  return tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
};
protoOf(Segment).h1i = function () {
  var tmp0_elvis_lhs = this.w1h_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.also' call
    var this_0 = SegmentPool_instance.c1k();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.io.Segment.sharedCopy.<anonymous>' call
    this.w1h_1 = this_0;
    tmp = this_0;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var t = tmp;
  var tmp_0 = this.u1h_1;
  var tmp_1 = this.v1h_1;
  // Inline function 'kotlin.also' call
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'kotlinx.io.Segment.sharedCopy.<anonymous>' call
  t.d1k();
  return Segment_init_$Create$_0(this.t1h_1, tmp_0, tmp_1, t, false);
};
protoOf(Segment).f1j = function () {
  var result = this.y1h_1;
  if (!(this.z1h_1 == null)) {
    ensureNotNull(this.z1h_1).y1h_1 = this.y1h_1;
  }
  if (!(this.y1h_1 == null)) {
    ensureNotNull(this.y1h_1).z1h_1 = this.z1h_1;
  }
  this.y1h_1 = null;
  this.z1h_1 = null;
  return result;
};
protoOf(Segment).i1i = function (segment) {
  segment.z1h_1 = this;
  segment.y1h_1 = this.y1h_1;
  if (!(this.y1h_1 == null)) {
    ensureNotNull(this.y1h_1).z1h_1 = segment;
  }
  this.y1h_1 = segment;
  return segment;
};
protoOf(Segment).d1j = function (byteCount) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(byteCount > 0 && byteCount <= (this.v1h_1 - this.u1h_1 | 0))) {
    // Inline function 'kotlinx.io.Segment.split.<anonymous>' call
    var message = 'byteCount out of range';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var prefix;
  if (byteCount >= 1024) {
    prefix = this.h1i();
  } else {
    prefix = SegmentPool_instance.x1i();
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.t1h_1;
    var destination = prefix.t1h_1;
    var startIndex = this.u1h_1;
    var endIndex = this.u1h_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination, 0, startIndex, endIndex);
  }
  prefix.v1h_1 = prefix.u1h_1 + byteCount | 0;
  this.u1h_1 = this.u1h_1 + byteCount | 0;
  if (!(this.z1h_1 == null)) {
    ensureNotNull(this.z1h_1).i1i(prefix);
  } else {
    prefix.y1h_1 = this;
    this.z1h_1 = prefix;
  }
  return prefix;
};
protoOf(Segment).j1i = function () {
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  if (!!(this.z1h_1 == null)) {
    // Inline function 'kotlinx.io.Segment.compact.<anonymous>' call
    var message = 'cannot compact';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  if (!ensureNotNull(this.z1h_1).x1h_1)
    return this;
  var byteCount = this.v1h_1 - this.u1h_1 | 0;
  var availableByteCount = (8192 - ensureNotNull(this.z1h_1).v1h_1 | 0) + (ensureNotNull(this.z1h_1).c1j() ? 0 : ensureNotNull(this.z1h_1).u1h_1) | 0;
  if (byteCount > availableByteCount)
    return this;
  var predecessor = this.z1h_1;
  this.e1j(ensureNotNull(predecessor), byteCount);
  var successor = this.f1j();
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(successor == null)) {
    // Inline function 'kotlin.check.<anonymous>' call
    var message_0 = 'Check failed.';
    throw IllegalStateException_init_$Create$(toString(message_0));
  }
  SegmentPool_instance.n1j(this);
  return predecessor;
};
protoOf(Segment).i1j = function (byte) {
  var _unary__edvuaz = this.v1h_1;
  this.v1h_1 = _unary__edvuaz + 1 | 0;
  this.t1h_1[_unary__edvuaz] = byte;
};
protoOf(Segment).k1j = function (short) {
  var data = this.t1h_1;
  var limit = this.v1h_1;
  var _unary__edvuaz = limit;
  limit = _unary__edvuaz + 1 | 0;
  data[_unary__edvuaz] = toByte((short >>> 8 | 0) & 255);
  var _unary__edvuaz_0 = limit;
  limit = _unary__edvuaz_0 + 1 | 0;
  data[_unary__edvuaz_0] = toByte(short & 255);
  this.v1h_1 = limit;
};
protoOf(Segment).c1i = function () {
  var _unary__edvuaz = this.u1h_1;
  this.u1h_1 = _unary__edvuaz + 1 | 0;
  return this.t1h_1[_unary__edvuaz];
};
protoOf(Segment).e1i = function () {
  var data = this.t1h_1;
  var pos = this.u1h_1;
  // Inline function 'kotlinx.io.and' call
  var _unary__edvuaz = pos;
  pos = _unary__edvuaz + 1 | 0;
  var tmp = (data[_unary__edvuaz] & 255) << 8;
  // Inline function 'kotlinx.io.and' call
  var _unary__edvuaz_0 = pos;
  pos = _unary__edvuaz_0 + 1 | 0;
  var tmp$ret$1 = data[_unary__edvuaz_0] & 255;
  var s = toShort(tmp | tmp$ret$1);
  this.u1h_1 = pos;
  return s;
};
protoOf(Segment).e1j = function (sink, byteCount) {
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  if (!sink.x1h_1) {
    // Inline function 'kotlinx.io.Segment.writeTo.<anonymous>' call
    var message = 'only owner can write';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  if ((sink.v1h_1 + byteCount | 0) > 8192) {
    if (sink.c1j())
      throw IllegalArgumentException_init_$Create$_0();
    if (((sink.v1h_1 + byteCount | 0) - sink.u1h_1 | 0) > 8192)
      throw IllegalArgumentException_init_$Create$_0();
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = sink.t1h_1;
    var destination = sink.t1h_1;
    var startIndex = sink.u1h_1;
    var endIndex = sink.v1h_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination, 0, startIndex, endIndex);
    sink.v1h_1 = sink.v1h_1 - sink.u1h_1 | 0;
    sink.u1h_1 = 0;
  }
  // Inline function 'kotlin.collections.copyInto' call
  var this_1 = this.t1h_1;
  var destination_0 = sink.t1h_1;
  var destinationOffset = sink.v1h_1;
  var startIndex_0 = this.u1h_1;
  var endIndex_0 = this.u1h_1 + byteCount | 0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_0 = this_1;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp_0, destination_0, destinationOffset, startIndex_0, endIndex_0);
  sink.v1h_1 = sink.v1h_1 + byteCount | 0;
  this.u1h_1 = this.u1h_1 + byteCount | 0;
};
protoOf(Segment).n1i = function (dst, dstStartOffset, dstEndOffset) {
  var len = dstEndOffset - dstStartOffset | 0;
  // Inline function 'kotlin.collections.copyInto' call
  var this_0 = this.t1h_1;
  var startIndex = this.u1h_1;
  var endIndex = this.u1h_1 + len | 0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = this_0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, dst, dstStartOffset, startIndex, endIndex);
  this.u1h_1 = this.u1h_1 + len | 0;
};
protoOf(Segment).a1j = function (src, srcStartOffset, srcEndOffset) {
  // Inline function 'kotlin.collections.copyInto' call
  var destination = this.t1h_1;
  var destinationOffset = this.v1h_1;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = src;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, destination, destinationOffset, srcStartOffset, srcEndOffset);
  this.v1h_1 = this.v1h_1 + (srcEndOffset - srcStartOffset | 0) | 0;
};
protoOf(Segment).a1i = function () {
  return this.v1h_1 - this.u1h_1 | 0;
};
protoOf(Segment).z1i = function () {
  return this.t1h_1.length - this.v1h_1 | 0;
};
protoOf(Segment).e1k = function (readOnly) {
  return this.t1h_1;
};
protoOf(Segment).f1k = function (index) {
  return this.t1h_1[this.u1h_1 + index | 0];
};
protoOf(Segment).g1k = function (index, value) {
  this.t1h_1[this.v1h_1 + index | 0] = value;
};
protoOf(Segment).h1k = function (index, b0, b1) {
  var d = this.t1h_1;
  var l = this.v1h_1;
  d[l + index | 0] = b0;
  d[(l + index | 0) + 1 | 0] = b1;
};
protoOf(Segment).i1k = function (index, b0, b1, b2) {
  var d = this.t1h_1;
  var l = this.v1h_1;
  d[l + index | 0] = b0;
  d[(l + index | 0) + 1 | 0] = b1;
  d[(l + index | 0) + 2 | 0] = b2;
};
protoOf(Segment).j1k = function (index, b0, b1, b2, b3) {
  var d = this.t1h_1;
  var l = this.v1h_1;
  d[l + index | 0] = b0;
  d[(l + index | 0) + 1 | 0] = b1;
  d[(l + index | 0) + 2 | 0] = b2;
  d[(l + index | 0) + 3 | 0] = b3;
};
function Segment() {
  this.u1h_1 = 0;
  this.v1h_1 = 0;
  this.w1h_1 = null;
  this.x1h_1 = false;
  this.y1h_1 = null;
  this.z1h_1 = null;
}
function SegmentCopyTracker() {
}
function isEmpty(_this__u8e3s4) {
  return _this__u8e3s4.a1i() === 0;
}
function AlwaysSharedCopyTracker() {
  AlwaysSharedCopyTracker_instance = this;
  SegmentCopyTracker.call(this);
}
protoOf(AlwaysSharedCopyTracker).b1k = function () {
  return true;
};
protoOf(AlwaysSharedCopyTracker).d1k = function () {
  return Unit_instance;
};
var AlwaysSharedCopyTracker_instance;
function AlwaysSharedCopyTracker_getInstance() {
  if (AlwaysSharedCopyTracker_instance == null)
    new AlwaysSharedCopyTracker();
  return AlwaysSharedCopyTracker_instance;
}
function Sink() {
}
function Source() {
}
function readByteArray(_this__u8e3s4) {
  return readByteArrayImpl(_this__u8e3s4, -1);
}
function readByteArrayImpl(_this__u8e3s4, size) {
  var arraySize = size;
  if (size === -1) {
    var fetchSize = new Long(2147483647, 0);
    while (_this__u8e3s4.o1h().s().g1(new Long(2147483647, 0)) < 0 && _this__u8e3s4.r1h(fetchSize)) {
      // Inline function 'kotlin.Long.times' call
      fetchSize = fetchSize.d3(toLong(2));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_this__u8e3s4.o1h().s().g1(new Long(2147483647, 0)) < 0)) {
      // Inline function 'kotlinx.io.readByteArrayImpl.<anonymous>' call
      var message = "Can't create an array of size " + _this__u8e3s4.o1h().s().toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    arraySize = _this__u8e3s4.o1h().s().l1();
  } else {
    _this__u8e3s4.q1h(toLong(size));
  }
  var array = new Int8Array(arraySize);
  readTo(_this__u8e3s4.o1h(), array);
  return array;
}
function readTo(_this__u8e3s4, sink, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? sink.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = sink.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  var offset = startIndex;
  while (offset < endIndex) {
    var bytesRead = _this__u8e3s4.m1i(sink, offset, endIndex);
    if (bytesRead === -1) {
      throw EOFException_init_$Create$_0('Source exhausted before reading ' + (endIndex - startIndex | 0) + ' bytes. ' + ('Only ' + bytesRead + ' bytes were read.'));
    }
    offset = offset + bytesRead | 0;
  }
}
function readByteArray_0(_this__u8e3s4, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  var byteCount_0 = toLong(byteCount);
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(byteCount_0.g1(new Long(0, 0)) >= 0)) {
    // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
    var message = 'byteCount (' + byteCount_0.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return readByteArrayImpl(_this__u8e3s4, byteCount);
}
function writeString(_this__u8e3s4, string, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? string.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = string.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  // Inline function 'kotlinx.io.writeToInternalBuffer' call
  // Inline function 'kotlinx.io.writeString.<anonymous>' call
  // Inline function 'kotlinx.io.commonWriteUtf8' call
  var this_0 = _this__u8e3s4.o1h();
  var i = startIndex;
  while (i < endIndex) {
    // Inline function 'kotlin.code' call
    var p0 = i;
    var this_1 = charSequenceGet(string, p0);
    var c = Char__toInt_impl_vasixd(this_1);
    if (c < 128) {
      $l$block_0: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail = this_0.u1i(1);
        // Inline function 'kotlinx.io.commonWriteUtf8.<anonymous>' call
        var ctx = get_SegmentWriteContextImpl();
        var segmentOffset = -i | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b = i + tail.z1i() | 0;
        var runLimit = Math.min(endIndex, b);
        var _unary__edvuaz = i;
        i = _unary__edvuaz + 1 | 0;
        ctx.n1k(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
        $l$loop: while (i < runLimit) {
          // Inline function 'kotlin.code' call
          var p0_0 = i;
          var this_2 = charSequenceGet(string, p0_0);
          c = Char__toInt_impl_vasixd(this_2);
          if (c >= 128)
            break $l$loop;
          var _unary__edvuaz_0 = i;
          i = _unary__edvuaz_0 + 1 | 0;
          ctx.n1k(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
        }
        var bytesWritten = i + segmentOffset | 0;
        if (bytesWritten === 1) {
          tail.v1h_1 = tail.v1h_1 + bytesWritten | 0;
          var tmp = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp.n1h_1 = this_0.n1h_1.b3(toLong(bytesWritten));
          break $l$block_0;
        }
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(0 <= bytesWritten ? bytesWritten <= tail.z1i() : false)) {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail.<anonymous>' call
          var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.z1i();
          throw IllegalStateException_init_$Create$(toString(message));
        }
        if (!(bytesWritten === 0)) {
          tail.v1h_1 = tail.v1h_1 + bytesWritten | 0;
          var tmp_0 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_0.n1h_1 = this_0.n1h_1.b3(toLong(bytesWritten));
          break $l$block_0;
        }
        if (isEmpty(tail)) {
          this_0.o1j();
        }
      }
    } else if (c < 2048) {
      $l$block_2: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_0 = this_0.u1i(2);
        // Inline function 'kotlinx.io.commonWriteUtf8.<anonymous>' call
        get_SegmentWriteContextImpl().m1k(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
        var bytesWritten_0 = 2;
        if (bytesWritten_0 === 2) {
          tail_0.v1h_1 = tail_0.v1h_1 + bytesWritten_0 | 0;
          var tmp_1 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_1.n1h_1 = this_0.n1h_1.b3(toLong(bytesWritten_0));
          break $l$block_2;
        }
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.z1i() : false)) {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail.<anonymous>' call
          var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.z1i();
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
        if (!(bytesWritten_0 === 0)) {
          tail_0.v1h_1 = tail_0.v1h_1 + bytesWritten_0 | 0;
          var tmp_2 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_2.n1h_1 = this_0.n1h_1.b3(toLong(bytesWritten_0));
          break $l$block_2;
        }
        if (isEmpty(tail_0)) {
          this_0.o1j();
        }
      }
      i = i + 1 | 0;
    } else if (c < 55296 || c > 57343) {
      $l$block_4: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_1 = this_0.u1i(3);
        // Inline function 'kotlinx.io.commonWriteUtf8.<anonymous>' call
        get_SegmentWriteContextImpl().l1k(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
        var bytesWritten_1 = 3;
        if (bytesWritten_1 === 3) {
          tail_1.v1h_1 = tail_1.v1h_1 + bytesWritten_1 | 0;
          var tmp_3 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_3.n1h_1 = this_0.n1h_1.b3(toLong(bytesWritten_1));
          break $l$block_4;
        }
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.z1i() : false)) {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail.<anonymous>' call
          var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.z1i();
          throw IllegalStateException_init_$Create$(toString(message_1));
        }
        if (!(bytesWritten_1 === 0)) {
          tail_1.v1h_1 = tail_1.v1h_1 + bytesWritten_1 | 0;
          var tmp_4 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_4.n1h_1 = this_0.n1h_1.b3(toLong(bytesWritten_1));
          break $l$block_4;
        }
        if (isEmpty(tail_1)) {
          this_0.o1j();
        }
      }
      i = i + 1 | 0;
    } else {
      var tmp_5;
      if ((i + 1 | 0) < endIndex) {
        // Inline function 'kotlin.code' call
        var p0_1 = i + 1 | 0;
        var this_3 = charSequenceGet(string, p0_1);
        tmp_5 = Char__toInt_impl_vasixd(this_3);
      } else {
        tmp_5 = 0;
      }
      var low = tmp_5;
      if (c > 56319 || !(56320 <= low ? low <= 57343 : false)) {
        this_0.h1j(63);
        i = i + 1 | 0;
      } else {
        var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
        $l$block_6: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_2 = this_0.u1i(4);
          // Inline function 'kotlinx.io.commonWriteUtf8.<anonymous>' call
          get_SegmentWriteContextImpl().k1k(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
          var bytesWritten_2 = 4;
          if (bytesWritten_2 === 4) {
            tail_2.v1h_1 = tail_2.v1h_1 + bytesWritten_2 | 0;
            var tmp_6 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_6.n1h_1 = this_0.n1h_1.b3(toLong(bytesWritten_2));
            break $l$block_6;
          }
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.z1i() : false)) {
            // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail.<anonymous>' call
            var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.z1i();
            throw IllegalStateException_init_$Create$(toString(message_2));
          }
          if (!(bytesWritten_2 === 0)) {
            tail_2.v1h_1 = tail_2.v1h_1 + bytesWritten_2 | 0;
            var tmp_7 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_7.n1h_1 = this_0.n1h_1.b3(toLong(bytesWritten_2));
            break $l$block_6;
          }
          if (isEmpty(tail_2)) {
            this_0.o1j();
          }
        }
        i = i + 2 | 0;
      }
    }
  }
  _this__u8e3s4.f1i();
}
function readString(_this__u8e3s4) {
  _this__u8e3s4.r1h(new Long(-1, 2147483647));
  return commonReadUtf8(_this__u8e3s4.o1h(), _this__u8e3s4.o1h().s());
}
function readString_0(_this__u8e3s4, byteCount) {
  _this__u8e3s4.q1h(byteCount);
  return commonReadUtf8(_this__u8e3s4.o1h(), byteCount);
}
function commonReadUtf8(_this__u8e3s4, byteCount) {
  if (byteCount.equals(new Long(0, 0)))
    return '';
  // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
  var curr = _this__u8e3s4.l1h_1;
  while (!(curr == null)) {
    // Inline function 'kotlinx.io.commonReadUtf8.<anonymous>' call
    get_SegmentReadContextImpl();
    if (toLong(curr.a1i()).g1(byteCount) >= 0) {
      var result = '';
      // Inline function 'kotlinx.io.unsafe.withData' call
      // Inline function 'kotlinx.io.commonReadUtf8.<anonymous>.<anonymous>' call
      var data = curr.e1k(true);
      var pos = curr.u1h_1;
      // Inline function 'kotlin.math.min' call
      var a = curr.v1h_1;
      var b = pos + byteCount.l1() | 0;
      var tmp$ret$0 = Math.min(a, b);
      result = commonToUtf8String(data, pos, tmp$ret$0);
      _this__u8e3s4.l1i(byteCount);
      return result;
    }
    return commonToUtf8String(readByteArray_0(_this__u8e3s4, byteCount.l1()));
  }
  // Inline function 'kotlin.error' call
  var message = 'Unreacheable';
  throw IllegalStateException_init_$Create$(toString(message));
}
function commonToUtf8String(_this__u8e3s4, beginIndex, endIndex) {
  beginIndex = beginIndex === VOID ? 0 : beginIndex;
  endIndex = endIndex === VOID ? _this__u8e3s4.length : endIndex;
  if (beginIndex < 0 || endIndex > _this__u8e3s4.length || beginIndex > endIndex) {
    throw IndexOutOfBoundsException_init_$Create$('size=' + _this__u8e3s4.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
  }
  var chars = charArray(endIndex - beginIndex | 0);
  var length = 0;
  // Inline function 'kotlinx.io.internal.processUtf16Chars' call
  var index = beginIndex;
  while (index < endIndex) {
    var b0 = _this__u8e3s4[index];
    if (b0 >= 0) {
      // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
      var _unary__edvuaz = length;
      length = _unary__edvuaz + 1 | 0;
      chars[_unary__edvuaz] = numberToChar(b0);
      index = index + 1 | 0;
      while (index < endIndex && _this__u8e3s4[index] >= 0) {
        // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
        var _unary__edvuaz_0 = index;
        index = _unary__edvuaz_0 + 1 | 0;
        var _unary__edvuaz_1 = length;
        length = _unary__edvuaz_1 + 1 | 0;
        chars[_unary__edvuaz_1] = numberToChar(_this__u8e3s4[_unary__edvuaz_0]);
      }
    } else {
      // Inline function 'kotlinx.io.shr' call
      if (b0 >> 5 === -2) {
        var tmp = index;
        var tmp$ret$1;
        $l$block_0: {
          // Inline function 'kotlinx.io.internal.process2Utf8Bytes' call
          var beginIndex_0 = index;
          if (endIndex <= (beginIndex_0 + 1 | 0)) {
            // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
            // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
            var _unary__edvuaz_2 = length;
            length = _unary__edvuaz_2 + 1 | 0;
            chars[_unary__edvuaz_2] = numberToChar(65533);
            tmp$ret$1 = 1;
            break $l$block_0;
          }
          var b0_0 = _this__u8e3s4[beginIndex_0];
          var b1 = _this__u8e3s4[beginIndex_0 + 1 | 0];
          // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
          // Inline function 'kotlinx.io.and' call
          if (!((b1 & 192) === 128)) {
            // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
            // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
            var _unary__edvuaz_3 = length;
            length = _unary__edvuaz_3 + 1 | 0;
            chars[_unary__edvuaz_3] = numberToChar(65533);
            tmp$ret$1 = 1;
            break $l$block_0;
          }
          var codePoint = 3968 ^ b1 ^ b0_0 << 6;
          if (codePoint < 128) {
            // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
            // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
            var _unary__edvuaz_4 = length;
            length = _unary__edvuaz_4 + 1 | 0;
            chars[_unary__edvuaz_4] = numberToChar(65533);
          } else {
            // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
            // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
            var _unary__edvuaz_5 = length;
            length = _unary__edvuaz_5 + 1 | 0;
            chars[_unary__edvuaz_5] = numberToChar(codePoint);
          }
          tmp$ret$1 = 2;
        }
        index = tmp + tmp$ret$1 | 0;
      } else {
        // Inline function 'kotlinx.io.shr' call
        if (b0 >> 4 === -2) {
          var tmp_0 = index;
          var tmp$ret$7;
          $l$block_4: {
            // Inline function 'kotlinx.io.internal.process3Utf8Bytes' call
            var beginIndex_1 = index;
            if (endIndex <= (beginIndex_1 + 2 | 0)) {
              // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
              // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
              var _unary__edvuaz_6 = length;
              length = _unary__edvuaz_6 + 1 | 0;
              chars[_unary__edvuaz_6] = numberToChar(65533);
              var tmp_1;
              if (endIndex <= (beginIndex_1 + 1 | 0)) {
                tmp_1 = true;
              } else {
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                tmp_1 = !((_this__u8e3s4[beginIndex_1 + 1 | 0] & 192) === 128);
              }
              if (tmp_1) {
                tmp$ret$7 = 1;
                break $l$block_4;
              } else {
                tmp$ret$7 = 2;
                break $l$block_4;
              }
            }
            var b0_1 = _this__u8e3s4[beginIndex_1];
            var b1_0 = _this__u8e3s4[beginIndex_1 + 1 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b1_0 & 192) === 128)) {
              // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
              // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
              var _unary__edvuaz_7 = length;
              length = _unary__edvuaz_7 + 1 | 0;
              chars[_unary__edvuaz_7] = numberToChar(65533);
              tmp$ret$7 = 1;
              break $l$block_4;
            }
            var b2 = _this__u8e3s4[beginIndex_1 + 2 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b2 & 192) === 128)) {
              // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
              // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
              var _unary__edvuaz_8 = length;
              length = _unary__edvuaz_8 + 1 | 0;
              chars[_unary__edvuaz_8] = numberToChar(65533);
              tmp$ret$7 = 2;
              break $l$block_4;
            }
            var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
            if (codePoint_0 < 2048) {
              // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
              // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
              var _unary__edvuaz_9 = length;
              length = _unary__edvuaz_9 + 1 | 0;
              chars[_unary__edvuaz_9] = numberToChar(65533);
            } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
              // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
              // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
              var _unary__edvuaz_10 = length;
              length = _unary__edvuaz_10 + 1 | 0;
              chars[_unary__edvuaz_10] = numberToChar(65533);
            } else {
              // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
              // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
              var _unary__edvuaz_11 = length;
              length = _unary__edvuaz_11 + 1 | 0;
              chars[_unary__edvuaz_11] = numberToChar(codePoint_0);
            }
            tmp$ret$7 = 3;
          }
          index = tmp_0 + tmp$ret$7 | 0;
        } else {
          // Inline function 'kotlinx.io.shr' call
          if (b0 >> 3 === -2) {
            var tmp_2 = index;
            var tmp$ret$15;
            $l$block_10: {
              // Inline function 'kotlinx.io.internal.process4Utf8Bytes' call
              var beginIndex_2 = index;
              if (endIndex <= (beginIndex_2 + 3 | 0)) {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                if (!(65533 === 65533)) {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_12 = length;
                  length = _unary__edvuaz_12 + 1 | 0;
                  chars[_unary__edvuaz_12] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_13 = length;
                  length = _unary__edvuaz_13 + 1 | 0;
                  chars[_unary__edvuaz_13] = numberToChar((65533 & 1023) + 56320 | 0);
                } else {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_14 = length;
                  length = _unary__edvuaz_14 + 1 | 0;
                  chars[_unary__edvuaz_14] = _Char___init__impl__6a9atx(65533);
                }
                var tmp_3;
                if (endIndex <= (beginIndex_2 + 1 | 0)) {
                  tmp_3 = true;
                } else {
                  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                  // Inline function 'kotlinx.io.and' call
                  tmp_3 = !((_this__u8e3s4[beginIndex_2 + 1 | 0] & 192) === 128);
                }
                if (tmp_3) {
                  tmp$ret$15 = 1;
                  break $l$block_10;
                } else {
                  var tmp_4;
                  if (endIndex <= (beginIndex_2 + 2 | 0)) {
                    tmp_4 = true;
                  } else {
                    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                    // Inline function 'kotlinx.io.and' call
                    tmp_4 = !((_this__u8e3s4[beginIndex_2 + 2 | 0] & 192) === 128);
                  }
                  if (tmp_4) {
                    tmp$ret$15 = 2;
                    break $l$block_10;
                  } else {
                    tmp$ret$15 = 3;
                    break $l$block_10;
                  }
                }
              }
              var b0_2 = _this__u8e3s4[beginIndex_2];
              var b1_1 = _this__u8e3s4[beginIndex_2 + 1 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b1_1 & 192) === 128)) {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                if (!(65533 === 65533)) {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_15 = length;
                  length = _unary__edvuaz_15 + 1 | 0;
                  chars[_unary__edvuaz_15] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_16 = length;
                  length = _unary__edvuaz_16 + 1 | 0;
                  chars[_unary__edvuaz_16] = numberToChar((65533 & 1023) + 56320 | 0);
                } else {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_17 = length;
                  length = _unary__edvuaz_17 + 1 | 0;
                  chars[_unary__edvuaz_17] = _Char___init__impl__6a9atx(65533);
                }
                tmp$ret$15 = 1;
                break $l$block_10;
              }
              var b2_0 = _this__u8e3s4[beginIndex_2 + 2 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b2_0 & 192) === 128)) {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                if (!(65533 === 65533)) {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_18 = length;
                  length = _unary__edvuaz_18 + 1 | 0;
                  chars[_unary__edvuaz_18] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_19 = length;
                  length = _unary__edvuaz_19 + 1 | 0;
                  chars[_unary__edvuaz_19] = numberToChar((65533 & 1023) + 56320 | 0);
                } else {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_20 = length;
                  length = _unary__edvuaz_20 + 1 | 0;
                  chars[_unary__edvuaz_20] = _Char___init__impl__6a9atx(65533);
                }
                tmp$ret$15 = 2;
                break $l$block_10;
              }
              var b3 = _this__u8e3s4[beginIndex_2 + 3 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b3 & 192) === 128)) {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                if (!(65533 === 65533)) {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_21 = length;
                  length = _unary__edvuaz_21 + 1 | 0;
                  chars[_unary__edvuaz_21] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_22 = length;
                  length = _unary__edvuaz_22 + 1 | 0;
                  chars[_unary__edvuaz_22] = numberToChar((65533 & 1023) + 56320 | 0);
                } else {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_23 = length;
                  length = _unary__edvuaz_23 + 1 | 0;
                  chars[_unary__edvuaz_23] = _Char___init__impl__6a9atx(65533);
                }
                tmp$ret$15 = 3;
                break $l$block_10;
              }
              var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
              if (codePoint_1 > 1114111) {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                if (!(65533 === 65533)) {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_24 = length;
                  length = _unary__edvuaz_24 + 1 | 0;
                  chars[_unary__edvuaz_24] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_25 = length;
                  length = _unary__edvuaz_25 + 1 | 0;
                  chars[_unary__edvuaz_25] = numberToChar((65533 & 1023) + 56320 | 0);
                } else {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_26 = length;
                  length = _unary__edvuaz_26 + 1 | 0;
                  chars[_unary__edvuaz_26] = _Char___init__impl__6a9atx(65533);
                }
              } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                if (!(65533 === 65533)) {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_27 = length;
                  length = _unary__edvuaz_27 + 1 | 0;
                  chars[_unary__edvuaz_27] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_28 = length;
                  length = _unary__edvuaz_28 + 1 | 0;
                  chars[_unary__edvuaz_28] = numberToChar((65533 & 1023) + 56320 | 0);
                } else {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_29 = length;
                  length = _unary__edvuaz_29 + 1 | 0;
                  chars[_unary__edvuaz_29] = _Char___init__impl__6a9atx(65533);
                }
              } else if (codePoint_1 < 65536) {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                if (!(65533 === 65533)) {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_30 = length;
                  length = _unary__edvuaz_30 + 1 | 0;
                  chars[_unary__edvuaz_30] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_31 = length;
                  length = _unary__edvuaz_31 + 1 | 0;
                  chars[_unary__edvuaz_31] = numberToChar((65533 & 1023) + 56320 | 0);
                } else {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_32 = length;
                  length = _unary__edvuaz_32 + 1 | 0;
                  chars[_unary__edvuaz_32] = _Char___init__impl__6a9atx(65533);
                }
              } else {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                if (!(codePoint_1 === 65533)) {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_33 = length;
                  length = _unary__edvuaz_33 + 1 | 0;
                  chars[_unary__edvuaz_33] = numberToChar((codePoint_1 >>> 10 | 0) + 55232 | 0);
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_34 = length;
                  length = _unary__edvuaz_34 + 1 | 0;
                  chars[_unary__edvuaz_34] = numberToChar((codePoint_1 & 1023) + 56320 | 0);
                } else {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_35 = length;
                  length = _unary__edvuaz_35 + 1 | 0;
                  chars[_unary__edvuaz_35] = _Char___init__impl__6a9atx(65533);
                }
              }
              tmp$ret$15 = 4;
            }
            index = tmp_2 + tmp$ret$15 | 0;
          } else {
            // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
            var _unary__edvuaz_36 = length;
            length = _unary__edvuaz_36 + 1 | 0;
            chars[_unary__edvuaz_36] = _Char___init__impl__6a9atx(65533);
            index = index + 1 | 0;
          }
        }
      }
    }
  }
  return concatToString(chars, 0, length);
}
function get_SegmentReadContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return SegmentReadContextImpl;
}
var SegmentReadContextImpl;
function get_SegmentWriteContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return SegmentWriteContextImpl;
}
var SegmentWriteContextImpl;
var BufferIterationContextImpl;
function UnsafeBufferOperations() {
}
var UnsafeBufferOperations_instance;
function UnsafeBufferOperations_getInstance() {
  return UnsafeBufferOperations_instance;
}
function SegmentReadContextImpl$1() {
}
protoOf(SegmentReadContextImpl$1).m1j = function (segment, offset) {
  return segment.f1k(offset);
};
function SegmentWriteContextImpl$1() {
}
protoOf(SegmentWriteContextImpl$1).n1k = function (segment, offset, value) {
  segment.g1k(offset, value);
};
protoOf(SegmentWriteContextImpl$1).m1k = function (segment, offset, b0, b1) {
  segment.h1k(offset, b0, b1);
};
protoOf(SegmentWriteContextImpl$1).l1k = function (segment, offset, b0, b1, b2) {
  segment.i1k(offset, b0, b1, b2);
};
protoOf(SegmentWriteContextImpl$1).k1k = function (segment, offset, b0, b1, b2, b3) {
  segment.j1k(offset, b0, b1, b2, b3);
};
function BufferIterationContextImpl$1() {
}
protoOf(BufferIterationContextImpl$1).m1j = function (segment, offset) {
  return get_SegmentReadContextImpl().m1j(segment, offset);
};
var properties_initialized_UnsafeBufferOperations_kt_2xfgoc;
function _init_properties_UnsafeBufferOperations_kt__xw75gy() {
  if (!properties_initialized_UnsafeBufferOperations_kt_2xfgoc) {
    properties_initialized_UnsafeBufferOperations_kt_2xfgoc = true;
    SegmentReadContextImpl = new SegmentReadContextImpl$1();
    SegmentWriteContextImpl = new SegmentWriteContextImpl$1();
    BufferIterationContextImpl = new BufferIterationContextImpl$1();
  }
}
function IOException_init_$Init$($this) {
  Exception_init_$Init$($this);
  IOException.call($this);
  return $this;
}
function IOException_init_$Create$() {
  var tmp = IOException_init_$Init$(objectCreate(protoOf(IOException)));
  captureStack(tmp, IOException_init_$Create$);
  return tmp;
}
function IOException_init_$Init$_0(message, $this) {
  Exception_init_$Init$_0(message, $this);
  IOException.call($this);
  return $this;
}
function IOException_init_$Create$_0(message) {
  var tmp = IOException_init_$Init$_0(message, objectCreate(protoOf(IOException)));
  captureStack(tmp, IOException_init_$Create$_0);
  return tmp;
}
function IOException_init_$Init$_1(message, cause, $this) {
  Exception_init_$Init$_1(message, cause, $this);
  IOException.call($this);
  return $this;
}
function IOException_init_$Create$_1(message, cause) {
  var tmp = IOException_init_$Init$_1(message, cause, objectCreate(protoOf(IOException)));
  captureStack(tmp, IOException_init_$Create$_1);
  return tmp;
}
function IOException() {
  captureStack(this, IOException);
}
function EOFException_init_$Init$($this) {
  IOException_init_$Init$($this);
  EOFException.call($this);
  return $this;
}
function EOFException_init_$Create$() {
  var tmp = EOFException_init_$Init$(objectCreate(protoOf(EOFException)));
  captureStack(tmp, EOFException_init_$Create$);
  return tmp;
}
function EOFException_init_$Init$_0(message, $this) {
  IOException_init_$Init$_0(message, $this);
  EOFException.call($this);
  return $this;
}
function EOFException_init_$Create$_0(message) {
  var tmp = EOFException_init_$Init$_0(message, objectCreate(protoOf(EOFException)));
  captureStack(tmp, EOFException_init_$Create$_0);
  return tmp;
}
function EOFException() {
  captureStack(this, EOFException);
}
function SegmentPool() {
  this.v1i_1 = 0;
  this.w1i_1 = 0;
}
protoOf(SegmentPool).x1i = function () {
  return Companion_instance.a1k();
};
protoOf(SegmentPool).n1j = function (segment) {
};
protoOf(SegmentPool).c1k = function () {
  return AlwaysSharedCopyTracker_getInstance();
};
var SegmentPool_instance;
function SegmentPool_getInstance() {
  return SegmentPool_instance;
}
//region block: post-declaration
protoOf(Buffer).o1i = readAtMostTo$default;
protoOf(Buffer).b1j = write$default;
protoOf(RealSource).o1i = readAtMostTo$default;
//endregion
//region block: init
Companion_instance = new Companion();
UnsafeBufferOperations_instance = new UnsafeBufferOperations();
SegmentPool_instance = new SegmentPool();
//endregion
//region block: exports
export {
  EOFException_init_$Create$_0 as EOFException_init_$Create$1rbgrvr26c6ad,
  IOException_init_$Init$_0 as IOException_init_$Init$ixjqjud2vd5a,
  IOException_init_$Create$_0 as IOException_init_$Create$2ud7rnqxh44u0,
  IOException_init_$Init$_1 as IOException_init_$Init$p8spuvlfkd8t,
  IOException_init_$Create$_1 as IOException_init_$Create$667agappkj1h,
  Buffer as Buffergs925ekssbch,
  IOException as IOException1wyutdmfe71nu,
  Source as Source1shr0ps16u4p4,
  readByteArray_0 as readByteArray1fhzfwi2j014k,
  readByteArray as readByteArray1ri21h2rciakw,
  readString as readString2nvggcfaijfhd,
  readString_0 as readString3v6duspiz33tv,
  writeString as writeString33ca4btrgctw7,
};
//endregion

//# sourceMappingURL=kotlinx-io-kotlinx-io-core.mjs.map
