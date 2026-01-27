(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'.");
    }
    globalThis.kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat = factory(typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var ensureNotNull = kotlin_kotlin.$_$.bk;
  var protoOf = kotlin_kotlin.$_$.ef;
  var toString = kotlin_kotlin.$_$.if;
  var initMetadataForClass = kotlin_kotlin.$_$.ce;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(EventListenerHandler, 'EventListenerHandler');
  //endregion
  function clear(_this__u8e3s4) {
    while (_this__u8e3s4.hasChildNodes()) {
      _this__u8e3s4.removeChild(ensureNotNull(_this__u8e3s4.firstChild));
    }
  }
  function EventListener(handler) {
    return new EventListenerHandler(handler);
  }
  function _get_handler__z70553($this) {
    return $this.handler_1;
  }
  function EventListenerHandler(handler) {
    this.handler_1 = handler;
  }
  protoOf(EventListenerHandler).handleEvent_zcjn50_k$ = function (event) {
    this.handler_1(event);
  };
  protoOf(EventListenerHandler).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  protoOf(EventListenerHandler).toString = function () {
    return 'EventListenerHandler(' + toString(this.handler_1) + ')';
  };
  function get(_this__u8e3s4, index) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4[index];
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = clear;
  _.$_$.b = EventListener;
  //endregion
  return _;
}));
