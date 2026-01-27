(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-material3-material3.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-text.js', './Kotlin-DateTime-library-kotlinx-datetime.js', './compose-multiplatform-core-compose-animation-animation.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './kotlinx-coroutines-core.js', './cert-inspector-library.js', './html-internal-html-core-runtime.js', './html-html-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-material3-material3.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./Kotlin-DateTime-library-kotlinx-datetime.js'), require('./compose-multiplatform-core-compose-animation-animation.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./kotlinx-coroutines-core.js'), require('./cert-inspector-library.js'), require('./html-internal-html-core-runtime.js'), require('./html-html-core.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'cert-inspector:demo'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'cert-inspector:demo'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'cert-inspector:demo'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'cert-inspector:demo'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'cert-inspector:demo'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'cert-inspector:demo'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'cert-inspector:demo'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'cert-inspector:demo'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'cert-inspector:demo'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'cert-inspector:demo'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-material3-material3'] === 'undefined') {
      throw new Error("Error loading module 'cert-inspector:demo'. Its dependency 'compose-multiplatform-core-compose-material3-material3' was not found. Please, check whether 'compose-multiplatform-core-compose-material3-material3' is loaded prior to 'cert-inspector:demo'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'cert-inspector:demo'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'cert-inspector:demo'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'cert-inspector:demo'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'cert-inspector:demo'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'cert-inspector:demo'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'cert-inspector:demo'.");
    }
    if (typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined') {
      throw new Error("Error loading module 'cert-inspector:demo'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime' is loaded prior to 'cert-inspector:demo'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined') {
      throw new Error("Error loading module 'cert-inspector:demo'. Its dependency 'compose-multiplatform-core-compose-animation-animation' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation' is loaded prior to 'cert-inspector:demo'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'cert-inspector:demo'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'cert-inspector:demo'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'cert-inspector:demo'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'cert-inspector:demo'.");
    }
    if (typeof globalThis['cert-inspector-library'] === 'undefined') {
      throw new Error("Error loading module 'cert-inspector:demo'. Its dependency 'cert-inspector-library' was not found. Please, check whether 'cert-inspector-library' is loaded prior to 'cert-inspector:demo'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'cert-inspector:demo'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'cert-inspector:demo'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'cert-inspector:demo'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'cert-inspector:demo'.");
    }
    globalThis['cert-inspector:demo'] = factory(typeof globalThis['cert-inspector:demo'] === 'undefined' ? {} : globalThis['cert-inspector:demo'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['compose-multiplatform-core-compose-animation-animation'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['kotlinx-coroutines-core'], globalThis['cert-inspector-library'], globalThis['html-internal-html-core-runtime'], globalThis['html-html-core']);
  }
}(function (_, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_org_jetbrains_compose_animation_animation, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_sarmad_certinspector_library, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_compose_html_html_core) {
  'use strict';
  //region block: imports
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.z9;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p2;
  var THROW_CCE = kotlin_kotlin.$_$.ij;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k;
  var VOID = kotlin_kotlin.$_$.e;
  var clickable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i1;
  var CardDefaults_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.n;
  var MaterialTheme_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.o;
  var Long = kotlin_kotlin.$_$.bj;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.j4;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o2;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var Card = kotlin_org_jetbrains_compose_material3_material3.$_$.b;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.z;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.y9;
  var columnMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.k8;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.u9;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var isInterface = kotlin_kotlin.$_$.re;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var equals = kotlin_kotlin.$_$.td;
  var Unit_getInstance = kotlin_kotlin.$_$.u5;
  var ColumnScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b1;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f3;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i3;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a2;
  var Text = kotlin_org_jetbrains_compose_material3_material3.$_$.j;
  var Companion_getInstance_3 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.c;
  var toLocalDateTime = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.d;
  var KMutableProperty0 = kotlin_kotlin.$_$.kg;
  var THROW_ISE = kotlin_kotlin.$_$.kj;
  var getLocalDelegateReference = kotlin_kotlin.$_$.xd;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r;
  var HorizontalDivider = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  var joinToString = kotlin_kotlin.$_$.u9;
  var padding_1 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var System_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.l5;
  var DurationUnit_DAYS_getInstance = kotlin_kotlin.$_$.g;
  var toDuration = kotlin_kotlin.$_$.ni;
  var Duration__div_impl_dknbf4 = kotlin_kotlin.$_$.y2;
  var numberToInt = kotlin_kotlin.$_$.bf;
  var AnimatedVisibility = kotlin_org_jetbrains_compose_animation_animation.$_$.a;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var height = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var Spacer = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.n;
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a1;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.k4;
  var Canvas = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a1;
  var rowMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var RowScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c1;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a3;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q3;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m;
  var Triple = kotlin_kotlin.$_$.lj;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.jk;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.r;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g1;
  var collectAsState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.t2;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.q2;
  var KeyboardOptions = kotlin_org_jetbrains_compose_foundation_foundation.$_$.y;
  var KeyboardActions = kotlin_org_jetbrains_compose_foundation_foundation.$_$.x;
  var OutlinedTextField = kotlin_org_jetbrains_compose_material3_material3.$_$.g;
  var Button = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var _StrokeCap___init__impl__kfgr27 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c3;
  var CircularProgressIndicator = kotlin_org_jetbrains_compose_material3_material3.$_$.c;
  var LazyColumn = kotlin_org_jetbrains_compose_foundation_foundation.$_$.o;
  var Surface = kotlin_org_jetbrains_compose_material3_material3.$_$.h;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var protoOf = kotlin_kotlin.$_$.ef;
  var initMetadataForObject = kotlin_kotlin.$_$.he;
  var KProperty0 = kotlin_kotlin.$_$.mg;
  var TextButton = kotlin_org_jetbrains_compose_material3_material3.$_$.i;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var OutlinedButton = kotlin_org_jetbrains_compose_material3_material3.$_$.f;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l;
  var isSystemInDarkTheme = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k1;
  var Typography = kotlin_org_jetbrains_compose_material3_material3.$_$.k;
  var MaterialTheme = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var lightColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.m;
  var darkColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.l;
  var CoroutineImpl = kotlin_kotlin.$_$.yc;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ic;
  var Error_0 = kotlin_com_sarmad_certinspector_library.$_$.a;
  var Success = kotlin_com_sarmad_certinspector_library.$_$.b;
  var initMetadataForLambda = kotlin_kotlin.$_$.ge;
  var CertInspector = kotlin_com_sarmad_certinspector_library.$_$.c;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var isBlank = kotlin_kotlin.$_$.hh;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var initMetadataForClass = kotlin_kotlin.$_$.ce;
  var getStringHashCode = kotlin_kotlin.$_$.ae;
  var SuspendFunction1 = kotlin_kotlin.$_$.ad;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var flexDirection = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var alignItems = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var padding_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var fontFamily = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var maxWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var Color_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var marginBottom = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var marginTop = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var fontSize = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var border = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var backgroundColor = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var Color_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var Text_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var P = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var Li = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var H4 = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var Ul = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  var Text_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var Input = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var Button_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var H3 = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var H1 = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var KProperty1 = kotlin_kotlin.$_$.ng;
  var getPropertyCallableRef = kotlin_kotlin.$_$.zd;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$InspectorScreenKt, 'ComposableSingletons$InspectorScreenKt');
  initMetadataForLambda(InspectorViewModel$inspectUrl$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(InspectorViewModel, 'InspectorViewModel', InspectorViewModel);
  initMetadataForClass(UiState, 'UiState');
  initMetadataForObject(Idle, 'Idle', VOID, UiState);
  initMetadataForObject(Loading, 'Loading', VOID, UiState);
  initMetadataForClass(Success_0, 'Success', VOID, UiState);
  initMetadataForClass(Error_2, 'Error', VOID, UiState);
  initMetadataForObject(AppStyles, 'AppStyles', VOID, StyleSheet);
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  //endregion
  function CertificateCard(certificate, title, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-380234591);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(certificate) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (isTraceInProgress()) {
        traceEventStart(-380234591, $dirty, -1, 'com.sarmad.certinspector.demo.ui.component.CertificateCard (CertificateCard.kt:21)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(488779897);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.ui.component.CertificateCard.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var expanded$delegate = tmp0_group;
      var tmp_1 = fillMaxWidth(modifier_0._v);
      $composer_0.startReplaceGroup_5hh8aj_k$(488783887);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.ui.component.CertificateCard.<anonymous>' call
        var value_0 = CertificateCard$lambda_1(expanded$delegate);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_4 = clickable(tmp_1, VOID, VOID, VOID, tmp1_group);
      var tmp_5 = CardDefaults_getInstance();
      var tmp_6 = MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_0, 0).get_surface_ya87t7_k$();
      var tmp_7 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_8 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_9 = tmp_5.cardColors_6a1h03_k$(tmp_6, tmp_7, tmp_8, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 14);
      // Inline function 'kotlin.run' call
      // Inline function 'com.sarmad.certinspector.demo.ui.component.CertificateCard.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(737872787, true, CertificateCard$lambda_2(title, certificate, expanded$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_10;
      if (invalid || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.ui.component.CertificateCard.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_10 = value_1;
      } else {
        tmp_10 = it_1;
      }
      var tmp_11 = tmp_10;
      var tmp0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Card(tmp_4, null, tmp_9, null, null, tmp0, $composer_0, 196608, 26);
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
      tmp2_safe_receiver.updateScope_t8jcf_k$(CertificateCard$lambda_3(certificate, title, modifier_0, $changed, $default));
    }
  }
  function DetailRow(label, value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1038405742);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(label) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1038405742, $dirty, -1, 'com.sarmad.certinspector.demo.ui.component.DetailRow (CertificateCard.kt:99)');
      }
      var tmp = Companion_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(2);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = padding(tmp, VOID, tmp$ret$0);
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 6 >> 3 | 112 & 6 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
      var tmp_0 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_0, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
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
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      ColumnScopeInstance_getInstance();
      // Inline function 'com.sarmad.certinspector.demo.ui.component.DetailRow.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp0_style = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_5, 0).get_labelSmall_ne2i9o_k$();
      var tmp1_color = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_5, 0).get_onSurface_x1u0ac_k$(), 0.6);
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_4 = _TextOverflow___init__impl__obguoe(0);
      Text(label, null, tmp1_color, tmp_1, null, null, null, tmp_2, null, null, tmp_3, tmp_4, false, 0, 0, null, tmp0_style, $composer_5, 14 & $dirty, 0, 65530);
      var tmp_5 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_8 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_9 = _TextOverflow___init__impl__obguoe(0);
      Text(value, null, tmp_5, tmp_6, null, null, null, tmp_7, null, null, tmp_8, tmp_9, false, 0, 0, null, MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_5, 0).get_bodySmall_t1t5ng_k$(), $composer_5, 14 & $dirty >> 3, 0, 65534);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_3);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(DetailRow$lambda(label, value, $changed));
    }
  }
  function formatDate(instant) {
    var date = toLocalDateTime(instant, Companion_getInstance_3().currentSystemDefault_9rduv_k$());
    return '' + date.get_monthNumber_nb47ls_k$() + '/' + date.get_dayOfMonth_vblo3a_k$() + '/' + date.get_year_woy26e_k$();
  }
  function CertificateCard$lambda($expanded$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('expanded', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $expanded$delegate.get_value_j01efc_k$();
  }
  function CertificateCard$lambda_0($expanded$delegate, _set____db54di) {
    getLocalDelegateReference('expanded', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $expanded$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function CertificateCard$lambda_1($expanded$delegate) {
    return function () {
      CertificateCard$lambda_0($expanded$delegate, !CertificateCard$lambda($expanded$delegate));
      return Unit_getInstance();
    };
  }
  function CertificateCard$lambda$lambda($certificate) {
    return function ($this$AnimatedVisibility, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1448973025, $changed, -1, 'com.sarmad.certinspector.demo.ui.component.CertificateCard.<anonymous>.<anonymous>.<anonymous> (CertificateCard.kt:67)');
      }
      var tmp = Companion_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(8);
      var tmp2 = padding_0(tmp, VOID, tmp$ret$0);
      var tmp_0 = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(4);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = tmp2;
      var verticalArrangement = tmp_0.spacedBy_wt7oji_k$(tmp$ret$1);
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier = Companion_getInstance();
      if (!((4 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((4 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 54 >> 3 | 112 & 54 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
      var tmp_1 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
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
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      ColumnScopeInstance_getInstance();
      // Inline function 'com.sarmad.certinspector.demo.ui.component.CertificateCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp_2 = Companion_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$4 = _Dp___init__impl__ms3zkb(8);
      var tmp_3 = padding(tmp_2, VOID, tmp$ret$4);
      var tmp_4 = _Dp___init__impl__ms3zkb(0.0);
      HorizontalDivider(tmp_3, tmp_4, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_5, 6, 6);
      DetailRow('Serial', $certificate.get_serialNumber_5xg5gm_k$(), $composer_5, 6);
      DetailRow('Algorithm', $certificate.get_signatureAlgorithm_z6p5gg_k$(), $composer_5, 6);
      DetailRow('Public Key', $certificate.get_publicKey_wfyw0d_k$().get_algorithm_c8rufa_k$() + ' ' + $certificate.get_publicKey_wfyw0d_k$().get_size_woubt6_k$() + '-bit', $composer_5, 6);
      DetailRow('SHA-256', $certificate.get_fingerprints_9fmfdk_k$().get_sha256_jgs8q8_k$(), $composer_5, 6);
      $composer_5.startReplaceGroup_5hh8aj_k$(-13844542);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$certificate.get_subjectAlternativeNames_5wqmma_k$().isEmpty_y1axqb_k$()) {
        DetailRow('SANs', joinToString($certificate.get_subjectAlternativeNames_5wqmma_k$(), ', '), $composer_5, 6);
      }
      $composer_5.endReplaceGroup_ek144q_k$();
      $composer_5.startReplaceGroup_5hh8aj_k$(-13838263);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$certificate.get_keyUsage_no3mwl_k$().isEmpty_y1axqb_k$()) {
        DetailRow('Key Usage', joinToString($certificate.get_keyUsage_no3mwl_k$(), ', '), $composer_5, 6);
      }
      $composer_5.endReplaceGroup_ek144q_k$();
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function CertificateCard$lambda_2($title, $certificate, $expanded$delegate) {
    return function ($this$Card, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(737872787, $changed, -1, 'com.sarmad.certinspector.demo.ui.component.CertificateCard.<anonymous> (CertificateCard.kt:32)');
        }
        var tmp_0 = Companion_getInstance();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
        var tmp2 = padding_1(tmp_0, tmp$ret$0);
        var tmp_1 = Arrangement_getInstance();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$1 = _Dp___init__impl__ms3zkb(8);
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var modifier = tmp2;
        var verticalArrangement = tmp_1.spacedBy_wt7oji_k$(tmp$ret$1);
        var horizontalAlignment = null;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier = Companion_getInstance();
        if (!((4 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!((4 & 4) === 0))
          horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
        var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 54 >> 3 | 112 & 54 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_getInstance();
        var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
        var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized = materialize($composer_2, modifier_0);
        var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
        var tmp_2 = $composer_3.get_applier_bupu8u_k$();
        if (!isInterface(tmp_2, Applier)) {
          invalidApplier();
        }
        $composer_3.startReusableNode_jjgeyp_k$();
        if ($composer_3.get_inserting_25mlsw_k$()) {
          $composer_3.createNode_ahrd54_k$(tmp0);
        } else {
          $composer_3.useNode_io5s9l_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
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
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
        var tmp8 = ColumnScopeInstance_getInstance();
        // Inline function 'com.sarmad.certinspector.demo.ui.component.CertificateCard.<anonymous>.<anonymous>.<anonymous>' call
        var $changed_0 = 6 | 112 & 54 >> 6;
        var $composer_5 = $composer_4;
        var tmp0_style = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_5, 0).get_titleSmall_lcbhnc_k$();
        var tmp1_color = MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_5, 0).get_primary_gfn28_k$();
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextOverflow___init__impl__obguoe(0);
        Text($title, null, tmp1_color, tmp_3, null, null, null, tmp_4, null, null, tmp_5, tmp_6, false, 0, 0, null, tmp0_style, $composer_5, 0, 0, 65530);
        var tmp_7 = $certificate.get_subject_tmjbgd_k$().get_commonName_l55k1_k$();
        var tmp_8 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_9 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_10 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_11 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_12 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_7, null, tmp_8, tmp_9, null, null, null, tmp_10, null, null, tmp_11, tmp_12, false, 0, 0, null, MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_5, 0).get_titleMedium_jd9h8k_k$(), $composer_5, 0, 0, 65534);
        var tmp_13 = $certificate.get_validity_fpzo57_k$().get_notAfter_671g1a_k$().minus_mev7kl_k$(System_getInstance().now_2cba_k$());
        // Inline function 'kotlin.time.Companion.days' call
        Companion_getInstance_4();
        var tmp$ret$4 = toDuration(1, DurationUnit_DAYS_getInstance());
        var daysUntilExpiry = numberToInt(Duration__div_impl_dknbf4(tmp_13, tmp$ret$4));
        var tmp_14;
        if (daysUntilExpiry < 0) {
          $composer_5.startReplaceGroup_5hh8aj_k$(1940942746);
          var tmp0_group = MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_5, 0).get_error_5j21ve_k$();
          $composer_5.endReplaceGroup_ek144q_k$();
          tmp_14 = tmp0_group;
        } else if (daysUntilExpiry < 30) {
          $composer_5.startReplaceGroup_5hh8aj_k$(1940944226);
          $composer_5.endReplaceGroup_ek144q_k$();
          tmp_14 = get_WarningOrange();
        } else {
          $composer_5.startReplaceGroup_5hh8aj_k$(1940946599);
          var tmp1_group = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_5, 0).get_onSurface_x1u0ac_k$(), 0.6);
          $composer_5.endReplaceGroup_ek144q_k$();
          tmp_14 = tmp1_group;
        }
        var expiryColor = tmp_14;
        var tmp2_text = 'Expires: ' + formatDate($certificate.get_validity_fpzo57_k$().get_notAfter_671g1a_k$()) + ' (' + daysUntilExpiry + 'd)';
        var tmp3_style = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_5, 0).get_bodySmall_t1t5ng_k$();
        var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_16 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_17 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_18 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp2_text, null, expiryColor, tmp_15, null, null, null, tmp_16, null, null, tmp_17, tmp_18, false, 0, 0, null, tmp3_style, $composer_5, 0, 0, 65530);
        var tmp4_text = 'Issuer: ' + $certificate.get_issuer_ewqnya_k$().get_commonName_l55k1_k$();
        var tmp5_style = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_5, 0).get_bodySmall_t1t5ng_k$();
        var tmp6_color = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_5, 0).get_onSurface_x1u0ac_k$(), 0.6);
        var tmp_19 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_20 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_21 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_22 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp4_text, null, tmp6_color, tmp_19, null, null, null, tmp_20, null, null, tmp_21, tmp_22, false, 0, 0, null, tmp5_style, $composer_5, 0, 0, 65530);
        var tmp_23 = CertificateCard$lambda($expanded$delegate);
        // Inline function 'kotlin.run' call
        // Inline function 'com.sarmad.certinspector.demo.ui.component.CertificateCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(1448973025, true, CertificateCard$lambda$lambda($certificate), $composer_5, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_6.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_6.rememberedValue_4dg93v_k$();
        var tmp_24;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.sarmad.certinspector.demo.ui.component.CertificateCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_6.updateRememberedValue_l1wh71_k$(value);
          tmp_24 = value;
        } else {
          tmp_24 = it;
        }
        var tmp_25 = tmp_24;
        var tmp0_0 = (tmp_25 == null ? true : !(tmp_25 == null)) ? tmp_25 : THROW_CCE();
        sourceInformationMarkerEnd($composer_6);
        AnimatedVisibility(tmp8, tmp_23, null, null, null, null, tmp0_0, $composer_5, 1572864 | 14 & $changed_0, 30);
        var tmp7_text = CertificateCard$lambda($expanded$delegate) ? 'Show less \u25B2' : 'Show more \u25BC';
        var tmp8_style = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_5, 0).get_bodySmall_t1t5ng_k$();
        var tmp9_color = MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_5, 0).get_primary_gfn28_k$();
        var tmp_26 = Companion_getInstance();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$12 = _Dp___init__impl__ms3zkb(4);
        var tmp10_modifier = padding_0(tmp_26, VOID, tmp$ret$12);
        var tmp_27 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_28 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_29 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_30 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp7_text, tmp10_modifier, tmp9_color, tmp_27, null, null, null, tmp_28, null, null, tmp_29, tmp_30, false, 0, 0, null, tmp8_style, $composer_5, 48, 0, 65528);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_31;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_31 = Unit_getInstance();
        }
        tmp = tmp_31;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function CertificateCard$lambda_3($certificate, $title, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      CertificateCard($certificate, $title, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function DetailRow$lambda($label, $value, $$changed) {
    return function ($composer, $force) {
      DetailRow($label, $value, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ChainVisualization(depth, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1923046918);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(depth) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (isTraceInProgress()) {
        traceEventStart(1923046918, $dirty, -1, 'com.sarmad.certinspector.demo.ui.component.ChainVisualization (ChainVisualization.kt:18)');
      }
      var color = MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_0, 0).get_primary_gfn28_k$();
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = fillMaxWidth(modifier_0._v);
      var verticalArrangement = null;
      var horizontalAlignment = Companion_getInstance_1().get_CenterHorizontally_97ab0v_k$();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((2 & 1) === 0))
        modifier_1 = Companion_getInstance();
      if (!((2 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((2 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 384 >> 3 | 112 & 384 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
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
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      ColumnScopeInstance_getInstance();
      // Inline function 'com.sarmad.certinspector.demo.ui.component.ChainVisualization.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp0_style = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_5, 0).get_titleSmall_lcbhnc_k$();
      var tmp1_color = MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_5, 0).get_primary_gfn28_k$();
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('Certificate Chain', null, tmp1_color, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, tmp0_style, $composer_5, 6, 0, 65530);
      var tmp_4 = Companion_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(8);
      Spacer(height(tmp_4, tmp$ret$2), $composer_5, 6);
      var tmp_5 = fillMaxWidth(Companion_getInstance());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$3 = _Dp___init__impl__ms3zkb(80);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_3 = height(tmp_5, tmp$ret$3);
      var contentAlignment = Companion_getInstance_1().get_Center_3arb0i_k$();
      var propagateMinConstraints = false;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier_3 = Companion_getInstance();
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance();
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_4);
      var tmp0_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
      var tmp_6 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_6, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_0);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.get_inserting_25mlsw_k$() || !equals($this$with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
        $this$with_0.updateRememberedValue_l1wh71_k$(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).apply_pk82p8_k$(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      BoxScopeInstance_getInstance();
      // Inline function 'com.sarmad.certinspector.demo.ui.component.ChainVisualization.<anonymous>.<anonymous>' call
      var $composer_10 = $composer_9;
      var tmp_7 = fillMaxSize(Companion_getInstance());
      $composer_10.startReplaceGroup_5hh8aj_k$(-1414454683);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 14) === 4 | $composer_0.changed_j54hty_k$(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color))));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_8;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.ui.component.ChainVisualization.<anonymous>.<anonymous>.<anonymous>' call
        var value = ChainVisualization$lambda(depth, color);
        $composer_10.updateRememberedValue_l1wh71_k$(value);
        tmp_8 = value;
      } else {
        tmp_8 = it;
      }
      var tmp_9 = tmp_8;
      var tmp0_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_10.endReplaceGroup_ek144q_k$();
      Canvas(tmp_7, tmp0_group, $composer_10, 6);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_5 = fillMaxWidth(Companion_getInstance());
      var horizontalArrangement = Arrangement_getInstance().get_SpaceEvenly_3s2yx0_k$();
      var verticalAlignment = null;
      var $composer_11 = $composer_5;
      sourceInformationMarkerStart($composer_11, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier_5 = Companion_getInstance();
      if (!((4 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((4 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_1 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_11, 14 & 54 >> 3 | 112 & 54 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_6 = modifier_5;
      var $composer_12 = $composer_11;
      sourceInformationMarkerStart($composer_12, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_6 = Companion_getInstance();
      var compositeKeyHash_1 = get_currentCompositeKeyHash($composer_12, 0);
      var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_1 = materialize($composer_12, modifier_6);
      var tmp0_1 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_13 = $composer_12;
      sourceInformationMarkerStart($composer_13, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
      var tmp_10 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_10, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jjgeyp_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_ahrd54_k$(tmp0_1);
      } else {
        $composer_13.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_1 = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
      var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
      if ($this$with_1.get_inserting_25mlsw_k$() || !equals($this$with_1.rememberedValue_4dg93v_k$(), compositeKeyHash_1)) {
        $this$with_1.updateRememberedValue_l1wh71_k$(compositeKeyHash_1);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).apply_pk82p8_k$(compositeKeyHash_1, block_1);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
      var $composer_14 = $composer_13;
      sourceInformationMarkerStart($composer_14, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
      RowScopeInstance_getInstance();
      // Inline function 'com.sarmad.certinspector.demo.ui.component.ChainVisualization.<anonymous>.<anonymous>' call
      var $composer_15 = $composer_14;
      var tmp0_style_0 = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_15, 0).get_labelSmall_ne2i9o_k$();
      var tmp1_textAlign = Companion_getInstance_5().get_Center_fp5t1o_k$();
      var tmp_11 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_15 = _TextOverflow___init__impl__obguoe(0);
      Text('Leaf', null, tmp_11, tmp_12, null, null, null, tmp_13, null, tmp1_textAlign, tmp_14, tmp_15, false, 0, 0, null, tmp0_style_0, $composer_15, 6, 0, 65022);
      $composer_15.startReplaceGroup_5hh8aj_k$(-1414414636);
      if (depth > 2) {
        var tmp2_style = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_15, 0).get_labelSmall_ne2i9o_k$();
        var tmp3_textAlign = Companion_getInstance_5().get_Center_fp5t1o_k$();
        var tmp_16 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_17 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_18 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_19 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_20 = _TextOverflow___init__impl__obguoe(0);
        Text('Intermediate', null, tmp_16, tmp_17, null, null, null, tmp_18, null, tmp3_textAlign, tmp_19, tmp_20, false, 0, 0, null, tmp2_style, $composer_15, 6, 0, 65022);
      }
      $composer_15.endReplaceGroup_ek144q_k$();
      $composer_15.startReplaceGroup_5hh8aj_k$(-1414406964);
      if (depth > 1) {
        var tmp4_style = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_15, 0).get_labelSmall_ne2i9o_k$();
        var tmp5_textAlign = Companion_getInstance_5().get_Center_fp5t1o_k$();
        var tmp_21 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_22 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_23 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_24 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_25 = _TextOverflow___init__impl__obguoe(0);
        Text('Root', null, tmp_21, tmp_22, null, null, null, tmp_23, null, tmp5_textAlign, tmp_24, tmp_25, false, 0, 0, null, tmp4_style, $composer_15, 6, 0, 65022);
      }
      $composer_15.endReplaceGroup_ek144q_k$();
      sourceInformationMarkerEnd($composer_14);
      $composer_13.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_13);
      sourceInformationMarkerEnd($composer_12);
      sourceInformationMarkerEnd($composer_11);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_3);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(ChainVisualization$lambda_0(depth, modifier_0, $changed, $default));
    }
  }
  function ChainVisualization$lambda($depth, $color) {
    return function ($this$Canvas) {
      var nodeRadius = 15.0;
      var spacing = _Size___get_width__impl__58y75t($this$Canvas.get_size_cxx1ym_k$()) / ($depth + 1 | 0);
      var centerY = _Size___get_height__impl__a04p02($this$Canvas.get_size_cxx1ym_k$()) / 2;
      var inductionVariable = 0;
      var tmp;
      if (inductionVariable < $depth) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var x = spacing * (i + 1 | 0);
          $this$Canvas.drawCircle$default_wqrb84_k$($color, nodeRadius, Offset(x, centerY));
          if (i < ($depth - 1 | 0)) {
            var nextX = spacing * (i + 2 | 0);
            var tmp_0 = Offset(x + nodeRadius, centerY);
            var tmp_1 = Offset(nextX - nodeRadius, centerY);
            var tmp_2 = Companion_getInstance_6();
            // Inline function 'kotlin.floatArrayOf' call
            var tmp$ret$0 = new Float32Array([8.0, 8.0]);
            $this$Canvas.drawLine$default_457gsp_k$($color, tmp_0, tmp_1, 2.0, VOID, tmp_2.dashPathEffect$default_i901tt_k$(tmp$ret$0));
          }
        }
         while (inductionVariable < $depth);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ChainVisualization$lambda_0($depth, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      ChainVisualization($depth, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SecurityBadge(status, score, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(125123058);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(status) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(score) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (isTraceInProgress()) {
        traceEventStart(125123058, $dirty, -1, 'com.sarmad.certinspector.demo.ui.component.SecurityBadge (SecurityBadge.kt:21)');
      }
      var tmp;
      switch (status.get_ordinal_ip24qg_k$()) {
        case 0:
          tmp = new Triple(new Color(get_SuccessGreen()), 'Secure', '\u2713');
          break;
        case 1:
          tmp = new Triple(new Color(get_WarningOrange()), 'Warning', '\u26A0');
          break;
        case 2:
          tmp = new Triple(new Color(get_CriticalRed()), 'Critical', '\u2715');
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var _destruct__k2r9zo = tmp;
      var color = _destruct__k2r9zo.component1_7eebsc_k$().value_1;
      var label = _destruct__k2r9zo.component2_7eebsb_k$();
      var icon = _destruct__k2r9zo.component3_7eebsa_k$();
      var tmp_0 = modifier_0._v;
      var tmp_1 = Color__copy$default_impl_ectz3s(color, 0.1);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(8);
      var tmp_2 = background(tmp_0, tmp_1, RoundedCornerShape(tmp$ret$0));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_3 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(8);
      var tmp4 = padding(tmp_2, tmp_3, tmp$ret$2);
      var tmp_4 = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$3 = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_1 = tmp4;
      var horizontalArrangement = tmp_4.spacedBy_wt7oji_k$(tmp$ret$3);
      var verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_getInstance();
      if (!((0 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((0 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
      var tmp_5 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_5, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
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
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
      RowScopeInstance_getInstance();
      // Inline function 'com.sarmad.certinspector.demo.ui.component.SecurityBadge.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp0_style = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_5, 0).get_titleMedium_jd9h8k_k$();
      var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_8 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_9 = _TextOverflow___init__impl__obguoe(0);
      Text(icon, null, color, tmp_6, null, null, null, tmp_7, null, null, tmp_8, tmp_9, false, 0, 0, null, tmp0_style, $composer_5, 0, 0, 65530);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_3 = null;
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((7 & 1) === 0))
        modifier_3 = Companion_getInstance();
      if (!((7 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((7 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance();
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_4);
      var tmp0_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
      var tmp_10 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_10, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_0);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.get_inserting_25mlsw_k$() || !equals($this$with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
        $this$with_0.updateRememberedValue_l1wh71_k$(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).apply_pk82p8_k$(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      ColumnScopeInstance_getInstance();
      // Inline function 'com.sarmad.certinspector.demo.ui.component.SecurityBadge.<anonymous>.<anonymous>' call
      var $composer_10 = $composer_9;
      var tmp0_style_0 = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_10, 0).get_titleSmall_lcbhnc_k$();
      var tmp_11 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_14 = _TextOverflow___init__impl__obguoe(0);
      Text(label, null, color, tmp_11, null, null, null, tmp_12, null, null, tmp_13, tmp_14, false, 0, 0, null, tmp0_style_0, $composer_10, 0, 0, 65530);
      var tmp1_text = 'Score: ' + score + '/100';
      var tmp2_style = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_10, 0).get_bodySmall_t1t5ng_k$();
      var tmp3_color = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_10, 0).get_onSurface_x1u0ac_k$(), 0.6);
      var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_16 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_17 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_18 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp1_text, null, tmp3_color, tmp_15, null, null, null, tmp_16, null, null, tmp_17, tmp_18, false, 0, 0, null, tmp2_style, $composer_10, 0, 0, 65530);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_3);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(SecurityBadge$lambda(status, score, modifier_0, $changed, $default));
    }
  }
  function SecurityBadge$lambda($status, $score, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      SecurityBadge($status, $score, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function InspectorScreen(viewModel, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-865589605);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(viewModel) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (isTraceInProgress()) {
        traceEventStart(-865589605, $dirty, -1, 'com.sarmad.certinspector.demo.ui.screen.InspectorScreen (InspectorScreen.kt:27)');
      }
      var tmp = viewModel.get_uiState_66ctcc_k$();
      var uiState$delegate = collectAsState(tmp, null, $composer_0, 0, 1);
      $composer_0.startReplaceGroup_5hh8aj_k$(-1375120033);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.ui.screen.InspectorScreen.<anonymous>' call
        var value = mutableStateOf('');
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var urlInput$delegate = tmp0_group;
      var tmp_2 = fillMaxSize(modifier_0._v);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$4 = _Dp___init__impl__ms3zkb(16);
      var tmp4 = padding_1(tmp_2, tmp$ret$4);
      var tmp_3 = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$5 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = tmp4;
      var verticalArrangement = tmp_3.spacedBy_wt7oji_k$(tmp$ret$5);
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier_1 = Companion_getInstance();
      if (!((4 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((4 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 48 >> 3 | 112 & 48 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
      var tmp_4 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_4, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
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
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      ColumnScopeInstance_getInstance();
      // Inline function 'com.sarmad.certinspector.demo.ui.screen.InspectorScreen.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp0_style = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_5, 0).get_headlineMedium_mllw1e_k$();
      var tmp1_color = MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_5, 0).get_primary_gfn28_k$();
      var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_8 = _TextOverflow___init__impl__obguoe(0);
      Text('Certificate Inspector', null, tmp1_color, tmp_5, null, null, null, tmp_6, null, null, tmp_7, tmp_8, false, 0, 0, null, tmp0_style, $composer_5, 6, 0, 65530);
      var tmp2_value = InspectorScreen$lambda_0(urlInput$delegate);
      var tmp3_modifier = fillMaxWidth(Companion_getInstance());
      var tmp4_keyboardOptions = new KeyboardOptions(VOID, VOID, Companion_getInstance_7().get_Uri_k6mai7_k$(), Companion_getInstance_8().get_Done_6zvpof_k$());
      $composer_5.startReplaceGroup_5hh8aj_k$(1457777125);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$(viewModel);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.ui.screen.InspectorScreen.<anonymous>.<anonymous>' call
        var value_0 = InspectorScreen$lambda_2(viewModel, urlInput$delegate);
        $composer_5.updateRememberedValue_l1wh71_k$(value_0);
        tmp_9 = value_0;
      } else {
        tmp_9 = it_0;
      }
      var tmp_10 = tmp_9;
      var tmp0_group_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_5.endReplaceGroup_ek144q_k$();
      var tmp5_keyboardActions = new KeyboardActions(tmp0_group_0);
      $composer_5.startReplaceGroup_5hh8aj_k$(1457762640);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_11;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.ui.screen.InspectorScreen.<anonymous>.<anonymous>' call
        var value_1 = InspectorScreen$lambda_3(urlInput$delegate);
        $composer_5.updateRememberedValue_l1wh71_k$(value_1);
        tmp_11 = value_1;
      } else {
        tmp_11 = it_1;
      }
      var tmp_12 = tmp_11;
      var tmp1_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_5.endReplaceGroup_ek144q_k$();
      var tmp_13 = ComposableSingletons$InspectorScreenKt_getInstance().lambda_1_r8sbbp_1;
      var tmp_14 = ComposableSingletons$InspectorScreenKt_getInstance().lambda_2_r8sbbo_1;
      OutlinedTextField(tmp2_value, tmp1_group, tmp3_modifier, false, false, null, tmp_13, tmp_14, null, null, null, null, null, false, null, tmp4_keyboardOptions, tmp5_keyboardActions, true, 0, 0, null, null, null, $composer_5, 14156208, 12779520, 0, 8159032);
      $composer_5.startReplaceGroup_5hh8aj_k$(1457781405);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.changedInstance_s1wkiy_k$(viewModel);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_15;
      if (invalid_0 || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.ui.screen.InspectorScreen.<anonymous>.<anonymous>' call
        var value_2 = InspectorScreen$lambda_4(viewModel, urlInput$delegate);
        $composer_5.updateRememberedValue_l1wh71_k$(value_2);
        tmp_15 = value_2;
      } else {
        tmp_15 = it_2;
      }
      var tmp_16 = tmp_15;
      var tmp2_group = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      $composer_5.endReplaceGroup_ek144q_k$();
      var tmp_17 = fillMaxWidth(Companion_getInstance());
      var tmp_18 = InspectorScreen$lambda(uiState$delegate);
      var tmp_19 = !(tmp_18 instanceof Loading);
      // Inline function 'kotlin.run' call
      // Inline function 'com.sarmad.certinspector.demo.ui.screen.InspectorScreen.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-39354251, true, InspectorScreen$lambda_5(uiState$delegate), $composer_5, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_6.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_6.rememberedValue_4dg93v_k$();
      var tmp_20;
      if (invalid_1 || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.ui.screen.InspectorScreen.<anonymous>.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_6.updateRememberedValue_l1wh71_k$(value_3);
        tmp_20 = value_3;
      } else {
        tmp_20 = it_3;
      }
      var tmp_21 = tmp_20;
      var tmp0_0 = (tmp_21 == null ? true : !(tmp_21 == null)) ? tmp_21 : THROW_CCE();
      sourceInformationMarkerEnd($composer_6);
      Button(tmp2_group, tmp_17, tmp_19, null, null, null, null, null, null, tmp0_0, $composer_5, 805306416, 504);
      var state = InspectorScreen$lambda(uiState$delegate);
      if (state instanceof Idle) {
        $composer_5.startReplaceGroup_5hh8aj_k$(-2053060974);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier_3 = fillMaxSize(Companion_getInstance());
        var contentAlignment = Companion_getInstance_1().get_Center_3arb0i_k$();
        var propagateMinConstraints = false;
        var $composer_7 = $composer_5;
        sourceInformationMarkerStart($composer_7, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier_3 = Companion_getInstance();
        if (!((4 & 2) === 0))
          contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
        if (!((4 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_4 = modifier_3;
        var $composer_8 = $composer_7;
        sourceInformationMarkerStart($composer_8, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_4 = Companion_getInstance();
        var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_8, 0);
        var localMap_0 = $composer_8.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_0 = materialize($composer_8, modifier_4);
        var tmp0_1 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
        var tmp_22 = $composer_9.get_applier_bupu8u_k$();
        if (!isInterface(tmp_22, Applier)) {
          invalidApplier();
        }
        $composer_9.startReusableNode_jjgeyp_k$();
        if ($composer_9.get_inserting_25mlsw_k$()) {
          $composer_9.createNode_ahrd54_k$(tmp0_1);
        } else {
          $composer_9.useNode_io5s9l_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_9);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        if ($this$with_0.get_inserting_25mlsw_k$() || !equals($this$with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
          $this$with_0.updateRememberedValue_l1wh71_k$(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).apply_pk82p8_k$(compositeKeyHash_0, block_0);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_10 = $composer_9;
        sourceInformationMarkerStart($composer_10, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        BoxScopeInstance_getInstance();
        // Inline function 'com.sarmad.certinspector.demo.ui.screen.InspectorScreen.<anonymous>.<anonymous>' call
        var $composer_11 = $composer_10;
        var tmp0_style_0 = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_11, 0).get_bodyLarge_sxra4w_k$();
        var tmp1_color_0 = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_11, 0).get_onSurface_x1u0ac_k$(), 0.6);
        var tmp_23 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_24 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_25 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_26 = _TextOverflow___init__impl__obguoe(0);
        Text('Enter a URL to inspect its SSL certificate', null, tmp1_color_0, tmp_23, null, null, null, tmp_24, null, null, tmp_25, tmp_26, false, 0, 0, null, tmp0_style_0, $composer_11, 6, 0, 65530);
        sourceInformationMarkerEnd($composer_10);
        $composer_9.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_9);
        sourceInformationMarkerEnd($composer_8);
        sourceInformationMarkerEnd($composer_7);
        $composer_5.endReplaceGroup_ek144q_k$();
      } else {
        if (state instanceof Loading) {
          $composer_5.startReplaceGroup_5hh8aj_k$(-2052571174);
          // Inline function 'androidx.compose.foundation.layout.Box' call
          var modifier_5 = fillMaxSize(Companion_getInstance());
          var contentAlignment_0 = Companion_getInstance_1().get_Center_3arb0i_k$();
          var propagateMinConstraints_0 = false;
          var $composer_12 = $composer_5;
          sourceInformationMarkerStart($composer_12, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
          if (!((4 & 1) === 0))
            modifier_5 = Companion_getInstance();
          if (!((4 & 2) === 0))
            contentAlignment_0 = Companion_getInstance_1().get_TopStart_o4x792_k$();
          if (!((4 & 4) === 0))
            propagateMinConstraints_0 = false;
          var measurePolicy_1 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
          // Inline function 'androidx.compose.ui.layout.Layout' call
          var modifier_6 = modifier_5;
          var $composer_13 = $composer_12;
          sourceInformationMarkerStart($composer_13, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
          if (!((0 & 2) === 0))
            modifier_6 = Companion_getInstance();
          var compositeKeyHash_1 = get_currentCompositeKeyHash($composer_13, 0);
          var localMap_1 = $composer_13.get_currentCompositionLocalMap_fmcf79_k$();
          var materialized_1 = materialize($composer_13, modifier_6);
          var tmp0_2 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
          // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
          var $composer_14 = $composer_13;
          sourceInformationMarkerStart($composer_14, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
          var tmp_27 = $composer_14.get_applier_bupu8u_k$();
          if (!isInterface(tmp_27, Applier)) {
            invalidApplier();
          }
          $composer_14.startReusableNode_jjgeyp_k$();
          if ($composer_14.get_inserting_25mlsw_k$()) {
            $composer_14.createNode_ahrd54_k$(tmp0_2);
          } else {
            $composer_14.useNode_io5s9l_k$();
          }
          // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
          var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_14);
          Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
          // Inline function 'androidx.compose.runtime.Updater.set' call
          var block_1 = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
          // Inline function 'kotlin.with' call
          // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
          var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
          if ($this$with_1.get_inserting_25mlsw_k$() || !equals($this$with_1.rememberedValue_4dg93v_k$(), compositeKeyHash_1)) {
            $this$with_1.updateRememberedValue_l1wh71_k$(compositeKeyHash_1);
            _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).apply_pk82p8_k$(compositeKeyHash_1, block_1);
          }
          Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
          // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
          var $composer_15 = $composer_14;
          sourceInformationMarkerStart($composer_15, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
          BoxScopeInstance_getInstance();
          // Inline function 'com.sarmad.certinspector.demo.ui.screen.InspectorScreen.<anonymous>.<anonymous>' call
          var $composer_16 = $composer_15;
          var tmp_28 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_29 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_30 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          CircularProgressIndicator(null, tmp_28, tmp_29, tmp_30, _StrokeCap___init__impl__kfgr27(0), $composer_16, 0, 31);
          sourceInformationMarkerEnd($composer_15);
          $composer_14.endNode_3m0yfn_k$();
          sourceInformationMarkerEnd($composer_14);
          sourceInformationMarkerEnd($composer_13);
          sourceInformationMarkerEnd($composer_12);
          $composer_5.endReplaceGroup_ek144q_k$();
        } else {
          if (state instanceof Success_0) {
            $composer_5.startReplaceGroup_5hh8aj_k$(-2052306868);
            $composer_5.startReplaceGroup_5hh8aj_k$(1457820212);
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid_2 = $composer_0.changedInstance_s1wkiy_k$(viewModel);
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it_4 = $composer_5.rememberedValue_4dg93v_k$();
            var tmp_31;
            if (invalid_2 || it_4 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
              // Inline function 'com.sarmad.certinspector.demo.ui.screen.InspectorScreen.<anonymous>.<anonymous>' call
              var value_4 = InspectorScreen$lambda_6(viewModel);
              $composer_5.updateRememberedValue_l1wh71_k$(value_4);
              tmp_31 = value_4;
            } else {
              tmp_31 = it_4;
            }
            var tmp_32 = tmp_31;
            var tmp3_group = (tmp_32 == null ? true : !(tmp_32 == null)) ? tmp_32 : THROW_CCE();
            $composer_5.endReplaceGroup_ek144q_k$();
            ResultSection(state, tmp3_group, $composer_5, 0);
            $composer_5.endReplaceGroup_ek144q_k$();
          } else {
            if (state instanceof Error_2) {
              $composer_5.startReplaceGroup_5hh8aj_k$(-2052095293);
              var tmp_33 = fillMaxWidth(Companion_getInstance());
              var tmp_34 = CardDefaults_getInstance();
              var tmp_35 = MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_5, 0).get_errorContainer_2c9dd5_k$();
              var tmp_36 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
              var tmp_37 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
              var tmp_38 = tmp_34.cardColors_6a1h03_k$(tmp_35, tmp_36, tmp_37, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_5, 0, 14);
              // Inline function 'kotlin.run' call
              // Inline function 'com.sarmad.certinspector.demo.ui.screen.InspectorScreen.<anonymous>.<anonymous>' call
              var dispatchReceiver_0 = rememberComposableLambda(-1902759628, true, InspectorScreen$lambda_7(state, viewModel), $composer_5, 54);
              // Inline function 'androidx.compose.runtime.remember' call
              var $composer_17 = $composer_5;
              sourceInformationMarkerStart($composer_17, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
              // Inline function 'androidx.compose.runtime.cache' call
              var invalid_3 = $composer_17.changed_ga7h3f_k$(dispatchReceiver_0);
              // Inline function 'kotlin.let' call
              // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
              var it_5 = $composer_17.rememberedValue_4dg93v_k$();
              var tmp_39;
              if (invalid_3 || it_5 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
                // Inline function 'com.sarmad.certinspector.demo.ui.screen.InspectorScreen.<anonymous>.<anonymous>.<anonymous>' call
                var value_5 = ComposableLambda$invoke$ref_7(dispatchReceiver_0);
                $composer_17.updateRememberedValue_l1wh71_k$(value_5);
                tmp_39 = value_5;
              } else {
                tmp_39 = it_5;
              }
              var tmp_40 = tmp_39;
              var tmp0_3 = (tmp_40 == null ? true : !(tmp_40 == null)) ? tmp_40 : THROW_CCE();
              sourceInformationMarkerEnd($composer_17);
              Card(tmp_33, null, tmp_38, null, null, tmp0_3, $composer_5, 196614, 26);
              $composer_5.endReplaceGroup_ek144q_k$();
            } else {
              $composer_5.startReplaceGroup_5hh8aj_k$(1457792576);
              $composer_5.endReplaceGroup_ek144q_k$();
              noWhenBranchMatchedException();
            }
          }
        }
      }
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(InspectorScreen$lambda_8(viewModel, modifier_0, $changed, $default));
    }
  }
  function ResultSection(state, onReset, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(462412733);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(state) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onReset) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(462412733, $dirty, -1, 'com.sarmad.certinspector.demo.ui.screen.ResultSection (InspectorScreen.kt:135)');
      }
      var analysis = state.get_analysis_ma8vxh_k$();
      var tmp = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
      var tmp_0 = tmp.spacedBy_wt7oji_k$(tmp$ret$0);
      $composer_0.startReplaceGroup_5hh8aj_k$(1668173635);
      var tmp1 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.changedInstance_s1wkiy_k$(analysis) | ($dirty & 112) === 32);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>' call
        var value = ResultSection$lambda(analysis, onReset);
        tmp1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LazyColumn(null, null, null, false, tmp_0, null, null, false, tmp0_group, $composer_0, 24576, 239);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(ResultSection$lambda_0(state, onReset, $changed));
    }
  }
  function InfoChip(text, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-467151283);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-467151283, $dirty, -1, 'com.sarmad.certinspector.demo.ui.screen.InfoChip (InspectorScreen.kt:286)');
      }
      var tmp = MaterialTheme_getInstance().get_shapes_fig90e_k$($composer_0, 0).get_small_iylg4e_k$();
      var tmp_0 = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_0, 0).get_primary_gfn28_k$(), 0.1);
      var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'kotlin.run' call
      // Inline function 'com.sarmad.certinspector.demo.ui.screen.InfoChip.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(421245778, true, InfoChip$lambda(text), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.ui.screen.InfoChip.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_19(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_4 = value;
      } else {
        tmp_4 = it;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Surface(null, tmp, tmp_0, tmp_1, tmp_2, tmp_3, null, tmp0, $composer_0, 12582912, 121);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(InfoChip$lambda_0(text, $changed));
    }
  }
  function IssueItem(description, severity, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1678526512);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(description) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(severity) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1678526512, $dirty, -1, 'com.sarmad.certinspector.demo.ui.screen.IssueItem (InspectorScreen.kt:304)');
      }
      var tmp;
      switch (severity.get_ordinal_ip24qg_k$()) {
        case 3:
          $composer_0.startReplaceGroup_5hh8aj_k$(2069565748);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp = get_CriticalRed();
          break;
        case 2:
          $composer_0.startReplaceGroup_5hh8aj_k$(2069567758);
          var tmp0_group = MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_0, 0).get_error_5j21ve_k$();
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp = tmp0_group;
          break;
        case 1:
          $composer_0.startReplaceGroup_5hh8aj_k$(2069568822);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp = get_WarningOrange();
          break;
        case 0:
          $composer_0.startReplaceGroup_5hh8aj_k$(2069571195);
          var tmp1_group = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_0, 0).get_onSurface_x1u0ac_k$(), 0.6);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp = tmp1_group;
          break;
        default:
          $composer_0.startReplaceGroup_5hh8aj_k$(2069564474);
          $composer_0.endReplaceGroup_ek144q_k$();
          noWhenBranchMatchedException();
          break;
      }
      var color = tmp;
      var tmp_0 = Companion_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      var tmp2 = padding(tmp_0, VOID, tmp$ret$0);
      var tmp_1 = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier = tmp2;
      var horizontalArrangement = tmp_1.spacedBy_wt7oji_k$(tmp$ret$1);
      var verticalAlignment = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier = Companion_getInstance();
      if (!((4 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((4 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 54 >> 3 | 112 & 54 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
      var tmp_2 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
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
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
      RowScopeInstance_getInstance();
      // Inline function 'com.sarmad.certinspector.demo.ui.screen.IssueItem.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp_3;
      switch (severity.get_ordinal_ip24qg_k$()) {
        case 3:
          tmp_3 = '\u26A0';
          break;
        case 2:
          tmp_3 = '\u26A0';
          break;
        case 1:
          tmp_3 = '\u26A1';
          break;
        case 0:
          tmp_3 = '\u2139';
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_4 = tmp_3;
      var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_8 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp_4, null, color, tmp_5, null, null, null, tmp_6, null, null, tmp_7, tmp_8, false, 0, 0, null, null, $composer_5, 0, 0, 131066);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = null;
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((7 & 1) === 0))
        modifier_1 = Companion_getInstance();
      if (!((7 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((7 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance();
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
      var tmp_9 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_9, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_0);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.get_inserting_25mlsw_k$() || !equals($this$with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
        $this$with_0.updateRememberedValue_l1wh71_k$(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).apply_pk82p8_k$(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      ColumnScopeInstance_getInstance();
      // Inline function 'com.sarmad.certinspector.demo.ui.screen.IssueItem.<anonymous>.<anonymous>' call
      var $composer_10 = $composer_9;
      var tmp0_text = severity.get_name_woqyms_k$();
      var tmp1_style = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_10, 0).get_labelSmall_ne2i9o_k$();
      var tmp_10 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_11 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_13 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp0_text, null, color, tmp_10, null, null, null, tmp_11, null, null, tmp_12, tmp_13, false, 0, 0, null, tmp1_style, $composer_10, 0, 0, 65530);
      var tmp_14 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_16 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_17 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_18 = _TextOverflow___init__impl__obguoe(0);
      Text(description, null, tmp_14, tmp_15, null, null, null, tmp_16, null, null, tmp_17, tmp_18, false, 0, 0, null, MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_10, 0).get_bodyMedium_psz2kg_k$(), $composer_10, 14 & $dirty, 0, 65534);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
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
      tmp2_safe_receiver.updateScope_t8jcf_k$(IssueItem$lambda(description, severity, $changed));
    }
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$InspectorScreenKt$lambda_1$lambda_96k9i1($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1049365003, $changed, -1, 'com.sarmad.certinspector.demo.ui.screen.ComposableSingletons$InspectorScreenKt.lambda-1.<anonymous> (InspectorScreen.kt:46)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('Enter URL or Domain', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$InspectorScreenKt$lambda_2$lambda_x0xbew($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1960539764, $changed, -1, 'com.sarmad.certinspector.demo.ui.screen.ComposableSingletons$InspectorScreenKt.lambda-2.<anonymous> (InspectorScreen.kt:47)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('example.com or https://example.com', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$InspectorScreenKt$lambda_3$lambda_47aucp($this$TextButton, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(689105569, $changed, -1, 'com.sarmad.certinspector.demo.ui.screen.ComposableSingletons$InspectorScreenKt.lambda-3.<anonymous> (InspectorScreen.kt:122)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('Dismiss', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$InspectorScreenKt$lambda_4$lambda_ombmpi($this$OutlinedButton, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1474262174, $changed, -1, 'com.sarmad.certinspector.demo.ui.screen.ComposableSingletons$InspectorScreenKt.lambda-4.<anonymous> (InspectorScreen.kt:275)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('Inspect Another URL', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$InspectorScreenKt$lambda_5$lambda_hl5y7f($this$item, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-972916177, $changed, -1, 'com.sarmad.certinspector.demo.ui.screen.ComposableSingletons$InspectorScreenKt.lambda-5.<anonymous> (InspectorScreen.kt:280)');
      }
      var tmp = Companion_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
      Spacer(height(tmp, tmp$ret$0), $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$InspectorScreenKt() {
    ComposableSingletons$InspectorScreenKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1049365003, false, ComposableSingletons$InspectorScreenKt$lambda_1$lambda_96k9i1));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-1960539764, false, ComposableSingletons$InspectorScreenKt$lambda_2$lambda_x0xbew));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(689105569, false, ComposableSingletons$InspectorScreenKt$lambda_3$lambda_47aucp));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(1474262174, false, ComposableSingletons$InspectorScreenKt$lambda_4$lambda_ombmpi));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-972916177, false, ComposableSingletons$InspectorScreenKt$lambda_5$lambda_hl5y7f));
  }
  protoOf(ComposableSingletons$InspectorScreenKt).get_lambda_1_34z340_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$InspectorScreenKt).get_lambda_2_2mi82p_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$InspectorScreenKt).get_lambda_3_241d1e_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$InspectorScreenKt).get_lambda_4_1lki03_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$InspectorScreenKt).get_lambda_5_133mys_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  var ComposableSingletons$InspectorScreenKt_instance;
  function ComposableSingletons$InspectorScreenKt_getInstance() {
    if (ComposableSingletons$InspectorScreenKt_instance == null)
      new ComposableSingletons$InspectorScreenKt();
    return ComposableSingletons$InspectorScreenKt_instance;
  }
  function InspectorScreen$lambda($uiState$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('uiState', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $uiState$delegate.get_value_j01efc_k$();
  }
  function InspectorScreen$lambda_0($urlInput$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('urlInput', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $urlInput$delegate.get_value_j01efc_k$();
  }
  function InspectorScreen$lambda_1($urlInput$delegate, _set____db54di) {
    getLocalDelegateReference('urlInput', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $urlInput$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function InspectorScreen$lambda_2($viewModel, $urlInput$delegate) {
    return function ($this$KeyboardActions) {
      $viewModel.inspectUrl_a2whdd_k$(InspectorScreen$lambda_0($urlInput$delegate));
      return Unit_getInstance();
    };
  }
  function InspectorScreen$lambda_3($urlInput$delegate) {
    return function (it) {
      InspectorScreen$lambda_1($urlInput$delegate, it);
      return Unit_getInstance();
    };
  }
  function InspectorScreen$lambda_4($viewModel, $urlInput$delegate) {
    return function () {
      $viewModel.inspectUrl_a2whdd_k$(InspectorScreen$lambda_0($urlInput$delegate));
      return Unit_getInstance();
    };
  }
  function InspectorScreen$lambda_5($uiState$delegate) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-39354251, $changed, -1, 'com.sarmad.certinspector.demo.ui.screen.InspectorScreen.<anonymous>.<anonymous> (InspectorScreen.kt:68)');
        }
        var tmp_0;
        var tmp_1 = InspectorScreen$lambda($uiState$delegate);
        if (tmp_1 instanceof Loading) {
          tmp_0 = 'Inspecting...';
        } else {
          tmp_0 = 'Inspect Certificate';
        }
        var tmp_2 = tmp_0;
        var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_7 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_2, null, tmp_3, tmp_4, null, null, null, tmp_5, null, null, tmp_6, tmp_7, false, 0, 0, null, null, $composer_0, 0, 0, 131070);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_getInstance();
        }
        tmp = tmp_8;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function InspectorScreen$lambda_6($viewModel) {
    return function () {
      $viewModel.reset_5u6xz3_k$();
      return Unit_getInstance();
    };
  }
  function InspectorScreen$lambda$lambda($viewModel) {
    return function () {
      $viewModel.reset_5u6xz3_k$();
      return Unit_getInstance();
    };
  }
  function InspectorScreen$lambda_7($state, $viewModel) {
    return function ($this$Card, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1902759628, $changed, -1, 'com.sarmad.certinspector.demo.ui.screen.InspectorScreen.<anonymous>.<anonymous> (InspectorScreen.kt:108)');
        }
        var tmp_0 = Companion_getInstance();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
        var tmp2 = padding_1(tmp_0, tmp$ret$0);
        var tmp_1 = Arrangement_getInstance();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$1 = _Dp___init__impl__ms3zkb(8);
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var modifier = tmp2;
        var verticalArrangement = tmp_1.spacedBy_wt7oji_k$(tmp$ret$1);
        var horizontalAlignment = null;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier = Companion_getInstance();
        if (!((4 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!((4 & 4) === 0))
          horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
        var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 54 >> 3 | 112 & 54 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_getInstance();
        var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
        var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized = materialize($composer_2, modifier_0);
        var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
        var tmp_2 = $composer_3.get_applier_bupu8u_k$();
        if (!isInterface(tmp_2, Applier)) {
          invalidApplier();
        }
        $composer_3.startReusableNode_jjgeyp_k$();
        if ($composer_3.get_inserting_25mlsw_k$()) {
          $composer_3.createNode_ahrd54_k$(tmp0);
        } else {
          $composer_3.useNode_io5s9l_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
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
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
        ColumnScopeInstance_getInstance();
        // Inline function 'com.sarmad.certinspector.demo.ui.screen.InspectorScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        var tmp0_style = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_5, 0).get_titleMedium_jd9h8k_k$();
        var tmp1_color = MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_5, 0).get_error_5j21ve_k$();
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextOverflow___init__impl__obguoe(0);
        Text('Error', null, tmp1_color, tmp_3, null, null, null, tmp_4, null, null, tmp_5, tmp_6, false, 0, 0, null, tmp0_style, $composer_5, 6, 0, 65530);
        var tmp_7 = $state.get_message_h23axq_k$();
        var tmp_8 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_9 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_10 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_11 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_12 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_7, null, tmp_8, tmp_9, null, null, null, tmp_10, null, null, tmp_11, tmp_12, false, 0, 0, null, MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_5, 0).get_bodyMedium_psz2kg_k$(), $composer_5, 0, 0, 65534);
        $composer_5.startReplaceGroup_5hh8aj_k$(570228498);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_5.changedInstance_s1wkiy_k$($viewModel);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_5.rememberedValue_4dg93v_k$();
        var tmp_13;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.sarmad.certinspector.demo.ui.screen.InspectorScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = InspectorScreen$lambda$lambda($viewModel);
          $composer_5.updateRememberedValue_l1wh71_k$(value);
          tmp_13 = value;
        } else {
          tmp_13 = it;
        }
        var tmp_14 = tmp_13;
        var tmp0_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
        $composer_5.endReplaceGroup_ek144q_k$();
        TextButton(tmp0_group, null, false, null, null, null, null, null, null, ComposableSingletons$InspectorScreenKt_getInstance().lambda_3_r8sbbn_1, $composer_5, 805306368, 510);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_15;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_15 = Unit_getInstance();
        }
        tmp = tmp_15;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function InspectorScreen$lambda_8($viewModel, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      InspectorScreen($viewModel, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ResultSection$lambda$lambda$lambda($analysis) {
    return function ($this$Card, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1390641801, $changed, -1, 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous>.<anonymous> (InspectorScreen.kt:148)');
        }
        var tmp_0 = Companion_getInstance();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
        var tmp2 = padding_1(tmp_0, tmp$ret$0);
        var tmp_1 = Arrangement_getInstance();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$1 = _Dp___init__impl__ms3zkb(12);
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var modifier = tmp2;
        var verticalArrangement = tmp_1.spacedBy_wt7oji_k$(tmp$ret$1);
        var horizontalAlignment = null;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier = Companion_getInstance();
        if (!((4 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!((4 & 4) === 0))
          horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
        var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 54 >> 3 | 112 & 54 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_getInstance();
        var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
        var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized = materialize($composer_2, modifier_0);
        var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
        var tmp_2 = $composer_3.get_applier_bupu8u_k$();
        if (!isInterface(tmp_2, Applier)) {
          invalidApplier();
        }
        $composer_3.startReusableNode_jjgeyp_k$();
        if ($composer_3.get_inserting_25mlsw_k$()) {
          $composer_3.createNode_ahrd54_k$(tmp0);
        } else {
          $composer_3.useNode_io5s9l_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
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
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
        ColumnScopeInstance_getInstance();
        // Inline function 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var modifier_1 = fillMaxWidth(Companion_getInstance());
        var horizontalArrangement = Arrangement_getInstance().get_SpaceBetween_5p3wqd_k$();
        var verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((0 & 1) === 0))
          modifier_1 = Companion_getInstance();
        if (!((0 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
        if (!((0 & 4) === 0))
          verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
        var measurePolicy_0 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_6, 14 & 438 >> 3 | 112 & 438 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_2 = modifier_1;
        var $composer_7 = $composer_6;
        sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_2 = Companion_getInstance();
        var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
        var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_0 = materialize($composer_7, modifier_2);
        var tmp0_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_8 = $composer_7;
        sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
        var tmp_3 = $composer_8.get_applier_bupu8u_k$();
        if (!isInterface(tmp_3, Applier)) {
          invalidApplier();
        }
        $composer_8.startReusableNode_jjgeyp_k$();
        if ($composer_8.get_inserting_25mlsw_k$()) {
          $composer_8.createNode_ahrd54_k$(tmp0_0);
        } else {
          $composer_8.useNode_io5s9l_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        if ($this$with_0.get_inserting_25mlsw_k$() || !equals($this$with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
          $this$with_0.updateRememberedValue_l1wh71_k$(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).apply_pk82p8_k$(compositeKeyHash_0, block_0);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        RowScopeInstance_getInstance();
        // Inline function 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_10 = $composer_9;
        var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_8 = _TextOverflow___init__impl__obguoe(0);
        Text('Security Analysis', null, tmp_4, tmp_5, null, null, null, tmp_6, null, null, tmp_7, tmp_8, false, 0, 0, null, MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_10, 0).get_titleMedium_jd9h8k_k$(), $composer_10, 6, 0, 65534);
        var tmp_9 = $analysis.get_security_g3uqrb_k$().get_overallStatus_qhxwty_k$();
        var tmp_10 = $analysis.get_security_g3uqrb_k$().get_score_iyfcrt_k$();
        SecurityBadge(tmp_9, tmp_10, null, $composer_10, 0, 4);
        sourceInformationMarkerEnd($composer_9);
        $composer_8.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_8);
        sourceInformationMarkerEnd($composer_7);
        sourceInformationMarkerEnd($composer_6);
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var modifier_3 = fillMaxWidth(Companion_getInstance());
        var horizontalArrangement_0 = Arrangement_getInstance().get_SpaceEvenly_3s2yx0_k$();
        var verticalAlignment_0 = null;
        var $composer_11 = $composer_5;
        sourceInformationMarkerStart($composer_11, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier_3 = Companion_getInstance();
        if (!((4 & 2) === 0))
          horizontalArrangement_0 = Arrangement_getInstance().get_Start_ih4i6x_k$();
        if (!((4 & 4) === 0))
          verticalAlignment_0 = Companion_getInstance_1().get_Top_18jj1w_k$();
        var measurePolicy_1 = rowMeasurePolicy(horizontalArrangement_0, verticalAlignment_0, $composer_11, 14 & 54 >> 3 | 112 & 54 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_4 = modifier_3;
        var $composer_12 = $composer_11;
        sourceInformationMarkerStart($composer_12, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_4 = Companion_getInstance();
        var compositeKeyHash_1 = get_currentCompositeKeyHash($composer_12, 0);
        var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_1 = materialize($composer_12, modifier_4);
        var tmp0_1 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_13 = $composer_12;
        sourceInformationMarkerStart($composer_13, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
        var tmp_11 = $composer_13.get_applier_bupu8u_k$();
        if (!isInterface(tmp_11, Applier)) {
          invalidApplier();
        }
        $composer_13.startReusableNode_jjgeyp_k$();
        if ($composer_13.get_inserting_25mlsw_k$()) {
          $composer_13.createNode_ahrd54_k$(tmp0_1);
        } else {
          $composer_13.useNode_io5s9l_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_1 = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
        var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
        if ($this$with_1.get_inserting_25mlsw_k$() || !equals($this$with_1.rememberedValue_4dg93v_k$(), compositeKeyHash_1)) {
          $this$with_1.updateRememberedValue_l1wh71_k$(compositeKeyHash_1);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).apply_pk82p8_k$(compositeKeyHash_1, block_1);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_14 = $composer_13;
        sourceInformationMarkerStart($composer_14, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        RowScopeInstance_getInstance();
        // Inline function 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_15 = $composer_14;
        InfoChip('TLS ' + $analysis.get_chain_ippjmg_k$().get_connectionInfo_go3djf_k$().get_tlsVersion_6lgnhi_k$(), $composer_15, 0);
        InfoChip('Chain Depth: ' + $analysis.get_chain_ippjmg_k$().get_depth_iq7qmy_k$(), $composer_15, 0);
        sourceInformationMarkerEnd($composer_14);
        $composer_13.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_13);
        sourceInformationMarkerEnd($composer_12);
        sourceInformationMarkerEnd($composer_11);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_12;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_12 = Unit_getInstance();
        }
        tmp = tmp_12;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ResultSection$lambda$lambda($analysis) {
    return function ($this$item, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(864109225, $changed, -1, 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous> (InspectorScreen.kt:142)');
        }
        var tmp_0 = fillMaxWidth(Companion_getInstance());
        var tmp_1 = CardDefaults_getInstance();
        var tmp_2 = MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_0, 0).get_surfaceVariant_jeodjc_k$();
        var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_5 = tmp_1.cardColors_6a1h03_k$(tmp_2, tmp_3, tmp_4, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 14);
        // Inline function 'kotlin.run' call
        // Inline function 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1390641801, true, ResultSection$lambda$lambda$lambda($analysis), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_9(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_6 = value;
        } else {
          tmp_6 = it;
        }
        var tmp_7 = tmp_6;
        var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Card(tmp_0, null, tmp_5, null, null, tmp0, $composer_0, 196614, 26);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_getInstance();
        }
        tmp = tmp_8;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ResultSection$lambda$lambda_0($analysis) {
    return function ($this$item, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(61831058, $changed, -1, 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous> (InspectorScreen.kt:180)');
        }
        var tmp_0 = $analysis.get_chain_ippjmg_k$().get_depth_iq7qmy_k$();
        ChainVisualization(tmp_0, null, $composer_0, 0, 2);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ResultSection$lambda$lambda_1($analysis) {
    return function ($this$item, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-283084687, $changed, -1, 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous> (InspectorScreen.kt:184)');
        }
        var tmp_0 = $analysis.get_chain_ippjmg_k$().get_leaf_woprc7_k$();
        CertificateCard(tmp_0, 'Leaf Certificate', null, $composer_0, 48, 4);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ResultSection$lambda$lambda_2(it) {
    return null;
  }
  function ResultSection$lambda$lambda_3($key, $items) {
    return function (index) {
      return $key($items.get_c1px32_k$(index));
    };
  }
  function ResultSection$lambda$lambda_4($contentType, $items) {
    return function (index) {
      return $contentType($items.get_c1px32_k$(index));
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function ResultSection$lambda$lambda_5($items) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C152@7074L22:LazyDsl.kt#428nma');
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$items) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (($changed & 48) === 0) {
        $dirty = $dirty | ($composer_0.changed_kpusro_k$(it) ? 32 : 16);
        tmp_0 = Unit_getInstance();
      }
      var tmp_1;
      if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-632812321, $dirty, -1, 'androidx.compose.foundation.lazy.items.<anonymous> (LazyDsl.kt:152)');
        }
        var tmp5 = $items.get_c1px32_k$(it);
        // Inline function 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous>' call
        var $changed_0 = 14 & $dirty;
        var $composer_1 = $composer_0;
        $composer_1.startReplaceGroup_5hh8aj_k$(-3498388);
        CertificateCard(tmp5, 'Intermediate Certificate', null, $composer_1, 48 | 14 & $changed_0 >> 3, 4);
        $composer_1.endReplaceGroup_ek144q_k$();
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_1 = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ResultSection$lambda$lambda_6($root) {
    return function ($this$item, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1418736311, $changed, -1, 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous>.<anonymous> (InspectorScreen.kt:199)');
        }
        CertificateCard($root, 'Root Certificate', null, $composer_0, 48, 4);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ResultSection$lambda$lambda$lambda_0($analysis) {
    return function ($this$Card, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(818003516, $changed, -1, 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous>.<anonymous> (InspectorScreen.kt:214)');
        }
        var tmp_0 = Companion_getInstance();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
        var tmp2 = padding_1(tmp_0, tmp$ret$0);
        var tmp_1 = Arrangement_getInstance();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$1 = _Dp___init__impl__ms3zkb(8);
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var modifier = tmp2;
        var verticalArrangement = tmp_1.spacedBy_wt7oji_k$(tmp$ret$1);
        var horizontalAlignment = null;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier = Companion_getInstance();
        if (!((4 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!((4 & 4) === 0))
          horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
        var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 54 >> 3 | 112 & 54 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_getInstance();
        var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
        var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized = materialize($composer_2, modifier_0);
        var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
        var tmp_2 = $composer_3.get_applier_bupu8u_k$();
        if (!isInterface(tmp_2, Applier)) {
          invalidApplier();
        }
        $composer_3.startReusableNode_jjgeyp_k$();
        if ($composer_3.get_inserting_25mlsw_k$()) {
          $composer_3.createNode_ahrd54_k$(tmp0);
        } else {
          $composer_3.useNode_io5s9l_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
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
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
        ColumnScopeInstance_getInstance();
        // Inline function 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        var tmp0_style = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_5, 0).get_titleMedium_jd9h8k_k$();
        var tmp1_color = MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_5, 0).get_error_5j21ve_k$();
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextOverflow___init__impl__obguoe(0);
        Text('Security Issues', null, tmp1_color, tmp_3, null, null, null, tmp_4, null, null, tmp_5, tmp_6, false, 0, 0, null, tmp0_style, $composer_5, 6, 0, 65530);
        $composer_5.startReplaceGroup_5hh8aj_k$(837000428);
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = $analysis.get_security_g3uqrb_k$().get_issues_ewqnyb_k$().iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          IssueItem(element.get_description_emjre5_k$(), element.get_severity_7csmre_k$(), $composer_5, 0);
        }
        $composer_5.endReplaceGroup_ek144q_k$();
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ResultSection$lambda$lambda_7($analysis) {
    return function ($this$item, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(475999470, $changed, -1, 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous> (InspectorScreen.kt:208)');
        }
        var tmp_0 = fillMaxWidth(Companion_getInstance());
        var tmp_1 = CardDefaults_getInstance();
        var tmp_2 = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_0, 0).get_errorContainer_2c9dd5_k$(), 0.3);
        var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_5 = tmp_1.cardColors_6a1h03_k$(tmp_2, tmp_3, tmp_4, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 14);
        // Inline function 'kotlin.run' call
        // Inline function 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(818003516, true, ResultSection$lambda$lambda$lambda_0($analysis), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_15(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_6 = value;
        } else {
          tmp_6 = it;
        }
        var tmp_7 = tmp_6;
        var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Card(tmp_0, null, tmp_5, null, null, tmp0, $composer_0, 196614, 26);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_getInstance();
        }
        tmp = tmp_8;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ResultSection$lambda$lambda$lambda_1($analysis) {
    return function ($this$Card, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1296082331, $changed, -1, 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous>.<anonymous> (InspectorScreen.kt:240)');
        }
        var tmp_0 = Companion_getInstance();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
        var tmp2 = padding_1(tmp_0, tmp$ret$0);
        var tmp_1 = Arrangement_getInstance();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$1 = _Dp___init__impl__ms3zkb(8);
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var modifier = tmp2;
        var verticalArrangement = tmp_1.spacedBy_wt7oji_k$(tmp$ret$1);
        var horizontalAlignment = null;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier = Companion_getInstance();
        if (!((4 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!((4 & 4) === 0))
          horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
        var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 54 >> 3 | 112 & 54 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_getInstance();
        var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
        var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized = materialize($composer_2, modifier_0);
        var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
        var tmp_2 = $composer_3.get_applier_bupu8u_k$();
        if (!isInterface(tmp_2, Applier)) {
          invalidApplier();
        }
        $composer_3.startReusableNode_jjgeyp_k$();
        if ($composer_3.get_inserting_25mlsw_k$()) {
          $composer_3.createNode_ahrd54_k$(tmp0);
        } else {
          $composer_3.useNode_io5s9l_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
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
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
        ColumnScopeInstance_getInstance();
        // Inline function 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_7 = _TextOverflow___init__impl__obguoe(0);
        Text('Recommendations', null, tmp_3, tmp_4, null, null, null, tmp_5, null, null, tmp_6, tmp_7, false, 0, 0, null, MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_5, 0).get_titleMedium_jd9h8k_k$(), $composer_5, 6, 0, 65534);
        $composer_5.startReplaceGroup_5hh8aj_k$(837030015);
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = $analysis.get_security_g3uqrb_k$().get_recommendations_9l4ir5_k$().iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_8 = Companion_getInstance();
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$4 = _Dp___init__impl__ms3zkb(4);
          var tmp2_0 = padding(tmp_8, VOID, tmp$ret$4);
          var tmp_9 = Arrangement_getInstance();
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$5 = _Dp___init__impl__ms3zkb(8);
          // Inline function 'androidx.compose.foundation.layout.Row' call
          var modifier_1 = tmp2_0;
          var horizontalArrangement = tmp_9.spacedBy_wt7oji_k$(tmp$ret$5);
          var verticalAlignment = null;
          var $composer_6 = $composer_5;
          sourceInformationMarkerStart($composer_6, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
          if (!((4 & 1) === 0))
            modifier_1 = Companion_getInstance();
          if (!((4 & 2) === 0))
            horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
          if (!((4 & 4) === 0))
            verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
          var measurePolicy_0 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_6, 14 & 54 >> 3 | 112 & 54 >> 3);
          // Inline function 'androidx.compose.ui.layout.Layout' call
          var modifier_2 = modifier_1;
          var $composer_7 = $composer_6;
          sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
          if (!((0 & 2) === 0))
            modifier_2 = Companion_getInstance();
          var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
          var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
          var materialized_0 = materialize($composer_7, modifier_2);
          var tmp0_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
          // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
          var $composer_8 = $composer_7;
          sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
          var tmp_10 = $composer_8.get_applier_bupu8u_k$();
          if (!isInterface(tmp_10, Applier)) {
            invalidApplier();
          }
          $composer_8.startReusableNode_jjgeyp_k$();
          if ($composer_8.get_inserting_25mlsw_k$()) {
            $composer_8.createNode_ahrd54_k$(tmp0_0);
          } else {
            $composer_8.useNode_io5s9l_k$();
          }
          // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
          var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
          Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
          // Inline function 'androidx.compose.runtime.Updater.set' call
          var block_0 = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
          // Inline function 'kotlin.with' call
          // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
          var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
          if ($this$with_0.get_inserting_25mlsw_k$() || !equals($this$with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
            $this$with_0.updateRememberedValue_l1wh71_k$(compositeKeyHash_0);
            _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).apply_pk82p8_k$(compositeKeyHash_0, block_0);
          }
          Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
          // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
          var $composer_9 = $composer_8;
          sourceInformationMarkerStart($composer_9, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
          RowScopeInstance_getInstance();
          // Inline function 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var $composer_10 = $composer_9;
          var tmp0_style = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_10, 0).get_bodyMedium_psz2kg_k$();
          var tmp1_color = MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_10, 0).get_primary_gfn28_k$();
          var tmp_11 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_14 = _TextOverflow___init__impl__obguoe(0);
          Text('\u2022', null, tmp1_color, tmp_11, null, null, null, tmp_12, null, null, tmp_13, tmp_14, false, 0, 0, null, tmp0_style, $composer_10, 6, 0, 65530);
          var tmp_15 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_16 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_17 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_18 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_19 = _TextOverflow___init__impl__obguoe(0);
          Text(element, null, tmp_15, tmp_16, null, null, null, tmp_17, null, null, tmp_18, tmp_19, false, 0, 0, null, MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_10, 0).get_bodyMedium_psz2kg_k$(), $composer_10, 0, 0, 65534);
          sourceInformationMarkerEnd($composer_9);
          $composer_8.endNode_3m0yfn_k$();
          sourceInformationMarkerEnd($composer_8);
          sourceInformationMarkerEnd($composer_7);
          sourceInformationMarkerEnd($composer_6);
        }
        $composer_5.endReplaceGroup_ek144q_k$();
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_20;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_20 = Unit_getInstance();
        }
        tmp = tmp_20;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ResultSection$lambda$lambda_8($analysis) {
    return function ($this$item, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(750511255, $changed, -1, 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous> (InspectorScreen.kt:237)');
        }
        var tmp_0 = fillMaxWidth(Companion_getInstance());
        // Inline function 'kotlin.run' call
        // Inline function 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1296082331, true, ResultSection$lambda$lambda$lambda_1($analysis), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_17(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Card(tmp_0, null, null, null, null, tmp0, $composer_0, 196614, 30);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ResultSection$lambda$lambda_9($onReset) {
    return function ($this$item, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-628000432, $changed, -1, 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous> (InspectorScreen.kt:271)');
        }
        var tmp_0 = fillMaxWidth(Companion_getInstance());
        OutlinedButton($onReset, tmp_0, false, null, null, null, null, null, null, ComposableSingletons$InspectorScreenKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 805306416, 508);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ResultSection$lambda($analysis, $onReset) {
    return function ($this$LazyColumn) {
      $this$LazyColumn.item$default_tch4z5_k$(VOID, VOID, ComposableLambda$invoke$ref_8(composableLambdaInstance(864109225, true, ResultSection$lambda$lambda($analysis))));
      $this$LazyColumn.item$default_tch4z5_k$(VOID, VOID, ComposableLambda$invoke$ref_10(composableLambdaInstance(61831058, true, ResultSection$lambda$lambda_0($analysis))));
      $this$LazyColumn.item$default_tch4z5_k$(VOID, VOID, ComposableLambda$invoke$ref_11(composableLambdaInstance(-283084687, true, ResultSection$lambda$lambda_1($analysis))));
      // Inline function 'androidx.compose.foundation.lazy.items' call
      var items = $analysis.get_chain_ippjmg_k$().get_intermediates_fsj34f_k$();
      var contentType = ResultSection$lambda$lambda_2;
      var tmp = items.get_size_woubt6_k$();
      var tmp_0;
      if (!(null == null)) {
        tmp_0 = ResultSection$lambda$lambda_3(null, items);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2 = ResultSection$lambda$lambda_4(contentType, items);
      $this$LazyColumn.items_m6orkv_k$(tmp, tmp_1, tmp_2, ComposableLambda$invoke$ref_12(composableLambdaInstance(-632812321, true, ResultSection$lambda$lambda_5(items))));
      var tmp0_safe_receiver = $analysis.get_chain_ippjmg_k$().get_root_wott0r_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.sarmad.certinspector.demo.ui.screen.ResultSection.<anonymous>.<anonymous>.<anonymous>' call
        $this$LazyColumn.item$default_tch4z5_k$(VOID, VOID, ComposableLambda$invoke$ref_13(composableLambdaInstance(1418736311, true, ResultSection$lambda$lambda_6(tmp0_safe_receiver))));
      }
      var tmp_3;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$analysis.get_security_g3uqrb_k$().get_issues_ewqnyb_k$().isEmpty_y1axqb_k$()) {
        $this$LazyColumn.item$default_tch4z5_k$(VOID, VOID, ComposableLambda$invoke$ref_14(composableLambdaInstance(475999470, true, ResultSection$lambda$lambda_7($analysis))));
        tmp_3 = Unit_getInstance();
      }
      var tmp_4;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$analysis.get_security_g3uqrb_k$().get_recommendations_9l4ir5_k$().isEmpty_y1axqb_k$()) {
        $this$LazyColumn.item$default_tch4z5_k$(VOID, VOID, ComposableLambda$invoke$ref_16(composableLambdaInstance(750511255, true, ResultSection$lambda$lambda_8($analysis))));
        tmp_4 = Unit_getInstance();
      }
      $this$LazyColumn.item$default_tch4z5_k$(VOID, VOID, ComposableLambda$invoke$ref_18(composableLambdaInstance(-628000432, true, ResultSection$lambda$lambda_9($onReset))));
      $this$LazyColumn.item$default_tch4z5_k$(VOID, VOID, ComposableSingletons$InspectorScreenKt_getInstance().lambda_5_r8sbbl_1);
      return Unit_getInstance();
    };
  }
  function ResultSection$lambda_0($state, $onReset, $$changed) {
    return function ($composer, $force) {
      ResultSection($state, $onReset, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function InfoChip$lambda($text) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(421245778, $changed, -1, 'com.sarmad.certinspector.demo.ui.screen.InfoChip.<anonymous> (InspectorScreen.kt:291)');
        }
        var tmp0_style = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_0, 0).get_bodySmall_t1t5ng_k$();
        var tmp_0 = Companion_getInstance();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp_1 = _Dp___init__impl__ms3zkb(12);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$1 = _Dp___init__impl__ms3zkb(6);
        var tmp1_modifier = padding(tmp_0, tmp_1, tmp$ret$1);
        var tmp2_color = MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_0, 0).get_primary_gfn28_k$();
        var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_5 = _TextOverflow___init__impl__obguoe(0);
        Text($text, tmp1_modifier, tmp2_color, tmp_2, null, null, null, tmp_3, null, null, tmp_4, tmp_5, false, 0, 0, null, tmp0_style, $composer_0, 48, 0, 65528);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function InfoChip$lambda_0($text, $$changed) {
    return function ($composer, $force) {
      InfoChip($text, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function IssueItem$lambda($description, $severity, $$changed) {
    return function ($composer, $force) {
      IssueItem($description, $severity, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_Primary() {
    _init_properties_Color_kt__6h0l1r();
    return Primary;
  }
  var Primary;
  function get_PrimaryVariant() {
    _init_properties_Color_kt__6h0l1r();
    return PrimaryVariant;
  }
  var PrimaryVariant;
  function get_Secondary() {
    _init_properties_Color_kt__6h0l1r();
    return Secondary;
  }
  var Secondary;
  function get_Background() {
    _init_properties_Color_kt__6h0l1r();
    return Background;
  }
  var Background;
  function get_Surface() {
    _init_properties_Color_kt__6h0l1r();
    return Surface_0;
  }
  var Surface_0;
  function get_Error() {
    _init_properties_Color_kt__6h0l1r();
    return Error_1;
  }
  var Error_1;
  function get_DarkPrimary() {
    _init_properties_Color_kt__6h0l1r();
    return DarkPrimary;
  }
  var DarkPrimary;
  function get_DarkBackground() {
    _init_properties_Color_kt__6h0l1r();
    return DarkBackground;
  }
  var DarkBackground;
  function get_DarkSurface() {
    _init_properties_Color_kt__6h0l1r();
    return DarkSurface;
  }
  var DarkSurface;
  function get_SuccessGreen() {
    _init_properties_Color_kt__6h0l1r();
    return SuccessGreen;
  }
  var SuccessGreen;
  function get_WarningOrange() {
    _init_properties_Color_kt__6h0l1r();
    return WarningOrange;
  }
  var WarningOrange;
  function get_CriticalRed() {
    _init_properties_Color_kt__6h0l1r();
    return CriticalRed;
  }
  var CriticalRed;
  var properties_initialized_Color_kt_bdybnx;
  function _init_properties_Color_kt__6h0l1r() {
    if (!properties_initialized_Color_kt_bdybnx) {
      properties_initialized_Color_kt_bdybnx = true;
      Primary = Color_0(new Long(-15108398, 0));
      PrimaryVariant = Color_0(new Long(-15374912, 0));
      Secondary = Color_0(new Long(-16524602, 0));
      Background = Color_0(new Long(-657931, 0));
      Surface_0 = Color_0(new Long(-1, 0));
      Error_1 = Color_0(new Long(-5242848, 0));
      DarkPrimary = Color_0(new Long(-7288071, 0));
      DarkBackground = Color_0(new Long(-15592942, 0));
      DarkSurface = Color_0(new Long(-14803426, 0));
      SuccessGreen = Color_0(new Long(-11751600, 0));
      WarningOrange = Color_0(new Long(-26624, 0));
      CriticalRed = Color_0(new Long(-769226, 0));
    }
  }
  function get_LightColors() {
    _init_properties_Theme_kt__w31tqv();
    return LightColors;
  }
  var LightColors;
  function get_DarkColors() {
    _init_properties_Theme_kt__w31tqv();
    return DarkColors;
  }
  var DarkColors;
  function CertInspectorTheme(darkTheme, content, $composer, $changed, $default) {
    _init_properties_Theme_kt__w31tqv();
    var darkTheme_0 = {_v: darkTheme};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(930321792);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && $composer_0.changed_jpyyrz_k$(darkTheme_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          darkTheme_0._v = isSystemInDarkTheme($composer_0, 0);
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(930321792, $dirty, -1, 'com.sarmad.certinspector.demo.ui.theme.CertInspectorTheme (Theme.kt:26)');
      }
      var colorScheme = darkTheme_0._v ? get_DarkColors() : get_LightColors();
      MaterialTheme(colorScheme, null, new Typography(), content, $composer_0, 384 | 7168 & $dirty << 6, 2);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(CertInspectorTheme$lambda(darkTheme_0, content, $changed, $default));
    }
  }
  function CertInspectorTheme$lambda($darkTheme, $content, $$changed, $$default) {
    return function ($composer, $force) {
      CertInspectorTheme($darkTheme._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Theme_kt_uwj6hl;
  function _init_properties_Theme_kt__w31tqv() {
    if (!properties_initialized_Theme_kt_uwj6hl) {
      properties_initialized_Theme_kt_uwj6hl = true;
      LightColors = lightColorScheme(get_Primary(), Companion_getInstance_9().get_White_xpp3qf_k$(), VOID, VOID, VOID, get_Secondary(), VOID, VOID, VOID, VOID, VOID, VOID, VOID, get_Background(), VOID, get_Surface(), VOID, VOID, VOID, VOID, VOID, VOID, get_Error());
      DarkColors = darkColorScheme(get_DarkPrimary(), VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, get_DarkBackground(), VOID, get_DarkSurface());
    }
  }
  var com_sarmad_certinspector_demo_viewmodel_InspectorViewModel$stable;
  var com_sarmad_certinspector_demo_viewmodel_UiState_Idle$stable;
  var com_sarmad_certinspector_demo_viewmodel_UiState_Loading$stable;
  var com_sarmad_certinspector_demo_viewmodel_UiState_Success$stable;
  var com_sarmad_certinspector_demo_viewmodel_UiState_Error$stable;
  var com_sarmad_certinspector_demo_viewmodel_UiState$stable;
  function _get_inspector__7ce4hm($this) {
    return $this.inspector_1;
  }
  function _get_viewModelScope__1ud3vf($this) {
    return $this.viewModelScope_1;
  }
  function _get__uiState__8e9jsd($this) {
    return $this._uiState_1;
  }
  function InspectorViewModel$inspectUrl$slambda(this$0, $url, resultContinuation) {
    this.this$0__1 = this$0;
    this.$url_1 = $url;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(InspectorViewModel$inspectUrl$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(InspectorViewModel$inspectUrl$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(InspectorViewModel$inspectUrl$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.inspector_1.inspectUrl_aijouj_k$(this.$url_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (result instanceof Success) {
              this.this$0__1._uiState_1.set_value_v1vabv_k$(new Success_0(result.get_data_wokkxf_k$()));
            } else {
              if (result instanceof Error_0) {
                var tmp0_elvis_lhs = result.get_exception_x0n6w6_k$().message;
                this.this$0__1._uiState_1.set_value_v1vabv_k$(new Error_2(tmp0_elvis_lhs == null ? 'Unknown error' : tmp0_elvis_lhs));
              } else {
                noWhenBranchMatchedException();
              }
            }

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
  protoOf(InspectorViewModel$inspectUrl$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new InspectorViewModel$inspectUrl$slambda(this.this$0__1, this.$url_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(InspectorViewModel$inspectUrl$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function InspectorViewModel$inspectUrl$slambda_0(this$0, $url, resultContinuation) {
    var i = new InspectorViewModel$inspectUrl$slambda(this$0, $url, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function InspectorViewModel() {
    this.inspector_1 = new CertInspector();
    this.viewModelScope_1 = CoroutineScope_0(SupervisorJob().plus_s13ygv_k$(Dispatchers_getInstance().get_Default_goqax4_k$()));
    this._uiState_1 = MutableStateFlow(Idle_getInstance());
    this.uiState_1 = asStateFlow(this._uiState_1);
  }
  protoOf(InspectorViewModel).get_uiState_66ctcc_k$ = function () {
    return this.uiState_1;
  };
  protoOf(InspectorViewModel).inspectUrl_a2whdd_k$ = function (url) {
    if (isBlank(url)) {
      this._uiState_1.set_value_v1vabv_k$(new Error_2('URL cannot be empty'));
      return Unit_getInstance();
    }
    this._uiState_1.set_value_v1vabv_k$(Loading_getInstance());
    launch(this.viewModelScope_1, VOID, VOID, InspectorViewModel$inspectUrl$slambda_0(this, url, null));
  };
  protoOf(InspectorViewModel).reset_5u6xz3_k$ = function () {
    this._uiState_1.set_value_v1vabv_k$(Idle_getInstance());
  };
  function Idle() {
    Idle_instance = this;
    UiState.call(this);
  }
  protoOf(Idle).toString = function () {
    return 'Idle';
  };
  protoOf(Idle).hashCode = function () {
    return 456047018;
  };
  protoOf(Idle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Idle))
      return false;
    other instanceof Idle || THROW_CCE();
    return true;
  };
  var Idle_instance;
  function Idle_getInstance() {
    if (Idle_instance == null)
      new Idle();
    return Idle_instance;
  }
  function Loading() {
    Loading_instance = this;
    UiState.call(this);
  }
  protoOf(Loading).toString = function () {
    return 'Loading';
  };
  protoOf(Loading).hashCode = function () {
    return -212463706;
  };
  protoOf(Loading).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Loading))
      return false;
    other instanceof Loading || THROW_CCE();
    return true;
  };
  var Loading_instance;
  function Loading_getInstance() {
    if (Loading_instance == null)
      new Loading();
    return Loading_instance;
  }
  function Success_0(analysis) {
    UiState.call(this);
    this.analysis_1 = analysis;
  }
  protoOf(Success_0).get_analysis_ma8vxh_k$ = function () {
    return this.analysis_1;
  };
  protoOf(Success_0).component1_7eebsc_k$ = function () {
    return this.analysis_1;
  };
  protoOf(Success_0).copy_6aw27h_k$ = function (analysis) {
    return new Success_0(analysis);
  };
  protoOf(Success_0).copy$default_a9t7tc_k$ = function (analysis, $super) {
    analysis = analysis === VOID ? this.analysis_1 : analysis;
    return $super === VOID ? this.copy_6aw27h_k$(analysis) : $super.copy_6aw27h_k$.call(this, analysis);
  };
  protoOf(Success_0).toString = function () {
    return 'Success(analysis=' + this.analysis_1.toString() + ')';
  };
  protoOf(Success_0).hashCode = function () {
    return this.analysis_1.hashCode();
  };
  protoOf(Success_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Success_0))
      return false;
    var tmp0_other_with_cast = other instanceof Success_0 ? other : THROW_CCE();
    if (!this.analysis_1.equals(tmp0_other_with_cast.analysis_1))
      return false;
    return true;
  };
  function Error_2(message) {
    UiState.call(this);
    this.message_1 = message;
  }
  protoOf(Error_2).get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  protoOf(Error_2).component1_7eebsc_k$ = function () {
    return this.message_1;
  };
  protoOf(Error_2).copy_a35qlh_k$ = function (message) {
    return new Error_2(message);
  };
  protoOf(Error_2).copy$default_3dgms7_k$ = function (message, $super) {
    message = message === VOID ? this.message_1 : message;
    return $super === VOID ? this.copy_a35qlh_k$(message) : $super.copy_a35qlh_k$.call(this, message);
  };
  protoOf(Error_2).toString = function () {
    return 'Error(message=' + this.message_1 + ')';
  };
  protoOf(Error_2).hashCode = function () {
    return getStringHashCode(this.message_1);
  };
  protoOf(Error_2).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Error_2))
      return false;
    var tmp0_other_with_cast = other instanceof Error_2 ? other : THROW_CCE();
    if (!(this.message_1 === tmp0_other_with_cast.message_1))
      return false;
    return true;
  };
  function UiState() {
  }
  function com_sarmad_certinspector_demo_viewmodel_InspectorViewModel$stableprop_getter() {
    return com_sarmad_certinspector_demo_viewmodel_InspectorViewModel$stable;
  }
  function com_sarmad_certinspector_demo_viewmodel_UiState_Idle$stableprop_getter() {
    return com_sarmad_certinspector_demo_viewmodel_UiState_Idle$stable;
  }
  function com_sarmad_certinspector_demo_viewmodel_UiState_Loading$stableprop_getter() {
    return com_sarmad_certinspector_demo_viewmodel_UiState_Loading$stable;
  }
  function com_sarmad_certinspector_demo_viewmodel_UiState_Success$stableprop_getter() {
    return com_sarmad_certinspector_demo_viewmodel_UiState_Success$stable;
  }
  function com_sarmad_certinspector_demo_viewmodel_UiState_Error$stableprop_getter() {
    return com_sarmad_certinspector_demo_viewmodel_UiState_Error$stable;
  }
  function com_sarmad_certinspector_demo_viewmodel_UiState$stableprop_getter() {
    return com_sarmad_certinspector_demo_viewmodel_UiState$stable;
  }
  var com_sarmad_certinspector_demo_AppStyles$stable;
  function main() {
    renderComposable('root', ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
  }
  function WebApp($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-389922439);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-389922439, $changed, -1, 'com.sarmad.certinspector.demo.WebApp (Main.kt:17)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-896114487);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>' call
        var value = new InspectorViewModel();
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var viewModel = tmp0_group;
      var tmp_1 = viewModel.get_uiState_66ctcc_k$();
      var uiState$delegate = collectAsState(tmp_1, null, $composer_0, 0, 1);
      $composer_0.startReplaceGroup_5hh8aj_k$(-896111033);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>' call
        var value_0 = mutableStateOf('');
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var urlInput$delegate = tmp1_group;
      var tmp4 = AppStyles_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-1196466140);
      Style(null, tmp4.get_cssRules_jdoznh_k$(), $composer_1, 0, 1);
      $composer_1.endReplaceableGroup_ern0ak_k$();
      $composer_0.startReplaceGroup_5hh8aj_k$(-896109016);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>' call
        var value_1 = WebApp$lambda_2;
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1933299208, true, WebApp$lambda_3(uiState$delegate, viewModel, urlInput$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_43(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = it_2;
      }
      var tmp_7 = tmp_6;
      var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(tmp2_group, tmp0, $composer_0, 54, 0);
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
      tmp3_safe_receiver.updateScope_t8jcf_k$(WebApp$lambda_4($changed));
    }
  }
  function AppStyles$container$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_10();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_11();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_12();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    padding_2($this$style, [get_px(32)]);
    fontFamily($this$style, ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']);
    maxWidth($this$style, get_px(800));
    margin($this$style, [get_px(0)]);
    $this$style.property_wcrait_k$('margin-left', 'auto');
    $this$style.property_wcrait_k$('margin-right', 'auto');
    return Unit_getInstance();
  }
  function AppStyles$title$delegate$lambda($this$style) {
    color($this$style, Color_1('#1976D2'));
    marginBottom($this$style, get_px(8));
    return Unit_getInstance();
  }
  function AppStyles$subtitle$delegate$lambda($this$style) {
    color($this$style, Color_1('#666'));
    marginTop($this$style, get_px(0));
    marginBottom($this$style, get_px(32));
    return Unit_getInstance();
  }
  function AppStyles$inputGroup$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_10();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_11();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    width($this$style, get_percent(100));
    $this$style.property_wcrait_k$('gap', '12px');
    marginBottom($this$style, get_px(24));
    return Unit_getInstance();
  }
  function AppStyles$input$delegate$lambda($this$style) {
    padding_2($this$style, [get_px(12)]);
    fontSize($this$style, get_px(16));
    $this$style.property_wcrait_k$('border-radius', '8px');
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_13();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    border($this$style, tmp, 'solid', Color_1('#ddd'));
    width($this$style, get_percent(100));
    $this$style.property_wcrait_k$('box-sizing', 'border-box');
    return Unit_getInstance();
  }
  function AppStyles$button$delegate$lambda($this$style) {
    padding_2($this$style, [get_px(12), get_px(24)]);
    fontSize($this$style, get_px(16));
    backgroundColor($this$style, Color_1('#1976D2'));
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    Color_getInstance();
    var tmp$ret$0 = Color_1('white');
    color($this$style, tmp$ret$0);
    border($this$style, get_px(0));
    $this$style.property_wcrait_k$('border-radius', '8px');
    $this$style.property_wcrait_k$('cursor', 'pointer');
    $this$style.property_wcrait_k$('font-weight', 'bold');
    $this$style.property_wcrait_k$('transition', 'background-color 0.3s');
    return Unit_getInstance();
  }
  function AppStyles$secondaryButton$delegate$lambda($this$style) {
    backgroundColor($this$style, Color_1('#666'));
    marginTop($this$style, get_px(16));
    return Unit_getInstance();
  }
  function AppStyles$infoBox$delegate$lambda($this$style) {
    padding_2($this$style, [get_px(24)]);
    backgroundColor($this$style, Color_1('#f5f5f5'));
    $this$style.property_wcrait_k$('border-radius', '8px');
    $this$style.property_wcrait_k$('text-align', 'center');
    color($this$style, Color_1('#666'));
    width($this$style, get_percent(100));
    $this$style.property_wcrait_k$('box-sizing', 'border-box');
    return Unit_getInstance();
  }
  function AppStyles$loading$delegate$lambda($this$style) {
    $this$style.property_wcrait_k$('text-align', 'center');
    padding_2($this$style, [get_px(48)]);
    fontSize($this$style, get_px(18));
    return Unit_getInstance();
  }
  function AppStyles$successBox$delegate$lambda($this$style) {
    padding_2($this$style, [get_px(24)]);
    backgroundColor($this$style, Color_1('#e8f5e9'));
    $this$style.property_wcrait_k$('border-radius', '8px');
    color($this$style, Color_1('#2e7d32'));
    width($this$style, get_percent(100));
    $this$style.property_wcrait_k$('box-sizing', 'border-box');
    return Unit_getInstance();
  }
  function AppStyles$errorBox$delegate$lambda($this$style) {
    padding_2($this$style, [get_px(24)]);
    backgroundColor($this$style, Color_1('#fff3e0'));
    $this$style.property_wcrait_k$('border-radius', '8px');
    var tmp = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_13();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    border($this$style, tmp, 'solid', Color_1('#ff9800'));
    width($this$style, get_percent(100));
    $this$style.property_wcrait_k$('box-sizing', 'border-box');
    return Unit_getInstance();
  }
  function AppStyles$errorMessage$delegate$lambda($this$style) {
    color($this$style, Color_1('#d84315'));
    $this$style.property_wcrait_k$('font-weight', '500');
    $this$style.property_wcrait_k$('line-height', '1.6');
    marginBottom($this$style, get_px(16));
    return Unit_getInstance();
  }
  function AppStyles$infoSection$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    Color_getInstance();
    var tmp$ret$0 = Color_1('white');
    backgroundColor($this$style, tmp$ret$0);
    padding_2($this$style, [get_px(16)]);
    $this$style.property_wcrait_k$('border-radius', '8px');
    marginTop($this$style, get_px(16));
    $this$style.property_wcrait_k$('text-align', 'left');
    return Unit_getInstance();
  }
  function AppStyles() {
    AppStyles_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    var tmp = this;
    tmp.container$delegate_1 = this.style_z1ubaq_k$(AppStyles$container$delegate$lambda).provideDelegate_vagi2_k$(this, container$factory());
    var tmp_0 = this;
    tmp_0.title$delegate_1 = this.style_z1ubaq_k$(AppStyles$title$delegate$lambda).provideDelegate_vagi2_k$(this, title$factory());
    var tmp_1 = this;
    tmp_1.subtitle$delegate_1 = this.style_z1ubaq_k$(AppStyles$subtitle$delegate$lambda).provideDelegate_vagi2_k$(this, subtitle$factory());
    var tmp_2 = this;
    tmp_2.inputGroup$delegate_1 = this.style_z1ubaq_k$(AppStyles$inputGroup$delegate$lambda).provideDelegate_vagi2_k$(this, inputGroup$factory());
    var tmp_3 = this;
    tmp_3.input$delegate_1 = this.style_z1ubaq_k$(AppStyles$input$delegate$lambda).provideDelegate_vagi2_k$(this, input$factory());
    var tmp_4 = this;
    tmp_4.button$delegate_1 = this.style_z1ubaq_k$(AppStyles$button$delegate$lambda).provideDelegate_vagi2_k$(this, button$factory());
    var tmp_5 = this;
    tmp_5.secondaryButton$delegate_1 = this.style_z1ubaq_k$(AppStyles$secondaryButton$delegate$lambda).provideDelegate_vagi2_k$(this, secondaryButton$factory());
    var tmp_6 = this;
    tmp_6.infoBox$delegate_1 = this.style_z1ubaq_k$(AppStyles$infoBox$delegate$lambda).provideDelegate_vagi2_k$(this, infoBox$factory());
    var tmp_7 = this;
    tmp_7.loading$delegate_1 = this.style_z1ubaq_k$(AppStyles$loading$delegate$lambda).provideDelegate_vagi2_k$(this, loading$factory());
    var tmp_8 = this;
    tmp_8.successBox$delegate_1 = this.style_z1ubaq_k$(AppStyles$successBox$delegate$lambda).provideDelegate_vagi2_k$(this, successBox$factory());
    var tmp_9 = this;
    tmp_9.errorBox$delegate_1 = this.style_z1ubaq_k$(AppStyles$errorBox$delegate$lambda).provideDelegate_vagi2_k$(this, errorBox$factory());
    var tmp_10 = this;
    tmp_10.errorMessage$delegate_1 = this.style_z1ubaq_k$(AppStyles$errorMessage$delegate$lambda).provideDelegate_vagi2_k$(this, errorMessage$factory());
    var tmp_11 = this;
    tmp_11.infoSection$delegate_1 = this.style_z1ubaq_k$(AppStyles$infoSection$delegate$lambda).provideDelegate_vagi2_k$(this, infoSection$factory());
  }
  protoOf(AppStyles).get_container_1pul08_k$ = function () {
    return this.container$delegate_1.getValue_4u4kqi_k$(this, container$factory_0());
  };
  protoOf(AppStyles).get_title_iz32un_k$ = function () {
    return this.title$delegate_1.getValue_4u4kqi_k$(this, title$factory_0());
  };
  protoOf(AppStyles).get_subtitle_55eoyp_k$ = function () {
    return this.subtitle$delegate_1.getValue_4u4kqi_k$(this, subtitle$factory_0());
  };
  protoOf(AppStyles).get_inputGroup_2e40gu_k$ = function () {
    return this.inputGroup$delegate_1.getValue_4u4kqi_k$(this, inputGroup$factory_0());
  };
  protoOf(AppStyles).get_input_it4gip_k$ = function () {
    return this.input$delegate_1.getValue_4u4kqi_k$(this, input$factory_0());
  };
  protoOf(AppStyles).get_button_bmjiuz_k$ = function () {
    return this.button$delegate_1.getValue_4u4kqi_k$(this, button$factory_0());
  };
  protoOf(AppStyles).get_secondaryButton_5rgh0j_k$ = function () {
    return this.secondaryButton$delegate_1.getValue_4u4kqi_k$(this, secondaryButton$factory_0());
  };
  protoOf(AppStyles).get_infoBox_xfsb4k_k$ = function () {
    return this.infoBox$delegate_1.getValue_4u4kqi_k$(this, infoBox$factory_0());
  };
  protoOf(AppStyles).get_loading_6tzj9v_k$ = function () {
    return this.loading$delegate_1.getValue_4u4kqi_k$(this, loading$factory_0());
  };
  protoOf(AppStyles).get_successBox_wb23e7_k$ = function () {
    return this.successBox$delegate_1.getValue_4u4kqi_k$(this, successBox$factory_0());
  };
  protoOf(AppStyles).get_errorBox_8pqrh0_k$ = function () {
    return this.errorBox$delegate_1.getValue_4u4kqi_k$(this, errorBox$factory_0());
  };
  protoOf(AppStyles).get_errorMessage_ofxtm0_k$ = function () {
    return this.errorMessage$delegate_1.getValue_4u4kqi_k$(this, errorMessage$factory_0());
  };
  protoOf(AppStyles).get_infoSection_dvdbla_k$ = function () {
    return this.infoSection$delegate_1.getValue_4u4kqi_k$(this, infoSection$factory_0());
  };
  protoOf(AppStyles).style_r4zx12_k$ = function (selector, cssRule) {
    return this.style_pgxmpo_k$(selector, cssRule);
  };
  var AppStyles_instance;
  function AppStyles_getInstance() {
    if (AppStyles_instance == null)
      new AppStyles();
    return AppStyles_instance;
  }
  function com_sarmad_certinspector_demo_AppStyles$stableprop_getter() {
    return com_sarmad_certinspector_demo_AppStyles$stable;
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($this$renderComposable, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-11816066, $changed, -1, 'com.sarmad.certinspector.demo.ComposableSingletons$MainKt.lambda-1.<anonymous> (Main.kt:12)');
    }
    WebApp($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1136351701, $changed, -1, 'com.sarmad.certinspector.demo.ComposableSingletons$MainKt.lambda-2.<anonymous> (Main.kt:26)');
    }
    Text_0('Certificate Inspector', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_3$lambda_ezu85n($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1877089814, $changed, -1, 'com.sarmad.certinspector.demo.ComposableSingletons$MainKt.lambda-3.<anonymous> (Main.kt:30)');
    }
    Text_0('Kotlin Multiplatform Demo - Web Platform', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_4$lambda_r7ncra($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1207952717, $changed, -1, 'com.sarmad.certinspector.demo.ComposableSingletons$MainKt.lambda-4.<anonymous> (Main.kt:55)');
    }
    Text_0('Enter a URL to inspect its SSL certificate', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-790267473, $changed, -1, 'com.sarmad.certinspector.demo.ComposableSingletons$MainKt.lambda-5.<anonymous> (Main.kt:55)');
    }
    P(null, ComposableSingletons$MainKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_6$lambda_uflld4($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1495724406, $changed, -1, 'com.sarmad.certinspector.demo.ComposableSingletons$MainKt.lambda-6.<anonymous> (Main.kt:61)');
    }
    Text_0('Loading...', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_7$lambda_brvzjt($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1056503128, $changed, -1, 'com.sarmad.certinspector.demo.ComposableSingletons$MainKt.lambda-7.<anonymous> (Main.kt:61)');
    }
    P(null, ComposableSingletons$MainKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_8$lambda_h1qhie($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1198076843, $changed, -1, 'com.sarmad.certinspector.demo.ComposableSingletons$MainKt.lambda-8.<anonymous> (Main.kt:67)');
    }
    Text_0("Success! But this shouldn't happen in browser...", $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda_p5r3ej($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1637298121, $changed, -1, 'com.sarmad.certinspector.demo.ComposableSingletons$MainKt.lambda-9.<anonymous> (Main.kt:67)');
    }
    P(null, ComposableSingletons$MainKt_getInstance().lambda_8_r8sbbi_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_10$lambda_vulrrt($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1782675851, $changed, -1, 'com.sarmad.certinspector.demo.ComposableSingletons$MainKt.lambda-10.<anonymous> (Main.kt:73)');
    }
    Text_0('Browser Limitation', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_11$lambda_acvt54($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-317176075, $changed, -1, 'com.sarmad.certinspector.demo.ComposableSingletons$MainKt.lambda-11.<anonymous> (Main.kt:79)');
    }
    Text_0('Why This Happens', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_12$lambda_igqnx3($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1185849741, $changed, -1, 'com.sarmad.certinspector.demo.ComposableSingletons$MainKt.lambda-12.<anonymous> (Main.kt:81)');
    }
    Text_0('Modern browsers intentionally block JavaScript from accessing SSL/TLS certificate details for security reasons. ', $composer_0, 6);
    Text_0('This prevents websites from fingerprinting users and violating privacy.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_13$lambda_nqqwzu($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1905944300, $changed, -1, 'com.sarmad.certinspector.demo.ComposableSingletons$MainKt.lambda-13.<anonymous> (Main.kt:85)');
    }
    Text_0('Available Options', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda_52vk2d($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1822335503, $changed, -1, 'com.sarmad.certinspector.demo.ComposableSingletons$MainKt.lambda-14.<anonymous> (Main.kt:87)');
    }
    Text_0('\uD83D\uDCF1 Use the Android app for full certificate inspection', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_15$lambda_xwi14k($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1673565384, $changed, -1, 'com.sarmad.certinspector.demo.ComposableSingletons$MainKt.lambda-15.<anonymous> (Main.kt:88)');
    }
    Text_0('\uD83D\uDDA5\uFE0F Use the Desktop app for full certificate inspection', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_16$lambda_8azjsd($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1572029911, $changed, -1, 'com.sarmad.certinspector.demo.ComposableSingletons$MainKt.lambda-16.<anonymous> (Main.kt:89)');
    }
    Text_0('\uD83C\uDF10 Web-based inspectors (like SSL Labs) use backend servers to perform inspections', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_17$lambda_kimx9u($this$Ul, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-414648512, $changed, -1, 'com.sarmad.certinspector.demo.ComposableSingletons$MainKt.lambda-17.<anonymous> (Main.kt:87)');
    }
    Li(null, ComposableSingletons$MainKt_getInstance().lambda_14_7sywo9__1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$MainKt_getInstance().lambda_15_7sywoa_1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$MainKt_getInstance().lambda_16_7sywob_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_18$lambda_lounn3($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(147645909, $changed, -1, 'com.sarmad.certinspector.demo.ComposableSingletons$MainKt.lambda-18.<anonymous> (Main.kt:79)');
    }
    H4(null, ComposableSingletons$MainKt_getInstance().lambda_11_7sywo6__1, $composer_0, 48, 1);
    P(null, ComposableSingletons$MainKt_getInstance().lambda_12_7sywo7__1, $composer_0, 48, 1);
    H4(null, ComposableSingletons$MainKt_getInstance().lambda_13_7sywo8__1, $composer_0, 48, 1);
    Ul(null, ComposableSingletons$MainKt_getInstance().lambda_17_7sywoc_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_19$lambda_74rtf4($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-797761636, $changed, -1, 'com.sarmad.certinspector.demo.ComposableSingletons$MainKt.lambda-19.<anonymous> (Main.kt:97)');
    }
    Text_0('Try Another URL', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(-11816066, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(1136351701, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(1877089814, false, ComposableSingletons$MainKt$lambda_3$lambda_ezu85n));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(1207952717, false, ComposableSingletons$MainKt$lambda_4$lambda_r7ncra));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(-790267473, false, ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(1495724406, false, ComposableSingletons$MainKt$lambda_6$lambda_uflld4));
    var tmp_5 = this;
    tmp_5.lambda_7_r8sbbj_1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(1056503128, false, ComposableSingletons$MainKt$lambda_7$lambda_brvzjt));
    var tmp_6 = this;
    tmp_6.lambda_8_r8sbbi_1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(-1198076843, false, ComposableSingletons$MainKt$lambda_8$lambda_h1qhie));
    var tmp_7 = this;
    tmp_7.lambda_9_r8sbbh_1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(-1637298121, false, ComposableSingletons$MainKt$lambda_9$lambda_p5r3ej));
    var tmp_8 = this;
    tmp_8.lambda_10_7sywo5__1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(-1782675851, false, ComposableSingletons$MainKt$lambda_10$lambda_vulrrt));
    var tmp_9 = this;
    tmp_9.lambda_11_7sywo6__1 = ComposableLambda$invoke$ref_30(composableLambdaInstance(-317176075, false, ComposableSingletons$MainKt$lambda_11$lambda_acvt54));
    var tmp_10 = this;
    tmp_10.lambda_12_7sywo7__1 = ComposableLambda$invoke$ref_31(composableLambdaInstance(-1185849741, false, ComposableSingletons$MainKt$lambda_12$lambda_igqnx3));
    var tmp_11 = this;
    tmp_11.lambda_13_7sywo8__1 = ComposableLambda$invoke$ref_32(composableLambdaInstance(1905944300, false, ComposableSingletons$MainKt$lambda_13$lambda_nqqwzu));
    var tmp_12 = this;
    tmp_12.lambda_14_7sywo9__1 = ComposableLambda$invoke$ref_33(composableLambdaInstance(1822335503, false, ComposableSingletons$MainKt$lambda_14$lambda_52vk2d));
    var tmp_13 = this;
    tmp_13.lambda_15_7sywoa_1 = ComposableLambda$invoke$ref_34(composableLambdaInstance(-1673565384, false, ComposableSingletons$MainKt$lambda_15$lambda_xwi14k));
    var tmp_14 = this;
    tmp_14.lambda_16_7sywob_1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(1572029911, false, ComposableSingletons$MainKt$lambda_16$lambda_8azjsd));
    var tmp_15 = this;
    tmp_15.lambda_17_7sywoc_1 = ComposableLambda$invoke$ref_36(composableLambdaInstance(-414648512, false, ComposableSingletons$MainKt$lambda_17$lambda_kimx9u));
    var tmp_16 = this;
    tmp_16.lambda_18_7sywod_1 = ComposableLambda$invoke$ref_37(composableLambdaInstance(147645909, false, ComposableSingletons$MainKt$lambda_18$lambda_lounn3));
    var tmp_17 = this;
    tmp_17.lambda_19_7sywoe_1 = ComposableLambda$invoke$ref_38(composableLambdaInstance(-797761636, false, ComposableSingletons$MainKt$lambda_19$lambda_74rtf4));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_34z340_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_2_2mi82p_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_3_241d1e_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_4_1lki03_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_5_133mys_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_6_kmrxh_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_7_25ww6_k$ = function () {
    return this.lambda_7_r8sbbj_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_8_gay55_k$ = function () {
    return this.lambda_8_r8sbbi_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_9_yrt6g_k$ = function () {
    return this.lambda_9_r8sbbh_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_10_p4gc8_k$ = function () {
    return this.lambda_10_7sywo5__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_11_17lbdj_k$ = function () {
    return this.lambda_11_7sywo6__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_12_1q26eu_k$ = function () {
    return this.lambda_12_7sywo7__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_13_28j1g5_k$ = function () {
    return this.lambda_13_7sywo8__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_14_2qzwhg_k$ = function () {
    return this.lambda_14_7sywo9__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_15_39grir_k$ = function () {
    return this.lambda_15_7sywoa_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_16_3rxmk2_k$ = function () {
    return this.lambda_16_7sywob_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_17_4aehld_k$ = function () {
    return this.lambda_17_7sywoc_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_18_4svcmo_k$ = function () {
    return this.lambda_18_7sywod_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_19_5bc7nz_k$ = function () {
    return this.lambda_19_7sywoe_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function WebApp$lambda($uiState$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('uiState', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $uiState$delegate.get_value_j01efc_k$();
  }
  function WebApp$lambda_0($urlInput$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('urlInput', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $urlInput$delegate.get_value_j01efc_k$();
  }
  function WebApp$lambda_1($urlInput$delegate, _set____db54di) {
    getLocalDelegateReference('urlInput', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $urlInput$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function WebApp$lambda_2($this$Div) {
    $this$Div.classes_ayghm2_k$([AppStyles_getInstance().get_container_1pul08_k$()]);
    return Unit_getInstance();
  }
  function WebApp$lambda$lambda($this$H1) {
    $this$H1.classes_ayghm2_k$([AppStyles_getInstance().get_title_iz32un_k$()]);
    return Unit_getInstance();
  }
  function WebApp$lambda$lambda_0($this$P) {
    $this$P.classes_ayghm2_k$([AppStyles_getInstance().get_subtitle_55eoyp_k$()]);
    return Unit_getInstance();
  }
  function WebApp$lambda$lambda_1($this$Div) {
    $this$Div.classes_ayghm2_k$([AppStyles_getInstance().get_inputGroup_2e40gu_k$()]);
    return Unit_getInstance();
  }
  function WebApp$lambda$lambda$lambda$lambda($urlInput$delegate) {
    return function (it) {
      WebApp$lambda_1($urlInput$delegate, it.get_value_j01efc_k$());
      return Unit_getInstance();
    };
  }
  function WebApp$lambda$lambda$lambda($urlInput$delegate) {
    return function ($this$Input) {
      $this$Input.classes_ayghm2_k$([AppStyles_getInstance().get_input_it4gip_k$()]);
      $this$Input.value_hphtnt_k$(WebApp$lambda_0($urlInput$delegate));
      $this$Input.onInput_qzb0am_k$(WebApp$lambda$lambda$lambda$lambda($urlInput$delegate));
      $this$Input.attr_w68641_k$('placeholder', 'example.com or https://example.com');
      return Unit_getInstance();
    };
  }
  function WebApp$lambda$lambda$lambda$lambda_0($viewModel, $urlInput$delegate) {
    return function (it) {
      $viewModel.inspectUrl_a2whdd_k$(WebApp$lambda_0($urlInput$delegate));
      return Unit_getInstance();
    };
  }
  function WebApp$lambda$lambda$lambda_0($uiState$delegate, $viewModel, $urlInput$delegate) {
    return function ($this$Button) {
      $this$Button.classes_ayghm2_k$([AppStyles_getInstance().get_button_bmjiuz_k$()]);
      var tmp;
      var tmp_0 = WebApp$lambda($uiState$delegate);
      if (tmp_0 instanceof Loading) {
        $this$Button.attr_w68641_k$('disabled', 'true');
        tmp = Unit_getInstance();
      }
      $this$Button.onClick_q9cds6_k$(WebApp$lambda$lambda$lambda$lambda_0($viewModel, $urlInput$delegate));
      return Unit_getInstance();
    };
  }
  function WebApp$lambda$lambda$lambda_1($uiState$delegate) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-208659523, $changed, -1, 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous> (Main.kt:48)');
      }
      var tmp;
      var tmp_0 = WebApp$lambda($uiState$delegate);
      if (tmp_0 instanceof Loading) {
        tmp = 'Inspecting...';
      } else {
        tmp = 'Inspect Certificate';
      }
      Text_0(tmp, $composer_0, 0);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function WebApp$lambda$lambda_2($uiState$delegate, $viewModel, $urlInput$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1013834935, $changed, -1, 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous> (Main.kt:34)');
      }
      var tmp = Text_getInstance();
      $composer_0.startReplaceGroup_5hh8aj_k$(-847714632);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = WebApp$lambda$lambda$lambda($urlInput$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      Input(tmp, tmp0_group, $composer_0, 48);
      $composer_0.startReplaceGroup_5hh8aj_k$(-847707221);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.changed_ga7h3f_k$($uiState$delegate) | $composer_0.changedInstance_s1wkiy_k$($viewModel));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = WebApp$lambda$lambda$lambda_0($uiState$delegate, $viewModel, $urlInput$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-208659523, true, WebApp$lambda$lambda$lambda_1($uiState$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid_0 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_39(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Button_0(tmp1_group, tmp0, $composer_0, 48, 0);
      var tmp_6;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_6 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function WebApp$lambda$lambda_3($this$Div) {
    $this$Div.classes_ayghm2_k$([AppStyles_getInstance().get_infoBox_xfsb4k_k$()]);
    return Unit_getInstance();
  }
  function WebApp$lambda$lambda_4($this$Div) {
    $this$Div.classes_ayghm2_k$([AppStyles_getInstance().get_loading_6tzj9v_k$()]);
    return Unit_getInstance();
  }
  function WebApp$lambda$lambda_5($this$Div) {
    $this$Div.classes_ayghm2_k$([AppStyles_getInstance().get_successBox_wb23e7_k$()]);
    return Unit_getInstance();
  }
  function WebApp$lambda$lambda_6($this$Div) {
    $this$Div.classes_ayghm2_k$([AppStyles_getInstance().get_errorBox_8pqrh0_k$()]);
    return Unit_getInstance();
  }
  function WebApp$lambda$lambda$lambda_2($this$P) {
    $this$P.classes_ayghm2_k$([AppStyles_getInstance().get_errorMessage_ofxtm0_k$()]);
    return Unit_getInstance();
  }
  function WebApp$lambda$lambda$lambda_3($state) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(403089204, $changed, -1, 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous> (Main.kt:75)');
      }
      Text_0($state.get_message_h23axq_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_41($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function WebApp$lambda$lambda$lambda_4($this$Div) {
    $this$Div.classes_ayghm2_k$([AppStyles_getInstance().get_infoSection_dvdbla_k$()]);
    return Unit_getInstance();
  }
  function WebApp$lambda$lambda$lambda$lambda_1($viewModel) {
    return function (it) {
      $viewModel.reset_5u6xz3_k$();
      return Unit_getInstance();
    };
  }
  function WebApp$lambda$lambda$lambda_5($viewModel) {
    return function ($this$Button) {
      $this$Button.classes_ayghm2_k$([AppStyles_getInstance().get_button_bmjiuz_k$(), AppStyles_getInstance().get_secondaryButton_5rgh0j_k$()]);
      $this$Button.onClick_q9cds6_k$(WebApp$lambda$lambda$lambda$lambda_1($viewModel));
      return Unit_getInstance();
    };
  }
  function WebApp$lambda$lambda_7($viewModel, $state) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-36132074, $changed, -1, 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous> (Main.kt:73)');
      }
      H3(null, ComposableSingletons$MainKt_getInstance().lambda_10_7sywo5__1, $composer_0, 48, 1);
      $composer_0.startReplaceGroup_5hh8aj_k$(-847671223);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = WebApp$lambda$lambda$lambda_2;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(403089204, true, WebApp$lambda$lambda$lambda_3($state), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_41(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      P(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(-847667064);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = WebApp$lambda$lambda$lambda_4;
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      Div(tmp1_group, ComposableSingletons$MainKt_getInstance().lambda_18_7sywod_1, $composer_0, 54, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(-847638432);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.changedInstance_s1wkiy_k$($viewModel);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = WebApp$lambda$lambda$lambda_5($viewModel);
        $composer_0.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      Button_0(tmp2_group, ComposableSingletons$MainKt_getInstance().lambda_19_7sywoe_1, $composer_0, 48, 0);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function WebApp$lambda_3($uiState$delegate, $viewModel, $urlInput$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1933299208, $changed, -1, 'com.sarmad.certinspector.demo.WebApp.<anonymous> (Main.kt:25)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-2029149693);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous>' call
        var value = WebApp$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      H1(tmp0_group, ComposableSingletons$MainKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 54, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(-2029146650);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = WebApp$lambda$lambda_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      P(tmp1_group, ComposableSingletons$MainKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 54, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(-2029142840);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = WebApp$lambda$lambda_1;
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1013834935, true, WebApp$lambda$lambda_2($uiState$delegate, $viewModel, $urlInput$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_40(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp2_group, tmp0, $composer_0, 54, 0);
      var state = WebApp$lambda($uiState$delegate);
      if (state instanceof Idle) {
        $composer_0.startReplaceGroup_5hh8aj_k$(1521811607);
        $composer_0.startReplaceGroup_5hh8aj_k$(-2029118715);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_7;
        if (false || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous>' call
          var value_3 = WebApp$lambda$lambda_3;
          $composer_0.updateRememberedValue_l1wh71_k$(value_3);
          tmp_7 = value_3;
        } else {
          tmp_7 = it_3;
        }
        var tmp_8 = tmp_7;
        var tmp3_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        Div(tmp3_group, ComposableSingletons$MainKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 54, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        if (state instanceof Loading) {
          $composer_0.startReplaceGroup_5hh8aj_k$(1522009015);
          $composer_0.startReplaceGroup_5hh8aj_k$(-2029112315);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_4 = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_9;
          if (false || it_4 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous>' call
            var value_4 = WebApp$lambda$lambda_4;
            $composer_0.updateRememberedValue_l1wh71_k$(value_4);
            tmp_9 = value_4;
          } else {
            tmp_9 = it_4;
          }
          var tmp_10 = tmp_9;
          var tmp4_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
          $composer_0.endReplaceGroup_ek144q_k$();
          Div(tmp4_group, ComposableSingletons$MainKt_getInstance().lambda_7_r8sbbj_1, $composer_0, 54, 0);
          $composer_0.endReplaceGroup_ek144q_k$();
        } else {
          if (state instanceof Success_0) {
            $composer_0.startReplaceGroup_5hh8aj_k$(1522176942);
            $composer_0.startReplaceGroup_5hh8aj_k$(-2029106936);
            // Inline function 'androidx.compose.runtime.cache' call
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it_5 = $composer_0.rememberedValue_4dg93v_k$();
            var tmp_11;
            if (false || it_5 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
              // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous>' call
              var value_5 = WebApp$lambda$lambda_5;
              $composer_0.updateRememberedValue_l1wh71_k$(value_5);
              tmp_11 = value_5;
            } else {
              tmp_11 = it_5;
            }
            var tmp_12 = tmp_11;
            var tmp5_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
            $composer_0.endReplaceGroup_ek144q_k$();
            Div(tmp5_group, ComposableSingletons$MainKt_getInstance().lambda_9_r8sbbh_1, $composer_0, 54, 0);
            $composer_0.endReplaceGroup_ek144q_k$();
          } else {
            if (state instanceof Error_2) {
              $composer_0.startReplaceGroup_5hh8aj_k$(1522420726);
              $composer_0.startReplaceGroup_5hh8aj_k$(-2029100314);
              // Inline function 'androidx.compose.runtime.cache' call
              // Inline function 'kotlin.let' call
              // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
              var it_6 = $composer_0.rememberedValue_4dg93v_k$();
              var tmp_13;
              if (false || it_6 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
                // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous>' call
                var value_6 = WebApp$lambda$lambda_6;
                $composer_0.updateRememberedValue_l1wh71_k$(value_6);
                tmp_13 = value_6;
              } else {
                tmp_13 = it_6;
              }
              var tmp_14 = tmp_13;
              var tmp6_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
              $composer_0.endReplaceGroup_ek144q_k$();
              // Inline function 'kotlin.run' call
              // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous>' call
              var dispatchReceiver_0 = rememberComposableLambda(-36132074, true, WebApp$lambda$lambda_7($viewModel, state), $composer_0, 54);
              // Inline function 'androidx.compose.runtime.remember' call
              var $composer_2 = $composer_0;
              sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
              // Inline function 'androidx.compose.runtime.cache' call
              var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
              // Inline function 'kotlin.let' call
              // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
              var it_7 = $composer_2.rememberedValue_4dg93v_k$();
              var tmp_15;
              if (invalid_0 || it_7 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
                // Inline function 'com.sarmad.certinspector.demo.WebApp.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                var value_7 = ComposableLambda$invoke$ref_42(dispatchReceiver_0);
                $composer_2.updateRememberedValue_l1wh71_k$(value_7);
                tmp_15 = value_7;
              } else {
                tmp_15 = it_7;
              }
              var tmp_16 = tmp_15;
              var tmp0_0 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
              sourceInformationMarkerEnd($composer_2);
              Div(tmp6_group, tmp0_0, $composer_0, 54, 0);
              $composer_0.endReplaceGroup_ek144q_k$();
            } else {
              $composer_0.startReplaceGroup_5hh8aj_k$(-2029119311);
              $composer_0.endReplaceGroup_ek144q_k$();
              noWhenBranchMatchedException();
            }
          }
        }
      }
      var tmp_17;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_17 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_43($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function WebApp$lambda_4($$changed) {
    return function ($composer, $force) {
      WebApp($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function container$factory() {
    return getPropertyCallableRef('container', 1, KProperty1, function (receiver) {
      return receiver.get_container_1pul08_k$();
    }, null);
  }
  function title$factory() {
    return getPropertyCallableRef('title', 1, KProperty1, function (receiver) {
      return receiver.get_title_iz32un_k$();
    }, null);
  }
  function subtitle$factory() {
    return getPropertyCallableRef('subtitle', 1, KProperty1, function (receiver) {
      return receiver.get_subtitle_55eoyp_k$();
    }, null);
  }
  function inputGroup$factory() {
    return getPropertyCallableRef('inputGroup', 1, KProperty1, function (receiver) {
      return receiver.get_inputGroup_2e40gu_k$();
    }, null);
  }
  function input$factory() {
    return getPropertyCallableRef('input', 1, KProperty1, function (receiver) {
      return receiver.get_input_it4gip_k$();
    }, null);
  }
  function button$factory() {
    return getPropertyCallableRef('button', 1, KProperty1, function (receiver) {
      return receiver.get_button_bmjiuz_k$();
    }, null);
  }
  function secondaryButton$factory() {
    return getPropertyCallableRef('secondaryButton', 1, KProperty1, function (receiver) {
      return receiver.get_secondaryButton_5rgh0j_k$();
    }, null);
  }
  function infoBox$factory() {
    return getPropertyCallableRef('infoBox', 1, KProperty1, function (receiver) {
      return receiver.get_infoBox_xfsb4k_k$();
    }, null);
  }
  function loading$factory() {
    return getPropertyCallableRef('loading', 1, KProperty1, function (receiver) {
      return receiver.get_loading_6tzj9v_k$();
    }, null);
  }
  function successBox$factory() {
    return getPropertyCallableRef('successBox', 1, KProperty1, function (receiver) {
      return receiver.get_successBox_wb23e7_k$();
    }, null);
  }
  function errorBox$factory() {
    return getPropertyCallableRef('errorBox', 1, KProperty1, function (receiver) {
      return receiver.get_errorBox_8pqrh0_k$();
    }, null);
  }
  function errorMessage$factory() {
    return getPropertyCallableRef('errorMessage', 1, KProperty1, function (receiver) {
      return receiver.get_errorMessage_ofxtm0_k$();
    }, null);
  }
  function infoSection$factory() {
    return getPropertyCallableRef('infoSection', 1, KProperty1, function (receiver) {
      return receiver.get_infoSection_dvdbla_k$();
    }, null);
  }
  function container$factory_0() {
    return getPropertyCallableRef('container', 1, KProperty1, function (receiver) {
      return receiver.get_container_1pul08_k$();
    }, null);
  }
  function title$factory_0() {
    return getPropertyCallableRef('title', 1, KProperty1, function (receiver) {
      return receiver.get_title_iz32un_k$();
    }, null);
  }
  function subtitle$factory_0() {
    return getPropertyCallableRef('subtitle', 1, KProperty1, function (receiver) {
      return receiver.get_subtitle_55eoyp_k$();
    }, null);
  }
  function inputGroup$factory_0() {
    return getPropertyCallableRef('inputGroup', 1, KProperty1, function (receiver) {
      return receiver.get_inputGroup_2e40gu_k$();
    }, null);
  }
  function input$factory_0() {
    return getPropertyCallableRef('input', 1, KProperty1, function (receiver) {
      return receiver.get_input_it4gip_k$();
    }, null);
  }
  function button$factory_0() {
    return getPropertyCallableRef('button', 1, KProperty1, function (receiver) {
      return receiver.get_button_bmjiuz_k$();
    }, null);
  }
  function secondaryButton$factory_0() {
    return getPropertyCallableRef('secondaryButton', 1, KProperty1, function (receiver) {
      return receiver.get_secondaryButton_5rgh0j_k$();
    }, null);
  }
  function infoBox$factory_0() {
    return getPropertyCallableRef('infoBox', 1, KProperty1, function (receiver) {
      return receiver.get_infoBox_xfsb4k_k$();
    }, null);
  }
  function loading$factory_0() {
    return getPropertyCallableRef('loading', 1, KProperty1, function (receiver) {
      return receiver.get_loading_6tzj9v_k$();
    }, null);
  }
  function successBox$factory_0() {
    return getPropertyCallableRef('successBox', 1, KProperty1, function (receiver) {
      return receiver.get_successBox_wb23e7_k$();
    }, null);
  }
  function errorBox$factory_0() {
    return getPropertyCallableRef('errorBox', 1, KProperty1, function (receiver) {
      return receiver.get_errorBox_8pqrh0_k$();
    }, null);
  }
  function errorMessage$factory_0() {
    return getPropertyCallableRef('errorMessage', 1, KProperty1, function (receiver) {
      return receiver.get_errorMessage_ofxtm0_k$();
    }, null);
  }
  function infoSection$factory_0() {
    return getPropertyCallableRef('infoSection', 1, KProperty1, function (receiver) {
      return receiver.get_infoSection_dvdbla_k$();
    }, null);
  }
  function mainWrapper() {
    main();
  }
  //region block: init
  com_sarmad_certinspector_demo_viewmodel_InspectorViewModel$stable = 8;
  com_sarmad_certinspector_demo_viewmodel_UiState_Idle$stable = 0;
  com_sarmad_certinspector_demo_viewmodel_UiState_Loading$stable = 0;
  com_sarmad_certinspector_demo_viewmodel_UiState_Success$stable = 8;
  com_sarmad_certinspector_demo_viewmodel_UiState_Error$stable = 0;
  com_sarmad_certinspector_demo_viewmodel_UiState$stable = 0;
  com_sarmad_certinspector_demo_AppStyles$stable = 8;
  //endregion
  mainWrapper();
  return _;
}));
