(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-common'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-common'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-common'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-common'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-common'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-common'.");
    }
    globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] = factory(typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ef;
  var initMetadataForCompanion = kotlin_kotlin.$_$.de;
  var THROW_IAE = kotlin_kotlin.$_$.jj;
  var enumEntries = kotlin_kotlin.$_$.ed;
  var Unit_getInstance = kotlin_kotlin.$_$.u5;
  var Enum = kotlin_kotlin.$_$.wi;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var initMetadataForClass = kotlin_kotlin.$_$.ce;
  var VOID = kotlin_kotlin.$_$.e;
  var equals = kotlin_kotlin.$_$.td;
  var FunctionAdapter = kotlin_kotlin.$_$.gd;
  var isInterface = kotlin_kotlin.$_$.re;
  var hashCode = kotlin_kotlin.$_$.be;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var initMetadataForInterface = kotlin_kotlin.$_$.fe;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Event, 'Event', VOID, Enum);
  initMetadataForClass(State, 'State', VOID, Enum);
  initMetadataForInterface(LifecycleObserver, 'LifecycleObserver');
  initMetadataForInterface(LifecycleEventObserver, 'LifecycleEventObserver', VOID, VOID, [LifecycleObserver]);
  initMetadataForClass(sam$androidx_lifecycle_LifecycleEventObserver$0, 'sam$androidx_lifecycle_LifecycleEventObserver$0', VOID, VOID, [LifecycleEventObserver, FunctionAdapter]);
  initMetadataForClass(Lifecycle, 'Lifecycle');
  initMetadataForInterface(LifecycleOwner, 'LifecycleOwner');
  initMetadataForClass(AtomicReference, 'AtomicReference');
  //endregion
  var Event_ON_CREATE_instance;
  var Event_ON_START_instance;
  var Event_ON_RESUME_instance;
  var Event_ON_PAUSE_instance;
  var Event_ON_STOP_instance;
  var Event_ON_DESTROY_instance;
  var Event_ON_ANY_instance;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).downFrom_nwe7y8_k$ = function (state) {
    switch (state.get_ordinal_ip24qg_k$()) {
      case 2:
        return Event_ON_DESTROY_getInstance();
      case 3:
        return Event_ON_STOP_getInstance();
      case 4:
        return Event_ON_PAUSE_getInstance();
      default:
        return null;
    }
  };
  protoOf(Companion).downTo_hdtf5_k$ = function (state) {
    switch (state.get_ordinal_ip24qg_k$()) {
      case 0:
        return Event_ON_DESTROY_getInstance();
      case 2:
        return Event_ON_STOP_getInstance();
      case 3:
        return Event_ON_PAUSE_getInstance();
      default:
        return null;
    }
  };
  protoOf(Companion).upFrom_qzigd5_k$ = function (state) {
    switch (state.get_ordinal_ip24qg_k$()) {
      case 1:
        return Event_ON_CREATE_getInstance();
      case 2:
        return Event_ON_START_getInstance();
      case 3:
        return Event_ON_RESUME_getInstance();
      default:
        return null;
    }
  };
  protoOf(Companion).upTo_nwcq_k$ = function (state) {
    switch (state.get_ordinal_ip24qg_k$()) {
      case 2:
        return Event_ON_CREATE_getInstance();
      case 3:
        return Event_ON_START_getInstance();
      case 4:
        return Event_ON_RESUME_getInstance();
      default:
        return null;
    }
  };
  var Companion_instance;
  function Companion_getInstance() {
    Event_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function values() {
    return [Event_ON_CREATE_getInstance(), Event_ON_START_getInstance(), Event_ON_RESUME_getInstance(), Event_ON_PAUSE_getInstance(), Event_ON_STOP_getInstance(), Event_ON_DESTROY_getInstance(), Event_ON_ANY_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'ON_CREATE':
        return Event_ON_CREATE_getInstance();
      case 'ON_START':
        return Event_ON_START_getInstance();
      case 'ON_RESUME':
        return Event_ON_RESUME_getInstance();
      case 'ON_PAUSE':
        return Event_ON_PAUSE_getInstance();
      case 'ON_STOP':
        return Event_ON_STOP_getInstance();
      case 'ON_DESTROY':
        return Event_ON_DESTROY_getInstance();
      case 'ON_ANY':
        return Event_ON_ANY_getInstance();
      default:
        Event_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Event_entriesInitialized;
  function Event_initEntries() {
    if (Event_entriesInitialized)
      return Unit_getInstance();
    Event_entriesInitialized = true;
    Event_ON_CREATE_instance = new Event('ON_CREATE', 0);
    Event_ON_START_instance = new Event('ON_START', 1);
    Event_ON_RESUME_instance = new Event('ON_RESUME', 2);
    Event_ON_PAUSE_instance = new Event('ON_PAUSE', 3);
    Event_ON_STOP_instance = new Event('ON_STOP', 4);
    Event_ON_DESTROY_instance = new Event('ON_DESTROY', 5);
    Event_ON_ANY_instance = new Event('ON_ANY', 6);
    Companion_getInstance();
  }
  var $ENTRIES;
  var State_DESTROYED_instance;
  var State_INITIALIZED_instance;
  var State_CREATED_instance;
  var State_STARTED_instance;
  var State_RESUMED_instance;
  function values_0() {
    return [State_DESTROYED_getInstance(), State_INITIALIZED_getInstance(), State_CREATED_getInstance(), State_STARTED_getInstance(), State_RESUMED_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'DESTROYED':
        return State_DESTROYED_getInstance();
      case 'INITIALIZED':
        return State_INITIALIZED_getInstance();
      case 'CREATED':
        return State_CREATED_getInstance();
      case 'STARTED':
        return State_STARTED_getInstance();
      case 'RESUMED':
        return State_RESUMED_getInstance();
      default:
        State_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_getInstance();
    State_entriesInitialized = true;
    State_DESTROYED_instance = new State('DESTROYED', 0);
    State_INITIALIZED_instance = new State('INITIALIZED', 1);
    State_CREATED_instance = new State('CREATED', 2);
    State_STARTED_instance = new State('STARTED', 3);
    State_RESUMED_instance = new State('RESUMED', 4);
  }
  var $ENTRIES_0;
  function Event(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Event).get_targetState_kri3mx_k$ = function () {
    switch (this.get_ordinal_ip24qg_k$()) {
      case 0:
      case 4:
        return State_CREATED_getInstance();
      case 1:
      case 3:
        return State_STARTED_getInstance();
      case 2:
        return State_RESUMED_getInstance();
      case 5:
        return State_DESTROYED_getInstance();
      case 6:
        break;
    }
    throw IllegalArgumentException_init_$Create$(this.toString() + ' has no target state');
  };
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(State).isAtLeast_pbz9hc_k$ = function (state) {
    return this.compareTo_30rs7w_k$(state) >= 0;
  };
  function sam$androidx_lifecycle_LifecycleEventObserver$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).onStateChanged_3qr65s_k$ = function (source, event) {
    return this.function_1(source, event);
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, LifecycleEventObserver) : false) {
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
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function Lifecycle$_get_currentStateFlow_$lambda_o0jp3g($mutableStateFlow) {
    return function (_anonymous_parameter_0__qggqh8, event) {
      $mutableStateFlow.set_value_v1vabv_k$(event.get_targetState_kri3mx_k$());
      return Unit_getInstance();
    };
  }
  function Event_ON_CREATE_getInstance() {
    Event_initEntries();
    return Event_ON_CREATE_instance;
  }
  function Event_ON_START_getInstance() {
    Event_initEntries();
    return Event_ON_START_instance;
  }
  function Event_ON_RESUME_getInstance() {
    Event_initEntries();
    return Event_ON_RESUME_instance;
  }
  function Event_ON_PAUSE_getInstance() {
    Event_initEntries();
    return Event_ON_PAUSE_instance;
  }
  function Event_ON_STOP_getInstance() {
    Event_initEntries();
    return Event_ON_STOP_instance;
  }
  function Event_ON_DESTROY_getInstance() {
    Event_initEntries();
    return Event_ON_DESTROY_instance;
  }
  function Event_ON_ANY_getInstance() {
    Event_initEntries();
    return Event_ON_ANY_instance;
  }
  function State_DESTROYED_getInstance() {
    State_initEntries();
    return State_DESTROYED_instance;
  }
  function State_INITIALIZED_getInstance() {
    State_initEntries();
    return State_INITIALIZED_instance;
  }
  function State_CREATED_getInstance() {
    State_initEntries();
    return State_CREATED_instance;
  }
  function State_STARTED_getInstance() {
    State_initEntries();
    return State_STARTED_instance;
  }
  function State_RESUMED_getInstance() {
    State_initEntries();
    return State_RESUMED_instance;
  }
  function Lifecycle() {
    this.internalScopeRef_1 = new AtomicReference(null);
  }
  protoOf(Lifecycle).set_internalScopeRef_a17or0_k$ = function (_set____db54di) {
    this.internalScopeRef_1 = _set____db54di;
  };
  protoOf(Lifecycle).get_internalScopeRef_nrkdol_k$ = function () {
    return this.internalScopeRef_1;
  };
  protoOf(Lifecycle).get_currentStateFlow_8lod67_k$ = function () {
    var mutableStateFlow = MutableStateFlow(this.get_currentState_snihnl_k$());
    var tmp = Lifecycle$_get_currentStateFlow_$lambda_o0jp3g(mutableStateFlow);
    // Inline function 'kotlin.also' call
    var this_0 = new sam$androidx_lifecycle_LifecycleEventObserver$0(tmp);
    // Inline function 'androidx.lifecycle.Lifecycle.<get-currentStateFlow>.<anonymous>' call
    this.addObserver_xhlg3u_k$(this_0);
    return asStateFlow(mutableStateFlow);
  };
  function LifecycleEventObserver() {
  }
  function LifecycleObserver() {
  }
  function LifecycleOwner() {
  }
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function AtomicReference(value) {
    this.delegate_1 = atomic$ref$1(value);
  }
  protoOf(AtomicReference).get_26vq_k$ = function () {
    return this.delegate_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(AtomicReference).compareAndSet_10iwom_k$ = function (expect, newValue) {
    return this.delegate_1.atomicfu$compareAndSet(expect, newValue);
  };
  return _;
}));
