(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './Kotlin-DateTime-library-kotlinx-datetime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./Kotlin-DateTime-library-kotlinx-datetime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'cert-inspector-library'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'cert-inspector-library'.");
    }
    if (typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined') {
      throw new Error("Error loading module 'cert-inspector-library'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime' is loaded prior to 'cert-inspector-library'.");
    }
    globalThis['cert-inspector-library'] = factory(typeof globalThis['cert-inspector-library'] === 'undefined' ? {} : globalThis['cert-inspector-library'], globalThis['kotlin-kotlin-stdlib'], globalThis['Kotlin-DateTime-library-kotlinx-datetime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_datetime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ef;
  var VOID = kotlin_kotlin.$_$.e;
  var toString = kotlin_kotlin.$_$.if;
  var hashCode = kotlin_kotlin.$_$.be;
  var THROW_CCE = kotlin_kotlin.$_$.ij;
  var equals = kotlin_kotlin.$_$.td;
  var initMetadataForClass = kotlin_kotlin.$_$.ce;
  var removePrefix = kotlin_kotlin.$_$.qh;
  var substringBefore = kotlin_kotlin.$_$.yh;
  var CoroutineImpl = kotlin_kotlin.$_$.yc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ic;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.jk;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ee;
  var Unit_getInstance = kotlin_kotlin.$_$.u5;
  var contains = kotlin_kotlin.$_$.ah;
  var Exception = kotlin_kotlin.$_$.yi;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var getStringHashCode = kotlin_kotlin.$_$.ae;
  var System_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.p;
  var toString_0 = kotlin_kotlin.$_$.uk;
  var captureStack = kotlin_kotlin.$_$.kd;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.u1;
  var THROW_IAE = kotlin_kotlin.$_$.jj;
  var enumEntries = kotlin_kotlin.$_$.ed;
  var Enum = kotlin_kotlin.$_$.wi;
  var initMetadataForObject = kotlin_kotlin.$_$.he;
  var initMetadataForInterface = kotlin_kotlin.$_$.fe;
  var listOf = kotlin_kotlin.$_$.ha;
  var Collection = kotlin_kotlin.$_$.e6;
  var isInterface = kotlin_kotlin.$_$.re;
  var emptyList = kotlin_kotlin.$_$.v8;
  var listOf_0 = kotlin_kotlin.$_$.ga;
  var Companion_getInstance = kotlin_kotlin.$_$.l5;
  var DurationUnit_DAYS_getInstance = kotlin_kotlin.$_$.g;
  var toDuration = kotlin_kotlin.$_$.ni;
  var _Duration___get_inWholeDays__impl__7bvpxz = kotlin_kotlin.$_$.z2;
  var Duration__compareTo_impl_pchp0f = kotlin_kotlin.$_$.x2;
  var plus = kotlin_kotlin.$_$.sa;
  var replace = kotlin_kotlin.$_$.th;
  var RegexOption_IGNORE_CASE_getInstance = kotlin_kotlin.$_$.f;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.k1;
  var distinct = kotlin_kotlin.$_$.t8;
  var coerceAtLeast = kotlin_kotlin.$_$.wf;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.w2;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ChainAnalysis, 'ChainAnalysis');
  initMetadataForCoroutine($inspectUrlCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($inspectFileCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(CertInspector, 'CertInspector', CertInspector, VOID, VOID, [1]);
  initMetadataForClass(CertificateAnalysis, 'CertificateAnalysis');
  initMetadataForCoroutine($fetchChainFromUrlCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($parseCertificateFileCOROUTINE$3, CoroutineImpl);
  initMetadataForInterface(CertificateRepository, 'CertificateRepository', VOID, VOID, VOID, [1]);
  initMetadataForClass(CertificateRepositoryImpl, 'CertificateRepositoryImpl', VOID, VOID, [CertificateRepository], [1]);
  initMetadataForClass(Certificate, 'Certificate');
  initMetadataForClass(Subject, 'Subject');
  initMetadataForClass(Validity, 'Validity');
  initMetadataForClass(Issuer, 'Issuer');
  initMetadataForClass(PublicKeyInfo, 'PublicKeyInfo');
  initMetadataForClass(Fingerprints, 'Fingerprints');
  initMetadataForClass(ConnectionInfo, 'ConnectionInfo');
  initMetadataForClass(CertificateChain, 'CertificateChain');
  initMetadataForClass(InspectionResult, 'InspectionResult');
  initMetadataForClass(Success, 'Success', VOID, InspectionResult);
  initMetadataForClass(Error_0, 'Error', VOID, InspectionResult);
  initMetadataForClass(InspectionException, 'InspectionException', VOID, Exception);
  initMetadataForClass(NetworkError, 'NetworkError', VOID, InspectionException);
  initMetadataForClass(InvalidUrl, 'InvalidUrl', VOID, InspectionException);
  initMetadataForClass(InvalidCertificate, 'InvalidCertificate', VOID, InspectionException);
  initMetadataForClass(TimeoutError, 'TimeoutError', VOID, InspectionException);
  initMetadataForClass(UnknownError, 'UnknownError', VOID, InspectionException);
  initMetadataForClass(SecurityStatus, 'SecurityStatus', VOID, Enum);
  initMetadataForClass(SecurityAnalysis, 'SecurityAnalysis');
  initMetadataForClass(SecurityIssue, 'SecurityIssue');
  initMetadataForClass(WeakSignature, 'WeakSignature', VOID, SecurityIssue);
  initMetadataForClass(WeakPublicKey, 'WeakPublicKey', VOID, SecurityIssue);
  initMetadataForClass(ExpiringSoon, 'ExpiringSoon', VOID, SecurityIssue);
  initMetadataForClass(SelfSigned, 'SelfSigned', SelfSigned, SecurityIssue);
  initMetadataForClass(HostnameMismatch, 'HostnameMismatch', VOID, SecurityIssue);
  initMetadataForClass(ChainIncomplete, 'ChainIncomplete', ChainIncomplete, SecurityIssue);
  initMetadataForClass(Severity, 'Severity', VOID, Enum);
  initMetadataForClass(TrustStatus, 'TrustStatus');
  initMetadataForObject(Trusted, 'Trusted', VOID, TrustStatus);
  initMetadataForObject(Untrusted, 'Untrusted', VOID, TrustStatus);
  initMetadataForObject(SelfSigned_0, 'SelfSigned', VOID, TrustStatus);
  initMetadataForObject(Expired, 'Expired', VOID, TrustStatus);
  initMetadataForObject(NotYetValid, 'NotYetValid', VOID, TrustStatus);
  initMetadataForClass(Revoked, 'Revoked', VOID, TrustStatus);
  initMetadataForClass(Unknown, 'Unknown', VOID, TrustStatus);
  initMetadataForClass(AnalyzeSecurityUseCase, 'AnalyzeSecurityUseCase', AnalyzeSecurityUseCase);
  initMetadataForClass(InspectFileUseCase, 'InspectFileUseCase', VOID, VOID, VOID, [1]);
  initMetadataForClass(InspectUrlUseCase, 'InspectUrlUseCase', VOID, VOID, VOID, [1]);
  initMetadataForClass(ValidateTrustUseCase, 'ValidateTrustUseCase', VOID, VOID, VOID, [1]);
  initMetadataForClass(CertificateSource, 'CertificateSource', CertificateSource, VOID, VOID, [1]);
  //endregion
  function ChainAnalysis(chain, trustStatus, security) {
    this.chain_1 = chain;
    this.trustStatus_1 = trustStatus;
    this.security_1 = security;
  }
  protoOf(ChainAnalysis).get_chain_ippjmg_k$ = function () {
    return this.chain_1;
  };
  protoOf(ChainAnalysis).get_trustStatus_u2e0ox_k$ = function () {
    return this.trustStatus_1;
  };
  protoOf(ChainAnalysis).get_security_g3uqrb_k$ = function () {
    return this.security_1;
  };
  protoOf(ChainAnalysis).component1_7eebsc_k$ = function () {
    return this.chain_1;
  };
  protoOf(ChainAnalysis).component2_7eebsb_k$ = function () {
    return this.trustStatus_1;
  };
  protoOf(ChainAnalysis).component3_7eebsa_k$ = function () {
    return this.security_1;
  };
  protoOf(ChainAnalysis).copy_epnx4h_k$ = function (chain, trustStatus, security) {
    return new ChainAnalysis(chain, trustStatus, security);
  };
  protoOf(ChainAnalysis).copy$default_v9qa2a_k$ = function (chain, trustStatus, security, $super) {
    chain = chain === VOID ? this.chain_1 : chain;
    trustStatus = trustStatus === VOID ? this.trustStatus_1 : trustStatus;
    security = security === VOID ? this.security_1 : security;
    return $super === VOID ? this.copy_epnx4h_k$(chain, trustStatus, security) : $super.copy_epnx4h_k$.call(this, chain, trustStatus, security);
  };
  protoOf(ChainAnalysis).toString = function () {
    return 'ChainAnalysis(chain=' + this.chain_1.toString() + ', trustStatus=' + toString(this.trustStatus_1) + ', security=' + this.security_1.toString() + ')';
  };
  protoOf(ChainAnalysis).hashCode = function () {
    var result = this.chain_1.hashCode();
    result = imul(result, 31) + hashCode(this.trustStatus_1) | 0;
    result = imul(result, 31) + this.security_1.hashCode() | 0;
    return result;
  };
  protoOf(ChainAnalysis).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChainAnalysis))
      return false;
    var tmp0_other_with_cast = other instanceof ChainAnalysis ? other : THROW_CCE();
    if (!this.chain_1.equals(tmp0_other_with_cast.chain_1))
      return false;
    if (!equals(this.trustStatus_1, tmp0_other_with_cast.trustStatus_1))
      return false;
    if (!this.security_1.equals(tmp0_other_with_cast.security_1))
      return false;
    return true;
  };
  function _get_source__4cuw5s($this) {
    return $this.source_1;
  }
  function _get_repository__phhg8v($this) {
    return $this.repository_1;
  }
  function _get_inspectUrlUseCase__4zogj9($this) {
    return $this.inspectUrlUseCase_1;
  }
  function _get_inspectFileUseCase__ld3vvg($this) {
    return $this.inspectFileUseCase_1;
  }
  function _get_analyzeSecurityUseCase__lhxj8g($this) {
    return $this.analyzeSecurityUseCase_1;
  }
  function _get_validateTrustUseCase__mq8j6y($this) {
    return $this.validateTrustUseCase_1;
  }
  function extractHostname($this, url) {
    return substringBefore(substringBefore(removePrefix(removePrefix(url, 'https://'), 'http://'), '/'), ':');
  }
  function $inspectUrlCOROUTINE$0(_this__u8e3s4, url, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.url_1 = url;
  }
  protoOf($inspectUrlCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.inspectUrlUseCase_1.invoke_la7gnk_k$(this.url_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.result0__1 = suspendResult;
            var tmp_0 = this.result0__1;
            if (tmp_0 instanceof Success) {
              this.chain2__1 = this.result0__1.get_data_wokkxf_k$();
              this.set_state_rjd8d0_k$(2);
              suspendResult = this._this__u8e3s4__1.validateTrustUseCase_1.invoke_a77txg_k$(this.chain2__1.get_leaf_woprc7_k$(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.result0__1;
              if (tmp_1 instanceof Error_0) {
                this.WHEN_RESULT1__1 = this.result0__1;
                this.set_state_rjd8d0_k$(3);
                continue $sm;
              } else {
                var tmp_2 = this;
                noWhenBranchMatchedException();
              }
            }

            break;
          case 2:
            var trustStatus = suspendResult;
            var analysis = this._this__u8e3s4__1.analyzeSecurityUseCase_1.invoke_46cpr3_k$(this.chain2__1, trustStatus, extractHostname(this._this__u8e3s4__1, this.url_1));
            this.WHEN_RESULT1__1 = new Success(new ChainAnalysis(this.chain2__1, trustStatus, analysis));
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
  function $inspectFileCOROUTINE$1(_this__u8e3s4, fileData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.fileData_1 = fileData;
  }
  protoOf($inspectFileCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.inspectFileUseCase_1.invoke_5dsj7j_k$(this.fileData_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.result0__1 = suspendResult;
            var tmp_0 = this.result0__1;
            if (tmp_0 instanceof Success) {
              this.cert2__1 = this.result0__1.get_data_wokkxf_k$();
              this.set_state_rjd8d0_k$(2);
              suspendResult = this._this__u8e3s4__1.validateTrustUseCase_1.invoke_a77txg_k$(this.cert2__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.result0__1;
              if (tmp_1 instanceof Error_0) {
                this.WHEN_RESULT1__1 = this.result0__1;
                this.set_state_rjd8d0_k$(3);
                continue $sm;
              } else {
                var tmp_2 = this;
                noWhenBranchMatchedException();
              }
            }

            break;
          case 2:
            var trustStatus = suspendResult;
            this.WHEN_RESULT1__1 = new Success(new CertificateAnalysis(this.cert2__1, trustStatus));
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
  function CertInspector() {
    this.source_1 = new CertificateSource();
    this.repository_1 = new CertificateRepositoryImpl(this.source_1);
    this.inspectUrlUseCase_1 = new InspectUrlUseCase(this.repository_1);
    this.inspectFileUseCase_1 = new InspectFileUseCase(this.repository_1);
    this.analyzeSecurityUseCase_1 = new AnalyzeSecurityUseCase();
    this.validateTrustUseCase_1 = new ValidateTrustUseCase(this.repository_1);
  }
  protoOf(CertInspector).inspectUrl_aijouj_k$ = function (url, $completion) {
    var tmp = new $inspectUrlCOROUTINE$0(this, url, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(CertInspector).inspectFile_44tl0a_k$ = function (fileData, $completion) {
    var tmp = new $inspectFileCOROUTINE$1(this, fileData, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function CertificateAnalysis(certificate, trustStatus) {
    this.certificate_1 = certificate;
    this.trustStatus_1 = trustStatus;
  }
  protoOf(CertificateAnalysis).get_certificate_oui3te_k$ = function () {
    return this.certificate_1;
  };
  protoOf(CertificateAnalysis).get_trustStatus_u2e0ox_k$ = function () {
    return this.trustStatus_1;
  };
  protoOf(CertificateAnalysis).component1_7eebsc_k$ = function () {
    return this.certificate_1;
  };
  protoOf(CertificateAnalysis).component2_7eebsb_k$ = function () {
    return this.trustStatus_1;
  };
  protoOf(CertificateAnalysis).copy_un5i6_k$ = function (certificate, trustStatus) {
    return new CertificateAnalysis(certificate, trustStatus);
  };
  protoOf(CertificateAnalysis).copy$default_6s8cmw_k$ = function (certificate, trustStatus, $super) {
    certificate = certificate === VOID ? this.certificate_1 : certificate;
    trustStatus = trustStatus === VOID ? this.trustStatus_1 : trustStatus;
    return $super === VOID ? this.copy_un5i6_k$(certificate, trustStatus) : $super.copy_un5i6_k$.call(this, certificate, trustStatus);
  };
  protoOf(CertificateAnalysis).toString = function () {
    return 'CertificateAnalysis(certificate=' + this.certificate_1.toString() + ', trustStatus=' + toString(this.trustStatus_1) + ')';
  };
  protoOf(CertificateAnalysis).hashCode = function () {
    var result = this.certificate_1.hashCode();
    result = imul(result, 31) + hashCode(this.trustStatus_1) | 0;
    return result;
  };
  protoOf(CertificateAnalysis).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CertificateAnalysis))
      return false;
    var tmp0_other_with_cast = other instanceof CertificateAnalysis ? other : THROW_CCE();
    if (!this.certificate_1.equals(tmp0_other_with_cast.certificate_1))
      return false;
    if (!equals(this.trustStatus_1, tmp0_other_with_cast.trustStatus_1))
      return false;
    return true;
  };
  function _get_source__4cuw5s_0($this) {
    return $this.source_1;
  }
  function mapException($this, e) {
    var tmp;
    var tmp1_safe_receiver = e.message;
    if ((tmp1_safe_receiver == null ? null : contains(tmp1_safe_receiver, 'timeout', true)) === true) {
      var tmp0_elvis_lhs = e.message;
      tmp = new TimeoutError(tmp0_elvis_lhs == null ? 'Connection timeout' : tmp0_elvis_lhs);
    } else {
      var tmp3_safe_receiver = e.message;
      if ((tmp3_safe_receiver == null ? null : contains(tmp3_safe_receiver, 'network', true)) === true) {
        var tmp2_elvis_lhs = e.message;
        tmp = new NetworkError(tmp2_elvis_lhs == null ? 'Network error' : tmp2_elvis_lhs, e);
      } else {
        var tmp5_safe_receiver = e.message;
        if ((tmp5_safe_receiver == null ? null : contains(tmp5_safe_receiver, 'certificate', true)) === true) {
          var tmp4_elvis_lhs = e.message;
          tmp = new InvalidCertificate(tmp4_elvis_lhs == null ? 'Invalid certificate' : tmp4_elvis_lhs);
        } else {
          var tmp6_elvis_lhs = e.message;
          tmp = new UnknownError(tmp6_elvis_lhs == null ? 'Unknown error' : tmp6_elvis_lhs, e);
        }
      }
    }
    return tmp;
  }
  function $fetchChainFromUrlCOROUTINE$2(_this__u8e3s4, url, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.url_1 = url;
  }
  protoOf($fetchChainFromUrlCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.source_1.fetchFromUrl_avnsqq_k$(this.url_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var chain = suspendResult;
            this.TRY_RESULT0__1 = new Success(chain);
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              tmp_1.TRY_RESULT0__1 = new Error_0(mapException(this._this__u8e3s4__1, e));
              this.set_state_rjd8d0_k$(4);
              continue $sm;
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
  function $parseCertificateFileCOROUTINE$3(_this__u8e3s4, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.data_1 = data;
  }
  protoOf($parseCertificateFileCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.source_1.parseFromBytes_i25cr2_k$(this.data_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cert = suspendResult;
            this.TRY_RESULT0__1 = new Success(cert);
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              tmp_1.TRY_RESULT0__1 = new Error_0(mapException(this._this__u8e3s4__1, e));
              this.set_state_rjd8d0_k$(4);
              continue $sm;
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
  function CertificateRepositoryImpl(source) {
    this.source_1 = source;
  }
  protoOf(CertificateRepositoryImpl).fetchChainFromUrl_45mine_k$ = function (url, $completion) {
    var tmp = new $fetchChainFromUrlCOROUTINE$2(this, url, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(CertificateRepositoryImpl).parseCertificateFile_8ozodz_k$ = function (data, $completion) {
    var tmp = new $parseCertificateFileCOROUTINE$3(this, data, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(CertificateRepositoryImpl).validateTrust_ptfn8a_k$ = function (certificate, $completion) {
    return this.source_1.validateTrust_nrvc5z_k$(certificate);
  };
  function Certificate(subject, issuer, validity, serialNumber, signatureAlgorithm, publicKey, subjectAlternativeNames, keyUsage, extendedKeyUsage, fingerprints, raw) {
    this.subject_1 = subject;
    this.issuer_1 = issuer;
    this.validity_1 = validity;
    this.serialNumber_1 = serialNumber;
    this.signatureAlgorithm_1 = signatureAlgorithm;
    this.publicKey_1 = publicKey;
    this.subjectAlternativeNames_1 = subjectAlternativeNames;
    this.keyUsage_1 = keyUsage;
    this.extendedKeyUsage_1 = extendedKeyUsage;
    this.fingerprints_1 = fingerprints;
    this.raw_1 = raw;
  }
  protoOf(Certificate).get_subject_tmjbgd_k$ = function () {
    return this.subject_1;
  };
  protoOf(Certificate).get_issuer_ewqnya_k$ = function () {
    return this.issuer_1;
  };
  protoOf(Certificate).get_validity_fpzo57_k$ = function () {
    return this.validity_1;
  };
  protoOf(Certificate).get_serialNumber_5xg5gm_k$ = function () {
    return this.serialNumber_1;
  };
  protoOf(Certificate).get_signatureAlgorithm_z6p5gg_k$ = function () {
    return this.signatureAlgorithm_1;
  };
  protoOf(Certificate).get_publicKey_wfyw0d_k$ = function () {
    return this.publicKey_1;
  };
  protoOf(Certificate).get_subjectAlternativeNames_5wqmma_k$ = function () {
    return this.subjectAlternativeNames_1;
  };
  protoOf(Certificate).get_keyUsage_no3mwl_k$ = function () {
    return this.keyUsage_1;
  };
  protoOf(Certificate).get_extendedKeyUsage_ejaz4s_k$ = function () {
    return this.extendedKeyUsage_1;
  };
  protoOf(Certificate).get_fingerprints_9fmfdk_k$ = function () {
    return this.fingerprints_1;
  };
  protoOf(Certificate).get_raw_18ix4x_k$ = function () {
    return this.raw_1;
  };
  protoOf(Certificate).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Certificate))
      THROW_CCE();
    return this.serialNumber_1 === other.serialNumber_1 && this.fingerprints_1.equals(other.fingerprints_1);
  };
  protoOf(Certificate).hashCode = function () {
    var result = getStringHashCode(this.serialNumber_1);
    result = imul(31, result) + this.fingerprints_1.hashCode() | 0;
    return result;
  };
  protoOf(Certificate).component1_7eebsc_k$ = function () {
    return this.subject_1;
  };
  protoOf(Certificate).component2_7eebsb_k$ = function () {
    return this.issuer_1;
  };
  protoOf(Certificate).component3_7eebsa_k$ = function () {
    return this.validity_1;
  };
  protoOf(Certificate).component4_7eebs9_k$ = function () {
    return this.serialNumber_1;
  };
  protoOf(Certificate).component5_7eebs8_k$ = function () {
    return this.signatureAlgorithm_1;
  };
  protoOf(Certificate).component6_7eebs7_k$ = function () {
    return this.publicKey_1;
  };
  protoOf(Certificate).component7_7eebs6_k$ = function () {
    return this.subjectAlternativeNames_1;
  };
  protoOf(Certificate).component8_7eebs5_k$ = function () {
    return this.keyUsage_1;
  };
  protoOf(Certificate).component9_7eebs4_k$ = function () {
    return this.extendedKeyUsage_1;
  };
  protoOf(Certificate).component10_gazzfo_k$ = function () {
    return this.fingerprints_1;
  };
  protoOf(Certificate).component11_gazzfn_k$ = function () {
    return this.raw_1;
  };
  protoOf(Certificate).copy_53nrox_k$ = function (subject, issuer, validity, serialNumber, signatureAlgorithm, publicKey, subjectAlternativeNames, keyUsage, extendedKeyUsage, fingerprints, raw) {
    return new Certificate(subject, issuer, validity, serialNumber, signatureAlgorithm, publicKey, subjectAlternativeNames, keyUsage, extendedKeyUsage, fingerprints, raw);
  };
  protoOf(Certificate).copy$default_d18idv_k$ = function (subject, issuer, validity, serialNumber, signatureAlgorithm, publicKey, subjectAlternativeNames, keyUsage, extendedKeyUsage, fingerprints, raw, $super) {
    subject = subject === VOID ? this.subject_1 : subject;
    issuer = issuer === VOID ? this.issuer_1 : issuer;
    validity = validity === VOID ? this.validity_1 : validity;
    serialNumber = serialNumber === VOID ? this.serialNumber_1 : serialNumber;
    signatureAlgorithm = signatureAlgorithm === VOID ? this.signatureAlgorithm_1 : signatureAlgorithm;
    publicKey = publicKey === VOID ? this.publicKey_1 : publicKey;
    subjectAlternativeNames = subjectAlternativeNames === VOID ? this.subjectAlternativeNames_1 : subjectAlternativeNames;
    keyUsage = keyUsage === VOID ? this.keyUsage_1 : keyUsage;
    extendedKeyUsage = extendedKeyUsage === VOID ? this.extendedKeyUsage_1 : extendedKeyUsage;
    fingerprints = fingerprints === VOID ? this.fingerprints_1 : fingerprints;
    raw = raw === VOID ? this.raw_1 : raw;
    return $super === VOID ? this.copy_53nrox_k$(subject, issuer, validity, serialNumber, signatureAlgorithm, publicKey, subjectAlternativeNames, keyUsage, extendedKeyUsage, fingerprints, raw) : $super.copy_53nrox_k$.call(this, subject, issuer, validity, serialNumber, signatureAlgorithm, publicKey, subjectAlternativeNames, keyUsage, extendedKeyUsage, fingerprints, raw);
  };
  protoOf(Certificate).toString = function () {
    return 'Certificate(subject=' + this.subject_1.toString() + ', issuer=' + this.issuer_1.toString() + ', validity=' + this.validity_1.toString() + ', serialNumber=' + this.serialNumber_1 + ', signatureAlgorithm=' + this.signatureAlgorithm_1 + ', publicKey=' + this.publicKey_1.toString() + ', subjectAlternativeNames=' + toString(this.subjectAlternativeNames_1) + ', keyUsage=' + toString(this.keyUsage_1) + ', extendedKeyUsage=' + toString(this.extendedKeyUsage_1) + ', fingerprints=' + this.fingerprints_1.toString() + ', raw=' + toString(this.raw_1) + ')';
  };
  function Subject(commonName, organization, organizationalUnit, locality, state, country, distinguishedName) {
    this.commonName_1 = commonName;
    this.organization_1 = organization;
    this.organizationalUnit_1 = organizationalUnit;
    this.locality_1 = locality;
    this.state_1 = state;
    this.country_1 = country;
    this.distinguishedName_1 = distinguishedName;
  }
  protoOf(Subject).get_commonName_l55k1_k$ = function () {
    return this.commonName_1;
  };
  protoOf(Subject).get_organization_o1gozg_k$ = function () {
    return this.organization_1;
  };
  protoOf(Subject).get_organizationalUnit_h0kpmz_k$ = function () {
    return this.organizationalUnit_1;
  };
  protoOf(Subject).get_locality_d8vro_k$ = function () {
    return this.locality_1;
  };
  protoOf(Subject).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  protoOf(Subject).get_country_h3tl7x_k$ = function () {
    return this.country_1;
  };
  protoOf(Subject).get_distinguishedName_mn8z0a_k$ = function () {
    return this.distinguishedName_1;
  };
  protoOf(Subject).component1_7eebsc_k$ = function () {
    return this.commonName_1;
  };
  protoOf(Subject).component2_7eebsb_k$ = function () {
    return this.organization_1;
  };
  protoOf(Subject).component3_7eebsa_k$ = function () {
    return this.organizationalUnit_1;
  };
  protoOf(Subject).component4_7eebs9_k$ = function () {
    return this.locality_1;
  };
  protoOf(Subject).component5_7eebs8_k$ = function () {
    return this.state_1;
  };
  protoOf(Subject).component6_7eebs7_k$ = function () {
    return this.country_1;
  };
  protoOf(Subject).component7_7eebs6_k$ = function () {
    return this.distinguishedName_1;
  };
  protoOf(Subject).copy_7gzs6w_k$ = function (commonName, organization, organizationalUnit, locality, state, country, distinguishedName) {
    return new Subject(commonName, organization, organizationalUnit, locality, state, country, distinguishedName);
  };
  protoOf(Subject).copy$default_o6mw5_k$ = function (commonName, organization, organizationalUnit, locality, state, country, distinguishedName, $super) {
    commonName = commonName === VOID ? this.commonName_1 : commonName;
    organization = organization === VOID ? this.organization_1 : organization;
    organizationalUnit = organizationalUnit === VOID ? this.organizationalUnit_1 : organizationalUnit;
    locality = locality === VOID ? this.locality_1 : locality;
    state = state === VOID ? this.state_1 : state;
    country = country === VOID ? this.country_1 : country;
    distinguishedName = distinguishedName === VOID ? this.distinguishedName_1 : distinguishedName;
    return $super === VOID ? this.copy_7gzs6w_k$(commonName, organization, organizationalUnit, locality, state, country, distinguishedName) : $super.copy_7gzs6w_k$.call(this, commonName, organization, organizationalUnit, locality, state, country, distinguishedName);
  };
  protoOf(Subject).toString = function () {
    return 'Subject(commonName=' + this.commonName_1 + ', organization=' + this.organization_1 + ', organizationalUnit=' + this.organizationalUnit_1 + ', locality=' + this.locality_1 + ', state=' + this.state_1 + ', country=' + this.country_1 + ', distinguishedName=' + this.distinguishedName_1 + ')';
  };
  protoOf(Subject).hashCode = function () {
    var result = getStringHashCode(this.commonName_1);
    result = imul(result, 31) + (this.organization_1 == null ? 0 : getStringHashCode(this.organization_1)) | 0;
    result = imul(result, 31) + (this.organizationalUnit_1 == null ? 0 : getStringHashCode(this.organizationalUnit_1)) | 0;
    result = imul(result, 31) + (this.locality_1 == null ? 0 : getStringHashCode(this.locality_1)) | 0;
    result = imul(result, 31) + (this.state_1 == null ? 0 : getStringHashCode(this.state_1)) | 0;
    result = imul(result, 31) + (this.country_1 == null ? 0 : getStringHashCode(this.country_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.distinguishedName_1) | 0;
    return result;
  };
  protoOf(Subject).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Subject))
      return false;
    var tmp0_other_with_cast = other instanceof Subject ? other : THROW_CCE();
    if (!(this.commonName_1 === tmp0_other_with_cast.commonName_1))
      return false;
    if (!(this.organization_1 == tmp0_other_with_cast.organization_1))
      return false;
    if (!(this.organizationalUnit_1 == tmp0_other_with_cast.organizationalUnit_1))
      return false;
    if (!(this.locality_1 == tmp0_other_with_cast.locality_1))
      return false;
    if (!(this.state_1 == tmp0_other_with_cast.state_1))
      return false;
    if (!(this.country_1 == tmp0_other_with_cast.country_1))
      return false;
    if (!(this.distinguishedName_1 === tmp0_other_with_cast.distinguishedName_1))
      return false;
    return true;
  };
  function Validity(notBefore, notAfter) {
    this.notBefore_1 = notBefore;
    this.notAfter_1 = notAfter;
  }
  protoOf(Validity).get_notBefore_lhcgax_k$ = function () {
    return this.notBefore_1;
  };
  protoOf(Validity).get_notAfter_671g1a_k$ = function () {
    return this.notAfter_1;
  };
  protoOf(Validity).get_isValid_zh4f7b_k$ = function () {
    var now = System_getInstance().now_2cba_k$();
    return now.compareTo_rgp57f_k$(this.notBefore_1) >= 0 && now.compareTo_rgp57f_k$(this.notAfter_1) <= 0;
  };
  protoOf(Validity).component1_7eebsc_k$ = function () {
    return this.notBefore_1;
  };
  protoOf(Validity).component2_7eebsb_k$ = function () {
    return this.notAfter_1;
  };
  protoOf(Validity).copy_iav42d_k$ = function (notBefore, notAfter) {
    return new Validity(notBefore, notAfter);
  };
  protoOf(Validity).copy$default_p3iuhb_k$ = function (notBefore, notAfter, $super) {
    notBefore = notBefore === VOID ? this.notBefore_1 : notBefore;
    notAfter = notAfter === VOID ? this.notAfter_1 : notAfter;
    return $super === VOID ? this.copy_iav42d_k$(notBefore, notAfter) : $super.copy_iav42d_k$.call(this, notBefore, notAfter);
  };
  protoOf(Validity).toString = function () {
    return 'Validity(notBefore=' + this.notBefore_1.toString() + ', notAfter=' + this.notAfter_1.toString() + ')';
  };
  protoOf(Validity).hashCode = function () {
    var result = this.notBefore_1.hashCode();
    result = imul(result, 31) + this.notAfter_1.hashCode() | 0;
    return result;
  };
  protoOf(Validity).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Validity))
      return false;
    var tmp0_other_with_cast = other instanceof Validity ? other : THROW_CCE();
    if (!this.notBefore_1.equals(tmp0_other_with_cast.notBefore_1))
      return false;
    if (!this.notAfter_1.equals(tmp0_other_with_cast.notAfter_1))
      return false;
    return true;
  };
  function Issuer(commonName, organization, distinguishedName) {
    this.commonName_1 = commonName;
    this.organization_1 = organization;
    this.distinguishedName_1 = distinguishedName;
  }
  protoOf(Issuer).get_commonName_l55k1_k$ = function () {
    return this.commonName_1;
  };
  protoOf(Issuer).get_organization_o1gozg_k$ = function () {
    return this.organization_1;
  };
  protoOf(Issuer).get_distinguishedName_mn8z0a_k$ = function () {
    return this.distinguishedName_1;
  };
  protoOf(Issuer).component1_7eebsc_k$ = function () {
    return this.commonName_1;
  };
  protoOf(Issuer).component2_7eebsb_k$ = function () {
    return this.organization_1;
  };
  protoOf(Issuer).component3_7eebsa_k$ = function () {
    return this.distinguishedName_1;
  };
  protoOf(Issuer).copy_n3k7oc_k$ = function (commonName, organization, distinguishedName) {
    return new Issuer(commonName, organization, distinguishedName);
  };
  protoOf(Issuer).copy$default_yhdg6g_k$ = function (commonName, organization, distinguishedName, $super) {
    commonName = commonName === VOID ? this.commonName_1 : commonName;
    organization = organization === VOID ? this.organization_1 : organization;
    distinguishedName = distinguishedName === VOID ? this.distinguishedName_1 : distinguishedName;
    return $super === VOID ? this.copy_n3k7oc_k$(commonName, organization, distinguishedName) : $super.copy_n3k7oc_k$.call(this, commonName, organization, distinguishedName);
  };
  protoOf(Issuer).toString = function () {
    return 'Issuer(commonName=' + this.commonName_1 + ', organization=' + this.organization_1 + ', distinguishedName=' + this.distinguishedName_1 + ')';
  };
  protoOf(Issuer).hashCode = function () {
    var result = getStringHashCode(this.commonName_1);
    result = imul(result, 31) + (this.organization_1 == null ? 0 : getStringHashCode(this.organization_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.distinguishedName_1) | 0;
    return result;
  };
  protoOf(Issuer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Issuer))
      return false;
    var tmp0_other_with_cast = other instanceof Issuer ? other : THROW_CCE();
    if (!(this.commonName_1 === tmp0_other_with_cast.commonName_1))
      return false;
    if (!(this.organization_1 == tmp0_other_with_cast.organization_1))
      return false;
    if (!(this.distinguishedName_1 === tmp0_other_with_cast.distinguishedName_1))
      return false;
    return true;
  };
  function PublicKeyInfo(algorithm, size, encoded) {
    this.algorithm_1 = algorithm;
    this.size_1 = size;
    this.encoded_1 = encoded;
  }
  protoOf(PublicKeyInfo).get_algorithm_c8rufa_k$ = function () {
    return this.algorithm_1;
  };
  protoOf(PublicKeyInfo).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(PublicKeyInfo).get_encoded_pbfil7_k$ = function () {
    return this.encoded_1;
  };
  protoOf(PublicKeyInfo).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof PublicKeyInfo))
      THROW_CCE();
    return this.algorithm_1 === other.algorithm_1 && this.size_1 === other.size_1;
  };
  protoOf(PublicKeyInfo).hashCode = function () {
    var result = getStringHashCode(this.algorithm_1);
    result = imul(31, result) + this.size_1 | 0;
    return result;
  };
  protoOf(PublicKeyInfo).component1_7eebsc_k$ = function () {
    return this.algorithm_1;
  };
  protoOf(PublicKeyInfo).component2_7eebsb_k$ = function () {
    return this.size_1;
  };
  protoOf(PublicKeyInfo).component3_7eebsa_k$ = function () {
    return this.encoded_1;
  };
  protoOf(PublicKeyInfo).copy_b7qz0t_k$ = function (algorithm, size, encoded) {
    return new PublicKeyInfo(algorithm, size, encoded);
  };
  protoOf(PublicKeyInfo).copy$default_4a56ui_k$ = function (algorithm, size, encoded, $super) {
    algorithm = algorithm === VOID ? this.algorithm_1 : algorithm;
    size = size === VOID ? this.size_1 : size;
    encoded = encoded === VOID ? this.encoded_1 : encoded;
    return $super === VOID ? this.copy_b7qz0t_k$(algorithm, size, encoded) : $super.copy_b7qz0t_k$.call(this, algorithm, size, encoded);
  };
  protoOf(PublicKeyInfo).toString = function () {
    return 'PublicKeyInfo(algorithm=' + this.algorithm_1 + ', size=' + this.size_1 + ', encoded=' + toString(this.encoded_1) + ')';
  };
  function Fingerprints(sha256, sha1, md5) {
    this.sha256__1 = sha256;
    this.sha1__1 = sha1;
    this.md5__1 = md5;
  }
  protoOf(Fingerprints).get_sha256_jgs8q8_k$ = function () {
    return this.sha256__1;
  };
  protoOf(Fingerprints).get_sha1_wouafi_k$ = function () {
    return this.sha1__1;
  };
  protoOf(Fingerprints).get_md5_18j0tn_k$ = function () {
    return this.md5__1;
  };
  protoOf(Fingerprints).component1_7eebsc_k$ = function () {
    return this.sha256__1;
  };
  protoOf(Fingerprints).component2_7eebsb_k$ = function () {
    return this.sha1__1;
  };
  protoOf(Fingerprints).component3_7eebsa_k$ = function () {
    return this.md5__1;
  };
  protoOf(Fingerprints).copy_nc7k0r_k$ = function (sha256, sha1, md5) {
    return new Fingerprints(sha256, sha1, md5);
  };
  protoOf(Fingerprints).copy$default_yighwx_k$ = function (sha256, sha1, md5, $super) {
    sha256 = sha256 === VOID ? this.sha256__1 : sha256;
    sha1 = sha1 === VOID ? this.sha1__1 : sha1;
    md5 = md5 === VOID ? this.md5__1 : md5;
    return $super === VOID ? this.copy_nc7k0r_k$(sha256, sha1, md5) : $super.copy_nc7k0r_k$.call(this, sha256, sha1, md5);
  };
  protoOf(Fingerprints).toString = function () {
    return 'Fingerprints(sha256=' + this.sha256__1 + ', sha1=' + this.sha1__1 + ', md5=' + this.md5__1 + ')';
  };
  protoOf(Fingerprints).hashCode = function () {
    var result = getStringHashCode(this.sha256__1);
    result = imul(result, 31) + getStringHashCode(this.sha1__1) | 0;
    result = imul(result, 31) + getStringHashCode(this.md5__1) | 0;
    return result;
  };
  protoOf(Fingerprints).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Fingerprints))
      return false;
    var tmp0_other_with_cast = other instanceof Fingerprints ? other : THROW_CCE();
    if (!(this.sha256__1 === tmp0_other_with_cast.sha256__1))
      return false;
    if (!(this.sha1__1 === tmp0_other_with_cast.sha1__1))
      return false;
    if (!(this.md5__1 === tmp0_other_with_cast.md5__1))
      return false;
    return true;
  };
  function ConnectionInfo(tlsVersion, cipherSuite, protocol) {
    this.tlsVersion_1 = tlsVersion;
    this.cipherSuite_1 = cipherSuite;
    this.protocol_1 = protocol;
  }
  protoOf(ConnectionInfo).get_tlsVersion_6lgnhi_k$ = function () {
    return this.tlsVersion_1;
  };
  protoOf(ConnectionInfo).get_cipherSuite_m50trw_k$ = function () {
    return this.cipherSuite_1;
  };
  protoOf(ConnectionInfo).get_protocol_mv93kx_k$ = function () {
    return this.protocol_1;
  };
  protoOf(ConnectionInfo).component1_7eebsc_k$ = function () {
    return this.tlsVersion_1;
  };
  protoOf(ConnectionInfo).component2_7eebsb_k$ = function () {
    return this.cipherSuite_1;
  };
  protoOf(ConnectionInfo).component3_7eebsa_k$ = function () {
    return this.protocol_1;
  };
  protoOf(ConnectionInfo).copy_nc7k0r_k$ = function (tlsVersion, cipherSuite, protocol) {
    return new ConnectionInfo(tlsVersion, cipherSuite, protocol);
  };
  protoOf(ConnectionInfo).copy$default_skyqb6_k$ = function (tlsVersion, cipherSuite, protocol, $super) {
    tlsVersion = tlsVersion === VOID ? this.tlsVersion_1 : tlsVersion;
    cipherSuite = cipherSuite === VOID ? this.cipherSuite_1 : cipherSuite;
    protocol = protocol === VOID ? this.protocol_1 : protocol;
    return $super === VOID ? this.copy_nc7k0r_k$(tlsVersion, cipherSuite, protocol) : $super.copy_nc7k0r_k$.call(this, tlsVersion, cipherSuite, protocol);
  };
  protoOf(ConnectionInfo).toString = function () {
    return 'ConnectionInfo(tlsVersion=' + this.tlsVersion_1 + ', cipherSuite=' + this.cipherSuite_1 + ', protocol=' + this.protocol_1 + ')';
  };
  protoOf(ConnectionInfo).hashCode = function () {
    var result = getStringHashCode(this.tlsVersion_1);
    result = imul(result, 31) + getStringHashCode(this.cipherSuite_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.protocol_1) | 0;
    return result;
  };
  protoOf(ConnectionInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ConnectionInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ConnectionInfo ? other : THROW_CCE();
    if (!(this.tlsVersion_1 === tmp0_other_with_cast.tlsVersion_1))
      return false;
    if (!(this.cipherSuite_1 === tmp0_other_with_cast.cipherSuite_1))
      return false;
    if (!(this.protocol_1 === tmp0_other_with_cast.protocol_1))
      return false;
    return true;
  };
  function CertificateChain(leaf, intermediates, root, connectionInfo) {
    this.leaf_1 = leaf;
    this.intermediates_1 = intermediates;
    this.root_1 = root;
    this.connectionInfo_1 = connectionInfo;
  }
  protoOf(CertificateChain).get_leaf_woprc7_k$ = function () {
    return this.leaf_1;
  };
  protoOf(CertificateChain).get_intermediates_fsj34f_k$ = function () {
    return this.intermediates_1;
  };
  protoOf(CertificateChain).get_root_wott0r_k$ = function () {
    return this.root_1;
  };
  protoOf(CertificateChain).get_connectionInfo_go3djf_k$ = function () {
    return this.connectionInfo_1;
  };
  protoOf(CertificateChain).get_all_18j9hk_k$ = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'com.sarmad.certinspector.domain.model.CertificateChain.<get-all>.<anonymous>' call
    this_0.add_utx5q5_k$(this.leaf_1);
    this_0.addAll_4lagoh_k$(this.intermediates_1);
    var tmp0_safe_receiver = this.root_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.sarmad.certinspector.domain.model.CertificateChain.<get-all>.<anonymous>.<anonymous>' call
      this_0.add_utx5q5_k$(tmp0_safe_receiver);
    }
    return this_0.build_nmwvly_k$();
  };
  protoOf(CertificateChain).get_depth_iq7qmy_k$ = function () {
    return this.get_all_18j9hk_k$().get_size_woubt6_k$();
  };
  protoOf(CertificateChain).component1_7eebsc_k$ = function () {
    return this.leaf_1;
  };
  protoOf(CertificateChain).component2_7eebsb_k$ = function () {
    return this.intermediates_1;
  };
  protoOf(CertificateChain).component3_7eebsa_k$ = function () {
    return this.root_1;
  };
  protoOf(CertificateChain).component4_7eebs9_k$ = function () {
    return this.connectionInfo_1;
  };
  protoOf(CertificateChain).copy_jmkfcx_k$ = function (leaf, intermediates, root, connectionInfo) {
    return new CertificateChain(leaf, intermediates, root, connectionInfo);
  };
  protoOf(CertificateChain).copy$default_fblzt3_k$ = function (leaf, intermediates, root, connectionInfo, $super) {
    leaf = leaf === VOID ? this.leaf_1 : leaf;
    intermediates = intermediates === VOID ? this.intermediates_1 : intermediates;
    root = root === VOID ? this.root_1 : root;
    connectionInfo = connectionInfo === VOID ? this.connectionInfo_1 : connectionInfo;
    return $super === VOID ? this.copy_jmkfcx_k$(leaf, intermediates, root, connectionInfo) : $super.copy_jmkfcx_k$.call(this, leaf, intermediates, root, connectionInfo);
  };
  protoOf(CertificateChain).toString = function () {
    return 'CertificateChain(leaf=' + this.leaf_1.toString() + ', intermediates=' + toString(this.intermediates_1) + ', root=' + toString_0(this.root_1) + ', connectionInfo=' + this.connectionInfo_1.toString() + ')';
  };
  protoOf(CertificateChain).hashCode = function () {
    var result = this.leaf_1.hashCode();
    result = imul(result, 31) + hashCode(this.intermediates_1) | 0;
    result = imul(result, 31) + (this.root_1 == null ? 0 : this.root_1.hashCode()) | 0;
    result = imul(result, 31) + this.connectionInfo_1.hashCode() | 0;
    return result;
  };
  protoOf(CertificateChain).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CertificateChain))
      return false;
    var tmp0_other_with_cast = other instanceof CertificateChain ? other : THROW_CCE();
    if (!this.leaf_1.equals(tmp0_other_with_cast.leaf_1))
      return false;
    if (!equals(this.intermediates_1, tmp0_other_with_cast.intermediates_1))
      return false;
    if (!equals(this.root_1, tmp0_other_with_cast.root_1))
      return false;
    if (!this.connectionInfo_1.equals(tmp0_other_with_cast.connectionInfo_1))
      return false;
    return true;
  };
  function Success(data) {
    InspectionResult.call(this);
    this.data_1 = data;
  }
  protoOf(Success).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(Success).component1_7eebsc_k$ = function () {
    return this.data_1;
  };
  protoOf(Success).copy_62qimy_k$ = function (data) {
    return new Success(data);
  };
  protoOf(Success).copy$default_kq9hi9_k$ = function (data, $super) {
    data = data === VOID ? this.data_1 : data;
    return $super === VOID ? this.copy_62qimy_k$(data) : $super.copy_62qimy_k$.call(this, data);
  };
  protoOf(Success).toString = function () {
    return 'Success(data=' + toString_0(this.data_1) + ')';
  };
  protoOf(Success).hashCode = function () {
    return this.data_1 == null ? 0 : hashCode(this.data_1);
  };
  protoOf(Success).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Success))
      return false;
    var tmp0_other_with_cast = other instanceof Success ? other : THROW_CCE();
    if (!equals(this.data_1, tmp0_other_with_cast.data_1))
      return false;
    return true;
  };
  function Error_0(exception) {
    InspectionResult.call(this);
    this.exception_1 = exception;
  }
  protoOf(Error_0).get_exception_x0n6w6_k$ = function () {
    return this.exception_1;
  };
  protoOf(Error_0).component1_7eebsc_k$ = function () {
    return this.exception_1;
  };
  protoOf(Error_0).copy_pnsa1g_k$ = function (exception) {
    return new Error_0(exception);
  };
  protoOf(Error_0).copy$default_cnqjk6_k$ = function (exception, $super) {
    exception = exception === VOID ? this.exception_1 : exception;
    return $super === VOID ? this.copy_pnsa1g_k$(exception) : $super.copy_pnsa1g_k$.call(this, exception);
  };
  protoOf(Error_0).toString = function () {
    return 'Error(exception=' + this.exception_1.toString() + ')';
  };
  protoOf(Error_0).hashCode = function () {
    return hashCode(this.exception_1);
  };
  protoOf(Error_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Error_0))
      return false;
    var tmp0_other_with_cast = other instanceof Error_0 ? other : THROW_CCE();
    if (!equals(this.exception_1, tmp0_other_with_cast.exception_1))
      return false;
    return true;
  };
  function InspectionResult() {
  }
  function NetworkError(message, cause) {
    cause = cause === VOID ? null : cause;
    InspectionException.call(this, message, cause);
    captureStack(this, NetworkError);
  }
  function InvalidUrl(url) {
    InspectionException.call(this, 'Invalid URL: ' + url);
    captureStack(this, InvalidUrl);
  }
  function InvalidCertificate(message) {
    InspectionException.call(this, message);
    captureStack(this, InvalidCertificate);
  }
  function TimeoutError(message) {
    InspectionException.call(this, message);
    captureStack(this, TimeoutError);
  }
  function UnknownError(message, cause) {
    cause = cause === VOID ? null : cause;
    InspectionException.call(this, message, cause);
    captureStack(this, UnknownError);
  }
  function InspectionException(message, cause) {
    cause = cause === VOID ? null : cause;
    Exception_init_$Init$(message, cause, this);
    captureStack(this, InspectionException);
  }
  var SecurityStatus_SECURE_instance;
  var SecurityStatus_WARNING_instance;
  var SecurityStatus_CRITICAL_instance;
  function values() {
    return [SecurityStatus_SECURE_getInstance(), SecurityStatus_WARNING_getInstance(), SecurityStatus_CRITICAL_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'SECURE':
        return SecurityStatus_SECURE_getInstance();
      case 'WARNING':
        return SecurityStatus_WARNING_getInstance();
      case 'CRITICAL':
        return SecurityStatus_CRITICAL_getInstance();
      default:
        SecurityStatus_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var SecurityStatus_entriesInitialized;
  function SecurityStatus_initEntries() {
    if (SecurityStatus_entriesInitialized)
      return Unit_getInstance();
    SecurityStatus_entriesInitialized = true;
    SecurityStatus_SECURE_instance = new SecurityStatus('SECURE', 0);
    SecurityStatus_WARNING_instance = new SecurityStatus('WARNING', 1);
    SecurityStatus_CRITICAL_instance = new SecurityStatus('CRITICAL', 2);
  }
  var $ENTRIES;
  function SecurityStatus(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SecurityAnalysis(overallStatus, issues, recommendations, score) {
    this.overallStatus_1 = overallStatus;
    this.issues_1 = issues;
    this.recommendations_1 = recommendations;
    this.score_1 = score;
  }
  protoOf(SecurityAnalysis).get_overallStatus_qhxwty_k$ = function () {
    return this.overallStatus_1;
  };
  protoOf(SecurityAnalysis).get_issues_ewqnyb_k$ = function () {
    return this.issues_1;
  };
  protoOf(SecurityAnalysis).get_recommendations_9l4ir5_k$ = function () {
    return this.recommendations_1;
  };
  protoOf(SecurityAnalysis).get_score_iyfcrt_k$ = function () {
    return this.score_1;
  };
  protoOf(SecurityAnalysis).component1_7eebsc_k$ = function () {
    return this.overallStatus_1;
  };
  protoOf(SecurityAnalysis).component2_7eebsb_k$ = function () {
    return this.issues_1;
  };
  protoOf(SecurityAnalysis).component3_7eebsa_k$ = function () {
    return this.recommendations_1;
  };
  protoOf(SecurityAnalysis).component4_7eebs9_k$ = function () {
    return this.score_1;
  };
  protoOf(SecurityAnalysis).copy_9cwtnu_k$ = function (overallStatus, issues, recommendations, score) {
    return new SecurityAnalysis(overallStatus, issues, recommendations, score);
  };
  protoOf(SecurityAnalysis).copy$default_8hugg8_k$ = function (overallStatus, issues, recommendations, score, $super) {
    overallStatus = overallStatus === VOID ? this.overallStatus_1 : overallStatus;
    issues = issues === VOID ? this.issues_1 : issues;
    recommendations = recommendations === VOID ? this.recommendations_1 : recommendations;
    score = score === VOID ? this.score_1 : score;
    return $super === VOID ? this.copy_9cwtnu_k$(overallStatus, issues, recommendations, score) : $super.copy_9cwtnu_k$.call(this, overallStatus, issues, recommendations, score);
  };
  protoOf(SecurityAnalysis).toString = function () {
    return 'SecurityAnalysis(overallStatus=' + this.overallStatus_1.toString() + ', issues=' + toString(this.issues_1) + ', recommendations=' + toString(this.recommendations_1) + ', score=' + this.score_1 + ')';
  };
  protoOf(SecurityAnalysis).hashCode = function () {
    var result = this.overallStatus_1.hashCode();
    result = imul(result, 31) + hashCode(this.issues_1) | 0;
    result = imul(result, 31) + hashCode(this.recommendations_1) | 0;
    result = imul(result, 31) + this.score_1 | 0;
    return result;
  };
  protoOf(SecurityAnalysis).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SecurityAnalysis))
      return false;
    var tmp0_other_with_cast = other instanceof SecurityAnalysis ? other : THROW_CCE();
    if (!this.overallStatus_1.equals(tmp0_other_with_cast.overallStatus_1))
      return false;
    if (!equals(this.issues_1, tmp0_other_with_cast.issues_1))
      return false;
    if (!equals(this.recommendations_1, tmp0_other_with_cast.recommendations_1))
      return false;
    if (!(this.score_1 === tmp0_other_with_cast.score_1))
      return false;
    return true;
  };
  function WeakSignature(algorithm, severity) {
    severity = severity === VOID ? Severity_HIGH_getInstance() : severity;
    SecurityIssue.call(this);
    this.algorithm_1 = algorithm;
    this.severity_1 = severity;
    this.description_1 = 'Weak signature algorithm: ' + this.algorithm_1;
  }
  protoOf(WeakSignature).get_algorithm_c8rufa_k$ = function () {
    return this.algorithm_1;
  };
  protoOf(WeakSignature).get_severity_7csmre_k$ = function () {
    return this.severity_1;
  };
  protoOf(WeakSignature).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(WeakSignature).component1_7eebsc_k$ = function () {
    return this.algorithm_1;
  };
  protoOf(WeakSignature).component2_7eebsb_k$ = function () {
    return this.severity_1;
  };
  protoOf(WeakSignature).copy_lwnf95_k$ = function (algorithm, severity) {
    return new WeakSignature(algorithm, severity);
  };
  protoOf(WeakSignature).copy$default_euyita_k$ = function (algorithm, severity, $super) {
    algorithm = algorithm === VOID ? this.algorithm_1 : algorithm;
    severity = severity === VOID ? this.severity_1 : severity;
    return $super === VOID ? this.copy_lwnf95_k$(algorithm, severity) : $super.copy_lwnf95_k$.call(this, algorithm, severity);
  };
  protoOf(WeakSignature).toString = function () {
    return 'WeakSignature(algorithm=' + this.algorithm_1 + ', severity=' + this.severity_1.toString() + ')';
  };
  protoOf(WeakSignature).hashCode = function () {
    var result = getStringHashCode(this.algorithm_1);
    result = imul(result, 31) + this.severity_1.hashCode() | 0;
    return result;
  };
  protoOf(WeakSignature).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WeakSignature))
      return false;
    var tmp0_other_with_cast = other instanceof WeakSignature ? other : THROW_CCE();
    if (!(this.algorithm_1 === tmp0_other_with_cast.algorithm_1))
      return false;
    if (!this.severity_1.equals(tmp0_other_with_cast.severity_1))
      return false;
    return true;
  };
  function WeakPublicKey(algorithm, size, severity) {
    severity = severity === VOID ? Severity_HIGH_getInstance() : severity;
    SecurityIssue.call(this);
    this.algorithm_1 = algorithm;
    this.size_1 = size;
    this.severity_1 = severity;
    this.description_1 = this.algorithm_1 + ' key size ' + this.size_1 + ' bits is weak';
  }
  protoOf(WeakPublicKey).get_algorithm_c8rufa_k$ = function () {
    return this.algorithm_1;
  };
  protoOf(WeakPublicKey).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(WeakPublicKey).get_severity_7csmre_k$ = function () {
    return this.severity_1;
  };
  protoOf(WeakPublicKey).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(WeakPublicKey).component1_7eebsc_k$ = function () {
    return this.algorithm_1;
  };
  protoOf(WeakPublicKey).component2_7eebsb_k$ = function () {
    return this.size_1;
  };
  protoOf(WeakPublicKey).component3_7eebsa_k$ = function () {
    return this.severity_1;
  };
  protoOf(WeakPublicKey).copy_9hhinb_k$ = function (algorithm, size, severity) {
    return new WeakPublicKey(algorithm, size, severity);
  };
  protoOf(WeakPublicKey).copy$default_or535z_k$ = function (algorithm, size, severity, $super) {
    algorithm = algorithm === VOID ? this.algorithm_1 : algorithm;
    size = size === VOID ? this.size_1 : size;
    severity = severity === VOID ? this.severity_1 : severity;
    return $super === VOID ? this.copy_9hhinb_k$(algorithm, size, severity) : $super.copy_9hhinb_k$.call(this, algorithm, size, severity);
  };
  protoOf(WeakPublicKey).toString = function () {
    return 'WeakPublicKey(algorithm=' + this.algorithm_1 + ', size=' + this.size_1 + ', severity=' + this.severity_1.toString() + ')';
  };
  protoOf(WeakPublicKey).hashCode = function () {
    var result = getStringHashCode(this.algorithm_1);
    result = imul(result, 31) + this.size_1 | 0;
    result = imul(result, 31) + this.severity_1.hashCode() | 0;
    return result;
  };
  protoOf(WeakPublicKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WeakPublicKey))
      return false;
    var tmp0_other_with_cast = other instanceof WeakPublicKey ? other : THROW_CCE();
    if (!(this.algorithm_1 === tmp0_other_with_cast.algorithm_1))
      return false;
    if (!(this.size_1 === tmp0_other_with_cast.size_1))
      return false;
    if (!this.severity_1.equals(tmp0_other_with_cast.severity_1))
      return false;
    return true;
  };
  function ExpiringSoon(expiresAt, daysRemaining, severity) {
    severity = severity === VOID ? Severity_MEDIUM_getInstance() : severity;
    SecurityIssue.call(this);
    this.expiresAt_1 = expiresAt;
    this.daysRemaining_1 = daysRemaining;
    this.severity_1 = severity;
    this.description_1 = 'Certificate expires in ' + this.daysRemaining_1 + ' days';
  }
  protoOf(ExpiringSoon).get_expiresAt_cnhe5a_k$ = function () {
    return this.expiresAt_1;
  };
  protoOf(ExpiringSoon).get_daysRemaining_aomzm2_k$ = function () {
    return this.daysRemaining_1;
  };
  protoOf(ExpiringSoon).get_severity_7csmre_k$ = function () {
    return this.severity_1;
  };
  protoOf(ExpiringSoon).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(ExpiringSoon).component1_7eebsc_k$ = function () {
    return this.expiresAt_1;
  };
  protoOf(ExpiringSoon).component2_7eebsb_k$ = function () {
    return this.daysRemaining_1;
  };
  protoOf(ExpiringSoon).component3_7eebsa_k$ = function () {
    return this.severity_1;
  };
  protoOf(ExpiringSoon).copy_pyamtg_k$ = function (expiresAt, daysRemaining, severity) {
    return new ExpiringSoon(expiresAt, daysRemaining, severity);
  };
  protoOf(ExpiringSoon).copy$default_qmtagh_k$ = function (expiresAt, daysRemaining, severity, $super) {
    expiresAt = expiresAt === VOID ? this.expiresAt_1 : expiresAt;
    daysRemaining = daysRemaining === VOID ? this.daysRemaining_1 : daysRemaining;
    severity = severity === VOID ? this.severity_1 : severity;
    return $super === VOID ? this.copy_pyamtg_k$(expiresAt, daysRemaining, severity) : $super.copy_pyamtg_k$.call(this, expiresAt, daysRemaining, severity);
  };
  protoOf(ExpiringSoon).toString = function () {
    return 'ExpiringSoon(expiresAt=' + this.expiresAt_1.toString() + ', daysRemaining=' + this.daysRemaining_1 + ', severity=' + this.severity_1.toString() + ')';
  };
  protoOf(ExpiringSoon).hashCode = function () {
    var result = this.expiresAt_1.hashCode();
    result = imul(result, 31) + this.daysRemaining_1 | 0;
    result = imul(result, 31) + this.severity_1.hashCode() | 0;
    return result;
  };
  protoOf(ExpiringSoon).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ExpiringSoon))
      return false;
    var tmp0_other_with_cast = other instanceof ExpiringSoon ? other : THROW_CCE();
    if (!this.expiresAt_1.equals(tmp0_other_with_cast.expiresAt_1))
      return false;
    if (!(this.daysRemaining_1 === tmp0_other_with_cast.daysRemaining_1))
      return false;
    if (!this.severity_1.equals(tmp0_other_with_cast.severity_1))
      return false;
    return true;
  };
  function SelfSigned(severity) {
    severity = severity === VOID ? Severity_MEDIUM_getInstance() : severity;
    SecurityIssue.call(this);
    this.severity_1 = severity;
    this.description_1 = 'Certificate is self-signed';
  }
  protoOf(SelfSigned).get_severity_7csmre_k$ = function () {
    return this.severity_1;
  };
  protoOf(SelfSigned).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(SelfSigned).component1_7eebsc_k$ = function () {
    return this.severity_1;
  };
  protoOf(SelfSigned).copy_31p5rr_k$ = function (severity) {
    return new SelfSigned(severity);
  };
  protoOf(SelfSigned).copy$default_ymq5od_k$ = function (severity, $super) {
    severity = severity === VOID ? this.severity_1 : severity;
    return $super === VOID ? this.copy_31p5rr_k$(severity) : $super.copy_31p5rr_k$.call(this, severity);
  };
  protoOf(SelfSigned).toString = function () {
    return 'SelfSigned(severity=' + this.severity_1.toString() + ')';
  };
  protoOf(SelfSigned).hashCode = function () {
    return this.severity_1.hashCode();
  };
  protoOf(SelfSigned).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SelfSigned))
      return false;
    var tmp0_other_with_cast = other instanceof SelfSigned ? other : THROW_CCE();
    if (!this.severity_1.equals(tmp0_other_with_cast.severity_1))
      return false;
    return true;
  };
  function HostnameMismatch(expected, actual, severity) {
    severity = severity === VOID ? Severity_CRITICAL_getInstance() : severity;
    SecurityIssue.call(this);
    this.expected_1 = expected;
    this.actual_1 = actual;
    this.severity_1 = severity;
    this.description_1 = 'Hostname mismatch: expected ' + this.expected_1;
  }
  protoOf(HostnameMismatch).get_expected_77p56p_k$ = function () {
    return this.expected_1;
  };
  protoOf(HostnameMismatch).get_actual_avlm6v_k$ = function () {
    return this.actual_1;
  };
  protoOf(HostnameMismatch).get_severity_7csmre_k$ = function () {
    return this.severity_1;
  };
  protoOf(HostnameMismatch).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(HostnameMismatch).component1_7eebsc_k$ = function () {
    return this.expected_1;
  };
  protoOf(HostnameMismatch).component2_7eebsb_k$ = function () {
    return this.actual_1;
  };
  protoOf(HostnameMismatch).component3_7eebsa_k$ = function () {
    return this.severity_1;
  };
  protoOf(HostnameMismatch).copy_kvdoi1_k$ = function (expected, actual, severity) {
    return new HostnameMismatch(expected, actual, severity);
  };
  protoOf(HostnameMismatch).copy$default_87az0k_k$ = function (expected, actual, severity, $super) {
    expected = expected === VOID ? this.expected_1 : expected;
    actual = actual === VOID ? this.actual_1 : actual;
    severity = severity === VOID ? this.severity_1 : severity;
    return $super === VOID ? this.copy_kvdoi1_k$(expected, actual, severity) : $super.copy_kvdoi1_k$.call(this, expected, actual, severity);
  };
  protoOf(HostnameMismatch).toString = function () {
    return 'HostnameMismatch(expected=' + this.expected_1 + ', actual=' + toString(this.actual_1) + ', severity=' + this.severity_1.toString() + ')';
  };
  protoOf(HostnameMismatch).hashCode = function () {
    var result = getStringHashCode(this.expected_1);
    result = imul(result, 31) + hashCode(this.actual_1) | 0;
    result = imul(result, 31) + this.severity_1.hashCode() | 0;
    return result;
  };
  protoOf(HostnameMismatch).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HostnameMismatch))
      return false;
    var tmp0_other_with_cast = other instanceof HostnameMismatch ? other : THROW_CCE();
    if (!(this.expected_1 === tmp0_other_with_cast.expected_1))
      return false;
    if (!equals(this.actual_1, tmp0_other_with_cast.actual_1))
      return false;
    if (!this.severity_1.equals(tmp0_other_with_cast.severity_1))
      return false;
    return true;
  };
  function ChainIncomplete(severity) {
    severity = severity === VOID ? Severity_MEDIUM_getInstance() : severity;
    SecurityIssue.call(this);
    this.severity_1 = severity;
    this.description_1 = 'Certificate chain is incomplete';
  }
  protoOf(ChainIncomplete).get_severity_7csmre_k$ = function () {
    return this.severity_1;
  };
  protoOf(ChainIncomplete).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(ChainIncomplete).component1_7eebsc_k$ = function () {
    return this.severity_1;
  };
  protoOf(ChainIncomplete).copy_31p5rr_k$ = function (severity) {
    return new ChainIncomplete(severity);
  };
  protoOf(ChainIncomplete).copy$default_2hmbhg_k$ = function (severity, $super) {
    severity = severity === VOID ? this.severity_1 : severity;
    return $super === VOID ? this.copy_31p5rr_k$(severity) : $super.copy_31p5rr_k$.call(this, severity);
  };
  protoOf(ChainIncomplete).toString = function () {
    return 'ChainIncomplete(severity=' + this.severity_1.toString() + ')';
  };
  protoOf(ChainIncomplete).hashCode = function () {
    return this.severity_1.hashCode();
  };
  protoOf(ChainIncomplete).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChainIncomplete))
      return false;
    var tmp0_other_with_cast = other instanceof ChainIncomplete ? other : THROW_CCE();
    if (!this.severity_1.equals(tmp0_other_with_cast.severity_1))
      return false;
    return true;
  };
  function SecurityIssue() {
  }
  var Severity_LOW_instance;
  var Severity_MEDIUM_instance;
  var Severity_HIGH_instance;
  var Severity_CRITICAL_instance;
  function values_0() {
    return [Severity_LOW_getInstance(), Severity_MEDIUM_getInstance(), Severity_HIGH_getInstance(), Severity_CRITICAL_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'LOW':
        return Severity_LOW_getInstance();
      case 'MEDIUM':
        return Severity_MEDIUM_getInstance();
      case 'HIGH':
        return Severity_HIGH_getInstance();
      case 'CRITICAL':
        return Severity_CRITICAL_getInstance();
      default:
        Severity_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Severity_entriesInitialized;
  function Severity_initEntries() {
    if (Severity_entriesInitialized)
      return Unit_getInstance();
    Severity_entriesInitialized = true;
    Severity_LOW_instance = new Severity('LOW', 0);
    Severity_MEDIUM_instance = new Severity('MEDIUM', 1);
    Severity_HIGH_instance = new Severity('HIGH', 2);
    Severity_CRITICAL_instance = new Severity('CRITICAL', 3);
  }
  var $ENTRIES_0;
  function Severity(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SecurityStatus_SECURE_getInstance() {
    SecurityStatus_initEntries();
    return SecurityStatus_SECURE_instance;
  }
  function SecurityStatus_WARNING_getInstance() {
    SecurityStatus_initEntries();
    return SecurityStatus_WARNING_instance;
  }
  function SecurityStatus_CRITICAL_getInstance() {
    SecurityStatus_initEntries();
    return SecurityStatus_CRITICAL_instance;
  }
  function Severity_LOW_getInstance() {
    Severity_initEntries();
    return Severity_LOW_instance;
  }
  function Severity_MEDIUM_getInstance() {
    Severity_initEntries();
    return Severity_MEDIUM_instance;
  }
  function Severity_HIGH_getInstance() {
    Severity_initEntries();
    return Severity_HIGH_instance;
  }
  function Severity_CRITICAL_getInstance() {
    Severity_initEntries();
    return Severity_CRITICAL_instance;
  }
  function Trusted() {
    Trusted_instance = this;
    TrustStatus.call(this);
  }
  protoOf(Trusted).toString = function () {
    return 'Trusted';
  };
  protoOf(Trusted).hashCode = function () {
    return -659684332;
  };
  protoOf(Trusted).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Trusted))
      return false;
    other instanceof Trusted || THROW_CCE();
    return true;
  };
  var Trusted_instance;
  function Trusted_getInstance() {
    if (Trusted_instance == null)
      new Trusted();
    return Trusted_instance;
  }
  function Untrusted() {
    Untrusted_instance = this;
    TrustStatus.call(this);
  }
  protoOf(Untrusted).toString = function () {
    return 'Untrusted';
  };
  protoOf(Untrusted).hashCode = function () {
    return 594981915;
  };
  protoOf(Untrusted).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Untrusted))
      return false;
    other instanceof Untrusted || THROW_CCE();
    return true;
  };
  var Untrusted_instance;
  function Untrusted_getInstance() {
    if (Untrusted_instance == null)
      new Untrusted();
    return Untrusted_instance;
  }
  function SelfSigned_0() {
    SelfSigned_instance = this;
    TrustStatus.call(this);
  }
  protoOf(SelfSigned_0).toString = function () {
    return 'SelfSigned';
  };
  protoOf(SelfSigned_0).hashCode = function () {
    return 939090251;
  };
  protoOf(SelfSigned_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SelfSigned_0))
      return false;
    other instanceof SelfSigned_0 || THROW_CCE();
    return true;
  };
  var SelfSigned_instance;
  function SelfSigned_getInstance() {
    if (SelfSigned_instance == null)
      new SelfSigned_0();
    return SelfSigned_instance;
  }
  function Expired() {
    Expired_instance = this;
    TrustStatus.call(this);
  }
  protoOf(Expired).toString = function () {
    return 'Expired';
  };
  protoOf(Expired).hashCode = function () {
    return -920480190;
  };
  protoOf(Expired).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Expired))
      return false;
    other instanceof Expired || THROW_CCE();
    return true;
  };
  var Expired_instance;
  function Expired_getInstance() {
    if (Expired_instance == null)
      new Expired();
    return Expired_instance;
  }
  function NotYetValid() {
    NotYetValid_instance = this;
    TrustStatus.call(this);
  }
  protoOf(NotYetValid).toString = function () {
    return 'NotYetValid';
  };
  protoOf(NotYetValid).hashCode = function () {
    return -1890712956;
  };
  protoOf(NotYetValid).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NotYetValid))
      return false;
    other instanceof NotYetValid || THROW_CCE();
    return true;
  };
  var NotYetValid_instance;
  function NotYetValid_getInstance() {
    if (NotYetValid_instance == null)
      new NotYetValid();
    return NotYetValid_instance;
  }
  function Revoked(reason) {
    TrustStatus.call(this);
    this.reason_1 = reason;
  }
  protoOf(Revoked).get_reason_iy4m6l_k$ = function () {
    return this.reason_1;
  };
  protoOf(Revoked).component1_7eebsc_k$ = function () {
    return this.reason_1;
  };
  protoOf(Revoked).copy_a35qlh_k$ = function (reason) {
    return new Revoked(reason);
  };
  protoOf(Revoked).copy$default_d4jbv1_k$ = function (reason, $super) {
    reason = reason === VOID ? this.reason_1 : reason;
    return $super === VOID ? this.copy_a35qlh_k$(reason) : $super.copy_a35qlh_k$.call(this, reason);
  };
  protoOf(Revoked).toString = function () {
    return 'Revoked(reason=' + this.reason_1 + ')';
  };
  protoOf(Revoked).hashCode = function () {
    return getStringHashCode(this.reason_1);
  };
  protoOf(Revoked).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Revoked))
      return false;
    var tmp0_other_with_cast = other instanceof Revoked ? other : THROW_CCE();
    if (!(this.reason_1 === tmp0_other_with_cast.reason_1))
      return false;
    return true;
  };
  function Unknown(reason) {
    TrustStatus.call(this);
    this.reason_1 = reason;
  }
  protoOf(Unknown).get_reason_iy4m6l_k$ = function () {
    return this.reason_1;
  };
  protoOf(Unknown).component1_7eebsc_k$ = function () {
    return this.reason_1;
  };
  protoOf(Unknown).copy_a35qlh_k$ = function (reason) {
    return new Unknown(reason);
  };
  protoOf(Unknown).copy$default_l2uhvd_k$ = function (reason, $super) {
    reason = reason === VOID ? this.reason_1 : reason;
    return $super === VOID ? this.copy_a35qlh_k$(reason) : $super.copy_a35qlh_k$.call(this, reason);
  };
  protoOf(Unknown).toString = function () {
    return 'Unknown(reason=' + this.reason_1 + ')';
  };
  protoOf(Unknown).hashCode = function () {
    return getStringHashCode(this.reason_1);
  };
  protoOf(Unknown).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Unknown))
      return false;
    var tmp0_other_with_cast = other instanceof Unknown ? other : THROW_CCE();
    if (!(this.reason_1 === tmp0_other_with_cast.reason_1))
      return false;
    return true;
  };
  function TrustStatus() {
  }
  function CertificateRepository() {
  }
  function checkSignatureAlgorithm($this, cert) {
    var weak = listOf(['sha1', 'md5', 'md2']);
    var tmp;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(weak, Collection)) {
        tmp_0 = weak.isEmpty_y1axqb_k$();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = weak.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'com.sarmad.certinspector.domain.usecase.AnalyzeSecurityUseCase.checkSignatureAlgorithm.<anonymous>' call
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$2 = cert.get_signatureAlgorithm_z6p5gg_k$().toLowerCase();
        if (contains(tmp$ret$2, element)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    if (tmp$ret$0) {
      tmp = listOf_0(new WeakSignature(cert.get_signatureAlgorithm_z6p5gg_k$()));
    } else {
      tmp = emptyList();
    }
    return tmp;
  }
  function checkPublicKey($this, cert) {
    var key = cert.get_publicKey_wfyw0d_k$();
    var isWeak = contains(key.get_algorithm_c8rufa_k$(), 'RSA', true) && key.get_size_woubt6_k$() < 2048 ? true : contains(key.get_algorithm_c8rufa_k$(), 'EC', true) && key.get_size_woubt6_k$() < 256 ? true : false;
    var tmp;
    if (isWeak) {
      tmp = listOf_0(new WeakPublicKey(key.get_algorithm_c8rufa_k$(), key.get_size_woubt6_k$()));
    } else {
      tmp = emptyList();
    }
    return tmp;
  }
  function checkValidity($this, cert) {
    var now = System_getInstance().now_2cba_k$();
    var remaining = cert.get_validity_fpzo57_k$().get_notAfter_671g1a_k$().minus_mev7kl_k$(now);
    var tmp;
    // Inline function 'kotlin.time.Companion.days' call
    Companion_getInstance();
    var tmp$ret$0 = toDuration(30, DurationUnit_DAYS_getInstance());
    if (Duration__compareTo_impl_pchp0f(remaining, tmp$ret$0) < 0) {
      var days = _Duration___get_inWholeDays__impl__7bvpxz(remaining).toInt_1tsl84_k$();
      tmp = listOf_0(new ExpiringSoon(cert.get_validity_fpzo57_k$().get_notAfter_671g1a_k$(), days));
    } else {
      tmp = emptyList();
    }
    return tmp;
  }
  function checkHostname($this, cert, hostname) {
    var names = plus(listOf_0(cert.get_subject_tmjbgd_k$().get_commonName_l55k1_k$()), cert.get_subjectAlternativeNames_5wqmma_k$());
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(names, Collection)) {
        tmp = names.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = names.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'com.sarmad.certinspector.domain.usecase.AnalyzeSecurityUseCase.checkHostname.<anonymous>' call
        if (matchHostname($this, element, hostname)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    var matches = tmp$ret$0;
    var tmp_0;
    if (!matches) {
      tmp_0 = listOf_0(new HostnameMismatch(hostname, names));
    } else {
      tmp_0 = emptyList();
    }
    return tmp_0;
  }
  function matchHostname($this, pattern, hostname) {
    var tmp0 = replace(replace(pattern, '.', '\\.'), '*', '.*');
    // Inline function 'kotlin.text.toRegex' call
    var option = RegexOption_IGNORE_CASE_getInstance();
    var regex = Regex_init_$Create$(tmp0, option);
    return regex.matches_evli6i_k$(hostname);
  }
  function generateRecommendations($this, issues) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = issues.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'com.sarmad.certinspector.domain.usecase.AnalyzeSecurityUseCase.generateRecommendations.<anonymous>' call
      var tmp;
      if (element instanceof WeakSignature) {
        tmp = 'Upgrade to SHA-256 or stronger signature algorithm';
      } else {
        if (element instanceof WeakPublicKey) {
          tmp = 'Use ' + (contains(element.get_algorithm_c8rufa_k$(), 'RSA') ? '2048' : '256') + '-bit or larger keys';
        } else {
          if (element instanceof ExpiringSoon) {
            tmp = 'Renew certificate before expiration';
          } else {
            if (element instanceof SelfSigned) {
              tmp = 'Use a certificate from a trusted CA for production';
            } else {
              if (element instanceof ChainIncomplete) {
                tmp = 'Ensure complete certificate chain is provided';
              } else {
                if (element instanceof HostnameMismatch) {
                  tmp = 'Certificate must match the hostname';
                } else {
                  noWhenBranchMatchedException();
                }
              }
            }
          }
        }
      }
      var tmp0_safe_receiver = tmp;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
        destination.add_utx5q5_k$(tmp0_safe_receiver);
      }
    }
    return distinct(destination);
  }
  function calculateScore($this, issues) {
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s = issues.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var tmp = sum;
      // Inline function 'com.sarmad.certinspector.domain.usecase.AnalyzeSecurityUseCase.calculateScore.<anonymous>' call
      var tmp_0;
      switch (element.get_severity_7csmre_k$().get_ordinal_ip24qg_k$()) {
        case 3:
          tmp_0 = 40;
          break;
        case 2:
          tmp_0 = 25;
          break;
        case 1:
          tmp_0 = 15;
          break;
        case 0:
          tmp_0 = 5;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      sum = tmp + tmp_0 | 0;
    }
    var penalty = sum;
    return coerceAtLeast(100 - penalty | 0, 0);
  }
  function determineStatus($this, issues) {
    var tmp;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(issues, Collection)) {
        tmp_0 = issues.isEmpty_y1axqb_k$();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = issues.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'com.sarmad.certinspector.domain.usecase.AnalyzeSecurityUseCase.determineStatus.<anonymous>' call
        if (element.get_severity_7csmre_k$().equals(Severity_CRITICAL_getInstance())) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    if (tmp$ret$0) {
      tmp = SecurityStatus_CRITICAL_getInstance();
    } else {
      var tmp$ret$2;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var tmp_1;
        if (isInterface(issues, Collection)) {
          tmp_1 = issues.isEmpty_y1axqb_k$();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$2 = false;
          break $l$block_2;
        }
        var _iterator__ex2g4s_0 = issues.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
          var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
          // Inline function 'com.sarmad.certinspector.domain.usecase.AnalyzeSecurityUseCase.determineStatus.<anonymous>' call
          if (element_0.get_severity_7csmre_k$().equals(Severity_HIGH_getInstance())) {
            tmp$ret$2 = true;
            break $l$block_2;
          }
        }
        tmp$ret$2 = false;
      }
      if (tmp$ret$2) {
        tmp = SecurityStatus_WARNING_getInstance();
      } else {
        tmp = SecurityStatus_SECURE_getInstance();
      }
    }
    return tmp;
  }
  function AnalyzeSecurityUseCase() {
  }
  protoOf(AnalyzeSecurityUseCase).invoke_46cpr3_k$ = function (chain, trustStatus, hostname) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var issues = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = chain.get_all_18j9hk_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'com.sarmad.certinspector.domain.usecase.AnalyzeSecurityUseCase.invoke.<anonymous>' call
      issues.addAll_4lagoh_k$(checkSignatureAlgorithm(this, element));
      issues.addAll_4lagoh_k$(checkPublicKey(this, element));
      issues.addAll_4lagoh_k$(checkValidity(this, element));
    }
    if (hostname == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.sarmad.certinspector.domain.usecase.AnalyzeSecurityUseCase.invoke.<anonymous>' call
      issues.addAll_4lagoh_k$(checkHostname(this, chain.get_leaf_woprc7_k$(), hostname));
    }
    if (trustStatus instanceof SelfSigned_0) {
      issues.add_utx5q5_k$(new SelfSigned());
    }
    if (chain.get_root_wott0r_k$() == null) {
      issues.add_utx5q5_k$(new ChainIncomplete());
    }
    var recommendations = generateRecommendations(this, issues);
    var score = calculateScore(this, issues);
    var status = determineStatus(this, issues);
    return new SecurityAnalysis(status, issues, recommendations, score);
  };
  protoOf(AnalyzeSecurityUseCase).invoke$default_49cdyb_k$ = function (chain, trustStatus, hostname, $super) {
    hostname = hostname === VOID ? null : hostname;
    return $super === VOID ? this.invoke_46cpr3_k$(chain, trustStatus, hostname) : $super.invoke_46cpr3_k$.call(this, chain, trustStatus, hostname);
  };
  function _get_repository__phhg8v_0($this) {
    return $this.repository_1;
  }
  function InspectFileUseCase(repository) {
    this.repository_1 = repository;
  }
  protoOf(InspectFileUseCase).invoke_5dsj7j_k$ = function (fileData, $completion) {
    return this.repository_1.parseCertificateFile_8ozodz_k$(fileData, $completion);
  };
  function _get_repository__phhg8v_1($this) {
    return $this.repository_1;
  }
  function InspectUrlUseCase(repository) {
    this.repository_1 = repository;
  }
  protoOf(InspectUrlUseCase).invoke_la7gnk_k$ = function (url, $completion) {
    return this.repository_1.fetchChainFromUrl_45mine_k$(url, $completion);
  };
  function _get_repository__phhg8v_2($this) {
    return $this.repository_1;
  }
  function ValidateTrustUseCase(repository) {
    this.repository_1 = repository;
  }
  protoOf(ValidateTrustUseCase).invoke_a77txg_k$ = function (certificate, $completion) {
    if (!certificate.get_validity_fpzo57_k$().get_isValid_zh4f7b_k$()) {
      var now = System_getInstance().now_2cba_k$();
      var tmp;
      if (now.compareTo_rgp57f_k$(certificate.get_validity_fpzo57_k$().get_notBefore_lhcgax_k$()) < 0) {
        tmp = NotYetValid_getInstance();
      } else {
        tmp = Expired_getInstance();
      }
      return tmp;
    }
    return this.repository_1.validateTrust_ptfn8a_k$(certificate, $completion);
  };
  function CertificateSource() {
  }
  protoOf(CertificateSource).fetchFromUrl_avnsqq_k$ = function (url, $completion) {
    throw UnsupportedOperationException_init_$Create$('Browser security policies prevent direct certificate inspection. Modern browsers do not expose SSL/TLS certificate details to JavaScript or WebAssembly for security reasons. Web-based certificate inspectors use backend servers to perform inspections. Please use the Android or Desktop application for full functionality.');
  };
  protoOf(CertificateSource).parseFromBytes_i25cr2_k$ = function (data, $completion) {
    throw UnsupportedOperationException_init_$Create$('Certificate parsing from files is not supported in web browsers. Please use the Android or Desktop application.');
  };
  protoOf(CertificateSource).validateTrust_nrvc5z_k$ = function (certificate) {
    return new Unknown('Trust validation not available in browser');
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Error_0;
  _.$_$.b = Success;
  _.$_$.c = CertInspector;
  //endregion
  return _;
}));
