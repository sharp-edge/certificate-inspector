(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime-saveable'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime-saveable'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime-saveable'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime-saveable'.");
    }
    globalThis['compose-multiplatform-core-compose-runtime-runtime-saveable'] = factory(typeof globalThis['compose-multiplatform-core-compose-runtime-runtime-saveable'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-runtime-runtime-saveable'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var THROW_CCE = kotlin_kotlin.$_$.ij;
  var toString = kotlin_kotlin.$_$.if;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var Unit_getInstance = kotlin_kotlin.$_$.u5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.q;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var charSequenceLength = kotlin_kotlin.$_$.od;
  var toString_0 = kotlin_kotlin.$_$.gi;
  var isInterface = kotlin_kotlin.$_$.re;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p2;
  var SideEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var toString_1 = kotlin_kotlin.$_$.uk;
  var protoOf = kotlin_kotlin.$_$.ef;
  var contentEquals = kotlin_kotlin.$_$.z7;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var initMetadataForClass = kotlin_kotlin.$_$.ce;
  var VOID = kotlin_kotlin.$_$.e;
  var neverEqualPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var structuralEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var referentialEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var SnapshotMutableState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var initMetadataForInterface = kotlin_kotlin.$_$.fe;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var toMutableMap = kotlin_kotlin.$_$.bc;
  var initMetadataForCompanion = kotlin_kotlin.$_$.de;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var KtMap = kotlin_kotlin.$_$.q6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.o;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var arrayListOf = kotlin_kotlin.$_$.h7;
  var charSequenceGet = kotlin_kotlin.$_$.nd;
  var isWhitespace = kotlin_kotlin.$_$.lh;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SaverScope, 'SaverScope');
  initMetadataForClass(SaveableHolder, 'SaveableHolder', VOID, VOID, [SaverScope, RememberObserver]);
  initMetadataForInterface(SaveableStateHolder, 'SaveableStateHolder');
  initMetadataForClass(RegistryHolder, 'RegistryHolder');
  initMetadataForCompanion(Companion);
  initMetadataForClass(SaveableStateHolderImpl$SaveableStateProvider$$inlined$ReusableContent$1$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(SaveableStateHolderImpl, 'SaveableStateHolderImpl', SaveableStateHolderImpl, VOID, [SaveableStateHolder]);
  initMetadataForInterface(Entry, 'Entry');
  initMetadataForInterface(SaveableStateRegistry, 'SaveableStateRegistry');
  initMetadataForClass(SaveableStateRegistryImpl$registerProvider$1, VOID, VOID, VOID, [Entry]);
  initMetadataForClass(SaveableStateRegistryImpl, 'SaveableStateRegistryImpl', VOID, VOID, [SaveableStateRegistry]);
  initMetadataForInterface(Saver, 'Saver');
  initMetadataForClass(Saver$1, VOID, VOID, VOID, [Saver]);
  //endregion
  function listSaver(save, restore) {
    var tmp = listSaver$lambda(save);
    return Saver_0(tmp, typeof restore === 'function' ? restore : THROW_CCE());
  }
  function listSaver$lambda($save) {
    return function ($this$Saver, it) {
      var list = $save($this$Saver, it);
      var inductionVariable = 0;
      var last = list.get_size_woubt6_k$() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = list.get_c1px32_k$(index);
          if (!(item == null)) {
            // Inline function 'kotlin.require' call
            if (!$this$Saver.canBeSaved_nnajrq_k$(item)) {
              // Inline function 'androidx.compose.runtime.saveable.listSaver.<anonymous>.<anonymous>' call
              var message = "item can't be saved";
              throw IllegalArgumentException_init_$Create$(toString(message));
            }
          }
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!list.isEmpty_y1axqb_k$()) {
        tmp_0 = ArrayList_init_$Create$(list);
      } else {
        tmp_0 = null;
      }
      return tmp_0;
    };
  }
  function get_MaxSupportedRadix() {
    return MaxSupportedRadix;
  }
  var MaxSupportedRadix;
  function rememberSaveable(inputs, saver, key, init, $composer, $changed, $default) {
    var saver_0 = {_v: saver};
    var key_0 = key;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 441892779, 'C(rememberSaveable)P(1,3,2)71@3180L23,81@3526L7,83@3552L313,93@3951L71,93@3940L82:RememberSaveable.kt#r2ddri');
    if (!(($default & 2) === 0)) {
      saver_0._v = autoSaver();
    }
    if (!(($default & 4) === 0))
      key_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(441892779, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveable (RememberSaveable.kt:70)');
    }
    var compositeKey = get_currentCompositeKeyHash($composer_0, 0);
    var tmp;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    var this_0 = key_0;
    if (!(this_0 == null || charSequenceLength(this_0) === 0)) {
      tmp = key_0;
    } else {
      tmp = toString_0(compositeKey, MaxSupportedRadix);
    }
    var finalKey = tmp;
    var tmp_0 = saver_0._v;
    if (!isInterface(tmp_0, Saver))
      THROW_CCE();
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_1 = get_LocalSaveableStateRegistry();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_1);
    sourceInformationMarkerEnd($composer_1);
    var registry = tmp0;
    sourceInformationMarkerStart($composer_0, -1519365315, 'CC(remember):RememberSaveable.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveable.<anonymous>' call
      var tmp1_safe_receiver = registry == null ? null : registry.consumeRestored_yfjzaw_k$(finalKey);
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.saveable.rememberSaveable.<anonymous>.<anonymous>' call
        tmp_2 = saver_0._v.restore_fyjq85_k$(tmp1_safe_receiver);
      }
      var restored = tmp_2;
      var finalValue = restored == null ? init() : restored;
      var value = new SaveableHolder(saver_0._v, registry, finalKey, finalValue, inputs);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp_1 = value;
    } else {
      tmp_1 = it;
    }
    var tmp_3 = tmp_1;
    var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var holder = tmp1_group;
    var tmp0_elvis_lhs = holder.getValueIfInputsDidntChange_2my39q_k$(inputs);
    var value_0 = tmp0_elvis_lhs == null ? init() : tmp0_elvis_lhs;
    sourceInformationMarkerStart($composer_0, -1519352789, 'CC(remember):RememberSaveable.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!(!!(!!(!!($composer_0.changedInstance_s1wkiy_k$(holder) | (($changed & 112 ^ 48) > 32 && $composer_0.changedInstance_s1wkiy_k$(saver_0._v) || ($changed & 48) === 32)) | $composer_0.changedInstance_s1wkiy_k$(registry)) | $composer_0.changed_ga7h3f_k$(finalKey)) | $composer_0.changedInstance_s1wkiy_k$(value_0)) | $composer_0.changedInstance_s1wkiy_k$(inputs));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_4;
    if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveable.<anonymous>' call
      var value_1 = rememberSaveable$lambda(holder, saver_0, registry, finalKey, value_0, inputs);
      $composer_0.updateRememberedValue_l1wh71_k$(value_1);
      tmp_4 = value_1;
    } else {
      tmp_4 = it_0;
    }
    var tmp_5 = tmp_4;
    var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    SideEffect(tmp2_group, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return value_0;
  }
  function _set_saver__ki24i8($this, _set____db54di) {
    $this.saver_1 = _set____db54di;
  }
  function _get_saver__bj2bz8($this) {
    return $this.saver_1;
  }
  function _set_registry__wfdxom($this, _set____db54di) {
    $this.registry_1 = _set____db54di;
  }
  function _get_registry__pststq($this) {
    return $this.registry_1;
  }
  function _set_key__4w8w3q($this, _set____db54di) {
    $this.key_1 = _set____db54di;
  }
  function _get_key__e6bh8y($this) {
    return $this.key_1;
  }
  function _set_value__lx0xdg($this, _set____db54di) {
    $this.value_1 = _set____db54di;
  }
  function _get_value__a43j40($this) {
    return $this.value_1;
  }
  function _set_inputs__2dcq7m($this, _set____db54di) {
    $this.inputs_1 = _set____db54di;
  }
  function _get_inputs__wm5ku($this) {
    return $this.inputs_1;
  }
  function _set_entry__e2jqj7($this, _set____db54di) {
    $this.entry_1 = _set____db54di;
  }
  function _get_entry__hykpy9($this) {
    return $this.entry_1;
  }
  function _get_valueProvider__r2iult($this) {
    return $this.valueProvider_1;
  }
  function register($this) {
    var registry = $this.registry_1;
    // Inline function 'kotlin.require' call
    if (!($this.entry_1 == null)) {
      // Inline function 'androidx.compose.runtime.saveable.SaveableHolder.register.<anonymous>' call
      var message = 'entry(' + toString_1($this.entry_1) + ') is not null';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (!(registry == null)) {
      requireCanBeSaved(registry, $this.valueProvider_1());
      $this.entry_1 = registry.registerProvider_22k33k_k$($this.key_1, $this.valueProvider_1);
    }
  }
  function SaveableHolder$valueProvider$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.saveable.SaveableHolder.valueProvider.<anonymous>.<anonymous>' call
      var $this$with = this$0.saver_1;
      var tmp0 = this$0.value_1;
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0 == null) {
          // Inline function 'androidx.compose.runtime.saveable.SaveableHolder.valueProvider.<anonymous>.<anonymous>.<anonymous>' call
          var message = 'Value should be initialized';
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = tmp0;
          break $l$block;
        }
      }
      return $this$with.save_khi2yu_k$(this$0, tmp$ret$1);
    };
  }
  function SaveableHolder(saver, registry, key, value, inputs) {
    this.saver_1 = saver;
    this.registry_1 = registry;
    this.key_1 = key;
    this.value_1 = value;
    this.inputs_1 = inputs;
    this.entry_1 = null;
    var tmp = this;
    tmp.valueProvider_1 = SaveableHolder$valueProvider$lambda(this);
  }
  protoOf(SaveableHolder).update_yik83o_k$ = function (saver, registry, key, value, inputs) {
    var entryIsOutdated = false;
    if (!(this.registry_1 === registry)) {
      this.registry_1 = registry;
      entryIsOutdated = true;
    }
    if (!(this.key_1 === key)) {
      this.key_1 = key;
      entryIsOutdated = true;
    }
    this.saver_1 = saver;
    this.value_1 = value;
    this.inputs_1 = inputs;
    if (!(this.entry_1 == null) && entryIsOutdated) {
      var tmp0_safe_receiver = this.entry_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.unregister_ib976c_k$();
      }
      this.entry_1 = null;
      register(this);
    }
  };
  protoOf(SaveableHolder).canBeSaved_nnajrq_k$ = function (value) {
    var registry = this.registry_1;
    return registry == null || registry.canBeSaved_nnajrq_k$(value);
  };
  protoOf(SaveableHolder).onRemembered_68t2e3_k$ = function () {
    register(this);
  };
  protoOf(SaveableHolder).onForgotten_pbqifp_k$ = function () {
    var tmp0_safe_receiver = this.entry_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.unregister_ib976c_k$();
    }
  };
  protoOf(SaveableHolder).onAbandoned_1gx7a3_k$ = function () {
    var tmp0_safe_receiver = this.entry_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.unregister_ib976c_k$();
    }
  };
  protoOf(SaveableHolder).getValueIfInputsDidntChange_2my39q_k$ = function (inputs) {
    var tmp;
    if (contentEquals(inputs, this.inputs_1)) {
      tmp = this.value_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  function requireCanBeSaved(_this__u8e3s4, value) {
    if (!(value == null) && !_this__u8e3s4.canBeSaved_nnajrq_k$(value)) {
      var tmp;
      if (!(value == null) ? isInterface(value, SnapshotMutableState) : false) {
        var tmp_0;
        if (!(value.get_policy_i5q4hn_k$() === neverEqualPolicy()) && !(value.get_policy_i5q4hn_k$() === structuralEqualityPolicy()) && !(value.get_policy_i5q4hn_k$() === referentialEqualityPolicy())) {
          tmp_0 = 'If you use a custom SnapshotMutationPolicy for your MutableState you have to write a custom Saver';
        } else {
          tmp_0 = 'MutableState containing ' + toString_1(value.get_value_j01efc_k$()) + ' cannot be saved using the current ' + 'SaveableStateRegistry. The default implementation only supports types ' + 'which can be stored inside the Bundle. Please consider implementing a ' + 'custom Saver for this class and pass it as a stateSaver parameter to ' + 'rememberSaveable().';
        }
        tmp = tmp_0;
      } else {
        tmp = generateCannotBeSavedErrorMessage(value);
      }
      throw IllegalArgumentException_init_$Create$(tmp);
    }
  }
  function generateCannotBeSavedErrorMessage(value) {
    return toString(value) + ' cannot be saved using the current SaveableStateRegistry. The default ' + 'implementation only supports types which can be stored inside the Bundle' + '. Please consider implementing a custom Saver for this class and pass it' + ' to rememberSaveable().';
  }
  function rememberSaveable$lambda($holder, $saver, $registry, $finalKey, $value, $inputs) {
    return function () {
      $holder.update_yik83o_k$($saver._v, $registry, $finalKey, $value, $inputs);
      return Unit_getInstance();
    };
  }
  function SaveableStateHolder() {
  }
  function rememberSaveableStateHolder($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 15454635, 'C(rememberSaveableStateHolder):SaveableStateHolder.kt#r2ddri');
    if (isTraceInProgress()) {
      traceEventStart(15454635, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveableStateHolder (SaveableStateHolder.kt:60)');
    }
    $composer_0.startReplaceGroup_5hh8aj_k$(-796080049);
    sourceInformation($composer_0, '*62@2504L41,60@2434L111,65@2619L7');
    var tmp = Companion_getInstance_0().Saver_1;
    sourceInformationMarkerStart($composer_0, -796081438, 'CC(remember):SaveableStateHolder.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_0;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveableStateHolder.<anonymous>' call
      var value = rememberSaveableStateHolder$lambda;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    // Inline function 'kotlin.apply' call
    var this_0 = rememberSaveable([], tmp, null, tmp1_group, $composer_0, 3072, 4);
    // Inline function 'androidx.compose.runtime.saveable.rememberSaveableStateHolder.<anonymous>' call
    var tmp_2 = this_0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_1 = get_LocalSaveableStateRegistry();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_1);
    sourceInformationMarkerEnd($composer_1);
    tmp_2.parentSaveableStateRegistry_1 = tmp0;
    $composer_0.endReplaceGroup_ek144q_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return this_0;
  }
  function SaveableStateHolderImpl$RegistryHolder$registry$lambda(this$0) {
    return function (it) {
      var tmp0_safe_receiver = this$0.parentSaveableStateRegistry_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.canBeSaved_nnajrq_k$(it);
      return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
    };
  }
  function SaveableStateHolderImpl$Companion$Saver$lambda($this$Saver, it) {
    return saveAll(it);
  }
  function SaveableStateHolderImpl$Companion$Saver$lambda_0(it) {
    return new SaveableStateHolderImpl(it);
  }
  function _get_savedStates__8lkyig($this) {
    return $this.savedStates_1;
  }
  function _get_registryHolders__cest15($this) {
    return $this.registryHolders_1;
  }
  function saveAll($this) {
    var map = toMutableMap($this.savedStates_1);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = $this.registryHolders_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.saveAll.<anonymous>' call
      element.saveTo_mv4zhb_k$(map);
    }
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp;
    if (map.isEmpty_y1axqb_k$()) {
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.saveAll.<anonymous>' call
      tmp = null;
    } else {
      tmp = map;
    }
    return tmp;
  }
  function RegistryHolder($outer, key) {
    this.$this_1 = $outer;
    this.key_1 = key;
    this.shouldSave_1 = true;
    var tmp = this;
    var tmp_0 = this.$this_1.savedStates_1.get_wei43m_k$(this.key_1);
    tmp.registry_1 = SaveableStateRegistry_0(tmp_0, SaveableStateHolderImpl$RegistryHolder$registry$lambda(this.$this_1));
  }
  protoOf(RegistryHolder).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(RegistryHolder).set_shouldSave_68lx7c_k$ = function (_set____db54di) {
    this.shouldSave_1 = _set____db54di;
  };
  protoOf(RegistryHolder).get_shouldSave_p014mf_k$ = function () {
    return this.shouldSave_1;
  };
  protoOf(RegistryHolder).get_registry_rt8npi_k$ = function () {
    return this.registry_1;
  };
  protoOf(RegistryHolder).saveTo_mv4zhb_k$ = function (map) {
    if (this.shouldSave_1) {
      var savedData = this.registry_1.performSave_ohn24i_k$();
      if (savedData.isEmpty_y1axqb_k$()) {
        // Inline function 'kotlin.collections.minusAssign' call
        var key = this.key_1;
        map.remove_gppy8k_k$(key);
      } else {
        // Inline function 'kotlin.collections.set' call
        var key_0 = this.key_1;
        map.put_4fpzoq_k$(key_0, savedData);
      }
    }
  };
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = SaveableStateHolderImpl$Companion$Saver$lambda;
    tmp.Saver_1 = Saver_0(tmp_0, SaveableStateHolderImpl$Companion$Saver$lambda_0);
  }
  protoOf(Companion).get_Saver_igssp8_k$ = function () {
    return this.Saver_1;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function SaveableStateHolderImpl$SaveableStateProvider$$inlined$ReusableContent$1$1($registryHolder, this$0, $key) {
    this.$registryHolder_1 = $registryHolder;
    this.this$0__1 = this$0;
    this.$key_1 = $key;
  }
  protoOf(SaveableStateHolderImpl$SaveableStateProvider$$inlined$ReusableContent$1$1).dispose_3nnxhr_k$ = function () {
    // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    this.$registryHolder_1.saveTo_mv4zhb_k$(this.this$0__1.savedStates_1);
    var tmp0 = this.this$0__1.registryHolders_1;
    // Inline function 'kotlin.collections.minusAssign' call
    var key = this.$key_1;
    tmp0.remove_gppy8k_k$(key);
  };
  function SaveableStateHolderImpl$SaveableStateProvider$lambda(this$0, $key, $registryHolder) {
    return function ($this$DisposableEffect) {
      var tmp0 = this$0.registryHolders_1;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var key = $key;
      var tmp;
      if (!!(isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).containsKey_aw81wo_k$(key)) {
        // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var message = 'Key ' + toString($key) + ' was used multiple times ';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp3 = this$0.savedStates_1;
      var key_0 = $key;
      tmp3.remove_gppy8k_k$(key_0);
      var tmp5 = this$0.registryHolders_1;
      var tmp6 = $key;
      var value = $registryHolder;
      tmp5.put_4fpzoq_k$(tmp6, value);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new SaveableStateHolderImpl$SaveableStateProvider$$inlined$ReusableContent$1$1($registryHolder, this$0, $key);
    };
  }
  function SaveableStateHolderImpl$SaveableStateProvider$lambda_0($tmp0_rcvr, $key, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.SaveableStateProvider_3h7wny_k$($key, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SaveableStateHolderImpl(savedStates) {
    Companion_getInstance_0();
    var tmp;
    if (savedStates === VOID) {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    } else {
      tmp = savedStates;
    }
    savedStates = tmp;
    this.savedStates_1 = savedStates;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.registryHolders_1 = LinkedHashMap_init_$Create$();
    this.parentSaveableStateRegistry_1 = null;
  }
  protoOf(SaveableStateHolderImpl).set_parentSaveableStateRegistry_rshrfm_k$ = function (_set____db54di) {
    this.parentSaveableStateRegistry_1 = _set____db54di;
  };
  protoOf(SaveableStateHolderImpl).get_parentSaveableStateRegistry_5mprdw_k$ = function () {
    return this.parentSaveableStateRegistry_1;
  };
  protoOf(SaveableStateHolderImpl).SaveableStateProvider_3h7wny_k$ = function (key, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1198538093);
    sourceInformation($composer_0, 'C(SaveableStateProvider)P(1)76@3032L923:SaveableStateHolder.kt#r2ddri');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(key) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(this) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1198538093, $dirty, -1, 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider (SaveableStateHolder.kt:75)');
      }
      // Inline function 'androidx.compose.runtime.ReusableContent' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 444418301, 'CC(ReusableContent)P(1)149@5444L9:Composables.kt#9igjgp');
      $composer_1.startReusableGroup_1qdhl_k$(207, key);
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider.<anonymous>' call
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, 1358150931, 'C77@3088L321,84@3422L150,88@3608L337,88@3585L360:SaveableStateHolder.kt#r2ddri');
      sourceInformationMarkerStart($composer_2, -233283229, 'CC(remember):SaveableStateHolder.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_2.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider.<anonymous>.<anonymous>' call
        var tmp0_safe_receiver = this.parentSaveableStateRegistry_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.canBeSaved_nnajrq_k$(key);
        // Inline function 'kotlin.require' call
        if (!(tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs)) {
          // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider.<anonymous>.<anonymous>.<anonymous>' call
          var message = 'Type of the key ' + toString(key) + ' is not supported. On Android you can only use types ' + 'which can be stored inside the Bundle.';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        var value = new RegistryHolder(this, key);
        $composer_2.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      var registryHolder = tmp0_group;
      CompositionLocalProvider(get_LocalSaveableStateRegistry().provides_3agxel_k$(registryHolder.registry_1), content, $composer_2, 8 | 112 & $dirty);
      sourceInformationMarkerStart($composer_2, -233266573, 'CC(remember):SaveableStateHolder.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.changedInstance_s1wkiy_k$(this) | $composer_0.changedInstance_s1wkiy_k$(key)) | $composer_0.changedInstance_s1wkiy_k$(registryHolder));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider.<anonymous>.<anonymous>' call
        var value_0 = SaveableStateHolderImpl$SaveableStateProvider$lambda(this, key, registryHolder);
        $composer_2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      DisposableEffect(Unit_getInstance(), tmp1_group, $composer_2, 6);
      sourceInformationMarkerEnd($composer_2);
      $composer_1.endReusableGroup_jx82af_k$();
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(SaveableStateHolderImpl$SaveableStateProvider$lambda_0(this, key, content, $changed));
    }
  };
  protoOf(SaveableStateHolderImpl).removeState_5wfli9_k$ = function (key) {
    var registryHolder = this.registryHolders_1.get_wei43m_k$(key);
    if (!(registryHolder == null)) {
      registryHolder.shouldSave_1 = false;
    } else {
      // Inline function 'kotlin.collections.minusAssign' call
      this.savedStates_1.remove_gppy8k_k$(key);
    }
  };
  function rememberSaveableStateHolder$lambda() {
    return new SaveableStateHolderImpl();
  }
  function get_LocalSaveableStateRegistry() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return LocalSaveableStateRegistry;
  }
  var LocalSaveableStateRegistry;
  function Entry() {
  }
  function SaveableStateRegistry() {
  }
  function SaveableStateRegistry_0(restoredValues, canBeSaved) {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return new SaveableStateRegistryImpl(restoredValues, canBeSaved);
  }
  function _get_canBeSaved__pps3rd($this) {
    return $this.canBeSaved_1;
  }
  function _get_restored__60hukr($this) {
    return $this.restored_1;
  }
  function _get_valueProviders__d74c8q($this) {
    return $this.valueProviders_1;
  }
  function SaveableStateRegistryImpl$registerProvider$1(this$0, $key, $valueProvider) {
    this.this$0__1 = this$0;
    this.$key_1 = $key;
    this.$valueProvider_1 = $valueProvider;
  }
  protoOf(SaveableStateRegistryImpl$registerProvider$1).unregister_ib976c_k$ = function () {
    var list = this.this$0__1.valueProviders_1.remove_gppy8k_k$(this.$key_1);
    if (list == null)
      null;
    else
      list.remove_cedx0m_k$(this.$valueProvider_1);
    var tmp;
    if (!(list == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !list.isEmpty_y1axqb_k$();
    } else {
      tmp = false;
    }
    if (tmp) {
      var tmp1 = this.this$0__1.valueProviders_1;
      // Inline function 'kotlin.collections.set' call
      var key = this.$key_1;
      tmp1.put_4fpzoq_k$(key, list);
    }
  };
  function SaveableStateRegistryImpl(restored, canBeSaved) {
    this.canBeSaved_1 = canBeSaved;
    var tmp = this;
    var tmp1_elvis_lhs = restored == null ? null : toMutableMap(restored);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp_0 = LinkedHashMap_init_$Create$();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    tmp.restored_1 = tmp_0;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.valueProviders_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(SaveableStateRegistryImpl).canBeSaved_nnajrq_k$ = function (value) {
    return this.canBeSaved_1(value);
  };
  protoOf(SaveableStateRegistryImpl).consumeRestored_yfjzaw_k$ = function (key) {
    var list = this.restored_1.remove_gppy8k_k$(key);
    var tmp;
    var tmp_0;
    if (!(list == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !list.isEmpty_y1axqb_k$();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      if (list.get_size_woubt6_k$() > 1) {
        var tmp1 = this.restored_1;
        // Inline function 'kotlin.collections.set' call
        var value = list.subList_xle3r2_k$(1, list.get_size_woubt6_k$());
        tmp1.put_4fpzoq_k$(key, value);
      }
      tmp = list.get_c1px32_k$(0);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SaveableStateRegistryImpl).registerProvider_22k33k_k$ = function (key, valueProvider) {
    // Inline function 'kotlin.require' call
    if (!!fastIsBlank(key)) {
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.registerProvider.<anonymous>' call
      var message = 'Registered key is empty or blank';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.valueProviders_1;
    var value = this_0.get_wei43m_k$(key);
    var tmp;
    if (value == null) {
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.registerProvider.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$_0();
      this_0.put_4fpzoq_k$(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    tmp.add_utx5q5_k$(valueProvider);
    return new SaveableStateRegistryImpl$registerProvider$1(this, key, valueProvider);
  };
  protoOf(SaveableStateRegistryImpl).performSave_ohn24i_k$ = function () {
    var map = toMutableMap(this.restored_1);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.valueProviders_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.performSave.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var list = element.get_value_j01efc_k$();
      if (list.get_size_woubt6_k$() === 1) {
        var value = list.get_c1px32_k$(0)();
        if (!(value == null)) {
          // Inline function 'kotlin.check' call
          if (!this.canBeSaved_nnajrq_k$(value)) {
            // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.performSave.<anonymous>.<anonymous>' call
            var message = generateCannotBeSavedErrorMessage(value);
            throw IllegalStateException_init_$Create$(toString(message));
          }
          // Inline function 'kotlin.collections.set' call
          var value_0 = arrayListOf([value]);
          map.put_4fpzoq_k$(key, value_0);
        }
      } else {
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var size = list.get_size_woubt6_k$();
        var list_0 = ArrayList_init_$Create$_1(size);
        // Inline function 'kotlin.repeat' call
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlin.collections.MutableList.<anonymous>' call
            // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.performSave.<anonymous>.<anonymous>' call
            var value_1 = list.get_c1px32_k$(index)();
            if (!(value_1 == null)) {
              // Inline function 'kotlin.check' call
              if (!this.canBeSaved_nnajrq_k$(value_1)) {
                // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.performSave.<anonymous>.<anonymous>.<anonymous>' call
                var message_0 = generateCannotBeSavedErrorMessage(value_1);
                throw IllegalStateException_init_$Create$(toString(message_0));
              }
            }
            list_0.add_utx5q5_k$(value_1);
          }
           while (inductionVariable < size);
        // Inline function 'kotlin.collections.set' call
        map.put_4fpzoq_k$(key, list_0);
      }
    }
    return map;
  };
  function fastIsBlank(_this__u8e3s4) {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    var blank = true;
    var inductionVariable = 0;
    var last = charSequenceLength(_this__u8e3s4);
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!isWhitespace(charSequenceGet(_this__u8e3s4, i))) {
          blank = false;
          break $l$loop;
        }
      }
       while (inductionVariable < last);
    return blank;
  }
  function LocalSaveableStateRegistry$lambda() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return null;
  }
  var properties_initialized_SaveableStateRegistry_kt_4lrdzt;
  function _init_properties_SaveableStateRegistry_kt__lr5zhh() {
    if (!properties_initialized_SaveableStateRegistry_kt_4lrdzt) {
      properties_initialized_SaveableStateRegistry_kt_4lrdzt = true;
      LocalSaveableStateRegistry = staticCompositionLocalOf(LocalSaveableStateRegistry$lambda);
    }
  }
  function get_AutoSaver() {
    _init_properties_Saver_kt__z47nhf();
    return AutoSaver;
  }
  var AutoSaver;
  function Saver() {
  }
  function Saver_0(save, restore) {
    _init_properties_Saver_kt__z47nhf();
    return new Saver$1(save, restore);
  }
  function SaverScope() {
  }
  function autoSaver() {
    _init_properties_Saver_kt__z47nhf();
    var tmp = get_AutoSaver();
    return isInterface(tmp, Saver) ? tmp : THROW_CCE();
  }
  function AutoSaver$lambda($this$Saver, it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function AutoSaver$lambda_0(it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function Saver$1($save, $restore) {
    this.$save_1 = $save;
    this.$restore_1 = $restore;
  }
  protoOf(Saver$1).save_khi2yu_k$ = function (_this__u8e3s4, value) {
    return this.$save_1(_this__u8e3s4, value);
  };
  protoOf(Saver$1).restore_fyjq85_k$ = function (value) {
    return this.$restore_1(value);
  };
  var properties_initialized_Saver_kt_ch40dh;
  function _init_properties_Saver_kt__z47nhf() {
    if (!properties_initialized_Saver_kt_ch40dh) {
      properties_initialized_Saver_kt_ch40dh = true;
      var tmp = AutoSaver$lambda;
      AutoSaver = Saver_0(tmp, AutoSaver$lambda_0);
    }
  }
  //region block: init
  MaxSupportedRadix = 36;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalSaveableStateRegistry;
  _.$_$.b = SaveableStateHolder;
  _.$_$.c = SaveableStateRegistry_0;
  _.$_$.d = SaveableStateRegistry;
  _.$_$.e = Saver_0;
  _.$_$.f = Saver;
  _.$_$.g = listSaver;
  _.$_$.h = rememberSaveableStateHolder;
  _.$_$.i = rememberSaveable;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-runtime-runtime-saveable.js.map
