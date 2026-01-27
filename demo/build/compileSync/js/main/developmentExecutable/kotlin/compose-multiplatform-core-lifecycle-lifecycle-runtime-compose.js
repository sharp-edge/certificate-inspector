(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'.");
    }
    globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'] = factory(typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var toString = kotlin_kotlin.$_$.if;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_LocalLifecycleOwner() {
    _init_properties_LocalLifecycleOwner_nonAndroid_kt__hguocc();
    return LocalLifecycleOwner;
  }
  var LocalLifecycleOwner;
  function LocalLifecycleOwner$lambda() {
    _init_properties_LocalLifecycleOwner_nonAndroid_kt__hguocc();
    var message = 'CompositionLocal LocalLifecycleOwner not present';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var properties_initialized_LocalLifecycleOwner_nonAndroid_kt_9cr6oy;
  function _init_properties_LocalLifecycleOwner_nonAndroid_kt__hguocc() {
    if (!properties_initialized_LocalLifecycleOwner_nonAndroid_kt_9cr6oy) {
      properties_initialized_LocalLifecycleOwner_nonAndroid_kt_9cr6oy = true;
      LocalLifecycleOwner = staticCompositionLocalOf(LocalLifecycleOwner$lambda);
    }
  }
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-runtime-compose.js.map
