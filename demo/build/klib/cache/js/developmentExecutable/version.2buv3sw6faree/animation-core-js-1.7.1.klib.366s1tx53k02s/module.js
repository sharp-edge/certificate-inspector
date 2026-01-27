(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    globalThis['compose-multiplatform-core-compose-animation-animation-core'] = factory(typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_collection_internal_collection, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var hypot = Math.hypot;
  var Unit_getInstance = kotlin_kotlin.$_$.u5;
  var equals = kotlin_kotlin.$_$.td;
  var VOID = kotlin_kotlin.$_$.e;
  var protoOf = kotlin_kotlin.$_$.ef;
  var objectCreate = kotlin_kotlin.$_$.df;
  var coerceIn = kotlin_kotlin.$_$.cg;
  var Long = kotlin_kotlin.$_$.bj;
  var CoroutineImpl = kotlin_kotlin.$_$.yc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ic;
  var CancellationException = kotlin_kotlin.$_$.hc;
  var initMetadataForLambda = kotlin_kotlin.$_$.ge;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var THROW_CCE = kotlin_kotlin.$_$.ij;
  var toString = kotlin_kotlin.$_$.if;
  var initMetadataForClass = kotlin_kotlin.$_$.ce;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.f5;
  var KMutableProperty1 = kotlin_kotlin.$_$.lg;
  var getPropertyCallableRef = kotlin_kotlin.$_$.zd;
  var SuspendFunction0 = kotlin_kotlin.$_$.zc;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a4;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p2;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var SideEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var KProperty0 = kotlin_kotlin.$_$.mg;
  var THROW_ISE = kotlin_kotlin.$_$.kj;
  var getLocalDelegateReference = kotlin_kotlin.$_$.xd;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var isInterface = kotlin_kotlin.$_$.re;
  var ChannelResult__getOrNull_impl_f5e07h = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.u1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.g5;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d4;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e4;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a1;
  var SuspendFunction1 = kotlin_kotlin.$_$.ad;
  var isNaN_0 = kotlin_kotlin.$_$.fk;
  var toString_0 = kotlin_kotlin.$_$.uk;
  var initMetadataForInterface = kotlin_kotlin.$_$.fe;
  var THROW_IAE = kotlin_kotlin.$_$.jj;
  var enumEntries = kotlin_kotlin.$_$.ed;
  var Enum = kotlin_kotlin.$_$.wi;
  var hashCode = kotlin_kotlin.$_$.be;
  var getNumberHashCode = kotlin_kotlin.$_$.yd;
  var initMetadataForObject = kotlin_kotlin.$_$.he;
  var roundToInt = kotlin_kotlin.$_$.of;
  var MutableIntList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.b;
  var MutableIntObjectMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.c;
  var toLong = kotlin_kotlin.$_$.gf;
  var abs = kotlin_kotlin.$_$.kf;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.jk;
  var mutableIntObjectMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.o;
  var to = kotlin_kotlin.$_$.vk;
  var initMetadataForCompanion = kotlin_kotlin.$_$.de;
  var State = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var ensureNotNull = kotlin_kotlin.$_$.bk;
  var numberToInt = kotlin_kotlin.$_$.bf;
  var get_PI = kotlin_kotlin.$_$.jf;
  var fillArrayVal = kotlin_kotlin.$_$.ud;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.qk;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var computeCubicVerticalBounds = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h1;
  var _FloatFloatPair___get_packedValue__impl__5lczxp = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.y;
  var floatFromBits = kotlin_kotlin.$_$.vd;
  var findFirstCubicRoot = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l1;
  var evaluateCubic = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k1;
  var FunctionAdapter = kotlin_kotlin.$_$.gd;
  var Annotation = kotlin_kotlin.$_$.oi;
  var coerceIn_0 = kotlin_kotlin.$_$.eg;
  var numberToLong = kotlin_kotlin.$_$.cf;
  var withFrameNanos = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var Key_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.v9;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ee;
  var isArray = kotlin_kotlin.$_$.je;
  var snapshotFlow = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var first = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var MutableVector = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.j2;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var captureStack = kotlin_kotlin.$_$.kd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var isFinite = kotlin_kotlin.$_$.ck;
  var isNaN_1 = kotlin_kotlin.$_$.gk;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.e5;
  var toRawBits = kotlin_kotlin.$_$.tk;
  var Key_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.aa;
  var roundToLong = kotlin_kotlin.$_$.pf;
  var until = kotlin_kotlin.$_$.ig;
  var fill = kotlin_kotlin.$_$.b9;
  var intercepted = kotlin_kotlin.$_$.kc;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var returnIfSuspended = kotlin_kotlin.$_$.m;
  var mutableFloatStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o1;
  var MutableObjectList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.g;
  var mutableLongStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.b5;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var DisposableEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var LaunchedEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var SnapshotStateObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.p5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p3;
  var KProperty1 = kotlin_kotlin.$_$.ng;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.k;
  var lazy = kotlin_kotlin.$_$.hk;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var _DpOffset___get_x__impl__uauqb5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var _DpOffset___get_y__impl__1h898y = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var DpOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var DpOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h3;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var coerceAtLeast = kotlin_kotlin.$_$.wf;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b4;
  var mapOf = kotlin_kotlin.$_$.ka;
  var compareTo = kotlin_kotlin.$_$.qd;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.e1;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(Animatable$runAnimation$slambda, CoroutineImpl, [CoroutineImpl], [0]);
  initMetadataForLambda(Animatable$snapTo$slambda, CoroutineImpl, [CoroutineImpl], [0]);
  initMetadataForLambda(Animatable$stop$slambda, CoroutineImpl, [CoroutineImpl], [0]);
  initMetadataForClass(Animatable, 'Animatable', VOID, VOID, VOID, [4, 3, 1, 0]);
  initMetadataForClass(AnimationResult, 'AnimationResult');
  initMetadataForLambda(animateValueAsState$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(animateValueAsState$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  function isFinishedFromNanos(playTimeNanos) {
    return playTimeNanos.compareTo_9jj042_k$(this.get_durationNanos_ub5cy_k$()) >= 0;
  }
  initMetadataForInterface(Animation, 'Animation');
  initMetadataForClass(TargetBasedAnimation, 'TargetBasedAnimation', VOID, VOID, [Animation]);
  initMetadataForClass(DecayAnimation, 'DecayAnimation', VOID, VOID, [Animation]);
  initMetadataForClass(AnimationEndReason, 'AnimationEndReason', VOID, Enum);
  initMetadataForInterface(AnimationSpec, 'AnimationSpec');
  initMetadataForInterface(FiniteAnimationSpec, 'FiniteAnimationSpec', VOID, VOID, [AnimationSpec]);
  initMetadataForClass(SpringSpec, 'SpringSpec', SpringSpec, VOID, [FiniteAnimationSpec]);
  initMetadataForObject(AnimationConstants, 'AnimationConstants');
  initMetadataForClass(StartDelayAnimationSpec, 'StartDelayAnimationSpec', VOID, VOID, [AnimationSpec]);
  function getEndVelocity(initialValue, targetValue, initialVelocity) {
    return this.getVelocityFromNanos_wafrjo_k$(this.getDurationNanos_c9o343_k$(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  initMetadataForInterface(VectorizedAnimationSpec, 'VectorizedAnimationSpec');
  initMetadataForClass(StartDelayVectorizedAnimationSpec, 'StartDelayVectorizedAnimationSpec', VOID, VOID, [VectorizedAnimationSpec]);
  initMetadataForClass(InfiniteRepeatableSpec, 'InfiniteRepeatableSpec', VOID, VOID, [AnimationSpec]);
  initMetadataForClass(KeyframesSpecBaseConfig, 'KeyframesSpecBaseConfig');
  initMetadataForClass(KeyframesSpecConfig, 'KeyframesSpecConfig', KeyframesSpecConfig, KeyframesSpecBaseConfig);
  initMetadataForClass(KeyframeBaseEntity, 'KeyframeBaseEntity');
  initMetadataForClass(KeyframeEntity, 'KeyframeEntity', VOID, KeyframeBaseEntity);
  initMetadataForInterface(DurationBasedAnimationSpec, 'DurationBasedAnimationSpec', VOID, VOID, [FiniteAnimationSpec]);
  initMetadataForClass(KeyframesSpec, 'KeyframesSpec', VOID, VOID, [DurationBasedAnimationSpec]);
  initMetadataForClass(TweenSpec, 'TweenSpec', TweenSpec, VOID, [DurationBasedAnimationSpec]);
  initMetadataForClass(SnapSpec, 'SnapSpec', SnapSpec, VOID, [DurationBasedAnimationSpec]);
  initMetadataForClass(RepeatMode, 'RepeatMode', VOID, Enum);
  initMetadataForClass(StartOffset, 'StartOffset');
  initMetadataForCompanion(Companion);
  initMetadataForClass(StartOffsetType, 'StartOffsetType');
  initMetadataForClass(AnimationState, 'AnimationState', VOID, VOID, [State]);
  initMetadataForClass(AnimationScope, 'AnimationScope');
  initMetadataForClass(AnimationVector_3, 'AnimationVector');
  initMetadataForClass(AnimationVector1D, 'AnimationVector1D', VOID, AnimationVector_3);
  initMetadataForClass(AnimationVector2D, 'AnimationVector2D', VOID, AnimationVector_3);
  initMetadataForClass(AnimationVector3D, 'AnimationVector3D', VOID, AnimationVector_3);
  initMetadataForClass(AnimationVector4D, 'AnimationVector4D', VOID, AnimationVector_3);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(Arc, 'Arc');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(ArcSpline, 'ArcSpline');
  initMetadataForClass(ComplexDouble, 'ComplexDouble');
  initMetadataForInterface(DecayAnimationSpec, 'DecayAnimationSpec');
  initMetadataForClass(DecayAnimationSpecImpl, 'DecayAnimationSpecImpl', VOID, VOID, [DecayAnimationSpec]);
  initMetadataForInterface(VectorizedDecayAnimationSpec, 'VectorizedDecayAnimationSpec');
  initMetadataForClass(VectorizedFloatDecaySpec, 'VectorizedFloatDecaySpec', VOID, VOID, [VectorizedDecayAnimationSpec]);
  initMetadataForInterface(Easing, 'Easing');
  initMetadataForClass(CubicBezierEasing, 'CubicBezierEasing', VOID, VOID, [Easing]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0_0, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0_1, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0_2, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0_3, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0_4, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0_5, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  initMetadataForClass(ExperimentalAnimationSpecApi, 'ExperimentalAnimationSpecApi', VOID, VOID, [Annotation]);
  initMetadataForClass(ExperimentalTransitionApi, 'ExperimentalTransitionApi', VOID, VOID, [Annotation]);
  function getEndVelocity_0(initialValue, targetValue, initialVelocity) {
    return this.getVelocityFromNanos_d1b1ck_k$(this.getDurationNanos_taoclf_k$(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  function vectorize(converter) {
    return VectorizedFloatAnimationSpec_init_$Create$(this);
  }
  function vectorize_0(converter) {
    return this.vectorize_7dxvko_k$(converter);
  }
  initMetadataForInterface(FloatAnimationSpec, 'FloatAnimationSpec', VOID, VOID, [AnimationSpec]);
  initMetadataForClass(FloatSpringSpec, 'FloatSpringSpec', FloatSpringSpec, VOID, [FloatAnimationSpec]);
  initMetadataForClass(FloatTweenSpec, 'FloatTweenSpec', FloatTweenSpec, VOID, [FloatAnimationSpec]);
  initMetadataForInterface(FloatDecayAnimationSpec, 'FloatDecayAnimationSpec');
  initMetadataForLambda(withInfiniteAnimationFrameNanos$slambda, CoroutineImpl, [CoroutineImpl], [0]);
  initMetadataForCoroutine($withInfiniteAnimationFrameNanosCOROUTINE$0, CoroutineImpl);
  initMetadataForLambda(InfiniteTransition$run$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(TransitionAnimationState, 'TransitionAnimationState', VOID, VOID, [State]);
  initMetadataForLambda(InfiniteTransition$run$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(InfiniteTransition, 'InfiniteTransition');
  initMetadataForClass(animateValue$$inlined$cache$2$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(InternalAnimationApi, 'InternalAnimationApi', VOID, VOID, [Annotation]);
  initMetadataForClass(Mutator, 'Mutator');
  initMetadataForLambda(MutatorMutex$mutate$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(MutatorMutex$mutateWith$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(MutatorMutex, 'MutatorMutex', MutatorMutex, VOID, VOID, [2, 3]);
  initMetadataForClass(MutatePriority, 'MutatePriority', VOID, Enum);
  initMetadataForClass(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', VOID, CancellationException);
  initMetadataForClass(MutationInterruptedException, 'MutationInterruptedException', MutationInterruptedException, PlatformOptimizedCancellationException);
  initMetadataForClass(SpringSimulation, 'SpringSimulation');
  initMetadataForClass(Motion, 'Motion');
  initMetadataForCoroutine($animateCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($callWithFrameNanosCOROUTINE$2, CoroutineImpl);
  initMetadataForLambda(SeekableTransitionState$seekTo$slambda$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(SeekableTransitionState$seekTo$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(SeekableTransitionState$animateTo$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(SeekingAnimationState, 'SeekingAnimationState', SeekingAnimationState);
  initMetadataForCompanion(Companion_2);
  initMetadataForLambda(SeekableTransitionState$snapTo$slambda, CoroutineImpl, [CoroutineImpl], [0]);
  initMetadataForLambda(SeekableTransitionState$seekTo$slambda, CoroutineImpl, [CoroutineImpl], [0]);
  initMetadataForLambda(SeekableTransitionState$animateTo$slambda, CoroutineImpl, [CoroutineImpl], [0]);
  initMetadataForCoroutine($runAnimationsCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($doOneFrameCOROUTINE$4, CoroutineImpl);
  initMetadataForCoroutine($animateOneFrameCOROUTINE$5, CoroutineImpl);
  initMetadataForCoroutine($waitForCompositionAfterTargetStateChangeCOROUTINE$6, CoroutineImpl);
  initMetadataForCoroutine($waitForCompositionCOROUTINE$7, CoroutineImpl);
  initMetadataForClass(TransitionState, 'TransitionState');
  initMetadataForClass(SeekableTransitionState, 'SeekableTransitionState', VOID, TransitionState, VOID, [0, 1, 2]);
  initMetadataForClass(DeferredAnimationData, 'DeferredAnimationData', VOID, VOID, [State]);
  initMetadataForClass(TransitionAnimationState_0, 'TransitionAnimationState', VOID, VOID, [State]);
  function isTransitioningTo(_this__u8e3s4, targetState) {
    return equals(_this__u8e3s4, this.get_initialState_2eu9l6_k$()) && equals(targetState, this.get_targetState_kri3mx_k$());
  }
  initMetadataForInterface(Segment, 'Segment');
  initMetadataForClass(SegmentImpl, 'SegmentImpl', VOID, VOID, [Segment]);
  initMetadataForClass(DeferredAnimation, 'DeferredAnimation');
  initMetadataForLambda(Transition$animateTo$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(Transition$animateTo$$inlined$cache$1$2, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(Transition, 'Transition');
  initMetadataForClass(MutableTransitionState, 'MutableTransitionState', VOID, TransitionState);
  initMetadataForLambda(rememberTransition$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(rememberTransition$$inlined$cache$2$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(createDeferredAnimation$$inlined$cache$1$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(updateTransition$$inlined$cache$1$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(createChildTransitionInternal$$inlined$cache$1$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(createTransitionAnimation$$inlined$cache$1$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForInterface(TwoWayConverter, 'TwoWayConverter');
  initMetadataForClass(TwoWayConverterImpl, 'TwoWayConverterImpl', VOID, VOID, [TwoWayConverter]);
  initMetadataForObject(Spring, 'Spring');
  function get_isInfinite() {
    return false;
  }
  initMetadataForInterface(VectorizedFiniteAnimationSpec, 'VectorizedFiniteAnimationSpec', VOID, VOID, [VectorizedAnimationSpec]);
  initMetadataForClass(VectorizedSpringSpec, 'VectorizedSpringSpec', VectorizedSpringSpec_init_$Create$, VOID, [VectorizedFiniteAnimationSpec]);
  initMetadataForInterface(Animations, 'Animations');
  initMetadataForClass(VectorizedFloatAnimationSpec$1, VOID, VOID, VOID, [Animations]);
  initMetadataForClass(VectorizedFloatAnimationSpec, 'VectorizedFloatAnimationSpec', VOID, VOID, [VectorizedFiniteAnimationSpec]);
  initMetadataForClass(VectorizedInfiniteRepeatableSpec, 'VectorizedInfiniteRepeatableSpec', VOID, VOID, [VectorizedAnimationSpec]);
  function getDurationNanos(initialValue, targetValue, initialVelocity) {
    return numberToLong(this.get_delayMillis_d968n4_k$() + this.get_durationMillis_pqx05f_k$() | 0).times_nfzjiw_k$(new Long(1000000, 0));
  }
  initMetadataForInterface(VectorizedDurationBasedAnimationSpec, 'VectorizedDurationBasedAnimationSpec', VOID, VOID, [VectorizedFiniteAnimationSpec]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(ArcMode, 'ArcMode');
  initMetadataForClass(VectorizedKeyframesSpec, 'VectorizedKeyframesSpec', VOID, VOID, [VectorizedDurationBasedAnimationSpec]);
  initMetadataForClass(VectorizedKeyframeSpecElementInfo, 'VectorizedKeyframeSpecElementInfo');
  initMetadataForClass(VectorizedTweenSpec, 'VectorizedTweenSpec', VectorizedTweenSpec, VOID, [VectorizedDurationBasedAnimationSpec]);
  initMetadataForClass(VectorizedSnapSpec, 'VectorizedSnapSpec', VectorizedSnapSpec, VOID, [VectorizedDurationBasedAnimationSpec]);
  initMetadataForClass(createSpringAnimations$1, VOID, VOID, VOID, [Animations]);
  initMetadataForClass(createSpringAnimations$2, VOID, VOID, VOID, [Animations]);
  initMetadataForClass(AtomicReference, 'AtomicReference');
  initMetadataForClass(NoOp, 'NoOp', VOID, VOID, [Annotation]);
  //endregion
  function get_positiveInfinityBounds1D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds1D;
  }
  var positiveInfinityBounds1D;
  function get_positiveInfinityBounds2D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds2D;
  }
  var positiveInfinityBounds2D;
  function get_positiveInfinityBounds3D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds3D;
  }
  var positiveInfinityBounds3D;
  function get_positiveInfinityBounds4D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds4D;
  }
  var positiveInfinityBounds4D;
  function get_negativeInfinityBounds1D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds1D;
  }
  var negativeInfinityBounds1D;
  function get_negativeInfinityBounds2D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds2D;
  }
  var negativeInfinityBounds2D;
  function get_negativeInfinityBounds3D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds3D;
  }
  var negativeInfinityBounds3D;
  function get_negativeInfinityBounds4D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds4D;
  }
  var negativeInfinityBounds4D;
  function Animatable$runAnimation$slambda$lambda(this$0, $endState, $block, $clampingNeeded) {
    return function ($this$animate) {
      updateState($this$animate, this$0.internalState_1);
      var clamped = clampToBounds(this$0, $this$animate.get_value_j01efc_k$());
      var tmp;
      if (!equals(clamped, $this$animate.get_value_j01efc_k$())) {
        this$0.internalState_1.set_value_w62xiq_k$(clamped);
        $endState.set_value_w62xiq_k$(clamped);
        var tmp0_safe_receiver = $block;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver(this$0);
        $this$animate.cancelAnimation_ic0k2u_k$();
        $clampingNeeded._v = true;
        tmp = Unit_getInstance();
      } else {
        var tmp1_safe_receiver = $block;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver(this$0);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _get_visibilityThreshold__cvk72g($this) {
    return $this.visibilityThreshold_1;
  }
  function Animatable_init_$Init$(initialValue, typeConverter, visibilityThreshold, $this) {
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    Animatable.call($this, initialValue, typeConverter, visibilityThreshold, 'Animatable');
    return $this;
  }
  function Animatable_init_$Create$(initialValue, typeConverter, visibilityThreshold) {
    return Animatable_init_$Init$(initialValue, typeConverter, visibilityThreshold, objectCreate(protoOf(Animatable)));
  }
  function _set_isRunning__kpbg34($this, _set____db54di) {
    var tmp0 = $this.isRunning$delegate_1;
    isRunning$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_targetValue__aqsk0r($this, _set____db54di) {
    var tmp0 = $this.targetValue$delegate_1;
    targetValue$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_lowerBound__uvrjui($this, _set____db54di) {
    $this.lowerBound_1 = _set____db54di;
  }
  function _set_upperBound__ul6eat($this, _set____db54di) {
    $this.upperBound_1 = _set____db54di;
  }
  function _get_mutatorMutex__pkek4u($this) {
    return $this.mutatorMutex_1;
  }
  function _get_negativeInfinityBounds__4uptfr($this) {
    return $this.negativeInfinityBounds_1;
  }
  function _get_positiveInfinityBounds__srcx3f($this) {
    return $this.positiveInfinityBounds_1;
  }
  function _set_lowerBoundVector__diyl9z($this, _set____db54di) {
    $this.lowerBoundVector_1 = _set____db54di;
  }
  function _get_lowerBoundVector__sf17md($this) {
    return $this.lowerBoundVector_1;
  }
  function _set_upperBoundVector__vzmpnc($this, _set____db54di) {
    $this.upperBoundVector_1 = _set____db54di;
  }
  function _get_upperBoundVector__9yd390($this) {
    return $this.upperBoundVector_1;
  }
  function runAnimation($this, animation, initialVelocity, block, $completion) {
    var startTime = $this.internalState_1.get_lastFrameTimeNanos_3aprno_k$();
    return $this.mutatorMutex_1.mutate$default_f05kjn_k$(VOID, Animatable$runAnimation$slambda_0($this, initialVelocity, animation, startTime, block, null), $completion);
  }
  function clampToBounds($this, value) {
    if (equals($this.lowerBoundVector_1, $this.negativeInfinityBounds_1) && equals($this.upperBoundVector_1, $this.positiveInfinityBounds_1)) {
      return value;
    }
    var valueVector = $this.typeConverter_1.get_convertToVector_s594l4_k$()(value);
    var clamped = false;
    var inductionVariable = 0;
    var last = valueVector.get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (valueVector.get_jz2icb_k$(i) < $this.lowerBoundVector_1.get_jz2icb_k$(i) || valueVector.get_jz2icb_k$(i) > $this.upperBoundVector_1.get_jz2icb_k$(i)) {
          clamped = true;
          valueVector.set_ln2e3z_k$(i, coerceIn(valueVector.get_jz2icb_k$(i), $this.lowerBoundVector_1.get_jz2icb_k$(i), $this.upperBoundVector_1.get_jz2icb_k$(i)));
        }
      }
       while (inductionVariable < last);
    if (clamped) {
      return $this.typeConverter_1.get_convertFromVector_kmewon_k$()(valueVector);
    } else {
      return value;
    }
  }
  function endAnimation($this) {
    // Inline function 'kotlin.apply' call
    var this_0 = $this.internalState_1;
    // Inline function 'androidx.compose.animation.core.Animatable.endAnimation.<anonymous>' call
    this_0.get_velocityVector_v3jmo9_k$().reset_x7qqys_k$();
    this_0.set_lastFrameTimeNanos_lyzzef_k$(new Long(0, -2147483648));
    _set_isRunning__kpbg34($this, false);
  }
  function Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    this.this$0__1 = this$0;
    this.$initialVelocity_1 = $initialVelocity;
    this.$animation_1 = $animation;
    this.$startTime_1 = $startTime;
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$runAnimation$slambda).invoke_eiavl2_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Animatable$runAnimation$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_eiavl2_k$($completion);
  };
  protoOf(Animatable$runAnimation$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.this$0__1.internalState_1.set_velocityVector_tj9mci_k$(this.this$0__1.typeConverter_1.get_convertToVector_s594l4_k$()(this.$initialVelocity_1));
            _set_targetValue__aqsk0r(this.this$0__1, this.$animation_1.get_targetValue_kq6mfd_k$());
            _set_isRunning__kpbg34(this.this$0__1, true);
            this.endState1__1 = copy_0(this.this$0__1.internalState_1, VOID, VOID, VOID, new Long(0, -2147483648));
            this.clampingNeeded2__1 = {_v: false};
            this.set_state_rjd8d0_k$(1);
            suspendResult = animate(this.endState1__1, this.$animation_1, this.$startTime_1, Animatable$runAnimation$slambda$lambda(this.this$0__1, this.endState1__1, this.$block_1, this.clampingNeeded2__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var endReason = this.clampingNeeded2__1._v ? AnimationEndReason_BoundReached_getInstance() : AnimationEndReason_Finished_getInstance();
            endAnimation(this.this$0__1);
            this.TRY_RESULT0__1 = new AnimationResult(this.endState1__1, endReason);
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof CancellationException) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              endAnimation(this.this$0__1);
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(Animatable$runAnimation$slambda).create_d196fn_k$ = function (completion) {
    return new Animatable$runAnimation$slambda(this.this$0__1, this.$initialVelocity_1, this.$animation_1, this.$startTime_1, this.$block_1, completion);
  };
  function Animatable$runAnimation$slambda_0(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    var i = new Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation);
    var l = function ($completion) {
      return i.invoke_eiavl2_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation) {
    this.this$0__1 = this$0;
    this.$targetValue_1 = $targetValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$snapTo$slambda).invoke_h7udsx_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Animatable$snapTo$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_h7udsx_k$($completion);
  };
  protoOf(Animatable$snapTo$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          endAnimation(this.this$0__1);
          var clampedValue = clampToBounds(this.this$0__1, this.$targetValue_1);
          this.this$0__1.internalState_1.set_value_w62xiq_k$(clampedValue);
          _set_targetValue__aqsk0r(this.this$0__1, clampedValue);
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
  protoOf(Animatable$snapTo$slambda).create_d196fn_k$ = function (completion) {
    return new Animatable$snapTo$slambda(this.this$0__1, this.$targetValue_1, completion);
  };
  function Animatable$snapTo$slambda_0(this$0, $targetValue, resultContinuation) {
    var i = new Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation);
    var l = function ($completion) {
      return i.invoke_h7udsx_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$stop$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$stop$slambda).invoke_h7udsx_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Animatable$stop$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_h7udsx_k$($completion);
  };
  protoOf(Animatable$stop$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          endAnimation(this.this$0__1);
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
  protoOf(Animatable$stop$slambda).create_d196fn_k$ = function (completion) {
    return new Animatable$stop$slambda(this.this$0__1, completion);
  };
  function Animatable$stop$slambda_0(this$0, resultContinuation) {
    var i = new Animatable$stop$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.invoke_h7udsx_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable(initialValue, typeConverter, visibilityThreshold, label) {
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    label = label === VOID ? 'Animatable' : label;
    this.typeConverter_1 = typeConverter;
    this.visibilityThreshold_1 = visibilityThreshold;
    this.label_1 = label;
    this.internalState_1 = new AnimationState(this.typeConverter_1, initialValue);
    this.isRunning$delegate_1 = mutableStateOf(false);
    this.targetValue$delegate_1 = mutableStateOf(initialValue);
    this.lowerBound_1 = null;
    this.upperBound_1 = null;
    this.mutatorMutex_1 = new MutatorMutex();
    this.defaultSpringSpec_1 = new SpringSpec(VOID, VOID, this.visibilityThreshold_1);
    var tmp = this;
    var tmp0_subject = this.get_velocityVector_v3jmo9_k$();
    var tmp_0;
    if (tmp0_subject instanceof AnimationVector1D) {
      tmp_0 = get_negativeInfinityBounds1D();
    } else {
      if (tmp0_subject instanceof AnimationVector2D) {
        tmp_0 = get_negativeInfinityBounds2D();
      } else {
        if (tmp0_subject instanceof AnimationVector3D) {
          tmp_0 = get_negativeInfinityBounds3D();
        } else {
          tmp_0 = get_negativeInfinityBounds4D();
        }
      }
    }
    var tmp_1 = tmp_0;
    tmp.negativeInfinityBounds_1 = tmp_1 instanceof AnimationVector_3 ? tmp_1 : THROW_CCE();
    var tmp_2 = this;
    var tmp0_subject_0 = this.get_velocityVector_v3jmo9_k$();
    var tmp_3;
    if (tmp0_subject_0 instanceof AnimationVector1D) {
      tmp_3 = get_positiveInfinityBounds1D();
    } else {
      if (tmp0_subject_0 instanceof AnimationVector2D) {
        tmp_3 = get_positiveInfinityBounds2D();
      } else {
        if (tmp0_subject_0 instanceof AnimationVector3D) {
          tmp_3 = get_positiveInfinityBounds3D();
        } else {
          tmp_3 = get_positiveInfinityBounds4D();
        }
      }
    }
    var tmp_4 = tmp_3;
    tmp_2.positiveInfinityBounds_1 = tmp_4 instanceof AnimationVector_3 ? tmp_4 : THROW_CCE();
    this.lowerBoundVector_1 = this.negativeInfinityBounds_1;
    this.upperBoundVector_1 = this.positiveInfinityBounds_1;
  }
  protoOf(Animatable).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(Animatable).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(Animatable).get_internalState_vquti0_k$ = function () {
    return this.internalState_1;
  };
  protoOf(Animatable).get_value_j01efc_k$ = function () {
    return this.internalState_1.get_value_j01efc_k$();
  };
  protoOf(Animatable).get_velocityVector_v3jmo9_k$ = function () {
    return this.internalState_1.get_velocityVector_v3jmo9_k$();
  };
  protoOf(Animatable).get_velocity_3hqvmu_k$ = function () {
    return this.typeConverter_1.get_convertFromVector_kmewon_k$()(this.get_velocityVector_v3jmo9_k$());
  };
  protoOf(Animatable).get_isRunning_okmtn0_k$ = function () {
    var tmp0 = this.isRunning$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    isRunning$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(Animatable).get_targetValue_kq6mfd_k$ = function () {
    var tmp0 = this.targetValue$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    targetValue$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(Animatable).get_lowerBound_br3ay_k$ = function () {
    return this.lowerBound_1;
  };
  protoOf(Animatable).get_upperBound_mw839h_k$ = function () {
    return this.upperBound_1;
  };
  protoOf(Animatable).get_defaultSpringSpec_9cgue5_k$ = function () {
    return this.defaultSpringSpec_1;
  };
  protoOf(Animatable).updateBounds_u6omq_k$ = function (lowerBound, upperBound) {
    var tmp;
    if (lowerBound == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.animation.core.Animatable.updateBounds.<anonymous>' call
      tmp = this.typeConverter_1.get_convertToVector_s594l4_k$()(lowerBound);
    }
    var tmp1_elvis_lhs = tmp;
    var lowerBoundVector = tmp1_elvis_lhs == null ? this.negativeInfinityBounds_1 : tmp1_elvis_lhs;
    var tmp_0;
    if (upperBound == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.animation.core.Animatable.updateBounds.<anonymous>' call
      tmp_0 = this.typeConverter_1.get_convertToVector_s594l4_k$()(upperBound);
    }
    var tmp3_elvis_lhs = tmp_0;
    var upperBoundVector = tmp3_elvis_lhs == null ? this.positiveInfinityBounds_1 : tmp3_elvis_lhs;
    var inductionVariable = 0;
    var last = lowerBoundVector.get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.checkPrecondition' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(lowerBoundVector.get_jz2icb_k$(i) <= upperBoundVector.get_jz2icb_k$(i))) {
          // Inline function 'androidx.compose.animation.core.Animatable.updateBounds.<anonymous>' call
          var tmp$ret$4 = 'Lower bound must be no greater than upper bound on *all* dimensions. The ' + ('provided lower bound: ' + toString(lowerBoundVector) + ' is greater than upper bound ') + (toString(upperBoundVector) + ' on index ' + i);
          throwIllegalStateException(tmp$ret$4);
        }
      }
       while (inductionVariable < last);
    this.lowerBoundVector_1 = lowerBoundVector;
    this.upperBoundVector_1 = upperBoundVector;
    this.upperBound_1 = upperBound;
    this.lowerBound_1 = lowerBound;
    if (!this.get_isRunning_okmtn0_k$()) {
      var clampedValue = clampToBounds(this, this.get_value_j01efc_k$());
      if (!equals(clampedValue, this.get_value_j01efc_k$())) {
        this.internalState_1.set_value_w62xiq_k$(clampedValue);
      }
    }
  };
  protoOf(Animatable).updateBounds$default_zfm6qs_k$ = function (lowerBound, upperBound, $super) {
    lowerBound = lowerBound === VOID ? this.lowerBound_1 : lowerBound;
    upperBound = upperBound === VOID ? this.upperBound_1 : upperBound;
    var tmp;
    if ($super === VOID) {
      this.updateBounds_u6omq_k$(lowerBound, upperBound);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.updateBounds_u6omq_k$.call(this, lowerBound, upperBound);
    }
    return tmp;
  };
  protoOf(Animatable).animateTo_z368sf_k$ = function (targetValue, animationSpec, initialVelocity, block, $completion) {
    var tmp0_initialValue = this.get_value_j01efc_k$();
    var tmp1_typeConverter = this.typeConverter_1;
    var anim = TargetBasedAnimation_0(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, initialVelocity);
    return runAnimation(this, anim, initialVelocity, block, $completion);
  };
  protoOf(Animatable).animateTo$default_71hueo_k$ = function (targetValue, animationSpec, initialVelocity, block, $completion, $super) {
    animationSpec = animationSpec === VOID ? this.defaultSpringSpec_1 : animationSpec;
    initialVelocity = initialVelocity === VOID ? this.get_velocity_3hqvmu_k$() : initialVelocity;
    block = block === VOID ? null : block;
    return $super === VOID ? this.animateTo_z368sf_k$(targetValue, animationSpec, initialVelocity, block, $completion) : $super.animateTo_z368sf_k$.call(this, targetValue, animationSpec, initialVelocity, block, $completion);
  };
  protoOf(Animatable).animateDecay_ic37kv_k$ = function (initialVelocity, animationSpec, block, $completion) {
    var tmp0_initialValue = this.get_value_j01efc_k$();
    var tmp1_initialVelocityVector = this.typeConverter_1.get_convertToVector_s594l4_k$()(initialVelocity);
    var tmp2_typeConverter = this.typeConverter_1;
    var anim = DecayAnimation_init_$Create$(animationSpec, tmp2_typeConverter, tmp0_initialValue, tmp1_initialVelocityVector);
    return runAnimation(this, anim, initialVelocity, block, $completion);
  };
  protoOf(Animatable).animateDecay$default_sr5ljs_k$ = function (initialVelocity, animationSpec, block, $completion, $super) {
    block = block === VOID ? null : block;
    return $super === VOID ? this.animateDecay_ic37kv_k$(initialVelocity, animationSpec, block, $completion) : $super.animateDecay_ic37kv_k$.call(this, initialVelocity, animationSpec, block, $completion);
  };
  protoOf(Animatable).snapTo_o5pd1b_k$ = function (targetValue, $completion) {
    return this.mutatorMutex_1.mutate$default_f05kjn_k$(VOID, Animatable$snapTo$slambda_0(this, targetValue, null), $completion);
  };
  protoOf(Animatable).stop_7piii3_k$ = function ($completion) {
    return this.mutatorMutex_1.mutate$default_f05kjn_k$(VOID, Animatable$stop$slambda_0(this, null), $completion);
  };
  protoOf(Animatable).asState_c4y001_k$ = function () {
    return this.internalState_1;
  };
  function AnimationResult(endState, endReason) {
    this.endState_1 = endState;
    this.endReason_1 = endReason;
  }
  protoOf(AnimationResult).get_endState_3g6vgh_k$ = function () {
    return this.endState_1;
  };
  protoOf(AnimationResult).get_endReason_yf0h1y_k$ = function () {
    return this.endReason_1;
  };
  protoOf(AnimationResult).toString = function () {
    return 'AnimationResult(endReason=' + this.endReason_1.toString() + ', endState=' + this.endState_1.toString() + ')';
  };
  function Animatable_0(initialValue, visibilityThreshold) {
    visibilityThreshold = visibilityThreshold === VOID ? Spring_getInstance().get_DefaultDisplacementThreshold_1c58p0_k$() : visibilityThreshold;
    _init_properties_Animatable_kt__f2hc5e();
    return new Animatable(initialValue, get_VectorConverter(FloatCompanionObject_getInstance()), visibilityThreshold);
  }
  function isRunning$factory() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isRunning_okmtn0_k$();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function isRunning$factory_0() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isRunning_okmtn0_k$();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function targetValue$factory() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.get_targetValue_kq6mfd_k$();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  function targetValue$factory_0() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.get_targetValue_kq6mfd_k$();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  var properties_initialized_Animatable_kt_s5cd7k;
  function _init_properties_Animatable_kt__f2hc5e() {
    if (!properties_initialized_Animatable_kt_s5cd7k) {
      properties_initialized_Animatable_kt_s5cd7k = true;
      positiveInfinityBounds1D = AnimationVector(FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$());
      positiveInfinityBounds2D = AnimationVector_0(FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$(), FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$());
      positiveInfinityBounds3D = AnimationVector_1(FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$(), FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$(), FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$());
      positiveInfinityBounds4D = AnimationVector_2(FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$(), FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$(), FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$(), FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$());
      negativeInfinityBounds1D = AnimationVector(FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$());
      negativeInfinityBounds2D = AnimationVector_0(FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$(), FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$());
      negativeInfinityBounds3D = AnimationVector_1(FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$(), FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$(), FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$());
      negativeInfinityBounds4D = AnimationVector_2(FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$(), FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$(), FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$(), FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$());
    }
  }
  function get_defaultAnimation() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return defaultAnimation;
  }
  var defaultAnimation;
  function get_dpDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return dpDefaultSpring;
  }
  var dpDefaultSpring;
  function get_sizeDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return sizeDefaultSpring;
  }
  var sizeDefaultSpring;
  function get_offsetDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return offsetDefaultSpring;
  }
  var offsetDefaultSpring;
  function get_rectDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return rectDefaultSpring;
  }
  var rectDefaultSpring;
  function get_intDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return intDefaultSpring;
  }
  var intDefaultSpring;
  function get_intOffsetDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return intOffsetDefaultSpring;
  }
  var intOffsetDefaultSpring;
  function get_intSizeDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return intSizeDefaultSpring;
  }
  var intSizeDefaultSpring;
  function animateDpAsState(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1407150062, 'C(animateDpAsState)P(3:c#ui.unit.Dp!1,2)114@5081L165:AnimateAsState.kt#pdpnli');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_dpDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'DpAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1407150062, $changed, -1, 'androidx.compose.animation.core.animateDpAsState (AnimateAsState.kt:113)');
    }
    var tmp = get_VectorConverter_6(Companion_getInstance());
    var tmp_0 = animationSpec_0;
    var tmp0 = animateValueAsState(new Dp(targetValue), tmp, tmp_0, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function animateValueAsState(targetValue, typeConverter, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = visibilityThreshold;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1994373980, 'C(animateValueAsState)P(3,4!1,5,2)393@18031L21,399@18213L44,400@18279L79,401@18379L38,402@18456L339,413@18814L42,414@18872L44,414@18861L55,417@18945L697,417@18921L721:AnimateAsState.kt#pdpnli');
    if (!(($default & 4) === 0)) {
      sourceInformationMarkerStart($composer_0, 728506592, 'CC(remember):AnimateAsState.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
        var value = spring();
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      animationSpec_0 = tmp0_group;
    }
    if (!(($default & 8) === 0))
      visibilityThreshold_0 = null;
    if (!(($default & 16) === 0))
      label_0 = 'ValueAnimation';
    if (!(($default & 32) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1994373980, $changed, -1, 'androidx.compose.animation.core.animateValueAsState (AnimateAsState.kt:397)');
    }
    sourceInformationMarkerStart($composer_0, 728512439, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_0 = mutableStateOf(null);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var toolingOverride = tmp2_group;
    sourceInformationMarkerStart($composer_0, 728514586, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_3;
    if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_1 = new Animatable(targetValue, typeConverter, visibilityThreshold_0, label_0);
      $composer_0.updateRememberedValue_l1wh71_k$(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp3_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var animatable = tmp3_group;
    var listener$delegate = rememberUpdatedState(finishedListener_0, $composer_0, 14 & $changed >> 15);
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
    var $this$run = animationSpec_0;
    var tmp_5;
    var tmp_6;
    var tmp_7;
    if (!(visibilityThreshold_0 == null)) {
      tmp_7 = $this$run instanceof SpringSpec;
    } else {
      tmp_7 = false;
    }
    if (tmp_7) {
      tmp_6 = !equals($this$run.get_visibilityThreshold_qtbbow_k$(), visibilityThreshold_0);
    } else {
      tmp_6 = false;
    }
    if (tmp_6) {
      tmp_5 = spring($this$run.get_dampingRatio_syjss2_k$(), $this$run.get_stiffness_dt2sgm_k$(), visibilityThreshold_0);
    } else {
      tmp_5 = $this$run;
    }
    var tmp$ret$13 = tmp_5;
    var animSpec$delegate = rememberUpdatedState(tmp$ret$13, $composer_0, 0);
    sourceInformationMarkerStart($composer_0, 728531669, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_8;
    if (false || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_2 = Channel(-1);
      $composer_0.updateRememberedValue_l1wh71_k$(value_2);
      tmp_8 = value_2;
    } else {
      tmp_8 = it_2;
    }
    var tmp_9 = tmp_8;
    var tmp4_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var channel = tmp4_group;
    sourceInformationMarkerStart($composer_0, 728533527, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.changedInstance_s1wkiy_k$(channel) | (($changed & 14 ^ 6) > 4 && $composer_0.changedInstance_s1wkiy_k$(targetValue) || ($changed & 6) === 4));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_10;
    if (invalid || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_3 = animateValueAsState$lambda_1(channel, targetValue);
      $composer_0.updateRememberedValue_l1wh71_k$(value_3);
      tmp_10 = value_3;
    } else {
      tmp_10 = it_3;
    }
    var tmp_11 = tmp_10;
    var tmp5_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    SideEffect(tmp5_group, $composer_0, 0);
    sourceInformationMarkerStart($composer_0, 728536516, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!(!!(!!($composer_0.changedInstance_s1wkiy_k$(channel) | $composer_0.changedInstance_s1wkiy_k$(animatable)) | $composer_0.changed_ga7h3f_k$(animSpec$delegate)) | $composer_0.changed_ga7h3f_k$(listener$delegate));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_4 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_12;
    if (invalid_0 || it_4 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_4 = animateValueAsState$slambda_0(channel, animatable, animSpec$delegate, listener$delegate, null);
      $composer_0.updateRememberedValue_l1wh71_k$(value_4);
      tmp_12 = value_4;
    } else {
      tmp_12 = it_4;
    }
    var tmp_13 = tmp_12;
    var tmp6_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    LaunchedEffect(channel, tmp6_group, $composer_0, 0);
    var tmp0_elvis_lhs = toolingOverride.get_value_j01efc_k$();
    var tmp1 = tmp0_elvis_lhs == null ? animatable.asState_c4y001_k$() : tmp0_elvis_lhs;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1;
  }
  function animateValueAsState$lambda($listener$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('listener', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $listener$delegate.get_value_j01efc_k$();
  }
  function animateValueAsState$lambda_0($animSpec$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animSpec', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $animSpec$delegate.get_value_j01efc_k$();
  }
  function animateValueAsState$lambda_1($channel, $targetValue) {
    return function () {
      $channel.trySend_62dpg8_k$($targetValue);
      return Unit_getInstance();
    };
  }
  function animateValueAsState$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.$newTarget_1 = $newTarget;
    this.$animatable_1 = $animatable;
    this.$animSpec$delegate_1 = $animSpec$delegate;
    this.$listener$delegate_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$slambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(animateValueAsState$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            if (!equals(this.$newTarget_1, this.$animatable_1.get_targetValue_kq6mfd_k$())) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = this.$animatable_1.animateTo$default_71hueo_k$(this.$newTarget_1, animateValueAsState$lambda_0(this.$animSpec$delegate_1), VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            var tmp0_safe_receiver = animateValueAsState$lambda(this.$listener$delegate_1);
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver(this.$animatable_1.get_value_j01efc_k$());
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(animateValueAsState$slambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new animateValueAsState$slambda$slambda(this.$newTarget_1, this.$animatable_1, this.$animSpec$delegate_1, this.$listener$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(animateValueAsState$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function animateValueAsState$slambda$slambda_0($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function animateValueAsState$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.$channel_1 = $channel;
    this.$animatable_1 = $animatable;
    this.$animSpec$delegate_1 = $animSpec$delegate;
    this.$listener$delegate_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(animateValueAsState$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.tmp0_iterator0__1 = this.$channel_1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.tmp0_iterator0__1.hasNext_nhy1w3_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            var target = this.tmp0_iterator0__1.next_20eer_k$();
            var tmp1_elvis_lhs = ChannelResult__getOrNull_impl_f5e07h(this.$channel_1.tryReceive_y3ovg2_k$());
            var newTarget = tmp1_elvis_lhs == null ? target : tmp1_elvis_lhs;
            launch(this.$this$LaunchedEffect_1, VOID, VOID, animateValueAsState$slambda$slambda_0(newTarget, this.$animatable_1, this.$animSpec$delegate_1, this.$listener$delegate_1, null));
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(animateValueAsState$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new animateValueAsState$slambda(this.$channel_1, this.$animatable_1, this.$animSpec$delegate_1, this.$listener$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(animateValueAsState$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function animateValueAsState$slambda_0($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_AnimateAsState_kt_bq3rmo;
  function _init_properties_AnimateAsState_kt__7h7b9a() {
    if (!properties_initialized_AnimateAsState_kt_bq3rmo) {
      properties_initialized_AnimateAsState_kt_bq3rmo = true;
      defaultAnimation = spring();
      dpDefaultSpring = spring(VOID, VOID, new Dp(get_VisibilityThreshold(Companion_getInstance())));
      sizeDefaultSpring = spring(VOID, VOID, new Size(get_VisibilityThreshold_0(Companion_getInstance_1())));
      offsetDefaultSpring = spring(VOID, VOID, new Offset(get_VisibilityThreshold_1(Companion_getInstance_2())));
      rectDefaultSpring = spring(VOID, VOID, get_VisibilityThreshold_2(Companion_getInstance_3()));
      intDefaultSpring = spring(VOID, VOID, get_VisibilityThreshold_3(IntCompanionObject_getInstance()));
      intOffsetDefaultSpring = spring(VOID, VOID, new IntOffset(get_VisibilityThreshold_4(Companion_getInstance_4())));
      intSizeDefaultSpring = spring(VOID, VOID, new IntSize(get_VisibilityThreshold_5(Companion_getInstance_5())));
    }
  }
  function get_MillisToNanos() {
    return MillisToNanos;
  }
  var MillisToNanos;
  function TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $this) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    TargetBasedAnimation.call($this, animationSpec.vectorize_pto10n_k$(typeConverter), typeConverter, initialValue, targetValue, initialVelocityVector);
    return $this;
  }
  function TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    return TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, objectCreate(protoOf(TargetBasedAnimation)));
  }
  function _set_initialValueVector__o0y9gn($this, _set____db54di) {
    $this.initialValueVector_1 = _set____db54di;
  }
  function _get_initialValueVector__9wx1np($this) {
    return $this.initialValueVector_1;
  }
  function _set_targetValueVector__snxbq6($this, _set____db54di) {
    $this.targetValueVector_1 = _set____db54di;
  }
  function _get_targetValueVector__kndtym($this) {
    return $this.targetValueVector_1;
  }
  function _get_initialVelocityVector__y1hbhp($this) {
    return $this.initialVelocityVector_1;
  }
  function _set__durationNanos__n24igl($this, _set____db54di) {
    $this._durationNanos_1 = _set____db54di;
  }
  function _get__durationNanos__2gyxkv($this) {
    return $this._durationNanos_1;
  }
  function _set__endVelocity__wpaxeq($this, _set____db54di) {
    $this._endVelocity_1 = _set____db54di;
  }
  function _get__endVelocity__h5k6um($this) {
    return $this._endVelocity_1;
  }
  function _get_endVelocity__lqkp53($this) {
    var tmp0_elvis_lhs = $this._endVelocity_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.animationSpec_1.getEndVelocity_j9v6ly_k$($this.initialValueVector_1, $this.targetValueVector_1, $this.initialVelocityVector_1);
      // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.<get-endVelocity>.<anonymous>' call
      $this._endVelocity_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function TargetBasedAnimation(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    this.animationSpec_1 = animationSpec;
    this.typeConverter_1 = typeConverter;
    this.mutableTargetValue_1 = targetValue;
    this.mutableInitialValue_1 = initialValue;
    this.initialValueVector_1 = this.typeConverter_1.get_convertToVector_s594l4_k$()(initialValue);
    this.targetValueVector_1 = this.typeConverter_1.get_convertToVector_s594l4_k$()(targetValue);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_1(initialVelocityVector);
    tmp.initialVelocityVector_1 = tmp1_elvis_lhs == null ? newInstance(this.typeConverter_1.get_convertToVector_s594l4_k$()(initialValue)) : tmp1_elvis_lhs;
    this._durationNanos_1 = new Long(-1, -1);
    this._endVelocity_1 = null;
  }
  protoOf(TargetBasedAnimation).get_animationSpec_cvf00d_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(TargetBasedAnimation).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(TargetBasedAnimation).set_mutableTargetValue_pyw2ob_k$ = function (value) {
    if (!equals(this.mutableTargetValue_1, value)) {
      this.mutableTargetValue_1 = value;
      this.targetValueVector_1 = this.typeConverter_1.get_convertToVector_s594l4_k$()(value);
      this._endVelocity_1 = null;
      this._durationNanos_1 = new Long(-1, -1);
    }
  };
  protoOf(TargetBasedAnimation).get_mutableTargetValue_tcsps_k$ = function () {
    return this.mutableTargetValue_1;
  };
  protoOf(TargetBasedAnimation).set_mutableInitialValue_6tefqk_k$ = function (value) {
    if (!equals(value, this.mutableInitialValue_1)) {
      this.mutableInitialValue_1 = value;
      this.initialValueVector_1 = this.typeConverter_1.get_convertToVector_s594l4_k$()(value);
      this._endVelocity_1 = null;
      this._durationNanos_1 = new Long(-1, -1);
    }
  };
  protoOf(TargetBasedAnimation).get_mutableInitialValue_ykpv1j_k$ = function () {
    return this.mutableInitialValue_1;
  };
  protoOf(TargetBasedAnimation).get_initialValue_2disdm_k$ = function () {
    return this.mutableInitialValue_1;
  };
  protoOf(TargetBasedAnimation).get_targetValue_kq6mfd_k$ = function () {
    return this.mutableTargetValue_1;
  };
  protoOf(TargetBasedAnimation).get_isInfinite_uffwnt_k$ = function () {
    return this.animationSpec_1.get_isInfinite_uffwnt_k$();
  };
  protoOf(TargetBasedAnimation).getValueFromNanos_i31vd8_k$ = function (playTimeNanos) {
    var tmp;
    if (!this.isFinishedFromNanos_c31w39_k$(playTimeNanos)) {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>' call
      var it = this.animationSpec_1.getValueFromNanos_xg3j38_k$(playTimeNanos, this.initialValueVector_1, this.targetValueVector_1, this.initialVelocityVector_1);
      var inductionVariable = 0;
      var last = it.get_size_au00c9_k$();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.core.checkPrecondition' call
          // Inline function 'kotlin.contracts.contract' call
          if (!!isNaN_0(it.get_jz2icb_k$(i))) {
            // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>.<anonymous>' call
            var tmp$ret$0 = 'AnimationVector cannot contain a NaN. ' + toString(it) + '. Animation: ' + this.toString() + ',' + (' playTimeNanos: ' + playTimeNanos.toString());
            throwIllegalStateException(tmp$ret$0);
          }
        }
         while (inductionVariable < last);
      tmp = this.typeConverter_1.get_convertFromVector_kmewon_k$()(it);
    } else {
      tmp = this.get_targetValue_kq6mfd_k$();
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).get_durationNanos_ub5cy_k$ = function () {
    if (this._durationNanos_1.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
      this._durationNanos_1 = this.animationSpec_1.getDurationNanos_c9o343_k$(this.initialValueVector_1, this.targetValueVector_1, this.initialVelocityVector_1);
    }
    return this._durationNanos_1;
  };
  protoOf(TargetBasedAnimation).getVelocityVectorFromNanos_jouakx_k$ = function (playTimeNanos) {
    var tmp;
    if (!this.isFinishedFromNanos_c31w39_k$(playTimeNanos)) {
      tmp = this.animationSpec_1.getVelocityFromNanos_wafrjo_k$(playTimeNanos, this.initialValueVector_1, this.targetValueVector_1, this.initialVelocityVector_1);
    } else {
      tmp = _get_endVelocity__lqkp53(this);
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).toString = function () {
    return 'TargetBasedAnimation: ' + toString_0(this.get_initialValue_2disdm_k$()) + ' -> ' + toString_0(this.get_targetValue_kq6mfd_k$()) + ',' + ('initial velocity: ' + toString(this.initialVelocityVector_1) + ', duration: ' + get_durationMillis(this).toString() + ' ms,') + ('animationSpec: ' + toString(this.animationSpec_1));
  };
  function Animation() {
  }
  function get_durationMillis(_this__u8e3s4) {
    return _this__u8e3s4.get_durationNanos_ub5cy_k$().div_jun7gj_k$(new Long(1000000, 0));
  }
  function get_SecondsToMillis() {
    return SecondsToMillis;
  }
  var SecondsToMillis;
  function TargetBasedAnimation_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocity) {
    return TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, typeConverter.get_convertToVector_s594l4_k$()(initialVelocity));
  }
  function _get_animationSpec__ffhwa6($this) {
    return $this.animationSpec_1;
  }
  function _get_initialValueVector__9wx1np_0($this) {
    return $this.initialValueVector_1;
  }
  function _get_endVelocity__lqkp53_0($this) {
    return $this.endVelocity_1;
  }
  function DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, $this) {
    DecayAnimation.call($this, animationSpec.vectorize_pto10n_k$(typeConverter), typeConverter, initialValue, initialVelocityVector);
    return $this;
  }
  function DecayAnimation_init_$Create$(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    return DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, objectCreate(protoOf(DecayAnimation)));
  }
  function DecayAnimation_init_$Init$_0(animationSpec, typeConverter, initialValue, initialVelocity, $this) {
    DecayAnimation.call($this, animationSpec.vectorize_pto10n_k$(typeConverter), typeConverter, initialValue, typeConverter.get_convertToVector_s594l4_k$()(initialVelocity));
    return $this;
  }
  function DecayAnimation_init_$Create$_0(animationSpec, typeConverter, initialValue, initialVelocity) {
    return DecayAnimation_init_$Init$_0(animationSpec, typeConverter, initialValue, initialVelocity, objectCreate(protoOf(DecayAnimation)));
  }
  function DecayAnimation(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    this.animationSpec_1 = animationSpec;
    this.typeConverter_1 = typeConverter;
    this.initialValue_1 = initialValue;
    this.initialValueVector_1 = this.typeConverter_1.get_convertToVector_s594l4_k$()(this.initialValue_1);
    this.initialVelocityVector_1 = copy_1(initialVelocityVector);
    this.targetValue_1 = this.typeConverter_1.get_convertFromVector_kmewon_k$()(this.animationSpec_1.getTargetValue_rut47u_k$(this.initialValueVector_1, initialVelocityVector));
    this.isInfinite_1 = false;
    this.durationNanos_1 = this.animationSpec_1.getDurationNanos_roqu2j_k$(this.initialValueVector_1, initialVelocityVector);
    this.endVelocity_1 = copy_1(this.animationSpec_1.getVelocityFromNanos_2v7bwc_k$(this.durationNanos_1, this.initialValueVector_1, initialVelocityVector));
    var inductionVariable = 0;
    var last = this.endVelocity_1.get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.endVelocity_1.set_ln2e3z_k$(i, coerceIn(this.endVelocity_1.get_jz2icb_k$(i), -this.animationSpec_1.get_absVelocityThreshold_wsgqo5_k$(), this.animationSpec_1.get_absVelocityThreshold_wsgqo5_k$()));
      }
       while (inductionVariable < last);
  }
  protoOf(DecayAnimation).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(DecayAnimation).get_initialValue_2disdm_k$ = function () {
    return this.initialValue_1;
  };
  protoOf(DecayAnimation).get_initialVelocityVector_xb37p7_k$ = function () {
    return this.initialVelocityVector_1;
  };
  protoOf(DecayAnimation).get_targetValue_kq6mfd_k$ = function () {
    return this.targetValue_1;
  };
  protoOf(DecayAnimation).get_durationNanos_ub5cy_k$ = function () {
    return this.durationNanos_1;
  };
  protoOf(DecayAnimation).get_isInfinite_uffwnt_k$ = function () {
    return this.isInfinite_1;
  };
  protoOf(DecayAnimation).getValueFromNanos_i31vd8_k$ = function (playTimeNanos) {
    if (!this.isFinishedFromNanos_c31w39_k$(playTimeNanos)) {
      return this.typeConverter_1.get_convertFromVector_kmewon_k$()(this.animationSpec_1.getValueFromNanos_huzcys_k$(playTimeNanos, this.initialValueVector_1, this.initialVelocityVector_1));
    } else {
      return this.targetValue_1;
    }
  };
  protoOf(DecayAnimation).getVelocityVectorFromNanos_jouakx_k$ = function (playTimeNanos) {
    if (!this.isFinishedFromNanos_c31w39_k$(playTimeNanos)) {
      return this.animationSpec_1.getVelocityFromNanos_2v7bwc_k$(playTimeNanos, this.initialValueVector_1, this.initialVelocityVector_1);
    } else {
      return this.endVelocity_1;
    }
  };
  var AnimationEndReason_BoundReached_instance;
  var AnimationEndReason_Finished_instance;
  function values() {
    return [AnimationEndReason_BoundReached_getInstance(), AnimationEndReason_Finished_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'BoundReached':
        return AnimationEndReason_BoundReached_getInstance();
      case 'Finished':
        return AnimationEndReason_Finished_getInstance();
      default:
        AnimationEndReason_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var AnimationEndReason_entriesInitialized;
  function AnimationEndReason_initEntries() {
    if (AnimationEndReason_entriesInitialized)
      return Unit_getInstance();
    AnimationEndReason_entriesInitialized = true;
    AnimationEndReason_BoundReached_instance = new AnimationEndReason('BoundReached', 0);
    AnimationEndReason_Finished_instance = new AnimationEndReason('Finished', 1);
  }
  var $ENTRIES;
  function AnimationEndReason(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimationEndReason_BoundReached_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_BoundReached_instance;
  }
  function AnimationEndReason_Finished_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_Finished_instance;
  }
  function SpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    dampingRatio = dampingRatio === VOID ? Spring_getInstance().get_DampingRatioNoBouncy_45ga5r_k$() : dampingRatio;
    stiffness = stiffness === VOID ? Spring_getInstance().get_StiffnessMedium_mjh6r9_k$() : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    this.dampingRatio_1 = dampingRatio;
    this.stiffness_1 = stiffness;
    this.visibilityThreshold_1 = visibilityThreshold;
  }
  protoOf(SpringSpec).get_dampingRatio_syjss2_k$ = function () {
    return this.dampingRatio_1;
  };
  protoOf(SpringSpec).get_stiffness_dt2sgm_k$ = function () {
    return this.stiffness_1;
  };
  protoOf(SpringSpec).get_visibilityThreshold_qtbbow_k$ = function () {
    return this.visibilityThreshold_1;
  };
  protoOf(SpringSpec).vectorize_pto10n_k$ = function (converter) {
    return VectorizedSpringSpec_init_$Create$(this.dampingRatio_1, this.stiffness_1, convert(converter, this.visibilityThreshold_1));
  };
  protoOf(SpringSpec).equals = function (other) {
    var tmp;
    if (other instanceof SpringSpec) {
      tmp = (other.dampingRatio_1 === this.dampingRatio_1 && other.stiffness_1 === this.stiffness_1 && equals(other.visibilityThreshold_1, this.visibilityThreshold_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SpringSpec).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.visibilityThreshold_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return imul(imul(tmp$ret$0, 31) + getNumberHashCode(this.dampingRatio_1) | 0, 31) + getNumberHashCode(this.stiffness_1) | 0;
  };
  function spring(dampingRatio, stiffness, visibilityThreshold) {
    dampingRatio = dampingRatio === VOID ? Spring_getInstance().get_DampingRatioNoBouncy_45ga5r_k$() : dampingRatio;
    stiffness = stiffness === VOID ? Spring_getInstance().get_StiffnessMedium_mjh6r9_k$() : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    return new SpringSpec(dampingRatio, stiffness, visibilityThreshold);
  }
  function FiniteAnimationSpec() {
  }
  function convert(_this__u8e3s4, data) {
    if (data == null) {
      return null;
    } else {
      return _this__u8e3s4.get_convertToVector_s594l4_k$()(data);
    }
  }
  function AnimationSpec() {
  }
  function AnimationConstants() {
    AnimationConstants_instance = this;
    this.DefaultDurationMillis_1 = 300;
    this.UnspecifiedTime_1 = new Long(0, -2147483648);
  }
  protoOf(AnimationConstants).get_DefaultDurationMillis_kgwre6_k$ = function () {
    return this.DefaultDurationMillis_1;
  };
  protoOf(AnimationConstants).get_UnspecifiedTime_gpclet_k$ = function () {
    return this.UnspecifiedTime_1;
  };
  var AnimationConstants_instance;
  function AnimationConstants_getInstance() {
    if (AnimationConstants_instance == null)
      new AnimationConstants();
    return AnimationConstants_instance;
  }
  function delayed(animationSpec, startDelayNanos) {
    return new StartDelayAnimationSpec(animationSpec, startDelayNanos);
  }
  function StartDelayAnimationSpec(animationSpec, startDelayNanos) {
    this.animationSpec_1 = animationSpec;
    this.startDelayNanos_1 = startDelayNanos;
  }
  protoOf(StartDelayAnimationSpec).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(StartDelayAnimationSpec).get_startDelayNanos_rdfwq3_k$ = function () {
    return this.startDelayNanos_1;
  };
  protoOf(StartDelayAnimationSpec).vectorize_pto10n_k$ = function (converter) {
    var vecSpec = this.animationSpec_1.vectorize_pto10n_k$(converter);
    return new StartDelayVectorizedAnimationSpec(vecSpec, this.startDelayNanos_1);
  };
  protoOf(StartDelayAnimationSpec).hashCode = function () {
    return imul(31, hashCode(this.animationSpec_1)) + this.startDelayNanos_1.hashCode() | 0;
  };
  protoOf(StartDelayAnimationSpec).equals = function (other) {
    if (!(other instanceof StartDelayAnimationSpec)) {
      return false;
    }
    return other.startDelayNanos_1.equals(this.startDelayNanos_1) && equals(other.animationSpec_1, this.animationSpec_1);
  };
  function StartDelayVectorizedAnimationSpec(vectorizedAnimationSpec, startDelayNanos) {
    this.vectorizedAnimationSpec_1 = vectorizedAnimationSpec;
    this.startDelayNanos_1 = startDelayNanos;
  }
  protoOf(StartDelayVectorizedAnimationSpec).get_vectorizedAnimationSpec_47d5b1_k$ = function () {
    return this.vectorizedAnimationSpec_1;
  };
  protoOf(StartDelayVectorizedAnimationSpec).get_startDelayNanos_rdfwq3_k$ = function () {
    return this.startDelayNanos_1;
  };
  protoOf(StartDelayVectorizedAnimationSpec).get_isInfinite_uffwnt_k$ = function () {
    return this.vectorizedAnimationSpec_1.get_isInfinite_uffwnt_k$();
  };
  protoOf(StartDelayVectorizedAnimationSpec).getDurationNanos_c9o343_k$ = function (initialValue, targetValue, initialVelocity) {
    return this.vectorizedAnimationSpec_1.getDurationNanos_c9o343_k$(initialValue, targetValue, initialVelocity).plus_r93sks_k$(this.startDelayNanos_1);
  };
  protoOf(StartDelayVectorizedAnimationSpec).getVelocityFromNanos_wafrjo_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var tmp;
    if (playTimeNanos.compareTo_9jj042_k$(this.startDelayNanos_1) < 0) {
      tmp = initialVelocity;
    } else {
      tmp = this.vectorizedAnimationSpec_1.getVelocityFromNanos_wafrjo_k$(playTimeNanos.minus_mfbszm_k$(this.startDelayNanos_1), initialValue, targetValue, initialVelocity);
    }
    return tmp;
  };
  protoOf(StartDelayVectorizedAnimationSpec).getValueFromNanos_xg3j38_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var tmp;
    if (playTimeNanos.compareTo_9jj042_k$(this.startDelayNanos_1) < 0) {
      tmp = initialValue;
    } else {
      tmp = this.vectorizedAnimationSpec_1.getValueFromNanos_xg3j38_k$(playTimeNanos.minus_mfbszm_k$(this.startDelayNanos_1), initialValue, targetValue, initialVelocity);
    }
    return tmp;
  };
  protoOf(StartDelayVectorizedAnimationSpec).hashCode = function () {
    return imul(31, hashCode(this.vectorizedAnimationSpec_1)) + this.startDelayNanos_1.hashCode() | 0;
  };
  protoOf(StartDelayVectorizedAnimationSpec).equals = function (other) {
    if (!(other instanceof StartDelayVectorizedAnimationSpec)) {
      return false;
    }
    return other.startDelayNanos_1.equals(this.startDelayNanos_1) && equals(other.vectorizedAnimationSpec_1, this.vectorizedAnimationSpec_1);
  };
  function InfiniteRepeatableSpec_init_$Init$(animation, repeatMode, $this) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    InfiniteRepeatableSpec.call($this, animation, repeatMode, _StartOffset___init__impl__615djw_0(0));
    return $this;
  }
  function InfiniteRepeatableSpec_init_$Create$(animation, repeatMode) {
    return InfiniteRepeatableSpec_init_$Init$(animation, repeatMode, objectCreate(protoOf(InfiniteRepeatableSpec)));
  }
  function InfiniteRepeatableSpec(animation, repeatMode, initialStartOffset) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    initialStartOffset = initialStartOffset === VOID ? _StartOffset___init__impl__615djw_0(0) : initialStartOffset;
    this.animation_1 = animation;
    this.repeatMode_1 = repeatMode;
    this.initialStartOffset_1 = initialStartOffset;
  }
  protoOf(InfiniteRepeatableSpec).get_animation_r0gd0b_k$ = function () {
    return this.animation_1;
  };
  protoOf(InfiniteRepeatableSpec).get_repeatMode_zzqu1_k$ = function () {
    return this.repeatMode_1;
  };
  protoOf(InfiniteRepeatableSpec).get_initialStartOffset_ofn0ob_k$ = function () {
    return this.initialStartOffset_1;
  };
  protoOf(InfiniteRepeatableSpec).vectorize_pto10n_k$ = function (converter) {
    return new VectorizedInfiniteRepeatableSpec(this.animation_1.vectorize_pto10n_k$(converter), this.repeatMode_1, this.initialStartOffset_1);
  };
  protoOf(InfiniteRepeatableSpec).equals = function (other) {
    var tmp;
    if (other instanceof InfiniteRepeatableSpec) {
      tmp = (equals(other.animation_1, this.animation_1) && other.repeatMode_1.equals(this.repeatMode_1) && equals(other.initialStartOffset_1, this.initialStartOffset_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(InfiniteRepeatableSpec).hashCode = function () {
    return imul(imul(hashCode(this.animation_1), 31) + this.repeatMode_1.hashCode() | 0, 31) + StartOffset__hashCode_impl_ith3z7(this.initialStartOffset_1) | 0;
  };
  function infiniteRepeatable(animation, repeatMode, initialStartOffset) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    initialStartOffset = initialStartOffset === VOID ? _StartOffset___init__impl__615djw_0(0) : initialStartOffset;
    return new InfiniteRepeatableSpec(animation, repeatMode, initialStartOffset);
  }
  function KeyframesSpecConfig() {
    KeyframesSpecBaseConfig.call(this);
  }
  protoOf(KeyframesSpecConfig).createEntityFor_1kfc6w_k$ = function (value) {
    return new KeyframeEntity(value);
  };
  protoOf(KeyframesSpecConfig).at_1dnb16_k$ = function (_this__u8e3s4, timeStamp) {
    // Inline function 'kotlin.also' call
    var this_0 = new KeyframeEntity(_this__u8e3s4);
    // Inline function 'androidx.compose.animation.core.KeyframesSpecConfig.at.<anonymous>' call
    this.keyframes_1.set_hupg49_k$(timeStamp, this_0);
    return this_0;
  };
  protoOf(KeyframesSpecConfig).atFraction_i4lk4_k$ = function (_this__u8e3s4, fraction) {
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = this.durationMillis_1 * fraction;
    var tmp$ret$1 = roundToInt(this_0);
    return this.at_1dnb16_k$(_this__u8e3s4, tmp$ret$1);
  };
  protoOf(KeyframesSpecConfig).with_cuwycf_k$ = function (_this__u8e3s4, easing) {
    _this__u8e3s4.easing_1 = easing;
  };
  protoOf(KeyframesSpecConfig).using_5khw1z_k$ = function (_this__u8e3s4, arcMode) {
    _this__u8e3s4.arcMode_1 = arcMode;
    return _this__u8e3s4;
  };
  function KeyframeEntity(value, easing, arcMode) {
    easing = easing === VOID ? get_LinearEasing() : easing;
    arcMode = arcMode === VOID ? Companion_getInstance_12().get_ArcLinear_4dmwqp_k$() : arcMode;
    KeyframeBaseEntity.call(this, value, easing);
    this.arcMode_1 = arcMode;
  }
  protoOf(KeyframeEntity).set_arcMode_84ij8q_k$ = function (_set____db54di) {
    this.arcMode_1 = _set____db54di;
  };
  protoOf(KeyframeEntity).get_arcMode_se3d9i_k$ = function () {
    return this.arcMode_1;
  };
  protoOf(KeyframeEntity).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof KeyframeEntity))
      return false;
    return equals(other.value_1, this.value_1) && equals(other.easing_1, this.easing_1) && other.arcMode_1 === this.arcMode_1;
  };
  protoOf(KeyframeEntity).hashCode = function () {
    var tmp0_safe_receiver = this.value_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + ArcMode__hashCode_impl_ghaz31(this.arcMode_1) | 0;
    result = imul(31, result) + hashCode(this.easing_1) | 0;
    return result;
  };
  function KeyframesSpec(config) {
    this.config_1 = config;
  }
  protoOf(KeyframesSpec).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(KeyframesSpec).vectorize_pto10n_k$ = function (converter) {
    var timestamps = new MutableIntList(this.config_1.keyframes_1.get_size_woubt6_k$() + 2 | 0);
    var timeToInfoMap = new MutableIntObjectMap(this.config_1.keyframes_1.get_size_woubt6_k$());
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var this_0 = this.config_1.keyframes_1;
    var k = this_0.get_keys_x7wiqc_k$();
    var v = this_0.get_values_s0ixei_k$();
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this_0.get_metadata_ddgo4n_k$();
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.and_4spn93_k$(this_1.inv_28kx_k$().shl_bg8if3_k$(7)).and_4spn93_k$(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.and_4spn93_k$(new Long(255, 0)).compareTo_9jj042_k$(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntObjectMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  var tmp = v[index];
                  // Inline function 'androidx.compose.animation.core.KeyframesSpec.vectorize.<anonymous>' call
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  timestamps.add_lnluon_k$(tmp1);
                  timeToInfoMap.set_hupg49_k$(tmp1, new VectorizedKeyframeSpecElementInfo(converter.get_convertToVector_s594l4_k$()(value.value_1), value.easing_1, value.arcMode_1));
                }
                slot = slot.shr_9fl3wl_k$(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    if (!this.config_1.keyframes_1.contains_7q95ev_k$(0)) {
      timestamps.add_6jazo1_k$(0, 0);
    }
    if (!this.config_1.keyframes_1.contains_7q95ev_k$(this.config_1.durationMillis_1)) {
      timestamps.add_lnluon_k$(this.config_1.durationMillis_1);
    }
    if (timestamps.isNotEmpty_cjxbwk_k$()) {
      timestamps.sort_6ihik2_k$();
    }
    return new VectorizedKeyframesSpec(timestamps, timeToInfoMap, this.config_1.durationMillis_1, this.config_1.delayMillis_1, get_LinearEasing(), Companion_getInstance_12().get_ArcLinear_4dmwqp_k$());
  };
  function keyframes(init) {
    // Inline function 'kotlin.apply' call
    var this_0 = new KeyframesSpecConfig();
    init(this_0);
    return new KeyframesSpec(this_0);
  }
  function TweenSpec(durationMillis, delay, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.durationMillis_1 = durationMillis;
    this.delay_1 = delay;
    this.easing_1 = easing;
  }
  protoOf(TweenSpec).get_durationMillis_pqx05f_k$ = function () {
    return this.durationMillis_1;
  };
  protoOf(TweenSpec).get_delay_iq7n8a_k$ = function () {
    return this.delay_1;
  };
  protoOf(TweenSpec).get_easing_cqnn04_k$ = function () {
    return this.easing_1;
  };
  protoOf(TweenSpec).vectorize_pto10n_k$ = function (converter) {
    return new VectorizedTweenSpec(this.durationMillis_1, this.delay_1, this.easing_1);
  };
  protoOf(TweenSpec).equals = function (other) {
    var tmp;
    if (other instanceof TweenSpec) {
      tmp = (other.durationMillis_1 === this.durationMillis_1 && other.delay_1 === this.delay_1 && equals(other.easing_1, this.easing_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TweenSpec).hashCode = function () {
    return imul(imul(this.durationMillis_1, 31) + hashCode(this.easing_1) | 0, 31) + this.delay_1 | 0;
  };
  function tween(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    return new TweenSpec(durationMillis, delayMillis, easing);
  }
  function SnapSpec(delay) {
    delay = delay === VOID ? 0 : delay;
    this.delay_1 = delay;
  }
  protoOf(SnapSpec).get_delay_iq7n8a_k$ = function () {
    return this.delay_1;
  };
  protoOf(SnapSpec).vectorize_pto10n_k$ = function (converter) {
    return new VectorizedSnapSpec(this.delay_1);
  };
  protoOf(SnapSpec).equals = function (other) {
    var tmp;
    if (other instanceof SnapSpec) {
      tmp = other.delay_1 === this.delay_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SnapSpec).hashCode = function () {
    return this.delay_1;
  };
  function DurationBasedAnimationSpec() {
  }
  var RepeatMode_Restart_instance;
  var RepeatMode_Reverse_instance;
  function values_0() {
    return [RepeatMode_Restart_getInstance(), RepeatMode_Reverse_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Restart':
        return RepeatMode_Restart_getInstance();
      case 'Reverse':
        return RepeatMode_Reverse_getInstance();
      default:
        RepeatMode_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var RepeatMode_entriesInitialized;
  function RepeatMode_initEntries() {
    if (RepeatMode_entriesInitialized)
      return Unit_getInstance();
    RepeatMode_entriesInitialized = true;
    RepeatMode_Restart_instance = new RepeatMode('Restart', 0);
    RepeatMode_Reverse_instance = new RepeatMode('Reverse', 1);
  }
  var $ENTRIES_0;
  function RepeatMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _StartOffset___init__impl__615djw(value) {
    return value;
  }
  function _StartOffset___get_value__impl__8sikig($this) {
    return $this;
  }
  function _StartOffset___init__impl__615djw_0(offsetMillis, offsetType) {
    offsetType = offsetType === VOID ? Companion_getInstance_8().Delay_1 : offsetType;
    return _StartOffset___init__impl__615djw(toLong(imul(offsetMillis, _StartOffsetType___get_value__impl__i1pfem(offsetType))));
  }
  function _StartOffset___get_offsetMillis__impl__x95ylg($this) {
    return abs(_StartOffset___get_value__impl__8sikig($this).toInt_1tsl84_k$());
  }
  function _StartOffset___get_offsetType__impl__92sljs($this) {
    var tmp;
    switch (_StartOffset___get_value__impl__8sikig($this).compareTo_9jj042_k$(new Long(0, 0)) > 0) {
      case true:
        tmp = Companion_getInstance_8().FastForward_1;
        break;
      case false:
        tmp = Companion_getInstance_8().Delay_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function StartOffset__toString_impl_2xosto($this) {
    return 'StartOffset(value=' + $this.toString() + ')';
  }
  function StartOffset__hashCode_impl_ith3z7($this) {
    return $this.hashCode();
  }
  function StartOffset__equals_impl_58sbp5($this, other) {
    if (!(other instanceof StartOffset))
      return false;
    var tmp0_other_with_cast = other instanceof StartOffset ? other.value_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function StartOffset(value) {
    this.value_1 = value;
  }
  protoOf(StartOffset).toString = function () {
    return StartOffset__toString_impl_2xosto(this.value_1);
  };
  protoOf(StartOffset).hashCode = function () {
    return StartOffset__hashCode_impl_ith3z7(this.value_1);
  };
  protoOf(StartOffset).equals = function (other) {
    return StartOffset__equals_impl_58sbp5(this.value_1, other);
  };
  function KeyframesSpecBaseConfig() {
    this.durationMillis_1 = 300;
    this.delayMillis_1 = 0;
    this.keyframes_1 = mutableIntObjectMapOf();
  }
  protoOf(KeyframesSpecBaseConfig).set_durationMillis_11l8vl_k$ = function (_set____db54di) {
    this.durationMillis_1 = _set____db54di;
  };
  protoOf(KeyframesSpecBaseConfig).get_durationMillis_pqx05f_k$ = function () {
    return this.durationMillis_1;
  };
  protoOf(KeyframesSpecBaseConfig).set_delayMillis_uhofus_k$ = function (_set____db54di) {
    this.delayMillis_1 = _set____db54di;
  };
  protoOf(KeyframesSpecBaseConfig).get_delayMillis_d968n4_k$ = function () {
    return this.delayMillis_1;
  };
  protoOf(KeyframesSpecBaseConfig).get_keyframes_fgkoo7_k$ = function () {
    return this.keyframes_1;
  };
  protoOf(KeyframesSpecBaseConfig).at_1dnb16_k$ = function (_this__u8e3s4, timeStamp) {
    var entity = this.createEntityFor_1kfc6w_k$(_this__u8e3s4);
    this.keyframes_1.set_hupg49_k$(timeStamp, entity);
    return entity;
  };
  protoOf(KeyframesSpecBaseConfig).atFraction_i4lk4_k$ = function (_this__u8e3s4, fraction) {
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = this.durationMillis_1 * fraction;
    var tmp$ret$1 = roundToInt(this_0);
    return this.at_1dnb16_k$(_this__u8e3s4, tmp$ret$1);
  };
  protoOf(KeyframesSpecBaseConfig).using_gofctp_k$ = function (_this__u8e3s4, easing) {
    _this__u8e3s4.easing_1 = easing;
    return _this__u8e3s4;
  };
  function KeyframeBaseEntity(value, easing) {
    this.value_1 = value;
    this.easing_1 = easing;
  }
  protoOf(KeyframeBaseEntity).get_value_z4oxbv_k$ = function () {
    return this.value_1;
  };
  protoOf(KeyframeBaseEntity).set_easing_4gr030_k$ = function (_set____db54di) {
    this.easing_1 = _set____db54di;
  };
  protoOf(KeyframeBaseEntity).get_easing_8363f3_k$ = function () {
    return this.easing_1;
  };
  protoOf(KeyframeBaseEntity).toPair_d22x5s_k$ = function (convertToVector) {
    return to(convertToVector(this.value_1), this.easing_1);
  };
  function _StartOffsetType___init__impl__g1ur7a(value) {
    return value;
  }
  function _StartOffsetType___get_value__impl__i1pfem($this) {
    return $this;
  }
  function Companion() {
    Companion_instance = this;
    this.Delay_1 = _StartOffsetType___init__impl__g1ur7a(-1);
    this.FastForward_1 = _StartOffsetType___init__impl__g1ur7a(1);
  }
  protoOf(Companion).get_Delay_4dknp7_k$ = function () {
    return this.Delay_1;
  };
  protoOf(Companion).get_FastForward_i32a6j_k$ = function () {
    return this.FastForward_1;
  };
  var Companion_instance;
  function Companion_getInstance_8() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function StartOffsetType__toString_impl_3r5832($this) {
    return 'StartOffsetType(value=' + $this + ')';
  }
  function StartOffsetType__hashCode_impl_pib4vx($this) {
    return $this;
  }
  function StartOffsetType__equals_impl_hnkckf($this, other) {
    if (!(other instanceof StartOffsetType))
      return false;
    if (!($this === (other instanceof StartOffsetType ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StartOffsetType(value) {
    Companion_getInstance_8();
    this.value_1 = value;
  }
  protoOf(StartOffsetType).toString = function () {
    return StartOffsetType__toString_impl_3r5832(this.value_1);
  };
  protoOf(StartOffsetType).hashCode = function () {
    return StartOffsetType__hashCode_impl_pib4vx(this.value_1);
  };
  protoOf(StartOffsetType).equals = function (other) {
    return StartOffsetType__equals_impl_hnkckf(this.value_1, other);
  };
  var androidx_compose_animation_core_InfiniteRepeatableSpec$stable;
  function RepeatMode_Restart_getInstance() {
    RepeatMode_initEntries();
    return RepeatMode_Restart_instance;
  }
  function RepeatMode_Reverse_getInstance() {
    RepeatMode_initEntries();
    return RepeatMode_Reverse_instance;
  }
  function createZeroVectorFrom(_this__u8e3s4, value) {
    // Inline function 'kotlin.also' call
    var this_0 = _this__u8e3s4.get_convertToVector_s594l4_k$()(value);
    // Inline function 'androidx.compose.animation.core.createZeroVectorFrom.<anonymous>' call
    this_0.reset_x7qqys_k$();
    return this_0;
  }
  function AnimationState(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    this.typeConverter_1 = typeConverter;
    this.value$delegate_1 = mutableStateOf(initialValue);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_1(initialVelocityVector);
    tmp.velocityVector_1 = tmp1_elvis_lhs == null ? createZeroVectorFrom(this.typeConverter_1, initialValue) : tmp1_elvis_lhs;
    this.lastFrameTimeNanos_1 = lastFrameTimeNanos;
    this.finishedTimeNanos_1 = finishedTimeNanos;
    this.isRunning_1 = isRunning;
  }
  protoOf(AnimationState).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(AnimationState).set_value_w62xiq_k$ = function (_set____db54di) {
    var tmp0 = this.value$delegate_1;
    value$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(AnimationState).get_value_j01efc_k$ = function () {
    var tmp0 = this.value$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    value$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(AnimationState).set_velocityVector_tj9mci_k$ = function (_set____db54di) {
    this.velocityVector_1 = _set____db54di;
  };
  protoOf(AnimationState).get_velocityVector_v3jmo9_k$ = function () {
    return this.velocityVector_1;
  };
  protoOf(AnimationState).set_lastFrameTimeNanos_lyzzef_k$ = function (_set____db54di) {
    this.lastFrameTimeNanos_1 = _set____db54di;
  };
  protoOf(AnimationState).get_lastFrameTimeNanos_3aprno_k$ = function () {
    return this.lastFrameTimeNanos_1;
  };
  protoOf(AnimationState).set_finishedTimeNanos_76k3z2_k$ = function (_set____db54di) {
    this.finishedTimeNanos_1 = _set____db54di;
  };
  protoOf(AnimationState).get_finishedTimeNanos_t5ryif_k$ = function () {
    return this.finishedTimeNanos_1;
  };
  protoOf(AnimationState).set_isRunning_o0rkdc_k$ = function (_set____db54di) {
    this.isRunning_1 = _set____db54di;
  };
  protoOf(AnimationState).get_isRunning_okmtn0_k$ = function () {
    return this.isRunning_1;
  };
  protoOf(AnimationState).get_velocity_3hqvmu_k$ = function () {
    return this.typeConverter_1.get_convertFromVector_kmewon_k$()(this.velocityVector_1);
  };
  protoOf(AnimationState).toString = function () {
    return 'AnimationState(' + ('value=' + toString_0(this.get_value_j01efc_k$()) + ', ') + ('velocity=' + toString_0(this.get_velocity_3hqvmu_k$()) + ', ') + ('isRunning=' + this.isRunning_1 + ', ') + ('lastFrameTimeNanos=' + this.lastFrameTimeNanos_1.toString() + ', ') + ('finishedTimeNanos=' + this.finishedTimeNanos_1.toString()) + ')';
  };
  function AnimationState_0(initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    return new AnimationState(get_VectorConverter(FloatCompanionObject_getInstance()), initialValue, AnimationVector(initialVelocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function copy(_this__u8e3s4, value, velocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.get_value_j01efc_k$() : value;
    velocity = velocity === VOID ? _this__u8e3s4.velocityVector_1.get_value_j01efc_k$() : velocity;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.lastFrameTimeNanos_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.finishedTimeNanos_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.isRunning_1 : isRunning;
    return new AnimationState(_this__u8e3s4.typeConverter_1, value, AnimationVector(velocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function _get_onCancel__fbp26m($this) {
    return $this.onCancel_1;
  }
  function AnimationScope(initialValue, typeConverter, initialVelocityVector, lastFrameTimeNanos, targetValue, startTimeNanos, isRunning, onCancel) {
    this.typeConverter_1 = typeConverter;
    this.targetValue_1 = targetValue;
    this.startTimeNanos_1 = startTimeNanos;
    this.onCancel_1 = onCancel;
    this.value$delegate_1 = mutableStateOf(initialValue);
    this.velocityVector_1 = copy_1(initialVelocityVector);
    this.lastFrameTimeNanos_1 = lastFrameTimeNanos;
    this.finishedTimeNanos_1 = new Long(0, -2147483648);
    this.isRunning$delegate_1 = mutableStateOf(isRunning);
  }
  protoOf(AnimationScope).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(AnimationScope).get_targetValue_kq6mfd_k$ = function () {
    return this.targetValue_1;
  };
  protoOf(AnimationScope).get_startTimeNanos_ru5em1_k$ = function () {
    return this.startTimeNanos_1;
  };
  protoOf(AnimationScope).set_value_w62xiq_k$ = function (_set____db54di) {
    var tmp0 = this.value$delegate_1;
    value$factory_1();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(AnimationScope).get_value_j01efc_k$ = function () {
    var tmp0 = this.value$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    value$factory_2();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(AnimationScope).set_velocityVector_tj9mci_k$ = function (_set____db54di) {
    this.velocityVector_1 = _set____db54di;
  };
  protoOf(AnimationScope).get_velocityVector_v3jmo9_k$ = function () {
    return this.velocityVector_1;
  };
  protoOf(AnimationScope).set_lastFrameTimeNanos_lyzzef_k$ = function (_set____db54di) {
    this.lastFrameTimeNanos_1 = _set____db54di;
  };
  protoOf(AnimationScope).get_lastFrameTimeNanos_3aprno_k$ = function () {
    return this.lastFrameTimeNanos_1;
  };
  protoOf(AnimationScope).set_finishedTimeNanos_76k3z2_k$ = function (_set____db54di) {
    this.finishedTimeNanos_1 = _set____db54di;
  };
  protoOf(AnimationScope).get_finishedTimeNanos_t5ryif_k$ = function () {
    return this.finishedTimeNanos_1;
  };
  protoOf(AnimationScope).set_isRunning_o0rkdc_k$ = function (_set____db54di) {
    var tmp0 = this.isRunning$delegate_1;
    isRunning$factory_1();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(AnimationScope).get_isRunning_okmtn0_k$ = function () {
    var tmp0 = this.isRunning$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    isRunning$factory_2();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(AnimationScope).get_velocity_3hqvmu_k$ = function () {
    return this.typeConverter_1.get_convertFromVector_kmewon_k$()(this.velocityVector_1);
  };
  protoOf(AnimationScope).cancelAnimation_ic0k2u_k$ = function () {
    this.set_isRunning_o0rkdc_k$(false);
    this.onCancel_1();
  };
  protoOf(AnimationScope).toAnimationState_sex3co_k$ = function () {
    return new AnimationState(this.typeConverter_1, this.get_value_j01efc_k$(), this.velocityVector_1, this.lastFrameTimeNanos_1, this.finishedTimeNanos_1, this.get_isRunning_okmtn0_k$());
  };
  function copy_0(_this__u8e3s4, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.get_value_j01efc_k$() : value;
    velocityVector = velocityVector === VOID ? copy_1(_this__u8e3s4.velocityVector_1) : velocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.lastFrameTimeNanos_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.finishedTimeNanos_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.isRunning_1 : isRunning;
    return new AnimationState(_this__u8e3s4.typeConverter_1, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function AnimationState_1(typeConverter, initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    return new AnimationState(typeConverter, initialValue, typeConverter.get_convertToVector_s594l4_k$()(initialVelocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_w62xiq_k$(value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_w62xiq_k$(value);
    });
  }
  function value$factory_1() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_w62xiq_k$(value);
    });
  }
  function value$factory_2() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_w62xiq_k$(value);
    });
  }
  function isRunning$factory_1() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isRunning_okmtn0_k$();
    }, function (receiver, value) {
      return receiver.set_isRunning_o0rkdc_k$(value);
    });
  }
  function isRunning$factory_2() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isRunning_okmtn0_k$();
    }, function (receiver, value) {
      return receiver.set_isRunning_o0rkdc_k$(value);
    });
  }
  function AnimationVector1D(initVal) {
    AnimationVector_3.call(this);
    this.value_1 = initVal;
    this.size_1 = 1;
  }
  protoOf(AnimationVector1D).set_value_tsbbnb_k$ = function (_set____db54di) {
    this.value_1 = _set____db54di;
  };
  protoOf(AnimationVector1D).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(AnimationVector1D).reset_x7qqys_k$ = function () {
    this.value_1 = 0.0;
  };
  protoOf(AnimationVector1D).newVector_ez1i80_k$ = function () {
    return new AnimationVector1D(0.0);
  };
  protoOf(AnimationVector1D).get_jz2icb_k$ = function (index) {
    if (index === 0) {
      return this.value_1;
    } else {
      return 0.0;
    }
  };
  protoOf(AnimationVector1D).set_ln2e3z_k$ = function (index, value) {
    if (index === 0) {
      this.value_1 = value;
    }
  };
  protoOf(AnimationVector1D).get_size_au00c9_k$ = function () {
    return this.size_1;
  };
  protoOf(AnimationVector1D).toString = function () {
    return 'AnimationVector1D: value = ' + this.value_1;
  };
  protoOf(AnimationVector1D).equals = function (other) {
    var tmp;
    if (other instanceof AnimationVector1D) {
      tmp = other.value_1 === this.value_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector1D).hashCode = function () {
    return getNumberHashCode(this.value_1);
  };
  function AnimationVector(v1) {
    return new AnimationVector1D(v1);
  }
  function AnimationVector2D(v1, v2) {
    AnimationVector_3.call(this);
    this.v1__1 = v1;
    this.v2__1 = v2;
    this.size_1 = 2;
  }
  protoOf(AnimationVector2D).set_v1_dvpkib_k$ = function (_set____db54di) {
    this.v1__1 = _set____db54di;
  };
  protoOf(AnimationVector2D).get_v1_kntnng_k$ = function () {
    return this.v1__1;
  };
  protoOf(AnimationVector2D).set_v2_91mq5u_k$ = function (_set____db54di) {
    this.v2__1 = _set____db54di;
  };
  protoOf(AnimationVector2D).get_v2_kntnnf_k$ = function () {
    return this.v2__1;
  };
  protoOf(AnimationVector2D).reset_x7qqys_k$ = function () {
    this.v1__1 = 0.0;
    this.v2__1 = 0.0;
  };
  protoOf(AnimationVector2D).newVector_ez1i80_k$ = function () {
    return new AnimationVector2D(0.0, 0.0);
  };
  protoOf(AnimationVector2D).get_jz2icb_k$ = function (index) {
    switch (index) {
      case 0:
        return this.v1__1;
      case 1:
        return this.v2__1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector2D).set_ln2e3z_k$ = function (index, value) {
    if (index === 0)
      this.v1__1 = value;
    else if (index === 1)
      this.v2__1 = value;
  };
  protoOf(AnimationVector2D).get_size_au00c9_k$ = function () {
    return this.size_1;
  };
  protoOf(AnimationVector2D).toString = function () {
    return 'AnimationVector2D: v1 = ' + this.v1__1 + ', v2 = ' + this.v2__1;
  };
  protoOf(AnimationVector2D).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AnimationVector2D) {
      tmp_0 = other.v1__1 === this.v1__1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.v2__1 === this.v2__1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector2D).hashCode = function () {
    return imul(getNumberHashCode(this.v1__1), 31) + getNumberHashCode(this.v2__1) | 0;
  };
  function AnimationVector_0(v1, v2) {
    return new AnimationVector2D(v1, v2);
  }
  function AnimationVector3D(v1, v2, v3) {
    AnimationVector_3.call(this);
    this.v1__1 = v1;
    this.v2__1 = v2;
    this.v3__1 = v3;
    this.size_1 = 3;
  }
  protoOf(AnimationVector3D).set_v1_dvpkib_k$ = function (_set____db54di) {
    this.v1__1 = _set____db54di;
  };
  protoOf(AnimationVector3D).get_v1_kntnng_k$ = function () {
    return this.v1__1;
  };
  protoOf(AnimationVector3D).set_v2_91mq5u_k$ = function (_set____db54di) {
    this.v2__1 = _set____db54di;
  };
  protoOf(AnimationVector3D).get_v2_kntnnf_k$ = function () {
    return this.v2__1;
  };
  protoOf(AnimationVector3D).set_v3_47jvtd_k$ = function (_set____db54di) {
    this.v3__1 = _set____db54di;
  };
  protoOf(AnimationVector3D).get_v3_kntnne_k$ = function () {
    return this.v3__1;
  };
  protoOf(AnimationVector3D).reset_x7qqys_k$ = function () {
    this.v1__1 = 0.0;
    this.v2__1 = 0.0;
    this.v3__1 = 0.0;
  };
  protoOf(AnimationVector3D).newVector_ez1i80_k$ = function () {
    return new AnimationVector3D(0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector3D).get_jz2icb_k$ = function (index) {
    switch (index) {
      case 0:
        return this.v1__1;
      case 1:
        return this.v2__1;
      case 2:
        return this.v3__1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector3D).set_ln2e3z_k$ = function (index, value) {
    switch (index) {
      case 0:
        this.v1__1 = value;
        break;
      case 1:
        this.v2__1 = value;
        break;
      case 2:
        this.v3__1 = value;
        break;
    }
  };
  protoOf(AnimationVector3D).get_size_au00c9_k$ = function () {
    return this.size_1;
  };
  protoOf(AnimationVector3D).toString = function () {
    return 'AnimationVector3D: v1 = ' + this.v1__1 + ', v2 = ' + this.v2__1 + ', v3 = ' + this.v3__1;
  };
  protoOf(AnimationVector3D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof AnimationVector3D) {
      tmp_1 = other.v1__1 === this.v1__1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.v2__1 === this.v2__1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.v3__1 === this.v3__1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector3D).hashCode = function () {
    return imul(imul(getNumberHashCode(this.v1__1), 31) + getNumberHashCode(this.v2__1) | 0, 31) + getNumberHashCode(this.v3__1) | 0;
  };
  function AnimationVector_1(v1, v2, v3) {
    return new AnimationVector3D(v1, v2, v3);
  }
  function AnimationVector4D(v1, v2, v3, v4) {
    AnimationVector_3.call(this);
    this.v1__1 = v1;
    this.v2__1 = v2;
    this.v3__1 = v3;
    this.v4__1 = v4;
    this.size_1 = 4;
  }
  protoOf(AnimationVector4D).set_v1_dvpkib_k$ = function (_set____db54di) {
    this.v1__1 = _set____db54di;
  };
  protoOf(AnimationVector4D).get_v1_kntnng_k$ = function () {
    return this.v1__1;
  };
  protoOf(AnimationVector4D).set_v2_91mq5u_k$ = function (_set____db54di) {
    this.v2__1 = _set____db54di;
  };
  protoOf(AnimationVector4D).get_v2_kntnnf_k$ = function () {
    return this.v2__1;
  };
  protoOf(AnimationVector4D).set_v3_47jvtd_k$ = function (_set____db54di) {
    this.v3__1 = _set____db54di;
  };
  protoOf(AnimationVector4D).get_v3_kntnne_k$ = function () {
    return this.v3__1;
  };
  protoOf(AnimationVector4D).set_v4_miyj4_k$ = function (_set____db54di) {
    this.v4__1 = _set____db54di;
  };
  protoOf(AnimationVector4D).get_v4_kntnnd_k$ = function () {
    return this.v4__1;
  };
  protoOf(AnimationVector4D).reset_x7qqys_k$ = function () {
    this.v1__1 = 0.0;
    this.v2__1 = 0.0;
    this.v3__1 = 0.0;
    this.v4__1 = 0.0;
  };
  protoOf(AnimationVector4D).newVector_ez1i80_k$ = function () {
    return new AnimationVector4D(0.0, 0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector4D).get_jz2icb_k$ = function (index) {
    switch (index) {
      case 0:
        return this.v1__1;
      case 1:
        return this.v2__1;
      case 2:
        return this.v3__1;
      case 3:
        return this.v4__1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector4D).set_ln2e3z_k$ = function (index, value) {
    switch (index) {
      case 0:
        this.v1__1 = value;
        break;
      case 1:
        this.v2__1 = value;
        break;
      case 2:
        this.v3__1 = value;
        break;
      case 3:
        this.v4__1 = value;
        break;
    }
  };
  protoOf(AnimationVector4D).get_size_au00c9_k$ = function () {
    return this.size_1;
  };
  protoOf(AnimationVector4D).toString = function () {
    return 'AnimationVector4D: v1 = ' + this.v1__1 + ', v2 = ' + this.v2__1 + ', v3 = ' + this.v3__1 + ', v4 = ' + this.v4__1;
  };
  protoOf(AnimationVector4D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof AnimationVector4D) {
      tmp_2 = other.v1__1 === this.v1__1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.v2__1 === this.v2__1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.v3__1 === this.v3__1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.v4__1 === this.v4__1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector4D).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.v1__1), 31) + getNumberHashCode(this.v2__1) | 0, 31) + getNumberHashCode(this.v3__1) | 0, 31) + getNumberHashCode(this.v4__1) | 0;
  };
  function AnimationVector_2(v1, v2, v3, v4) {
    return new AnimationVector4D(v1, v2, v3, v4);
  }
  function AnimationVector_3() {
  }
  function newInstance(_this__u8e3s4) {
    var tmp = _this__u8e3s4.newVector_ez1i80_k$();
    return tmp instanceof AnimationVector_3 ? tmp : THROW_CCE();
  }
  function copy_1(_this__u8e3s4) {
    var newVector = newInstance(_this__u8e3s4);
    var inductionVariable = 0;
    var last = newVector.get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.set_ln2e3z_k$(i, _this__u8e3s4.get_jz2icb_k$(i));
      }
       while (inductionVariable < last);
    return newVector;
  }
  function copyFrom(_this__u8e3s4, source) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.set_ln2e3z_k$(i, source.get_jz2icb_k$(i));
      }
       while (inductionVariable < last);
  }
  function _set__ourPercent__bctlhp($this, _set____db54di) {
    $this._ourPercent_1 = _set____db54di;
  }
  function _get__ourPercent__tdwa5j($this) {
    return $this._ourPercent_1;
  }
  function _get_ourPercent__6mcer2($this) {
    if (!($this._ourPercent_1 == null)) {
      return ensureNotNull($this._ourPercent_1);
    }
    $this._ourPercent_1 = new Float32Array(91);
    return ensureNotNull($this._ourPercent_1);
  }
  function _get_Epsilon__ucbpc7($this) {
    return $this.Epsilon_1;
  }
  function _get_x1__ndcd0y($this) {
    return $this.x1__1;
  }
  function _get_y1__ndcdrn($this) {
    return $this.y1__1;
  }
  function _get_x2__ndcd1t($this) {
    return $this.x2__1;
  }
  function _get_y2__ndcdsi($this) {
    return $this.y2__1;
  }
  function _set_arcDistance__dzrwji($this, _set____db54di) {
    $this.arcDistance_1 = _set____db54di;
  }
  function _get_arcDistance__qqxz3q($this) {
    return $this.arcDistance_1;
  }
  function _set_tmpSinAngle__to36bx($this, _set____db54di) {
    $this.tmpSinAngle_1 = _set____db54di;
  }
  function _get_tmpSinAngle__mazzz($this) {
    return $this.tmpSinAngle_1;
  }
  function _set_tmpCosAngle__fdp3z2($this, _set____db54di) {
    $this.tmpCosAngle_1 = _set____db54di;
  }
  function _get_tmpCosAngle__ewp2cu($this) {
    return $this.tmpCosAngle_1;
  }
  function _get_lut__e6cfza($this) {
    return $this.lut_1;
  }
  function _get_oneOverDeltaTime__6tlni8($this) {
    return $this.oneOverDeltaTime_1;
  }
  function _get_ellipseA__kt61vc($this) {
    return $this.ellipseA_1;
  }
  function _get_ellipseB__kt61uh($this) {
    return $this.ellipseB_1;
  }
  function _get_ellipseCenterX__zifhve($this) {
    return $this.ellipseCenterX_1;
  }
  function _get_ellipseCenterY__zifhuj($this) {
    return $this.ellipseCenterY_1;
  }
  function _get_arcVelocity__3u700u($this) {
    return $this.arcVelocity_1;
  }
  function _get_isVertical__yidrg5($this) {
    return $this.isVertical_1;
  }
  function lookup($this, v) {
    if (v <= 0) {
      return 0.0;
    }
    if (v >= 1) {
      return 1.0;
    }
    var pos = v * ($this.lut_1.length - 1 | 0);
    var iv = numberToInt(pos);
    var off = pos - numberToInt(pos);
    return $this.lut_1[iv] + off * ($this.lut_1[iv + 1 | 0] - $this.lut_1[iv]);
  }
  function buildTable($this, x1, y1, x2, y2) {
    var a = x2 - x1;
    var b = y1 - y2;
    var lx = 0.0;
    var ly = 0.0;
    var dist = 0.0;
    var inductionVariable = 0;
    var last = _get_ourPercent__6mcer2(Companion_getInstance_9()).length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.toRadians' call
        var angle = 90.0 * i / (_get_ourPercent__6mcer2(Companion_getInstance_9()).length - 1 | 0) / 180 * get_PI();
        // Inline function 'kotlin.math.sin' call
        var s = Math.sin(angle);
        // Inline function 'kotlin.math.cos' call
        var c = Math.cos(angle);
        var px = a * s;
        var py = b * c;
        if (i > 0) {
          var tmp = dist;
          var tmp2 = px - lx;
          // Inline function 'kotlin.math.hypot' call
          var y = py - ly;
          dist = tmp + hypot(tmp2, y);
          _get_ourPercent__6mcer2(Companion_getInstance_9())[i] = dist;
        }
        lx = px;
        ly = py;
      }
       while (inductionVariable <= last);
    $this.arcDistance_1 = dist;
    var inductionVariable_0 = 0;
    var last_0 = _get_ourPercent__6mcer2(Companion_getInstance_9()).length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp2_array = _get_ourPercent__6mcer2(Companion_getInstance_9());
        tmp2_array[i_0] = tmp2_array[i_0] / dist;
      }
       while (inductionVariable_0 <= last_0);
    var inductionVariable_1 = 0;
    var last_1 = $this.lut_1.length - 1 | 0;
    if (inductionVariable_1 <= last_1)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var pos = i_1 / ($this.lut_1.length - 1 | 0);
        var index = binarySearch_0(_get_ourPercent__6mcer2(Companion_getInstance_9()), pos);
        if (index >= 0) {
          $this.lut_1[i_1] = index / (_get_ourPercent__6mcer2(Companion_getInstance_9()).length - 1 | 0);
        } else if (index === -1) {
          $this.lut_1[i_1] = 0.0;
        } else {
          var p1 = (-index | 0) - 2 | 0;
          var p2 = (-index | 0) - 1 | 0;
          var ans = (p1 + (pos - _get_ourPercent__6mcer2(Companion_getInstance_9())[p1]) / (_get_ourPercent__6mcer2(Companion_getInstance_9())[p2] - _get_ourPercent__6mcer2(Companion_getInstance_9())[p1])) / (_get_ourPercent__6mcer2(Companion_getInstance_9()).length - 1 | 0);
          $this.lut_1[i_1] = ans;
        }
      }
       while (inductionVariable_1 <= last_1);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this._ourPercent_1 = null;
    this.Epsilon_1 = 0.001;
  }
  var Companion_instance_0;
  function Companion_getInstance_9() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function _get_StartVertical__yhf1fd($this) {
    return $this.StartVertical_1;
  }
  function _get_StartHorizontal__5b6jez($this) {
    return $this.StartHorizontal_1;
  }
  function _get_StartLinear__uryooa($this) {
    return $this.StartLinear_1;
  }
  function _get_DownArc__b7izvj($this) {
    return $this.DownArc_1;
  }
  function _get_UpArc__pj3nxi($this) {
    return $this.UpArc_1;
  }
  function _get_arcs__d3xgqy($this) {
    return $this.arcs_1;
  }
  function _get_isExtrapolate__h1pzzu($this) {
    return $this.isExtrapolate_1;
  }
  function Arc(mode, time1, time2, x1, y1, x2, y2) {
    Companion_getInstance_9();
    this.time1__1 = time1;
    this.time2__1 = time2;
    this.x1__1 = x1;
    this.y1__1 = y1;
    this.x2__1 = x2;
    this.y2__1 = y2;
    this.arcDistance_1 = 0.0;
    this.tmpSinAngle_1 = 0.0;
    this.tmpCosAngle_1 = 0.0;
    var dx = this.x2__1 - this.x1__1;
    var dy = this.y2__1 - this.y1__1;
    var tmp = this;
    switch (mode) {
      case 1:
        tmp.isVertical_1 = true;
        break;
      case 5:
        tmp.isVertical_1 = dy < 0;
        break;
      case 4:
        tmp.isVertical_1 = dy > 0;
        break;
      default:
        tmp.isVertical_1 = false;
        break;
    }
    this.oneOverDeltaTime_1 = 1 / (this.time2__1 - this.time1__1);
    var isLinear = false;
    if (3 === mode) {
      isLinear = true;
    }
    var tmp_0;
    var tmp_1;
    if (isLinear) {
      tmp_1 = true;
    } else {
      // Inline function 'kotlin.math.abs' call
      var tmp_2 = Math.abs(dx);
      Companion_getInstance_9();
      tmp_1 = tmp_2 < 0.001;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.math.abs' call
      var tmp_3 = Math.abs(dy);
      Companion_getInstance_9();
      tmp_0 = tmp_3 < 0.001;
    }
    if (tmp_0) {
      isLinear = true;
      var tmp_4 = this;
      // Inline function 'kotlin.math.hypot' call
      tmp_4.arcDistance_1 = hypot(dy, dx);
      this.arcVelocity_1 = this.arcDistance_1 * this.oneOverDeltaTime_1;
      this.ellipseCenterX_1 = dx / (this.time2__1 - this.time1__1);
      this.ellipseCenterY_1 = dy / (this.time2__1 - this.time1__1);
      this.lut_1 = new Float32Array(101);
      this.ellipseA_1 = FloatCompanionObject_getInstance().get_NaN_18jnv2_k$();
      this.ellipseB_1 = FloatCompanionObject_getInstance().get_NaN_18jnv2_k$();
    } else {
      this.lut_1 = new Float32Array(101);
      this.ellipseA_1 = dx * (this.isVertical_1 ? -1 : 1);
      this.ellipseB_1 = dy * (this.isVertical_1 ? 1 : -1);
      this.ellipseCenterX_1 = this.isVertical_1 ? this.x2__1 : this.x1__1;
      this.ellipseCenterY_1 = this.isVertical_1 ? this.y1__1 : this.y2__1;
      buildTable(this, this.x1__1, this.y1__1, this.x2__1, this.y2__1);
      this.arcVelocity_1 = this.arcDistance_1 * this.oneOverDeltaTime_1;
    }
    this.isLinear_1 = isLinear;
  }
  protoOf(Arc).get_time1_iz2xgb_k$ = function () {
    return this.time1__1;
  };
  protoOf(Arc).get_time2_iz2xgc_k$ = function () {
    return this.time2__1;
  };
  protoOf(Arc).get_isLinear_w4z454_k$ = function () {
    return this.isLinear_1;
  };
  protoOf(Arc).setPoint_o7o21y_k$ = function (time) {
    var percent = (this.isVertical_1 ? this.time2__1 - time : time - this.time1__1) * this.oneOverDeltaTime_1;
    var angle = get_PI() * 0.5 * lookup(this, percent);
    var tmp = this;
    // Inline function 'kotlin.math.sin' call
    tmp.tmpSinAngle_1 = Math.sin(angle);
    var tmp_0 = this;
    // Inline function 'kotlin.math.cos' call
    tmp_0.tmpCosAngle_1 = Math.cos(angle);
  };
  protoOf(Arc).calcX_1k7uzn_k$ = function () {
    return this.ellipseCenterX_1 + this.ellipseA_1 * this.tmpSinAngle_1;
  };
  protoOf(Arc).calcY_1k7uzo_k$ = function () {
    return this.ellipseCenterY_1 + this.ellipseB_1 * this.tmpCosAngle_1;
  };
  protoOf(Arc).calcDX_mmcdp3_k$ = function () {
    var vx = this.ellipseA_1 * this.tmpCosAngle_1;
    var vy = -this.ellipseB_1 * this.tmpSinAngle_1;
    // Inline function 'kotlin.math.hypot' call
    var tmp$ret$0 = hypot(vx, vy);
    var norm = this.arcVelocity_1 / tmp$ret$0;
    return this.isVertical_1 ? -vx * norm : vx * norm;
  };
  protoOf(Arc).calcDY_mmcdp2_k$ = function () {
    var vx = this.ellipseA_1 * this.tmpCosAngle_1;
    var vy = -this.ellipseB_1 * this.tmpSinAngle_1;
    // Inline function 'kotlin.math.hypot' call
    var tmp$ret$0 = hypot(vx, vy);
    var norm = this.arcVelocity_1 / tmp$ret$0;
    return this.isVertical_1 ? -vy * norm : vy * norm;
  };
  protoOf(Arc).getLinearX_1v55xh_k$ = function (time) {
    var t = time;
    t = (t - this.time1__1) * this.oneOverDeltaTime_1;
    return this.x1__1 + t * (this.x2__1 - this.x1__1);
  };
  protoOf(Arc).getLinearY_729ra_k$ = function (time) {
    var t = time;
    t = (t - this.time1__1) * this.oneOverDeltaTime_1;
    return this.y1__1 + t * (this.y2__1 - this.y1__1);
  };
  protoOf(Arc).getLinearDX_h0232p_k$ = function () {
    return this.ellipseCenterX_1;
  };
  protoOf(Arc).getLinearDY_h0232o_k$ = function () {
    return this.ellipseCenterY_1;
  };
  function Companion_1() {
    Companion_instance_1 = this;
    this.ArcStartVertical_1 = 1;
    this.ArcStartHorizontal_1 = 2;
    this.ArcStartFlip_1 = 3;
    this.ArcBelow_1 = 4;
    this.ArcAbove_1 = 5;
    this.ArcStartLinear_1 = 0;
    this.StartVertical_1 = 1;
    this.StartHorizontal_1 = 2;
    this.StartLinear_1 = 3;
    this.DownArc_1 = 4;
    this.UpArc_1 = 5;
  }
  protoOf(Companion_1).get_ArcStartVertical_j5zc5t_k$ = function () {
    return this.ArcStartVertical_1;
  };
  protoOf(Companion_1).get_ArcStartHorizontal_24d9sz_k$ = function () {
    return this.ArcStartHorizontal_1;
  };
  protoOf(Companion_1).get_ArcStartFlip_gv0uze_k$ = function () {
    return this.ArcStartFlip_1;
  };
  protoOf(Companion_1).get_ArcBelow_bbuhns_k$ = function () {
    return this.ArcBelow_1;
  };
  protoOf(Companion_1).get_ArcAbove_bb8uhg_k$ = function () {
    return this.ArcAbove_1;
  };
  protoOf(Companion_1).get_ArcStartLinear_6bl6jm_k$ = function () {
    return this.ArcStartLinear_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_10() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ArcSpline(arcModes, timePoints, y) {
    Companion_getInstance_10();
    this.isExtrapolate_1 = true;
    var mode = {_v: 1};
    var last = {_v: 1};
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = timePoints.length - 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      switch (arcModes[tmp_3]) {
        case 1:
          mode._v = 1;
          last._v = mode._v;
          break;
        case 2:
          mode._v = 2;
          last._v = mode._v;
          break;
        case 3:
          mode._v = last._v === 1 ? 2 : 1;
          last._v = mode._v;
          break;
        case 0:
          mode._v = 3;
          break;
        case 5:
          mode._v = 5;
          break;
        case 4:
          mode._v = 4;
          break;
      }
      var dim = (y[tmp_3].length / 2 | 0) + (y[tmp_3].length % 2 | 0) | 0;
      var tmp_4 = 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_5 = fillArrayVal(Array(dim), null);
      while (tmp_4 < dim) {
        var tmp_6 = tmp_4;
        var k = imul(tmp_6, 2);
        tmp_5[tmp_6] = new Arc(mode._v, timePoints[tmp_3], timePoints[tmp_3 + 1 | 0], y[tmp_3][k], y[tmp_3][k + 1 | 0], y[tmp_3 + 1 | 0][k], y[tmp_3 + 1 | 0][k + 1 | 0]);
        tmp_4 = tmp_4 + 1 | 0;
      }
      tmp_2[tmp_3] = tmp_5;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.arcs_1 = tmp_2;
  }
  protoOf(ArcSpline).getPos_a1xi8i_k$ = function (time, v) {
    var t = time;
    if (this.isExtrapolate_1) {
      if (t < this.arcs_1[0][0].time1__1 || t > this.arcs_1[this.arcs_1.length - 1 | 0][0].time2__1) {
        var p;
        var t0;
        if (t > this.arcs_1[this.arcs_1.length - 1 | 0][0].time2__1) {
          p = this.arcs_1.length - 1 | 0;
          t0 = this.arcs_1[this.arcs_1.length - 1 | 0][0].time2__1;
        } else {
          p = 0;
          t0 = this.arcs_1[0][0].time1__1;
        }
        var dt = t - t0;
        var i = 0;
        var j = 0;
        while (i < v.length) {
          if (this.arcs_1[p][j].isLinear_1) {
            v[i] = this.arcs_1[p][j].getLinearX_1v55xh_k$(t0) + dt * this.arcs_1[p][j].getLinearDX_h0232p_k$();
            v[i + 1 | 0] = this.arcs_1[p][j].getLinearY_729ra_k$(t0) + dt * this.arcs_1[p][j].getLinearDY_h0232o_k$();
          } else {
            this.arcs_1[p][j].setPoint_o7o21y_k$(t0);
            v[i] = this.arcs_1[p][j].calcX_1k7uzn_k$() + dt * this.arcs_1[p][j].calcDX_mmcdp3_k$();
            v[i + 1 | 0] = this.arcs_1[p][j].calcY_1k7uzo_k$() + dt * this.arcs_1[p][j].calcDY_mmcdp2_k$();
          }
          i = i + 2 | 0;
          j = j + 1 | 0;
        }
        return Unit_getInstance();
      }
    } else {
      if (t < this.arcs_1[0][0].time1__1) {
        t = this.arcs_1[0][0].time1__1;
      }
      if (t > this.arcs_1[this.arcs_1.length - 1 | 0][0].time2__1) {
        t = this.arcs_1[this.arcs_1.length - 1 | 0][0].time2__1;
      }
    }
    var populated = false;
    var inductionVariable = 0;
    var last = this.arcs_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var k = 0;
        var j_0 = 0;
        while (j_0 < v.length) {
          if (t <= this.arcs_1[i_0][k].time2__1) {
            if (this.arcs_1[i_0][k].isLinear_1) {
              v[j_0] = this.arcs_1[i_0][k].getLinearX_1v55xh_k$(t);
              v[j_0 + 1 | 0] = this.arcs_1[i_0][k].getLinearY_729ra_k$(t);
              populated = true;
            } else {
              this.arcs_1[i_0][k].setPoint_o7o21y_k$(t);
              v[j_0] = this.arcs_1[i_0][k].calcX_1k7uzn_k$();
              v[j_0 + 1 | 0] = this.arcs_1[i_0][k].calcY_1k7uzo_k$();
              populated = true;
            }
          }
          j_0 = j_0 + 2 | 0;
          k = k + 1 | 0;
        }
        if (populated) {
          return Unit_getInstance();
        }
      }
       while (inductionVariable <= last);
  };
  protoOf(ArcSpline).getSlope_uth26d_k$ = function (time, v) {
    var t = time;
    if (t < this.arcs_1[0][0].time1__1) {
      t = this.arcs_1[0][0].time1__1;
    } else if (t > this.arcs_1[this.arcs_1.length - 1 | 0][0].time2__1) {
      t = this.arcs_1[this.arcs_1.length - 1 | 0][0].time2__1;
    }
    var populated = false;
    var inductionVariable = 0;
    var last = this.arcs_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var j = 0;
        var k = 0;
        while (j < v.length) {
          if (t <= this.arcs_1[i][k].time2__1) {
            if (this.arcs_1[i][k].isLinear_1) {
              v[j] = this.arcs_1[i][k].getLinearDX_h0232p_k$();
              v[j + 1 | 0] = this.arcs_1[i][k].getLinearDY_h0232o_k$();
              populated = true;
            } else {
              this.arcs_1[i][k].setPoint_o7o21y_k$(t);
              v[j] = this.arcs_1[i][k].calcDX_mmcdp3_k$();
              v[j + 1 | 0] = this.arcs_1[i][k].calcDY_mmcdp2_k$();
              populated = true;
            }
          }
          j = j + 2 | 0;
          k = k + 1 | 0;
        }
        if (populated) {
          return Unit_getInstance();
        }
      }
       while (inductionVariable <= last);
  };
  function toRadians(_this__u8e3s4) {
    return _this__u8e3s4 / 180 * get_PI();
  }
  function _set__real__ba78tk($this, _set____db54di) {
    $this._real_1 = _set____db54di;
  }
  function _get__real__kqx7nw($this) {
    return $this._real_1;
  }
  function _set__imaginary__jvragz($this, _set____db54di) {
    $this._imaginary_1 = _set____db54di;
  }
  function _get__imaginary__yxzvm7($this) {
    return $this._imaginary_1;
  }
  function component1($this) {
    return $this._real_1;
  }
  function component2($this) {
    return $this._imaginary_1;
  }
  function access$_get__real__hax6q4($this) {
    return $this._real_1;
  }
  function access$_set__real__eq79rc($this, _set____db54di) {
    $this._real_1 = _set____db54di;
    return Unit_getInstance();
  }
  function access$_get__imaginary__4kix73($this) {
    return $this._imaginary_1;
  }
  function access$_set__imaginary__ahpny5($this, _set____db54di) {
    $this._imaginary_1 = _set____db54di;
    return Unit_getInstance();
  }
  function ComplexDouble(_real, _imaginary) {
    this._real_1 = _real;
    this._imaginary_1 = _imaginary;
  }
  protoOf(ComplexDouble).get_real_wotl9j_k$ = function () {
    return this._real_1;
  };
  protoOf(ComplexDouble).get_imaginary_5xnno0_k$ = function () {
    return this._imaginary_1;
  };
  protoOf(ComplexDouble).plus_pjpmi4_k$ = function (other) {
    access$_set__real__eq79rc(this, access$_get__real__hax6q4(this) + other);
    return this;
  };
  protoOf(ComplexDouble).plus_xwp0rb_k$ = function (other) {
    access$_set__real__eq79rc(this, access$_get__real__hax6q4(this) + other.get_real_wotl9j_k$());
    access$_set__imaginary__ahpny5(this, access$_get__imaginary__4kix73(this) + other.get_imaginary_5xnno0_k$());
    return this;
  };
  protoOf(ComplexDouble).minus_ur3tau_k$ = function (other) {
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    var other_0 = -other;
    access$_set__real__eq79rc(this, access$_get__real__hax6q4(this) + other_0);
    return this;
  };
  protoOf(ComplexDouble).minus_t2x165_k$ = function (other) {
    // Inline function 'androidx.compose.animation.core.ComplexDouble.unaryMinus' call
    access$_set__real__eq79rc(other, access$_get__real__hax6q4(other) * -1);
    access$_set__imaginary__ahpny5(other, access$_get__imaginary__4kix73(other) * -1);
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    access$_set__real__eq79rc(this, access$_get__real__hax6q4(this) + other.get_real_wotl9j_k$());
    access$_set__imaginary__ahpny5(this, access$_get__imaginary__4kix73(this) + other.get_imaginary_5xnno0_k$());
    return this;
  };
  protoOf(ComplexDouble).times_qz1dds_k$ = function (other) {
    access$_set__real__eq79rc(this, access$_get__real__hax6q4(this) * other);
    access$_set__imaginary__ahpny5(this, access$_get__imaginary__4kix73(this) * other);
    return this;
  };
  protoOf(ComplexDouble).times_u3krpf_k$ = function (other) {
    access$_set__real__eq79rc(this, this.get_real_wotl9j_k$() * other.get_real_wotl9j_k$() - this.get_imaginary_5xnno0_k$() * other.get_imaginary_5xnno0_k$());
    access$_set__imaginary__ahpny5(this, this.get_real_wotl9j_k$() * other.get_imaginary_5xnno0_k$() + other.get_real_wotl9j_k$() * this.get_imaginary_5xnno0_k$());
    return this;
  };
  protoOf(ComplexDouble).unaryMinus_6uz0qp_k$ = function () {
    access$_set__real__eq79rc(this, access$_get__real__hax6q4(this) * -1);
    access$_set__imaginary__ahpny5(this, access$_get__imaginary__4kix73(this) * -1);
    return this;
  };
  protoOf(ComplexDouble).div_k6dnjf_k$ = function (other) {
    access$_set__real__eq79rc(this, access$_get__real__hax6q4(this) / other);
    access$_set__imaginary__ahpny5(this, access$_get__imaginary__4kix73(this) / other);
    return this;
  };
  protoOf(ComplexDouble).copy_6r5gqz_k$ = function (_real, _imaginary) {
    return new ComplexDouble(_real, _imaginary);
  };
  protoOf(ComplexDouble).copy$default_xk22l4_k$ = function (_real, _imaginary, $super) {
    _real = _real === VOID ? this._real_1 : _real;
    _imaginary = _imaginary === VOID ? this._imaginary_1 : _imaginary;
    return $super === VOID ? this.copy_6r5gqz_k$(_real, _imaginary) : $super.copy_6r5gqz_k$.call(this, _real, _imaginary);
  };
  protoOf(ComplexDouble).toString = function () {
    return 'ComplexDouble(_real=' + this._real_1 + ', _imaginary=' + this._imaginary_1 + ')';
  };
  protoOf(ComplexDouble).hashCode = function () {
    var result = getNumberHashCode(this._real_1);
    result = imul(result, 31) + getNumberHashCode(this._imaginary_1) | 0;
    return result;
  };
  protoOf(ComplexDouble).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComplexDouble))
      return false;
    var tmp0_other_with_cast = other instanceof ComplexDouble ? other : THROW_CCE();
    if (!equals(this._real_1, tmp0_other_with_cast._real_1))
      return false;
    if (!equals(this._imaginary_1, tmp0_other_with_cast._imaginary_1))
      return false;
    return true;
  };
  function plus(_this__u8e3s4, other) {
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    access$_set__real__eq79rc(other, access$_get__real__hax6q4(other) + _this__u8e3s4);
    return other;
  }
  function complexSqrt(num) {
    var tmp;
    if (num < 0.0) {
      // Inline function 'kotlin.math.abs' call
      // Inline function 'kotlin.math.sqrt' call
      var x = Math.abs(num);
      var tmp$ret$1 = Math.sqrt(x);
      tmp = new ComplexDouble(0.0, tmp$ret$1);
    } else {
      // Inline function 'kotlin.math.sqrt' call
      var tmp$ret$2 = Math.sqrt(num);
      tmp = new ComplexDouble(tmp$ret$2, 0.0);
    }
    return tmp;
  }
  function minus(_this__u8e3s4, other) {
    // Inline function 'androidx.compose.animation.core.ComplexDouble.unaryMinus' call
    access$_set__real__eq79rc(other, access$_get__real__hax6q4(other) * -1);
    access$_set__imaginary__ahpny5(other, access$_get__imaginary__4kix73(other) * -1);
    // Inline function 'androidx.compose.animation.core.plus' call
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    access$_set__real__eq79rc(other, access$_get__real__hax6q4(other) + _this__u8e3s4);
    return other;
  }
  function DecayAnimationSpec() {
  }
  function generateDecayAnimationSpec(_this__u8e3s4) {
    return new DecayAnimationSpecImpl(_this__u8e3s4);
  }
  function _get_floatDecaySpec__7mcolu($this) {
    return $this.floatDecaySpec_1;
  }
  function DecayAnimationSpecImpl(floatDecaySpec) {
    this.floatDecaySpec_1 = floatDecaySpec;
  }
  protoOf(DecayAnimationSpecImpl).vectorize_pto10n_k$ = function (typeConverter) {
    return new VectorizedFloatDecaySpec(this.floatDecaySpec_1);
  };
  function _set_valueVector__dppd9t($this, _set____db54di) {
    $this.valueVector_1 = _set____db54di;
  }
  function _get_valueVector__r10idf($this) {
    var tmp = $this.valueVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _set_velocityVector__vm30d3($this, _set____db54di) {
    $this.velocityVector_1 = _set____db54di;
  }
  function _get_velocityVector__dvxlkl($this) {
    var tmp = $this.velocityVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _set_targetVector__nu6z6r($this, _set____db54di) {
    $this.targetVector_1 = _set____db54di;
  }
  function _get_targetVector__vn6c89($this) {
    var tmp = $this.targetVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('targetVector');
    }
  }
  function VectorizedFloatDecaySpec(floatDecaySpec) {
    this.floatDecaySpec_1 = floatDecaySpec;
    this.absVelocityThreshold_1 = this.floatDecaySpec_1.get_absVelocityThreshold_wsgqo5_k$();
  }
  protoOf(VectorizedFloatDecaySpec).get_floatDecaySpec_206nc2_k$ = function () {
    return this.floatDecaySpec_1;
  };
  protoOf(VectorizedFloatDecaySpec).get_absVelocityThreshold_wsgqo5_k$ = function () {
    return this.absVelocityThreshold_1;
  };
  protoOf(VectorizedFloatDecaySpec).getValueFromNanos_huzcys_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.valueVector_1 == null)) {
      this.valueVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf(this).get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf(this).set_ln2e3z_k$(i, this.floatDecaySpec_1.getValueFromNanos_vizg24_k$(playTimeNanos, initialValue.get_jz2icb_k$(i), initialVelocity.get_jz2icb_k$(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf(this);
  };
  protoOf(VectorizedFloatDecaySpec).getDurationNanos_roqu2j_k$ = function (initialValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    if (!!(this.velocityVector_1 == null)) {
      this.velocityVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0 = maxDuration;
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = this.floatDecaySpec_1.getDurationNanos_dl2v11_k$(initialValue.get_jz2icb_k$(i), initialVelocity.get_jz2icb_k$(i));
        maxDuration = tmp0.compareTo_9jj042_k$(b) >= 0 ? tmp0 : b;
      }
       while (inductionVariable < last);
    return maxDuration;
  };
  protoOf(VectorizedFloatDecaySpec).getVelocityFromNanos_2v7bwc_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.velocityVector_1 == null)) {
      this.velocityVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl(this).set_ln2e3z_k$(i, this.floatDecaySpec_1.getVelocityFromNanos_eyb6gk_k$(playTimeNanos, initialValue.get_jz2icb_k$(i), initialVelocity.get_jz2icb_k$(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl(this);
  };
  protoOf(VectorizedFloatDecaySpec).getTargetValue_rut47u_k$ = function (initialValue, initialVelocity) {
    if (!!(this.targetVector_1 == null)) {
      this.targetVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_targetVector__vn6c89(this).get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_targetVector__vn6c89(this).set_ln2e3z_k$(i, this.floatDecaySpec_1.getTargetValue_k8zsye_k$(initialValue.get_jz2icb_k$(i), initialVelocity.get_jz2icb_k$(i)));
      }
       while (inductionVariable < last);
    return _get_targetVector__vn6c89(this);
  };
  function get_FastOutSlowInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return FastOutSlowInEasing;
  }
  var FastOutSlowInEasing;
  function get_LinearOutSlowInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return LinearOutSlowInEasing;
  }
  var LinearOutSlowInEasing;
  function get_FastOutLinearInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return FastOutLinearInEasing;
  }
  var FastOutLinearInEasing;
  function get_LinearEasing() {
    _init_properties_Easing_kt__v6fq45();
    return LinearEasing;
  }
  var LinearEasing;
  function Easing() {
  }
  function _get_a__7mlogg($this) {
    return $this.a_1;
  }
  function _get_b__7mlohb($this) {
    return $this.b_1;
  }
  function _get_c__7mloi6($this) {
    return $this.c_1;
  }
  function _get_d__7mloj1($this) {
    return $this.d_1;
  }
  function _get_min__e6ctxb($this) {
    return $this.min_1;
  }
  function _get_max__e6co8d($this) {
    return $this.max_1;
  }
  function throwNoSolution($this, fraction) {
    throw IllegalArgumentException_init_$Create$('The cubic curve with parameters (' + $this.a_1 + ', ' + $this.b_1 + ', ' + $this.c_1 + ', ' + $this.d_1 + ') has no solution at ' + fraction);
  }
  function CubicBezierEasing(a, b, c, d) {
    this.a_1 = a;
    this.b_1 = b;
    this.c_1 = c;
    this.d_1 = d;
    // Inline function 'androidx.compose.animation.core.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!isNaN_0(this.a_1) && !isNaN_0(this.b_1) && !isNaN_0(this.c_1) && !isNaN_0(this.d_1))) {
      // Inline function 'androidx.compose.animation.core.CubicBezierEasing.<anonymous>' call
      var tmp$ret$0 = 'Parameters to CubicBezierEasing cannot be NaN. Actual parameters are: ' + this.a_1 + ', ' + this.b_1 + ', ' + this.c_1 + ', ' + this.d_1 + '.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var roots = new Float32Array(5);
    var extrema = computeCubicVerticalBounds(0.0, this.b_1, this.d_1, 1.0, roots, 0);
    var tmp = this;
    // Inline function 'androidx.collection.FloatFloatPair.first' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    var bits = _FloatFloatPair___get_packedValue__impl__5lczxp(extrema).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    tmp.min_1 = floatFromBits(bits);
    var tmp_0 = this;
    // Inline function 'androidx.collection.FloatFloatPair.second' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    var bits_0 = _FloatFloatPair___get_packedValue__impl__5lczxp(extrema).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    tmp_0.max_1 = floatFromBits(bits_0);
  }
  protoOf(CubicBezierEasing).transform_twmo38_k$ = function (fraction) {
    var tmp;
    if (fraction > 0.0 && fraction < 1.0) {
      var t = findFirstCubicRoot(0.0 - fraction, this.a_1 - fraction, this.c_1 - fraction, 1.0 - fraction);
      if (isNaN_0(t)) {
        throwNoSolution(this, fraction);
      }
      var tmp0 = evaluateCubic(this.b_1, this.d_1, t);
      var tmp1 = this.min_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue = this.max_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_0 = tmp0 < tmp1 ? tmp1 : tmp0;
      tmp = this_0 > maximumValue ? maximumValue : this_0;
    } else {
      tmp = fraction;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof CubicBezierEasing) {
      tmp_2 = this.a_1 === other.a_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.b_1 === other.b_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.c_1 === other.c_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.d_1 === other.d_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.a_1), 31) + getNumberHashCode(this.b_1) | 0, 31) + getNumberHashCode(this.c_1) | 0, 31) + getNumberHashCode(this.d_1) | 0;
  };
  protoOf(CubicBezierEasing).toString = function () {
    return 'CubicBezierEasing(a=' + this.a_1 + ', b=' + this.b_1 + ', c=' + this.c_1 + ', d=' + this.d_1 + ')';
  };
  function sam$androidx_compose_animation_core_Easing$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function LinearEasing$lambda(fraction) {
    _init_properties_Easing_kt__v6fq45();
    return fraction;
  }
  var properties_initialized_Easing_kt_af4f4d;
  function _init_properties_Easing_kt__v6fq45() {
    if (!properties_initialized_Easing_kt_af4f4d) {
      properties_initialized_Easing_kt_af4f4d = true;
      FastOutSlowInEasing = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
      LinearOutSlowInEasing = new CubicBezierEasing(0.0, 0.0, 0.2, 1.0);
      FastOutLinearInEasing = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
      var tmp = LinearEasing$lambda;
      LinearEasing = new sam$androidx_compose_animation_core_Easing$0(tmp);
    }
  }
  function get_Ease() {
    _init_properties_EasingFunctions_kt__whrude();
    return Ease;
  }
  var Ease;
  function get_EaseOut() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOut;
  }
  var EaseOut;
  function get_EaseIn() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseIn;
  }
  var EaseIn;
  function get_EaseInOut() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOut;
  }
  var EaseInOut;
  function get_EaseInSine() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInSine;
  }
  var EaseInSine;
  function get_EaseOutSine() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutSine;
  }
  var EaseOutSine;
  function get_EaseInOutSine() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutSine;
  }
  var EaseInOutSine;
  function get_EaseInCubic() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInCubic;
  }
  var EaseInCubic;
  function get_EaseOutCubic() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutCubic;
  }
  var EaseOutCubic;
  function get_EaseInOutCubic() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutCubic;
  }
  var EaseInOutCubic;
  function get_EaseInQuint() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInQuint;
  }
  var EaseInQuint;
  function get_EaseOutQuint() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutQuint;
  }
  var EaseOutQuint;
  function get_EaseInOutQuint() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutQuint;
  }
  var EaseInOutQuint;
  function get_EaseInCirc() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInCirc;
  }
  var EaseInCirc;
  function get_EaseOutCirc() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutCirc;
  }
  var EaseOutCirc;
  function get_EaseInOutCirc() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutCirc;
  }
  var EaseInOutCirc;
  function get_EaseInQuad() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInQuad;
  }
  var EaseInQuad;
  function get_EaseOutQuad() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutQuad;
  }
  var EaseOutQuad;
  function get_EaseInOutQuad() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutQuad;
  }
  var EaseInOutQuad;
  function get_EaseInQuart() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInQuart;
  }
  var EaseInQuart;
  function get_EaseOutQuart() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutQuart;
  }
  var EaseOutQuart;
  function get_EaseInOutQuart() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutQuart;
  }
  var EaseInOutQuart;
  function get_EaseInExpo() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInExpo;
  }
  var EaseInExpo;
  function get_EaseOutExpo() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutExpo;
  }
  var EaseOutExpo;
  function get_EaseInOutExpo() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutExpo;
  }
  var EaseInOutExpo;
  function get_EaseInBack() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInBack;
  }
  var EaseInBack;
  function get_EaseOutBack() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutBack;
  }
  var EaseOutBack;
  function get_EaseInOutBack() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutBack;
  }
  var EaseInOutBack;
  function get_EaseInElastic() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInElastic;
  }
  var EaseInElastic;
  function get_EaseOutElastic() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutElastic;
  }
  var EaseOutElastic;
  function get_EaseInOutElastic() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutElastic;
  }
  var EaseInOutElastic;
  function get_EaseOutBounce() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutBounce;
  }
  var EaseOutBounce;
  function get_EaseInBounce() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInBounce;
  }
  var EaseInBounce;
  function get_EaseInOutBounce() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutBounce;
  }
  var EaseInOutBounce;
  function sam$androidx_compose_animation_core_Easing$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0_0).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_animation_core_Easing$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0_1).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_1).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0_1).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_animation_core_Easing$0_2(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0_2).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_2).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0_2).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_animation_core_Easing$0_3(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0_3).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_3).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0_3).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_animation_core_Easing$0_4(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0_4).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_4).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_4).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0_4).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_animation_core_Easing$0_5(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0_5).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_5).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_5).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0_5).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function EaseInElastic$lambda(fraction) {
    _init_properties_EasingFunctions_kt__whrude();
    var c4 = 2.0 * get_PI() / 3.0;
    var tmp;
    switch (fraction) {
      case 0.0:
        tmp = 0.0;
        break;
      case 1.0:
        tmp = 1.0;
        break;
      default:
        // Inline function 'kotlin.math.pow' call

        var x = 10.0 * fraction - 10.0;
        var tmp_0 = -Math.pow(2.0, x);
        // Inline function 'kotlin.math.sin' call

        var x_0 = (fraction * 10.0 - 10.75) * c4;
        tmp = tmp_0 * Math.sin(x_0);
        break;
    }
    return tmp;
  }
  function EaseOutElastic$lambda(fraction) {
    _init_properties_EasingFunctions_kt__whrude();
    var c4 = 2.0 * get_PI() / 3.0;
    var tmp;
    switch (fraction) {
      case 0.0:
        tmp = 0.0;
        break;
      case 1.0:
        tmp = 1.0;
        break;
      default:
        // Inline function 'kotlin.math.pow' call

        var x = -10.0 * fraction;
        var tmp_0 = Math.pow(2.0, x);
        // Inline function 'kotlin.math.sin' call

        var x_0 = (fraction * 10.0 - 0.75) * c4;
        tmp = tmp_0 * Math.sin(x_0) + 1.0;
        break;
    }
    return tmp;
  }
  function EaseInOutElastic$lambda(fraction) {
    _init_properties_EasingFunctions_kt__whrude();
    var c5 = 2.0 * get_PI() / 4.5;
    var tmp;
    if (fraction === 0.0) {
      tmp = 0.0;
    } else if (fraction === 1.0) {
      tmp = 1.0;
    } else if (0.0 <= fraction ? fraction <= 0.5 : false) {
      // Inline function 'kotlin.math.pow' call
      var x = 20.0 * fraction - 10.0;
      var tmp_0 = Math.pow(2.0, x);
      // Inline function 'kotlin.math.sin' call
      var x_0 = (20.0 * fraction - 11.125) * c5;
      tmp = -(tmp_0 * Math.sin(x_0)) / 2.0;
    } else {
      // Inline function 'kotlin.math.pow' call
      var x_1 = -20.0 * fraction + 10.0;
      var tmp_1 = Math.pow(2.0, x_1);
      // Inline function 'kotlin.math.sin' call
      var x_2 = (fraction * 20.0 - 11.125) * c5;
      tmp = tmp_1 * Math.sin(x_2) / 2.0 + 1.0;
    }
    return tmp;
  }
  function EaseOutBounce$lambda(fraction) {
    _init_properties_EasingFunctions_kt__whrude();
    var n1 = 7.5625;
    var d1 = 2.75;
    var newFraction = fraction;
    var tmp;
    if (newFraction < 1.0 / d1) {
      tmp = n1 * newFraction * newFraction;
    } else if (newFraction < 2.0 / d1) {
      newFraction = newFraction - 1.5 / d1;
      tmp = n1 * newFraction * newFraction + 0.75;
    } else if (newFraction < 2.5 / d1) {
      newFraction = newFraction - 2.25 / d1;
      tmp = n1 * newFraction * newFraction + 0.9375;
    } else {
      newFraction = newFraction - 2.625 / d1;
      tmp = n1 * newFraction * newFraction + 0.984375;
    }
    return tmp;
  }
  function EaseInBounce$lambda(fraction) {
    _init_properties_EasingFunctions_kt__whrude();
    return 1 - get_EaseOutBounce().transform_twmo38_k$(1.0 - fraction);
  }
  function EaseInOutBounce$lambda(fraction) {
    _init_properties_EasingFunctions_kt__whrude();
    var tmp;
    if (fraction < 0.5) {
      tmp = (1 - get_EaseOutBounce().transform_twmo38_k$(1.0 - 2.0 * fraction)) / 2.0;
    } else {
      tmp = (1 + get_EaseOutBounce().transform_twmo38_k$(2.0 * fraction - 1.0)) / 2.0;
    }
    return tmp;
  }
  var properties_initialized_EasingFunctions_kt_3rrobk;
  function _init_properties_EasingFunctions_kt__whrude() {
    if (!properties_initialized_EasingFunctions_kt_3rrobk) {
      properties_initialized_EasingFunctions_kt_3rrobk = true;
      Ease = new CubicBezierEasing(0.25, 0.1, 0.25, 1.0);
      EaseOut = new CubicBezierEasing(0.0, 0.0, 0.58, 1.0);
      EaseIn = new CubicBezierEasing(0.42, 0.0, 1.0, 1.0);
      EaseInOut = new CubicBezierEasing(0.42, 0.0, 0.58, 1.0);
      EaseInSine = new CubicBezierEasing(0.12, 0.0, 0.39, 0.0);
      EaseOutSine = new CubicBezierEasing(0.61, 1.0, 0.88, 1.0);
      EaseInOutSine = new CubicBezierEasing(0.37, 0.0, 0.63, 1.0);
      EaseInCubic = new CubicBezierEasing(0.32, 0.0, 0.67, 0.0);
      EaseOutCubic = new CubicBezierEasing(0.33, 1.0, 0.68, 1.0);
      EaseInOutCubic = new CubicBezierEasing(0.65, 0.0, 0.35, 1.0);
      EaseInQuint = new CubicBezierEasing(0.64, 0.0, 0.78, 0.0);
      EaseOutQuint = new CubicBezierEasing(0.22, 1.0, 0.36, 1.0);
      EaseInOutQuint = new CubicBezierEasing(0.83, 0.0, 0.17, 1.0);
      EaseInCirc = new CubicBezierEasing(0.55, 0.0, 1.0, 0.45);
      EaseOutCirc = new CubicBezierEasing(0.0, 0.55, 0.45, 1.0);
      EaseInOutCirc = new CubicBezierEasing(0.85, 0.0, 0.15, 1.0);
      EaseInQuad = new CubicBezierEasing(0.11, 0.0, 0.5, 0.0);
      EaseOutQuad = new CubicBezierEasing(0.5, 1.0, 0.89, 1.0);
      EaseInOutQuad = new CubicBezierEasing(0.45, 0.0, 0.55, 1.0);
      EaseInQuart = new CubicBezierEasing(0.5, 0.0, 0.75, 0.0);
      EaseOutQuart = new CubicBezierEasing(0.25, 1.0, 0.5, 1.0);
      EaseInOutQuart = new CubicBezierEasing(0.76, 0.0, 0.24, 1.0);
      EaseInExpo = new CubicBezierEasing(0.7, 0.0, 0.84, 0.0);
      EaseOutExpo = new CubicBezierEasing(0.16, 1.0, 0.3, 1.0);
      EaseInOutExpo = new CubicBezierEasing(0.87, 0.0, 0.13, 1.0);
      EaseInBack = new CubicBezierEasing(0.36, 0.0, 0.66, -0.56);
      EaseOutBack = new CubicBezierEasing(0.34, 1.56, 0.64, 1.0);
      EaseInOutBack = new CubicBezierEasing(0.68, -0.6, 0.32, 1.6);
      var tmp = EaseInElastic$lambda;
      EaseInElastic = new sam$androidx_compose_animation_core_Easing$0_0(tmp);
      var tmp_0 = EaseOutElastic$lambda;
      EaseOutElastic = new sam$androidx_compose_animation_core_Easing$0_1(tmp_0);
      var tmp_1 = EaseInOutElastic$lambda;
      EaseInOutElastic = new sam$androidx_compose_animation_core_Easing$0_2(tmp_1);
      var tmp_2 = EaseOutBounce$lambda;
      EaseOutBounce = new sam$androidx_compose_animation_core_Easing$0_3(tmp_2);
      var tmp_3 = EaseInBounce$lambda;
      EaseInBounce = new sam$androidx_compose_animation_core_Easing$0_4(tmp_3);
      var tmp_4 = EaseInOutBounce$lambda;
      EaseInOutBounce = new sam$androidx_compose_animation_core_Easing$0_5(tmp_4);
    }
  }
  function ExperimentalAnimationSpecApi() {
  }
  protoOf(ExperimentalAnimationSpecApi).equals = function (other) {
    if (!(other instanceof ExperimentalAnimationSpecApi))
      return false;
    other instanceof ExperimentalAnimationSpecApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalAnimationSpecApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalAnimationSpecApi).toString = function () {
    return '@androidx.compose.animation.core.ExperimentalAnimationSpecApi(' + ')';
  };
  function ExperimentalTransitionApi() {
  }
  protoOf(ExperimentalTransitionApi).equals = function (other) {
    if (!(other instanceof ExperimentalTransitionApi))
      return false;
    other instanceof ExperimentalTransitionApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalTransitionApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalTransitionApi).toString = function () {
    return '@androidx.compose.animation.core.ExperimentalTransitionApi(' + ')';
  };
  function FloatAnimationSpec() {
  }
  function _get_visibilityThreshold__cvk72g_0($this) {
    return $this.visibilityThreshold_1;
  }
  function _get_spring__4s3m3i($this) {
    return $this.spring_1;
  }
  function FloatSpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    dampingRatio = dampingRatio === VOID ? Spring_getInstance().get_DampingRatioNoBouncy_45ga5r_k$() : dampingRatio;
    stiffness = stiffness === VOID ? Spring_getInstance().get_StiffnessMedium_mjh6r9_k$() : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? Spring_getInstance().get_DefaultDisplacementThreshold_1c58p0_k$() : visibilityThreshold;
    this.dampingRatio_1 = dampingRatio;
    this.stiffness_1 = stiffness;
    this.visibilityThreshold_1 = visibilityThreshold;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new SpringSimulation(1.0);
    // Inline function 'androidx.compose.animation.core.FloatSpringSpec.spring.<anonymous>' call
    this_0.set_dampingRatio_1d4jya_k$(this.dampingRatio_1);
    this_0.set_stiffness_89bnwm_k$(this.stiffness_1);
    tmp.spring_1 = this_0;
  }
  protoOf(FloatSpringSpec).get_dampingRatio_syjss2_k$ = function () {
    return this.dampingRatio_1;
  };
  protoOf(FloatSpringSpec).get_stiffness_dt2sgm_k$ = function () {
    return this.stiffness_1;
  };
  protoOf(FloatSpringSpec).getValueFromNanos_rdghrw_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_jun7gj_k$(new Long(1000000, 0));
    this.spring_1.set_finalPosition_7mu6km_k$(targetValue);
    var value = _Motion___get_value__impl__e0x31d(this.spring_1.updateValues_e8ut58_k$(initialValue, initialVelocity, playTimeMillis));
    return value;
  };
  protoOf(FloatSpringSpec).getVelocityFromNanos_d1b1ck_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_jun7gj_k$(new Long(1000000, 0));
    this.spring_1.set_finalPosition_7mu6km_k$(targetValue);
    var velocity = _Motion___get_velocity__impl__h2mglt(this.spring_1.updateValues_e8ut58_k$(initialValue, initialVelocity, playTimeMillis));
    return velocity;
  };
  protoOf(FloatSpringSpec).getEndVelocity_jstvkm_k$ = function (initialValue, targetValue, initialVelocity) {
    return 0.0;
  };
  protoOf(FloatSpringSpec).getDurationNanos_taoclf_k$ = function (initialValue, targetValue, initialVelocity) {
    var tmp0_stiffness = this.spring_1.get_stiffness_dt2sgm_k$();
    var tmp1_dampingRatio = this.spring_1.get_dampingRatio_syjss2_k$();
    var tmp2_initialDisplacement = (initialValue - targetValue) / this.visibilityThreshold_1;
    var tmp3_initialVelocity = initialVelocity / this.visibilityThreshold_1;
    return estimateAnimationDurationMillis(tmp0_stiffness, tmp1_dampingRatio, tmp3_initialVelocity, tmp2_initialDisplacement, 1.0).times_nfzjiw_k$(new Long(1000000, 0));
  };
  protoOf(FloatSpringSpec).vectorize_pto10n_k$ = function (converter) {
    return this.vectorize_7dxvko_k$(converter);
  };
  function _get_easing__5ar9kw($this) {
    return $this.easing_1;
  }
  function _get_durationNanos__1fe2hy($this) {
    return $this.durationNanos_1;
  }
  function _get_delayNanos__vhee7l($this) {
    return $this.delayNanos_1;
  }
  function clampPlayTimeNanos($this, playTimeNanos) {
    return coerceIn_0(playTimeNanos.minus_mfbszm_k$($this.delayNanos_1), new Long(0, 0), $this.durationNanos_1);
  }
  function FloatTweenSpec(duration, delay, easing) {
    duration = duration === VOID ? 300 : duration;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.duration_1 = duration;
    this.delay_1 = delay;
    this.easing_1 = easing;
    this.durationNanos_1 = numberToLong(this.duration_1).times_nfzjiw_k$(new Long(1000000, 0));
    this.delayNanos_1 = numberToLong(this.delay_1).times_nfzjiw_k$(new Long(1000000, 0));
  }
  protoOf(FloatTweenSpec).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(FloatTweenSpec).get_delay_iq7n8a_k$ = function () {
    return this.delay_1;
  };
  protoOf(FloatTweenSpec).getValueFromNanos_rdghrw_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var clampedPlayTimeNanos = clampPlayTimeNanos(this, playTimeNanos);
    var tmp;
    if (this.duration_1 === 0) {
      tmp = 1.0;
    } else {
      // Inline function 'kotlin.Long.div' call
      var other = this.durationNanos_1.toFloat_jhbgwv_k$();
      tmp = clampedPlayTimeNanos.toFloat_jhbgwv_k$() / other;
    }
    var rawFraction = tmp;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = rawFraction < 0.0 ? 0.0 : rawFraction;
    var tmp$ret$3 = this_0 > 1.0 ? 1.0 : this_0;
    var fraction = this.easing_1.transform_twmo38_k$(tmp$ret$3);
    return lerp(initialValue, targetValue, fraction);
  };
  protoOf(FloatTweenSpec).getDurationNanos_taoclf_k$ = function (initialValue, targetValue, initialVelocity) {
    return numberToLong(this.delay_1 + this.duration_1 | 0).times_nfzjiw_k$(new Long(1000000, 0));
  };
  protoOf(FloatTweenSpec).getVelocityFromNanos_d1b1ck_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var clampedPlayTimeNanos = clampPlayTimeNanos(this, playTimeNanos);
    if (clampedPlayTimeNanos.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
      return 0.0;
    } else if (clampedPlayTimeNanos.equals(new Long(0, 0))) {
      return initialVelocity;
    }
    var startNum = this.getValueFromNanos_rdghrw_k$(clampedPlayTimeNanos.minus_mfbszm_k$(new Long(1000000, 0)), initialValue, targetValue, initialVelocity);
    var endNum = this.getValueFromNanos_rdghrw_k$(clampedPlayTimeNanos, initialValue, targetValue, initialVelocity);
    return (endNum - startNum) * 1000.0;
  };
  protoOf(FloatTweenSpec).vectorize_pto10n_k$ = function (converter) {
    return this.vectorize_7dxvko_k$(converter);
  };
  function FloatDecayAnimationSpec() {
  }
  function withInfiniteAnimationFrameNanos(onFrame, $completion) {
    var tmp = new $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation) {
    this.$onFrame_1 = $onFrame;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withInfiniteAnimationFrameNanos$slambda).invoke_ib42db_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(withInfiniteAnimationFrameNanos$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = withFrameNanos(this.$onFrame_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(withInfiniteAnimationFrameNanos$slambda).create_d196fn_k$ = function (completion) {
    return new withInfiniteAnimationFrameNanos$slambda(this.$onFrame_1, completion);
  };
  function withInfiniteAnimationFrameNanos$slambda_0($onFrame, resultContinuation) {
    var i = new withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation);
    var l = function ($completion) {
      return i.invoke_ib42db_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.onFrame_1 = onFrame;
  }
  protoOf($withInfiniteAnimationFrameNanosCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_0 = this;
            tmp_0.policy0__1 = this.get_context_h02k06_k$().get_y2st91_k$(Key_getInstance());
            if (this.policy0__1 == null) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = withFrameNanos(this.onFrame_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              suspendResult = this.policy0__1.onInfiniteOperation_7vo0x_k$(withInfiniteAnimationFrameNanos$slambda_0(this.onFrame_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.WHEN_RESULT1__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function _set_animationSpec__7qdru($this, _set____db54di) {
    $this.animationSpec_1 = _set____db54di;
  }
  function _set_startOnTheNextFrame__ya2ltn($this, _set____db54di) {
    $this.startOnTheNextFrame_1 = _set____db54di;
  }
  function _get_startOnTheNextFrame__ngb795($this) {
    return $this.startOnTheNextFrame_1;
  }
  function _set_playTimeNanosOffset__dff9ec($this, _set____db54di) {
    $this.playTimeNanosOffset_1 = _set____db54di;
  }
  function _get_playTimeNanosOffset__qq5iao($this) {
    return $this.playTimeNanosOffset_1;
  }
  function InfiniteTransition$run$slambda$lambda($toolingOverride, this$0, $durationScale, $this_LaunchedEffect) {
    return function (it) {
      var tmp0_safe_receiver = $toolingOverride.get_value_j01efc_k$();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_value_j01efc_k$();
      var currentTimeNanos = tmp1_elvis_lhs == null ? it : tmp1_elvis_lhs;
      var tmp;
      if (this$0.startTimeNanos_1.equals(new Long(0, -2147483648)) || !($durationScale._v === get_durationScale($this_LaunchedEffect.get_coroutineContext_115oqo_k$()))) {
        this$0.startTimeNanos_1 = it;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
        var this_0 = this$0._animations_1;
        // Inline function 'kotlin.contracts.contract' call
        var size = this_0.get_size_woubt6_k$();
        if (size > 0) {
          var i = 0;
          var tmp_0 = this_0.get_content_eu4tjv_k$();
          var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
          do {
            // Inline function 'androidx.compose.animation.core.InfiniteTransition.run.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            content[i].reset_x7qqys_k$();
            i = i + 1 | 0;
          }
           while (i < size);
        }
        $durationScale._v = get_durationScale($this_LaunchedEffect.get_coroutineContext_115oqo_k$());
        tmp = Unit_getInstance();
      }
      var tmp_1;
      if ($durationScale._v === 0.0) {
        var this_1 = this$0._animations_1;
        // Inline function 'kotlin.contracts.contract' call
        var size_0 = this_1.get_size_woubt6_k$();
        var tmp_2;
        if (size_0 > 0) {
          var i_0 = 0;
          var tmp_3 = this_1.get_content_eu4tjv_k$();
          var content_0 = isArray(tmp_3) ? tmp_3 : THROW_CCE();
          do {
            // Inline function 'androidx.compose.animation.core.InfiniteTransition.run.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            content_0[i_0].skipToEnd_aa7dfy_k$();
            i_0 = i_0 + 1 | 0;
          }
           while (i_0 < size_0);
          tmp_2 = Unit_getInstance();
        }
        tmp_1 = tmp_2;
      } else {
        var tmp4 = currentTimeNanos.minus_mfbszm_k$(this$0.startTimeNanos_1);
        // Inline function 'kotlin.Long.div' call
        var other = $durationScale._v;
        var tmp$ret$0 = tmp4.toFloat_jhbgwv_k$() / other;
        var playTimeNanos = numberToLong(tmp$ret$0);
        onFrame(this$0, playTimeNanos);
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function InfiniteTransition$run$slambda$lambda_0($this_LaunchedEffect) {
    return function () {
      return get_durationScale($this_LaunchedEffect.get_coroutineContext_115oqo_k$());
    };
  }
  function InfiniteTransition$run$slambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(InfiniteTransition$run$slambda$slambda).invoke_8q70xs_k$ = function (it, $completion) {
    var tmp = this.create_qsrv3h_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(InfiniteTransition$run$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_8q70xs_k$((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(InfiniteTransition$run$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return this.it_1 > 0.0;
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(InfiniteTransition$run$slambda$slambda).create_qsrv3h_k$ = function (it, completion) {
    var i = new InfiniteTransition$run$slambda$slambda(completion);
    i.it_1 = it;
    return i;
  };
  protoOf(InfiniteTransition$run$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_qsrv3h_k$((!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE(), completion);
  };
  function InfiniteTransition$run$slambda$slambda_0(resultContinuation) {
    var i = new InfiniteTransition$run$slambda$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_8q70xs_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function TransitionAnimationState($outer, initialValue, targetValue, typeConverter, animationSpec, label) {
    this.$this_1 = $outer;
    this.initialValue_1 = initialValue;
    this.targetValue_1 = targetValue;
    this.typeConverter_1 = typeConverter;
    this.label_1 = label;
    this.value$delegate_1 = mutableStateOf(this.initialValue_1);
    this.animationSpec_1 = animationSpec;
    this.animation_1 = TargetBasedAnimation_init_$Create$(this.animationSpec_1, this.typeConverter_1, this.initialValue_1, this.targetValue_1);
    this.isFinished_1 = false;
    this.startOnTheNextFrame_1 = false;
    this.playTimeNanosOffset_1 = new Long(0, 0);
  }
  protoOf(TransitionAnimationState).set_initialValue_yrf0ig_k$ = function (_set____db54di) {
    this.initialValue_1 = _set____db54di;
  };
  protoOf(TransitionAnimationState).get_initialValue_d8jjkj_k$ = function () {
    return this.initialValue_1;
  };
  protoOf(TransitionAnimationState).set_targetValue_d4f1sv_k$ = function (_set____db54di) {
    this.targetValue_1 = _set____db54di;
  };
  protoOf(TransitionAnimationState).get_targetValue_twwvhw_k$ = function () {
    return this.targetValue_1;
  };
  protoOf(TransitionAnimationState).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(TransitionAnimationState).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(TransitionAnimationState).set_value_w62xiq_k$ = function (_set____db54di) {
    var tmp0 = this.value$delegate_1;
    value$factory_3();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(TransitionAnimationState).get_value_j01efc_k$ = function () {
    var tmp0 = this.value$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    value$factory_4();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(TransitionAnimationState).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(TransitionAnimationState).set_animation_nv4v73_k$ = function (_set____db54di) {
    this.animation_1 = _set____db54di;
  };
  protoOf(TransitionAnimationState).get_animation_r0gd0b_k$ = function () {
    return this.animation_1;
  };
  protoOf(TransitionAnimationState).set_isFinished_o05ie7_k$ = function (_set____db54di) {
    this.isFinished_1 = _set____db54di;
  };
  protoOf(TransitionAnimationState).get_isFinished_i1rrnm_k$ = function () {
    return this.isFinished_1;
  };
  protoOf(TransitionAnimationState).updateValues_enqt9x_k$ = function (initialValue, targetValue, animationSpec) {
    this.initialValue_1 = initialValue;
    this.targetValue_1 = targetValue;
    this.animationSpec_1 = animationSpec;
    this.animation_1 = TargetBasedAnimation_init_$Create$(animationSpec, this.typeConverter_1, initialValue, targetValue);
    _set_refreshChildNeeded__4sbmm9(this.$this_1, true);
    this.isFinished_1 = false;
    this.startOnTheNextFrame_1 = true;
  };
  protoOf(TransitionAnimationState).onPlayTimeChanged_u0to7h_k$ = function (playTimeNanos) {
    _set_refreshChildNeeded__4sbmm9(this.$this_1, false);
    if (this.startOnTheNextFrame_1) {
      this.startOnTheNextFrame_1 = false;
      this.playTimeNanosOffset_1 = playTimeNanos;
    }
    var playTime = playTimeNanos.minus_mfbszm_k$(this.playTimeNanosOffset_1);
    this.set_value_w62xiq_k$(this.animation_1.getValueFromNanos_i31vd8_k$(playTime));
    this.isFinished_1 = this.animation_1.isFinishedFromNanos_c31w39_k$(playTime);
  };
  protoOf(TransitionAnimationState).skipToEnd_aa7dfy_k$ = function () {
    this.set_value_w62xiq_k$(this.animation_1.get_targetValue_kq6mfd_k$());
    this.startOnTheNextFrame_1 = true;
  };
  protoOf(TransitionAnimationState).reset_x7qqys_k$ = function () {
    this.startOnTheNextFrame_1 = true;
  };
  function _get__animations__z05tbx($this) {
    return $this._animations_1;
  }
  function _set_refreshChildNeeded__4sbmm9($this, _set____db54di) {
    var tmp0 = $this.refreshChildNeeded$delegate_1;
    refreshChildNeeded$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_refreshChildNeeded__t5joi3($this) {
    var tmp0 = $this.refreshChildNeeded$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    refreshChildNeeded$factory_0();
    return tmp0.get_value_j01efc_k$();
  }
  function _set_startTimeNanos__1jy4fb($this, _set____db54di) {
    $this.startTimeNanos_1 = _set____db54di;
  }
  function _get_startTimeNanos__r31kgr($this) {
    return $this.startTimeNanos_1;
  }
  function _set_isRunning__kpbg34_0($this, _set____db54di) {
    var tmp0 = $this.isRunning$delegate_1;
    isRunning$factory_3();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_isRunning__l0y5hg($this) {
    var tmp0 = $this.isRunning$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    isRunning$factory_4();
    return tmp0.get_value_j01efc_k$();
  }
  function onFrame($this, playTimeNanos) {
    var allFinished = true;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
    var this_0 = $this._animations_1;
    // Inline function 'kotlin.contracts.contract' call
    var size = this_0.get_size_woubt6_k$();
    if (size > 0) {
      var i = 0;
      var tmp = this_0.get_content_eu4tjv_k$();
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        // Inline function 'androidx.compose.animation.core.InfiniteTransition.onFrame.<anonymous>' call
        var it = content[i];
        if (!it.isFinished_1) {
          it.onPlayTimeChanged_u0to7h_k$(playTimeNanos);
        }
        if (!it.isFinished_1) {
          allFinished = false;
        }
        i = i + 1 | 0;
      }
       while (i < size);
    }
    _set_isRunning__kpbg34_0($this, !allFinished);
  }
  function InfiniteTransition$run$slambda($toolingOverride, this$0, resultContinuation) {
    this.$toolingOverride_1 = $toolingOverride;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(InfiniteTransition$run$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(InfiniteTransition$run$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(InfiniteTransition$run$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.durationScale0__1 = {_v: 1.0};
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!true) {
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = withInfiniteAnimationFrameNanos(InfiniteTransition$run$slambda$lambda(this.$toolingOverride_1, this.this$0__1, this.durationScale0__1, this.$this$LaunchedEffect_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (this.durationScale0__1._v === 0.0) {
              this.set_state_rjd8d0_k$(3);
              var tmp_0 = snapshotFlow(InfiniteTransition$run$slambda$lambda_0(this.$this$LaunchedEffect_1));
              suspendResult = first(tmp_0, InfiniteTransition$run$slambda$slambda_0(null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 3:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 5:
            throw this.get_exception_x0n6w6_k$();
          case 6:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(InfiniteTransition$run$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new InfiniteTransition$run$slambda(this.$toolingOverride_1, this.this$0__1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(InfiniteTransition$run$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function InfiniteTransition$run$slambda_0($toolingOverride, this$0, resultContinuation) {
    var i = new InfiniteTransition$run$slambda($toolingOverride, this$0, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function InfiniteTransition$run$lambda($tmp2_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp2_rcvr.run_rd4vfj_k$($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function InfiniteTransition(label) {
    this.label_1 = label;
    var tmp = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp._animations_1 = new MutableVector(tmp$ret$0, 0);
    this.refreshChildNeeded$delegate_1 = mutableStateOf(false);
    this.startTimeNanos_1 = new Long(0, -2147483648);
    this.isRunning$delegate_1 = mutableStateOf(true);
  }
  protoOf(InfiniteTransition).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(InfiniteTransition).get_animations_ez9gco_k$ = function () {
    return this._animations_1.asMutableList_ecsrla_k$();
  };
  protoOf(InfiniteTransition).addAnimation_5v2sjd_k$ = function (animation) {
    this._animations_1.add_wl2rvy_k$(animation);
    _set_refreshChildNeeded__4sbmm9(this, true);
  };
  protoOf(InfiniteTransition).removeAnimation_tlfpjq_k$ = function (animation) {
    this._animations_1.remove_an8aut_k$(animation);
  };
  protoOf(InfiniteTransition).run_rd4vfj_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-318043801);
    sourceInformation($composer_0, 'C(run)172@7001L67,176@7149L1537,176@7128L1558:InfiniteTransition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(this) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-318043801, $dirty, -1, 'androidx.compose.animation.core.InfiniteTransition.run (InfiniteTransition.kt:171)');
      }
      sourceInformationMarkerStart($composer_0, 748212685, 'CC(remember):InfiniteTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.animation.core.InfiniteTransition.run.<anonymous>' call
        var value = mutableStateOf(null);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var toolingOverride = tmp0_group;
      if (_get_isRunning__l0y5hg(this) || _get_refreshChildNeeded__t5joi3(this)) {
        sourceInformationMarkerStart($composer_0, 748218891, 'CC(remember):InfiniteTransition.kt#9igjgp');
        var tmp2 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changedInstance_s1wkiy_k$(this);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = tmp2.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.compose.animation.core.InfiniteTransition.run.<anonymous>' call
          var value_0 = InfiniteTransition$run$slambda_0(toolingOverride, this, null);
          tmp2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        LaunchedEffect(this, tmp1_group, $composer_0, 14 & $dirty);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp3_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.updateScope_t8jcf_k$(InfiniteTransition$run$lambda(this, $changed));
    }
  };
  function rememberInfiniteTransition(label, $composer, $changed, $default) {
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1013651573, 'C(rememberInfiniteTransition)45@1981L38,46@2043L5:InfiniteTransition.kt#pdpnli');
    if (!(($default & 1) === 0))
      label_0 = 'InfiniteTransition';
    if (isTraceInProgress()) {
      traceEventStart(1013651573, $changed, -1, 'androidx.compose.animation.core.rememberInfiniteTransition (InfiniteTransition.kt:44)');
    }
    sourceInformationMarkerStart($composer_0, -1916602784, 'CC(remember):InfiniteTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.rememberInfiniteTransition.<anonymous>' call
      var value = new InfiniteTransition(label_0);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var infiniteTransition = tmp1_group;
    infiniteTransition.run_rd4vfj_k$($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return infiniteTransition;
  }
  function animateValue(_this__u8e3s4, initialValue, targetValue, typeConverter, animationSpec, label, $composer, $changed, $default) {
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1062847727, 'C(animateValue)P(1,3,4)262@10743L151,268@10911L346,268@10900L357,280@11301L128,280@11263L166:InfiniteTransition.kt#pdpnli');
    if (!(($default & 16) === 0))
      label_0 = 'ValueAnimation';
    if (isTraceInProgress()) {
      traceEventStart(-1062847727, $changed, -1, 'androidx.compose.animation.core.animateValue (InfiniteTransition.kt:260)');
    }
    sourceInformationMarkerStart($composer_0, 1444224427, 'CC(remember):InfiniteTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.animateValue.<anonymous>' call
      var value = new TransitionAnimationState(_this__u8e3s4, initialValue, targetValue, typeConverter, animationSpec, label_0);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var transitionAnimation = tmp1_group;
    sourceInformationMarkerStart($composer_0, 1444229998, 'CC(remember):InfiniteTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!((($changed & 112 ^ 48) > 32 && $composer_0.changedInstance_s1wkiy_k$(initialValue) || ($changed & 48) === 32) | (($changed & 896 ^ 384) > 256 && $composer_0.changedInstance_s1wkiy_k$(targetValue) || ($changed & 384) === 256)) | (($changed & 57344 ^ 24576) > 16384 && $composer_0.changedInstance_s1wkiy_k$(animationSpec) || ($changed & 24576) === 16384));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.animateValue.<anonymous>' call
      var value_0 = animateValue$lambda(initialValue, transitionAnimation, targetValue, animationSpec);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    SideEffect(tmp2_group, $composer_0, 0);
    sourceInformationMarkerStart($composer_0, 1444242260, 'CC(remember):InfiniteTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = $composer_0.changedInstance_s1wkiy_k$(_this__u8e3s4);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_3;
    if (invalid_0 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.animateValue.<anonymous>' call
      var value_1 = animateValue$lambda_0(_this__u8e3s4, transitionAnimation);
      $composer_0.updateRememberedValue_l1wh71_k$(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp3_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect(transitionAnimation, tmp3_group, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return transitionAnimation;
  }
  var androidx_compose_animation_core_InfiniteTransition$stable;
  function animateFloat(_this__u8e3s4, initialValue, targetValue, animationSpec, label, $composer, $changed, $default) {
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -644770905, 'C(animateFloat)P(1,3)316@12588L84:InfiniteTransition.kt#pdpnli');
    if (!(($default & 8) === 0))
      label_0 = 'FloatAnimation';
    if (isTraceInProgress()) {
      traceEventStart(-644770905, $changed, -1, 'androidx.compose.animation.core.animateFloat (InfiniteTransition.kt:316)');
    }
    var tmp0 = animateValue(_this__u8e3s4, initialValue, targetValue, get_VectorConverter(FloatCompanionObject_getInstance()), animationSpec, label_0, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed | 57344 & $changed << 3 | 458752 & $changed << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function animateValue$lambda($initialValue, $transitionAnimation, $targetValue, $animationSpec) {
    return function () {
      var tmp;
      if (!equals($initialValue, $transitionAnimation.initialValue_1) || !equals($targetValue, $transitionAnimation.targetValue_1)) {
        $transitionAnimation.updateValues_enqt9x_k$($initialValue, $targetValue, $animationSpec);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function animateValue$$inlined$cache$2$1($this_animateValue, $transitionAnimation) {
    this.$this_animateValue_1 = $this_animateValue;
    this.$transitionAnimation_1 = $transitionAnimation;
  }
  protoOf(animateValue$$inlined$cache$2$1).dispose_3nnxhr_k$ = function () {
    // Inline function 'androidx.compose.animation.core.animateValue.<anonymous>.<anonymous>.<anonymous>' call
    this.$this_animateValue_1.removeAnimation_tlfpjq_k$(this.$transitionAnimation_1);
  };
  function animateValue$lambda_0($this_animateValue, $transitionAnimation) {
    return function ($this$DisposableEffect) {
      $this_animateValue.addAnimation_5v2sjd_k$($transitionAnimation);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new animateValue$$inlined$cache$2$1($this_animateValue, $transitionAnimation);
    };
  }
  function value$factory_3() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_w62xiq_k$(value);
    });
  }
  function value$factory_4() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_w62xiq_k$(value);
    });
  }
  function refreshChildNeeded$factory() {
    return getPropertyCallableRef('refreshChildNeeded', 1, KMutableProperty1, function (receiver) {
      return _get_refreshChildNeeded__t5joi3(receiver);
    }, function (receiver, value) {
      return _set_refreshChildNeeded__4sbmm9(receiver, value);
    });
  }
  function refreshChildNeeded$factory_0() {
    return getPropertyCallableRef('refreshChildNeeded', 1, KMutableProperty1, function (receiver) {
      return _get_refreshChildNeeded__t5joi3(receiver);
    }, function (receiver, value) {
      return _set_refreshChildNeeded__4sbmm9(receiver, value);
    });
  }
  function isRunning$factory_3() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return _get_isRunning__l0y5hg(receiver);
    }, function (receiver, value) {
      return _set_isRunning__kpbg34_0(receiver, value);
    });
  }
  function isRunning$factory_4() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return _get_isRunning__l0y5hg(receiver);
    }, function (receiver, value) {
      return _set_isRunning__kpbg34_0(receiver, value);
    });
  }
  function binarySearch(_this__u8e3s4, element, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? _this__u8e3s4.get_size_woubt6_k$() : toIndex;
    // Inline function 'androidx.compose.animation.core.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(fromIndex <= toIndex)) {
      // Inline function 'androidx.compose.animation.core.binarySearch.<anonymous>' call
      var tmp$ret$0 = 'fromIndex(' + fromIndex + ') > toIndex(' + toIndex + ')';
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (fromIndex < 0) {
      throw IndexOutOfBoundsException_init_$Create$('Index out of range: ' + fromIndex);
    }
    if (toIndex > _this__u8e3s4.get_size_woubt6_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('Index out of range: ' + toIndex);
    }
    var low = fromIndex;
    var high = toIndex - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.get_c1px32_k$(mid);
      if (midVal < element) {
        low = mid + 1 | 0;
      } else if (midVal > element) {
        high = mid - 1 | 0;
      } else {
        return mid;
      }
    }
    return -(low + 1 | 0) | 0;
  }
  function InternalAnimationApi() {
  }
  protoOf(InternalAnimationApi).equals = function (other) {
    if (!(other instanceof InternalAnimationApi))
      return false;
    other instanceof InternalAnimationApi || THROW_CCE();
    return true;
  };
  protoOf(InternalAnimationApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalAnimationApi).toString = function () {
    return '@androidx.compose.animation.core.InternalAnimationApi(' + ')';
  };
  function Mutator(priority, job) {
    this.priority_1 = priority;
    this.job_1 = job;
  }
  protoOf(Mutator).get_priority_jyafsd_k$ = function () {
    return this.priority_1;
  };
  protoOf(Mutator).get_job_18j2r0_k$ = function () {
    return this.job_1;
  };
  protoOf(Mutator).canInterrupt_jjffs4_k$ = function (other) {
    return this.priority_1.compareTo_30rs7w_k$(other.priority_1) >= 0;
  };
  protoOf(Mutator).cancel_2l89ey_k$ = function () {
    return this.job_1.cancel_hkmm2i_k$(new MutationInterruptedException());
  };
  function _get_currentMutator__y8yhby($this) {
    return $this.currentMutator_1;
  }
  function _get_mutex__e2dgb2($this) {
    return $this.mutex_1;
  }
  function tryMutateOrCancel($this, mutator) {
    $l$loop: while (true) {
      var oldMutator = $this.currentMutator_1.get_26vq_k$();
      if (oldMutator == null || mutator.canInterrupt_jjffs4_k$(oldMutator)) {
        if ($this.currentMutator_1.compareAndSet_10iwom_k$(oldMutator, mutator)) {
          if (oldMutator == null)
            null;
          else {
            oldMutator.cancel_2l89ey_k$();
          }
          break $l$loop;
        }
      } else
        throw CancellationException_init_$Create$('Current mutation had a higher priority');
    }
  }
  function MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation) {
    this.$priority_1 = $priority;
    this.this$0__1 = this$0;
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutatorMutex$mutate$slambda).invoke_nd4u9n_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutatorMutex$mutate$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_nd4u9n_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutatorMutex$mutate$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            this.mutator0__1 = new Mutator(this.$priority_1, ensureNotNull(this.$this$coroutineScope_1.get_coroutineContext_115oqo_k$().get_y2st91_k$(Key_getInstance_0())));
            tryMutateOrCancel(this.this$0__1, this.mutator0__1);
            var tmp_0 = this;
            tmp_0.tmp01__1 = this.this$0__1.mutex_1;
            this.this2__1 = this.tmp01__1;
            var tmp_1 = this;
            tmp_1.owner3__1 = null;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this2__1.lock_ugrcvf_k$(this.owner3__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.tmp$ret$24__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(8);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(7);
            this.set_state_rjd8d0_k$(4);
            suspendResult = this.$block_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.tmp$ret$05__1 = suspendResult;
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            var tmp_2 = this.tmp$ret$05__1;
            this.set_exceptionState_fex74n_k$(8);
            this.this$0__1.currentMutator_1.compareAndSet_10iwom_k$(this.mutator0__1, null);
            this.tmp$ret$24__1 = tmp_2;
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            var tmp_3 = this.tmp$ret$24__1;
            this.set_exceptionState_fex74n_k$(9);
            this.this2__1.unlock_ulcrcl_k$(this.owner3__1);
            return tmp_3;
          case 7:
            this.set_exceptionState_fex74n_k$(8);
            var t = this.get_exception_x0n6w6_k$();
            this.this$0__1.currentMutator_1.compareAndSet_10iwom_k$(this.mutator0__1, null);
            throw t;
          case 8:
            this.set_exceptionState_fex74n_k$(9);
            var t_0 = this.get_exception_x0n6w6_k$();
            this.this2__1.unlock_ulcrcl_k$(this.owner3__1);
            throw t_0;
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(MutatorMutex$mutate$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutate$slambda(this.$priority_1, this.this$0__1, this.$block_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(MutatorMutex$mutate$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MutatorMutex$mutate$slambda_0($priority, this$0, $block, resultContinuation) {
    var i = new MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_nd4u9n_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutatorMutex$mutateWith$slambda($priority, this$0, $block, $receiver, resultContinuation) {
    this.$priority_1 = $priority;
    this.this$0__1 = this$0;
    this.$block_1 = $block;
    this.$receiver_1 = $receiver;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutatorMutex$mutateWith$slambda).invoke_nd4u9n_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutatorMutex$mutateWith$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_nd4u9n_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutatorMutex$mutateWith$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            this.mutator0__1 = new Mutator(this.$priority_1, ensureNotNull(this.$this$coroutineScope_1.get_coroutineContext_115oqo_k$().get_y2st91_k$(Key_getInstance_0())));
            tryMutateOrCancel(this.this$0__1, this.mutator0__1);
            var tmp_0 = this;
            tmp_0.tmp01__1 = this.this$0__1.mutex_1;
            this.this2__1 = this.tmp01__1;
            var tmp_1 = this;
            tmp_1.owner3__1 = null;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this2__1.lock_ugrcvf_k$(this.owner3__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.tmp$ret$24__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(8);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(7);
            this.set_state_rjd8d0_k$(4);
            suspendResult = this.$block_1(this.$receiver_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.tmp$ret$05__1 = suspendResult;
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            var tmp_2 = this.tmp$ret$05__1;
            this.set_exceptionState_fex74n_k$(8);
            this.this$0__1.currentMutator_1.compareAndSet_10iwom_k$(this.mutator0__1, null);
            this.tmp$ret$24__1 = tmp_2;
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            var tmp_3 = this.tmp$ret$24__1;
            this.set_exceptionState_fex74n_k$(9);
            this.this2__1.unlock_ulcrcl_k$(this.owner3__1);
            return tmp_3;
          case 7:
            this.set_exceptionState_fex74n_k$(8);
            var t = this.get_exception_x0n6w6_k$();
            this.this$0__1.currentMutator_1.compareAndSet_10iwom_k$(this.mutator0__1, null);
            throw t;
          case 8:
            this.set_exceptionState_fex74n_k$(9);
            var t_0 = this.get_exception_x0n6w6_k$();
            this.this2__1.unlock_ulcrcl_k$(this.owner3__1);
            throw t_0;
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(MutatorMutex$mutateWith$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutateWith$slambda(this.$priority_1, this.this$0__1, this.$block_1, this.$receiver_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(MutatorMutex$mutateWith$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MutatorMutex$mutateWith$slambda_0($priority, this$0, $block, $receiver, resultContinuation) {
    var i = new MutatorMutex$mutateWith$slambda($priority, this$0, $block, $receiver, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_nd4u9n_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutatorMutex() {
    this.currentMutator_1 = new AtomicReference(null);
    this.mutex_1 = Mutex();
  }
  protoOf(MutatorMutex).mutate_fsxm7f_k$ = function (priority, block, $completion) {
    return coroutineScope(MutatorMutex$mutate$slambda_0(priority, this, block, null), $completion);
  };
  protoOf(MutatorMutex).mutate$default_f05kjn_k$ = function (priority, block, $completion, $super) {
    priority = priority === VOID ? MutatePriority_Default_getInstance() : priority;
    return $super === VOID ? this.mutate_fsxm7f_k$(priority, block, $completion) : $super.mutate_fsxm7f_k$.call(this, priority, block, $completion);
  };
  protoOf(MutatorMutex).mutateWith_1xzeue_k$ = function (receiver, priority, block, $completion) {
    return coroutineScope(MutatorMutex$mutateWith$slambda_0(priority, this, block, receiver, null), $completion);
  };
  protoOf(MutatorMutex).mutateWith$default_i0v6ui_k$ = function (receiver, priority, block, $completion, $super) {
    priority = priority === VOID ? MutatePriority_Default_getInstance() : priority;
    return $super === VOID ? this.mutateWith_1xzeue_k$(receiver, priority, block, $completion) : $super.mutateWith_1xzeue_k$.call(this, receiver, priority, block, $completion);
  };
  var MutatePriority_Default_instance;
  var MutatePriority_UserInput_instance;
  var MutatePriority_PreventUserInput_instance;
  function values_1() {
    return [MutatePriority_Default_getInstance(), MutatePriority_UserInput_getInstance(), MutatePriority_PreventUserInput_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Default':
        return MutatePriority_Default_getInstance();
      case 'UserInput':
        return MutatePriority_UserInput_getInstance();
      case 'PreventUserInput':
        return MutatePriority_PreventUserInput_getInstance();
      default:
        MutatePriority_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var MutatePriority_entriesInitialized;
  function MutatePriority_initEntries() {
    if (MutatePriority_entriesInitialized)
      return Unit_getInstance();
    MutatePriority_entriesInitialized = true;
    MutatePriority_Default_instance = new MutatePriority('Default', 0);
    MutatePriority_UserInput_instance = new MutatePriority('UserInput', 1);
    MutatePriority_PreventUserInput_instance = new MutatePriority('PreventUserInput', 2);
  }
  var $ENTRIES_1;
  function MutatePriority(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MutationInterruptedException() {
    PlatformOptimizedCancellationException.call(this, 'Mutation interrupted');
    captureStack(this, MutationInterruptedException);
  }
  function MutatePriority_Default_getInstance() {
    MutatePriority_initEntries();
    return MutatePriority_Default_instance;
  }
  function MutatePriority_UserInput_getInstance() {
    MutatePriority_initEntries();
    return MutatePriority_UserInput_instance;
  }
  function MutatePriority_PreventUserInput_getInstance() {
    MutatePriority_initEntries();
    return MutatePriority_PreventUserInput_instance;
  }
  function requirePrecondition(value, lazyMessage) {
    // Inline function 'kotlin.contracts.contract' call
    if (!value) {
      throwIllegalArgumentException(lazyMessage());
    }
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function checkPrecondition(value, lazyMessage) {
    // Inline function 'kotlin.contracts.contract' call
    if (!value) {
      throwIllegalStateException(lazyMessage());
    }
  }
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function estimateAnimationDurationMillis(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    if (dampingRatio === 0.0) {
      return new Long(2077252342, 2147);
    }
    return estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function get_MAX_LONG_MILLIS() {
    return MAX_LONG_MILLIS;
  }
  var MAX_LONG_MILLIS;
  function estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    var tmp = 2.0 * dampingRatio;
    // Inline function 'kotlin.math.sqrt' call
    var dampingCoefficient = tmp * Math.sqrt(stiffness);
    var partialRoot = dampingCoefficient * dampingCoefficient - 4.0 * stiffness;
    var tmp1 = -dampingCoefficient;
    // Inline function 'androidx.compose.animation.core.plus' call
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    var this_0 = complexSqrt(partialRoot);
    access$_set__real__eq79rc(this_0, access$_get__real__hax6q4(this_0) + tmp1);
    // Inline function 'androidx.compose.animation.core.ComplexDouble.times' call
    access$_set__real__eq79rc(this_0, access$_get__real__hax6q4(this_0) * 0.5);
    access$_set__imaginary__ahpny5(this_0, access$_get__imaginary__4kix73(this_0) * 0.5);
    var firstRoot = this_0;
    var tmp5 = -dampingCoefficient;
    // Inline function 'androidx.compose.animation.core.minus' call
    // Inline function 'androidx.compose.animation.core.ComplexDouble.unaryMinus' call
    var this_1 = complexSqrt(partialRoot);
    access$_set__real__eq79rc(this_1, access$_get__real__hax6q4(this_1) * -1);
    access$_set__imaginary__ahpny5(this_1, access$_get__imaginary__4kix73(this_1) * -1);
    // Inline function 'androidx.compose.animation.core.plus' call
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    access$_set__real__eq79rc(this_1, access$_get__real__hax6q4(this_1) + tmp5);
    // Inline function 'androidx.compose.animation.core.ComplexDouble.times' call
    access$_set__real__eq79rc(this_1, access$_get__real__hax6q4(this_1) * 0.5);
    access$_set__imaginary__ahpny5(this_1, access$_get__imaginary__4kix73(this_1) * 0.5);
    var secondRoot = this_1;
    return estimateDurationInternal(firstRoot, secondRoot, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateDurationInternal(firstRoot, secondRoot, dampingRatio, initialVelocity, initialPosition, delta) {
    if (initialPosition === 0.0 && initialVelocity === 0.0) {
      return new Long(0, 0);
    }
    var v0 = initialPosition < 0 ? -initialVelocity : initialVelocity;
    // Inline function 'kotlin.math.abs' call
    var p0 = Math.abs(initialPosition);
    return numberToLong((dampingRatio > 1.0 ? estimateOverDamped(firstRoot, secondRoot, p0, v0, delta) : dampingRatio < 1.0 ? estimateUnderDamped(firstRoot, p0, v0, delta) : estimateCriticallyDamped(firstRoot, p0, v0, delta)) * 1000.0);
  }
  function estimateOverDamped(firstRoot, secondRoot, p0, v0, delta) {
    var r1 = firstRoot.get_real_wotl9j_k$();
    var r2 = secondRoot.get_real_wotl9j_k$();
    var c2 = (r1 * p0 - v0) / (r1 - r2);
    var c1 = p0 - c2;
    // Inline function 'kotlin.math.abs' call
    var x = delta / c1;
    // Inline function 'kotlin.math.ln' call
    var x_0 = Math.abs(x);
    var t1 = Math.log(x_0) / r1;
    // Inline function 'kotlin.math.abs' call
    var x_1 = delta / c2;
    // Inline function 'kotlin.math.ln' call
    var x_2 = Math.abs(x_1);
    var t2 = Math.log(x_2) / r2;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    if (!isFinite(t1)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      if (!isFinite(t2)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    // Inline function 'kotlin.math.ln' call
    var x_3 = c1 * r1 / (-c2 * r2);
    var tInflection = Math.log(x_3) / (r2 - r1);
    var tmp_0;
    if (isNaN_1(tInflection) || tInflection <= 0.0) {
      tmp_0 = -delta;
    } else if (tInflection > 0.0 && -estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) < delta) {
      if (c2 > 0.0 && c1 < 0.0) {
        tCurr = 0.0;
      }
      tmp_0 = -delta;
    } else {
      // Inline function 'kotlin.math.ln' call
      var x_4 = -(c2 * r2 * r2) / (c1 * r1 * r1);
      tCurr = Math.log(x_4) / (r1 - r2);
      tmp_0 = delta;
    }
    var signedDelta = tmp_0;
    var tmp_1 = c1 * r1;
    // Inline function 'kotlin.math.exp' call
    var x_5 = r1 * tCurr;
    var tmp_2 = tmp_1 * Math.exp(x_5);
    var tmp_3 = c2 * r2;
    // Inline function 'kotlin.math.exp' call
    var x_6 = r2 * tCurr;
    // Inline function 'kotlin.math.abs' call
    var x_7 = tmp_2 + tmp_3 * Math.exp(x_6);
    if (Math.abs(x_7) < 1.0E-4) {
      return tCurr;
    }
    var tDelta = DoubleCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$();
    var iterations = 0;
    while (tDelta > 0.001 && iterations < 100) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var x_8 = tCurr;
      // Inline function 'androidx.compose.animation.core.estimateOverDamped.<anonymous>' call
      // Inline function 'kotlin.math.exp' call
      var x_9 = r1 * x_8;
      var tmp_4 = c1 * Math.exp(x_9);
      // Inline function 'kotlin.math.exp' call
      var x_10 = r2 * x_8;
      var tmp_5 = tmp_4 + c2 * Math.exp(x_10) + signedDelta;
      // Inline function 'androidx.compose.animation.core.estimateOverDamped.<anonymous>' call
      var tmp_6 = c1 * r1;
      // Inline function 'kotlin.math.exp' call
      var x_11 = r1 * x_8;
      var tmp_7 = tmp_6 * Math.exp(x_11);
      var tmp_8 = c2 * r2;
      // Inline function 'kotlin.math.exp' call
      var x_12 = r2 * x_8;
      tCurr = x_8 - tmp_5 / (tmp_7 + tmp_8 * Math.exp(x_12));
      // Inline function 'kotlin.math.abs' call
      var x_13 = tLast - tCurr;
      tDelta = Math.abs(x_13);
    }
    return tCurr;
  }
  function estimateUnderDamped(firstRoot, p0, v0, delta) {
    var r = firstRoot.get_real_wotl9j_k$();
    var c1 = p0;
    var c2 = (v0 - r * c1) / firstRoot.get_imaginary_5xnno0_k$();
    // Inline function 'kotlin.math.sqrt' call
    var x = c1 * c1 + c2 * c2;
    var c = Math.sqrt(x);
    // Inline function 'kotlin.math.ln' call
    var x_0 = delta / c;
    return Math.log(x_0) / r;
  }
  function estimateCriticallyDamped(firstRoot, p0, v0, delta) {
    var r = firstRoot.get_real_wotl9j_k$();
    var c1 = p0;
    var c2 = v0 - r * c1;
    // Inline function 'kotlin.math.abs' call
    var x = delta / c1;
    // Inline function 'kotlin.math.ln' call
    var x_0 = Math.abs(x);
    var t1 = Math.log(x_0) / r;
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
    // Inline function 'kotlin.math.abs' call
    var x_1 = delta / c2;
    // Inline function 'kotlin.math.ln' call
    var x_2 = Math.abs(x_1);
    var guess = Math.log(x_2);
    var t = guess;
    var inductionVariable = 0;
    if (inductionVariable <= 5)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.math.abs' call
        var x_3 = t / r;
        // Inline function 'kotlin.math.ln' call
        var x_4 = Math.abs(x_3);
        t = guess - Math.log(x_4);
      }
       while (inductionVariable <= 5);
    var t2 = t / r;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    if (!isFinite(t1)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      if (!isFinite(t2)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    var tInflection = -(r * c1 + c2) / (r * c2);
    // Inline function 'kotlin.math.exp' call
    var x_5 = r * tInflection;
    var tmp_0 = c1 * Math.exp(x_5);
    var tmp_1 = c2 * tInflection;
    // Inline function 'kotlin.math.exp' call
    var x_6 = r * tInflection;
    var xInflection = tmp_0 + tmp_1 * Math.exp(x_6);
    var tmp_2;
    if (isNaN_1(tInflection) || tInflection <= 0.0) {
      tmp_2 = -delta;
    } else if (tInflection > 0.0 && -xInflection < delta) {
      if (c2 < 0 && c1 > 0) {
        tCurr = 0.0;
      }
      tmp_2 = -delta;
    } else {
      var tConcavChange = -(2.0 / r) - c1 / c2;
      tCurr = tConcavChange;
      tmp_2 = delta;
    }
    var signedDelta = tmp_2;
    var tDelta = DoubleCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$();
    var iterations = 0;
    while (tDelta > 0.001 && iterations < 100) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var x_7 = tCurr;
      // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
      var tmp_3 = c1 + c2 * x_7;
      // Inline function 'kotlin.math.exp' call
      var x_8 = r * x_7;
      var tmp_4 = tmp_3 * Math.exp(x_8) + signedDelta;
      // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
      var tmp_5 = c2 * (r * x_7 + 1) + c1 * r;
      // Inline function 'kotlin.math.exp' call
      var x_9 = r * x_7;
      tCurr = x_7 - tmp_4 / (tmp_5 * Math.exp(x_9));
      // Inline function 'kotlin.math.abs' call
      var x_10 = tLast - tCurr;
      tDelta = Math.abs(x_10);
    }
    return tCurr;
  }
  function isNotFinite(_this__u8e3s4) {
    return !isFinite(_this__u8e3s4);
  }
  function iterateNewtonsMethod(x, fn, fnPrime) {
    return x - fn(x) / fnPrime(x);
  }
  function estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) {
    // Inline function 'kotlin.math.exp' call
    var x = r1 * tInflection;
    var tmp = c1 * Math.exp(x);
    // Inline function 'kotlin.math.exp' call
    var x_0 = r2 * tInflection;
    return tmp + c2 * Math.exp(x_0);
  }
  function get_UNSET() {
    return UNSET;
  }
  var UNSET;
  function _set_naturalFreq__cfwulg($this, _set____db54di) {
    $this.naturalFreq_1 = _set____db54di;
  }
  function _get_naturalFreq__sat11s($this) {
    return $this.naturalFreq_1;
  }
  function _set_initialized__9jqmof($this, _set____db54di) {
    $this.initialized_1 = _set____db54di;
  }
  function _get_initialized__kqnjnh($this) {
    return $this.initialized_1;
  }
  function _set_gammaPlus__bx2io4($this, _set____db54di) {
    $this.gammaPlus_1 = _set____db54di;
  }
  function _get_gammaPlus__tt72wg($this) {
    return $this.gammaPlus_1;
  }
  function _set_gammaMinus__cup5ta($this, _set____db54di) {
    $this.gammaMinus_1 = _set____db54di;
  }
  function _get_gammaMinus__27jfby($this) {
    return $this.gammaMinus_1;
  }
  function _set_dampedFreq__qkv21s($this, _set____db54di) {
    $this.dampedFreq_1 = _set____db54di;
  }
  function _get_dampedFreq__te0es4($this) {
    return $this.dampedFreq_1;
  }
  function init($this) {
    if ($this.initialized_1) {
      return Unit_getInstance();
    }
    if ($this.finalPosition_1 === UNSET) {
      throw IllegalStateException_init_$Create$('Error: Final position of the spring must be set before the animation starts');
    }
    var dampingRatioSquared = $this.dampingRatio_1 * $this.dampingRatio_1;
    if ($this.dampingRatio_1 > 1) {
      var tmp = $this;
      var tmp_0 = -$this.dampingRatio_1 * $this.naturalFreq_1;
      var tmp_1 = $this.naturalFreq_1;
      // Inline function 'kotlin.math.sqrt' call
      var x = dampingRatioSquared - 1;
      tmp.gammaPlus_1 = tmp_0 + tmp_1 * Math.sqrt(x);
      var tmp_2 = $this;
      var tmp_3 = -$this.dampingRatio_1 * $this.naturalFreq_1;
      var tmp_4 = $this.naturalFreq_1;
      // Inline function 'kotlin.math.sqrt' call
      var x_0 = dampingRatioSquared - 1;
      tmp_2.gammaMinus_1 = tmp_3 - tmp_4 * Math.sqrt(x_0);
    } else if ($this.dampingRatio_1 >= 0 && $this.dampingRatio_1 < 1) {
      var tmp_5 = $this;
      var tmp_6 = $this.naturalFreq_1;
      // Inline function 'kotlin.math.sqrt' call
      var x_1 = 1 - dampingRatioSquared;
      tmp_5.dampedFreq_1 = tmp_6 * Math.sqrt(x_1);
    }
    $this.initialized_1 = true;
  }
  function SpringSimulation(finalPosition) {
    this.finalPosition_1 = finalPosition;
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    var x = Spring_getInstance().get_StiffnessVeryLow_1smo6g_k$();
    tmp.naturalFreq_1 = Math.sqrt(x);
    this.initialized_1 = false;
    this.gammaPlus_1 = 0.0;
    this.gammaMinus_1 = 0.0;
    this.dampedFreq_1 = 0.0;
    this.dampingRatio_1 = Spring_getInstance().get_DampingRatioNoBouncy_45ga5r_k$();
  }
  protoOf(SpringSimulation).set_finalPosition_7mu6km_k$ = function (_set____db54di) {
    this.finalPosition_1 = _set____db54di;
  };
  protoOf(SpringSimulation).get_finalPosition_vxiffa_k$ = function () {
    return this.finalPosition_1;
  };
  protoOf(SpringSimulation).set_stiffness_89bnwm_k$ = function (value) {
    if (this.get_stiffness_dt2sgm_k$() <= 0) {
      throw IllegalArgumentException_init_$Create$('Spring stiffness constant must be positive.');
    }
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.naturalFreq_1 = Math.sqrt(value);
    this.initialized_1 = false;
  };
  protoOf(SpringSimulation).get_stiffness_dt2sgm_k$ = function () {
    return this.naturalFreq_1 * this.naturalFreq_1;
  };
  protoOf(SpringSimulation).set_dampingRatio_1d4jya_k$ = function (value) {
    if (value < 0) {
      throw IllegalArgumentException_init_$Create$('Damping ratio must be non-negative');
    }
    this.dampingRatio_1 = value;
    this.initialized_1 = false;
  };
  protoOf(SpringSimulation).get_dampingRatio_syjss2_k$ = function () {
    return this.dampingRatio_1;
  };
  protoOf(SpringSimulation).getAcceleration_ie4kmu_k$ = function (lastDisplacement, lastVelocity) {
    var adjustedDisplacement = lastDisplacement - this.finalPosition_1;
    var k = this.naturalFreq_1 * this.naturalFreq_1;
    var c = 2.0 * this.naturalFreq_1 * this.dampingRatio_1;
    return -k * adjustedDisplacement - c * lastVelocity;
  };
  protoOf(SpringSimulation).updateValues_e8ut58_k$ = function (lastDisplacement, lastVelocity, timeElapsed) {
    init(this);
    var adjustedDisplacement = lastDisplacement - this.finalPosition_1;
    // Inline function 'kotlin.Long.div' call
    var deltaT = timeElapsed.toDouble_ygsx0s_k$() / 1000.0;
    var displacement;
    var currentVelocity;
    if (this.dampingRatio_1 > 1) {
      var coeffA = adjustedDisplacement - (this.gammaMinus_1 * adjustedDisplacement - lastVelocity) / (this.gammaMinus_1 - this.gammaPlus_1);
      var coeffB = (this.gammaMinus_1 * adjustedDisplacement - lastVelocity) / (this.gammaMinus_1 - this.gammaPlus_1);
      // Inline function 'kotlin.math.exp' call
      var x = this.gammaMinus_1 * deltaT;
      var tmp = coeffA * Math.exp(x);
      // Inline function 'kotlin.math.exp' call
      var x_0 = this.gammaPlus_1 * deltaT;
      displacement = tmp + coeffB * Math.exp(x_0);
      var tmp_0 = coeffA * this.gammaMinus_1;
      // Inline function 'kotlin.math.exp' call
      var x_1 = this.gammaMinus_1 * deltaT;
      var tmp_1 = tmp_0 * Math.exp(x_1);
      var tmp_2 = coeffB * this.gammaPlus_1;
      // Inline function 'kotlin.math.exp' call
      var x_2 = this.gammaPlus_1 * deltaT;
      currentVelocity = tmp_1 + tmp_2 * Math.exp(x_2);
    } else if (this.dampingRatio_1 === 1.0) {
      var coeffA_0 = adjustedDisplacement;
      var coeffB_0 = lastVelocity + this.naturalFreq_1 * adjustedDisplacement;
      var tmp_3 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      var x_3 = -this.naturalFreq_1 * deltaT;
      displacement = tmp_3 * Math.exp(x_3);
      var tmp_4 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      var x_4 = -this.naturalFreq_1 * deltaT;
      var tmp_5 = tmp_4 * Math.exp(x_4) * -this.naturalFreq_1;
      // Inline function 'kotlin.math.exp' call
      var x_5 = -this.naturalFreq_1 * deltaT;
      currentVelocity = tmp_5 + coeffB_0 * Math.exp(x_5);
    } else {
      var cosCoeff = adjustedDisplacement;
      var sinCoeff = 1 / this.dampedFreq_1 * (this.dampingRatio_1 * this.naturalFreq_1 * adjustedDisplacement + lastVelocity);
      // Inline function 'kotlin.math.exp' call
      var x_6 = -this.dampingRatio_1 * this.naturalFreq_1 * deltaT;
      var tmp_6 = Math.exp(x_6);
      // Inline function 'kotlin.math.cos' call
      var x_7 = this.dampedFreq_1 * deltaT;
      var tmp_7 = cosCoeff * Math.cos(x_7);
      // Inline function 'kotlin.math.sin' call
      var x_8 = this.dampedFreq_1 * deltaT;
      displacement = tmp_6 * (tmp_7 + sinCoeff * Math.sin(x_8));
      var tmp_8 = displacement * -this.naturalFreq_1 * this.dampingRatio_1;
      // Inline function 'kotlin.math.exp' call
      var x_9 = -this.dampingRatio_1 * this.naturalFreq_1 * deltaT;
      var tmp_9 = Math.exp(x_9);
      var tmp_10 = -this.dampedFreq_1 * cosCoeff;
      // Inline function 'kotlin.math.sin' call
      var x_10 = this.dampedFreq_1 * deltaT;
      var tmp_11 = tmp_10 * Math.sin(x_10);
      var tmp_12 = this.dampedFreq_1 * sinCoeff;
      // Inline function 'kotlin.math.cos' call
      var x_11 = this.dampedFreq_1 * deltaT;
      currentVelocity = tmp_8 + tmp_9 * (tmp_11 + tmp_12 * Math.cos(x_11));
    }
    var newValue = displacement + this.finalPosition_1;
    var newVelocity = currentVelocity;
    return Motion_0(newValue, newVelocity);
  };
  function _Motion___init__impl__vk56rv(packedValue) {
    return packedValue;
  }
  function _Motion___get_packedValue__impl__qymh4n($this) {
    return $this;
  }
  function _Motion___get_value__impl__e0x31d($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _Motion___get_packedValue__impl__qymh4n($this).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function _Motion___get_velocity__impl__h2mglt($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = _Motion___get_packedValue__impl__qymh4n($this).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function Motion__copy_impl_s0k26a($this, value, velocity) {
    return Motion_0(value, velocity);
  }
  function Motion__copy$default_impl_xgjc6z($this, value, velocity, $super) {
    value = value === VOID ? _Motion___get_value__impl__e0x31d($this) : value;
    velocity = velocity === VOID ? _Motion___get_velocity__impl__h2mglt($this) : velocity;
    var tmp;
    if ($super === VOID) {
      tmp = Motion__copy_impl_s0k26a($this, value, velocity);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Motion(tmp_0)).copy_quaz9h_k$.call(new Motion($this), value, velocity).packedValue_1;
    }
    return tmp;
  }
  function Motion__toString_impl_wnrfdh($this) {
    return 'Motion(packedValue=' + $this.toString() + ')';
  }
  function Motion__hashCode_impl_gm6pss($this) {
    return $this.hashCode();
  }
  function Motion__equals_impl_ngoxh4($this, other) {
    if (!(other instanceof Motion))
      return false;
    var tmp0_other_with_cast = other instanceof Motion ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Motion(packedValue) {
    this.packedValue_1 = packedValue;
  }
  protoOf(Motion).toString = function () {
    return Motion__toString_impl_wnrfdh(this.packedValue_1);
  };
  protoOf(Motion).hashCode = function () {
    return Motion__hashCode_impl_gm6pss(this.packedValue_1);
  };
  protoOf(Motion).equals = function (other) {
    return Motion__equals_impl_ngoxh4(this.packedValue_1, other);
  };
  function Motion_0(value, velocity) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(value));
    var v2 = toLong(toRawBits(velocity));
    var tmp$ret$0 = v1.shl_bg8if3_k$(32).or_v7fvkl_k$(v2.and_4spn93_k$(new Long(-1, 0)));
    return _Motion___init__impl__vk56rv(tmp$ret$0);
  }
  function get_durationScale(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.get_y2st91_k$(Key_getInstance_1());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_scaleFactor_64aucw_k$();
    var scale = tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs;
    // Inline function 'androidx.compose.animation.core.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(scale >= 0.0)) {
      // Inline function 'androidx.compose.animation.core.<get-durationScale>.<anonymous>' call
      var tmp$ret$0 = 'negative scale factor';
      throwIllegalStateException(tmp$ret$0);
    }
    return scale;
  }
  function animateTo(_this__u8e3s4, targetValue, animationSpec, sequentialAnimation, block, $completion) {
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    sequentialAnimation = sequentialAnimation === VOID ? false : sequentialAnimation;
    var tmp;
    if (block === VOID) {
      tmp = animateTo$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp0_initialValue = _this__u8e3s4.get_value_j01efc_k$();
    var tmp1_typeConverter = _this__u8e3s4.get_typeConverter_seyvfn_k$();
    var tmp2_initialVelocityVector = _this__u8e3s4.get_velocityVector_v3jmo9_k$();
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, tmp2_initialVelocityVector);
    return animate(_this__u8e3s4, anim, sequentialAnimation ? _this__u8e3s4.get_lastFrameTimeNanos_3aprno_k$() : new Long(0, -2147483648), block, $completion);
  }
  function animate(_this__u8e3s4, animation, startTimeNanos, block, $completion) {
    startTimeNanos = startTimeNanos === VOID ? new Long(0, -2147483648) : startTimeNanos;
    var tmp;
    if (block === VOID) {
      tmp = animate$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp_0 = new $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, $completion);
    tmp_0.set_result_xj64lm_k$(Unit_getInstance());
    tmp_0.set_exception_px07aa_k$(null);
    return tmp_0.doResume_5yljmg_k$();
  }
  function updateState(_this__u8e3s4, state) {
    state.set_value_w62xiq_k$(_this__u8e3s4.get_value_j01efc_k$());
    copyFrom(state.get_velocityVector_v3jmo9_k$(), _this__u8e3s4.get_velocityVector_v3jmo9_k$());
    state.set_finishedTimeNanos_76k3z2_k$(_this__u8e3s4.get_finishedTimeNanos_t5ryif_k$());
    state.set_lastFrameTimeNanos_lyzzef_k$(_this__u8e3s4.get_lastFrameTimeNanos_3aprno_k$());
    state.set_isRunning_o0rkdc_k$(_this__u8e3s4.get_isRunning_okmtn0_k$());
  }
  function callWithFrameNanos(_this__u8e3s4, onFrame, $completion) {
    var tmp = new $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function doAnimationFrameWithScale(_this__u8e3s4, frameTimeNanos, durationScale, anim, state, block) {
    var tmp;
    if (durationScale === 0.0) {
      tmp = anim.get_durationNanos_ub5cy_k$();
    } else {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = frameTimeNanos.minus_mfbszm_k$(_this__u8e3s4.get_startTimeNanos_ru5em1_k$()).toFloat_jhbgwv_k$() / durationScale;
      tmp = numberToLong(tmp$ret$0);
    }
    var playTimeNanos = tmp;
    doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block);
  }
  function doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block) {
    _this__u8e3s4.set_lastFrameTimeNanos_lyzzef_k$(frameTimeNanos);
    _this__u8e3s4.set_value_w62xiq_k$(anim.getValueFromNanos_i31vd8_k$(playTimeNanos));
    _this__u8e3s4.set_velocityVector_tj9mci_k$(anim.getVelocityVectorFromNanos_jouakx_k$(playTimeNanos));
    var isLastFrame = anim.isFinishedFromNanos_c31w39_k$(playTimeNanos);
    if (isLastFrame) {
      _this__u8e3s4.set_finishedTimeNanos_76k3z2_k$(_this__u8e3s4.get_lastFrameTimeNanos_3aprno_k$());
      _this__u8e3s4.set_isRunning_o0rkdc_k$(false);
    }
    updateState(_this__u8e3s4, state);
    block(_this__u8e3s4);
  }
  function animateDecay(_this__u8e3s4, animationSpec, sequentialAnimation, block, $completion) {
    sequentialAnimation = sequentialAnimation === VOID ? false : sequentialAnimation;
    var tmp;
    if (block === VOID) {
      tmp = animateDecay$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp0_initialValue = _this__u8e3s4.get_value_j01efc_k$();
    var tmp1_initialVelocityVector = _this__u8e3s4.get_velocityVector_v3jmo9_k$();
    var tmp2_typeConverter = _this__u8e3s4.get_typeConverter_seyvfn_k$();
    var anim = DecayAnimation_init_$Create$(animationSpec, tmp2_typeConverter, tmp0_initialValue, tmp1_initialVelocityVector);
    return animate(_this__u8e3s4, anim, sequentialAnimation ? _this__u8e3s4.get_lastFrameTimeNanos_3aprno_k$() : new Long(0, -2147483648), block, $completion);
  }
  function animate_0(initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    return animate_1(get_VectorConverter(FloatCompanionObject_getInstance()), initialValue, targetValue, initialVelocity, animationSpec, block, $completion);
  }
  function animate_1(typeConverter, initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? null : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    var tmp;
    if (initialVelocity == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.animation.core.animate.<anonymous>' call
      tmp = typeConverter.get_convertToVector_s594l4_k$()(initialVelocity);
    }
    var tmp1_elvis_lhs = tmp;
    var initialVelocityVector = tmp1_elvis_lhs == null ? newInstance(typeConverter.get_convertToVector_s594l4_k$()(initialValue)) : tmp1_elvis_lhs;
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector);
    var tmp_0 = new AnimationState(typeConverter, initialValue, initialVelocityVector);
    return animate(tmp_0, anim, VOID, animate$lambda_3(block, typeConverter), $completion);
  }
  function animateTo$lambda($this$null) {
    return Unit_getInstance();
  }
  function animate$lambda($this$null) {
    return Unit_getInstance();
  }
  function animate$lambda$lambda($this_animate) {
    return function () {
      $this_animate.set_isRunning_o0rkdc_k$(false);
      return Unit_getInstance();
    };
  }
  function animate$lambda_0($lateInitScope, $initialValue, $animation, $initialVelocityVector, $durationScale, $this_animate, $block) {
    return function (it) {
      var tmp = $animation.get_typeConverter_seyvfn_k$();
      var tmp_0 = $animation.get_targetValue_kq6mfd_k$();
      // Inline function 'kotlin.apply' call
      var this_0 = new AnimationScope($initialValue, tmp, $initialVelocityVector, it, tmp_0, it, true, animate$lambda$lambda($this_animate));
      // Inline function 'androidx.compose.animation.core.animate.<anonymous>.<anonymous>' call
      doAnimationFrameWithScale(this_0, it, $durationScale, $animation, $this_animate, $block);
      $lateInitScope._v = this_0;
      return Unit_getInstance();
    };
  }
  function animate$lambda_1($this_animate) {
    return function () {
      $this_animate.set_isRunning_o0rkdc_k$(false);
      return Unit_getInstance();
    };
  }
  function animate$lambda_2($lateInitScope, $durationScale, $animation, $this_animate, $block) {
    return function (it) {
      doAnimationFrameWithScale(ensureNotNull($lateInitScope._v), it, $durationScale, $animation, $this_animate, $block);
      return Unit_getInstance();
    };
  }
  function callWithFrameNanos$lambda($onFrame) {
    return function (it) {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = it.div_jun7gj_k$(toLong(1));
      return $onFrame(tmp$ret$0);
    };
  }
  function animateDecay$lambda($this$null) {
    return Unit_getInstance();
  }
  function animate$lambda_3($block, $typeConverter) {
    return function ($this$animate) {
      $block($this$animate.get_value_j01efc_k$(), $typeConverter.get_convertFromVector_kmewon_k$()($this$animate.get_velocityVector_v3jmo9_k$()));
      return Unit_getInstance();
    };
  }
  function $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.animation_1 = animation;
    this.startTimeNanos_1 = startTimeNanos;
    this.block_1 = block;
  }
  protoOf($animateCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(7);
            this.initialValue0__1 = this.animation_1.getValueFromNanos_i31vd8_k$(new Long(0, 0));
            this.initialVelocityVector1__1 = this.animation_1.getVelocityVectorFromNanos_jouakx_k$(new Long(0, 0));
            this.lateInitScope2__1 = {_v: null};
            this.set_exceptionState_fex74n_k$(6);
            if (this.startTimeNanos_1.equals(new Long(0, -2147483648))) {
              var tmp_0 = this;
              tmp_0.durationScale3__1 = get_durationScale(this.get_context_h02k06_k$());
              this.set_state_rjd8d0_k$(1);
              suspendResult = callWithFrameNanos(this.animation_1, animate$lambda_0(this.lateInitScope2__1, this.initialValue0__1, this.animation_1, this.initialVelocityVector1__1, this.durationScale3__1, this._this__u8e3s4__1, this.block_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.animation_1.get_typeConverter_seyvfn_k$();
              var tmp_2 = this.animation_1.get_targetValue_kq6mfd_k$();
              var this_0 = new AnimationScope(this.initialValue0__1, tmp_1, this.initialVelocityVector1__1, this.startTimeNanos_1, tmp_2, this.startTimeNanos_1, true, animate$lambda_1(this._this__u8e3s4__1));
              doAnimationFrameWithScale(this_0, this.startTimeNanos_1, get_durationScale(this.get_context_h02k06_k$()), this.animation_1, this._this__u8e3s4__1, this.block_1);
              this.lateInitScope2__1._v = this_0;
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            if (!ensureNotNull(this.lateInitScope2__1._v).get_isRunning_okmtn0_k$()) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

            var tmp_3 = this;
            tmp_3.durationScale4__1 = get_durationScale(this.get_context_h02k06_k$());
            this.set_state_rjd8d0_k$(4);
            suspendResult = callWithFrameNanos(this.animation_1, animate$lambda_2(this.lateInitScope2__1, this.durationScale4__1, this.animation_1, this._this__u8e3s4__1, this.block_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 5:
            this.set_exceptionState_fex74n_k$(7);
            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 6:
            this.set_exceptionState_fex74n_k$(7);
            var tmp_4 = this.get_exception_x0n6w6_k$();
            if (tmp_4 instanceof CancellationException) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp0_safe_receiver = this.lateInitScope2__1._v;
              if (tmp0_safe_receiver != null) {
                tmp0_safe_receiver.set_isRunning_o0rkdc_k$(false);
              }
              var tmp1_safe_receiver = this.lateInitScope2__1._v;
              if (equals(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_lastFrameTimeNanos_3aprno_k$(), this._this__u8e3s4__1.get_lastFrameTimeNanos_3aprno_k$())) {
                this._this__u8e3s4__1.set_isRunning_o0rkdc_k$(false);
              }
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 7:
            throw this.get_exception_x0n6w6_k$();
          case 8:
            this.set_exceptionState_fex74n_k$(7);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.onFrame_1 = onFrame;
  }
  protoOf($callWithFrameNanosCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            if (this._this__u8e3s4__1.get_isInfinite_uffwnt_k$()) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = withInfiniteAnimationFrameNanos(this.onFrame_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              suspendResult = withFrameNanos(callWithFrameNanos$lambda(this.onFrame_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.WHEN_RESULT0__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function get_SeekableTransitionStateTotalDurationChanged() {
    _init_properties_Transition_kt__s6zoln();
    return SeekableTransitionStateTotalDurationChanged;
  }
  var SeekableTransitionStateTotalDurationChanged;
  function get_SeekableStateObserver() {
    _init_properties_Transition_kt__s6zoln();
    var tmp0 = SeekableStateObserver$delegate;
    // Inline function 'kotlin.getValue' call
    SeekableStateObserver$factory();
    return tmp0.get_value_j01efc_k$();
  }
  var SeekableStateObserver$delegate;
  function SeekableTransitionState$seekTo$slambda$slambda$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = runAnimations(this.this$0__1, this);
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
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new SeekableTransitionState$seekTo$slambda$slambda$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function SeekableTransitionState$seekTo$slambda$slambda$slambda_0(this$0, resultContinuation) {
    var i = new SeekableTransitionState$seekTo$slambda$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SeekableTransitionState$seekTo$slambda$slambda($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation) {
    this.$targetState_1 = $targetState;
    this.$oldTargetState_1 = $oldTargetState;
    this.this$0__1 = this$0;
    this.$transition_1 = $transition;
    this.$fraction_1 = $fraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).invoke_d9fzmj_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            if (!equals(this.$targetState_1, this.$oldTargetState_1)) {
              moveAnimationToInitialState(this.this$0__1);
            } else {
              this.this$0__1.currentAnimation_1 = null;
              if (equals(this.this$0__1.get_currentState_snihnl_k$(), this.$targetState_1)) {
                return Unit_getInstance();
              }
            }

            if (!equals(this.$targetState_1, this.$oldTargetState_1)) {
              this.$transition_1.updateTarget_9b8tjr_k$(this.$targetState_1);
              this.$transition_1.set_playTimeNanos_8390lf_k$(new Long(0, 0));
              this.this$0__1.set_targetState_ob8bls_k$(this.$targetState_1);
              this.$transition_1.resetAnimationFraction_ecgbkk_k$(this.$fraction_1);
            }

            _set_fraction__t78qnf(this.this$0__1, this.$fraction_1);
            if (this.this$0__1.initialValueAnimations_1.isNotEmpty_cjxbwk_k$()) {
              launch(this.$this$coroutineScope_1, VOID, VOID, SeekableTransitionState$seekTo$slambda$slambda$slambda_0(this.this$0__1, null));
            } else {
              this.this$0__1.lastFrameTimeNanos_1 = new Long(0, -2147483648);
            }

            this.set_state_rjd8d0_k$(1);
            suspendResult = waitForCompositionAfterTargetStateChange(this.this$0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            seekToFraction(this.this$0__1);
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
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new SeekableTransitionState$seekTo$slambda$slambda(this.$targetState_1, this.$oldTargetState_1, this.this$0__1, this.$transition_1, this.$fraction_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function SeekableTransitionState$seekTo$slambda$slambda_0($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation) {
    var i = new SeekableTransitionState$seekTo$slambda$slambda($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_d9fzmj_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SeekableTransitionState$animateTo$slambda$slambda(this$0, $targetState, $transition, $animationSpec, resultContinuation) {
    this.this$0__1 = this$0;
    this.$targetState_1 = $targetState;
    this.$transition_1 = $transition;
    this.$animationSpec_1 = $animationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).invoke_d9fzmj_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(8);
            this.oldTargetState0__1 = this.this$0__1.get_targetState_kri3mx_k$();
            if (!equals(this.$targetState_1, this.oldTargetState0__1)) {
              moveAnimationToInitialState(this.this$0__1);
              _set_fraction__t78qnf(this.this$0__1, 0.0);
              this.$transition_1.updateTarget_9b8tjr_k$(this.$targetState_1);
              this.$transition_1.set_playTimeNanos_8390lf_k$(new Long(0, 0));
              this.this$0__1.set_currentState_6uk70u_k$(this.oldTargetState0__1);
              this.this$0__1.set_targetState_ob8bls_k$(this.$targetState_1);
            }

            var tmp_0 = this;
            tmp_0.tmp01__1 = this.this$0__1.compositionContinuationMutex_1;
            this.this2__1 = this.tmp01__1;
            var tmp_1 = this;
            tmp_1.owner3__1 = null;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this2__1.lock_ugrcvf_k$(this.owner3__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_2 = this;
            var tmp$ret$0 = Unit_getInstance();
            l$ret$1: do {
              var tmp_3;
              try {
                tmp$ret$0 = this.this$0__1.composedTargetState_1;
                break l$ret$1;
              } catch ($p) {
                var tmp_4;
                var t = $p;
                this.this2__1.unlock_ulcrcl_k$(this.owner3__1);
                throw t;
              }
            }
             while (false);
            var tmp_5 = tmp$ret$0;
            this.this2__1.unlock_ulcrcl_k$(this.owner3__1);
            tmp_2.composedTargetState4__1 = tmp_5;
            if (!equals(this.$targetState_1, this.composedTargetState4__1)) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = doOneFrame(this.this$0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 2:
            this.set_state_rjd8d0_k$(3);
            suspendResult = waitForCompositionAfterTargetStateChange(this.this$0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            if (!equals(this.this$0__1.get_currentState_snihnl_k$(), this.$targetState_1)) {
              if (this.this$0__1.get_fraction_bvkonf_k$() < 1.0) {
                var runningAnimation = this.this$0__1.currentAnimation_1;
                var tmp0_safe_receiver = this.$animationSpec_1;
                var newSpec = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.vectorize_pto10n_k$(get_VectorConverter(FloatCompanionObject_getInstance()));
                if (runningAnimation == null || !equals(newSpec, runningAnimation.animationSpec_1)) {
                  var oldSpec = runningAnimation == null ? null : runningAnimation.animationSpec_1;
                  var oldVelocity;
                  if (!(oldSpec == null)) {
                    var tmp_6 = runningAnimation.progressNanos_1;
                    var tmp_7 = runningAnimation.start_1;
                    var tmp_8 = Companion_getInstance_11().Target1__1;
                    var tmp2_elvis_lhs = runningAnimation.initialVelocity_1;
                    oldVelocity = oldSpec.getVelocityFromNanos_wafrjo_k$(tmp_6, tmp_7, tmp_8, tmp2_elvis_lhs == null ? Companion_getInstance_11().ZeroVelocity_1 : tmp2_elvis_lhs);
                  } else if (runningAnimation == null || runningAnimation.progressNanos_1.equals(new Long(0, 0))) {
                    oldVelocity = Companion_getInstance_11().ZeroVelocity_1;
                  } else {
                    var oldDurationNanos = runningAnimation.durationNanos_1;
                    var tmp_9;
                    if (oldDurationNanos.equals(new Long(0, -2147483648))) {
                      tmp_9 = this.this$0__1.totalDurationNanos_1;
                    } else {
                      tmp_9 = oldDurationNanos;
                    }
                    var tmp2 = tmp_9;
                    var other = 1000.0 * (new Long(1000000, 0)).toFloat_jhbgwv_k$();
                    var oldDuration = tmp2.toFloat_jhbgwv_k$() / other;
                    if (oldDuration <= (new Long(0, 0)).toFloat_jhbgwv_k$()) {
                      oldVelocity = Companion_getInstance_11().ZeroVelocity_1;
                    } else {
                      oldVelocity = new AnimationVector1D(1.0 / oldDuration);
                    }
                  }
                  var newAnimation = runningAnimation == null ? new SeekingAnimationState() : runningAnimation;
                  newAnimation.animationSpec_1 = newSpec;
                  newAnimation.isComplete_1 = false;
                  newAnimation.value_1 = this.this$0__1.get_fraction_bvkonf_k$();
                  newAnimation.start_1.set_ln2e3z_k$(0, this.this$0__1.get_fraction_bvkonf_k$());
                  newAnimation.durationNanos_1 = this.this$0__1.totalDurationNanos_1;
                  newAnimation.progressNanos_1 = new Long(0, 0);
                  newAnimation.initialVelocity_1 = oldVelocity;
                  var tmp_10 = newAnimation;
                  var tmp5_elvis_lhs = newSpec == null ? null : newSpec.getDurationNanos_c9o343_k$(newAnimation.start_1, Companion_getInstance_11().Target1__1, oldVelocity);
                  var tmp_11;
                  if (tmp5_elvis_lhs == null) {
                    var tmp4 = this.this$0__1.totalDurationNanos_1;
                    var other_0 = 1.0 - this.this$0__1.get_fraction_bvkonf_k$();
                    tmp_11 = roundToLong(tmp4.toDouble_ygsx0s_k$() * other_0);
                  } else {
                    tmp_11 = tmp5_elvis_lhs;
                  }
                  tmp_10.animationSpecDuration_1 = tmp_11;
                  this.this$0__1.currentAnimation_1 = newAnimation;
                }
              }
              this.set_state_rjd8d0_k$(5);
              suspendResult = runAnimations(this.this$0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            }

          case 5:
            this.this$0__1.set_currentState_6uk70u_k$(this.$targetState_1);
            this.set_state_rjd8d0_k$(6);
            suspendResult = waitForComposition(this.this$0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            _set_fraction__t78qnf(this.this$0__1, 0.0);
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 7:
            return Unit_getInstance();
          case 8:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new SeekableTransitionState$animateTo$slambda$slambda(this.this$0__1, this.$targetState_1, this.$transition_1, this.$animationSpec_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function SeekableTransitionState$animateTo$slambda$slambda_0(this$0, $targetState, $transition, $animationSpec, resultContinuation) {
    var i = new SeekableTransitionState$animateTo$slambda$slambda(this$0, $targetState, $transition, $animationSpec, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_d9fzmj_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_transition__nbji02($this, _set____db54di) {
    $this.transition_1 = _set____db54di;
  }
  function _get_transition__89awuu($this) {
    return $this.transition_1;
  }
  function _get_recalculateTotalDurationNanos__56b5s9($this) {
    return $this.recalculateTotalDurationNanos_1;
  }
  function _set_fraction__t78qnf($this, _set____db54di) {
    var tmp0 = $this.fraction$delegate_1;
    fraction$factory();
    tmp0.set_floatValue_qaujgq_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_mutatorMutex__pkek4u_0($this) {
    return $this.mutatorMutex_1;
  }
  function _set_lastFrameTimeNanos__ig3c90($this, _set____db54di) {
    $this.lastFrameTimeNanos_1 = _set____db54di;
  }
  function _get_lastFrameTimeNanos__in5els($this) {
    return $this.lastFrameTimeNanos_1;
  }
  function _get_initialValueAnimations__wwtj8v($this) {
    return $this.initialValueAnimations_1;
  }
  function _set_currentAnimation__rj44pg($this, _set____db54di) {
    $this.currentAnimation_1 = _set____db54di;
  }
  function _get_currentAnimation__1k04dc($this) {
    return $this.currentAnimation_1;
  }
  function _get_firstFrameLambda__sbmf0n($this) {
    return $this.firstFrameLambda_1;
  }
  function _set_durationScale__j18wrz($this, _set____db54di) {
    $this.durationScale_1 = _set____db54di;
  }
  function _get_durationScale__3the9n($this) {
    return $this.durationScale_1;
  }
  function _get_animateOneFrameLambda__81jhzy($this) {
    return $this.animateOneFrameLambda_1;
  }
  function endAllAnimations($this) {
    var tmp0_safe_receiver = $this.transition_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.clearInitialAnimations_yfnnil_k$();
    }
    $this.initialValueAnimations_1.clear_j9egeb_k$();
    var current = $this.currentAnimation_1;
    if (!(current == null)) {
      $this.currentAnimation_1 = null;
      _set_fraction__t78qnf($this, 1.0);
      seekToFraction($this);
    }
  }
  function runAnimations($this, $completion) {
    var tmp = new $runAnimationsCOROUTINE$3($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function doOneFrame($this, $completion) {
    var tmp = new $doOneFrameCOROUTINE$4($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function animateOneFrame($this, $completion) {
    var tmp = new $animateOneFrameCOROUTINE$5($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function recalculateAnimationValue($this, animation, deltaPlayTimeNanos) {
    var playTimeNanos = animation.progressNanos_1.plus_r93sks_k$(deltaPlayTimeNanos);
    animation.progressNanos_1 = playTimeNanos;
    var durationNanos = animation.animationSpecDuration_1;
    if (playTimeNanos.compareTo_9jj042_k$(durationNanos) >= 0) {
      animation.value_1 = 1.0;
    } else {
      var animationSpec = animation.animationSpec_1;
      if (!(animationSpec == null)) {
        var tmp = animation;
        var tmp_0 = animation.start_1;
        var tmp_1 = Companion_getInstance_11().Target1__1;
        var tmp0_elvis_lhs = animation.initialVelocity_1;
        tmp.value_1 = coerceIn(animationSpec.getValueFromNanos_xg3j38_k$(playTimeNanos, tmp_0, tmp_1, tmp0_elvis_lhs == null ? Companion_getInstance_11().ZeroVelocity_1 : tmp0_elvis_lhs).get_jz2icb_k$(0), 0.0, 1.0);
      } else {
        animation.value_1 = lerp(animation.start_1.get_jz2icb_k$(0), 1.0, playTimeNanos.toFloat_jhbgwv_k$() / durationNanos.toFloat_jhbgwv_k$());
      }
    }
  }
  function waitForCompositionAfterTargetStateChange($this, $completion) {
    var tmp = new $waitForCompositionAfterTargetStateChangeCOROUTINE$6($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function waitForComposition($this, $completion) {
    var tmp = new $waitForCompositionCOROUTINE$7($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function moveAnimationToInitialState($this) {
    var tmp0_elvis_lhs = $this.transition_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    var tmp1_elvis_lhs = $this.currentAnimation_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp_1;
      if ($this.totalDurationNanos_1.compareTo_9jj042_k$(new Long(0, 0)) <= 0 || $this.get_fraction_bvkonf_k$() === 1.0 || equals($this.get_currentState_snihnl_k$(), $this.get_targetState_kri3mx_k$())) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.also' call
        var this_0 = new SeekingAnimationState();
        // Inline function 'androidx.compose.animation.core.SeekableTransitionState.moveAnimationToInitialState.<anonymous>' call
        this_0.value_1 = $this.get_fraction_bvkonf_k$();
        var totalDurationNanos = $this.totalDurationNanos_1;
        this_0.durationNanos_1 = totalDurationNanos;
        var tmp_2 = this_0;
        // Inline function 'kotlin.Long.times' call
        var other = 1.0 - $this.get_fraction_bvkonf_k$();
        var tmp$ret$0 = totalDurationNanos.toDouble_ygsx0s_k$() * other;
        tmp_2.animationSpecDuration_1 = roundToLong(tmp$ret$0);
        this_0.start_1.set_ln2e3z_k$(0, $this.get_fraction_bvkonf_k$());
        tmp_1 = this_0;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var animation = tmp_0;
    if (!(animation == null)) {
      animation.durationNanos_1 = $this.totalDurationNanos_1;
      // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
      $this.initialValueAnimations_1.add_utx5q5_k$(animation);
      transition.setInitialAnimations_5bv565_k$(animation);
    }
    $this.currentAnimation_1 = null;
  }
  function seekToFraction($this) {
    var tmp0_elvis_lhs = $this.transition_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    var playTimeNanos = roundToLong($this.get_fraction_bvkonf_k$() * transition.get_totalDurationNanos_cuj0z4_k$().toDouble_ygsx0s_k$());
    transition.seekAnimations_edwrve_k$(playTimeNanos);
  }
  function SeekingAnimationState() {
    this.progressNanos_1 = new Long(0, 0);
    this.animationSpec_1 = null;
    this.isComplete_1 = false;
    this.value_1 = 0.0;
    this.start_1 = new AnimationVector1D(0.0);
    this.initialVelocity_1 = null;
    this.durationNanos_1 = new Long(0, 0);
    this.animationSpecDuration_1 = new Long(0, 0);
  }
  protoOf(SeekingAnimationState).set_progressNanos_5yzx9z_k$ = function (_set____db54di) {
    this.progressNanos_1 = _set____db54di;
  };
  protoOf(SeekingAnimationState).get_progressNanos_bfnnc9_k$ = function () {
    return this.progressNanos_1;
  };
  protoOf(SeekingAnimationState).set_animationSpec_exomeb_k$ = function (_set____db54di) {
    this.animationSpec_1 = _set____db54di;
  };
  protoOf(SeekingAnimationState).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(SeekingAnimationState).set_isComplete_rklhgr_k$ = function (_set____db54di) {
    this.isComplete_1 = _set____db54di;
  };
  protoOf(SeekingAnimationState).get_isComplete_rto93g_k$ = function () {
    return this.isComplete_1;
  };
  protoOf(SeekingAnimationState).set_value_bgphas_k$ = function (_set____db54di) {
    this.value_1 = _set____db54di;
  };
  protoOf(SeekingAnimationState).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(SeekingAnimationState).set_start_epzbpr_k$ = function (_set____db54di) {
    this.start_1 = _set____db54di;
  };
  protoOf(SeekingAnimationState).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(SeekingAnimationState).set_initialVelocity_qhj9ub_k$ = function (_set____db54di) {
    this.initialVelocity_1 = _set____db54di;
  };
  protoOf(SeekingAnimationState).get_initialVelocity_xnobx4_k$ = function () {
    return this.initialVelocity_1;
  };
  protoOf(SeekingAnimationState).set_durationNanos_pe7f4_k$ = function (_set____db54di) {
    this.durationNanos_1 = _set____db54di;
  };
  protoOf(SeekingAnimationState).get_durationNanos_ub5cy_k$ = function () {
    return this.durationNanos_1;
  };
  protoOf(SeekingAnimationState).set_animationSpecDuration_1x4oa0_k$ = function (_set____db54di) {
    this.animationSpecDuration_1 = _set____db54di;
  };
  protoOf(SeekingAnimationState).get_animationSpecDuration_wef4ru_k$ = function () {
    return this.animationSpecDuration_1;
  };
  protoOf(SeekingAnimationState).toString = function () {
    return 'progress nanos: ' + this.progressNanos_1.toString() + ', animationSpec: ' + toString_0(this.animationSpec_1) + ',' + (' isComplete: ' + this.isComplete_1 + ', value: ' + this.value_1 + ', start: ' + this.start_1.toString() + ',') + (' initialVelocity: ' + toString_0(this.initialVelocity_1) + ', durationNanos: ' + this.durationNanos_1.toString() + ',') + (' animationSpecDuration: ' + this.animationSpecDuration_1.toString());
  };
  function Companion_2() {
    Companion_instance_2 = this;
    this.ZeroVelocity_1 = new AnimationVector1D(0.0);
    this.Target1__1 = new AnimationVector1D(1.0);
  }
  protoOf(Companion_2).get_ZeroVelocity_6sppn2_k$ = function () {
    return this.ZeroVelocity_1;
  };
  protoOf(Companion_2).get_Target1_3csmgn_k$ = function () {
    return this.Target1__1;
  };
  var Companion_instance_2;
  function Companion_getInstance_11() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function SeekableTransitionState$recalculateTotalDurationNanos$lambda(this$0) {
    return function () {
      var tmp = this$0;
      var tmp0_safe_receiver = this$0.transition_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_totalDurationNanos_cuj0z4_k$();
      tmp.totalDurationNanos_1 = tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs;
      return Unit_getInstance();
    };
  }
  function SeekableTransitionState$firstFrameLambda$lambda(this$0) {
    return function (frameTimeNanos) {
      this$0.lastFrameTimeNanos_1 = frameTimeNanos;
      return Unit_getInstance();
    };
  }
  function SeekableTransitionState$animateOneFrameLambda$lambda(this$0) {
    return function (frameTimeNanos) {
      var delta = frameTimeNanos.minus_mfbszm_k$(this$0.lastFrameTimeNanos_1);
      this$0.lastFrameTimeNanos_1 = frameTimeNanos;
      // Inline function 'kotlin.Long.div' call
      var other = this$0.durationScale_1;
      var tmp$ret$0 = delta.toDouble_ygsx0s_k$() / other;
      var deltaPlayTimeNanos = roundToLong(tmp$ret$0);
      var tmp;
      if (this$0.initialValueAnimations_1.isNotEmpty_cjxbwk_k$()) {
        // Inline function 'androidx.collection.ObjectList.forEach' call
        var this_0 = this$0.initialValueAnimations_1;
        // Inline function 'kotlin.contracts.contract' call
        var content = this_0.get_content_d75s1t_k$();
        var inductionVariable = 0;
        var last = this_0.get__size_2j67yy_k$();
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp_0 = content[i];
            // Inline function 'androidx.compose.animation.core.SeekableTransitionState.animateOneFrameLambda.<anonymous>.<anonymous>' call
            var animation = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
            recalculateAnimationValue(this$0, animation, deltaPlayTimeNanos);
            animation.isComplete_1 = true;
          }
           while (inductionVariable < last);
        var tmp0_safe_receiver = this$0.transition_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.updateInitialValues_c25wra_k$();
        }
        var this_1 = this$0.initialValueAnimations_1;
        var gap = 0;
        var size = this_1.get__size_2j67yy_k$();
        var content_0 = this_1.get_content_d75s1t_k$();
        // Inline function 'androidx.collection.ObjectList.indices' call
        var progression = until(0, this_1.get__size_2j67yy_k$());
        var inductionVariable_0 = progression.get_first_irdx8n_k$();
        var last_0 = progression.get_last_wopotb_k$();
        if (inductionVariable_0 <= last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            content_0[i_0 - gap | 0] = content_0[i_0];
            var tmp_1 = content_0[i_0];
            // Inline function 'androidx.compose.animation.core.SeekableTransitionState.animateOneFrameLambda.<anonymous>.<anonymous>' call
            if (((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE()).isComplete_1) {
              gap = gap + 1 | 0;
            }
          }
           while (!(i_0 === last_0));
        fill(content_0, null, size - gap | 0, size);
        this_1.set__size_6st5w6_k$(this_1.get__size_2j67yy_k$() - gap | 0);
        tmp = Unit_getInstance();
      }
      var currentAnimation = this$0.currentAnimation_1;
      var tmp_2;
      if (!(currentAnimation == null)) {
        currentAnimation.durationNanos_1 = this$0.totalDurationNanos_1;
        recalculateAnimationValue(this$0, currentAnimation, deltaPlayTimeNanos);
        _set_fraction__t78qnf(this$0, currentAnimation.value_1);
        if (currentAnimation.value_1 === 1.0) {
          this$0.currentAnimation_1 = null;
        }
        seekToFraction(this$0);
        tmp_2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SeekableTransitionState$snapTo$slambda(this$0, $targetState, $transition, resultContinuation) {
    this.this$0__1 = this$0;
    this.$targetState_1 = $targetState;
    this.$transition_1 = $transition;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$snapTo$slambda).invoke_h7udsx_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SeekableTransitionState$snapTo$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_h7udsx_k$($completion);
  };
  protoOf(SeekableTransitionState$snapTo$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            endAllAnimations(this.this$0__1);
            this.this$0__1.lastFrameTimeNanos_1 = new Long(0, -2147483648);
            _set_fraction__t78qnf(this.this$0__1, 0.0);
            var tmp_0 = this;
            var tmp0_subject = this.$targetState_1;
            tmp_0.fraction0__1 = equals(tmp0_subject, this.this$0__1.get_currentState_snihnl_k$()) ? -4.0 : equals(tmp0_subject, this.this$0__1.get_targetState_kri3mx_k$()) ? -5.0 : -3.0;
            this.$transition_1.updateTarget_9b8tjr_k$(this.$targetState_1);
            this.$transition_1.set_playTimeNanos_8390lf_k$(new Long(0, 0));
            this.this$0__1.set_targetState_ob8bls_k$(this.$targetState_1);
            _set_fraction__t78qnf(this.this$0__1, 0.0);
            this.this$0__1.set_currentState_6uk70u_k$(this.$targetState_1);
            this.$transition_1.resetAnimationFraction_ecgbkk_k$(this.fraction0__1);
            if (this.fraction0__1 === -3.0) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = waitForCompositionAfterTargetStateChange(this.this$0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.$transition_1.onTransitionEnd_hbma8k_k$();
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(SeekableTransitionState$snapTo$slambda).create_d196fn_k$ = function (completion) {
    return new SeekableTransitionState$snapTo$slambda(this.this$0__1, this.$targetState_1, this.$transition_1, completion);
  };
  function SeekableTransitionState$snapTo$slambda_0(this$0, $targetState, $transition, resultContinuation) {
    var i = new SeekableTransitionState$snapTo$slambda(this$0, $targetState, $transition, resultContinuation);
    var l = function ($completion) {
      return i.invoke_h7udsx_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function SeekableTransitionState$seekTo$slambda($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation) {
    this.$targetState_1 = $targetState;
    this.$oldTargetState_1 = $oldTargetState;
    this.this$0__1 = this$0;
    this.$transition_1 = $transition;
    this.$fraction_1 = $fraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$seekTo$slambda).invoke_h7udsx_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SeekableTransitionState$seekTo$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_h7udsx_k$($completion);
  };
  protoOf(SeekableTransitionState$seekTo$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = coroutineScope(SeekableTransitionState$seekTo$slambda$slambda_0(this.$targetState_1, this.$oldTargetState_1, this.this$0__1, this.$transition_1, this.$fraction_1, null), this);
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
  protoOf(SeekableTransitionState$seekTo$slambda).create_d196fn_k$ = function (completion) {
    return new SeekableTransitionState$seekTo$slambda(this.$targetState_1, this.$oldTargetState_1, this.this$0__1, this.$transition_1, this.$fraction_1, completion);
  };
  function SeekableTransitionState$seekTo$slambda_0($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation) {
    var i = new SeekableTransitionState$seekTo$slambda($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation);
    var l = function ($completion) {
      return i.invoke_h7udsx_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function SeekableTransitionState$animateTo$slambda($transition, this$0, $targetState, $animationSpec, resultContinuation) {
    this.$transition_1 = $transition;
    this.this$0__1 = this$0;
    this.$targetState_1 = $targetState;
    this.$animationSpec_1 = $animationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$animateTo$slambda).invoke_h7udsx_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SeekableTransitionState$animateTo$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_h7udsx_k$($completion);
  };
  protoOf(SeekableTransitionState$animateTo$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = coroutineScope(SeekableTransitionState$animateTo$slambda$slambda_0(this.this$0__1, this.$targetState_1, this.$transition_1, this.$animationSpec_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.$transition_1.onTransitionEnd_hbma8k_k$();
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
  protoOf(SeekableTransitionState$animateTo$slambda).create_d196fn_k$ = function (completion) {
    return new SeekableTransitionState$animateTo$slambda(this.$transition_1, this.this$0__1, this.$targetState_1, this.$animationSpec_1, completion);
  };
  function SeekableTransitionState$animateTo$slambda_0($transition, this$0, $targetState, $animationSpec, resultContinuation) {
    var i = new SeekableTransitionState$animateTo$slambda($transition, this$0, $targetState, $animationSpec, resultContinuation);
    var l = function ($completion) {
      return i.invoke_h7udsx_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $runAnimationsCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($runAnimationsCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            if (this._this__u8e3s4__1.initialValueAnimations_1.isEmpty_y1axqb_k$() && this._this__u8e3s4__1.currentAnimation_1 == null) {
              return Unit_getInstance();
            }

            if (get_durationScale(this.get_context_h02k06_k$()) === 0.0) {
              endAllAnimations(this._this__u8e3s4__1);
              this._this__u8e3s4__1.lastFrameTimeNanos_1 = new Long(0, -2147483648);
              return Unit_getInstance();
            }

            if (this._this__u8e3s4__1.lastFrameTimeNanos_1.equals(new Long(0, -2147483648))) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = withFrameNanos(this._this__u8e3s4__1.firstFrameLambda_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            if (!(this._this__u8e3s4__1.initialValueAnimations_1.isNotEmpty_cjxbwk_k$() || !(this._this__u8e3s4__1.currentAnimation_1 == null))) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(4);
            suspendResult = animateOneFrame(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 5:
            this._this__u8e3s4__1.lastFrameTimeNanos_1 = new Long(0, -2147483648);
            return Unit_getInstance();
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $doOneFrameCOROUTINE$4(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($doOneFrameCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            if (this._this__u8e3s4__1.lastFrameTimeNanos_1.equals(new Long(0, -2147483648))) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = withFrameNanos(this._this__u8e3s4__1.firstFrameLambda_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              suspendResult = animateOneFrame(this._this__u8e3s4__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $animateOneFrameCOROUTINE$5(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($animateOneFrameCOROUTINE$5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this;
            tmp_0.durationScale0__1 = get_durationScale(this.get_context_h02k06_k$());
            if (this.durationScale0__1 <= 0.0) {
              endAllAnimations(this._this__u8e3s4__1);
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            } else {
              this._this__u8e3s4__1.durationScale_1 = this.durationScale0__1;
              this.set_state_rjd8d0_k$(1);
              suspendResult = withFrameNanos(this._this__u8e3s4__1.animateOneFrameLambda_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $waitForCompositionAfterTargetStateChangeCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($waitForCompositionAfterTargetStateChangeCOROUTINE$6).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.expectedState0__1 = this._this__u8e3s4__1.get_targetState_kri3mx_k$();
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.compositionContinuationMutex_1.lock$default_5k4zpp_k$(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (equals(this.expectedState0__1, this._this__u8e3s4__1.composedTargetState_1)) {
              this._this__u8e3s4__1.compositionContinuationMutex_1.unlock$default_in3xrb_k$();
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
              cancellable.initCancellability_shqc60_k$();
              this._this__u8e3s4__1.compositionContinuation_1 = cancellable;
              this._this__u8e3s4__1.compositionContinuationMutex_1.unlock$default_in3xrb_k$();
              suspendResult = returnIfSuspended(cancellable.getResult_fck196_k$(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            var state = suspendResult;
            if (!equals(state, this.expectedState0__1)) {
              this._this__u8e3s4__1.lastFrameTimeNanos_1 = new Long(0, -2147483648);
              throw CancellationException_init_$Create$('snapTo() was canceled because state was changed to ' + (toString_0(state) + ' instead of ' + toString_0(this.expectedState0__1)));
            }

            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $waitForCompositionCOROUTINE$7(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($waitForCompositionCOROUTINE$7).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.expectedState0__1 = this._this__u8e3s4__1.get_targetState_kri3mx_k$();
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.compositionContinuationMutex_1.lock$default_5k4zpp_k$(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.initCancellability_shqc60_k$();
            this._this__u8e3s4__1.compositionContinuation_1 = cancellable;
            this._this__u8e3s4__1.compositionContinuationMutex_1.unlock$default_in3xrb_k$();
            suspendResult = returnIfSuspended(cancellable.getResult_fck196_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var state = suspendResult;
            if (!equals(state, this.expectedState0__1)) {
              this._this__u8e3s4__1.lastFrameTimeNanos_1 = new Long(0, -2147483648);
              throw CancellationException_init_$Create$('targetState while waiting for composition');
            }

            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function SeekableTransitionState(initialState) {
    Companion_getInstance_11();
    TransitionState.call(this);
    this.targetState$delegate_1 = mutableStateOf(initialState);
    this.currentState$delegate_1 = mutableStateOf(initialState);
    this.composedTargetState_1 = initialState;
    this.transition_1 = null;
    this.totalDurationNanos_1 = new Long(0, 0);
    var tmp = this;
    tmp.recalculateTotalDurationNanos_1 = SeekableTransitionState$recalculateTotalDurationNanos$lambda(this);
    this.fraction$delegate_1 = mutableFloatStateOf(0.0);
    this.compositionContinuation_1 = null;
    this.compositionContinuationMutex_1 = Mutex();
    this.mutatorMutex_1 = new MutatorMutex();
    this.lastFrameTimeNanos_1 = new Long(0, -2147483648);
    this.initialValueAnimations_1 = new MutableObjectList();
    this.currentAnimation_1 = null;
    var tmp_0 = this;
    tmp_0.firstFrameLambda_1 = SeekableTransitionState$firstFrameLambda$lambda(this);
    this.durationScale_1 = 0.0;
    var tmp_1 = this;
    tmp_1.animateOneFrameLambda_1 = SeekableTransitionState$animateOneFrameLambda$lambda(this);
  }
  protoOf(SeekableTransitionState).set_targetState_ob8bls_k$ = function (_set____db54di) {
    var tmp0 = this.targetState$delegate_1;
    targetState$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SeekableTransitionState).get_targetState_kri3mx_k$ = function () {
    var tmp0 = this.targetState$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    targetState$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SeekableTransitionState).set_currentState_6uk70u_k$ = function (_set____db54di) {
    var tmp0 = this.currentState$delegate_1;
    currentState$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SeekableTransitionState).get_currentState_snihnl_k$ = function () {
    var tmp0 = this.currentState$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    currentState$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SeekableTransitionState).set_composedTargetState_poix8u_k$ = function (_set____db54di) {
    this.composedTargetState_1 = _set____db54di;
  };
  protoOf(SeekableTransitionState).get_composedTargetState_dzunz2_k$ = function () {
    return this.composedTargetState_1;
  };
  protoOf(SeekableTransitionState).set_totalDurationNanos_2fvsbh_k$ = function (_set____db54di) {
    this.totalDurationNanos_1 = _set____db54di;
  };
  protoOf(SeekableTransitionState).get_totalDurationNanos_x1evfx_k$ = function () {
    return this.totalDurationNanos_1;
  };
  protoOf(SeekableTransitionState).get_fraction_bvkonf_k$ = function () {
    var tmp0 = this.fraction$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    fraction$factory_0();
    return tmp0.get_floatValue_xw60ou_k$();
  };
  protoOf(SeekableTransitionState).set_compositionContinuation_5cuzj2_k$ = function (_set____db54di) {
    this.compositionContinuation_1 = _set____db54di;
  };
  protoOf(SeekableTransitionState).get_compositionContinuation_quwx05_k$ = function () {
    return this.compositionContinuation_1;
  };
  protoOf(SeekableTransitionState).get_compositionContinuationMutex_ap2pc4_k$ = function () {
    return this.compositionContinuationMutex_1;
  };
  protoOf(SeekableTransitionState).snapTo_3gvjhe_k$ = function (targetState, $completion) {
    var tmp0_elvis_lhs = this.transition_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    if (equals(this.get_currentState_snihnl_k$(), targetState) && equals(this.get_targetState_kri3mx_k$(), targetState)) {
      return Unit_getInstance();
    }
    return this.mutatorMutex_1.mutate$default_f05kjn_k$(VOID, SeekableTransitionState$snapTo$slambda_0(this, targetState, transition, null), $completion);
  };
  protoOf(SeekableTransitionState).seekTo_yhdqgu_k$ = function (fraction, targetState, $completion) {
    // Inline function 'androidx.compose.animation.core.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0.0 <= fraction ? fraction <= 1.0 : false)) {
      // Inline function 'androidx.compose.animation.core.SeekableTransitionState.seekTo.<anonymous>' call
      var tmp$ret$0 = 'Expecting fraction between 0 and 1. Got ' + fraction;
      throwIllegalArgumentException(tmp$ret$0);
    }
    var tmp0_elvis_lhs = this.transition_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    var oldTargetState = this.get_targetState_kri3mx_k$();
    return this.mutatorMutex_1.mutate$default_f05kjn_k$(VOID, SeekableTransitionState$seekTo$slambda_0(targetState, oldTargetState, this, transition, fraction, null), $completion);
  };
  protoOf(SeekableTransitionState).seekTo$default_sdpbbk_k$ = function (fraction, targetState, $completion, $super) {
    targetState = targetState === VOID ? this.get_targetState_kri3mx_k$() : targetState;
    return $super === VOID ? this.seekTo_yhdqgu_k$(fraction, targetState, $completion) : $super.seekTo_yhdqgu_k$.call(this, fraction, targetState, $completion);
  };
  protoOf(SeekableTransitionState).animateTo_yy6la9_k$ = function (targetState, animationSpec, $completion) {
    var tmp0_elvis_lhs = this.transition_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    return this.mutatorMutex_1.mutate$default_f05kjn_k$(VOID, SeekableTransitionState$animateTo$slambda_0(transition, this, targetState, animationSpec, null), $completion);
  };
  protoOf(SeekableTransitionState).animateTo$default_ogxp94_k$ = function (targetState, animationSpec, $completion, $super) {
    targetState = targetState === VOID ? this.get_targetState_kri3mx_k$() : targetState;
    animationSpec = animationSpec === VOID ? null : animationSpec;
    return $super === VOID ? this.animateTo_yy6la9_k$(targetState, animationSpec, $completion) : $super.animateTo_yy6la9_k$.call(this, targetState, animationSpec, $completion);
  };
  protoOf(SeekableTransitionState).transitionConfigured_2ailji_k$ = function (transition) {
    // Inline function 'androidx.compose.animation.core.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.transition_1 == null || equals(transition, this.transition_1))) {
      // Inline function 'androidx.compose.animation.core.SeekableTransitionState.transitionConfigured.<anonymous>' call
      var tmp$ret$0 = 'An instance of SeekableTransitionState has been used in different Transitions. ' + ('Previous instance: ' + toString_0(this.transition_1) + ', new instance: ' + transition.toString());
      throwIllegalStateException(tmp$ret$0);
    }
    this.transition_1 = transition;
  };
  protoOf(SeekableTransitionState).transitionRemoved_oll33s_k$ = function () {
    this.transition_1 = null;
    get_SeekableStateObserver().clear_7p1m0x_k$(this);
  };
  protoOf(SeekableTransitionState).observeTotalDuration_1qxch5_k$ = function () {
    get_SeekableStateObserver().observeReads_r9h55h_k$(this, get_SeekableTransitionStateTotalDurationChanged(), this.recalculateTotalDurationNanos_1);
  };
  protoOf(SeekableTransitionState).onTotalDurationChanged_golqns_k$ = function () {
    var previousTotalDurationNanos = this.totalDurationNanos_1;
    this.observeTotalDuration_1qxch5_k$();
    if (!previousTotalDurationNanos.equals(this.totalDurationNanos_1)) {
      var animation = this.currentAnimation_1;
      if (!(animation == null)) {
        animation.durationNanos_1 = this.totalDurationNanos_1;
        if (animation.animationSpec_1 == null) {
          animation.animationSpecDuration_1 = roundToLong((1.0 - animation.start_1.get_jz2icb_k$(0)) * this.totalDurationNanos_1.toDouble_ygsx0s_k$());
        }
      } else if (!this.totalDurationNanos_1.equals(new Long(0, 0))) {
        seekToFraction(this);
      }
    }
  };
  function TransitionState() {
    this.isRunning$delegate_1 = mutableStateOf(false);
  }
  protoOf(TransitionState).set_isRunning_o0rkdc_k$ = function (_set____db54di) {
    var tmp0 = this.isRunning$delegate_1;
    isRunning$factory_5();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(TransitionState).get_isRunning_yzngqx_k$ = function () {
    var tmp0 = this.isRunning$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    isRunning$factory_6();
    return tmp0.get_value_j01efc_k$();
  };
  function _set_targetValue__aqsk0r_0($this, _set____db54di) {
    var tmp0 = $this.targetValue$delegate_1;
    targetValue$factory_1();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_targetValue__jjlmb5($this) {
    var tmp0 = $this.targetValue$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    targetValue$factory_2();
    return tmp0.get_value_j01efc_k$();
  }
  function _get_defaultSpring__8tff1f($this) {
    return $this.defaultSpring_1;
  }
  function _set_animationSpec__7qdru_0($this, _set____db54di) {
    var tmp0 = $this.animationSpec$delegate_1;
    animationSpec$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_animation__pan2kh($this, _set____db54di) {
    var tmp0 = $this.animation$delegate_1;
    animation$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_initialValueAnimation__1y3xoy($this, _set____db54di) {
    $this.initialValueAnimation_1 = _set____db54di;
  }
  function _get_initialValueAnimation__83qa4m($this) {
    return $this.initialValueAnimation_1;
  }
  function _set_useOnlyInitialValue__5vtyit($this, _set____db54di) {
    $this.useOnlyInitialValue_1 = _set____db54di;
  }
  function _get_useOnlyInitialValue__j6k7f5($this) {
    return $this.useOnlyInitialValue_1;
  }
  function _set_velocityVector__vm30d3_0($this, _set____db54di) {
    $this.velocityVector_1 = _set____db54di;
  }
  function _get_velocityVector__dvxlkl_0($this) {
    return $this.velocityVector_1;
  }
  function _set_isSeeking__ngvk6d($this, _set____db54di) {
    $this.isSeeking_1 = _set____db54di;
  }
  function _get_isSeeking__i9e1e7($this) {
    return $this.isSeeking_1;
  }
  function _get_interruptionSpec__ruhcut($this) {
    return $this.interruptionSpec_1;
  }
  function updateAnimation($this, initialValue, isInterrupted) {
    var tmp0_safe_receiver = $this.initialValueAnimation_1;
    if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_targetValue_kq6mfd_k$(), _get_targetValue__jjlmb5($this))) {
      _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$($this.interruptionSpec_1, $this.typeConverter_1, initialValue, initialValue, newInstance($this.velocityVector_1)));
      $this.useOnlyInitialValue_1 = true;
      $this.set_durationNanos_echppp_k$($this.get_animation_r0gd0b_k$().get_durationNanos_ub5cy_k$());
      return Unit_getInstance();
    }
    var tmp;
    if (isInterrupted && !$this.isSeeking_1) {
      var tmp_0;
      var tmp_1 = $this.get_animationSpec_wdk2t2_k$();
      if (tmp_1 instanceof SpringSpec) {
        tmp_0 = $this.get_animationSpec_wdk2t2_k$();
      } else {
        tmp_0 = $this.interruptionSpec_1;
      }
      tmp = tmp_0;
    } else {
      tmp = $this.get_animationSpec_wdk2t2_k$();
    }
    var specWithoutDelay = tmp;
    var tmp_2;
    if ($this.$this_1.get_playTimeNanos_50m2yz_k$().compareTo_9jj042_k$(new Long(0, 0)) <= 0) {
      tmp_2 = specWithoutDelay;
    } else {
      tmp_2 = delayed(specWithoutDelay, $this.$this_1.get_playTimeNanos_50m2yz_k$());
    }
    var spec = tmp_2;
    _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$(spec, $this.typeConverter_1, initialValue, _get_targetValue__jjlmb5($this), $this.velocityVector_1));
    $this.set_durationNanos_echppp_k$($this.get_animation_r0gd0b_k$().get_durationNanos_ub5cy_k$());
    $this.useOnlyInitialValue_1 = false;
    onChildAnimationUpdated($this.$this_1);
  }
  function updateAnimation$default($this, initialValue, isInterrupted, $super) {
    initialValue = initialValue === VOID ? $this.get_value_j01efc_k$() : initialValue;
    isInterrupted = isInterrupted === VOID ? false : isInterrupted;
    return updateAnimation($this, initialValue, isInterrupted);
  }
  function DeferredAnimationData($outer, animation, transitionSpec, targetValueByState) {
    this.$this_1 = $outer;
    this.animation_1 = animation;
    this.transitionSpec_1 = transitionSpec;
    this.targetValueByState_1 = targetValueByState;
  }
  protoOf(DeferredAnimationData).get_animation_r0gd0b_k$ = function () {
    return this.animation_1;
  };
  protoOf(DeferredAnimationData).set_transitionSpec_6vdwmp_k$ = function (_set____db54di) {
    this.transitionSpec_1 = _set____db54di;
  };
  protoOf(DeferredAnimationData).get_transitionSpec_80wxl_k$ = function () {
    return this.transitionSpec_1;
  };
  protoOf(DeferredAnimationData).set_targetValueByState_13c911_k$ = function (_set____db54di) {
    this.targetValueByState_1 = _set____db54di;
  };
  protoOf(DeferredAnimationData).get_targetValueByState_4t5sar_k$ = function () {
    return this.targetValueByState_1;
  };
  protoOf(DeferredAnimationData).updateAnimationStates_83ofna_k$ = function (segment) {
    var targetValue = this.targetValueByState_1(segment.get_targetState_kri3mx_k$());
    if (this.$this_1.$this_1.get_isSeeking_vjb393_k$()) {
      var initialValue = this.targetValueByState_1(segment.get_initialState_2eu9l6_k$());
      this.animation_1.updateInitialAndTargetValue_6zlop_k$(initialValue, targetValue, this.transitionSpec_1(segment));
    } else {
      this.animation_1.updateTargetValue_pami6j_k$(targetValue, this.transitionSpec_1(segment));
    }
  };
  protoOf(DeferredAnimationData).get_value_j01efc_k$ = function () {
    this.updateAnimationStates_83ofna_k$(this.$this_1.$this_1.get_segment_xwnoei_k$());
    return this.animation_1.get_value_j01efc_k$();
  };
  function Transition$animateTo$lambda$slambda$lambda(this$0, $durationScale) {
    return function (it) {
      var tmp;
      if (!this$0.get_isSeeking_vjb393_k$()) {
        // Inline function 'kotlin.Long.div' call
        var tmp$ret$0 = it.div_jun7gj_k$(toLong(1));
        this$0.onFrame_wjwgn9_k$(tmp$ret$0, $durationScale);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _get_transitionState__f9djyt($this) {
    return $this.transitionState_1;
  }
  function Transition_init_$Init$(transitionState, label, $this) {
    label = label === VOID ? null : label;
    Transition.call($this, transitionState, null, label);
    return $this;
  }
  function Transition_init_$Create$(transitionState, label) {
    return Transition_init_$Init$(transitionState, label, objectCreate(protoOf(Transition)));
  }
  function Transition_init_$Init$_0(initialState, label, $this) {
    Transition.call($this, new MutableTransitionState(initialState), null, label);
    return $this;
  }
  function Transition_init_$Create$_0(initialState, label) {
    return Transition_init_$Init$_0(initialState, label, objectCreate(protoOf(Transition)));
  }
  function Transition_init_$Init$_1(transitionState, label, $this) {
    label = label === VOID ? null : label;
    Transition.call($this, transitionState instanceof TransitionState ? transitionState : THROW_CCE(), null, label);
    return $this;
  }
  function Transition_init_$Create$_1(transitionState, label) {
    return Transition_init_$Init$_1(transitionState, label, objectCreate(protoOf(Transition)));
  }
  function _set_segment__77iylu($this, _set____db54di) {
    var tmp0 = $this.segment$delegate_1;
    segment$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set__playTimeNanos__8elh7c($this, _set____db54di) {
    var tmp0 = $this._playTimeNanos$delegate_1;
    _playTimeNanos$factory();
    tmp0.set_longValue_3qxaje_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get__playTimeNanos__xxox8s($this) {
    var tmp0 = $this._playTimeNanos$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    _playTimeNanos$factory_0();
    return tmp0.get_longValue_ahin58_k$();
  }
  function _set_updateChildrenNeeded__eksjzu($this, _set____db54di) {
    var tmp0 = $this.updateChildrenNeeded$delegate_1;
    updateChildrenNeeded$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_updateChildrenNeeded__mpvzi($this) {
    var tmp0 = $this.updateChildrenNeeded$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    updateChildrenNeeded$factory_0();
    return tmp0.get_value_j01efc_k$();
  }
  function _get__animations__z05tbx_0($this) {
    return $this._animations_1;
  }
  function _get__transitions__nj1dqs($this) {
    return $this._transitions_1;
  }
  function calculateTotalDurationNanos($this) {
    var maxDurationNanos = new Long(0, 0);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = $this._animations_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.animation.core.Transition.calculateTotalDurationNanos.<anonymous>' call
        var tmp0 = maxDurationNanos;
        // Inline function 'kotlin.math.max' call
        var b = item.get_durationNanos_82ej8f_k$();
        maxDurationNanos = tmp0.compareTo_9jj042_k$(b) >= 0 ? tmp0 : b;
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = $this._transitions_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.calculateTotalDurationNanos.<anonymous>' call
        var tmp0_0 = maxDurationNanos;
        // Inline function 'kotlin.math.max' call
        var b_0 = calculateTotalDurationNanos(item_0);
        maxDurationNanos = tmp0_0.compareTo_9jj042_k$(b_0) >= 0 ? tmp0_0 : b_0;
      }
       while (inductionVariable_0 <= last_0);
    return maxDurationNanos;
  }
  function resetAnimations($this) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = $this._animations_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.animation.core.Transition.resetAnimations.<anonymous>' call
        item.resetAnimation_64towu_k$();
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = $this._transitions_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.resetAnimations.<anonymous>' call
        resetAnimations(item_0);
      }
       while (inductionVariable_0 <= last_0);
  }
  function onChildAnimationUpdated($this) {
    _set_updateChildrenNeeded__eksjzu($this, true);
    if ($this.get_isSeeking_vjb393_k$()) {
      var maxDurationNanos = new Long(0, 0);
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = $this._animations_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.get_c1px32_k$(index);
          // Inline function 'androidx.compose.animation.core.Transition.onChildAnimationUpdated.<anonymous>' call
          var tmp0 = maxDurationNanos;
          // Inline function 'kotlin.math.max' call
          var b = item.get_durationNanos_82ej8f_k$();
          maxDurationNanos = tmp0.compareTo_9jj042_k$(b) >= 0 ? tmp0 : b;
          item.seekTo_aywgb2_k$($this.lastSeekedTimeNanos_1);
        }
         while (inductionVariable <= last);
      _set_updateChildrenNeeded__eksjzu($this, false);
    }
  }
  function TransitionAnimationState_0($outer, initialValue, initialVelocityVector, typeConverter, label) {
    this.$this_1 = $outer;
    this.typeConverter_1 = typeConverter;
    this.label_1 = label;
    this.targetValue$delegate_1 = mutableStateOf(initialValue);
    this.defaultSpring_1 = spring();
    this.animationSpec$delegate_1 = mutableStateOf(this.defaultSpring_1);
    this.animation$delegate_1 = mutableStateOf(TargetBasedAnimation_init_$Create$(this.get_animationSpec_wdk2t2_k$(), this.typeConverter_1, initialValue, _get_targetValue__jjlmb5(this), initialVelocityVector));
    this.initialValueState_1 = null;
    this.initialValueAnimation_1 = null;
    this.isFinished$delegate_1 = mutableStateOf(true);
    this.resetSnapValue$delegate_1 = mutableFloatStateOf(-1.0);
    this.useOnlyInitialValue_1 = false;
    this.value$delegate_1 = mutableStateOf(initialValue);
    this.velocityVector_1 = initialVelocityVector;
    this.durationNanos$delegate_1 = mutableLongStateOf(this.get_animation_r0gd0b_k$().get_durationNanos_ub5cy_k$());
    this.isSeeking_1 = false;
    var tmp0_safe_receiver = get_visibilityThresholdMap().get_wei43m_k$(this.typeConverter_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.animation.core.TransitionAnimationState.<anonymous>' call
      var vector = this.typeConverter_1.get_convertToVector_s594l4_k$()(initialValue);
      var inductionVariable = 0;
      var last = vector.get_size_au00c9_k$();
      if (inductionVariable < last)
        do {
          var id = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          vector.set_ln2e3z_k$(id, tmp0_safe_receiver);
        }
         while (inductionVariable < last);
      tmp = this.typeConverter_1.get_convertFromVector_kmewon_k$()(vector);
    }
    var visibilityThreshold = tmp;
    this.interruptionSpec_1 = spring(VOID, VOID, visibilityThreshold);
  }
  protoOf(TransitionAnimationState_0).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(TransitionAnimationState_0).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(TransitionAnimationState_0).get_animationSpec_wdk2t2_k$ = function () {
    var tmp0 = this.animationSpec$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    animationSpec$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(TransitionAnimationState_0).get_animation_r0gd0b_k$ = function () {
    var tmp0 = this.animation$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    animation$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(TransitionAnimationState_0).set_initialValueState_4l9d6e_k$ = function (_set____db54di) {
    this.initialValueState_1 = _set____db54di;
  };
  protoOf(TransitionAnimationState_0).get_initialValueState_3a05i0_k$ = function () {
    return this.initialValueState_1;
  };
  protoOf(TransitionAnimationState_0).set_isFinished_o05ie7_k$ = function (_set____db54di) {
    var tmp0 = this.isFinished$delegate_1;
    isFinished$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(TransitionAnimationState_0).get_isFinished_i1rrnm_k$ = function () {
    var tmp0 = this.isFinished$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    isFinished$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(TransitionAnimationState_0).set_resetSnapValue_a8o7uy_k$ = function (_set____db54di) {
    var tmp0 = this.resetSnapValue$delegate_1;
    resetSnapValue$factory();
    tmp0.set_floatValue_qaujgq_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(TransitionAnimationState_0).get_resetSnapValue_6hgmgu_k$ = function () {
    var tmp0 = this.resetSnapValue$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    resetSnapValue$factory_0();
    return tmp0.get_floatValue_xw60ou_k$();
  };
  protoOf(TransitionAnimationState_0).set_value_w62xiq_k$ = function (_set____db54di) {
    var tmp0 = this.value$delegate_1;
    value$factory_5();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(TransitionAnimationState_0).get_value_j01efc_k$ = function () {
    var tmp0 = this.value$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    value$factory_6();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(TransitionAnimationState_0).set_durationNanos_echppp_k$ = function (_set____db54di) {
    var tmp0 = this.durationNanos$delegate_1;
    durationNanos$factory();
    tmp0.set_longValue_3qxaje_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(TransitionAnimationState_0).get_durationNanos_82ej8f_k$ = function () {
    var tmp0 = this.durationNanos$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    durationNanos$factory_0();
    return tmp0.get_longValue_ahin58_k$();
  };
  protoOf(TransitionAnimationState_0).onPlayTimeChanged_uwz36g_k$ = function (playTimeNanos, scaleToEnd) {
    var playTime = scaleToEnd ? this.get_animation_r0gd0b_k$().get_durationNanos_ub5cy_k$() : playTimeNanos;
    this.set_value_w62xiq_k$(this.get_animation_r0gd0b_k$().getValueFromNanos_i31vd8_k$(playTime));
    this.velocityVector_1 = this.get_animation_r0gd0b_k$().getVelocityVectorFromNanos_jouakx_k$(playTime);
    if (this.get_animation_r0gd0b_k$().isFinishedFromNanos_c31w39_k$(playTime)) {
      this.set_isFinished_o05ie7_k$(true);
    }
  };
  protoOf(TransitionAnimationState_0).seekTo_aywgb2_k$ = function (playTimeNanos) {
    if (!(this.get_resetSnapValue_6hgmgu_k$() === -1.0)) {
      return Unit_getInstance();
    }
    this.isSeeking_1 = true;
    if (equals(this.get_animation_r0gd0b_k$().get_targetValue_kq6mfd_k$(), this.get_animation_r0gd0b_k$().get_initialValue_2disdm_k$())) {
      this.set_value_w62xiq_k$(this.get_animation_r0gd0b_k$().get_targetValue_kq6mfd_k$());
    } else {
      this.set_value_w62xiq_k$(this.get_animation_r0gd0b_k$().getValueFromNanos_i31vd8_k$(playTimeNanos));
      this.velocityVector_1 = this.get_animation_r0gd0b_k$().getVelocityVectorFromNanos_jouakx_k$(playTimeNanos);
    }
  };
  protoOf(TransitionAnimationState_0).updateInitialValue_pawylf_k$ = function () {
    var tmp0_elvis_lhs = this.initialValueState_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var animState = tmp;
    var tmp1_elvis_lhs = this.initialValueAnimation_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var animation = tmp_0;
    var tmp0 = animState.durationNanos_1;
    // Inline function 'kotlin.Long.times' call
    var other = animState.value_1;
    var tmp$ret$0 = tmp0.toDouble_ygsx0s_k$() * other;
    var initialPlayTimeNanos = roundToLong(tmp$ret$0);
    var initialValue = animation.getValueFromNanos_i31vd8_k$(initialPlayTimeNanos);
    if (this.useOnlyInitialValue_1) {
      this.get_animation_r0gd0b_k$().set_mutableTargetValue_pyw2ob_k$(initialValue);
    }
    this.get_animation_r0gd0b_k$().set_mutableInitialValue_6tefqk_k$(initialValue);
    this.set_durationNanos_echppp_k$(this.get_animation_r0gd0b_k$().get_durationNanos_ub5cy_k$());
    if (this.get_resetSnapValue_6hgmgu_k$() === -2.0 || this.useOnlyInitialValue_1) {
      this.set_value_w62xiq_k$(initialValue);
    } else {
      this.seekTo_aywgb2_k$(this.$this_1.get_playTimeNanos_50m2yz_k$());
    }
    if (initialPlayTimeNanos.compareTo_9jj042_k$(animState.durationNanos_1) >= 0) {
      this.initialValueState_1 = null;
      this.initialValueAnimation_1 = null;
    } else {
      animState.isComplete_1 = false;
    }
  };
  protoOf(TransitionAnimationState_0).resetAnimation_64towu_k$ = function () {
    this.set_resetSnapValue_a8o7uy_k$(-2.0);
  };
  protoOf(TransitionAnimationState_0).resetAnimationValue_y9x6r5_k$ = function (fraction) {
    switch (fraction) {
      case -4.0:
      case -5.0:
        var initAnim = this.initialValueAnimation_1;
        if (!(initAnim == null)) {
          this.get_animation_r0gd0b_k$().set_mutableInitialValue_6tefqk_k$(initAnim.get_targetValue_kq6mfd_k$());
          this.initialValueState_1 = null;
          this.initialValueAnimation_1 = null;
        }

        var tmp;
        if (fraction === -4.0) {
          tmp = this.get_animation_r0gd0b_k$().get_initialValue_2disdm_k$();
        } else {
          tmp = this.get_animation_r0gd0b_k$().get_targetValue_kq6mfd_k$();
        }

        var animationValue = tmp;
        this.get_animation_r0gd0b_k$().set_mutableInitialValue_6tefqk_k$(animationValue);
        this.get_animation_r0gd0b_k$().set_mutableTargetValue_pyw2ob_k$(animationValue);
        this.set_value_w62xiq_k$(animationValue);
        this.set_durationNanos_echppp_k$(this.get_animation_r0gd0b_k$().get_durationNanos_ub5cy_k$());
        break;
      default:
        this.set_resetSnapValue_a8o7uy_k$(fraction);
        break;
    }
  };
  protoOf(TransitionAnimationState_0).setInitialValueAnimation_38t2b3_k$ = function (animationState) {
    if (!equals(this.get_animation_r0gd0b_k$().get_targetValue_kq6mfd_k$(), this.get_animation_r0gd0b_k$().get_initialValue_2disdm_k$())) {
      this.initialValueAnimation_1 = this.get_animation_r0gd0b_k$();
      this.initialValueState_1 = animationState;
    }
    _set_animation__pan2kh(this, TargetBasedAnimation_init_$Create$(this.interruptionSpec_1, this.typeConverter_1, this.get_value_j01efc_k$(), this.get_value_j01efc_k$(), newInstance(this.velocityVector_1)));
    this.set_durationNanos_echppp_k$(this.get_animation_r0gd0b_k$().get_durationNanos_ub5cy_k$());
    this.useOnlyInitialValue_1 = true;
  };
  protoOf(TransitionAnimationState_0).clearInitialAnimation_9sdpae_k$ = function () {
    this.initialValueAnimation_1 = null;
    this.initialValueState_1 = null;
    this.useOnlyInitialValue_1 = false;
  };
  protoOf(TransitionAnimationState_0).toString = function () {
    return 'current value: ' + toString_0(this.get_value_j01efc_k$()) + ', target: ' + toString_0(_get_targetValue__jjlmb5(this)) + ', spec: ' + toString(this.get_animationSpec_wdk2t2_k$());
  };
  protoOf(TransitionAnimationState_0).updateTargetValue_pami6j_k$ = function (targetValue, animationSpec) {
    var tmp;
    if (this.useOnlyInitialValue_1) {
      var tmp0_safe_receiver = this.initialValueAnimation_1;
      tmp = equals(targetValue, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_targetValue_kq6mfd_k$());
    } else {
      tmp = false;
    }
    if (tmp) {
      return Unit_getInstance();
    }
    if (equals(_get_targetValue__jjlmb5(this), targetValue) && this.get_resetSnapValue_6hgmgu_k$() === -1.0) {
      return Unit_getInstance();
    }
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru_0(this, animationSpec);
    var initialValue = this.get_resetSnapValue_6hgmgu_k$() === -3.0 ? targetValue : this.get_value_j01efc_k$();
    updateAnimation(this, initialValue, !this.get_isFinished_i1rrnm_k$());
    this.set_isFinished_o05ie7_k$(this.get_resetSnapValue_6hgmgu_k$() === -3.0);
    if (this.get_resetSnapValue_6hgmgu_k$() >= 0.0) {
      var duration = this.get_animation_r0gd0b_k$().get_durationNanos_ub5cy_k$();
      var tmp_0 = this.get_animation_r0gd0b_k$();
      // Inline function 'kotlin.Long.times' call
      var other = this.get_resetSnapValue_6hgmgu_k$();
      var tmp$ret$0 = duration.toFloat_jhbgwv_k$() * other;
      this.set_value_w62xiq_k$(tmp_0.getValueFromNanos_i31vd8_k$(numberToLong(tmp$ret$0)));
    } else if (this.get_resetSnapValue_6hgmgu_k$() === -3.0) {
      this.set_value_w62xiq_k$(targetValue);
    }
    this.useOnlyInitialValue_1 = false;
    this.set_resetSnapValue_a8o7uy_k$(-1.0);
  };
  protoOf(TransitionAnimationState_0).updateInitialAndTargetValue_6zlop_k$ = function (initialValue, targetValue, animationSpec) {
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru_0(this, animationSpec);
    if (equals(this.get_animation_r0gd0b_k$().get_initialValue_2disdm_k$(), initialValue) && equals(this.get_animation_r0gd0b_k$().get_targetValue_kq6mfd_k$(), targetValue)) {
      return Unit_getInstance();
    }
    updateAnimation$default(this, initialValue);
  };
  function SegmentImpl(initialState, targetState) {
    this.initialState_1 = initialState;
    this.targetState_1 = targetState;
  }
  protoOf(SegmentImpl).get_initialState_2eu9l6_k$ = function () {
    return this.initialState_1;
  };
  protoOf(SegmentImpl).get_targetState_kri3mx_k$ = function () {
    return this.targetState_1;
  };
  protoOf(SegmentImpl).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Segment) : false) {
      tmp_0 = equals(this.initialState_1, other.get_initialState_2eu9l6_k$());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.targetState_1, other.get_targetState_kri3mx_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SegmentImpl).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.initialState_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.targetState_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
  };
  function Segment() {
  }
  function DeferredAnimation($outer, typeConverter, label) {
    this.$this_1 = $outer;
    this.typeConverter_1 = typeConverter;
    this.label_1 = label;
    this.data$delegate_1 = mutableStateOf(null);
  }
  protoOf(DeferredAnimation).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(DeferredAnimation).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(DeferredAnimation).set_data_ozdqqf_k$ = function (_set____db54di) {
    var tmp0 = this.data$delegate_1;
    data$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(DeferredAnimation).get_data_np9y8g_k$ = function () {
    var tmp0 = this.data$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    data$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(DeferredAnimation).animate_lt3uhv_k$ = function (transitionSpec, targetValueByState) {
    var tmp0_elvis_lhs = this.get_data_np9y8g_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = new DeferredAnimationData(this, new TransitionAnimationState_0(this.$this_1, targetValueByState(this.$this_1.get_currentState_snihnl_k$()), createZeroVectorFrom(this.typeConverter_1, targetValueByState(this.$this_1.get_currentState_snihnl_k$())), this.typeConverter_1, this.label_1), transitionSpec, targetValueByState);
      // Inline function 'androidx.compose.animation.core.DeferredAnimation.animate.<anonymous>' call
      this.set_data_ozdqqf_k$(this_0);
      this.$this_1.addAnimation_jdgpwc_k$(this_0.animation_1);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var animData = tmp;
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.compose.animation.core.DeferredAnimation.animate.<anonymous>' call
    animData.targetValueByState_1 = targetValueByState;
    animData.transitionSpec_1 = transitionSpec;
    animData.updateAnimationStates_83ofna_k$(this.$this_1.get_segment_xwnoei_k$());
    return animData;
  };
  protoOf(DeferredAnimation).setupSeeking_mq3siu_k$ = function () {
    var tmp0_safe_receiver = this.get_data_np9y8g_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.apply' call
      // Inline function 'androidx.compose.animation.core.DeferredAnimation.setupSeeking.<anonymous>' call
      tmp0_safe_receiver.animation_1.updateInitialAndTargetValue_6zlop_k$(tmp0_safe_receiver.targetValueByState_1(this.$this_1.get_segment_xwnoei_k$().get_initialState_2eu9l6_k$()), tmp0_safe_receiver.targetValueByState_1(this.$this_1.get_segment_xwnoei_k$().get_targetState_kri3mx_k$()), tmp0_safe_receiver.transitionSpec_1(this.$this_1.get_segment_xwnoei_k$()));
    }
  };
  function Transition$totalDurationNanos$delegate$lambda(this$0) {
    return function () {
      return calculateTotalDurationNanos(this$0);
    };
  }
  function Transition$animateTo$lambda() {
    return EmptyCoroutineContext_getInstance();
  }
  function Transition$animateTo$lambda$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Transition$animateTo$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Transition$animateTo$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Transition$animateTo$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.durationScale0__1 = get_durationScale(this.$this$launch_1.get_coroutineContext_115oqo_k$());
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!get_isActive(this.$this$launch_1)) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = withFrameNanos(Transition$animateTo$lambda$slambda$lambda(this.this$0__1, this.durationScale0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(Transition$animateTo$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new Transition$animateTo$lambda$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(Transition$animateTo$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function Transition$animateTo$lambda$slambda_0(this$0, resultContinuation) {
    var i = new Transition$animateTo$lambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Transition$animateTo$$inlined$cache$1$2() {
  }
  protoOf(Transition$animateTo$$inlined$cache$1$2).dispose_3nnxhr_k$ = function () {
    // Inline function 'androidx.compose.animation.core.Transition.animateTo.<anonymous>.<anonymous>.<anonymous>' call
  };
  function Transition$animateTo$lambda_0($coroutineScope, this$0) {
    return function ($this$DisposableEffect) {
      var tmp = CoroutineStart_UNDISPATCHED_getInstance();
      launch($coroutineScope, VOID, tmp, Transition$animateTo$lambda$slambda_0(this$0, null));
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new Transition$animateTo$$inlined$cache$1$2();
    };
  }
  function Transition$animateTo$lambda_1($tmp1_rcvr, $targetState, $$changed) {
    return function ($composer, $force) {
      $tmp1_rcvr.animateTo_rxzkdc_k$($targetState, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Transition(transitionState, parentTransition, label) {
    label = label === VOID ? null : label;
    this.transitionState_1 = transitionState;
    this.parentTransition_1 = parentTransition;
    this.label_1 = label;
    this.targetState$delegate_1 = mutableStateOf(this.get_currentState_snihnl_k$());
    this.segment$delegate_1 = mutableStateOf(new SegmentImpl(this.get_currentState_snihnl_k$(), this.get_currentState_snihnl_k$()));
    this._playTimeNanos$delegate_1 = mutableLongStateOf(new Long(0, 0));
    this.startTimeNanos$delegate_1 = mutableLongStateOf(new Long(0, -2147483648));
    this.updateChildrenNeeded$delegate_1 = mutableStateOf(false);
    this._animations_1 = mutableStateListOf();
    this._transitions_1 = mutableStateListOf();
    this.isSeeking$delegate_1 = mutableStateOf(false);
    this.lastSeekedTimeNanos_1 = new Long(0, 0);
    var tmp = this;
    tmp.totalDurationNanos$delegate_1 = derivedStateOf(Transition$totalDurationNanos$delegate$lambda(this));
    this.transitionState_1.transitionConfigured_2ailji_k$(this);
  }
  protoOf(Transition).get_parentTransition_svtbx4_k$ = function () {
    return this.parentTransition_1;
  };
  protoOf(Transition).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(Transition).get_currentState_snihnl_k$ = function () {
    return this.transitionState_1.get_currentState_snihnl_k$();
  };
  protoOf(Transition).set_targetState_ob8bls_k$ = function (_set____db54di) {
    var tmp0 = this.targetState$delegate_1;
    targetState$factory_1();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(Transition).get_targetState_kri3mx_k$ = function () {
    var tmp0 = this.targetState$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    targetState$factory_2();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(Transition).get_segment_xwnoei_k$ = function () {
    var tmp0 = this.segment$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    segment$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(Transition).get_isRunning_okmtn0_k$ = function () {
    return !this.get_startTimeNanos_a57bg6_k$().equals(new Long(0, -2147483648));
  };
  protoOf(Transition).set_playTimeNanos_8390lf_k$ = function (value) {
    if (this.parentTransition_1 == null) {
      _set__playTimeNanos__8elh7c(this, value);
    }
  };
  protoOf(Transition).get_playTimeNanos_50m2yz_k$ = function () {
    var tmp0_safe_receiver = this.parentTransition_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_playTimeNanos_50m2yz_k$();
    return tmp1_elvis_lhs == null ? _get__playTimeNanos__xxox8s(this) : tmp1_elvis_lhs;
  };
  protoOf(Transition).set_startTimeNanos_4qe7d8_k$ = function (_set____db54di) {
    var tmp0 = this.startTimeNanos$delegate_1;
    startTimeNanos$factory();
    tmp0.set_longValue_3qxaje_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(Transition).get_startTimeNanos_a57bg6_k$ = function () {
    var tmp0 = this.startTimeNanos$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    startTimeNanos$factory_0();
    return tmp0.get_longValue_ahin58_k$();
  };
  protoOf(Transition).get_transitions_hojw6j_k$ = function () {
    return this._transitions_1;
  };
  protoOf(Transition).get_animations_ez9gco_k$ = function () {
    return this._animations_1;
  };
  protoOf(Transition).set_isSeeking_cprmjv_k$ = function (_set____db54di) {
    var tmp0 = this.isSeeking$delegate_1;
    isSeeking$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(Transition).get_isSeeking_vjb393_k$ = function () {
    var tmp0 = this.isSeeking$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    isSeeking$factory_0();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(Transition).set_lastSeekedTimeNanos_shaqh3_k$ = function (_set____db54di) {
    this.lastSeekedTimeNanos_1 = _set____db54di;
  };
  protoOf(Transition).get_lastSeekedTimeNanos_hy07y1_k$ = function () {
    return this.lastSeekedTimeNanos_1;
  };
  protoOf(Transition).get_hasInitialValueAnimations_mdjdrh_k$ = function () {
    var tmp;
    var tmp0 = this._animations_1;
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
          // Inline function 'androidx.compose.animation.core.Transition.<get-hasInitialValueAnimations>.<anonymous>' call
          if (!(item.initialValueState_1 == null)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (tmp$ret$1) {
      tmp = true;
    } else {
      var tmp2 = this._transitions_1;
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'androidx.compose.ui.util.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        var last_0 = tmp2.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable_0 <= last_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_0 = tmp2.get_c1px32_k$(index_0);
            // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.animation.core.Transition.<get-hasInitialValueAnimations>.<anonymous>' call
            if (item_0.get_hasInitialValueAnimations_mdjdrh_k$()) {
              tmp$ret$3 = true;
              break $l$block_0;
            }
          }
           while (inductionVariable_0 <= last_0);
        tmp$ret$3 = false;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  protoOf(Transition).get_totalDurationNanos_cuj0z4_k$ = function () {
    var tmp0 = this.totalDurationNanos$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    totalDurationNanos$factory();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(Transition).onFrame_wjwgn9_k$ = function (frameTimeNanos, durationScale) {
    if (this.get_startTimeNanos_a57bg6_k$().equals(new Long(0, -2147483648))) {
      this.onTransitionStart_tz1xzn_k$(frameTimeNanos);
    }
    var deltaT = frameTimeNanos.minus_mfbszm_k$(this.get_startTimeNanos_a57bg6_k$());
    var tmp;
    if (durationScale === 0.0) {
      tmp = deltaT;
    } else {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = deltaT.toDouble_ygsx0s_k$() / durationScale;
      tmp = roundToLong(tmp$ret$0);
    }
    var scaledPlayTimeNanos = tmp;
    this.set_playTimeNanos_8390lf_k$(scaledPlayTimeNanos);
    this.onFrame_o9mape_k$(scaledPlayTimeNanos, durationScale === 0.0);
  };
  protoOf(Transition).onFrame_o9mape_k$ = function (scaledPlayTimeNanos, scaleToEnd) {
    if (this.get_startTimeNanos_a57bg6_k$().equals(new Long(0, -2147483648))) {
      this.onTransitionStart_tz1xzn_k$(scaledPlayTimeNanos);
    } else if (!this.transitionState_1.get_isRunning_yzngqx_k$()) {
      this.transitionState_1.set_isRunning_o0rkdc_k$(true);
    }
    _set_updateChildrenNeeded__eksjzu(this, false);
    var allFinished = true;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this._animations_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
        if (!item.get_isFinished_i1rrnm_k$()) {
          item.onPlayTimeChanged_uwz36g_k$(scaledPlayTimeNanos, scaleToEnd);
        }
        if (!item.get_isFinished_i1rrnm_k$()) {
          allFinished = false;
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this._transitions_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
        if (!equals(item_0.get_targetState_kri3mx_k$(), item_0.get_currentState_snihnl_k$())) {
          item_0.onFrame_o9mape_k$(scaledPlayTimeNanos, scaleToEnd);
        }
        if (!equals(item_0.get_targetState_kri3mx_k$(), item_0.get_currentState_snihnl_k$())) {
          allFinished = false;
        }
      }
       while (inductionVariable_0 <= last_0);
    if (allFinished) {
      this.onTransitionEnd_hbma8k_k$();
    }
  };
  protoOf(Transition).onTransitionStart_tz1xzn_k$ = function (frameTimeNanos) {
    this.set_startTimeNanos_4qe7d8_k$(frameTimeNanos);
    this.transitionState_1.set_isRunning_o0rkdc_k$(true);
  };
  protoOf(Transition).onDisposed_dytz1r_k$ = function () {
    this.onTransitionEnd_hbma8k_k$();
    this.transitionState_1.transitionRemoved_oll33s_k$();
  };
  protoOf(Transition).onTransitionEnd_hbma8k_k$ = function () {
    this.set_startTimeNanos_4qe7d8_k$(new Long(0, -2147483648));
    var tmp = this.transitionState_1;
    if (tmp instanceof MutableTransitionState) {
      this.transitionState_1.set_currentState_6uk70u_k$(this.get_targetState_kri3mx_k$());
    }
    this.set_playTimeNanos_8390lf_k$(new Long(0, 0));
    this.transitionState_1.set_isRunning_o0rkdc_k$(false);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this._transitions_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.animation.core.Transition.onTransitionEnd.<anonymous>' call
        item.onTransitionEnd_hbma8k_k$();
      }
       while (inductionVariable <= last);
  };
  protoOf(Transition).setPlaytimeAfterInitialAndTargetStateEstablished_5eb7ay_k$ = function (initialState, targetState, playTimeNanos) {
    this.set_startTimeNanos_4qe7d8_k$(new Long(0, -2147483648));
    this.transitionState_1.set_isRunning_o0rkdc_k$(false);
    if (!this.get_isSeeking_vjb393_k$() || !equals(this.get_currentState_snihnl_k$(), initialState) || !equals(this.get_targetState_kri3mx_k$(), targetState)) {
      var tmp;
      if (!equals(this.get_currentState_snihnl_k$(), initialState)) {
        var tmp_0 = this.transitionState_1;
        tmp = tmp_0 instanceof MutableTransitionState;
      } else {
        tmp = false;
      }
      if (tmp) {
        this.transitionState_1.set_currentState_6uk70u_k$(initialState);
      }
      this.set_targetState_ob8bls_k$(targetState);
      this.set_isSeeking_cprmjv_k$(true);
      _set_segment__77iylu(this, new SegmentImpl(initialState, targetState));
    }
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this._transitions_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>.<anonymous>' call
        var it = item instanceof Transition ? item : THROW_CCE();
        if (it.get_isSeeking_vjb393_k$()) {
          it.setPlaytimeAfterInitialAndTargetStateEstablished_5eb7ay_k$(it.get_currentState_snihnl_k$(), it.get_targetState_kri3mx_k$(), playTimeNanos);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this._animations_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>' call
        item_0.seekTo_aywgb2_k$(playTimeNanos);
      }
       while (inductionVariable_0 <= last_0);
    this.lastSeekedTimeNanos_1 = playTimeNanos;
  };
  protoOf(Transition).addTransition_dtnpqu_k$ = function (transition) {
    return this._transitions_1.add_wl2rvy_k$(transition);
  };
  protoOf(Transition).removeTransition_442hbh_k$ = function (transition) {
    return this._transitions_1.remove_an8aut_k$(transition);
  };
  protoOf(Transition).addAnimation_jdgpwc_k$ = function (animation) {
    return this._animations_1.add_wl2rvy_k$(animation);
  };
  protoOf(Transition).removeAnimation_vd2pap_k$ = function (animation) {
    this._animations_1.remove_an8aut_k$(animation);
  };
  protoOf(Transition).updateTarget_9b8tjr_k$ = function (targetState) {
    if (!equals(this.get_targetState_kri3mx_k$(), targetState)) {
      _set_segment__77iylu(this, new SegmentImpl(this.get_targetState_kri3mx_k$(), targetState));
      if (!equals(this.get_currentState_snihnl_k$(), this.get_targetState_kri3mx_k$())) {
        this.transitionState_1.set_currentState_6uk70u_k$(this.get_targetState_kri3mx_k$());
      }
      this.set_targetState_ob8bls_k$(targetState);
      if (!this.get_isRunning_okmtn0_k$()) {
        _set_updateChildrenNeeded__eksjzu(this, true);
      }
      resetAnimations(this);
    }
  };
  protoOf(Transition).animateTo_rxzkdc_k$ = function (targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1493585151);
    sourceInformation($composer_0, 'C(animateTo)1220@49879L24,1221@49959L1012,1221@49920L1051:Transition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(targetState) : $composer_0.changedInstance_s1wkiy_k$(targetState)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1493585151, $dirty, -1, 'androidx.compose.animation.core.Transition.animateTo (Transition.kt:1212)');
      }
      if (!this.get_isSeeking_vjb393_k$()) {
        this.updateTarget_9b8tjr_k$(targetState);
        if (!equals(targetState, this.get_currentState_snihnl_k$()) || this.get_isRunning_okmtn0_k$() || _get_updateChildrenNeeded__mpvzi(this)) {
          // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
          var getContext = null;
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 773894976, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
          if (!((1 & 1) === 0)) {
            getContext = Transition$animateTo$lambda;
          }
          var composer = $composer_1;
          sourceInformationMarkerStart($composer_1, -954370320, 'CC(remember):Effects.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_1.rememberedValue_4dg93v_k$();
          var tmp;
          if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
            var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
            $composer_1.updateRememberedValue_l1wh71_k$(value);
            tmp = value;
          } else {
            tmp = it;
          }
          var tmp_0 = tmp;
          var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          sourceInformationMarkerEnd($composer_1);
          var wrapper = tmp1_group;
          var tmp0 = wrapper.get_coroutineScope_5k7h45_k$();
          sourceInformationMarkerEnd($composer_1);
          var coroutineScope = tmp0;
          sourceInformationMarkerStart($composer_0, 335902523, 'CC(remember):Transition.kt#9igjgp');
          var tmp4 = $composer_0;
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = !!($composer_0.changedInstance_s1wkiy_k$(coroutineScope) | ($dirty & 112) === 32);
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = tmp4.rememberedValue_4dg93v_k$();
          var tmp_1;
          if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'androidx.compose.animation.core.Transition.animateTo.<anonymous>' call
            var value_0 = Transition$animateTo$lambda_0(coroutineScope, this);
            tmp4.updateRememberedValue_l1wh71_k$(value_0);
            tmp_1 = value_0;
          } else {
            tmp_1 = it_0;
          }
          var tmp_2 = tmp_1;
          var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          DisposableEffect_0(coroutineScope, this, tmp0_group, $composer_0, 112 & $dirty);
        }
      }
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
      tmp2_safe_receiver.updateScope_t8jcf_k$(Transition$animateTo$lambda_1(this, targetState, $changed));
    }
  };
  protoOf(Transition).seekAnimations_edwrve_k$ = function (playTimeNanos) {
    if (this.get_startTimeNanos_a57bg6_k$().equals(new Long(0, -2147483648))) {
      this.set_startTimeNanos_4qe7d8_k$(playTimeNanos);
    }
    this.set_playTimeNanos_8390lf_k$(playTimeNanos);
    _set_updateChildrenNeeded__eksjzu(this, false);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this._animations_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.animation.core.Transition.seekAnimations.<anonymous>' call
        item.seekTo_aywgb2_k$(playTimeNanos);
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this._transitions_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.seekAnimations.<anonymous>' call
        if (!equals(item_0.get_targetState_kri3mx_k$(), item_0.get_currentState_snihnl_k$())) {
          item_0.seekAnimations_edwrve_k$(playTimeNanos);
        }
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).setInitialAnimations_5bv565_k$ = function (animationState) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this._animations_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.animation.core.Transition.setInitialAnimations.<anonymous>' call
        item.setInitialValueAnimation_38t2b3_k$(animationState);
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this._transitions_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.setInitialAnimations.<anonymous>' call
        item_0.setInitialAnimations_5bv565_k$(animationState);
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).resetAnimationFraction_ecgbkk_k$ = function (fraction) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this._animations_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.animation.core.Transition.resetAnimationFraction.<anonymous>' call
        item.resetAnimationValue_y9x6r5_k$(fraction);
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this._transitions_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.resetAnimationFraction.<anonymous>' call
        item_0.resetAnimationFraction_ecgbkk_k$(fraction);
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).clearInitialAnimations_yfnnil_k$ = function () {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this._animations_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.animation.core.Transition.clearInitialAnimations.<anonymous>' call
        item.clearInitialAnimation_9sdpae_k$();
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this._transitions_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.clearInitialAnimations.<anonymous>' call
        item_0.clearInitialAnimations_yfnnil_k$();
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).updateInitialValues_c25wra_k$ = function () {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this._animations_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.animation.core.Transition.updateInitialValues.<anonymous>' call
        item.updateInitialValue_pawylf_k$();
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this._transitions_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.updateInitialValues.<anonymous>' call
        item_0.updateInitialValues_c25wra_k$();
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).toString = function () {
    var tmp0 = this.get_animations_ez9gco_k$();
    // Inline function 'androidx.compose.ui.util.fastFold' call
    // Inline function 'kotlin.contracts.contract' call
    var accumulator = 'Transition animation values: ';
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastFold.<anonymous>' call
        // Inline function 'androidx.compose.animation.core.Transition.toString.<anonymous>' call
        accumulator = accumulator + item.toString() + ', ';
      }
       while (inductionVariable <= last);
    return accumulator;
  };
  protoOf(Transition).removeAnimation_gmbwco_k$ = function (deferredAnimation) {
    var tmp0_safe_receiver = deferredAnimation.get_data_np9y8g_k$();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animation_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.animation.core.Transition.removeAnimation.<anonymous>' call
      this.removeAnimation_vd2pap_k$(tmp1_safe_receiver);
    }
  };
  function get_ResetAnimationSnapCurrent() {
    return ResetAnimationSnapCurrent;
  }
  var ResetAnimationSnapCurrent;
  function get_ResetAnimationSnapTarget() {
    return ResetAnimationSnapTarget;
  }
  var ResetAnimationSnapTarget;
  function get_ResetAnimationSnap() {
    return ResetAnimationSnap;
  }
  var ResetAnimationSnap;
  function MutableTransitionState(initialState) {
    TransitionState.call(this);
    this.currentState$delegate_1 = mutableStateOf(initialState);
    this.targetState$delegate_1 = mutableStateOf(initialState);
  }
  protoOf(MutableTransitionState).set_currentState_6uk70u_k$ = function (_set____db54di) {
    var tmp0 = this.currentState$delegate_1;
    currentState$factory_1();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(MutableTransitionState).get_currentState_snihnl_k$ = function () {
    var tmp0 = this.currentState$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    currentState$factory_2();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(MutableTransitionState).set_targetState_1ag6bn_k$ = function (_set____db54di) {
    var tmp0 = this.targetState$delegate_1;
    targetState$factory_3();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(MutableTransitionState).set_targetState_ob8bls_k$ = function (_set____db54di) {
    return this.set_targetState_1ag6bn_k$((_set____db54di == null ? true : !(_set____db54di == null)) ? _set____db54di : THROW_CCE());
  };
  protoOf(MutableTransitionState).get_targetState_kri3mx_k$ = function () {
    var tmp0 = this.targetState$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    targetState$factory_4();
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(MutableTransitionState).get_isIdle_evzi1z_k$ = function () {
    return equals(this.get_currentState_snihnl_k$(), this.get_targetState_kri3mx_k$()) && !this.get_isRunning_yzngqx_k$();
  };
  protoOf(MutableTransitionState).transitionConfigured_2ailji_k$ = function (transition) {
  };
  protoOf(MutableTransitionState).transitionRemoved_oll33s_k$ = function () {
  };
  function get_AnimationDebugDurationScale() {
    return AnimationDebugDurationScale;
  }
  var AnimationDebugDurationScale;
  function get_NoReset() {
    return NoReset;
  }
  var NoReset;
  function get_ResetNoSnap() {
    return ResetNoSnap;
  }
  var ResetNoSnap;
  function createChildTransition(_this__u8e3s4, label, transformToChildState, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1215497572, 'CC(createChildTransition)1814@74186L36,1815@74246L74,1816@74343L39,1817@74394L63:Transition.kt#pdpnli');
    if (!(($default & 1) === 0))
      label_0 = 'ChildTransition';
    sourceInformationMarkerStart($composer_0, 272028789, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.createChildTransition.<anonymous>' call
      var value = _this__u8e3s4.get_currentState_snihnl_k$();
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var initialParentState = tmp1_group;
    var initialState = transformToChildState(_this__u8e3s4.get_isSeeking_vjb393_k$() ? _this__u8e3s4.get_currentState_snihnl_k$() : initialParentState, $composer_0, 112 & $changed >> 3);
    var targetState = transformToChildState(_this__u8e3s4.get_targetState_kri3mx_k$(), $composer_0, 112 & $changed >> 3);
    var tmp0 = createChildTransitionInternal(_this__u8e3s4, initialState, targetState, label_0, $composer_0, 14 & $changed | 7168 & $changed << 6);
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function rememberTransition(transitionState, label, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1643203617, 'C(rememberTransition)P(1)822@34343L94,837@35067L190,837@35038L219:Transition.kt#pdpnli');
    if (!(($default & 2) === 0))
      label_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(1643203617, $changed, -1, 'androidx.compose.animation.core.rememberTransition (Transition.kt:821)');
    }
    sourceInformationMarkerStart($composer_0, 587424932, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(transitionState) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.rememberTransition.<anonymous>' call
      var value = Transition_init_$Create$(transitionState, label_0);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var transition = tmp1_group;
    if (transitionState instanceof SeekableTransitionState) {
      $composer_0.startReplaceGroup_5hh8aj_k$(1030461252);
      sourceInformation($composer_0, '826@34574L382,826@34500L456');
      var tmp_1 = transitionState.get_currentState_snihnl_k$();
      var tmp_2 = transitionState.get_targetState_kri3mx_k$();
      sourceInformationMarkerStart($composer_0, 587432612, 'CC(remember):Transition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(transitionState) || ($changed & 6) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.animation.core.rememberTransition.<anonymous>' call
        var value_0 = rememberTransition$slambda_0(transitionState, null);
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      LaunchedEffect_0(tmp_1, tmp_2, tmp2_group, $composer_0, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(1030922811);
      sourceInformation($composer_0, '835@34989L38');
      transition.animateTo_rxzkdc_k$(transitionState.get_targetState_kri3mx_k$(), $composer_0, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
    }
    sourceInformationMarkerStart($composer_0, 587448196, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_1 = $composer_0.changed_ga7h3f_k$(transition);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_5;
    if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.rememberTransition.<anonymous>' call
      var value_1 = rememberTransition$lambda(transition);
      $composer_0.updateRememberedValue_l1wh71_k$(value_1);
      tmp_5 = value_1;
    } else {
      tmp_5 = it_1;
    }
    var tmp_6 = tmp_5;
    var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect(transition, tmp3_group, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return transition;
  }
  var androidx_compose_animation_core_MutableTransitionState$stable;
  function createDeferredAnimation(_this__u8e3s4, typeConverter, label, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1714122528, 'C(createDeferredAnimation)P(1)1781@72682L58,1782@72772L75,1782@72745L102:Transition.kt#pdpnli');
    if (!(($default & 2) === 0))
      label_0 = 'DeferredAnimation';
    if (isTraceInProgress()) {
      traceEventStart(-1714122528, $changed, -1, 'androidx.compose.animation.core.createDeferredAnimation (Transition.kt:1780)');
    }
    sourceInformationMarkerStart($composer_0, -1378232737, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.createDeferredAnimation.<anonymous>' call
      var value = new DeferredAnimation(_this__u8e3s4, typeConverter, label_0);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var lazyAnim = tmp1_group;
    sourceInformationMarkerStart($composer_0, -1378229840, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!((($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4) | $composer_0.changedInstance_s1wkiy_k$(lazyAnim));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.createDeferredAnimation.<anonymous>' call
      var value_0 = createDeferredAnimation$lambda(_this__u8e3s4, lazyAnim);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect(lazyAnim, tmp2_group, $composer_0, 0);
    if (_this__u8e3s4.get_isSeeking_vjb393_k$()) {
      lazyAnim.setupSeeking_mq3siu_k$();
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return lazyAnim;
  }
  function updateTransition(targetState, label, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 2029166765, 'C(updateTransition)P(1)93@3896L51,94@3963L22,95@4019L190,95@3990L219:Transition.kt#pdpnli');
    if (!(($default & 2) === 0))
      label_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(2029166765, $changed, -1, 'androidx.compose.animation.core.updateTransition (Transition.kt:92)');
    }
    sourceInformationMarkerStart($composer_0, -659286059, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.updateTransition.<anonymous>' call
      var value = Transition_init_$Create$_0(targetState, label_0);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var transition = tmp1_group;
    transition.animateTo_rxzkdc_k$(targetState, $composer_0, 48 | 8 & $changed | 14 & $changed);
    sourceInformationMarkerStart($composer_0, -659281984, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.updateTransition.<anonymous>' call
      var value_0 = updateTransition$lambda(transition);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect(transition, tmp2_group, $composer_0, 54);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return transition;
  }
  function animateFloat_0(_this__u8e3s4, transitionSpec, label, targetValueByState, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var transitionSpec_0 = transitionSpec;
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1338768149, 'CC(animateFloat)P(2)1969@80624L78:Transition.kt#pdpnli');
    if (!(($default & 1) === 0)) {
      transitionSpec_0 = animateFloat$lambda;
    }
    if (!(($default & 2) === 0))
      label_0 = 'FloatAnimation';
    var tmp1 = get_VectorConverter(FloatCompanionObject_getInstance());
    // Inline function 'androidx.compose.animation.core.animateValue' call
    var $changed_0 = 14 & $changed | 896 & $changed << 3 | 7168 & $changed << 3 | 57344 & $changed << 3;
    var transitionSpec_1 = transitionSpec_0;
    var label_1 = label_0;
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, -142660079, 'CC(animateValue)P(3,2)1886@77187L32,1887@77242L31,1888@77298L23,1890@77334L89:Transition.kt#pdpnli');
    if (!((0 & 2) === 0)) {
      transitionSpec_1 = animateFloat$lambda_0;
    }
    if (!((0 & 4) === 0))
      label_1 = 'ValueAnimation';
    var initialValue = targetValueByState(_this__u8e3s4.get_currentState_snihnl_k$(), $composer_1, 112 & $changed_0 >> 9);
    var targetValue = targetValueByState(_this__u8e3s4.get_targetState_kri3mx_k$(), $composer_1, 112 & $changed_0 >> 9);
    var animationSpec = transitionSpec_1(_this__u8e3s4.get_segment_xwnoei_k$(), $composer_1, 112 & $changed_0 >> 3);
    var tmp0 = createTransitionAnimation(_this__u8e3s4, initialValue, targetValue, animationSpec, tmp1, label_1, $composer_1, 14 & $changed_0 | 57344 & $changed_0 << 9 | 458752 & $changed_0 << 6);
    sourceInformationMarkerEnd($composer_1);
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function createChildTransitionInternal(_this__u8e3s4, initialState, targetState, childLabel, $composer, $changed) {
    _init_properties_Transition_kt__s6zoln();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -198307638, 'C(createChildTransitionInternal)P(1,2)1827@74657L116,1831@74808L112,1831@74779L141:Transition.kt#pdpnli');
    if (isTraceInProgress()) {
      traceEventStart(-198307638, $changed, -1, 'androidx.compose.animation.core.createChildTransitionInternal (Transition.kt:1826)');
    }
    sourceInformationMarkerStart($composer_0, 1039291970, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.createChildTransitionInternal.<anonymous>' call
      var value = new Transition(new MutableTransitionState(initialState), _this__u8e3s4, '' + _this__u8e3s4.label_1 + ' > ' + childLabel);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var transition = tmp1_group;
    sourceInformationMarkerStart($composer_0, 1039296798, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!((($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4) | $composer_0.changed_ga7h3f_k$(transition));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.createChildTransitionInternal.<anonymous>' call
      var value_0 = createChildTransitionInternal$lambda(_this__u8e3s4, transition);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect(transition, tmp2_group, $composer_0, 0);
    if (_this__u8e3s4.get_isSeeking_vjb393_k$()) {
      transition.setPlaytimeAfterInitialAndTargetStateEstablished_5eb7ay_k$(initialState, targetState, _this__u8e3s4.lastSeekedTimeNanos_1);
    } else {
      transition.updateTarget_9b8tjr_k$(targetState);
      transition.set_isSeeking_cprmjv_k$(false);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return transition;
  }
  function animateValue_0(_this__u8e3s4, typeConverter, transitionSpec, label, targetValueByState, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var transitionSpec_0 = transitionSpec;
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -142660079, 'CC(animateValue)P(3,2)1886@77187L32,1887@77242L31,1888@77298L23,1890@77334L89:Transition.kt#pdpnli');
    if (!(($default & 2) === 0)) {
      transitionSpec_0 = animateValue$lambda_1;
    }
    if (!(($default & 4) === 0))
      label_0 = 'ValueAnimation';
    var initialValue = targetValueByState(_this__u8e3s4.get_currentState_snihnl_k$(), $composer_0, 112 & $changed >> 9);
    var targetValue = targetValueByState(_this__u8e3s4.get_targetState_kri3mx_k$(), $composer_0, 112 & $changed >> 9);
    var animationSpec = transitionSpec_0(_this__u8e3s4.get_segment_xwnoei_k$(), $composer_0, 112 & $changed >> 3);
    var tmp0 = createTransitionAnimation(_this__u8e3s4, initialValue, targetValue, animationSpec, typeConverter, label_0, $composer_0, 14 & $changed | 57344 & $changed << 9 | 458752 & $changed << 6);
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function createTransitionAnimation(_this__u8e3s4, initialValue, targetValue, animationSpec, typeConverter, label, $composer, $changed) {
    _init_properties_Transition_kt__s6zoln();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -304821198, 'C(createTransitionAnimation)P(1,3!1,4)1902@77723L499,1925@78606L128,1925@78568L166:Transition.kt#pdpnli');
    if (isTraceInProgress()) {
      traceEventStart(-304821198, $changed, -1, 'androidx.compose.animation.core.createTransitionAnimation (Transition.kt:1901)');
    }
    sourceInformationMarkerStart($composer_0, 1397691138, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.createTransitionAnimation.<anonymous>' call
      var value = new TransitionAnimationState_0(_this__u8e3s4, initialValue, createZeroVectorFrom(typeConverter, targetValue), typeConverter, label);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var transitionAnimation = tmp1_group;
    if (_this__u8e3s4.get_isSeeking_vjb393_k$()) {
      transitionAnimation.updateInitialAndTargetValue_6zlop_k$(initialValue, targetValue, animationSpec);
    } else {
      transitionAnimation.updateTargetValue_pami6j_k$(targetValue, animationSpec);
    }
    sourceInformationMarkerStart($composer_0, 1397719023, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!((($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4) | $composer_0.changed_ga7h3f_k$(transitionAnimation));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.createTransitionAnimation.<anonymous>' call
      var value_0 = createTransitionAnimation$lambda(_this__u8e3s4, transitionAnimation);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect(transitionAnimation, tmp2_group, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return transitionAnimation;
  }
  function SeekableTransitionStateTotalDurationChanged$lambda(it) {
    _init_properties_Transition_kt__s6zoln();
    it.onTotalDurationChanged_golqns_k$();
    return Unit_getInstance();
  }
  function SeekableStateObserver$delegate$lambda() {
    _init_properties_Transition_kt__s6zoln();
    // Inline function 'kotlin.apply' call
    var this_0 = new SnapshotStateObserver(SeekableStateObserver$delegate$lambda$lambda);
    // Inline function 'androidx.compose.animation.core.SeekableStateObserver$delegate.<anonymous>.<anonymous>' call
    this_0.start_fyv442_k$();
    return this_0;
  }
  function SeekableStateObserver$delegate$lambda$lambda(it) {
    _init_properties_Transition_kt__s6zoln();
    it();
    return Unit_getInstance();
  }
  function rememberTransition$slambda($transitionState, resultContinuation) {
    this.$transitionState_1 = $transitionState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberTransition$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(rememberTransition$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberTransition$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.$transitionState_1.observeTotalDuration_1qxch5_k$();
            var tmp_0 = this;
            tmp_0.tmp00__1 = this.$transitionState_1.compositionContinuationMutex_1;
            this.this1__1 = this.tmp00__1;
            var tmp_1 = this;
            tmp_1.owner2__1 = null;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this1__1.lock_ugrcvf_k$(this.owner2__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            l$ret$1: do {
              var tmp_2;
              try {
                this.$transitionState_1.composedTargetState_1 = this.$transitionState_1.get_targetState_kri3mx_k$();
                var tmp0_safe_receiver = this.$transitionState_1.compositionContinuation_1;
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  var value = this.$transitionState_1.get_targetState_kri3mx_k$();
                  Companion_getInstance_6();
                  tmp0_safe_receiver.resumeWith_dtxwbr_k$(_Result___init__impl__xyqfz8(value));
                }
                this.$transitionState_1.compositionContinuation_1 = null;
                break l$ret$1;
              } catch ($p) {
                var tmp_3;
                var t = $p;
                this.this1__1.unlock_ulcrcl_k$(this.owner2__1);
                throw t;
              }
            }
             while (false);
            this.this1__1.unlock_ulcrcl_k$(this.owner2__1);
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
  protoOf(rememberTransition$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new rememberTransition$slambda(this.$transitionState_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(rememberTransition$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function rememberTransition$slambda_0($transitionState, resultContinuation) {
    var i = new rememberTransition$slambda($transitionState, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function rememberTransition$$inlined$cache$2$1($transition) {
    this.$transition_1 = $transition;
  }
  protoOf(rememberTransition$$inlined$cache$2$1).dispose_3nnxhr_k$ = function () {
    // Inline function 'androidx.compose.animation.core.rememberTransition.<anonymous>.<anonymous>.<anonymous>' call
    this.$transition_1.onDisposed_dytz1r_k$();
  };
  function rememberTransition$lambda($transition) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new rememberTransition$$inlined$cache$2$1($transition);
    };
  }
  function createDeferredAnimation$$inlined$cache$1$1($this_createDeferredAnimation, $lazyAnim) {
    this.$this_createDeferredAnimation_1 = $this_createDeferredAnimation;
    this.$lazyAnim_1 = $lazyAnim;
  }
  protoOf(createDeferredAnimation$$inlined$cache$1$1).dispose_3nnxhr_k$ = function () {
    // Inline function 'androidx.compose.animation.core.createDeferredAnimation.<anonymous>.<anonymous>.<anonymous>' call
    this.$this_createDeferredAnimation_1.removeAnimation_gmbwco_k$(this.$lazyAnim_1);
  };
  function createDeferredAnimation$lambda($this_createDeferredAnimation, $lazyAnim) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new createDeferredAnimation$$inlined$cache$1$1($this_createDeferredAnimation, $lazyAnim);
    };
  }
  function updateTransition$$inlined$cache$1$1($transition) {
    this.$transition_1 = $transition;
  }
  protoOf(updateTransition$$inlined$cache$1$1).dispose_3nnxhr_k$ = function () {
    // Inline function 'androidx.compose.animation.core.updateTransition.<anonymous>.<anonymous>.<anonymous>' call
    this.$transition_1.onDisposed_dytz1r_k$();
  };
  function updateTransition$lambda($transition) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new updateTransition$$inlined$cache$1$1($transition);
    };
  }
  function animateFloat$lambda($this$null, $composer, $changed) {
    _init_properties_Transition_kt__s6zoln();
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-522164544);
    if (isTraceInProgress()) {
      traceEventStart(-522164544, $changed, -1, 'androidx.compose.animation.core.animateFloat.<anonymous> (Transition.kt:1965)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function animateFloat$lambda_0($this$null, $composer, $changed) {
    _init_properties_Transition_kt__s6zoln();
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
  function createChildTransitionInternal$$inlined$cache$1$1($this_createChildTransitionInternal, $transition) {
    this.$this_createChildTransitionInternal_1 = $this_createChildTransitionInternal;
    this.$transition_1 = $transition;
  }
  protoOf(createChildTransitionInternal$$inlined$cache$1$1).dispose_3nnxhr_k$ = function () {
    // Inline function 'androidx.compose.animation.core.createChildTransitionInternal.<anonymous>.<anonymous>.<anonymous>' call
    this.$this_createChildTransitionInternal_1.removeTransition_442hbh_k$(this.$transition_1);
  };
  function createChildTransitionInternal$lambda($this_createChildTransitionInternal, $transition) {
    return function ($this$DisposableEffect) {
      $this_createChildTransitionInternal.addTransition_dtnpqu_k$($transition);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new createChildTransitionInternal$$inlined$cache$1$1($this_createChildTransitionInternal, $transition);
    };
  }
  function animateValue$lambda_1($this$null, $composer, $changed) {
    _init_properties_Transition_kt__s6zoln();
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
  function createTransitionAnimation$$inlined$cache$1$1($this_createTransitionAnimation, $transitionAnimation) {
    this.$this_createTransitionAnimation_1 = $this_createTransitionAnimation;
    this.$transitionAnimation_1 = $transitionAnimation;
  }
  protoOf(createTransitionAnimation$$inlined$cache$1$1).dispose_3nnxhr_k$ = function () {
    // Inline function 'androidx.compose.animation.core.createTransitionAnimation.<anonymous>.<anonymous>.<anonymous>' call
    this.$this_createTransitionAnimation_1.removeAnimation_vd2pap_k$(this.$transitionAnimation_1);
  };
  function createTransitionAnimation$lambda($this_createTransitionAnimation, $transitionAnimation) {
    return function ($this$DisposableEffect) {
      $this_createTransitionAnimation.addAnimation_jdgpwc_k$($transitionAnimation);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new createTransitionAnimation$$inlined$cache$1$1($this_createTransitionAnimation, $transitionAnimation);
    };
  }
  function SeekableStateObserver$factory() {
    return getPropertyCallableRef('SeekableStateObserver', 0, KProperty0, function () {
      return get_SeekableStateObserver();
    }, null);
  }
  function targetState$factory() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_targetState_kri3mx_k$();
    }, function (receiver, value) {
      return receiver.set_targetState_ob8bls_k$(value);
    });
  }
  function targetState$factory_0() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_targetState_kri3mx_k$();
    }, function (receiver, value) {
      return receiver.set_targetState_ob8bls_k$(value);
    });
  }
  function currentState$factory() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_currentState_snihnl_k$();
    }, function (receiver, value) {
      return receiver.set_currentState_6uk70u_k$(value);
    });
  }
  function currentState$factory_0() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_currentState_snihnl_k$();
    }, function (receiver, value) {
      return receiver.set_currentState_6uk70u_k$(value);
    });
  }
  function fraction$factory() {
    return getPropertyCallableRef('fraction', 1, KMutableProperty1, function (receiver) {
      return receiver.get_fraction_bvkonf_k$();
    }, function (receiver, value) {
      return _set_fraction__t78qnf(receiver, value);
    });
  }
  function fraction$factory_0() {
    return getPropertyCallableRef('fraction', 1, KMutableProperty1, function (receiver) {
      return receiver.get_fraction_bvkonf_k$();
    }, function (receiver, value) {
      return _set_fraction__t78qnf(receiver, value);
    });
  }
  function isRunning$factory_5() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isRunning_yzngqx_k$();
    }, function (receiver, value) {
      return receiver.set_isRunning_o0rkdc_k$(value);
    });
  }
  function isRunning$factory_6() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isRunning_yzngqx_k$();
    }, function (receiver, value) {
      return receiver.set_isRunning_o0rkdc_k$(value);
    });
  }
  function targetState$factory_1() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_targetState_kri3mx_k$();
    }, function (receiver, value) {
      return receiver.set_targetState_ob8bls_k$(value);
    });
  }
  function targetState$factory_2() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_targetState_kri3mx_k$();
    }, function (receiver, value) {
      return receiver.set_targetState_ob8bls_k$(value);
    });
  }
  function segment$factory() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.get_segment_xwnoei_k$();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function segment$factory_0() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.get_segment_xwnoei_k$();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function _playTimeNanos$factory() {
    return getPropertyCallableRef('_playTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get__playTimeNanos__xxox8s(receiver);
    }, function (receiver, value) {
      return _set__playTimeNanos__8elh7c(receiver, value);
    });
  }
  function _playTimeNanos$factory_0() {
    return getPropertyCallableRef('_playTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get__playTimeNanos__xxox8s(receiver);
    }, function (receiver, value) {
      return _set__playTimeNanos__8elh7c(receiver, value);
    });
  }
  function startTimeNanos$factory() {
    return getPropertyCallableRef('startTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.get_startTimeNanos_a57bg6_k$();
    }, function (receiver, value) {
      return receiver.set_startTimeNanos_4qe7d8_k$(value);
    });
  }
  function startTimeNanos$factory_0() {
    return getPropertyCallableRef('startTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.get_startTimeNanos_a57bg6_k$();
    }, function (receiver, value) {
      return receiver.set_startTimeNanos_4qe7d8_k$(value);
    });
  }
  function updateChildrenNeeded$factory() {
    return getPropertyCallableRef('updateChildrenNeeded', 1, KMutableProperty1, function (receiver) {
      return _get_updateChildrenNeeded__mpvzi(receiver);
    }, function (receiver, value) {
      return _set_updateChildrenNeeded__eksjzu(receiver, value);
    });
  }
  function updateChildrenNeeded$factory_0() {
    return getPropertyCallableRef('updateChildrenNeeded', 1, KMutableProperty1, function (receiver) {
      return _get_updateChildrenNeeded__mpvzi(receiver);
    }, function (receiver, value) {
      return _set_updateChildrenNeeded__eksjzu(receiver, value);
    });
  }
  function isSeeking$factory() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isSeeking_vjb393_k$();
    }, function (receiver, value) {
      return receiver.set_isSeeking_cprmjv_k$(value);
    });
  }
  function isSeeking$factory_0() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isSeeking_vjb393_k$();
    }, function (receiver, value) {
      return receiver.set_isSeeking_cprmjv_k$(value);
    });
  }
  function totalDurationNanos$factory() {
    return getPropertyCallableRef('totalDurationNanos', 1, KProperty1, function (receiver) {
      return receiver.get_totalDurationNanos_cuj0z4_k$();
    }, null);
  }
  function targetValue$factory_1() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return _get_targetValue__jjlmb5(receiver);
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r_0(receiver, value);
    });
  }
  function targetValue$factory_2() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return _get_targetValue__jjlmb5(receiver);
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r_0(receiver, value);
    });
  }
  function animationSpec$factory() {
    return getPropertyCallableRef('animationSpec', 1, KMutableProperty1, function (receiver) {
      return receiver.get_animationSpec_wdk2t2_k$();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru_0(receiver, value);
    });
  }
  function animationSpec$factory_0() {
    return getPropertyCallableRef('animationSpec', 1, KMutableProperty1, function (receiver) {
      return receiver.get_animationSpec_wdk2t2_k$();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru_0(receiver, value);
    });
  }
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
  function isFinished$factory() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isFinished_i1rrnm_k$();
    }, function (receiver, value) {
      return receiver.set_isFinished_o05ie7_k$(value);
    });
  }
  function isFinished$factory_0() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isFinished_i1rrnm_k$();
    }, function (receiver, value) {
      return receiver.set_isFinished_o05ie7_k$(value);
    });
  }
  function resetSnapValue$factory() {
    return getPropertyCallableRef('resetSnapValue', 1, KMutableProperty1, function (receiver) {
      return receiver.get_resetSnapValue_6hgmgu_k$();
    }, function (receiver, value) {
      return receiver.set_resetSnapValue_a8o7uy_k$(value);
    });
  }
  function resetSnapValue$factory_0() {
    return getPropertyCallableRef('resetSnapValue', 1, KMutableProperty1, function (receiver) {
      return receiver.get_resetSnapValue_6hgmgu_k$();
    }, function (receiver, value) {
      return receiver.set_resetSnapValue_a8o7uy_k$(value);
    });
  }
  function value$factory_5() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_w62xiq_k$(value);
    });
  }
  function value$factory_6() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_w62xiq_k$(value);
    });
  }
  function durationNanos$factory() {
    return getPropertyCallableRef('durationNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.get_durationNanos_82ej8f_k$();
    }, function (receiver, value) {
      return receiver.set_durationNanos_echppp_k$(value);
    });
  }
  function durationNanos$factory_0() {
    return getPropertyCallableRef('durationNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.get_durationNanos_82ej8f_k$();
    }, function (receiver, value) {
      return receiver.set_durationNanos_echppp_k$(value);
    });
  }
  function data$factory() {
    return getPropertyCallableRef('data', 1, KMutableProperty1, function (receiver) {
      return receiver.get_data_np9y8g_k$();
    }, function (receiver, value) {
      return receiver.set_data_ozdqqf_k$(value);
    });
  }
  function data$factory_0() {
    return getPropertyCallableRef('data', 1, KMutableProperty1, function (receiver) {
      return receiver.get_data_np9y8g_k$();
    }, function (receiver, value) {
      return receiver.set_data_ozdqqf_k$(value);
    });
  }
  function currentState$factory_1() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_currentState_snihnl_k$();
    }, function (receiver, value) {
      return receiver.set_currentState_6uk70u_k$(value);
    });
  }
  function currentState$factory_2() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_currentState_snihnl_k$();
    }, function (receiver, value) {
      return receiver.set_currentState_6uk70u_k$(value);
    });
  }
  function targetState$factory_3() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_targetState_kri3mx_k$();
    }, function (receiver, value) {
      return receiver.set_targetState_1ag6bn_k$(value);
    });
  }
  function targetState$factory_4() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_targetState_kri3mx_k$();
    }, function (receiver, value) {
      return receiver.set_targetState_1ag6bn_k$(value);
    });
  }
  var properties_initialized_Transition_kt_wb2qvd;
  function _init_properties_Transition_kt__s6zoln() {
    if (!properties_initialized_Transition_kt_wb2qvd) {
      properties_initialized_Transition_kt_wb2qvd = true;
      SeekableTransitionStateTotalDurationChanged = SeekableTransitionStateTotalDurationChanged$lambda;
      var tmp = LazyThreadSafetyMode_NONE_getInstance();
      SeekableStateObserver$delegate = lazy(tmp, SeekableStateObserver$delegate$lambda);
    }
  }
  function get_FloatToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return FloatToVector;
  }
  var FloatToVector;
  function get_IntToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntToVector;
  }
  var IntToVector;
  function get_DpToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpToVector;
  }
  var DpToVector;
  function get_DpOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpOffsetToVector;
  }
  var DpOffsetToVector;
  function get_SizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return SizeToVector;
  }
  var SizeToVector;
  function get_OffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return OffsetToVector;
  }
  var OffsetToVector;
  function get_IntOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntOffsetToVector;
  }
  var IntOffsetToVector;
  function get_IntSizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntSizeToVector;
  }
  var IntSizeToVector;
  function get_RectToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return RectToVector;
  }
  var RectToVector;
  function TwoWayConverter() {
  }
  function lerp(start, stop, fraction) {
    _init_properties_VectorConverters_kt__g28mmu();
    return start * (1 - fraction) + stop * fraction;
  }
  function get_VectorConverter(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_FloatToVector();
  }
  function TwoWayConverter_0(convertToVector, convertFromVector) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new TwoWayConverterImpl(convertToVector, convertFromVector);
  }
  function TwoWayConverterImpl(convertToVector, convertFromVector) {
    this.convertToVector_1 = convertToVector;
    this.convertFromVector_1 = convertFromVector;
  }
  protoOf(TwoWayConverterImpl).get_convertToVector_s594l4_k$ = function () {
    return this.convertToVector_1;
  };
  protoOf(TwoWayConverterImpl).get_convertFromVector_kmewon_k$ = function () {
    return this.convertFromVector_1;
  };
  function get_VectorConverter_0(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntToVector();
  }
  function get_VectorConverter_1(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntSizeToVector();
  }
  function get_VectorConverter_2(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntOffsetToVector();
  }
  function get_VectorConverter_3(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_RectToVector();
  }
  function get_VectorConverter_4(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_SizeToVector();
  }
  function get_VectorConverter_5(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_OffsetToVector();
  }
  function get_VectorConverter_6(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpToVector();
  }
  function get_VectorConverter_7(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpOffsetToVector();
  }
  function FloatToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function FloatToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return it.get_value_j01efc_k$();
  }
  function IntToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function IntToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return numberToInt(it.get_value_j01efc_k$());
  }
  function DpToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(_Dp___get_value__impl__geb1vb(it.value_1));
  }
  function DpToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Dp(_Dp___init__impl__ms3zkb(it.get_value_j01efc_k$()));
  }
  function DpOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Dp___get_value__impl__geb1vb(_DpOffset___get_x__impl__uauqb5(it.packedValue_1)), _Dp___get_value__impl__geb1vb(_DpOffset___get_y__impl__1h898y(it.packedValue_1)));
  }
  function DpOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = it.get_v1_kntnng_k$();
    var tmp = _Dp___init__impl__ms3zkb(this_0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_1 = it.get_v2_kntnnf_k$();
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(this_1);
    return new DpOffset_0(DpOffset(tmp, tmp$ret$1));
  }
  function SizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Size___get_width__impl__58y75t(it.packedValue_1), _Size___get_height__impl__a04p02(it.packedValue_1));
  }
  function SizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Size(Size_0(it.get_v1_kntnng_k$(), it.get_v2_kntnnf_k$()));
  }
  function OffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Offset___get_x__impl__xvi35n(it.packedValue_1), _Offset___get_y__impl__8bzhra(it.packedValue_1));
  }
  function OffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Offset(Offset_0(it.get_v1_kntnng_k$(), it.get_v2_kntnnf_k$()));
  }
  function IntOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntOffset___get_x__impl__qiqr5o(it.packedValue_1), _IntOffset___get_y__impl__2avpwj(it.packedValue_1));
  }
  function IntOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = it.get_v1_kntnng_k$();
    var tmp = roundToInt(this_0);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = it.get_v2_kntnnf_k$();
    var tmp$ret$3 = roundToInt(this_1);
    return new IntOffset(IntOffset_0(tmp, tmp$ret$3));
  }
  function IntSizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntSize___get_width__impl__d9yl4o(it.packedValue_1), _IntSize___get_height__impl__prv63b(it.packedValue_1));
  }
  function IntSizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = it.get_v1_kntnng_k$();
    var tmp$ret$1 = roundToInt(this_0);
    var tmp = coerceAtLeast(tmp$ret$1, 0);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = it.get_v2_kntnnf_k$();
    var tmp$ret$3 = roundToInt(this_1);
    return new IntSize(IntSize_0(tmp, coerceAtLeast(tmp$ret$3, 0)));
  }
  function RectToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector4D(it.get_left_woprgw_k$(), it.get_top_18ivbo_k$(), it.get_right_ixz7xv_k$(), it.get_bottom_bj8ras_k$());
  }
  function RectToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Rect(it.get_v1_kntnng_k$(), it.get_v2_kntnnf_k$(), it.get_v3_kntnne_k$(), it.get_v4_kntnnd_k$());
  }
  var properties_initialized_VectorConverters_kt_cg0a6g;
  function _init_properties_VectorConverters_kt__g28mmu() {
    if (!properties_initialized_VectorConverters_kt_cg0a6g) {
      properties_initialized_VectorConverters_kt_cg0a6g = true;
      var tmp = FloatToVector$lambda;
      FloatToVector = TwoWayConverter_0(tmp, FloatToVector$lambda_0);
      var tmp_0 = IntToVector$lambda;
      IntToVector = TwoWayConverter_0(tmp_0, IntToVector$lambda_0);
      var tmp_1 = DpToVector$lambda;
      DpToVector = TwoWayConverter_0(tmp_1, DpToVector$lambda_0);
      var tmp_2 = DpOffsetToVector$lambda;
      DpOffsetToVector = TwoWayConverter_0(tmp_2, DpOffsetToVector$lambda_0);
      var tmp_3 = SizeToVector$lambda;
      SizeToVector = TwoWayConverter_0(tmp_3, SizeToVector$lambda_0);
      var tmp_4 = OffsetToVector$lambda;
      OffsetToVector = TwoWayConverter_0(tmp_4, OffsetToVector$lambda_0);
      var tmp_5 = IntOffsetToVector$lambda;
      IntOffsetToVector = TwoWayConverter_0(tmp_5, IntOffsetToVector$lambda_0);
      var tmp_6 = IntSizeToVector$lambda;
      IntSizeToVector = TwoWayConverter_0(tmp_6, IntSizeToVector$lambda_0);
      var tmp_7 = RectToVector$lambda;
      RectToVector = TwoWayConverter_0(tmp_7, RectToVector$lambda_0);
    }
  }
  function Spring() {
    Spring_instance = this;
    this.StiffnessHigh_1 = 10000.0;
    this.StiffnessMedium_1 = 1500.0;
    this.StiffnessMediumLow_1 = 400.0;
    this.StiffnessLow_1 = 200.0;
    this.StiffnessVeryLow_1 = 50.0;
    this.DampingRatioHighBouncy_1 = 0.2;
    this.DampingRatioMediumBouncy_1 = 0.5;
    this.DampingRatioLowBouncy_1 = 0.75;
    this.DampingRatioNoBouncy_1 = 1.0;
    this.DefaultDisplacementThreshold_1 = 0.01;
  }
  protoOf(Spring).get_StiffnessHigh_u6kma0_k$ = function () {
    return this.StiffnessHigh_1;
  };
  protoOf(Spring).get_StiffnessMedium_mjh6r9_k$ = function () {
    return this.StiffnessMedium_1;
  };
  protoOf(Spring).get_StiffnessMediumLow_62ltjd_k$ = function () {
    return this.StiffnessMediumLow_1;
  };
  protoOf(Spring).get_StiffnessLow_86wgla_k$ = function () {
    return this.StiffnessLow_1;
  };
  protoOf(Spring).get_StiffnessVeryLow_1smo6g_k$ = function () {
    return this.StiffnessVeryLow_1;
  };
  protoOf(Spring).get_DampingRatioHighBouncy_dr3500_k$ = function () {
    return this.DampingRatioHighBouncy_1;
  };
  protoOf(Spring).get_DampingRatioMediumBouncy_wgfzkt_k$ = function () {
    return this.DampingRatioMediumBouncy_1;
  };
  protoOf(Spring).get_DampingRatioLowBouncy_llm1zy_k$ = function () {
    return this.DampingRatioLowBouncy_1;
  };
  protoOf(Spring).get_DampingRatioNoBouncy_45ga5r_k$ = function () {
    return this.DampingRatioNoBouncy_1;
  };
  protoOf(Spring).get_DefaultDisplacementThreshold_1c58p0_k$ = function () {
    return this.DefaultDisplacementThreshold_1;
  };
  var Spring_instance;
  function Spring_getInstance() {
    if (Spring_instance == null)
      new Spring();
    return Spring_instance;
  }
  function VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $this) {
    var tmp;
    if (dampingRatio === VOID) {
      Spring_getInstance();
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      Spring_getInstance();
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    VectorizedSpringSpec.call($this, dampingRatio, stiffness, createSpringAnimations(visibilityThreshold, dampingRatio, stiffness));
    return $this;
  }
  function VectorizedSpringSpec_init_$Create$(dampingRatio, stiffness, visibilityThreshold) {
    return VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, objectCreate(protoOf(VectorizedSpringSpec)));
  }
  function VectorizedSpringSpec(dampingRatio, stiffness, anims) {
    this.dampingRatio_1 = dampingRatio;
    this.stiffness_1 = stiffness;
    this.$$delegate_0__1 = new VectorizedFloatAnimationSpec(anims);
  }
  protoOf(VectorizedSpringSpec).get_dampingRatio_syjss2_k$ = function () {
    return this.dampingRatio_1;
  };
  protoOf(VectorizedSpringSpec).get_stiffness_dt2sgm_k$ = function () {
    return this.stiffness_1;
  };
  protoOf(VectorizedSpringSpec).get_isInfinite_uffwnt_k$ = function () {
    return this.$$delegate_0__1.get_isInfinite_uffwnt_k$();
  };
  protoOf(VectorizedSpringSpec).getDurationNanos_c9o343_k$ = function (initialValue, targetValue, initialVelocity) {
    return this.$$delegate_0__1.getDurationNanos_c9o343_k$(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).getEndVelocity_j9v6ly_k$ = function (initialValue, targetValue, initialVelocity) {
    return this.$$delegate_0__1.getEndVelocity_j9v6ly_k$(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).getValueFromNanos_xg3j38_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.$$delegate_0__1.getValueFromNanos_xg3j38_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).getVelocityFromNanos_wafrjo_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.$$delegate_0__1.getVelocityFromNanos_wafrjo_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function VectorizedFiniteAnimationSpec() {
  }
  function VectorizedAnimationSpec() {
  }
  function Animations() {
  }
  function _get_anims__juyc8h($this) {
    return $this.anims_1;
  }
  function _set_valueVector__dppd9t_0($this, _set____db54di) {
    $this.valueVector_1 = _set____db54di;
  }
  function _get_valueVector__r10idf_0($this) {
    var tmp = $this.valueVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _set_velocityVector__vm30d3_1($this, _set____db54di) {
    $this.velocityVector_1 = _set____db54di;
  }
  function _get_velocityVector__dvxlkl_1($this) {
    var tmp = $this.velocityVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _set_endVelocityVector__h8kq2($this, _set____db54di) {
    $this.endVelocityVector_1 = _set____db54di;
  }
  function _get_endVelocityVector__l8kbka($this) {
    var tmp = $this.endVelocityVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('endVelocityVector');
    }
  }
  function VectorizedFloatAnimationSpec_init_$Init$(anim, $this) {
    VectorizedFloatAnimationSpec.call($this, new VectorizedFloatAnimationSpec$1(anim));
    return $this;
  }
  function VectorizedFloatAnimationSpec_init_$Create$(anim) {
    return VectorizedFloatAnimationSpec_init_$Init$(anim, objectCreate(protoOf(VectorizedFloatAnimationSpec)));
  }
  function VectorizedFloatAnimationSpec$1($anim) {
    this.$anim_1 = $anim;
  }
  protoOf(VectorizedFloatAnimationSpec$1).get_c1px32_k$ = function (index) {
    return this.$anim_1;
  };
  function VectorizedFloatAnimationSpec(anims) {
    this.anims_1 = anims;
  }
  protoOf(VectorizedFloatAnimationSpec).getValueFromNanos_xg3j38_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.valueVector_1 == null)) {
      this.valueVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf_0(this).get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf_0(this).set_ln2e3z_k$(i, this.anims_1.get_c1px32_k$(i).getValueFromNanos_rdghrw_k$(playTimeNanos, initialValue.get_jz2icb_k$(i), targetValue.get_jz2icb_k$(i), initialVelocity.get_jz2icb_k$(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf_0(this);
  };
  protoOf(VectorizedFloatAnimationSpec).getVelocityFromNanos_wafrjo_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.velocityVector_1 == null)) {
      this.velocityVector_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl_1(this).get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl_1(this).set_ln2e3z_k$(i, this.anims_1.get_c1px32_k$(i).getVelocityFromNanos_d1b1ck_k$(playTimeNanos, initialValue.get_jz2icb_k$(i), targetValue.get_jz2icb_k$(i), initialVelocity.get_jz2icb_k$(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl_1(this);
  };
  protoOf(VectorizedFloatAnimationSpec).getEndVelocity_j9v6ly_k$ = function (initialValue, targetValue, initialVelocity) {
    if (!!(this.endVelocityVector_1 == null)) {
      this.endVelocityVector_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_endVelocityVector__l8kbka(this).get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_endVelocityVector__l8kbka(this).set_ln2e3z_k$(i, this.anims_1.get_c1px32_k$(i).getEndVelocity_jstvkm_k$(initialValue.get_jz2icb_k$(i), targetValue.get_jz2icb_k$(i), initialVelocity.get_jz2icb_k$(i)));
      }
       while (inductionVariable < last);
    return _get_endVelocityVector__l8kbka(this);
  };
  protoOf(VectorizedFloatAnimationSpec).getDurationNanos_c9o343_k$ = function (initialValue, targetValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    // Inline function 'kotlin.collections.forEach' call
    var progression = until(0, initialValue.get_size_au00c9_k$());
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.VectorizedFloatAnimationSpec.getDurationNanos.<anonymous>' call
        var it = element;
        var tmp0 = maxDuration;
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = this.anims_1.get_c1px32_k$(it).getDurationNanos_taoclf_k$(initialValue.get_jz2icb_k$(it), targetValue.get_jz2icb_k$(it), initialVelocity.get_jz2icb_k$(it));
        maxDuration = tmp0.compareTo_9jj042_k$(b) >= 0 ? tmp0 : b;
      }
       while (!(element === last));
    return maxDuration;
  };
  function createSpringAnimations(visibilityThreshold, dampingRatio, stiffness) {
    if (!(visibilityThreshold == null)) {
      return new createSpringAnimations$1(visibilityThreshold, dampingRatio, stiffness);
    } else {
      return new createSpringAnimations$2(dampingRatio, stiffness);
    }
  }
  function _get_animation__gfmj03($this) {
    return $this.animation_1;
  }
  function _get_repeatMode__51xaqb($this) {
    return $this.repeatMode_1;
  }
  function VectorizedInfiniteRepeatableSpec_init_$Init$(animation, repeatMode, $this) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    VectorizedInfiniteRepeatableSpec.call($this, animation, repeatMode, _StartOffset___init__impl__615djw_0(0));
    return $this;
  }
  function VectorizedInfiniteRepeatableSpec_init_$Create$(animation, repeatMode) {
    return VectorizedInfiniteRepeatableSpec_init_$Init$(animation, repeatMode, objectCreate(protoOf(VectorizedInfiniteRepeatableSpec)));
  }
  function _get_initialOffsetNanos__jwv1fh($this) {
    return $this.initialOffsetNanos_1;
  }
  function repetitionPlayTimeNanos($this, playTimeNanos) {
    if (playTimeNanos.plus_r93sks_k$($this.initialOffsetNanos_1).compareTo_9jj042_k$(new Long(0, 0)) <= 0) {
      return new Long(0, 0);
    } else {
      var postOffsetPlayTimeNanos = playTimeNanos.plus_r93sks_k$($this.initialOffsetNanos_1);
      var repeatsCount = postOffsetPlayTimeNanos.div_jun7gj_k$($this.durationNanos_1);
      var tmp;
      if ($this.repeatMode_1.equals(RepeatMode_Restart_getInstance())) {
        tmp = true;
      } else {
        // Inline function 'kotlin.Long.rem' call
        tmp = repeatsCount.rem_bsnl9o_k$(toLong(2)).equals(new Long(0, 0));
      }
      if (tmp) {
        return postOffsetPlayTimeNanos.minus_mfbszm_k$(repeatsCount.times_nfzjiw_k$($this.durationNanos_1));
      } else {
        // Inline function 'kotlin.Long.plus' call
        return repeatsCount.plus_r93sks_k$(toLong(1)).times_nfzjiw_k$($this.durationNanos_1).minus_mfbszm_k$(postOffsetPlayTimeNanos);
      }
    }
  }
  function repetitionStartVelocity($this, playTimeNanos, start, startVelocity, end) {
    var tmp;
    if (playTimeNanos.plus_r93sks_k$($this.initialOffsetNanos_1).compareTo_9jj042_k$($this.durationNanos_1) > 0) {
      tmp = $this.animation_1.getVelocityFromNanos_wafrjo_k$($this.durationNanos_1.minus_mfbszm_k$($this.initialOffsetNanos_1), start, end, startVelocity);
    } else {
      tmp = startVelocity;
    }
    return tmp;
  }
  function VectorizedInfiniteRepeatableSpec(animation, repeatMode, initialStartOffset) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    initialStartOffset = initialStartOffset === VOID ? _StartOffset___init__impl__615djw_0(0) : initialStartOffset;
    this.animation_1 = animation;
    this.repeatMode_1 = repeatMode;
    this.durationNanos_1 = numberToLong(this.animation_1.get_delayMillis_d968n4_k$() + this.animation_1.get_durationMillis_pqx05f_k$() | 0).times_nfzjiw_k$(new Long(1000000, 0));
    this.initialOffsetNanos_1 = _StartOffset___get_value__impl__8sikig(initialStartOffset).times_nfzjiw_k$(new Long(1000000, 0));
  }
  protoOf(VectorizedInfiniteRepeatableSpec).get_isInfinite_uffwnt_k$ = function () {
    return true;
  };
  protoOf(VectorizedInfiniteRepeatableSpec).get_durationNanos_82ej8f_k$ = function () {
    return this.durationNanos_1;
  };
  protoOf(VectorizedInfiniteRepeatableSpec).getValueFromNanos_xg3j38_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.animation_1.getValueFromNanos_xg3j38_k$(repetitionPlayTimeNanos(this, playTimeNanos), initialValue, targetValue, repetitionStartVelocity(this, playTimeNanos, initialValue, initialVelocity, targetValue));
  };
  protoOf(VectorizedInfiniteRepeatableSpec).getVelocityFromNanos_wafrjo_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.animation_1.getVelocityFromNanos_wafrjo_k$(repetitionPlayTimeNanos(this, playTimeNanos), initialValue, targetValue, repetitionStartVelocity(this, playTimeNanos, initialValue, initialVelocity, targetValue));
  };
  protoOf(VectorizedInfiniteRepeatableSpec).getDurationNanos_c9o343_k$ = function (initialValue, targetValue, initialVelocity) {
    return new Long(-1, 2147483647);
  };
  function VectorizedDurationBasedAnimationSpec() {
  }
  function _ArcMode___init__impl__iiwx98(value) {
    return value;
  }
  function _ArcMode___get_value__impl__j60x0o($this) {
    return $this;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.ArcAbove_1 = _ArcMode___init__impl__iiwx98(5);
    this.ArcBelow_1 = _ArcMode___init__impl__iiwx98(4);
    this.ArcLinear_1 = _ArcMode___init__impl__iiwx98(0);
  }
  protoOf(Companion_3).get_ArcAbove_ltcwcl_k$ = function () {
    return this.ArcAbove_1;
  };
  protoOf(Companion_3).get_ArcBelow_sw7yhl_k$ = function () {
    return this.ArcBelow_1;
  };
  protoOf(Companion_3).get_ArcLinear_4dmwqp_k$ = function () {
    return this.ArcLinear_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_12() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ArcMode__toString_impl_wsn638($this) {
    return 'ArcMode(value=' + $this + ')';
  }
  function ArcMode__hashCode_impl_ghaz31($this) {
    return $this;
  }
  function ArcMode__equals_impl_alzc5j($this, other) {
    if (!(other instanceof ArcMode))
      return false;
    if (!($this === (other instanceof ArcMode ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ArcMode(value) {
    Companion_getInstance_12();
    this.value_1 = value;
  }
  protoOf(ArcMode).toString = function () {
    return ArcMode__toString_impl_wsn638(this.value_1);
  };
  protoOf(ArcMode).hashCode = function () {
    return ArcMode__hashCode_impl_ghaz31(this.value_1);
  };
  protoOf(ArcMode).equals = function (other) {
    return ArcMode__equals_impl_alzc5j(this.value_1, other);
  };
  function _get_timestamps__7fn5de($this) {
    return $this.timestamps_1;
  }
  function _get_keyframes__i12zvw($this) {
    return $this.keyframes_1;
  }
  function _get_defaultEasing__9c32it($this) {
    return $this.defaultEasing_1;
  }
  function _get_initialArcMode__dxv2fa($this) {
    return $this.initialArcMode_1;
  }
  function VectorizedKeyframesSpec_init_$Init$(keyframes, durationMillis, delayMillis, $this) {
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.animation.core.VectorizedKeyframesSpec.<init>.<anonymous>' call
    var times = new MutableIntList(keyframes.get_size_woubt6_k$() + 2 | 0);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = keyframes.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'androidx.compose.animation.core.VectorizedKeyframesSpec.<init>.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var t = element.get_key_18j28a_k$();
      times.add_lnluon_k$(t);
    }
    if (!keyframes.containsKey_aw81wo_k$(0)) {
      times.add_6jazo1_k$(0, 0);
    }
    if (!keyframes.containsKey_aw81wo_k$(durationMillis)) {
      times.add_lnluon_k$(durationMillis);
    }
    if (times.isNotEmpty_cjxbwk_k$()) {
      times.sort_6ihik2_k$();
    }
    var tmp = times;
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.animation.core.VectorizedKeyframesSpec.<init>.<anonymous>' call
    var timeToInfoMap = new MutableIntObjectMap();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = keyframes.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
      // Inline function 'androidx.compose.animation.core.VectorizedKeyframesSpec.<init>.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var time = element_0.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var valueEasing = element_0.get_value_j01efc_k$();
      timeToInfoMap.set_hupg49_k$(time, new VectorizedKeyframeSpecElementInfo(valueEasing.get_first_irdx8n_k$(), valueEasing.get_second_jf7fjx_k$(), Companion_getInstance_12().ArcLinear_1));
    }
    VectorizedKeyframesSpec.call($this, tmp, timeToInfoMap, durationMillis, delayMillis, get_LinearEasing(), Companion_getInstance_12().ArcLinear_1);
    return $this;
  }
  function VectorizedKeyframesSpec_init_$Create$(keyframes, durationMillis, delayMillis) {
    return VectorizedKeyframesSpec_init_$Init$(keyframes, durationMillis, delayMillis, objectCreate(protoOf(VectorizedKeyframesSpec)));
  }
  function _set_modes__hv60ph($this, _set____db54di) {
    $this.modes_1 = _set____db54di;
  }
  function _get_modes__e5yfrz($this) {
    var tmp = $this.modes_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('modes');
    }
  }
  function _set_times__l3ccsf($this, _set____db54di) {
    $this.times_1 = _set____db54di;
  }
  function _get_times__axs3p1($this) {
    var tmp = $this.times_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('times');
    }
  }
  function _set_valueVector__dppd9t_1($this, _set____db54di) {
    $this.valueVector_1 = _set____db54di;
  }
  function _get_valueVector__r10idf_1($this) {
    var tmp = $this.valueVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _set_velocityVector__vm30d3_2($this, _set____db54di) {
    $this.velocityVector_1 = _set____db54di;
  }
  function _get_velocityVector__dvxlkl_2($this) {
    var tmp = $this.velocityVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _set_lastInitialValue__ljswzw($this, _set____db54di) {
    $this.lastInitialValue_1 = _set____db54di;
  }
  function _get_lastInitialValue__7jbc2w($this) {
    var tmp = $this.lastInitialValue_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('lastInitialValue');
    }
  }
  function _set_lastTargetValue__5a9ot7($this, _set____db54di) {
    $this.lastTargetValue_1 = _set____db54di;
  }
  function _get_lastTargetValue__fdzwbr($this) {
    var tmp = $this.lastTargetValue_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('lastTargetValue');
    }
  }
  function _set_posArray__ogcfla($this, _set____db54di) {
    $this.posArray_1 = _set____db54di;
  }
  function _get_posArray__xrvax2($this) {
    var tmp = $this.posArray_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('posArray');
    }
  }
  function _set_slopeArray__fjfr4n($this, _set____db54di) {
    $this.slopeArray_1 = _set____db54di;
  }
  function _get_slopeArray__uloc9v($this) {
    var tmp = $this.slopeArray_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('slopeArray');
    }
  }
  function _set_arcSpline__2kksri($this, _set____db54di) {
    $this.arcSpline_1 = _set____db54di;
  }
  function _get_arcSpline__qq9nn2($this) {
    var tmp = $this.arcSpline_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('arcSpline');
    }
  }
  function init_0($this, initialValue, targetValue, initialVelocity) {
    var requiresArcSpline = {_v: !($this.arcSpline_1 == null)};
    if (!!($this.valueVector_1 == null)) {
      $this.valueVector_1 = newInstance(initialValue);
      $this.velocityVector_1 = newInstance(initialVelocity);
      var tmp = $this;
      var tmp_0 = 0;
      var tmp_1 = $this.timestamps_1.get_size_woubt6_k$();
      var tmp_2 = new Float32Array(tmp_1);
      while (tmp_0 < tmp_1) {
        var tmp_3 = tmp_0;
        tmp_2[tmp_3] = $this.timestamps_1.get_c1px32_k$(tmp_3) / (new Long(1000, 0)).toFloat_jhbgwv_k$();
        tmp_0 = tmp_0 + 1 | 0;
      }
      tmp.times_1 = tmp_2;
      var tmp_4 = $this;
      var tmp_5 = 0;
      var tmp_6 = $this.timestamps_1.get_size_woubt6_k$();
      var tmp_7 = new Int32Array(tmp_6);
      while (tmp_5 < tmp_6) {
        var tmp_8 = tmp_5;
        var tmp0_safe_receiver = $this.keyframes_1.get_c1px32_k$($this.timestamps_1.get_c1px32_k$(tmp_8));
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.arcMode_1;
        var tmp_9;
        var tmp_10 = tmp1_elvis_lhs;
        if ((tmp_10 == null ? null : new ArcMode(tmp_10)) == null) {
          tmp_9 = $this.initialArcMode_1;
        } else {
          tmp_9 = tmp1_elvis_lhs;
        }
        var mode = tmp_9;
        if (!(mode === Companion_getInstance_12().ArcLinear_1)) {
          requiresArcSpline._v = true;
        }
        tmp_7[tmp_8] = _ArcMode___get_value__impl__j60x0o(mode);
        tmp_5 = tmp_5 + 1 | 0;
      }
      tmp_4.modes_1 = tmp_7;
    }
    if (!requiresArcSpline._v) {
      return Unit_getInstance();
    }
    if (!!($this.arcSpline_1 == null) || !equals(_get_lastInitialValue__7jbc2w($this), initialValue) || !equals(_get_lastTargetValue__fdzwbr($this), targetValue)) {
      $this.lastInitialValue_1 = initialValue;
      $this.lastTargetValue_1 = targetValue;
      var dimensionCount = (initialValue.get_size_au00c9_k$() % 2 | 0) + initialValue.get_size_au00c9_k$() | 0;
      $this.posArray_1 = new Float32Array(dimensionCount);
      $this.slopeArray_1 = new Float32Array(dimensionCount);
      var tmp_11 = 0;
      var tmp_12 = $this.timestamps_1.get_size_woubt6_k$();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_13 = fillArrayVal(Array(tmp_12), null);
      while (tmp_11 < tmp_12) {
        var tmp_14 = tmp_11;
        var timestamp = $this.timestamps_1.get_c1px32_k$(tmp_14);
        var tmp_15;
        if (timestamp === 0) {
          var tmp_16;
          if (!$this.keyframes_1.contains_7q95ev_k$(timestamp)) {
            var tmp_17 = 0;
            var tmp_18 = new Float32Array(dimensionCount);
            var tmp0 = AnimationVector$get$ref(initialValue);
            while (tmp_17 < dimensionCount) {
              var tmp_19 = tmp_17;
              tmp_18[tmp_19] = tmp0(tmp_19);
              tmp_17 = tmp_17 + 1 | 0;
            }
            tmp_16 = tmp_18;
          } else {
            var tmp_20 = 0;
            var tmp_21 = new Float32Array(dimensionCount);
            var tmp0_0 = AnimationVector$get$ref_0(ensureNotNull($this.keyframes_1.get_c1px32_k$(timestamp)).vectorValue_1);
            while (tmp_20 < dimensionCount) {
              var tmp_22 = tmp_20;
              tmp_21[tmp_22] = tmp0_0(tmp_22);
              tmp_20 = tmp_20 + 1 | 0;
            }
            tmp_16 = tmp_21;
          }
          tmp_15 = tmp_16;
        } else if (timestamp === $this.durationMillis_1) {
          var tmp_23;
          if (!$this.keyframes_1.contains_7q95ev_k$(timestamp)) {
            var tmp_24 = 0;
            var tmp_25 = new Float32Array(dimensionCount);
            var tmp0_1 = AnimationVector$get$ref_1(targetValue);
            while (tmp_24 < dimensionCount) {
              var tmp_26 = tmp_24;
              tmp_25[tmp_26] = tmp0_1(tmp_26);
              tmp_24 = tmp_24 + 1 | 0;
            }
            tmp_23 = tmp_25;
          } else {
            var tmp_27 = 0;
            var tmp_28 = new Float32Array(dimensionCount);
            var tmp0_2 = AnimationVector$get$ref_2(ensureNotNull($this.keyframes_1.get_c1px32_k$(timestamp)).vectorValue_1);
            while (tmp_27 < dimensionCount) {
              var tmp_29 = tmp_27;
              tmp_28[tmp_29] = tmp0_2(tmp_29);
              tmp_27 = tmp_27 + 1 | 0;
            }
            tmp_23 = tmp_28;
          }
          tmp_15 = tmp_23;
        } else {
          var tmp_30 = 0;
          var tmp_31 = new Float32Array(dimensionCount);
          var tmp0_3 = AnimationVector$get$ref_3(ensureNotNull($this.keyframes_1.get_c1px32_k$(timestamp)).vectorValue_1);
          while (tmp_30 < dimensionCount) {
            var tmp_32 = tmp_30;
            tmp_31[tmp_32] = tmp0_3(tmp_32);
            tmp_30 = tmp_30 + 1 | 0;
          }
          tmp_15 = tmp_31;
        }
        tmp_13[tmp_14] = tmp_15;
        tmp_11 = tmp_11 + 1 | 0;
      }
      var values = tmp_13;
      $this.arcSpline_1 = new ArcSpline(_get_modes__e5yfrz($this), _get_times__axs3p1($this), values);
    }
  }
  function getEasedTime($this, timeMillis) {
    var index = findEntryForTimeMillis($this, timeMillis);
    return getEasedTimeFromIndex($this, index, timeMillis, false);
  }
  function getEasedTimeFromIndex($this, index, timeMillis, asFraction) {
    // Inline function 'androidx.collection.IntList.lastIndex' call
    if (index >= ($this.timestamps_1.get__size_2j67yy_k$() - 1 | 0)) {
      return timeMillis / (new Long(1000, 0)).toFloat_jhbgwv_k$();
    }
    var timeMin = $this.timestamps_1.get_c1px32_k$(index);
    var timeMax = $this.timestamps_1.get_c1px32_k$(index + 1 | 0);
    if (timeMillis === timeMin) {
      return timeMin / (new Long(1000, 0)).toFloat_jhbgwv_k$();
    }
    var timeRange = timeMax - timeMin | 0;
    var tmp0_safe_receiver = $this.keyframes_1.get_c1px32_k$(timeMin);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.easing_1;
    var easing = tmp1_elvis_lhs == null ? $this.defaultEasing_1 : tmp1_elvis_lhs;
    var rawFraction = (timeMillis - timeMin | 0) / timeRange;
    var easedFraction = easing.transform_twmo38_k$(rawFraction);
    if (asFraction) {
      return easedFraction;
    }
    return (timeRange * easedFraction + timeMin) / (new Long(1000, 0)).toFloat_jhbgwv_k$();
  }
  function findEntryForTimeMillis($this, timeMillis) {
    var index = binarySearch($this.timestamps_1, timeMillis);
    return index < -1 ? -(index + 2 | 0) | 0 : index;
  }
  function AnimationVector$get$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.get_jz2icb_k$(p0);
    };
    l.callableName = 'get';
    return l;
  }
  function AnimationVector$get$ref_0($boundThis) {
    var l = function (p0) {
      return $boundThis.get_jz2icb_k$(p0);
    };
    l.callableName = 'get';
    return l;
  }
  function AnimationVector$get$ref_1($boundThis) {
    var l = function (p0) {
      return $boundThis.get_jz2icb_k$(p0);
    };
    l.callableName = 'get';
    return l;
  }
  function AnimationVector$get$ref_2($boundThis) {
    var l = function (p0) {
      return $boundThis.get_jz2icb_k$(p0);
    };
    l.callableName = 'get';
    return l;
  }
  function AnimationVector$get$ref_3($boundThis) {
    var l = function (p0) {
      return $boundThis.get_jz2icb_k$(p0);
    };
    l.callableName = 'get';
    return l;
  }
  function VectorizedKeyframesSpec(timestamps, keyframes, durationMillis, delayMillis, defaultEasing, initialArcMode) {
    this.timestamps_1 = timestamps;
    this.keyframes_1 = keyframes;
    this.durationMillis_1 = durationMillis;
    this.delayMillis_1 = delayMillis;
    this.defaultEasing_1 = defaultEasing;
    this.initialArcMode_1 = initialArcMode;
  }
  protoOf(VectorizedKeyframesSpec).get_durationMillis_pqx05f_k$ = function () {
    return this.durationMillis_1;
  };
  protoOf(VectorizedKeyframesSpec).get_delayMillis_d968n4_k$ = function () {
    return this.delayMillis_1;
  };
  protoOf(VectorizedKeyframesSpec).getValueFromNanos_xg3j38_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_jun7gj_k$(new Long(1000000, 0));
    var clampedPlayTime = clampPlayTime(this, playTimeMillis).toInt_1tsl84_k$();
    if (this.keyframes_1.contains_7q95ev_k$(clampedPlayTime)) {
      return ensureNotNull(this.keyframes_1.get_c1px32_k$(clampedPlayTime)).vectorValue_1;
    }
    if (clampedPlayTime >= this.durationMillis_1) {
      return targetValue;
    } else if (clampedPlayTime <= 0)
      return initialValue;
    init_0(this, initialValue, targetValue, initialVelocity);
    if (!(this.arcSpline_1 == null)) {
      var easedTime = getEasedTime(this, clampedPlayTime);
      _get_arcSpline__qq9nn2(this).getPos_a1xi8i_k$(easedTime, _get_posArray__xrvax2(this));
      var inductionVariable = 0;
      var last = _get_posArray__xrvax2(this).length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          _get_valueVector__r10idf_1(this).set_ln2e3z_k$(i, _get_posArray__xrvax2(this)[i]);
        }
         while (inductionVariable <= last);
      return _get_valueVector__r10idf_1(this);
    }
    var index = findEntryForTimeMillis(this, clampedPlayTime);
    var easedTime_0 = getEasedTimeFromIndex(this, index, clampedPlayTime, true);
    var timestampStart = this.timestamps_1.get_c1px32_k$(index);
    var tmp;
    if (this.keyframes_1.contains_7q95ev_k$(timestampStart)) {
      tmp = ensureNotNull(this.keyframes_1.get_c1px32_k$(timestampStart)).vectorValue_1;
    } else {
      tmp = initialValue;
    }
    var startValue = tmp;
    var timestampEnd = this.timestamps_1.get_c1px32_k$(index + 1 | 0);
    var tmp_0;
    if (this.keyframes_1.contains_7q95ev_k$(timestampEnd)) {
      tmp_0 = ensureNotNull(this.keyframes_1.get_c1px32_k$(timestampEnd)).vectorValue_1;
    } else {
      tmp_0 = targetValue;
    }
    var endValue = tmp_0;
    var inductionVariable_0 = 0;
    var last_0 = _get_valueVector__r10idf_1(this).get_size_au00c9_k$();
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        _get_valueVector__r10idf_1(this).set_ln2e3z_k$(i_0, lerp(startValue.get_jz2icb_k$(i_0), endValue.get_jz2icb_k$(i_0), easedTime_0));
      }
       while (inductionVariable_0 < last_0);
    return _get_valueVector__r10idf_1(this);
  };
  protoOf(VectorizedKeyframesSpec).getVelocityFromNanos_wafrjo_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_jun7gj_k$(new Long(1000000, 0));
    var clampedPlayTime = clampPlayTime(this, playTimeMillis);
    if (clampedPlayTime.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
      return initialVelocity;
    }
    init_0(this, initialValue, targetValue, initialVelocity);
    if (!(this.arcSpline_1 == null)) {
      var easedTime = getEasedTime(this, clampedPlayTime.toInt_1tsl84_k$());
      _get_arcSpline__qq9nn2(this).getSlope_uth26d_k$(easedTime, _get_slopeArray__uloc9v(this));
      var inductionVariable = 0;
      var last = _get_slopeArray__uloc9v(this).length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          _get_velocityVector__dvxlkl_2(this).set_ln2e3z_k$(i, _get_slopeArray__uloc9v(this)[i]);
        }
         while (inductionVariable <= last);
      return _get_velocityVector__dvxlkl_2(this);
    }
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0 = clampedPlayTime.minus_mfbszm_k$(toLong(1));
    var startNum = getValueFromMillis(this, tmp$ret$0, initialValue, targetValue, initialVelocity);
    var endNum = getValueFromMillis(this, clampedPlayTime, initialValue, targetValue, initialVelocity);
    var inductionVariable_0 = 0;
    var last_0 = startNum.get_size_au00c9_k$();
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        _get_velocityVector__dvxlkl_2(this).set_ln2e3z_k$(i_0, (startNum.get_jz2icb_k$(i_0) - endNum.get_jz2icb_k$(i_0)) * 1000.0);
      }
       while (inductionVariable_0 < last_0);
    return _get_velocityVector__dvxlkl_2(this);
  };
  function VectorizedKeyframeSpecElementInfo(vectorValue, easing, arcMode) {
    this.vectorValue_1 = vectorValue;
    this.easing_1 = easing;
    this.arcMode_1 = arcMode;
  }
  protoOf(VectorizedKeyframeSpecElementInfo).get_vectorValue_ndf4p1_k$ = function () {
    return this.vectorValue_1;
  };
  protoOf(VectorizedKeyframeSpecElementInfo).get_easing_cqnn04_k$ = function () {
    return this.easing_1;
  };
  protoOf(VectorizedKeyframeSpecElementInfo).get_arcMode_skgp7h_k$ = function () {
    return this.arcMode_1;
  };
  protoOf(VectorizedKeyframeSpecElementInfo).component1_7eebsc_k$ = function () {
    return this.vectorValue_1;
  };
  protoOf(VectorizedKeyframeSpecElementInfo).component2_7eebsb_k$ = function () {
    return this.easing_1;
  };
  protoOf(VectorizedKeyframeSpecElementInfo).component3_g1hvp5_k$ = function () {
    return this.arcMode_1;
  };
  protoOf(VectorizedKeyframeSpecElementInfo).copy_mjcnjp_k$ = function (vectorValue, easing, arcMode) {
    return new VectorizedKeyframeSpecElementInfo(vectorValue, easing, arcMode);
  };
  protoOf(VectorizedKeyframeSpecElementInfo).copy$default_dv013i_k$ = function (vectorValue, easing, arcMode, $super) {
    vectorValue = vectorValue === VOID ? this.vectorValue_1 : vectorValue;
    easing = easing === VOID ? this.easing_1 : easing;
    arcMode = arcMode === VOID ? this.arcMode_1 : arcMode;
    return $super === VOID ? this.copy_mjcnjp_k$(vectorValue, easing, arcMode) : $super.copy_mjcnjp_k$.call(this, vectorValue, easing, new ArcMode(arcMode));
  };
  protoOf(VectorizedKeyframeSpecElementInfo).toString = function () {
    return 'VectorizedKeyframeSpecElementInfo(vectorValue=' + toString(this.vectorValue_1) + ', easing=' + toString(this.easing_1) + ', arcMode=' + ArcMode__toString_impl_wsn638(this.arcMode_1) + ')';
  };
  protoOf(VectorizedKeyframeSpecElementInfo).hashCode = function () {
    var result = hashCode(this.vectorValue_1);
    result = imul(result, 31) + hashCode(this.easing_1) | 0;
    result = imul(result, 31) + ArcMode__hashCode_impl_ghaz31(this.arcMode_1) | 0;
    return result;
  };
  protoOf(VectorizedKeyframeSpecElementInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VectorizedKeyframeSpecElementInfo))
      return false;
    var tmp0_other_with_cast = other instanceof VectorizedKeyframeSpecElementInfo ? other : THROW_CCE();
    if (!equals(this.vectorValue_1, tmp0_other_with_cast.vectorValue_1))
      return false;
    if (!equals(this.easing_1, tmp0_other_with_cast.easing_1))
      return false;
    if (!(this.arcMode_1 === tmp0_other_with_cast.arcMode_1))
      return false;
    return true;
  };
  function _get_anim__d3v13u($this) {
    return $this.anim_1;
  }
  function VectorizedTweenSpec(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.durationMillis_1 = durationMillis;
    this.delayMillis_1 = delayMillis;
    this.easing_1 = easing;
    this.anim_1 = VectorizedFloatAnimationSpec_init_$Create$(new FloatTweenSpec(this.durationMillis_1, this.delayMillis_1, this.easing_1));
  }
  protoOf(VectorizedTweenSpec).get_durationMillis_pqx05f_k$ = function () {
    return this.durationMillis_1;
  };
  protoOf(VectorizedTweenSpec).get_delayMillis_d968n4_k$ = function () {
    return this.delayMillis_1;
  };
  protoOf(VectorizedTweenSpec).get_easing_cqnn04_k$ = function () {
    return this.easing_1;
  };
  protoOf(VectorizedTweenSpec).getValueFromNanos_xg3j38_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.anim_1.getValueFromNanos_xg3j38_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedTweenSpec).getVelocityFromNanos_wafrjo_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.anim_1.getVelocityFromNanos_wafrjo_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function VectorizedSnapSpec(delayMillis) {
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    this.delayMillis_1 = delayMillis;
  }
  protoOf(VectorizedSnapSpec).get_delayMillis_d968n4_k$ = function () {
    return this.delayMillis_1;
  };
  protoOf(VectorizedSnapSpec).getValueFromNanos_xg3j38_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (playTimeNanos.compareTo_9jj042_k$(numberToLong(this.delayMillis_1).times_nfzjiw_k$(new Long(1000000, 0))) < 0) {
      return initialValue;
    } else {
      return targetValue;
    }
  };
  protoOf(VectorizedSnapSpec).getVelocityFromNanos_wafrjo_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return initialVelocity;
  };
  protoOf(VectorizedSnapSpec).get_durationMillis_pqx05f_k$ = function () {
    return 0;
  };
  function clampPlayTime(_this__u8e3s4, playTime) {
    // Inline function 'kotlin.Long.minus' call
    var other = _this__u8e3s4.get_delayMillis_d968n4_k$();
    var tmp$ret$0 = playTime.minus_mfbszm_k$(toLong(other));
    return coerceIn_0(tmp$ret$0, new Long(0, 0), toLong(_this__u8e3s4.get_durationMillis_pqx05f_k$()));
  }
  function getValueFromMillis(_this__u8e3s4, playTimeMillis, start, end, startVelocity) {
    return _this__u8e3s4.getValueFromNanos_xg3j38_k$(playTimeMillis.times_nfzjiw_k$(new Long(1000000, 0)), start, end, startVelocity);
  }
  function _get_anims__juyc8h_0($this) {
    return $this.anims_1;
  }
  function createSpringAnimations$1($visibilityThreshold, $dampingRatio, $stiffness) {
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = until(0, $visibilityThreshold.get_size_au00c9_k$());
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var inductionVariable = this_0.get_first_irdx8n_k$();
    var last = this_0.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var item = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.<no name provided>.anims.<anonymous>' call
        var index = item;
        var tmp$ret$0 = new FloatSpringSpec($dampingRatio, $stiffness, $visibilityThreshold.get_jz2icb_k$(index));
        destination.add_utx5q5_k$(tmp$ret$0);
      }
       while (!(item === last));
    tmp.anims_1 = destination;
  }
  protoOf(createSpringAnimations$1).get_c1px32_k$ = function (index) {
    return this.anims_1.get_c1px32_k$(index);
  };
  function _get_anim__d3v13u_0($this) {
    return $this.anim_1;
  }
  function createSpringAnimations$2($dampingRatio, $stiffness) {
    this.anim_1 = new FloatSpringSpec($dampingRatio, $stiffness);
  }
  protoOf(createSpringAnimations$2).get_c1px32_k$ = function (index) {
    return this.anim_1;
  };
  function VectorizedDecayAnimationSpec() {
  }
  function get_rectVisibilityThreshold() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return rectVisibilityThreshold;
  }
  var rectVisibilityThreshold;
  function get_visibilityThresholdMap() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return visibilityThresholdMap;
  }
  var visibilityThresholdMap;
  function get_VisibilityThreshold(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0.1);
  }
  function get_VisibilityThreshold_0(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return Size_0(0.5, 0.5);
  }
  function get_VisibilityThreshold_1(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return Offset_0(0.5, 0.5);
  }
  function get_VisibilityThreshold_2(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return get_rectVisibilityThreshold();
  }
  function get_VisibilityThreshold_3(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return 1;
  }
  function get_VisibilityThreshold_4(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return IntOffset_0(1, 1);
  }
  function get_VisibilityThreshold_5(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return IntSize_0(1, 1);
  }
  function get_PxVisibilityThreshold() {
    return PxVisibilityThreshold;
  }
  var PxVisibilityThreshold;
  function get_DpVisibilityThreshold() {
    return DpVisibilityThreshold;
  }
  var DpVisibilityThreshold;
  var properties_initialized_VisibilityThresholds_kt_k6rdp8;
  function _init_properties_VisibilityThresholds_kt__rvu6yi() {
    if (!properties_initialized_VisibilityThresholds_kt_k6rdp8) {
      properties_initialized_VisibilityThresholds_kt_k6rdp8 = true;
      rectVisibilityThreshold = new Rect(0.5, 0.5, 0.5, 0.5);
      visibilityThresholdMap = mapOf([to(get_VectorConverter_0(IntCompanionObject_getInstance()), 1.0), to(get_VectorConverter_1(Companion_getInstance_5()), 1.0), to(get_VectorConverter_2(Companion_getInstance_4()), 1.0), to(get_VectorConverter(FloatCompanionObject_getInstance()), 0.01), to(get_VectorConverter_3(Companion_getInstance_3()), 0.5), to(get_VectorConverter_4(Companion_getInstance_1()), 0.5), to(get_VectorConverter_5(Companion_getInstance_2()), 0.5), to(get_VectorConverter_6(Companion_getInstance()), 0.1), to(get_VectorConverter_7(Companion_getInstance_7()), 0.1)]);
    }
  }
  function binarySearch_0(_this__u8e3s4, element, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? _this__u8e3s4.length : toIndex;
    rangeCheck(_this__u8e3s4.length, fromIndex, toIndex);
    var low = fromIndex;
    var high = toIndex - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      var cmp = compareTo(midVal, element);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function rangeCheck(size, fromIndex, toIndex) {
    if (fromIndex > toIndex)
      throw IllegalArgumentException_init_$Create$('fromIndex (' + fromIndex + ') is greater than toIndex (' + toIndex + ').');
    else if (fromIndex < 0)
      throw IndexOutOfBoundsException_init_$Create$('fromIndex (' + fromIndex + ') is less than zero.');
    else if (toIndex > size)
      throw IndexOutOfBoundsException_init_$Create$('toIndex (' + toIndex + ') is greater than size (' + size + ').');
  }
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function AtomicReference(value) {
    this.delegate_1 = value;
  }
  protoOf(AtomicReference).get_26vq_k$ = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.delegate_1;
  };
  protoOf(AtomicReference).set_inogor_k$ = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'androidx.compose.animation.core.AtomicReference.set.<set-delegate>' call
    this.delegate_1 = value;
  };
  protoOf(AtomicReference).getAndSet_6mmyt0_k$ = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_getAndSet' call
    var oldValue = this.delegate_1;
    // Inline function 'androidx.compose.animation.core.AtomicReference.getAndSet.<set-delegate>' call
    this.delegate_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).compareAndSet_10iwom_k$ = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.delegate_1, expect)) {
        // Inline function 'androidx.compose.animation.core.AtomicReference.compareAndSet.<set-delegate>' call
        this.delegate_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
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
    return '@androidx.compose.animation.core.internal.NoOp(' + ')';
  };
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  //region block: post-declaration
  protoOf(TargetBasedAnimation).isFinishedFromNanos_c31w39_k$ = isFinishedFromNanos;
  protoOf(DecayAnimation).isFinishedFromNanos_c31w39_k$ = isFinishedFromNanos;
  protoOf(StartDelayVectorizedAnimationSpec).getEndVelocity_j9v6ly_k$ = getEndVelocity;
  protoOf(FloatSpringSpec).vectorize_7dxvko_k$ = vectorize;
  protoOf(FloatTweenSpec).getEndVelocity_jstvkm_k$ = getEndVelocity_0;
  protoOf(FloatTweenSpec).vectorize_7dxvko_k$ = vectorize;
  protoOf(SegmentImpl).isTransitioningTo_mjamuk_k$ = isTransitioningTo;
  protoOf(VectorizedFloatAnimationSpec).get_isInfinite_uffwnt_k$ = get_isInfinite;
  protoOf(VectorizedInfiniteRepeatableSpec).getEndVelocity_j9v6ly_k$ = getEndVelocity;
  protoOf(VectorizedKeyframesSpec).getDurationNanos_c9o343_k$ = getDurationNanos;
  protoOf(VectorizedKeyframesSpec).get_isInfinite_uffwnt_k$ = get_isInfinite;
  protoOf(VectorizedKeyframesSpec).getEndVelocity_j9v6ly_k$ = getEndVelocity;
  protoOf(VectorizedTweenSpec).getDurationNanos_c9o343_k$ = getDurationNanos;
  protoOf(VectorizedTweenSpec).get_isInfinite_uffwnt_k$ = get_isInfinite;
  protoOf(VectorizedTweenSpec).getEndVelocity_j9v6ly_k$ = getEndVelocity;
  protoOf(VectorizedSnapSpec).getDurationNanos_c9o343_k$ = getDurationNanos;
  protoOf(VectorizedSnapSpec).get_isInfinite_uffwnt_k$ = get_isInfinite;
  protoOf(VectorizedSnapSpec).getEndVelocity_j9v6ly_k$ = getEndVelocity;
  //endregion
  //region block: init
  MillisToNanos = new Long(1000000, 0);
  SecondsToMillis = new Long(1000, 0);
  androidx_compose_animation_core_InfiniteRepeatableSpec$stable = 8;
  androidx_compose_animation_core_InfiniteTransition$stable = 8;
  MAX_LONG_MILLIS = new Long(2077252342, 2147);
  UNSET = 3.4028235E38;
  ResetAnimationSnapCurrent = -4.0;
  ResetAnimationSnapTarget = -5.0;
  ResetAnimationSnap = -3.0;
  AnimationDebugDurationScale = 1;
  NoReset = -1.0;
  ResetNoSnap = -2.0;
  androidx_compose_animation_core_MutableTransitionState$stable = 0;
  PxVisibilityThreshold = 0.5;
  DpVisibilityThreshold = 0.1;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Animatable_0;
  _.$_$.b = Animatable;
  _.$_$.c = AnimationState_1;
  _.$_$.d = AnimationState_0;
  _.$_$.e = AnimationState;
  _.$_$.f = AnimationVector1D;
  _.$_$.g = AnimationVector2D;
  _.$_$.h = AnimationVector4D;
  _.$_$.i = CubicBezierEasing;
  _.$_$.j = get_FastOutLinearInEasing;
  _.$_$.k = get_FastOutSlowInEasing;
  _.$_$.l = FloatDecayAnimationSpec;
  _.$_$.m = get_LinearEasing;
  _.$_$.n = MutableTransitionState;
  _.$_$.o = SnapSpec;
  _.$_$.p = SpringSpec;
  _.$_$.q = TweenSpec;
  _.$_$.r = TwoWayConverter_0;
  _.$_$.s = get_VectorConverter_2;
  _.$_$.t = get_VectorConverter_6;
  _.$_$.u = get_VectorConverter_3;
  _.$_$.v = get_VectorConverter_0;
  _.$_$.w = get_VectorConverter_1;
  _.$_$.x = get_VectorConverter;
  _.$_$.y = get_VisibilityThreshold_2;
  _.$_$.z = get_VisibilityThreshold_4;
  _.$_$.a1 = get_VisibilityThreshold_5;
  _.$_$.b1 = animateDpAsState;
  _.$_$.c1 = animateFloat;
  _.$_$.d1 = animateValueAsState;
  _.$_$.e1 = animateValue;
  _.$_$.f1 = copy;
  _.$_$.g1 = createChildTransitionInternal;
  _.$_$.h1 = createDeferredAnimation;
  _.$_$.i1 = createTransitionAnimation;
  _.$_$.j1 = generateDecayAnimationSpec;
  _.$_$.k1 = infiniteRepeatable;
  _.$_$.l1 = keyframes;
  _.$_$.m1 = rememberInfiniteTransition;
  _.$_$.n1 = rememberTransition;
  _.$_$.o1 = spring;
  _.$_$.p1 = tween;
  _.$_$.q1 = updateTransition;
  _.$_$.r1 = animateDecay;
  _.$_$.s1 = animateTo;
  _.$_$.t1 = animate_0;
  _.$_$.u1 = Spring_getInstance;
  //endregion
  return _;
}));
