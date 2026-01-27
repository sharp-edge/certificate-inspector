(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] = factory(typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ef;
  var initMetadataForClass = kotlin_kotlin.$_$.ce;
  var VOID = kotlin_kotlin.$_$.e;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var initMetadataForInterface = kotlin_kotlin.$_$.fe;
  var initMetadataForObject = kotlin_kotlin.$_$.he;
  var Unit_getInstance = kotlin_kotlin.$_$.u5;
  var LayoutDirection_Rtl_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var Dp__toString_impl_kcddez = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var toString = kotlin_kotlin.$_$.uk;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var getBooleanHashCode = kotlin_kotlin.$_$.wd;
  var hashCode = kotlin_kotlin.$_$.be;
  var THROW_CCE = kotlin_kotlin.$_$.ij;
  var equals = kotlin_kotlin.$_$.td;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.y9;
  var roundToInt = kotlin_kotlin.$_$.of;
  var get_lastIndex = kotlin_kotlin.$_$.x9;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  var Placeable = kotlin_org_jetbrains_compose_ui_ui.$_$.i3;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w3;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z3;
  var fillArrayVal = kotlin_kotlin.$_$.ud;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var toString_0 = kotlin_kotlin.$_$.if;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.z2;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.y2;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.x2;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.w2;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.f8;
  var ParentDataModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.q4;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.z9;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.k8;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.u9;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var isInterface = kotlin_kotlin.$_$.re;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.e6;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.g6;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.o4;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var FunctionAdapter = kotlin_kotlin.$_$.gd;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var ensureNotNull = kotlin_kotlin.$_$.bk;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.f5;
  var coerceAtMost = kotlin_kotlin.$_$.zf;
  var getNumberHashCode = kotlin_kotlin.$_$.yd;
  var Annotation = kotlin_kotlin.$_$.oi;
  var minIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.m4;
  var minIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.l4;
  var maxIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.k4;
  var maxIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.j4;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.n4;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a4;
  var offset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q1;
  var constrainWidth = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j1;
  var constrainHeight = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i1;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var get_FirstBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.l2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.de;
  var toLong = kotlin_kotlin.$_$.gf;
  var coerceAtLeast = kotlin_kotlin.$_$.wf;
  var numberToLong = kotlin_kotlin.$_$.cf;
  var Long = kotlin_kotlin.$_$.bj;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.vf;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.c2;
  var IllegalArgumentException = kotlin_kotlin.$_$.zi;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var get_sign = kotlin_kotlin.$_$.rf;
  var coerceIn = kotlin_kotlin.$_$.dg;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h3;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e4;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var THROW_IAE = kotlin_kotlin.$_$.jj;
  var enumEntries = kotlin_kotlin.$_$.ed;
  var Enum = kotlin_kotlin.$_$.wi;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a1;
  var coerceAtMost_0 = kotlin_kotlin.$_$.ag;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k1;
  var _Constraints___get_hasFixedWidth__impl__4p17wc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var _Constraints___get_hasFixedHeight__impl__y56fxx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var modifierLocalOf = kotlin_org_jetbrains_compose_ui_ui.$_$.a4;
  //endregion
  //region block: pre-declaration
  function get_spacing() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  initMetadataForInterface(Horizontal, 'Horizontal');
  initMetadataForClass(Arrangement$Absolute$Left$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Absolute$Center$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Absolute$Right$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Absolute$SpaceBetween$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Absolute$SpaceEvenly$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Absolute$SpaceAround$1, VOID, VOID, VOID, [Horizontal]);
  function get_spacing_0() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  initMetadataForInterface(Vertical, 'Vertical');
  function get_spacing_1() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  initMetadataForInterface(HorizontalOrVertical, 'HorizontalOrVertical', VOID, VOID, [Horizontal, Vertical]);
  initMetadataForObject(Absolute, 'Absolute');
  initMetadataForClass(SpacedAligned, 'SpacedAligned', VOID, VOID, [HorizontalOrVertical]);
  initMetadataForClass(Arrangement$Start$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$End$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Top$1, VOID, VOID, VOID, [Vertical]);
  initMetadataForClass(Arrangement$Bottom$1, VOID, VOID, VOID, [Vertical]);
  initMetadataForClass(Arrangement$Center$1, VOID, VOID, VOID, [HorizontalOrVertical]);
  initMetadataForClass(Arrangement$SpaceEvenly$1, VOID, VOID, VOID, [HorizontalOrVertical]);
  initMetadataForClass(Arrangement$SpaceBetween$1, VOID, VOID, VOID, [HorizontalOrVertical]);
  initMetadataForClass(Arrangement$SpaceAround$1, VOID, VOID, VOID, [HorizontalOrVertical]);
  initMetadataForObject(Arrangement, 'Arrangement');
  initMetadataForClass(BoxMeasurePolicy, 'BoxMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForClass(BoxChildDataNode, 'BoxChildDataNode', VOID, Node, [ParentDataModifierNode, Node]);
  initMetadataForInterface(BoxScope, 'BoxScope');
  initMetadataForObject(BoxScopeInstance, 'BoxScopeInstance', VOID, VOID, [BoxScope]);
  initMetadataForClass(BoxChildDataElement, 'BoxChildDataElement', VOID, ModifierNodeElement);
  initMetadataForClass(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', VOID, VOID, [MeasurePolicy, FunctionAdapter]);
  function createConstraints$default(mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing, $super) {
    isPrioritizing = isPrioritizing === VOID ? false : isPrioritizing;
    return $super === VOID ? this.createConstraints_abox2e_k$(mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) : $super.createConstraints_abox2e_k$.call(this, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing).value_1;
  }
  initMetadataForInterface(RowColumnMeasurePolicy, 'RowColumnMeasurePolicy');
  initMetadataForClass(ColumnMeasurePolicy, 'ColumnMeasurePolicy', VOID, VOID, [MeasurePolicy, RowColumnMeasurePolicy]);
  function weight$default(_this__u8e3s4, weight, fill, $super) {
    fill = fill === VOID ? true : fill;
    return $super === VOID ? this.weight_9ecvc_k$(_this__u8e3s4, weight, fill) : $super.weight_9ecvc_k$.call(this, _this__u8e3s4, weight, fill);
  }
  initMetadataForInterface(ColumnScope, 'ColumnScope');
  initMetadataForObject(ColumnScopeInstance, 'ColumnScopeInstance', VOID, VOID, [ColumnScope]);
  initMetadataForClass(FlowLayoutData, 'FlowLayoutData');
  initMetadataForClass(LayoutScopeMarker, 'LayoutScopeMarker', VOID, VOID, [Annotation]);
  initMetadataForClass(OffsetElement, 'OffsetElement', VOID, ModifierNodeElement);
  initMetadataForClass(OffsetNode, 'OffsetNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForInterface(PaddingValues, 'PaddingValues');
  initMetadataForClass(Absolute_0, 'Absolute', Absolute_0, VOID, [PaddingValues]);
  initMetadataForClass(PaddingValuesImpl, 'PaddingValuesImpl', PaddingValuesImpl, VOID, [PaddingValues]);
  initMetadataForClass(PaddingElement, 'PaddingElement', VOID, ModifierNodeElement);
  initMetadataForClass(PaddingValuesElement, 'PaddingValuesElement', VOID, ModifierNodeElement);
  initMetadataForClass(PaddingNode, 'PaddingNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(PaddingValuesModifier, 'PaddingValuesModifier', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(RowMeasurePolicy, 'RowMeasurePolicy', VOID, VOID, [MeasurePolicy, RowColumnMeasurePolicy]);
  function weight$default_0(_this__u8e3s4, weight, fill, $super) {
    fill = fill === VOID ? true : fill;
    return $super === VOID ? this.weight_9ecvc_k$(_this__u8e3s4, weight, fill) : $super.weight_9ecvc_k$.call(this, _this__u8e3s4, weight, fill);
  }
  initMetadataForInterface(RowScope, 'RowScope');
  initMetadataForObject(RowScopeInstance, 'RowScopeInstance', VOID, VOID, [RowScope]);
  initMetadataForClass(RowColumnParentData, 'RowColumnParentData', RowColumnParentData);
  initMetadataForCompanion(Companion);
  initMetadataForClass(CrossAxisAlignment, 'CrossAxisAlignment');
  initMetadataForObject(CenterCrossAxisAlignment, 'CenterCrossAxisAlignment', VOID, CrossAxisAlignment);
  initMetadataForObject(StartCrossAxisAlignment, 'StartCrossAxisAlignment', VOID, CrossAxisAlignment);
  initMetadataForObject(EndCrossAxisAlignment, 'EndCrossAxisAlignment', VOID, CrossAxisAlignment);
  initMetadataForClass(AlignmentLineCrossAxisAlignment, 'AlignmentLineCrossAxisAlignment', VOID, CrossAxisAlignment);
  initMetadataForClass(VerticalCrossAxisAlignment, 'VerticalCrossAxisAlignment', VOID, CrossAxisAlignment);
  initMetadataForClass(HorizontalCrossAxisAlignment, 'HorizontalCrossAxisAlignment', VOID, CrossAxisAlignment);
  initMetadataForObject(IntrinsicMeasureBlocks, 'IntrinsicMeasureBlocks');
  initMetadataForClass(AlignmentLineProvider, 'AlignmentLineProvider');
  initMetadataForClass(Block, 'Block', VOID, AlignmentLineProvider);
  initMetadataForClass(Value, 'Value', VOID, AlignmentLineProvider);
  initMetadataForClass(LayoutWeightElement, 'LayoutWeightElement', VOID, ModifierNodeElement);
  initMetadataForClass(HorizontalAlignElement, 'HorizontalAlignElement', VOID, ModifierNodeElement);
  initMetadataForClass(WithAlignmentLineElement, 'WithAlignmentLineElement', VOID, ModifierNodeElement);
  initMetadataForClass(WithAlignmentLineBlockElement, 'WithAlignmentLineBlockElement', VOID, ModifierNodeElement);
  initMetadataForClass(VerticalAlignElement, 'VerticalAlignElement', VOID, ModifierNodeElement);
  initMetadataForClass(LayoutWeightNode, 'LayoutWeightNode', VOID, Node, [ParentDataModifierNode, Node]);
  initMetadataForClass(HorizontalAlignNode, 'HorizontalAlignNode', VOID, Node, [ParentDataModifierNode, Node]);
  initMetadataForClass(SiblingsAlignedNode, 'SiblingsAlignedNode', VOID, Node, [ParentDataModifierNode, Node]);
  initMetadataForClass(WithAlignmentLineBlockNode, 'WithAlignmentLineBlockNode', VOID, SiblingsAlignedNode);
  initMetadataForClass(WithAlignmentLineNode, 'WithAlignmentLineNode', VOID, SiblingsAlignedNode);
  initMetadataForClass(VerticalAlignNode, 'VerticalAlignNode', VOID, Node, [ParentDataModifierNode, Node]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(FillElement, 'FillElement', VOID, ModifierNodeElement);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(WrapContentElement, 'WrapContentElement', VOID, ModifierNodeElement);
  initMetadataForClass(FillNode, 'FillNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  initMetadataForClass(WrapContentNode, 'WrapContentNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(SizeElement, 'SizeElement', VOID, ModifierNodeElement);
  initMetadataForClass(UnspecifiedConstraintsElement, 'UnspecifiedConstraintsElement', UnspecifiedConstraintsElement, ModifierNodeElement);
  initMetadataForClass(SizeNode, 'SizeNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(UnspecifiedConstraintsNode, 'UnspecifiedConstraintsNode', UnspecifiedConstraintsNode, Node, [LayoutModifierNode, Node]);
  initMetadataForObject(SpacerMeasurePolicy, 'SpacerMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForCompanion(Companion_2);
  initMetadataForInterface(WindowInsets, 'WindowInsets');
  initMetadataForClass(FixedIntInsets, 'FixedIntInsets', VOID, VOID, [WindowInsets]);
  initMetadataForClass(NoOp, 'NoOp', VOID, VOID, [Annotation]);
  //endregion
  function Arrangement$Absolute$Left$1() {
  }
  protoOf(Arrangement$Absolute$Left$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeLeftOrTop_d8pxhp_k$(sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$Left$1).toString = function () {
    return 'AbsoluteArrangement#Left';
  };
  function Arrangement$Absolute$Center$1() {
  }
  protoOf(Arrangement$Absolute$Center$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeCenter_5ptz3r_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$Center$1).toString = function () {
    return 'AbsoluteArrangement#Center';
  };
  function Arrangement$Absolute$Right$1() {
  }
  protoOf(Arrangement$Absolute$Right$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeRightOrBottom_jbnppa_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$Right$1).toString = function () {
    return 'AbsoluteArrangement#Right';
  };
  function Arrangement$Absolute$SpaceBetween$1() {
  }
  protoOf(Arrangement$Absolute$SpaceBetween$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceBetween_xk0w8s_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$SpaceBetween$1).toString = function () {
    return 'AbsoluteArrangement#SpaceBetween';
  };
  function Arrangement$Absolute$SpaceEvenly$1() {
  }
  protoOf(Arrangement$Absolute$SpaceEvenly$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceEvenly_nbsqyn_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$SpaceEvenly$1).toString = function () {
    return 'AbsoluteArrangement#SpaceEvenly';
  };
  function Arrangement$Absolute$SpaceAround$1() {
  }
  protoOf(Arrangement$Absolute$SpaceAround$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceAround_vivrfr_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$SpaceAround$1).toString = function () {
    return 'AbsoluteArrangement#SpaceAround';
  };
  function Arrangement$Absolute$spacedBy$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_y7fd6v_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$Absolute$spacedBy$lambda_0($alignment) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return $alignment.align_k316px_k$(0, size);
    };
  }
  function Arrangement$Absolute$aligned$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_y7fd6v_k$(0, size, layoutDirection);
    };
  }
  function Horizontal() {
  }
  function Vertical() {
  }
  function HorizontalOrVertical() {
  }
  function Absolute() {
    Absolute_instance = this;
    var tmp = this;
    tmp.Left_1 = new Arrangement$Absolute$Left$1();
    var tmp_0 = this;
    tmp_0.Center_1 = new Arrangement$Absolute$Center$1();
    var tmp_1 = this;
    tmp_1.Right_1 = new Arrangement$Absolute$Right$1();
    var tmp_2 = this;
    tmp_2.SpaceBetween_1 = new Arrangement$Absolute$SpaceBetween$1();
    var tmp_3 = this;
    tmp_3.SpaceEvenly_1 = new Arrangement$Absolute$SpaceEvenly$1();
    var tmp_4 = this;
    tmp_4.SpaceAround_1 = new Arrangement$Absolute$SpaceAround$1();
  }
  protoOf(Absolute).get_Left_wo5bw0_k$ = function () {
    return this.Left_1;
  };
  protoOf(Absolute).get_Center_3arb0i_k$ = function () {
    return this.Center_1;
  };
  protoOf(Absolute).get_Right_igdsyb_k$ = function () {
    return this.Right_1;
  };
  protoOf(Absolute).get_SpaceBetween_5p3wqd_k$ = function () {
    return this.SpaceBetween_1;
  };
  protoOf(Absolute).get_SpaceEvenly_3s2yx0_k$ = function () {
    return this.SpaceEvenly_1;
  };
  protoOf(Absolute).get_SpaceAround_1tvu22_k$ = function () {
    return this.SpaceAround_1;
  };
  protoOf(Absolute).spacedBy_wt7oji_k$ = function (space) {
    return new SpacedAligned(space, false, null);
  };
  protoOf(Absolute).spacedBy_k2qzj_k$ = function (space, alignment) {
    return new SpacedAligned(space, false, Arrangement$Absolute$spacedBy$lambda(alignment));
  };
  protoOf(Absolute).spacedBy_ree0zx_k$ = function (space, alignment) {
    return new SpacedAligned(space, false, Arrangement$Absolute$spacedBy$lambda_0(alignment));
  };
  protoOf(Absolute).aligned_ze1awx_k$ = function (alignment) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(0);
    return new SpacedAligned(tmp, false, Arrangement$Absolute$aligned$lambda(alignment));
  };
  var Absolute_instance;
  function Absolute_getInstance() {
    if (Absolute_instance == null)
      new Absolute();
    return Absolute_instance;
  }
  function SpacedAligned(space, rtlMirror, alignment) {
    this.space_1 = space;
    this.rtlMirror_1 = rtlMirror;
    this.alignment_1 = alignment;
    this.spacing_1 = this.space_1;
  }
  protoOf(SpacedAligned).get_space_1qqjay_k$ = function () {
    return this.space_1;
  };
  protoOf(SpacedAligned).get_rtlMirror_4wv9cw_k$ = function () {
    return this.rtlMirror_1;
  };
  protoOf(SpacedAligned).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(SpacedAligned).get_spacing_zb7agn_k$ = function () {
    return this.spacing_1;
  };
  protoOf(SpacedAligned).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (sizes.length === 0)
      return Unit_getInstance();
    var spacePx = _this__u8e3s4.roundToPx_yb7vg8_k$(this.space_1);
    var occupied = 0;
    var lastSpace = 0;
    var reversed = this.rtlMirror_1 && layoutDirection.equals(LayoutDirection_Rtl_getInstance());
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    Arrangement_getInstance();
    if (!reversed) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = sizes.length;
      while (inductionVariable < last) {
        var item = sizes[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.SpacedAligned.arrange.<anonymous>' call
        var tmp0 = occupied;
        // Inline function 'kotlin.math.min' call
        var b = totalSize - item | 0;
        outPositions[_unary__edvuaz] = Math.min(tmp0, b);
        // Inline function 'kotlin.math.min' call
        var b_0 = (totalSize - outPositions[_unary__edvuaz] | 0) - item | 0;
        lastSpace = Math.min(spacePx, b_0);
        occupied = (outPositions[_unary__edvuaz] + item | 0) + lastSpace | 0;
      }
    } else {
      var inductionVariable_0 = sizes.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.SpacedAligned.arrange.<anonymous>' call
          var it = sizes[i];
          var tmp4 = occupied;
          // Inline function 'kotlin.math.min' call
          var b_1 = totalSize - it | 0;
          outPositions[i] = Math.min(tmp4, b_1);
          // Inline function 'kotlin.math.min' call
          var b_2 = (totalSize - outPositions[i] | 0) - it | 0;
          lastSpace = Math.min(spacePx, b_2);
          occupied = (outPositions[i] + it | 0) + lastSpace | 0;
        }
         while (0 <= inductionVariable_0);
    }
    occupied = occupied - lastSpace | 0;
    if (!(this.alignment_1 == null) && occupied < totalSize) {
      var groupPosition = this.alignment_1(totalSize - occupied | 0, layoutDirection);
      var inductionVariable_1 = 0;
      var last_0 = outPositions.length - 1 | 0;
      if (inductionVariable_1 <= last_0)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          outPositions[index_0] = outPositions[index_0] + groupPosition | 0;
        }
         while (inductionVariable_1 <= last_0);
    }
  };
  protoOf(SpacedAligned).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return this.arrange_f41npy_k$(_this__u8e3s4, totalSize, sizes, LayoutDirection_Ltr_getInstance(), outPositions);
  };
  protoOf(SpacedAligned).toString = function () {
    return (this.rtlMirror_1 ? '' : 'Absolute') + 'Arrangement#spacedAligned(' + Dp__toString_impl_kcddez(this.space_1) + ', ' + toString(this.alignment_1) + ')';
  };
  protoOf(SpacedAligned).component1_k79ve9_k$ = function () {
    return this.space_1;
  };
  protoOf(SpacedAligned).component2_7eebsb_k$ = function () {
    return this.rtlMirror_1;
  };
  protoOf(SpacedAligned).component3_7eebsa_k$ = function () {
    return this.alignment_1;
  };
  protoOf(SpacedAligned).copy_qugr0w_k$ = function (space, rtlMirror, alignment) {
    return new SpacedAligned(space, rtlMirror, alignment);
  };
  protoOf(SpacedAligned).copy$default_a7uqgd_k$ = function (space, rtlMirror, alignment, $super) {
    space = space === VOID ? this.space_1 : space;
    rtlMirror = rtlMirror === VOID ? this.rtlMirror_1 : rtlMirror;
    alignment = alignment === VOID ? this.alignment_1 : alignment;
    return $super === VOID ? this.copy_qugr0w_k$(space, rtlMirror, alignment) : $super.copy_qugr0w_k$.call(this, new Dp(space), rtlMirror, alignment);
  };
  protoOf(SpacedAligned).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.space_1);
    result = imul(result, 31) + getBooleanHashCode(this.rtlMirror_1) | 0;
    result = imul(result, 31) + (this.alignment_1 == null ? 0 : hashCode(this.alignment_1)) | 0;
    return result;
  };
  protoOf(SpacedAligned).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpacedAligned))
      return false;
    var tmp0_other_with_cast = other instanceof SpacedAligned ? other : THROW_CCE();
    if (!equals(this.space_1, tmp0_other_with_cast.space_1))
      return false;
    if (!(this.rtlMirror_1 === tmp0_other_with_cast.rtlMirror_1))
      return false;
    if (!equals(this.alignment_1, tmp0_other_with_cast.alignment_1))
      return false;
    return true;
  };
  function forEachIndexed(_this__u8e3s4, $this, reversed, action) {
    if (!reversed) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = _this__u8e3s4.length;
      while (inductionVariable < last) {
        var item = _this__u8e3s4[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        action(_unary__edvuaz, item);
      }
    } else {
      var inductionVariable_0 = _this__u8e3s4.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          action(i, _this__u8e3s4[i]);
        }
         while (0 <= inductionVariable_0);
    }
  }
  function Arrangement$Start$1() {
  }
  protoOf(Arrangement$Start$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeLeftOrTop_d8pxhp_k$(sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeRightOrBottom_jbnppa_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$Start$1).toString = function () {
    return 'Arrangement#Start';
  };
  function Arrangement$End$1() {
  }
  protoOf(Arrangement$End$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeRightOrBottom_jbnppa_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeLeftOrTop_d8pxhp_k$(sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$End$1).toString = function () {
    return 'Arrangement#End';
  };
  function Arrangement$Top$1() {
  }
  protoOf(Arrangement$Top$1).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeLeftOrTop_d8pxhp_k$(sizes, outPositions, false);
  };
  protoOf(Arrangement$Top$1).toString = function () {
    return 'Arrangement#Top';
  };
  function Arrangement$Bottom$1() {
  }
  protoOf(Arrangement$Bottom$1).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeRightOrBottom_jbnppa_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Bottom$1).toString = function () {
    return 'Arrangement#Bottom';
  };
  function Arrangement$Center$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.spacing_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$Center$1).get_spacing_zb7agn_k$ = function () {
    return this.spacing_1;
  };
  protoOf(Arrangement$Center$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeCenter_5ptz3r_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeCenter_5ptz3r_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$Center$1).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeCenter_5ptz3r_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Center$1).toString = function () {
    return 'Arrangement#Center';
  };
  function Arrangement$SpaceEvenly$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.spacing_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceEvenly$1).get_spacing_zb7agn_k$ = function () {
    return this.spacing_1;
  };
  protoOf(Arrangement$SpaceEvenly$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeSpaceEvenly_nbsqyn_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeSpaceEvenly_nbsqyn_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceEvenly$1).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceEvenly_nbsqyn_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceEvenly$1).toString = function () {
    return 'Arrangement#SpaceEvenly';
  };
  function Arrangement$SpaceBetween$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.spacing_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceBetween$1).get_spacing_zb7agn_k$ = function () {
    return this.spacing_1;
  };
  protoOf(Arrangement$SpaceBetween$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeSpaceBetween_xk0w8s_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeSpaceBetween_xk0w8s_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceBetween$1).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceBetween_xk0w8s_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceBetween$1).toString = function () {
    return 'Arrangement#SpaceBetween';
  };
  function Arrangement$SpaceAround$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.spacing_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceAround$1).get_spacing_zb7agn_k$ = function () {
    return this.spacing_1;
  };
  protoOf(Arrangement$SpaceAround$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeSpaceAround_vivrfr_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeSpaceAround_vivrfr_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceAround$1).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceAround_vivrfr_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceAround$1).toString = function () {
    return 'Arrangement#SpaceAround';
  };
  function Arrangement$spacedBy$lambda(size, layoutDirection) {
    return Companion_getInstance().get_Start_ih4i6x_k$().align_y7fd6v_k$(0, size, layoutDirection);
  }
  function Arrangement$spacedBy$lambda_0($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_y7fd6v_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$spacedBy$lambda_1($alignment) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return $alignment.align_k316px_k$(0, size);
    };
  }
  function Arrangement$aligned$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_y7fd6v_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$aligned$lambda_0($alignment) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return $alignment.align_k316px_k$(0, size);
    };
  }
  function Arrangement() {
    Arrangement_instance = this;
    var tmp = this;
    tmp.Start_1 = new Arrangement$Start$1();
    var tmp_0 = this;
    tmp_0.End_1 = new Arrangement$End$1();
    var tmp_1 = this;
    tmp_1.Top_1 = new Arrangement$Top$1();
    var tmp_2 = this;
    tmp_2.Bottom_1 = new Arrangement$Bottom$1();
    var tmp_3 = this;
    tmp_3.Center_1 = new Arrangement$Center$1();
    var tmp_4 = this;
    tmp_4.SpaceEvenly_1 = new Arrangement$SpaceEvenly$1();
    var tmp_5 = this;
    tmp_5.SpaceBetween_1 = new Arrangement$SpaceBetween$1();
    var tmp_6 = this;
    tmp_6.SpaceAround_1 = new Arrangement$SpaceAround$1();
  }
  protoOf(Arrangement).get_Start_ih4i6x_k$ = function () {
    return this.Start_1;
  };
  protoOf(Arrangement).get_End_18ju7i_k$ = function () {
    return this.End_1;
  };
  protoOf(Arrangement).get_Top_18jj1w_k$ = function () {
    return this.Top_1;
  };
  protoOf(Arrangement).get_Bottom_3m75bg_k$ = function () {
    return this.Bottom_1;
  };
  protoOf(Arrangement).get_Center_3arb0i_k$ = function () {
    return this.Center_1;
  };
  protoOf(Arrangement).get_SpaceEvenly_3s2yx0_k$ = function () {
    return this.SpaceEvenly_1;
  };
  protoOf(Arrangement).get_SpaceBetween_5p3wqd_k$ = function () {
    return this.SpaceBetween_1;
  };
  protoOf(Arrangement).get_SpaceAround_1tvu22_k$ = function () {
    return this.SpaceAround_1;
  };
  protoOf(Arrangement).spacedBy_wt7oji_k$ = function (space) {
    return new SpacedAligned(space, true, Arrangement$spacedBy$lambda);
  };
  protoOf(Arrangement).spacedBy_k2qzj_k$ = function (space, alignment) {
    return new SpacedAligned(space, true, Arrangement$spacedBy$lambda_0(alignment));
  };
  protoOf(Arrangement).spacedBy_ree0zx_k$ = function (space, alignment) {
    return new SpacedAligned(space, false, Arrangement$spacedBy$lambda_1(alignment));
  };
  protoOf(Arrangement).aligned_ze1awx_k$ = function (alignment) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(0);
    return new SpacedAligned(tmp, true, Arrangement$aligned$lambda(alignment));
  };
  protoOf(Arrangement).aligned_wvl7yp_k$ = function (alignment) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(0);
    return new SpacedAligned(tmp, false, Arrangement$aligned$lambda_0(alignment));
  };
  protoOf(Arrangement).placeRightOrBottom_jbnppa_k$ = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = totalSize - consumedSize | 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
        outPosition[_unary__edvuaz] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
          var it = size[i];
          outPosition[i] = current;
          current = current + it | 0;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).placeLeftOrTop_d8pxhp_k$ = function (size, outPosition, reverseInput) {
    var current = 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = size.length;
      while (inductionVariable < last) {
        var item = size[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeLeftOrTop.<anonymous>' call
        outPosition[_unary__edvuaz] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_0 = size.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeLeftOrTop.<anonymous>' call
          var it = size[i];
          outPosition[i] = current;
          current = current + it | 0;
        }
         while (0 <= inductionVariable_0);
    }
  };
  protoOf(Arrangement).placeCenter_5ptz3r_k$ = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = (totalSize - consumedSize | 0) / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[_unary__edvuaz] = roundToInt(this_0);
        current = current + item;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + it;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).placeSpaceEvenly_nbsqyn_k$ = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var gapSize = (totalSize - consumedSize | 0) / (size.length + 1 | 0);
    var current = gapSize;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[_unary__edvuaz] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).placeSpaceBetween_xk0w8s_k$ = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (size.length === 0)
      return Unit_getInstance();
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = get_lastIndex(size);
    var noOfGaps = Math.max(a, 1);
    var gapSize = (totalSize - consumedSize | 0) / noOfGaps;
    var current = 0.0;
    if (reverseInput && size.length === 1) {
      current = gapSize;
    }
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[_unary__edvuaz] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).placeSpaceAround_vivrfr_k$ = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(size.length === 0)) {
      tmp = (totalSize - consumedSize | 0) / size.length;
    } else {
      tmp = 0.0;
    }
    var gapSize = tmp;
    var current = gapSize / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[_unary__edvuaz] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  var Arrangement_instance;
  function Arrangement_getInstance() {
    if (Arrangement_instance == null)
      new Arrangement();
    return Arrangement_instance;
  }
  function get_cache1() {
    _init_properties_Box_kt__tvzvdl();
    return cache1;
  }
  var cache1;
  function get_cache2() {
    _init_properties_Box_kt__tvzvdl();
    return cache2;
  }
  var cache2;
  function get_DefaultBoxMeasurePolicy() {
    _init_properties_Box_kt__tvzvdl();
    return DefaultBoxMeasurePolicy;
  }
  var DefaultBoxMeasurePolicy;
  function get_EmptyBoxMeasurePolicy() {
    _init_properties_Box_kt__tvzvdl();
    return EmptyBoxMeasurePolicy;
  }
  var EmptyBoxMeasurePolicy;
  function cacheFor(propagateMinConstraints) {
    _init_properties_Box_kt__tvzvdl();
    // Inline function 'kotlin.apply' call
    var this_0 = HashMap_init_$Create$(9);
    // Inline function 'androidx.compose.foundation.layout.cacheFor.<anonymous>' call
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().get_TopStart_o4x792_k$());
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().get_TopCenter_u4q5vl_k$());
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().get_TopEnd_4wiiy7_k$());
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().get_CenterStart_2305fg_k$());
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().get_Center_3arb0i_k$());
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().get_CenterEnd_uti4xp_k$());
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().get_BottomStart_v81qpa_k$());
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().get_BottomCenter_yatb1z_k$());
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().get_BottomEnd_ayz0tj_k$());
    return this_0;
  }
  function _get_alignment__wcztn2($this) {
    return $this.alignment_1;
  }
  function _get_propagateMinConstraints__xgo1gc($this) {
    return $this.propagateMinConstraints_1;
  }
  function component1($this) {
    return $this.alignment_1;
  }
  function component2($this) {
    return $this.propagateMinConstraints_1;
  }
  function BoxMeasurePolicy$measure$lambda($this$layout) {
    return Unit_getInstance();
  }
  function BoxMeasurePolicy$measure$lambda_0($placeable, $measurable, $this_measure, $boxWidth, $boxHeight, this$0) {
    return function ($this$layout) {
      placeInBox($this$layout, $placeable, $measurable, $this_measure.get_layoutDirection_7e37v0_k$(), $boxWidth, $boxHeight, this$0.alignment_1);
      return Unit_getInstance();
    };
  }
  function BoxMeasurePolicy$measure$lambda_1($placeables, $measurables, $this_measure, $boxWidth, $boxHeight, this$0) {
    return function ($this$layout) {
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.BoxMeasurePolicy.measure.<anonymous>.<anonymous>' call
        if (!(item instanceof Placeable))
          THROW_CCE();
        var measurable = $measurables.get_c1px32_k$(_unary__edvuaz);
        placeInBox($this$layout, item, measurable, $this_measure.get_layoutDirection_7e37v0_k$(), $boxWidth._v, $boxHeight._v, this$0.alignment_1);
      }
      return Unit_getInstance();
    };
  }
  function BoxMeasurePolicy(alignment, propagateMinConstraints) {
    this.alignment_1 = alignment;
    this.propagateMinConstraints_1 = propagateMinConstraints;
  }
  protoOf(BoxMeasurePolicy).measure_xg9b01_k$ = function (_this__u8e3s4, measurables, constraints) {
    if (measurables.isEmpty_y1axqb_k$()) {
      var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, BoxMeasurePolicy$measure$lambda);
    }
    var tmp_1;
    if (this.propagateMinConstraints_1) {
      tmp_1 = constraints;
    } else {
      tmp_1 = Constraints__copy$default_impl_f452rp(constraints, 0, VOID, 0);
    }
    var contentConstraints = tmp_1;
    if (measurables.get_size_woubt6_k$() === 1) {
      var measurable = measurables.get_c1px32_k$(0);
      var boxWidth;
      var boxHeight;
      var placeable;
      if (!get_matchesParentSize(measurable)) {
        placeable = measurable.measure_4dmfk1_k$(contentConstraints);
        var tmp0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        // Inline function 'kotlin.math.max' call
        var b = placeable.get_width_j0q4yl_k$();
        boxWidth = Math.max(tmp0, b);
        var tmp2 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        // Inline function 'kotlin.math.max' call
        var b_0 = placeable.get_height_e7t92o_k$();
        boxHeight = Math.max(tmp2, b_0);
      } else {
        boxWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        boxHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        placeable = measurable.measure_4dmfk1_k$(Companion_getInstance_0().fixed_rd8fwx_k$(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_minHeight__impl__ev4bgx(constraints)));
      }
      return _this__u8e3s4.layout$default_n19e5l_k$(boxWidth, boxHeight, VOID, BoxMeasurePolicy$measure$lambda_0(placeable, measurable, _this__u8e3s4, boxWidth, boxHeight, this));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.get_size_woubt6_k$();
    var placeables = fillArrayVal(Array(size), null);
    var hasMatchParentSizeChildren = false;
    var boxWidth_0 = {_v: _Constraints___get_minWidth__impl__hi9lfi(constraints)};
    var boxHeight_0 = {_v: _Constraints___get_minHeight__impl__ev4bgx(constraints)};
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = measurables.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.get_c1px32_k$(index);
        // Inline function 'androidx.compose.foundation.layout.BoxMeasurePolicy.measure.<anonymous>' call
        if (!get_matchesParentSize(item)) {
          var placeable_0 = item.measure_4dmfk1_k$(contentConstraints);
          placeables[index] = placeable_0;
          var tmp0_0 = boxWidth_0._v;
          // Inline function 'kotlin.math.max' call
          var b_1 = placeable_0.get_width_j0q4yl_k$();
          boxWidth_0._v = Math.max(tmp0_0, b_1);
          var tmp2_0 = boxHeight_0._v;
          // Inline function 'kotlin.math.max' call
          var b_2 = placeable_0.get_height_e7t92o_k$();
          boxHeight_0._v = Math.max(tmp2_0, b_2);
        } else {
          hasMatchParentSizeChildren = true;
        }
      }
       while (inductionVariable <= last);
    if (hasMatchParentSizeChildren) {
      var tmp0_minWidth = !(boxWidth_0._v === 2147483647) ? boxWidth_0._v : 0;
      var tmp1_minHeight = !(boxHeight_0._v === 2147483647) ? boxHeight_0._v : 0;
      var tmp2_maxWidth = boxWidth_0._v;
      var tmp3_maxHeight = boxHeight_0._v;
      var matchParentSizeConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
      // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.get_c1px32_k$(index_0);
          // Inline function 'androidx.compose.foundation.layout.BoxMeasurePolicy.measure.<anonymous>' call
          if (get_matchesParentSize(item_0)) {
            placeables[index_0] = item_0.measure_4dmfk1_k$(matchParentSizeConstraints);
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp_2 = boxWidth_0._v;
    var tmp_3 = boxHeight_0._v;
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp_2, tmp_3, VOID, BoxMeasurePolicy$measure$lambda_1(placeables, measurables, _this__u8e3s4, boxWidth_0, boxHeight_0, this));
  };
  protoOf(BoxMeasurePolicy).copy_rn860z_k$ = function (alignment, propagateMinConstraints) {
    return new BoxMeasurePolicy(alignment, propagateMinConstraints);
  };
  protoOf(BoxMeasurePolicy).copy$default_sj1k1e_k$ = function (alignment, propagateMinConstraints, $super) {
    alignment = alignment === VOID ? this.alignment_1 : alignment;
    propagateMinConstraints = propagateMinConstraints === VOID ? this.propagateMinConstraints_1 : propagateMinConstraints;
    return $super === VOID ? this.copy_rn860z_k$(alignment, propagateMinConstraints) : $super.copy_rn860z_k$.call(this, alignment, propagateMinConstraints);
  };
  protoOf(BoxMeasurePolicy).toString = function () {
    return 'BoxMeasurePolicy(alignment=' + toString_0(this.alignment_1) + ', propagateMinConstraints=' + this.propagateMinConstraints_1 + ')';
  };
  protoOf(BoxMeasurePolicy).hashCode = function () {
    var result = hashCode(this.alignment_1);
    result = imul(result, 31) + getBooleanHashCode(this.propagateMinConstraints_1) | 0;
    return result;
  };
  protoOf(BoxMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BoxMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof BoxMeasurePolicy ? other : THROW_CCE();
    if (!equals(this.alignment_1, tmp0_other_with_cast.alignment_1))
      return false;
    if (!(this.propagateMinConstraints_1 === tmp0_other_with_cast.propagateMinConstraints_1))
      return false;
    return true;
  };
  function get_matchesParentSize(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.matchParentSize_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function placeInBox(_this__u8e3s4, placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(measurable);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.alignment_1;
    var childAlignment = tmp1_elvis_lhs == null ? alignment : tmp1_elvis_lhs;
    var position = childAlignment.align_mb8mzc_k$(IntSize(placeable.get_width_j0q4yl_k$(), placeable.get_height_e7t92o_k$()), IntSize(boxWidth, boxHeight), layoutDirection);
    _this__u8e3s4.place$default_gmqxva_k$(placeable, position);
  }
  function BoxChildDataNode(alignment, matchParentSize) {
    Node.call(this);
    this.alignment_1 = alignment;
    this.matchParentSize_1 = matchParentSize;
  }
  protoOf(BoxChildDataNode).set_alignment_b4ulsx_k$ = function (_set____db54di) {
    this.alignment_1 = _set____db54di;
  };
  protoOf(BoxChildDataNode).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(BoxChildDataNode).set_matchParentSize_u0byam_k$ = function (_set____db54di) {
    this.matchParentSize_1 = _set____db54di;
  };
  protoOf(BoxChildDataNode).get_matchParentSize_onsyh3_k$ = function () {
    return this.matchParentSize_1;
  };
  protoOf(BoxChildDataNode).modifyParentData_nittj_k$ = function (_this__u8e3s4, parentData) {
    return this;
  };
  function get_boxChildDataNode(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _this__u8e3s4.get_parentData_o87vnn_k$();
    return tmp instanceof BoxChildDataNode ? tmp : null;
  }
  function Box(modifier, contentAlignment, propagateMinConstraints, content, $composer, $changed, $default) {
    _init_properties_Box_kt__tvzvdl();
    var modifier_0 = modifier;
    var contentAlignment_0 = contentAlignment;
    var propagateMinConstraints_0 = propagateMinConstraints;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
    if (!(($default & 1) === 0))
      modifier_0 = Companion_getInstance_1();
    if (!(($default & 2) === 0))
      contentAlignment_0 = Companion_getInstance().get_TopStart_o4x792_k$();
    if (!(($default & 4) === 0))
      propagateMinConstraints_0 = false;
    var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
    // Inline function 'androidx.compose.ui.layout.Layout' call
    var modifier_1 = modifier_0;
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
    if (!((0 & 2) === 0))
      modifier_1 = Companion_getInstance_1();
    var compositeKeyHash = get_currentCompositeKeyHash($composer_1, 0);
    var localMap = $composer_1.get_currentCompositionLocalMap_fmcf79_k$();
    var materialized = materialize($composer_1, modifier_1);
    var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
    var $composer_2 = $composer_1;
    sourceInformationMarkerStart($composer_2, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
    var tmp = $composer_2.get_applier_bupu8u_k$();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_2.startReusableNode_jjgeyp_k$();
    if ($composer_2.get_inserting_25mlsw_k$()) {
      $composer_2.createNode_ahrd54_k$(tmp0);
    } else {
      $composer_2.useNode_io5s9l_k$();
    }
    // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
    var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
    Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
    // Inline function 'androidx.compose.runtime.Updater.set' call
    var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
    if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
      $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
      _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
    }
    Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
    // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
    var $composer_3 = $composer_2;
    sourceInformationMarkerStart($composer_3, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
    content(BoxScopeInstance_getInstance(), $composer_3, 6 | 112 & $changed >> 6);
    sourceInformationMarkerEnd($composer_3);
    $composer_2.endNode_3m0yfn_k$();
    sourceInformationMarkerEnd($composer_2);
    sourceInformationMarkerEnd($composer_1);
    sourceInformationMarkerEnd($composer_0);
  }
  function BoxScope() {
  }
  function Box_0(modifier, $composer, $changed) {
    _init_properties_Box_kt__tvzvdl();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-211209833);
    sourceInformation($composer_0, 'C(Box)237@9098L66:Box.kt#2w3rfo');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-211209833, $dirty, -1, 'androidx.compose.foundation.layout.Box (Box.kt:236)');
      }
      var tmp1 = get_EmptyBoxMeasurePolicy();
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 544976794, 'CC(Layout)P(1)125@4862L23,128@5013L385:Layout.kt#80mrfh');
      if (!((0 & 1) === 0))
        modifier_0 = Companion_getInstance_1();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_1, 0);
      var materialized = materialize($composer_1, modifier_0);
      var localMap = $composer_1.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, 1405779621, 'CC(ReusableComposeNode):Composables.kt#9igjgp');
      var tmp = $composer_2.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_2.startReusableNode_jjgeyp_k$();
      if ($composer_2.get_inserting_25mlsw_k$()) {
        $composer_2.createNode_ahrd54_k$(factory);
      } else {
        $composer_2.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
      }
      $composer_2.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Box$lambda(modifier, $changed));
    }
  }
  function maybeCachedBoxMeasurePolicy(alignment, propagateMinConstraints) {
    _init_properties_Box_kt__tvzvdl();
    var cache = propagateMinConstraints ? get_cache1() : get_cache2();
    var tmp0_elvis_lhs = cache.get_wei43m_k$(alignment);
    return tmp0_elvis_lhs == null ? new BoxMeasurePolicy(alignment, propagateMinConstraints) : tmp0_elvis_lhs;
  }
  function BoxScopeInstance$align$lambda($alignment) {
    return function ($this$null) {
      $this$null.set_name_wkmnld_k$('align');
      $this$null.set_value_rjqr2d_k$($alignment);
      return Unit_getInstance();
    };
  }
  function BoxScopeInstance$matchParentSize$lambda($this$null) {
    // Inline function 'androidx.compose.foundation.layout.BoxScopeInstance.matchParentSize.<anonymous>' call
    $this$null.set_name_wkmnld_k$('matchParentSize');
    return Unit_getInstance();
  }
  function BoxScopeInstance() {
    BoxScopeInstance_instance = this;
  }
  protoOf(BoxScopeInstance).align_uxv7cf_k$ = function (_this__u8e3s4, alignment) {
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = BoxScopeInstance$align$lambda(alignment);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new BoxChildDataElement(alignment, false, tmp$ret$0));
  };
  protoOf(BoxScopeInstance).matchParentSize_g7jbar_k$ = function (_this__u8e3s4) {
    var tmp = Companion_getInstance().get_Center_3arb0i_k$();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp_0;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp_0 = BoxScopeInstance$matchParentSize$lambda;
    } else {
      tmp_0 = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp_0;
    return _this__u8e3s4.then_g5qrxq_k$(new BoxChildDataElement(tmp, true, tmp$ret$0));
  };
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    if (BoxScopeInstance_instance == null)
      new BoxScopeInstance();
    return BoxScopeInstance_instance;
  }
  function BoxChildDataElement(alignment, matchParentSize, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.alignment_1 = alignment;
    this.matchParentSize_1 = matchParentSize;
    this.inspectorInfo_1 = inspectorInfo;
  }
  protoOf(BoxChildDataElement).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(BoxChildDataElement).get_matchParentSize_onsyh3_k$ = function () {
    return this.matchParentSize_1;
  };
  protoOf(BoxChildDataElement).get_inspectorInfo_jx2bdo_k$ = function () {
    return this.inspectorInfo_1;
  };
  protoOf(BoxChildDataElement).create_md4cuc_k$ = function () {
    return new BoxChildDataNode(this.alignment_1, this.matchParentSize_1);
  };
  protoOf(BoxChildDataElement).update_6wuvmq_k$ = function (node) {
    node.alignment_1 = this.alignment_1;
    node.matchParentSize_1 = this.matchParentSize_1;
  };
  protoOf(BoxChildDataElement).update_9wd57p_k$ = function (node) {
    return this.update_6wuvmq_k$(node instanceof BoxChildDataNode ? node : THROW_CCE());
  };
  protoOf(BoxChildDataElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  protoOf(BoxChildDataElement).hashCode = function () {
    var result = hashCode(this.alignment_1);
    result = imul(31, result) + getBooleanHashCode(this.matchParentSize_1) | 0;
    return result;
  };
  protoOf(BoxChildDataElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof BoxChildDataElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.alignment_1, otherModifier.alignment_1) && this.matchParentSize_1 === otherModifier.matchParentSize_1;
  };
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).measure_xg9b01_k$ = function (_this__u8e3s4, measurables, constraints) {
    return this.function_1(_this__u8e3s4, measurables, new Constraints_0(constraints));
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, MeasurePolicy) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function cacheFor$_anonymous_$putAlignment_u13yrc($this_apply, $propagateMinConstraints, it) {
    $this_apply.put_4fpzoq_k$(it, new BoxMeasurePolicy(it, $propagateMinConstraints));
  }
  function EmptyBoxMeasurePolicy$lambda($this$MeasurePolicy, _anonymous_parameter_0__qggqh8, constraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.value_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1);
    return $this$MeasurePolicy.layout$default_n19e5l_k$(tmp, tmp_0, VOID, EmptyBoxMeasurePolicy$lambda$lambda);
  }
  function EmptyBoxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_getInstance();
  }
  function Box$lambda($modifier, $$changed) {
    return function ($composer, $force) {
      Box_0($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Box_kt_kr8cbp;
  function _init_properties_Box_kt__tvzvdl() {
    if (!properties_initialized_Box_kt_kr8cbp) {
      properties_initialized_Box_kt_kr8cbp = true;
      cache1 = cacheFor(true);
      cache2 = cacheFor(false);
      DefaultBoxMeasurePolicy = new BoxMeasurePolicy(Companion_getInstance().get_TopStart_o4x792_k$(), false);
      var tmp = EmptyBoxMeasurePolicy$lambda;
      EmptyBoxMeasurePolicy = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp);
    }
  }
  function get_DefaultColumnMeasurePolicy() {
    _init_properties_Column_kt__s1zb92();
    return DefaultColumnMeasurePolicy;
  }
  var DefaultColumnMeasurePolicy;
  function _get_verticalArrangement__8o51lp($this) {
    return $this.verticalArrangement_1;
  }
  function _get_horizontalAlignment__hyzxw2($this) {
    return $this.horizontalAlignment_1;
  }
  function getCrossAxisPosition($this, placeable, parentData, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, layoutDirection) {
    var childCrossAlignment = parentData == null ? null : parentData.get_crossAxisAlignment_ebqiz9_k$();
    var tmp2_elvis_lhs = childCrossAlignment == null ? null : childCrossAlignment.align_ibvdn1_k$(crossAxisLayoutSize - placeable.get_width_j0q4yl_k$() | 0, layoutDirection, placeable, beforeCrossAxisAlignmentLine);
    return tmp2_elvis_lhs == null ? $this.horizontalAlignment_1.align_y7fd6v_k$(0, crossAxisLayoutSize - placeable.get_width_j0q4yl_k$() | 0, layoutDirection) : tmp2_elvis_lhs;
  }
  function component1_0($this) {
    return $this.verticalArrangement_1;
  }
  function component2_0($this) {
    return $this.horizontalAlignment_1;
  }
  function ColumnMeasurePolicy$placeHelper$lambda($placeables, this$0, $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $measureScope, $mainAxisPositions) {
    return function ($this$layout) {
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.ColumnMeasurePolicy.placeHelper.<anonymous>.<anonymous>.<anonymous>' call
        var crossAxisPosition = getCrossAxisPosition(this$0, ensureNotNull(item), get_rowColumnParentData(item), $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $measureScope.get_layoutDirection_7e37v0_k$());
        $this$layout.place$default_lcv1ed_k$(item, crossAxisPosition, $mainAxisPositions[_unary__edvuaz]);
      }
      return Unit_getInstance();
    };
  }
  function ColumnMeasurePolicy(verticalArrangement, horizontalAlignment) {
    this.verticalArrangement_1 = verticalArrangement;
    this.horizontalAlignment_1 = horizontalAlignment;
  }
  protoOf(ColumnMeasurePolicy).mainAxisSize_q9nnsp_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_height_e7t92o_k$();
  };
  protoOf(ColumnMeasurePolicy).crossAxisSize_2m3wdq_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_width_j0q4yl_k$();
  };
  protoOf(ColumnMeasurePolicy).populateMainAxisPositions_z5r5pw_k$ = function (mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.layout.ColumnMeasurePolicy.populateMainAxisPositions.<anonymous>' call
    this.verticalArrangement_1.arrange_1pnoh8_k$(measureScope, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions);
  };
  protoOf(ColumnMeasurePolicy).placeHelper_9ldirp_k$ = function (placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.layout.ColumnMeasurePolicy.placeHelper.<anonymous>' call
    return measureScope.layout$default_n19e5l_k$(crossAxisLayoutSize, mainAxisLayoutSize, VOID, ColumnMeasurePolicy$placeHelper$lambda(placeables, this, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, measureScope, mainAxisPositions));
  };
  protoOf(ColumnMeasurePolicy).createConstraints_abox2e_k$ = function (mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) {
    return createColumnConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax);
  };
  protoOf(ColumnMeasurePolicy).measure_xg9b01_k$ = function (_this__u8e3s4, measurables, constraints) {
    var tmp = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp_1 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var tmp_2 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_3 = _this__u8e3s4.roundToPx_yb7vg8_k$(this.verticalArrangement_1.get_spacing_zb7agn_k$());
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.get_size_woubt6_k$();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    return measure(this, tmp, tmp_0, tmp_1, tmp_2, tmp_3, _this__u8e3s4, measurables, tmp$ret$0, 0, measurables.get_size_woubt6_k$());
  };
  protoOf(ColumnMeasurePolicy).minIntrinsicWidth_dwfcse_k$ = function (_this__u8e3s4, measurables, height) {
    return IntrinsicMeasureBlocks_getInstance().VerticalMinWidth_nd8iv_k$(measurables, height, _this__u8e3s4.roundToPx_yb7vg8_k$(this.verticalArrangement_1.get_spacing_zb7agn_k$()));
  };
  protoOf(ColumnMeasurePolicy).minIntrinsicHeight_xlhgwn_k$ = function (_this__u8e3s4, measurables, width) {
    return IntrinsicMeasureBlocks_getInstance().VerticalMinHeight_x1j23k_k$(measurables, width, _this__u8e3s4.roundToPx_yb7vg8_k$(this.verticalArrangement_1.get_spacing_zb7agn_k$()));
  };
  protoOf(ColumnMeasurePolicy).maxIntrinsicWidth_cx7ze4_k$ = function (_this__u8e3s4, measurables, height) {
    return IntrinsicMeasureBlocks_getInstance().VerticalMaxWidth_ycc5uz_k$(measurables, height, _this__u8e3s4.roundToPx_yb7vg8_k$(this.verticalArrangement_1.get_spacing_zb7agn_k$()));
  };
  protoOf(ColumnMeasurePolicy).maxIntrinsicHeight_3a4xm1_k$ = function (_this__u8e3s4, measurables, width) {
    return IntrinsicMeasureBlocks_getInstance().VerticalMaxHeight_drchte_k$(measurables, width, _this__u8e3s4.roundToPx_yb7vg8_k$(this.verticalArrangement_1.get_spacing_zb7agn_k$()));
  };
  protoOf(ColumnMeasurePolicy).copy_btg6p0_k$ = function (verticalArrangement, horizontalAlignment) {
    return new ColumnMeasurePolicy(verticalArrangement, horizontalAlignment);
  };
  protoOf(ColumnMeasurePolicy).copy$default_2g139s_k$ = function (verticalArrangement, horizontalAlignment, $super) {
    verticalArrangement = verticalArrangement === VOID ? this.verticalArrangement_1 : verticalArrangement;
    horizontalAlignment = horizontalAlignment === VOID ? this.horizontalAlignment_1 : horizontalAlignment;
    return $super === VOID ? this.copy_btg6p0_k$(verticalArrangement, horizontalAlignment) : $super.copy_btg6p0_k$.call(this, verticalArrangement, horizontalAlignment);
  };
  protoOf(ColumnMeasurePolicy).toString = function () {
    return 'ColumnMeasurePolicy(verticalArrangement=' + toString_0(this.verticalArrangement_1) + ', horizontalAlignment=' + toString_0(this.horizontalAlignment_1) + ')';
  };
  protoOf(ColumnMeasurePolicy).hashCode = function () {
    var result = hashCode(this.verticalArrangement_1);
    result = imul(result, 31) + hashCode(this.horizontalAlignment_1) | 0;
    return result;
  };
  protoOf(ColumnMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColumnMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof ColumnMeasurePolicy ? other : THROW_CCE();
    if (!equals(this.verticalArrangement_1, tmp0_other_with_cast.verticalArrangement_1))
      return false;
    if (!equals(this.horizontalAlignment_1, tmp0_other_with_cast.horizontalAlignment_1))
      return false;
    return true;
  };
  function createColumnConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax) {
    _init_properties_Column_kt__s1zb92();
    var tmp;
    if (!isPrioritizing) {
      tmp = Constraints(crossAxisMin, crossAxisMax, mainAxisMin, mainAxisMax);
    } else {
      tmp = Companion_getInstance_0().fitPrioritizingHeight_cdcbfz_k$(crossAxisMin, crossAxisMax, mainAxisMin, mainAxisMax);
    }
    return tmp;
  }
  function ColumnScope() {
  }
  function Column(modifier, verticalArrangement, horizontalAlignment, content, $composer, $changed, $default) {
    _init_properties_Column_kt__s1zb92();
    var modifier_0 = modifier;
    var verticalArrangement_0 = verticalArrangement;
    var horizontalAlignment_0 = horizontalAlignment;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
    if (!(($default & 1) === 0))
      modifier_0 = Companion_getInstance_1();
    if (!(($default & 2) === 0))
      verticalArrangement_0 = Arrangement_getInstance().get_Top_18jj1w_k$();
    if (!(($default & 4) === 0))
      horizontalAlignment_0 = Companion_getInstance().get_Start_ih4i6x_k$();
    var measurePolicy = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_0, 14 & $changed >> 3 | 112 & $changed >> 3);
    // Inline function 'androidx.compose.ui.layout.Layout' call
    var modifier_1 = modifier_0;
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
    if (!((0 & 2) === 0))
      modifier_1 = Companion_getInstance_1();
    var compositeKeyHash = get_currentCompositeKeyHash($composer_1, 0);
    var localMap = $composer_1.get_currentCompositionLocalMap_fmcf79_k$();
    var materialized = materialize($composer_1, modifier_1);
    var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
    var $composer_2 = $composer_1;
    sourceInformationMarkerStart($composer_2, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
    var tmp = $composer_2.get_applier_bupu8u_k$();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_2.startReusableNode_jjgeyp_k$();
    if ($composer_2.get_inserting_25mlsw_k$()) {
      $composer_2.createNode_ahrd54_k$(tmp0);
    } else {
      $composer_2.useNode_io5s9l_k$();
    }
    // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
    var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
    Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
    // Inline function 'androidx.compose.runtime.Updater.set' call
    var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
    if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
      $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
      _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
    }
    Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
    // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
    var $composer_3 = $composer_2;
    sourceInformationMarkerStart($composer_3, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
    content(ColumnScopeInstance_getInstance(), $composer_3, 6 | 112 & $changed >> 6);
    sourceInformationMarkerEnd($composer_3);
    $composer_2.endNode_3m0yfn_k$();
    sourceInformationMarkerEnd($composer_2);
    sourceInformationMarkerEnd($composer_1);
    sourceInformationMarkerEnd($composer_0);
  }
  function columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer, $changed) {
    _init_properties_Column_kt__s1zb92();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1089876336, 'C(columnMeasurePolicy)P(1):Column.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(1089876336, $changed, -1, 'androidx.compose.foundation.layout.columnMeasurePolicy (Column.kt:106)');
    }
    $composer_0.startReplaceGroup_5hh8aj_k$(-1789957655);
    sourceInformation($composer_0, '109@5034L227');
    var tmp;
    if (equals(verticalArrangement, Arrangement_getInstance().get_Top_18jj1w_k$()) && equals(horizontalAlignment, Companion_getInstance().get_Start_ih4i6x_k$())) {
      tmp = get_DefaultColumnMeasurePolicy();
    } else {
      sourceInformationMarkerStart($composer_0, -1789953197, 'CC(remember):Column.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(verticalArrangement) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.changed_ga7h3f_k$(horizontalAlignment) || ($changed & 48) === 32));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.foundation.layout.columnMeasurePolicy.<anonymous>' call
        var value = new ColumnMeasurePolicy(verticalArrangement, horizontalAlignment);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp = tmp1_group;
    }
    var tmp2_group = tmp;
    $composer_0.endReplaceGroup_ek144q_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp2_group;
  }
  function ColumnScopeInstance() {
    ColumnScopeInstance_instance = this;
  }
  protoOf(ColumnScopeInstance).weight_9ecvc_k$ = function (_this__u8e3s4, weight, fill) {
    // Inline function 'kotlin.require' call
    if (!(weight > 0.0)) {
      // Inline function 'androidx.compose.foundation.layout.ColumnScopeInstance.weight.<anonymous>' call
      var message = 'invalid weight ' + weight + '; must be greater than zero';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    return _this__u8e3s4.then_g5qrxq_k$(new LayoutWeightElement(coerceAtMost(weight, FloatCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$()), fill));
  };
  protoOf(ColumnScopeInstance).align_92hj17_k$ = function (_this__u8e3s4, alignment) {
    return _this__u8e3s4.then_g5qrxq_k$(new HorizontalAlignElement(alignment));
  };
  protoOf(ColumnScopeInstance).alignBy_j8kgee_k$ = function (_this__u8e3s4, alignmentLine) {
    return _this__u8e3s4.then_g5qrxq_k$(new WithAlignmentLineElement(alignmentLine));
  };
  protoOf(ColumnScopeInstance).alignBy_u3ww9h_k$ = function (_this__u8e3s4, alignmentLineBlock) {
    return _this__u8e3s4.then_g5qrxq_k$(new WithAlignmentLineBlockElement(alignmentLineBlock));
  };
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    if (ColumnScopeInstance_instance == null)
      new ColumnScopeInstance();
    return ColumnScopeInstance_instance;
  }
  var properties_initialized_Column_kt_nm4x4;
  function _init_properties_Column_kt__s1zb92() {
    if (!properties_initialized_Column_kt_nm4x4) {
      properties_initialized_Column_kt_nm4x4 = true;
      DefaultColumnMeasurePolicy = new ColumnMeasurePolicy(Arrangement_getInstance().get_Top_18jj1w_k$(), Companion_getInstance().get_Start_ih4i6x_k$());
    }
  }
  function get_CROSS_AXIS_ALIGNMENT_TOP() {
    _init_properties_FlowLayout_kt__ftkyso();
    return CROSS_AXIS_ALIGNMENT_TOP;
  }
  var CROSS_AXIS_ALIGNMENT_TOP;
  function get_CROSS_AXIS_ALIGNMENT_START() {
    _init_properties_FlowLayout_kt__ftkyso();
    return CROSS_AXIS_ALIGNMENT_START;
  }
  var CROSS_AXIS_ALIGNMENT_START;
  function FlowLayoutData(fillCrossAxisFraction) {
    this.fillCrossAxisFraction_1 = fillCrossAxisFraction;
  }
  protoOf(FlowLayoutData).set_fillCrossAxisFraction_8h96h1_k$ = function (_set____db54di) {
    this.fillCrossAxisFraction_1 = _set____db54di;
  };
  protoOf(FlowLayoutData).get_fillCrossAxisFraction_cbepx3_k$ = function () {
    return this.fillCrossAxisFraction_1;
  };
  protoOf(FlowLayoutData).component1_7eebsc_k$ = function () {
    return this.fillCrossAxisFraction_1;
  };
  protoOf(FlowLayoutData).copy_s06gv7_k$ = function (fillCrossAxisFraction) {
    return new FlowLayoutData(fillCrossAxisFraction);
  };
  protoOf(FlowLayoutData).copy$default_3i4fnw_k$ = function (fillCrossAxisFraction, $super) {
    fillCrossAxisFraction = fillCrossAxisFraction === VOID ? this.fillCrossAxisFraction_1 : fillCrossAxisFraction;
    return $super === VOID ? this.copy_s06gv7_k$(fillCrossAxisFraction) : $super.copy_s06gv7_k$.call(this, fillCrossAxisFraction);
  };
  protoOf(FlowLayoutData).toString = function () {
    return 'FlowLayoutData(fillCrossAxisFraction=' + this.fillCrossAxisFraction_1 + ')';
  };
  protoOf(FlowLayoutData).hashCode = function () {
    return getNumberHashCode(this.fillCrossAxisFraction_1);
  };
  protoOf(FlowLayoutData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlowLayoutData))
      return false;
    var tmp0_other_with_cast = other instanceof FlowLayoutData ? other : THROW_CCE();
    if (!equals(this.fillCrossAxisFraction_1, tmp0_other_with_cast.fillCrossAxisFraction_1))
      return false;
    return true;
  };
  var properties_initialized_FlowLayout_kt_edjldy;
  function _init_properties_FlowLayout_kt__ftkyso() {
    if (!properties_initialized_FlowLayout_kt_edjldy) {
      properties_initialized_FlowLayout_kt_edjldy = true;
      CROSS_AXIS_ALIGNMENT_TOP = Companion_getInstance_6().vertical_75z78f_k$(Companion_getInstance().get_Top_18jj1w_k$());
      CROSS_AXIS_ALIGNMENT_START = Companion_getInstance_6().horizontal_qgwvz5_k$(Companion_getInstance().get_Start_ih4i6x_k$());
    }
  }
  function LayoutScopeMarker() {
  }
  protoOf(LayoutScopeMarker).equals = function (other) {
    if (!(other instanceof LayoutScopeMarker))
      return false;
    other instanceof LayoutScopeMarker || THROW_CCE();
    return true;
  };
  protoOf(LayoutScopeMarker).hashCode = function () {
    return 0;
  };
  protoOf(LayoutScopeMarker).toString = function () {
    return '@androidx.compose.foundation.layout.LayoutScopeMarker(' + ')';
  };
  function offset_0(_this__u8e3s4, x, y) {
    var tmp;
    if (x === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = x;
    }
    x = tmp;
    var tmp_0;
    if (y === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = y;
    }
    y = tmp_0;
    return _this__u8e3s4.then_g5qrxq_k$(new OffsetElement(x, y, true, offset$lambda(x, y)));
  }
  function OffsetElement(x, y, rtlAware, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.x_1 = x;
    this.y_1 = y;
    this.rtlAware_1 = rtlAware;
    this.inspectorInfo_1 = inspectorInfo;
  }
  protoOf(OffsetElement).get_x_1efzdg_k$ = function () {
    return this.x_1;
  };
  protoOf(OffsetElement).get_y_xikap9_k$ = function () {
    return this.y_1;
  };
  protoOf(OffsetElement).get_rtlAware_ydysrn_k$ = function () {
    return this.rtlAware_1;
  };
  protoOf(OffsetElement).get_inspectorInfo_jx2bdo_k$ = function () {
    return this.inspectorInfo_1;
  };
  protoOf(OffsetElement).create_md4cuc_k$ = function () {
    return new OffsetNode(this.x_1, this.y_1, this.rtlAware_1);
  };
  protoOf(OffsetElement).update_m29w7g_k$ = function (node) {
    node.x_1 = this.x_1;
    node.y_1 = this.y_1;
    node.rtlAware_1 = this.rtlAware_1;
  };
  protoOf(OffsetElement).update_9wd57p_k$ = function (node) {
    return this.update_m29w7g_k$(node instanceof OffsetNode ? node : THROW_CCE());
  };
  protoOf(OffsetElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof OffsetElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifierElement = tmp;
    return equals(this.x_1, otherModifierElement.x_1) && equals(this.y_1, otherModifierElement.y_1) && this.rtlAware_1 === otherModifierElement.rtlAware_1;
  };
  protoOf(OffsetElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.x_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.y_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.rtlAware_1) | 0;
    return result;
  };
  protoOf(OffsetElement).toString = function () {
    return 'OffsetModifierElement(x=' + Dp__toString_impl_kcddez(this.x_1) + ', y=' + Dp__toString_impl_kcddez(this.y_1) + ', rtlAware=' + this.rtlAware_1 + ')';
  };
  protoOf(OffsetElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  function OffsetNode$measure$lambda(this$0, $placeable, $this_measure) {
    return function ($this$layout) {
      var tmp;
      if (this$0.rtlAware_1) {
        $this$layout.placeRelative$default_yv6dex_k$($placeable, $this_measure.roundToPx_yb7vg8_k$(this$0.x_1), $this_measure.roundToPx_yb7vg8_k$(this$0.y_1));
        tmp = Unit_getInstance();
      } else {
        $this$layout.place$default_lcv1ed_k$($placeable, $this_measure.roundToPx_yb7vg8_k$(this$0.x_1), $this_measure.roundToPx_yb7vg8_k$(this$0.y_1));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function OffsetNode(x, y, rtlAware) {
    Node.call(this);
    this.x_1 = x;
    this.y_1 = y;
    this.rtlAware_1 = rtlAware;
  }
  protoOf(OffsetNode).set_x_gusmuk_k$ = function (_set____db54di) {
    this.x_1 = _set____db54di;
  };
  protoOf(OffsetNode).get_x_1efzdg_k$ = function () {
    return this.x_1;
  };
  protoOf(OffsetNode).set_y_gmb7d7_k$ = function (_set____db54di) {
    this.y_1 = _set____db54di;
  };
  protoOf(OffsetNode).get_y_xikap9_k$ = function () {
    return this.y_1;
  };
  protoOf(OffsetNode).set_rtlAware_e2bw6c_k$ = function (_set____db54di) {
    this.rtlAware_1 = _set____db54di;
  };
  protoOf(OffsetNode).get_rtlAware_ydysrn_k$ = function () {
    return this.rtlAware_1;
  };
  protoOf(OffsetNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.measure_4dmfk1_k$(constraints);
    var tmp = placeable.get_width_j0q4yl_k$();
    var tmp_0 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, OffsetNode$measure$lambda(this, placeable, _this__u8e3s4));
  };
  function offset$lambda($x, $y) {
    return function ($this$$receiver) {
      $this$$receiver.set_name_wkmnld_k$('offset');
      $this$$receiver.get_properties_zhllqc_k$().set_vvveh5_k$('x', new Dp($x));
      $this$$receiver.get_properties_zhllqc_k$().set_vvveh5_k$('y', new Dp($y));
      return Unit_getInstance();
    };
  }
  function _get_left__d9qyp0($this) {
    return $this.left_1;
  }
  function _get_top__e6hfbw($this) {
    return $this.top_1;
  }
  function _get_right__bvz45n($this) {
    return $this.right_1;
  }
  function _get_bottom__w3218g($this) {
    return $this.bottom_1;
  }
  function Absolute_0(left, top, right, bottom) {
    var tmp;
    if (left === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = left;
    }
    left = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (right === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = right;
    }
    right = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
    // Inline function 'kotlin.require' call
    if (!(_Dp___get_value__impl__geb1vb(this.left_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.Absolute.<anonymous>' call
      var message = 'Left padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    if (!(_Dp___get_value__impl__geb1vb(this.top_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.Absolute.<anonymous>' call
      var message_0 = 'Top padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(_Dp___get_value__impl__geb1vb(this.right_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.Absolute.<anonymous>' call
      var message_1 = 'Right padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_0(message_1));
    }
    // Inline function 'kotlin.require' call
    if (!(_Dp___get_value__impl__geb1vb(this.bottom_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.Absolute.<anonymous>' call
      var message_2 = 'Bottom padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_0(message_2));
    }
  }
  protoOf(Absolute_0).calculateLeftPadding_trh5z9_k$ = function (layoutDirection) {
    return this.left_1;
  };
  protoOf(Absolute_0).calculateTopPadding_vlylwf_k$ = function () {
    return this.top_1;
  };
  protoOf(Absolute_0).calculateRightPadding_yc2gi_k$ = function (layoutDirection) {
    return this.right_1;
  };
  protoOf(Absolute_0).calculateBottomPadding_6z7ugt_k$ = function () {
    return this.bottom_1;
  };
  protoOf(Absolute_0).equals = function (other) {
    if (!(other instanceof Absolute_0))
      return false;
    return equals(this.left_1, other.left_1) && equals(this.top_1, other.top_1) && equals(this.right_1, other.right_1) && equals(this.bottom_1, other.bottom_1);
  };
  protoOf(Absolute_0).hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.left_1), 31) + Dp__hashCode_impl_sxkrra(this.top_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.right_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.bottom_1) | 0;
  };
  protoOf(Absolute_0).toString = function () {
    return 'PaddingValues.Absolute(left=' + Dp__toString_impl_kcddez(this.left_1) + ', top=' + Dp__toString_impl_kcddez(this.top_1) + ', right=' + Dp__toString_impl_kcddez(this.right_1) + ', bottom=' + Dp__toString_impl_kcddez(this.bottom_1) + ')';
  };
  function PaddingValues() {
  }
  function PaddingValues_0(all) {
    return new PaddingValuesImpl(all, all, all, all);
  }
  function PaddingValues_1(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return new PaddingValuesImpl(start, top, end, bottom);
  }
  function PaddingValues_2(horizontal, vertical) {
    var tmp;
    if (horizontal === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = horizontal;
    }
    horizontal = tmp;
    var tmp_0;
    if (vertical === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = vertical;
    }
    vertical = tmp_0;
    return new PaddingValuesImpl(horizontal, vertical, horizontal, vertical);
  }
  function padding(_this__u8e3s4, horizontal, vertical) {
    var tmp;
    if (horizontal === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = horizontal;
    }
    horizontal = tmp;
    var tmp_0;
    if (vertical === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = vertical;
    }
    vertical = tmp_0;
    return _this__u8e3s4.then_g5qrxq_k$(new PaddingElement(horizontal, vertical, horizontal, vertical, true, padding$lambda(horizontal, vertical)));
  }
  function calculateStartPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.calculateLeftPadding_trh5z9_k$(layoutDirection);
    } else {
      tmp = _this__u8e3s4.calculateRightPadding_yc2gi_k$(layoutDirection);
    }
    return tmp;
  }
  function calculateEndPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.calculateRightPadding_yc2gi_k$(layoutDirection);
    } else {
      tmp = _this__u8e3s4.calculateLeftPadding_trh5z9_k$(layoutDirection);
    }
    return tmp;
  }
  function padding_0(_this__u8e3s4, start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return _this__u8e3s4.then_g5qrxq_k$(new PaddingElement(start, top, end, bottom, true, padding$lambda_0(start, top, end, bottom)));
  }
  function padding_1(_this__u8e3s4, paddingValues) {
    return _this__u8e3s4.then_g5qrxq_k$(new PaddingValuesElement(paddingValues, padding$lambda_1(paddingValues)));
  }
  function padding_2(_this__u8e3s4, all) {
    return _this__u8e3s4.then_g5qrxq_k$(new PaddingElement(all, all, all, all, true, padding$lambda_2(all)));
  }
  function PaddingValuesImpl(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    this.start_1 = start;
    this.top_1 = top;
    this.end_1 = end;
    this.bottom_1 = bottom;
    // Inline function 'kotlin.require' call
    if (!(_Dp___get_value__impl__geb1vb(this.start_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesImpl.<anonymous>' call
      var message = 'Start padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    if (!(_Dp___get_value__impl__geb1vb(this.top_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesImpl.<anonymous>' call
      var message_0 = 'Top padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(_Dp___get_value__impl__geb1vb(this.end_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesImpl.<anonymous>' call
      var message_1 = 'End padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_0(message_1));
    }
    // Inline function 'kotlin.require' call
    if (!(_Dp___get_value__impl__geb1vb(this.bottom_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesImpl.<anonymous>' call
      var message_2 = 'Bottom padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_0(message_2));
    }
  }
  protoOf(PaddingValuesImpl).get_start_ehpdnu_k$ = function () {
    return this.start_1;
  };
  protoOf(PaddingValuesImpl).get_top_t6yz49_k$ = function () {
    return this.top_1;
  };
  protoOf(PaddingValuesImpl).get_end_hk2rin_k$ = function () {
    return this.end_1;
  };
  protoOf(PaddingValuesImpl).get_bottom_sk2u7j_k$ = function () {
    return this.bottom_1;
  };
  protoOf(PaddingValuesImpl).calculateLeftPadding_trh5z9_k$ = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.start_1 : this.end_1;
  };
  protoOf(PaddingValuesImpl).calculateTopPadding_vlylwf_k$ = function () {
    return this.top_1;
  };
  protoOf(PaddingValuesImpl).calculateRightPadding_yc2gi_k$ = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.end_1 : this.start_1;
  };
  protoOf(PaddingValuesImpl).calculateBottomPadding_6z7ugt_k$ = function () {
    return this.bottom_1;
  };
  protoOf(PaddingValuesImpl).equals = function (other) {
    if (!(other instanceof PaddingValuesImpl))
      return false;
    return equals(this.start_1, other.start_1) && equals(this.top_1, other.top_1) && equals(this.end_1, other.end_1) && equals(this.bottom_1, other.bottom_1);
  };
  protoOf(PaddingValuesImpl).hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.start_1), 31) + Dp__hashCode_impl_sxkrra(this.top_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.end_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.bottom_1) | 0;
  };
  protoOf(PaddingValuesImpl).toString = function () {
    return 'PaddingValues(start=' + Dp__toString_impl_kcddez(this.start_1) + ', top=' + Dp__toString_impl_kcddez(this.top_1) + ', end=' + Dp__toString_impl_kcddez(this.end_1) + ', bottom=' + Dp__toString_impl_kcddez(this.bottom_1) + ')';
  };
  function PaddingElement(start, top, end, bottom, rtlAware, inspectorInfo) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    ModifierNodeElement.call(this);
    this.start_1 = start;
    this.top_1 = top;
    this.end_1 = end;
    this.bottom_1 = bottom;
    this.rtlAware_1 = rtlAware;
    this.inspectorInfo_1 = inspectorInfo;
    // Inline function 'kotlin.require' call
    if (!((_Dp___get_value__impl__geb1vb(this.start_1) >= 0.0 || equals(this.start_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())) && (_Dp___get_value__impl__geb1vb(this.top_1) >= 0.0 || equals(this.top_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())) && (_Dp___get_value__impl__geb1vb(this.end_1) >= 0.0 || equals(this.end_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())) && (_Dp___get_value__impl__geb1vb(this.bottom_1) >= 0.0 || equals(this.bottom_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())))) {
      // Inline function 'androidx.compose.foundation.layout.PaddingElement.<anonymous>' call
      var message = 'Padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(PaddingElement).set_start_g1n0n6_k$ = function (_set____db54di) {
    this.start_1 = _set____db54di;
  };
  protoOf(PaddingElement).get_start_ehpdnu_k$ = function () {
    return this.start_1;
  };
  protoOf(PaddingElement).set_top_ad6hzl_k$ = function (_set____db54di) {
    this.top_1 = _set____db54di;
  };
  protoOf(PaddingElement).get_top_t6yz49_k$ = function () {
    return this.top_1;
  };
  protoOf(PaddingElement).set_end_cihadz_k$ = function (_set____db54di) {
    this.end_1 = _set____db54di;
  };
  protoOf(PaddingElement).get_end_hk2rin_k$ = function () {
    return this.end_1;
  };
  protoOf(PaddingElement).set_bottom_s6futb_k$ = function (_set____db54di) {
    this.bottom_1 = _set____db54di;
  };
  protoOf(PaddingElement).get_bottom_sk2u7j_k$ = function () {
    return this.bottom_1;
  };
  protoOf(PaddingElement).set_rtlAware_e2bw6c_k$ = function (_set____db54di) {
    this.rtlAware_1 = _set____db54di;
  };
  protoOf(PaddingElement).get_rtlAware_ydysrn_k$ = function () {
    return this.rtlAware_1;
  };
  protoOf(PaddingElement).get_inspectorInfo_jx2bdo_k$ = function () {
    return this.inspectorInfo_1;
  };
  protoOf(PaddingElement).create_md4cuc_k$ = function () {
    return new PaddingNode(this.start_1, this.top_1, this.end_1, this.bottom_1, this.rtlAware_1);
  };
  protoOf(PaddingElement).update_pvlr8i_k$ = function (node) {
    node.start_1 = this.start_1;
    node.top_1 = this.top_1;
    node.end_1 = this.end_1;
    node.bottom_1 = this.bottom_1;
    node.rtlAware_1 = this.rtlAware_1;
  };
  protoOf(PaddingElement).update_9wd57p_k$ = function (node) {
    return this.update_pvlr8i_k$(node instanceof PaddingNode ? node : THROW_CCE());
  };
  protoOf(PaddingElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.start_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.top_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.end_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.bottom_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.rtlAware_1) | 0;
    return result;
  };
  protoOf(PaddingElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifierElement = tmp;
    return equals(this.start_1, otherModifierElement.start_1) && equals(this.top_1, otherModifierElement.top_1) && equals(this.end_1, otherModifierElement.end_1) && equals(this.bottom_1, otherModifierElement.bottom_1) && this.rtlAware_1 === otherModifierElement.rtlAware_1;
  };
  protoOf(PaddingElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  function PaddingValuesElement(paddingValues, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.paddingValues_1 = paddingValues;
    this.inspectorInfo_1 = inspectorInfo;
  }
  protoOf(PaddingValuesElement).get_paddingValues_bdsiui_k$ = function () {
    return this.paddingValues_1;
  };
  protoOf(PaddingValuesElement).get_inspectorInfo_jx2bdo_k$ = function () {
    return this.inspectorInfo_1;
  };
  protoOf(PaddingValuesElement).create_md4cuc_k$ = function () {
    return new PaddingValuesModifier(this.paddingValues_1);
  };
  protoOf(PaddingValuesElement).update_1ky7sl_k$ = function (node) {
    node.paddingValues_1 = this.paddingValues_1;
  };
  protoOf(PaddingValuesElement).update_9wd57p_k$ = function (node) {
    return this.update_1ky7sl_k$(node instanceof PaddingValuesModifier ? node : THROW_CCE());
  };
  protoOf(PaddingValuesElement).hashCode = function () {
    return hashCode(this.paddingValues_1);
  };
  protoOf(PaddingValuesElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingValuesElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherElement = tmp;
    return equals(this.paddingValues_1, otherElement.paddingValues_1);
  };
  protoOf(PaddingValuesElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  function PaddingNode$measure$lambda(this$0, $placeable, $this_measure) {
    return function ($this$layout) {
      var tmp;
      if (this$0.rtlAware_1) {
        $this$layout.placeRelative$default_yv6dex_k$($placeable, $this_measure.roundToPx_yb7vg8_k$(this$0.start_1), $this_measure.roundToPx_yb7vg8_k$(this$0.top_1));
        tmp = Unit_getInstance();
      } else {
        $this$layout.place$default_lcv1ed_k$($placeable, $this_measure.roundToPx_yb7vg8_k$(this$0.start_1), $this_measure.roundToPx_yb7vg8_k$(this$0.top_1));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function PaddingNode(start, top, end, bottom, rtlAware) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    Node.call(this);
    this.start_1 = start;
    this.top_1 = top;
    this.end_1 = end;
    this.bottom_1 = bottom;
    this.rtlAware_1 = rtlAware;
  }
  protoOf(PaddingNode).set_start_g1n0n6_k$ = function (_set____db54di) {
    this.start_1 = _set____db54di;
  };
  protoOf(PaddingNode).get_start_ehpdnu_k$ = function () {
    return this.start_1;
  };
  protoOf(PaddingNode).set_top_ad6hzl_k$ = function (_set____db54di) {
    this.top_1 = _set____db54di;
  };
  protoOf(PaddingNode).get_top_t6yz49_k$ = function () {
    return this.top_1;
  };
  protoOf(PaddingNode).set_end_cihadz_k$ = function (_set____db54di) {
    this.end_1 = _set____db54di;
  };
  protoOf(PaddingNode).get_end_hk2rin_k$ = function () {
    return this.end_1;
  };
  protoOf(PaddingNode).set_bottom_s6futb_k$ = function (_set____db54di) {
    this.bottom_1 = _set____db54di;
  };
  protoOf(PaddingNode).get_bottom_sk2u7j_k$ = function () {
    return this.bottom_1;
  };
  protoOf(PaddingNode).set_rtlAware_e2bw6c_k$ = function (_set____db54di) {
    this.rtlAware_1 = _set____db54di;
  };
  protoOf(PaddingNode).get_rtlAware_ydysrn_k$ = function () {
    return this.rtlAware_1;
  };
  protoOf(PaddingNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var horizontal = _this__u8e3s4.roundToPx_yb7vg8_k$(this.start_1) + _this__u8e3s4.roundToPx_yb7vg8_k$(this.end_1) | 0;
    var vertical = _this__u8e3s4.roundToPx_yb7vg8_k$(this.top_1) + _this__u8e3s4.roundToPx_yb7vg8_k$(this.bottom_1) | 0;
    var placeable = measurable.measure_4dmfk1_k$(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.get_width_j0q4yl_k$() + horizontal | 0);
    var height = constrainHeight(constraints, placeable.get_height_e7t92o_k$() + vertical | 0);
    return _this__u8e3s4.layout$default_n19e5l_k$(width, height, VOID, PaddingNode$measure$lambda(this, placeable, _this__u8e3s4));
  };
  function PaddingValuesModifier$measure$lambda($placeable, $this_measure, this$0) {
    return function ($this$layout) {
      $this$layout.place$default_lcv1ed_k$($placeable, $this_measure.roundToPx_yb7vg8_k$(this$0.paddingValues_1.calculateLeftPadding_trh5z9_k$($this_measure.get_layoutDirection_7e37v0_k$())), $this_measure.roundToPx_yb7vg8_k$(this$0.paddingValues_1.calculateTopPadding_vlylwf_k$()));
      return Unit_getInstance();
    };
  }
  function PaddingValuesModifier(paddingValues) {
    Node.call(this);
    this.paddingValues_1 = paddingValues;
  }
  protoOf(PaddingValuesModifier).set_paddingValues_3xw8eb_k$ = function (_set____db54di) {
    this.paddingValues_1 = _set____db54di;
  };
  protoOf(PaddingValuesModifier).get_paddingValues_bdsiui_k$ = function () {
    return this.paddingValues_1;
  };
  protoOf(PaddingValuesModifier).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2 = this.paddingValues_1.calculateLeftPadding_trh5z9_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (Dp__compareTo_impl_tlg3dl(tmp_2, tmp$ret$0) >= 0) {
      var tmp_3 = this.paddingValues_1.calculateTopPadding_vlylwf_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      tmp_1 = Dp__compareTo_impl_tlg3dl(tmp_3, tmp$ret$1) >= 0;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_4 = this.paddingValues_1.calculateRightPadding_yc2gi_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
      tmp_0 = Dp__compareTo_impl_tlg3dl(tmp_4, tmp$ret$2) >= 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_5 = this.paddingValues_1.calculateBottomPadding_6z7ugt_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$3 = _Dp___init__impl__ms3zkb(0);
      tmp = Dp__compareTo_impl_tlg3dl(tmp_5, tmp$ret$3) >= 0;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesModifier.measure.<anonymous>' call
      var message = 'Padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    var horizontal = _this__u8e3s4.roundToPx_yb7vg8_k$(this.paddingValues_1.calculateLeftPadding_trh5z9_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$())) + _this__u8e3s4.roundToPx_yb7vg8_k$(this.paddingValues_1.calculateRightPadding_yc2gi_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$())) | 0;
    var vertical = _this__u8e3s4.roundToPx_yb7vg8_k$(this.paddingValues_1.calculateTopPadding_vlylwf_k$()) + _this__u8e3s4.roundToPx_yb7vg8_k$(this.paddingValues_1.calculateBottomPadding_6z7ugt_k$()) | 0;
    var placeable = measurable.measure_4dmfk1_k$(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.get_width_j0q4yl_k$() + horizontal | 0);
    var height = constrainHeight(constraints, placeable.get_height_e7t92o_k$() + vertical | 0);
    return _this__u8e3s4.layout$default_n19e5l_k$(width, height, VOID, PaddingValuesModifier$measure$lambda(placeable, _this__u8e3s4, this));
  };
  function padding$lambda($horizontal, $vertical) {
    return function ($this$$receiver) {
      $this$$receiver.set_name_wkmnld_k$('padding');
      $this$$receiver.get_properties_zhllqc_k$().set_vvveh5_k$('horizontal', new Dp($horizontal));
      $this$$receiver.get_properties_zhllqc_k$().set_vvveh5_k$('vertical', new Dp($vertical));
      return Unit_getInstance();
    };
  }
  function padding$lambda_0($start, $top, $end, $bottom) {
    return function ($this$$receiver) {
      $this$$receiver.set_name_wkmnld_k$('padding');
      $this$$receiver.get_properties_zhllqc_k$().set_vvveh5_k$('start', new Dp($start));
      $this$$receiver.get_properties_zhllqc_k$().set_vvveh5_k$('top', new Dp($top));
      $this$$receiver.get_properties_zhllqc_k$().set_vvveh5_k$('end', new Dp($end));
      $this$$receiver.get_properties_zhllqc_k$().set_vvveh5_k$('bottom', new Dp($bottom));
      return Unit_getInstance();
    };
  }
  function padding$lambda_1($paddingValues) {
    return function ($this$$receiver) {
      $this$$receiver.set_name_wkmnld_k$('padding');
      $this$$receiver.get_properties_zhllqc_k$().set_vvveh5_k$('paddingValues', $paddingValues);
      return Unit_getInstance();
    };
  }
  function padding$lambda_2($all) {
    return function ($this$$receiver) {
      $this$$receiver.set_name_wkmnld_k$('padding');
      $this$$receiver.set_value_rjqr2d_k$(new Dp($all));
      return Unit_getInstance();
    };
  }
  function get_DefaultRowMeasurePolicy() {
    _init_properties_Row_kt__jenljs();
    return DefaultRowMeasurePolicy;
  }
  var DefaultRowMeasurePolicy;
  function _get_horizontalArrangement__yigl9x($this) {
    return $this.horizontalArrangement_1;
  }
  function _get_verticalAlignment__1j8kpw($this) {
    return $this.verticalAlignment_1;
  }
  function getCrossAxisPosition_0($this, placeable, parentData, crossAxisLayoutSize, beforeCrossAxisAlignmentLine) {
    var childCrossAlignment = parentData == null ? null : parentData.get_crossAxisAlignment_ebqiz9_k$();
    var tmp2_elvis_lhs = childCrossAlignment == null ? null : childCrossAlignment.align_ibvdn1_k$(crossAxisLayoutSize - placeable.get_height_e7t92o_k$() | 0, LayoutDirection_Ltr_getInstance(), placeable, beforeCrossAxisAlignmentLine);
    return tmp2_elvis_lhs == null ? $this.verticalAlignment_1.align_k316px_k$(0, crossAxisLayoutSize - placeable.get_height_e7t92o_k$() | 0) : tmp2_elvis_lhs;
  }
  function component1_1($this) {
    return $this.horizontalArrangement_1;
  }
  function component2_1($this) {
    return $this.verticalAlignment_1;
  }
  function RowMeasurePolicy$placeHelper$lambda($placeables, this$0, $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $mainAxisPositions) {
    return function ($this$layout) {
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.RowMeasurePolicy.placeHelper.<anonymous>.<anonymous>.<anonymous>' call
        var crossAxisPosition = getCrossAxisPosition_0(this$0, ensureNotNull(item), get_rowColumnParentData(item), $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine);
        $this$layout.place$default_lcv1ed_k$(item, $mainAxisPositions[_unary__edvuaz], crossAxisPosition);
      }
      return Unit_getInstance();
    };
  }
  function RowMeasurePolicy(horizontalArrangement, verticalAlignment) {
    this.horizontalArrangement_1 = horizontalArrangement;
    this.verticalAlignment_1 = verticalAlignment;
  }
  protoOf(RowMeasurePolicy).mainAxisSize_q9nnsp_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_width_j0q4yl_k$();
  };
  protoOf(RowMeasurePolicy).crossAxisSize_2m3wdq_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_height_e7t92o_k$();
  };
  protoOf(RowMeasurePolicy).measure_xg9b01_k$ = function (_this__u8e3s4, measurables, constraints) {
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var tmp_3 = _this__u8e3s4.roundToPx_yb7vg8_k$(this.horizontalArrangement_1.get_spacing_zb7agn_k$());
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.get_size_woubt6_k$();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    return measure(this, tmp, tmp_0, tmp_1, tmp_2, tmp_3, _this__u8e3s4, measurables, tmp$ret$0, 0, measurables.get_size_woubt6_k$());
  };
  protoOf(RowMeasurePolicy).populateMainAxisPositions_z5r5pw_k$ = function (mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.layout.RowMeasurePolicy.populateMainAxisPositions.<anonymous>' call
    this.horizontalArrangement_1.arrange_f41npy_k$(measureScope, mainAxisLayoutSize, childrenMainAxisSize, measureScope.get_layoutDirection_7e37v0_k$(), mainAxisPositions);
  };
  protoOf(RowMeasurePolicy).placeHelper_9ldirp_k$ = function (placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.layout.RowMeasurePolicy.placeHelper.<anonymous>' call
    return measureScope.layout$default_n19e5l_k$(mainAxisLayoutSize, crossAxisLayoutSize, VOID, RowMeasurePolicy$placeHelper$lambda(placeables, this, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, mainAxisPositions));
  };
  protoOf(RowMeasurePolicy).createConstraints_abox2e_k$ = function (mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) {
    return createRowConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax);
  };
  protoOf(RowMeasurePolicy).minIntrinsicWidth_dwfcse_k$ = function (_this__u8e3s4, measurables, height) {
    return IntrinsicMeasureBlocks_getInstance().HorizontalMinWidth_glftwr_k$(measurables, height, _this__u8e3s4.roundToPx_yb7vg8_k$(this.horizontalArrangement_1.get_spacing_zb7agn_k$()));
  };
  protoOf(RowMeasurePolicy).minIntrinsicHeight_xlhgwn_k$ = function (_this__u8e3s4, measurables, width) {
    return IntrinsicMeasureBlocks_getInstance().HorizontalMinHeight_4bpnim_k$(measurables, width, _this__u8e3s4.roundToPx_yb7vg8_k$(this.horizontalArrangement_1.get_spacing_zb7agn_k$()));
  };
  protoOf(RowMeasurePolicy).maxIntrinsicWidth_cx7ze4_k$ = function (_this__u8e3s4, measurables, height) {
    return IntrinsicMeasureBlocks_getInstance().HorizontalMaxWidth_jfytoj_k$(measurables, height, _this__u8e3s4.roundToPx_yb7vg8_k$(this.horizontalArrangement_1.get_spacing_zb7agn_k$()));
  };
  protoOf(RowMeasurePolicy).maxIntrinsicHeight_3a4xm1_k$ = function (_this__u8e3s4, measurables, width) {
    return IntrinsicMeasureBlocks_getInstance().HorizontalMaxHeight_nlw7ss_k$(measurables, width, _this__u8e3s4.roundToPx_yb7vg8_k$(this.horizontalArrangement_1.get_spacing_zb7agn_k$()));
  };
  protoOf(RowMeasurePolicy).copy_fg961o_k$ = function (horizontalArrangement, verticalAlignment) {
    return new RowMeasurePolicy(horizontalArrangement, verticalAlignment);
  };
  protoOf(RowMeasurePolicy).copy$default_84bqfw_k$ = function (horizontalArrangement, verticalAlignment, $super) {
    horizontalArrangement = horizontalArrangement === VOID ? this.horizontalArrangement_1 : horizontalArrangement;
    verticalAlignment = verticalAlignment === VOID ? this.verticalAlignment_1 : verticalAlignment;
    return $super === VOID ? this.copy_fg961o_k$(horizontalArrangement, verticalAlignment) : $super.copy_fg961o_k$.call(this, horizontalArrangement, verticalAlignment);
  };
  protoOf(RowMeasurePolicy).toString = function () {
    return 'RowMeasurePolicy(horizontalArrangement=' + toString_0(this.horizontalArrangement_1) + ', verticalAlignment=' + toString_0(this.verticalAlignment_1) + ')';
  };
  protoOf(RowMeasurePolicy).hashCode = function () {
    var result = hashCode(this.horizontalArrangement_1);
    result = imul(result, 31) + hashCode(this.verticalAlignment_1) | 0;
    return result;
  };
  protoOf(RowMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof RowMeasurePolicy ? other : THROW_CCE();
    if (!equals(this.horizontalArrangement_1, tmp0_other_with_cast.horizontalArrangement_1))
      return false;
    if (!equals(this.verticalAlignment_1, tmp0_other_with_cast.verticalAlignment_1))
      return false;
    return true;
  };
  function createRowConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax) {
    _init_properties_Row_kt__jenljs();
    var tmp;
    if (!isPrioritizing) {
      tmp = Constraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    } else {
      tmp = Companion_getInstance_0().fitPrioritizingWidth_o0ab04_k$(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    }
    return tmp;
  }
  function Row(modifier, horizontalArrangement, verticalAlignment, content, $composer, $changed, $default) {
    _init_properties_Row_kt__jenljs();
    var modifier_0 = modifier;
    var horizontalArrangement_0 = horizontalArrangement;
    var verticalAlignment_0 = verticalAlignment;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
    if (!(($default & 1) === 0))
      modifier_0 = Companion_getInstance_1();
    if (!(($default & 2) === 0))
      horizontalArrangement_0 = Arrangement_getInstance().get_Start_ih4i6x_k$();
    if (!(($default & 4) === 0))
      verticalAlignment_0 = Companion_getInstance().get_Top_18jj1w_k$();
    var measurePolicy = rowMeasurePolicy(horizontalArrangement_0, verticalAlignment_0, $composer_0, 14 & $changed >> 3 | 112 & $changed >> 3);
    // Inline function 'androidx.compose.ui.layout.Layout' call
    var modifier_1 = modifier_0;
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
    if (!((0 & 2) === 0))
      modifier_1 = Companion_getInstance_1();
    var compositeKeyHash = get_currentCompositeKeyHash($composer_1, 0);
    var localMap = $composer_1.get_currentCompositionLocalMap_fmcf79_k$();
    var materialized = materialize($composer_1, modifier_1);
    var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
    var $composer_2 = $composer_1;
    sourceInformationMarkerStart($composer_2, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
    var tmp = $composer_2.get_applier_bupu8u_k$();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_2.startReusableNode_jjgeyp_k$();
    if ($composer_2.get_inserting_25mlsw_k$()) {
      $composer_2.createNode_ahrd54_k$(tmp0);
    } else {
      $composer_2.useNode_io5s9l_k$();
    }
    // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
    var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
    Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
    // Inline function 'androidx.compose.runtime.Updater.set' call
    var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
    if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
      $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
      _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
    }
    Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
    // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
    var $composer_3 = $composer_2;
    sourceInformationMarkerStart($composer_3, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
    content(RowScopeInstance_getInstance(), $composer_3, 6 | 112 & $changed >> 6);
    sourceInformationMarkerEnd($composer_3);
    $composer_2.endNode_3m0yfn_k$();
    sourceInformationMarkerEnd($composer_2);
    sourceInformationMarkerEnd($composer_1);
    sourceInformationMarkerEnd($composer_0);
  }
  function RowScope() {
  }
  function rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer, $changed) {
    _init_properties_Row_kt__jenljs();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -837807694, 'C(rowMeasurePolicy):Row.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-837807694, $changed, -1, 'androidx.compose.foundation.layout.rowMeasurePolicy (Row.kt:122)');
    }
    $composer_0.startReplaceGroup_5hh8aj_k$(-1828507469);
    sourceInformation($composer_0, '125@5803L224');
    var tmp;
    if (equals(horizontalArrangement, Arrangement_getInstance().get_Start_ih4i6x_k$()) && equals(verticalAlignment, Companion_getInstance().get_Top_18jj1w_k$())) {
      tmp = get_DefaultRowMeasurePolicy();
    } else {
      sourceInformationMarkerStart($composer_0, -1828503104, 'CC(remember):Row.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(horizontalArrangement) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.changed_ga7h3f_k$(verticalAlignment) || ($changed & 48) === 32));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.foundation.layout.rowMeasurePolicy.<anonymous>' call
        var value = new RowMeasurePolicy(horizontalArrangement, verticalAlignment);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp = tmp1_group;
    }
    var tmp2_group = tmp;
    $composer_0.endReplaceGroup_ek144q_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp2_group;
  }
  function RowScopeInstance() {
    RowScopeInstance_instance = this;
  }
  protoOf(RowScopeInstance).weight_9ecvc_k$ = function (_this__u8e3s4, weight, fill) {
    // Inline function 'kotlin.require' call
    if (!(weight > 0.0)) {
      // Inline function 'androidx.compose.foundation.layout.RowScopeInstance.weight.<anonymous>' call
      var message = 'invalid weight ' + weight + '; must be greater than zero';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    return _this__u8e3s4.then_g5qrxq_k$(new LayoutWeightElement(coerceAtMost(weight, FloatCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$()), fill));
  };
  protoOf(RowScopeInstance).align_7cl60d_k$ = function (_this__u8e3s4, alignment) {
    return _this__u8e3s4.then_g5qrxq_k$(new VerticalAlignElement(alignment));
  };
  protoOf(RowScopeInstance).alignBy_vm0eeg_k$ = function (_this__u8e3s4, alignmentLine) {
    return _this__u8e3s4.then_g5qrxq_k$(new WithAlignmentLineElement(alignmentLine));
  };
  protoOf(RowScopeInstance).alignByBaseline_ebowro_k$ = function (_this__u8e3s4) {
    return this.alignBy_vm0eeg_k$(_this__u8e3s4, get_FirstBaseline());
  };
  protoOf(RowScopeInstance).alignBy_u3ww9h_k$ = function (_this__u8e3s4, alignmentLineBlock) {
    return _this__u8e3s4.then_g5qrxq_k$(new WithAlignmentLineBlockElement(alignmentLineBlock));
  };
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    if (RowScopeInstance_instance == null)
      new RowScopeInstance();
    return RowScopeInstance_instance;
  }
  var properties_initialized_Row_kt_sbxnna;
  function _init_properties_Row_kt__jenljs() {
    if (!properties_initialized_Row_kt_sbxnna) {
      properties_initialized_Row_kt_sbxnna = true;
      DefaultRowMeasurePolicy = new RowMeasurePolicy(Arrangement_getInstance().get_Start_ih4i6x_k$(), Companion_getInstance().get_Top_18jj1w_k$());
    }
  }
  function RowColumnParentData(weight, fill, crossAxisAlignment, flowLayoutData) {
    weight = weight === VOID ? 0.0 : weight;
    fill = fill === VOID ? true : fill;
    crossAxisAlignment = crossAxisAlignment === VOID ? null : crossAxisAlignment;
    flowLayoutData = flowLayoutData === VOID ? null : flowLayoutData;
    this.weight_1 = weight;
    this.fill_1 = fill;
    this.crossAxisAlignment_1 = crossAxisAlignment;
    this.flowLayoutData_1 = flowLayoutData;
  }
  protoOf(RowColumnParentData).set_weight_l75ca5_k$ = function (_set____db54di) {
    this.weight_1 = _set____db54di;
  };
  protoOf(RowColumnParentData).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  protoOf(RowColumnParentData).set_fill_3wer9x_k$ = function (_set____db54di) {
    this.fill_1 = _set____db54di;
  };
  protoOf(RowColumnParentData).get_fill_wom0ng_k$ = function () {
    return this.fill_1;
  };
  protoOf(RowColumnParentData).set_crossAxisAlignment_3nt3xe_k$ = function (_set____db54di) {
    this.crossAxisAlignment_1 = _set____db54di;
  };
  protoOf(RowColumnParentData).get_crossAxisAlignment_ebqiz9_k$ = function () {
    return this.crossAxisAlignment_1;
  };
  protoOf(RowColumnParentData).set_flowLayoutData_rwf4pq_k$ = function (_set____db54di) {
    this.flowLayoutData_1 = _set____db54di;
  };
  protoOf(RowColumnParentData).get_flowLayoutData_cl5r63_k$ = function () {
    return this.flowLayoutData_1;
  };
  protoOf(RowColumnParentData).component1_7eebsc_k$ = function () {
    return this.weight_1;
  };
  protoOf(RowColumnParentData).component2_7eebsb_k$ = function () {
    return this.fill_1;
  };
  protoOf(RowColumnParentData).component3_7eebsa_k$ = function () {
    return this.crossAxisAlignment_1;
  };
  protoOf(RowColumnParentData).component4_7eebs9_k$ = function () {
    return this.flowLayoutData_1;
  };
  protoOf(RowColumnParentData).copy_z5c3xk_k$ = function (weight, fill, crossAxisAlignment, flowLayoutData) {
    return new RowColumnParentData(weight, fill, crossAxisAlignment, flowLayoutData);
  };
  protoOf(RowColumnParentData).copy$default_8rho3c_k$ = function (weight, fill, crossAxisAlignment, flowLayoutData, $super) {
    weight = weight === VOID ? this.weight_1 : weight;
    fill = fill === VOID ? this.fill_1 : fill;
    crossAxisAlignment = crossAxisAlignment === VOID ? this.crossAxisAlignment_1 : crossAxisAlignment;
    flowLayoutData = flowLayoutData === VOID ? this.flowLayoutData_1 : flowLayoutData;
    return $super === VOID ? this.copy_z5c3xk_k$(weight, fill, crossAxisAlignment, flowLayoutData) : $super.copy_z5c3xk_k$.call(this, weight, fill, crossAxisAlignment, flowLayoutData);
  };
  protoOf(RowColumnParentData).toString = function () {
    return 'RowColumnParentData(weight=' + this.weight_1 + ', fill=' + this.fill_1 + ', crossAxisAlignment=' + toString(this.crossAxisAlignment_1) + ', flowLayoutData=' + toString(this.flowLayoutData_1) + ')';
  };
  protoOf(RowColumnParentData).hashCode = function () {
    var result = getNumberHashCode(this.weight_1);
    result = imul(result, 31) + getBooleanHashCode(this.fill_1) | 0;
    result = imul(result, 31) + (this.crossAxisAlignment_1 == null ? 0 : hashCode(this.crossAxisAlignment_1)) | 0;
    result = imul(result, 31) + (this.flowLayoutData_1 == null ? 0 : this.flowLayoutData_1.hashCode()) | 0;
    return result;
  };
  protoOf(RowColumnParentData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowColumnParentData))
      return false;
    var tmp0_other_with_cast = other instanceof RowColumnParentData ? other : THROW_CCE();
    if (!equals(this.weight_1, tmp0_other_with_cast.weight_1))
      return false;
    if (!(this.fill_1 === tmp0_other_with_cast.fill_1))
      return false;
    if (!equals(this.crossAxisAlignment_1, tmp0_other_with_cast.crossAxisAlignment_1))
      return false;
    if (!equals(this.flowLayoutData_1, tmp0_other_with_cast.flowLayoutData_1))
      return false;
    return true;
  };
  function get_rowColumnParentData(_this__u8e3s4) {
    var tmp = _this__u8e3s4.get_parentData_o87vnn_k$();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function Companion() {
    Companion_instance = this;
    this.Center_1 = CenterCrossAxisAlignment_getInstance();
    this.Start_1 = StartCrossAxisAlignment_getInstance();
    this.End_1 = EndCrossAxisAlignment_getInstance();
  }
  protoOf(Companion).get_Center_3arb0i_k$ = function () {
    return this.Center_1;
  };
  protoOf(Companion).get_Start_ih4i6x_k$ = function () {
    return this.Start_1;
  };
  protoOf(Companion).get_End_18ju7i_k$ = function () {
    return this.End_1;
  };
  protoOf(Companion).AlignmentLine_tujeb5_k$ = function (alignmentLine) {
    return new AlignmentLineCrossAxisAlignment(new Value(alignmentLine));
  };
  protoOf(Companion).Relative_yycgpe_k$ = function (alignmentLineProvider) {
    return new AlignmentLineCrossAxisAlignment(alignmentLineProvider);
  };
  protoOf(Companion).vertical_75z78f_k$ = function (vertical) {
    return new VerticalCrossAxisAlignment(vertical);
  };
  protoOf(Companion).horizontal_qgwvz5_k$ = function (horizontal) {
    return new HorizontalCrossAxisAlignment(horizontal);
  };
  var Companion_instance;
  function Companion_getInstance_6() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CenterCrossAxisAlignment() {
    CenterCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(CenterCrossAxisAlignment).align_ibvdn1_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return size / 2 | 0;
  };
  var CenterCrossAxisAlignment_instance;
  function CenterCrossAxisAlignment_getInstance() {
    if (CenterCrossAxisAlignment_instance == null)
      new CenterCrossAxisAlignment();
    return CenterCrossAxisAlignment_instance;
  }
  function StartCrossAxisAlignment() {
    StartCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(StartCrossAxisAlignment).align_ibvdn1_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? 0 : size;
  };
  var StartCrossAxisAlignment_instance;
  function StartCrossAxisAlignment_getInstance() {
    if (StartCrossAxisAlignment_instance == null)
      new StartCrossAxisAlignment();
    return StartCrossAxisAlignment_instance;
  }
  function EndCrossAxisAlignment() {
    EndCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(EndCrossAxisAlignment).align_ibvdn1_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? size : 0;
  };
  var EndCrossAxisAlignment_instance;
  function EndCrossAxisAlignment_getInstance() {
    if (EndCrossAxisAlignment_instance == null)
      new EndCrossAxisAlignment();
    return EndCrossAxisAlignment_instance;
  }
  function AlignmentLineCrossAxisAlignment(alignmentLineProvider) {
    CrossAxisAlignment.call(this);
    this.alignmentLineProvider_1 = alignmentLineProvider;
  }
  protoOf(AlignmentLineCrossAxisAlignment).get_alignmentLineProvider_242uu9_k$ = function () {
    return this.alignmentLineProvider_1;
  };
  protoOf(AlignmentLineCrossAxisAlignment).get_isRelative_7qih6l_k$ = function () {
    return true;
  };
  protoOf(AlignmentLineCrossAxisAlignment).calculateAlignmentLinePosition_kp8mom_k$ = function (placeable) {
    return this.alignmentLineProvider_1.calculateAlignmentLinePosition_lw7yd4_k$(placeable);
  };
  protoOf(AlignmentLineCrossAxisAlignment).align_ibvdn1_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    var alignmentLinePosition = this.alignmentLineProvider_1.calculateAlignmentLinePosition_lw7yd4_k$(placeable);
    var tmp;
    if (!(alignmentLinePosition === -2147483648)) {
      var line = beforeCrossAxisAlignmentLine - alignmentLinePosition | 0;
      var tmp_0;
      if (layoutDirection.equals(LayoutDirection_Rtl_getInstance())) {
        tmp_0 = size - line | 0;
      } else {
        tmp_0 = line;
      }
      tmp = tmp_0;
    } else {
      tmp = 0;
    }
    return tmp;
  };
  function VerticalCrossAxisAlignment(vertical) {
    CrossAxisAlignment.call(this);
    this.vertical_1 = vertical;
  }
  protoOf(VerticalCrossAxisAlignment).get_vertical_6ev9z3_k$ = function () {
    return this.vertical_1;
  };
  protoOf(VerticalCrossAxisAlignment).align_ibvdn1_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.vertical_1.align_k316px_k$(0, size);
  };
  protoOf(VerticalCrossAxisAlignment).component1_7eebsc_k$ = function () {
    return this.vertical_1;
  };
  protoOf(VerticalCrossAxisAlignment).copy_ysuu68_k$ = function (vertical) {
    return new VerticalCrossAxisAlignment(vertical);
  };
  protoOf(VerticalCrossAxisAlignment).copy$default_p5f22c_k$ = function (vertical, $super) {
    vertical = vertical === VOID ? this.vertical_1 : vertical;
    return $super === VOID ? this.copy_ysuu68_k$(vertical) : $super.copy_ysuu68_k$.call(this, vertical);
  };
  protoOf(VerticalCrossAxisAlignment).toString = function () {
    return 'VerticalCrossAxisAlignment(vertical=' + toString_0(this.vertical_1) + ')';
  };
  protoOf(VerticalCrossAxisAlignment).hashCode = function () {
    return hashCode(this.vertical_1);
  };
  protoOf(VerticalCrossAxisAlignment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerticalCrossAxisAlignment))
      return false;
    var tmp0_other_with_cast = other instanceof VerticalCrossAxisAlignment ? other : THROW_CCE();
    if (!equals(this.vertical_1, tmp0_other_with_cast.vertical_1))
      return false;
    return true;
  };
  function HorizontalCrossAxisAlignment(horizontal) {
    CrossAxisAlignment.call(this);
    this.horizontal_1 = horizontal;
  }
  protoOf(HorizontalCrossAxisAlignment).get_horizontal_2rwn8t_k$ = function () {
    return this.horizontal_1;
  };
  protoOf(HorizontalCrossAxisAlignment).align_ibvdn1_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.horizontal_1.align_y7fd6v_k$(0, size, layoutDirection);
  };
  protoOf(HorizontalCrossAxisAlignment).component1_7eebsc_k$ = function () {
    return this.horizontal_1;
  };
  protoOf(HorizontalCrossAxisAlignment).copy_ank2s2_k$ = function (horizontal) {
    return new HorizontalCrossAxisAlignment(horizontal);
  };
  protoOf(HorizontalCrossAxisAlignment).copy$default_ecyf90_k$ = function (horizontal, $super) {
    horizontal = horizontal === VOID ? this.horizontal_1 : horizontal;
    return $super === VOID ? this.copy_ank2s2_k$(horizontal) : $super.copy_ank2s2_k$.call(this, horizontal);
  };
  protoOf(HorizontalCrossAxisAlignment).toString = function () {
    return 'HorizontalCrossAxisAlignment(horizontal=' + toString_0(this.horizontal_1) + ')';
  };
  protoOf(HorizontalCrossAxisAlignment).hashCode = function () {
    return hashCode(this.horizontal_1);
  };
  protoOf(HorizontalCrossAxisAlignment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HorizontalCrossAxisAlignment))
      return false;
    var tmp0_other_with_cast = other instanceof HorizontalCrossAxisAlignment ? other : THROW_CCE();
    if (!equals(this.horizontal_1, tmp0_other_with_cast.horizontal_1))
      return false;
    return true;
  };
  function CrossAxisAlignment() {
    Companion_getInstance_6();
  }
  protoOf(CrossAxisAlignment).get_isRelative_7qih6l_k$ = function () {
    return false;
  };
  protoOf(CrossAxisAlignment).calculateAlignmentLinePosition_kp8mom_k$ = function (placeable) {
    return null;
  };
  function IntrinsicMeasureBlocks() {
    IntrinsicMeasureBlocks_instance = this;
  }
  protoOf(IntrinsicMeasureBlocks).HorizontalMinWidth_glftwr_k$ = function (measurables, availableHeight, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var weightUnitSpace = 0;
      var fixedSpace = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.get_c1px32_k$(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMinWidth.<anonymous>' call
          var size = item.minIntrinsicWidth_jyhjuj_k$(availableHeight);
          if (weight === 0.0) {
            fixedSpace = fixedSpace + size | 0;
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
            var tmp1 = weightUnitSpace;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            var this_0 = size / weight;
            // Inline function 'kotlin.math.max' call
            var b = roundToInt(this_0);
            weightUnitSpace = Math.max(tmp1, b);
          }
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = weightUnitSpace * totalWeight;
      tmp$ret$0 = (roundToInt(this_1) + fixedSpace | 0) + imul(measurables.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing) | 0;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).VerticalMinWidth_nd8iv_k$ = function (measurables, availableHeight, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      // Inline function 'kotlin.math.min' call
      var a = imul(measurables.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing);
      var fixedSpace = Math.min(a, availableHeight);
      var crossAxisMax = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.get_c1px32_k$(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          if (weight === 0.0) {
            var remaining = availableHeight === 2147483647 ? 2147483647 : availableHeight - fixedSpace | 0;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMinWidth.<anonymous>' call
            var w = 2147483647;
            // Inline function 'kotlin.math.min' call
            var a_0 = item.maxIntrinsicHeight_b0krtc_k$(w);
            var mainAxisSpace = Math.min(a_0, remaining);
            fixedSpace = fixedSpace + mainAxisSpace | 0;
            var tmp2 = crossAxisMax;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMinWidth.<anonymous>' call
            // Inline function 'kotlin.math.max' call
            var b = item.minIntrinsicWidth_jyhjuj_k$(mainAxisSpace);
            crossAxisMax = Math.max(tmp2, b);
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (totalWeight === 0.0) {
        tmp = 0;
      } else if (availableHeight === 2147483647) {
        tmp = 2147483647;
      } else {
        // Inline function 'kotlin.math.max' call
        var a_1 = availableHeight - fixedSpace | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = Math.max(a_1, 0) / totalWeight;
        tmp = roundToInt(this_0);
      }
      var weightUnitSpace = tmp;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.get_c1px32_k$(index_0);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
          if (weight_0 > 0.0) {
            var tmp1 = crossAxisMax;
            var tmp_0;
            if (!(weightUnitSpace === 2147483647)) {
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_1 = weightUnitSpace * weight_0;
              tmp_0 = roundToInt(this_1);
            } else {
              tmp_0 = 2147483647;
            }
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMinWidth.<anonymous>' call
            var h = tmp_0;
            // Inline function 'kotlin.math.max' call
            var b_0 = item_0.minIntrinsicWidth_jyhjuj_k$(h);
            crossAxisMax = Math.max(tmp1, b_0);
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$0 = crossAxisMax;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).HorizontalMinHeight_4bpnim_k$ = function (measurables, availableWidth, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      // Inline function 'kotlin.math.min' call
      var a = imul(measurables.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing);
      var fixedSpace = Math.min(a, availableWidth);
      var crossAxisMax = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.get_c1px32_k$(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          if (weight === 0.0) {
            var remaining = availableWidth === 2147483647 ? 2147483647 : availableWidth - fixedSpace | 0;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMinHeight.<anonymous>' call
            var h = 2147483647;
            // Inline function 'kotlin.math.min' call
            var a_0 = item.maxIntrinsicWidth_b8umbx_k$(h);
            var mainAxisSpace = Math.min(a_0, remaining);
            fixedSpace = fixedSpace + mainAxisSpace | 0;
            var tmp2 = crossAxisMax;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMinHeight.<anonymous>' call
            // Inline function 'kotlin.math.max' call
            var b = item.minIntrinsicHeight_p2a4ou_k$(mainAxisSpace);
            crossAxisMax = Math.max(tmp2, b);
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (totalWeight === 0.0) {
        tmp = 0;
      } else if (availableWidth === 2147483647) {
        tmp = 2147483647;
      } else {
        // Inline function 'kotlin.math.max' call
        var a_1 = availableWidth - fixedSpace | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = Math.max(a_1, 0) / totalWeight;
        tmp = roundToInt(this_0);
      }
      var weightUnitSpace = tmp;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.get_c1px32_k$(index_0);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
          if (weight_0 > 0.0) {
            var tmp1 = crossAxisMax;
            var tmp_0;
            if (!(weightUnitSpace === 2147483647)) {
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_1 = weightUnitSpace * weight_0;
              tmp_0 = roundToInt(this_1);
            } else {
              tmp_0 = 2147483647;
            }
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMinHeight.<anonymous>' call
            var w = tmp_0;
            // Inline function 'kotlin.math.max' call
            var b_0 = item_0.minIntrinsicHeight_p2a4ou_k$(w);
            crossAxisMax = Math.max(tmp1, b_0);
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$0 = crossAxisMax;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).VerticalMinHeight_x1j23k_k$ = function (measurables, availableWidth, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var weightUnitSpace = 0;
      var fixedSpace = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.get_c1px32_k$(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMinHeight.<anonymous>' call
          var size = item.minIntrinsicHeight_p2a4ou_k$(availableWidth);
          if (weight === 0.0) {
            fixedSpace = fixedSpace + size | 0;
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
            var tmp1 = weightUnitSpace;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            var this_0 = size / weight;
            // Inline function 'kotlin.math.max' call
            var b = roundToInt(this_0);
            weightUnitSpace = Math.max(tmp1, b);
          }
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = weightUnitSpace * totalWeight;
      tmp$ret$0 = (roundToInt(this_1) + fixedSpace | 0) + imul(measurables.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing) | 0;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).HorizontalMaxWidth_jfytoj_k$ = function (measurables, availableHeight, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var weightUnitSpace = 0;
      var fixedSpace = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.get_c1px32_k$(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMaxWidth.<anonymous>' call
          var size = item.maxIntrinsicWidth_b8umbx_k$(availableHeight);
          if (weight === 0.0) {
            fixedSpace = fixedSpace + size | 0;
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
            var tmp1 = weightUnitSpace;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            var this_0 = size / weight;
            // Inline function 'kotlin.math.max' call
            var b = roundToInt(this_0);
            weightUnitSpace = Math.max(tmp1, b);
          }
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = weightUnitSpace * totalWeight;
      tmp$ret$0 = (roundToInt(this_1) + fixedSpace | 0) + imul(measurables.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing) | 0;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).VerticalMaxWidth_ycc5uz_k$ = function (measurables, availableHeight, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      // Inline function 'kotlin.math.min' call
      var a = imul(measurables.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing);
      var fixedSpace = Math.min(a, availableHeight);
      var crossAxisMax = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.get_c1px32_k$(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          if (weight === 0.0) {
            var remaining = availableHeight === 2147483647 ? 2147483647 : availableHeight - fixedSpace | 0;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMaxWidth.<anonymous>' call
            var w = 2147483647;
            // Inline function 'kotlin.math.min' call
            var a_0 = item.maxIntrinsicHeight_b0krtc_k$(w);
            var mainAxisSpace = Math.min(a_0, remaining);
            fixedSpace = fixedSpace + mainAxisSpace | 0;
            var tmp2 = crossAxisMax;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMaxWidth.<anonymous>' call
            // Inline function 'kotlin.math.max' call
            var b = item.maxIntrinsicWidth_b8umbx_k$(mainAxisSpace);
            crossAxisMax = Math.max(tmp2, b);
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (totalWeight === 0.0) {
        tmp = 0;
      } else if (availableHeight === 2147483647) {
        tmp = 2147483647;
      } else {
        // Inline function 'kotlin.math.max' call
        var a_1 = availableHeight - fixedSpace | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = Math.max(a_1, 0) / totalWeight;
        tmp = roundToInt(this_0);
      }
      var weightUnitSpace = tmp;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.get_c1px32_k$(index_0);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
          if (weight_0 > 0.0) {
            var tmp1 = crossAxisMax;
            var tmp_0;
            if (!(weightUnitSpace === 2147483647)) {
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_1 = weightUnitSpace * weight_0;
              tmp_0 = roundToInt(this_1);
            } else {
              tmp_0 = 2147483647;
            }
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMaxWidth.<anonymous>' call
            var h = tmp_0;
            // Inline function 'kotlin.math.max' call
            var b_0 = item_0.maxIntrinsicWidth_b8umbx_k$(h);
            crossAxisMax = Math.max(tmp1, b_0);
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$0 = crossAxisMax;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).HorizontalMaxHeight_nlw7ss_k$ = function (measurables, availableWidth, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      // Inline function 'kotlin.math.min' call
      var a = imul(measurables.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing);
      var fixedSpace = Math.min(a, availableWidth);
      var crossAxisMax = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.get_c1px32_k$(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          if (weight === 0.0) {
            var remaining = availableWidth === 2147483647 ? 2147483647 : availableWidth - fixedSpace | 0;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMaxHeight.<anonymous>' call
            var h = 2147483647;
            // Inline function 'kotlin.math.min' call
            var a_0 = item.maxIntrinsicWidth_b8umbx_k$(h);
            var mainAxisSpace = Math.min(a_0, remaining);
            fixedSpace = fixedSpace + mainAxisSpace | 0;
            var tmp2 = crossAxisMax;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMaxHeight.<anonymous>' call
            // Inline function 'kotlin.math.max' call
            var b = item.maxIntrinsicHeight_b0krtc_k$(mainAxisSpace);
            crossAxisMax = Math.max(tmp2, b);
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (totalWeight === 0.0) {
        tmp = 0;
      } else if (availableWidth === 2147483647) {
        tmp = 2147483647;
      } else {
        // Inline function 'kotlin.math.max' call
        var a_1 = availableWidth - fixedSpace | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = Math.max(a_1, 0) / totalWeight;
        tmp = roundToInt(this_0);
      }
      var weightUnitSpace = tmp;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.get_c1px32_k$(index_0);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
          if (weight_0 > 0.0) {
            var tmp1 = crossAxisMax;
            var tmp_0;
            if (!(weightUnitSpace === 2147483647)) {
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_1 = weightUnitSpace * weight_0;
              tmp_0 = roundToInt(this_1);
            } else {
              tmp_0 = 2147483647;
            }
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMaxHeight.<anonymous>' call
            var w = tmp_0;
            // Inline function 'kotlin.math.max' call
            var b_0 = item_0.maxIntrinsicHeight_b0krtc_k$(w);
            crossAxisMax = Math.max(tmp1, b_0);
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$0 = crossAxisMax;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).VerticalMaxHeight_drchte_k$ = function (measurables, availableWidth, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var weightUnitSpace = 0;
      var fixedSpace = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.get_c1px32_k$(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMaxHeight.<anonymous>' call
          var size = item.maxIntrinsicHeight_b0krtc_k$(availableWidth);
          if (weight === 0.0) {
            fixedSpace = fixedSpace + size | 0;
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
            var tmp1 = weightUnitSpace;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            var this_0 = size / weight;
            // Inline function 'kotlin.math.max' call
            var b = roundToInt(this_0);
            weightUnitSpace = Math.max(tmp1, b);
          }
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = weightUnitSpace * totalWeight;
      tmp$ret$0 = (roundToInt(this_1) + fixedSpace | 0) + imul(measurables.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing) | 0;
    }
    return tmp$ret$0;
  };
  var IntrinsicMeasureBlocks_instance;
  function IntrinsicMeasureBlocks_getInstance() {
    if (IntrinsicMeasureBlocks_instance == null)
      new IntrinsicMeasureBlocks();
    return IntrinsicMeasureBlocks_instance;
  }
  function Block(lineProviderBlock) {
    AlignmentLineProvider.call(this);
    this.lineProviderBlock_1 = lineProviderBlock;
  }
  protoOf(Block).get_lineProviderBlock_1gxdy7_k$ = function () {
    return this.lineProviderBlock_1;
  };
  protoOf(Block).calculateAlignmentLinePosition_lw7yd4_k$ = function (placeable) {
    return this.lineProviderBlock_1(placeable);
  };
  protoOf(Block).component1_7eebsc_k$ = function () {
    return this.lineProviderBlock_1;
  };
  protoOf(Block).copy_cullvv_k$ = function (lineProviderBlock) {
    return new Block(lineProviderBlock);
  };
  protoOf(Block).copy$default_3hy2w4_k$ = function (lineProviderBlock, $super) {
    lineProviderBlock = lineProviderBlock === VOID ? this.lineProviderBlock_1 : lineProviderBlock;
    return $super === VOID ? this.copy_cullvv_k$(lineProviderBlock) : $super.copy_cullvv_k$.call(this, lineProviderBlock);
  };
  protoOf(Block).toString = function () {
    return 'Block(lineProviderBlock=' + toString_0(this.lineProviderBlock_1) + ')';
  };
  protoOf(Block).hashCode = function () {
    return hashCode(this.lineProviderBlock_1);
  };
  protoOf(Block).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Block))
      return false;
    var tmp0_other_with_cast = other instanceof Block ? other : THROW_CCE();
    if (!equals(this.lineProviderBlock_1, tmp0_other_with_cast.lineProviderBlock_1))
      return false;
    return true;
  };
  function Value(alignmentLine) {
    AlignmentLineProvider.call(this);
    this.alignmentLine_1 = alignmentLine;
  }
  protoOf(Value).get_alignmentLine_xlj9o2_k$ = function () {
    return this.alignmentLine_1;
  };
  protoOf(Value).calculateAlignmentLinePosition_lw7yd4_k$ = function (placeable) {
    return placeable.get_pk047k_k$(this.alignmentLine_1);
  };
  protoOf(Value).component1_7eebsc_k$ = function () {
    return this.alignmentLine_1;
  };
  protoOf(Value).copy_jxuxcf_k$ = function (alignmentLine) {
    return new Value(alignmentLine);
  };
  protoOf(Value).copy$default_yh9ino_k$ = function (alignmentLine, $super) {
    alignmentLine = alignmentLine === VOID ? this.alignmentLine_1 : alignmentLine;
    return $super === VOID ? this.copy_jxuxcf_k$(alignmentLine) : $super.copy_jxuxcf_k$.call(this, alignmentLine);
  };
  protoOf(Value).toString = function () {
    return 'Value(alignmentLine=' + toString_0(this.alignmentLine_1) + ')';
  };
  protoOf(Value).hashCode = function () {
    return hashCode(this.alignmentLine_1);
  };
  protoOf(Value).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Value))
      return false;
    var tmp0_other_with_cast = other instanceof Value ? other : THROW_CCE();
    if (!equals(this.alignmentLine_1, tmp0_other_with_cast.alignmentLine_1))
      return false;
    return true;
  };
  function AlignmentLineProvider() {
  }
  function intrinsicMainAxisSize(children, mainAxisSize, crossAxisAvailable, mainAxisSpacing) {
    if (children.isEmpty_y1axqb_k$())
      return 0;
    var weightUnitSpace = 0;
    var fixedSpace = 0;
    var totalWeight = 0.0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = children.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = children.get_c1px32_k$(index);
        // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize.<anonymous>' call
        var weight = get_weight(get_rowColumnParentData_0(item));
        var size = mainAxisSize(item, crossAxisAvailable);
        if (weight === 0.0) {
          fixedSpace = fixedSpace + size | 0;
        } else if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          var tmp1 = weightUnitSpace;
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_0 = size / weight;
          // Inline function 'kotlin.math.max' call
          var b = roundToInt(this_0);
          weightUnitSpace = Math.max(tmp1, b);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = weightUnitSpace * totalWeight;
    return (roundToInt(this_1) + fixedSpace | 0) + imul(children.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing) | 0;
  }
  function intrinsicCrossAxisSize(children, mainAxisSize, crossAxisSize, mainAxisAvailable, mainAxisSpacing) {
    if (children.isEmpty_y1axqb_k$())
      return 0;
    // Inline function 'kotlin.math.min' call
    var a = imul(children.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing);
    var fixedSpace = Math.min(a, mainAxisAvailable);
    var crossAxisMax = 0;
    var totalWeight = 0.0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = children.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = children.get_c1px32_k$(index);
        // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
        var weight = get_weight(get_rowColumnParentData_0(item));
        if (weight === 0.0) {
          var remaining = mainAxisAvailable === 2147483647 ? 2147483647 : mainAxisAvailable - fixedSpace | 0;
          // Inline function 'kotlin.math.min' call
          var a_0 = mainAxisSize(item, 2147483647);
          var mainAxisSpace = Math.min(a_0, remaining);
          fixedSpace = fixedSpace + mainAxisSpace | 0;
          var tmp2 = crossAxisMax;
          // Inline function 'kotlin.math.max' call
          var b = crossAxisSize(item, mainAxisSpace);
          crossAxisMax = Math.max(tmp2, b);
        } else if (weight > 0.0) {
          totalWeight = totalWeight + weight;
        }
      }
       while (inductionVariable <= last);
    var tmp;
    if (totalWeight === 0.0) {
      tmp = 0;
    } else if (mainAxisAvailable === 2147483647) {
      tmp = 2147483647;
    } else {
      // Inline function 'kotlin.math.max' call
      var a_1 = mainAxisAvailable - fixedSpace | 0;
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = Math.max(a_1, 0) / totalWeight;
      tmp = roundToInt(this_0);
    }
    var weightUnitSpace = tmp;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = children.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = children.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
        var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
        if (weight_0 > 0.0) {
          var tmp1 = crossAxisMax;
          var tmp_0;
          if (!(weightUnitSpace === 2147483647)) {
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            var this_1 = weightUnitSpace * weight_0;
            tmp_0 = roundToInt(this_1);
          } else {
            tmp_0 = 2147483647;
          }
          // Inline function 'kotlin.math.max' call
          var b_0 = crossAxisSize(item_0, tmp_0);
          crossAxisMax = Math.max(tmp1, b_0);
        }
      }
       while (inductionVariable_0 <= last_0);
    return crossAxisMax;
  }
  function get_weight(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.weight_1;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  }
  function get_rowColumnParentData_0(_this__u8e3s4) {
    var tmp = _this__u8e3s4.get_parentData_o87vnn_k$();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function get_isRelative(_this__u8e3s4) {
    var tmp0_safe_receiver = get_crossAxisAlignment(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isRelative_7qih6l_k$();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function get_fill(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.fill_1;
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function get_crossAxisAlignment(_this__u8e3s4) {
    return _this__u8e3s4 == null ? null : _this__u8e3s4.crossAxisAlignment_1;
  }
  function LayoutWeightElement(weight, fill) {
    ModifierNodeElement.call(this);
    this.weight_1 = weight;
    this.fill_1 = fill;
  }
  protoOf(LayoutWeightElement).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  protoOf(LayoutWeightElement).get_fill_wom0ng_k$ = function () {
    return this.fill_1;
  };
  protoOf(LayoutWeightElement).create_md4cuc_k$ = function () {
    return new LayoutWeightNode(this.weight_1, this.fill_1);
  };
  protoOf(LayoutWeightElement).update_y7g91_k$ = function (node) {
    node.weight_1 = this.weight_1;
    node.fill_1 = this.fill_1;
  };
  protoOf(LayoutWeightElement).update_9wd57p_k$ = function (node) {
    return this.update_y7g91_k$(node instanceof LayoutWeightNode ? node : THROW_CCE());
  };
  protoOf(LayoutWeightElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('weight');
    _this__u8e3s4.set_value_rjqr2d_k$(this.weight_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('weight', this.weight_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('fill', this.fill_1);
  };
  protoOf(LayoutWeightElement).hashCode = function () {
    var result = getNumberHashCode(this.weight_1);
    result = imul(31, result) + getBooleanHashCode(this.fill_1) | 0;
    return result;
  };
  protoOf(LayoutWeightElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof LayoutWeightElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return this.weight_1 === otherModifier.weight_1 && this.fill_1 === otherModifier.fill_1;
  };
  function HorizontalAlignElement(horizontal) {
    ModifierNodeElement.call(this);
    this.horizontal_1 = horizontal;
  }
  protoOf(HorizontalAlignElement).get_horizontal_2rwn8t_k$ = function () {
    return this.horizontal_1;
  };
  protoOf(HorizontalAlignElement).create_md4cuc_k$ = function () {
    return new HorizontalAlignNode(this.horizontal_1);
  };
  protoOf(HorizontalAlignElement).update_v6ktzs_k$ = function (node) {
    node.horizontal_1 = this.horizontal_1;
  };
  protoOf(HorizontalAlignElement).update_9wd57p_k$ = function (node) {
    return this.update_v6ktzs_k$(node instanceof HorizontalAlignNode ? node : THROW_CCE());
  };
  protoOf(HorizontalAlignElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('align');
    _this__u8e3s4.set_value_rjqr2d_k$(this.horizontal_1);
  };
  protoOf(HorizontalAlignElement).hashCode = function () {
    return hashCode(this.horizontal_1);
  };
  protoOf(HorizontalAlignElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof HorizontalAlignElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.horizontal_1, otherModifier.horizontal_1);
  };
  function WithAlignmentLineElement(alignmentLine) {
    ModifierNodeElement.call(this);
    this.alignmentLine_1 = alignmentLine;
  }
  protoOf(WithAlignmentLineElement).get_alignmentLine_xlj9o2_k$ = function () {
    return this.alignmentLine_1;
  };
  protoOf(WithAlignmentLineElement).create_md4cuc_k$ = function () {
    return new WithAlignmentLineNode(this.alignmentLine_1);
  };
  protoOf(WithAlignmentLineElement).update_ak6d1j_k$ = function (node) {
    node.alignmentLine_1 = this.alignmentLine_1;
  };
  protoOf(WithAlignmentLineElement).update_9wd57p_k$ = function (node) {
    return this.update_ak6d1j_k$(node instanceof WithAlignmentLineNode ? node : THROW_CCE());
  };
  protoOf(WithAlignmentLineElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('alignBy');
    _this__u8e3s4.set_value_rjqr2d_k$(this.alignmentLine_1);
  };
  protoOf(WithAlignmentLineElement).hashCode = function () {
    return hashCode(this.alignmentLine_1);
  };
  protoOf(WithAlignmentLineElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof WithAlignmentLineElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.alignmentLine_1, otherModifier.alignmentLine_1);
  };
  function WithAlignmentLineBlockElement(block) {
    ModifierNodeElement.call(this);
    this.block_1 = block;
  }
  protoOf(WithAlignmentLineBlockElement).get_block_ip8l7o_k$ = function () {
    return this.block_1;
  };
  protoOf(WithAlignmentLineBlockElement).create_md4cuc_k$ = function () {
    return new WithAlignmentLineBlockNode(this.block_1);
  };
  protoOf(WithAlignmentLineBlockElement).update_2oxl4g_k$ = function (node) {
    node.block_1 = this.block_1;
  };
  protoOf(WithAlignmentLineBlockElement).update_9wd57p_k$ = function (node) {
    return this.update_2oxl4g_k$(node instanceof WithAlignmentLineBlockNode ? node : THROW_CCE());
  };
  protoOf(WithAlignmentLineBlockElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof WithAlignmentLineBlockElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return this.block_1 === otherModifier.block_1;
  };
  protoOf(WithAlignmentLineBlockElement).hashCode = function () {
    return hashCode(this.block_1);
  };
  protoOf(WithAlignmentLineBlockElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('alignBy');
    _this__u8e3s4.set_value_rjqr2d_k$(this.block_1);
  };
  function VerticalAlignElement(alignment) {
    ModifierNodeElement.call(this);
    this.alignment_1 = alignment;
  }
  protoOf(VerticalAlignElement).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(VerticalAlignElement).create_md4cuc_k$ = function () {
    return new VerticalAlignNode(this.alignment_1);
  };
  protoOf(VerticalAlignElement).update_85o3e_k$ = function (node) {
    node.vertical_1 = this.alignment_1;
  };
  protoOf(VerticalAlignElement).update_9wd57p_k$ = function (node) {
    return this.update_85o3e_k$(node instanceof VerticalAlignNode ? node : THROW_CCE());
  };
  protoOf(VerticalAlignElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('align');
    _this__u8e3s4.set_value_rjqr2d_k$(this.alignment_1);
  };
  protoOf(VerticalAlignElement).hashCode = function () {
    return hashCode(this.alignment_1);
  };
  protoOf(VerticalAlignElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof VerticalAlignElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.alignment_1, otherModifier.alignment_1);
  };
  function LayoutWeightNode(weight, fill) {
    Node.call(this);
    this.weight_1 = weight;
    this.fill_1 = fill;
  }
  protoOf(LayoutWeightNode).set_weight_l75ca5_k$ = function (_set____db54di) {
    this.weight_1 = _set____db54di;
  };
  protoOf(LayoutWeightNode).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  protoOf(LayoutWeightNode).set_fill_3wer9x_k$ = function (_set____db54di) {
    this.fill_1 = _set____db54di;
  };
  protoOf(LayoutWeightNode).get_fill_wom0ng_k$ = function () {
    return this.fill_1;
  };
  protoOf(LayoutWeightNode).modifyParentData_nittj_k$ = function (_this__u8e3s4, parentData) {
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    // Inline function 'kotlin.also' call
    var this_0 = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'androidx.compose.foundation.layout.LayoutWeightNode.modifyParentData.<anonymous>' call
    this_0.weight_1 = this.weight_1;
    this_0.fill_1 = this.fill_1;
    return this_0;
  };
  function HorizontalAlignNode(horizontal) {
    Node.call(this);
    this.horizontal_1 = horizontal;
  }
  protoOf(HorizontalAlignNode).set_horizontal_fvwuq_k$ = function (_set____db54di) {
    this.horizontal_1 = _set____db54di;
  };
  protoOf(HorizontalAlignNode).get_horizontal_2rwn8t_k$ = function () {
    return this.horizontal_1;
  };
  protoOf(HorizontalAlignNode).modifyParentData_nittj_k$ = function (_this__u8e3s4, parentData) {
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    // Inline function 'kotlin.also' call
    var this_0 = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'androidx.compose.foundation.layout.HorizontalAlignNode.modifyParentData.<anonymous>' call
    this_0.crossAxisAlignment_1 = Companion_getInstance_6().horizontal_qgwvz5_k$(this.horizontal_1);
    return this_0;
  };
  function WithAlignmentLineBlockNode(block) {
    SiblingsAlignedNode.call(this);
    this.block_1 = block;
  }
  protoOf(WithAlignmentLineBlockNode).set_block_o418za_k$ = function (_set____db54di) {
    this.block_1 = _set____db54di;
  };
  protoOf(WithAlignmentLineBlockNode).get_block_ip8l7o_k$ = function () {
    return this.block_1;
  };
  protoOf(WithAlignmentLineBlockNode).modifyParentData_nittj_k$ = function (_this__u8e3s4, parentData) {
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    // Inline function 'kotlin.also' call
    var this_0 = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'androidx.compose.foundation.layout.WithAlignmentLineBlockNode.modifyParentData.<anonymous>' call
    this_0.crossAxisAlignment_1 = Companion_getInstance_6().Relative_yycgpe_k$(new Block(this.block_1));
    return this_0;
  };
  function WithAlignmentLineNode(alignmentLine) {
    SiblingsAlignedNode.call(this);
    this.alignmentLine_1 = alignmentLine;
  }
  protoOf(WithAlignmentLineNode).set_alignmentLine_pygt0k_k$ = function (_set____db54di) {
    this.alignmentLine_1 = _set____db54di;
  };
  protoOf(WithAlignmentLineNode).get_alignmentLine_xlj9o2_k$ = function () {
    return this.alignmentLine_1;
  };
  protoOf(WithAlignmentLineNode).modifyParentData_nittj_k$ = function (_this__u8e3s4, parentData) {
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    // Inline function 'kotlin.also' call
    var this_0 = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'androidx.compose.foundation.layout.WithAlignmentLineNode.modifyParentData.<anonymous>' call
    this_0.crossAxisAlignment_1 = Companion_getInstance_6().Relative_yycgpe_k$(new Value(this.alignmentLine_1));
    return this_0;
  };
  function SiblingsAlignedNode() {
    Node.call(this);
  }
  function VerticalAlignNode(vertical) {
    Node.call(this);
    this.vertical_1 = vertical;
  }
  protoOf(VerticalAlignNode).set_vertical_f3kzla_k$ = function (_set____db54di) {
    this.vertical_1 = _set____db54di;
  };
  protoOf(VerticalAlignNode).get_vertical_6ev9z3_k$ = function () {
    return this.vertical_1;
  };
  protoOf(VerticalAlignNode).modifyParentData_nittj_k$ = function (_this__u8e3s4, parentData) {
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    // Inline function 'kotlin.also' call
    var this_0 = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'androidx.compose.foundation.layout.VerticalAlignNode.modifyParentData.<anonymous>' call
    this_0.crossAxisAlignment_1 = Companion_getInstance_6().vertical_75z78f_k$(this.vertical_1);
    return this_0;
  };
  function RowColumnMeasurePolicy() {
  }
  function measure(_this__u8e3s4, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, arrangementSpacingInt, measureScope, measurables, placeables, startIndex, endIndex, crossAxisOffset, currentLineIndex) {
    crossAxisOffset = crossAxisOffset === VOID ? null : crossAxisOffset;
    currentLineIndex = currentLineIndex === VOID ? 0 : currentLineIndex;
    var arrangementSpacingPx = toLong(arrangementSpacingInt);
    var totalWeight = 0.0;
    var fixedSpace = 0;
    var crossAxisSpace = 0;
    var weightChildrenCount = 0;
    var anyAlignBy = false;
    var subSize = endIndex - startIndex | 0;
    var childrenMainAxisSize = new Int32Array(subSize);
    var beforeCrossAxisAlignmentLine = 0;
    var afterCrossAxisAlignmentLine = 0;
    var spaceAfterLastNoWeight = 0;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = measurables.get_c1px32_k$(i);
        var parentData = get_rowColumnParentData_0(child);
        var weight = get_weight(parentData);
        anyAlignBy = anyAlignBy || get_isRelative(parentData);
        if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          weightChildrenCount = weightChildrenCount + 1 | 0;
        } else {
          var tmp;
          if (crossAxisMax === 2147483647) {
            tmp = null;
          } else {
            var tmp2_safe_receiver = parentData == null ? null : parentData.get_flowLayoutData_cl5r63_k$();
            var tmp_0;
            if (tmp2_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'androidx.compose.foundation.layout.measure.<anonymous>' call
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_0 = tmp2_safe_receiver.get_fillCrossAxisFraction_cbepx3_k$() * crossAxisMax;
              tmp_0 = roundToInt(this_0);
            }
            tmp = tmp_0;
          }
          var crossAxisDesiredSize = tmp;
          var remaining = mainAxisMax - fixedSpace | 0;
          var tmp5_elvis_lhs = placeables[i];
          var tmp_1;
          if (tmp5_elvis_lhs == null) {
            var tmp_2 = crossAxisDesiredSize == null ? 0 : crossAxisDesiredSize;
            var tmp_3;
            if (mainAxisMax === 2147483647) {
              tmp_3 = 2147483647;
            } else {
              tmp_3 = coerceAtLeast(remaining, 0);
            }
            var tmp_4 = tmp_3;
            tmp_1 = child.measure_4dmfk1_k$(_this__u8e3s4.createConstraints$default_x2rfs3_k$(0, tmp_2, tmp_4, crossAxisDesiredSize == null ? crossAxisMax : crossAxisDesiredSize));
          } else {
            tmp_1 = tmp5_elvis_lhs;
          }
          var placeable = tmp_1;
          var placeableMainAxisSize = _this__u8e3s4.mainAxisSize_q9nnsp_k$(placeable);
          var placeableCrossAxisSize = _this__u8e3s4.crossAxisSize_2m3wdq_k$(placeable);
          childrenMainAxisSize[i - startIndex | 0] = placeableMainAxisSize;
          // Inline function 'kotlin.math.min' call
          var b = coerceAtLeast(remaining - placeableMainAxisSize | 0, 0);
          spaceAfterLastNoWeight = Math.min(arrangementSpacingInt, b);
          fixedSpace = fixedSpace + (placeableMainAxisSize + spaceAfterLastNoWeight | 0) | 0;
          // Inline function 'kotlin.math.max' call
          var a = crossAxisSpace;
          crossAxisSpace = Math.max(a, placeableCrossAxisSize);
          placeables[i] = placeable;
        }
      }
       while (inductionVariable < endIndex);
    var weightedSpace = 0;
    if (weightChildrenCount === 0) {
      fixedSpace = fixedSpace - spaceAfterLastNoWeight | 0;
    } else {
      var tmp_5;
      if (!(mainAxisMax === 2147483647)) {
        tmp_5 = mainAxisMax;
      } else {
        tmp_5 = mainAxisMin;
      }
      var targetSpace = tmp_5;
      // Inline function 'kotlin.Long.times' call
      var other = weightChildrenCount - 1 | 0;
      var arrangementSpacingTotal = arrangementSpacingPx.times_nfzjiw_k$(toLong(other));
      var remainingToTarget = coerceAtLeast_0(numberToLong(targetSpace - fixedSpace | 0).minus_mfbszm_k$(arrangementSpacingTotal), new Long(0, 0));
      // Inline function 'kotlin.Long.div' call
      var other_0 = totalWeight;
      var weightUnitSpace = remainingToTarget.toFloat_jhbgwv_k$() / other_0;
      var remainder = remainingToTarget;
      var inductionVariable_0 = startIndex;
      if (inductionVariable_0 < endIndex)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var measurable = measurables.get_c1px32_k$(i_0);
          var itemWeight = get_weight(get_rowColumnParentData_0(measurable));
          var weightedSize = weightUnitSpace * itemWeight;
          try {
            var tmp11 = remainder;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            // Inline function 'kotlin.Long.minus' call
            var other_1 = roundToInt(weightedSize);
            remainder = tmp11.minus_mfbszm_k$(toLong(other_1));
          } catch ($p) {
            if ($p instanceof IllegalArgumentException) {
              var e = $p;
              throw IllegalArgumentException_init_$Create$_0('This log indicates a hard-to-reproduce Compose issue, modified with additional debugging details. Please help us by adding your experiences to the bug link provided. Thank you for helping us improve Compose. https://issuetracker.google.com/issues/297974033 mainAxisMax ' + mainAxisMax + 'mainAxisMin ' + mainAxisMin + 'targetSpace ' + targetSpace + 'arrangementSpacingPx ' + arrangementSpacingPx + 'weightChildrenCount ' + weightChildrenCount + 'fixedSpace ' + fixedSpace + 'arrangementSpacingTotal ' + arrangementSpacingTotal + 'remainingToTarget ' + remainingToTarget.toString() + 'totalWeight ' + totalWeight + 'weightUnitSpace ' + weightUnitSpace + 'itemWeight ' + itemWeight + 'weightedSize ' + weightedSize, e);
            } else {
              throw $p;
            }
          }
        }
         while (inductionVariable_0 < endIndex);
      var inductionVariable_1 = startIndex;
      if (inductionVariable_1 < endIndex)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          if (placeables[i_1] == null) {
            var child_0 = measurables.get_c1px32_k$(i_1);
            var parentData_0 = get_rowColumnParentData_0(child_0);
            var weight_0 = get_weight(parentData_0);
            var tmp_6;
            if (crossAxisMax === 2147483647) {
              tmp_6 = null;
            } else {
              var tmp9_safe_receiver = parentData_0 == null ? null : parentData_0.get_flowLayoutData_cl5r63_k$();
              var tmp_7;
              if (tmp9_safe_receiver == null) {
                tmp_7 = null;
              } else {
                // Inline function 'kotlin.let' call
                // Inline function 'androidx.compose.foundation.layout.measure.<anonymous>' call
                // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
                // Inline function 'kotlin.math.roundToInt' call
                var this_1 = tmp9_safe_receiver.get_fillCrossAxisFraction_cbepx3_k$() * crossAxisMax;
                tmp_7 = roundToInt(this_1);
              }
              tmp_6 = tmp_7;
            }
            var crossAxisDesiredSize_0 = tmp_6;
            // Inline function 'kotlin.check' call
            if (!(weight_0 > 0)) {
              // Inline function 'androidx.compose.foundation.layout.measure.<anonymous>' call
              var message = 'All weights <= 0 should have placeables';
              throw IllegalStateException_init_$Create$(toString_0(message));
            }
            var remainderUnit = get_sign(remainder);
            // Inline function 'kotlin.Long.minus' call
            remainder = remainder.minus_mfbszm_k$(toLong(remainderUnit));
            var weightedSize_0 = weightUnitSpace * weight_0;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            // Inline function 'kotlin.math.max' call
            var b_0 = roundToInt(weightedSize_0) + remainderUnit | 0;
            var childMainAxisSize = Math.max(0, b_0);
            var childConstraints;
            try {
              var tmp_8;
              if (get_fill(parentData_0) && !(childMainAxisSize === 2147483647)) {
                tmp_8 = childMainAxisSize;
              } else {
                tmp_8 = 0;
              }
              var tmp_9 = tmp_8;
              var tmp_10 = crossAxisDesiredSize_0 == null ? 0 : crossAxisDesiredSize_0;
              childConstraints = _this__u8e3s4.createConstraints_abox2e_k$(tmp_9, tmp_10, childMainAxisSize, crossAxisDesiredSize_0 == null ? crossAxisMax : crossAxisDesiredSize_0, true);
            } catch ($p) {
              if ($p instanceof IllegalArgumentException) {
                var e_0 = $p;
                throw IllegalArgumentException_init_$Create$_0('This log indicates a hard-to-reproduce Compose issue, modified with additional debugging details. Please help us by adding your experiences to the bug link provided. Thank you for helping us improve Compose. https://issuetracker.google.com/issues/300280216 mainAxisMax ' + mainAxisMax + 'mainAxisMin ' + mainAxisMin + 'targetSpace ' + targetSpace + 'arrangementSpacingPx ' + arrangementSpacingPx + 'weightChildrenCount ' + weightChildrenCount + 'fixedSpace ' + fixedSpace + 'arrangementSpacingTotal ' + arrangementSpacingTotal + 'remainingToTarget ' + remainingToTarget.toString() + 'totalWeight ' + totalWeight + 'weightUnitSpace ' + weightUnitSpace + 'weight ' + weight_0 + 'weightedSize ' + weightedSize_0 + 'crossAxisDesiredSize ' + crossAxisDesiredSize_0 + 'remainderUnit ' + remainderUnit + 'childMainAxisSize ' + childMainAxisSize, e_0);
              } else {
                throw $p;
              }
            }
            var placeable_0 = child_0.measure_4dmfk1_k$(childConstraints);
            var placeableMainAxisSize_0 = _this__u8e3s4.mainAxisSize_q9nnsp_k$(placeable_0);
            var placeableCrossAxisSize_0 = _this__u8e3s4.crossAxisSize_2m3wdq_k$(placeable_0);
            childrenMainAxisSize[i_1 - startIndex | 0] = placeableMainAxisSize_0;
            weightedSpace = weightedSpace + placeableMainAxisSize_0 | 0;
            // Inline function 'kotlin.math.max' call
            var a_0 = crossAxisSpace;
            crossAxisSpace = Math.max(a_0, placeableCrossAxisSize_0);
            placeables[i_1] = placeable_0;
          }
        }
         while (inductionVariable_1 < endIndex);
      weightedSpace = coerceIn(numberToLong(weightedSpace).plus_r93sks_k$(arrangementSpacingTotal).toInt_1tsl84_k$(), 0, mainAxisMax - fixedSpace | 0);
    }
    if (anyAlignBy) {
      var inductionVariable_2 = startIndex;
      if (inductionVariable_2 < endIndex)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var placeable_1 = placeables[i_2];
          var parentData_1 = get_rowColumnParentData(ensureNotNull(placeable_1));
          var tmp13_safe_receiver = get_crossAxisAlignment(parentData_1);
          var alignmentLinePosition = tmp13_safe_receiver == null ? null : tmp13_safe_receiver.calculateAlignmentLinePosition_kp8mom_k$(placeable_1);
          if (alignmentLinePosition == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.foundation.layout.measure.<anonymous>' call
            var placeableCrossAxisSize_1 = _this__u8e3s4.crossAxisSize_2m3wdq_k$(placeable_1);
            var tmp0 = beforeCrossAxisAlignmentLine;
            // Inline function 'kotlin.math.max' call
            var b_1 = !(alignmentLinePosition === -2147483648) ? alignmentLinePosition : 0;
            beforeCrossAxisAlignmentLine = Math.max(tmp0, b_1);
            var tmp2 = afterCrossAxisAlignmentLine;
            var tmp_11;
            if (!(alignmentLinePosition === -2147483648)) {
              tmp_11 = alignmentLinePosition;
            } else {
              tmp_11 = placeableCrossAxisSize_1;
            }
            // Inline function 'kotlin.math.max' call
            var b_2 = placeableCrossAxisSize_1 - tmp_11 | 0;
            afterCrossAxisAlignmentLine = Math.max(tmp2, b_2);
          }
        }
         while (inductionVariable_2 < endIndex);
    }
    // Inline function 'kotlin.math.max' call
    var a_1 = coerceAtLeast(fixedSpace + weightedSpace | 0, 0);
    var mainAxisLayoutSize = Math.max(a_1, mainAxisMin);
    var tmp29 = crossAxisSpace;
    // Inline function 'kotlin.math.max' call
    var b_3 = beforeCrossAxisAlignmentLine + afterCrossAxisAlignmentLine | 0;
    // Inline function 'kotlin.math.max' call
    var b_4 = Math.max(crossAxisMin, b_3);
    var crossAxisLayoutSize = Math.max(tmp29, b_4);
    var tmp_12 = 0;
    var tmp_13 = new Int32Array(subSize);
    while (tmp_12 < subSize) {
      tmp_13[tmp_12] = 0;
      tmp_12 = tmp_12 + 1 | 0;
    }
    var mainAxisPositions = tmp_13;
    _this__u8e3s4.populateMainAxisPositions_z5r5pw_k$(mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope);
    return _this__u8e3s4.placeHelper_9ldirp_k$(placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex);
  }
  function get_FillWholeMaxWidth() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxWidth;
  }
  var FillWholeMaxWidth;
  function get_FillWholeMaxHeight() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxHeight;
  }
  var FillWholeMaxHeight;
  function get_FillWholeMaxSize() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxSize;
  }
  var FillWholeMaxSize;
  function get_WrapContentWidthCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentWidthCenter;
  }
  var WrapContentWidthCenter;
  function get_WrapContentWidthStart() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentWidthStart;
  }
  var WrapContentWidthStart;
  function get_WrapContentHeightCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentHeightCenter;
  }
  var WrapContentHeightCenter;
  function get_WrapContentHeightTop() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentHeightTop;
  }
  var WrapContentHeightTop;
  function get_WrapContentSizeCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentSizeCenter;
  }
  var WrapContentSizeCenter;
  function get_WrapContentSizeTopStart() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentSizeTopStart;
  }
  var WrapContentSizeTopStart;
  function _get_direction__hwzary($this) {
    return $this.direction_1;
  }
  function _get_fraction__t0yzux($this) {
    return $this.fraction_1;
  }
  function _get_inspectorName__omemen($this) {
    return $this.inspectorName_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).width_h0xe6_k$ = function (fraction) {
    return new FillElement(Direction_Horizontal_getInstance(), fraction, 'fillMaxWidth');
  };
  protoOf(Companion_0).height_21djpr_k$ = function (fraction) {
    return new FillElement(Direction_Vertical_getInstance(), fraction, 'fillMaxHeight');
  };
  protoOf(Companion_0).size_34i8tl_k$ = function (fraction) {
    return new FillElement(Direction_Both_getInstance(), fraction, 'fillMaxSize');
  };
  var Companion_instance_0;
  function Companion_getInstance_7() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function FillElement(direction, fraction, inspectorName) {
    Companion_getInstance_7();
    ModifierNodeElement.call(this);
    this.direction_1 = direction;
    this.fraction_1 = fraction;
    this.inspectorName_1 = inspectorName;
  }
  protoOf(FillElement).create_md4cuc_k$ = function () {
    return new FillNode(this.direction_1, this.fraction_1);
  };
  protoOf(FillElement).update_60b29w_k$ = function (node) {
    node.direction_1 = this.direction_1;
    node.fraction_1 = this.fraction_1;
  };
  protoOf(FillElement).update_9wd57p_k$ = function (node) {
    return this.update_60b29w_k$(node instanceof FillNode ? node : THROW_CCE());
  };
  protoOf(FillElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$(this.inspectorName_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('fraction', this.fraction_1);
  };
  protoOf(FillElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FillElement))
      return false;
    if (!this.direction_1.equals(other.direction_1))
      return false;
    if (!(this.fraction_1 === other.fraction_1))
      return false;
    return true;
  };
  protoOf(FillElement).hashCode = function () {
    var result = this.direction_1.hashCode();
    result = imul(31, result) + getNumberHashCode(this.fraction_1) | 0;
    return result;
  };
  function WrapContentElement$Companion$width$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0(IntOffset($align.align_y7fd6v_k$(0, _IntSize___get_width__impl__d9yl4o(size.packedValue_1), layoutDirection), 0));
    };
  }
  function WrapContentElement$Companion$height$lambda($align) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return new IntOffset_0(IntOffset(0, $align.align_k316px_k$(0, _IntSize___get_height__impl__prv63b(size.packedValue_1))));
    };
  }
  function WrapContentElement$Companion$size$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0($align.align_mb8mzc_k$(Companion_getInstance_5().get_Zero_9we0a6_k$(), size.packedValue_1, layoutDirection));
    };
  }
  function _get_direction__hwzary_0($this) {
    return $this.direction_1;
  }
  function _get_unbounded__vdc64z($this) {
    return $this.unbounded_1;
  }
  function _get_alignmentCallback__m7n7k9($this) {
    return $this.alignmentCallback_1;
  }
  function _get_align__jw21zo($this) {
    return $this.align_1;
  }
  function _get_inspectorName__omemen_0($this) {
    return $this.inspectorName_1;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).width_5b10pq_k$ = function (align, unbounded) {
    var tmp = Direction_Horizontal_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$width$lambda(align), align, 'wrapContentWidth');
  };
  protoOf(Companion_1).height_lq0arx_k$ = function (align, unbounded) {
    var tmp = Direction_Vertical_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$height$lambda(align), align, 'wrapContentHeight');
  };
  protoOf(Companion_1).size_xsrtan_k$ = function (align, unbounded) {
    var tmp = Direction_Both_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$size$lambda(align), align, 'wrapContentSize');
  };
  var Companion_instance_1;
  function Companion_getInstance_8() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function WrapContentElement(direction, unbounded, alignmentCallback, align, inspectorName) {
    Companion_getInstance_8();
    ModifierNodeElement.call(this);
    this.direction_1 = direction;
    this.unbounded_1 = unbounded;
    this.alignmentCallback_1 = alignmentCallback;
    this.align_1 = align;
    this.inspectorName_1 = inspectorName;
  }
  protoOf(WrapContentElement).create_md4cuc_k$ = function () {
    return new WrapContentNode(this.direction_1, this.unbounded_1, this.alignmentCallback_1);
  };
  protoOf(WrapContentElement).update_5r7r4s_k$ = function (node) {
    node.direction_1 = this.direction_1;
    node.unbounded_1 = this.unbounded_1;
    node.alignmentCallback_1 = this.alignmentCallback_1;
  };
  protoOf(WrapContentElement).update_9wd57p_k$ = function (node) {
    return this.update_5r7r4s_k$(node instanceof WrapContentNode ? node : THROW_CCE());
  };
  protoOf(WrapContentElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$(this.inspectorName_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('align', this.align_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('unbounded', this.unbounded_1);
  };
  protoOf(WrapContentElement).equals = function (other) {
    if (this === other)
      return true;
    if (other === null)
      return false;
    if (!getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof WrapContentElement))
      THROW_CCE();
    if (!this.direction_1.equals(other.direction_1))
      return false;
    if (!(this.unbounded_1 === other.unbounded_1))
      return false;
    if (!equals(this.align_1, other.align_1))
      return false;
    return true;
  };
  protoOf(WrapContentElement).hashCode = function () {
    var result = this.direction_1.hashCode();
    result = imul(31, result) + getBooleanHashCode(this.unbounded_1) | 0;
    result = imul(31, result) + hashCode(this.align_1) | 0;
    return result;
  };
  function FillNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_yv6dex_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function FillNode(direction, fraction) {
    Node.call(this);
    this.direction_1 = direction;
    this.fraction_1 = fraction;
  }
  protoOf(FillNode).set_direction_yuha1y_k$ = function (_set____db54di) {
    this.direction_1 = _set____db54di;
  };
  protoOf(FillNode).get_direction_7ekune_k$ = function () {
    return this.direction_1;
  };
  protoOf(FillNode).set_fraction_7zdj49_k$ = function (_set____db54di) {
    this.fraction_1 = _set____db54di;
  };
  protoOf(FillNode).get_fraction_bvkonf_k$ = function () {
    return this.fraction_1;
  };
  protoOf(FillNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var minWidth;
    var maxWidth;
    if (_Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) && !this.direction_1.equals(Direction_Vertical_getInstance())) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = _Constraints___get_maxWidth__impl__uuyqc(constraints) * this.fraction_1;
      var tmp$ret$1 = roundToInt(this_0);
      var width = coerceIn(tmp$ret$1, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
      minWidth = width;
      maxWidth = width;
    } else {
      minWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      maxWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var minHeight;
    var maxHeight;
    if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints) && !this.direction_1.equals(Direction_Horizontal_getInstance())) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = _Constraints___get_maxHeight__impl__dt3e8z(constraints) * this.fraction_1;
      var tmp$ret$3 = roundToInt(this_1);
      var height = coerceIn(tmp$ret$3, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
      minHeight = height;
      maxHeight = height;
    } else {
      minHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var placeable = measurable.measure_4dmfk1_k$(Constraints(minWidth, maxWidth, minHeight, maxHeight));
    var tmp = placeable.get_width_j0q4yl_k$();
    var tmp_0 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, FillNode$measure$lambda(placeable));
  };
  var Direction_Vertical_instance;
  var Direction_Horizontal_instance;
  var Direction_Both_instance;
  function values() {
    return [Direction_Vertical_getInstance(), Direction_Horizontal_getInstance(), Direction_Both_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Vertical':
        return Direction_Vertical_getInstance();
      case 'Horizontal':
        return Direction_Horizontal_getInstance();
      case 'Both':
        return Direction_Both_getInstance();
      default:
        Direction_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
    Direction_entriesInitialized = true;
    Direction_Vertical_instance = new Direction('Vertical', 0);
    Direction_Horizontal_instance = new Direction('Horizontal', 1);
    Direction_Both_instance = new Direction('Both', 2);
  }
  var $ENTRIES;
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function WrapContentNode$measure$lambda(this$0, $wrapperWidth, $placeable, $wrapperHeight, $this_measure) {
    return function ($this$layout) {
      var position = this$0.alignmentCallback_1(new IntSize_0(IntSize($wrapperWidth - $placeable.get_width_j0q4yl_k$() | 0, $wrapperHeight - $placeable.get_height_e7t92o_k$() | 0)), $this_measure.get_layoutDirection_7e37v0_k$()).packedValue_1;
      $this$layout.place$default_gmqxva_k$($placeable, position);
      return Unit_getInstance();
    };
  }
  function WrapContentNode(direction, unbounded, alignmentCallback) {
    Node.call(this);
    this.direction_1 = direction;
    this.unbounded_1 = unbounded;
    this.alignmentCallback_1 = alignmentCallback;
  }
  protoOf(WrapContentNode).set_direction_yuha1y_k$ = function (_set____db54di) {
    this.direction_1 = _set____db54di;
  };
  protoOf(WrapContentNode).get_direction_7ekune_k$ = function () {
    return this.direction_1;
  };
  protoOf(WrapContentNode).set_unbounded_s9oby_k$ = function (_set____db54di) {
    this.unbounded_1 = _set____db54di;
  };
  protoOf(WrapContentNode).get_unbounded_x1kds5_k$ = function () {
    return this.unbounded_1;
  };
  protoOf(WrapContentNode).set_alignmentCallback_1e0ra7_k$ = function (_set____db54di) {
    this.alignmentCallback_1 = _set____db54di;
  };
  protoOf(WrapContentNode).get_alignmentCallback_mp8hup_k$ = function () {
    return this.alignmentCallback_1;
  };
  protoOf(WrapContentNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var tmp0_minWidth = !this.direction_1.equals(Direction_Vertical_getInstance()) ? 0 : _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp1_minHeight = !this.direction_1.equals(Direction_Horizontal_getInstance()) ? 0 : _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp;
    if (!this.direction_1.equals(Direction_Vertical_getInstance()) && this.unbounded_1) {
      tmp = 2147483647;
    } else {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var tmp2_maxWidth = tmp;
    var tmp_0;
    if (!this.direction_1.equals(Direction_Horizontal_getInstance()) && this.unbounded_1) {
      tmp_0 = 2147483647;
    } else {
      tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var tmp3_maxHeight = tmp_0;
    var wrappedConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
    var placeable = measurable.measure_4dmfk1_k$(wrappedConstraints);
    var wrapperWidth = coerceIn(placeable.get_width_j0q4yl_k$(), _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
    var wrapperHeight = coerceIn(placeable.get_height_e7t92o_k$(), _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    return _this__u8e3s4.layout$default_n19e5l_k$(wrapperWidth, wrapperHeight, VOID, WrapContentNode$measure$lambda(this, wrapperWidth, placeable, wrapperHeight, _this__u8e3s4));
  };
  function size(_this__u8e3s4, size) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda(size);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new SizeElement(size, size, size, size, true, tmp0_inspectorInfo));
  }
  function sizeIn(_this__u8e3s4, minWidth, minHeight, maxWidth, maxHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : maxHeight;
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = sizeIn$lambda(minWidth, minHeight, maxWidth, maxHeight);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new SizeElement(minWidth, minHeight, maxWidth, maxHeight, true, tmp$ret$0));
  }
  function defaultMinSize(_this__u8e3s4, minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minHeight;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.then_g5qrxq_k$(new UnspecifiedConstraintsElement(minWidth, minHeight));
  }
  function wrapContentHeight(_this__u8e3s4, align, unbounded) {
    align = align === VOID ? Companion_getInstance().get_CenterVertically_dmkbbz_k$() : align;
    unbounded = unbounded === VOID ? false : unbounded;
    _init_properties_Size_kt__jcru8v();
    var tmp;
    if (equals(align, Companion_getInstance().get_CenterVertically_dmkbbz_k$()) && !unbounded) {
      tmp = get_WrapContentHeightCenter();
    } else if (equals(align, Companion_getInstance().get_Top_18jj1w_k$()) && !unbounded) {
      tmp = get_WrapContentHeightTop();
    } else {
      tmp = Companion_getInstance_8().height_lq0arx_k$(align, unbounded);
    }
    return _this__u8e3s4.then_g5qrxq_k$(tmp);
  }
  function heightIn(_this__u8e3s4, min, max) {
    min = min === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : min;
    max = max === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : max;
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = heightIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new SizeElement(VOID, min, VOID, max, true, tmp$ret$0));
  }
  function fillMaxWidth(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.then_g5qrxq_k$(fraction === 1.0 ? get_FillWholeMaxWidth() : Companion_getInstance_7().width_h0xe6_k$(fraction));
  }
  function height(_this__u8e3s4, height) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = height$lambda(height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new SizeElement(VOID, height, VOID, height, true, tmp$ret$0));
  }
  function fillMaxSize(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.then_g5qrxq_k$(fraction === 1.0 ? get_FillWholeMaxSize() : Companion_getInstance_7().size_34i8tl_k$(fraction));
  }
  function _get_minWidth__tgi6yf($this) {
    return $this.minWidth_1;
  }
  function _get_minHeight__j32lk8($this) {
    return $this.minHeight_1;
  }
  function _get_maxWidth__golao9($this) {
    return $this.maxWidth_1;
  }
  function _get_maxHeight__b29xja($this) {
    return $this.maxHeight_1;
  }
  function _get_enforceIncoming__5fpgix($this) {
    return $this.enforceIncoming_1;
  }
  function _get_inspectorInfo__ojvtbg($this) {
    return $this.inspectorInfo_1;
  }
  function SizeElement(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : maxHeight;
    ModifierNodeElement.call(this);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
    this.maxWidth_1 = maxWidth;
    this.maxHeight_1 = maxHeight;
    this.enforceIncoming_1 = enforceIncoming;
    this.inspectorInfo_1 = inspectorInfo;
  }
  protoOf(SizeElement).create_md4cuc_k$ = function () {
    return new SizeNode(this.minWidth_1, this.minHeight_1, this.maxWidth_1, this.maxHeight_1, this.enforceIncoming_1);
  };
  protoOf(SizeElement).update_ocbjcq_k$ = function (node) {
    node.minWidth_1 = this.minWidth_1;
    node.minHeight_1 = this.minHeight_1;
    node.maxWidth_1 = this.maxWidth_1;
    node.maxHeight_1 = this.maxHeight_1;
    node.enforceIncoming_1 = this.enforceIncoming_1;
  };
  protoOf(SizeElement).update_9wd57p_k$ = function (node) {
    return this.update_ocbjcq_k$(node instanceof SizeNode ? node : THROW_CCE());
  };
  protoOf(SizeElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  protoOf(SizeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SizeElement))
      return false;
    if (!equals(this.minWidth_1, other.minWidth_1))
      return false;
    if (!equals(this.minHeight_1, other.minHeight_1))
      return false;
    if (!equals(this.maxWidth_1, other.maxWidth_1))
      return false;
    if (!equals(this.maxHeight_1, other.maxHeight_1))
      return false;
    if (!(this.enforceIncoming_1 === other.enforceIncoming_1))
      return false;
    return true;
  };
  protoOf(SizeElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.minWidth_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.minHeight_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.maxWidth_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.maxHeight_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.enforceIncoming_1) | 0;
    return result;
  };
  function UnspecifiedConstraintsElement(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minHeight;
    ModifierNodeElement.call(this);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsElement).get_minWidth_3ut7ei_k$ = function () {
    return this.minWidth_1;
  };
  protoOf(UnspecifiedConstraintsElement).get_minHeight_lqlp2r_k$ = function () {
    return this.minHeight_1;
  };
  protoOf(UnspecifiedConstraintsElement).create_md4cuc_k$ = function () {
    return new UnspecifiedConstraintsNode(this.minWidth_1, this.minHeight_1);
  };
  protoOf(UnspecifiedConstraintsElement).update_9i36x4_k$ = function (node) {
    node.minWidth_1 = this.minWidth_1;
    node.minHeight_1 = this.minHeight_1;
  };
  protoOf(UnspecifiedConstraintsElement).update_9wd57p_k$ = function (node) {
    return this.update_9i36x4_k$(node instanceof UnspecifiedConstraintsNode ? node : THROW_CCE());
  };
  protoOf(UnspecifiedConstraintsElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('defaultMinSize');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('minWidth', new Dp(this.minWidth_1));
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('minHeight', new Dp(this.minHeight_1));
  };
  protoOf(UnspecifiedConstraintsElement).equals = function (other) {
    if (!(other instanceof UnspecifiedConstraintsElement))
      return false;
    return equals(this.minWidth_1, other.minWidth_1) && equals(this.minHeight_1, other.minHeight_1);
  };
  protoOf(UnspecifiedConstraintsElement).hashCode = function () {
    return imul(Dp__hashCode_impl_sxkrra(this.minWidth_1), 31) + Dp__hashCode_impl_sxkrra(this.minHeight_1) | 0;
  };
  function _get_targetConstraints__wn7g24(_this__u8e3s4, $this) {
    var tmp;
    if (!equals($this.maxWidth_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())) {
      tmp = coerceAtLeast(_this__u8e3s4.roundToPx_yb7vg8_k$($this.maxWidth_1), 0);
    } else {
      tmp = 2147483647;
    }
    var maxWidth = tmp;
    var tmp_0;
    if (!equals($this.maxHeight_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())) {
      tmp_0 = coerceAtLeast(_this__u8e3s4.roundToPx_yb7vg8_k$($this.maxHeight_1), 0);
    } else {
      tmp_0 = 2147483647;
    }
    var maxHeight = tmp_0;
    var tmp_1;
    if (!equals($this.minWidth_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())) {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.layout.SizeNode.<get-targetConstraints>.<anonymous>' call
      var it = coerceAtLeast(coerceAtMost_0(_this__u8e3s4.roundToPx_yb7vg8_k$($this.minWidth_1), maxWidth), 0);
      tmp_1 = !(it === 2147483647) ? it : 0;
    } else {
      tmp_1 = 0;
    }
    var minWidth = tmp_1;
    var tmp_2;
    if (!equals($this.minHeight_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())) {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.layout.SizeNode.<get-targetConstraints>.<anonymous>' call
      var it_0 = coerceAtLeast(coerceAtMost_0(_this__u8e3s4.roundToPx_yb7vg8_k$($this.minHeight_1), maxHeight), 0);
      tmp_2 = !(it_0 === 2147483647) ? it_0 : 0;
    } else {
      tmp_2 = 0;
    }
    var minHeight = tmp_2;
    return Constraints(minWidth, maxWidth, minHeight, maxHeight);
  }
  function SizeNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_yv6dex_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function SizeNode(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : maxHeight;
    Node.call(this);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
    this.maxWidth_1 = maxWidth;
    this.maxHeight_1 = maxHeight;
    this.enforceIncoming_1 = enforceIncoming;
  }
  protoOf(SizeNode).set_minWidth_nt0wsq_k$ = function (_set____db54di) {
    this.minWidth_1 = _set____db54di;
  };
  protoOf(SizeNode).get_minWidth_3ut7ei_k$ = function () {
    return this.minWidth_1;
  };
  protoOf(SizeNode).set_minHeight_o84vor_k$ = function (_set____db54di) {
    this.minHeight_1 = _set____db54di;
  };
  protoOf(SizeNode).get_minHeight_lqlp2r_k$ = function () {
    return this.minHeight_1;
  };
  protoOf(SizeNode).set_maxWidth_llwtu0_k$ = function (_set____db54di) {
    this.maxWidth_1 = _set____db54di;
  };
  protoOf(SizeNode).get_maxWidth_u7u2hk_k$ = function () {
    return this.maxWidth_1;
  };
  protoOf(SizeNode).set_maxHeight_bgxpqx_k$ = function (_set____db54di) {
    this.maxHeight_1 = _set____db54di;
  };
  protoOf(SizeNode).get_maxHeight_cjye1t_k$ = function () {
    return this.maxHeight_1;
  };
  protoOf(SizeNode).set_enforceIncoming_qike0a_k$ = function (_set____db54di) {
    this.enforceIncoming_1 = _set____db54di;
  };
  protoOf(SizeNode).get_enforceIncoming_ilwx4x_k$ = function () {
    return this.enforceIncoming_1;
  };
  protoOf(SizeNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.foundation.layout.SizeNode.measure.<anonymous>' call
    var targetConstraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (this.enforceIncoming_1) {
      tmp = constrain(constraints, targetConstraints);
    } else {
      var tmp_0;
      if (!equals(this.minWidth_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())) {
        tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(targetConstraints);
      } else {
        tmp_0 = coerceAtMost_0(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(targetConstraints));
      }
      var resolvedMinWidth = tmp_0;
      var tmp_1;
      if (!equals(this.maxWidth_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())) {
        tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(targetConstraints);
      } else {
        tmp_1 = coerceAtLeast(_Constraints___get_maxWidth__impl__uuyqc(constraints), _Constraints___get_minWidth__impl__hi9lfi(targetConstraints));
      }
      var resolvedMaxWidth = tmp_1;
      var tmp_2;
      if (!equals(this.minHeight_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())) {
        tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(targetConstraints);
      } else {
        tmp_2 = coerceAtMost_0(_Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(targetConstraints));
      }
      var resolvedMinHeight = tmp_2;
      var tmp_3;
      if (!equals(this.maxHeight_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())) {
        tmp_3 = _Constraints___get_maxHeight__impl__dt3e8z(targetConstraints);
      } else {
        tmp_3 = coerceAtLeast(_Constraints___get_maxHeight__impl__dt3e8z(constraints), _Constraints___get_minHeight__impl__ev4bgx(targetConstraints));
      }
      var resolvedMaxHeight = tmp_3;
      tmp = Constraints(resolvedMinWidth, resolvedMaxWidth, resolvedMinHeight, resolvedMaxHeight);
    }
    var wrappedConstraints = tmp;
    var placeable = measurable.measure_4dmfk1_k$(wrappedConstraints);
    var tmp_4 = placeable.get_width_j0q4yl_k$();
    var tmp_5 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp_4, tmp_5, VOID, SizeNode$measure$lambda(placeable));
  };
  protoOf(SizeNode).minIntrinsicWidth_nsvhwg_k$ = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = constrainWidth(constraints, measurable.minIntrinsicWidth_jyhjuj_k$(height));
    }
    return tmp;
  };
  protoOf(SizeNode).minIntrinsicHeight_xt6ly1_k$ = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      tmp = constrainHeight(constraints, measurable.minIntrinsicHeight_p2a4ou_k$(width));
    }
    return tmp;
  };
  protoOf(SizeNode).maxIntrinsicWidth_epsb1u_k$ = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = constrainWidth(constraints, measurable.maxIntrinsicWidth_b8umbx_k$(height));
    }
    return tmp;
  };
  protoOf(SizeNode).maxIntrinsicHeight_nrifyt_k$ = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      tmp = constrainHeight(constraints, measurable.maxIntrinsicHeight_b0krtc_k$(width));
    }
    return tmp;
  };
  function UnspecifiedConstraintsNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_yv6dex_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function UnspecifiedConstraintsNode(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minHeight;
    Node.call(this);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsNode).set_minWidth_nt0wsq_k$ = function (_set____db54di) {
    this.minWidth_1 = _set____db54di;
  };
  protoOf(UnspecifiedConstraintsNode).get_minWidth_3ut7ei_k$ = function () {
    return this.minWidth_1;
  };
  protoOf(UnspecifiedConstraintsNode).set_minHeight_o84vor_k$ = function (_set____db54di) {
    this.minHeight_1 = _set____db54di;
  };
  protoOf(UnspecifiedConstraintsNode).get_minHeight_lqlp2r_k$ = function () {
    return this.minHeight_1;
  };
  protoOf(UnspecifiedConstraintsNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    if (!equals(this.minWidth_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$()) && _Constraints___get_minWidth__impl__hi9lfi(constraints) === 0) {
      tmp = coerceAtLeast(coerceAtMost_0(_this__u8e3s4.roundToPx_yb7vg8_k$(this.minWidth_1), _Constraints___get_maxWidth__impl__uuyqc(constraints)), 0);
    } else {
      tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    }
    var tmp_0 = tmp;
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2;
    if (!equals(this.minHeight_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$()) && _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0) {
      tmp_2 = coerceAtLeast(coerceAtMost_0(_this__u8e3s4.roundToPx_yb7vg8_k$(this.minHeight_1), _Constraints___get_maxHeight__impl__dt3e8z(constraints)), 0);
    } else {
      tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    }
    var wrappedConstraints = Constraints(tmp_0, tmp_1, tmp_2, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    var placeable = measurable.measure_4dmfk1_k$(wrappedConstraints);
    var tmp_3 = placeable.get_width_j0q4yl_k$();
    var tmp_4 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp_3, tmp_4, VOID, UnspecifiedConstraintsNode$measure$lambda(placeable));
  };
  protoOf(UnspecifiedConstraintsNode).minIntrinsicWidth_nsvhwg_k$ = function (_this__u8e3s4, measurable, height) {
    return coerceAtLeast(measurable.minIntrinsicWidth_jyhjuj_k$(height), !equals(this.minWidth_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$()) ? _this__u8e3s4.roundToPx_yb7vg8_k$(this.minWidth_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).maxIntrinsicWidth_epsb1u_k$ = function (_this__u8e3s4, measurable, height) {
    return coerceAtLeast(measurable.maxIntrinsicWidth_b8umbx_k$(height), !equals(this.minWidth_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$()) ? _this__u8e3s4.roundToPx_yb7vg8_k$(this.minWidth_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).minIntrinsicHeight_xt6ly1_k$ = function (_this__u8e3s4, measurable, width) {
    return coerceAtLeast(measurable.minIntrinsicHeight_p2a4ou_k$(width), !equals(this.minHeight_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$()) ? _this__u8e3s4.roundToPx_yb7vg8_k$(this.minHeight_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).maxIntrinsicHeight_nrifyt_k$ = function (_this__u8e3s4, measurable, width) {
    return coerceAtLeast(measurable.maxIntrinsicHeight_b0krtc_k$(width), !equals(this.minHeight_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$()) ? _this__u8e3s4.roundToPx_yb7vg8_k$(this.minHeight_1) : 0);
  };
  function size_0(_this__u8e3s4, width, height) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda_0(width, height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new SizeElement(width, height, width, height, true, tmp0_inspectorInfo));
  }
  function size$lambda($size) {
    return function ($this$null) {
      $this$null.set_name_wkmnld_k$('size');
      $this$null.set_value_rjqr2d_k$(new Dp($size));
      return Unit_getInstance();
    };
  }
  function sizeIn$lambda($minWidth, $minHeight, $maxWidth, $maxHeight) {
    return function ($this$null) {
      $this$null.set_name_wkmnld_k$('sizeIn');
      $this$null.get_properties_zhllqc_k$().set_vvveh5_k$('minWidth', new Dp($minWidth));
      $this$null.get_properties_zhllqc_k$().set_vvveh5_k$('minHeight', new Dp($minHeight));
      $this$null.get_properties_zhllqc_k$().set_vvveh5_k$('maxWidth', new Dp($maxWidth));
      $this$null.get_properties_zhllqc_k$().set_vvveh5_k$('maxHeight', new Dp($maxHeight));
      return Unit_getInstance();
    };
  }
  function heightIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.set_name_wkmnld_k$('heightIn');
      $this$null.get_properties_zhllqc_k$().set_vvveh5_k$('min', new Dp($min));
      $this$null.get_properties_zhllqc_k$().set_vvveh5_k$('max', new Dp($max));
      return Unit_getInstance();
    };
  }
  function height$lambda($height) {
    return function ($this$null) {
      $this$null.set_name_wkmnld_k$('height');
      $this$null.set_value_rjqr2d_k$(new Dp($height));
      return Unit_getInstance();
    };
  }
  function size$lambda_0($width, $height) {
    return function ($this$null) {
      $this$null.set_name_wkmnld_k$('size');
      $this$null.get_properties_zhllqc_k$().set_vvveh5_k$('width', new Dp($width));
      $this$null.get_properties_zhllqc_k$().set_vvveh5_k$('height', new Dp($height));
      return Unit_getInstance();
    };
  }
  function Direction_Vertical_getInstance() {
    Direction_initEntries();
    return Direction_Vertical_instance;
  }
  function Direction_Horizontal_getInstance() {
    Direction_initEntries();
    return Direction_Horizontal_instance;
  }
  function Direction_Both_getInstance() {
    Direction_initEntries();
    return Direction_Both_instance;
  }
  var properties_initialized_Size_kt_x7rk2r;
  function _init_properties_Size_kt__jcru8v() {
    if (!properties_initialized_Size_kt_x7rk2r) {
      properties_initialized_Size_kt_x7rk2r = true;
      FillWholeMaxWidth = Companion_getInstance_7().width_h0xe6_k$(1.0);
      FillWholeMaxHeight = Companion_getInstance_7().height_21djpr_k$(1.0);
      FillWholeMaxSize = Companion_getInstance_7().size_34i8tl_k$(1.0);
      WrapContentWidthCenter = Companion_getInstance_8().width_5b10pq_k$(Companion_getInstance().get_CenterHorizontally_97ab0v_k$(), false);
      WrapContentWidthStart = Companion_getInstance_8().width_5b10pq_k$(Companion_getInstance().get_Start_ih4i6x_k$(), false);
      WrapContentHeightCenter = Companion_getInstance_8().height_lq0arx_k$(Companion_getInstance().get_CenterVertically_dmkbbz_k$(), false);
      WrapContentHeightTop = Companion_getInstance_8().height_lq0arx_k$(Companion_getInstance().get_Top_18jj1w_k$(), false);
      WrapContentSizeCenter = Companion_getInstance_8().size_xsrtan_k$(Companion_getInstance().get_Center_3arb0i_k$(), false);
      WrapContentSizeTopStart = Companion_getInstance_8().size_xsrtan_k$(Companion_getInstance().get_TopStart_o4x792_k$(), false);
    }
  }
  function Spacer(modifier, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -72882467, 'C(Spacer)39@1433L64:Spacer.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-72882467, $changed, -1, 'androidx.compose.foundation.layout.Spacer (Spacer.kt:38)');
    }
    var tmp1 = SpacerMeasurePolicy_getInstance();
    // Inline function 'androidx.compose.ui.layout.Layout' call
    var modifier_0 = modifier;
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 544976794, 'CC(Layout)P(1)125@4862L23,128@5013L385:Layout.kt#80mrfh');
    if (!((0 & 1) === 0))
      modifier_0 = Companion_getInstance_1();
    var compositeKeyHash = get_currentCompositeKeyHash($composer_1, 0);
    var materialized = materialize($composer_1, modifier_0);
    var localMap = $composer_1.get_currentCompositionLocalMap_fmcf79_k$();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
    var factory = Companion_getInstance_2().get_Constructor_f7ieep_k$();
    var $composer_2 = $composer_1;
    sourceInformationMarkerStart($composer_2, 1405779621, 'CC(ReusableComposeNode):Composables.kt#9igjgp');
    var tmp = $composer_2.get_applier_bupu8u_k$();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_2.startReusableNode_jjgeyp_k$();
    if ($composer_2.get_inserting_25mlsw_k$()) {
      $composer_2.createNode_ahrd54_k$(factory);
    } else {
      $composer_2.useNode_io5s9l_k$();
    }
    // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
    var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
    Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
    Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
    // Inline function 'androidx.compose.runtime.Updater.set' call
    var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
    if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
      $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
      _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
    }
    $composer_2.endNode_3m0yfn_k$();
    sourceInformationMarkerEnd($composer_2);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function SpacerMeasurePolicy$measure$lambda($this$layout) {
    return Unit_getInstance();
  }
  function SpacerMeasurePolicy() {
    SpacerMeasurePolicy_instance = this;
  }
  protoOf(SpacerMeasurePolicy).measure_xg9b01_k$ = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.layout.SpacerMeasurePolicy.measure.<anonymous>' call
    var width = _Constraints___get_hasFixedWidth__impl__4p17wc(constraints) ? _Constraints___get_maxWidth__impl__uuyqc(constraints) : 0;
    var height = _Constraints___get_hasFixedHeight__impl__y56fxx(constraints) ? _Constraints___get_maxHeight__impl__dt3e8z(constraints) : 0;
    return _this__u8e3s4.layout$default_n19e5l_k$(width, height, VOID, SpacerMeasurePolicy$measure$lambda);
  };
  var SpacerMeasurePolicy_instance;
  function SpacerMeasurePolicy_getInstance() {
    if (SpacerMeasurePolicy_instance == null)
      new SpacerMeasurePolicy();
    return SpacerMeasurePolicy_instance;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  var Companion_instance_2;
  function Companion_getInstance_9() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function WindowInsets() {
  }
  function WindowInsets_0(left, top, right, bottom) {
    left = left === VOID ? 0 : left;
    top = top === VOID ? 0 : top;
    right = right === VOID ? 0 : right;
    bottom = bottom === VOID ? 0 : bottom;
    return new FixedIntInsets(left, top, right, bottom);
  }
  function _get_leftVal__7g7e4p($this) {
    return $this.leftVal_1;
  }
  function _get_topVal__iy0agv($this) {
    return $this.topVal_1;
  }
  function _get_rightVal__1fxr7e($this) {
    return $this.rightVal_1;
  }
  function _get_bottomVal__lks4yj($this) {
    return $this.bottomVal_1;
  }
  function FixedIntInsets(leftVal, topVal, rightVal, bottomVal) {
    this.leftVal_1 = leftVal;
    this.topVal_1 = topVal;
    this.rightVal_1 = rightVal;
    this.bottomVal_1 = bottomVal;
  }
  protoOf(FixedIntInsets).getLeft_sdff2j_k$ = function (density, layoutDirection) {
    return this.leftVal_1;
  };
  protoOf(FixedIntInsets).getTop_j1mevb_k$ = function (density) {
    return this.topVal_1;
  };
  protoOf(FixedIntInsets).getRight_nwst5g_k$ = function (density, layoutDirection) {
    return this.rightVal_1;
  };
  protoOf(FixedIntInsets).getBottom_4od39h_k$ = function (density) {
    return this.bottomVal_1;
  };
  protoOf(FixedIntInsets).toString = function () {
    return 'Insets(left=' + this.leftVal_1 + ', top=' + this.topVal_1 + ', right=' + this.rightVal_1 + ', bottom=' + this.bottomVal_1 + ')';
  };
  protoOf(FixedIntInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof FixedIntInsets)) {
      return false;
    }
    return this.leftVal_1 === other.leftVal_1 && this.topVal_1 === other.topVal_1 && this.rightVal_1 === other.rightVal_1 && this.bottomVal_1 === other.bottomVal_1;
  };
  protoOf(FixedIntInsets).hashCode = function () {
    var result = this.leftVal_1;
    result = imul(31, result) + this.topVal_1 | 0;
    result = imul(31, result) + this.rightVal_1 | 0;
    result = imul(31, result) + this.bottomVal_1 | 0;
    return result;
  };
  function get_ModifierLocalConsumedWindowInsets() {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    return ModifierLocalConsumedWindowInsets;
  }
  var ModifierLocalConsumedWindowInsets;
  function ModifierLocalConsumedWindowInsets$lambda() {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    return WindowInsets_0(0, 0, 0, 0);
  }
  var properties_initialized_WindowInsetsPadding_kt_k80ef9;
  function _init_properties_WindowInsetsPadding_kt__2qyozr() {
    if (!properties_initialized_WindowInsetsPadding_kt_k80ef9) {
      properties_initialized_WindowInsetsPadding_kt_k80ef9 = true;
      ModifierLocalConsumedWindowInsets = modifierLocalOf(ModifierLocalConsumedWindowInsets$lambda);
    }
  }
  function NoOp() {
  }
  protoOf(NoOp).equals = function (other) {
    if (!(other instanceof NoOp))
      return false;
    other instanceof NoOp || THROW_CCE();
    return true;
  };
  protoOf(NoOp).hashCode = function () {
    return 0;
  };
  protoOf(NoOp).toString = function () {
    return '@androidx.compose.foundation.layout.internal.NoOp(' + ')';
  };
  function get_ZeroInsets() {
    _init_properties_WindowInsets_notMobile_kt__cg4w4z();
    return ZeroInsets;
  }
  var ZeroInsets;
  function get_statusBars(_this__u8e3s4) {
    _init_properties_WindowInsets_notMobile_kt__cg4w4z();
    return get_ZeroInsets();
  }
  var properties_initialized_WindowInsets_notMobile_kt_v7y701;
  function _init_properties_WindowInsets_notMobile_kt__cg4w4z() {
    if (!properties_initialized_WindowInsets_notMobile_kt_v7y701) {
      properties_initialized_WindowInsets_notMobile_kt_v7y701 = true;
      ZeroInsets = WindowInsets_0(0, 0, 0, 0);
    }
  }
  //region block: post-declaration
  protoOf(Arrangement$Absolute$Left$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Absolute$Center$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Absolute$Right$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Absolute$SpaceBetween$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Absolute$SpaceEvenly$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Absolute$SpaceAround$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Start$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$End$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Top$1).get_spacing_zb7agn_k$ = get_spacing_0;
  protoOf(Arrangement$Bottom$1).get_spacing_zb7agn_k$ = get_spacing_0;
  protoOf(BoxMeasurePolicy).minIntrinsicWidth_dwfcse_k$ = minIntrinsicWidth;
  protoOf(BoxMeasurePolicy).minIntrinsicHeight_xlhgwn_k$ = minIntrinsicHeight;
  protoOf(BoxMeasurePolicy).maxIntrinsicWidth_cx7ze4_k$ = maxIntrinsicWidth;
  protoOf(BoxMeasurePolicy).maxIntrinsicHeight_3a4xm1_k$ = maxIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).minIntrinsicWidth_dwfcse_k$ = minIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).minIntrinsicHeight_xlhgwn_k$ = minIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).maxIntrinsicWidth_cx7ze4_k$ = maxIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).maxIntrinsicHeight_3a4xm1_k$ = maxIntrinsicHeight;
  protoOf(ColumnMeasurePolicy).createConstraints$default_x2rfs3_k$ = createConstraints$default;
  protoOf(ColumnScopeInstance).weight$default_gbkz97_k$ = weight$default;
  protoOf(OffsetNode).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth_0;
  protoOf(OffsetNode).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight_0;
  protoOf(OffsetNode).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth_0;
  protoOf(OffsetNode).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight_0;
  protoOf(PaddingNode).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth_0;
  protoOf(PaddingNode).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight_0;
  protoOf(PaddingNode).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth_0;
  protoOf(PaddingNode).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight_0;
  protoOf(PaddingValuesModifier).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth_0;
  protoOf(PaddingValuesModifier).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight_0;
  protoOf(PaddingValuesModifier).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth_0;
  protoOf(PaddingValuesModifier).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight_0;
  protoOf(RowMeasurePolicy).createConstraints$default_x2rfs3_k$ = createConstraints$default;
  protoOf(RowScopeInstance).weight$default_yewrvp_k$ = weight$default_0;
  protoOf(FillNode).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth_0;
  protoOf(FillNode).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight_0;
  protoOf(FillNode).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth_0;
  protoOf(FillNode).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight_0;
  protoOf(WrapContentNode).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth_0;
  protoOf(WrapContentNode).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight_0;
  protoOf(WrapContentNode).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth_0;
  protoOf(WrapContentNode).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight_0;
  protoOf(SpacerMeasurePolicy).minIntrinsicWidth_dwfcse_k$ = minIntrinsicWidth;
  protoOf(SpacerMeasurePolicy).minIntrinsicHeight_xlhgwn_k$ = minIntrinsicHeight;
  protoOf(SpacerMeasurePolicy).maxIntrinsicWidth_cx7ze4_k$ = maxIntrinsicWidth;
  protoOf(SpacerMeasurePolicy).maxIntrinsicHeight_3a4xm1_k$ = maxIntrinsicHeight;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Box_0;
  _.$_$.b = PaddingValues_2;
  _.$_$.c = PaddingValues_0;
  _.$_$.d = PaddingValues_1;
  _.$_$.e = Spacer;
  _.$_$.f = calculateEndPadding;
  _.$_$.g = calculateStartPadding;
  _.$_$.h = columnMeasurePolicy;
  _.$_$.i = defaultMinSize;
  _.$_$.j = fillMaxSize;
  _.$_$.k = fillMaxWidth;
  _.$_$.l = heightIn;
  _.$_$.m = height;
  _.$_$.n = maybeCachedBoxMeasurePolicy;
  _.$_$.o = offset_0;
  _.$_$.p = padding_2;
  _.$_$.q = padding_1;
  _.$_$.r = padding_0;
  _.$_$.s = padding;
  _.$_$.t = rowMeasurePolicy;
  _.$_$.u = sizeIn;
  _.$_$.v = size_0;
  _.$_$.w = size;
  _.$_$.x = get_statusBars;
  _.$_$.y = wrapContentHeight;
  _.$_$.z = Arrangement_getInstance;
  _.$_$.a1 = BoxScopeInstance_getInstance;
  _.$_$.b1 = ColumnScopeInstance_getInstance;
  _.$_$.c1 = RowScopeInstance_getInstance;
  _.$_$.d1 = Companion_getInstance_9;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-foundation-foundation-layout.js.map
