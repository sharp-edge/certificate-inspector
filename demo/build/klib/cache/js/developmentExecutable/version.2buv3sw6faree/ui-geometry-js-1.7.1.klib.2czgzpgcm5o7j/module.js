(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-util.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-geometry'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-geometry'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-geometry'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-geometry'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-util']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_util) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.f5;
  var floatFromBits = kotlin_kotlin.$_$.vd;
  var Long = kotlin_kotlin.$_$.bj;
  var VOID = kotlin_kotlin.$_$.e;
  var protoOf = kotlin_kotlin.$_$.ef;
  var initMetadataForCompanion = kotlin_kotlin.$_$.de;
  var THROW_CCE = kotlin_kotlin.$_$.ij;
  var initMetadataForClass = kotlin_kotlin.$_$.ce;
  var toRawBits = kotlin_kotlin.$_$.tk;
  var toLong = kotlin_kotlin.$_$.gf;
  var isNaN_0 = kotlin_kotlin.$_$.fk;
  var isInfinite = kotlin_kotlin.$_$.ek;
  var numberToInt = kotlin_kotlin.$_$.bf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var Unit_getInstance = kotlin_kotlin.$_$.u5;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var isFinite = kotlin_kotlin.$_$.dk;
  var getNumberHashCode = kotlin_kotlin.$_$.yd;
  var equals = kotlin_kotlin.$_$.td;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(CornerRadius, 'CornerRadius');
  initMetadataForClass(MutableRect, 'MutableRect');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(Offset, 'Offset');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Rect, 'Rect');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(RoundRect, 'RoundRect');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Size, 'Size');
  //endregion
  function _CornerRadius___init__impl__ojmabe(packedValue) {
    return packedValue;
  }
  function _CornerRadius___get_packedValue__impl__okv4jq($this) {
    return $this;
  }
  function _CornerRadius___get_x__impl__1594cn($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _CornerRadius___get_packedValue__impl__okv4jq($this).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function _CornerRadius___get_y__impl__tyvleu($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _CornerRadius___get_packedValue__impl__okv4jq($this).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function CornerRadius__component1_impl_6k47wy($this) {
    return _CornerRadius___get_x__impl__1594cn($this);
  }
  function CornerRadius__component2_impl_715ub5($this) {
    return _CornerRadius___get_y__impl__tyvleu($this);
  }
  function CornerRadius__copy_impl_mqhhap($this, x, y) {
    return CornerRadius_0(x, y);
  }
  function CornerRadius__copy$default_impl_tg6w18($this, x, y, $super) {
    x = x === VOID ? _CornerRadius___get_x__impl__1594cn($this) : x;
    y = y === VOID ? _CornerRadius___get_y__impl__tyvleu($this) : y;
    var tmp;
    if ($super === VOID) {
      tmp = CornerRadius__copy_impl_mqhhap($this, x, y);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new CornerRadius(tmp_0)).copy_6knqu7_k$.call(new CornerRadius($this), x, y).packedValue_1;
    }
    return tmp;
  }
  function Companion() {
    Companion_instance = this;
    this.Zero_1 = CornerRadius_0(0.0);
  }
  protoOf(Companion).get_Zero_r4zx17_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CornerRadius__unaryMinus_impl_li2ovv($this) {
    return CornerRadius_0(-_CornerRadius___get_x__impl__1594cn($this), -_CornerRadius___get_y__impl__tyvleu($this));
  }
  function CornerRadius__minus_impl_dt91p8($this, other) {
    return CornerRadius_0(_CornerRadius___get_x__impl__1594cn($this) - _CornerRadius___get_x__impl__1594cn(other), _CornerRadius___get_y__impl__tyvleu($this) - _CornerRadius___get_y__impl__tyvleu(other));
  }
  function CornerRadius__plus_impl_qmk9is($this, other) {
    return CornerRadius_0(_CornerRadius___get_x__impl__1594cn($this) + _CornerRadius___get_x__impl__1594cn(other), _CornerRadius___get_y__impl__tyvleu($this) + _CornerRadius___get_y__impl__tyvleu(other));
  }
  function CornerRadius__times_impl_g3rlyq($this, operand) {
    return CornerRadius_0(_CornerRadius___get_x__impl__1594cn($this) * operand, _CornerRadius___get_y__impl__tyvleu($this) * operand);
  }
  function CornerRadius__div_impl_bxtjdv($this, operand) {
    return CornerRadius_0(_CornerRadius___get_x__impl__1594cn($this) / operand, _CornerRadius___get_y__impl__tyvleu($this) / operand);
  }
  function CornerRadius__toString_impl_m3k4zq($this) {
    var tmp;
    if (_CornerRadius___get_x__impl__1594cn($this) === _CornerRadius___get_y__impl__tyvleu($this)) {
      tmp = 'CornerRadius.circular(' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn($this), 1) + ')';
    } else {
      tmp = 'CornerRadius.elliptical(' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn($this), 1) + ', ' + toStringAsFixed(_CornerRadius___get_y__impl__tyvleu($this), 1) + ')';
    }
    return tmp;
  }
  function CornerRadius__hashCode_impl_r6e06j($this) {
    return $this.hashCode();
  }
  function CornerRadius__equals_impl_776hdl($this, other) {
    if (!(other instanceof CornerRadius))
      return false;
    var tmp0_other_with_cast = other instanceof CornerRadius ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function CornerRadius(packedValue) {
    Companion_getInstance();
    this.packedValue_1 = packedValue;
  }
  protoOf(CornerRadius).toString = function () {
    return CornerRadius__toString_impl_m3k4zq(this.packedValue_1);
  };
  protoOf(CornerRadius).hashCode = function () {
    return CornerRadius__hashCode_impl_r6e06j(this.packedValue_1);
  };
  protoOf(CornerRadius).equals = function (other) {
    return CornerRadius__equals_impl_776hdl(this.packedValue_1, other);
  };
  function CornerRadius_0(x, y) {
    y = y === VOID ? x : y;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(x));
    var v2 = toLong(toRawBits(y));
    var tmp$ret$0 = v1.shl_bg8if3_k$(32).or_v7fvkl_k$(v2.and_4spn93_k$(new Long(-1, 0)));
    return _CornerRadius___init__impl__ojmabe(tmp$ret$0);
  }
  function toStringAsFixed(_this__u8e3s4, digits) {
    if (isNaN_0(_this__u8e3s4))
      return 'NaN';
    if (isInfinite(_this__u8e3s4))
      return _this__u8e3s4 < 0.0 ? '-Infinity' : 'Infinity';
    // Inline function 'kotlin.math.max' call
    var clampedDigits = Math.max(digits, 0);
    // Inline function 'kotlin.math.pow' call
    var pow = Math.pow(10.0, clampedDigits);
    var shifted = _this__u8e3s4 * pow;
    var decimal = shifted - numberToInt(shifted);
    var tmp;
    if (decimal >= 0.5) {
      tmp = numberToInt(shifted) + 1 | 0;
    } else {
      tmp = numberToInt(shifted);
    }
    var roundedShifted = tmp;
    var rounded = roundedShifted / pow;
    var tmp_0;
    if (clampedDigits > 0) {
      tmp_0 = rounded.toString();
    } else {
      tmp_0 = numberToInt(rounded).toString();
    }
    return tmp_0;
  }
  function get_UnspecifiedPackedFloats() {
    return UnspecifiedPackedFloats;
  }
  var UnspecifiedPackedFloats;
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function get_DualFloatSignBit() {
    return DualFloatSignBit;
  }
  var DualFloatSignBit;
  function get_DualFloatInfinityBase() {
    return DualFloatInfinityBase;
  }
  var DualFloatInfinityBase;
  function get_DualUnsignedFloatMask() {
    return DualUnsignedFloatMask;
  }
  var DualUnsignedFloatMask;
  function get_Uint64High32() {
    return Uint64High32;
  }
  var Uint64High32;
  function get_DualFirstNaN() {
    return DualFirstNaN;
  }
  var DualFirstNaN;
  function get_Uint64Low32() {
    return Uint64Low32;
  }
  var Uint64Low32;
  function MutableRect(left, top, right, bottom) {
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
  }
  protoOf(MutableRect).set_left_bnynok_k$ = function (_set____db54di) {
    this.left_1 = _set____db54di;
  };
  protoOf(MutableRect).get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  protoOf(MutableRect).set_top_q4a9n4_k$ = function (_set____db54di) {
    this.top_1 = _set____db54di;
  };
  protoOf(MutableRect).get_top_18ivbo_k$ = function () {
    return this.top_1;
  };
  protoOf(MutableRect).set_right_ihmog9_k$ = function (_set____db54di) {
    this.right_1 = _set____db54di;
  };
  protoOf(MutableRect).get_right_ixz7xv_k$ = function () {
    return this.right_1;
  };
  protoOf(MutableRect).set_bottom_hrdqf4_k$ = function (_set____db54di) {
    this.bottom_1 = _set____db54di;
  };
  protoOf(MutableRect).get_bottom_bj8ras_k$ = function () {
    return this.bottom_1;
  };
  protoOf(MutableRect).get_width_j0q4yl_k$ = function () {
    return this.right_1 - this.left_1;
  };
  protoOf(MutableRect).get_height_e7t92o_k$ = function () {
    return this.bottom_1 - this.top_1;
  };
  protoOf(MutableRect).get_size_cxx1ym_k$ = function () {
    // Inline function 'androidx.compose.ui.geometry.MutableRect.width' call
    var tmp = this.right_1 - this.left_1;
    // Inline function 'androidx.compose.ui.geometry.MutableRect.height' call
    var tmp$ret$1 = this.bottom_1 - this.top_1;
    return Size_0(tmp, tmp$ret$1);
  };
  protoOf(MutableRect).get_isEmpty_zauvru_k$ = function () {
    return this.left_1 >= this.right_1 || this.top_1 >= this.bottom_1;
  };
  protoOf(MutableRect).intersect_ye2nrj_k$ = function (left, top, right, bottom) {
    var tmp = this;
    // Inline function 'kotlin.math.max' call
    var b = this.left_1;
    tmp.left_1 = Math.max(left, b);
    var tmp_0 = this;
    // Inline function 'kotlin.math.max' call
    var b_0 = this.top_1;
    tmp_0.top_1 = Math.max(top, b_0);
    var tmp_1 = this;
    // Inline function 'kotlin.math.min' call
    var b_1 = this.right_1;
    tmp_1.right_1 = Math.min(right, b_1);
    var tmp_2 = this;
    // Inline function 'kotlin.math.min' call
    var b_2 = this.bottom_1;
    tmp_2.bottom_1 = Math.min(bottom, b_2);
  };
  protoOf(MutableRect).contains_obi4ph_k$ = function (offset) {
    return _Offset___get_x__impl__xvi35n(offset) >= this.left_1 && _Offset___get_x__impl__xvi35n(offset) < this.right_1 && _Offset___get_y__impl__8bzhra(offset) >= this.top_1 && _Offset___get_y__impl__8bzhra(offset) < this.bottom_1;
  };
  protoOf(MutableRect).set_7tauzy_k$ = function (left, top, right, bottom) {
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
  };
  protoOf(MutableRect).toString = function () {
    return 'MutableRect(' + (toStringAsFixed(this.left_1, 1) + ', ') + (toStringAsFixed(this.top_1, 1) + ', ') + (toStringAsFixed(this.right_1, 1) + ', ') + (toStringAsFixed(this.bottom_1, 1) + ')');
  };
  function toRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.left_1, _this__u8e3s4.top_1, _this__u8e3s4.right_1, _this__u8e3s4.bottom_1);
  }
  function _Offset___init__impl__c168vi(packedValue) {
    return packedValue;
  }
  function _Offset___get_packedValue__impl__xh2k8q($this) {
    return $this;
  }
  function _Offset___get_x__impl__xvi35n($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function _Offset___get_y__impl__8bzhra($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function Offset__component1_impl_qn5q2($this) {
    return _Offset___get_x__impl__xvi35n($this);
  }
  function Offset__component2_impl_9ljbv($this) {
    return _Offset___get_y__impl__8bzhra($this);
  }
  function Offset__copy_impl_9gtypn($this, x, y) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(x));
    var v2 = toLong(toRawBits(y));
    var tmp$ret$6 = v1.shl_bg8if3_k$(32).or_v7fvkl_k$(v2.and_4spn93_k$(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$6);
  }
  function Offset__copy$default_impl_bmwjg8($this, x, y, $super) {
    var tmp;
    if (x === VOID) {
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = _Offset___get_packedValue__impl__xh2k8q($this).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp = floatFromBits(bits);
    } else {
      tmp = x;
    }
    x = tmp;
    var tmp_0;
    if (y === VOID) {
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = _Offset___get_packedValue__impl__xh2k8q($this).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp_0 = floatFromBits(bits_0);
    } else {
      tmp_0 = y;
    }
    y = tmp_0;
    var tmp_1;
    if ($super === VOID) {
      tmp_1 = Offset__copy_impl_9gtypn($this, x, y);
    } else {
      var tmp_2 = $super;
      tmp_1 = (tmp_2 == null ? null : new Offset(tmp_2)).copy_e8mbcb_k$.call(new Offset($this), x, y).packedValue_1;
    }
    return tmp_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.Zero_1 = _Offset___init__impl__c168vi(new Long(0, 0));
    this.Infinite_1 = _Offset___init__impl__c168vi(new Long(2139095040, 2139095040));
    this.Unspecified_1 = _Offset___init__impl__c168vi(new Long(2143289344, 2143289344));
  }
  protoOf(Companion_0).get_Zero_k6n73t_k$ = function () {
    return this.Zero_1;
  };
  protoOf(Companion_0).get_Infinite_g7y28d_k$ = function () {
    return this.Infinite_1;
  };
  protoOf(Companion_0).get_Unspecified_gis8po_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Offset__isValid_impl_z7krde($this) {
    var v = _Offset___get_packedValue__impl__xh2k8q($this).and_4spn93_k$(new Long(2147483647, 2147483647));
    return v.minus_mfbszm_k$(new Long(2139095041, 2139095041)).and_4spn93_k$(v.inv_28kx_k$()).and_4spn93_k$(new Long(-2147483648, -2147483648)).equals(new Long(-2147483648, -2147483648));
  }
  function Offset__getDistance_impl_pclvxn($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q($this).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var y = floatFromBits(bits_0);
    // Inline function 'kotlin.math.sqrt' call
    var x_0 = x * x + y * y;
    return Math.sqrt(x_0);
  }
  function Offset__getDistanceSquared_impl_97mhi6($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q($this).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var y = floatFromBits(bits_0);
    return x * x + y * y;
  }
  function Offset__unaryMinus_impl_ssu2iv($this) {
    return _Offset___init__impl__c168vi(_Offset___get_packedValue__impl__xh2k8q($this).xor_qzz94j_k$(new Long(-2147483648, -2147483648)));
  }
  function Offset__minus_impl_hoj2c0($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q(other).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp4 = tmp - floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = _Offset___get_packedValue__impl__xh2k8q($this).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = _Offset___get_packedValue__impl__xh2k8q(other).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_0 - floatFromBits(bits_2);
    var v1 = toLong(toRawBits(tmp4));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$12 = v1.shl_bg8if3_k$(32).or_v7fvkl_k$(v2.and_4spn93_k$(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$12);
  }
  function Offset__plus_impl_c78cg0($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q(other).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp4 = tmp + floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = _Offset___get_packedValue__impl__xh2k8q($this).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = _Offset___get_packedValue__impl__xh2k8q(other).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_0 + floatFromBits(bits_2);
    var v1 = toLong(toRawBits(tmp4));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$12 = v1.shl_bg8if3_k$(32).or_v7fvkl_k$(v2.and_4spn93_k$(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$12);
  }
  function Offset__times_impl_jz1mli($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp2 = floatFromBits(bits) * operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q($this).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) * operand;
    var v1 = toLong(toRawBits(tmp2));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$6 = v1.shl_bg8if3_k$(32).or_v7fvkl_k$(v2.and_4spn93_k$(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$6);
  }
  function Offset__div_impl_eaxtg1($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp2 = floatFromBits(bits) / operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q($this).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) / operand;
    var v1 = toLong(toRawBits(tmp2));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$6 = v1.shl_bg8if3_k$(32).or_v7fvkl_k$(v2.and_4spn93_k$(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$6);
  }
  function Offset__rem_impl_swr6wq($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp2 = floatFromBits(bits) % operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q($this).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) % operand;
    var v1 = toLong(toRawBits(tmp2));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$6 = v1.shl_bg8if3_k$(32).or_v7fvkl_k$(v2.and_4spn93_k$(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$6);
  }
  function Offset__toString_impl_4ffbou($this) {
    var tmp;
    if (get_isSpecified($this)) {
      tmp = 'Offset(' + toStringAsFixed(_Offset___get_x__impl__xvi35n($this), 1) + ', ' + toStringAsFixed(_Offset___get_y__impl__8bzhra($this), 1) + ')';
    } else {
      tmp = 'Offset.Unspecified';
    }
    return tmp;
  }
  function Offset__hashCode_impl_hbql41($this) {
    return $this.hashCode();
  }
  function Offset__equals_impl_exf2yj($this, other) {
    if (!(other instanceof Offset))
      return false;
    var tmp0_other_with_cast = other instanceof Offset ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Offset(packedValue) {
    Companion_getInstance_0();
    this.packedValue_1 = packedValue;
  }
  protoOf(Offset).toString = function () {
    return Offset__toString_impl_4ffbou(this.packedValue_1);
  };
  protoOf(Offset).hashCode = function () {
    return Offset__hashCode_impl_hbql41(this.packedValue_1);
  };
  protoOf(Offset).equals = function (other) {
    return Offset__equals_impl_exf2yj(this.packedValue_1, other);
  };
  function Offset_0(x, y) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(x));
    var v2 = toLong(toRawBits(y));
    var tmp$ret$0 = v1.shl_bg8if3_k$(32).or_v7fvkl_k$(v2.and_4spn93_k$(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  }
  function get_isFinite(_this__u8e3s4) {
    var v = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).and_4spn93_k$(new Long(2139095040, 2139095040)).xor_qzz94j_k$(new Long(2139095040, 2139095040));
    return v.minus_mfbszm_k$(new Long(1, 1)).and_4spn93_k$(v.inv_28kx_k$()).and_4spn93_k$(new Long(-2147483648, -2147483648)).equals(new Long(0, 0));
  }
  function get_isSpecified(_this__u8e3s4) {
    return !_Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).and_4spn93_k$(new Long(2147483647, 2147483647)).equals(new Long(2143289344, 2143289344));
  }
  function get_isUnspecified(_this__u8e3s4) {
    return _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).and_4spn93_k$(new Long(2147483647, 2147483647)).equals(new Long(2143289344, 2143289344));
  }
  function takeOrElse(_this__u8e3s4, block) {
    return get_isSpecified(_this__u8e3s4) ? _this__u8e3s4 : block().packedValue_1;
  }
  function lerp_0(start, stop, fraction) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q(start).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q(stop).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$5 = floatFromBits(bits_0);
    var tmp4 = lerp(tmp, tmp$ret$5, fraction);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = _Offset___get_packedValue__impl__xh2k8q(start).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = _Offset___get_packedValue__impl__xh2k8q(stop).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$11 = floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = lerp(tmp_0, tmp$ret$11, fraction);
    var v1 = toLong(toRawBits(tmp4));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$12 = v1.shl_bg8if3_k$(32).or_v7fvkl_k$(v2.and_4spn93_k$(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$12);
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.Zero_1 = new Rect(0.0, 0.0, 0.0, 0.0);
  }
  protoOf(Companion_1).get_Zero_woe9zl_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Rect(left, top, right, bottom) {
    Companion_getInstance_1();
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
  }
  protoOf(Rect).get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  protoOf(Rect).get_top_18ivbo_k$ = function () {
    return this.top_1;
  };
  protoOf(Rect).get_right_ixz7xv_k$ = function () {
    return this.right_1;
  };
  protoOf(Rect).get_bottom_bj8ras_k$ = function () {
    return this.bottom_1;
  };
  protoOf(Rect).get_width_j0q4yl_k$ = function () {
    return this.right_1 - this.left_1;
  };
  protoOf(Rect).get_height_e7t92o_k$ = function () {
    return this.bottom_1 - this.top_1;
  };
  protoOf(Rect).get_size_cxx1ym_k$ = function () {
    return Size_0(this.get_width_j0q4yl_k$(), this.get_height_e7t92o_k$());
  };
  protoOf(Rect).get_isInfinite_uffwnt_k$ = function () {
    return this.left_1 >= FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() || this.top_1 >= FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() || this.right_1 >= FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() || this.bottom_1 >= FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$();
  };
  protoOf(Rect).get_isFinite_taph6q_k$ = function () {
    return isFinite(this.left_1) && isFinite(this.top_1) && isFinite(this.right_1) && isFinite(this.bottom_1);
  };
  protoOf(Rect).get_isEmpty_zauvru_k$ = function () {
    return this.left_1 >= this.right_1 || this.top_1 >= this.bottom_1;
  };
  protoOf(Rect).translate_e972jg_k$ = function (offset) {
    return new Rect(this.left_1 + _Offset___get_x__impl__xvi35n(offset), this.top_1 + _Offset___get_y__impl__8bzhra(offset), this.right_1 + _Offset___get_x__impl__xvi35n(offset), this.bottom_1 + _Offset___get_y__impl__8bzhra(offset));
  };
  protoOf(Rect).translate_k2k08i_k$ = function (translateX, translateY) {
    return new Rect(this.left_1 + translateX, this.top_1 + translateY, this.right_1 + translateX, this.bottom_1 + translateY);
  };
  protoOf(Rect).inflate_rvluy7_k$ = function (delta) {
    return new Rect(this.left_1 - delta, this.top_1 - delta, this.right_1 + delta, this.bottom_1 + delta);
  };
  protoOf(Rect).deflate_e6rdlf_k$ = function (delta) {
    return this.inflate_rvluy7_k$(-delta);
  };
  protoOf(Rect).intersect_aqxwu2_k$ = function (other) {
    var tmp0 = this.left_1;
    // Inline function 'kotlin.math.max' call
    var b = other.left_1;
    var tmp = Math.max(tmp0, b);
    var tmp2 = this.top_1;
    // Inline function 'kotlin.math.max' call
    var b_0 = other.top_1;
    var tmp_0 = Math.max(tmp2, b_0);
    var tmp4 = this.right_1;
    // Inline function 'kotlin.math.min' call
    var b_1 = other.right_1;
    var tmp_1 = Math.min(tmp4, b_1);
    var tmp6 = this.bottom_1;
    // Inline function 'kotlin.math.min' call
    var b_2 = other.bottom_1;
    var tmp$ret$3 = Math.min(tmp6, b_2);
    return new Rect(tmp, tmp_0, tmp_1, tmp$ret$3);
  };
  protoOf(Rect).intersect_kpsggx_k$ = function (otherLeft, otherTop, otherRight, otherBottom) {
    // Inline function 'kotlin.math.max' call
    var a = this.left_1;
    var tmp = Math.max(a, otherLeft);
    // Inline function 'kotlin.math.max' call
    var a_0 = this.top_1;
    var tmp_0 = Math.max(a_0, otherTop);
    // Inline function 'kotlin.math.min' call
    var a_1 = this.right_1;
    var tmp_1 = Math.min(a_1, otherRight);
    // Inline function 'kotlin.math.min' call
    var a_2 = this.bottom_1;
    var tmp$ret$3 = Math.min(a_2, otherBottom);
    return new Rect(tmp, tmp_0, tmp_1, tmp$ret$3);
  };
  protoOf(Rect).overlaps_l18ztf_k$ = function (other) {
    if (this.right_1 <= other.left_1 || other.right_1 <= this.left_1)
      return false;
    if (this.bottom_1 <= other.top_1 || other.bottom_1 <= this.top_1)
      return false;
    return true;
  };
  protoOf(Rect).get_minDimension_t9b43n_k$ = function () {
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = this.get_width_j0q4yl_k$();
    var tmp2 = Math.abs(this_0);
    // Inline function 'kotlin.math.absoluteValue' call
    var this_1 = this.get_height_e7t92o_k$();
    // Inline function 'kotlin.math.min' call
    var b = Math.abs(this_1);
    return Math.min(tmp2, b);
  };
  protoOf(Rect).get_maxDimension_xxccdn_k$ = function () {
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = this.get_width_j0q4yl_k$();
    var tmp2 = Math.abs(this_0);
    // Inline function 'kotlin.math.absoluteValue' call
    var this_1 = this.get_height_e7t92o_k$();
    // Inline function 'kotlin.math.max' call
    var b = Math.abs(this_1);
    return Math.max(tmp2, b);
  };
  protoOf(Rect).get_topLeft_ypvrd5_k$ = function () {
    return Offset_0(this.left_1, this.top_1);
  };
  protoOf(Rect).get_topCenter_rf4up5_k$ = function () {
    return Offset_0(this.left_1 + this.get_width_j0q4yl_k$() / 2.0, this.top_1);
  };
  protoOf(Rect).get_topRight_tgvyuy_k$ = function () {
    return Offset_0(this.right_1, this.top_1);
  };
  protoOf(Rect).get_centerLeft_9neret_k$ = function () {
    return Offset_0(this.left_1, this.top_1 + this.get_height_e7t92o_k$() / 2.0);
  };
  protoOf(Rect).get_center_dcexec_k$ = function () {
    return Offset_0(this.left_1 + this.get_width_j0q4yl_k$() / 2.0, this.top_1 + this.get_height_e7t92o_k$() / 2.0);
  };
  protoOf(Rect).get_centerRight_fpayl0_k$ = function () {
    return Offset_0(this.right_1, this.top_1 + this.get_height_e7t92o_k$() / 2.0);
  };
  protoOf(Rect).get_bottomLeft_y6q4k1_k$ = function () {
    return Offset_0(this.left_1, this.bottom_1);
  };
  protoOf(Rect).get_bottomCenter_tgdpzz_k$ = function () {
    return Offset_0(this.left_1 + this.get_width_j0q4yl_k$() / 2.0, this.bottom_1);
  };
  protoOf(Rect).get_bottomRight_p2dg1q_k$ = function () {
    return Offset_0(this.right_1, this.bottom_1);
  };
  protoOf(Rect).contains_obi4ph_k$ = function (offset) {
    return _Offset___get_x__impl__xvi35n(offset) >= this.left_1 && _Offset___get_x__impl__xvi35n(offset) < this.right_1 && _Offset___get_y__impl__8bzhra(offset) >= this.top_1 && _Offset___get_y__impl__8bzhra(offset) < this.bottom_1;
  };
  protoOf(Rect).toString = function () {
    return 'Rect.fromLTRB(' + (toStringAsFixed(this.left_1, 1) + ', ') + (toStringAsFixed(this.top_1, 1) + ', ') + (toStringAsFixed(this.right_1, 1) + ', ') + (toStringAsFixed(this.bottom_1, 1) + ')');
  };
  protoOf(Rect).component1_7eebsc_k$ = function () {
    return this.left_1;
  };
  protoOf(Rect).component2_7eebsb_k$ = function () {
    return this.top_1;
  };
  protoOf(Rect).component3_7eebsa_k$ = function () {
    return this.right_1;
  };
  protoOf(Rect).component4_7eebs9_k$ = function () {
    return this.bottom_1;
  };
  protoOf(Rect).copy_egrqb9_k$ = function (left, top, right, bottom) {
    return new Rect(left, top, right, bottom);
  };
  protoOf(Rect).copy$default_g2jcm4_k$ = function (left, top, right, bottom, $super) {
    left = left === VOID ? this.left_1 : left;
    top = top === VOID ? this.top_1 : top;
    right = right === VOID ? this.right_1 : right;
    bottom = bottom === VOID ? this.bottom_1 : bottom;
    return $super === VOID ? this.copy_egrqb9_k$(left, top, right, bottom) : $super.copy_egrqb9_k$.call(this, left, top, right, bottom);
  };
  protoOf(Rect).hashCode = function () {
    var result = getNumberHashCode(this.left_1);
    result = imul(result, 31) + getNumberHashCode(this.top_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.right_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.bottom_1) | 0;
    return result;
  };
  protoOf(Rect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rect))
      return false;
    var tmp0_other_with_cast = other instanceof Rect ? other : THROW_CCE();
    if (!equals(this.left_1, tmp0_other_with_cast.left_1))
      return false;
    if (!equals(this.top_1, tmp0_other_with_cast.top_1))
      return false;
    if (!equals(this.right_1, tmp0_other_with_cast.right_1))
      return false;
    if (!equals(this.bottom_1, tmp0_other_with_cast.bottom_1))
      return false;
    return true;
  };
  function Rect_0(offset, size) {
    return new Rect(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset), _Offset___get_x__impl__xvi35n(offset) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(offset) + _Size___get_height__impl__a04p02(size));
  }
  function Rect_1(topLeft, bottomRight) {
    return new Rect(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(bottomRight), _Offset___get_y__impl__8bzhra(bottomRight));
  }
  function _set__scaledRadiiRect__azre1j($this, _set____db54di) {
    $this._scaledRadiiRect_1 = _set____db54di;
  }
  function _get__scaledRadiiRect__uy8eut($this) {
    return $this._scaledRadiiRect_1;
  }
  function scaledRadiiRect($this) {
    var tmp0_elvis_lhs = $this._scaledRadiiRect_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.ui.geometry.RoundRect.scaledRadiiRect.<anonymous>' call
      var scale = 1.0;
      scale = minRadius($this, scale, _CornerRadius___get_y__impl__tyvleu($this.bottomLeftCornerRadius_1), _CornerRadius___get_y__impl__tyvleu($this.topLeftCornerRadius_1), $this.get_height_e7t92o_k$());
      scale = minRadius($this, scale, _CornerRadius___get_x__impl__1594cn($this.topLeftCornerRadius_1), _CornerRadius___get_x__impl__1594cn($this.topRightCornerRadius_1), $this.get_width_j0q4yl_k$());
      scale = minRadius($this, scale, _CornerRadius___get_y__impl__tyvleu($this.topRightCornerRadius_1), _CornerRadius___get_y__impl__tyvleu($this.bottomRightCornerRadius_1), $this.get_height_e7t92o_k$());
      scale = minRadius($this, scale, _CornerRadius___get_x__impl__1594cn($this.bottomRightCornerRadius_1), _CornerRadius___get_x__impl__1594cn($this.bottomLeftCornerRadius_1), $this.get_width_j0q4yl_k$());
      // Inline function 'kotlin.also' call
      var this_0 = new RoundRect($this.left_1 * scale, $this.top_1 * scale, $this.right_1 * scale, $this.bottom_1 * scale, CornerRadius_0(_CornerRadius___get_x__impl__1594cn($this.topLeftCornerRadius_1) * scale, _CornerRadius___get_y__impl__tyvleu($this.topLeftCornerRadius_1) * scale), CornerRadius_0(_CornerRadius___get_x__impl__1594cn($this.topRightCornerRadius_1) * scale, _CornerRadius___get_y__impl__tyvleu($this.topRightCornerRadius_1) * scale), CornerRadius_0(_CornerRadius___get_x__impl__1594cn($this.bottomRightCornerRadius_1) * scale, _CornerRadius___get_y__impl__tyvleu($this.bottomRightCornerRadius_1) * scale), CornerRadius_0(_CornerRadius___get_x__impl__1594cn($this.bottomLeftCornerRadius_1) * scale, _CornerRadius___get_y__impl__tyvleu($this.bottomLeftCornerRadius_1) * scale));
      // Inline function 'androidx.compose.ui.geometry.RoundRect.scaledRadiiRect.<anonymous>' call
      $this._scaledRadiiRect_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function minRadius($this, min, radius1, radius2, limit) {
    var sum = radius1 + radius2;
    var tmp;
    if (sum > limit && !(sum === 0.0)) {
      // Inline function 'kotlin.math.min' call
      var b = limit / sum;
      tmp = Math.min(min, b);
    } else {
      tmp = min;
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.Zero_1 = RoundRect_1(0.0, 0.0, 0.0, 0.0, Companion_getInstance().get_Zero_r4zx17_k$());
  }
  protoOf(Companion_2).get_Zero_woe9zl_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function RoundRect(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) {
    Companion_getInstance_2();
    topLeftCornerRadius = topLeftCornerRadius === VOID ? Companion_getInstance().get_Zero_r4zx17_k$() : topLeftCornerRadius;
    topRightCornerRadius = topRightCornerRadius === VOID ? Companion_getInstance().get_Zero_r4zx17_k$() : topRightCornerRadius;
    bottomRightCornerRadius = bottomRightCornerRadius === VOID ? Companion_getInstance().get_Zero_r4zx17_k$() : bottomRightCornerRadius;
    bottomLeftCornerRadius = bottomLeftCornerRadius === VOID ? Companion_getInstance().get_Zero_r4zx17_k$() : bottomLeftCornerRadius;
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
    this.topLeftCornerRadius_1 = topLeftCornerRadius;
    this.topRightCornerRadius_1 = topRightCornerRadius;
    this.bottomRightCornerRadius_1 = bottomRightCornerRadius;
    this.bottomLeftCornerRadius_1 = bottomLeftCornerRadius;
    this._scaledRadiiRect_1 = null;
  }
  protoOf(RoundRect).get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  protoOf(RoundRect).get_top_18ivbo_k$ = function () {
    return this.top_1;
  };
  protoOf(RoundRect).get_right_ixz7xv_k$ = function () {
    return this.right_1;
  };
  protoOf(RoundRect).get_bottom_bj8ras_k$ = function () {
    return this.bottom_1;
  };
  protoOf(RoundRect).get_topLeftCornerRadius_91hulg_k$ = function () {
    return this.topLeftCornerRadius_1;
  };
  protoOf(RoundRect).get_topRightCornerRadius_kxqun3_k$ = function () {
    return this.topRightCornerRadius_1;
  };
  protoOf(RoundRect).get_bottomRightCornerRadius_166w49_k$ = function () {
    return this.bottomRightCornerRadius_1;
  };
  protoOf(RoundRect).get_bottomLeftCornerRadius_9r65ws_k$ = function () {
    return this.bottomLeftCornerRadius_1;
  };
  protoOf(RoundRect).get_width_j0q4yl_k$ = function () {
    return this.right_1 - this.left_1;
  };
  protoOf(RoundRect).get_height_e7t92o_k$ = function () {
    return this.bottom_1 - this.top_1;
  };
  protoOf(RoundRect).contains_obi4ph_k$ = function (point) {
    if (_Offset___get_x__impl__xvi35n(point) < this.left_1 || _Offset___get_x__impl__xvi35n(point) >= this.right_1 || _Offset___get_y__impl__8bzhra(point) < this.top_1 || _Offset___get_y__impl__8bzhra(point) >= this.bottom_1) {
      return false;
    }
    var scaled = scaledRadiiRect(this);
    var x;
    var y;
    var radiusX;
    var radiusY;
    if (_Offset___get_x__impl__xvi35n(point) < this.left_1 + _CornerRadius___get_x__impl__1594cn(scaled.topLeftCornerRadius_1) && _Offset___get_y__impl__8bzhra(point) < this.top_1 + _CornerRadius___get_y__impl__tyvleu(scaled.topLeftCornerRadius_1)) {
      x = _Offset___get_x__impl__xvi35n(point) - this.left_1 - _CornerRadius___get_x__impl__1594cn(scaled.topLeftCornerRadius_1);
      y = _Offset___get_y__impl__8bzhra(point) - this.top_1 - _CornerRadius___get_y__impl__tyvleu(scaled.topLeftCornerRadius_1);
      radiusX = _CornerRadius___get_x__impl__1594cn(scaled.topLeftCornerRadius_1);
      radiusY = _CornerRadius___get_y__impl__tyvleu(scaled.topLeftCornerRadius_1);
    } else if (_Offset___get_x__impl__xvi35n(point) > this.right_1 - _CornerRadius___get_x__impl__1594cn(scaled.topRightCornerRadius_1) && _Offset___get_y__impl__8bzhra(point) < this.top_1 + _CornerRadius___get_y__impl__tyvleu(scaled.topRightCornerRadius_1)) {
      x = _Offset___get_x__impl__xvi35n(point) - this.right_1 + _CornerRadius___get_x__impl__1594cn(scaled.topRightCornerRadius_1);
      y = _Offset___get_y__impl__8bzhra(point) - this.top_1 - _CornerRadius___get_y__impl__tyvleu(scaled.topRightCornerRadius_1);
      radiusX = _CornerRadius___get_x__impl__1594cn(scaled.topRightCornerRadius_1);
      radiusY = _CornerRadius___get_y__impl__tyvleu(scaled.topRightCornerRadius_1);
    } else if (_Offset___get_x__impl__xvi35n(point) > this.right_1 - _CornerRadius___get_x__impl__1594cn(scaled.bottomRightCornerRadius_1) && _Offset___get_y__impl__8bzhra(point) > this.bottom_1 - _CornerRadius___get_y__impl__tyvleu(scaled.bottomRightCornerRadius_1)) {
      x = _Offset___get_x__impl__xvi35n(point) - this.right_1 + _CornerRadius___get_x__impl__1594cn(scaled.bottomRightCornerRadius_1);
      y = _Offset___get_y__impl__8bzhra(point) - this.bottom_1 + _CornerRadius___get_y__impl__tyvleu(scaled.bottomRightCornerRadius_1);
      radiusX = _CornerRadius___get_x__impl__1594cn(scaled.bottomRightCornerRadius_1);
      radiusY = _CornerRadius___get_y__impl__tyvleu(scaled.bottomRightCornerRadius_1);
    } else if (_Offset___get_x__impl__xvi35n(point) < this.left_1 + _CornerRadius___get_x__impl__1594cn(scaled.bottomLeftCornerRadius_1) && _Offset___get_y__impl__8bzhra(point) > this.bottom_1 - _CornerRadius___get_y__impl__tyvleu(scaled.bottomLeftCornerRadius_1)) {
      x = _Offset___get_x__impl__xvi35n(point) - this.left_1 - _CornerRadius___get_x__impl__1594cn(scaled.bottomLeftCornerRadius_1);
      y = _Offset___get_y__impl__8bzhra(point) - this.bottom_1 + _CornerRadius___get_y__impl__tyvleu(scaled.bottomLeftCornerRadius_1);
      radiusX = _CornerRadius___get_x__impl__1594cn(scaled.bottomLeftCornerRadius_1);
      radiusY = _CornerRadius___get_y__impl__tyvleu(scaled.bottomLeftCornerRadius_1);
    } else {
      return true;
    }
    var newX = x / radiusX;
    var newY = y / radiusY;
    return newX * newX + newY * newY <= 1.0;
  };
  protoOf(RoundRect).toString = function () {
    var tlRadius = this.topLeftCornerRadius_1;
    var trRadius = this.topRightCornerRadius_1;
    var brRadius = this.bottomRightCornerRadius_1;
    var blRadius = this.bottomLeftCornerRadius_1;
    var rect = toStringAsFixed(this.left_1, 1) + ', ' + (toStringAsFixed(this.top_1, 1) + ', ') + (toStringAsFixed(this.right_1, 1) + ', ') + toStringAsFixed(this.bottom_1, 1);
    if (equals(tlRadius, trRadius) && equals(trRadius, brRadius) && equals(brRadius, blRadius)) {
      if (_CornerRadius___get_x__impl__1594cn(tlRadius) === _CornerRadius___get_y__impl__tyvleu(tlRadius)) {
        return 'RoundRect(rect=' + rect + ', radius=' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn(tlRadius), 1) + ')';
      }
      return 'RoundRect(rect=' + rect + ', x=' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn(tlRadius), 1) + ', ' + ('y=' + toStringAsFixed(_CornerRadius___get_y__impl__tyvleu(tlRadius), 1) + ')');
    }
    return 'RoundRect(' + ('rect=' + rect + ', ') + ('topLeft=' + CornerRadius__toString_impl_m3k4zq(tlRadius) + ', ') + ('topRight=' + CornerRadius__toString_impl_m3k4zq(trRadius) + ', ') + ('bottomRight=' + CornerRadius__toString_impl_m3k4zq(brRadius) + ', ') + ('bottomLeft=' + CornerRadius__toString_impl_m3k4zq(blRadius) + ')');
  };
  protoOf(RoundRect).component1_7eebsc_k$ = function () {
    return this.left_1;
  };
  protoOf(RoundRect).component2_7eebsb_k$ = function () {
    return this.top_1;
  };
  protoOf(RoundRect).component3_7eebsa_k$ = function () {
    return this.right_1;
  };
  protoOf(RoundRect).component4_7eebs9_k$ = function () {
    return this.bottom_1;
  };
  protoOf(RoundRect).component5_k43xq6_k$ = function () {
    return this.topLeftCornerRadius_1;
  };
  protoOf(RoundRect).component6_chc4w3_k$ = function () {
    return this.topRightCornerRadius_1;
  };
  protoOf(RoundRect).component7_pybugs_k$ = function () {
    return this.bottomRightCornerRadius_1;
  };
  protoOf(RoundRect).component8_6n485h_k$ = function () {
    return this.bottomLeftCornerRadius_1;
  };
  protoOf(RoundRect).copy_6k8ad_k$ = function (left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) {
    return new RoundRect(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius);
  };
  protoOf(RoundRect).copy$default_s3wa9q_k$ = function (left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius, $super) {
    left = left === VOID ? this.left_1 : left;
    top = top === VOID ? this.top_1 : top;
    right = right === VOID ? this.right_1 : right;
    bottom = bottom === VOID ? this.bottom_1 : bottom;
    topLeftCornerRadius = topLeftCornerRadius === VOID ? this.topLeftCornerRadius_1 : topLeftCornerRadius;
    topRightCornerRadius = topRightCornerRadius === VOID ? this.topRightCornerRadius_1 : topRightCornerRadius;
    bottomRightCornerRadius = bottomRightCornerRadius === VOID ? this.bottomRightCornerRadius_1 : bottomRightCornerRadius;
    bottomLeftCornerRadius = bottomLeftCornerRadius === VOID ? this.bottomLeftCornerRadius_1 : bottomLeftCornerRadius;
    return $super === VOID ? this.copy_6k8ad_k$(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) : $super.copy_6k8ad_k$.call(this, left, top, right, bottom, new CornerRadius(topLeftCornerRadius), new CornerRadius(topRightCornerRadius), new CornerRadius(bottomRightCornerRadius), new CornerRadius(bottomLeftCornerRadius));
  };
  protoOf(RoundRect).hashCode = function () {
    var result = getNumberHashCode(this.left_1);
    result = imul(result, 31) + getNumberHashCode(this.top_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.right_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.bottom_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.topLeftCornerRadius_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.topRightCornerRadius_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.bottomRightCornerRadius_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.bottomLeftCornerRadius_1) | 0;
    return result;
  };
  protoOf(RoundRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundRect))
      return false;
    var tmp0_other_with_cast = other instanceof RoundRect ? other : THROW_CCE();
    if (!equals(this.left_1, tmp0_other_with_cast.left_1))
      return false;
    if (!equals(this.top_1, tmp0_other_with_cast.top_1))
      return false;
    if (!equals(this.right_1, tmp0_other_with_cast.right_1))
      return false;
    if (!equals(this.bottom_1, tmp0_other_with_cast.bottom_1))
      return false;
    if (!equals(this.topLeftCornerRadius_1, tmp0_other_with_cast.topLeftCornerRadius_1))
      return false;
    if (!equals(this.topRightCornerRadius_1, tmp0_other_with_cast.topRightCornerRadius_1))
      return false;
    if (!equals(this.bottomRightCornerRadius_1, tmp0_other_with_cast.bottomRightCornerRadius_1))
      return false;
    if (!equals(this.bottomLeftCornerRadius_1, tmp0_other_with_cast.bottomLeftCornerRadius_1))
      return false;
    return true;
  };
  function get_isSimple(_this__u8e3s4) {
    return _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topLeftCornerRadius_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.topLeftCornerRadius_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topLeftCornerRadius_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topRightCornerRadius_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topLeftCornerRadius_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.topRightCornerRadius_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topLeftCornerRadius_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.bottomRightCornerRadius_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topLeftCornerRadius_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.bottomRightCornerRadius_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topLeftCornerRadius_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.bottomLeftCornerRadius_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topLeftCornerRadius_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.bottomLeftCornerRadius_1);
  }
  function get_boundingRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.left_1, _this__u8e3s4.top_1, _this__u8e3s4.right_1, _this__u8e3s4.bottom_1);
  }
  function RoundRect_0(rect, topLeft, topRight, bottomRight, bottomLeft) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_r4zx17_k$() : topLeft;
    topRight = topRight === VOID ? Companion_getInstance().get_Zero_r4zx17_k$() : topRight;
    bottomRight = bottomRight === VOID ? Companion_getInstance().get_Zero_r4zx17_k$() : bottomRight;
    bottomLeft = bottomLeft === VOID ? Companion_getInstance().get_Zero_r4zx17_k$() : bottomLeft;
    return new RoundRect(rect.get_left_woprgw_k$(), rect.get_top_18ivbo_k$(), rect.get_right_ixz7xv_k$(), rect.get_bottom_bj8ras_k$(), topLeft, topRight, bottomRight, bottomLeft);
  }
  function RoundRect_1(left, top, right, bottom, cornerRadius) {
    return RoundRect_2(left, top, right, bottom, _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius));
  }
  function RoundRect_2(left, top, right, bottom, radiusX, radiusY) {
    var radius = CornerRadius_0(radiusX, radiusY);
    return new RoundRect(left, top, right, bottom, radius, radius, radius, radius);
  }
  function _Size___init__impl__aywn0g(packedValue) {
    return packedValue;
  }
  function _Size___get_packedValue__impl__7rlt1o($this) {
    return $this;
  }
  function _Size___get_width__impl__58y75t($this) {
    if (_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function _Size___get_height__impl__a04p02($this) {
    if (_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function Size__component1_impl_9kmfl4($this) {
    return _Size___get_width__impl__58y75t($this);
  }
  function Size__component2_impl_93kt6x($this) {
    return _Size___get_height__impl__a04p02($this);
  }
  function Size__copy_impl_jrw2sp($this, width, height) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(width));
    var v2 = toLong(toRawBits(height));
    var tmp$ret$6 = v1.shl_bg8if3_k$(32).or_v7fvkl_k$(v2.and_4spn93_k$(new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$6);
  }
  function Size__copy$default_impl_nrzrkq($this, width, height, $super) {
    var tmp;
    if (width === VOID) {
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = _Size___get_packedValue__impl__7rlt1o($this).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp = floatFromBits(bits);
    } else {
      tmp = width;
    }
    width = tmp;
    var tmp_0;
    if (height === VOID) {
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = _Size___get_packedValue__impl__7rlt1o($this).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp_0 = floatFromBits(bits_0);
    } else {
      tmp_0 = height;
    }
    height = tmp_0;
    var tmp_1;
    if ($super === VOID) {
      tmp_1 = Size__copy_impl_jrw2sp($this, width, height);
    } else {
      var tmp_2 = $super;
      tmp_1 = (tmp_2 == null ? null : new Size(tmp_2)).copy_ldlpax_k$.call(new Size($this), width, height).packedValue_1;
    }
    return tmp_1;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.Zero_1 = _Size___init__impl__aywn0g(new Long(0, 0));
    this.Unspecified_1 = _Size___init__impl__aywn0g(new Long(2143289344, 2143289344));
  }
  protoOf(Companion_3).get_Zero_rugywl_k$ = function () {
    return this.Zero_1;
  };
  protoOf(Companion_3).get_Unspecified_3ttj0y_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Size__isEmpty_impl_o9ye97($this) {
    if (_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    var tmp = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'kotlin.Long.times' call
    var tmp$ret$0 = _Size___get_packedValue__impl__7rlt1o($this).and_4spn93_k$(new Long(-2147483648, -2147483648)).ushr_z7nmq8_k$(31).times_nfzjiw_k$(toLong(-1));
    var v = tmp.and_4spn93_k$(tmp$ret$0.inv_28kx_k$());
    return v.ushr_z7nmq8_k$(32).and_4spn93_k$(v.and_4spn93_k$(new Long(-1, 0))).equals(new Long(0, 0));
  }
  function Size__times_impl_fnp4nc($this, operand) {
    if (_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp2 = floatFromBits(bits) * operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = _Size___get_packedValue__impl__7rlt1o($this).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) * operand;
    var v1 = toLong(toRawBits(tmp2));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$6 = v1.shl_bg8if3_k$(32).or_v7fvkl_k$(v2.and_4spn93_k$(new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$6);
  }
  function Size__div_impl_f5ffdp($this, operand) {
    if (_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp2 = floatFromBits(bits) / operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = _Size___get_packedValue__impl__7rlt1o($this).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) / operand;
    var v1 = toLong(toRawBits(tmp2));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$6 = v1.shl_bg8if3_k$(32).or_v7fvkl_k$(v2.and_4spn93_k$(new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$6);
  }
  function _Size___get_minDimension__impl__4iso0r($this) {
    if (_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'androidx.compose.ui.util.unpackAbsFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).shr_9fl3wl_k$(32).and_4spn93_k$(new Long(2147483647, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp2 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackAbsFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = _Size___get_packedValue__impl__7rlt1o($this).and_4spn93_k$(new Long(2147483647, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'kotlin.math.min' call
    var b = floatFromBits(bits_0);
    return Math.min(tmp2, b);
  }
  function _Size___get_maxDimension__impl__3y1xu1($this) {
    if (_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'androidx.compose.ui.util.unpackAbsFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).shr_9fl3wl_k$(32).and_4spn93_k$(new Long(2147483647, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp2 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackAbsFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = _Size___get_packedValue__impl__7rlt1o($this).and_4spn93_k$(new Long(2147483647, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'kotlin.math.max' call
    var b = floatFromBits(bits_0);
    return Math.max(tmp2, b);
  }
  function Size__toString_impl_o87ni8($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    if (!_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      tmp = 'Size(' + toStringAsFixed(_Size___get_width__impl__58y75t($this), 1) + ', ' + toStringAsFixed(_Size___get_height__impl__a04p02($this), 1) + ')';
    } else {
      tmp = 'Size.Unspecified';
    }
    return tmp;
  }
  function Size__hashCode_impl_2h1qpd($this) {
    return $this.hashCode();
  }
  function Size__equals_impl_gzcc1f($this, other) {
    if (!(other instanceof Size))
      return false;
    var tmp0_other_with_cast = other instanceof Size ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Size(packedValue) {
    Companion_getInstance_3();
    this.packedValue_1 = packedValue;
  }
  protoOf(Size).toString = function () {
    return Size__toString_impl_o87ni8(this.packedValue_1);
  };
  protoOf(Size).hashCode = function () {
    return Size__hashCode_impl_2h1qpd(this.packedValue_1);
  };
  protoOf(Size).equals = function (other) {
    return Size__equals_impl_gzcc1f(this.packedValue_1, other);
  };
  function toRect_0(_this__u8e3s4) {
    return Rect_0(Companion_getInstance_0().get_Zero_k6n73t_k$(), _this__u8e3s4);
  }
  function get_isSpecified_0(_this__u8e3s4) {
    return !_Size___get_packedValue__impl__7rlt1o(_this__u8e3s4).equals(new Long(2143289344, 2143289344));
  }
  function Size_0(width, height) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(width));
    var v2 = toLong(toRawBits(height));
    var tmp$ret$0 = v1.shl_bg8if3_k$(32).or_v7fvkl_k$(v2.and_4spn93_k$(new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$0);
  }
  function get_center(_this__u8e3s4) {
    if (_Size___get_packedValue__impl__7rlt1o(_this__u8e3s4).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits) / 2.0;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$5 = floatFromBits(bits_0);
    return Offset_0(tmp, tmp$ret$5 / 2.0);
  }
  function get_isUnspecified_0(_this__u8e3s4) {
    return _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4).equals(new Long(2143289344, 2143289344));
  }
  //region block: init
  UnspecifiedPackedFloats = new Long(2143289344, 2143289344);
  DualFloatSignBit = new Long(-2147483648, -2147483648);
  DualFloatInfinityBase = new Long(2139095040, 2139095040);
  DualUnsignedFloatMask = new Long(2147483647, 2147483647);
  Uint64High32 = new Long(-2147483648, -2147483648);
  DualFirstNaN = new Long(2139095041, 2139095041);
  Uint64Low32 = new Long(1, 1);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CornerRadius_0;
  _.$_$.b = CornerRadius;
  _.$_$.c = MutableRect;
  _.$_$.d = Offset_0;
  _.$_$.e = Offset;
  _.$_$.f = Rect_1;
  _.$_$.g = Rect_0;
  _.$_$.h = Rect;
  _.$_$.i = RoundRect_0;
  _.$_$.j = RoundRect_1;
  _.$_$.k = RoundRect;
  _.$_$.l = Size_0;
  _.$_$.m = Size;
  _.$_$.n = get_boundingRect;
  _.$_$.o = get_center;
  _.$_$.p = get_isFinite;
  _.$_$.q = get_isSimple;
  _.$_$.r = get_isSpecified;
  _.$_$.s = get_isUnspecified;
  _.$_$.t = lerp_0;
  _.$_$.u = toRect;
  _.$_$.v = toRect_0;
  _.$_$.w = _CornerRadius___get_x__impl__1594cn;
  _.$_$.x = _CornerRadius___get_y__impl__tyvleu;
  _.$_$.y = Offset__div_impl_eaxtg1;
  _.$_$.z = Offset__getDistanceSquared_impl_97mhi6;
  _.$_$.a1 = Offset__getDistance_impl_pclvxn;
  _.$_$.b1 = Offset__hashCode_impl_hbql41;
  _.$_$.c1 = Offset__minus_impl_hoj2c0;
  _.$_$.d1 = _Offset___get_packedValue__impl__xh2k8q;
  _.$_$.e1 = Offset__plus_impl_c78cg0;
  _.$_$.f1 = Offset__times_impl_jz1mli;
  _.$_$.g1 = Offset__toString_impl_4ffbou;
  _.$_$.h1 = Offset__unaryMinus_impl_ssu2iv;
  _.$_$.i1 = _Offset___get_x__impl__xvi35n;
  _.$_$.j1 = _Offset___get_y__impl__8bzhra;
  _.$_$.k1 = Size__hashCode_impl_2h1qpd;
  _.$_$.l1 = _Size___get_height__impl__a04p02;
  _.$_$.m1 = Size__isEmpty_impl_o9ye97;
  _.$_$.n1 = _Size___get_minDimension__impl__4iso0r;
  _.$_$.o1 = _Size___get_packedValue__impl__7rlt1o;
  _.$_$.p1 = Size__toString_impl_o87ni8;
  _.$_$.q1 = _Size___get_width__impl__58y75t;
  _.$_$.r1 = Offset__copy$default_impl_bmwjg8;
  _.$_$.s1 = Companion_getInstance;
  _.$_$.t1 = Companion_getInstance_0;
  _.$_$.u1 = Companion_getInstance_1;
  _.$_$.v1 = Companion_getInstance_3;
  //endregion
  return _;
}));
