(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-collection-collection.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    globalThis['compose-multiplatform-core-compose-animation-animation'] = factory(typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-animation-animation'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-collection-collection']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_collection_internal_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var Unit_getInstance = kotlin_kotlin.$_$.u5;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var protoOf = kotlin_kotlin.$_$.ef;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.e6;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.g6;
  var composed = kotlin_org_jetbrains_compose_ui_ui.$_$.j8;
  var VOID = kotlin_kotlin.$_$.e;
  var initMetadataForInterface = kotlin_kotlin.$_$.fe;
  var THROW_IAE = kotlin_kotlin.$_$.jj;
  var enumEntries = kotlin_kotlin.$_$.ed;
  var Enum = kotlin_kotlin.$_$.wi;
  var initMetadataForClass = kotlin_kotlin.$_$.ce;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.z9;
  var updateTransition = kotlin_org_jetbrains_compose_animation_animation_core.$_$.q1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p2;
  var THROW_CCE = kotlin_kotlin.$_$.ij;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var layout = kotlin_org_jetbrains_compose_ui_ui.$_$.s3;
  var createChildTransitionInternal = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g1;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var produceState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.k8;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.u9;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var isInterface = kotlin_kotlin.$_$.re;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var equals = kotlin_kotlin.$_$.td;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e4;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var get_lastIndex = kotlin_kotlin.$_$.y9;
  var compareTo = kotlin_kotlin.$_$.qd;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var KProperty0 = kotlin_kotlin.$_$.mg;
  var THROW_ISE = kotlin_kotlin.$_$.kj;
  var getLocalDelegateReference = kotlin_kotlin.$_$.xd;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h3;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var FunctionAdapter = kotlin_kotlin.$_$.gd;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var hashCode = kotlin_kotlin.$_$.be;
  var CoroutineImpl = kotlin_kotlin.$_$.yc;
  var initMetadataForLambda = kotlin_kotlin.$_$.ge;
  var ProduceStateScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var snapshotFlow = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ic;
  var SuspendFunction1 = kotlin_kotlin.$_$.ad;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.f8;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.n4;
  var ensureNotNull = kotlin_kotlin.$_$.bk;
  var KMutableProperty1 = kotlin_kotlin.$_$.lg;
  var getPropertyCallableRef = kotlin_kotlin.$_$.zd;
  var Spring_getInstance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.u1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.u1;
  var get_VisibilityThreshold = kotlin_org_jetbrains_compose_animation_animation_core.$_$.y;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o1;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r;
  var ColorSpaces_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h3;
  var Color__convert_impl_so5m8t = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s2;
  var _Color___get_red__impl__cwrsk6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v2;
  var _Color___get_green__impl__bta9rs = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t2;
  var _Color___get_blue__impl__xwez13 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q2;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var AnimationVector4D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m;
  var Annotation = kotlin_kotlin.$_$.oi;
  var initMetadataForCompanion = kotlin_kotlin.$_$.de;
  var plus = kotlin_kotlin.$_$.qa;
  var to = kotlin_kotlin.$_$.vk;
  var mapOf = kotlin_kotlin.$_$.ja;
  var initMetadataForObject = kotlin_kotlin.$_$.he;
  var toString = kotlin_kotlin.$_$.if;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d4;
  var get_VectorConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.s;
  var createDeferredAnimation = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h1;
  var get_VectorConverter_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.w;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.s;
  var emptyMap = kotlin_kotlin.$_$.w8;
  var toString_0 = kotlin_kotlin.$_$.uk;
  var getBooleanHashCode = kotlin_kotlin.$_$.wd;
  var getNumberHashCode = kotlin_kotlin.$_$.yd;
  var TransformOrigin = kotlin_org_jetbrains_compose_ui_ui.$_$.r;
  var TransformOrigin__toString_impl_nn7ftd = kotlin_org_jetbrains_compose_ui_ui.$_$.c9;
  var TransformOrigin__hashCode_impl_pmqpcw = kotlin_org_jetbrains_compose_ui_ui.$_$.z8;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.f5;
  var get_VectorConverter_1 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.x;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.o4;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.jk;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var IntOffset__minus_impl_4m69hb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y2;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui.$_$.y9;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l1;
  var IntOffset__plus_impl_nqoa9b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var get_VisibilityThreshold_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a1;
  var KMutableProperty0 = kotlin_kotlin.$_$.kg;
  var _TransformOrigin___get_pivotFractionX__impl__a9pmci = kotlin_org_jetbrains_compose_ui_ui.$_$.a9;
  var _TransformOrigin___get_pivotFractionY__impl__ijwupp = kotlin_org_jetbrains_compose_ui_ui.$_$.b9;
  var AnimationVector2D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g;
  var TransformOrigin_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.q;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui.$_$.j9;
  var get_VisibilityThreshold_1 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.z;
  var Long = kotlin_kotlin.$_$.bj;
  var numberToLong = kotlin_kotlin.$_$.cf;
  var requireLayoutCoordinates = kotlin_org_jetbrains_compose_ui_ui.$_$.k5;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t1;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var requireDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.i5;
  var drawLayer = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l3;
  var mutableFloatStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var requireGraphicsContext = kotlin_org_jetbrains_compose_ui_ui.$_$.j5;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.d4;
  var get_providedValues = kotlin_org_jetbrains_compose_ui_ui.$_$.v3;
  var provide = kotlin_org_jetbrains_compose_ui_ui.$_$.w3;
  var get_current = kotlin_org_jetbrains_compose_ui_ui.$_$.u3;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.e4;
  var ModifierLocalModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.x3;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Offset__minus_impl_hoj2c0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
  var roundToInt = kotlin_kotlin.$_$.of;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d;
  var modifierLocalMapOf = kotlin_org_jetbrains_compose_ui_ui.$_$.z3;
  var roundToIntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z3;
  var coerceAtLeast = kotlin_kotlin.$_$.wf;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var isPlacementApproachInProgress = kotlin_org_jetbrains_compose_ui_ui.$_$.d2;
  var minApproachIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.h2;
  var minApproachIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.g2;
  var maxApproachIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.f2;
  var maxApproachIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.e2;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.m4;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.l4;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.k4;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.j4;
  var ApproachLayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.i2;
  var modifierLocalOf = kotlin_org_jetbrains_compose_ui_ui.$_$.a4;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_ui_ui.$_$.t9;
  var LookaheadScope = kotlin_org_jetbrains_compose_ui_ui.$_$.v2;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w;
  var addOutline = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e1;
  var Comparator = kotlin_kotlin.$_$.vi;
  var MutableTransitionState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n;
  var rememberTransition = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n1;
  var get_VectorConverter_2 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.u;
  var compareValues = kotlin_kotlin.$_$.fc;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var MutableScatterMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.h;
  var localLookaheadPositionOf$default = kotlin_org_jetbrains_compose_ui_ui.$_$.u8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.qk;
  var sortWith = kotlin_kotlin.$_$.jb;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var _ScaleFactor___get_scaleX__impl__u0r14l = kotlin_org_jetbrains_compose_ui_ui.$_$.f9;
  var _ScaleFactor___get_scaleY__impl__174k2e = kotlin_org_jetbrains_compose_ui_ui.$_$.g9;
  var ScaleFactor = kotlin_org_jetbrains_compose_ui_ui.$_$.k3;
  var SnapshotStateObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.k;
  var lazy = kotlin_kotlin.$_$.hk;
  var _Color___get_colorSpace__impl__jqqozk = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r2;
  var animateValueAsState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.d1;
  var generateDecayAnimationSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j1;
  var coerceIn = kotlin_kotlin.$_$.cg;
  var numberToInt = kotlin_kotlin.$_$.bf;
  var FloatDecayAnimationSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l;
  var createTransitionAnimation = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i1;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.r5;
  //endregion
  //region block: pre-declaration
  function animateEnterExit(_this__u8e3s4, enter, exit, label) {
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = AnimatedVisibilityScope$animateEnterExit$lambda(enter, exit, label);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp_0 = tmp;
    return composed(_this__u8e3s4, tmp_0, AnimatedVisibilityScope$animateEnterExit$lambda_0(this, enter, exit, label));
  }
  function animateEnterExit$default(_this__u8e3s4, enter, exit, label, $super) {
    enter = enter === VOID ? fadeIn() : enter;
    exit = exit === VOID ? fadeOut() : exit;
    label = label === VOID ? 'animateEnterExit' : label;
    return $super === VOID ? this.animateEnterExit_z97dqu_k$(_this__u8e3s4, enter, exit, label) : animateEnterExit(_this__u8e3s4, enter, exit, label);
  }
  initMetadataForInterface(AnimatedVisibilityScope, 'AnimatedVisibilityScope');
  initMetadataForClass(EnterExitState, 'EnterExitState', VOID, Enum);
  initMetadataForInterface(OnLookaheadMeasured, 'OnLookaheadMeasured');
  initMetadataForClass(AnimatedVisibilityScopeImpl, 'AnimatedVisibilityScopeImpl', VOID, VOID, [AnimatedVisibilityScope]);
  initMetadataForClass(AnimatedEnterExitMeasurePolicy, 'AnimatedEnterExitMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(AnimatedEnterExitImpl$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(AnimatedEnterExitImpl$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(LayoutModifierNodeWithPassThroughIntrinsics, 'LayoutModifierNodeWithPassThroughIntrinsics', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(BoundsAnimation, 'BoundsAnimation');
  initMetadataForClass(ExperimentalAnimationApi, 'ExperimentalAnimationApi', VOID, VOID, [Annotation]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(EnterTransition, 'EnterTransition');
  initMetadataForInterface(TransitionEffectKey, 'TransitionEffectKey');
  initMetadataForObject(Key, 'Key', VOID, VOID, [TransitionEffectKey]);
  initMetadataForClass(TransitionEffect, 'TransitionEffect');
  initMetadataForClass(ContentScaleTransitionEffect, 'ContentScaleTransitionEffect', VOID, TransitionEffect);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ExitTransition, 'ExitTransition');
  initMetadataForClass(TransitionData, 'TransitionData', TransitionData);
  initMetadataForClass(EnterTransitionImpl, 'EnterTransitionImpl', VOID, EnterTransition);
  initMetadataForClass(Fade, 'Fade');
  initMetadataForClass(Slide, 'Slide');
  initMetadataForClass(ChangeSize, 'ChangeSize');
  initMetadataForClass(Scale, 'Scale');
  initMetadataForClass(ExitTransitionImpl, 'ExitTransitionImpl', VOID, ExitTransition);
  initMetadataForInterface(GraphicsLayerBlockForEnterExit, 'GraphicsLayerBlockForEnterExit');
  initMetadataForClass(EnterExitTransitionElement, 'EnterExitTransitionElement', VOID, ModifierNodeElement);
  initMetadataForClass(EnterExitTransitionModifierNode, 'EnterExitTransitionModifierNode', VOID, LayoutModifierNodeWithPassThroughIntrinsics);
  initMetadataForClass(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0, 'sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0', VOID, VOID, [GraphicsLayerBlockForEnterExit, FunctionAdapter]);
  initMetadataForClass(ExperimentalSharedTransitionApi, 'ExperimentalSharedTransitionApi', VOID, VOID, [Annotation]);
  initMetadataForClass(FlingInfo, 'FlingInfo');
  initMetadataForClass(FlingCalculator, 'FlingCalculator');
  initMetadataForClass(RenderInTransitionOverlayNodeElement, 'RenderInTransitionOverlayNodeElement', VOID, ModifierNodeElement);
  initMetadataForInterface(LayerRenderer, 'LayerRenderer');
  initMetadataForClass(LayerWithRenderer, 'LayerWithRenderer', VOID, VOID, [LayerRenderer]);
  initMetadataForClass(RenderInTransitionOverlayNode, 'RenderInTransitionOverlayNode', VOID, Node, [Node, DrawModifierNode, ModifierLocalModifierNode]);
  initMetadataForClass(SharedBoundsNodeElement, 'SharedBoundsNodeElement', VOID, ModifierNodeElement);
  initMetadataForClass(SharedBoundsNode, 'SharedBoundsNode', VOID, Node, [ApproachLayoutModifierNode, Node, DrawModifierNode, ModifierLocalModifierNode]);
  initMetadataForClass(SharedElementInternalState, 'SharedElementInternalState', VOID, VOID, [LayerRenderer, RememberObserver]);
  initMetadataForClass(SharedElement, 'SharedElement');
  initMetadataForInterface(PlaceHolderSize, 'PlaceHolderSize');
  initMetadataForClass(sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0, 'sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0', VOID, VOID, [PlaceHolderSize, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0_0, 'sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0', VOID, VOID, [PlaceHolderSize, FunctionAdapter]);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForInterface(ResizeMode, 'ResizeMode');
  initMetadataForInterface(OverlayClip, 'OverlayClip');
  initMetadataForClass(SharedContentState, 'SharedContentState');
  function scaleInSharedContentToBounds(contentScale, alignment) {
    return withEffect(Companion_getInstance_12().get_None_wo6tgh_k$(), new ContentScaleTransitionEffect(contentScale, alignment));
  }
  function scaleInSharedContentToBounds$default(contentScale, alignment, $super) {
    contentScale = contentScale === VOID ? Companion_getInstance_11().get_Fit_18jtko_k$() : contentScale;
    alignment = alignment === VOID ? Companion_getInstance_5().get_Center_3arb0i_k$() : alignment;
    return $super === VOID ? this.scaleInSharedContentToBounds_8dgsag_k$(contentScale, alignment) : scaleInSharedContentToBounds(contentScale, alignment);
  }
  function scaleOutSharedContentToBounds(contentScale, alignment) {
    return withEffect_0(Companion_getInstance_13().get_None_wo6tgh_k$(), new ContentScaleTransitionEffect(contentScale, alignment));
  }
  function scaleOutSharedContentToBounds$default(contentScale, alignment, $super) {
    contentScale = contentScale === VOID ? Companion_getInstance_11().get_Fit_18jtko_k$() : contentScale;
    alignment = alignment === VOID ? Companion_getInstance_5().get_Center_3arb0i_k$() : alignment;
    return $super === VOID ? this.scaleOutSharedContentToBounds_u503ir_k$(contentScale, alignment) : scaleOutSharedContentToBounds(contentScale, alignment);
  }
  function renderInSharedTransitionScopeOverlay$default(_this__u8e3s4, renderInOverlay, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    var tmp;
    if (renderInOverlay === VOID) {
      tmp = SharedTransitionScope$renderInSharedTransitionScopeOverlay$lambda(this);
    } else {
      tmp = renderInOverlay;
    }
    renderInOverlay = tmp;
    zIndexInOverlay = zIndexInOverlay === VOID ? 0.0 : zIndexInOverlay;
    clipInOverlayDuringTransition = clipInOverlayDuringTransition === VOID ? get_DefaultClipInOverlayDuringTransition() : clipInOverlayDuringTransition;
    return $super === VOID ? this.renderInSharedTransitionScopeOverlay_gioz4y_k$(_this__u8e3s4, renderInOverlay, zIndexInOverlay, clipInOverlayDuringTransition) : $super.renderInSharedTransitionScopeOverlay_gioz4y_k$.call(this, _this__u8e3s4, renderInOverlay, zIndexInOverlay, clipInOverlayDuringTransition);
  }
  function sharedElement$default(_this__u8e3s4, state, animatedVisibilityScope, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    boundsTransform = boundsTransform === VOID ? get_DefaultBoundsTransform() : boundsTransform;
    placeHolderSize = placeHolderSize === VOID ? Companion_getInstance_14().contentSize_1 : placeHolderSize;
    renderInOverlayDuringTransition = renderInOverlayDuringTransition === VOID ? true : renderInOverlayDuringTransition;
    zIndexInOverlay = zIndexInOverlay === VOID ? 0.0 : zIndexInOverlay;
    clipInOverlayDuringTransition = clipInOverlayDuringTransition === VOID ? get_ParentClip() : clipInOverlayDuringTransition;
    return $super === VOID ? this.sharedElement_5f1zge_k$(_this__u8e3s4, state, animatedVisibilityScope, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) : $super.sharedElement_5f1zge_k$.call(this, _this__u8e3s4, state, animatedVisibilityScope, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  }
  function sharedBounds$default(_this__u8e3s4, sharedContentState, animatedVisibilityScope, enter, exit, boundsTransform, resizeMode, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    enter = enter === VOID ? fadeIn() : enter;
    exit = exit === VOID ? fadeOut() : exit;
    boundsTransform = boundsTransform === VOID ? get_DefaultBoundsTransform() : boundsTransform;
    resizeMode = resizeMode === VOID ? Companion_getInstance_15().ScaleToBounds_s3l72r_k$(Companion_getInstance_11().get_FillWidth_n2o75m_k$(), Companion_getInstance_5().get_Center_3arb0i_k$()) : resizeMode;
    placeHolderSize = placeHolderSize === VOID ? Companion_getInstance_14().contentSize_1 : placeHolderSize;
    renderInOverlayDuringTransition = renderInOverlayDuringTransition === VOID ? true : renderInOverlayDuringTransition;
    zIndexInOverlay = zIndexInOverlay === VOID ? 0.0 : zIndexInOverlay;
    clipInOverlayDuringTransition = clipInOverlayDuringTransition === VOID ? get_ParentClip() : clipInOverlayDuringTransition;
    return $super === VOID ? this.sharedBounds_k7ql06_k$(_this__u8e3s4, sharedContentState, animatedVisibilityScope, enter, exit, boundsTransform, resizeMode, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) : $super.sharedBounds_k7ql06_k$.call(this, _this__u8e3s4, sharedContentState, animatedVisibilityScope, enter, exit, boundsTransform, resizeMode, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  }
  function sharedElementWithCallerManagedVisibility$default(_this__u8e3s4, sharedContentState, visible, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    boundsTransform = boundsTransform === VOID ? get_DefaultBoundsTransform() : boundsTransform;
    placeHolderSize = placeHolderSize === VOID ? Companion_getInstance_14().contentSize_1 : placeHolderSize;
    renderInOverlayDuringTransition = renderInOverlayDuringTransition === VOID ? true : renderInOverlayDuringTransition;
    zIndexInOverlay = zIndexInOverlay === VOID ? 0.0 : zIndexInOverlay;
    clipInOverlayDuringTransition = clipInOverlayDuringTransition === VOID ? get_ParentClip() : clipInOverlayDuringTransition;
    return $super === VOID ? this.sharedElementWithCallerManagedVisibility_pswh70_k$(_this__u8e3s4, sharedContentState, visible, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) : $super.sharedElementWithCallerManagedVisibility_pswh70_k$.call(this, _this__u8e3s4, sharedContentState, visible, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  }
  initMetadataForInterface(SharedTransitionScope, 'SharedTransitionScope', VOID, VOID, [LookaheadScope]);
  initMetadataForClass(ShapeBasedClip, 'ShapeBasedClip', VOID, VOID, [OverlayClip]);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForLambda(SharedTransitionScopeImpl$onStateRemoved$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(SharedTransitionScopeImpl, 'SharedTransitionScopeImpl', VOID, VOID, [SharedTransitionScope, LookaheadScope]);
  initMetadataForInterface(BoundsTransform, 'BoundsTransform');
  initMetadataForClass(ScaleToBoundsImpl, 'ScaleToBoundsImpl', VOID, VOID, [ResizeMode]);
  initMetadataForObject(RemeasureImpl, 'RemeasureImpl', VOID, VOID, [ResizeMode]);
  initMetadataForClass(SkipToLookaheadElement, 'SkipToLookaheadElement', SkipToLookaheadElement, ModifierNodeElement);
  initMetadataForClass(SkipToLookaheadNode, 'SkipToLookaheadNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(sam$androidx_compose_animation_BoundsTransform$0, 'sam$androidx_compose_animation_BoundsTransform$0', VOID, VOID, [BoundsTransform, FunctionAdapter]);
  initMetadataForClass(ParentClip$1, VOID, VOID, VOID, [OverlayClip]);
  initMetadataForClass(FlingResult, 'FlingResult');
  initMetadataForObject(AndroidFlingSpline, 'AndroidFlingSpline');
  initMetadataForClass(SplineBasedFloatDecayAnimationSpec, 'SplineBasedFloatDecayAnimationSpec', VOID, VOID, [FloatDecayAnimationSpec]);
  initMetadataForClass(NoOp, 'NoOp', VOID, VOID, [Annotation]);
  //endregion
  function AnimatedVisibilityScope$animateEnterExit$lambda($enter, $exit, $label) {
    return function ($this$null) {
      $this$null.set_name_wkmnld_k$('animateEnterExit');
      $this$null.get_properties_zhllqc_k$().set_vvveh5_k$('enter', $enter);
      $this$null.get_properties_zhllqc_k$().set_vvveh5_k$('exit', $exit);
      $this$null.get_properties_zhllqc_k$().set_vvveh5_k$('label', $label);
      return Unit_getInstance();
    };
  }
  function AnimatedVisibilityScope$animateEnterExit$lambda_0(this$0, $enter, $exit, $label) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceGroup_5hh8aj_k$(1840112047);
      sourceInformation($composer_0, 'C668@37319L42:AnimatedVisibility.kt#xbi5r1');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1840112047, $changed, -1, 'androidx.compose.animation.AnimatedVisibilityScope.animateEnterExit.<anonymous> (AnimatedVisibility.kt:668)');
        tmp = Unit_getInstance();
      }
      var tmp_0 = this$0.get_transition_mcca1q_k$();
      var tmp0 = $this$composed.then_g5qrxq_k$(createModifier(tmp_0, $enter, $exit, null, $label, $composer_0, 0, 4));
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      return tmp0;
    };
  }
  function AnimatedVisibilityScope() {
  }
  var EnterExitState_PreEnter_instance;
  var EnterExitState_Visible_instance;
  var EnterExitState_PostExit_instance;
  function values() {
    return [EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'PreEnter':
        return EnterExitState_PreEnter_getInstance();
      case 'Visible':
        return EnterExitState_Visible_getInstance();
      case 'PostExit':
        return EnterExitState_PostExit_getInstance();
      default:
        EnterExitState_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var EnterExitState_entriesInitialized;
  function EnterExitState_initEntries() {
    if (EnterExitState_entriesInitialized)
      return Unit_getInstance();
    EnterExitState_entriesInitialized = true;
    EnterExitState_PreEnter_instance = new EnterExitState('PreEnter', 0);
    EnterExitState_Visible_instance = new EnterExitState('Visible', 1);
    EnterExitState_PostExit_instance = new EnterExitState('PostExit', 2);
  }
  var $ENTRIES;
  function EnterExitState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimatedVisibility(_this__u8e3s4, visible, modifier, enter, exit, label, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enter_0 = {_v: enter};
    var exit_0 = {_v: exit};
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1766503102);
    sourceInformation($composer_0, 'C(AnimatedVisibility)P(5,4,1,2,3)280@15555L32,281@15627L6,281@15592L84:AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(visible) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(enter_0._v) ? 2048 : 1024);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(exit_0._v) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(label_0._v) ? 131072 : 65536);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 1048576 : 524288);
    if (!(($dirty & 599185) === 599184) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 4) === 0)) {
        enter_0._v = fadeIn().plus_w36lq9_k$(expandVertically());
      }
      if (!(($default & 8) === 0)) {
        exit_0._v = fadeOut().plus_buzi7t_k$(shrinkVertically());
      }
      if (!(($default & 16) === 0)) {
        label_0._v = 'AnimatedVisibility';
      }
      if (isTraceInProgress()) {
        traceEventStart(1766503102, $dirty, -1, 'androidx.compose.animation.AnimatedVisibility (AnimatedVisibility.kt:279)');
      }
      var transition = updateTransition(visible, label_0._v, $composer_0, 14 & $dirty >> 3 | 112 & $dirty >> 12, 0);
      sourceInformationMarkerStart($composer_0, 1359807238, 'CC(remember):AnimatedVisibility.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.animation.AnimatedVisibility.<anonymous>' call
        var value = AnimatedVisibility$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      AnimatedVisibilityImpl(transition, tmp0_group, modifier_0._v, enter_0._v, exit_0._v, content, $composer_0, 48 | 896 & $dirty | 7168 & $dirty | 57344 & $dirty | 458752 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(AnimatedVisibility$lambda_0(_this__u8e3s4, visible, modifier_0, enter_0, exit_0, label_0, content, $changed, $default));
    }
  }
  function AnimatedVisibilityImpl(transition, visible, modifier, enter, exit, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(429978603);
    sourceInformation($composer_0, 'C(AnimatedVisibilityImpl)P(4,5,3,1,2)697@38299L415,711@38789L62,694@38181L703:AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(transition) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(visible) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(enter) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(exit) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 131072 : 65536);
    if (!(($dirty & 74899) === 74898) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(429978603, $dirty, -1, 'androidx.compose.animation.AnimatedVisibilityImpl (AnimatedVisibility.kt:693)');
      }
      sourceInformationMarkerStart($composer_0, 689212639, 'CC(remember):AnimatedVisibility.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 112) === 32 | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.animation.AnimatedVisibilityImpl.<anonymous>' call
        var value = AnimatedVisibilityImpl$lambda(visible, transition);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_1 = layout(modifier, tmp0_group);
      sourceInformationMarkerStart($composer_0, 689227966, 'CC(remember):AnimatedVisibility.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.animation.AnimatedVisibilityImpl.<anonymous>' call
        var value_0 = AnimatedVisibilityImpl$lambda_0;
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      AnimatedEnterExitImpl(transition, visible, tmp_1, enter, exit, tmp1_group, null, content, $composer_0, 196608 | 14 & $dirty | 112 & $dirty | 7168 & $dirty | 57344 & $dirty | 29360128 & $dirty << 6, 64);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(AnimatedVisibilityImpl$lambda_1(transition, visible, modifier, enter, exit, content, $changed));
    }
  }
  function AnimatedEnterExitImpl(transition, visible, modifier, enter, exit, shouldDisposeBlock, onLookaheadMeasured, content, $composer, $changed, $default) {
    var onLookaheadMeasured_0 = {_v: onLookaheadMeasured};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-891967166);
    sourceInformation($composer_0, 'C(AnimatedEnterExitImpl)P(6,7,3,1,2,5,4)741@39659L116,745@39818L40,752@40073L399,747@39898L574,768@40570L69,773@40810L47,794@41913L50,769@40652L1325:AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(transition) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(visible) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(enter) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(exit) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(shouldDisposeBlock) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ((($changed & 2097152) === 0 ? $composer_0.changed_ga7h3f_k$(onLookaheadMeasured_0._v) : $composer_0.changedInstance_s1wkiy_k$(onLookaheadMeasured_0._v)) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 8388608 : 4194304);
    if (!(($dirty & 4793491) === 4793490) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 64) === 0)) {
        onLookaheadMeasured_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-891967166, $dirty, -1, 'androidx.compose.animation.AnimatedEnterExitImpl (AnimatedVisibility.kt:737)');
      }
      if (visible(transition.get_targetState_kri3mx_k$()) || visible(transition.get_currentState_snihnl_k$()) || transition.get_isSeeking_vjb393_k$() || transition.get_hasInitialValueAnimations_mdjdrh_k$()) {
        // Inline function 'androidx.compose.animation.core.createChildTransition' call
        var $changed_0 = 48 | 14 & $dirty;
        var label = 'EnterExitTransition';
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1215497572, 'CC(createChildTransition)1814@74186L36,1815@74246L74,1816@74343L39,1817@74394L63:Transition.kt#pdpnli');
        if (!((0 & 1) === 0))
          label = 'ChildTransition';
        sourceInformationMarkerStart($composer_1, 272028789, 'CC(remember):Transition.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = ($changed_0 & 14 ^ 6) > 4 && $composer_1.changed_ga7h3f_k$(transition) || ($changed_0 & 6) === 4;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.compose.animation.core.createChildTransition.<anonymous>' call
          var value = transition.get_currentState_snihnl_k$();
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        var initialParentState = tmp1_group;
        var tmp5 = transition.get_isSeeking_vjb393_k$() ? transition.get_currentState_snihnl_k$() : initialParentState;
        // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
        var $changed_1 = 112 & $changed_0 >> 3;
        var $composer_2 = $composer_1;
        $composer_2.startReplaceGroup_5hh8aj_k$(-466616829);
        sourceInformation($composer_2, 'C742@39737L28:AnimatedVisibility.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(-466616829, $changed_1, -1, 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous> (AnimatedVisibility.kt:742)');
        }
        var tmp0 = targetEnterExit(transition, visible, tmp5, $composer_2, 14 & $dirty | 112 & $dirty | 896 & $changed_1 << 6);
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_2.endReplaceGroup_ek144q_k$();
        var initialState = tmp0;
        var tmp8 = transition.get_targetState_kri3mx_k$();
        // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
        var $changed_2 = 112 & $changed_0 >> 3;
        var $composer_3 = $composer_1;
        $composer_3.startReplaceGroup_5hh8aj_k$(-466616829);
        sourceInformation($composer_3, 'C742@39737L28:AnimatedVisibility.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(-466616829, $changed_2, -1, 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous> (AnimatedVisibility.kt:742)');
        }
        var tmp0_0 = targetEnterExit(transition, visible, tmp8, $composer_3, 14 & $dirty | 112 & $dirty | 896 & $changed_2 << 6);
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_3.endReplaceGroup_ek144q_k$();
        var targetState = tmp0_0;
        var tmp0_1 = createChildTransitionInternal(transition, initialState, targetState, label, $composer_1, 14 & $changed_0 | 7168 & $changed_0 << 6);
        sourceInformationMarkerEnd($composer_1);
        var childTransition = tmp0_1;
        var shouldDisposeBlockUpdated$delegate = rememberUpdatedState(shouldDisposeBlock, $composer_0, 14 & $dirty >> 15);
        var tmp_1 = shouldDisposeBlock(childTransition.get_currentState_snihnl_k$(), childTransition.get_targetState_kri3mx_k$());
        sourceInformationMarkerStart($composer_0, 1581710007, 'CC(remember):AnimatedVisibility.kt#9igjgp');
        var tmp11 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!($composer_0.changed_ga7h3f_k$(childTransition) | $composer_0.changed_ga7h3f_k$(shouldDisposeBlockUpdated$delegate));
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = tmp11.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
          var value_0 = AnimatedEnterExitImpl$slambda_0(childTransition, shouldDisposeBlockUpdated$delegate, null);
          tmp11.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var shouldDisposeAfterExit$delegate = produceState(tmp_1, tmp0_group, $composer_0, 0);
        if (!get_exitFinished(childTransition) || !AnimatedEnterExitImpl$lambda_0(shouldDisposeAfterExit$delegate)) {
          sourceInformationMarkerStart($composer_0, 1581725581, 'CC(remember):AnimatedVisibility.kt#9igjgp');
          var tmp13 = $composer_0;
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_1 = ($dirty & 14) === 4;
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_1 = tmp13.rememberedValue_4dg93v_k$();
          var tmp_4;
          if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
            var value_1 = new AnimatedVisibilityScopeImpl(childTransition);
            tmp13.updateRememberedValue_l1wh71_k$(value_1);
            tmp_4 = value_1;
          } else {
            tmp_4 = it_1;
          }
          var tmp_5 = tmp_4;
          var tmp1_group_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          var scope = tmp1_group_0;
          var tmp_6 = createModifier(childTransition, enter, exit, null, 'Built-in', $composer_0, 24576 | 112 & $dirty >> 6 | 896 & $dirty >> 6, 4);
          $composer_0.startReplaceGroup_5hh8aj_k$(1581736656);
          sourceInformation($composer_0, '775@40967L849');
          var tmp_7;
          if (!(onLookaheadMeasured_0._v == null)) {
            var tmp_8 = Companion_getInstance();
            sourceInformationMarkerStart($composer_0, 1581739065, 'CC(remember):AnimatedVisibility.kt#9igjgp');
            var tmp15 = $composer_0;
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid_2 = ($dirty & 3670016) === 1048576 || (!(($dirty & 2097152) === 0) && $composer_0.changedInstance_s1wkiy_k$(onLookaheadMeasured_0._v));
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it_2 = tmp15.rememberedValue_4dg93v_k$();
            var tmp_9;
            if (invalid_2 || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
              // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
              var value_2 = AnimatedEnterExitImpl$lambda_1(onLookaheadMeasured_0);
              tmp15.updateRememberedValue_l1wh71_k$(value_2);
              tmp_9 = value_2;
            } else {
              tmp_9 = it_2;
            }
            var tmp_10 = tmp_9;
            var tmp2_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
            sourceInformationMarkerEnd($composer_0);
            tmp_7 = layout(tmp_8, tmp2_group);
          } else {
            tmp_7 = Companion_getInstance();
          }
          var tmp3_group = tmp_7;
          $composer_0.endReplaceGroup_ek144q_k$();
          var tmp19 = modifier.then_g5qrxq_k$(tmp_6.then_g5qrxq_k$(tmp3_group));
          sourceInformationMarkerStart($composer_0, 1581768538, 'CC(remember):AnimatedVisibility.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var this_0 = $composer_0;
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_3 = this_0.rememberedValue_4dg93v_k$();
          var tmp_11;
          if (false || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
            var value_3 = new AnimatedEnterExitMeasurePolicy(scope);
            this_0.updateRememberedValue_l1wh71_k$(value_3);
            tmp_11 = value_3;
          } else {
            tmp_11 = it_3;
          }
          var tmp_12 = tmp_11;
          var tmp4_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          // Inline function 'androidx.compose.ui.layout.Layout' call
          var modifier_0 = tmp19;
          var $composer_4 = $composer_0;
          sourceInformationMarkerStart($composer_4, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
          if (!((0 & 2) === 0))
            modifier_0 = Companion_getInstance();
          var compositeKeyHash = get_currentCompositeKeyHash($composer_4, 0);
          var localMap = $composer_4.get_currentCompositionLocalMap_fmcf79_k$();
          var materialized = materialize($composer_4, modifier_0);
          var tmp0_2 = Companion_getInstance_1().get_Constructor_f7ieep_k$();
          // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
          var $composer_5 = $composer_4;
          sourceInformationMarkerStart($composer_5, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
          var tmp_13 = $composer_5.get_applier_bupu8u_k$();
          if (!isInterface(tmp_13, Applier)) {
            invalidApplier();
          }
          $composer_5.startReusableNode_jjgeyp_k$();
          if ($composer_5.get_inserting_25mlsw_k$()) {
            $composer_5.createNode_ahrd54_k$(tmp0_2);
          } else {
            $composer_5.useNode_io5s9l_k$();
          }
          // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
          var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_5);
          Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp4_group, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
          // Inline function 'androidx.compose.runtime.Updater.set' call
          var block = Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$();
          // Inline function 'kotlin.with' call
          // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
          var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
          if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
            $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
            _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
          }
          Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().get_SetModifier_6tz580_k$());
          // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
          var $composer_6 = $composer_5;
          sourceInformationMarkerStart($composer_6, 254461613, 'C770@40694L9:AnimatedVisibility.kt#xbi5r1');
          content(scope, $composer_6, 112 & $dirty >> 18);
          sourceInformationMarkerEnd($composer_6);
          $composer_5.endNode_3m0yfn_k$();
          sourceInformationMarkerEnd($composer_5);
          sourceInformationMarkerEnd($composer_4);
        }
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp5_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp5_safe_receiver == null)
      null;
    else {
      tmp5_safe_receiver.updateScope_t8jcf_k$(AnimatedEnterExitImpl$lambda_2(transition, visible, modifier, enter, exit, shouldDisposeBlock, onLookaheadMeasured_0, content, $changed, $default));
    }
  }
  function OnLookaheadMeasured() {
  }
  function targetEnterExit(_this__u8e3s4, visible, targetState, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 361571134, 'C(targetEnterExit)P(1):AnimatedVisibility.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(361571134, $changed, -1, 'androidx.compose.animation.targetEnterExit (AnimatedVisibility.kt:855)');
    }
    $composer_0.startMovableGroup_clfloq_k$(-902048200, _this__u8e3s4);
    sourceInformation($composer_0, '868@44365L34');
    var tmp;
    if (_this__u8e3s4.get_isSeeking_vjb393_k$()) {
      var tmp_0;
      if (visible(targetState)) {
        tmp_0 = EnterExitState_Visible_getInstance();
      } else {
        var tmp_1;
        if (visible(_this__u8e3s4.get_currentState_snihnl_k$())) {
          tmp_1 = EnterExitState_PostExit_getInstance();
        } else {
          tmp_1 = EnterExitState_PreEnter_getInstance();
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else {
      sourceInformationMarkerStart($composer_0, -902039492, 'CC(remember):AnimatedVisibility.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.animation.targetEnterExit.<anonymous>' call
        var value = mutableStateOf(false);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp2_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var hasBeenVisible = tmp2_group;
      if (visible(_this__u8e3s4.get_currentState_snihnl_k$())) {
        hasBeenVisible.set_value_v1vabv_k$(true);
      }
      var tmp_4;
      if (visible(targetState)) {
        tmp_4 = EnterExitState_Visible_getInstance();
      } else {
        var tmp_5;
        if (hasBeenVisible.get_value_j01efc_k$()) {
          tmp_5 = EnterExitState_PostExit_getInstance();
        } else {
          tmp_5 = EnterExitState_PreEnter_getInstance();
        }
        tmp_4 = tmp_5;
      }
      tmp = tmp_4;
    }
    var tmp1 = tmp;
    $composer_0.endMovableGroup_kd2hcs_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1;
  }
  function get_exitFinished(_this__u8e3s4) {
    return _this__u8e3s4.get_currentState_snihnl_k$().equals(EnterExitState_PostExit_getInstance()) && _this__u8e3s4.get_targetState_kri3mx_k$().equals(EnterExitState_PostExit_getInstance());
  }
  function AnimatedVisibilityScopeImpl(transition) {
    this.transition_1 = transition;
    this.targetSize_1 = mutableStateOf(new IntSize(Companion_getInstance_2().get_Zero_9we0a6_k$()));
  }
  protoOf(AnimatedVisibilityScopeImpl).set_transition_3a2emy_k$ = function (_set____db54di) {
    this.transition_1 = _set____db54di;
  };
  protoOf(AnimatedVisibilityScopeImpl).get_transition_mcca1q_k$ = function () {
    return this.transition_1;
  };
  protoOf(AnimatedVisibilityScopeImpl).get_targetSize_7bn39k_k$ = function () {
    return this.targetSize_1;
  };
  function AnimatedEnterExitMeasurePolicy$measure$lambda($placeables) {
    return function ($this$layout) {
      var this_0 = $placeables;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.get_size_woubt6_k$() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.get_c1px32_k$(index);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>.<anonymous>' call
          $this$layout.place$default_lcv1ed_k$(item, 0, 0);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function AnimatedEnterExitMeasurePolicy(scope) {
    this.scope_1 = scope;
    this.hasLookaheadOccurred_1 = false;
  }
  protoOf(AnimatedEnterExitMeasurePolicy).get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).set_hasLookaheadOccurred_d76kgb_k$ = function (_set____db54di) {
    this.hasLookaheadOccurred_1 = _set____db54di;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).get_hasLookaheadOccurred_nov622_k$ = function () {
    return this.hasLookaheadOccurred_1;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).measure_xg9b01_k$ = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(measurables.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = measurables.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var element = item.measure_4dmfk1_k$(constraints);
        target.add_utx5q5_k$(element);
      }
       while (inductionVariable <= last);
    var placeables = target;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxBy' call
      // Inline function 'kotlin.contracts.contract' call
      if (placeables.isEmpty_y1axqb_k$()) {
        tmp$ret$2 = null;
        break $l$block;
      }
      var maxElem = placeables.get_c1px32_k$(0);
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
      var maxValue = maxElem.get_width_j0q4yl_k$();
      var inductionVariable_0 = 1;
      var last_0 = get_lastIndex(placeables);
      if (inductionVariable_0 <= last_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var e = placeables.get_c1px32_k$(i);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
          var v = e.get_width_j0q4yl_k$();
          if (compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
         while (!(i === last_0));
      tmp$ret$2 = maxElem;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_width_j0q4yl_k$();
    var maxWidth = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.util.fastMaxBy' call
      // Inline function 'kotlin.contracts.contract' call
      if (placeables.isEmpty_y1axqb_k$()) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var maxElem_0 = placeables.get_c1px32_k$(0);
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
      var maxValue_0 = maxElem_0.get_height_e7t92o_k$();
      var inductionVariable_1 = 1;
      var last_1 = get_lastIndex(placeables);
      if (inductionVariable_1 <= last_1)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var e_0 = placeables.get_c1px32_k$(i_0);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
          var v_0 = e_0.get_height_e7t92o_k$();
          if (compareTo(maxValue_0, v_0) < 0) {
            maxElem_0 = e_0;
            maxValue_0 = v_0;
          }
        }
         while (!(i_0 === last_1));
      tmp$ret$5 = maxElem_0;
    }
    var tmp2_safe_receiver = tmp$ret$5;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_height_e7t92o_k$();
    var maxHeight = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    if (_this__u8e3s4.get_isLookingAhead_2057g1_k$()) {
      this.hasLookaheadOccurred_1 = true;
      this.scope_1.targetSize_1.set_value_v1vabv_k$(new IntSize(IntSize_0(maxWidth, maxHeight)));
    } else if (!this.hasLookaheadOccurred_1) {
      this.scope_1.targetSize_1.set_value_v1vabv_k$(new IntSize(IntSize_0(maxWidth, maxHeight)));
    }
    return _this__u8e3s4.layout$default_n19e5l_k$(maxWidth, maxHeight, VOID, AnimatedEnterExitMeasurePolicy$measure$lambda(placeables));
  };
  protoOf(AnimatedEnterExitMeasurePolicy).minIntrinsicWidth_dwfcse_k$ = function (_this__u8e3s4, measurables, height) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.minIntrinsicWidth.<anonymous>' call
      var maxValue = measurables.get_c1px32_k$(0).minIntrinsicWidth_jyhjuj_k$(height);
      var inductionVariable = 1;
      var last = get_lastIndex(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.minIntrinsicWidth.<anonymous>' call
          var v = measurables.get_c1px32_k$(i).minIntrinsicWidth_jyhjuj_k$(height);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).minIntrinsicHeight_xlhgwn_k$ = function (_this__u8e3s4, measurables, width) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.minIntrinsicHeight.<anonymous>' call
      var maxValue = measurables.get_c1px32_k$(0).minIntrinsicHeight_p2a4ou_k$(width);
      var inductionVariable = 1;
      var last = get_lastIndex(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.minIntrinsicHeight.<anonymous>' call
          var v = measurables.get_c1px32_k$(i).minIntrinsicHeight_p2a4ou_k$(width);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).maxIntrinsicWidth_cx7ze4_k$ = function (_this__u8e3s4, measurables, height) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.maxIntrinsicWidth.<anonymous>' call
      var maxValue = measurables.get_c1px32_k$(0).maxIntrinsicWidth_b8umbx_k$(height);
      var inductionVariable = 1;
      var last = get_lastIndex(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.maxIntrinsicWidth.<anonymous>' call
          var v = measurables.get_c1px32_k$(i).maxIntrinsicWidth_b8umbx_k$(height);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).maxIntrinsicHeight_3a4xm1_k$ = function (_this__u8e3s4, measurables, width) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.maxIntrinsicHeight.<anonymous>' call
      var maxValue = measurables.get_c1px32_k$(0).maxIntrinsicHeight_b0krtc_k$(width);
      var inductionVariable = 1;
      var last = get_lastIndex(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.maxIntrinsicHeight.<anonymous>' call
          var v = measurables.get_c1px32_k$(i).maxIntrinsicHeight_b0krtc_k$(width);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  function AnimatedEnterExitImpl$lambda($shouldDisposeBlockUpdated$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldDisposeBlockUpdated', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $shouldDisposeBlockUpdated$delegate.get_value_j01efc_k$();
  }
  function AnimatedEnterExitImpl$lambda_0($shouldDisposeAfterExit$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldDisposeAfterExit', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $shouldDisposeAfterExit$delegate.get_value_j01efc_k$();
  }
  function AnimatedVisibility$lambda(it) {
    return it;
  }
  function AnimatedVisibility$lambda_0($this_AnimatedVisibility, $visible, $modifier, $enter, $exit, $label, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedVisibility($this_AnimatedVisibility, $visible, $modifier._v, $enter._v, $exit._v, $label._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function AnimatedVisibilityImpl$lambda$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.place$default_lcv1ed_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function AnimatedVisibilityImpl$lambda($visible, $transition) {
    return function ($this$layout, measurable, constraints) {
      var placeable = measurable.measure_4dmfk1_k$(constraints.value_1);
      var tmp;
      if ($this$layout.get_isLookingAhead_2057g1_k$() && !$visible($transition.get_targetState_kri3mx_k$())) {
        tmp = Companion_getInstance_2().get_Zero_9we0a6_k$();
      } else {
        tmp = IntSize_0(placeable.get_width_j0q4yl_k$(), placeable.get_height_e7t92o_k$());
      }
      var tmp0_container = tmp;
      // Inline function 'androidx.compose.ui.unit.IntSize.component1' call
      var w = _IntSize___get_width__impl__d9yl4o(tmp0_container);
      // Inline function 'androidx.compose.ui.unit.IntSize.component2' call
      var h = _IntSize___get_height__impl__prv63b(tmp0_container);
      return $this$layout.layout$default_n19e5l_k$(w, h, VOID, AnimatedVisibilityImpl$lambda$lambda(placeable));
    };
  }
  function AnimatedVisibilityImpl$lambda_0(current, target) {
    return current.equals(target) && target.equals(EnterExitState_PostExit_getInstance());
  }
  function AnimatedVisibilityImpl$lambda_1($transition, $visible, $modifier, $enter, $exit, $content, $$changed) {
    return function ($composer, $force) {
      AnimatedVisibilityImpl($transition, $visible, $modifier, $enter, $exit, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function AnimatedEnterExitImpl$slambda$lambda($childTransition) {
    return function () {
      return get_exitFinished($childTransition);
    };
  }
  function AnimatedEnterExitImpl$slambda$slambda($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    this.$this_produceState_1 = $this_produceState;
    this.$childTransition_1 = $childTransition;
    this.$shouldDisposeBlockUpdated$delegate_1 = $shouldDisposeBlockUpdated$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedEnterExitImpl$slambda$slambda).invoke_f29lti_k$ = function (it, $completion) {
    var tmp = this.create_vh5neu_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AnimatedEnterExitImpl$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_f29lti_k$((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedEnterExitImpl$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp_0;
          if (this.it_1) {
            tmp_0 = AnimatedEnterExitImpl$lambda(this.$shouldDisposeBlockUpdated$delegate_1)(this.$childTransition_1.get_currentState_snihnl_k$(), this.$childTransition_1.get_targetState_kri3mx_k$());
          } else {
            tmp_0 = false;
          }
          this.$this_produceState_1.set_value_v1vabv_k$(tmp_0);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(AnimatedEnterExitImpl$slambda$slambda).create_vh5neu_k$ = function (it, completion) {
    var i = new AnimatedEnterExitImpl$slambda$slambda(this.$this_produceState_1, this.$childTransition_1, this.$shouldDisposeBlockUpdated$delegate_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(AnimatedEnterExitImpl$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_vh5neu_k$((!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE(), completion);
  };
  function AnimatedEnterExitImpl$slambda$slambda_0($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    var i = new AnimatedEnterExitImpl$slambda$slambda($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_f29lti_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedEnterExitImpl$slambda($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    this.$childTransition_1 = $childTransition;
    this.$shouldDisposeBlockUpdated$delegate_1 = $shouldDisposeBlockUpdated$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedEnterExitImpl$slambda).invoke_2og0l1_k$ = function ($this$produceState, $completion) {
    var tmp = this.create_i0ekpj_k$($this$produceState, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AnimatedEnterExitImpl$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_2og0l1_k$((!(p1 == null) ? isInterface(p1, ProduceStateScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedEnterExitImpl$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = snapshotFlow(AnimatedEnterExitImpl$slambda$lambda(this.$childTransition_1));
            var tmp_1 = AnimatedEnterExitImpl$slambda$slambda_0(this.$this$produceState_1, this.$childTransition_1, this.$shouldDisposeBlockUpdated$delegate_1, null);
            suspendResult = tmp_0.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(AnimatedEnterExitImpl$slambda).create_i0ekpj_k$ = function ($this$produceState, completion) {
    var i = new AnimatedEnterExitImpl$slambda(this.$childTransition_1, this.$shouldDisposeBlockUpdated$delegate_1, completion);
    i.$this$produceState_1 = $this$produceState;
    return i;
  };
  protoOf(AnimatedEnterExitImpl$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_i0ekpj_k$((!(value == null) ? isInterface(value, ProduceStateScope) : false) ? value : THROW_CCE(), completion);
  };
  function AnimatedEnterExitImpl$slambda_0($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    var i = new AnimatedEnterExitImpl$slambda($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation);
    var l = function ($this$produceState, $completion) {
      return i.invoke_2og0l1_k$($this$produceState, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedEnterExitImpl$lambda$lambda($$this$run) {
    return function ($this$layout) {
      $this$layout.place$default_lcv1ed_k$($$this$run, 0, 0);
      return Unit_getInstance();
    };
  }
  function AnimatedEnterExitImpl$lambda_1($onLookaheadMeasured) {
    return function ($this$layout, measurable, constraints) {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>.<anonymous>.<anonymous>' call
      var $this$run = measurable.measure_4dmfk1_k$(constraints.value_1);
      if ($this$layout.get_isLookingAhead_2057g1_k$()) {
        $onLookaheadMeasured._v.invoke_53rnn3_k$(IntSize_0($this$run.get_width_j0q4yl_k$(), $this$run.get_height_e7t92o_k$()));
      }
      var tmp = $this$run.get_width_j0q4yl_k$();
      var tmp_0 = $this$run.get_height_e7t92o_k$();
      return $this$layout.layout$default_n19e5l_k$(tmp, tmp_0, VOID, AnimatedEnterExitImpl$lambda$lambda($this$run));
    };
  }
  function AnimatedEnterExitImpl$lambda_2($transition, $visible, $modifier, $enter, $exit, $shouldDisposeBlock, $onLookaheadMeasured, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedEnterExitImpl($transition, $visible, $modifier, $enter, $exit, $shouldDisposeBlock, $onLookaheadMeasured._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function EnterExitState_PreEnter_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_PreEnter_instance;
  }
  function EnterExitState_Visible_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_Visible_instance;
  }
  function EnterExitState_PostExit_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_PostExit_instance;
  }
  function get_InvalidSize() {
    _init_properties_AnimationModifier_kt__u6vzef();
    return InvalidSize;
  }
  var InvalidSize;
  function LayoutModifierNodeWithPassThroughIntrinsics() {
    Node.call(this);
  }
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).minIntrinsicWidth_nsvhwg_k$ = function (_this__u8e3s4, measurable, height) {
    return measurable.minIntrinsicWidth_jyhjuj_k$(height);
  };
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).minIntrinsicHeight_xt6ly1_k$ = function (_this__u8e3s4, measurable, width) {
    return measurable.minIntrinsicHeight_p2a4ou_k$(width);
  };
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).maxIntrinsicWidth_epsb1u_k$ = function (_this__u8e3s4, measurable, height) {
    return measurable.maxIntrinsicWidth_b8umbx_k$(height);
  };
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).maxIntrinsicHeight_nrifyt_k$ = function (_this__u8e3s4, measurable, width) {
    return measurable.maxIntrinsicHeight_b0krtc_k$(width);
  };
  function get_isValid(_this__u8e3s4) {
    _init_properties_AnimationModifier_kt__u6vzef();
    return !equals(_this__u8e3s4, get_InvalidSize());
  }
  var properties_initialized_AnimationModifier_kt_fvv7xx;
  function _init_properties_AnimationModifier_kt__u6vzef() {
    if (!properties_initialized_AnimationModifier_kt_fvv7xx) {
      properties_initialized_AnimationModifier_kt_fvv7xx = true;
      InvalidSize = IntSize_0(-2147483648, -2147483648);
    }
  }
  function get_DefaultBoundsAnimation() {
    _init_properties_BoundsAnimation_kt__z215v();
    return DefaultBoundsAnimation;
  }
  var DefaultBoundsAnimation;
  function _set_animation__pan2kh($this, _set____db54di) {
    var tmp0 = $this.animation$delegate_1;
    animation$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_boundsTransform__qqq4ha($this, _set____db54di) {
    var tmp0 = $this.boundsTransform$delegate_1;
    boundsTransform$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_boundsTransform__y6npza($this) {
    var tmp0 = $this.boundsTransform$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    boundsTransform$factory_0();
    return tmp0.get_value_j01efc_k$();
  }
  function BoundsAnimation$animate$lambda(this$0) {
    return function ($this$animate) {
      return this$0.animationSpec_1;
    };
  }
  function BoundsAnimation$animate$lambda_0(this$0, $targetBounds, $currentBounds) {
    return function (it) {
      var tmp;
      if (it === this$0.transition_1.get_targetState_kri3mx_k$()) {
        tmp = $targetBounds;
      } else {
        tmp = $currentBounds;
      }
      return tmp;
    };
  }
  function BoundsAnimation(transitionScope, transition, animation, boundsTransform) {
    this.transitionScope_1 = transitionScope;
    this.transition_1 = transition;
    this.animation$delegate_1 = mutableStateOf(animation);
    this.boundsTransform$delegate_1 = mutableStateOf(boundsTransform);
    this.animationSpec_1 = get_DefaultBoundsAnimation();
    this.animationState$delegate_1 = mutableStateOf(null);
  }
  protoOf(BoundsAnimation).get_transitionScope_6wk9w6_k$ = function () {
    return this.transitionScope_1;
  };
  protoOf(BoundsAnimation).get_transition_mcca1q_k$ = function () {
    return this.transition_1;
  };
  protoOf(BoundsAnimation).get_animation_r0gd0b_k$ = function () {
    var tmp0 = this.animation$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    animation$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(BoundsAnimation).updateAnimation_opighb_k$ = function (animation, boundsTransform) {
    if (!equals(this.get_animation_r0gd0b_k$(), animation)) {
      _set_animation__pan2kh(this, animation);
      this.set_animationState_b8sgwb_k$(null);
      this.animationSpec_1 = get_DefaultBoundsAnimation();
    }
    _set_boundsTransform__qqq4ha(this, boundsTransform);
  };
  protoOf(BoundsAnimation).get_isRunning_okmtn0_k$ = function () {
    var parent = this.transition_1;
    while (!(parent.get_parentTransition_svtbx4_k$() == null)) {
      parent = ensureNotNull(parent.get_parentTransition_svtbx4_k$());
    }
    return !equals(parent.get_currentState_snihnl_k$(), parent.get_targetState_kri3mx_k$());
  };
  protoOf(BoundsAnimation).set_animationSpec_fee48z_k$ = function (_set____db54di) {
    this.animationSpec_1 = _set____db54di;
  };
  protoOf(BoundsAnimation).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(BoundsAnimation).set_animationState_b8sgwb_k$ = function (_set____db54di) {
    var tmp0 = this.animationState$delegate_1;
    animationState$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(BoundsAnimation).get_animationState_98s4ty_k$ = function () {
    var tmp0 = this.animationState$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    animationState$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(BoundsAnimation).get_value_j01efc_k$ = function () {
    var tmp;
    if (this.transitionScope_1.get_isTransitionActive_t69j02_k$()) {
      var tmp0_safe_receiver = this.get_animationState_98s4ty_k$();
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_value_j01efc_k$();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(BoundsAnimation).animate_s3upvz_k$ = function (currentBounds, targetBounds) {
    if (this.transitionScope_1.get_isTransitionActive_t69j02_k$()) {
      if (this.get_animationState_98s4ty_k$() == null) {
        this.animationSpec_1 = _get_boundsTransform__y6npza(this).transform_372bqs_k$(currentBounds, targetBounds);
      }
      var tmp = this.get_animation_r0gd0b_k$();
      var tmp_0 = BoundsAnimation$animate$lambda(this);
      this.set_animationState_b8sgwb_k$(tmp.animate_lt3uhv_k$(tmp_0, BoundsAnimation$animate$lambda_0(this, targetBounds, currentBounds)));
    }
  };
  protoOf(BoundsAnimation).get_target_juba8q_k$ = function () {
    return this.transition_1.get_targetState_kri3mx_k$();
  };
  function animation$factory() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.get_animation_r0gd0b_k$();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function animation$factory_0() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.get_animation_r0gd0b_k$();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function boundsTransform$factory() {
    return getPropertyCallableRef('boundsTransform', 1, KMutableProperty1, function (receiver) {
      return _get_boundsTransform__y6npza(receiver);
    }, function (receiver, value) {
      return _set_boundsTransform__qqq4ha(receiver, value);
    });
  }
  function boundsTransform$factory_0() {
    return getPropertyCallableRef('boundsTransform', 1, KMutableProperty1, function (receiver) {
      return _get_boundsTransform__y6npza(receiver);
    }, function (receiver, value) {
      return _set_boundsTransform__qqq4ha(receiver, value);
    });
  }
  function animationState$factory() {
    return getPropertyCallableRef('animationState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_animationState_98s4ty_k$();
    }, function (receiver, value) {
      return receiver.set_animationState_b8sgwb_k$(value);
    });
  }
  function animationState$factory_0() {
    return getPropertyCallableRef('animationState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_animationState_98s4ty_k$();
    }, function (receiver, value) {
      return receiver.set_animationState_b8sgwb_k$(value);
    });
  }
  var properties_initialized_BoundsAnimation_kt_perd29;
  function _init_properties_BoundsAnimation_kt__z215v() {
    if (!properties_initialized_BoundsAnimation_kt_perd29) {
      properties_initialized_BoundsAnimation_kt_perd29 = true;
      DefaultBoundsAnimation = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), get_VisibilityThreshold(Companion_getInstance_3()));
    }
  }
  function get_ColorToVector() {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return ColorToVector;
  }
  var ColorToVector;
  function get_VectorConverter_3(_this__u8e3s4) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return get_ColorToVector();
  }
  function ColorToVector$lambda(colorSpace) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var tmp = ColorToVector$lambda$lambda;
    return TwoWayConverter(tmp, ColorToVector$lambda$lambda_0(colorSpace));
  }
  function ColorToVector$lambda$lambda(color) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var tmp0_container = Color__convert_impl_so5m8t(color.value_1, ColorSpaces_getInstance().get_Oklab_ierso8_k$());
    // Inline function 'androidx.compose.ui.graphics.Color.component1' call
    var l = _Color___get_red__impl__cwrsk6(tmp0_container);
    // Inline function 'androidx.compose.ui.graphics.Color.component2' call
    var a = _Color___get_green__impl__bta9rs(tmp0_container);
    // Inline function 'androidx.compose.ui.graphics.Color.component3' call
    var b = _Color___get_blue__impl__xwez13(tmp0_container);
    // Inline function 'androidx.compose.ui.graphics.Color.component4' call
    var alpha = _Color___get_alpha__impl__wcfyv1(tmp0_container);
    return new AnimationVector4D(alpha, l, a, b);
  }
  function ColorToVector$lambda$lambda_0($colorSpace) {
    return function (vector) {
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_0 = vector.get_v2_kntnnf_k$();
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_1 = this_0 < 0.0 ? 0.0 : this_0;
      var tmp = this_1 > 1.0 ? 1.0 : this_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_2 = vector.get_v3_kntnne_k$();
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_3 = this_2 < -0.5 ? -0.5 : this_2;
      var tmp_0 = this_3 > 0.5 ? 0.5 : this_3;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_4 = vector.get_v4_kntnnd_k$();
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_5 = this_4 < -0.5 ? -0.5 : this_4;
      var tmp_1 = this_5 > 0.5 ? 0.5 : this_5;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_6 = vector.get_v1_kntnng_k$();
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_7 = this_6 < 0.0 ? 0.0 : this_6;
      var tmp$ret$11 = this_7 > 1.0 ? 1.0 : this_7;
      return new Color_0(Color__convert_impl_so5m8t(Color(tmp, tmp_0, tmp_1, tmp$ret$11, ColorSpaces_getInstance().get_Oklab_ierso8_k$()), $colorSpace));
    };
  }
  var properties_initialized_ColorVectorConverter_kt_jaoojo;
  function _init_properties_ColorVectorConverter_kt__qncuxy() {
    if (!properties_initialized_ColorVectorConverter_kt_jaoojo) {
      properties_initialized_ColorVectorConverter_kt_jaoojo = true;
      ColorToVector = ColorToVector$lambda;
    }
  }
  function get_TransformOriginVectorConverter() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return TransformOriginVectorConverter;
  }
  var TransformOriginVectorConverter;
  function get_DefaultAlphaAndScaleSpring() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultAlphaAndScaleSpring;
  }
  var DefaultAlphaAndScaleSpring;
  function get_DefaultOffsetAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultOffsetAnimationSpec;
  }
  var DefaultOffsetAnimationSpec;
  function get_DefaultSizeAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultSizeAnimationSpec;
  }
  var DefaultSizeAnimationSpec;
  function ExperimentalAnimationApi() {
  }
  protoOf(ExperimentalAnimationApi).equals = function (other) {
    if (!(other instanceof ExperimentalAnimationApi))
      return false;
    other instanceof ExperimentalAnimationApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalAnimationApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalAnimationApi).toString = function () {
    return '@androidx.compose.animation.ExperimentalAnimationApi(' + ')';
  };
  function Companion() {
    Companion_instance = this;
    this.None_1 = new EnterTransitionImpl(new TransitionData());
  }
  protoOf(Companion).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance;
  function Companion_getInstance_12() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function EnterTransition() {
    Companion_getInstance_12();
  }
  protoOf(EnterTransition).plus_w36lq9_k$ = function (enter) {
    var tmp0_elvis_lhs = enter.get_data_jntocg_k$().fade_1;
    var tmp = tmp0_elvis_lhs == null ? this.get_data_jntocg_k$().fade_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = enter.get_data_jntocg_k$().slide_1;
    var tmp_0 = tmp1_elvis_lhs == null ? this.get_data_jntocg_k$().slide_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = enter.get_data_jntocg_k$().changeSize_1;
    var tmp_1 = tmp2_elvis_lhs == null ? this.get_data_jntocg_k$().changeSize_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = enter.get_data_jntocg_k$().scale_1;
    return new EnterTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? this.get_data_jntocg_k$().scale_1 : tmp3_elvis_lhs, VOID, plus(this.get_data_jntocg_k$().effectsMap_1, enter.get_data_jntocg_k$().effectsMap_1)));
  };
  protoOf(EnterTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_12().None_1)) {
      tmp = 'EnterTransition.None';
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.animation.EnterTransition.toString.<anonymous>' call
      var $this$run = this.get_data_jntocg_k$();
      var tmp3_safe_receiver = $this$run.fade_1;
      var tmp_0 = 'EnterTransition: \nFade - ' + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nSlide - ';
      var tmp2_safe_receiver = $this$run.slide_1;
      var tmp_1 = tmp_0 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nShrink - ';
      var tmp1_safe_receiver = $this$run.changeSize_1;
      var tmp_2 = tmp_1 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nScale - ';
      var tmp0_safe_receiver = $this$run.scale_1;
      tmp = tmp_2 + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString());
    }
    return tmp;
  };
  protoOf(EnterTransition).equals = function (other) {
    var tmp;
    if (other instanceof EnterTransition) {
      tmp = other.get_data_jntocg_k$().equals(this.get_data_jntocg_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EnterTransition).hashCode = function () {
    return this.get_data_jntocg_k$().hashCode();
  };
  function withEffect(_this__u8e3s4, effect) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(VOID, VOID, VOID, VOID, VOID, mapOf(to(effect.get_key_ouxpul_k$(), effect))));
  }
  function Key() {
    Key_instance = this;
  }
  var Key_instance;
  function Key_getInstance() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function ContentScaleTransitionEffect(contentScale, alignment) {
    Key_getInstance();
    TransitionEffect.call(this);
    this.contentScale_1 = contentScale;
    this.alignment_1 = alignment;
  }
  protoOf(ContentScaleTransitionEffect).get_contentScale_i3wrkq_k$ = function () {
    return this.contentScale_1;
  };
  protoOf(ContentScaleTransitionEffect).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ContentScaleTransitionEffect).get_key_ouxpul_k$ = function () {
    return Key_getInstance();
  };
  protoOf(ContentScaleTransitionEffect).component1_7eebsc_k$ = function () {
    return this.contentScale_1;
  };
  protoOf(ContentScaleTransitionEffect).component2_7eebsb_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ContentScaleTransitionEffect).copy_cnsp6g_k$ = function (contentScale, alignment) {
    return new ContentScaleTransitionEffect(contentScale, alignment);
  };
  protoOf(ContentScaleTransitionEffect).copy$default_5z5kzw_k$ = function (contentScale, alignment, $super) {
    contentScale = contentScale === VOID ? this.contentScale_1 : contentScale;
    alignment = alignment === VOID ? this.alignment_1 : alignment;
    return $super === VOID ? this.copy_cnsp6g_k$(contentScale, alignment) : $super.copy_cnsp6g_k$.call(this, contentScale, alignment);
  };
  protoOf(ContentScaleTransitionEffect).toString = function () {
    return 'ContentScaleTransitionEffect(contentScale=' + toString(this.contentScale_1) + ', alignment=' + toString(this.alignment_1) + ')';
  };
  protoOf(ContentScaleTransitionEffect).hashCode = function () {
    var result = hashCode(this.contentScale_1);
    result = imul(result, 31) + hashCode(this.alignment_1) | 0;
    return result;
  };
  protoOf(ContentScaleTransitionEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContentScaleTransitionEffect))
      return false;
    var tmp0_other_with_cast = other instanceof ContentScaleTransitionEffect ? other : THROW_CCE();
    if (!equals(this.contentScale_1, tmp0_other_with_cast.contentScale_1))
      return false;
    if (!equals(this.alignment_1, tmp0_other_with_cast.alignment_1))
      return false;
    return true;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.None_1 = new ExitTransitionImpl(new TransitionData());
    this.KeepUntilTransitionsFinished_1 = new ExitTransitionImpl(new TransitionData(VOID, VOID, VOID, VOID, true));
  }
  protoOf(Companion_0).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_0).get_KeepUntilTransitionsFinished_bul00d_k$ = function () {
    return this.KeepUntilTransitionsFinished_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_13() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ExitTransition() {
    Companion_getInstance_13();
  }
  protoOf(ExitTransition).plus_buzi7t_k$ = function (exit) {
    var tmp0_elvis_lhs = exit.get_data_jntocg_k$().fade_1;
    var tmp = tmp0_elvis_lhs == null ? this.get_data_jntocg_k$().fade_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = exit.get_data_jntocg_k$().slide_1;
    var tmp_0 = tmp1_elvis_lhs == null ? this.get_data_jntocg_k$().slide_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = exit.get_data_jntocg_k$().changeSize_1;
    var tmp_1 = tmp2_elvis_lhs == null ? this.get_data_jntocg_k$().changeSize_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = exit.get_data_jntocg_k$().scale_1;
    return new ExitTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? this.get_data_jntocg_k$().scale_1 : tmp3_elvis_lhs, exit.get_data_jntocg_k$().hold_1 || this.get_data_jntocg_k$().hold_1, plus(this.get_data_jntocg_k$().effectsMap_1, exit.get_data_jntocg_k$().effectsMap_1)));
  };
  protoOf(ExitTransition).equals = function (other) {
    var tmp;
    if (other instanceof ExitTransition) {
      tmp = other.get_data_jntocg_k$().equals(this.get_data_jntocg_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ExitTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_13().None_1)) {
      tmp = 'ExitTransition.None';
    } else if (this.equals(Companion_getInstance_13().KeepUntilTransitionsFinished_1)) {
      tmp = 'ExitTransition.KeepUntilTransitionsFinished';
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.animation.ExitTransition.toString.<anonymous>' call
      var $this$run = this.get_data_jntocg_k$();
      var tmp3_safe_receiver = $this$run.fade_1;
      var tmp_0 = 'ExitTransition: \nFade - ' + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nSlide - ';
      var tmp2_safe_receiver = $this$run.slide_1;
      var tmp_1 = tmp_0 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nShrink - ';
      var tmp1_safe_receiver = $this$run.changeSize_1;
      var tmp_2 = tmp_1 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nScale - ';
      var tmp0_safe_receiver = $this$run.scale_1;
      tmp = tmp_2 + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString()) + ',\nKeepUntilTransitionsFinished - ' + $this$run.hold_1;
    }
    return tmp;
  };
  protoOf(ExitTransition).hashCode = function () {
    return this.get_data_jntocg_k$().hashCode();
  };
  function withEffect_0(_this__u8e3s4, effect) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(VOID, VOID, VOID, VOID, VOID, mapOf(to(effect.get_key_ouxpul_k$(), effect))));
  }
  function fadeIn(animationSpec, initialAlpha) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$()) : animationSpec;
    initialAlpha = initialAlpha === VOID ? 0.0 : initialAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(new Fade(initialAlpha, animationSpec)));
  }
  function fadeOut(animationSpec, targetAlpha) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$()) : animationSpec;
    targetAlpha = targetAlpha === VOID ? 0.0 : targetAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(new Fade(targetAlpha, animationSpec)));
  }
  function createModifier(_this__u8e3s4, enter, exit, isEnabled, label, $composer, $changed, $default) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var isEnabled_0 = {_v: isEnabled};
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 28261782, 'C(createModifier)867@38160L8,870@38224L31,871@38277L28,896@39249L56,898@39349L58:EnterExitTransition.kt#xbi5r1');
    if (!(($default & 4) === 0)) {
      sourceInformationMarkerStart($composer_0, -165056410, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.animation.createModifier.<anonymous>' call
        var value = createModifier$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      isEnabled_0._v = tmp0_group;
    }
    if (isTraceInProgress()) {
      traceEventStart(28261782, $changed, -1, 'androidx.compose.animation.createModifier (EnterExitTransition.kt:869)');
    }
    var activeEnter = trackActiveEnter(_this__u8e3s4, enter, $composer_0, 14 & $changed | 112 & $changed);
    var activeExit = trackActiveExit(_this__u8e3s4, exit, $composer_0, 14 & $changed | 112 & $changed >> 3);
    var shouldAnimateSlide = !(activeEnter.get_data_jntocg_k$().slide_1 == null) || !(activeExit.get_data_jntocg_k$().slide_1 == null);
    var shouldAnimateSizeChange = !(activeEnter.get_data_jntocg_k$().changeSize_1 == null) || !(activeExit.get_data_jntocg_k$().changeSize_1 == null);
    $composer_0.startReplaceGroup_5hh8aj_k$(-165044049);
    sourceInformation($composer_0, '878@38627L27,878@38576L79');
    var tmp_1;
    if (shouldAnimateSlide) {
      var tmp_2 = get_VectorConverter(Companion_getInstance_4());
      sourceInformationMarkerStart($composer_0, -165041447, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.animation.createModifier.<anonymous>' call
        var value_0 = label + ' slide';
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp_1 = createDeferredAnimation(_this__u8e3s4, tmp_2, tmp2_group, $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp_1 = null;
    }
    var tmp3_group = tmp_1;
    $composer_0.endReplaceGroup_ek144q_k$();
    var slideAnimation = tmp3_group;
    $composer_0.startReplaceGroup_5hh8aj_k$(-165038614);
    sourceInformation($composer_0, '883@38800L35,883@38751L85');
    var tmp_5;
    if (shouldAnimateSizeChange) {
      var tmp_6 = get_VectorConverter_0(Companion_getInstance_2());
      sourceInformationMarkerStart($composer_0, -165035903, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.animation.createModifier.<anonymous>' call
        var value_1 = label + ' shrink/expand';
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp_5 = createDeferredAnimation(_this__u8e3s4, tmp_6, tmp4_group, $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp_5 = null;
    }
    var tmp5_group = tmp_5;
    $composer_0.endReplaceGroup_ek144q_k$();
    var sizeAnimation = tmp5_group;
    $composer_0.startReplaceGroup_5hh8aj_k$(-165033189);
    sourceInformation($composer_0, '889@38995L48,887@38919L134');
    var tmp_9;
    if (shouldAnimateSizeChange) {
      var tmp_10 = get_VectorConverter(Companion_getInstance_4());
      sourceInformationMarkerStart($composer_0, -165029650, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_11;
      if (false || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.animation.createModifier.<anonymous>' call
        var value_2 = label + ' InterruptionHandlingOffset';
        $composer_0.updateRememberedValue_l1wh71_k$(value_2);
        tmp_11 = value_2;
      } else {
        tmp_11 = it_2;
      }
      var tmp_12 = tmp_11;
      var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp_9 = createDeferredAnimation(_this__u8e3s4, tmp_10, tmp6_group, $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp_9 = null;
    }
    var tmp7_group = tmp_9;
    $composer_0.endReplaceGroup_ek144q_k$();
    var offsetAnimation = tmp7_group;
    var tmp_13;
    var tmp_14;
    var tmp0_safe_receiver = activeEnter.get_data_jntocg_k$().changeSize_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.clip_1) === false) {
      tmp_14 = true;
    } else {
      var tmp1_safe_receiver = activeExit.get_data_jntocg_k$().changeSize_1;
      tmp_14 = (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.clip_1) === false;
    }
    if (tmp_14) {
      tmp_13 = true;
    } else {
      tmp_13 = !shouldAnimateSizeChange;
    }
    var disableClip = tmp_13;
    var graphicsLayerBlock = createGraphicsLayerBlock(_this__u8e3s4, activeEnter, activeExit, label, $composer_0, 14 & $changed | 7168 & $changed >> 3);
    var tmp_15 = Companion_getInstance();
    sourceInformationMarkerStart($composer_0, -165018312, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.changed_jpyyrz_k$(disableClip) | (($changed & 7168 ^ 3072) > 2048 && $composer_0.changed_ga7h3f_k$(isEnabled_0._v) || ($changed & 3072) === 2048));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_16;
    if (invalid || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.createModifier.<anonymous>' call
      var value_3 = createModifier$lambda_0(disableClip, isEnabled_0);
      $composer_0.updateRememberedValue_l1wh71_k$(value_3);
      tmp_16 = value_3;
    } else {
      tmp_16 = it_3;
    }
    var tmp_17 = tmp_16;
    var tmp8_group = (tmp_17 == null ? true : !(tmp_17 == null)) ? tmp_17 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var tmp1 = graphicsLayer(tmp_15, tmp8_group).then_g5qrxq_k$(new EnterExitTransitionElement(_this__u8e3s4, sizeAnimation, offsetAnimation, slideAnimation, activeEnter, activeExit, isEnabled_0._v, graphicsLayerBlock));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1;
  }
  function TransitionData(fade, slide, changeSize, scale, hold, effectsMap) {
    fade = fade === VOID ? null : fade;
    slide = slide === VOID ? null : slide;
    changeSize = changeSize === VOID ? null : changeSize;
    scale = scale === VOID ? null : scale;
    hold = hold === VOID ? false : hold;
    effectsMap = effectsMap === VOID ? emptyMap() : effectsMap;
    this.fade_1 = fade;
    this.slide_1 = slide;
    this.changeSize_1 = changeSize;
    this.scale_1 = scale;
    this.hold_1 = hold;
    this.effectsMap_1 = effectsMap;
  }
  protoOf(TransitionData).get_fade_woluit_k$ = function () {
    return this.fade_1;
  };
  protoOf(TransitionData).get_slide_iykyvc_k$ = function () {
    return this.slide_1;
  };
  protoOf(TransitionData).get_changeSize_fljy3e_k$ = function () {
    return this.changeSize_1;
  };
  protoOf(TransitionData).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(TransitionData).get_hold_wonf2g_k$ = function () {
    return this.hold_1;
  };
  protoOf(TransitionData).get_effectsMap_87u2yr_k$ = function () {
    return this.effectsMap_1;
  };
  protoOf(TransitionData).component1_7eebsc_k$ = function () {
    return this.fade_1;
  };
  protoOf(TransitionData).component2_7eebsb_k$ = function () {
    return this.slide_1;
  };
  protoOf(TransitionData).component3_7eebsa_k$ = function () {
    return this.changeSize_1;
  };
  protoOf(TransitionData).component4_7eebs9_k$ = function () {
    return this.scale_1;
  };
  protoOf(TransitionData).component5_7eebs8_k$ = function () {
    return this.hold_1;
  };
  protoOf(TransitionData).component6_7eebs7_k$ = function () {
    return this.effectsMap_1;
  };
  protoOf(TransitionData).copy_qnn6ir_k$ = function (fade, slide, changeSize, scale, hold, effectsMap) {
    return new TransitionData(fade, slide, changeSize, scale, hold, effectsMap);
  };
  protoOf(TransitionData).copy$default_6r0pba_k$ = function (fade, slide, changeSize, scale, hold, effectsMap, $super) {
    fade = fade === VOID ? this.fade_1 : fade;
    slide = slide === VOID ? this.slide_1 : slide;
    changeSize = changeSize === VOID ? this.changeSize_1 : changeSize;
    scale = scale === VOID ? this.scale_1 : scale;
    hold = hold === VOID ? this.hold_1 : hold;
    effectsMap = effectsMap === VOID ? this.effectsMap_1 : effectsMap;
    return $super === VOID ? this.copy_qnn6ir_k$(fade, slide, changeSize, scale, hold, effectsMap) : $super.copy_qnn6ir_k$.call(this, fade, slide, changeSize, scale, hold, effectsMap);
  };
  protoOf(TransitionData).toString = function () {
    return 'TransitionData(fade=' + toString_0(this.fade_1) + ', slide=' + toString_0(this.slide_1) + ', changeSize=' + toString_0(this.changeSize_1) + ', scale=' + toString_0(this.scale_1) + ', hold=' + this.hold_1 + ', effectsMap=' + toString(this.effectsMap_1) + ')';
  };
  protoOf(TransitionData).hashCode = function () {
    var result = this.fade_1 == null ? 0 : this.fade_1.hashCode();
    result = imul(result, 31) + (this.slide_1 == null ? 0 : this.slide_1.hashCode()) | 0;
    result = imul(result, 31) + (this.changeSize_1 == null ? 0 : this.changeSize_1.hashCode()) | 0;
    result = imul(result, 31) + (this.scale_1 == null ? 0 : this.scale_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.hold_1) | 0;
    result = imul(result, 31) + hashCode(this.effectsMap_1) | 0;
    return result;
  };
  protoOf(TransitionData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransitionData))
      return false;
    var tmp0_other_with_cast = other instanceof TransitionData ? other : THROW_CCE();
    if (!equals(this.fade_1, tmp0_other_with_cast.fade_1))
      return false;
    if (!equals(this.slide_1, tmp0_other_with_cast.slide_1))
      return false;
    if (!equals(this.changeSize_1, tmp0_other_with_cast.changeSize_1))
      return false;
    if (!equals(this.scale_1, tmp0_other_with_cast.scale_1))
      return false;
    if (!(this.hold_1 === tmp0_other_with_cast.hold_1))
      return false;
    if (!equals(this.effectsMap_1, tmp0_other_with_cast.effectsMap_1))
      return false;
    return true;
  };
  function EnterTransitionImpl(data) {
    EnterTransition.call(this);
    this.data_1 = data;
  }
  protoOf(EnterTransitionImpl).get_data_jntocg_k$ = function () {
    return this.data_1;
  };
  function Fade(alpha, animationSpec) {
    this.alpha_1 = alpha;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Fade).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Fade).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Fade).component1_7eebsc_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Fade).component2_7eebsb_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Fade).copy_z8z8aw_k$ = function (alpha, animationSpec) {
    return new Fade(alpha, animationSpec);
  };
  protoOf(Fade).copy$default_ma0w9o_k$ = function (alpha, animationSpec, $super) {
    alpha = alpha === VOID ? this.alpha_1 : alpha;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_z8z8aw_k$(alpha, animationSpec) : $super.copy_z8z8aw_k$.call(this, alpha, animationSpec);
  };
  protoOf(Fade).toString = function () {
    return 'Fade(alpha=' + this.alpha_1 + ', animationSpec=' + toString(this.animationSpec_1) + ')';
  };
  protoOf(Fade).hashCode = function () {
    var result = getNumberHashCode(this.alpha_1);
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Fade).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Fade))
      return false;
    var tmp0_other_with_cast = other instanceof Fade ? other : THROW_CCE();
    if (!equals(this.alpha_1, tmp0_other_with_cast.alpha_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    return true;
  };
  function Slide(slideOffset, animationSpec) {
    this.slideOffset_1 = slideOffset;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Slide).get_slideOffset_3j6nyd_k$ = function () {
    return this.slideOffset_1;
  };
  protoOf(Slide).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Slide).component1_7eebsc_k$ = function () {
    return this.slideOffset_1;
  };
  protoOf(Slide).component2_7eebsb_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Slide).copy_rxbt3p_k$ = function (slideOffset, animationSpec) {
    return new Slide(slideOffset, animationSpec);
  };
  protoOf(Slide).copy$default_redmhi_k$ = function (slideOffset, animationSpec, $super) {
    slideOffset = slideOffset === VOID ? this.slideOffset_1 : slideOffset;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_rxbt3p_k$(slideOffset, animationSpec) : $super.copy_rxbt3p_k$.call(this, slideOffset, animationSpec);
  };
  protoOf(Slide).toString = function () {
    return 'Slide(slideOffset=' + toString(this.slideOffset_1) + ', animationSpec=' + toString(this.animationSpec_1) + ')';
  };
  protoOf(Slide).hashCode = function () {
    var result = hashCode(this.slideOffset_1);
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Slide).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Slide))
      return false;
    var tmp0_other_with_cast = other instanceof Slide ? other : THROW_CCE();
    if (!equals(this.slideOffset_1, tmp0_other_with_cast.slideOffset_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    return true;
  };
  function ChangeSize$_init_$lambda_705jnq(it) {
    return new IntSize(IntSize_0(0, 0));
  }
  function ChangeSize(alignment, size, animationSpec, clip) {
    var tmp;
    if (size === VOID) {
      tmp = ChangeSize$_init_$lambda_705jnq;
    } else {
      tmp = size;
    }
    size = tmp;
    clip = clip === VOID ? true : clip;
    this.alignment_1 = alignment;
    this.size_1 = size;
    this.animationSpec_1 = animationSpec;
    this.clip_1 = clip;
  }
  protoOf(ChangeSize).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ChangeSize).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(ChangeSize).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(ChangeSize).get_clip_wok5uh_k$ = function () {
    return this.clip_1;
  };
  protoOf(ChangeSize).component1_7eebsc_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ChangeSize).component2_7eebsb_k$ = function () {
    return this.size_1;
  };
  protoOf(ChangeSize).component3_7eebsa_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(ChangeSize).component4_7eebs9_k$ = function () {
    return this.clip_1;
  };
  protoOf(ChangeSize).copy_v6ndrn_k$ = function (alignment, size, animationSpec, clip) {
    return new ChangeSize(alignment, size, animationSpec, clip);
  };
  protoOf(ChangeSize).copy$default_lm9k9y_k$ = function (alignment, size, animationSpec, clip, $super) {
    alignment = alignment === VOID ? this.alignment_1 : alignment;
    size = size === VOID ? this.size_1 : size;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    clip = clip === VOID ? this.clip_1 : clip;
    return $super === VOID ? this.copy_v6ndrn_k$(alignment, size, animationSpec, clip) : $super.copy_v6ndrn_k$.call(this, alignment, size, animationSpec, clip);
  };
  protoOf(ChangeSize).toString = function () {
    return 'ChangeSize(alignment=' + toString(this.alignment_1) + ', size=' + toString(this.size_1) + ', animationSpec=' + toString(this.animationSpec_1) + ', clip=' + this.clip_1 + ')';
  };
  protoOf(ChangeSize).hashCode = function () {
    var result = hashCode(this.alignment_1);
    result = imul(result, 31) + hashCode(this.size_1) | 0;
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.clip_1) | 0;
    return result;
  };
  protoOf(ChangeSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChangeSize))
      return false;
    var tmp0_other_with_cast = other instanceof ChangeSize ? other : THROW_CCE();
    if (!equals(this.alignment_1, tmp0_other_with_cast.alignment_1))
      return false;
    if (!equals(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    if (!(this.clip_1 === tmp0_other_with_cast.clip_1))
      return false;
    return true;
  };
  function Scale(scale, transformOrigin, animationSpec) {
    this.scale_1 = scale;
    this.transformOrigin_1 = transformOrigin;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Scale).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(Scale).get_transformOrigin_bc7467_k$ = function () {
    return this.transformOrigin_1;
  };
  protoOf(Scale).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Scale).component1_7eebsc_k$ = function () {
    return this.scale_1;
  };
  protoOf(Scale).component2_vce5p_k$ = function () {
    return this.transformOrigin_1;
  };
  protoOf(Scale).component3_7eebsa_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Scale).copy_yexmra_k$ = function (scale, transformOrigin, animationSpec) {
    return new Scale(scale, transformOrigin, animationSpec);
  };
  protoOf(Scale).copy$default_nonyxv_k$ = function (scale, transformOrigin, animationSpec, $super) {
    scale = scale === VOID ? this.scale_1 : scale;
    transformOrigin = transformOrigin === VOID ? this.transformOrigin_1 : transformOrigin;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_yexmra_k$(scale, transformOrigin, animationSpec) : $super.copy_yexmra_k$.call(this, scale, new TransformOrigin(transformOrigin), animationSpec);
  };
  protoOf(Scale).toString = function () {
    return 'Scale(scale=' + this.scale_1 + ', transformOrigin=' + TransformOrigin__toString_impl_nn7ftd(this.transformOrigin_1) + ', animationSpec=' + toString(this.animationSpec_1) + ')';
  };
  protoOf(Scale).hashCode = function () {
    var result = getNumberHashCode(this.scale_1);
    result = imul(result, 31) + TransformOrigin__hashCode_impl_pmqpcw(this.transformOrigin_1) | 0;
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Scale).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Scale))
      return false;
    var tmp0_other_with_cast = other instanceof Scale ? other : THROW_CCE();
    if (!equals(this.scale_1, tmp0_other_with_cast.scale_1))
      return false;
    if (!equals(this.transformOrigin_1, tmp0_other_with_cast.transformOrigin_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    return true;
  };
  function TransitionEffectKey() {
  }
  function TransitionEffect() {
  }
  function ExitTransitionImpl(data) {
    ExitTransition.call(this);
    this.data_1 = data;
  }
  protoOf(ExitTransitionImpl).get_data_jntocg_k$ = function () {
    return this.data_1;
  };
  function trackActiveEnter(_this__u8e3s4, enter, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 21614502, 'C(trackActiveEnter)915@40149L40:EnterExitTransition.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(21614502, $changed, -1, 'androidx.compose.animation.trackActiveEnter (EnterExitTransition.kt:910)');
    }
    sourceInformationMarkerStart($composer_0, -1583278438, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.trackActiveEnter.<anonymous>' call
      var value = mutableStateOf(enter);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var activeEnter$delegate = tmp1_group;
    if (_this__u8e3s4.get_currentState_snihnl_k$().equals(_this__u8e3s4.get_targetState_kri3mx_k$()) && _this__u8e3s4.get_currentState_snihnl_k$().equals(EnterExitState_Visible_getInstance())) {
      if (_this__u8e3s4.get_isSeeking_vjb393_k$()) {
        trackActiveEnter$lambda_0(activeEnter$delegate, enter);
      } else {
        trackActiveEnter$lambda_0(activeEnter$delegate, Companion_getInstance_12().None_1);
      }
    } else if (_this__u8e3s4.get_targetState_kri3mx_k$().equals(EnterExitState_Visible_getInstance())) {
      trackActiveEnter$lambda_0(activeEnter$delegate, trackActiveEnter$lambda(activeEnter$delegate).plus_w36lq9_k$(enter));
    }
    var tmp0 = trackActiveEnter$lambda(activeEnter$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function trackActiveExit(_this__u8e3s4, exit, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1363864804, 'C(trackActiveExit)935@41130L39:EnterExitTransition.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(-1363864804, $changed, -1, 'androidx.compose.animation.trackActiveExit (EnterExitTransition.kt:930)');
    }
    sourceInformationMarkerStart($composer_0, 1483140299, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.trackActiveExit.<anonymous>' call
      var value = mutableStateOf(exit);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var activeExit$delegate = tmp1_group;
    if (_this__u8e3s4.get_currentState_snihnl_k$().equals(_this__u8e3s4.get_targetState_kri3mx_k$()) && _this__u8e3s4.get_currentState_snihnl_k$().equals(EnterExitState_Visible_getInstance())) {
      if (_this__u8e3s4.get_isSeeking_vjb393_k$()) {
        trackActiveExit$lambda_0(activeExit$delegate, exit);
      } else {
        trackActiveExit$lambda_0(activeExit$delegate, Companion_getInstance_13().None_1);
      }
    } else if (!_this__u8e3s4.get_targetState_kri3mx_k$().equals(EnterExitState_Visible_getInstance())) {
      trackActiveExit$lambda_0(activeExit$delegate, trackActiveExit$lambda(activeExit$delegate).plus_buzi7t_k$(exit));
    }
    var tmp0 = trackActiveExit$lambda(activeExit$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function GraphicsLayerBlockForEnterExit() {
  }
  function createGraphicsLayerBlock(_this__u8e3s4, enter, exit, label, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 642253525, 'C(createGraphicsLayerBlock)985@42946L2853:EnterExitTransition.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(642253525, $changed, -1, 'androidx.compose.animation.createGraphicsLayerBlock (EnterExitTransition.kt:958)');
    }
    var shouldAnimateAlpha = !(enter.get_data_jntocg_k$().fade_1 == null) || !(exit.get_data_jntocg_k$().fade_1 == null);
    var shouldAnimateScale = !(enter.get_data_jntocg_k$().scale_1 == null) || !(exit.get_data_jntocg_k$().scale_1 == null);
    $composer_0.startReplaceGroup_5hh8aj_k$(-1545808136);
    sourceInformation($composer_0, '968@42460L27,967@42377L120');
    var tmp;
    if (shouldAnimateAlpha) {
      var tmp_0 = get_VectorConverter_1(FloatCompanionObject_getInstance());
      sourceInformationMarkerStart($composer_0, -1545804535, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.animation.createGraphicsLayerBlock.<anonymous>' call
        var value = label + ' alpha';
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp = createDeferredAnimation(_this__u8e3s4, tmp_0, tmp1_group, $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp = null;
    }
    var tmp2_group = tmp;
    $composer_0.endReplaceGroup_ek144q_k$();
    var alphaAnimation = tmp2_group;
    $composer_0.startReplaceGroup_5hh8aj_k$(-1545801832);
    sourceInformation($composer_0, '974@42657L27,973@42574L120');
    var tmp_3;
    if (shouldAnimateScale) {
      var tmp_4 = get_VectorConverter_1(FloatCompanionObject_getInstance());
      sourceInformationMarkerStart($composer_0, -1545798231, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.animation.createGraphicsLayerBlock.<anonymous>' call
        var value_0 = label + ' scale';
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp_3 = createDeferredAnimation(_this__u8e3s4, tmp_4, tmp3_group, $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp_3 = null;
    }
    var tmp4_group = tmp_3;
    $composer_0.endReplaceGroup_ek144q_k$();
    var scaleAnimation = tmp4_group;
    $composer_0.startReplaceGroup_5hh8aj_k$(-1545795192);
    sourceInformation($composer_0, '979@42781L136');
    var tmp_7;
    if (shouldAnimateScale) {
      tmp_7 = createDeferredAnimation(_this__u8e3s4, get_TransformOriginVectorConverter(), 'TransformOriginInterruptionHandling', $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp_7 = null;
    }
    var tmp5_group = tmp_7;
    $composer_0.endReplaceGroup_ek144q_k$();
    var transformOriginAnimation = tmp5_group;
    sourceInformationMarkerStart($composer_0, -1545786157, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!(!!(!!(!!($composer_0.changedInstance_s1wkiy_k$(alphaAnimation) | (($changed & 112 ^ 48) > 32 && $composer_0.changed_ga7h3f_k$(enter) || ($changed & 48) === 32)) | (($changed & 896 ^ 384) > 256 && $composer_0.changed_ga7h3f_k$(exit) || ($changed & 384) === 256)) | $composer_0.changedInstance_s1wkiy_k$(scaleAnimation)) | (($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4)) | $composer_0.changedInstance_s1wkiy_k$(transformOriginAnimation));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_8;
    if (invalid || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.createGraphicsLayerBlock.<anonymous>' call
      var tmp_9 = createGraphicsLayerBlock$lambda(alphaAnimation, scaleAnimation, _this__u8e3s4, enter, exit, transformOriginAnimation);
      var value_1 = new sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0(tmp_9);
      $composer_0.updateRememberedValue_l1wh71_k$(value_1);
      tmp_8 = value_1;
    } else {
      tmp_8 = it_1;
    }
    var tmp_10 = tmp_8;
    var tmp6_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp6_group;
  }
  function EnterExitTransitionElement(transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock) {
    ModifierNodeElement.call(this);
    this.transition_1 = transition;
    this.sizeAnimation_1 = sizeAnimation;
    this.offsetAnimation_1 = offsetAnimation;
    this.slideAnimation_1 = slideAnimation;
    this.enter_1 = enter;
    this.exit_1 = exit;
    this.isEnabled_1 = isEnabled;
    this.graphicsLayerBlock_1 = graphicsLayerBlock;
  }
  protoOf(EnterExitTransitionElement).get_transition_mcca1q_k$ = function () {
    return this.transition_1;
  };
  protoOf(EnterExitTransitionElement).set_sizeAnimation_d1qqsi_k$ = function (_set____db54di) {
    this.sizeAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_sizeAnimation_oj7fx6_k$ = function () {
    return this.sizeAnimation_1;
  };
  protoOf(EnterExitTransitionElement).set_offsetAnimation_sbtt4u_k$ = function (_set____db54di) {
    this.offsetAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_offsetAnimation_bqy8g8_k$ = function () {
    return this.offsetAnimation_1;
  };
  protoOf(EnterExitTransitionElement).set_slideAnimation_8zf29m_k$ = function (_set____db54di) {
    this.slideAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_slideAnimation_1jny1w_k$ = function () {
    return this.slideAnimation_1;
  };
  protoOf(EnterExitTransitionElement).set_enter_kk8oi8_k$ = function (_set____db54di) {
    this.enter_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_enter_iqxcq7_k$ = function () {
    return this.enter_1;
  };
  protoOf(EnterExitTransitionElement).set_exit_jz1ms6_k$ = function (_set____db54di) {
    this.exit_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_exit_wolopz_k$ = function () {
    return this.exit_1;
  };
  protoOf(EnterExitTransitionElement).set_isEnabled_9kb97j_k$ = function (_set____db54di) {
    this.isEnabled_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_isEnabled_roz1ma_k$ = function () {
    return this.isEnabled_1;
  };
  protoOf(EnterExitTransitionElement).set_graphicsLayerBlock_3ehvm4_k$ = function (_set____db54di) {
    this.graphicsLayerBlock_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_graphicsLayerBlock_45d73k_k$ = function () {
    return this.graphicsLayerBlock_1;
  };
  protoOf(EnterExitTransitionElement).create_md4cuc_k$ = function () {
    return new EnterExitTransitionModifierNode(this.transition_1, this.sizeAnimation_1, this.offsetAnimation_1, this.slideAnimation_1, this.enter_1, this.exit_1, this.isEnabled_1, this.graphicsLayerBlock_1);
  };
  protoOf(EnterExitTransitionElement).update_sx3szx_k$ = function (node) {
    node.transition_1 = this.transition_1;
    node.sizeAnimation_1 = this.sizeAnimation_1;
    node.offsetAnimation_1 = this.offsetAnimation_1;
    node.slideAnimation_1 = this.slideAnimation_1;
    node.enter_1 = this.enter_1;
    node.exit_1 = this.exit_1;
    node.isEnabled_1 = this.isEnabled_1;
    node.graphicsLayerBlock_1 = this.graphicsLayerBlock_1;
  };
  protoOf(EnterExitTransitionElement).update_9wd57p_k$ = function (node) {
    return this.update_sx3szx_k$(node instanceof EnterExitTransitionModifierNode ? node : THROW_CCE());
  };
  protoOf(EnterExitTransitionElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('enterExitTransition');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('transition', this.transition_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('sizeAnimation', this.sizeAnimation_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('offsetAnimation', this.offsetAnimation_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('slideAnimation', this.slideAnimation_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('enter', this.enter_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('exit', this.exit_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('graphicsLayerBlock', this.graphicsLayerBlock_1);
  };
  protoOf(EnterExitTransitionElement).component1_7eebsc_k$ = function () {
    return this.transition_1;
  };
  protoOf(EnterExitTransitionElement).component2_7eebsb_k$ = function () {
    return this.sizeAnimation_1;
  };
  protoOf(EnterExitTransitionElement).component3_7eebsa_k$ = function () {
    return this.offsetAnimation_1;
  };
  protoOf(EnterExitTransitionElement).component4_7eebs9_k$ = function () {
    return this.slideAnimation_1;
  };
  protoOf(EnterExitTransitionElement).component5_7eebs8_k$ = function () {
    return this.enter_1;
  };
  protoOf(EnterExitTransitionElement).component6_7eebs7_k$ = function () {
    return this.exit_1;
  };
  protoOf(EnterExitTransitionElement).component7_7eebs6_k$ = function () {
    return this.isEnabled_1;
  };
  protoOf(EnterExitTransitionElement).component8_7eebs5_k$ = function () {
    return this.graphicsLayerBlock_1;
  };
  protoOf(EnterExitTransitionElement).copy_ilz9ny_k$ = function (transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock) {
    return new EnterExitTransitionElement(transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock);
  };
  protoOf(EnterExitTransitionElement).copy$default_gsfrhw_k$ = function (transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock, $super) {
    transition = transition === VOID ? this.transition_1 : transition;
    sizeAnimation = sizeAnimation === VOID ? this.sizeAnimation_1 : sizeAnimation;
    offsetAnimation = offsetAnimation === VOID ? this.offsetAnimation_1 : offsetAnimation;
    slideAnimation = slideAnimation === VOID ? this.slideAnimation_1 : slideAnimation;
    enter = enter === VOID ? this.enter_1 : enter;
    exit = exit === VOID ? this.exit_1 : exit;
    isEnabled = isEnabled === VOID ? this.isEnabled_1 : isEnabled;
    graphicsLayerBlock = graphicsLayerBlock === VOID ? this.graphicsLayerBlock_1 : graphicsLayerBlock;
    return $super === VOID ? this.copy_ilz9ny_k$(transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock) : $super.copy_ilz9ny_k$.call(this, transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock);
  };
  protoOf(EnterExitTransitionElement).toString = function () {
    return 'EnterExitTransitionElement(transition=' + this.transition_1.toString() + ', sizeAnimation=' + toString_0(this.sizeAnimation_1) + ', offsetAnimation=' + toString_0(this.offsetAnimation_1) + ', slideAnimation=' + toString_0(this.slideAnimation_1) + ', enter=' + this.enter_1.toString() + ', exit=' + this.exit_1.toString() + ', isEnabled=' + toString(this.isEnabled_1) + ', graphicsLayerBlock=' + toString(this.graphicsLayerBlock_1) + ')';
  };
  protoOf(EnterExitTransitionElement).hashCode = function () {
    var result = hashCode(this.transition_1);
    result = imul(result, 31) + (this.sizeAnimation_1 == null ? 0 : hashCode(this.sizeAnimation_1)) | 0;
    result = imul(result, 31) + (this.offsetAnimation_1 == null ? 0 : hashCode(this.offsetAnimation_1)) | 0;
    result = imul(result, 31) + (this.slideAnimation_1 == null ? 0 : hashCode(this.slideAnimation_1)) | 0;
    result = imul(result, 31) + this.enter_1.hashCode() | 0;
    result = imul(result, 31) + this.exit_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.isEnabled_1) | 0;
    result = imul(result, 31) + hashCode(this.graphicsLayerBlock_1) | 0;
    return result;
  };
  protoOf(EnterExitTransitionElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EnterExitTransitionElement))
      return false;
    var tmp0_other_with_cast = other instanceof EnterExitTransitionElement ? other : THROW_CCE();
    if (!equals(this.transition_1, tmp0_other_with_cast.transition_1))
      return false;
    if (!equals(this.sizeAnimation_1, tmp0_other_with_cast.sizeAnimation_1))
      return false;
    if (!equals(this.offsetAnimation_1, tmp0_other_with_cast.offsetAnimation_1))
      return false;
    if (!equals(this.slideAnimation_1, tmp0_other_with_cast.slideAnimation_1))
      return false;
    if (!this.enter_1.equals(tmp0_other_with_cast.enter_1))
      return false;
    if (!this.exit_1.equals(tmp0_other_with_cast.exit_1))
      return false;
    if (!equals(this.isEnabled_1, tmp0_other_with_cast.isEnabled_1))
      return false;
    if (!equals(this.graphicsLayerBlock_1, tmp0_other_with_cast.graphicsLayerBlock_1))
      return false;
    return true;
  };
  function _set_lookaheadConstraintsAvailable__g4tuk0($this, _set____db54di) {
    $this.lookaheadConstraintsAvailable_1 = _set____db54di;
  }
  function _get_lookaheadConstraintsAvailable__6k3wx0($this) {
    return $this.lookaheadConstraintsAvailable_1;
  }
  function _set_lookaheadSize__8e6fb6($this, _set____db54di) {
    $this.lookaheadSize_1 = _set____db54di;
  }
  function _get_lookaheadSize__6tl376($this) {
    return $this.lookaheadSize_1;
  }
  function _set_lookaheadConstraints__uusx37($this, value) {
    $this.lookaheadConstraintsAvailable_1 = true;
    $this.lookaheadConstraints_1 = value;
  }
  function _get_lookaheadConstraints__gwq92v($this) {
    return $this.lookaheadConstraints_1;
  }
  function EnterExitTransitionModifierNode$sizeTransitionSpec$lambda(this$0) {
    return function ($this$null) {
      var tmp;
      if ($this$null.isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.enter_1.get_data_jntocg_k$().changeSize_1;
        tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animationSpec_1;
      } else if ($this$null.isTransitioningTo_mjamuk_k$(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp1_safe_receiver = this$0.exit_1.get_data_jntocg_k$().changeSize_1;
        tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.animationSpec_1;
      } else {
        tmp = get_DefaultSizeAnimationSpec();
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? get_DefaultSizeAnimationSpec() : tmp2_elvis_lhs;
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.place$default_lcv1ed_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_0(this$0, $target) {
    return function (it) {
      return new IntSize(this$0.sizeByState_uhydwr_k$(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_1($this$animate) {
    return get_DefaultOffsetAnimationSpec();
  }
  function EnterExitTransitionModifierNode$measure$lambda_2(this$0, $target) {
    return function (it) {
      return new IntOffset(this$0.targetOffsetByState_8xbww4_k$(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_3(this$0, $target) {
    return function (it) {
      return new IntOffset(this$0.slideTargetValueByState_dfs3rb_k$(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_4($placeable, $offset, $offsetDelta, $layerBlock) {
    return function ($this$layout) {
      $this$layout.placeWithLayer_c7y141_k$($placeable, _IntOffset___get_x__impl__qiqr5o($offset) + _IntOffset___get_x__impl__qiqr5o($offsetDelta) | 0, _IntOffset___get_y__impl__2avpwj($offset) + _IntOffset___get_y__impl__2avpwj($offsetDelta) | 0, 0.0, $layerBlock);
      return Unit_getInstance();
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_5($$this$run) {
    return function ($this$layout) {
      $this$layout.place$default_lcv1ed_k$($$this$run, 0, 0);
      return Unit_getInstance();
    };
  }
  function EnterExitTransitionModifierNode$slideSpec$lambda(this$0) {
    return function ($this$null) {
      var tmp;
      if ($this$null.isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.enter_1.get_data_jntocg_k$().slide_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animationSpec_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultOffsetAnimationSpec() : tmp1_elvis_lhs;
      } else if ($this$null.isTransitioningTo_mjamuk_k$(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = this$0.exit_1.get_data_jntocg_k$().slide_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.animationSpec_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultOffsetAnimationSpec() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultOffsetAnimationSpec();
      }
      return tmp;
    };
  }
  function EnterExitTransitionModifierNode(transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock) {
    LayoutModifierNodeWithPassThroughIntrinsics.call(this);
    this.transition_1 = transition;
    this.sizeAnimation_1 = sizeAnimation;
    this.offsetAnimation_1 = offsetAnimation;
    this.slideAnimation_1 = slideAnimation;
    this.enter_1 = enter;
    this.exit_1 = exit;
    this.isEnabled_1 = isEnabled;
    this.graphicsLayerBlock_1 = graphicsLayerBlock;
    this.lookaheadConstraintsAvailable_1 = false;
    this.lookaheadSize_1 = get_InvalidSize();
    this.lookaheadConstraints_1 = Constraints();
    this.currentAlignment_1 = null;
    var tmp = this;
    tmp.sizeTransitionSpec_1 = EnterExitTransitionModifierNode$sizeTransitionSpec$lambda(this);
    var tmp_0 = this;
    tmp_0.slideSpec_1 = EnterExitTransitionModifierNode$slideSpec$lambda(this);
  }
  protoOf(EnterExitTransitionModifierNode).set_transition_3a2emy_k$ = function (_set____db54di) {
    this.transition_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_transition_mcca1q_k$ = function () {
    return this.transition_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_sizeAnimation_d1qqsi_k$ = function (_set____db54di) {
    this.sizeAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_sizeAnimation_oj7fx6_k$ = function () {
    return this.sizeAnimation_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_offsetAnimation_sbtt4u_k$ = function (_set____db54di) {
    this.offsetAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_offsetAnimation_bqy8g8_k$ = function () {
    return this.offsetAnimation_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_slideAnimation_8zf29m_k$ = function (_set____db54di) {
    this.slideAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_slideAnimation_1jny1w_k$ = function () {
    return this.slideAnimation_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_enter_kk8oi8_k$ = function (_set____db54di) {
    this.enter_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_enter_iqxcq7_k$ = function () {
    return this.enter_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_exit_jz1ms6_k$ = function (_set____db54di) {
    this.exit_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_exit_wolopz_k$ = function () {
    return this.exit_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_isEnabled_9kb97j_k$ = function (_set____db54di) {
    this.isEnabled_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_isEnabled_roz1ma_k$ = function () {
    return this.isEnabled_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_graphicsLayerBlock_3ehvm4_k$ = function (_set____db54di) {
    this.graphicsLayerBlock_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_graphicsLayerBlock_45d73k_k$ = function () {
    return this.graphicsLayerBlock_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_currentAlignment_hwjxzb_k$ = function (_set____db54di) {
    this.currentAlignment_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_currentAlignment_1b8qb7_k$ = function () {
    return this.currentAlignment_1;
  };
  protoOf(EnterExitTransitionModifierNode).get_alignment_xa1jnq_k$ = function () {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.animation.EnterExitTransitionModifierNode.<get-alignment>.<anonymous>' call
    var tmp;
    if (this.transition_1.get_segment_xwnoei_k$().isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
      var tmp0_safe_receiver = this.enter_1.get_data_jntocg_k$().changeSize_1;
      var tmp2_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.alignment_1;
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        var tmp1_safe_receiver = this.exit_1.get_data_jntocg_k$().changeSize_1;
        tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.alignment_1;
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      var tmp3_safe_receiver = this.exit_1.get_data_jntocg_k$().changeSize_1;
      var tmp5_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.alignment_1;
      var tmp_1;
      if (tmp5_elvis_lhs == null) {
        var tmp4_safe_receiver = this.enter_1.get_data_jntocg_k$().changeSize_1;
        tmp_1 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.alignment_1;
      } else {
        tmp_1 = tmp5_elvis_lhs;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).get_sizeTransitionSpec_sffkq_k$ = function () {
    return this.sizeTransitionSpec_1;
  };
  protoOf(EnterExitTransitionModifierNode).sizeByState_uhydwr_k$ = function (targetState, fullSize) {
    var tmp;
    switch (targetState.get_ordinal_ip24qg_k$()) {
      case 1:
        tmp = fullSize;
        break;
      case 0:
        var tmp1_safe_receiver = this.enter_1.get_data_jntocg_k$().changeSize_1;
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.size_1;
        var tmp_0;
        if (tmp2_safe_receiver == null) {
          tmp_0 = null;
        } else {
          var tmp_1 = tmp2_safe_receiver(new IntSize(fullSize));
          tmp_0 = tmp_1 == null ? null : tmp_1.packedValue_1;
        }

        var tmp3_elvis_lhs = tmp_0;
        var tmp_2;
        var tmp_3 = tmp3_elvis_lhs;
        if ((tmp_3 == null ? null : new IntSize(tmp_3)) == null) {
          tmp_2 = fullSize;
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }

        tmp = tmp_2;
        break;
      case 2:
        var tmp4_safe_receiver = this.exit_1.get_data_jntocg_k$().changeSize_1;
        var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.size_1;
        var tmp_4;
        if (tmp5_safe_receiver == null) {
          tmp_4 = null;
        } else {
          var tmp_5 = tmp5_safe_receiver(new IntSize(fullSize));
          tmp_4 = tmp_5 == null ? null : tmp_5.packedValue_1;
        }

        var tmp6_elvis_lhs = tmp_4;
        var tmp_6;
        var tmp_7 = tmp6_elvis_lhs;
        if ((tmp_7 == null ? null : new IntSize(tmp_7)) == null) {
          tmp_6 = fullSize;
        } else {
          tmp_6 = tmp6_elvis_lhs;
        }

        tmp = tmp_6;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).onAttach_juzy2c_k$ = function () {
    protoOf(LayoutModifierNodeWithPassThroughIntrinsics).onAttach_juzy2c_k$.call(this);
    this.lookaheadConstraintsAvailable_1 = false;
    this.lookaheadSize_1 = get_InvalidSize();
  };
  protoOf(EnterExitTransitionModifierNode).targetOffsetByState_8xbww4_k$ = function (targetState, fullSize) {
    var tmp;
    if (this.currentAlignment_1 == null) {
      tmp = Companion_getInstance_4().get_Zero_6hc3i8_k$();
    } else if (this.get_alignment_xa1jnq_k$() == null) {
      tmp = Companion_getInstance_4().get_Zero_6hc3i8_k$();
    } else if (equals(this.currentAlignment_1, this.get_alignment_xa1jnq_k$())) {
      tmp = Companion_getInstance_4().get_Zero_6hc3i8_k$();
    } else {
      var tmp_0;
      switch (targetState.get_ordinal_ip24qg_k$()) {
        case 1:
          tmp_0 = Companion_getInstance_4().get_Zero_6hc3i8_k$();
          break;
        case 0:
          tmp_0 = Companion_getInstance_4().get_Zero_6hc3i8_k$();
          break;
        case 2:
          var tmp1_safe_receiver = this.exit_1.get_data_jntocg_k$().changeSize_1;
          var tmp_1;
          if (tmp1_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.animation.EnterExitTransitionModifierNode.targetOffsetByState.<anonymous>' call
            var endSize = tmp1_safe_receiver.size_1(new IntSize(fullSize)).packedValue_1;
            var targetOffset = ensureNotNull(this.get_alignment_xa1jnq_k$()).align_mb8mzc_k$(fullSize, endSize, LayoutDirection_Ltr_getInstance());
            var currentOffset = ensureNotNull(this.currentAlignment_1).align_mb8mzc_k$(fullSize, endSize, LayoutDirection_Ltr_getInstance());
            tmp_1 = IntOffset__minus_impl_4m69hb(targetOffset, currentOffset);
          }

          var tmp2_elvis_lhs = tmp_1;
          var tmp_2;
          var tmp_3 = tmp2_elvis_lhs;
          if ((tmp_3 == null ? null : new IntOffset(tmp_3)) == null) {
            tmp_2 = Companion_getInstance_4().get_Zero_6hc3i8_k$();
          } else {
            tmp_2 = tmp2_elvis_lhs;
          }

          tmp_0 = tmp_2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    if (this.transition_1.get_currentState_snihnl_k$().equals(this.transition_1.get_targetState_kri3mx_k$())) {
      this.currentAlignment_1 = null;
    } else if (this.currentAlignment_1 == null) {
      var tmp = this;
      var tmp0_elvis_lhs = this.get_alignment_xa1jnq_k$();
      tmp.currentAlignment_1 = tmp0_elvis_lhs == null ? Companion_getInstance_5().get_TopStart_o4x792_k$() : tmp0_elvis_lhs;
    }
    if (_this__u8e3s4.get_isLookingAhead_2057g1_k$()) {
      var placeable = measurable.measure_4dmfk1_k$(constraints);
      var measuredSize = IntSize_0(placeable.get_width_j0q4yl_k$(), placeable.get_height_e7t92o_k$());
      this.lookaheadSize_1 = measuredSize;
      _set_lookaheadConstraints__uusx37(this, constraints);
      var tmp_0 = _IntSize___get_width__impl__d9yl4o(measuredSize);
      var tmp_1 = _IntSize___get_height__impl__prv63b(measuredSize);
      return _this__u8e3s4.layout$default_n19e5l_k$(tmp_0, tmp_1, VOID, EnterExitTransitionModifierNode$measure$lambda(placeable));
    } else if (this.isEnabled_1()) {
      var layerBlock = this.graphicsLayerBlock_1.init_1xdsg_k$();
      var placeable_0 = measurable.measure_4dmfk1_k$(constraints);
      var measuredSize_0 = IntSize_0(placeable_0.get_width_j0q4yl_k$(), placeable_0.get_height_e7t92o_k$());
      var target = get_isValid(this.lookaheadSize_1) ? this.lookaheadSize_1 : measuredSize_0;
      var tmp1_safe_receiver = this.sizeAnimation_1;
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        tmp_2 = tmp1_safe_receiver.animate_lt3uhv_k$(this.sizeTransitionSpec_1, EnterExitTransitionModifierNode$measure$lambda_0(this, target));
      }
      var animSize = tmp_2;
      var tmp_3;
      if (animSize == null) {
        tmp_3 = null;
      } else {
        var tmp_4 = animSize.get_value_j01efc_k$();
        tmp_3 = tmp_4 == null ? null : tmp_4.packedValue_1;
      }
      var tmp3_elvis_lhs = tmp_3;
      var tmp_5;
      var tmp_6 = tmp3_elvis_lhs;
      if ((tmp_6 == null ? null : new IntSize(tmp_6)) == null) {
        tmp_5 = measuredSize_0;
      } else {
        tmp_5 = tmp3_elvis_lhs;
      }
      var currentSize = constrain(constraints, tmp_5);
      var tmp4_safe_receiver = this.offsetAnimation_1;
      var tmp_7;
      if (tmp4_safe_receiver == null) {
        tmp_7 = null;
      } else {
        var tmp_8 = EnterExitTransitionModifierNode$measure$lambda_1;
        tmp_7 = tmp4_safe_receiver.animate_lt3uhv_k$(tmp_8, EnterExitTransitionModifierNode$measure$lambda_2(this, target));
      }
      var tmp5_safe_receiver = tmp_7;
      var tmp_9;
      if (tmp5_safe_receiver == null) {
        tmp_9 = null;
      } else {
        var tmp_10 = tmp5_safe_receiver.get_value_j01efc_k$();
        tmp_9 = tmp_10 == null ? null : tmp_10.packedValue_1;
      }
      var tmp6_elvis_lhs = tmp_9;
      var tmp_11;
      var tmp_12 = tmp6_elvis_lhs;
      if ((tmp_12 == null ? null : new IntOffset(tmp_12)) == null) {
        tmp_11 = Companion_getInstance_4().get_Zero_6hc3i8_k$();
      } else {
        tmp_11 = tmp6_elvis_lhs;
      }
      var offsetDelta = tmp_11;
      var tmp7_safe_receiver = this.slideAnimation_1;
      var tmp_13;
      if (tmp7_safe_receiver == null) {
        tmp_13 = null;
      } else {
        tmp_13 = tmp7_safe_receiver.animate_lt3uhv_k$(this.slideSpec_1, EnterExitTransitionModifierNode$measure$lambda_3(this, target));
      }
      var tmp8_safe_receiver = tmp_13;
      var tmp_14;
      if (tmp8_safe_receiver == null) {
        tmp_14 = null;
      } else {
        var tmp_15 = tmp8_safe_receiver.get_value_j01efc_k$();
        tmp_14 = tmp_15 == null ? null : tmp_15.packedValue_1;
      }
      var tmp9_elvis_lhs = tmp_14;
      var tmp_16;
      var tmp_17 = tmp9_elvis_lhs;
      if ((tmp_17 == null ? null : new IntOffset(tmp_17)) == null) {
        tmp_16 = Companion_getInstance_4().get_Zero_6hc3i8_k$();
      } else {
        tmp_16 = tmp9_elvis_lhs;
      }
      var slideOffset = tmp_16;
      var tmp10_safe_receiver = this.currentAlignment_1;
      var tmp11_elvis_lhs = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.align_mb8mzc_k$(target, currentSize, LayoutDirection_Ltr_getInstance());
      var tmp_18;
      var tmp_19 = tmp11_elvis_lhs;
      if ((tmp_19 == null ? null : new IntOffset(tmp_19)) == null) {
        tmp_18 = Companion_getInstance_4().get_Zero_6hc3i8_k$();
      } else {
        tmp_18 = tmp11_elvis_lhs;
      }
      var offset = IntOffset__plus_impl_nqoa9b(tmp_18, slideOffset);
      var tmp_20 = _IntSize___get_width__impl__d9yl4o(currentSize);
      var tmp_21 = _IntSize___get_height__impl__prv63b(currentSize);
      return _this__u8e3s4.layout$default_n19e5l_k$(tmp_20, tmp_21, VOID, EnterExitTransitionModifierNode$measure$lambda_4(placeable_0, offset, offsetDelta, layerBlock));
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.animation.EnterExitTransitionModifierNode.measure.<anonymous>' call
      var $this$run = measurable.measure_4dmfk1_k$(constraints);
      var tmp_22 = $this$run.get_width_j0q4yl_k$();
      var tmp_23 = $this$run.get_height_e7t92o_k$();
      return _this__u8e3s4.layout$default_n19e5l_k$(tmp_22, tmp_23, VOID, EnterExitTransitionModifierNode$measure$lambda_5($this$run));
    }
  };
  protoOf(EnterExitTransitionModifierNode).get_slideSpec_4nowbh_k$ = function () {
    return this.slideSpec_1;
  };
  protoOf(EnterExitTransitionModifierNode).slideTargetValueByState_dfs3rb_k$ = function (targetState, fullSize) {
    var tmp0_safe_receiver = this.enter_1.get_data_jntocg_k$().slide_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.slideOffset_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp_0 = tmp1_safe_receiver(new IntSize(fullSize));
      tmp = tmp_0 == null ? null : tmp_0.packedValue_1;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_1;
    var tmp_2 = tmp2_elvis_lhs;
    if ((tmp_2 == null ? null : new IntOffset(tmp_2)) == null) {
      tmp_1 = Companion_getInstance_4().get_Zero_6hc3i8_k$();
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var preEnter = tmp_1;
    var tmp3_safe_receiver = this.exit_1.get_data_jntocg_k$().slide_1;
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.slideOffset_1;
    var tmp_3;
    if (tmp4_safe_receiver == null) {
      tmp_3 = null;
    } else {
      var tmp_4 = tmp4_safe_receiver(new IntSize(fullSize));
      tmp_3 = tmp_4 == null ? null : tmp_4.packedValue_1;
    }
    var tmp5_elvis_lhs = tmp_3;
    var tmp_5;
    var tmp_6 = tmp5_elvis_lhs;
    if ((tmp_6 == null ? null : new IntOffset(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_4().get_Zero_6hc3i8_k$();
    } else {
      tmp_5 = tmp5_elvis_lhs;
    }
    var postExit = tmp_5;
    var tmp_7;
    switch (targetState.get_ordinal_ip24qg_k$()) {
      case 1:
        tmp_7 = Companion_getInstance_4().get_Zero_6hc3i8_k$();
        break;
      case 0:
        tmp_7 = preEnter;
        break;
      case 2:
        tmp_7 = postExit;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_7;
  };
  function shrinkHorizontally(animationSpec, shrinkTowards, clip, targetWidth) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold_0(Companion_getInstance_2()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_5().get_End_18ju7i_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetWidth === VOID) {
      tmp = shrinkHorizontally$lambda;
    } else {
      tmp = targetWidth;
    }
    targetWidth = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment(shrinkTowards);
    return shrinkOut(animationSpec, tmp_0, clip, shrinkHorizontally$lambda_0(targetWidth));
  }
  function expandHorizontally(animationSpec, expandFrom, clip, initialWidth) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold_0(Companion_getInstance_2()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_5().get_End_18ju7i_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialWidth === VOID) {
      tmp = expandHorizontally$lambda;
    } else {
      tmp = initialWidth;
    }
    initialWidth = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment(expandFrom);
    return expandIn(animationSpec, tmp_0, clip, expandHorizontally$lambda_0(initialWidth));
  }
  function expandVertically(animationSpec, expandFrom, clip, initialHeight) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold_0(Companion_getInstance_2()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_5().get_Bottom_3m75bg_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialHeight === VOID) {
      tmp = expandVertically$lambda;
    } else {
      tmp = initialHeight;
    }
    initialHeight = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment_0(expandFrom);
    return expandIn(animationSpec, tmp_0, clip, expandVertically$lambda_0(initialHeight));
  }
  function shrinkVertically(animationSpec, shrinkTowards, clip, targetHeight) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold_0(Companion_getInstance_2()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_5().get_Bottom_3m75bg_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetHeight === VOID) {
      tmp = shrinkVertically$lambda;
    } else {
      tmp = targetHeight;
    }
    targetHeight = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment_0(shrinkTowards);
    return shrinkOut(animationSpec, tmp_0, clip, shrinkVertically$lambda_0(targetHeight));
  }
  function shrinkOut(animationSpec, shrinkTowards, clip, targetSize) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold_0(Companion_getInstance_2()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_5().get_BottomEnd_ayz0tj_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetSize === VOID) {
      tmp = shrinkOut$lambda;
    } else {
      tmp = targetSize;
    }
    targetSize = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(shrinkTowards, targetSize, animationSpec, clip)));
  }
  function toAlignment(_this__u8e3s4) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return equals(_this__u8e3s4, Companion_getInstance_5().get_Start_ih4i6x_k$()) ? Companion_getInstance_5().get_CenterStart_2305fg_k$() : equals(_this__u8e3s4, Companion_getInstance_5().get_End_18ju7i_k$()) ? Companion_getInstance_5().get_CenterEnd_uti4xp_k$() : Companion_getInstance_5().get_Center_3arb0i_k$();
  }
  function expandIn(animationSpec, expandFrom, clip, initialSize) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold_0(Companion_getInstance_2()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_5().get_BottomEnd_ayz0tj_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialSize === VOID) {
      tmp = expandIn$lambda;
    } else {
      tmp = initialSize;
    }
    initialSize = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(expandFrom, initialSize, animationSpec, clip)));
  }
  function toAlignment_0(_this__u8e3s4) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return equals(_this__u8e3s4, Companion_getInstance_5().get_Top_18jj1w_k$()) ? Companion_getInstance_5().get_TopCenter_u4q5vl_k$() : equals(_this__u8e3s4, Companion_getInstance_5().get_Bottom_3m75bg_k$()) ? Companion_getInstance_5().get_BottomCenter_yatb1z_k$() : Companion_getInstance_5().get_Center_3arb0i_k$();
  }
  function sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).init_1xdsg_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, GraphicsLayerBlockForEnterExit) : false) {
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
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function trackActiveEnter$lambda($activeEnter$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('activeEnter', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $activeEnter$delegate.get_value_j01efc_k$();
  }
  function trackActiveEnter$lambda_0($activeEnter$delegate, value) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    getLocalDelegateReference('activeEnter', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $activeEnter$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function trackActiveExit$lambda($activeExit$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('activeExit', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $activeExit$delegate.get_value_j01efc_k$();
  }
  function trackActiveExit$lambda_0($activeExit$delegate, value) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    getLocalDelegateReference('activeExit', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $activeExit$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function TransformOriginVectorConverter$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new AnimationVector2D(_TransformOrigin___get_pivotFractionX__impl__a9pmci(it.packedValue_1), _TransformOrigin___get_pivotFractionY__impl__ijwupp(it.packedValue_1));
  }
  function TransformOriginVectorConverter$lambda_0(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new TransformOrigin(TransformOrigin_0(it.get_v1_kntnng_k$(), it.get_v2_kntnnf_k$()));
  }
  function createModifier$lambda() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return true;
  }
  function createModifier$lambda_0($disableClip, $isEnabled) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.set_clip_a88iug_k$(!$disableClip && $isEnabled._v());
      return Unit_getInstance();
    };
  }
  function createGraphicsLayerBlock$lambda$lambda($enter, $exit) {
    return function ($this$animate) {
      var tmp;
      if ($this$animate.isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = $enter.get_data_jntocg_k$().fade_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animationSpec_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp1_elvis_lhs;
      } else if ($this$animate.isTransitioningTo_mjamuk_k$(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = $exit.get_data_jntocg_k$().fade_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.animationSpec_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultAlphaAndScaleSpring();
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_0($enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.get_ordinal_ip24qg_k$()) {
        case 1:
          tmp = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.get_data_jntocg_k$().fade_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.alpha_1;
          tmp = tmp2_elvis_lhs == null ? 1.0 : tmp2_elvis_lhs;
          break;
        case 2:
          var tmp3_safe_receiver = $exit.get_data_jntocg_k$().fade_1;
          var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.alpha_1;
          tmp = tmp4_elvis_lhs == null ? 1.0 : tmp4_elvis_lhs;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_1($enter, $exit) {
    return function ($this$animate) {
      var tmp;
      if ($this$animate.isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animationSpec_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp1_elvis_lhs;
      } else if ($this$animate.isTransitioningTo_mjamuk_k$(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.animationSpec_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultAlphaAndScaleSpring();
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_2($enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.get_ordinal_ip24qg_k$()) {
        case 1:
          tmp = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.scale_1;
          tmp = tmp2_elvis_lhs == null ? 1.0 : tmp2_elvis_lhs;
          break;
        case 2:
          var tmp3_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
          var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.scale_1;
          tmp = tmp4_elvis_lhs == null ? 1.0 : tmp4_elvis_lhs;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_3($this$animate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return spring();
  }
  function createGraphicsLayerBlock$lambda$lambda_4($transformOriginWhenVisible, $enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.get_ordinal_ip24qg_k$()) {
        case 1:
          tmp = $transformOriginWhenVisible;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
          var tmp3_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.transformOrigin_1;
          var tmp_0;
          var tmp_1 = tmp3_elvis_lhs;
          if ((tmp_1 == null ? null : new TransformOrigin(tmp_1)) == null) {
            var tmp2_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
            tmp_0 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.transformOrigin_1;
          } else {
            tmp_0 = tmp3_elvis_lhs;
          }

          tmp = tmp_0;
          break;
        case 2:
          var tmp4_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
          var tmp6_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.transformOrigin_1;
          var tmp_2;
          var tmp_3 = tmp6_elvis_lhs;
          if ((tmp_3 == null ? null : new TransformOrigin(tmp_3)) == null) {
            var tmp5_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
            tmp_2 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.transformOrigin_1;
          } else {
            tmp_2 = tmp6_elvis_lhs;
          }

          tmp = tmp_2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp7_elvis_lhs = tmp;
      var tmp_4;
      var tmp_5 = tmp7_elvis_lhs;
      if ((tmp_5 == null ? null : new TransformOrigin(tmp_5)) == null) {
        tmp_4 = Companion_getInstance_6().get_Center_bvqaiy_k$();
      } else {
        tmp_4 = tmp7_elvis_lhs;
      }
      return new TransformOrigin(tmp_4);
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_5($alpha, $scale, $transformOrigin) {
    return function ($this$null) {
      var tmp0_safe_receiver = $alpha;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_value_j01efc_k$();
      $this$null.set_alpha_tvzcqh_k$(tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs);
      var tmp2_safe_receiver = $scale;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_value_j01efc_k$();
      $this$null.set_scaleX_ykjjzx_k$(tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs);
      var tmp4_safe_receiver = $scale;
      var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.get_value_j01efc_k$();
      $this$null.set_scaleY_i4eqp0_k$(tmp5_elvis_lhs == null ? 1.0 : tmp5_elvis_lhs);
      var tmp6_safe_receiver = $transformOrigin;
      var tmp;
      if (tmp6_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = tmp6_safe_receiver.get_value_j01efc_k$();
        tmp = tmp_0 == null ? null : tmp_0.packedValue_1;
      }
      var tmp7_elvis_lhs = tmp;
      var tmp_1;
      var tmp_2 = tmp7_elvis_lhs;
      if ((tmp_2 == null ? null : new TransformOrigin(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_6().get_Center_bvqaiy_k$();
      } else {
        tmp_1 = tmp7_elvis_lhs;
      }
      $this$null.set_transformOrigin_wfji5_k$(tmp_1);
      return Unit_getInstance();
    };
  }
  function createGraphicsLayerBlock$lambda($alphaAnimation, $scaleAnimation, $this_createGraphicsLayerBlock, $enter, $exit, $transformOriginAnimation) {
    return function () {
      var tmp0_safe_receiver = $alphaAnimation;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = createGraphicsLayerBlock$lambda$lambda($enter, $exit);
        tmp = tmp0_safe_receiver.animate_lt3uhv_k$(tmp_0, createGraphicsLayerBlock$lambda$lambda_0($enter, $exit));
      }
      var alpha = tmp;
      var tmp1_safe_receiver = $scaleAnimation;
      var tmp_1;
      if (tmp1_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp_2 = createGraphicsLayerBlock$lambda$lambda_1($enter, $exit);
        tmp_1 = tmp1_safe_receiver.animate_lt3uhv_k$(tmp_2, createGraphicsLayerBlock$lambda$lambda_2($enter, $exit));
      }
      var scale = tmp_1;
      var tmp_3;
      if ($this_createGraphicsLayerBlock.get_currentState_snihnl_k$().equals(EnterExitState_PreEnter_getInstance())) {
        var tmp2_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
        var tmp4_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.transformOrigin_1;
        var tmp_4;
        var tmp_5 = tmp4_elvis_lhs;
        if ((tmp_5 == null ? null : new TransformOrigin(tmp_5)) == null) {
          var tmp3_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
          tmp_4 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.transformOrigin_1;
        } else {
          tmp_4 = tmp4_elvis_lhs;
        }
        tmp_3 = tmp_4;
      } else {
        var tmp5_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
        var tmp7_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.transformOrigin_1;
        var tmp_6;
        var tmp_7 = tmp7_elvis_lhs;
        if ((tmp_7 == null ? null : new TransformOrigin(tmp_7)) == null) {
          var tmp6_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
          tmp_6 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.transformOrigin_1;
        } else {
          tmp_6 = tmp7_elvis_lhs;
        }
        tmp_3 = tmp_6;
      }
      var transformOriginWhenVisible = tmp_3;
      var tmp8_safe_receiver = $transformOriginAnimation;
      var tmp_8;
      if (tmp8_safe_receiver == null) {
        tmp_8 = null;
      } else {
        var tmp_9 = createGraphicsLayerBlock$lambda$lambda_3;
        tmp_8 = tmp8_safe_receiver.animate_lt3uhv_k$(tmp_9, createGraphicsLayerBlock$lambda$lambda_4(transformOriginWhenVisible, $enter, $exit));
      }
      var transformOrigin = tmp_8;
      var block = createGraphicsLayerBlock$lambda$lambda_5(alpha, scale, transformOrigin);
      return block;
    };
  }
  function shrinkHorizontally$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function shrinkHorizontally$lambda_0($targetWidth) {
    return function (it) {
      return new IntSize(IntSize_0($targetWidth(_IntSize___get_width__impl__d9yl4o(it.packedValue_1)), _IntSize___get_height__impl__prv63b(it.packedValue_1)));
    };
  }
  function expandHorizontally$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function expandHorizontally$lambda_0($initialWidth) {
    return function (it) {
      return new IntSize(IntSize_0($initialWidth(_IntSize___get_width__impl__d9yl4o(it.packedValue_1)), _IntSize___get_height__impl__prv63b(it.packedValue_1)));
    };
  }
  function expandVertically$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function expandVertically$lambda_0($initialHeight) {
    return function (it) {
      return new IntSize(IntSize_0(_IntSize___get_width__impl__d9yl4o(it.packedValue_1), $initialHeight(_IntSize___get_height__impl__prv63b(it.packedValue_1))));
    };
  }
  function shrinkVertically$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function shrinkVertically$lambda_0($targetHeight) {
    return function (it) {
      return new IntSize(IntSize_0(_IntSize___get_width__impl__d9yl4o(it.packedValue_1), $targetHeight(_IntSize___get_height__impl__prv63b(it.packedValue_1))));
    };
  }
  function shrinkOut$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new IntSize(IntSize_0(0, 0));
  }
  function expandIn$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new IntSize(IntSize_0(0, 0));
  }
  var properties_initialized_EnterExitTransition_kt_te1nvp;
  function _init_properties_EnterExitTransition_kt__2obrqf() {
    if (!properties_initialized_EnterExitTransition_kt_te1nvp) {
      properties_initialized_EnterExitTransition_kt_te1nvp = true;
      var tmp = TransformOriginVectorConverter$lambda;
      TransformOriginVectorConverter = TwoWayConverter(tmp, TransformOriginVectorConverter$lambda_0);
      DefaultAlphaAndScaleSpring = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$());
      DefaultOffsetAnimationSpec = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntOffset(get_VisibilityThreshold_1(Companion_getInstance_4())));
      DefaultSizeAnimationSpec = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold_0(Companion_getInstance_2())));
    }
  }
  function ExperimentalSharedTransitionApi() {
  }
  protoOf(ExperimentalSharedTransitionApi).equals = function (other) {
    if (!(other instanceof ExperimentalSharedTransitionApi))
      return false;
    other instanceof ExperimentalSharedTransitionApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalSharedTransitionApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalSharedTransitionApi).toString = function () {
    return '@androidx.compose.animation.ExperimentalSharedTransitionApi(' + ')';
  };
  function get_DecelerationRate() {
    _init_properties_FlingCalculator_kt__ornu7o();
    return DecelerationRate;
  }
  var DecelerationRate;
  function _get_friction__4dx5ox($this) {
    return $this.friction_1;
  }
  function _get_magicPhysicalCoefficient__7ixkai($this) {
    return $this.magicPhysicalCoefficient_1;
  }
  function computeDeceleration($this, density) {
    return computeDeceleration_0(0.84, density.get_density_qy0267_k$());
  }
  function getSplineDeceleration($this, velocity) {
    return AndroidFlingSpline_getInstance().deceleration_7lhbmp_k$(velocity, $this.friction_1 * $this.magicPhysicalCoefficient_1);
  }
  function FlingInfo(initialVelocity, distance, duration) {
    this.initialVelocity_1 = initialVelocity;
    this.distance_1 = distance;
    this.duration_1 = duration;
  }
  protoOf(FlingInfo).get_initialVelocity_xnobx4_k$ = function () {
    return this.initialVelocity_1;
  };
  protoOf(FlingInfo).get_distance_r171oi_k$ = function () {
    return this.distance_1;
  };
  protoOf(FlingInfo).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(FlingInfo).position_oaxlut_k$ = function (time) {
    var tmp;
    if (this.duration_1.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.div' call
      var other = this.duration_1.toFloat_jhbgwv_k$();
      tmp = time.toFloat_jhbgwv_k$() / other;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    // Inline function 'kotlin.math.sign' call
    var x = this.initialVelocity_1;
    var tmp$ret$1 = sign(x);
    return this.distance_1 * tmp$ret$1 * AndroidFlingSpline_getInstance().flingPosition_kqyylv_k$(splinePos).get_distanceCoefficient_3vhbop_k$();
  };
  protoOf(FlingInfo).velocity_2zfv01_k$ = function (time) {
    var tmp;
    if (this.duration_1.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.div' call
      var other = this.duration_1.toFloat_jhbgwv_k$();
      tmp = time.toFloat_jhbgwv_k$() / other;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    var tmp_0 = AndroidFlingSpline_getInstance().flingPosition_kqyylv_k$(splinePos).get_velocityCoefficient_w8qjlb_k$();
    // Inline function 'kotlin.math.sign' call
    var x = this.initialVelocity_1;
    return tmp_0 * sign(x) * this.distance_1 / this.duration_1.toFloat_jhbgwv_k$() * 1000.0;
  };
  protoOf(FlingInfo).component1_7eebsc_k$ = function () {
    return this.initialVelocity_1;
  };
  protoOf(FlingInfo).component2_7eebsb_k$ = function () {
    return this.distance_1;
  };
  protoOf(FlingInfo).component3_7eebsa_k$ = function () {
    return this.duration_1;
  };
  protoOf(FlingInfo).copy_g5ll21_k$ = function (initialVelocity, distance, duration) {
    return new FlingInfo(initialVelocity, distance, duration);
  };
  protoOf(FlingInfo).copy$default_w0uq4e_k$ = function (initialVelocity, distance, duration, $super) {
    initialVelocity = initialVelocity === VOID ? this.initialVelocity_1 : initialVelocity;
    distance = distance === VOID ? this.distance_1 : distance;
    duration = duration === VOID ? this.duration_1 : duration;
    return $super === VOID ? this.copy_g5ll21_k$(initialVelocity, distance, duration) : $super.copy_g5ll21_k$.call(this, initialVelocity, distance, duration);
  };
  protoOf(FlingInfo).toString = function () {
    return 'FlingInfo(initialVelocity=' + this.initialVelocity_1 + ', distance=' + this.distance_1 + ', duration=' + this.duration_1.toString() + ')';
  };
  protoOf(FlingInfo).hashCode = function () {
    var result = getNumberHashCode(this.initialVelocity_1);
    result = imul(result, 31) + getNumberHashCode(this.distance_1) | 0;
    result = imul(result, 31) + this.duration_1.hashCode() | 0;
    return result;
  };
  protoOf(FlingInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingInfo))
      return false;
    var tmp0_other_with_cast = other instanceof FlingInfo ? other : THROW_CCE();
    if (!equals(this.initialVelocity_1, tmp0_other_with_cast.initialVelocity_1))
      return false;
    if (!equals(this.distance_1, tmp0_other_with_cast.distance_1))
      return false;
    if (!this.duration_1.equals(tmp0_other_with_cast.duration_1))
      return false;
    return true;
  };
  function FlingCalculator(friction, density) {
    this.friction_1 = friction;
    this.density_1 = density;
    this.magicPhysicalCoefficient_1 = computeDeceleration(this, this.density_1);
  }
  protoOf(FlingCalculator).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(FlingCalculator).flingDuration_g3t3l4_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    // Inline function 'kotlin.math.exp' call
    var x = l / decelMinusOne;
    var tmp$ret$0 = Math.exp(x);
    return numberToLong(1000.0 * tmp$ret$0);
  };
  protoOf(FlingCalculator).flingDistance_e8js0p_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.friction_1 * this.magicPhysicalCoefficient_1;
    // Inline function 'kotlin.math.exp' call
    var x = get_DecelerationRate() / decelMinusOne * l;
    return tmp * Math.exp(x);
  };
  protoOf(FlingCalculator).flingInfo_sr0d1q_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.friction_1 * this.magicPhysicalCoefficient_1;
    // Inline function 'kotlin.math.exp' call
    var x = get_DecelerationRate() / decelMinusOne * l;
    var tmp_0 = tmp * Math.exp(x);
    // Inline function 'kotlin.math.exp' call
    var x_0 = l / decelMinusOne;
    var tmp$ret$1 = Math.exp(x_0);
    return new FlingInfo(velocity, tmp_0, numberToLong(1000.0 * tmp$ret$1));
  };
  function computeDeceleration_0(friction, density) {
    _init_properties_FlingCalculator_kt__ornu7o();
    return 9.80665 * 39.37 * density * 160.0 * friction;
  }
  function get_InchesPerMeter() {
    return InchesPerMeter;
  }
  var InchesPerMeter;
  function get_GravityEarth() {
    return GravityEarth;
  }
  var GravityEarth;
  var properties_initialized_FlingCalculator_kt_aw7aky;
  function _init_properties_FlingCalculator_kt__ornu7o() {
    if (!properties_initialized_FlingCalculator_kt_aw7aky) {
      properties_initialized_FlingCalculator_kt_aw7aky = true;
      // Inline function 'kotlin.math.ln' call
      var tmp = Math.log(0.78);
      // Inline function 'kotlin.math.ln' call
      DecelerationRate = tmp / Math.log(0.9);
    }
  }
  function RenderInTransitionOverlayNodeElement(sharedTransitionScope, renderInOverlay, zIndexInOverlay, clipInOverlay) {
    ModifierNodeElement.call(this);
    this.sharedTransitionScope_1 = sharedTransitionScope;
    this.renderInOverlay_1 = renderInOverlay;
    this.zIndexInOverlay_1 = zIndexInOverlay;
    this.clipInOverlay_1 = clipInOverlay;
  }
  protoOf(RenderInTransitionOverlayNodeElement).set_sharedTransitionScope_jrj0tv_k$ = function (_set____db54di) {
    this.sharedTransitionScope_1 = _set____db54di;
  };
  protoOf(RenderInTransitionOverlayNodeElement).get_sharedTransitionScope_rd4vgv_k$ = function () {
    return this.sharedTransitionScope_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).set_renderInOverlay_apxsrl_k$ = function (_set____db54di) {
    this.renderInOverlay_1 = _set____db54di;
  };
  protoOf(RenderInTransitionOverlayNodeElement).get_renderInOverlay_hmdu9g_k$ = function () {
    return this.renderInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).get_zIndexInOverlay_tqowly_k$ = function () {
    return this.zIndexInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).get_clipInOverlay_wmsm36_k$ = function () {
    return this.clipInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).create_md4cuc_k$ = function () {
    return new RenderInTransitionOverlayNode(this.sharedTransitionScope_1, this.renderInOverlay_1, this.zIndexInOverlay_1, this.clipInOverlay_1);
  };
  protoOf(RenderInTransitionOverlayNodeElement).update_fzx51w_k$ = function (node) {
    node.sharedScope_1 = this.sharedTransitionScope_1;
    node.renderInOverlay_1 = this.renderInOverlay_1;
    node.set_zIndexInOverlay_d3b21a_k$(this.zIndexInOverlay_1);
    node.clipInOverlay_1 = this.clipInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).update_9wd57p_k$ = function (node) {
    return this.update_fzx51w_k$(node instanceof RenderInTransitionOverlayNode ? node : THROW_CCE());
  };
  protoOf(RenderInTransitionOverlayNodeElement).hashCode = function () {
    return imul(imul(imul(hashCode(this.sharedTransitionScope_1), 31) + hashCode(this.renderInOverlay_1) | 0, 31) + getNumberHashCode(this.zIndexInOverlay_1) | 0, 31) + hashCode(this.clipInOverlay_1) | 0;
  };
  protoOf(RenderInTransitionOverlayNodeElement).equals = function (other) {
    if (other instanceof RenderInTransitionOverlayNodeElement) {
      return equals(this.sharedTransitionScope_1, other.sharedTransitionScope_1) && this.renderInOverlay_1 === other.renderInOverlay_1 && this.zIndexInOverlay_1 === other.zIndexInOverlay_1 && this.clipInOverlay_1 === other.clipInOverlay_1;
    }
    return false;
  };
  protoOf(RenderInTransitionOverlayNodeElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('renderInSharedTransitionOverlay');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('sharedTransitionScope', this.sharedTransitionScope_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('renderInOverlay', this.renderInOverlay_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('zIndexInOverlay', this.zIndexInOverlay_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('clipInOverlayDuringTransition', this.clipInOverlay_1);
  };
  protoOf(RenderInTransitionOverlayNodeElement).component1_7eebsc_k$ = function () {
    return this.sharedTransitionScope_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).component2_7eebsb_k$ = function () {
    return this.renderInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).component3_7eebsa_k$ = function () {
    return this.zIndexInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).component4_7eebs9_k$ = function () {
    return this.clipInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).copy_s8dosh_k$ = function (sharedTransitionScope, renderInOverlay, zIndexInOverlay, clipInOverlay) {
    return new RenderInTransitionOverlayNodeElement(sharedTransitionScope, renderInOverlay, zIndexInOverlay, clipInOverlay);
  };
  protoOf(RenderInTransitionOverlayNodeElement).copy$default_dvz0wi_k$ = function (sharedTransitionScope, renderInOverlay, zIndexInOverlay, clipInOverlay, $super) {
    sharedTransitionScope = sharedTransitionScope === VOID ? this.sharedTransitionScope_1 : sharedTransitionScope;
    renderInOverlay = renderInOverlay === VOID ? this.renderInOverlay_1 : renderInOverlay;
    zIndexInOverlay = zIndexInOverlay === VOID ? this.zIndexInOverlay_1 : zIndexInOverlay;
    clipInOverlay = clipInOverlay === VOID ? this.clipInOverlay_1 : clipInOverlay;
    return $super === VOID ? this.copy_s8dosh_k$(sharedTransitionScope, renderInOverlay, zIndexInOverlay, clipInOverlay) : $super.copy_s8dosh_k$.call(this, sharedTransitionScope, renderInOverlay, zIndexInOverlay, clipInOverlay);
  };
  protoOf(RenderInTransitionOverlayNodeElement).toString = function () {
    return 'RenderInTransitionOverlayNodeElement(sharedTransitionScope=' + toString(this.sharedTransitionScope_1) + ', renderInOverlay=' + toString(this.renderInOverlay_1) + ', zIndexInOverlay=' + this.zIndexInOverlay_1 + ', clipInOverlay=' + toString(this.clipInOverlay_1) + ')';
  };
  function LayerWithRenderer($outer, layer) {
    this.$this_1 = $outer;
    this.layer_1 = layer;
  }
  protoOf(LayerWithRenderer).get_layer_iujprc_k$ = function () {
    return this.layer_1;
  };
  protoOf(LayerWithRenderer).get_parentState_ui10gu_k$ = function () {
    return this.$this_1.get_parentState_ui10gu_k$();
  };
  protoOf(LayerWithRenderer).get_zIndex_mbbc75_k$ = function () {
    return this.$this_1.get_zIndexInOverlay_tqowly_k$();
  };
  protoOf(LayerWithRenderer).drawInOverlay_ircoes_k$ = function (drawScope) {
    if (this.$this_1.renderInOverlay_1()) {
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.animation.LayerWithRenderer.drawInOverlay.<anonymous>' call
      var tmp0_container = this.$this_1.sharedScope_1.get_root_4w1woo_k$().localPositionOf_hrey0l_k$(requireLayoutCoordinates(this.$this_1), Companion_getInstance_7().get_Zero_k6n73t_k$());
      // Inline function 'androidx.compose.ui.geometry.Offset.component1' call
      var x = _Offset___get_x__impl__xvi35n(tmp0_container);
      // Inline function 'androidx.compose.ui.geometry.Offset.component2' call
      var y = _Offset___get_y__impl__8bzhra(tmp0_container);
      var clipPath = this.$this_1.clipInOverlay_1(drawScope.get_layoutDirection_7e37v0_k$(), requireDensity(this.$this_1));
      if (!(clipPath == null)) {
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipPath' call
        var clipOp = Companion_getInstance_8().get_Intersect_gpxc6n_k$();
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform.<anonymous>' call
        var $this$with = drawScope.get_drawContext_ffwztu_k$();
        var previousSize = $this$with.get_size_cxx1ym_k$();
        $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
        try {
          // Inline function 'androidx.compose.ui.graphics.drawscope.clipPath.<anonymous>' call
          $this$with.get_transform_px941v_k$().clipPath_tlqunt_k$(clipPath, clipOp);
          // Inline function 'androidx.compose.animation.LayerWithRenderer.drawInOverlay.<anonymous>.<anonymous>' call
          // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
          drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(x, y);
          try {
            // Inline function 'androidx.compose.animation.LayerWithRenderer.drawInOverlay.<anonymous>.<anonymous>.<anonymous>' call
            drawLayer(drawScope, this.layer_1);
          }finally {
            drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-x, -y);
          }
        }finally {
          $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
          $this$with.set_size_6a0e6q_k$(previousSize);
        }
      } else {
        // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
        drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(x, y);
        try {
          // Inline function 'androidx.compose.animation.LayerWithRenderer.drawInOverlay.<anonymous>.<anonymous>' call
          drawLayer(drawScope, this.layer_1);
        }finally {
          drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-x, -y);
        }
      }
    }
  };
  function _set_layerWithRenderer__a4xuol($this, _set____db54di) {
    $this.layerWithRenderer_1 = _set____db54di;
  }
  function _get_layerWithRenderer__vuqqyx($this) {
    return $this.layerWithRenderer_1;
  }
  function RenderInTransitionOverlayNode$draw$lambda($this_draw) {
    return function ($this$record) {
      $this_draw.drawContent_m0wwjp_k$();
      return Unit_getInstance();
    };
  }
  function RenderInTransitionOverlayNode(sharedScope, renderInOverlay, zIndexInOverlay, clipInOverlay) {
    Node.call(this);
    this.sharedScope_1 = sharedScope;
    this.renderInOverlay_1 = renderInOverlay;
    this.clipInOverlay_1 = clipInOverlay;
    this.zIndexInOverlay$delegate_1 = mutableFloatStateOf(zIndexInOverlay);
    this.layerWithRenderer_1 = null;
  }
  protoOf(RenderInTransitionOverlayNode).set_sharedScope_5efco2_k$ = function (_set____db54di) {
    this.sharedScope_1 = _set____db54di;
  };
  protoOf(RenderInTransitionOverlayNode).get_sharedScope_mhvhxi_k$ = function () {
    return this.sharedScope_1;
  };
  protoOf(RenderInTransitionOverlayNode).set_renderInOverlay_apxsrl_k$ = function (_set____db54di) {
    this.renderInOverlay_1 = _set____db54di;
  };
  protoOf(RenderInTransitionOverlayNode).get_renderInOverlay_hmdu9g_k$ = function () {
    return this.renderInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNode).set_clipInOverlay_tbgatf_k$ = function (_set____db54di) {
    this.clipInOverlay_1 = _set____db54di;
  };
  protoOf(RenderInTransitionOverlayNode).get_clipInOverlay_wmsm36_k$ = function () {
    return this.clipInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNode).set_zIndexInOverlay_d3b21a_k$ = function (_set____db54di) {
    var tmp0 = this.zIndexInOverlay$delegate_1;
    zIndexInOverlay$factory();
    tmp0.set_floatValue_qaujgq_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(RenderInTransitionOverlayNode).get_zIndexInOverlay_tqowly_k$ = function () {
    var tmp0 = this.zIndexInOverlay$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    zIndexInOverlay$factory_0();
    return tmp0.get_floatValue_xw60ou_k$();
  };
  protoOf(RenderInTransitionOverlayNode).get_parentState_ui10gu_k$ = function () {
    return this.get_current_2exe6q_k$(get_ModifierLocalSharedElementInternalState());
  };
  protoOf(RenderInTransitionOverlayNode).draw_2h95cs_k$ = function (_this__u8e3s4) {
    var tmp0 = this.get_layer_iujprc_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.compose.animation.RenderInTransitionOverlayNode.draw.<anonymous>' call
        var message = 'Error: layer never initialized';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var layer = tmp$ret$1;
    _this__u8e3s4.record$default_m64s38_k$(layer, VOID, RenderInTransitionOverlayNode$draw$lambda(_this__u8e3s4));
    if (!this.renderInOverlay_1()) {
      drawLayer(_this__u8e3s4, layer);
    }
  };
  protoOf(RenderInTransitionOverlayNode).get_layer_iujprc_k$ = function () {
    var tmp0_safe_receiver = this.layerWithRenderer_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.layer_1;
  };
  protoOf(RenderInTransitionOverlayNode).onAttach_juzy2c_k$ = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.animation.RenderInTransitionOverlayNode.onAttach.<anonymous>' call
    var it = new LayerWithRenderer(this, requireGraphicsContext(this).createGraphicsLayer_a0ja3u_k$());
    this.sharedScope_1.onLayerRendererCreated_lwx1jm_k$(it);
    this.layerWithRenderer_1 = it;
  };
  protoOf(RenderInTransitionOverlayNode).onDetach_8dig02_k$ = function () {
    var tmp0_safe_receiver = this.layerWithRenderer_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.animation.RenderInTransitionOverlayNode.onDetach.<anonymous>' call
      this.sharedScope_1.onLayerRendererRemoved_bn3slm_k$(tmp0_safe_receiver);
      requireGraphicsContext(this).releaseGraphicsLayer_8n1d07_k$(tmp0_safe_receiver.layer_1);
    }
  };
  function zIndexInOverlay$factory() {
    return getPropertyCallableRef('zIndexInOverlay', 1, KMutableProperty1, function (receiver) {
      return receiver.get_zIndexInOverlay_tqowly_k$();
    }, function (receiver, value) {
      return receiver.set_zIndexInOverlay_d3b21a_k$(value);
    });
  }
  function zIndexInOverlay$factory_0() {
    return getPropertyCallableRef('zIndexInOverlay', 1, KMutableProperty1, function (receiver) {
      return receiver.get_zIndexInOverlay_tqowly_k$();
    }, function (receiver, value) {
      return receiver.set_zIndexInOverlay_d3b21a_k$(value);
    });
  }
  function get_ModifierLocalSharedElementInternalState() {
    _init_properties_SharedContentNode_kt__22dkzo();
    return ModifierLocalSharedElementInternalState;
  }
  var ModifierLocalSharedElementInternalState;
  function SharedBoundsNodeElement(sharedElementState) {
    ModifierNodeElement.call(this);
    this.sharedElementState_1 = sharedElementState;
  }
  protoOf(SharedBoundsNodeElement).get_sharedElementState_80iykj_k$ = function () {
    return this.sharedElementState_1;
  };
  protoOf(SharedBoundsNodeElement).create_md4cuc_k$ = function () {
    return new SharedBoundsNode(this.sharedElementState_1);
  };
  protoOf(SharedBoundsNodeElement).update_p7rb1u_k$ = function (node) {
    node.set_state_jymqa0_k$(this.sharedElementState_1);
  };
  protoOf(SharedBoundsNodeElement).update_9wd57p_k$ = function (node) {
    return this.update_p7rb1u_k$(node instanceof SharedBoundsNode ? node : THROW_CCE());
  };
  protoOf(SharedBoundsNodeElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('sharedBounds');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('sharedElementState', this.sharedElementState_1);
  };
  protoOf(SharedBoundsNodeElement).component1_7eebsc_k$ = function () {
    return this.sharedElementState_1;
  };
  protoOf(SharedBoundsNodeElement).copy_hv5xmq_k$ = function (sharedElementState) {
    return new SharedBoundsNodeElement(sharedElementState);
  };
  protoOf(SharedBoundsNodeElement).copy$default_oq26km_k$ = function (sharedElementState, $super) {
    sharedElementState = sharedElementState === VOID ? this.sharedElementState_1 : sharedElementState;
    return $super === VOID ? this.copy_hv5xmq_k$(sharedElementState) : $super.copy_hv5xmq_k$.call(this, sharedElementState);
  };
  protoOf(SharedBoundsNodeElement).toString = function () {
    return 'SharedBoundsNodeElement(sharedElementState=' + toString(this.sharedElementState_1) + ')';
  };
  protoOf(SharedBoundsNodeElement).hashCode = function () {
    return hashCode(this.sharedElementState_1);
  };
  protoOf(SharedBoundsNodeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SharedBoundsNodeElement))
      return false;
    var tmp0_other_with_cast = other instanceof SharedBoundsNodeElement ? other : THROW_CCE();
    if (!equals(this.sharedElementState_1, tmp0_other_with_cast.sharedElementState_1))
      return false;
    return true;
  };
  function _get_rootCoords__hhtj4l($this) {
    return _get_sharedElement__nuo62($this).get_scope_iyfcq3_k$().get_root_4w1woo_k$();
  }
  function _get_rootLookaheadCoords__qqsfxp($this) {
    return _get_sharedElement__nuo62($this).get_scope_iyfcq3_k$().get_lookaheadRoot_u3i6mw_k$();
  }
  function requireLookaheadLayoutCoordinates($this) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.animation.SharedBoundsNode.requireLookaheadLayoutCoordinates.<anonymous>' call
    return $this.state_1.get_sharedElement_xjw30y_k$().get_scope_iyfcq3_k$().toLookaheadCoordinates_1gvv32_k$(requireLayoutCoordinates($this));
  }
  function _get_boundsAnimation__ff0bi($this) {
    return $this.state_1.get_boundsAnimation_bx9g2i_k$();
  }
  function _set_layer__h6sopg($this, value) {
    if (value == null) {
      var tmp0_safe_receiver = $this.layer_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.animation.SharedBoundsNode.<set-layer>.<anonymous>' call
        requireGraphicsContext($this).releaseGraphicsLayer_8n1d07_k$(tmp0_safe_receiver);
      }
    } else {
      $this.state_1.set_layer_t4w1t1_k$(value);
    }
    $this.layer_1 = value;
  }
  function _get_layer__eubrs0($this) {
    return $this.layer_1;
  }
  function _get_sharedElement__nuo62($this) {
    return $this.state_1.get_sharedElement_xjw30y_k$();
  }
  function place(_this__u8e3s4, $this, placeable) {
    var tmp0_container = $this.state_1.get_placeHolderSize_umjxaj_k$().calculateSize_sx87iu_k$(requireLookaheadLayoutCoordinates($this).get_size_kd98kr_k$(), IntSize_0(placeable.get_width_j0q4yl_k$(), placeable.get_height_e7t92o_k$()));
    // Inline function 'androidx.compose.ui.unit.IntSize.component1' call
    var w = _IntSize___get_width__impl__d9yl4o(tmp0_container);
    // Inline function 'androidx.compose.ui.unit.IntSize.component2' call
    var h = _IntSize___get_height__impl__prv63b(tmp0_container);
    return _this__u8e3s4.layout$default_n19e5l_k$(w, h, VOID, SharedBoundsNode$place$lambda($this, placeable));
  }
  function updateCurrentBounds(_this__u8e3s4, $this) {
    _get_sharedElement__nuo62($this).set_currentBounds_f3zfw1_k$(Rect(_get_rootCoords__hhtj4l($this).localPositionOf_hrey0l_k$(_this__u8e3s4, Companion_getInstance_7().get_Zero_k6n73t_k$()), Size(_IntSize___get_width__impl__d9yl4o(_this__u8e3s4.get_size_kd98kr_k$()), _IntSize___get_height__impl__prv63b(_this__u8e3s4.get_size_kd98kr_k$()))));
  }
  function SharedBoundsNode$_set_state_$lambda_qnmiyn(this$0) {
    return function () {
      return requireLookaheadLayoutCoordinates(this$0);
    };
  }
  function SharedBoundsNode$onAttach$lambda(this$0) {
    return function () {
      return requireLookaheadLayoutCoordinates(this$0);
    };
  }
  function SharedBoundsNode$onDetach$lambda() {
    return null;
  }
  function SharedBoundsNode$measure$lambda(this$0, $lookaheadSize, $placeable) {
    return function ($this$layout) {
      var tmp0_safe_receiver = $this$layout.get_coordinates_q6f2pa_k$();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.animation.SharedBoundsNode.measure.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_0 = new Offset(_get_rootLookaheadCoords__qqsfxp(this$0).localPositionOf_hrey0l_k$(tmp0_safe_receiver, Companion_getInstance_7().get_Zero_k6n73t_k$()));
        // Inline function 'androidx.compose.animation.SharedBoundsNode.measure.<anonymous>.<anonymous>.<anonymous>' call
        var topLeft = this_0.packedValue_1;
        if (_get_sharedElement__nuo62(this$0).get_currentBounds_rrenad_k$() == null) {
          _get_sharedElement__nuo62(this$0).set_currentBounds_f3zfw1_k$(Rect(topLeft, $lookaheadSize));
        }
        tmp = this_0.packedValue_1;
      }
      var topLeft_0 = tmp;
      $this$layout.place$default_lcv1ed_k$($placeable, 0, 0);
      var tmp_0 = topLeft_0;
      if ((tmp_0 == null ? null : new Offset(tmp_0)) == null)
        null;
      else {
        var tmp_1 = topLeft_0;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.animation.SharedBoundsNode.measure.<anonymous>.<anonymous>' call
        var it = (tmp_1 == null ? null : new Offset(tmp_1)).packedValue_1;
        _get_sharedElement__nuo62(this$0).onLookaheadResult_wuti39_k$(this$0.state_1, $lookaheadSize, it);
      }
      return Unit_getInstance();
    };
  }
  function SharedBoundsNode$place$lambda(this$0, $placeable) {
    return function ($this$layout) {
      var tmp;
      if (!_get_sharedElement__nuo62(this$0).get_foundMatch_g4mbjg_k$()) {
        var tmp0_safe_receiver = $this$layout.get_coordinates_q6f2pa_k$();
        if (tmp0_safe_receiver == null)
          null;
        else {
          updateCurrentBounds(tmp0_safe_receiver, this$0);
        }
        $this$layout.place$default_lcv1ed_k$($placeable, 0, 0);
        tmp = Unit_getInstance();
      } else {
        if (!(_get_sharedElement__nuo62(this$0).get_targetBounds_ciqj9t_k$() == null)) {
          _get_boundsAnimation__ff0bi(this$0).animate_s3upvz_k$(ensureNotNull(_get_sharedElement__nuo62(this$0).get_currentBounds_rrenad_k$()), ensureNotNull(_get_sharedElement__nuo62(this$0).get_targetBounds_ciqj9t_k$()));
        }
        var animatedBounds = _get_boundsAnimation__ff0bi(this$0).get_value_j01efc_k$();
        var tmp1_safe_receiver = $this$layout.get_coordinates_q6f2pa_k$();
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.animation.SharedBoundsNode.place.<anonymous>.<anonymous>' call
          tmp_0 = _get_rootCoords__hhtj4l(this$0).localPositionOf_hrey0l_k$(tmp1_safe_receiver, Companion_getInstance_7().get_Zero_k6n73t_k$());
        }
        var positionInScope = tmp_0;
        var topLeft;
        if (!(animatedBounds == null)) {
          if (_get_boundsAnimation__ff0bi(this$0).get_target_juba8q_k$()) {
            _get_sharedElement__nuo62(this$0).set_currentBounds_f3zfw1_k$(animatedBounds);
          }
          topLeft = animatedBounds.get_topLeft_ypvrd5_k$();
        } else {
          if (_get_boundsAnimation__ff0bi(this$0).get_target_juba8q_k$()) {
            var tmp2_safe_receiver = $this$layout.get_coordinates_q6f2pa_k$();
            if (tmp2_safe_receiver == null)
              null;
            else {
              updateCurrentBounds(tmp2_safe_receiver, this$0);
            }
          }
          topLeft = ensureNotNull(_get_sharedElement__nuo62(this$0).get_currentBounds_rrenad_k$()).get_topLeft_ypvrd5_k$();
        }
        var tmp_1;
        var tmp_2 = positionInScope;
        if ((tmp_2 == null ? null : new Offset(tmp_2)) == null) {
          tmp_1 = null;
        } else {
          var tmp_3 = positionInScope;
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.animation.SharedBoundsNode.place.<anonymous>.<anonymous>' call
          var it = (tmp_3 == null ? null : new Offset(tmp_3)).packedValue_1;
          tmp_1 = Offset__minus_impl_hoj2c0(topLeft, it);
        }
        var tmp4_elvis_lhs = tmp_1;
        var tmp_4;
        var tmp_5 = tmp4_elvis_lhs;
        if ((tmp_5 == null ? null : new Offset(tmp_5)) == null) {
          tmp_4 = Companion_getInstance_7().get_Zero_k6n73t_k$();
        } else {
          tmp_4 = tmp4_elvis_lhs;
        }
        var tmp5_container = tmp_4;
        // Inline function 'androidx.compose.ui.geometry.Offset.component1' call
        var x = _Offset___get_x__impl__xvi35n(tmp5_container);
        // Inline function 'androidx.compose.ui.geometry.Offset.component2' call
        var y = _Offset___get_y__impl__8bzhra(tmp5_container);
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var tmp_6 = roundToInt(x);
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var tmp$ret$9 = roundToInt(y);
        $this$layout.place$default_lcv1ed_k$($placeable, tmp_6, tmp$ret$9);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SharedBoundsNode$draw$lambda($this_draw, this$0) {
    return function ($this$record) {
      $this_draw.drawContent_m0wwjp_k$();
      var tmp;
      if (false && _get_sharedElement__nuo62(this$0).get_foundMatch_g4mbjg_k$()) {
        $this$record.drawRect$default_5x4e2k_k$(Companion_getInstance_9().get_Green_dkzwf_k$(), VOID, VOID, VOID, new Stroke(3.0));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SharedBoundsNode(state) {
    Node.call(this);
    this.state_1 = state;
    this.layer_1 = state.get_layer_iujprc_k$();
    this.providedValues_1 = modifierLocalMapOf(to(get_ModifierLocalSharedElementInternalState(), state));
  }
  protoOf(SharedBoundsNode).set_state_jymqa0_k$ = function (value) {
    if (!equals(value, this.state_1)) {
      this.state_1 = value;
      if (this.get_isAttached_odsl1l_k$()) {
        this.provide_fhfib2_k$(get_ModifierLocalSharedElementInternalState(), value);
        this.state_1.set_parentState_pcfd0q_k$(this.get_current_2exe6q_k$(get_ModifierLocalSharedElementInternalState()));
        this.state_1.set_layer_t4w1t1_k$(this.layer_1);
        var tmp = this.state_1;
        tmp.set_lookaheadCoords_hqcoci_k$(SharedBoundsNode$_set_state_$lambda_qnmiyn(this));
      }
    }
  };
  protoOf(SharedBoundsNode).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  protoOf(SharedBoundsNode).get_providedValues_crrbpu_k$ = function () {
    return this.providedValues_1;
  };
  protoOf(SharedBoundsNode).onAttach_juzy2c_k$ = function () {
    protoOf(Node).onAttach_juzy2c_k$.call(this);
    this.provide_fhfib2_k$(get_ModifierLocalSharedElementInternalState(), this.state_1);
    this.state_1.set_parentState_pcfd0q_k$(this.get_current_2exe6q_k$(get_ModifierLocalSharedElementInternalState()));
    _set_layer__h6sopg(this, requireGraphicsContext(this).createGraphicsLayer_a0ja3u_k$());
    var tmp = this.state_1;
    tmp.set_lookaheadCoords_hqcoci_k$(SharedBoundsNode$onAttach$lambda(this));
  };
  protoOf(SharedBoundsNode).onDetach_8dig02_k$ = function () {
    protoOf(Node).onDetach_8dig02_k$.call(this);
    _set_layer__h6sopg(this, null);
    this.state_1.set_parentState_pcfd0q_k$(null);
    var tmp = this.state_1;
    tmp.set_lookaheadCoords_hqcoci_k$(SharedBoundsNode$onDetach$lambda);
  };
  protoOf(SharedBoundsNode).onReset_y3iodc_k$ = function () {
    protoOf(Node).onReset_y3iodc_k$.call(this);
    var tmp0_safe_receiver = this.layer_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.animation.SharedBoundsNode.onReset.<anonymous>' call
      requireGraphicsContext(this).releaseGraphicsLayer_8n1d07_k$(tmp0_safe_receiver);
    }
    _set_layer__h6sopg(this, requireGraphicsContext(this).createGraphicsLayer_a0ja3u_k$());
  };
  protoOf(SharedBoundsNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.measure_4dmfk1_k$(constraints);
    var lookaheadSize = Size(placeable.get_width_j0q4yl_k$(), placeable.get_height_e7t92o_k$());
    var tmp = placeable.get_width_j0q4yl_k$();
    var tmp_0 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, SharedBoundsNode$measure$lambda(this, lookaheadSize, placeable));
  };
  protoOf(SharedBoundsNode).isMeasurementApproachInProgress_fyhlil_k$ = function (lookaheadSize) {
    return _get_sharedElement__nuo62(this).get_foundMatch_g4mbjg_k$() && this.state_1.get_sharedElement_xjw30y_k$().get_scope_iyfcq3_k$().get_isTransitionActive_t69j02_k$();
  };
  protoOf(SharedBoundsNode).approachMeasure_xs6k22_k$ = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    if (!_get_sharedElement__nuo62(this).get_foundMatch_g4mbjg_k$()) {
      tmp = constraints;
    } else {
      var tmp0_elvis_lhs = _get_boundsAnimation__ff0bi(this).get_value_j01efc_k$();
      var tmp1_safe_receiver = tmp0_elvis_lhs == null ? _get_sharedElement__nuo62(this).get_currentBounds_rrenad_k$() : tmp0_elvis_lhs;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.animation.SharedBoundsNode.approachMeasure.<anonymous>' call
        var tmp0_container = roundToIntSize(tmp1_safe_receiver.get_size_cxx1ym_k$());
        // Inline function 'androidx.compose.ui.unit.IntSize.component1' call
        var width = _IntSize___get_width__impl__d9yl4o(tmp0_container);
        // Inline function 'androidx.compose.ui.unit.IntSize.component2' call
        var height = _IntSize___get_height__impl__prv63b(tmp0_container);
        // Inline function 'kotlin.require' call
        if (!(!(width === 2147483647) && !(height === 2147483647))) {
          // Inline function 'androidx.compose.animation.SharedBoundsNode.approachMeasure.<anonymous>.<anonymous>' call
          var message = 'Error: Infinite width/height is invalid. ' + ('animated bounds: ' + toString_0(_get_boundsAnimation__ff0bi(this).get_value_j01efc_k$()) + ',') + (' current bounds: ' + toString_0(_get_sharedElement__nuo62(this).get_currentBounds_rrenad_k$()));
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        tmp_0 = Companion_getInstance_10().fixed_rd8fwx_k$(coerceAtLeast(width, 0), coerceAtLeast(height, 0));
      }
      var tmp2_elvis_lhs = tmp_0;
      var tmp_1;
      var tmp_2 = tmp2_elvis_lhs;
      if ((tmp_2 == null ? null : new Constraints_0(tmp_2)) == null) {
        tmp_1 = constraints;
      } else {
        tmp_1 = tmp2_elvis_lhs;
      }
      tmp = tmp_1;
    }
    var resolvedConstraints = tmp;
    var placeable = measurable.measure_4dmfk1_k$(resolvedConstraints);
    return place(_this__u8e3s4, this, placeable);
  };
  protoOf(SharedBoundsNode).draw_2h95cs_k$ = function (_this__u8e3s4) {
    this.state_1.set_clipPathInOverlay_uhdx0g_k$(this.state_1.get_overlayClip_75q8uv_k$().getClipPath_nnv5ej_k$(this.state_1.get_userState_dy2db1_k$(), ensureNotNull(_get_sharedElement__nuo62(this).get_currentBounds_rrenad_k$()), _this__u8e3s4.get_layoutDirection_7e37v0_k$(), requireDensity(this)));
    var tmp0 = this.state_1.get_layer_iujprc_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.compose.animation.SharedBoundsNode.draw.<anonymous>' call
        var message = 'Error: Layer is null when accessed for shared bounds/element : ' + toString(_get_sharedElement__nuo62(this).get_key_18j28a_k$()) + ',' + ('target: ' + this.state_1.get_boundsAnimation_bx9g2i_k$().get_target_juba8q_k$() + ', is attached: ' + this.get_isAttached_odsl1l_k$());
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var layer = tmp$ret$1;
    _this__u8e3s4.record$default_m64s38_k$(layer, VOID, SharedBoundsNode$draw$lambda(_this__u8e3s4, this));
    if (this.state_1.get_shouldRenderInPlace_x76dxs_k$()) {
      drawLayer(_this__u8e3s4, layer);
    }
  };
  function ModifierLocalSharedElementInternalState$lambda() {
    _init_properties_SharedContentNode_kt__22dkzo();
    return null;
  }
  var properties_initialized_SharedContentNode_kt_1ekm3q;
  function _init_properties_SharedContentNode_kt__22dkzo() {
    if (!properties_initialized_SharedContentNode_kt_1ekm3q) {
      properties_initialized_SharedContentNode_kt_1ekm3q = true;
      ModifierLocalSharedElementInternalState = modifierLocalOf(ModifierLocalSharedElementInternalState$lambda);
    }
  }
  function _get_shouldRenderBasedOnTarget__zs0lz($this) {
    return equals($this.get_sharedElement_xjw30y_k$().targetBoundsProvider_1, $this) || !$this.get_renderOnlyWhenVisible_62mrql_k$();
  }
  function SharedElementInternalState$lookaheadCoords$lambda() {
    return null;
  }
  function SharedElementInternalState(sharedElement, boundsAnimation, placeHolderSize, renderOnlyWhenVisible, overlayClip, renderInOverlayDuringTransition, userState, zIndex) {
    this.zIndex$delegate_1 = mutableFloatStateOf(zIndex);
    this.renderInOverlayDuringTransition$delegate_1 = mutableStateOf(renderInOverlayDuringTransition);
    this.sharedElement$delegate_1 = mutableStateOf(sharedElement);
    this.boundsAnimation$delegate_1 = mutableStateOf(boundsAnimation);
    this.placeHolderSize$delegate_1 = mutableStateOf(placeHolderSize);
    this.renderOnlyWhenVisible$delegate_1 = mutableStateOf(renderOnlyWhenVisible);
    this.overlayClip$delegate_1 = mutableStateOf(overlayClip);
    this.userState$delegate_1 = mutableStateOf(userState);
    this.clipPathInOverlay_1 = null;
    var tmp = this;
    tmp.lookaheadCoords_1 = SharedElementInternalState$lookaheadCoords$lambda;
    this.parentState_1 = null;
    this.layer$delegate_1 = mutableStateOf(null);
  }
  protoOf(SharedElementInternalState).set_zIndex_58jhbh_k$ = function (_set____db54di) {
    var tmp0 = this.zIndex$delegate_1;
    zIndex$factory();
    tmp0.set_floatValue_qaujgq_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementInternalState).get_zIndex_mbbc75_k$ = function () {
    var tmp0 = this.zIndex$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    zIndex$factory_0();
    return tmp0.get_floatValue_xw60ou_k$();
  };
  protoOf(SharedElementInternalState).set_renderInOverlayDuringTransition_bhc293_k$ = function (_set____db54di) {
    var tmp0 = this.renderInOverlayDuringTransition$delegate_1;
    renderInOverlayDuringTransition$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementInternalState).get_renderInOverlayDuringTransition_4yqpjy_k$ = function () {
    var tmp0 = this.renderInOverlayDuringTransition$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    renderInOverlayDuringTransition$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementInternalState).set_sharedElement_2xbsqt_k$ = function (_set____db54di) {
    var tmp0 = this.sharedElement$delegate_1;
    sharedElement$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementInternalState).get_sharedElement_xjw30y_k$ = function () {
    var tmp0 = this.sharedElement$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    sharedElement$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementInternalState).set_boundsAnimation_mkzem3_k$ = function (_set____db54di) {
    var tmp0 = this.boundsAnimation$delegate_1;
    boundsAnimation$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementInternalState).get_boundsAnimation_bx9g2i_k$ = function () {
    var tmp0 = this.boundsAnimation$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    boundsAnimation$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementInternalState).set_placeHolderSize_357yjd_k$ = function (_set____db54di) {
    var tmp0 = this.placeHolderSize$delegate_1;
    placeHolderSize$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementInternalState).get_placeHolderSize_umjxaj_k$ = function () {
    var tmp0 = this.placeHolderSize$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    placeHolderSize$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementInternalState).set_renderOnlyWhenVisible_f63i0s_k$ = function (_set____db54di) {
    var tmp0 = this.renderOnlyWhenVisible$delegate_1;
    renderOnlyWhenVisible$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementInternalState).get_renderOnlyWhenVisible_62mrql_k$ = function () {
    var tmp0 = this.renderOnlyWhenVisible$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    renderOnlyWhenVisible$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementInternalState).set_overlayClip_a8g9zt_k$ = function (_set____db54di) {
    var tmp0 = this.overlayClip$delegate_1;
    overlayClip$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementInternalState).get_overlayClip_75q8uv_k$ = function () {
    var tmp0 = this.overlayClip$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    overlayClip$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementInternalState).set_userState_zl3ka_k$ = function (_set____db54di) {
    var tmp0 = this.userState$delegate_1;
    userState$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementInternalState).get_userState_dy2db1_k$ = function () {
    var tmp0 = this.userState$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    userState$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementInternalState).set_clipPathInOverlay_uhdx0g_k$ = function (_set____db54di) {
    this.clipPathInOverlay_1 = _set____db54di;
  };
  protoOf(SharedElementInternalState).get_clipPathInOverlay_rtg516_k$ = function () {
    return this.clipPathInOverlay_1;
  };
  protoOf(SharedElementInternalState).drawInOverlay_ircoes_k$ = function (drawScope) {
    var tmp0_elvis_lhs = this.get_layer_iujprc_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var layer = tmp;
    if (this.get_shouldRenderInOverlay_7o8ntm_k$()) {
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.animation.SharedElementInternalState.drawInOverlay.<anonymous>' call
      var tmp0 = this.get_sharedElement_xjw30y_k$().get_currentBounds_rrenad_k$();
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0 == null) {
          // Inline function 'androidx.compose.animation.SharedElementInternalState.drawInOverlay.<anonymous>.<anonymous>' call
          var message = 'Error: current bounds not set yet.';
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          break $l$block;
        }
      }
      var tmp0_safe_receiver = this.get_sharedElement_xjw30y_k$().get_currentBounds_rrenad_k$();
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_topLeft_ypvrd5_k$();
      var tmp1_container = ensureNotNull(tmp_0 == null ? null : new Offset(tmp_0)).packedValue_1;
      // Inline function 'androidx.compose.ui.geometry.Offset.component1' call
      var x = _Offset___get_x__impl__xvi35n(tmp1_container);
      // Inline function 'androidx.compose.ui.geometry.Offset.component2' call
      var y = _Offset___get_y__impl__8bzhra(tmp1_container);
      var tmp2_safe_receiver = this.clipPathInOverlay_1;
      var tmp_1;
      if (tmp2_safe_receiver == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.animation.SharedElementInternalState.drawInOverlay.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipPath' call
        var clipOp = Companion_getInstance_8().get_Intersect_gpxc6n_k$();
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform.<anonymous>' call
        var $this$with = drawScope.get_drawContext_ffwztu_k$();
        var previousSize = $this$with.get_size_cxx1ym_k$();
        $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
        try {
          // Inline function 'androidx.compose.ui.graphics.drawscope.clipPath.<anonymous>' call
          $this$with.get_transform_px941v_k$().clipPath_tlqunt_k$(tmp2_safe_receiver, clipOp);
          // Inline function 'androidx.compose.animation.SharedElementInternalState.drawInOverlay.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
          drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(x, y);
          try {
            // Inline function 'androidx.compose.animation.SharedElementInternalState.drawInOverlay.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            drawLayer(drawScope, layer);
          }finally {
            drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-x, -y);
          }
        }finally {
          $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
          $this$with.set_size_6a0e6q_k$(previousSize);
        }
        tmp_1 = Unit_getInstance();
      }
      if (tmp_1 == null) {
        // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
        drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(x, y);
        try {
          // Inline function 'androidx.compose.animation.SharedElementInternalState.drawInOverlay.<anonymous>.<anonymous>' call
          drawLayer(drawScope, layer);
        }finally {
          drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-x, -y);
        }
      }
    }
  };
  protoOf(SharedElementInternalState).get_nonNullLookaheadSize_hjdu4c_k$ = function () {
    var tmp0 = this.lookaheadCoords_1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.compose.animation.SharedElementInternalState.<get-nonNullLookaheadSize>.<anonymous>' call
        var message = 'Error: lookahead coordinates is null for ' + toString(this.get_sharedElement_xjw30y_k$().key_1) + '.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return toSize(tmp$ret$1.get_size_kd98kr_k$());
  };
  protoOf(SharedElementInternalState).set_lookaheadCoords_hqcoci_k$ = function (_set____db54di) {
    this.lookaheadCoords_1 = _set____db54di;
  };
  protoOf(SharedElementInternalState).get_lookaheadCoords_md65d5_k$ = function () {
    return this.lookaheadCoords_1;
  };
  protoOf(SharedElementInternalState).set_parentState_pcfd0q_k$ = function (_set____db54di) {
    this.parentState_1 = _set____db54di;
  };
  protoOf(SharedElementInternalState).get_parentState_ui10gu_k$ = function () {
    return this.parentState_1;
  };
  protoOf(SharedElementInternalState).calculateLookaheadOffset_w88srp_k$ = function () {
    var tmp0 = this.lookaheadCoords_1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.compose.animation.SharedElementInternalState.calculateLookaheadOffset.<anonymous>' call
        var message = 'Error: lookahead coordinates is null.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var c = tmp$ret$1;
    return this.get_sharedElement_xjw30y_k$().scope_1.get_lookaheadRoot_u3i6mw_k$().localPositionOf_hrey0l_k$(c, Companion_getInstance_7().get_Zero_k6n73t_k$());
  };
  protoOf(SharedElementInternalState).get_target_juba8q_k$ = function () {
    return this.get_boundsAnimation_bx9g2i_k$().get_target_juba8q_k$();
  };
  protoOf(SharedElementInternalState).set_layer_t4w1t1_k$ = function (_set____db54di) {
    var tmp0 = this.layer$delegate_1;
    layer$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementInternalState).get_layer_iujprc_k$ = function () {
    var tmp0 = this.layer$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    layer$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementInternalState).get_shouldRenderInOverlay_7o8ntm_k$ = function () {
    return _get_shouldRenderBasedOnTarget__zs0lz(this) && this.get_sharedElement_xjw30y_k$().get_foundMatch_g4mbjg_k$() && this.get_renderInOverlayDuringTransition_4yqpjy_k$();
  };
  protoOf(SharedElementInternalState).get_shouldRenderInPlace_x76dxs_k$ = function () {
    return !this.get_sharedElement_xjw30y_k$().get_foundMatch_g4mbjg_k$() || (!this.get_shouldRenderInOverlay_7o8ntm_k$() && _get_shouldRenderBasedOnTarget__zs0lz(this));
  };
  protoOf(SharedElementInternalState).onRemembered_68t2e3_k$ = function () {
    this.get_sharedElement_xjw30y_k$().scope_1.onStateAdded_r36lku_k$(this);
    this.get_sharedElement_xjw30y_k$().updateTargetBoundsProvider_nrxwls_k$();
  };
  protoOf(SharedElementInternalState).onForgotten_pbqifp_k$ = function () {
    this.get_sharedElement_xjw30y_k$().scope_1.onStateRemoved_npklb2_k$(this);
    this.get_sharedElement_xjw30y_k$().updateTargetBoundsProvider_nrxwls_k$();
  };
  protoOf(SharedElementInternalState).onAbandoned_1gx7a3_k$ = function () {
  };
  function _set__targetBounds__ktg6n4($this, _set____db54di) {
    var tmp0 = $this._targetBounds$delegate_1;
    _targetBounds$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get__targetBounds__yzwcto($this) {
    var tmp0 = $this._targetBounds$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    _targetBounds$factory_0();
    return tmp0.get_value_j01efc_k$();
  }
  function _set_foundMatch__r9l3sc($this, _set____db54di) {
    var tmp0 = $this.foundMatch$delegate_1;
    foundMatch$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_targetBoundsProvider__ob9lds($this, _set____db54di) {
    $this.targetBoundsProvider_1 = _set____db54di;
  }
  function hasVisibleContent($this) {
    var tmp0 = $this.states_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0.get_c1px32_k$(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.animation.SharedElement.hasVisibleContent.<anonymous>' call
          if (item.get_boundsAnimation_bx9g2i_k$().get_target_juba8q_k$()) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function _get_updateMatch__8odehh($this) {
    return $this.updateMatch_1;
  }
  function _get_observingVisibilityChange__nyztm2($this) {
    return $this.observingVisibilityChange_1;
  }
  function SharedElement$updateMatch$lambda(this$0) {
    return function (it) {
      this$0.updateMatch_3nxlck_k$();
      return Unit_getInstance();
    };
  }
  function SharedElement$observingVisibilityChange$lambda(this$0) {
    return function () {
      hasVisibleContent(this$0);
      return Unit_getInstance();
    };
  }
  function SharedElement(key, scope) {
    this.key_1 = key;
    this.scope_1 = scope;
    this._targetBounds$delegate_1 = mutableStateOf(null);
    this.foundMatch$delegate_1 = mutableStateOf(false);
    this.currentBounds$delegate_1 = mutableStateOf(null);
    this.targetBoundsProvider_1 = null;
    this.states_1 = mutableStateListOf();
    var tmp = this;
    tmp.updateMatch_1 = SharedElement$updateMatch$lambda(this);
    var tmp_0 = this;
    tmp_0.observingVisibilityChange_1 = SharedElement$observingVisibilityChange$lambda(this);
  }
  protoOf(SharedElement).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(SharedElement).get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  protoOf(SharedElement).isAnimating_x1kvqk_k$ = function () {
    var tmp;
    var tmp0 = this.states_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0.get_c1px32_k$(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.animation.SharedElement.isAnimating.<anonymous>' call
          if (item.get_boundsAnimation_bx9g2i_k$().get_isRunning_okmtn0_k$()) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (tmp$ret$1) {
      tmp = this.get_foundMatch_g4mbjg_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SharedElement).get_targetBounds_ciqj9t_k$ = function () {
    var tmp0_safe_receiver = this.targetBoundsProvider_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.animation.SharedElement.<get-targetBounds>.<anonymous>' call
      tmp = Rect(tmp0_safe_receiver.calculateLookaheadOffset_w88srp_k$(), tmp0_safe_receiver.get_nonNullLookaheadSize_hjdu4c_k$());
    }
    _set__targetBounds__ktg6n4(this, tmp);
    return _get__targetBounds__yzwcto(this);
  };
  protoOf(SharedElement).updateMatch_3nxlck_k$ = function () {
    var hasVisibleContent_0 = hasVisibleContent(this);
    if (this.states_1.get_size_woubt6_k$() > 1 && hasVisibleContent_0) {
      _set_foundMatch__r9l3sc(this, true);
    } else if (this.scope_1.get_isTransitionActive_t69j02_k$()) {
      if (!hasVisibleContent_0) {
        _set_foundMatch__r9l3sc(this, false);
      }
    } else {
      _set_foundMatch__r9l3sc(this, false);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.states_1.isEmpty_y1axqb_k$()) {
      get_SharedTransitionObserver().observeReads_r9h55h_k$(this, this.updateMatch_1, this.observingVisibilityChange_1);
    }
  };
  protoOf(SharedElement).get_foundMatch_g4mbjg_k$ = function () {
    var tmp0 = this.foundMatch$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    foundMatch$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElement).set_currentBounds_f3zfw1_k$ = function (_set____db54di) {
    var tmp0 = this.currentBounds$delegate_1;
    currentBounds$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElement).get_currentBounds_rrenad_k$ = function () {
    var tmp0 = this.currentBounds$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    currentBounds$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElement).get_targetBoundsProvider_t1s2lp_k$ = function () {
    return this.targetBoundsProvider_1;
  };
  protoOf(SharedElement).onLookaheadResult_wuti39_k$ = function (state, lookaheadSize, topLeft) {
    if (state.get_boundsAnimation_bx9g2i_k$().get_target_juba8q_k$()) {
      this.targetBoundsProvider_1 = state;
      var tmp;
      var tmp0_safe_receiver = _get__targetBounds__yzwcto(this);
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_topLeft_ypvrd5_k$();
      if (!equals(tmp_0 == null ? null : new Offset(tmp_0), new Offset(topLeft))) {
        tmp = true;
      } else {
        var tmp1_safe_receiver = _get__targetBounds__yzwcto(this);
        var tmp_1 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_size_cxx1ym_k$();
        tmp = !equals(tmp_1 == null ? null : new Size_0(tmp_1), new Size_0(lookaheadSize));
      }
      if (tmp) {
        var target = Rect(topLeft, lookaheadSize);
        _set__targetBounds__ktg6n4(this, target);
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var this_0 = this.states_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.get_c1px32_k$(index);
            // Inline function 'androidx.compose.animation.SharedElement.onLookaheadResult.<anonymous>' call
            item.get_boundsAnimation_bx9g2i_k$().animate_s3upvz_k$(ensureNotNull(this.get_currentBounds_rrenad_k$()), target);
          }
           while (inductionVariable <= last);
      }
    }
  };
  protoOf(SharedElement).get_states_jnf5zf_k$ = function () {
    return this.states_1;
  };
  protoOf(SharedElement).updateTargetBoundsProvider_nrxwls_k$ = function () {
    var targetProvider = null;
    // Inline function 'androidx.compose.ui.util.fastForEachReversed' call
    var this_0 = this.states_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = this_0.get_size_woubt6_k$() - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var item = this_0.get_c1px32_k$(index);
        $l$block: {
          // Inline function 'androidx.compose.animation.SharedElement.updateTargetBoundsProvider.<anonymous>' call
          if (item.get_boundsAnimation_bx9g2i_k$().get_target_juba8q_k$()) {
            targetProvider = item;
            break $l$block;
          }
        }
      }
       while (0 <= inductionVariable);
    if (equals(targetProvider, this.targetBoundsProvider_1))
      return Unit_getInstance();
    this.targetBoundsProvider_1 = targetProvider;
    _set__targetBounds__ktg6n4(this, null);
  };
  protoOf(SharedElement).onSharedTransitionFinished_4wcl9h_k$ = function () {
    _set_foundMatch__r9l3sc(this, this.states_1.get_size_woubt6_k$() > 1 && hasVisibleContent(this));
    _set__targetBounds__ktg6n4(this, null);
  };
  protoOf(SharedElement).addState_rbuktl_k$ = function (sharedElementState) {
    this.states_1.add_wl2rvy_k$(sharedElementState);
    get_SharedTransitionObserver().observeReads_r9h55h_k$(this, this.updateMatch_1, this.observingVisibilityChange_1);
  };
  protoOf(SharedElement).removeState_35kh4q_k$ = function (sharedElementState) {
    this.states_1.remove_an8aut_k$(sharedElementState);
    if (this.states_1.isEmpty_y1axqb_k$()) {
      this.updateMatch_3nxlck_k$();
      get_SharedTransitionObserver().clear_7p1m0x_k$(this);
    } else {
      get_SharedTransitionObserver().observeReads_r9h55h_k$(this, this.updateMatch_1, this.observingVisibilityChange_1);
    }
  };
  function zIndex$factory() {
    return getPropertyCallableRef('zIndex', 1, KMutableProperty1, function (receiver) {
      return receiver.get_zIndex_mbbc75_k$();
    }, function (receiver, value) {
      return receiver.set_zIndex_58jhbh_k$(value);
    });
  }
  function zIndex$factory_0() {
    return getPropertyCallableRef('zIndex', 1, KMutableProperty1, function (receiver) {
      return receiver.get_zIndex_mbbc75_k$();
    }, function (receiver, value) {
      return receiver.set_zIndex_58jhbh_k$(value);
    });
  }
  function renderInOverlayDuringTransition$factory() {
    return getPropertyCallableRef('renderInOverlayDuringTransition', 1, KMutableProperty1, function (receiver) {
      return receiver.get_renderInOverlayDuringTransition_4yqpjy_k$();
    }, function (receiver, value) {
      return receiver.set_renderInOverlayDuringTransition_bhc293_k$(value);
    });
  }
  function renderInOverlayDuringTransition$factory_0() {
    return getPropertyCallableRef('renderInOverlayDuringTransition', 1, KMutableProperty1, function (receiver) {
      return receiver.get_renderInOverlayDuringTransition_4yqpjy_k$();
    }, function (receiver, value) {
      return receiver.set_renderInOverlayDuringTransition_bhc293_k$(value);
    });
  }
  function sharedElement$factory() {
    return getPropertyCallableRef('sharedElement', 1, KMutableProperty1, function (receiver) {
      return receiver.get_sharedElement_xjw30y_k$();
    }, function (receiver, value) {
      return receiver.set_sharedElement_2xbsqt_k$(value);
    });
  }
  function sharedElement$factory_0() {
    return getPropertyCallableRef('sharedElement', 1, KMutableProperty1, function (receiver) {
      return receiver.get_sharedElement_xjw30y_k$();
    }, function (receiver, value) {
      return receiver.set_sharedElement_2xbsqt_k$(value);
    });
  }
  function boundsAnimation$factory() {
    return getPropertyCallableRef('boundsAnimation', 1, KMutableProperty1, function (receiver) {
      return receiver.get_boundsAnimation_bx9g2i_k$();
    }, function (receiver, value) {
      return receiver.set_boundsAnimation_mkzem3_k$(value);
    });
  }
  function boundsAnimation$factory_0() {
    return getPropertyCallableRef('boundsAnimation', 1, KMutableProperty1, function (receiver) {
      return receiver.get_boundsAnimation_bx9g2i_k$();
    }, function (receiver, value) {
      return receiver.set_boundsAnimation_mkzem3_k$(value);
    });
  }
  function placeHolderSize$factory() {
    return getPropertyCallableRef('placeHolderSize', 1, KMutableProperty1, function (receiver) {
      return receiver.get_placeHolderSize_umjxaj_k$();
    }, function (receiver, value) {
      return receiver.set_placeHolderSize_357yjd_k$(value);
    });
  }
  function placeHolderSize$factory_0() {
    return getPropertyCallableRef('placeHolderSize', 1, KMutableProperty1, function (receiver) {
      return receiver.get_placeHolderSize_umjxaj_k$();
    }, function (receiver, value) {
      return receiver.set_placeHolderSize_357yjd_k$(value);
    });
  }
  function renderOnlyWhenVisible$factory() {
    return getPropertyCallableRef('renderOnlyWhenVisible', 1, KMutableProperty1, function (receiver) {
      return receiver.get_renderOnlyWhenVisible_62mrql_k$();
    }, function (receiver, value) {
      return receiver.set_renderOnlyWhenVisible_f63i0s_k$(value);
    });
  }
  function renderOnlyWhenVisible$factory_0() {
    return getPropertyCallableRef('renderOnlyWhenVisible', 1, KMutableProperty1, function (receiver) {
      return receiver.get_renderOnlyWhenVisible_62mrql_k$();
    }, function (receiver, value) {
      return receiver.set_renderOnlyWhenVisible_f63i0s_k$(value);
    });
  }
  function overlayClip$factory() {
    return getPropertyCallableRef('overlayClip', 1, KMutableProperty1, function (receiver) {
      return receiver.get_overlayClip_75q8uv_k$();
    }, function (receiver, value) {
      return receiver.set_overlayClip_a8g9zt_k$(value);
    });
  }
  function overlayClip$factory_0() {
    return getPropertyCallableRef('overlayClip', 1, KMutableProperty1, function (receiver) {
      return receiver.get_overlayClip_75q8uv_k$();
    }, function (receiver, value) {
      return receiver.set_overlayClip_a8g9zt_k$(value);
    });
  }
  function userState$factory() {
    return getPropertyCallableRef('userState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_userState_dy2db1_k$();
    }, function (receiver, value) {
      return receiver.set_userState_zl3ka_k$(value);
    });
  }
  function userState$factory_0() {
    return getPropertyCallableRef('userState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_userState_dy2db1_k$();
    }, function (receiver, value) {
      return receiver.set_userState_zl3ka_k$(value);
    });
  }
  function layer$factory() {
    return getPropertyCallableRef('layer', 1, KMutableProperty1, function (receiver) {
      return receiver.get_layer_iujprc_k$();
    }, function (receiver, value) {
      return receiver.set_layer_t4w1t1_k$(value);
    });
  }
  function layer$factory_0() {
    return getPropertyCallableRef('layer', 1, KMutableProperty1, function (receiver) {
      return receiver.get_layer_iujprc_k$();
    }, function (receiver, value) {
      return receiver.set_layer_t4w1t1_k$(value);
    });
  }
  function _targetBounds$factory() {
    return getPropertyCallableRef('_targetBounds', 1, KMutableProperty1, function (receiver) {
      return _get__targetBounds__yzwcto(receiver);
    }, function (receiver, value) {
      return _set__targetBounds__ktg6n4(receiver, value);
    });
  }
  function _targetBounds$factory_0() {
    return getPropertyCallableRef('_targetBounds', 1, KMutableProperty1, function (receiver) {
      return _get__targetBounds__yzwcto(receiver);
    }, function (receiver, value) {
      return _set__targetBounds__ktg6n4(receiver, value);
    });
  }
  function foundMatch$factory() {
    return getPropertyCallableRef('foundMatch', 1, KMutableProperty1, function (receiver) {
      return receiver.get_foundMatch_g4mbjg_k$();
    }, function (receiver, value) {
      return _set_foundMatch__r9l3sc(receiver, value);
    });
  }
  function foundMatch$factory_0() {
    return getPropertyCallableRef('foundMatch', 1, KMutableProperty1, function (receiver) {
      return receiver.get_foundMatch_g4mbjg_k$();
    }, function (receiver, value) {
      return _set_foundMatch__r9l3sc(receiver, value);
    });
  }
  function currentBounds$factory() {
    return getPropertyCallableRef('currentBounds', 1, KMutableProperty1, function (receiver) {
      return receiver.get_currentBounds_rrenad_k$();
    }, function (receiver, value) {
      return receiver.set_currentBounds_f3zfw1_k$(value);
    });
  }
  function currentBounds$factory_0() {
    return getPropertyCallableRef('currentBounds', 1, KMutableProperty1, function (receiver) {
      return receiver.get_currentBounds_rrenad_k$();
    }, function (receiver, value) {
      return receiver.set_currentBounds_f3zfw1_k$(value);
    });
  }
  function get_DefaultEnabled() {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return DefaultEnabled;
  }
  var DefaultEnabled;
  function get_DefaultSpring() {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return DefaultSpring;
  }
  var DefaultSpring;
  function get_ParentClip() {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return ParentClip;
  }
  var ParentClip;
  function get_DefaultClipInOverlayDuringTransition() {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return DefaultClipInOverlayDuringTransition;
  }
  var DefaultClipInOverlayDuringTransition;
  function get_DefaultBoundsTransform() {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return DefaultBoundsTransform;
  }
  var DefaultBoundsTransform;
  function get_SharedTransitionObserver() {
    _init_properties_SharedTransitionScope_kt__irnofc();
    var tmp0 = SharedTransitionObserver$delegate;
    // Inline function 'kotlin.getValue' call
    SharedTransitionObserver$factory();
    return tmp0.get_value_j01efc_k$();
  }
  var SharedTransitionObserver$delegate;
  function get_cachedScaleToBoundsImplMap() {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return cachedScaleToBoundsImplMap;
  }
  var cachedScaleToBoundsImplMap;
  function LayerRenderer() {
  }
  function sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0).calculateSize_sx87iu_k$ = function (contentSize, animatedSize) {
    return this.function_1(new IntSize(contentSize), new IntSize(animatedSize)).packedValue_1;
  };
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, PlaceHolderSize) : false) {
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
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0_0).calculateSize_sx87iu_k$ = function (contentSize, animatedSize) {
    return this.function_1(new IntSize(contentSize), new IntSize(animatedSize)).packedValue_1;
  };
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, PlaceHolderSize) : false) {
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
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function SharedTransitionScope$PlaceHolderSize$Companion$animatedSize$lambda(_anonymous_parameter_0__qggqh8, animatedSize) {
    return animatedSize;
  }
  function SharedTransitionScope$PlaceHolderSize$Companion$contentSize$lambda(contentSize, _anonymous_parameter_1__qggqgd) {
    return contentSize;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp_0 = SharedTransitionScope$PlaceHolderSize$Companion$animatedSize$lambda;
    tmp.animatedSize_1 = new sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0(tmp_0);
    var tmp_1 = this;
    var tmp_2 = SharedTransitionScope$PlaceHolderSize$Companion$contentSize$lambda;
    tmp_1.contentSize_1 = new sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0_0(tmp_2);
  }
  protoOf(Companion_1).get_animatedSize_lvs1ot_k$ = function () {
    return this.animatedSize_1;
  };
  protoOf(Companion_1).get_contentSize_7ghui9_k$ = function () {
    return this.contentSize_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_14() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.RemeasureToBounds_1 = RemeasureImpl_getInstance();
  }
  protoOf(Companion_2).get_RemeasureToBounds_vc94xe_k$ = function () {
    return this.RemeasureToBounds_1;
  };
  protoOf(Companion_2).ScaleToBounds_s3l72r_k$ = function (contentScale, alignment) {
    return ScaleToBoundsCached(contentScale, alignment);
  };
  protoOf(Companion_2).ScaleToBounds$default_1ykj6e_k$ = function (contentScale, alignment, $super) {
    contentScale = contentScale === VOID ? Companion_getInstance_11().get_FillWidth_n2o75m_k$() : contentScale;
    alignment = alignment === VOID ? Companion_getInstance_5().get_Center_3arb0i_k$() : alignment;
    return $super === VOID ? this.ScaleToBounds_s3l72r_k$(contentScale, alignment) : $super.ScaleToBounds_s3l72r_k$.call(this, contentScale, alignment);
  };
  var Companion_instance_2;
  function Companion_getInstance_15() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function _get_nonNullInternalState__g66s5n($this) {
    var tmp0 = $this.get_internalState_d3bhs8_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.compose.animation.SharedContentState.<get-nonNullInternalState>.<anonymous>' call
        var message = 'Error: SharedContentState has not been added to a sharedElement/sharedBoundsmodifier yet. Therefore the internal state has not bee initialized.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  }
  function PlaceHolderSize() {
  }
  function ResizeMode() {
  }
  function OverlayClip() {
  }
  function SharedContentState(key) {
    this.key_1 = key;
    this.internalState$delegate_1 = mutableStateOf(null);
  }
  protoOf(SharedContentState).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(SharedContentState).get_isMatchFound_44sa8_k$ = function () {
    var tmp0_safe_receiver = this.get_internalState_d3bhs8_k$();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_sharedElement_xjw30y_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_foundMatch_g4mbjg_k$();
    return tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
  };
  protoOf(SharedContentState).get_clipPathInOverlay_c5z0b7_k$ = function () {
    return _get_nonNullInternalState__g66s5n(this).get_clipPathInOverlay_rtg516_k$();
  };
  protoOf(SharedContentState).get_parentSharedContentState_agqmhc_k$ = function () {
    var tmp0_safe_receiver = _get_nonNullInternalState__g66s5n(this).get_parentState_ui10gu_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_userState_dy2db1_k$();
  };
  protoOf(SharedContentState).set_internalState_gjuaik_k$ = function (_set____db54di) {
    var tmp0 = this.internalState$delegate_1;
    internalState$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedContentState).get_internalState_d3bhs8_k$ = function () {
    var tmp0 = this.internalState$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    internalState$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  function SharedTransitionScope$renderInSharedTransitionScopeOverlay$lambda(this$0) {
    return function () {
      return this$0.get_isTransitionActive_t69j02_k$();
    };
  }
  function SharedTransitionScope() {
  }
  function _get_path__dbvv7q($this) {
    return $this.path_1;
  }
  function _set_isTransitionActive__umwr0u($this, _set____db54di) {
    var tmp0 = $this.isTransitionActive$delegate_1;
    isTransitionActive$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_observeAnimatingBlock__7ka0gq($this) {
    return $this.observeAnimatingBlock_1;
  }
  function _get_updateTransitionActiveness__8rei28($this) {
    return $this.updateTransitionActiveness_1;
  }
  function updateTransitionActiveness($this) {
    var tmp0 = $this.sharedElements_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.any' call
      // Inline function 'androidx.collection.ScatterMap.forEach' call
      var k = tmp0.get_keys_x7wiqc_k$();
      var v = tmp0.get_values_s0ixei_k$();
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m = tmp0.get_metadata_ddgo4n_k$();
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_0 = slot;
            if (!this_0.and_4spn93_k$(this_0.inv_28kx_k$().shl_bg8if3_k$(7)).and_4spn93_k$(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.and_4spn93_k$(new Long(255, 0)).compareTo_9jj042_k$(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                    var tmp = k[index];
                    (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                    var tmp_0 = v[index];
                    // Inline function 'androidx.collection.ScatterMap.any.<anonymous>' call
                    // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.updateTransitionActiveness.<anonymous>' call
                    if (((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).isAnimating_x1kvqk_k$()) {
                      tmp$ret$3 = true;
                      break $l$block;
                    }
                  }
                  slot = slot.shr_9fl3wl_k$(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp$ret$3 = false;
    }
    var isActive = tmp$ret$3;
    if (!(isActive === $this.get_isTransitionActive_t69j02_k$())) {
      _set_isTransitionActive__umwr0u($this, isActive);
      if (!isActive) {
        // Inline function 'androidx.collection.ScatterMap.forEach' call
        var this_1 = $this.sharedElements_1;
        var k_0 = this_1.get_keys_x7wiqc_k$();
        var v_0 = this_1.get_values_s0ixei_k$();
        $l$block_1: {
          // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
          var m_0 = this_1.get_metadata_ddgo4n_k$();
          var lastIndex_0 = m_0.length - 2 | 0;
          var inductionVariable_1 = 0;
          if (inductionVariable_1 <= lastIndex_0)
            do {
              var i_0 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              var slot_0 = m_0[i_0];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_2 = slot_0;
              if (!this_2.and_4spn93_k$(this_2.inv_28kx_k$().shl_bg8if3_k$(7)).and_4spn93_k$(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                var inductionVariable_2 = 0;
                if (inductionVariable_2 < bitCount_0)
                  do {
                    var j_0 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot_0.and_4spn93_k$(new Long(255, 0)).compareTo_9jj042_k$(new Long(128, 0)) < 0) {
                      var index_0 = (i_0 << 3) + j_0 | 0;
                      // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                      var tmp_1 = k_0[index_0];
                      (tmp_1 == null ? true : !(tmp_1 == null)) || THROW_CCE();
                      var tmp_2 = v_0[index_0];
                      // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.updateTransitionActiveness.<anonymous>' call
                      ((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE()).onSharedTransitionFinished_4wcl9h_k$();
                    }
                    slot_0 = slot_0.shr_9fl3wl_k$(8);
                  }
                   while (inductionVariable_2 < bitCount_0);
                if (!(bitCount_0 === 8)) {
                  break $l$block_1;
                }
              }
            }
             while (!(i_0 === lastIndex_0));
        }
      }
    }
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var this_3 = $this.sharedElements_1;
    var k_1 = this_3.get_keys_x7wiqc_k$();
    var v_1 = this_3.get_values_s0ixei_k$();
    $l$block_2: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m_1 = this_3.get_metadata_ddgo4n_k$();
      var lastIndex_1 = m_1.length - 2 | 0;
      var inductionVariable_3 = 0;
      if (inductionVariable_3 <= lastIndex_1)
        do {
          var i_1 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var slot_1 = m_1[i_1];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_4 = slot_1;
          if (!this_4.and_4spn93_k$(this_4.inv_28kx_k$().shl_bg8if3_k$(7)).and_4spn93_k$(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
            var inductionVariable_4 = 0;
            if (inductionVariable_4 < bitCount_1)
              do {
                var j_1 = inductionVariable_4;
                inductionVariable_4 = inductionVariable_4 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot_1.and_4spn93_k$(new Long(255, 0)).compareTo_9jj042_k$(new Long(128, 0)) < 0) {
                  var index_1 = (i_1 << 3) + j_1 | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  var tmp_3 = k_1[index_1];
                  (tmp_3 == null ? true : !(tmp_3 == null)) || THROW_CCE();
                  var tmp_4 = v_1[index_1];
                  // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.updateTransitionActiveness.<anonymous>' call
                  ((tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE()).updateMatch_3nxlck_k$();
                }
                slot_1 = slot_1.shr_9fl3wl_k$(8);
              }
               while (inductionVariable_4 < bitCount_1);
            if (!(bitCount_1 === 8)) {
              break $l$block_2;
            }
          }
        }
         while (!(i_1 === lastIndex_1));
    }
    get_SharedTransitionObserver().observeReads_r9h55h_k$($this, $this.updateTransitionActiveness_1, $this.observeAnimatingBlock_1);
  }
  function sharedBoundsImpl(_this__u8e3s4, $this, sharedContentState, parentTransition, visible, boundsTransform, placeHolderSize, renderOnlyWhenVisible, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) {
    return composed(_this__u8e3s4, VOID, SharedTransitionScopeImpl$sharedBoundsImpl$lambda(sharedContentState, $this, parentTransition, visible, boundsTransform, placeHolderSize, renderOnlyWhenVisible, clipInOverlayDuringTransition, zIndexInOverlay, renderInOverlayDuringTransition));
  }
  function sharedBoundsImpl$default(_this__u8e3s4, $this, sharedContentState, parentTransition, visible, boundsTransform, placeHolderSize, renderOnlyWhenVisible, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    placeHolderSize = placeHolderSize === VOID ? Companion_getInstance_14().contentSize_1 : placeHolderSize;
    return sharedBoundsImpl(_this__u8e3s4, $this, sharedContentState, parentTransition, visible, boundsTransform, placeHolderSize, renderOnlyWhenVisible, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  }
  function rememberSharedElementState($this, sharedElement, boundsAnimation, placeHolderSize, renderOnlyWhenVisible, sharedContentState, clipInOverlayDuringTransition, zIndexInOverlay, renderInOverlayDuringTransition, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 2066772852, 'C(rememberSharedElementState)P(6!1,2,4,5!1,7)*1032@54440L467:SharedTransitionScope.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(2066772852, $changed, -1, 'androidx.compose.animation.SharedTransitionScopeImpl.rememberSharedElementState (SharedTransitionScope.kt:1032)');
    }
    sourceInformationMarkerStart($composer_0, -663265575, 'CC(remember):SharedTransitionScope.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.rememberSharedElementState.<anonymous>' call
      var value = new SharedElementInternalState(sharedElement, boundsAnimation, placeHolderSize, renderOnlyWhenVisible, clipInOverlayDuringTransition, renderInOverlayDuringTransition, sharedContentState, zIndexInOverlay);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.rememberSharedElementState.<anonymous>' call
    sharedContentState.set_internalState_gjuaik_k$(tmp1_group);
    tmp1_group.set_sharedElement_2xbsqt_k$(sharedElement);
    tmp1_group.set_renderOnlyWhenVisible_f63i0s_k$(renderOnlyWhenVisible);
    tmp1_group.set_boundsAnimation_mkzem3_k$(boundsAnimation);
    tmp1_group.set_placeHolderSize_357yjd_k$(placeHolderSize);
    tmp1_group.set_overlayClip_a8g9zt_k$(clipInOverlayDuringTransition);
    tmp1_group.set_zIndex_58jhbh_k$(zIndexInOverlay);
    tmp1_group.set_renderInOverlayDuringTransition_bhc293_k$(renderInOverlayDuringTransition);
    tmp1_group.set_userState_zl3ka_k$(sharedContentState);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function _get_renderers__1vdp6n($this) {
    return $this.renderers_1;
  }
  function _get_sharedElements__kjeuj3($this) {
    return $this.sharedElements_1;
  }
  function sharedElementsFor($this, key) {
    var tmp0_elvis_lhs = $this.sharedElements_1.get_wei43m_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new SharedElement(key, $this);
      // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.sharedElementsFor.<anonymous>' call
      $this.sharedElements_1.set_b9w55f_k$(key, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function ShapeBasedClip(clipShape) {
    this.clipShape_1 = clipShape;
    this.path_1 = Path();
  }
  protoOf(ShapeBasedClip).get_clipShape_i6onlk_k$ = function () {
    return this.clipShape_1;
  };
  protoOf(ShapeBasedClip).getClipPath_nnv5ej_k$ = function (state, bounds, layoutDirection, density) {
    this.path_1.reset_5u6xz3_k$();
    addOutline(this.path_1, this.clipShape_1.createOutline_nnkieo_k$(bounds.get_size_cxx1ym_k$(), layoutDirection, density));
    this.path_1.translate_nzlwb0_k$(bounds.get_topLeft_ypvrd5_k$());
    return this.path_1;
  };
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function SharedTransitionScopeImpl$sharedElement$lambda(it) {
    return it.equals(EnterExitState_Visible_getInstance());
  }
  function SharedTransitionScopeImpl$sharedBounds$lambda(it) {
    return it.equals(EnterExitState_Visible_getInstance());
  }
  function SharedTransitionScopeImpl$sharedBounds$lambda$lambda($sharedContentState) {
    return function () {
      return $sharedContentState.get_isMatchFound_44sa8_k$();
    };
  }
  function SharedTransitionScopeImpl$sharedBounds$lambda$lambda_0($sharedContentState) {
    return function () {
      return $sharedContentState.get_isMatchFound_44sa8_k$();
    };
  }
  function SharedTransitionScopeImpl$sharedBounds$lambda_0($animatedVisibilityScope, $enter, $exit, $sharedContentState, $resizeMode) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceGroup_5hh8aj_k$(-419341573);
      sourceInformation($composer_0, 'C779@41927L35,771@41404L656,784@42227L530:SharedTransitionScope.kt#xbi5r1');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-419341573, $changed, -1, 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBounds.<anonymous> (SharedTransitionScope.kt:770)');
        tmp = Unit_getInstance();
      }
      var tmp_0 = $animatedVisibilityScope.get_transition_mcca1q_k$();
      sourceInformationMarkerStart($composer_0, -1411456741, 'CC(remember):SharedTransitionScope.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$($sharedContentState);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBounds.<anonymous>.<anonymous>' call
        var value = SharedTransitionScopeImpl$sharedBounds$lambda$lambda($sharedContentState);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_3 = createModifier(tmp_0, $enter, $exit, tmp1_group, 'enter/exit for ' + toString($sharedContentState.key_1), $composer_0, 0, 0);
      var tmp_4;
      if ($resizeMode instanceof ScaleToBoundsImpl) {
        var tmp_5 = Companion_getInstance();
        sourceInformationMarkerStart($composer_0, -1411446646, 'CC(remember):SharedTransitionScope.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_0.changedInstance_s1wkiy_k$($sharedContentState);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBounds.<anonymous>.<anonymous>' call
          var value_0 = SharedTransitionScopeImpl$sharedBounds$lambda$lambda_0($sharedContentState);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        tmp_4 = createContentScaleModifier(tmp_5, $resizeMode, tmp2_group);
      } else {
        tmp_4 = Companion_getInstance();
      }
      var tmp3_group = tmp_4;
      var tmp0 = tmp_3.then_g5qrxq_k$(tmp3_group);
      var tmp_8;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_8 = Unit_getInstance();
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      return tmp0;
    };
  }
  function SharedTransitionScopeImpl$sharedElementWithCallerManagedVisibility$lambda($visible) {
    return function (it) {
      return $visible;
    };
  }
  function SharedTransitionScopeImpl$sharedBoundsWithCallerManagedVisibility$lambda($visible) {
    return function (it) {
      return $visible;
    };
  }
  function SharedTransitionScopeImpl$observeAnimatingBlock$lambda(this$0) {
    return function () {
      var tmp0 = this$0.sharedElements_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterMap.any' call
        // Inline function 'androidx.collection.ScatterMap.forEach' call
        var k = tmp0.get_keys_x7wiqc_k$();
        var v = tmp0.get_values_s0ixei_k$();
        $l$block_0: {
          // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
          var m = tmp0.get_metadata_ddgo4n_k$();
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_0 = slot;
              if (!this_0.and_4spn93_k$(this_0.inv_28kx_k$().shl_bg8if3_k$(7)).and_4spn93_k$(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.and_4spn93_k$(new Long(255, 0)).compareTo_9jj042_k$(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                      var tmp = k[index];
                      (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                      var tmp_0 = v[index];
                      // Inline function 'androidx.collection.ScatterMap.any.<anonymous>' call
                      // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.observeAnimatingBlock.<anonymous>.<anonymous>' call
                      if (((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).isAnimating_x1kvqk_k$()) {
                        break $l$block;
                      }
                    }
                    slot = slot.shr_9fl3wl_k$(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block_0;
                }
              }
            }
             while (!(i === lastIndex));
        }
      }
      return Unit_getInstance();
    };
  }
  function SharedTransitionScopeImpl$updateTransitionActiveness$lambda(this$0) {
    return function (it) {
      updateTransitionActiveness(this$0);
      return Unit_getInstance();
    };
  }
  function SharedTransitionScopeImpl$sharedBoundsImpl$lambda($sharedContentState, this$0, $parentTransition, $visible, $boundsTransform, $placeHolderSize, $renderOnlyWhenVisible, $clipInOverlayDuringTransition, $zIndexInOverlay, $renderInOverlayDuringTransition) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceGroup_5hh8aj_k$(-1843478929);
      sourceInformation($composer_0, 'C:SharedTransitionScope.kt#xbi5r1');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1843478929, $changed, -1, 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBoundsImpl.<anonymous> (SharedTransitionScope.kt:968)');
        tmp = Unit_getInstance();
      }
      var key = $sharedContentState.key_1;
      $composer_0.startMovableGroup_clfloq_k$(-359675295, key);
      sourceInformation($composer_0, '970@51556L35,1006@53390L522');
      sourceInformationMarkerStart($composer_0, -359676293, 'CC(remember):SharedTransitionScope.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBoundsImpl.<anonymous>.<anonymous>' call
        var value = sharedElementsFor(this$0, key);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp2_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var sharedElement = tmp2_group;
      $composer_0.startMovableGroup_clfloq_k$(-359672306, $parentTransition);
      sourceInformation($composer_0, '*997@53029L278');
      var tmp_2;
      if (!($parentTransition == null)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(1735101820);
        sourceInformation($composer_0, '974@51759L53');
        var tmp2 = $parentTransition;
        // Inline function 'androidx.compose.animation.core.createChildTransition' call
        var label = toString(key);
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1215497572, 'CC(createChildTransition)1814@74186L36,1815@74246L74,1816@74343L39,1817@74394L63:Transition.kt#pdpnli');
        if (!((0 & 1) === 0))
          label = 'ChildTransition';
        sourceInformationMarkerStart($composer_1, 272028789, 'CC(remember):Transition.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = (0 & 14 ^ 6) > 4 && $composer_1.changed_ga7h3f_k$(tmp2) || (0 & 6) === 4;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.compose.animation.core.createChildTransition.<anonymous>' call
          var value_0 = tmp2.get_currentState_snihnl_k$();
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        var initialParentState = tmp1_group;
        var tmp7 = tmp2.get_isSeeking_vjb393_k$() ? tmp2.get_currentState_snihnl_k$() : initialParentState;
        // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBoundsImpl.<anonymous>.<anonymous>' call
        var $changed_0 = 112 & 0 >> 3;
        var $composer_2 = $composer_1;
        $composer_0.startReplaceGroup_5hh8aj_k$(1329676753);
        sourceInformation($composer_0, 'C:SharedTransitionScope.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(1329676753, $changed_0, -1, 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBoundsImpl.<anonymous>.<anonymous>.<anonymous>.<anonymous> (SharedTransitionScope.kt:974)');
        }
        var tmp0 = $visible(tmp7);
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_0.endReplaceGroup_ek144q_k$();
        var initialState = tmp0;
        var tmp10 = tmp2.get_targetState_kri3mx_k$();
        // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBoundsImpl.<anonymous>.<anonymous>' call
        var $changed_1 = 112 & 0 >> 3;
        var $composer_3 = $composer_1;
        $composer_0.startReplaceGroup_5hh8aj_k$(1329676753);
        sourceInformation($composer_0, 'C:SharedTransitionScope.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(1329676753, $changed_1, -1, 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBoundsImpl.<anonymous>.<anonymous>.<anonymous>.<anonymous> (SharedTransitionScope.kt:974)');
        }
        var tmp0_0 = $visible(tmp10);
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_0.endReplaceGroup_ek144q_k$();
        var targetState = tmp0_0;
        var tmp0_1 = createChildTransitionInternal(tmp2, initialState, targetState, label, $composer_1, 14 & 0 | 7168 & 0 << 6);
        sourceInformationMarkerEnd($composer_1);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_2 = tmp0_1;
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(1735245009);
        sourceInformation($composer_0, '*979@52034L707,992@52800L35');
        var targetState_0 = (typeof $visible === 'function' ? $visible : THROW_CCE())(Unit_getInstance());
        sourceInformationMarkerStart($composer_0, -359660325, 'CC(remember):SharedTransitionScope.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBoundsImpl.<anonymous>.<anonymous>' call
          var tmp_6;
          if (!(sharedElement.get_currentBounds_rrenad_k$() == null)) {
            tmp_6 = !targetState_0;
          } else {
            tmp_6 = targetState_0;
          }
          var value_1 = new MutableTransitionState(tmp_6);
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_7 = tmp_5;
        var tmp4_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBoundsImpl.<anonymous>.<anonymous>' call
        tmp4_group.set_targetState_1ag6bn_k$(targetState_0);
        var transitionState = tmp4_group;
        var tmp6_group = rememberTransition(transitionState, null, $composer_0, 0, 2);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_2 = tmp6_group;
      }
      var boundsTransition = tmp_2;
      $composer_0.startMovableGroup_clfloq_k$(-359633642, this$0.get_isTransitionActive_t69j02_k$());
      sourceInformation($composer_0, '995@52949L45');
      var tmp_8 = get_VectorConverter_2(Companion_getInstance_3());
      var tmp7_0 = createDeferredAnimation(boundsTransition, tmp_8, null, $composer_0, 0, 2);
      $composer_0.endMovableGroup_kd2hcs_k$();
      var animation = tmp7_0;
      sourceInformationMarkerStart($composer_0, -359628914, 'CC(remember):SharedTransitionScope.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.changed_ga7h3f_k$(boundsTransition);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid_0 || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBoundsImpl.<anonymous>.<anonymous>' call
        var value_2 = new BoundsAnimation(this$0, boundsTransition, animation, $boundsTransform);
        $composer_0.updateRememberedValue_l1wh71_k$(value_2);
        tmp_9 = value_2;
      } else {
        tmp_9 = it_2;
      }
      var tmp_10 = tmp_9;
      var tmp8_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBoundsImpl.<anonymous>.<anonymous>' call
      tmp8_group.updateAnimation_opighb_k$(animation, $boundsTransform);
      $composer_0.endMovableGroup_kd2hcs_k$();
      var boundsAnimation = tmp8_group;
      var tmp1 = rememberSharedElementState(this$0, sharedElement, boundsAnimation, $placeHolderSize, $renderOnlyWhenVisible, $sharedContentState, $clipInOverlayDuringTransition, $zIndexInOverlay, $renderInOverlayDuringTransition, $composer_0, 0);
      $composer_0.endMovableGroup_kd2hcs_k$();
      var sharedElementState = tmp1;
      var tmp0_2 = $this$composed.then_g5qrxq_k$(new SharedBoundsNodeElement(sharedElementState));
      var tmp_11;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_11 = Unit_getInstance();
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      return tmp0_2;
    };
  }
  function SharedTransitionScopeImpl$drawInOverlay$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.drawInOverlay.<anonymous>' call
    var tmp;
    var tmp_0;
    var tmp_1;
    if (a.get_zIndex_mbbc75_k$() === 0.0) {
      tmp_1 = a instanceof SharedElementInternalState;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = a.get_parentState_ui10gu_k$() == null;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = -1.0;
    } else {
      tmp = a.get_zIndex_mbbc75_k$();
    }
    var tmp_2 = tmp;
    // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.drawInOverlay.<anonymous>' call
    var tmp_3;
    var tmp_4;
    var tmp_5;
    if (b.get_zIndex_mbbc75_k$() === 0.0) {
      tmp_5 = b instanceof SharedElementInternalState;
    } else {
      tmp_5 = false;
    }
    if (tmp_5) {
      tmp_4 = b.get_parentState_ui10gu_k$() == null;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = -1.0;
    } else {
      tmp_3 = b.get_zIndex_mbbc75_k$();
    }
    var tmp$ret$1 = tmp_3;
    return compareValues(tmp_2, tmp$ret$1);
  }
  function SharedTransitionScopeImpl$onStateRemoved$slambda($$this$with, resultContinuation) {
    this.$$this$with_1 = $$this$with;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SharedTransitionScopeImpl$onStateRemoved$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SharedTransitionScopeImpl$onStateRemoved$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SharedTransitionScopeImpl$onStateRemoved$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          if (this.$$this$with_1.get_states_jnf5zf_k$().isEmpty_y1axqb_k$()) {
            this.$$this$with_1.get_scope_iyfcq3_k$().sharedElements_1.remove_gppy8k_k$(this.$$this$with_1.get_key_18j28a_k$());
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(SharedTransitionScopeImpl$onStateRemoved$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new SharedTransitionScopeImpl$onStateRemoved$slambda(this.$$this$with_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(SharedTransitionScopeImpl$onStateRemoved$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function SharedTransitionScopeImpl$onStateRemoved$slambda_0($$this$with, resultContinuation) {
    var i = new SharedTransitionScopeImpl$onStateRemoved$slambda($$this$with, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SharedTransitionScopeImpl(lookaheadScope, coroutineScope) {
    this.coroutineScope_1 = coroutineScope;
    this.$$delegate_0__1 = lookaheadScope;
    this.isTransitionActive$delegate_1 = mutableStateOf(false);
    var tmp = this;
    tmp.observeAnimatingBlock_1 = SharedTransitionScopeImpl$observeAnimatingBlock$lambda(this);
    var tmp_0 = this;
    tmp_0.updateTransitionActiveness_1 = SharedTransitionScopeImpl$updateTransitionActiveness$lambda(this);
    this.nullableLookaheadRoot_1 = null;
    this.renderers_1 = mutableStateListOf();
    this.sharedElements_1 = new MutableScatterMap();
  }
  protoOf(SharedTransitionScopeImpl).get_coroutineScope_5k7h45_k$ = function () {
    return this.coroutineScope_1;
  };
  protoOf(SharedTransitionScopeImpl).get_lookaheadScopeCoordinates_jgnt3f_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.get_lookaheadScopeCoordinates_jgnt3f_k$(_this__u8e3s4);
  };
  protoOf(SharedTransitionScopeImpl).localLookaheadPositionOf_b7sqvq_k$ = function (_this__u8e3s4, sourceCoordinates, relativeToSource, includeMotionFrameOfReference) {
    return this.$$delegate_0__1.localLookaheadPositionOf_b7sqvq_k$(_this__u8e3s4, sourceCoordinates, relativeToSource, includeMotionFrameOfReference);
  };
  protoOf(SharedTransitionScopeImpl).toLookaheadCoordinates_1gvv32_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.toLookaheadCoordinates_1gvv32_k$(_this__u8e3s4);
  };
  protoOf(SharedTransitionScopeImpl).get_isTransitionActive_t69j02_k$ = function () {
    var tmp0 = this.isTransitionActive$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    isTransitionActive$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedTransitionScopeImpl).skipToLookaheadSize_b06tnw_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.then_g5qrxq_k$(new SkipToLookaheadElement());
  };
  protoOf(SharedTransitionScopeImpl).renderInSharedTransitionScopeOverlay_gioz4y_k$ = function (_this__u8e3s4, renderInOverlay, zIndexInOverlay, clipInOverlayDuringTransition) {
    return _this__u8e3s4.then_g5qrxq_k$(new RenderInTransitionOverlayNodeElement(this, renderInOverlay, zIndexInOverlay, clipInOverlayDuringTransition));
  };
  protoOf(SharedTransitionScopeImpl).sharedElement_5f1zge_k$ = function (_this__u8e3s4, state, animatedVisibilityScope, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) {
    var tmp = animatedVisibilityScope.get_transition_mcca1q_k$();
    return sharedBoundsImpl(_this__u8e3s4, this, state, tmp, SharedTransitionScopeImpl$sharedElement$lambda, boundsTransform, placeHolderSize, true, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  };
  protoOf(SharedTransitionScopeImpl).sharedBounds_k7ql06_k$ = function (_this__u8e3s4, sharedContentState, animatedVisibilityScope, enter, exit, boundsTransform, resizeMode, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) {
    var tmp0_parentTransition = animatedVisibilityScope.get_transition_mcca1q_k$();
    var tmp = sharedBoundsImpl(_this__u8e3s4, this, sharedContentState, tmp0_parentTransition, SharedTransitionScopeImpl$sharedBounds$lambda, boundsTransform, placeHolderSize, false, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
    return composed(tmp, VOID, SharedTransitionScopeImpl$sharedBounds$lambda_0(animatedVisibilityScope, enter, exit, sharedContentState, resizeMode));
  };
  protoOf(SharedTransitionScopeImpl).sharedElementWithCallerManagedVisibility_pswh70_k$ = function (_this__u8e3s4, sharedContentState, visible, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) {
    return sharedBoundsImpl(_this__u8e3s4, this, sharedContentState, null, SharedTransitionScopeImpl$sharedElementWithCallerManagedVisibility$lambda(visible), boundsTransform, placeHolderSize, true, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  };
  protoOf(SharedTransitionScopeImpl).sharedBoundsWithCallerManagedVisibility_k2rbwo_k$ = function (_this__u8e3s4, sharedContentState, visible, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) {
    return sharedBoundsImpl(_this__u8e3s4, this, sharedContentState, null, SharedTransitionScopeImpl$sharedBoundsWithCallerManagedVisibility$lambda(visible), boundsTransform, placeHolderSize, false, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  };
  protoOf(SharedTransitionScopeImpl).sharedBoundsWithCallerManagedVisibility$default_vikp8w_k$ = function (_this__u8e3s4, sharedContentState, visible, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    boundsTransform = boundsTransform === VOID ? get_DefaultBoundsTransform() : boundsTransform;
    placeHolderSize = placeHolderSize === VOID ? Companion_getInstance_14().contentSize_1 : placeHolderSize;
    renderInOverlayDuringTransition = renderInOverlayDuringTransition === VOID ? true : renderInOverlayDuringTransition;
    zIndexInOverlay = zIndexInOverlay === VOID ? 0.0 : zIndexInOverlay;
    clipInOverlayDuringTransition = clipInOverlayDuringTransition === VOID ? get_ParentClip() : clipInOverlayDuringTransition;
    return $super === VOID ? this.sharedBoundsWithCallerManagedVisibility_k2rbwo_k$(_this__u8e3s4, sharedContentState, visible, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) : $super.sharedBoundsWithCallerManagedVisibility_k2rbwo_k$.call(this, _this__u8e3s4, sharedContentState, visible, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  };
  protoOf(SharedTransitionScopeImpl).OverlayClip_rtukmp_k$ = function (clipShape) {
    return new ShapeBasedClip(clipShape);
  };
  protoOf(SharedTransitionScopeImpl).rememberSharedContentState_92w4g5_k$ = function (key, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(799702514);
    sourceInformation($composer_0, 'C(rememberSharedContentState)912@49465L53:SharedTransitionScope.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(799702514, $changed, -1, 'androidx.compose.animation.SharedTransitionScopeImpl.rememberSharedContentState (SharedTransitionScope.kt:912)');
    }
    sourceInformationMarkerStart($composer_0, 935469886, 'CC(remember):SharedTransitionScope.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changed_ga7h3f_k$(key);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.rememberSharedContentState.<anonymous>' call
      var value = new SharedContentState(key);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp1_group;
  };
  protoOf(SharedTransitionScopeImpl).set_root_rgs4c_k$ = function (_set____db54di) {
    this.root_1 = _set____db54di;
  };
  protoOf(SharedTransitionScopeImpl).get_root_4w1woo_k$ = function () {
    var tmp = this.root_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('root');
    }
  };
  protoOf(SharedTransitionScopeImpl).get_lookaheadRoot_u3i6mw_k$ = function () {
    var tmp0 = this.nullableLookaheadRoot_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.<get-lookaheadRoot>.<anonymous>' call
        var message = 'Error: Uninitialized LayoutCoordinates. Please make sure when using the SharedTransitionScope composable function, the modifier passed to the child content is being used, or use SharedTransitionLayout instead.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  };
  protoOf(SharedTransitionScopeImpl).set_nullableLookaheadRoot_gsik0m_k$ = function (_set____db54di) {
    this.nullableLookaheadRoot_1 = _set____db54di;
  };
  protoOf(SharedTransitionScopeImpl).get_nullableLookaheadRoot_f5e68p_k$ = function () {
    return this.nullableLookaheadRoot_1;
  };
  protoOf(SharedTransitionScopeImpl).drawInOverlay_27qf1y_k$ = function (scope) {
    // Inline function 'kotlin.collections.sortBy' call
    var this_0 = this.renderers_1;
    if (this_0.get_size_woubt6_k$() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = SharedTransitionScopeImpl$drawInOverlay$lambda;
      var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
      sortWith(this_0, tmp$ret$0);
    }
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.renderers_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_1.get_c1px32_k$(index);
        // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.drawInOverlay.<anonymous>' call
        item.drawInOverlay_ircoes_k$(scope);
      }
       while (inductionVariable <= last);
  };
  protoOf(SharedTransitionScopeImpl).onStateRemoved_npklb2_k$ = function (sharedElementState) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.onStateRemoved.<anonymous>' call
    var $this$with = sharedElementState.get_sharedElement_xjw30y_k$();
    $this$with.removeState_35kh4q_k$(sharedElementState);
    this.updateTransitionActiveness_1(this);
    get_SharedTransitionObserver().observeReads_r9h55h_k$($this$with.get_scope_iyfcq3_k$(), this.updateTransitionActiveness_1, this.observeAnimatingBlock_1);
    this.renderers_1.remove_an8aut_k$(sharedElementState);
    if ($this$with.get_states_jnf5zf_k$().isEmpty_y1axqb_k$()) {
      var tmp = $this$with.get_scope_iyfcq3_k$().coroutineScope_1;
      launch(tmp, VOID, VOID, SharedTransitionScopeImpl$onStateRemoved$slambda_0($this$with, null));
    }
  };
  protoOf(SharedTransitionScopeImpl).onStateAdded_r36lku_k$ = function (sharedElementState) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.onStateAdded.<anonymous>' call
    var $this$with = sharedElementState.get_sharedElement_xjw30y_k$();
    $this$with.addState_rbuktl_k$(sharedElementState);
    this.updateTransitionActiveness_1(this);
    get_SharedTransitionObserver().observeReads_r9h55h_k$($this$with.get_scope_iyfcq3_k$(), this.updateTransitionActiveness_1, this.observeAnimatingBlock_1);
    var tmp0 = this.renderers_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var index = 0;
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.onStateAdded.<anonymous>.<anonymous>' call
        var tmp0_safe_receiver = item instanceof SharedElementInternalState ? item : null;
        if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_sharedElement_xjw30y_k$(), sharedElementState.get_sharedElement_xjw30y_k$())) {
          tmp$ret$1 = index;
          break $l$block;
        }
        index = index + 1 | 0;
      }
      tmp$ret$1 = -1;
    }
    var id = tmp$ret$1;
    var tmp;
    if (id === (this.renderers_1.get_size_woubt6_k$() - 1 | 0) || id === -1) {
      tmp = this.renderers_1.add_wl2rvy_k$(sharedElementState);
    } else {
      this.renderers_1.add_gaf1mg_k$(id + 1 | 0, sharedElementState);
      tmp = Unit_getInstance();
    }
  };
  protoOf(SharedTransitionScopeImpl).onLayerRendererCreated_lwx1jm_k$ = function (renderer) {
    this.renderers_1.add_wl2rvy_k$(renderer);
  };
  protoOf(SharedTransitionScopeImpl).onLayerRendererRemoved_bn3slm_k$ = function (renderer) {
    this.renderers_1.remove_an8aut_k$(renderer);
  };
  function BoundsTransform() {
  }
  function ScaleToBoundsImpl(contentScale, alignment) {
    this.contentScale_1 = contentScale;
    this.alignment_1 = alignment;
  }
  protoOf(ScaleToBoundsImpl).get_contentScale_i3wrkq_k$ = function () {
    return this.contentScale_1;
  };
  protoOf(ScaleToBoundsImpl).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  function RemeasureImpl() {
    RemeasureImpl_instance = this;
  }
  var RemeasureImpl_instance;
  function RemeasureImpl_getInstance() {
    if (RemeasureImpl_instance == null)
      new RemeasureImpl();
    return RemeasureImpl_instance;
  }
  function ScaleToBoundsCached(contentScale, alignment) {
    _init_properties_SharedTransitionScope_kt__irnofc();
    if (get_shouldCache(contentScale) && get_shouldCache_0(alignment)) {
      // Inline function 'androidx.collection.MutableScatterMap.getOrPut' call
      var this_0 = get_cachedScaleToBoundsImplMap();
      var tmp0_elvis_lhs = this_0.get_wei43m_k$(contentScale);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'androidx.compose.animation.ScaleToBoundsCached.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_1 = new MutableScatterMap();
        // Inline function 'androidx.collection.MutableScatterMap.getOrPut.<anonymous>' call
        this_0.set_b9w55f_k$(contentScale, this_1);
        tmp = this_1;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var map = tmp;
      // Inline function 'androidx.collection.MutableScatterMap.getOrPut' call
      var tmp0_elvis_lhs_0 = map.get_wei43m_k$(alignment);
      var tmp_0;
      if (tmp0_elvis_lhs_0 == null) {
        // Inline function 'androidx.compose.animation.ScaleToBoundsCached.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_2 = new ScaleToBoundsImpl(contentScale, alignment);
        // Inline function 'androidx.collection.MutableScatterMap.getOrPut.<anonymous>' call
        map.set_b9w55f_k$(alignment, this_2);
        tmp_0 = this_2;
      } else {
        tmp_0 = tmp0_elvis_lhs_0;
      }
      return tmp_0;
    } else {
      return new ScaleToBoundsImpl(contentScale, alignment);
    }
  }
  function SkipToLookaheadElement(scaleToBounds, isEnabled) {
    scaleToBounds = scaleToBounds === VOID ? null : scaleToBounds;
    isEnabled = isEnabled === VOID ? get_DefaultEnabled() : isEnabled;
    ModifierNodeElement.call(this);
    this.scaleToBounds_1 = scaleToBounds;
    this.isEnabled_1 = isEnabled;
  }
  protoOf(SkipToLookaheadElement).get_scaleToBounds_v7yegf_k$ = function () {
    return this.scaleToBounds_1;
  };
  protoOf(SkipToLookaheadElement).get_isEnabled_roz1ma_k$ = function () {
    return this.isEnabled_1;
  };
  protoOf(SkipToLookaheadElement).create_md4cuc_k$ = function () {
    return new SkipToLookaheadNode(this.scaleToBounds_1, this.isEnabled_1);
  };
  protoOf(SkipToLookaheadElement).update_8x823x_k$ = function (node) {
    node.set_scaleToBounds_7de1qi_k$(this.scaleToBounds_1);
    node.set_isEnabled_9kb97j_k$(this.isEnabled_1);
  };
  protoOf(SkipToLookaheadElement).update_9wd57p_k$ = function (node) {
    return this.update_8x823x_k$(node instanceof SkipToLookaheadNode ? node : THROW_CCE());
  };
  protoOf(SkipToLookaheadElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('skipToLookahead');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('scaleToBounds', this.scaleToBounds_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('isEnabled', this.isEnabled_1);
  };
  protoOf(SkipToLookaheadElement).component1_7eebsc_k$ = function () {
    return this.scaleToBounds_1;
  };
  protoOf(SkipToLookaheadElement).component2_7eebsb_k$ = function () {
    return this.isEnabled_1;
  };
  protoOf(SkipToLookaheadElement).copy_emg3yj_k$ = function (scaleToBounds, isEnabled) {
    return new SkipToLookaheadElement(scaleToBounds, isEnabled);
  };
  protoOf(SkipToLookaheadElement).copy$default_djm75s_k$ = function (scaleToBounds, isEnabled, $super) {
    scaleToBounds = scaleToBounds === VOID ? this.scaleToBounds_1 : scaleToBounds;
    isEnabled = isEnabled === VOID ? this.isEnabled_1 : isEnabled;
    return $super === VOID ? this.copy_emg3yj_k$(scaleToBounds, isEnabled) : $super.copy_emg3yj_k$.call(this, scaleToBounds, isEnabled);
  };
  protoOf(SkipToLookaheadElement).toString = function () {
    return 'SkipToLookaheadElement(scaleToBounds=' + toString_0(this.scaleToBounds_1) + ', isEnabled=' + toString(this.isEnabled_1) + ')';
  };
  protoOf(SkipToLookaheadElement).hashCode = function () {
    var result = this.scaleToBounds_1 == null ? 0 : hashCode(this.scaleToBounds_1);
    result = imul(result, 31) + hashCode(this.isEnabled_1) | 0;
    return result;
  };
  protoOf(SkipToLookaheadElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkipToLookaheadElement))
      return false;
    var tmp0_other_with_cast = other instanceof SkipToLookaheadElement ? other : THROW_CCE();
    if (!equals(this.scaleToBounds_1, tmp0_other_with_cast.scaleToBounds_1))
      return false;
    if (!equals(this.isEnabled_1, tmp0_other_with_cast.isEnabled_1))
      return false;
    return true;
  };
  function createContentScaleModifier(_this__u8e3s4, scaleToBounds, isEnabled) {
    _init_properties_SharedTransitionScope_kt__irnofc();
    var tmp;
    if (equals(scaleToBounds.contentScale_1, Companion_getInstance_11().get_Crop_wnzuux_k$())) {
      var tmp_0 = Companion_getInstance();
      tmp = graphicsLayer(tmp_0, createContentScaleModifier$lambda(isEnabled));
    } else {
      tmp = Companion_getInstance();
    }
    return _this__u8e3s4.then_g5qrxq_k$(tmp).then_g5qrxq_k$(new SkipToLookaheadElement(scaleToBounds, isEnabled));
  }
  function get_shouldCache(_this__u8e3s4) {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return _this__u8e3s4 === Companion_getInstance_11().get_FillWidth_n2o75m_k$() || _this__u8e3s4 === Companion_getInstance_11().get_FillHeight_262ytp_k$() || _this__u8e3s4 === Companion_getInstance_11().get_FillBounds_4umybj_k$() || _this__u8e3s4 === Companion_getInstance_11().get_Fit_18jtko_k$() || _this__u8e3s4 === Companion_getInstance_11().get_Crop_wnzuux_k$() || _this__u8e3s4 === Companion_getInstance_11().get_None_wo6tgh_k$() || _this__u8e3s4 === Companion_getInstance_11().get_Inside_bggkb_k$();
  }
  function get_shouldCache_0(_this__u8e3s4) {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return _this__u8e3s4 === Companion_getInstance_5().get_TopStart_o4x792_k$() || _this__u8e3s4 === Companion_getInstance_5().get_TopCenter_u4q5vl_k$() || _this__u8e3s4 === Companion_getInstance_5().get_TopEnd_4wiiy7_k$() || _this__u8e3s4 === Companion_getInstance_5().get_CenterStart_2305fg_k$() || _this__u8e3s4 === Companion_getInstance_5().get_Center_3arb0i_k$() || _this__u8e3s4 === Companion_getInstance_5().get_CenterEnd_uti4xp_k$() || _this__u8e3s4 === Companion_getInstance_5().get_BottomStart_v81qpa_k$() || _this__u8e3s4 === Companion_getInstance_5().get_BottomCenter_yatb1z_k$() || _this__u8e3s4 === Companion_getInstance_5().get_BottomEnd_ayz0tj_k$();
  }
  function SkipToLookaheadNode$measure$lambda$lambda($resolvedScale) {
    return function ($this$placeWithLayer) {
      $this$placeWithLayer.set_scaleX_ykjjzx_k$(_ScaleFactor___get_scaleX__impl__u0r14l($resolvedScale));
      $this$placeWithLayer.set_scaleY_i4eqp0_k$(_ScaleFactor___get_scaleY__impl__174k2e($resolvedScale));
      $this$placeWithLayer.set_transformOrigin_wfji5_k$(TransformOrigin_0(0.0, 0.0));
      return Unit_getInstance();
    };
  }
  function SkipToLookaheadNode$measure$lambda(this$0, $p, $contentSize, $constrainedSize, $this_measure) {
    return function ($this$layout) {
      var scaleToBounds = this$0.get_scaleToBounds_v7yegf_k$();
      var tmp;
      if (!this$0.get_isEnabled_roz1ma_k$()() || scaleToBounds == null) {
        $this$layout.place$default_lcv1ed_k$($p, 0, 0);
        tmp = Unit_getInstance();
      } else {
        var contentScale = scaleToBounds.contentScale_1;
        var tmp_0;
        if (_IntSize___get_width__impl__d9yl4o($contentSize) === 0 || _IntSize___get_height__impl__prv63b($contentSize) === 0) {
          tmp_0 = ScaleFactor(1.0, 1.0);
        } else {
          tmp_0 = contentScale.computeScaleFactor_swd2p8_k$(toSize($contentSize), toSize($constrainedSize));
        }
        var resolvedScale = tmp_0;
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = _IntSize___get_width__impl__d9yl4o($contentSize) * _ScaleFactor___get_scaleX__impl__u0r14l(resolvedScale);
        var tmp_1 = roundToInt(this_0);
        // Inline function 'kotlin.math.roundToInt' call
        var this_1 = _IntSize___get_height__impl__prv63b($contentSize) * _ScaleFactor___get_scaleY__impl__174k2e(resolvedScale);
        var tmp$ret$1 = roundToInt(this_1);
        var tmp0_container = scaleToBounds.alignment_1.align_mb8mzc_k$(IntSize_0(tmp_1, tmp$ret$1), $constrainedSize, $this_measure.get_layoutDirection_7e37v0_k$());
        // Inline function 'androidx.compose.ui.unit.IntOffset.component1' call
        var x = _IntOffset___get_x__impl__qiqr5o(tmp0_container);
        // Inline function 'androidx.compose.ui.unit.IntOffset.component2' call
        var y = _IntOffset___get_y__impl__2avpwj(tmp0_container);
        $this$layout.placeWithLayer$default_hwuan4_k$($p, x, y, VOID, SkipToLookaheadNode$measure$lambda$lambda(resolvedScale));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SkipToLookaheadNode(scaleToBounds, isEnabled) {
    Node.call(this);
    this.lookaheadConstraints_1 = null;
    this.scaleToBounds$delegate_1 = mutableStateOf(scaleToBounds);
    this.isEnabled$delegate_1 = mutableStateOf(isEnabled);
  }
  protoOf(SkipToLookaheadNode).set_lookaheadConstraints_2j9szp_k$ = function (_set____db54di) {
    this.lookaheadConstraints_1 = _set____db54di;
  };
  protoOf(SkipToLookaheadNode).get_lookaheadConstraints_ey148n_k$ = function () {
    return this.lookaheadConstraints_1;
  };
  protoOf(SkipToLookaheadNode).set_scaleToBounds_7de1qi_k$ = function (_set____db54di) {
    var tmp0 = this.scaleToBounds$delegate_1;
    scaleToBounds$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SkipToLookaheadNode).get_scaleToBounds_v7yegf_k$ = function () {
    var tmp0 = this.scaleToBounds$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    scaleToBounds$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SkipToLookaheadNode).set_isEnabled_9kb97j_k$ = function (_set____db54di) {
    var tmp0 = this.isEnabled$delegate_1;
    isEnabled$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SkipToLookaheadNode).get_isEnabled_roz1ma_k$ = function () {
    var tmp0 = this.isEnabled$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    isEnabled$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SkipToLookaheadNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    if (_this__u8e3s4.get_isLookingAhead_2057g1_k$()) {
      this.lookaheadConstraints_1 = constraints;
    }
    var tmp = this.lookaheadConstraints_1;
    var p = measurable.measure_4dmfk1_k$(ensureNotNull(tmp == null ? null : new Constraints_0(tmp)).value_1);
    var contentSize = IntSize_0(p.get_width_j0q4yl_k$(), p.get_height_e7t92o_k$());
    var constrainedSize = constrain(constraints, contentSize);
    var tmp_0 = _IntSize___get_width__impl__d9yl4o(constrainedSize);
    var tmp_1 = _IntSize___get_height__impl__prv63b(constrainedSize);
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp_0, tmp_1, VOID, SkipToLookaheadNode$measure$lambda(this, p, contentSize, constrainedSize, _this__u8e3s4));
  };
  function get_VisualDebugging() {
    return VisualDebugging;
  }
  var VisualDebugging;
  function sam$androidx_compose_animation_BoundsTransform$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_BoundsTransform$0).transform_372bqs_k$ = function (initialBounds, targetBounds) {
    return this.function_1(initialBounds, targetBounds);
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, BoundsTransform) : false) {
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
  protoOf(sam$androidx_compose_animation_BoundsTransform$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function DefaultEnabled$lambda() {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return true;
  }
  function ParentClip$1() {
  }
  protoOf(ParentClip$1).getClipPath_nnv5ej_k$ = function (state, bounds, layoutDirection, density) {
    var tmp0_safe_receiver = state.get_parentSharedContentState_agqmhc_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_clipPathInOverlay_c5z0b7_k$();
  };
  function DefaultClipInOverlayDuringTransition$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return null;
  }
  function DefaultBoundsTransform$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return get_DefaultSpring();
  }
  function SharedTransitionObserver$delegate$lambda() {
    _init_properties_SharedTransitionScope_kt__irnofc();
    // Inline function 'kotlin.also' call
    var this_0 = new SnapshotStateObserver(SharedTransitionObserver$delegate$lambda$lambda);
    // Inline function 'androidx.compose.animation.SharedTransitionObserver$delegate.<anonymous>.<anonymous>' call
    this_0.start_fyv442_k$();
    return this_0;
  }
  function SharedTransitionObserver$delegate$lambda$lambda(it) {
    _init_properties_SharedTransitionScope_kt__irnofc();
    it();
    return Unit_getInstance();
  }
  function createContentScaleModifier$lambda($isEnabled) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.set_clip_a88iug_k$($isEnabled());
      return Unit_getInstance();
    };
  }
  function SharedTransitionObserver$factory() {
    return getPropertyCallableRef('SharedTransitionObserver', 0, KProperty0, function () {
      return get_SharedTransitionObserver();
    }, null);
  }
  function internalState$factory() {
    return getPropertyCallableRef('internalState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_internalState_d3bhs8_k$();
    }, function (receiver, value) {
      return receiver.set_internalState_gjuaik_k$(value);
    });
  }
  function internalState$factory_0() {
    return getPropertyCallableRef('internalState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_internalState_d3bhs8_k$();
    }, function (receiver, value) {
      return receiver.set_internalState_gjuaik_k$(value);
    });
  }
  function isTransitionActive$factory() {
    return getPropertyCallableRef('isTransitionActive', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isTransitionActive_t69j02_k$();
    }, function (receiver, value) {
      return _set_isTransitionActive__umwr0u(receiver, value);
    });
  }
  function isTransitionActive$factory_0() {
    return getPropertyCallableRef('isTransitionActive', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isTransitionActive_t69j02_k$();
    }, function (receiver, value) {
      return _set_isTransitionActive__umwr0u(receiver, value);
    });
  }
  function scaleToBounds$factory() {
    return getPropertyCallableRef('scaleToBounds', 1, KMutableProperty1, function (receiver) {
      return receiver.get_scaleToBounds_v7yegf_k$();
    }, function (receiver, value) {
      return receiver.set_scaleToBounds_7de1qi_k$(value);
    });
  }
  function scaleToBounds$factory_0() {
    return getPropertyCallableRef('scaleToBounds', 1, KMutableProperty1, function (receiver) {
      return receiver.get_scaleToBounds_v7yegf_k$();
    }, function (receiver, value) {
      return receiver.set_scaleToBounds_7de1qi_k$(value);
    });
  }
  function isEnabled$factory() {
    return getPropertyCallableRef('isEnabled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isEnabled_roz1ma_k$();
    }, function (receiver, value) {
      return receiver.set_isEnabled_9kb97j_k$(value);
    });
  }
  function isEnabled$factory_0() {
    return getPropertyCallableRef('isEnabled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isEnabled_roz1ma_k$();
    }, function (receiver, value) {
      return receiver.set_isEnabled_9kb97j_k$(value);
    });
  }
  var properties_initialized_SharedTransitionScope_kt_rkj5u2;
  function _init_properties_SharedTransitionScope_kt__irnofc() {
    if (!properties_initialized_SharedTransitionScope_kt_rkj5u2) {
      properties_initialized_SharedTransitionScope_kt_rkj5u2 = true;
      DefaultEnabled = DefaultEnabled$lambda;
      DefaultSpring = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), get_VisibilityThreshold(Companion_getInstance_3()));
      ParentClip = new ParentClip$1();
      DefaultClipInOverlayDuringTransition = DefaultClipInOverlayDuringTransition$lambda;
      var tmp = DefaultBoundsTransform$lambda;
      DefaultBoundsTransform = new sam$androidx_compose_animation_BoundsTransform$0(tmp);
      var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
      SharedTransitionObserver$delegate = lazy(tmp_0, SharedTransitionObserver$delegate$lambda);
      cachedScaleToBoundsImplMap = new MutableScatterMap();
    }
  }
  function get_colorDefaultSpring() {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    return colorDefaultSpring;
  }
  var colorDefaultSpring;
  function animateColorAsState(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -451899108, 'C(animateColorAsState)P(3:c#ui.graphics.Color!1,2)62@2847L96,65@2955L124:SingleValueAnimation.kt#xbi5r1');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_colorDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'ColorAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-451899108, $changed, -1, 'androidx.compose.animation.animateColorAsState (SingleValueAnimation.kt:61)');
    }
    var tmp1_remember$arg$0 = _Color___get_colorSpace__impl__jqqozk(targetValue);
    sourceInformationMarkerStart($composer_0, -1018619694, 'CC(remember):SingleValueAnimation.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changed_ga7h3f_k$(tmp1_remember$arg$0);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.animateColorAsState.<anonymous>' call
      var value = get_VectorConverter_3(Companion_getInstance_9())(_Color___get_colorSpace__impl__jqqozk(targetValue));
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp2_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var converter = tmp2_group;
    var tmp_1 = animationSpec_0;
    var tmp0 = animateValueAsState(new Color_0(targetValue), converter, tmp_1, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  var properties_initialized_SingleValueAnimation_kt_kqgwkj;
  function _init_properties_SingleValueAnimation_kt__hxy1sr() {
    if (!properties_initialized_SingleValueAnimation_kt_kqgwkj) {
      properties_initialized_SingleValueAnimation_kt_kqgwkj = true;
      colorDefaultSpring = spring();
    }
  }
  function splineBasedDecay(density) {
    return generateDecayAnimationSpec(new SplineBasedFloatDecayAnimationSpec(density));
  }
  function _get_NbSamples__pl9lcs($this) {
    return $this.NbSamples_1;
  }
  function _get_SplinePositions__4lf5u0($this) {
    return $this.SplinePositions_1;
  }
  function _get_SplineTimes__1bv5pg($this) {
    return $this.SplineTimes_1;
  }
  function FlingResult(distanceCoefficient, velocityCoefficient) {
    this.distanceCoefficient_1 = distanceCoefficient;
    this.velocityCoefficient_1 = velocityCoefficient;
  }
  protoOf(FlingResult).get_distanceCoefficient_3vhbop_k$ = function () {
    return this.distanceCoefficient_1;
  };
  protoOf(FlingResult).get_velocityCoefficient_w8qjlb_k$ = function () {
    return this.velocityCoefficient_1;
  };
  protoOf(FlingResult).component1_7eebsc_k$ = function () {
    return this.distanceCoefficient_1;
  };
  protoOf(FlingResult).component2_7eebsb_k$ = function () {
    return this.velocityCoefficient_1;
  };
  protoOf(FlingResult).copy_4tzoad_k$ = function (distanceCoefficient, velocityCoefficient) {
    return new FlingResult(distanceCoefficient, velocityCoefficient);
  };
  protoOf(FlingResult).copy$default_ujshx8_k$ = function (distanceCoefficient, velocityCoefficient, $super) {
    distanceCoefficient = distanceCoefficient === VOID ? this.distanceCoefficient_1 : distanceCoefficient;
    velocityCoefficient = velocityCoefficient === VOID ? this.velocityCoefficient_1 : velocityCoefficient;
    return $super === VOID ? this.copy_4tzoad_k$(distanceCoefficient, velocityCoefficient) : $super.copy_4tzoad_k$.call(this, distanceCoefficient, velocityCoefficient);
  };
  protoOf(FlingResult).toString = function () {
    return 'FlingResult(distanceCoefficient=' + this.distanceCoefficient_1 + ', velocityCoefficient=' + this.velocityCoefficient_1 + ')';
  };
  protoOf(FlingResult).hashCode = function () {
    var result = getNumberHashCode(this.distanceCoefficient_1);
    result = imul(result, 31) + getNumberHashCode(this.velocityCoefficient_1) | 0;
    return result;
  };
  protoOf(FlingResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingResult))
      return false;
    var tmp0_other_with_cast = other instanceof FlingResult ? other : THROW_CCE();
    if (!equals(this.distanceCoefficient_1, tmp0_other_with_cast.distanceCoefficient_1))
      return false;
    if (!equals(this.velocityCoefficient_1, tmp0_other_with_cast.velocityCoefficient_1))
      return false;
    return true;
  };
  function AndroidFlingSpline() {
    AndroidFlingSpline_instance = this;
    this.NbSamples_1 = 100;
    this.SplinePositions_1 = new Float32Array(101);
    this.SplineTimes_1 = new Float32Array(101);
    computeSplineInfo(this.SplinePositions_1, this.SplineTimes_1, 100);
  }
  protoOf(AndroidFlingSpline).flingPosition_kqyylv_k$ = function (time) {
    var clampedTime = coerceIn(time, 0.0, 1.0);
    var index = numberToInt(100 * clampedTime);
    var distanceCoef = 1.0;
    var velocityCoef = 0.0;
    if (index < 100) {
      var tInf = index / 100;
      var tSup = (index + 1 | 0) / 100;
      var dInf = this.SplinePositions_1[index];
      var dSup = this.SplinePositions_1[index + 1 | 0];
      velocityCoef = (dSup - dInf) / (tSup - tInf);
      distanceCoef = dInf + (clampedTime - tInf) * velocityCoef;
    }
    return new FlingResult(distanceCoef, velocityCoef);
  };
  protoOf(AndroidFlingSpline).deceleration_7lhbmp_k$ = function (velocity, friction) {
    // Inline function 'kotlin.math.abs' call
    // Inline function 'kotlin.math.ln' call
    var x = 0.35 * Math.abs(velocity) / friction;
    return Math.log(x);
  };
  var AndroidFlingSpline_instance;
  function AndroidFlingSpline_getInstance() {
    if (AndroidFlingSpline_instance == null)
      new AndroidFlingSpline();
    return AndroidFlingSpline_instance;
  }
  function computeSplineInfo(splinePositions, splineTimes, nbSamples) {
    var xMin = 0.0;
    var yMin = 0.0;
    var inductionVariable = 0;
    if (inductionVariable < nbSamples)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var alpha = i / nbSamples;
        var xMax = 1.0;
        var x;
        var tx;
        var coef;
        $l$loop: while (true) {
          x = xMin + (xMax - xMin) / 2.0;
          coef = 3.0 * x * (1.0 - x);
          tx = coef * ((1.0 - x) * 0.175 + x * 0.35000002) + x * x * x;
          // Inline function 'kotlin.math.abs' call
          var x_0 = tx - alpha;
          if (Math.abs(x_0) < 1.0E-5)
            break $l$loop;
          if (tx > alpha)
            xMax = x;
          else
            xMin = x;
        }
        splinePositions[i] = coef * ((1.0 - x) * 0.5 + x) + x * x * x;
        var yMax = 1.0;
        var y;
        var dy;
        $l$loop_0: while (true) {
          y = yMin + (yMax - yMin) / 2.0;
          coef = 3.0 * y * (1.0 - y);
          dy = coef * ((1.0 - y) * 0.5 + y) + y * y * y;
          // Inline function 'kotlin.math.abs' call
          var x_1 = dy - alpha;
          if (Math.abs(x_1) < 1.0E-5)
            break $l$loop_0;
          if (dy > alpha)
            yMax = y;
          else
            yMin = y;
        }
        splineTimes[i] = coef * ((1.0 - y) * 0.175 + y * 0.35000002) + y * y * y;
      }
       while (inductionVariable < nbSamples);
    splineTimes[nbSamples] = 1.0;
    splinePositions[nbSamples] = splineTimes[nbSamples];
  }
  function get_Inflection() {
    return Inflection;
  }
  var Inflection;
  function get_P2() {
    return P2;
  }
  var P2;
  function get_P1() {
    return P1;
  }
  var P1;
  function get_StartTension() {
    return StartTension;
  }
  var StartTension;
  function _get_flingCalculator__k6f165($this) {
    return $this.flingCalculator_1;
  }
  function flingDistance($this, startVelocity) {
    var tmp = $this.flingCalculator_1.flingDistance_e8js0p_k$(startVelocity);
    // Inline function 'kotlin.math.sign' call
    return tmp * sign(startVelocity);
  }
  function SplineBasedFloatDecayAnimationSpec(density) {
    this.flingCalculator_1 = new FlingCalculator(get_platformFlingScrollFriction(), density);
  }
  protoOf(SplineBasedFloatDecayAnimationSpec).get_absVelocityThreshold_wsgqo5_k$ = function () {
    return 0.0;
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getTargetValue_k8zsye_k$ = function (initialValue, initialVelocity) {
    return initialValue + flingDistance(this, initialVelocity);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getValueFromNanos_vizg24_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_jun7gj_k$(new Long(1000000, 0));
    return initialValue + this.flingCalculator_1.flingInfo_sr0d1q_k$(initialVelocity).position_oaxlut_k$(playTimeMillis);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getDurationNanos_dl2v11_k$ = function (initialValue, initialVelocity) {
    return this.flingCalculator_1.flingDuration_g3t3l4_k$(initialVelocity).times_nfzjiw_k$(new Long(1000000, 0));
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getVelocityFromNanos_eyb6gk_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_jun7gj_k$(new Long(1000000, 0));
    return this.flingCalculator_1.flingInfo_sr0d1q_k$(initialVelocity).velocity_2zfv01_k$(playTimeMillis);
  };
  function animateColor(_this__u8e3s4, transitionSpec, label, targetValueByState, $composer, $changed, $default) {
    var transitionSpec_0 = transitionSpec;
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1939694975, 'CC(animateColor)P(2)68@3220L31,69@3287L70,73@3370L70:Transition.kt#xbi5r1');
    if (!(($default & 1) === 0)) {
      transitionSpec_0 = animateColor$lambda;
    }
    if (!(($default & 2) === 0))
      label_0 = 'ColorAnimation';
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(targetValueByState(_this__u8e3s4.get_targetState_kri3mx_k$(), $composer_0, 112 & $changed >> 6).value_1);
    sourceInformationMarkerStart($composer_0, 1918408083, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changed_ga7h3f_k$(colorSpace);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.animateColor.<anonymous>' call
      var value = get_VectorConverter_3(Companion_getInstance_9())(colorSpace);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var typeConverter = tmp1_group;
    // Inline function 'androidx.compose.animation.core.animateValue' call
    var $changed_0 = 14 & $changed | 896 & $changed << 3 | 7168 & $changed << 3 | 57344 & $changed << 3;
    var transitionSpec_1 = transitionSpec_0;
    var label_1 = label_0;
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, -142660079, 'CC(animateValue)P(3,2)1886@77187L32,1887@77242L31,1888@77298L23,1890@77334L89:Transition.kt#pdpnli');
    if (!((0 & 2) === 0)) {
      transitionSpec_1 = animateColor$lambda_0;
    }
    if (!((0 & 4) === 0))
      label_1 = 'ValueAnimation';
    var initialValue = targetValueByState(_this__u8e3s4.get_currentState_snihnl_k$(), $composer_1, 112 & $changed_0 >> 9);
    var targetValue = targetValueByState(_this__u8e3s4.get_targetState_kri3mx_k$(), $composer_1, 112 & $changed_0 >> 9);
    var animationSpec = transitionSpec_1(_this__u8e3s4.get_segment_xwnoei_k$(), $composer_1, 112 & $changed_0 >> 3);
    var tmp0 = createTransitionAnimation(_this__u8e3s4, initialValue, targetValue, animationSpec, typeConverter, label_1, $composer_1, 14 & $changed_0 | 57344 & $changed_0 << 9 | 458752 & $changed_0 << 6);
    sourceInformationMarkerEnd($composer_1);
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function animateColor$lambda($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-1457805428);
    if (isTraceInProgress()) {
      traceEventStart(-1457805428, $changed, -1, 'androidx.compose.animation.animateColor.<anonymous> (Transition.kt:64)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function animateColor$lambda_0($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-895531546);
    if (isTraceInProgress()) {
      traceEventStart(-895531546, $changed, -1, 'androidx.compose.animation.core.animateValue.<anonymous> (Transition.kt:1881)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
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
    return '@androidx.compose.animation.internal.NoOp(' + ')';
  };
  function get_platformFlingScrollFriction() {
    return platformFlingScrollFriction;
  }
  var platformFlingScrollFriction;
  function rememberSplineBasedDecay($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1977478709, 'C(rememberSplineBasedDecay)30@1256L7,31@1275L114:SplineBasedDecayAnimationSpec.js.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(-1977478709, $changed, -1, 'androidx.compose.animation.rememberSplineBasedDecay (SplineBasedDecayAnimationSpec.js.kt:27)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var density = tmp0;
    var tmp1_remember$arg$0 = density.get_density_qy0267_k$();
    sourceInformationMarkerStart($composer_0, 2068402978, 'CC(remember):SplineBasedDecayAnimationSpec.js.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changed_i8bvic_k$(tmp1_remember$arg$0);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.rememberSplineBasedDecay.<anonymous>' call
      var value = generateDecayAnimationSpec(new SplineBasedFloatDecayAnimationSpec(density));
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp2_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp2_group;
  }
  //region block: post-declaration
  protoOf(AnimatedVisibilityScopeImpl).animateEnterExit_z97dqu_k$ = animateEnterExit;
  protoOf(AnimatedVisibilityScopeImpl).animateEnterExit$default_4f8dik_k$ = animateEnterExit$default;
  protoOf(RenderInTransitionOverlayNode).onMeasureResultChanged_ipbzyg_k$ = onMeasureResultChanged;
  protoOf(RenderInTransitionOverlayNode).get_providedValues_crrbpu_k$ = get_providedValues;
  protoOf(RenderInTransitionOverlayNode).provide_fhfib2_k$ = provide;
  protoOf(RenderInTransitionOverlayNode).get_current_2exe6q_k$ = get_current;
  protoOf(SharedBoundsNode).isPlacementApproachInProgress_v2hgh6_k$ = isPlacementApproachInProgress;
  protoOf(SharedBoundsNode).minApproachIntrinsicWidth_kl18vr_k$ = minApproachIntrinsicWidth;
  protoOf(SharedBoundsNode).minApproachIntrinsicHeight_ophp8g_k$ = minApproachIntrinsicHeight;
  protoOf(SharedBoundsNode).maxApproachIntrinsicWidth_haaviz_k$ = maxApproachIntrinsicWidth;
  protoOf(SharedBoundsNode).maxApproachIntrinsicHeight_cs57u6_k$ = maxApproachIntrinsicHeight;
  protoOf(SharedBoundsNode).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth;
  protoOf(SharedBoundsNode).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight;
  protoOf(SharedBoundsNode).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth;
  protoOf(SharedBoundsNode).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight;
  protoOf(SharedBoundsNode).onMeasureResultChanged_ipbzyg_k$ = onMeasureResultChanged;
  protoOf(SharedBoundsNode).provide_fhfib2_k$ = provide;
  protoOf(SharedBoundsNode).get_current_2exe6q_k$ = get_current;
  protoOf(SharedTransitionScopeImpl).localLookaheadPositionOf$default_10xwp7_k$ = localLookaheadPositionOf$default;
  protoOf(SharedTransitionScopeImpl).renderInSharedTransitionScopeOverlay$default_q1dfol_k$ = renderInSharedTransitionScopeOverlay$default;
  protoOf(SharedTransitionScopeImpl).sharedElement$default_34wry7_k$ = sharedElement$default;
  protoOf(SharedTransitionScopeImpl).sharedBounds$default_3tkm9k_k$ = sharedBounds$default;
  protoOf(SharedTransitionScopeImpl).sharedElementWithCallerManagedVisibility$default_ag2qj1_k$ = sharedElementWithCallerManagedVisibility$default;
  protoOf(SharedTransitionScopeImpl).scaleInSharedContentToBounds_8dgsag_k$ = scaleInSharedContentToBounds;
  protoOf(SharedTransitionScopeImpl).scaleInSharedContentToBounds$default_sbqsn0_k$ = scaleInSharedContentToBounds$default;
  protoOf(SharedTransitionScopeImpl).scaleOutSharedContentToBounds_u503ir_k$ = scaleOutSharedContentToBounds;
  protoOf(SharedTransitionScopeImpl).scaleOutSharedContentToBounds$default_ouu5yp_k$ = scaleOutSharedContentToBounds$default;
  protoOf(SkipToLookaheadNode).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth;
  protoOf(SkipToLookaheadNode).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight;
  protoOf(SkipToLookaheadNode).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth;
  protoOf(SkipToLookaheadNode).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight;
  //endregion
  //region block: init
  InchesPerMeter = 39.37;
  GravityEarth = 9.80665;
  VisualDebugging = false;
  Inflection = 0.35;
  P2 = 0.35000002;
  P1 = 0.175;
  StartTension = 0.5;
  platformFlingScrollFriction = 0.015;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AnimatedVisibility;
  _.$_$.b = SplineBasedFloatDecayAnimationSpec;
  _.$_$.c = get_VectorConverter_3;
  _.$_$.d = animateColorAsState;
  _.$_$.e = expandHorizontally;
  _.$_$.f = expandVertically;
  _.$_$.g = fadeIn;
  _.$_$.h = fadeOut;
  _.$_$.i = rememberSplineBasedDecay;
  _.$_$.j = shrinkHorizontally;
  _.$_$.k = shrinkVertically;
  _.$_$.l = splineBasedDecay;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-animation-animation.js.map
