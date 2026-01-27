(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel'.");
    }
    globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] = factory(typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var protoOf = kotlin_kotlin.$_$.ef;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var initMetadataForClass = kotlin_kotlin.$_$.ce;
  var initMetadataForInterface = kotlin_kotlin.$_$.fe;
  var objectCreate = kotlin_kotlin.$_$.df;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var AutoCloseable = kotlin_kotlin.$_$.qi;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var VOID = kotlin_kotlin.$_$.e;
  var addAll = kotlin_kotlin.$_$.e7;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var Exception = kotlin_kotlin.$_$.yi;
  var Unit_getInstance = kotlin_kotlin.$_$.u5;
  var THROW_CCE = kotlin_kotlin.$_$.ij;
  var isInterface = kotlin_kotlin.$_$.re;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.b1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ViewModelStore, 'ViewModelStore', ViewModelStore);
  initMetadataForInterface(ViewModelStoreOwner, 'ViewModelStoreOwner');
  initMetadataForClass(CloseableCoroutineScope, 'CloseableCoroutineScope', VOID, VOID, [AutoCloseable, CoroutineScope]);
  initMetadataForClass(ViewModelImpl, 'ViewModelImpl', ViewModelImpl_init_$Create$);
  initMetadataForClass(ViewModel, 'ViewModel');
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  //endregion
  function get_VIEW_MODEL_SCOPE_LOCK() {
    _init_properties_ViewModel_kt__8pkmem();
    return VIEW_MODEL_SCOPE_LOCK;
  }
  var VIEW_MODEL_SCOPE_LOCK;
  var properties_initialized_ViewModel_kt_igete4;
  function _init_properties_ViewModel_kt__8pkmem() {
    if (!properties_initialized_ViewModel_kt_igete4) {
      properties_initialized_ViewModel_kt_igete4 = true;
      VIEW_MODEL_SCOPE_LOCK = new SynchronizedObject();
    }
  }
  function _get_map__e6co1h($this) {
    return $this.map_1;
  }
  function ViewModelStore() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.map_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ViewModelStore).put_abao7a_k$ = function (key, viewModel) {
    var oldViewModel = this.map_1.put_4fpzoq_k$(key, viewModel);
    if (oldViewModel == null)
      null;
    else {
      oldViewModel.clear_nvby1k_k$();
    }
  };
  protoOf(ViewModelStore).get_6bo4tg_k$ = function (key) {
    return this.map_1.get_wei43m_k$(key);
  };
  protoOf(ViewModelStore).keys_1yhh0_k$ = function () {
    return HashSet_init_$Create$(this.map_1.get_keys_wop4xp_k$());
  };
  protoOf(ViewModelStore).clear_j9egeb_k$ = function () {
    var tmp0_iterator = this.map_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var vm = tmp0_iterator.next_20eer_k$();
      vm.clear_nvby1k_k$();
    }
    this.map_1.clear_j9egeb_k$();
  };
  function ViewModelStoreOwner() {
  }
  function get_VIEW_MODEL_SCOPE_KEY() {
    return VIEW_MODEL_SCOPE_KEY;
  }
  var VIEW_MODEL_SCOPE_KEY;
  function CloseableCoroutineScope_init_$Init$(coroutineScope, $this) {
    CloseableCoroutineScope.call($this, coroutineScope.get_coroutineContext_115oqo_k$());
    return $this;
  }
  function CloseableCoroutineScope_init_$Create$(coroutineScope) {
    return CloseableCoroutineScope_init_$Init$(coroutineScope, objectCreate(protoOf(CloseableCoroutineScope)));
  }
  function CloseableCoroutineScope(coroutineContext) {
    this.coroutineContext_1 = coroutineContext;
  }
  protoOf(CloseableCoroutineScope).get_coroutineContext_115oqo_k$ = function () {
    return this.coroutineContext_1;
  };
  protoOf(CloseableCoroutineScope).close_yn9xrc_k$ = function () {
    return cancel(this.coroutineContext_1);
  };
  function asCloseable(_this__u8e3s4) {
    return CloseableCoroutineScope_init_$Create$(_this__u8e3s4);
  }
  function synchronized(lock, action) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    return action();
  }
  function _get_lock__d9xa4g($this) {
    return $this.lock_1;
  }
  function _get_keyToCloseables__ab09iu($this) {
    return $this.keyToCloseables_1;
  }
  function _get_closeables__lzfg6u($this) {
    return $this.closeables_1;
  }
  function _set_isCleared__k1vuub($this, _set____db54di) {
    $this.isCleared_1 = _set____db54di;
  }
  function _get_isCleared__lodqq9($this) {
    return $this.isCleared_1;
  }
  function ViewModelImpl_init_$Init$($this) {
    ViewModelImpl.call($this);
    return $this;
  }
  function ViewModelImpl_init_$Create$() {
    return ViewModelImpl_init_$Init$(objectCreate(protoOf(ViewModelImpl)));
  }
  function ViewModelImpl_init_$Init$_0(viewModelScope, $this) {
    ViewModelImpl.call($this);
    $this.addCloseable_9zbqrc_k$('androidx.lifecycle.viewmodel.internal.ViewModelCoroutineScope.JOB_KEY', asCloseable(viewModelScope));
    return $this;
  }
  function ViewModelImpl_init_$Create$_0(viewModelScope) {
    return ViewModelImpl_init_$Init$_0(viewModelScope, objectCreate(protoOf(ViewModelImpl)));
  }
  function ViewModelImpl_init_$Init$_1(closeables, $this) {
    ViewModelImpl.call($this);
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = $this.closeables_1;
    addAll(this_0, closeables);
    return $this;
  }
  function ViewModelImpl_init_$Create$_1(closeables) {
    return ViewModelImpl_init_$Init$_1(closeables, objectCreate(protoOf(ViewModelImpl)));
  }
  function ViewModelImpl_init_$Init$_2(viewModelScope, closeables, $this) {
    ViewModelImpl.call($this);
    $this.addCloseable_9zbqrc_k$('androidx.lifecycle.viewmodel.internal.ViewModelCoroutineScope.JOB_KEY', asCloseable(viewModelScope));
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = $this.closeables_1;
    addAll(this_0, closeables);
    return $this;
  }
  function ViewModelImpl_init_$Create$_2(viewModelScope, closeables) {
    return ViewModelImpl_init_$Init$_2(viewModelScope, closeables, objectCreate(protoOf(ViewModelImpl)));
  }
  function closeWithRuntimeException($this, closeable) {
    try {
      if (closeable == null)
        null;
      else {
        closeable.close_yn9xrc_k$();
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        throw RuntimeException_init_$Create$(e);
      } else {
        throw $p;
      }
    }
  }
  protoOf(ViewModelImpl).clear_j9egeb_k$ = function () {
    if (this.isCleared_1)
      return Unit_getInstance();
    this.isCleared_1 = true;
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.lock_1;
    var tmp0_iterator = this.keyToCloseables_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var closeable = tmp0_iterator.next_20eer_k$();
      closeWithRuntimeException(this, closeable);
    }
    var tmp1_iterator = this.closeables_1.iterator_jk1svi_k$();
    while (tmp1_iterator.hasNext_bitz1p_k$()) {
      var closeable_0 = tmp1_iterator.next_20eer_k$();
      closeWithRuntimeException(this, closeable_0);
    }
    this.closeables_1.clear_j9egeb_k$();
  };
  protoOf(ViewModelImpl).addCloseable_9zbqrc_k$ = function (key, closeable) {
    if (this.isCleared_1) {
      closeWithRuntimeException(this, closeable);
      return Unit_getInstance();
    }
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.lock_1;
    // Inline function 'androidx.lifecycle.viewmodel.internal.ViewModelImpl.addCloseable.<anonymous>' call
    var oldCloseable = this.keyToCloseables_1.put_4fpzoq_k$(key, closeable);
    closeWithRuntimeException(this, oldCloseable);
  };
  protoOf(ViewModelImpl).addCloseable_68h1o0_k$ = function (closeable) {
    if (this.isCleared_1) {
      closeWithRuntimeException(this, closeable);
      return Unit_getInstance();
    }
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.lock_1;
    this.closeables_1.add_utx5q5_k$(closeable);
  };
  protoOf(ViewModelImpl).getCloseable_7djixj_k$ = function (key) {
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.lock_1;
    // Inline function 'androidx.lifecycle.viewmodel.internal.ViewModelImpl.getCloseable.<anonymous>' call
    var tmp = this.keyToCloseables_1.get_wei43m_k$(key);
    return (tmp == null ? true : isInterface(tmp, AutoCloseable)) ? tmp : THROW_CCE();
  };
  function ViewModelImpl() {
    this.lock_1 = new SynchronizedObject();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.keyToCloseables_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.closeables_1 = LinkedHashSet_init_$Create$();
    this.isCleared_1 = false;
  }
  function _get_impl__d88w17($this) {
    return $this.impl_1;
  }
  function ViewModel_init_$Init$($this) {
    ViewModel.call($this);
    $this.impl_1 = ViewModelImpl_init_$Create$();
    return $this;
  }
  function ViewModel_init_$Create$() {
    return ViewModel_init_$Init$(objectCreate(protoOf(ViewModel)));
  }
  function ViewModel_init_$Init$_0(viewModelScope, $this) {
    ViewModel.call($this);
    $this.impl_1 = ViewModelImpl_init_$Create$_0(viewModelScope);
    return $this;
  }
  function ViewModel_init_$Create$_0(viewModelScope) {
    return ViewModel_init_$Init$_0(viewModelScope, objectCreate(protoOf(ViewModel)));
  }
  function ViewModel_init_$Init$_1(closeables, $this) {
    ViewModel.call($this);
    $this.impl_1 = ViewModelImpl_init_$Create$_1(closeables.slice());
    return $this;
  }
  function ViewModel_init_$Create$_1(closeables) {
    return ViewModel_init_$Init$_1(closeables, objectCreate(protoOf(ViewModel)));
  }
  function ViewModel_init_$Init$_2(viewModelScope, closeables, $this) {
    ViewModel.call($this);
    $this.impl_1 = ViewModelImpl_init_$Create$_2(viewModelScope, closeables.slice());
    return $this;
  }
  function ViewModel_init_$Create$_2(viewModelScope, closeables) {
    return ViewModel_init_$Init$_2(viewModelScope, closeables, objectCreate(protoOf(ViewModel)));
  }
  protoOf(ViewModel).onCleared_hwiuwz_k$ = function () {
  };
  protoOf(ViewModel).clear_nvby1k_k$ = function () {
    this.impl_1.clear_j9egeb_k$();
    this.onCleared_hwiuwz_k$();
  };
  protoOf(ViewModel).addCloseable_9zbqrc_k$ = function (key, closeable) {
    this.impl_1.addCloseable_9zbqrc_k$(key, closeable);
  };
  protoOf(ViewModel).addCloseable_68h1o0_k$ = function (closeable) {
    this.impl_1.addCloseable_68h1o0_k$(closeable);
  };
  protoOf(ViewModel).getCloseable_7djixj_k$ = function (key) {
    return this.impl_1.getCloseable_7djixj_k$(key);
  };
  function ViewModel() {
  }
  function SynchronizedObject() {
  }
  function synchronizedImpl(lock, action) {
    return action();
  }
  //region block: init
  VIEW_MODEL_SCOPE_KEY = 'androidx.lifecycle.viewmodel.internal.ViewModelCoroutineScope.JOB_KEY';
  //endregion
  return _;
}));
