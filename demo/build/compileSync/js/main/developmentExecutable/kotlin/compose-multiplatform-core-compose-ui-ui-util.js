(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-util'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-util'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-util'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-util'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ef;
  var THROW_CCE = kotlin_kotlin.$_$.ij;
  var Annotation = kotlin_kotlin.$_$.oi;
  var initMetadataForClass = kotlin_kotlin.$_$.ce;
  var VOID = kotlin_kotlin.$_$.e;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.f5;
  var floatFromBits = kotlin_kotlin.$_$.vd;
  var Long = kotlin_kotlin.$_$.bj;
  var toRawBits = kotlin_kotlin.$_$.tk;
  var toLong = kotlin_kotlin.$_$.gf;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.m1;
  var get_lastIndex = kotlin_kotlin.$_$.y9;
  var compareTo = kotlin_kotlin.$_$.qd;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var toString = kotlin_kotlin.$_$.uk;
  var Char = kotlin_kotlin.$_$.si;
  var isCharSequence = kotlin_kotlin.$_$.ne;
  var addAll = kotlin_kotlin.$_$.f7;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var Unit_getInstance = kotlin_kotlin.$_$.u5;
  var roundToInt = kotlin_kotlin.$_$.of;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ExperimentalComposeUiApi, 'ExperimentalComposeUiApi', VOID, VOID, [Annotation]);
  initMetadataForClass(InternalComposeUiApi, 'InternalComposeUiApi', VOID, VOID, [Annotation]);
  //endregion
  function ExperimentalComposeUiApi() {
  }
  protoOf(ExperimentalComposeUiApi).equals = function (other) {
    if (!(other instanceof ExperimentalComposeUiApi))
      return false;
    other instanceof ExperimentalComposeUiApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalComposeUiApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalComposeUiApi).toString = function () {
    return '@androidx.compose.ui.ExperimentalComposeUiApi(' + ')';
  };
  function InternalComposeUiApi() {
  }
  protoOf(InternalComposeUiApi).equals = function (other) {
    if (!(other instanceof InternalComposeUiApi))
      return false;
    other instanceof InternalComposeUiApi || THROW_CCE();
    return true;
  };
  protoOf(InternalComposeUiApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalComposeUiApi).toString = function () {
    return '@androidx.compose.ui.InternalComposeUiApi(' + ')';
  };
  function unpackFloat1(value) {
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = value.shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function unpackFloat2(value) {
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = value.and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function packFloats(val1, val2) {
    var v1 = toLong(toRawBits(val1));
    var v2 = toLong(toRawBits(val2));
    return v1.shl_bg8if3_k$(32).or_v7fvkl_k$(v2.and_4spn93_k$(new Long(-1, 0)));
  }
  function unpackInt1(value) {
    return value.shr_9fl3wl_k$(32).toInt_1tsl84_k$();
  }
  function packInts(val1, val2) {
    return toLong(val1).shl_bg8if3_k$(32).or_v7fvkl_k$(toLong(val2).and_4spn93_k$(new Long(-1, 0)));
  }
  function unpackInt2(value) {
    return value.and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
  }
  function unpackAbsFloat1(value) {
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = value.shr_9fl3wl_k$(32).and_4spn93_k$(new Long(2147483647, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function unpackAbsFloat2(value) {
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = value.and_4spn93_k$(new Long(2147483647, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function fastForEach(_this__u8e3s4, action) {
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        action(item);
      }
       while (inductionVariable <= last);
  }
  function fastFilter(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        if (predicate(item)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_utx5q5_k$(item);
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastAny(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
        if (predicate(item))
          return true;
      }
       while (inductionVariable <= last);
    return false;
  }
  function fastMap(_this__u8e3s4, transform) {
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var element = transform(item);
        target.add_utx5q5_k$(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastFold(_this__u8e3s4, initial, operation) {
    // Inline function 'kotlin.contracts.contract' call
    var accumulator = initial;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastFold.<anonymous>' call
        accumulator = operation(accumulator, item);
      }
       while (inductionVariable <= last);
    return accumulator;
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastForEachIndexed(_this__u8e3s4, action) {
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        action(index, item);
      }
       while (inductionVariable <= last);
  }
  function fastForEachReversed(_this__u8e3s4, action) {
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        action(item);
      }
       while (0 <= inductionVariable);
  }
  function fastMaxOfOrNull(_this__u8e3s4, selector) {
    // Inline function 'kotlin.contracts.contract' call
    if (_this__u8e3s4.isEmpty_y1axqb_k$())
      return null;
    var maxValue = selector(_this__u8e3s4.get_c1px32_k$(0));
    var inductionVariable = 1;
    var last = get_lastIndex(_this__u8e3s4);
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var v = selector(_this__u8e3s4.get_c1px32_k$(i));
        if (compareTo(v, maxValue) > 0)
          maxValue = v;
      }
       while (!(i === last));
    return maxValue;
  }
  function fastFirstOrNull(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastFirstOrNull.<anonymous>' call
        if (predicate(item))
          return item;
      }
       while (inductionVariable <= last);
    return null;
  }
  function fastSumBy(_this__u8e3s4, selector) {
    // Inline function 'kotlin.contracts.contract' call
    var sum = 0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastSumBy.<anonymous>' call
        sum = sum + selector(item) | 0;
      }
       while (inductionVariable <= last);
    return sum;
  }
  function fastFirst(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastFirst.<anonymous>' call
        if (predicate(item))
          return item;
      }
       while (inductionVariable <= last);
    throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.append_jgojdo_k$(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.get_c1px32_k$(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.append_jgojdo_k$(separator);
        }
        if (limit < 0 || count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 && count > limit) {
      buffer.append_jgojdo_k$(truncated);
    }
    buffer.append_jgojdo_k$(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.append_jgojdo_k$(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.append_jgojdo_k$(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.append_am5a4z_k$(element.value_1);
        } else {
          _this__u8e3s4.append_jgojdo_k$(toString(element));
        }
      }
    }
  }
  function fastFlatMap(_this__u8e3s4, transform) {
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastFlatMap.<anonymous>' call
        var list = transform(item);
        addAll(target, list);
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastMaxBy(_this__u8e3s4, selector) {
    // Inline function 'kotlin.contracts.contract' call
    if (_this__u8e3s4.isEmpty_y1axqb_k$())
      return null;
    var maxElem = _this__u8e3s4.get_c1px32_k$(0);
    var maxValue = selector(maxElem);
    var inductionVariable = 1;
    var last = get_lastIndex(_this__u8e3s4);
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var e = _this__u8e3s4.get_c1px32_k$(i);
        var v = selector(e);
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (!(i === last));
    return maxElem;
  }
  function fastDistinctBy(_this__u8e3s4, selector) {
    // Inline function 'kotlin.contracts.contract' call
    var set = HashSet_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    var target = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastDistinctBy.<anonymous>' call
        var key = selector(item);
        if (set.add_utx5q5_k$(key)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_utx5q5_k$(item);
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastAll(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastAll.<anonymous>' call
        if (!predicate(item))
          return false;
      }
       while (inductionVariable <= last);
    return true;
  }
  function fastMapNotNull(_this__u8e3s4, transform) {
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMapNotNull.<anonymous>' call
        var tmp0_safe_receiver = transform(item);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.ui.util.fastMapNotNull.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_utx5q5_k$(tmp0_safe_receiver);
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastCoerceIn(_this__u8e3s4, minimumValue, maximumValue) {
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
    return this_0 > maximumValue ? maximumValue : this_0;
  }
  function fastCbrt(x) {
    var v = toLong(toRawBits(x)).and_4spn93_k$(new Long(-1, 1));
    // Inline function 'kotlin.Long.div' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = 709952852 + v.div_jun7gj_k$(toLong(3)).toInt_1tsl84_k$() | 0;
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var estimate = floatFromBits(bits);
    estimate = estimate - (estimate - x / (estimate * estimate)) * (1.0 / 3.0);
    estimate = estimate - (estimate - x / (estimate * estimate)) * (1.0 / 3.0);
    return estimate;
  }
  function fastMinOf(a, b, c, d) {
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'kotlin.comparisons.minOf' call
    var b_0 = Math.min(c, d);
    // Inline function 'kotlin.comparisons.minOf' call
    var b_1 = Math.min(b, b_0);
    return Math.min(a, b_1);
  }
  function fastMaxOf(a, b, c, d) {
    // Inline function 'kotlin.comparisons.maxOf' call
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_0 = Math.max(c, d);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_1 = Math.max(b, b_0);
    return Math.max(a, b_1);
  }
  function lerp(start, stop, fraction) {
    return (1 - fraction) * start + fraction * stop;
  }
  function lerp_0(start, stop, fraction) {
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_0 = (stop - start | 0) * fraction;
    return start + roundToInt(this_0) | 0;
  }
  function fastCoerceIn_0(_this__u8e3s4, minimumValue, maximumValue) {
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
    return this_0 > maximumValue ? maximumValue : this_0;
  }
  function fastCoerceAtMost(_this__u8e3s4, maximumValue) {
    return _this__u8e3s4 > maximumValue ? maximumValue : _this__u8e3s4;
  }
  function fastCoerceAtLeast(_this__u8e3s4, minimumValue) {
    return _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
  }
  function fastCoerceAtMost_0(_this__u8e3s4, maximumValue) {
    return _this__u8e3s4 > maximumValue ? maximumValue : _this__u8e3s4;
  }
  function fastCoerceAtLeast_0(_this__u8e3s4, minimumValue) {
    return _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
  }
  function floatFromBits_0(bits) {
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function fastRoundToInt(_this__u8e3s4) {
    // Inline function 'kotlin.math.roundToInt' call
    return roundToInt(_this__u8e3s4);
  }
  function fastRoundToInt_0(_this__u8e3s4) {
    return roundToInt(_this__u8e3s4);
  }
  function trace(sectionName, block) {
    return block();
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = fastCbrt;
  _.$_$.b = fastJoinToString;
  _.$_$.c = lerp;
  _.$_$.d = lerp_0;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-util.js.map
