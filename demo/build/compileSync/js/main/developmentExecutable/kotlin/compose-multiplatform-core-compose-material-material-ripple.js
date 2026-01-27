(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-ui-ui-util.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    globalThis['compose-multiplatform-core-compose-material-material-ripple'] = factory(typeof globalThis['compose-multiplatform-core-compose-material-material-ripple'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-material-material-ripple'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-ui-ui-util']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_collection_internal_collection, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_util) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var CoroutineImpl = kotlin_kotlin.$_$.yc;
  var Unit_getInstance = kotlin_kotlin.$_$.u5;
  var protoOf = kotlin_kotlin.$_$.ef;
  var THROW_CCE = kotlin_kotlin.$_$.ij;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var isInterface = kotlin_kotlin.$_$.re;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ic;
  var invalidateDraw = kotlin_org_jetbrains_compose_ui_ui.$_$.d5;
  var initMetadataForLambda = kotlin_kotlin.$_$.ge;
  var MutableScatterMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.h;
  var Long = kotlin_kotlin.$_$.bj;
  var VOID = kotlin_kotlin.$_$.e;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f3;
  var initMetadataForClass = kotlin_kotlin.$_$.ce;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var mutableStateMapOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.f5;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var isNaN_0 = kotlin_kotlin.$_$.fk;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var SuspendFunction1 = kotlin_kotlin.$_$.ad;
  var Interaction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h;
  var PressInteraction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m;
  var Cancel = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j;
  var Release = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l;
  var Press = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k;
  var equals = kotlin_kotlin.$_$.td;
  var FunctionAdapter = kotlin_kotlin.$_$.gd;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var hashCode = kotlin_kotlin.$_$.be;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.f8;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v1;
  var MutableObjectList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.g;
  var requireDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.i5;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.d4;
  var onPlaced = kotlin_org_jetbrains_compose_ui_ui.$_$.g4;
  var CompositionLocalConsumerModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.b4;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.e4;
  var LayoutAwareModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.i4;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.p;
  var Cancel_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a;
  var Stop = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c;
  var Start = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b;
  var Unfocus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e;
  var Focus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d;
  var Exit = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g;
  var Enter = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f;
  var lastOrNull = kotlin_kotlin.$_$.ba;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l3;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.m;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.q;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a4;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.j4;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var getBooleanHashCode = kotlin_kotlin.$_$.wd;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var Indication = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e1;
  var IndicationInstance = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c1;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.p1;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ee;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var ensureNotNull = kotlin_kotlin.$_$.bk;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var KMutableProperty1 = kotlin_kotlin.$_$.lg;
  var getPropertyCallableRef = kotlin_kotlin.$_$.zd;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var luminance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.de;
  var initMetadataForInterface = kotlin_kotlin.$_$.fe;
  var initMetadataForObject = kotlin_kotlin.$_$.he;
  var getNumberHashCode = kotlin_kotlin.$_$.yd;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(CommonRippleNode$addRipple$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(RippleNode, 'RippleNode', VOID, Node, [Node, CompositionLocalConsumerModifierNode, DrawModifierNode, LayoutAwareModifierNode]);
  initMetadataForClass(CommonRippleNode, 'CommonRippleNode', VOID, RippleNode);
  initMetadataForClass(Ripple, 'Ripple', VOID, VOID, [Indication]);
  initMetadataForClass(CommonRipple, 'CommonRipple', VOID, Ripple);
  initMetadataForLambda(CommonRippleIndicationInstance$addRipple$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(RippleIndicationInstance, 'RippleIndicationInstance', VOID, VOID, [IndicationInstance]);
  initMetadataForClass(CommonRippleIndicationInstance, 'CommonRippleIndicationInstance', VOID, RippleIndicationInstance, [RippleIndicationInstance, RememberObserver]);
  initMetadataForLambda(RippleNode$onAttach$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(RippleNode$onAttach$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(StateLayer$handleInteraction$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(StateLayer$handleInteraction$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(StateLayer, 'StateLayer');
  initMetadataForLambda(Ripple$rememberUpdatedInstance$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(Ripple$rememberUpdatedInstance$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda$slambda_3, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(RippleAnimation$fadeOut$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(RippleAnimation$fadeOut$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($animateCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($fadeInCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($fadeOutCOROUTINE$2, CoroutineImpl);
  initMetadataForClass(RippleAnimation, 'RippleAnimation', VOID, VOID, VOID, [0]);
  initMetadataForCompanion(Companion);
  initMetadataForInterface(RippleTheme, 'RippleTheme');
  initMetadataForObject(DebugRippleTheme, 'DebugRippleTheme', VOID, VOID, [RippleTheme]);
  initMetadataForClass(RippleAlpha, 'RippleAlpha');
  //endregion
  function _get_ripples__fsflm6($this) {
    return $this.ripples_1;
  }
  function CommonRippleNode$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation) {
    this.$rippleAnimation_1 = $rippleAnimation;
    this.this$0__1 = this$0;
    this.$interaction_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CommonRippleNode$addRipple$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(CommonRippleNode$addRipple$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CommonRippleNode$addRipple$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$rippleAnimation_1.animate_y1clxy_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$00__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(5);
            this.this$0__1.ripples_1.remove_gppy8k_k$(this.$interaction_1);
            invalidateDraw(this.this$0__1);
            return Unit_getInstance();
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var t = this.get_exception_x0n6w6_k$();
            this.this$0__1.ripples_1.remove_gppy8k_k$(this.$interaction_1);
            invalidateDraw(this.this$0__1);
            throw t;
          case 5:
            throw this.get_exception_x0n6w6_k$();
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
  protoOf(CommonRippleNode$addRipple$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new CommonRippleNode$addRipple$slambda(this.$rippleAnimation_1, this.this$0__1, this.$interaction_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(CommonRippleNode$addRipple$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function CommonRippleNode$addRipple$slambda_0($rippleAnimation, this$0, $interaction, resultContinuation) {
    var i = new CommonRippleNode$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CommonRippleNode(interactionSource, bounded, radius, color, rippleAlpha) {
    RippleNode.call(this, interactionSource, bounded, radius, color, rippleAlpha);
    this.ripples_1 = new MutableScatterMap();
  }
  protoOf(CommonRippleNode).addRipple_x4zjbh_k$ = function (interaction, size, targetRadius) {
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var this_0 = this.ripples_1;
    var k = this_0.get_keys_x7wiqc_k$();
    var v = this_0.get_values_s0ixei_k$();
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
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
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = v[index];
                  // Inline function 'androidx.compose.material.ripple.CommonRippleNode.addRipple.<anonymous>' call
                  ((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).finish_mh2air_k$();
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
    var origin = this.get_bounded_2feyt0_k$() ? interaction.get_pressPosition_rjxyft_k$() : null;
    var rippleAnimation = new RippleAnimation(origin, targetRadius, this.get_bounded_2feyt0_k$());
    this.ripples_1.set_b9w55f_k$(interaction, rippleAnimation);
    var tmp_1 = this.get_coroutineScope_5k7h45_k$();
    launch(tmp_1, VOID, VOID, CommonRippleNode$addRipple$slambda_0(rippleAnimation, this, interaction, null));
    invalidateDraw(this);
  };
  protoOf(CommonRippleNode).removeRipple_vyc1mc_k$ = function (interaction) {
    var tmp0_safe_receiver = this.ripples_1.get_wei43m_k$(interaction);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.finish_mh2air_k$();
    }
  };
  protoOf(CommonRippleNode).drawRipples_i1yis2_k$ = function (_this__u8e3s4) {
    var alpha = this.get_rippleAlpha_11giat_k$()().get_pressedAlpha_4p7l23_k$();
    if (!(alpha === 0.0)) {
      // Inline function 'androidx.collection.ScatterMap.forEach' call
      var this_0 = this.ripples_1;
      var k = this_0.get_keys_x7wiqc_k$();
      var v = this_0.get_values_s0ixei_k$();
      $l$block: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
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
                    // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                    var tmp = k[index];
                    (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                    var tmp_0 = v[index];
                    // Inline function 'androidx.compose.material.ripple.CommonRippleNode.drawRipples.<anonymous>' call
                    // Inline function 'kotlin.with' call
                    // Inline function 'androidx.compose.material.ripple.CommonRippleNode.drawRipples.<anonymous>.<anonymous>' call
                    ((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).draw_5ki4v8_k$(_this__u8e3s4, Color__copy$default_impl_ectz3s(this.get_rippleColor_jhhjch_k$(), alpha));
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
    }
  };
  protoOf(CommonRippleNode).onDetach_8dig02_k$ = function () {
    this.ripples_1.clear_j9egeb_k$();
  };
  function CommonRipple(bounded, radius, color) {
    Ripple.call(this, bounded, radius, color);
  }
  protoOf(CommonRipple).rememberUpdatedRippleInstance_9tjkry_k$ = function (interactionSource, bounded, radius, color, rippleAlpha, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-1768051227);
    sourceInformation($composer_0, 'C(rememberUpdatedRippleInstance)P(2!1,3:c#ui.unit.Dp)60@2195L125:CommonRipple.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(-1768051227, $changed, -1, 'androidx.compose.material.ripple.CommonRipple.rememberUpdatedRippleInstance (CommonRipple.kt:59)');
    }
    sourceInformationMarkerStart($composer_0, -1865672267, 'CC(remember):CommonRipple.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(interactionSource) || ($changed & 6) === 4) | (($changed & 458752 ^ 196608) > 131072 && $composer_0.changed_ga7h3f_k$(this) || ($changed & 196608) === 131072));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.material.ripple.CommonRipple.rememberUpdatedRippleInstance.<anonymous>' call
      var value = new CommonRippleIndicationInstance(bounded, radius, color, rippleAlpha);
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
  function _get_bounded__6dedw($this) {
    return $this.bounded_2;
  }
  function _get_radius__h7nyvb($this) {
    return $this.radius_1;
  }
  function _get_color__iw9cfm($this) {
    return $this.color_1;
  }
  function _get_rippleAlpha__fyluwt($this) {
    return $this.rippleAlpha_1;
  }
  function _get_ripples__fsflm6_0($this) {
    return $this.ripples_1;
  }
  function _set_targetRadius__y9wawk($this, _set____db54di) {
    $this.targetRadius_1 = _set____db54di;
  }
  function _get_targetRadius__l7h0ig($this) {
    return $this.targetRadius_1;
  }
  function drawRipples(_this__u8e3s4, $this, color) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = $this.ripples_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'androidx.compose.material.ripple.CommonRippleIndicationInstance.drawRipples.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var ripple = element.get_value_j01efc_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.material.ripple.CommonRippleIndicationInstance.drawRipples.<anonymous>.<anonymous>' call
      var alpha = $this.rippleAlpha_1.get_value_j01efc_k$().get_pressedAlpha_4p7l23_k$();
      if (!(alpha === 0.0)) {
        ripple.draw_5ki4v8_k$(_this__u8e3s4, Color__copy$default_impl_ectz3s(color, alpha));
      }
    }
  }
  function CommonRippleIndicationInstance$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation) {
    this.$rippleAnimation_1 = $rippleAnimation;
    this.this$0__1 = this$0;
    this.$interaction_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$rippleAnimation_1.animate_y1clxy_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$00__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(5);
            this.this$0__1.ripples_1.remove_gppy8k_k$(this.$interaction_1);
            return Unit_getInstance();
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var t = this.get_exception_x0n6w6_k$();
            this.this$0__1.ripples_1.remove_gppy8k_k$(this.$interaction_1);
            throw t;
          case 5:
            throw this.get_exception_x0n6w6_k$();
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
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new CommonRippleIndicationInstance$addRipple$slambda(this.$rippleAnimation_1, this.this$0__1, this.$interaction_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function CommonRippleIndicationInstance$addRipple$slambda_0($rippleAnimation, this$0, $interaction, resultContinuation) {
    var i = new CommonRippleIndicationInstance$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CommonRippleIndicationInstance(bounded, radius, color, rippleAlpha) {
    RippleIndicationInstance.call(this, bounded, rippleAlpha);
    this.bounded_2 = bounded;
    this.radius_1 = radius;
    this.color_1 = color;
    this.rippleAlpha_1 = rippleAlpha;
    this.ripples_1 = mutableStateMapOf();
    this.targetRadius_1 = FloatCompanionObject_getInstance().get_NaN_18jnv2_k$();
  }
  protoOf(CommonRippleIndicationInstance).drawIndication_8rzu54_k$ = function (_this__u8e3s4) {
    var tmp = this;
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = this.radius_1;
    if (isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp_0 = getRippleEndRadius(_this__u8e3s4, this.bounded_2, _this__u8e3s4.get_size_cxx1ym_k$());
    } else {
      tmp_0 = _this__u8e3s4.toPx_mycba2_k$(this.radius_1);
    }
    tmp.targetRadius_1 = tmp_0;
    var color = this.color_1.get_value_j01efc_k$().value_1;
    _this__u8e3s4.drawContent_m0wwjp_k$();
    this.drawStateLayer_gc2t71_k$(_this__u8e3s4, this.radius_1, color);
    drawRipples(_this__u8e3s4, this, color);
  };
  protoOf(CommonRippleIndicationInstance).addRipple_x9czbt_k$ = function (interaction, scope) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.ripples_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'androidx.compose.material.ripple.CommonRippleIndicationInstance.addRipple.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var ripple = element.get_value_j01efc_k$();
      ripple.finish_mh2air_k$();
    }
    var origin = this.bounded_2 ? interaction.get_pressPosition_rjxyft_k$() : null;
    var rippleAnimation = new RippleAnimation(origin, this.targetRadius_1, this.bounded_2);
    // Inline function 'kotlin.collections.set' call
    this.ripples_1.put_4fpzoq_k$(interaction, rippleAnimation);
    launch(scope, VOID, VOID, CommonRippleIndicationInstance$addRipple$slambda_0(rippleAnimation, this, interaction, null));
  };
  protoOf(CommonRippleIndicationInstance).removeRipple_vyc1mc_k$ = function (interaction) {
    var tmp0_safe_receiver = this.ripples_1.get_wei43m_k$(interaction);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.finish_mh2air_k$();
    }
  };
  protoOf(CommonRippleIndicationInstance).onRemembered_68t2e3_k$ = function () {
  };
  protoOf(CommonRippleIndicationInstance).onForgotten_pbqifp_k$ = function () {
    this.ripples_1.clear_j9egeb_k$();
  };
  protoOf(CommonRippleIndicationInstance).onAbandoned_1gx7a3_k$ = function () {
    this.ripples_1.clear_j9egeb_k$();
  };
  function get_DefaultTweenSpec() {
    _init_properties_Ripple_kt__d55ieo();
    return DefaultTweenSpec;
  }
  var DefaultTweenSpec;
  function createRippleModifierNode(interactionSource, bounded, radius, color, rippleAlpha) {
    _init_properties_Ripple_kt__d55ieo();
    return createPlatformRippleNode(interactionSource, bounded, radius, color, rippleAlpha);
  }
  function RippleNode$onAttach$slambda$slambda(this$0, $this_launch, resultContinuation) {
    this.this$0__1 = this$0;
    this.$this_launch_1 = $this_launch;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleNode$onAttach$slambda$slambda).invoke_hcr54n_k$ = function (interaction, $completion) {
    var tmp = this.create_c56zqz_k$(interaction, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RippleNode$onAttach$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_hcr54n_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleNode$onAttach$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp0_subject = this.interaction_1;
          if (isInterface(tmp0_subject, PressInteraction)) {
            if (this.this$0__1.hasValidSize_1) {
              handlePressInteraction(this.this$0__1, this.interaction_1);
            } else {
              var tmp0 = this.this$0__1.pendingInteractions_1;
              var element = this.interaction_1;
              tmp0.add_utx5q5_k$(element);
            }
          } else {
            updateStateLayer(this.this$0__1, this.interaction_1, this.$this_launch_1);
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
  protoOf(RippleNode$onAttach$slambda$slambda).create_c56zqz_k$ = function (interaction, completion) {
    var i = new RippleNode$onAttach$slambda$slambda(this.this$0__1, this.$this_launch_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  protoOf(RippleNode$onAttach$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_c56zqz_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  function RippleNode$onAttach$slambda$slambda_0(this$0, $this_launch, resultContinuation) {
    var i = new RippleNode$onAttach$slambda$slambda(this$0, $this_launch, resultContinuation);
    var l = function (interaction, $completion) {
      return i.invoke_hcr54n_k$(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_interactionSource__1shxi4($this) {
    return $this.interactionSource_1;
  }
  function _get_radius__h7nyvb_0($this) {
    return $this.radius_1;
  }
  function _get_color__iw9cfm_0($this) {
    return $this.color_1;
  }
  function _set_stateLayer__vs15($this, _set____db54di) {
    $this.stateLayer_1 = _set____db54di;
  }
  function _get_stateLayer__f34d6d($this) {
    return $this.stateLayer_1;
  }
  function _set_targetRadius__y9wawk_0($this, _set____db54di) {
    $this.targetRadius_1 = _set____db54di;
  }
  function _get_targetRadius__l7h0ig_0($this) {
    return $this.targetRadius_1;
  }
  function _set_rippleSize__sppkey($this, _set____db54di) {
    $this.rippleSize_1 = _set____db54di;
  }
  function _set_hasValidSize__9dyfak($this, _set____db54di) {
    $this.hasValidSize_1 = _set____db54di;
  }
  function _get_hasValidSize__65sb9k($this) {
    return $this.hasValidSize_1;
  }
  function _get_pendingInteractions__5oedvd($this) {
    return $this.pendingInteractions_1;
  }
  function handlePressInteraction($this, pressInteraction) {
    if (pressInteraction instanceof Press) {
      $this.addRipple_x4zjbh_k$(pressInteraction, $this.rippleSize_1, $this.targetRadius_1);
    } else {
      if (pressInteraction instanceof Release) {
        $this.removeRipple_vyc1mc_k$(pressInteraction.get_press_ix1cey_k$());
      } else {
        if (pressInteraction instanceof Cancel) {
          $this.removeRipple_vyc1mc_k$(pressInteraction.get_press_ix1cey_k$());
        }
      }
    }
  }
  function updateStateLayer($this, interaction, scope) {
    var tmp0_elvis_lhs = $this.stateLayer_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new StateLayer($this.bounded_1, $this.rippleAlpha_1);
      // Inline function 'androidx.compose.material.ripple.RippleNode.updateStateLayer.<anonymous>' call
      invalidateDraw($this);
      $this.stateLayer_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stateLayer = tmp;
    stateLayer.handleInteraction_wz6422_k$(interaction, scope);
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
  function RippleNode$onAttach$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleNode$onAttach$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RippleNode$onAttach$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleNode$onAttach$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = this.this$0__1.interactionSource_1.get_interactions_ql02qy_k$();
            var tmp_1 = RippleNode$onAttach$slambda$slambda_0(this.this$0__1, this.$this$launch_1, null);
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
  protoOf(RippleNode$onAttach$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new RippleNode$onAttach$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(RippleNode$onAttach$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RippleNode$onAttach$slambda_0(this$0, resultContinuation) {
    var i = new RippleNode$onAttach$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleNode(interactionSource, bounded, radius, color, rippleAlpha) {
    Node.call(this);
    this.interactionSource_1 = interactionSource;
    this.bounded_1 = bounded;
    this.radius_1 = radius;
    this.color_1 = color;
    this.rippleAlpha_1 = rippleAlpha;
    this.shouldAutoInvalidate_1 = false;
    this.stateLayer_1 = null;
    this.targetRadius_1 = 0.0;
    this.rippleSize_1 = Companion_getInstance_0().get_Zero_rugywl_k$();
    this.hasValidSize_1 = false;
    var tmp = this;
    // Inline function 'androidx.collection.mutableObjectListOf' call
    tmp.pendingInteractions_1 = new MutableObjectList();
  }
  protoOf(RippleNode).get_bounded_2feyt0_k$ = function () {
    return this.bounded_1;
  };
  protoOf(RippleNode).get_rippleAlpha_11giat_k$ = function () {
    return this.rippleAlpha_1;
  };
  protoOf(RippleNode).get_shouldAutoInvalidate_lc75y2_k$ = function () {
    return this.shouldAutoInvalidate_1;
  };
  protoOf(RippleNode).get_rippleSize_3hem66_k$ = function () {
    return this.rippleSize_1;
  };
  protoOf(RippleNode).get_rippleColor_jhhjch_k$ = function () {
    return this.color_1.invoke_ejt8ap_k$();
  };
  protoOf(RippleNode).onRemeasured_izdx67_k$ = function (size) {
    this.hasValidSize_1 = true;
    var density = requireDensity(this);
    this.rippleSize_1 = toSize(size);
    var tmp = this;
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.material.ripple.RippleNode.onRemeasured.<anonymous>' call
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = this.radius_1;
    if (isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp_0 = getRippleEndRadius(density, this.bounded_1, this.rippleSize_1);
    } else {
      tmp_0 = density.toPx_mycba2_k$(this.radius_1);
    }
    tmp.targetRadius_1 = tmp_0;
    // Inline function 'androidx.collection.ObjectList.forEach' call
    var this_1 = this.pendingInteractions_1;
    // Inline function 'kotlin.contracts.contract' call
    var content = this_1.get_content_d75s1t_k$();
    var inductionVariable = 0;
    var last = this_1.get__size_2j67yy_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp_1 = content[i];
        // Inline function 'androidx.compose.material.ripple.RippleNode.onRemeasured.<anonymous>' call
        var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        handlePressInteraction(this, it);
      }
       while (inductionVariable < last);
    this.pendingInteractions_1.clear_j9egeb_k$();
  };
  protoOf(RippleNode).onAttach_juzy2c_k$ = function () {
    var tmp = this.get_coroutineScope_5k7h45_k$();
    launch(tmp, VOID, VOID, RippleNode$onAttach$slambda_0(this, null));
  };
  protoOf(RippleNode).draw_2h95cs_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.drawContent_m0wwjp_k$();
    var tmp0_safe_receiver = this.stateLayer_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.material.ripple.RippleNode.draw.<anonymous>' call
      tmp0_safe_receiver.drawStateLayer_y99k26_k$(_this__u8e3s4, this.targetRadius_1, this.get_rippleColor_jhhjch_k$());
    }
    this.drawRipples_i1yis2_k$(_this__u8e3s4);
  };
  function _get_bounded__6dedw_0($this) {
    return $this.bounded_1;
  }
  function _get_rippleAlpha__fyluwt_0($this) {
    return $this.rippleAlpha_1;
  }
  function _get_animatedAlpha__sz6rt6($this) {
    return $this.animatedAlpha_1;
  }
  function _get_interactions__vdfb5i($this) {
    return $this.interactions_1;
  }
  function _set_currentInteraction__v4tp9e($this, _set____db54di) {
    $this.currentInteraction_1 = _set____db54di;
  }
  function _get_currentInteraction__5yf1le($this) {
    return $this.currentInteraction_1;
  }
  function StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    this.this$0__1 = this$0;
    this.$targetAlpha_1 = $targetAlpha;
    this.$incomingAnimationSpec_1 = $incomingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateLayer$handleInteraction$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(StateLayer$handleInteraction$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateLayer$handleInteraction$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.animatedAlpha_1.animateTo$default_71hueo_k$(this.$targetAlpha_1, this.$incomingAnimationSpec_1, VOID, VOID, this);
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
  protoOf(StateLayer$handleInteraction$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda(this.this$0__1, this.$targetAlpha_1, this.$incomingAnimationSpec_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(StateLayer$handleInteraction$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function StateLayer$handleInteraction$slambda_0(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation) {
    this.this$0__1 = this$0;
    this.$outgoingAnimationSpec_1 = $outgoingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateLayer$handleInteraction$slambda_1).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(StateLayer$handleInteraction$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateLayer$handleInteraction$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.animatedAlpha_1.animateTo$default_71hueo_k$(0.0, this.$outgoingAnimationSpec_1, VOID, VOID, this);
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
  protoOf(StateLayer$handleInteraction$slambda_1).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda_1(this.this$0__1, this.$outgoingAnimationSpec_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(StateLayer$handleInteraction$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function StateLayer$handleInteraction$slambda_2(this$0, $outgoingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer(bounded, rippleAlpha) {
    this.bounded_1 = bounded;
    this.rippleAlpha_1 = rippleAlpha;
    this.animatedAlpha_1 = Animatable(0.0);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.interactions_1 = ArrayList_init_$Create$();
    this.currentInteraction_1 = null;
  }
  protoOf(StateLayer).handleInteraction_wz6422_k$ = function (interaction, scope) {
    if (interaction instanceof Enter) {
      this.interactions_1.add_utx5q5_k$(interaction);
    } else {
      if (interaction instanceof Exit) {
        this.interactions_1.remove_cedx0m_k$(interaction.get_enter_iqxcq7_k$());
      } else {
        if (interaction instanceof Focus) {
          this.interactions_1.add_utx5q5_k$(interaction);
        } else {
          if (interaction instanceof Unfocus) {
            this.interactions_1.remove_cedx0m_k$(interaction.get_focus_irhg33_k$());
          } else {
            if (interaction instanceof Start) {
              this.interactions_1.add_utx5q5_k$(interaction);
            } else {
              if (interaction instanceof Stop) {
                this.interactions_1.remove_cedx0m_k$(interaction.get_start_iypx6h_k$());
              } else {
                if (interaction instanceof Cancel_0) {
                  this.interactions_1.remove_cedx0m_k$(interaction.get_start_iypx6h_k$());
                } else {
                  return Unit_getInstance();
                }
              }
            }
          }
        }
      }
    }
    var newInteraction = lastOrNull(this.interactions_1);
    if (!equals(this.currentInteraction_1, newInteraction)) {
      if (!(newInteraction == null)) {
        var rippleAlpha = this.rippleAlpha_1();
        var tmp;
        if (interaction instanceof Enter) {
          tmp = rippleAlpha.get_hoveredAlpha_oe6bn8_k$();
        } else {
          if (interaction instanceof Focus) {
            tmp = rippleAlpha.get_focusedAlpha_9tm3xs_k$();
          } else {
            if (interaction instanceof Start) {
              tmp = rippleAlpha.get_draggedAlpha_4hlfij_k$();
            } else {
              tmp = 0.0;
            }
          }
        }
        var targetAlpha = tmp;
        var incomingAnimationSpec = incomingStateLayerAnimationSpecFor(newInteraction);
        launch(scope, VOID, VOID, StateLayer$handleInteraction$slambda_0(this, targetAlpha, incomingAnimationSpec, null));
      } else {
        var outgoingAnimationSpec = outgoingStateLayerAnimationSpecFor(this.currentInteraction_1);
        launch(scope, VOID, VOID, StateLayer$handleInteraction$slambda_2(this, outgoingAnimationSpec, null));
      }
      this.currentInteraction_1 = newInteraction;
    }
  };
  protoOf(StateLayer).drawStateLayer_y99k26_k$ = function (_this__u8e3s4, radius, color) {
    var alpha = this.animatedAlpha_1.get_value_j01efc_k$();
    if (alpha > 0.0) {
      var modulatedColor = Color__copy$default_impl_ectz3s(color, alpha);
      if (this.bounded_1) {
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        var right = _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_cxx1ym_k$());
        var bottom = _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_cxx1ym_k$());
        var clipOp = Companion_getInstance_1().get_Intersect_gpxc6n_k$();
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform.<anonymous>' call
        var $this$with = _this__u8e3s4.get_drawContext_ffwztu_k$();
        var previousSize = $this$with.get_size_cxx1ym_k$();
        $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
        try {
          // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
          $this$with.get_transform_px941v_k$().clipRect_3spswv_k$(0.0, 0.0, right, bottom, clipOp);
          // Inline function 'androidx.compose.material.ripple.StateLayer.drawStateLayer.<anonymous>' call
          _this__u8e3s4.drawCircle$default_wqrb84_k$(modulatedColor, radius);
        }finally {
          $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
          $this$with.set_size_6a0e6q_k$(previousSize);
        }
      } else {
        _this__u8e3s4.drawCircle$default_wqrb84_k$(modulatedColor, radius);
      }
    }
  };
  function incomingStateLayerAnimationSpecFor(interaction) {
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (interaction instanceof Enter) {
      tmp = get_DefaultTweenSpec();
    } else {
      if (interaction instanceof Focus) {
        tmp = new TweenSpec(45, VOID, get_LinearEasing());
      } else {
        if (interaction instanceof Start) {
          tmp = new TweenSpec(45, VOID, get_LinearEasing());
        } else {
          tmp = get_DefaultTweenSpec();
        }
      }
    }
    return tmp;
  }
  function outgoingStateLayerAnimationSpecFor(interaction) {
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (interaction instanceof Enter) {
      tmp = get_DefaultTweenSpec();
    } else {
      if (interaction instanceof Focus) {
        tmp = get_DefaultTweenSpec();
      } else {
        if (interaction instanceof Start) {
          tmp = new TweenSpec(150, VOID, get_LinearEasing());
        } else {
          tmp = get_DefaultTweenSpec();
        }
      }
    }
    return tmp;
  }
  function rememberRipple(bounded, radius, color, $composer, $changed, $default) {
    _init_properties_Ripple_kt__d55ieo();
    var bounded_0 = bounded;
    var radius_0 = radius;
    var color_0 = color;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1635163520, 'C(rememberRipple)P(!1,2:c#ui.unit.Dp,1:c#ui.graphics.Color)147@7571L27,148@7610L85:Ripple.kt#vhb33q');
    if (!(($default & 1) === 0))
      bounded_0 = true;
    if (!(($default & 2) === 0))
      radius_0 = Companion_getInstance_2().get_Unspecified_9b9rm3_k$();
    if (!(($default & 4) === 0))
      color_0 = Companion_getInstance_3().get_Unspecified_j397pn_k$();
    if (isTraceInProgress()) {
      traceEventStart(1635163520, $changed, -1, 'androidx.compose.material.ripple.rememberRipple (Ripple.kt:146)');
    }
    var colorState = rememberUpdatedState(new Color(color_0), $composer_0, 14 & $changed >> 6);
    sourceInformationMarkerStart($composer_0, 487972074, 'CC(remember):Ripple.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.changed_jpyyrz_k$(bounded_0) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.changed_i8bvic_k$(_Dp___get_value__impl__geb1vb(radius_0)) || ($changed & 48) === 32));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.material.ripple.rememberRipple.<anonymous>' call
      var value = new CommonRipple(bounded_0, radius_0, colorState);
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
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function Ripple$rememberUpdatedInstance$slambda$slambda($instance, $this_LaunchedEffect, resultContinuation) {
    this.$instance_1 = $instance;
    this.$this_LaunchedEffect_1 = $this_LaunchedEffect;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Ripple$rememberUpdatedInstance$slambda$slambda).invoke_hcr54n_k$ = function (interaction, $completion) {
    var tmp = this.create_c56zqz_k$(interaction, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_hcr54n_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp0_subject = this.interaction_1;
          if (tmp0_subject instanceof Press) {
            this.$instance_1.addRipple_x9czbt_k$(this.interaction_1, this.$this_LaunchedEffect_1);
          } else {
            if (tmp0_subject instanceof Release) {
              this.$instance_1.removeRipple_vyc1mc_k$(this.interaction_1.get_press_ix1cey_k$());
            } else {
              if (tmp0_subject instanceof Cancel) {
                this.$instance_1.removeRipple_vyc1mc_k$(this.interaction_1.get_press_ix1cey_k$());
              } else {
                this.$instance_1.updateStateLayer_tqdgx7_k$(this.interaction_1, this.$this_LaunchedEffect_1);
              }
            }
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
  protoOf(Ripple$rememberUpdatedInstance$slambda$slambda).create_c56zqz_k$ = function (interaction, completion) {
    var i = new Ripple$rememberUpdatedInstance$slambda$slambda(this.$instance_1, this.$this_LaunchedEffect_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_c56zqz_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  function Ripple$rememberUpdatedInstance$slambda$slambda_0($instance, $this_LaunchedEffect, resultContinuation) {
    var i = new Ripple$rememberUpdatedInstance$slambda$slambda($instance, $this_LaunchedEffect, resultContinuation);
    var l = function (interaction, $completion) {
      return i.invoke_hcr54n_k$(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_bounded__6dedw_1($this) {
    return $this.bounded_1;
  }
  function _get_radius__h7nyvb_1($this) {
    return $this.radius_1;
  }
  function _get_color__iw9cfm_1($this) {
    return $this.color_1;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function Ripple$rememberUpdatedInstance$slambda($interactionSource, $instance, resultContinuation) {
    this.$interactionSource_1 = $interactionSource;
    this.$instance_1 = $instance;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Ripple$rememberUpdatedInstance$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = this.$interactionSource_1.get_interactions_ql02qy_k$();
            var tmp_1 = Ripple$rememberUpdatedInstance$slambda$slambda_0(this.$instance_1, this.$this$LaunchedEffect_1, null);
            suspendResult = tmp_0.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  protoOf(Ripple$rememberUpdatedInstance$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new Ripple$rememberUpdatedInstance$slambda(this.$interactionSource_1, this.$instance_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function Ripple$rememberUpdatedInstance$slambda_0($interactionSource, $instance, resultContinuation) {
    var i = new Ripple$rememberUpdatedInstance$slambda($interactionSource, $instance, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Ripple(bounded, radius, color) {
    this.bounded_1 = bounded;
    this.radius_1 = radius;
    this.color_1 = color;
  }
  protoOf(Ripple).rememberUpdatedInstance_bjzky9_k$ = function (interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(988743187);
    sourceInformation($composer_0, 'C(rememberUpdatedInstance)197@9514L7,198@9542L221,207@9856L13,207@9829L41,209@9895L155,217@10104L491,217@10060L535:Ripple.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(988743187, $changed, -1, 'androidx.compose.material.ripple.Ripple.rememberUpdatedInstance (Ripple.kt:196)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalRippleTheme();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var theme = tmp0;
    $composer_0.startReplaceGroup_5hh8aj_k$(-9793426);
    sourceInformation($composer_0, '203@9725L14');
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_1 = this.color_1.get_value_j01efc_k$().value_1;
    if (!equals(_Color___get_value__impl__1pls5m(this_1), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = this.color_1.get_value_j01efc_k$().value_1;
    } else {
      tmp = theme.defaultColor_r23c72_k$($composer_0, 0);
    }
    var tmp1_group = tmp;
    $composer_0.endReplaceGroup_ek144q_k$();
    var color = rememberUpdatedState(new Color(tmp1_group), $composer_0, 0);
    var rippleAlpha = rememberUpdatedState(theme.rippleAlpha_2ak7e3_k$($composer_0, 0), $composer_0, 0);
    var instance = this.rememberUpdatedRippleInstance_9tjkry_k$(interactionSource, this.bounded_1, this.radius_1, color, rippleAlpha, $composer_0, 14 & $changed | 458752 & $changed << 12);
    sourceInformationMarkerStart($composer_0, -9776216, 'CC(remember):Ripple.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(interactionSource) || ($changed & 6) === 4) | $composer_0.changedInstance_s1wkiy_k$(instance));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_0;
    if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.material.ripple.Ripple.rememberUpdatedInstance.<anonymous>' call
      var value = Ripple$rememberUpdatedInstance$slambda_0(interactionSource, instance, null);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp2_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    LaunchedEffect(instance, interactionSource, tmp2_group, $composer_0, 112 & $changed << 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return instance;
  };
  protoOf(Ripple).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Ripple))
      return false;
    if (!(this.bounded_1 === other.bounded_1))
      return false;
    if (!equals(this.radius_1, other.radius_1))
      return false;
    if (!equals(this.color_1, other.color_1))
      return false;
    return true;
  };
  protoOf(Ripple).hashCode = function () {
    var result = getBooleanHashCode(this.bounded_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.radius_1) | 0;
    result = imul(31, result) + hashCode(this.color_1) | 0;
    return result;
  };
  function _get_bounded__6dedw_2($this) {
    return $this.bounded_1;
  }
  function _get_stateLayer__f34d6d_0($this) {
    return $this.stateLayer_1;
  }
  function RippleIndicationInstance$stateLayer$lambda($rippleAlpha) {
    return function () {
      return $rippleAlpha.get_value_j01efc_k$();
    };
  }
  function RippleIndicationInstance(bounded, rippleAlpha) {
    this.bounded_1 = bounded;
    var tmp = this;
    tmp.stateLayer_1 = new StateLayer(this.bounded_1, RippleIndicationInstance$stateLayer$lambda(rippleAlpha));
  }
  protoOf(RippleIndicationInstance).updateStateLayer_tqdgx7_k$ = function (interaction, scope) {
    this.stateLayer_1.handleInteraction_wz6422_k$(interaction, scope);
  };
  protoOf(RippleIndicationInstance).drawStateLayer_gc2t71_k$ = function (_this__u8e3s4, radius, color) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.material.ripple.RippleIndicationInstance.drawStateLayer.<anonymous>' call
    var $this$with = this.stateLayer_1;
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (isNaN_0(_Dp___get_value__impl__geb1vb(radius))) {
      tmp = getRippleEndRadius(_this__u8e3s4, this.bounded_1, _this__u8e3s4.get_size_cxx1ym_k$());
    } else {
      tmp = _this__u8e3s4.toPx_mycba2_k$(radius);
    }
    var targetRadius = tmp;
    $this$with.drawStateLayer_y99k26_k$(_this__u8e3s4, targetRadius, color);
  };
  var properties_initialized_Ripple_kt_3wqvym;
  function _init_properties_Ripple_kt__d55ieo() {
    if (!properties_initialized_Ripple_kt_3wqvym) {
      properties_initialized_Ripple_kt_3wqvym = true;
      DefaultTweenSpec = new TweenSpec(15, VOID, get_LinearEasing());
    }
  }
  function get_BoundedRippleExtraRadius() {
    _init_properties_RippleAnimation_kt__8sy0vy();
    return BoundedRippleExtraRadius;
  }
  var BoundedRippleExtraRadius;
  function RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.animatedAlpha_1.animateTo$default_71hueo_k$(1.0, tween(75, VOID, get_LinearEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeIn$slambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RippleAnimation$fadeIn$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.animatedRadiusPercent_1.animateTo$default_71hueo_k$(1.0, tween(225, VOID, get_FastOutSlowInEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RippleAnimation$fadeIn$slambda$slambda_2(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.animatedCenterPercent_1.animateTo$default_71hueo_k$(1.0, tween(225, VOID, get_LinearEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RippleAnimation$fadeIn$slambda$slambda_4(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeOut$slambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.animatedAlpha_1.animateTo$default_71hueo_k$(0.0, tween(150, VOID, get_LinearEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeOut$slambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RippleAnimation$fadeOut$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_origin__gfzohd($this, _set____db54di) {
    $this.origin_1 = _set____db54di;
  }
  function _get_origin__hwq945($this) {
    return $this.origin_1;
  }
  function _get_radius__h7nyvb_2($this) {
    return $this.radius_1;
  }
  function _get_bounded__6dedw_3($this) {
    return $this.bounded_1;
  }
  function _set_startRadius__av892p($this, _set____db54di) {
    $this.startRadius_1 = _set____db54di;
  }
  function _get_startRadius__tvhmkj($this) {
    return $this.startRadius_1;
  }
  function _set_targetCenter__t95byp($this, _set____db54di) {
    $this.targetCenter_1 = _set____db54di;
  }
  function _get_targetCenter__q87zgb($this) {
    return $this.targetCenter_1;
  }
  function _get_animatedAlpha__sz6rt6_0($this) {
    return $this.animatedAlpha_1;
  }
  function _get_animatedRadiusPercent__dif63j($this) {
    return $this.animatedRadiusPercent_1;
  }
  function _get_animatedCenterPercent__aw6y3o($this) {
    return $this.animatedCenterPercent_1;
  }
  function _get_finishSignalDeferred__9mucun($this) {
    return $this.finishSignalDeferred_1;
  }
  function _set_finishedFadingIn__33hlo9($this, _set____db54di) {
    var tmp0 = $this.finishedFadingIn$delegate_1;
    finishedFadingIn$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_finishedFadingIn__pzmnej($this) {
    var tmp0 = $this.finishedFadingIn$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    finishedFadingIn$factory_0();
    return tmp0.get_value_j01efc_k$();
  }
  function _set_finishRequested__u52oy2($this, _set____db54di) {
    var tmp0 = $this.finishRequested$delegate_1;
    finishRequested$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_finishRequested__usb5ii($this) {
    var tmp0 = $this.finishRequested$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    finishRequested$factory_0();
    return tmp0.get_value_j01efc_k$();
  }
  function fadeIn($this, $completion) {
    var tmp = new $fadeInCOROUTINE$1($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function fadeOut($this, $completion) {
    var tmp = new $fadeOutCOROUTINE$2($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function RippleAnimation$fadeIn$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda).invoke_r1kw3c_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RippleAnimation$fadeIn$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_r1kw3c_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          launch(this.$this$coroutineScope_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_0(this.this$0__1, null));
          launch(this.$this$coroutineScope_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_2(this.this$0__1, null));
          return launch(this.$this$coroutineScope_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_4(this.this$0__1, null));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeIn$slambda(this.this$0__1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(RippleAnimation$fadeIn$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RippleAnimation$fadeIn$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_r1kw3c_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeOut$slambda).invoke_r1kw3c_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RippleAnimation$fadeOut$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_r1kw3c_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeOut$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return launch(this.$this$coroutineScope_1, VOID, VOID, RippleAnimation$fadeOut$slambda$slambda_0(this.this$0__1, null));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeOut$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeOut$slambda(this.this$0__1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(RippleAnimation$fadeOut$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RippleAnimation$fadeOut$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_r1kw3c_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $animateCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($animateCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(1);
            suspendResult = fadeIn(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            _set_finishedFadingIn__33hlo9(this._this__u8e3s4__1, true);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this._this__u8e3s4__1.finishSignalDeferred_1.await_4rdzbx_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            suspendResult = fadeOut(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  function $fadeInCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($fadeInCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = coroutineScope(RippleAnimation$fadeIn$slambda_0(this._this__u8e3s4__1, null), this);
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
  function $fadeOutCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($fadeOutCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = coroutineScope(RippleAnimation$fadeOut$slambda_0(this._this__u8e3s4__1, null), this);
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
  function RippleAnimation(origin, radius, bounded) {
    this.origin_1 = origin;
    this.radius_1 = radius;
    this.bounded_1 = bounded;
    this.startRadius_1 = null;
    this.targetCenter_1 = null;
    this.animatedAlpha_1 = Animatable(0.0);
    this.animatedRadiusPercent_1 = Animatable(0.0);
    this.animatedCenterPercent_1 = Animatable(0.0);
    this.finishSignalDeferred_1 = CompletableDeferred(null);
    this.finishedFadingIn$delegate_1 = mutableStateOf(false);
    this.finishRequested$delegate_1 = mutableStateOf(false);
  }
  protoOf(RippleAnimation).animate_y1clxy_k$ = function ($completion) {
    var tmp = new $animateCOROUTINE$0(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RippleAnimation).finish_mh2air_k$ = function () {
    _set_finishRequested__u52oy2(this, true);
    this.finishSignalDeferred_1.complete_ixf84q_k$(Unit_getInstance());
  };
  protoOf(RippleAnimation).draw_5ki4v8_k$ = function (_this__u8e3s4, color) {
    if (this.startRadius_1 == null) {
      this.startRadius_1 = getRippleStartRadius(_this__u8e3s4.get_size_cxx1ym_k$());
    }
    var tmp = this.origin_1;
    if ((tmp == null ? null : new Offset(tmp)) == null) {
      this.origin_1 = _this__u8e3s4.get_center_dcexec_k$();
    }
    var tmp_0 = this.targetCenter_1;
    if ((tmp_0 == null ? null : new Offset(tmp_0)) == null) {
      this.targetCenter_1 = Offset_0(_Size___get_width__impl__58y75t(_this__u8e3s4.get_size_cxx1ym_k$()) / 2.0, _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_cxx1ym_k$()) / 2.0);
    }
    var tmp_1;
    if (_get_finishRequested__usb5ii(this) && !_get_finishedFadingIn__pzmnej(this)) {
      tmp_1 = 1.0;
    } else {
      tmp_1 = this.animatedAlpha_1.get_value_j01efc_k$();
    }
    var alpha = tmp_1;
    var radius = lerp(ensureNotNull(this.startRadius_1), this.radius_1, this.animatedRadiusPercent_1.get_value_j01efc_k$());
    var tmp_2 = this.origin_1;
    var tmp_3 = _Offset___get_x__impl__xvi35n(ensureNotNull(tmp_2 == null ? null : new Offset(tmp_2)).packedValue_1);
    var tmp_4 = this.targetCenter_1;
    var tmp_5 = lerp(tmp_3, _Offset___get_x__impl__xvi35n(ensureNotNull(tmp_4 == null ? null : new Offset(tmp_4)).packedValue_1), this.animatedCenterPercent_1.get_value_j01efc_k$());
    var tmp_6 = this.origin_1;
    var tmp_7 = _Offset___get_y__impl__8bzhra(ensureNotNull(tmp_6 == null ? null : new Offset(tmp_6)).packedValue_1);
    var tmp_8 = this.targetCenter_1;
    var centerOffset = Offset_0(tmp_5, lerp(tmp_7, _Offset___get_y__impl__8bzhra(ensureNotNull(tmp_8 == null ? null : new Offset(tmp_8)).packedValue_1), this.animatedCenterPercent_1.get_value_j01efc_k$()));
    var modulatedColor = Color__copy$default_impl_ectz3s(color, _Color___get_alpha__impl__wcfyv1(color) * alpha);
    if (this.bounded_1) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
      var right = _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_cxx1ym_k$());
      var bottom = _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_cxx1ym_k$());
      var clipOp = Companion_getInstance_1().get_Intersect_gpxc6n_k$();
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform.<anonymous>' call
      var $this$with = _this__u8e3s4.get_drawContext_ffwztu_k$();
      var previousSize = $this$with.get_size_cxx1ym_k$();
      $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
      try {
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
        $this$with.get_transform_px941v_k$().clipRect_3spswv_k$(0.0, 0.0, right, bottom, clipOp);
        // Inline function 'androidx.compose.material.ripple.RippleAnimation.draw.<anonymous>' call
        _this__u8e3s4.drawCircle$default_wqrb84_k$(modulatedColor, radius, centerOffset);
      }finally {
        $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
        $this$with.set_size_6a0e6q_k$(previousSize);
      }
    } else {
      _this__u8e3s4.drawCircle$default_wqrb84_k$(modulatedColor, radius, centerOffset);
    }
  };
  function getRippleEndRadius(_this__u8e3s4, bounded, size) {
    _init_properties_RippleAnimation_kt__8sy0vy();
    var radiusCoveringBounds = Offset__getDistance_impl_pclvxn(Offset_0(_Size___get_width__impl__58y75t(size), _Size___get_height__impl__a04p02(size))) / 2.0;
    var tmp;
    if (bounded) {
      tmp = radiusCoveringBounds + _this__u8e3s4.toPx_mycba2_k$(get_BoundedRippleExtraRadius());
    } else {
      tmp = radiusCoveringBounds;
    }
    return tmp;
  }
  function get_FadeInDuration() {
    return FadeInDuration;
  }
  var FadeInDuration;
  function get_RadiusDuration() {
    return RadiusDuration;
  }
  var RadiusDuration;
  function get_FadeOutDuration() {
    return FadeOutDuration;
  }
  var FadeOutDuration;
  function getRippleStartRadius(size) {
    _init_properties_RippleAnimation_kt__8sy0vy();
    var tmp0 = _Size___get_width__impl__58y75t(size);
    // Inline function 'kotlin.math.max' call
    var b = _Size___get_height__impl__a04p02(size);
    return Math.max(tmp0, b) * 0.3;
  }
  function finishedFadingIn$factory() {
    return getPropertyCallableRef('finishedFadingIn', 1, KMutableProperty1, function (receiver) {
      return _get_finishedFadingIn__pzmnej(receiver);
    }, function (receiver, value) {
      return _set_finishedFadingIn__33hlo9(receiver, value);
    });
  }
  function finishedFadingIn$factory_0() {
    return getPropertyCallableRef('finishedFadingIn', 1, KMutableProperty1, function (receiver) {
      return _get_finishedFadingIn__pzmnej(receiver);
    }, function (receiver, value) {
      return _set_finishedFadingIn__33hlo9(receiver, value);
    });
  }
  function finishRequested$factory() {
    return getPropertyCallableRef('finishRequested', 1, KMutableProperty1, function (receiver) {
      return _get_finishRequested__usb5ii(receiver);
    }, function (receiver, value) {
      return _set_finishRequested__u52oy2(receiver, value);
    });
  }
  function finishRequested$factory_0() {
    return getPropertyCallableRef('finishRequested', 1, KMutableProperty1, function (receiver) {
      return _get_finishRequested__usb5ii(receiver);
    }, function (receiver, value) {
      return _set_finishRequested__u52oy2(receiver, value);
    });
  }
  var properties_initialized_RippleAnimation_kt_4ja21o;
  function _init_properties_RippleAnimation_kt__8sy0vy() {
    if (!properties_initialized_RippleAnimation_kt_4ja21o) {
      properties_initialized_RippleAnimation_kt_4ja21o = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      BoundedRippleExtraRadius = _Dp___init__impl__ms3zkb(10);
    }
  }
  function get_LocalRippleTheme() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LocalRippleTheme;
  }
  var LocalRippleTheme;
  function get_LightThemeHighContrastRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LightThemeHighContrastRippleAlpha;
  }
  var LightThemeHighContrastRippleAlpha;
  function get_LightThemeLowContrastRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LightThemeLowContrastRippleAlpha;
  }
  var LightThemeLowContrastRippleAlpha;
  function get_DarkThemeRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return DarkThemeRippleAlpha;
  }
  var DarkThemeRippleAlpha;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).defaultRippleColor_nmy1zh_k$ = function (contentColor, lightTheme) {
    var contentLuminance = luminance(contentColor);
    var tmp;
    if (!lightTheme && contentLuminance < 0.5) {
      tmp = Companion_getInstance_3().get_White_xpp3qf_k$();
    } else {
      tmp = contentColor;
    }
    return tmp;
  };
  protoOf(Companion).defaultRippleAlpha_gyw72t_k$ = function (contentColor, lightTheme) {
    var tmp;
    if (lightTheme) {
      var tmp_0;
      if (luminance(contentColor) > 0.5) {
        tmp_0 = get_LightThemeHighContrastRippleAlpha();
      } else {
        tmp_0 = get_LightThemeLowContrastRippleAlpha();
      }
      tmp = tmp_0;
    } else {
      tmp = get_DarkThemeRippleAlpha();
    }
    return tmp;
  };
  var Companion_instance;
  function Companion_getInstance_4() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function RippleTheme() {
  }
  function DebugRippleTheme() {
    DebugRippleTheme_instance = this;
  }
  protoOf(DebugRippleTheme).defaultColor_r23c72_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(2042140174);
    sourceInformation($composer_0, 'C(defaultColor):RippleTheme.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(2042140174, $changed, -1, 'androidx.compose.material.ripple.DebugRippleTheme.defaultColor (RippleTheme.kt:239)');
    }
    var tmp0 = Companion_getInstance_4().defaultRippleColor_nmy1zh_k$(Companion_getInstance_3().get_Black_t4k9fh_k$(), true);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  };
  protoOf(DebugRippleTheme).rippleAlpha_2ak7e3_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-1629816343);
    sourceInformation($composer_0, 'C(rippleAlpha):RippleTheme.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(-1629816343, $changed, -1, 'androidx.compose.material.ripple.DebugRippleTheme.rippleAlpha (RippleTheme.kt:243)');
    }
    var tmp0 = Companion_getInstance_4().defaultRippleAlpha_gyw72t_k$(Companion_getInstance_3().get_Black_t4k9fh_k$(), true);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  };
  var DebugRippleTheme_instance;
  function DebugRippleTheme_getInstance() {
    if (DebugRippleTheme_instance == null)
      new DebugRippleTheme();
    return DebugRippleTheme_instance;
  }
  function RippleAlpha(draggedAlpha, focusedAlpha, hoveredAlpha, pressedAlpha) {
    this.draggedAlpha_1 = draggedAlpha;
    this.focusedAlpha_1 = focusedAlpha;
    this.hoveredAlpha_1 = hoveredAlpha;
    this.pressedAlpha_1 = pressedAlpha;
  }
  protoOf(RippleAlpha).get_draggedAlpha_4hlfij_k$ = function () {
    return this.draggedAlpha_1;
  };
  protoOf(RippleAlpha).get_focusedAlpha_9tm3xs_k$ = function () {
    return this.focusedAlpha_1;
  };
  protoOf(RippleAlpha).get_hoveredAlpha_oe6bn8_k$ = function () {
    return this.hoveredAlpha_1;
  };
  protoOf(RippleAlpha).get_pressedAlpha_4p7l23_k$ = function () {
    return this.pressedAlpha_1;
  };
  protoOf(RippleAlpha).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleAlpha))
      return false;
    if (!(this.draggedAlpha_1 === other.draggedAlpha_1))
      return false;
    if (!(this.focusedAlpha_1 === other.focusedAlpha_1))
      return false;
    if (!(this.hoveredAlpha_1 === other.hoveredAlpha_1))
      return false;
    if (!(this.pressedAlpha_1 === other.pressedAlpha_1))
      return false;
    return true;
  };
  protoOf(RippleAlpha).hashCode = function () {
    var result = getNumberHashCode(this.draggedAlpha_1);
    result = imul(31, result) + getNumberHashCode(this.focusedAlpha_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.hoveredAlpha_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.pressedAlpha_1) | 0;
    return result;
  };
  protoOf(RippleAlpha).toString = function () {
    return 'RippleAlpha(draggedAlpha=' + this.draggedAlpha_1 + ', focusedAlpha=' + this.focusedAlpha_1 + ', ' + ('hoveredAlpha=' + this.hoveredAlpha_1 + ', pressedAlpha=' + this.pressedAlpha_1 + ')');
  };
  function LocalRippleTheme$lambda() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return DebugRippleTheme_getInstance();
  }
  var properties_initialized_RippleTheme_kt_m09bsn;
  function _init_properties_RippleTheme_kt__e4jrk7() {
    if (!properties_initialized_RippleTheme_kt_m09bsn) {
      properties_initialized_RippleTheme_kt_m09bsn = true;
      LocalRippleTheme = staticCompositionLocalOf(LocalRippleTheme$lambda);
      LightThemeHighContrastRippleAlpha = new RippleAlpha(0.16, 0.24, 0.08, 0.24);
      LightThemeLowContrastRippleAlpha = new RippleAlpha(0.08, 0.12, 0.04, 0.12);
      DarkThemeRippleAlpha = new RippleAlpha(0.08, 0.12, 0.04, 0.1);
    }
  }
  function createPlatformRippleNode(interactionSource, bounded, radius, color, rippleAlpha) {
    return new CommonRippleNode(interactionSource, bounded, radius, color, rippleAlpha);
  }
  //region block: post-declaration
  protoOf(RippleNode).onMeasureResultChanged_ipbzyg_k$ = onMeasureResultChanged;
  protoOf(RippleNode).onPlaced_l0he8c_k$ = onPlaced;
  //endregion
  //region block: init
  FadeInDuration = 75;
  RadiusDuration = 225;
  FadeOutDuration = 150;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalRippleTheme;
  _.$_$.b = RippleAlpha;
  _.$_$.c = RippleTheme;
  _.$_$.d = createRippleModifierNode;
  _.$_$.e = rememberRipple;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-material-material-ripple.js.map
