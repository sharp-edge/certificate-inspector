(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@js-joda/core', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@js-joda/core'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    globalThis['Kotlin-DateTime-library-kotlinx-datetime'] = factory(typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined' ? {} : globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['@js-joda/core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, $module$_js_joda_core_gcv2k, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Instant = $module$_js_joda_core_gcv2k.Instant;
  var Clock = $module$_js_joda_core_gcv2k.Clock;
  var Duration = $module$_js_joda_core_gcv2k.Duration;
  var LocalDate = $module$_js_joda_core_gcv2k.LocalDate;
  var LocalDateTime = $module$_js_joda_core_gcv2k.LocalDateTime;
  var LocalTime = $module$_js_joda_core_gcv2k.LocalTime;
  var ZoneOffset = $module$_js_joda_core_gcv2k.ZoneOffset;
  var ZoneId = $module$_js_joda_core_gcv2k.ZoneId;
  var ChronoField = $module$_js_joda_core_gcv2k.ChronoField;
  var DateTimeFormatterBuilder = $module$_js_joda_core_gcv2k.DateTimeFormatterBuilder;
  var ResolverStyle = $module$_js_joda_core_gcv2k.ResolverStyle;
  var protoOf = kotlin_kotlin.$_$.ef;
  var initMetadataForObject = kotlin_kotlin.$_$.he;
  var VOID = kotlin_kotlin.$_$.e;
  var initMetadataForCompanion = kotlin_kotlin.$_$.de;
  var initMetadataForInterface = kotlin_kotlin.$_$.fe;
  var toString = kotlin_kotlin.$_$.if;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.x1;
  var objectCreate = kotlin_kotlin.$_$.df;
  var captureStack = kotlin_kotlin.$_$.kd;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.z1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.v1;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$_$.b2;
  var IllegalArgumentException = kotlin_kotlin.$_$.zi;
  var initMetadataForClass = kotlin_kotlin.$_$.ce;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.q2;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.r2;
  var RuntimeException_init_$Init$_1 = kotlin_kotlin.$_$.o2;
  var RuntimeException_init_$Init$_2 = kotlin_kotlin.$_$.t2;
  var RuntimeException = kotlin_kotlin.$_$.hj;
  var Long = kotlin_kotlin.$_$.bj;
  var getStringHashCode = kotlin_kotlin.$_$.ae;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.i3;
  var Unit_getInstance = kotlin_kotlin.$_$.u5;
  var ensureNotNull = kotlin_kotlin.$_$.bk;
  var toLong = kotlin_kotlin.$_$.gf;
  var numberRangeToNumber = kotlin_kotlin.$_$.ye;
  var ArithmeticException = kotlin_kotlin.$_$.pi;
  var THROW_CCE = kotlin_kotlin.$_$.ij;
  var equals = kotlin_kotlin.$_$.td;
  var hashCode = kotlin_kotlin.$_$.be;
  var KMutableProperty1 = kotlin_kotlin.$_$.lg;
  var getPropertyCallableRef = kotlin_kotlin.$_$.zd;
  var KMutableProperty0 = kotlin_kotlin.$_$.kg;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.jk;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.m1;
  var THROW_IAE = kotlin_kotlin.$_$.jj;
  var enumEntries = kotlin_kotlin.$_$.ed;
  var Enum = kotlin_kotlin.$_$.wi;
  var to = kotlin_kotlin.$_$.vk;
  var listOf = kotlin_kotlin.$_$.ha;
  var KProperty0 = kotlin_kotlin.$_$.mg;
  var lazy = kotlin_kotlin.$_$.ik;
  var last = kotlin_kotlin.$_$.da;
  var charSequenceLength = kotlin_kotlin.$_$.od;
  var prependIndent = kotlin_kotlin.$_$.ph;
  var charSequenceGet = kotlin_kotlin.$_$.nd;
  var toString_0 = kotlin_kotlin.$_$.o3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var isInterface = kotlin_kotlin.$_$.re;
  var isArray = kotlin_kotlin.$_$.je;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var get_indices = kotlin_kotlin.$_$.s9;
  var joinToString = kotlin_kotlin.$_$.u9;
  var getBooleanHashCode = kotlin_kotlin.$_$.wd;
  var padStart = kotlin_kotlin.$_$.oh;
  var mapOf = kotlin_kotlin.$_$.ka;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.m3;
  var plus = kotlin_kotlin.$_$.ra;
  var Char = kotlin_kotlin.$_$.si;
  var plus_0 = kotlin_kotlin.$_$.sa;
  var abs = kotlin_kotlin.$_$.kf;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var getOrNull = kotlin_kotlin.$_$.l9;
  var listOf_0 = kotlin_kotlin.$_$.ga;
  var emptyList = kotlin_kotlin.$_$.v8;
  var toString_1 = kotlin_kotlin.$_$.uk;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t7;
  var mapCapacity = kotlin_kotlin.$_$.ia;
  var coerceAtLeast = kotlin_kotlin.$_$.wf;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.y;
  var get_lastIndex = kotlin_kotlin.$_$.mh;
  var toSet = kotlin_kotlin.$_$.cc;
  var distinct = kotlin_kotlin.$_$.t8;
  var single = kotlin_kotlin.$_$.eb;
  var Collection = kotlin_kotlin.$_$.e6;
  var repeat = kotlin_kotlin.$_$.rh;
  var append = kotlin_kotlin.$_$.yg;
  var charSequenceSubSequence = kotlin_kotlin.$_$.pd;
  var mutableListOf = kotlin_kotlin.$_$.na;
  var removeLastOrNull = kotlin_kotlin.$_$.xa;
  var sortWith = kotlin_kotlin.$_$.jb;
  var FunctionAdapter = kotlin_kotlin.$_$.gd;
  var Comparator = kotlin_kotlin.$_$.vi;
  var compareValues = kotlin_kotlin.$_$.fc;
  var Exception = kotlin_kotlin.$_$.yi;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.t1;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.l1;
  var joinTo = kotlin_kotlin.$_$.w9;
  var toMutableList = kotlin_kotlin.$_$.zb;
  var addAll = kotlin_kotlin.$_$.f7;
  var firstOrNull = kotlin_kotlin.$_$.c9;
  var drop = kotlin_kotlin.$_$.u8;
  var sortedWith = kotlin_kotlin.$_$.lb;
  var binarySearch = kotlin_kotlin.$_$.p7;
  var startsWith = kotlin_kotlin.$_$.xh;
  var checkCountOverflow = kotlin_kotlin.$_$.q7;
  var compareTo = kotlin_kotlin.$_$.qd;
  var removePrefix = kotlin_kotlin.$_$.qh;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.w2;
  var Comparable = kotlin_kotlin.$_$.ui;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.k3;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var numberToLong = kotlin_kotlin.$_$.cf;
  var numberToInt = kotlin_kotlin.$_$.bf;
  var _Duration___get_inWholeSeconds__impl__hpy7b3 = kotlin_kotlin.$_$.b3;
  var _Duration___get_nanosecondsComponent__impl__nh19kq = kotlin_kotlin.$_$.d3;
  var Duration__isPositive_impl_tvkkt2 = kotlin_kotlin.$_$.c3;
  var Duration__unaryMinus_impl_x2k1y0 = kotlin_kotlin.$_$.g3;
  var Companion_getInstance = kotlin_kotlin.$_$.l5;
  var DurationUnit_SECONDS_getInstance = kotlin_kotlin.$_$.j;
  var toDuration = kotlin_kotlin.$_$.li;
  var DurationUnit_NANOSECONDS_getInstance = kotlin_kotlin.$_$.i;
  var Duration__plus_impl_yu9v8f = kotlin_kotlin.$_$.e3;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.w1;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var toSet_0 = kotlin_kotlin.$_$.dc;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(Clock_0, 'Clock');
  initMetadataForObject(System, 'System', VOID, VOID, [Clock_0]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(DateTimeFormatException, 'DateTimeFormatException', DateTimeFormatException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(DateTimeArithmeticException, 'DateTimeArithmeticException', DateTimeArithmeticException_init_$Create$, RuntimeException);
  initMetadataForClass(IllegalTimeZoneException, 'IllegalTimeZoneException', IllegalTimeZoneException_init_$Create$, IllegalArgumentException);
  initMetadataForInterface(DateFieldContainer, 'DateFieldContainer');
  function set_fractionOfSecond(value) {
    this.set_nanosecond_xpjfxy_k$(value == null ? null : value.fractionalPartWithNDigits_sivm3u_k$(9));
  }
  function get_fractionOfSecond() {
    var tmp0_safe_receiver = this.get_nanosecond_fws9td_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.TimeFieldContainer.<get-fractionOfSecond>.<anonymous>' call
      tmp = new DecimalFraction(tmp0_safe_receiver, 9);
    }
    return tmp;
  }
  initMetadataForInterface(TimeFieldContainer, 'TimeFieldContainer');
  initMetadataForInterface(UtcOffsetFieldContainer, 'UtcOffsetFieldContainer');
  initMetadataForInterface(DateTimeFieldContainer, 'DateTimeFieldContainer', VOID, VOID, [DateFieldContainer, TimeFieldContainer]);
  initMetadataForInterface(Copyable, 'Copyable');
  initMetadataForClass(DateTimeComponentsContents, 'DateTimeComponentsContents', VOID, VOID, [DateFieldContainer, TimeFieldContainer, UtcOffsetFieldContainer, DateTimeFieldContainer, Copyable]);
  initMetadataForCompanion(Companion_0);
  initMetadataForObject(Formats, 'Formats');
  initMetadataForClass(DateTimeComponents, 'DateTimeComponents');
  initMetadataForInterface(DateTimeFormatBuilder, 'DateTimeFormatBuilder');
  function appendAlternativeParsingImpl(otherFormats, mainFormat) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(otherFormats.length);
    var inductionVariable = 0;
    var last = otherFormats.length;
    while (inductionVariable < last) {
      var item = otherFormats[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.datetime.format.AbstractDateTimeFormatBuilder.appendAlternativeParsingImpl.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = this.createEmpty_8k9z67_k$();
      // Inline function 'kotlinx.datetime.format.AbstractDateTimeFormatBuilder.appendAlternativeParsingImpl.<anonymous>.<anonymous>' call
      item(this_0);
      var tmp$ret$1 = this_0.get_actualBuilder_7qypdo_k$().build_1k0s4u_k$();
      destination.add_utx5q5_k$(tmp$ret$1);
    }
    var others = destination;
    // Inline function 'kotlin.also' call
    var this_1 = this.createEmpty_8k9z67_k$();
    // Inline function 'kotlinx.datetime.format.AbstractDateTimeFormatBuilder.appendAlternativeParsingImpl.<anonymous>' call
    mainFormat(this_1);
    var main = this_1.get_actualBuilder_7qypdo_k$().build_1k0s4u_k$();
    this.get_actualBuilder_7qypdo_k$().add_b6pdwl_k$(new AlternativesParsingFormatStructure(main, others));
  }
  function appendOptionalImpl(onZero, format) {
    var tmp = this.get_actualBuilder_7qypdo_k$();
    // Inline function 'kotlin.also' call
    var this_0 = this.createEmpty_8k9z67_k$();
    // Inline function 'kotlinx.datetime.format.AbstractDateTimeFormatBuilder.appendOptionalImpl.<anonymous>' call
    format(this_0);
    tmp.add_b6pdwl_k$(new OptionalFormatStructure(onZero, this_0.get_actualBuilder_7qypdo_k$().build_1k0s4u_k$()));
  }
  function chars(value) {
    return this.get_actualBuilder_7qypdo_k$().add_b6pdwl_k$(new ConstantFormatStructure(value));
  }
  function build() {
    return new CachedFormatStructure(this.get_actualBuilder_7qypdo_k$().build_1k0s4u_k$().get_formats_9xs0wd_k$());
  }
  initMetadataForInterface(AbstractDateTimeFormatBuilder, 'AbstractDateTimeFormatBuilder', VOID, VOID, [DateTimeFormatBuilder]);
  function year$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.year_8xsdsn_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.year_8xsdsn_k$.call(this, padding);
    }
    return tmp;
  }
  function monthNumber$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.monthNumber_vowj11_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.monthNumber_vowj11_k$.call(this, padding);
    }
    return tmp;
  }
  function dayOfMonth$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.dayOfMonth_xcq6p3_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.dayOfMonth_xcq6p3_k$.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithDate, 'WithDate', VOID, VOID, [DateTimeFormatBuilder]);
  function year(padding) {
    return this.addFormatStructureForDate_t2v9hh_k$(new BasicFormatStructure(new YearDirective(padding)));
  }
  function yearTwoDigits(baseYear) {
    return this.addFormatStructureForDate_t2v9hh_k$(new BasicFormatStructure(new ReducedYearDirective(baseYear)));
  }
  function monthNumber(padding) {
    return this.addFormatStructureForDate_t2v9hh_k$(new BasicFormatStructure(new MonthDirective(padding)));
  }
  function monthName(names) {
    return this.addFormatStructureForDate_t2v9hh_k$(new BasicFormatStructure(new MonthNameDirective(names)));
  }
  function dayOfMonth(padding) {
    return this.addFormatStructureForDate_t2v9hh_k$(new BasicFormatStructure(new DayDirective(padding)));
  }
  function dayOfWeek(names) {
    return this.addFormatStructureForDate_t2v9hh_k$(new BasicFormatStructure(new DayOfWeekDirective(names)));
  }
  function date(format) {
    var tmp;
    if (format instanceof LocalDateFormat) {
      this.addFormatStructureForDate_t2v9hh_k$(format.actualFormat_1);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithDateBuilder, 'AbstractWithDateBuilder', VOID, VOID, [WithDate]);
  function hour$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.hour_8zk8ds_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.hour_8zk8ds_k$.call(this, padding);
    }
    return tmp;
  }
  function amPmHour$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.amPmHour_pqhb5l_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.amPmHour_pqhb5l_k$.call(this, padding);
    }
    return tmp;
  }
  function minute$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.minute_n70fvk_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.minute_n70fvk_k$.call(this, padding);
    }
    return tmp;
  }
  function second$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.second_9gil1c_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.second_9gil1c_k$.call(this, padding);
    }
    return tmp;
  }
  function secondFraction$default(minLength, maxLength, $super) {
    minLength = minLength === VOID ? 1 : minLength;
    maxLength = maxLength === VOID ? 9 : maxLength;
    var tmp;
    if ($super === VOID) {
      this.secondFraction_6m5e86_k$(minLength, maxLength);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.secondFraction_6m5e86_k$.call(this, minLength, maxLength);
    }
    return tmp;
  }
  function secondFraction(fixedLength) {
    this.secondFraction_6m5e86_k$(fixedLength, fixedLength);
  }
  initMetadataForInterface(WithTime, 'WithTime', VOID, VOID, [DateTimeFormatBuilder]);
  function hour(padding) {
    return this.addFormatStructureForTime_h3r7lv_k$(new BasicFormatStructure(new HourDirective(padding)));
  }
  function amPmHour(padding) {
    return this.addFormatStructureForTime_h3r7lv_k$(new BasicFormatStructure(new AmPmHourDirective(padding)));
  }
  function amPmMarker(am, pm) {
    return this.addFormatStructureForTime_h3r7lv_k$(new BasicFormatStructure(new AmPmMarkerDirective(am, pm)));
  }
  function minute(padding) {
    return this.addFormatStructureForTime_h3r7lv_k$(new BasicFormatStructure(new MinuteDirective(padding)));
  }
  function second(padding) {
    return this.addFormatStructureForTime_h3r7lv_k$(new BasicFormatStructure(new SecondDirective(padding)));
  }
  function secondFraction_0(minLength, maxLength) {
    return this.addFormatStructureForTime_h3r7lv_k$(new BasicFormatStructure(new FractionalSecondDirective(minLength, maxLength)));
  }
  function time(format) {
    var tmp;
    if (format instanceof LocalTimeFormat) {
      this.addFormatStructureForTime_h3r7lv_k$(format.actualFormat_1);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithTimeBuilder, 'AbstractWithTimeBuilder', VOID, VOID, [WithTime]);
  initMetadataForInterface(WithDateTime, 'WithDateTime', VOID, VOID, [WithDate, WithTime]);
  function addFormatStructureForDate(structure) {
    this.addFormatStructureForDateTime_noiy5b_k$(structure);
  }
  function addFormatStructureForTime(structure) {
    this.addFormatStructureForDateTime_noiy5b_k$(structure);
  }
  function dateTime(format) {
    var tmp;
    if (format instanceof LocalDateTimeFormat) {
      this.addFormatStructureForDateTime_noiy5b_k$(format.actualFormat_1);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithDateTimeBuilder, 'AbstractWithDateTimeBuilder', VOID, VOID, [AbstractWithDateBuilder, AbstractWithTimeBuilder, WithDateTime]);
  function offsetHours$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.offsetHours_ci3yns_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.offsetHours_ci3yns_k$.call(this, padding);
    }
    return tmp;
  }
  function offsetMinutesOfHour$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.offsetMinutesOfHour_jd2q5v_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.offsetMinutesOfHour_jd2q5v_k$.call(this, padding);
    }
    return tmp;
  }
  function offsetSecondsOfMinute$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.offsetSecondsOfMinute_vkij2b_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.offsetSecondsOfMinute_vkij2b_k$.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithUtcOffset, 'WithUtcOffset', VOID, VOID, [DateTimeFormatBuilder]);
  function offsetHours(padding) {
    return this.addFormatStructureForOffset_puuf83_k$(new SignedFormatStructure(new BasicFormatStructure(new UtcOffsetWholeHoursDirective(padding)), true));
  }
  function offsetMinutesOfHour(padding) {
    return this.addFormatStructureForOffset_puuf83_k$(new BasicFormatStructure(new UtcOffsetMinuteOfHourDirective(padding)));
  }
  function offsetSecondsOfMinute(padding) {
    return this.addFormatStructureForOffset_puuf83_k$(new BasicFormatStructure(new UtcOffsetSecondOfMinuteDirective(padding)));
  }
  function offset(format) {
    var tmp;
    if (format instanceof UtcOffsetFormat) {
      this.addFormatStructureForOffset_puuf83_k$(format.actualFormat_1);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithOffsetBuilder, 'AbstractWithOffsetBuilder', VOID, VOID, [WithUtcOffset]);
  initMetadataForInterface(WithDateTimeComponents, 'WithDateTimeComponents', VOID, VOID, [WithDateTime, WithUtcOffset]);
  initMetadataForClass(Builder, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithDateTimeBuilder, AbstractWithOffsetBuilder, WithDateTimeComponents]);
  initMetadataForInterface(DateTimeFormat, 'DateTimeFormat');
  initMetadataForClass(AbstractDateTimeFormat, 'AbstractDateTimeFormat', VOID, VOID, [DateTimeFormat]);
  initMetadataForClass(DateTimeComponentsFormat, 'DateTimeComponentsFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(TwoDigitNumber, 'TwoDigitNumber');
  initMetadataForInterface(FieldFormatDirective, 'FieldFormatDirective');
  initMetadataForClass(StringFieldFormatDirective, 'StringFieldFormatDirective', VOID, VOID, [FieldFormatDirective]);
  initMetadataForClass(TimeZoneIdDirective, 'TimeZoneIdDirective', VOID, StringFieldFormatDirective);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Padding, 'Padding', VOID, Enum);
  initMetadataForClass(IncompleteLocalDate, 'IncompleteLocalDate', IncompleteLocalDate, VOID, [DateFieldContainer, Copyable]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(MonthNames, 'MonthNames');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(DayOfWeekNames, 'DayOfWeekNames');
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(Builder_0, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithDateBuilder]);
  initMetadataForClass(LocalDateFormat, 'LocalDateFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(SignedIntFieldFormatDirective, 'SignedIntFieldFormatDirective', VOID, VOID, [FieldFormatDirective]);
  initMetadataForClass(YearDirective, 'YearDirective', VOID, SignedIntFieldFormatDirective);
  initMetadataForClass(ReducedIntFieldDirective, 'ReducedIntFieldDirective', VOID, VOID, [FieldFormatDirective]);
  initMetadataForClass(ReducedYearDirective, 'ReducedYearDirective', VOID, ReducedIntFieldDirective);
  initMetadataForClass(UnsignedIntFieldFormatDirective, 'UnsignedIntFieldFormatDirective', VOID, VOID, [FieldFormatDirective]);
  initMetadataForClass(MonthDirective, 'MonthDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(NamedUnsignedIntFieldFormatDirective, 'NamedUnsignedIntFieldFormatDirective', VOID, VOID, [FieldFormatDirective]);
  initMetadataForClass(MonthNameDirective, 'MonthNameDirective', VOID, NamedUnsignedIntFieldFormatDirective);
  initMetadataForClass(DayDirective, 'DayDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(DayOfWeekDirective, 'DayOfWeekDirective', VOID, NamedUnsignedIntFieldFormatDirective);
  initMetadataForObject(DateFields, 'DateFields');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(Builder_1, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithDateTimeBuilder]);
  initMetadataForClass(LocalDateTimeFormat, 'LocalDateTimeFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(IncompleteLocalDateTime, 'IncompleteLocalDateTime', IncompleteLocalDateTime, VOID, [DateTimeFieldContainer, DateFieldContainer, TimeFieldContainer, Copyable]);
  initMetadataForClass(IncompleteLocalTime, 'IncompleteLocalTime', IncompleteLocalTime, VOID, [TimeFieldContainer, Copyable]);
  initMetadataForClass(AmPmMarker, 'AmPmMarker', VOID, Enum);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(Builder_2, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithTimeBuilder]);
  initMetadataForClass(LocalTimeFormat, 'LocalTimeFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(HourDirective, 'HourDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(AmPmHourDirective, 'AmPmHourDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(NamedEnumIntFieldFormatDirective, 'NamedEnumIntFieldFormatDirective', VOID, VOID, [FieldFormatDirective]);
  initMetadataForClass(AmPmMarkerDirective, 'AmPmMarkerDirective', VOID, NamedEnumIntFieldFormatDirective);
  initMetadataForClass(MinuteDirective, 'MinuteDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(SecondDirective, 'SecondDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(DecimalFractionFieldFormatDirective, 'DecimalFractionFieldFormatDirective', VOID, VOID, [FieldFormatDirective]);
  initMetadataForClass(FractionalSecondDirective, 'FractionalSecondDirective', VOID, DecimalFractionFieldFormatDirective);
  initMetadataForObject(TimeFields, 'TimeFields');
  initMetadataForClass(IncompleteUtcOffset, 'IncompleteUtcOffset', IncompleteUtcOffset, VOID, [UtcOffsetFieldContainer, Copyable]);
  initMetadataForClass(UtcOffsetWholeHoursDirective, 'UtcOffsetWholeHoursDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(Builder_3, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithOffsetBuilder]);
  initMetadataForClass(UtcOffsetFormat, 'UtcOffsetFormat', VOID, AbstractDateTimeFormat);
  initMetadataForInterface(FieldSign, 'FieldSign');
  initMetadataForClass(OffsetFields$sign$1, VOID, VOID, VOID, [FieldSign]);
  initMetadataForObject(OffsetFields, 'OffsetFields');
  initMetadataForClass(UtcOffsetMinuteOfHourDirective, 'UtcOffsetMinuteOfHourDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(UtcOffsetSecondOfMinuteDirective, 'UtcOffsetSecondOfMinuteDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(AppendableFormatStructure, 'AppendableFormatStructure', AppendableFormatStructure);
  initMetadataForInterface(AssignableField, 'AssignableField');
  initMetadataForClass(AssignableString, 'AssignableString', VOID, VOID, [AssignableField]);
  initMetadataForClass(AssignableString_0, 'AssignableString', VOID, VOID, [AssignableField]);
  initMetadataForInterface(FieldSpec, 'FieldSpec');
  initMetadataForClass(AbstractFieldSpec, 'AbstractFieldSpec', VOID, VOID, [FieldSpec]);
  initMetadataForClass(GenericFieldSpec, 'GenericFieldSpec', VOID, AbstractFieldSpec);
  function getterNotNull(container) {
    var tmp0_elvis_lhs = this.getter_8mvnhr_k$(container);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Field ' + this.get_name_woqyms_k$() + ' is not set');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  initMetadataForInterface(Accessor, 'Accessor', VOID, VOID, [AssignableField]);
  initMetadataForClass(PropertyAccessor, 'PropertyAccessor', VOID, VOID, [Accessor]);
  initMetadataForClass(UnsignedFieldSpec, 'UnsignedFieldSpec', VOID, AbstractFieldSpec);
  initMetadataForInterface(FormatStructure, 'FormatStructure');
  initMetadataForClass(ConcatenatedFormatStructure, 'ConcatenatedFormatStructure', VOID, VOID, [FormatStructure]);
  initMetadataForClass(CachedFormatStructure, 'CachedFormatStructure', VOID, ConcatenatedFormatStructure);
  initMetadataForInterface(NonConcatenatedFormatStructure, 'NonConcatenatedFormatStructure', VOID, VOID, [FormatStructure]);
  initMetadataForClass(BasicFormatStructure, 'BasicFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(ConstantFormatStructure, 'ConstantFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(SignedFormatStructure, 'SignedFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(PropertyWithDefault, 'PropertyWithDefault');
  initMetadataForClass(OptionalFormatStructure, 'OptionalFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(AlternativesParsingFormatStructure, 'AlternativesParsingFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForInterface(Predicate, 'Predicate');
  initMetadataForClass(ComparisonPredicate, 'ComparisonPredicate', VOID, VOID, [Predicate]);
  initMetadataForObject(Truth, 'Truth', VOID, VOID, [Predicate]);
  initMetadataForClass(ConjunctionPredicate, 'ConjunctionPredicate', VOID, VOID, [Predicate]);
  function format$default(obj, builder, minusNotRequired, $super) {
    minusNotRequired = minusNotRequired === VOID ? false : minusNotRequired;
    var tmp;
    if ($super === VOID) {
      this.format_bqb1zl_k$(obj, builder, minusNotRequired);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.format_bqb1zl_k$.call(this, obj, builder, minusNotRequired);
    }
    return tmp;
  }
  initMetadataForInterface(FormatterStructure, 'FormatterStructure');
  initMetadataForClass(SpacePaddedFormatter, 'SpacePaddedFormatter', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(SignedFormatter, 'SignedFormatter', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(ConditionalFormatter, 'ConditionalFormatter', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(ConcatenatedFormatter, 'ConcatenatedFormatter', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(SignedIntFormatterStructure, 'SignedIntFormatterStructure', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(ReducedIntFormatterStructure, 'ReducedIntFormatterStructure', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(UnsignedIntFormatterStructure, 'UnsignedIntFormatterStructure', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(StringFormatterStructure, 'StringFormatterStructure', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(DecimalFractionFormatterStructure, 'DecimalFractionFormatterStructure', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(ConstantStringFormatterStructure, 'ConstantStringFormatterStructure', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(NumberConsumer, 'NumberConsumer');
  initMetadataForClass(FractionPartConsumer, 'FractionPartConsumer', VOID, NumberConsumer);
  initMetadataForClass(ConstantNumberConsumer, 'ConstantNumberConsumer', VOID, NumberConsumer);
  initMetadataForInterface(NumberConsumptionError, 'NumberConsumptionError');
  initMetadataForObject(ExpectedInt, 'ExpectedInt', VOID, VOID, [NumberConsumptionError]);
  initMetadataForClass(TooManyDigits, 'TooManyDigits', VOID, VOID, [NumberConsumptionError]);
  initMetadataForClass(TooFewDigits, 'TooFewDigits', VOID, VOID, [NumberConsumptionError]);
  initMetadataForClass(WrongConstant, 'WrongConstant', VOID, VOID, [NumberConsumptionError]);
  initMetadataForClass(Conflicting, 'Conflicting', VOID, VOID, [NumberConsumptionError]);
  initMetadataForClass(UnsignedIntConsumer, 'UnsignedIntConsumer', VOID, NumberConsumer);
  initMetadataForClass(ReducedIntConsumer, 'ReducedIntConsumer', VOID, NumberConsumer);
  initMetadataForClass(ParseError, 'ParseError');
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(ParseResult, 'ParseResult');
  initMetadataForClass(ParserState, 'ParserState');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(Parser, 'Parser');
  initMetadataForClass(ParserStructure, 'ParserStructure');
  initMetadataForClass(ParseException, 'ParseException', VOID, Exception);
  initMetadataForClass(TrieNode, 'TrieNode', TrieNode);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForInterface(ParserOperation, 'ParserOperation');
  initMetadataForClass(StringSetParserOperation, 'StringSetParserOperation', VOID, VOID, [ParserOperation]);
  initMetadataForClass(NumberSpanParserOperation, 'NumberSpanParserOperation', VOID, VOID, [ParserOperation]);
  initMetadataForClass(PlainStringParserOperation, 'PlainStringParserOperation', VOID, VOID, [ParserOperation]);
  initMetadataForClass(SignParser, 'SignParser', VOID, VOID, [ParserOperation]);
  initMetadataForClass(UnconditionalModification, 'UnconditionalModification', VOID, VOID, [ParserOperation]);
  initMetadataForClass(DecimalFraction, 'DecimalFraction', VOID, VOID, [Comparable]);
  initMetadataForObject(InstantIso8601Serializer, 'InstantIso8601Serializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LocalDateIso8601Serializer, 'LocalDateIso8601Serializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LocalDateTimeIso8601Serializer, 'LocalDateTimeIso8601Serializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LocalTimeIso8601Serializer, 'LocalTimeIso8601Serializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UtcOffsetSerializer, 'UtcOffsetSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(TimeZoneSerializer, 'TimeZoneSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FixedOffsetTimeZoneSerializer, 'FixedOffsetTimeZoneSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(DayOfWeek_0, 'DayOfWeek', VOID, Enum);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(Instant_0, 'Instant', VOID, VOID, [Comparable], VOID, VOID, {0: InstantIso8601Serializer_getInstance});
  initMetadataForCompanion(Companion_12);
  initMetadataForObject(Formats_0, 'Formats');
  initMetadataForClass(LocalDate_0, 'LocalDate', VOID, VOID, [Comparable], VOID, VOID, {0: LocalDateIso8601Serializer_getInstance});
  initMetadataForCompanion(Companion_13);
  initMetadataForObject(Formats_1, 'Formats');
  initMetadataForClass(LocalDateTime_0, 'LocalDateTime', VOID, VOID, [Comparable], VOID, VOID, {0: LocalDateTimeIso8601Serializer_getInstance});
  initMetadataForCompanion(Companion_14);
  initMetadataForObject(Formats_2, 'Formats');
  initMetadataForClass(LocalTime_0, 'LocalTime', VOID, VOID, [Comparable], VOID, VOID, {0: LocalTimeIso8601Serializer_getInstance});
  initMetadataForClass(Month_0, 'Month', VOID, Enum);
  initMetadataForCompanion(Companion_15);
  initMetadataForClass(TimeZone, 'TimeZone', VOID, VOID, VOID, VOID, VOID, {0: TimeZoneSerializer_getInstance});
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(FixedOffsetTimeZone, 'FixedOffsetTimeZone', VOID, TimeZone, VOID, VOID, VOID, {0: FixedOffsetTimeZoneSerializer_getInstance});
  initMetadataForCompanion(Companion_17);
  initMetadataForObject(Formats_3, 'Formats');
  initMetadataForClass(UtcOffset, 'UtcOffset', VOID, VOID, VOID, VOID, VOID, {0: UtcOffsetSerializer_getInstance});
  //endregion
  function System() {
    System_instance = this;
  }
  protoOf(System).now_2cba_k$ = function () {
    return Companion_getInstance_12().now_2cba_k$();
  };
  var System_instance;
  function System_getInstance() {
    if (System_instance == null)
      new System();
    return System_instance;
  }
  function Companion() {
    Companion_instance = this;
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Clock_0() {
  }
  function get_isoDayNumber(_this__u8e3s4) {
    return _this__u8e3s4.get_ordinal_ip24qg_k$() + 1 | 0;
  }
  function DayOfWeek(isoDayNumber) {
    // Inline function 'kotlin.require' call
    if (!(1 <= isoDayNumber ? isoDayNumber <= 7 : false)) {
      // Inline function 'kotlinx.datetime.DayOfWeek.<anonymous>' call
      var message = 'Expected ISO day-of-week number in 1..7, got ' + isoDayNumber;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return get_entries_1().get_c1px32_k$(isoDayNumber - 1 | 0);
  }
  function DateTimeFormatException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$() {
    var tmp = DateTimeFormatException_init_$Init$(objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_0(message) {
    var tmp = DateTimeFormatException_init_$Init$_0(message, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_0);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_1(cause, $this) {
    IllegalArgumentException_init_$Init$_1(cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_1(cause) {
    var tmp = DateTimeFormatException_init_$Init$_1(cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_1);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_2(message, cause, $this) {
    IllegalArgumentException_init_$Init$_2(message, cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_2(message, cause) {
    var tmp = DateTimeFormatException_init_$Init$_2(message, cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_2);
    return tmp;
  }
  function DateTimeFormatException() {
    captureStack(this, DateTimeFormatException);
  }
  function DateTimeArithmeticException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$() {
    var tmp = DateTimeArithmeticException_init_$Init$(objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$);
    return tmp;
  }
  function DateTimeArithmeticException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_0(message) {
    var tmp = DateTimeArithmeticException_init_$Init$_0(message, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_0);
    return tmp;
  }
  function DateTimeArithmeticException_init_$Init$_1(cause, $this) {
    RuntimeException_init_$Init$_1(cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_1(cause) {
    var tmp = DateTimeArithmeticException_init_$Init$_1(cause, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_1);
    return tmp;
  }
  function DateTimeArithmeticException_init_$Init$_2(message, cause, $this) {
    RuntimeException_init_$Init$_2(message, cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_2(message, cause) {
    var tmp = DateTimeArithmeticException_init_$Init$_2(message, cause, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_2);
    return tmp;
  }
  function DateTimeArithmeticException() {
    captureStack(this, DateTimeArithmeticException);
  }
  function IllegalTimeZoneException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$() {
    var tmp = IllegalTimeZoneException_init_$Init$(objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$);
    return tmp;
  }
  function IllegalTimeZoneException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$_0(message) {
    var tmp = IllegalTimeZoneException_init_$Init$_0(message, objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$_0);
    return tmp;
  }
  function IllegalTimeZoneException_init_$Init$_1(cause, $this) {
    IllegalArgumentException_init_$Init$_1(cause, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$_1(cause) {
    var tmp = IllegalTimeZoneException_init_$Init$_1(cause, objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$_1);
    return tmp;
  }
  function IllegalTimeZoneException_init_$Init$_2(message, cause, $this) {
    IllegalArgumentException_init_$Init$_2(message, cause, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$_2(message, cause) {
    var tmp = IllegalTimeZoneException_init_$Init$_2(message, cause, objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$_2);
    return tmp;
  }
  function IllegalTimeZoneException() {
    captureStack(this, IllegalTimeZoneException);
  }
  function get_DISTANT_PAST_SECONDS() {
    return DISTANT_PAST_SECONDS;
  }
  var DISTANT_PAST_SECONDS;
  function get_DISTANT_FUTURE_SECONDS() {
    return DISTANT_FUTURE_SECONDS;
  }
  var DISTANT_FUTURE_SECONDS;
  function getIsoDateFormat() {
    return Formats_getInstance_0().get_ISO_18jrwk_k$();
  }
  function atTime(_this__u8e3s4, time) {
    return LocalDateTime_init_$Create$_1(_this__u8e3s4, time);
  }
  function getIsoDateTimeFormat() {
    return Formats_getInstance_1().get_ISO_18jrwk_k$();
  }
  function getIsoTimeFormat() {
    return Formats_getInstance_2().get_ISO_18jrwk_k$();
  }
  function get_number(_this__u8e3s4) {
    return _this__u8e3s4.get_ordinal_ip24qg_k$() + 1 | 0;
  }
  function Month(number) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(1 <= number ? number <= 12 : false)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return get_entries_2().get_c1px32_k$(number - 1 | 0);
  }
  function getIsoUtcOffsetFormat() {
    return Formats_getInstance_3().get_ISO_18jrwk_k$();
  }
  function asTimeZone(_this__u8e3s4) {
    return FixedOffsetTimeZone_init_$Create$(_this__u8e3s4);
  }
  function get_timeZoneField() {
    _init_properties_DateTimeComponents_kt__9iimb5();
    return timeZoneField;
  }
  var timeZoneField;
  function get_emptyDateTimeComponentsContents() {
    _init_properties_DateTimeComponents_kt__9iimb5();
    return emptyDateTimeComponentsContents;
  }
  var emptyDateTimeComponentsContents;
  function DateTimeComponentsContents(date, time, offset, timeZoneId) {
    date = date === VOID ? new IncompleteLocalDate() : date;
    time = time === VOID ? new IncompleteLocalTime() : time;
    offset = offset === VOID ? new IncompleteUtcOffset() : offset;
    timeZoneId = timeZoneId === VOID ? null : timeZoneId;
    this.date_1 = date;
    this.time_1 = time;
    this.offset_1 = offset;
    this.timeZoneId_1 = timeZoneId;
  }
  protoOf(DateTimeComponentsContents).get_date_wokkxj_k$ = function () {
    return this.date_1;
  };
  protoOf(DateTimeComponentsContents).get_time_wouyhi_k$ = function () {
    return this.time_1;
  };
  protoOf(DateTimeComponentsContents).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(DateTimeComponentsContents).set_timeZoneId_7jni6e_k$ = function (_set____db54di) {
    this.timeZoneId_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).get_timeZoneId_3tgi1v_k$ = function () {
    return this.timeZoneId_1;
  };
  protoOf(DateTimeComponentsContents).set_dayOfMonth_qpi7zl_k$ = function (_set____db54di) {
    this.date_1.set_dayOfMonth_qpi7zl_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_dayOfMonth_vblo3a_k$ = function () {
    return this.date_1.get_dayOfMonth_vblo3a_k$();
  };
  protoOf(DateTimeComponentsContents).set_isoDayOfWeek_65yxmk_k$ = function (_set____db54di) {
    this.date_1.set_isoDayOfWeek_65yxmk_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_isoDayOfWeek_my920b_k$ = function () {
    return this.date_1.get_isoDayOfWeek_my920b_k$();
  };
  protoOf(DateTimeComponentsContents).set_monthNumber_nufdv5_k$ = function (_set____db54di) {
    this.date_1.set_monthNumber_nufdv5_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_monthNumber_nb47ls_k$ = function () {
    return this.date_1.get_monthNumber_nb47ls_k$();
  };
  protoOf(DateTimeComponentsContents).set_year_8yykwv_k$ = function (_set____db54di) {
    this.date_1.set_year_8yykwv_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_year_woy26e_k$ = function () {
    return this.date_1.get_year_woy26e_k$();
  };
  protoOf(DateTimeComponentsContents).set_amPm_5mqo57_k$ = function (_set____db54di) {
    this.time_1.set_amPm_5mqo57_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_amPm_woiw0i_k$ = function () {
    return this.time_1.get_amPm_woiw0i_k$();
  };
  protoOf(DateTimeComponentsContents).set_fractionOfSecond_ixjooe_k$ = function (value) {
    this.time_1.set_fractionOfSecond_ixjooe_k$(value);
  };
  protoOf(DateTimeComponentsContents).get_fractionOfSecond_3ubmju_k$ = function () {
    return this.time_1.get_fractionOfSecond_3ubmju_k$();
  };
  protoOf(DateTimeComponentsContents).set_hour_cn99tm_k$ = function (_set____db54di) {
    this.time_1.set_hour_cn99tm_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_hour_wonfal_k$ = function () {
    return this.time_1.get_hour_wonfal_k$();
  };
  protoOf(DateTimeComponentsContents).set_hourOfAmPm_4kn0va_k$ = function (_set____db54di) {
    this.time_1.set_hourOfAmPm_4kn0va_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_hourOfAmPm_c9obsj_k$ = function () {
    return this.time_1.get_hourOfAmPm_c9obsj_k$();
  };
  protoOf(DateTimeComponentsContents).set_minute_35xlhm_k$ = function (_set____db54di) {
    this.time_1.set_minute_35xlhm_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_minute_gnc10d_k$ = function () {
    return this.time_1.get_minute_gnc10d_k$();
  };
  protoOf(DateTimeComponentsContents).set_nanosecond_xpjfxy_k$ = function (_set____db54di) {
    this.time_1.set_nanosecond_xpjfxy_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_nanosecond_fws9td_k$ = function () {
    return this.time_1.get_nanosecond_fws9td_k$();
  };
  protoOf(DateTimeComponentsContents).set_second_5q0zme_k$ = function (_set____db54di) {
    this.time_1.set_second_5q0zme_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_second_jf7fjx_k$ = function () {
    return this.time_1.get_second_jf7fjx_k$();
  };
  protoOf(DateTimeComponentsContents).set_isNegative_wsta3o_k$ = function (_set____db54di) {
    this.offset_1.set_isNegative_wsta3o_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_isNegative_i24zqw_k$ = function () {
    return this.offset_1.get_isNegative_i24zqw_k$();
  };
  protoOf(DateTimeComponentsContents).set_minutesOfHour_yz9dnm_k$ = function (_set____db54di) {
    this.offset_1.set_minutesOfHour_yz9dnm_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_minutesOfHour_eg2iof_k$ = function () {
    return this.offset_1.get_minutesOfHour_eg2iof_k$();
  };
  protoOf(DateTimeComponentsContents).set_secondsOfMinute_752ar6_k$ = function (_set____db54di) {
    this.offset_1.set_secondsOfMinute_752ar6_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_secondsOfMinute_kbv2wx_k$ = function () {
    return this.offset_1.get_secondsOfMinute_kbv2wx_k$();
  };
  protoOf(DateTimeComponentsContents).set_totalHoursAbs_snwz1t_k$ = function (_set____db54di) {
    this.offset_1.set_totalHoursAbs_snwz1t_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_totalHoursAbs_4tff1e_k$ = function () {
    return this.offset_1.get_totalHoursAbs_4tff1e_k$();
  };
  protoOf(DateTimeComponentsContents).copy_1tks5_k$ = function () {
    return new DateTimeComponentsContents(this.date_1.copy_1tks5_k$(), this.time_1.copy_1tks5_k$(), this.offset_1.copy_1tks5_k$(), this.timeZoneId_1);
  };
  protoOf(DateTimeComponentsContents).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof DateTimeComponentsContents) {
      tmp_2 = other.date_1.equals(this.date_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.time_1.equals(this.time_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.offset_1.equals(this.offset_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.timeZoneId_1 == this.timeZoneId_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DateTimeComponentsContents).hashCode = function () {
    var tmp = this.date_1.hashCode() ^ this.time_1.hashCode() ^ this.offset_1.hashCode();
    var tmp0_safe_receiver = this.timeZoneId_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
  };
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda($this$Format) {
    $this$Format.date_aq11yp_k$(get_ISO_DATE());
    var tmp = [DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda];
    alternativeParsing($this$Format, tmp, DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_0);
    $this$Format.hour$default_sexqwx_k$();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.minute$default_g584a9_k$();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.second$default_h6j21d_k$();
    optional($this$Format, VOID, DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_1);
    var tmp_0 = [DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_2];
    alternativeParsing($this$Format, tmp_0, DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_3);
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda($this$alternativeParsing) {
    char($this$alternativeParsing, _Char___init__impl__6a9atx(116));
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_0($this$alternativeParsing) {
    char($this$alternativeParsing, _Char___init__impl__6a9atx(84));
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_1($this$optional) {
    char($this$optional, _Char___init__impl__6a9atx(46));
    $this$optional.secondFraction_6m5e86_k$(1, 9);
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_2($this$alternativeParsing) {
    $this$alternativeParsing.offsetHours$default_2ga4wd_k$();
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_3($this$alternativeParsing) {
    $this$alternativeParsing.offset_8ge9gu_k$(Formats_getInstance_3().get_ISO_18jrwk_k$());
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$RFC_1123$lambda($this$Format) {
    var tmp = [DateTimeComponents$Formats$RFC_1123$lambda$lambda];
    alternativeParsing($this$Format, tmp, DateTimeComponents$Formats$RFC_1123$lambda$lambda_0);
    $this$Format.dayOfMonth_xcq6p3_k$(Padding_NONE_getInstance());
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.monthName_asbkgr_k$(Companion_getInstance_3().get_ENGLISH_ABBREVIATED_cfvc81_k$());
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.year$default_562wrd_k$();
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.hour$default_sexqwx_k$();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.minute$default_g584a9_k$();
    optional($this$Format, VOID, DateTimeComponents$Formats$RFC_1123$lambda$lambda_1);
    $this$Format.chars_pe6iqb_k$(' ');
    var tmp_0 = DateTimeComponents$Formats$RFC_1123$lambda$lambda_2;
    var tmp_1 = [tmp_0, DateTimeComponents$Formats$RFC_1123$lambda$lambda_3];
    alternativeParsing($this$Format, tmp_1, DateTimeComponents$Formats$RFC_1123$lambda$lambda_4);
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda($this$alternativeParsing) {
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_0($this$alternativeParsing) {
    $this$alternativeParsing.dayOfWeek_tn8lxa_k$(Companion_getInstance_4().get_ENGLISH_ABBREVIATED_cfvc81_k$());
    $this$alternativeParsing.chars_pe6iqb_k$(', ');
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_1($this$optional) {
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.second$default_h6j21d_k$();
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_2($this$alternativeParsing) {
    $this$alternativeParsing.chars_pe6iqb_k$('UT');
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_3($this$alternativeParsing) {
    $this$alternativeParsing.chars_pe6iqb_k$('Z');
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_4($this$alternativeParsing) {
    optional($this$alternativeParsing, 'GMT', DateTimeComponents$Formats$RFC_1123$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda$lambda($this$optional) {
    $this$optional.offset_8ge9gu_k$(Formats_getInstance_3().get_FOUR_DIGITS_7a8eh6_k$());
    return Unit_getInstance();
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).Format_xzgceo_k$ = function (block) {
    var builder = new Builder(new AppendableFormatStructure());
    block(builder);
    return new DateTimeComponentsFormat(builder.build_1k0s4u_k$());
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Formats() {
    Formats_instance = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_1();
    tmp.ISO_DATE_TIME_OFFSET_1 = tmp_0.Format_xzgceo_k$(DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda);
    var tmp_1 = this;
    var tmp_2 = Companion_getInstance_1();
    tmp_1.RFC_1123__1 = tmp_2.Format_xzgceo_k$(DateTimeComponents$Formats$RFC_1123$lambda);
  }
  protoOf(Formats).get_ISO_DATE_TIME_OFFSET_7s4r8p_k$ = function () {
    return this.ISO_DATE_TIME_OFFSET_1;
  };
  protoOf(Formats).get_RFC_1123_h6865i_k$ = function () {
    return this.RFC_1123__1;
  };
  var Formats_instance;
  function Formats_getInstance() {
    if (Formats_instance == null)
      new Formats();
    return Formats_instance;
  }
  function DateTimeComponents(contents) {
    Companion_getInstance_1();
    contents = contents === VOID ? new DateTimeComponentsContents() : contents;
    this.contents_1 = contents;
    this.year$delegate_1 = year$factory(this.contents_1.date_1);
    this.monthNumber$delegate_1 = new TwoDigitNumber(monthNumber$factory(this.contents_1.date_1));
    this.dayOfMonth$delegate_1 = new TwoDigitNumber(dayOfMonth$factory(this.contents_1.date_1));
    this.hour$delegate_1 = new TwoDigitNumber(hour$factory(this.contents_1.time_1));
    this.hourOfAmPm$delegate_1 = new TwoDigitNumber(hourOfAmPm$factory(this.contents_1.time_1));
    this.amPm$delegate_1 = amPm$factory(this.contents_1.time_1);
    this.minute$delegate_1 = new TwoDigitNumber(minute$factory(this.contents_1.time_1));
    this.second$delegate_1 = new TwoDigitNumber(second$factory(this.contents_1.time_1));
    this.offsetIsNegative$delegate_1 = isNegative$factory(this.contents_1.offset_1);
    this.offsetHours$delegate_1 = new TwoDigitNumber(totalHoursAbs$factory(this.contents_1.offset_1));
    this.offsetMinutesOfHour$delegate_1 = new TwoDigitNumber(minutesOfHour$factory(this.contents_1.offset_1));
    this.offsetSecondsOfMinute$delegate_1 = new TwoDigitNumber(secondsOfMinute$factory(this.contents_1.offset_1));
    this.timeZoneId$delegate_1 = timeZoneId$factory_0(this.contents_1);
  }
  protoOf(DateTimeComponents).get_contents_9ljh8a_k$ = function () {
    return this.contents_1;
  };
  protoOf(DateTimeComponents).setTime_pvaj0a_k$ = function (localTime) {
    this.contents_1.time_1.populateFrom_n7wbcx_k$(localTime);
  };
  protoOf(DateTimeComponents).setDate_kbmxaz_k$ = function (localDate) {
    this.contents_1.date_1.populateFrom_mbc3c1_k$(localDate);
  };
  protoOf(DateTimeComponents).setDateTime_4yjers_k$ = function (localDateTime) {
    this.contents_1.date_1.populateFrom_mbc3c1_k$(localDateTime.get_date_wokkxj_k$());
    this.contents_1.time_1.populateFrom_n7wbcx_k$(localDateTime.get_time_wouyhi_k$());
  };
  protoOf(DateTimeComponents).setOffset_ryl2tq_k$ = function (utcOffset) {
    this.contents_1.offset_1.populateFrom_543lw3_k$(utcOffset);
  };
  protoOf(DateTimeComponents).setDateTimeOffset_t1ks5q_k$ = function (instant, utcOffset) {
    var smallerInstant = Companion_getInstance_12().fromEpochSeconds_idu11y_k$(instant.get_epochSeconds_w76ght_k$().rem_bsnl9o_k$(new Long(2036907392, 73)), instant.get_nanosecondsOfSecond_n2ey8j_k$());
    this.setDateTime_4yjers_k$(toLocalDateTime(smallerInstant, utcOffset));
    this.setOffset_ryl2tq_k$(utcOffset);
    var tmp = ensureNotNull(this.get_year_woy26e_k$());
    // Inline function 'kotlin.Long.times' call
    var tmp$ret$0 = instant.get_epochSeconds_w76ght_k$().div_jun7gj_k$(new Long(2036907392, 73)).times_nfzjiw_k$(toLong(10000));
    this.set_year_8yykwv_k$(tmp + tmp$ret$0.toInt_1tsl84_k$() | 0);
  };
  protoOf(DateTimeComponents).setDateTimeOffset_4pzgb6_k$ = function (localDateTime, utcOffset) {
    this.setDateTime_4yjers_k$(localDateTime);
    this.setOffset_ryl2tq_k$(utcOffset);
  };
  protoOf(DateTimeComponents).set_year_8yykwv_k$ = function (_set____db54di) {
    var tmp0 = this.year$delegate_1;
    year$factory_0();
    tmp0.set(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(DateTimeComponents).get_year_woy26e_k$ = function () {
    var tmp0 = this.year$delegate_1;
    // Inline function 'kotlin.getValue' call
    year$factory_1();
    return tmp0.get();
  };
  protoOf(DateTimeComponents).set_monthNumber_nufdv5_k$ = function (_set____db54di) {
    return this.monthNumber$delegate_1.setValue_9mhtjx_k$(this, monthNumber$factory_0(), _set____db54di);
  };
  protoOf(DateTimeComponents).get_monthNumber_nb47ls_k$ = function () {
    return this.monthNumber$delegate_1.getValue_fbnwi2_k$(this, monthNumber$factory_1());
  };
  protoOf(DateTimeComponents).set_month_ygxyco_k$ = function (value) {
    this.set_monthNumber_nufdv5_k$(value == null ? null : get_number(value));
  };
  protoOf(DateTimeComponents).get_month_ivc8d3_k$ = function () {
    var tmp0_safe_receiver = this.get_monthNumber_nb47ls_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.DateTimeComponents.<get-month>.<anonymous>' call
      tmp = Month(tmp0_safe_receiver);
    }
    return tmp;
  };
  protoOf(DateTimeComponents).set_dayOfMonth_qpi7zl_k$ = function (_set____db54di) {
    return this.dayOfMonth$delegate_1.setValue_9mhtjx_k$(this, dayOfMonth$factory_0(), _set____db54di);
  };
  protoOf(DateTimeComponents).get_dayOfMonth_vblo3a_k$ = function () {
    return this.dayOfMonth$delegate_1.getValue_fbnwi2_k$(this, dayOfMonth$factory_1());
  };
  protoOf(DateTimeComponents).set_dayOfWeek_9qa7f3_k$ = function (value) {
    this.contents_1.date_1.set_isoDayOfWeek_65yxmk_k$(value == null ? null : get_isoDayNumber(value));
  };
  protoOf(DateTimeComponents).get_dayOfWeek_3kfgci_k$ = function () {
    var tmp0_safe_receiver = this.contents_1.date_1.get_isoDayOfWeek_my920b_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.DateTimeComponents.<get-dayOfWeek>.<anonymous>' call
      tmp = DayOfWeek(tmp0_safe_receiver);
    }
    return tmp;
  };
  protoOf(DateTimeComponents).set_hour_cn99tm_k$ = function (_set____db54di) {
    return this.hour$delegate_1.setValue_9mhtjx_k$(this, hour$factory_0(), _set____db54di);
  };
  protoOf(DateTimeComponents).get_hour_wonfal_k$ = function () {
    return this.hour$delegate_1.getValue_fbnwi2_k$(this, hour$factory_1());
  };
  protoOf(DateTimeComponents).set_hourOfAmPm_4kn0va_k$ = function (_set____db54di) {
    return this.hourOfAmPm$delegate_1.setValue_9mhtjx_k$(this, hourOfAmPm$factory_0(), _set____db54di);
  };
  protoOf(DateTimeComponents).get_hourOfAmPm_c9obsj_k$ = function () {
    return this.hourOfAmPm$delegate_1.getValue_fbnwi2_k$(this, hourOfAmPm$factory_1());
  };
  protoOf(DateTimeComponents).set_amPm_5mqo57_k$ = function (_set____db54di) {
    var tmp0 = this.amPm$delegate_1;
    amPm$factory_0();
    tmp0.set(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(DateTimeComponents).get_amPm_woiw0i_k$ = function () {
    var tmp0 = this.amPm$delegate_1;
    // Inline function 'kotlin.getValue' call
    amPm$factory_1();
    return tmp0.get();
  };
  protoOf(DateTimeComponents).set_minute_35xlhm_k$ = function (_set____db54di) {
    return this.minute$delegate_1.setValue_9mhtjx_k$(this, minute$factory_0(), _set____db54di);
  };
  protoOf(DateTimeComponents).get_minute_gnc10d_k$ = function () {
    return this.minute$delegate_1.getValue_fbnwi2_k$(this, minute$factory_1());
  };
  protoOf(DateTimeComponents).set_second_5q0zme_k$ = function (_set____db54di) {
    return this.second$delegate_1.setValue_9mhtjx_k$(this, second$factory_0(), _set____db54di);
  };
  protoOf(DateTimeComponents).get_second_jf7fjx_k$ = function () {
    return this.second$delegate_1.getValue_fbnwi2_k$(this, second$factory_1());
  };
  protoOf(DateTimeComponents).set_nanosecond_xpjfxy_k$ = function (value) {
    // Inline function 'kotlin.require' call
    if (!(value == null || numberRangeToNumber(0, 999999999).contains_7q95ev_k$(value))) {
      // Inline function 'kotlinx.datetime.format.DateTimeComponents.<set-nanosecond>.<anonymous>' call
      var message = 'Nanosecond must be in the range [0, 999_999_999].';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.contents_1.time_1.set_nanosecond_xpjfxy_k$(value);
  };
  protoOf(DateTimeComponents).get_nanosecond_fws9td_k$ = function () {
    return this.contents_1.time_1.get_nanosecond_fws9td_k$();
  };
  protoOf(DateTimeComponents).set_offsetIsNegative_lg0w0f_k$ = function (_set____db54di) {
    var tmp0 = this.offsetIsNegative$delegate_1;
    offsetIsNegative$factory();
    tmp0.set(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(DateTimeComponents).get_offsetIsNegative_5z1gsb_k$ = function () {
    var tmp0 = this.offsetIsNegative$delegate_1;
    // Inline function 'kotlin.getValue' call
    offsetIsNegative$factory_0();
    return tmp0.get();
  };
  protoOf(DateTimeComponents).set_offsetHours_5m57ic_k$ = function (_set____db54di) {
    return this.offsetHours$delegate_1.setValue_9mhtjx_k$(this, offsetHours$factory(), _set____db54di);
  };
  protoOf(DateTimeComponents).get_offsetHours_yn9exf_k$ = function () {
    return this.offsetHours$delegate_1.getValue_fbnwi2_k$(this, offsetHours$factory_0());
  };
  protoOf(DateTimeComponents).set_offsetMinutesOfHour_lotc9b_k$ = function (_set____db54di) {
    return this.offsetMinutesOfHour$delegate_1.setValue_9mhtjx_k$(this, offsetMinutesOfHour$factory(), _set____db54di);
  };
  protoOf(DateTimeComponents).get_offsetMinutesOfHour_p1w44e_k$ = function () {
    return this.offsetMinutesOfHour$delegate_1.getValue_fbnwi2_k$(this, offsetMinutesOfHour$factory_0());
  };
  protoOf(DateTimeComponents).set_offsetSecondsOfMinute_kv6vfj_k$ = function (_set____db54di) {
    return this.offsetSecondsOfMinute$delegate_1.setValue_9mhtjx_k$(this, offsetSecondsOfMinute$factory(), _set____db54di);
  };
  protoOf(DateTimeComponents).get_offsetSecondsOfMinute_mpvmxe_k$ = function () {
    return this.offsetSecondsOfMinute$delegate_1.getValue_fbnwi2_k$(this, offsetSecondsOfMinute$factory_0());
  };
  protoOf(DateTimeComponents).set_timeZoneId_7jni6e_k$ = function (_set____db54di) {
    var tmp0 = this.timeZoneId$delegate_1;
    timeZoneId$factory_1();
    tmp0.set(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(DateTimeComponents).get_timeZoneId_3tgi1v_k$ = function () {
    var tmp0 = this.timeZoneId$delegate_1;
    // Inline function 'kotlin.getValue' call
    timeZoneId$factory_2();
    return tmp0.get();
  };
  protoOf(DateTimeComponents).toUtcOffset_loe12c_k$ = function () {
    return this.contents_1.offset_1.toUtcOffset_loe12c_k$();
  };
  protoOf(DateTimeComponents).toLocalDate_u88f42_k$ = function () {
    return this.contents_1.date_1.toLocalDate_u88f42_k$();
  };
  protoOf(DateTimeComponents).toLocalTime_u7y1k3_k$ = function () {
    return this.contents_1.time_1.toLocalTime_u7y1k3_k$();
  };
  protoOf(DateTimeComponents).toLocalDateTime_5q5ehh_k$ = function () {
    return atTime(this.toLocalDate_u88f42_k$(), this.toLocalTime_u7y1k3_k$());
  };
  protoOf(DateTimeComponents).toInstantUsingOffset_6s0427_k$ = function () {
    var offset = this.toUtcOffset_loe12c_k$();
    var time = this.toLocalTime_u7y1k3_k$();
    var truncatedDate = this.contents_1.date_1.copy_1tks5_k$();
    truncatedDate.set_year_8yykwv_k$(requireParsedField(truncatedDate.get_year_woy26e_k$(), 'year') % 10000 | 0);
    var tmp;
    try {
      var secDelta = safeMultiply(toLong(ensureNotNull(this.get_year_woy26e_k$()) / 10000 | 0), new Long(2036907392, 73));
      var epochDays = toLong(truncatedDate.toLocalDate_u88f42_k$().toEpochDays_tp9eth_k$());
      // Inline function 'kotlin.Long.times' call
      var tmp2 = epochDays.times_nfzjiw_k$(toLong(86400));
      // Inline function 'kotlin.Long.plus' call
      var other = time.toSecondOfDay_a2clsa_k$();
      var tmp4 = tmp2.plus_r93sks_k$(toLong(other));
      // Inline function 'kotlin.Long.minus' call
      var other_0 = offset.get_totalSeconds_oq5924_k$();
      var tmp$ret$2 = tmp4.minus_mfbszm_k$(toLong(other_0));
      tmp = safeAdd(secDelta, tmp$ret$2);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ArithmeticException) {
        var e = $p;
        throw DateTimeFormatException_init_$Create$_2('The parsed date is outside the range representable by Instant', e);
      } else {
        throw $p;
      }
    }
    var totalSeconds = tmp;
    if (totalSeconds.compareTo_9jj042_k$(Companion_getInstance_12().get_MIN_za2zu4_k$().get_epochSeconds_w76ght_k$()) < 0 || totalSeconds.compareTo_9jj042_k$(Companion_getInstance_12().get_MAX_ieaqrm_k$().get_epochSeconds_w76ght_k$()) > 0)
      throw DateTimeFormatException_init_$Create$_0('The parsed date is outside the range representable by Instant');
    var tmp_1 = Companion_getInstance_12();
    var tmp0_elvis_lhs = this.get_nanosecond_fws9td_k$();
    return tmp_1.fromEpochSeconds_idu11y_k$(totalSeconds, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs);
  };
  function Builder(actualBuilder) {
    this.actualBuilder_1 = actualBuilder;
  }
  protoOf(Builder).get_actualBuilder_7qypdo_k$ = function () {
    return this.actualBuilder_1;
  };
  protoOf(Builder).addFormatStructureForDateTime_noiy5b_k$ = function (structure) {
    this.actualBuilder_1.add_b6pdwl_k$(structure);
  };
  protoOf(Builder).addFormatStructureForOffset_puuf83_k$ = function (structure) {
    this.actualBuilder_1.add_b6pdwl_k$(structure);
  };
  protoOf(Builder).timeZoneId_ev7lfo_k$ = function () {
    return this.actualBuilder_1.add_b6pdwl_k$(new BasicFormatStructure(new TimeZoneIdDirective(Companion_getInstance_16().get_availableZoneIds_kceyfo_k$())));
  };
  protoOf(Builder).dateTimeComponents_bpc9lu_k$ = function (format) {
    var tmp;
    if (format instanceof DateTimeComponentsFormat) {
      this.actualBuilder_1.add_b6pdwl_k$(format.actualFormat_1);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Builder).createEmpty_8k9z67_k$ = function () {
    return new Builder(new AppendableFormatStructure());
  };
  function DateTimeComponentsFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.actualFormat_1 = actualFormat;
  }
  protoOf(DateTimeComponentsFormat).get_actualFormat_d0ha3y_k$ = function () {
    return this.actualFormat_1;
  };
  protoOf(DateTimeComponentsFormat).intermediateFromValue_1ocfa3_k$ = function (value) {
    return value.contents_1;
  };
  protoOf(DateTimeComponentsFormat).intermediateFromValue_816pep_k$ = function (value) {
    return this.intermediateFromValue_1ocfa3_k$(value instanceof DateTimeComponents ? value : THROW_CCE());
  };
  protoOf(DateTimeComponentsFormat).valueFromIntermediate_2jpc8n_k$ = function (intermediate) {
    return new DateTimeComponents(intermediate);
  };
  protoOf(DateTimeComponentsFormat).valueFromIntermediate_60ox3m_k$ = function (intermediate) {
    return this.valueFromIntermediate_2jpc8n_k$(intermediate instanceof DateTimeComponentsContents ? intermediate : THROW_CCE());
  };
  protoOf(DateTimeComponentsFormat).get_emptyIntermediate_lysuyr_k$ = function () {
    return get_emptyDateTimeComponentsContents();
  };
  function _get_reference__19y5ba($this) {
    return $this.reference_1;
  }
  function TwoDigitNumber(reference) {
    this.reference_1 = reference;
  }
  protoOf(TwoDigitNumber).getValue_fbnwi2_k$ = function (thisRef, property) {
    // Inline function 'kotlin.getValue' call
    return this.reference_1.get();
  };
  protoOf(TwoDigitNumber).setValue_9mhtjx_k$ = function (thisRef, property, value) {
    // Inline function 'kotlin.require' call
    if (!(value === null || numberRangeToNumber(0, 99).contains_7q95ev_k$(value))) {
      // Inline function 'kotlinx.datetime.format.TwoDigitNumber.setValue.<anonymous>' call
      var message = property.callableName + " must be a two-digit number, got '" + value + "'";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.setValue' call
    this.reference_1.set(value);
  };
  function _get_knownZones__lycwxl($this) {
    return $this.knownZones_1;
  }
  function TimeZoneIdDirective(knownZones) {
    StringFieldFormatDirective.call(this, get_timeZoneField(), knownZones);
    this.knownZones_1 = knownZones;
  }
  protoOf(TimeZoneIdDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return 'timeZoneId()';
  };
  protoOf(TimeZoneIdDirective).equals = function (other) {
    var tmp;
    if (other instanceof TimeZoneIdDirective) {
      tmp = equals(other.knownZones_1, this.knownZones_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TimeZoneIdDirective).hashCode = function () {
    return hashCode(this.knownZones_1);
  };
  function timeZoneId$factory() {
    return getPropertyCallableRef('timeZoneId', 1, KMutableProperty1, function (receiver) {
      return receiver.timeZoneId_1;
    }, function (receiver, value) {
      receiver.timeZoneId_1 = value;
      return Unit_getInstance();
    });
  }
  function year$factory($b0) {
    return getPropertyCallableRef('year', 0, KMutableProperty0, function () {
      return $b0.get_year_woy26e_k$();
    }, function (value) {
      return $b0.set_year_8yykwv_k$(value);
    });
  }
  function monthNumber$factory($b0) {
    return getPropertyCallableRef('monthNumber', 0, KMutableProperty0, function () {
      return $b0.get_monthNumber_nb47ls_k$();
    }, function (value) {
      return $b0.set_monthNumber_nufdv5_k$(value);
    });
  }
  function dayOfMonth$factory($b0) {
    return getPropertyCallableRef('dayOfMonth', 0, KMutableProperty0, function () {
      return $b0.get_dayOfMonth_vblo3a_k$();
    }, function (value) {
      return $b0.set_dayOfMonth_qpi7zl_k$(value);
    });
  }
  function hour$factory($b0) {
    return getPropertyCallableRef('hour', 0, KMutableProperty0, function () {
      return $b0.get_hour_wonfal_k$();
    }, function (value) {
      return $b0.set_hour_cn99tm_k$(value);
    });
  }
  function hourOfAmPm$factory($b0) {
    return getPropertyCallableRef('hourOfAmPm', 0, KMutableProperty0, function () {
      return $b0.get_hourOfAmPm_c9obsj_k$();
    }, function (value) {
      return $b0.set_hourOfAmPm_4kn0va_k$(value);
    });
  }
  function amPm$factory($b0) {
    return getPropertyCallableRef('amPm', 0, KMutableProperty0, function () {
      return $b0.get_amPm_woiw0i_k$();
    }, function (value) {
      return $b0.set_amPm_5mqo57_k$(value);
    });
  }
  function minute$factory($b0) {
    return getPropertyCallableRef('minute', 0, KMutableProperty0, function () {
      return $b0.get_minute_gnc10d_k$();
    }, function (value) {
      return $b0.set_minute_35xlhm_k$(value);
    });
  }
  function second$factory($b0) {
    return getPropertyCallableRef('second', 0, KMutableProperty0, function () {
      return $b0.get_second_jf7fjx_k$();
    }, function (value) {
      return $b0.set_second_5q0zme_k$(value);
    });
  }
  function isNegative$factory($b0) {
    return getPropertyCallableRef('isNegative', 0, KMutableProperty0, function () {
      return $b0.get_isNegative_i24zqw_k$();
    }, function (value) {
      return $b0.set_isNegative_wsta3o_k$(value);
    });
  }
  function totalHoursAbs$factory($b0) {
    return getPropertyCallableRef('totalHoursAbs', 0, KMutableProperty0, function () {
      return $b0.get_totalHoursAbs_4tff1e_k$();
    }, function (value) {
      return $b0.set_totalHoursAbs_snwz1t_k$(value);
    });
  }
  function minutesOfHour$factory($b0) {
    return getPropertyCallableRef('minutesOfHour', 0, KMutableProperty0, function () {
      return $b0.get_minutesOfHour_eg2iof_k$();
    }, function (value) {
      return $b0.set_minutesOfHour_yz9dnm_k$(value);
    });
  }
  function secondsOfMinute$factory($b0) {
    return getPropertyCallableRef('secondsOfMinute', 0, KMutableProperty0, function () {
      return $b0.get_secondsOfMinute_kbv2wx_k$();
    }, function (value) {
      return $b0.set_secondsOfMinute_752ar6_k$(value);
    });
  }
  function timeZoneId$factory_0($b0) {
    return getPropertyCallableRef('timeZoneId', 0, KMutableProperty0, function () {
      return $b0.timeZoneId_1;
    }, function (value) {
      $b0.timeZoneId_1 = value;
      return Unit_getInstance();
    });
  }
  function year$factory_0() {
    return getPropertyCallableRef('year', 1, KMutableProperty1, function (receiver) {
      return receiver.get_year_woy26e_k$();
    }, function (receiver, value) {
      return receiver.set_year_8yykwv_k$(value);
    });
  }
  function year$factory_1() {
    return getPropertyCallableRef('year', 1, KMutableProperty1, function (receiver) {
      return receiver.get_year_woy26e_k$();
    }, function (receiver, value) {
      return receiver.set_year_8yykwv_k$(value);
    });
  }
  function monthNumber$factory_0() {
    return getPropertyCallableRef('monthNumber', 1, KMutableProperty1, function (receiver) {
      return receiver.get_monthNumber_nb47ls_k$();
    }, function (receiver, value) {
      return receiver.set_monthNumber_nufdv5_k$(value);
    });
  }
  function monthNumber$factory_1() {
    return getPropertyCallableRef('monthNumber', 1, KMutableProperty1, function (receiver) {
      return receiver.get_monthNumber_nb47ls_k$();
    }, function (receiver, value) {
      return receiver.set_monthNumber_nufdv5_k$(value);
    });
  }
  function dayOfMonth$factory_0() {
    return getPropertyCallableRef('dayOfMonth', 1, KMutableProperty1, function (receiver) {
      return receiver.get_dayOfMonth_vblo3a_k$();
    }, function (receiver, value) {
      return receiver.set_dayOfMonth_qpi7zl_k$(value);
    });
  }
  function dayOfMonth$factory_1() {
    return getPropertyCallableRef('dayOfMonth', 1, KMutableProperty1, function (receiver) {
      return receiver.get_dayOfMonth_vblo3a_k$();
    }, function (receiver, value) {
      return receiver.set_dayOfMonth_qpi7zl_k$(value);
    });
  }
  function hour$factory_0() {
    return getPropertyCallableRef('hour', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hour_wonfal_k$();
    }, function (receiver, value) {
      return receiver.set_hour_cn99tm_k$(value);
    });
  }
  function hour$factory_1() {
    return getPropertyCallableRef('hour', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hour_wonfal_k$();
    }, function (receiver, value) {
      return receiver.set_hour_cn99tm_k$(value);
    });
  }
  function hourOfAmPm$factory_0() {
    return getPropertyCallableRef('hourOfAmPm', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hourOfAmPm_c9obsj_k$();
    }, function (receiver, value) {
      return receiver.set_hourOfAmPm_4kn0va_k$(value);
    });
  }
  function hourOfAmPm$factory_1() {
    return getPropertyCallableRef('hourOfAmPm', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hourOfAmPm_c9obsj_k$();
    }, function (receiver, value) {
      return receiver.set_hourOfAmPm_4kn0va_k$(value);
    });
  }
  function amPm$factory_0() {
    return getPropertyCallableRef('amPm', 1, KMutableProperty1, function (receiver) {
      return receiver.get_amPm_woiw0i_k$();
    }, function (receiver, value) {
      return receiver.set_amPm_5mqo57_k$(value);
    });
  }
  function amPm$factory_1() {
    return getPropertyCallableRef('amPm', 1, KMutableProperty1, function (receiver) {
      return receiver.get_amPm_woiw0i_k$();
    }, function (receiver, value) {
      return receiver.set_amPm_5mqo57_k$(value);
    });
  }
  function minute$factory_0() {
    return getPropertyCallableRef('minute', 1, KMutableProperty1, function (receiver) {
      return receiver.get_minute_gnc10d_k$();
    }, function (receiver, value) {
      return receiver.set_minute_35xlhm_k$(value);
    });
  }
  function minute$factory_1() {
    return getPropertyCallableRef('minute', 1, KMutableProperty1, function (receiver) {
      return receiver.get_minute_gnc10d_k$();
    }, function (receiver, value) {
      return receiver.set_minute_35xlhm_k$(value);
    });
  }
  function second$factory_0() {
    return getPropertyCallableRef('second', 1, KMutableProperty1, function (receiver) {
      return receiver.get_second_jf7fjx_k$();
    }, function (receiver, value) {
      return receiver.set_second_5q0zme_k$(value);
    });
  }
  function second$factory_1() {
    return getPropertyCallableRef('second', 1, KMutableProperty1, function (receiver) {
      return receiver.get_second_jf7fjx_k$();
    }, function (receiver, value) {
      return receiver.set_second_5q0zme_k$(value);
    });
  }
  function offsetIsNegative$factory() {
    return getPropertyCallableRef('offsetIsNegative', 1, KMutableProperty1, function (receiver) {
      return receiver.get_offsetIsNegative_5z1gsb_k$();
    }, function (receiver, value) {
      return receiver.set_offsetIsNegative_lg0w0f_k$(value);
    });
  }
  function offsetIsNegative$factory_0() {
    return getPropertyCallableRef('offsetIsNegative', 1, KMutableProperty1, function (receiver) {
      return receiver.get_offsetIsNegative_5z1gsb_k$();
    }, function (receiver, value) {
      return receiver.set_offsetIsNegative_lg0w0f_k$(value);
    });
  }
  function offsetHours$factory() {
    return getPropertyCallableRef('offsetHours', 1, KMutableProperty1, function (receiver) {
      return receiver.get_offsetHours_yn9exf_k$();
    }, function (receiver, value) {
      return receiver.set_offsetHours_5m57ic_k$(value);
    });
  }
  function offsetHours$factory_0() {
    return getPropertyCallableRef('offsetHours', 1, KMutableProperty1, function (receiver) {
      return receiver.get_offsetHours_yn9exf_k$();
    }, function (receiver, value) {
      return receiver.set_offsetHours_5m57ic_k$(value);
    });
  }
  function offsetMinutesOfHour$factory() {
    return getPropertyCallableRef('offsetMinutesOfHour', 1, KMutableProperty1, function (receiver) {
      return receiver.get_offsetMinutesOfHour_p1w44e_k$();
    }, function (receiver, value) {
      return receiver.set_offsetMinutesOfHour_lotc9b_k$(value);
    });
  }
  function offsetMinutesOfHour$factory_0() {
    return getPropertyCallableRef('offsetMinutesOfHour', 1, KMutableProperty1, function (receiver) {
      return receiver.get_offsetMinutesOfHour_p1w44e_k$();
    }, function (receiver, value) {
      return receiver.set_offsetMinutesOfHour_lotc9b_k$(value);
    });
  }
  function offsetSecondsOfMinute$factory() {
    return getPropertyCallableRef('offsetSecondsOfMinute', 1, KMutableProperty1, function (receiver) {
      return receiver.get_offsetSecondsOfMinute_mpvmxe_k$();
    }, function (receiver, value) {
      return receiver.set_offsetSecondsOfMinute_kv6vfj_k$(value);
    });
  }
  function offsetSecondsOfMinute$factory_0() {
    return getPropertyCallableRef('offsetSecondsOfMinute', 1, KMutableProperty1, function (receiver) {
      return receiver.get_offsetSecondsOfMinute_mpvmxe_k$();
    }, function (receiver, value) {
      return receiver.set_offsetSecondsOfMinute_kv6vfj_k$(value);
    });
  }
  function timeZoneId$factory_1() {
    return getPropertyCallableRef('timeZoneId', 1, KMutableProperty1, function (receiver) {
      return receiver.get_timeZoneId_3tgi1v_k$();
    }, function (receiver, value) {
      return receiver.set_timeZoneId_7jni6e_k$(value);
    });
  }
  function timeZoneId$factory_2() {
    return getPropertyCallableRef('timeZoneId', 1, KMutableProperty1, function (receiver) {
      return receiver.get_timeZoneId_3tgi1v_k$();
    }, function (receiver, value) {
      return receiver.set_timeZoneId_7jni6e_k$(value);
    });
  }
  var properties_initialized_DateTimeComponents_kt_io5e5;
  function _init_properties_DateTimeComponents_kt__9iimb5() {
    if (!properties_initialized_DateTimeComponents_kt_io5e5) {
      properties_initialized_DateTimeComponents_kt_io5e5 = true;
      timeZoneField = new GenericFieldSpec(new PropertyAccessor(timeZoneId$factory()));
      emptyDateTimeComponentsContents = new DateTimeComponentsContents();
    }
  }
  function get_allFormatConstants() {
    _init_properties_DateTimeFormat_kt__xxdtxu();
    var tmp0 = allFormatConstants$delegate;
    // Inline function 'kotlin.getValue' call
    allFormatConstants$factory();
    return tmp0.get_value_j01efc_k$();
  }
  var allFormatConstants$delegate;
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).formatAsKotlinBuilderDsl_pv4218_k$ = function (format) {
    var tmp;
    if (format instanceof AbstractDateTimeFormat) {
      tmp = builderString(format.get_actualFormat_d0ha3y_k$(), get_allFormatConstants());
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function DateTimeFormat() {
  }
  function AbstractDateTimeFormat() {
  }
  protoOf(AbstractDateTimeFormat).valueFromIntermediateOrNull_ppszyw_k$ = function (intermediate) {
    var tmp;
    try {
      tmp = this.valueFromIntermediate_60ox3m_k$(intermediate);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(AbstractDateTimeFormat).format_l1mq08_k$ = function (value) {
    // Inline function 'kotlin.also' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.datetime.format.AbstractDateTimeFormat.format.<anonymous>' call
    this.get_actualFormat_d0ha3y_k$().formatter_tykoui_k$().format$default_fwaxfk_k$(this.intermediateFromValue_816pep_k$(value), this_0);
    return this_0.toString();
  };
  protoOf(AbstractDateTimeFormat).formatTo_ju9xbm_k$ = function (appendable, value) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlinx.datetime.format.AbstractDateTimeFormat.formatTo.<anonymous>' call
    this.get_actualFormat_d0ha3y_k$().formatter_tykoui_k$().format$default_fwaxfk_k$(this.intermediateFromValue_816pep_k$(value), appendable);
    return appendable;
  };
  protoOf(AbstractDateTimeFormat).parse_xovy9i_k$ = function (input) {
    var tmp;
    try {
      tmp = Parser__match$default_impl_x2xlti(_Parser___init__impl__gdyfby(this.get_actualFormat_d0ha3y_k$().parser_ggn3z5_k$()), input, this.get_emptyIntermediate_lysuyr_k$());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ParseException) {
        var e = $p;
        throw DateTimeFormatException_init_$Create$_2("Failed to parse value from '" + toString(input) + "'", e);
      } else {
        throw $p;
      }
    }
    var matched = tmp;
    try {
      return this.valueFromIntermediate_60ox3m_k$(matched);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e_0 = $p;
        var message = e_0.message;
        throw DateTimeFormatException_init_$Create$_2(message == null ? "The value parsed from '" + toString(input) + "' is invalid" : '' + message + " (when parsing '" + toString(input) + "')", e_0);
      } else {
        throw $p;
      }
    }
  };
  protoOf(AbstractDateTimeFormat).parseOrNull_96pug0_k$ = function (input) {
    var tmp0_safe_receiver = Parser__matchOrNull$default_impl_e6vq3k(_Parser___init__impl__gdyfby(this.get_actualFormat_d0ha3y_k$().parser_ggn3z5_k$()), input, this.get_emptyIntermediate_lysuyr_k$());
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.AbstractDateTimeFormat.parseOrNull.<anonymous>' call
      tmp = this.valueFromIntermediateOrNull_ppszyw_k$(tmp0_safe_receiver);
    }
    return tmp;
  };
  var Padding_NONE_instance;
  var Padding_ZERO_instance;
  var Padding_SPACE_instance;
  function values() {
    return [Padding_NONE_getInstance(), Padding_ZERO_getInstance(), Padding_SPACE_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'NONE':
        return Padding_NONE_getInstance();
      case 'ZERO':
        return Padding_ZERO_getInstance();
      case 'SPACE':
        return Padding_SPACE_getInstance();
      default:
        Padding_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Padding_entriesInitialized;
  function Padding_initEntries() {
    if (Padding_entriesInitialized)
      return Unit_getInstance();
    Padding_entriesInitialized = true;
    Padding_NONE_instance = new Padding('NONE', 0);
    Padding_ZERO_instance = new Padding('ZERO', 1);
    Padding_SPACE_instance = new Padding('SPACE', 2);
  }
  var $ENTRIES;
  function Padding(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function minDigits(_this__u8e3s4, width) {
    _init_properties_DateTimeFormat_kt__xxdtxu();
    return _this__u8e3s4.equals(Padding_ZERO_getInstance()) ? width : 1;
  }
  function spaces(_this__u8e3s4, width) {
    _init_properties_DateTimeFormat_kt__xxdtxu();
    return _this__u8e3s4.equals(Padding_SPACE_getInstance()) ? width : null;
  }
  function toKotlinCode(_this__u8e3s4) {
    _init_properties_DateTimeFormat_kt__xxdtxu();
    var tmp;
    switch (_this__u8e3s4.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = 'Padding.NONE';
        break;
      case 1:
        tmp = 'Padding.ZERO';
        break;
      case 2:
        tmp = 'Padding.SPACE';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function allFormatConstants$delegate$lambda() {
    _init_properties_DateTimeFormat_kt__xxdtxu();
    return listOf([to('dateTimeComponents(DateTimeComponents.Formats.RFC_1123)', invoke$unwrap(Formats_getInstance().get_RFC_1123_h6865i_k$())), to('dateTimeComponents(DateTimeComponents.Formats.ISO_DATE_TIME_OFFSET)', invoke$unwrap(Formats_getInstance().get_ISO_DATE_TIME_OFFSET_7s4r8p_k$())), to('date(LocalDateTime.Formats.ISO)', invoke$unwrap(Formats_getInstance_1().get_ISO_18jrwk_k$())), to('date(LocalDate.Formats.ISO)', invoke$unwrap(Formats_getInstance_0().get_ISO_18jrwk_k$())), to('date(LocalDate.Formats.ISO_BASIC)', invoke$unwrap(Formats_getInstance_0().get_ISO_BASIC_3n1nuz_k$())), to('time(LocalTime.Formats.ISO)', invoke$unwrap(Formats_getInstance_2().get_ISO_18jrwk_k$())), to('offset(UtcOffset.Formats.ISO)', invoke$unwrap(Formats_getInstance_3().get_ISO_18jrwk_k$())), to('offset(UtcOffset.Formats.ISO_BASIC)', invoke$unwrap(Formats_getInstance_3().get_ISO_BASIC_3n1nuz_k$())), to('offset(UtcOffset.Formats.FOUR_DIGITS)', invoke$unwrap(Formats_getInstance_3().get_FOUR_DIGITS_7a8eh6_k$()))]);
  }
  function invoke$unwrap(format) {
    return (format instanceof AbstractDateTimeFormat ? format : THROW_CCE()).get_actualFormat_d0ha3y_k$();
  }
  function Padding_NONE_getInstance() {
    Padding_initEntries();
    return Padding_NONE_instance;
  }
  function Padding_ZERO_getInstance() {
    Padding_initEntries();
    return Padding_ZERO_instance;
  }
  function Padding_SPACE_getInstance() {
    Padding_initEntries();
    return Padding_SPACE_instance;
  }
  function allFormatConstants$factory() {
    return getPropertyCallableRef('allFormatConstants', 0, KProperty0, function () {
      return get_allFormatConstants();
    }, null);
  }
  var properties_initialized_DateTimeFormat_kt_ombb5g;
  function _init_properties_DateTimeFormat_kt__xxdtxu() {
    if (!properties_initialized_DateTimeFormat_kt_ombb5g) {
      properties_initialized_DateTimeFormat_kt_ombb5g = true;
      allFormatConstants$delegate = lazy(allFormatConstants$delegate$lambda);
    }
  }
  function WithDate() {
  }
  function WithTime() {
  }
  function WithDateTime() {
  }
  function WithUtcOffset() {
  }
  function WithDateTimeComponents() {
  }
  function DateTimeFormatBuilder() {
  }
  function builderString(_this__u8e3s4, constants) {
    var tmp;
    if (_this__u8e3s4 instanceof BasicFormatStructure) {
      tmp = _this__u8e3s4.get_directive_7ekuhm_k$().get_builderRepresentation_hh53bz_k$();
    } else {
      if (_this__u8e3s4 instanceof ConstantFormatStructure) {
        var tmp_0;
        if (_this__u8e3s4.get_string_jnpst6_k$().length === 1) {
          tmp_0 = 'char(' + toKotlinCode_2(charSequenceGet(_this__u8e3s4.get_string_jnpst6_k$(), 0)) + ')';
        } else {
          tmp_0 = 'chars(' + toKotlinCode_3(_this__u8e3s4.get_string_jnpst6_k$()) + ')';
        }
        tmp = tmp_0;
      } else {
        if (_this__u8e3s4 instanceof SignedFormatStructure) {
          var tmp_1;
          var tmp_2;
          var tmp_3 = _this__u8e3s4.get_format_dfdtds_k$();
          if (tmp_3 instanceof BasicFormatStructure) {
            var tmp_4 = _this__u8e3s4.get_format_dfdtds_k$().get_directive_7ekuhm_k$();
            tmp_2 = tmp_4 instanceof UtcOffsetWholeHoursDirective;
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            tmp_1 = _this__u8e3s4.get_format_dfdtds_k$().get_directive_7ekuhm_k$().get_builderRepresentation_hh53bz_k$();
          } else {
            // Inline function 'kotlin.text.buildString' call
            // Inline function 'kotlin.apply' call
            var this_0 = StringBuilder_init_$Create$();
            // Inline function 'kotlinx.datetime.format.builderString.<anonymous>' call
            if (_this__u8e3s4.get_withPlusSign_fo0zhi_k$()) {
              // Inline function 'kotlin.text.appendLine' call
              var value = 'withSharedSign(outputPlus = true) {';
              // Inline function 'kotlin.text.appendLine' call
              this_0.append_22ad7x_k$(value).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            } else {
              // Inline function 'kotlin.text.appendLine' call
              var value_0 = 'withSharedSign {';
              // Inline function 'kotlin.text.appendLine' call
              this_0.append_22ad7x_k$(value_0).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            }
            // Inline function 'kotlin.text.appendLine' call
            var value_1 = prependIndent(builderString(_this__u8e3s4.get_format_dfdtds_k$(), constants), '    ');
            // Inline function 'kotlin.text.appendLine' call
            this_0.append_22ad7x_k$(value_1).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            this_0.append_22ad7x_k$('}');
            tmp_1 = this_0.toString();
          }
          tmp = tmp_1;
        } else {
          if (_this__u8e3s4 instanceof OptionalFormatStructure) {
            // Inline function 'kotlin.text.buildString' call
            // Inline function 'kotlin.apply' call
            var this_1 = StringBuilder_init_$Create$();
            // Inline function 'kotlinx.datetime.format.builderString.<anonymous>' call
            if (_this__u8e3s4.get_onZero_hnt54g_k$() === '') {
              // Inline function 'kotlin.text.appendLine' call
              var value_2 = 'optional {';
              // Inline function 'kotlin.text.appendLine' call
              this_1.append_22ad7x_k$(value_2).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            } else {
              // Inline function 'kotlin.text.appendLine' call
              var value_3 = 'optional(' + toKotlinCode_3(_this__u8e3s4.get_onZero_hnt54g_k$()) + ') {';
              // Inline function 'kotlin.text.appendLine' call
              this_1.append_22ad7x_k$(value_3).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            }
            var subformat = builderString(_this__u8e3s4.get_format_dfdtds_k$(), constants);
            // Inline function 'kotlin.text.isNotEmpty' call
            if (charSequenceLength(subformat) > 0) {
              // Inline function 'kotlin.text.appendLine' call
              var value_4 = prependIndent(subformat, '    ');
              // Inline function 'kotlin.text.appendLine' call
              this_1.append_22ad7x_k$(value_4).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            }
            this_1.append_22ad7x_k$('}');
            tmp = this_1.toString();
          } else {
            if (_this__u8e3s4 instanceof AlternativesParsingFormatStructure) {
              // Inline function 'kotlin.text.buildString' call
              // Inline function 'kotlin.apply' call
              var this_2 = StringBuilder_init_$Create$();
              // Inline function 'kotlinx.datetime.format.builderString.<anonymous>' call
              this_2.append_22ad7x_k$('alternativeParsing(');
              var tmp0_iterator = _this__u8e3s4.get_formats_9xs0wd_k$().iterator_jk1svi_k$();
              while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var alternative = tmp0_iterator.next_20eer_k$();
                // Inline function 'kotlin.text.appendLine' call
                // Inline function 'kotlin.text.appendLine' call
                this_2.append_22ad7x_k$('{').append_am5a4z_k$(_Char___init__impl__6a9atx(10));
                var subformat_0 = builderString(alternative, constants);
                // Inline function 'kotlin.text.isNotEmpty' call
                if (charSequenceLength(subformat_0) > 0) {
                  // Inline function 'kotlin.text.appendLine' call
                  var value_5 = prependIndent(subformat_0, '    ');
                  // Inline function 'kotlin.text.appendLine' call
                  this_2.append_22ad7x_k$(value_5).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
                }
                this_2.append_22ad7x_k$('}, ');
              }
              if (this_2.get_kdzpvg_k$(this_2.get_length_g42xv3_k$() - 2 | 0) === _Char___init__impl__6a9atx(44)) {
                // Inline function 'kotlin.repeat' call
                var inductionVariable = 0;
                if (inductionVariable < 2)
                  do {
                    var index = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    // Inline function 'kotlinx.datetime.format.builderString.<anonymous>.<anonymous>' call
                    this_2.deleteAt_mq1vvq_k$(this_2.get_length_g42xv3_k$() - 1 | 0);
                  }
                   while (inductionVariable < 2);
              }
              // Inline function 'kotlin.text.appendLine' call
              // Inline function 'kotlin.text.appendLine' call
              this_2.append_22ad7x_k$(') {').append_am5a4z_k$(_Char___init__impl__6a9atx(10));
              // Inline function 'kotlin.text.appendLine' call
              var value_6 = prependIndent(builderString(_this__u8e3s4.get_mainFormat_iprtrb_k$(), constants), '    ');
              // Inline function 'kotlin.text.appendLine' call
              this_2.append_22ad7x_k$(value_6).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
              this_2.append_22ad7x_k$('}');
              tmp = this_2.toString();
            } else {
              if (_this__u8e3s4 instanceof ConcatenatedFormatStructure) {
                // Inline function 'kotlin.text.buildString' call
                // Inline function 'kotlin.apply' call
                var this_3 = StringBuilder_init_$Create$();
                // Inline function 'kotlinx.datetime.format.builderString.<anonymous>' call
                // Inline function 'kotlin.collections.isNotEmpty' call
                if (!_this__u8e3s4.get_formats_9xs0wd_k$().isEmpty_y1axqb_k$()) {
                  var index_0 = 0;
                  loop: while (index_0 < _this__u8e3s4.get_formats_9xs0wd_k$().get_size_woubt6_k$()) {
                    var tmp0_iterator_0 = constants.iterator_jk1svi_k$();
                    searchConstant: while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
                      var constant = tmp0_iterator_0.next_20eer_k$();
                      var constantDirectives = constant.get_second_jf7fjx_k$().get_formats_9xs0wd_k$();
                      if ((_this__u8e3s4.get_formats_9xs0wd_k$().get_size_woubt6_k$() - index_0 | 0) >= constantDirectives.get_size_woubt6_k$()) {
                        var inductionVariable_0 = 0;
                        var last_0 = constantDirectives.get_size_woubt6_k$() - 1 | 0;
                        if (inductionVariable_0 <= last_0)
                          do {
                            var i = inductionVariable_0;
                            inductionVariable_0 = inductionVariable_0 + 1 | 0;
                            if (!equals(_this__u8e3s4.get_formats_9xs0wd_k$().get_c1px32_k$(index_0 + i | 0), constantDirectives.get_c1px32_k$(i))) {
                              continue searchConstant;
                            }
                          }
                           while (inductionVariable_0 <= last_0);
                        this_3.append_22ad7x_k$(constant.get_first_irdx8n_k$());
                        index_0 = index_0 + constantDirectives.get_size_woubt6_k$() | 0;
                        if (index_0 < _this__u8e3s4.get_formats_9xs0wd_k$().get_size_woubt6_k$()) {
                          // Inline function 'kotlin.text.appendLine' call
                          this_3.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
                        }
                        continue loop;
                      }
                    }
                    if (index_0 === (_this__u8e3s4.get_formats_9xs0wd_k$().get_size_woubt6_k$() - 1 | 0)) {
                      this_3.append_22ad7x_k$(builderString(last(_this__u8e3s4.get_formats_9xs0wd_k$()), constants));
                    } else {
                      // Inline function 'kotlin.text.appendLine' call
                      var value_7 = builderString(_this__u8e3s4.get_formats_9xs0wd_k$().get_c1px32_k$(index_0), constants);
                      // Inline function 'kotlin.text.appendLine' call
                      this_3.append_22ad7x_k$(value_7).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
                    }
                    index_0 = index_0 + 1 | 0;
                  }
                }
                tmp = this_3.toString();
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function char(_this__u8e3s4, value) {
    return _this__u8e3s4.chars_pe6iqb_k$(toString_0(value));
  }
  function get_CODE_INDENT() {
    return CODE_INDENT;
  }
  var CODE_INDENT;
  function optional(_this__u8e3s4, ifZero, format) {
    ifZero = ifZero === VOID ? '' : ifZero;
    var tmp;
    if (isInterface(_this__u8e3s4, AbstractDateTimeFormatBuilder)) {
      _this__u8e3s4.appendOptionalImpl_725ywl_k$(ifZero, typeof format === 'function' ? format : THROW_CCE());
      tmp = Unit_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('impossible');
    }
    return tmp;
  }
  function alternativeParsing(_this__u8e3s4, alternativeFormats, primaryFormat) {
    var tmp;
    if (isInterface(_this__u8e3s4, AbstractDateTimeFormatBuilder)) {
      var tmp_0 = (isArray(alternativeFormats) ? alternativeFormats : THROW_CCE()).slice();
      _this__u8e3s4.appendAlternativeParsingImpl_9hljk3_k$(tmp_0, typeof primaryFormat === 'function' ? primaryFormat : THROW_CCE());
      tmp = Unit_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('impossible');
    }
    return tmp;
  }
  function AbstractDateTimeFormatBuilder() {
  }
  function get_ISO_DATE() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp0 = ISO_DATE$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_DATE$factory();
    return tmp0.get_value_j01efc_k$();
  }
  var ISO_DATE$delegate;
  function get_ISO_DATE_BASIC() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp0 = ISO_DATE_BASIC$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_DATE_BASIC$factory();
    return tmp0.get_value_j01efc_k$();
  }
  var ISO_DATE_BASIC$delegate;
  function get_emptyIncompleteLocalDate() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    return emptyIncompleteLocalDate;
  }
  var emptyIncompleteLocalDate;
  function DateFieldContainer() {
  }
  function IncompleteLocalDate(year, monthNumber, dayOfMonth, isoDayOfWeek) {
    year = year === VOID ? null : year;
    monthNumber = monthNumber === VOID ? null : monthNumber;
    dayOfMonth = dayOfMonth === VOID ? null : dayOfMonth;
    isoDayOfWeek = isoDayOfWeek === VOID ? null : isoDayOfWeek;
    this.year_1 = year;
    this.monthNumber_1 = monthNumber;
    this.dayOfMonth_1 = dayOfMonth;
    this.isoDayOfWeek_1 = isoDayOfWeek;
  }
  protoOf(IncompleteLocalDate).set_year_8yykwv_k$ = function (_set____db54di) {
    this.year_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).get_year_woy26e_k$ = function () {
    return this.year_1;
  };
  protoOf(IncompleteLocalDate).set_monthNumber_nufdv5_k$ = function (_set____db54di) {
    this.monthNumber_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).get_monthNumber_nb47ls_k$ = function () {
    return this.monthNumber_1;
  };
  protoOf(IncompleteLocalDate).set_dayOfMonth_qpi7zl_k$ = function (_set____db54di) {
    this.dayOfMonth_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).get_dayOfMonth_vblo3a_k$ = function () {
    return this.dayOfMonth_1;
  };
  protoOf(IncompleteLocalDate).set_isoDayOfWeek_65yxmk_k$ = function (_set____db54di) {
    this.isoDayOfWeek_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).get_isoDayOfWeek_my920b_k$ = function () {
    return this.isoDayOfWeek_1;
  };
  protoOf(IncompleteLocalDate).toLocalDate_u88f42_k$ = function () {
    var date = LocalDate_init_$Create$(requireParsedField(this.year_1, 'year'), requireParsedField(this.monthNumber_1, 'monthNumber'), requireParsedField(this.dayOfMonth_1, 'dayOfMonth'));
    var tmp0_safe_receiver = this.isoDayOfWeek_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.IncompleteLocalDate.toLocalDate.<anonymous>' call
      if (!(tmp0_safe_receiver === get_isoDayNumber(date.get_dayOfWeek_3kfgci_k$()))) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of week is ' + DayOfWeek(tmp0_safe_receiver).toString() + ' but the date is ' + date.toString() + ', which is a ' + date.get_dayOfWeek_3kfgci_k$().toString()));
      }
    }
    return date;
  };
  protoOf(IncompleteLocalDate).populateFrom_mbc3c1_k$ = function (date) {
    this.year_1 = date.get_year_woy26e_k$();
    this.monthNumber_1 = date.get_monthNumber_nb47ls_k$();
    this.dayOfMonth_1 = date.get_dayOfMonth_vblo3a_k$();
    this.isoDayOfWeek_1 = get_isoDayNumber(date.get_dayOfWeek_3kfgci_k$());
  };
  protoOf(IncompleteLocalDate).copy_1tks5_k$ = function () {
    return new IncompleteLocalDate(this.year_1, this.monthNumber_1, this.dayOfMonth_1, this.isoDayOfWeek_1);
  };
  protoOf(IncompleteLocalDate).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof IncompleteLocalDate) {
      tmp_2 = this.year_1 == other.year_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.monthNumber_1 == other.monthNumber_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.dayOfMonth_1 == other.dayOfMonth_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.isoDayOfWeek_1 == other.isoDayOfWeek_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteLocalDate).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.year_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.monthNumber_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    var tmp_0 = tmp + imul(tmp$ret$1, 31) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.dayOfMonth_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp$ret$2 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
    var tmp_1 = tmp_0 + imul(tmp$ret$2, 31) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.isoDayOfWeek_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    var tmp$ret$3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    return tmp_1 + imul(tmp$ret$3, 31) | 0;
  };
  protoOf(IncompleteLocalDate).toString = function () {
    var tmp0_elvis_lhs = this.year_1;
    var tmp = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = this.monthNumber_1;
    var tmp_0 = toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = this.dayOfMonth_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = this.isoDayOfWeek_1;
    return tmp + '-' + tmp_0 + '-' + tmp_1 + ' (day of week is ' + toString(tmp3_elvis_lhs == null ? '??' : tmp3_elvis_lhs) + ')';
  };
  function MonthNames_init_$Init$(january, february, march, april, may, june, july, august, september, october, november, december, $this) {
    MonthNames.call($this, listOf([january, february, march, april, may, june, july, august, september, october, november, december]));
    return $this;
  }
  function MonthNames_init_$Create$(january, february, march, april, may, june, july, august, september, october, november, december) {
    return MonthNames_init_$Init$(january, february, march, april, may, june, july, august, september, october, november, december, objectCreate(protoOf(MonthNames)));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.ENGLISH_FULL_1 = new MonthNames(listOf(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']));
    this.ENGLISH_ABBREVIATED_1 = new MonthNames(listOf(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']));
  }
  protoOf(Companion_2).get_ENGLISH_FULL_w9oxw9_k$ = function () {
    return this.ENGLISH_FULL_1;
  };
  protoOf(Companion_2).get_ENGLISH_ABBREVIATED_cfvc81_k$ = function () {
    return this.ENGLISH_ABBREVIATED_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function String$toString$ref() {
    var l = function (p0) {
      return toString(p0);
    };
    l.callableName = 'toString';
    return l;
  }
  function MonthNames(names) {
    Companion_getInstance_3();
    this.names_1 = names;
    // Inline function 'kotlin.require' call
    if (!(this.names_1.get_size_woubt6_k$() === 12)) {
      // Inline function 'kotlinx.datetime.format.MonthNames.<anonymous>' call
      var message = 'Month names must contain exactly 12 elements';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var progression = get_indices(this.names_1);
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.datetime.format.MonthNames.<anonymous>' call
        var ix = element;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = this.names_1.get_c1px32_k$(ix);
        // Inline function 'kotlin.require' call
        if (!(charSequenceLength(this_0) > 0)) {
          // Inline function 'kotlinx.datetime.format.MonthNames.<anonymous>.<anonymous>' call
          var message_0 = 'A month name can not be empty';
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < ix)
          do {
            var ix2 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.require' call
            if (!!(this.names_1.get_c1px32_k$(ix) === this.names_1.get_c1px32_k$(ix2))) {
              // Inline function 'kotlinx.datetime.format.MonthNames.<anonymous>.<anonymous>' call
              var message_1 = "Month names must be unique, but '" + this.names_1.get_c1px32_k$(ix) + "' was repeated";
              throw IllegalArgumentException_init_$Create$(toString(message_1));
            }
          }
           while (inductionVariable_0 < ix);
      }
       while (!(element === last));
  }
  protoOf(MonthNames).get_names_ivn21r_k$ = function () {
    return this.names_1;
  };
  protoOf(MonthNames).toString = function () {
    return joinToString(this.names_1, ', ', 'MonthNames(', ')', VOID, VOID, String$toString$ref());
  };
  protoOf(MonthNames).equals = function (other) {
    var tmp;
    if (other instanceof MonthNames) {
      tmp = equals(this.names_1, other.names_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthNames).hashCode = function () {
    return hashCode(this.names_1);
  };
  function DayOfWeekNames_init_$Init$(monday, tuesday, wednesday, thursday, friday, saturday, sunday, $this) {
    DayOfWeekNames.call($this, listOf([monday, tuesday, wednesday, thursday, friday, saturday, sunday]));
    return $this;
  }
  function DayOfWeekNames_init_$Create$(monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
    return DayOfWeekNames_init_$Init$(monday, tuesday, wednesday, thursday, friday, saturday, sunday, objectCreate(protoOf(DayOfWeekNames)));
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.ENGLISH_FULL_1 = new DayOfWeekNames(listOf(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']));
    this.ENGLISH_ABBREVIATED_1 = new DayOfWeekNames(listOf(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']));
  }
  protoOf(Companion_3).get_ENGLISH_FULL_w9oxw9_k$ = function () {
    return this.ENGLISH_FULL_1;
  };
  protoOf(Companion_3).get_ENGLISH_ABBREVIATED_cfvc81_k$ = function () {
    return this.ENGLISH_ABBREVIATED_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function String$toString$ref_0() {
    var l = function (p0) {
      return toString(p0);
    };
    l.callableName = 'toString';
    return l;
  }
  function DayOfWeekNames(names) {
    Companion_getInstance_4();
    this.names_1 = names;
    // Inline function 'kotlin.require' call
    if (!(this.names_1.get_size_woubt6_k$() === 7)) {
      // Inline function 'kotlinx.datetime.format.DayOfWeekNames.<anonymous>' call
      var message = 'Day of week names must contain exactly 7 elements';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var progression = get_indices(this.names_1);
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.datetime.format.DayOfWeekNames.<anonymous>' call
        var ix = element;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = this.names_1.get_c1px32_k$(ix);
        // Inline function 'kotlin.require' call
        if (!(charSequenceLength(this_0) > 0)) {
          // Inline function 'kotlinx.datetime.format.DayOfWeekNames.<anonymous>.<anonymous>' call
          var message_0 = 'A day-of-week name can not be empty';
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < ix)
          do {
            var ix2 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.require' call
            if (!!(this.names_1.get_c1px32_k$(ix) === this.names_1.get_c1px32_k$(ix2))) {
              // Inline function 'kotlinx.datetime.format.DayOfWeekNames.<anonymous>.<anonymous>' call
              var message_1 = "Day-of-week names must be unique, but '" + this.names_1.get_c1px32_k$(ix) + "' was repeated";
              throw IllegalArgumentException_init_$Create$(toString(message_1));
            }
          }
           while (inductionVariable_0 < ix);
      }
       while (!(element === last));
  }
  protoOf(DayOfWeekNames).get_names_ivn21r_k$ = function () {
    return this.names_1;
  };
  protoOf(DayOfWeekNames).toString = function () {
    return joinToString(this.names_1, ', ', 'DayOfWeekNames(', ')', VOID, VOID, String$toString$ref_0());
  };
  protoOf(DayOfWeekNames).equals = function (other) {
    var tmp;
    if (other instanceof DayOfWeekNames) {
      tmp = equals(this.names_1, other.names_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayOfWeekNames).hashCode = function () {
    return hashCode(this.names_1);
  };
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).build_o3smjo_k$ = function (block) {
    var builder = new Builder_0(new AppendableFormatStructure());
    block(builder);
    return new LocalDateFormat(builder.build_1k0s4u_k$());
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Builder_0(actualBuilder) {
    this.actualBuilder_1 = actualBuilder;
  }
  protoOf(Builder_0).get_actualBuilder_7qypdo_k$ = function () {
    return this.actualBuilder_1;
  };
  protoOf(Builder_0).addFormatStructureForDate_t2v9hh_k$ = function (structure) {
    return this.actualBuilder_1.add_b6pdwl_k$(structure);
  };
  protoOf(Builder_0).createEmpty_8k9z67_k$ = function () {
    return new Builder_0(new AppendableFormatStructure());
  };
  function LocalDateFormat(actualFormat) {
    Companion_getInstance_5();
    AbstractDateTimeFormat.call(this);
    this.actualFormat_1 = actualFormat;
  }
  protoOf(LocalDateFormat).get_actualFormat_d0ha3y_k$ = function () {
    return this.actualFormat_1;
  };
  protoOf(LocalDateFormat).intermediateFromValue_lmp4jt_k$ = function (value) {
    // Inline function 'kotlin.apply' call
    var this_0 = new IncompleteLocalDate();
    // Inline function 'kotlinx.datetime.format.LocalDateFormat.intermediateFromValue.<anonymous>' call
    this_0.populateFrom_mbc3c1_k$(value);
    return this_0;
  };
  protoOf(LocalDateFormat).intermediateFromValue_816pep_k$ = function (value) {
    return this.intermediateFromValue_lmp4jt_k$(value instanceof LocalDate_0 ? value : THROW_CCE());
  };
  protoOf(LocalDateFormat).valueFromIntermediate_o2jut7_k$ = function (intermediate) {
    return intermediate.toLocalDate_u88f42_k$();
  };
  protoOf(LocalDateFormat).valueFromIntermediate_60ox3m_k$ = function (intermediate) {
    return this.valueFromIntermediate_o2jut7_k$(intermediate instanceof IncompleteLocalDate ? intermediate : THROW_CCE());
  };
  protoOf(LocalDateFormat).get_emptyIntermediate_lysuyr_k$ = function () {
    return get_emptyIncompleteLocalDate();
  };
  function requireParsedField(field, name) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    if (field == null) {
      throw DateTimeFormatException_init_$Create$_0('Can not create a ' + name + ' from the given input: the field ' + name + ' is missing');
    }
    return field;
  }
  function AbstractWithDateBuilder() {
  }
  function _get_padding__n2y8rk($this) {
    return $this.padding_1;
  }
  function _get_isYearOfEra__mibkwr($this) {
    return $this.isYearOfEra_1;
  }
  function YearDirective(padding, isYearOfEra) {
    isYearOfEra = isYearOfEra === VOID ? false : isYearOfEra;
    var tmp = DateFields_getInstance().year_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 4 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 4 : null;
    SignedIntFieldFormatDirective.call(this, tmp, tmp_0, null, tmp$ret$1, 4);
    this.padding_1 = padding;
    this.isYearOfEra_1 = isYearOfEra;
  }
  protoOf(YearDirective).get_builderRepresentation_hh53bz_k$ = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.datetime.format.YearDirective.<get-builderRepresentation>.<anonymous>' call
    var it = this.padding_1.get_ordinal_ip24qg_k$() === 1 ? 'year()' : 'year(' + toKotlinCode(this.padding_1) + ')';
    var tmp;
    if (this.isYearOfEra_1) {
      tmp = it + ' /** TODO: the original format had an `y` directive, so the behavior is different on years earlier than 1 AD. See the [kotlinx.datetime.format.byUnicodePattern] documentation for details. */';
    } else {
      tmp = it;
    }
    return tmp;
  };
  protoOf(YearDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof YearDirective) {
      tmp_0 = this.padding_1.equals(other.padding_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.isYearOfEra_1 === other.isYearOfEra_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(YearDirective).hashCode = function () {
    return imul(this.padding_1.hashCode(), 31) + getBooleanHashCode(this.isYearOfEra_1) | 0;
  };
  function _get_isYearOfEra__mibkwr_0($this) {
    return $this.isYearOfEra_1;
  }
  function ReducedYearDirective(base, isYearOfEra) {
    isYearOfEra = isYearOfEra === VOID ? false : isYearOfEra;
    ReducedIntFieldDirective.call(this, DateFields_getInstance().year_1, 2, base);
    this.base_2 = base;
    this.isYearOfEra_1 = isYearOfEra;
  }
  protoOf(ReducedYearDirective).get_base_wojaxm_k$ = function () {
    return this.base_2;
  };
  protoOf(ReducedYearDirective).get_builderRepresentation_hh53bz_k$ = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.datetime.format.ReducedYearDirective.<get-builderRepresentation>.<anonymous>' call
    var it = 'yearTwoDigits(' + this.base_2 + ')';
    var tmp;
    if (this.isYearOfEra_1) {
      tmp = it + ' /** TODO: the original format had an `y` directive, so the behavior is different on years earlier than 1 AD. See the [kotlinx.datetime.format.byUnicodePattern] documentation for details. */';
    } else {
      tmp = it;
    }
    return tmp;
  };
  protoOf(ReducedYearDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ReducedYearDirective) {
      tmp_0 = this.base_2 === other.base_2;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.isYearOfEra_1 === other.isYearOfEra_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ReducedYearDirective).hashCode = function () {
    return imul(this.base_2, 31) + getBooleanHashCode(this.isYearOfEra_1) | 0;
  };
  function _get_padding__n2y8rk_0($this) {
    return $this.padding_1;
  }
  function MonthDirective(padding) {
    var tmp = DateFields_getInstance().month_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.padding_1 = padding;
  }
  protoOf(MonthDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return this.padding_1.get_ordinal_ip24qg_k$() === 1 ? 'monthNumber()' : 'monthNumber(' + toKotlinCode(this.padding_1) + ')';
  };
  protoOf(MonthDirective).equals = function (other) {
    var tmp;
    if (other instanceof MonthDirective) {
      tmp = this.padding_1.equals(other.padding_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthDirective).hashCode = function () {
    return this.padding_1.hashCode();
  };
  function _get_names__dwg6t3($this) {
    return $this.names_1;
  }
  function MonthNameDirective(names) {
    NamedUnsignedIntFieldFormatDirective.call(this, DateFields_getInstance().month_1, names.names_1, 'monthName');
    this.names_1 = names;
  }
  protoOf(MonthNameDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return 'monthName(' + toKotlinCode_0(this.names_1) + ')';
  };
  protoOf(MonthNameDirective).equals = function (other) {
    var tmp;
    if (other instanceof MonthNameDirective) {
      tmp = equals(this.names_1.names_1, other.names_1.names_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthNameDirective).hashCode = function () {
    return hashCode(this.names_1.names_1);
  };
  function _get_padding__n2y8rk_1($this) {
    return $this.padding_1;
  }
  function DayDirective(padding) {
    var tmp = DateFields_getInstance().dayOfMonth_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.padding_1 = padding;
  }
  protoOf(DayDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return this.padding_1.get_ordinal_ip24qg_k$() === 1 ? 'dayOfMonth()' : 'dayOfMonth(' + toKotlinCode(this.padding_1) + ')';
  };
  protoOf(DayDirective).equals = function (other) {
    var tmp;
    if (other instanceof DayDirective) {
      tmp = this.padding_1.equals(other.padding_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayDirective).hashCode = function () {
    return this.padding_1.hashCode();
  };
  function _get_names__dwg6t3_0($this) {
    return $this.names_1;
  }
  function DayOfWeekDirective(names) {
    NamedUnsignedIntFieldFormatDirective.call(this, DateFields_getInstance().isoDayOfWeek_1, names.names_1, 'dayOfWeekName');
    this.names_1 = names;
  }
  protoOf(DayOfWeekDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return 'dayOfWeek(' + toKotlinCode_1(this.names_1) + ')';
  };
  protoOf(DayOfWeekDirective).equals = function (other) {
    var tmp;
    if (other instanceof DayOfWeekDirective) {
      tmp = equals(this.names_1.names_1, other.names_1.names_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayOfWeekDirective).hashCode = function () {
    return hashCode(this.names_1.names_1);
  };
  function DateFields() {
    DateFields_instance = this;
    this.year_1 = new GenericFieldSpec(new PropertyAccessor(year$factory_2()));
    this.month_1 = new UnsignedFieldSpec(new PropertyAccessor(monthNumber$factory_2()), 1, 12);
    this.dayOfMonth_1 = new UnsignedFieldSpec(new PropertyAccessor(dayOfMonth$factory_2()), 1, 31);
    this.isoDayOfWeek_1 = new UnsignedFieldSpec(new PropertyAccessor(isoDayOfWeek$factory()), 1, 7);
  }
  protoOf(DateFields).get_year_woy26e_k$ = function () {
    return this.year_1;
  };
  protoOf(DateFields).get_month_ivc8d3_k$ = function () {
    return this.month_1;
  };
  protoOf(DateFields).get_dayOfMonth_vblo3a_k$ = function () {
    return this.dayOfMonth_1;
  };
  protoOf(DateFields).get_isoDayOfWeek_my920b_k$ = function () {
    return this.isoDayOfWeek_1;
  };
  var DateFields_instance;
  function DateFields_getInstance() {
    if (DateFields_instance == null)
      new DateFields();
    return DateFields_instance;
  }
  function get_YEAR_OF_ERA_COMMENT() {
    return YEAR_OF_ERA_COMMENT;
  }
  var YEAR_OF_ERA_COMMENT;
  function toKotlinCode_0(_this__u8e3s4) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp0_subject = _this__u8e3s4.names_1;
    var tmp;
    if (equals(tmp0_subject, Companion_getInstance_3().ENGLISH_FULL_1.names_1)) {
      Companion_getInstance_4();
      tmp = 'MonthNames.' + 'ENGLISH_FULL';
    } else if (equals(tmp0_subject, Companion_getInstance_3().ENGLISH_ABBREVIATED_1.names_1)) {
      Companion_getInstance_4();
      tmp = 'MonthNames.' + 'ENGLISH_ABBREVIATED';
    } else {
      tmp = joinToString(_this__u8e3s4.names_1, ', ', 'MonthNames(', ')', VOID, VOID, toKotlinCode$ref());
    }
    return tmp;
  }
  function toKotlinCode_1(_this__u8e3s4) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp0_subject = _this__u8e3s4.names_1;
    var tmp;
    if (equals(tmp0_subject, Companion_getInstance_4().ENGLISH_FULL_1.names_1)) {
      Companion_getInstance_4();
      tmp = 'DayOfWeekNames.' + 'ENGLISH_FULL';
    } else if (equals(tmp0_subject, Companion_getInstance_4().ENGLISH_ABBREVIATED_1.names_1)) {
      Companion_getInstance_4();
      tmp = 'DayOfWeekNames.' + 'ENGLISH_ABBREVIATED';
    } else {
      tmp = joinToString(_this__u8e3s4.names_1, ', ', 'DayOfWeekNames(', ')', VOID, VOID, toKotlinCode$ref_0());
    }
    return tmp;
  }
  function ISO_DATE$delegate$lambda() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp = Companion_getInstance_5();
    return tmp.build_o3smjo_k$(ISO_DATE$delegate$lambda$lambda);
  }
  function ISO_DATE$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.year$default_562wrd_k$();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.monthNumber$default_3p5p8b_k$();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.dayOfMonth$default_hpz3yh_k$();
    return Unit_getInstance();
  }
  function ISO_DATE_BASIC$delegate$lambda() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp = Companion_getInstance_5();
    return tmp.build_o3smjo_k$(ISO_DATE_BASIC$delegate$lambda$lambda);
  }
  function ISO_DATE_BASIC$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.year$default_562wrd_k$();
    $this$build.monthNumber$default_3p5p8b_k$();
    $this$build.dayOfMonth$default_hpz3yh_k$();
    return Unit_getInstance();
  }
  function toKotlinCode$ref() {
    var l = function (p0) {
      return toKotlinCode_3(p0);
    };
    l.callableName = 'toKotlinCode';
    return l;
  }
  function toKotlinCode$ref_0() {
    var l = function (p0) {
      return toKotlinCode_3(p0);
    };
    l.callableName = 'toKotlinCode';
    return l;
  }
  function ISO_DATE$factory() {
    return getPropertyCallableRef('ISO_DATE', 0, KProperty0, function () {
      return get_ISO_DATE();
    }, null);
  }
  function ISO_DATE_BASIC$factory() {
    return getPropertyCallableRef('ISO_DATE_BASIC', 0, KProperty0, function () {
      return get_ISO_DATE_BASIC();
    }, null);
  }
  function year$factory_2() {
    return getPropertyCallableRef('year', 1, KMutableProperty1, function (receiver) {
      return receiver.get_year_woy26e_k$();
    }, function (receiver, value) {
      return receiver.set_year_8yykwv_k$(value);
    });
  }
  function monthNumber$factory_2() {
    return getPropertyCallableRef('monthNumber', 1, KMutableProperty1, function (receiver) {
      return receiver.get_monthNumber_nb47ls_k$();
    }, function (receiver, value) {
      return receiver.set_monthNumber_nufdv5_k$(value);
    });
  }
  function dayOfMonth$factory_2() {
    return getPropertyCallableRef('dayOfMonth', 1, KMutableProperty1, function (receiver) {
      return receiver.get_dayOfMonth_vblo3a_k$();
    }, function (receiver, value) {
      return receiver.set_dayOfMonth_qpi7zl_k$(value);
    });
  }
  function isoDayOfWeek$factory() {
    return getPropertyCallableRef('isoDayOfWeek', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isoDayOfWeek_my920b_k$();
    }, function (receiver, value) {
      return receiver.set_isoDayOfWeek_65yxmk_k$(value);
    });
  }
  var properties_initialized_LocalDateFormat_kt_fmnlhc;
  function _init_properties_LocalDateFormat_kt__k1uk9u() {
    if (!properties_initialized_LocalDateFormat_kt_fmnlhc) {
      properties_initialized_LocalDateFormat_kt_fmnlhc = true;
      ISO_DATE$delegate = lazy(ISO_DATE$delegate$lambda);
      ISO_DATE_BASIC$delegate = lazy(ISO_DATE_BASIC$delegate$lambda);
      emptyIncompleteLocalDate = new IncompleteLocalDate();
    }
  }
  function get_ISO_DATETIME() {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    var tmp0 = ISO_DATETIME$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_DATETIME$factory();
    return tmp0.get_value_j01efc_k$();
  }
  var ISO_DATETIME$delegate;
  function get_emptyIncompleteLocalDateTime() {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    return emptyIncompleteLocalDateTime;
  }
  var emptyIncompleteLocalDateTime;
  function DateTimeFieldContainer() {
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).build_jyqq35_k$ = function (block) {
    var builder = new Builder_1(new AppendableFormatStructure());
    block(builder);
    return new LocalDateTimeFormat(builder.build_1k0s4u_k$());
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Builder_1(actualBuilder) {
    this.actualBuilder_1 = actualBuilder;
  }
  protoOf(Builder_1).get_actualBuilder_7qypdo_k$ = function () {
    return this.actualBuilder_1;
  };
  protoOf(Builder_1).addFormatStructureForDateTime_noiy5b_k$ = function (structure) {
    this.actualBuilder_1.add_b6pdwl_k$(structure);
  };
  protoOf(Builder_1).createEmpty_8k9z67_k$ = function () {
    return new Builder_1(new AppendableFormatStructure());
  };
  function LocalDateTimeFormat(actualFormat) {
    Companion_getInstance_6();
    AbstractDateTimeFormat.call(this);
    this.actualFormat_1 = actualFormat;
  }
  protoOf(LocalDateTimeFormat).get_actualFormat_d0ha3y_k$ = function () {
    return this.actualFormat_1;
  };
  protoOf(LocalDateTimeFormat).intermediateFromValue_3spoix_k$ = function (value) {
    // Inline function 'kotlin.apply' call
    var this_0 = new IncompleteLocalDateTime();
    // Inline function 'kotlinx.datetime.format.LocalDateTimeFormat.intermediateFromValue.<anonymous>' call
    this_0.populateFrom_8zu6yp_k$(value);
    return this_0;
  };
  protoOf(LocalDateTimeFormat).intermediateFromValue_816pep_k$ = function (value) {
    return this.intermediateFromValue_3spoix_k$(value instanceof LocalDateTime_0 ? value : THROW_CCE());
  };
  protoOf(LocalDateTimeFormat).valueFromIntermediate_nes9ir_k$ = function (intermediate) {
    return intermediate.toLocalDateTime_5q5ehh_k$();
  };
  protoOf(LocalDateTimeFormat).valueFromIntermediate_60ox3m_k$ = function (intermediate) {
    return this.valueFromIntermediate_nes9ir_k$(intermediate instanceof IncompleteLocalDateTime ? intermediate : THROW_CCE());
  };
  protoOf(LocalDateTimeFormat).get_emptyIntermediate_lysuyr_k$ = function () {
    return get_emptyIncompleteLocalDateTime();
  };
  function IncompleteLocalDateTime(date, time) {
    date = date === VOID ? new IncompleteLocalDate() : date;
    time = time === VOID ? new IncompleteLocalTime() : time;
    this.date_1 = date;
    this.time_1 = time;
  }
  protoOf(IncompleteLocalDateTime).get_date_wokkxj_k$ = function () {
    return this.date_1;
  };
  protoOf(IncompleteLocalDateTime).get_time_wouyhi_k$ = function () {
    return this.time_1;
  };
  protoOf(IncompleteLocalDateTime).set_dayOfMonth_qpi7zl_k$ = function (_set____db54di) {
    this.date_1.set_dayOfMonth_qpi7zl_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_dayOfMonth_vblo3a_k$ = function () {
    return this.date_1.get_dayOfMonth_vblo3a_k$();
  };
  protoOf(IncompleteLocalDateTime).set_isoDayOfWeek_65yxmk_k$ = function (_set____db54di) {
    this.date_1.set_isoDayOfWeek_65yxmk_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_isoDayOfWeek_my920b_k$ = function () {
    return this.date_1.get_isoDayOfWeek_my920b_k$();
  };
  protoOf(IncompleteLocalDateTime).set_monthNumber_nufdv5_k$ = function (_set____db54di) {
    this.date_1.set_monthNumber_nufdv5_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_monthNumber_nb47ls_k$ = function () {
    return this.date_1.get_monthNumber_nb47ls_k$();
  };
  protoOf(IncompleteLocalDateTime).set_year_8yykwv_k$ = function (_set____db54di) {
    this.date_1.set_year_8yykwv_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_year_woy26e_k$ = function () {
    return this.date_1.get_year_woy26e_k$();
  };
  protoOf(IncompleteLocalDateTime).set_amPm_5mqo57_k$ = function (_set____db54di) {
    this.time_1.set_amPm_5mqo57_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_amPm_woiw0i_k$ = function () {
    return this.time_1.get_amPm_woiw0i_k$();
  };
  protoOf(IncompleteLocalDateTime).set_fractionOfSecond_ixjooe_k$ = function (value) {
    this.time_1.set_fractionOfSecond_ixjooe_k$(value);
  };
  protoOf(IncompleteLocalDateTime).get_fractionOfSecond_3ubmju_k$ = function () {
    return this.time_1.get_fractionOfSecond_3ubmju_k$();
  };
  protoOf(IncompleteLocalDateTime).set_hour_cn99tm_k$ = function (_set____db54di) {
    this.time_1.set_hour_cn99tm_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_hour_wonfal_k$ = function () {
    return this.time_1.get_hour_wonfal_k$();
  };
  protoOf(IncompleteLocalDateTime).set_hourOfAmPm_4kn0va_k$ = function (_set____db54di) {
    this.time_1.set_hourOfAmPm_4kn0va_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_hourOfAmPm_c9obsj_k$ = function () {
    return this.time_1.get_hourOfAmPm_c9obsj_k$();
  };
  protoOf(IncompleteLocalDateTime).set_minute_35xlhm_k$ = function (_set____db54di) {
    this.time_1.set_minute_35xlhm_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_minute_gnc10d_k$ = function () {
    return this.time_1.get_minute_gnc10d_k$();
  };
  protoOf(IncompleteLocalDateTime).set_nanosecond_xpjfxy_k$ = function (_set____db54di) {
    this.time_1.set_nanosecond_xpjfxy_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_nanosecond_fws9td_k$ = function () {
    return this.time_1.get_nanosecond_fws9td_k$();
  };
  protoOf(IncompleteLocalDateTime).set_second_5q0zme_k$ = function (_set____db54di) {
    this.time_1.set_second_5q0zme_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_second_jf7fjx_k$ = function () {
    return this.time_1.get_second_jf7fjx_k$();
  };
  protoOf(IncompleteLocalDateTime).toLocalDateTime_5q5ehh_k$ = function () {
    return LocalDateTime_init_$Create$_1(this.date_1.toLocalDate_u88f42_k$(), this.time_1.toLocalTime_u7y1k3_k$());
  };
  protoOf(IncompleteLocalDateTime).populateFrom_8zu6yp_k$ = function (dateTime) {
    this.date_1.populateFrom_mbc3c1_k$(dateTime.get_date_wokkxj_k$());
    this.time_1.populateFrom_n7wbcx_k$(dateTime.get_time_wouyhi_k$());
  };
  protoOf(IncompleteLocalDateTime).copy_1tks5_k$ = function () {
    return new IncompleteLocalDateTime(this.date_1.copy_1tks5_k$(), this.time_1.copy_1tks5_k$());
  };
  function AbstractWithDateTimeBuilder() {
  }
  function ISO_DATETIME$delegate$lambda() {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    var tmp = Companion_getInstance_6();
    return tmp.build_jyqq35_k$(ISO_DATETIME$delegate$lambda$lambda);
  }
  function ISO_DATETIME$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    $this$build.date_aq11yp_k$(get_ISO_DATE());
    var tmp = [ISO_DATETIME$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_DATETIME$delegate$lambda$lambda$lambda_0);
    $this$build.time_eev9o3_k$(get_ISO_TIME());
    return Unit_getInstance();
  }
  function ISO_DATETIME$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    char($this$alternativeParsing, _Char___init__impl__6a9atx(116));
    return Unit_getInstance();
  }
  function ISO_DATETIME$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    char($this$alternativeParsing, _Char___init__impl__6a9atx(84));
    return Unit_getInstance();
  }
  function ISO_DATETIME$factory() {
    return getPropertyCallableRef('ISO_DATETIME', 0, KProperty0, function () {
      return get_ISO_DATETIME();
    }, null);
  }
  var properties_initialized_LocalDateTimeFormat_kt_67ys6r;
  function _init_properties_LocalDateTimeFormat_kt__aloigl() {
    if (!properties_initialized_LocalDateTimeFormat_kt_67ys6r) {
      properties_initialized_LocalDateTimeFormat_kt_67ys6r = true;
      ISO_DATETIME$delegate = lazy(ISO_DATETIME$delegate$lambda);
      emptyIncompleteLocalDateTime = new IncompleteLocalDateTime();
    }
  }
  function get_ISO_TIME() {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    var tmp0 = ISO_TIME$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_TIME$factory();
    return tmp0.get_value_j01efc_k$();
  }
  var ISO_TIME$delegate;
  function get_emptyIncompleteLocalTime() {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    return emptyIncompleteLocalTime;
  }
  var emptyIncompleteLocalTime;
  function TimeFieldContainer() {
  }
  function IncompleteLocalTime(hour, hourOfAmPm, amPm, minute, second, nanosecond) {
    hour = hour === VOID ? null : hour;
    hourOfAmPm = hourOfAmPm === VOID ? null : hourOfAmPm;
    amPm = amPm === VOID ? null : amPm;
    minute = minute === VOID ? null : minute;
    second = second === VOID ? null : second;
    nanosecond = nanosecond === VOID ? null : nanosecond;
    this.hour_1 = hour;
    this.hourOfAmPm_1 = hourOfAmPm;
    this.amPm_1 = amPm;
    this.minute_1 = minute;
    this.second_1 = second;
    this.nanosecond_1 = nanosecond;
  }
  protoOf(IncompleteLocalTime).set_hour_cn99tm_k$ = function (_set____db54di) {
    this.hour_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).get_hour_wonfal_k$ = function () {
    return this.hour_1;
  };
  protoOf(IncompleteLocalTime).set_hourOfAmPm_4kn0va_k$ = function (_set____db54di) {
    this.hourOfAmPm_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).get_hourOfAmPm_c9obsj_k$ = function () {
    return this.hourOfAmPm_1;
  };
  protoOf(IncompleteLocalTime).set_amPm_5mqo57_k$ = function (_set____db54di) {
    this.amPm_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).get_amPm_woiw0i_k$ = function () {
    return this.amPm_1;
  };
  protoOf(IncompleteLocalTime).set_minute_35xlhm_k$ = function (_set____db54di) {
    this.minute_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).get_minute_gnc10d_k$ = function () {
    return this.minute_1;
  };
  protoOf(IncompleteLocalTime).set_second_5q0zme_k$ = function (_set____db54di) {
    this.second_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).get_second_jf7fjx_k$ = function () {
    return this.second_1;
  };
  protoOf(IncompleteLocalTime).set_nanosecond_xpjfxy_k$ = function (_set____db54di) {
    this.nanosecond_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).get_nanosecond_fws9td_k$ = function () {
    return this.nanosecond_1;
  };
  protoOf(IncompleteLocalTime).toLocalTime_u7y1k3_k$ = function () {
    var tmp0_safe_receiver = this.hour_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>' call
      var tmp0_safe_receiver_0 = this.hourOfAmPm_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.require' call
        if (!((((tmp0_safe_receiver + 11 | 0) % 12 | 0) + 1 | 0) === tmp0_safe_receiver_0)) {
          // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>.<anonymous>.<anonymous>' call
          var message = 'Inconsistent hour and hour-of-am-pm: hour is ' + tmp0_safe_receiver + ', but hour-of-am-pm is ' + tmp0_safe_receiver_0;
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
      }
      var tmp1_safe_receiver = this.amPm_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.require' call
        if (!(tmp1_safe_receiver.equals(AmPmMarker_PM_getInstance()) === tmp0_safe_receiver >= 12)) {
          // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>.<anonymous>.<anonymous>' call
          var message_0 = 'Inconsistent hour and the AM/PM marker: hour is ' + tmp0_safe_receiver + ', but the AM/PM marker is ' + tmp1_safe_receiver.toString();
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
      }
      tmp = tmp0_safe_receiver;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver_0 = this.hourOfAmPm_1;
      var tmp_1;
      if (tmp1_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>' call
        var tmp0_safe_receiver_1 = this.amPm_1;
        var tmp_2;
        if (tmp0_safe_receiver_1 == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>.<anonymous>.<anonymous>' call
          tmp_2 = (tmp1_safe_receiver_0 === 12 ? 0 : tmp1_safe_receiver_0) + (tmp0_safe_receiver_1.equals(AmPmMarker_PM_getInstance()) ? 12 : 0) | 0;
        }
        tmp_1 = tmp_2;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_0;
    var tmp_3;
    if (tmp3_elvis_lhs == null) {
      throw DateTimeFormatException_init_$Create$_0('Incomplete time: missing hour');
    } else {
      tmp_3 = tmp3_elvis_lhs;
    }
    var hour = tmp_3;
    var tmp_4 = requireParsedField(this.minute_1, 'minute');
    var tmp4_elvis_lhs = this.second_1;
    var tmp_5 = tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = this.nanosecond_1;
    return LocalTime_init_$Create$(hour, tmp_4, tmp_5, tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs);
  };
  protoOf(IncompleteLocalTime).populateFrom_n7wbcx_k$ = function (localTime) {
    this.hour_1 = localTime.get_hour_wonfal_k$();
    this.hourOfAmPm_1 = ((localTime.get_hour_wonfal_k$() + 11 | 0) % 12 | 0) + 1 | 0;
    this.amPm_1 = localTime.get_hour_wonfal_k$() >= 12 ? AmPmMarker_PM_getInstance() : AmPmMarker_AM_getInstance();
    this.minute_1 = localTime.get_minute_gnc10d_k$();
    this.second_1 = localTime.get_second_jf7fjx_k$();
    this.nanosecond_1 = localTime.get_nanosecond_fws9td_k$();
  };
  protoOf(IncompleteLocalTime).copy_1tks5_k$ = function () {
    return new IncompleteLocalTime(this.hour_1, this.hourOfAmPm_1, this.amPm_1, this.minute_1, this.second_1, this.nanosecond_1);
  };
  protoOf(IncompleteLocalTime).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    if (other instanceof IncompleteLocalTime) {
      tmp_4 = this.hour_1 == other.hour_1;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = this.hourOfAmPm_1 == other.hourOfAmPm_1;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = equals(this.amPm_1, other.amPm_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.minute_1 == other.minute_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.second_1 == other.second_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.nanosecond_1 == other.nanosecond_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteLocalTime).hashCode = function () {
    var tmp6_elvis_lhs = this.hour_1;
    var tmp = imul(tmp6_elvis_lhs == null ? 0 : tmp6_elvis_lhs, 31);
    var tmp5_elvis_lhs = this.hourOfAmPm_1;
    var tmp_0 = tmp + imul(tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs, 31) | 0;
    var tmp3_safe_receiver = this.amPm_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.hashCode();
    var tmp_1 = tmp_0 + imul(tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs, 31) | 0;
    var tmp2_elvis_lhs = this.minute_1;
    var tmp_2 = tmp_1 + imul(tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs, 31) | 0;
    var tmp1_elvis_lhs = this.second_1;
    var tmp_3 = tmp_2 + imul(tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, 31) | 0;
    var tmp0_elvis_lhs = this.nanosecond_1;
    return tmp_3 + (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) | 0;
  };
  protoOf(IncompleteLocalTime).toString = function () {
    var tmp0_elvis_lhs = this.hour_1;
    var tmp = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = this.minute_1;
    var tmp_0 = toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = this.second_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_safe_receiver = this.nanosecond_1;
    var tmp_2;
    if (tmp3_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toString.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toString.<anonymous>.<anonymous>' call
      var it = tmp3_safe_receiver.toString();
      tmp_2 = padStart(it, 9 - it.length | 0, _Char___init__impl__6a9atx(48));
    }
    var tmp4_elvis_lhs = tmp_2;
    return tmp + ':' + tmp_0 + ':' + tmp_1 + '.' + (tmp4_elvis_lhs == null ? '???' : tmp4_elvis_lhs);
  };
  var AmPmMarker_AM_instance;
  var AmPmMarker_PM_instance;
  function values_0() {
    return [AmPmMarker_AM_getInstance(), AmPmMarker_PM_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'AM':
        return AmPmMarker_AM_getInstance();
      case 'PM':
        return AmPmMarker_PM_getInstance();
      default:
        AmPmMarker_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var AmPmMarker_entriesInitialized;
  function AmPmMarker_initEntries() {
    if (AmPmMarker_entriesInitialized)
      return Unit_getInstance();
    AmPmMarker_entriesInitialized = true;
    AmPmMarker_AM_instance = new AmPmMarker('AM', 0);
    AmPmMarker_PM_instance = new AmPmMarker('PM', 1);
  }
  var $ENTRIES_0;
  function AmPmMarker(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  protoOf(Companion_6).build_agwrib_k$ = function (block) {
    var builder = new Builder_2(new AppendableFormatStructure());
    block(builder);
    return new LocalTimeFormat(builder.build_1k0s4u_k$());
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function Builder_2(actualBuilder) {
    this.actualBuilder_1 = actualBuilder;
  }
  protoOf(Builder_2).get_actualBuilder_7qypdo_k$ = function () {
    return this.actualBuilder_1;
  };
  protoOf(Builder_2).addFormatStructureForTime_h3r7lv_k$ = function (structure) {
    this.actualBuilder_1.add_b6pdwl_k$(structure);
  };
  protoOf(Builder_2).createEmpty_8k9z67_k$ = function () {
    return new Builder_2(new AppendableFormatStructure());
  };
  function LocalTimeFormat(actualFormat) {
    Companion_getInstance_7();
    AbstractDateTimeFormat.call(this);
    this.actualFormat_1 = actualFormat;
  }
  protoOf(LocalTimeFormat).get_actualFormat_d0ha3y_k$ = function () {
    return this.actualFormat_1;
  };
  protoOf(LocalTimeFormat).intermediateFromValue_ese2jb_k$ = function (value) {
    // Inline function 'kotlin.apply' call
    var this_0 = new IncompleteLocalTime();
    // Inline function 'kotlinx.datetime.format.LocalTimeFormat.intermediateFromValue.<anonymous>' call
    this_0.populateFrom_n7wbcx_k$(value);
    return this_0;
  };
  protoOf(LocalTimeFormat).intermediateFromValue_816pep_k$ = function (value) {
    return this.intermediateFromValue_ese2jb_k$(value instanceof LocalTime_0 ? value : THROW_CCE());
  };
  protoOf(LocalTimeFormat).valueFromIntermediate_xifbh8_k$ = function (intermediate) {
    return intermediate.toLocalTime_u7y1k3_k$();
  };
  protoOf(LocalTimeFormat).valueFromIntermediate_60ox3m_k$ = function (intermediate) {
    return this.valueFromIntermediate_xifbh8_k$(intermediate instanceof IncompleteLocalTime ? intermediate : THROW_CCE());
  };
  protoOf(LocalTimeFormat).get_emptyIntermediate_lysuyr_k$ = function () {
    return get_emptyIncompleteLocalTime();
  };
  function AbstractWithTimeBuilder() {
  }
  function _get_padding__n2y8rk_2($this) {
    return $this.padding_1;
  }
  function HourDirective(padding) {
    var tmp = TimeFields_getInstance().hour_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.padding_1 = padding;
  }
  protoOf(HourDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return this.padding_1.get_ordinal_ip24qg_k$() === 1 ? 'hour()' : 'hour(' + toKotlinCode(this.padding_1) + ')';
  };
  protoOf(HourDirective).equals = function (other) {
    var tmp;
    if (other instanceof HourDirective) {
      tmp = this.padding_1.equals(other.padding_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HourDirective).hashCode = function () {
    return this.padding_1.hashCode();
  };
  function _get_padding__n2y8rk_3($this) {
    return $this.padding_1;
  }
  function AmPmHourDirective(padding) {
    var tmp = TimeFields_getInstance().hourOfAmPm_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.padding_1 = padding;
  }
  protoOf(AmPmHourDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return this.padding_1.get_ordinal_ip24qg_k$() === 1 ? 'amPmHour()' : 'amPmHour(' + toKotlinCode(this.padding_1) + ')';
  };
  protoOf(AmPmHourDirective).equals = function (other) {
    var tmp;
    if (other instanceof AmPmHourDirective) {
      tmp = this.padding_1.equals(other.padding_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AmPmHourDirective).hashCode = function () {
    return this.padding_1.hashCode();
  };
  function _get_amString__l1962a($this) {
    return $this.amString_1;
  }
  function _get_pmString__rsuvx9($this) {
    return $this.pmString_1;
  }
  function AmPmMarkerDirective(amString, pmString) {
    NamedEnumIntFieldFormatDirective.call(this, TimeFields_getInstance().amPm_1, mapOf([to(AmPmMarker_AM_getInstance(), amString), to(AmPmMarker_PM_getInstance(), pmString)]), 'AM/PM marker');
    this.amString_1 = amString;
    this.pmString_1 = pmString;
  }
  protoOf(AmPmMarkerDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return 'amPmMarker(' + this.amString_1 + ', ' + this.pmString_1 + ')';
  };
  protoOf(AmPmMarkerDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AmPmMarkerDirective) {
      tmp_0 = this.amString_1 === other.amString_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.pmString_1 === other.pmString_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AmPmMarkerDirective).hashCode = function () {
    return imul(31, getStringHashCode(this.amString_1)) + getStringHashCode(this.pmString_1) | 0;
  };
  function _get_padding__n2y8rk_4($this) {
    return $this.padding_1;
  }
  function MinuteDirective(padding) {
    var tmp = TimeFields_getInstance().minute_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.padding_1 = padding;
  }
  protoOf(MinuteDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return this.padding_1.get_ordinal_ip24qg_k$() === 1 ? 'minute()' : 'minute(' + toKotlinCode(this.padding_1) + ')';
  };
  protoOf(MinuteDirective).equals = function (other) {
    var tmp;
    if (other instanceof MinuteDirective) {
      tmp = this.padding_1.equals(other.padding_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MinuteDirective).hashCode = function () {
    return this.padding_1.hashCode();
  };
  function _get_padding__n2y8rk_5($this) {
    return $this.padding_1;
  }
  function SecondDirective(padding) {
    var tmp = TimeFields_getInstance().second_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.padding_1 = padding;
  }
  protoOf(SecondDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return this.padding_1.get_ordinal_ip24qg_k$() === 1 ? 'second()' : 'second(' + toKotlinCode(this.padding_1) + ')';
  };
  protoOf(SecondDirective).equals = function (other) {
    var tmp;
    if (other instanceof SecondDirective) {
      tmp = this.padding_1.equals(other.padding_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SecondDirective).hashCode = function () {
    return this.padding_1.hashCode();
  };
  function _get_minDigits__4wf98n($this) {
    return $this.minDigits_2;
  }
  function _get_maxDigits__p8x9uv($this) {
    return $this.maxDigits_2;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.NO_EXTRA_ZEROS_1 = listOf([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    this.GROUP_BY_THREE_1 = listOf([2, 1, 0, 2, 1, 0, 2, 1, 0]);
  }
  protoOf(Companion_7).get_NO_EXTRA_ZEROS_9wrjkp_k$ = function () {
    return this.NO_EXTRA_ZEROS_1;
  };
  protoOf(Companion_7).get_GROUP_BY_THREE_z0tc3l_k$ = function () {
    return this.GROUP_BY_THREE_1;
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function FractionalSecondDirective(minDigits, maxDigits, zerosToAdd) {
    Companion_getInstance_8();
    zerosToAdd = zerosToAdd === VOID ? Companion_getInstance_8().NO_EXTRA_ZEROS_1 : zerosToAdd;
    DecimalFractionFieldFormatDirective.call(this, TimeFields_getInstance().fractionOfSecond_1, minDigits, maxDigits, zerosToAdd);
    this.minDigits_2 = minDigits;
    this.maxDigits_2 = maxDigits;
  }
  protoOf(FractionalSecondDirective).get_builderRepresentation_hh53bz_k$ = function () {
    var ref = 'secondFraction';
    return this.minDigits_2 === 1 && this.maxDigits_2 === 9 ? ref + '()' : this.minDigits_2 === 1 ? ref + '(maxLength = ' + this.maxDigits_2 + ')' : this.maxDigits_2 === 1 ? ref + '(minLength = ' + this.minDigits_2 + ')' : this.maxDigits_2 === this.minDigits_2 ? ref + '(' + this.minDigits_2 + ')' : ref + '(' + this.minDigits_2 + ', ' + this.maxDigits_2 + ')';
  };
  protoOf(FractionalSecondDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof FractionalSecondDirective) {
      tmp_0 = this.minDigits_2 === other.minDigits_2;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.maxDigits_2 === other.maxDigits_2;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(FractionalSecondDirective).hashCode = function () {
    return imul(31, this.minDigits_2) + this.maxDigits_2 | 0;
  };
  function TimeFields() {
    TimeFields_instance = this;
    this.hour_1 = new UnsignedFieldSpec(new PropertyAccessor(hour$factory_2()), 0, 23);
    this.minute_1 = new UnsignedFieldSpec(new PropertyAccessor(minute$factory_2()), 0, 59);
    this.second_1 = new UnsignedFieldSpec(new PropertyAccessor(second$factory_2()), 0, 59, VOID, 0);
    this.fractionOfSecond_1 = new GenericFieldSpec(new PropertyAccessor(fractionOfSecond$factory()), VOID, new DecimalFraction(0, 9));
    this.amPm_1 = new GenericFieldSpec(new PropertyAccessor(amPm$factory_2()));
    this.hourOfAmPm_1 = new UnsignedFieldSpec(new PropertyAccessor(hourOfAmPm$factory_2()), 1, 12);
  }
  protoOf(TimeFields).get_hour_wonfal_k$ = function () {
    return this.hour_1;
  };
  protoOf(TimeFields).get_minute_gnc10d_k$ = function () {
    return this.minute_1;
  };
  protoOf(TimeFields).get_second_jf7fjx_k$ = function () {
    return this.second_1;
  };
  protoOf(TimeFields).get_fractionOfSecond_3ubmju_k$ = function () {
    return this.fractionOfSecond_1;
  };
  protoOf(TimeFields).get_amPm_woiw0i_k$ = function () {
    return this.amPm_1;
  };
  protoOf(TimeFields).get_hourOfAmPm_c9obsj_k$ = function () {
    return this.hourOfAmPm_1;
  };
  var TimeFields_instance;
  function TimeFields_getInstance() {
    if (TimeFields_instance == null)
      new TimeFields();
    return TimeFields_instance;
  }
  function ISO_TIME$delegate$lambda() {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    var tmp = Companion_getInstance_7();
    return tmp.build_agwrib_k$(ISO_TIME$delegate$lambda$lambda);
  }
  function ISO_TIME$delegate$lambda$lambda($this$build) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    $this$build.hour$default_sexqwx_k$();
    char($this$build, _Char___init__impl__6a9atx(58));
    $this$build.minute$default_g584a9_k$();
    var tmp = [ISO_TIME$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_TIME$delegate$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function ISO_TIME$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    return Unit_getInstance();
  }
  function ISO_TIME$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    char($this$alternativeParsing, _Char___init__impl__6a9atx(58));
    $this$alternativeParsing.second$default_h6j21d_k$();
    optional($this$alternativeParsing, VOID, ISO_TIME$delegate$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ISO_TIME$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    char($this$optional, _Char___init__impl__6a9atx(46));
    $this$optional.secondFraction_6m5e86_k$(1, 9);
    return Unit_getInstance();
  }
  function AmPmMarker_AM_getInstance() {
    AmPmMarker_initEntries();
    return AmPmMarker_AM_instance;
  }
  function AmPmMarker_PM_getInstance() {
    AmPmMarker_initEntries();
    return AmPmMarker_PM_instance;
  }
  function ISO_TIME$factory() {
    return getPropertyCallableRef('ISO_TIME', 0, KProperty0, function () {
      return get_ISO_TIME();
    }, null);
  }
  function hour$factory_2() {
    return getPropertyCallableRef('hour', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hour_wonfal_k$();
    }, function (receiver, value) {
      return receiver.set_hour_cn99tm_k$(value);
    });
  }
  function minute$factory_2() {
    return getPropertyCallableRef('minute', 1, KMutableProperty1, function (receiver) {
      return receiver.get_minute_gnc10d_k$();
    }, function (receiver, value) {
      return receiver.set_minute_35xlhm_k$(value);
    });
  }
  function second$factory_2() {
    return getPropertyCallableRef('second', 1, KMutableProperty1, function (receiver) {
      return receiver.get_second_jf7fjx_k$();
    }, function (receiver, value) {
      return receiver.set_second_5q0zme_k$(value);
    });
  }
  function fractionOfSecond$factory() {
    return getPropertyCallableRef('fractionOfSecond', 1, KMutableProperty1, function (receiver) {
      return receiver.get_fractionOfSecond_3ubmju_k$();
    }, function (receiver, value) {
      return receiver.set_fractionOfSecond_ixjooe_k$(value);
    });
  }
  function amPm$factory_2() {
    return getPropertyCallableRef('amPm', 1, KMutableProperty1, function (receiver) {
      return receiver.get_amPm_woiw0i_k$();
    }, function (receiver, value) {
      return receiver.set_amPm_5mqo57_k$(value);
    });
  }
  function hourOfAmPm$factory_2() {
    return getPropertyCallableRef('hourOfAmPm', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hourOfAmPm_c9obsj_k$();
    }, function (receiver, value) {
      return receiver.set_hourOfAmPm_4kn0va_k$(value);
    });
  }
  var properties_initialized_LocalTimeFormat_kt_l1b0w1;
  function _init_properties_LocalTimeFormat_kt__5i3lfh() {
    if (!properties_initialized_LocalTimeFormat_kt_l1b0w1) {
      properties_initialized_LocalTimeFormat_kt_l1b0w1 = true;
      ISO_TIME$delegate = lazy(ISO_TIME$delegate$lambda);
      emptyIncompleteLocalTime = new IncompleteLocalTime();
    }
  }
  function get_nonPlainCharacters() {
    _init_properties_Unicode_kt__5cnwob();
    return nonPlainCharacters;
  }
  var nonPlainCharacters;
  var properties_initialized_Unicode_kt_2yq8h9;
  function _init_properties_Unicode_kt__5cnwob() {
    if (!properties_initialized_Unicode_kt_2yq8h9) {
      properties_initialized_Unicode_kt_2yq8h9 = true;
      nonPlainCharacters = plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), listOf([new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)), new Char(_Char___init__impl__6a9atx(39))]));
    }
  }
  function get_ISO_OFFSET() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp0 = ISO_OFFSET$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_OFFSET$factory();
    return tmp0.get_value_j01efc_k$();
  }
  var ISO_OFFSET$delegate;
  function get_ISO_OFFSET_BASIC() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp0 = ISO_OFFSET_BASIC$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_OFFSET_BASIC$factory();
    return tmp0.get_value_j01efc_k$();
  }
  var ISO_OFFSET_BASIC$delegate;
  function get_FOUR_DIGIT_OFFSET() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp0 = FOUR_DIGIT_OFFSET$delegate;
    // Inline function 'kotlin.getValue' call
    FOUR_DIGIT_OFFSET$factory();
    return tmp0.get_value_j01efc_k$();
  }
  var FOUR_DIGIT_OFFSET$delegate;
  function get_emptyIncompleteUtcOffset() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    return emptyIncompleteUtcOffset;
  }
  var emptyIncompleteUtcOffset;
  function UtcOffsetFieldContainer() {
  }
  function IncompleteUtcOffset(isNegative, totalHoursAbs, minutesOfHour, secondsOfMinute) {
    isNegative = isNegative === VOID ? null : isNegative;
    totalHoursAbs = totalHoursAbs === VOID ? null : totalHoursAbs;
    minutesOfHour = minutesOfHour === VOID ? null : minutesOfHour;
    secondsOfMinute = secondsOfMinute === VOID ? null : secondsOfMinute;
    this.isNegative_1 = isNegative;
    this.totalHoursAbs_1 = totalHoursAbs;
    this.minutesOfHour_1 = minutesOfHour;
    this.secondsOfMinute_1 = secondsOfMinute;
  }
  protoOf(IncompleteUtcOffset).set_isNegative_wsta3o_k$ = function (_set____db54di) {
    this.isNegative_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).get_isNegative_i24zqw_k$ = function () {
    return this.isNegative_1;
  };
  protoOf(IncompleteUtcOffset).set_totalHoursAbs_snwz1t_k$ = function (_set____db54di) {
    this.totalHoursAbs_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).get_totalHoursAbs_4tff1e_k$ = function () {
    return this.totalHoursAbs_1;
  };
  protoOf(IncompleteUtcOffset).set_minutesOfHour_yz9dnm_k$ = function (_set____db54di) {
    this.minutesOfHour_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).get_minutesOfHour_eg2iof_k$ = function () {
    return this.minutesOfHour_1;
  };
  protoOf(IncompleteUtcOffset).set_secondsOfMinute_752ar6_k$ = function (_set____db54di) {
    this.secondsOfMinute_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).get_secondsOfMinute_kbv2wx_k$ = function () {
    return this.secondsOfMinute_1;
  };
  protoOf(IncompleteUtcOffset).toUtcOffset_loe12c_k$ = function () {
    var sign = this.isNegative_1 === true ? -1 : 1;
    var tmp0_safe_receiver = this.totalHoursAbs_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.IncompleteUtcOffset.toUtcOffset.<anonymous>' call
      tmp = imul(tmp0_safe_receiver, sign);
    }
    var tmp_0 = tmp;
    var tmp1_safe_receiver = this.minutesOfHour_1;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.IncompleteUtcOffset.toUtcOffset.<anonymous>' call
      tmp_1 = imul(tmp1_safe_receiver, sign);
    }
    var tmp_2 = tmp_1;
    var tmp2_safe_receiver = this.secondsOfMinute_1;
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.IncompleteUtcOffset.toUtcOffset.<anonymous>' call
      tmp_3 = imul(tmp2_safe_receiver, sign);
    }
    return UtcOffset_0(tmp_0, tmp_2, tmp_3);
  };
  protoOf(IncompleteUtcOffset).populateFrom_543lw3_k$ = function (offset) {
    this.isNegative_1 = offset.get_totalSeconds_oq5924_k$() < 0;
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = offset.get_totalSeconds_oq5924_k$();
    var totalSecondsAbs = abs(this_0);
    this.totalHoursAbs_1 = totalSecondsAbs / 3600 | 0;
    this.minutesOfHour_1 = (totalSecondsAbs / 60 | 0) % 60 | 0;
    this.secondsOfMinute_1 = totalSecondsAbs % 60 | 0;
  };
  protoOf(IncompleteUtcOffset).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof IncompleteUtcOffset) {
      tmp_2 = this.isNegative_1 == other.isNegative_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.totalHoursAbs_1 == other.totalHoursAbs_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.minutesOfHour_1 == other.minutesOfHour_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.secondsOfMinute_1 == other.secondsOfMinute_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteUtcOffset).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.isNegative_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.totalHoursAbs_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp_0 = tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.minutesOfHour_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp_1 = tmp_0 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.secondsOfMinute_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    return tmp_1 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
  };
  protoOf(IncompleteUtcOffset).copy_1tks5_k$ = function () {
    return new IncompleteUtcOffset(this.isNegative_1, this.totalHoursAbs_1, this.minutesOfHour_1, this.secondsOfMinute_1);
  };
  protoOf(IncompleteUtcOffset).toString = function () {
    var tmp0_safe_receiver = this.isNegative_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.IncompleteUtcOffset.toString.<anonymous>' call
      tmp = tmp0_safe_receiver ? '-' : '+';
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0 = tmp1_elvis_lhs == null ? ' ' : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.totalHoursAbs_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = this.minutesOfHour_1;
    var tmp_2 = toString(tmp3_elvis_lhs == null ? '??' : tmp3_elvis_lhs);
    var tmp4_elvis_lhs = this.secondsOfMinute_1;
    return tmp_0 + tmp_1 + ':' + tmp_2 + ':' + toString(tmp4_elvis_lhs == null ? '??' : tmp4_elvis_lhs);
  };
  function _get_padding__n2y8rk_6($this) {
    return $this.padding_1;
  }
  function UtcOffsetWholeHoursDirective(padding) {
    var tmp = OffsetFields_getInstance().totalHoursAbs_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.padding_1 = padding;
  }
  protoOf(UtcOffsetWholeHoursDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return 'offsetHours(' + toKotlinCode(this.padding_1) + ')';
  };
  protoOf(UtcOffsetWholeHoursDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetWholeHoursDirective) {
      tmp = this.padding_1.equals(other.padding_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetWholeHoursDirective).hashCode = function () {
    return this.padding_1.hashCode();
  };
  function Companion_8() {
    Companion_instance_8 = this;
  }
  protoOf(Companion_8).build_dzztnl_k$ = function (block) {
    var builder = new Builder_3(new AppendableFormatStructure());
    block(builder);
    return new UtcOffsetFormat(builder.build_1k0s4u_k$());
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Builder_3(actualBuilder) {
    this.actualBuilder_1 = actualBuilder;
  }
  protoOf(Builder_3).get_actualBuilder_7qypdo_k$ = function () {
    return this.actualBuilder_1;
  };
  protoOf(Builder_3).addFormatStructureForOffset_puuf83_k$ = function (structure) {
    this.actualBuilder_1.add_b6pdwl_k$(structure);
  };
  protoOf(Builder_3).createEmpty_8k9z67_k$ = function () {
    return new Builder_3(new AppendableFormatStructure());
  };
  function UtcOffsetFormat(actualFormat) {
    Companion_getInstance_9();
    AbstractDateTimeFormat.call(this);
    this.actualFormat_1 = actualFormat;
  }
  protoOf(UtcOffsetFormat).get_actualFormat_d0ha3y_k$ = function () {
    return this.actualFormat_1;
  };
  protoOf(UtcOffsetFormat).intermediateFromValue_qn9rt5_k$ = function (value) {
    // Inline function 'kotlin.apply' call
    var this_0 = new IncompleteUtcOffset();
    // Inline function 'kotlinx.datetime.format.UtcOffsetFormat.intermediateFromValue.<anonymous>' call
    this_0.populateFrom_543lw3_k$(value);
    return this_0;
  };
  protoOf(UtcOffsetFormat).intermediateFromValue_816pep_k$ = function (value) {
    return this.intermediateFromValue_qn9rt5_k$(value instanceof UtcOffset ? value : THROW_CCE());
  };
  protoOf(UtcOffsetFormat).valueFromIntermediate_4cubyk_k$ = function (intermediate) {
    return intermediate.toUtcOffset_loe12c_k$();
  };
  protoOf(UtcOffsetFormat).valueFromIntermediate_60ox3m_k$ = function (intermediate) {
    return this.valueFromIntermediate_4cubyk_k$(intermediate instanceof IncompleteUtcOffset ? intermediate : THROW_CCE());
  };
  protoOf(UtcOffsetFormat).get_emptyIntermediate_lysuyr_k$ = function () {
    return get_emptyIncompleteUtcOffset();
  };
  function _get_sign__ddo3e6($this) {
    return $this.sign_1;
  }
  function OffsetFields$sign$1() {
    this.isNegative_1 = new PropertyAccessor(isNegative$factory_0());
  }
  protoOf(OffsetFields$sign$1).get_isNegative_i24zqw_k$ = function () {
    return this.isNegative_1;
  };
  protoOf(OffsetFields$sign$1).isZero_ip1qpa_k$ = function (obj) {
    var tmp;
    var tmp_0;
    var tmp0_elvis_lhs = obj.get_totalHoursAbs_4tff1e_k$();
    if ((tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) === 0) {
      var tmp1_elvis_lhs = obj.get_minutesOfHour_eg2iof_k$();
      tmp_0 = (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) === 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp2_elvis_lhs = obj.get_secondsOfMinute_kbv2wx_k$();
      tmp = (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) === 0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(OffsetFields$sign$1).isZero_yccjay_k$ = function (obj) {
    return this.isZero_ip1qpa_k$((!(obj == null) ? isInterface(obj, UtcOffsetFieldContainer) : false) ? obj : THROW_CCE());
  };
  function OffsetFields() {
    OffsetFields_instance = this;
    var tmp = this;
    tmp.sign_1 = new OffsetFields$sign$1();
    var tmp_0 = this;
    var tmp0_accessor = new PropertyAccessor(totalHoursAbs$factory_0());
    var tmp1_sign = this.sign_1;
    tmp_0.totalHoursAbs_1 = new UnsignedFieldSpec(tmp0_accessor, 0, 18, VOID, 0, tmp1_sign);
    var tmp_1 = this;
    var tmp0_accessor_0 = new PropertyAccessor(minutesOfHour$factory_0());
    var tmp1_sign_0 = this.sign_1;
    tmp_1.minutesOfHour_1 = new UnsignedFieldSpec(tmp0_accessor_0, 0, 59, VOID, 0, tmp1_sign_0);
    var tmp_2 = this;
    var tmp0_accessor_1 = new PropertyAccessor(secondsOfMinute$factory_0());
    var tmp1_sign_1 = this.sign_1;
    tmp_2.secondsOfMinute_1 = new UnsignedFieldSpec(tmp0_accessor_1, 0, 59, VOID, 0, tmp1_sign_1);
  }
  protoOf(OffsetFields).get_totalHoursAbs_4tff1e_k$ = function () {
    return this.totalHoursAbs_1;
  };
  protoOf(OffsetFields).get_minutesOfHour_eg2iof_k$ = function () {
    return this.minutesOfHour_1;
  };
  protoOf(OffsetFields).get_secondsOfMinute_kbv2wx_k$ = function () {
    return this.secondsOfMinute_1;
  };
  var OffsetFields_instance;
  function OffsetFields_getInstance() {
    if (OffsetFields_instance == null)
      new OffsetFields();
    return OffsetFields_instance;
  }
  function AbstractWithOffsetBuilder() {
  }
  function _get_padding__n2y8rk_7($this) {
    return $this.padding_1;
  }
  function UtcOffsetMinuteOfHourDirective(padding) {
    var tmp = OffsetFields_getInstance().minutesOfHour_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.padding_1 = padding;
  }
  protoOf(UtcOffsetMinuteOfHourDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return this.padding_1.get_ordinal_ip24qg_k$() === 0 ? 'offsetMinutesOfHour()' : 'offsetMinutesOfHour(' + toKotlinCode(this.padding_1) + ')';
  };
  protoOf(UtcOffsetMinuteOfHourDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetMinuteOfHourDirective) {
      tmp = this.padding_1.equals(other.padding_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetMinuteOfHourDirective).hashCode = function () {
    return this.padding_1.hashCode();
  };
  function _get_padding__n2y8rk_8($this) {
    return $this.padding_1;
  }
  function UtcOffsetSecondOfMinuteDirective(padding) {
    var tmp = OffsetFields_getInstance().secondsOfMinute_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.padding_1 = padding;
  }
  protoOf(UtcOffsetSecondOfMinuteDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return this.padding_1.get_ordinal_ip24qg_k$() === 0 ? 'offsetSecondsOfMinute()' : 'offsetSecondsOfMinute(' + toKotlinCode(this.padding_1) + ')';
  };
  protoOf(UtcOffsetSecondOfMinuteDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetSecondOfMinuteDirective) {
      tmp = this.padding_1.equals(other.padding_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetSecondOfMinuteDirective).hashCode = function () {
    return this.padding_1.hashCode();
  };
  function ISO_OFFSET$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_getInstance_9();
    return tmp.build_dzztnl_k$(ISO_OFFSET$delegate$lambda$lambda);
  }
  function ISO_OFFSET$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = [ISO_OFFSET$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_OFFSET$delegate$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$alternativeParsing.chars_pe6iqb_k$('z');
    return Unit_getInstance();
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    optional($this$alternativeParsing, 'Z', ISO_OFFSET$delegate$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.offsetHours$default_2ga4wd_k$();
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.offsetMinutesOfHour$default_3itngo_k$();
    optional($this$optional, VOID, ISO_OFFSET$delegate$lambda$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.offsetSecondsOfMinute$default_fqi77c_k$();
    return Unit_getInstance();
  }
  function ISO_OFFSET_BASIC$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_getInstance_9();
    return tmp.build_dzztnl_k$(ISO_OFFSET_BASIC$delegate$lambda$lambda);
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = [ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$alternativeParsing.chars_pe6iqb_k$('z');
    return Unit_getInstance();
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    optional($this$alternativeParsing, 'Z', ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.offsetHours$default_2ga4wd_k$();
    optional($this$optional, VOID, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.offsetMinutesOfHour$default_3itngo_k$();
    optional($this$optional, VOID, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.offsetSecondsOfMinute$default_fqi77c_k$();
    return Unit_getInstance();
  }
  function FOUR_DIGIT_OFFSET$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_getInstance_9();
    return tmp.build_dzztnl_k$(FOUR_DIGIT_OFFSET$delegate$lambda$lambda);
  }
  function FOUR_DIGIT_OFFSET$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$build.offsetHours$default_2ga4wd_k$();
    $this$build.offsetMinutesOfHour$default_3itngo_k$();
    return Unit_getInstance();
  }
  function ISO_OFFSET$factory() {
    return getPropertyCallableRef('ISO_OFFSET', 0, KProperty0, function () {
      return get_ISO_OFFSET();
    }, null);
  }
  function ISO_OFFSET_BASIC$factory() {
    return getPropertyCallableRef('ISO_OFFSET_BASIC', 0, KProperty0, function () {
      return get_ISO_OFFSET_BASIC();
    }, null);
  }
  function FOUR_DIGIT_OFFSET$factory() {
    return getPropertyCallableRef('FOUR_DIGIT_OFFSET', 0, KProperty0, function () {
      return get_FOUR_DIGIT_OFFSET();
    }, null);
  }
  function totalHoursAbs$factory_0() {
    return getPropertyCallableRef('totalHoursAbs', 1, KMutableProperty1, function (receiver) {
      return receiver.get_totalHoursAbs_4tff1e_k$();
    }, function (receiver, value) {
      return receiver.set_totalHoursAbs_snwz1t_k$(value);
    });
  }
  function minutesOfHour$factory_0() {
    return getPropertyCallableRef('minutesOfHour', 1, KMutableProperty1, function (receiver) {
      return receiver.get_minutesOfHour_eg2iof_k$();
    }, function (receiver, value) {
      return receiver.set_minutesOfHour_yz9dnm_k$(value);
    });
  }
  function secondsOfMinute$factory_0() {
    return getPropertyCallableRef('secondsOfMinute', 1, KMutableProperty1, function (receiver) {
      return receiver.get_secondsOfMinute_kbv2wx_k$();
    }, function (receiver, value) {
      return receiver.set_secondsOfMinute_752ar6_k$(value);
    });
  }
  function isNegative$factory_0() {
    return getPropertyCallableRef('isNegative', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isNegative_i24zqw_k$();
    }, function (receiver, value) {
      return receiver.set_isNegative_wsta3o_k$(value);
    });
  }
  var properties_initialized_UtcOffsetFormat_kt_6y9jku;
  function _init_properties_UtcOffsetFormat_kt__9r9ddw() {
    if (!properties_initialized_UtcOffsetFormat_kt_6y9jku) {
      properties_initialized_UtcOffsetFormat_kt_6y9jku = true;
      ISO_OFFSET$delegate = lazy(ISO_OFFSET$delegate$lambda);
      ISO_OFFSET_BASIC$delegate = lazy(ISO_OFFSET_BASIC$delegate$lambda);
      FOUR_DIGIT_OFFSET$delegate = lazy(FOUR_DIGIT_OFFSET$delegate$lambda);
      emptyIncompleteUtcOffset = new IncompleteUtcOffset();
    }
  }
  function get_NANOS_PER_MILLI() {
    return NANOS_PER_MILLI;
  }
  var NANOS_PER_MILLI;
  function get_SECONDS_PER_10000_YEARS() {
    return SECONDS_PER_10000_YEARS;
  }
  var SECONDS_PER_10000_YEARS;
  function get_SECONDS_PER_DAY() {
    return SECONDS_PER_DAY;
  }
  var SECONDS_PER_DAY;
  function get_MILLIS_PER_ONE() {
    return MILLIS_PER_ONE;
  }
  var MILLIS_PER_ONE;
  function get_NANOS_PER_ONE() {
    return NANOS_PER_ONE;
  }
  var NANOS_PER_ONE;
  function _get_list__d9tsa5($this) {
    return $this.list_1;
  }
  function AppendableFormatStructure() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.list_1 = ArrayList_init_$Create$_0();
  }
  protoOf(AppendableFormatStructure).build_1k0s4u_k$ = function () {
    return new ConcatenatedFormatStructure(this.list_1);
  };
  protoOf(AppendableFormatStructure).add_b6pdwl_k$ = function (format) {
    if (isInterface(format, NonConcatenatedFormatStructure)) {
      this.list_1.add_utx5q5_k$(format);
    } else {
      if (format instanceof ConcatenatedFormatStructure) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = format.get_formats_9xs0wd_k$().iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'kotlinx.datetime.internal.format.AppendableFormatStructure.add.<anonymous>' call
          this.list_1.add_utx5q5_k$(element);
        }
      }
    }
  };
  function FieldFormatDirective() {
  }
  function _get_minDigits__4wf98n_0($this) {
    return $this.minDigits_1;
  }
  function _get_maxDigits__p8x9uv_0($this) {
    return $this.maxDigits_1;
  }
  function _get_spacePadding__1yncsg($this) {
    return $this.spacePadding_1;
  }
  function _get_outputPlusOnExceededWidth__7vsxp4($this) {
    return $this.outputPlusOnExceededWidth_1;
  }
  function Accessor$getterNotNull$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.getterNotNull_rjcshh_k$(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function SignedIntFieldFormatDirective(field, minDigits, maxDigits, spacePadding, outputPlusOnExceededWidth) {
    this.field_1 = field;
    this.minDigits_1 = minDigits;
    this.maxDigits_1 = maxDigits;
    this.spacePadding_1 = spacePadding;
    this.outputPlusOnExceededWidth_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    if (!(this.minDigits_1 == null || this.minDigits_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.SignedIntFieldFormatDirective.<anonymous>' call
      var message = 'The minimum number of digits (' + this.minDigits_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.maxDigits_1 == null || this.minDigits_1 == null || this.maxDigits_1 >= this.minDigits_1)) {
      // Inline function 'kotlinx.datetime.internal.format.SignedIntFieldFormatDirective.<anonymous>' call
      var message_0 = 'The maximum number of digits (' + this.maxDigits_1 + ') is less than the minimum number of digits (' + this.minDigits_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(SignedIntFieldFormatDirective).get_field_irdnf5_k$ = function () {
    return this.field_1;
  };
  protoOf(SignedIntFieldFormatDirective).formatter_tykoui_k$ = function () {
    var tmp = Accessor$getterNotNull$ref(this.field_1.get_accessor_3q8qa8_k$());
    var tmp0_elvis_lhs = this.minDigits_1;
    var formatter = new SignedIntFormatterStructure(tmp, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs, this.outputPlusOnExceededWidth_1);
    return !(this.spacePadding_1 == null) ? new SpacePaddedFormatter(formatter, this.spacePadding_1) : formatter;
  };
  protoOf(SignedIntFieldFormatDirective).parser_ggn3z5_k$ = function () {
    return SignedIntParser(this.minDigits_1, this.maxDigits_1, this.spacePadding_1, this.field_1.get_accessor_3q8qa8_k$(), this.field_1.get_name_woqyms_k$(), this.outputPlusOnExceededWidth_1);
  };
  function _get_digits__5rvfvf($this) {
    return $this.digits_1;
  }
  function _get_base__d46q3e($this) {
    return $this.base_1;
  }
  function Accessor$getterNotNull$ref_0($boundThis) {
    var l = function (p0) {
      return $boundThis.getterNotNull_rjcshh_k$(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function ReducedIntFieldDirective(field, digits, base) {
    this.field_1 = field;
    this.digits_1 = digits;
    this.base_1 = base;
  }
  protoOf(ReducedIntFieldDirective).get_field_irdnf5_k$ = function () {
    return this.field_1;
  };
  protoOf(ReducedIntFieldDirective).formatter_tykoui_k$ = function () {
    return new ReducedIntFormatterStructure(Accessor$getterNotNull$ref_0(this.field_1.get_accessor_3q8qa8_k$()), this.digits_1, this.base_1);
  };
  protoOf(ReducedIntFieldDirective).parser_ggn3z5_k$ = function () {
    return ReducedIntParser(this.digits_1, this.base_1, this.field_1.get_accessor_3q8qa8_k$(), this.field_1.get_name_woqyms_k$());
  };
  function _get_minDigits__4wf98n_1($this) {
    return $this.minDigits_1;
  }
  function _get_spacePadding__1yncsg_0($this) {
    return $this.spacePadding_1;
  }
  function _get_maxDigits__p8x9uv_1($this) {
    return $this.maxDigits_1;
  }
  function Accessor$getterNotNull$ref_1($boundThis) {
    var l = function (p0) {
      return $boundThis.getterNotNull_rjcshh_k$(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function UnsignedIntFieldFormatDirective(field, minDigits, spacePadding) {
    this.field_1 = field;
    this.minDigits_1 = minDigits;
    this.spacePadding_1 = spacePadding;
    this.maxDigits_1 = this.field_1.get_maxDigits_8axv7j_k$();
    // Inline function 'kotlin.require' call
    if (!(this.minDigits_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.UnsignedIntFieldFormatDirective.<anonymous>' call
      var message = 'The minimum number of digits (' + this.minDigits_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.maxDigits_1 >= this.minDigits_1)) {
      // Inline function 'kotlinx.datetime.internal.format.UnsignedIntFieldFormatDirective.<anonymous>' call
      var message_0 = 'The maximum number of digits (' + this.maxDigits_1 + ') is less than the minimum number of digits (' + this.minDigits_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (!(this.spacePadding_1 == null)) {
      // Inline function 'kotlin.require' call
      if (!(this.spacePadding_1 > this.minDigits_1)) {
        // Inline function 'kotlinx.datetime.internal.format.UnsignedIntFieldFormatDirective.<anonymous>' call
        var message_1 = 'The space padding (' + this.spacePadding_1 + ') should be more than the minimum number of digits (' + this.minDigits_1 + ')';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  protoOf(UnsignedIntFieldFormatDirective).get_field_irdnf5_k$ = function () {
    return this.field_1;
  };
  protoOf(UnsignedIntFieldFormatDirective).formatter_tykoui_k$ = function () {
    var formatter = new UnsignedIntFormatterStructure(Accessor$getterNotNull$ref_1(this.field_1.get_accessor_3q8qa8_k$()), this.minDigits_1);
    return !(this.spacePadding_1 == null) ? new SpacePaddedFormatter(formatter, this.spacePadding_1) : formatter;
  };
  protoOf(UnsignedIntFieldFormatDirective).parser_ggn3z5_k$ = function () {
    return spaceAndZeroPaddedUnsignedInt(this.minDigits_1, this.maxDigits_1, this.spacePadding_1, this.field_1.get_accessor_3q8qa8_k$(), this.field_1.get_name_woqyms_k$());
  };
  function _get_values__tel787($this) {
    return $this.values_1;
  }
  function _get_name__das4rk($this) {
    return $this.name_1;
  }
  function getStringValue($this, target) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.datetime.internal.format.NamedUnsignedIntFieldFormatDirective.getStringValue.<anonymous>' call
    var it = $this.field_1.get_accessor_3q8qa8_k$().getterNotNull_rjcshh_k$(target);
    var tmp0_elvis_lhs = getOrNull($this.values_1, it - $this.field_1.get_minValue_ggd348_k$() | 0);
    return tmp0_elvis_lhs == null ? 'The value ' + it + ' of ' + $this.field_1.get_name_woqyms_k$() + ' does not have a corresponding string representation' : tmp0_elvis_lhs;
  }
  function AssignableString($outer) {
    this.$this_1 = $outer;
  }
  protoOf(AssignableString).trySetWithoutReassigning_nj495f_k$ = function (container, newValue) {
    var tmp0_safe_receiver = this.$this_1.field_1.get_accessor_3q8qa8_k$().trySetWithoutReassigning_itlg4a_k$(container, this.$this_1.values_1.indexOf_si1fv9_k$(newValue) + this.$this_1.field_1.get_minValue_ggd348_k$() | 0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.internal.format.AssignableString.trySetWithoutReassigning.<anonymous>' call
      tmp = this.$this_1.values_1.get_c1px32_k$(tmp0_safe_receiver - this.$this_1.field_1.get_minValue_ggd348_k$() | 0);
    }
    return tmp;
  };
  protoOf(AssignableString).trySetWithoutReassigning_itlg4a_k$ = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.trySetWithoutReassigning_nj495f_k$(tmp, (!(newValue == null) ? typeof newValue === 'string' : false) ? newValue : THROW_CCE());
  };
  protoOf(AssignableString).get_name_woqyms_k$ = function () {
    return this.$this_1.name_1;
  };
  function NamedUnsignedIntFieldFormatDirective$getStringValue$ref($boundThis) {
    var l = function (p0) {
      return getStringValue($boundThis, p0);
    };
    l.callableName = 'getStringValue';
    return l;
  }
  function NamedUnsignedIntFieldFormatDirective(field, values, name) {
    this.field_1 = field;
    this.values_1 = values;
    this.name_1 = name;
    // Inline function 'kotlin.require' call
    if (!(this.values_1.get_size_woubt6_k$() === ((this.field_1.get_maxValue_p78wqy_k$() - this.field_1.get_minValue_ggd348_k$() | 0) + 1 | 0))) {
      // Inline function 'kotlinx.datetime.internal.format.NamedUnsignedIntFieldFormatDirective.<anonymous>' call
      var message = 'The number of values (' + this.values_1.get_size_woubt6_k$() + ') in ' + toString(this.values_1) + ' does not match the range of the field (' + ((this.field_1.get_maxValue_p78wqy_k$() - this.field_1.get_minValue_ggd348_k$() | 0) + 1 | 0) + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(NamedUnsignedIntFieldFormatDirective).get_field_irdnf5_k$ = function () {
    return this.field_1;
  };
  protoOf(NamedUnsignedIntFieldFormatDirective).formatter_tykoui_k$ = function () {
    return new StringFormatterStructure(NamedUnsignedIntFieldFormatDirective$getStringValue$ref(this));
  };
  protoOf(NamedUnsignedIntFieldFormatDirective).parser_ggn3z5_k$ = function () {
    return new ParserStructure(listOf_0(new StringSetParserOperation(this.values_1, new AssignableString(this), 'one of ' + toString(this.values_1) + ' for ' + this.name_1)), emptyList());
  };
  function _get_mapping__wnkm4d($this) {
    return $this.mapping_1;
  }
  function _get_name__das4rk_0($this) {
    return $this.name_1;
  }
  function _get_reverseMapping__yurbb3($this) {
    return $this.reverseMapping_1;
  }
  function getStringValue_0($this, target) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.datetime.internal.format.NamedEnumIntFieldFormatDirective.getStringValue.<anonymous>' call
    var it = $this.field_1.get_accessor_3q8qa8_k$().getterNotNull_rjcshh_k$(target);
    var tmp0_elvis_lhs = $this.mapping_1.get_wei43m_k$($this.field_1.get_accessor_3q8qa8_k$().getterNotNull_rjcshh_k$(target));
    return tmp0_elvis_lhs == null ? 'The value ' + toString_1(it) + ' of ' + $this.field_1.get_name_woqyms_k$() + ' does not have a corresponding string representation' : tmp0_elvis_lhs;
  }
  function AssignableString_0($outer) {
    this.$this_1 = $outer;
  }
  protoOf(AssignableString_0).trySetWithoutReassigning_nj495f_k$ = function (container, newValue) {
    var tmp0_safe_receiver = this.$this_1.field_1.get_accessor_3q8qa8_k$().trySetWithoutReassigning_itlg4a_k$(container, ensureNotNull(this.$this_1.reverseMapping_1.get_wei43m_k$(newValue)));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.internal.format.AssignableString.trySetWithoutReassigning.<anonymous>' call
      tmp = this.$this_1.mapping_1.get_wei43m_k$(tmp0_safe_receiver);
    }
    return tmp;
  };
  protoOf(AssignableString_0).trySetWithoutReassigning_itlg4a_k$ = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.trySetWithoutReassigning_nj495f_k$(tmp, (!(newValue == null) ? typeof newValue === 'string' : false) ? newValue : THROW_CCE());
  };
  protoOf(AssignableString_0).get_name_woqyms_k$ = function () {
    return this.$this_1.name_1;
  };
  function NamedEnumIntFieldFormatDirective$getStringValue$ref($boundThis) {
    var l = function (p0) {
      return getStringValue_0($boundThis, p0);
    };
    l.callableName = 'getStringValue';
    return l;
  }
  function NamedEnumIntFieldFormatDirective(field, mapping, name) {
    this.field_1 = field;
    this.mapping_1 = mapping;
    this.name_1 = name;
    var tmp = this;
    // Inline function 'kotlin.collections.associate' call
    var this_0 = this.mapping_1.get_entries_p20ztl_k$();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlinx.datetime.internal.format.NamedEnumIntFieldFormatDirective.reverseMapping.<anonymous>' call
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(element.get_value_j01efc_k$(), element.get_key_18j28a_k$());
      destination.put_4fpzoq_k$(pair.get_first_irdx8n_k$(), pair.get_second_jf7fjx_k$());
    }
    tmp.reverseMapping_1 = destination;
  }
  protoOf(NamedEnumIntFieldFormatDirective).get_field_irdnf5_k$ = function () {
    return this.field_1;
  };
  protoOf(NamedEnumIntFieldFormatDirective).formatter_tykoui_k$ = function () {
    return new StringFormatterStructure(NamedEnumIntFieldFormatDirective$getStringValue$ref(this));
  };
  protoOf(NamedEnumIntFieldFormatDirective).parser_ggn3z5_k$ = function () {
    return new ParserStructure(listOf_0(new StringSetParserOperation(this.mapping_1.get_values_ksazhn_k$(), new AssignableString_0(this), 'one of ' + toString(this.mapping_1.get_values_ksazhn_k$()) + ' for ' + this.name_1)), emptyList());
  };
  function _get_minDigits__4wf98n_2($this) {
    return $this.minDigits_1;
  }
  function _get_maxDigits__p8x9uv_2($this) {
    return $this.maxDigits_1;
  }
  function _get_zerosToAdd__m3gu6o($this) {
    return $this.zerosToAdd_1;
  }
  function Accessor$getterNotNull$ref_2($boundThis) {
    var l = function (p0) {
      return $boundThis.getterNotNull_rjcshh_k$(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function DecimalFractionFieldFormatDirective(field, minDigits, maxDigits, zerosToAdd) {
    this.field_1 = field;
    this.minDigits_1 = minDigits;
    this.maxDigits_1 = maxDigits;
    this.zerosToAdd_1 = zerosToAdd;
  }
  protoOf(DecimalFractionFieldFormatDirective).get_field_irdnf5_k$ = function () {
    return this.field_1;
  };
  protoOf(DecimalFractionFieldFormatDirective).formatter_tykoui_k$ = function () {
    return new DecimalFractionFormatterStructure(Accessor$getterNotNull$ref_2(this.field_1.get_accessor_3q8qa8_k$()), this.minDigits_1, this.maxDigits_1, this.zerosToAdd_1);
  };
  protoOf(DecimalFractionFieldFormatDirective).parser_ggn3z5_k$ = function () {
    return new ParserStructure(listOf_0(new NumberSpanParserOperation(listOf_0(new FractionPartConsumer(this.minDigits_1, this.maxDigits_1, this.field_1.get_accessor_3q8qa8_k$(), this.field_1.get_name_woqyms_k$())))), emptyList());
  };
  function _get_acceptedStrings__gh05m2($this) {
    return $this.acceptedStrings_1;
  }
  function Accessor$getterNotNull$ref_3($boundThis) {
    var l = function (p0) {
      return $boundThis.getterNotNull_rjcshh_k$(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function StringFieldFormatDirective(field, acceptedStrings) {
    this.field_1 = field;
    this.acceptedStrings_1 = acceptedStrings;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!this.acceptedStrings_1.isEmpty_y1axqb_k$()) {
      // Inline function 'kotlinx.datetime.internal.format.StringFieldFormatDirective.<anonymous>' call
      var message = 'The set of accepted strings is empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(StringFieldFormatDirective).get_field_irdnf5_k$ = function () {
    return this.field_1;
  };
  protoOf(StringFieldFormatDirective).formatter_tykoui_k$ = function () {
    return new StringFormatterStructure(Accessor$getterNotNull$ref_3(this.field_1.get_accessor_3q8qa8_k$()));
  };
  protoOf(StringFieldFormatDirective).parser_ggn3z5_k$ = function () {
    return new ParserStructure(listOf_0(new StringSetParserOperation(this.acceptedStrings_1, this.field_1.get_accessor_3q8qa8_k$(), this.field_1.get_name_woqyms_k$())), emptyList());
  };
  function GenericFieldSpec(accessor, name, defaultValue, sign) {
    name = name === VOID ? accessor.get_name_woqyms_k$() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.accessor_1 = accessor;
    this.name_1 = name;
    this.defaultValue_1 = defaultValue;
    this.sign_1 = sign;
  }
  protoOf(GenericFieldSpec).get_accessor_3q8qa8_k$ = function () {
    return this.accessor_1;
  };
  protoOf(GenericFieldSpec).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(GenericFieldSpec).get_defaultValue_6cv1mv_k$ = function () {
    return this.defaultValue_1;
  };
  protoOf(GenericFieldSpec).get_sign_woubd2_k$ = function () {
    return this.sign_1;
  };
  function _get_property__ck0u52($this) {
    return $this.property_1;
  }
  function PropertyAccessor(property) {
    this.property_1 = property;
  }
  protoOf(PropertyAccessor).get_name_woqyms_k$ = function () {
    return this.property_1.callableName;
  };
  protoOf(PropertyAccessor).trySetWithoutReassigning_of2ay6_k$ = function (container, newValue) {
    var oldValue = this.property_1.get(container);
    var tmp;
    if (oldValue === null) {
      this.property_1.set(container, newValue);
      tmp = null;
    } else if (equals(oldValue, newValue)) {
      tmp = null;
    } else {
      tmp = oldValue;
    }
    return tmp;
  };
  protoOf(PropertyAccessor).trySetWithoutReassigning_itlg4a_k$ = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.trySetWithoutReassigning_of2ay6_k$(tmp, (newValue == null ? true : !(newValue == null)) ? newValue : THROW_CCE());
  };
  protoOf(PropertyAccessor).getter_8mvnhr_k$ = function (container) {
    return this.property_1.get(container);
  };
  function UnsignedFieldSpec(accessor, minValue, maxValue, name, defaultValue, sign) {
    name = name === VOID ? accessor.get_name_woqyms_k$() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.accessor_1 = accessor;
    this.minValue_1 = minValue;
    this.maxValue_1 = maxValue;
    this.name_1 = name;
    this.defaultValue_1 = defaultValue;
    this.sign_1 = sign;
    var tmp = this;
    var tmp_0;
    if (this.maxValue_1 < 10) {
      tmp_0 = 1;
    } else if (this.maxValue_1 < 100) {
      tmp_0 = 2;
    } else if (this.maxValue_1 < 1000) {
      tmp_0 = 3;
    } else {
      throw IllegalArgumentException_init_$Create$('Max value ' + this.maxValue_1 + ' is too large');
    }
    tmp.maxDigits_1 = tmp_0;
  }
  protoOf(UnsignedFieldSpec).get_accessor_3q8qa8_k$ = function () {
    return this.accessor_1;
  };
  protoOf(UnsignedFieldSpec).get_minValue_ggd348_k$ = function () {
    return this.minValue_1;
  };
  protoOf(UnsignedFieldSpec).get_maxValue_p78wqy_k$ = function () {
    return this.maxValue_1;
  };
  protoOf(UnsignedFieldSpec).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(UnsignedFieldSpec).get_defaultValue_6cv1mv_k$ = function () {
    return this.defaultValue_1;
  };
  protoOf(UnsignedFieldSpec).get_sign_woubd2_k$ = function () {
    return this.sign_1;
  };
  protoOf(UnsignedFieldSpec).get_maxDigits_8axv7j_k$ = function () {
    return this.maxDigits_1;
  };
  function FieldSign() {
  }
  function FieldSpec() {
  }
  function Accessor() {
  }
  function AbstractFieldSpec() {
  }
  protoOf(AbstractFieldSpec).toString = function () {
    return 'The field ' + this.get_name_woqyms_k$() + ' (default value is ' + toString_1(this.get_defaultValue_6cv1mv_k$()) + ')';
  };
  function _get_cachedFormatter__echqk7($this) {
    return $this.cachedFormatter_1;
  }
  function _get_cachedParser__di4k96($this) {
    return $this.cachedParser_1;
  }
  function CachedFormatStructure(formats) {
    ConcatenatedFormatStructure.call(this, formats);
    this.cachedFormatter_1 = protoOf(ConcatenatedFormatStructure).formatter_tykoui_k$.call(this);
    this.cachedParser_1 = protoOf(ConcatenatedFormatStructure).parser_ggn3z5_k$.call(this);
  }
  protoOf(CachedFormatStructure).formatter_tykoui_k$ = function () {
    return this.cachedFormatter_1;
  };
  protoOf(CachedFormatStructure).parser_ggn3z5_k$ = function () {
    return this.cachedParser_1;
  };
  function FormatStructure() {
  }
  function BasicFormatStructure(directive) {
    this.directive_1 = directive;
  }
  protoOf(BasicFormatStructure).get_directive_7ekuhm_k$ = function () {
    return this.directive_1;
  };
  protoOf(BasicFormatStructure).toString = function () {
    return 'BasicFormatStructure(' + toString(this.directive_1) + ')';
  };
  protoOf(BasicFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof BasicFormatStructure) {
      tmp = equals(this.directive_1, other.directive_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(BasicFormatStructure).hashCode = function () {
    return hashCode(this.directive_1);
  };
  protoOf(BasicFormatStructure).parser_ggn3z5_k$ = function () {
    return this.directive_1.parser_ggn3z5_k$();
  };
  protoOf(BasicFormatStructure).formatter_tykoui_k$ = function () {
    return this.directive_1.formatter_tykoui_k$();
  };
  function ConstantFormatStructure(string) {
    this.string_1 = string;
  }
  protoOf(ConstantFormatStructure).get_string_jnpst6_k$ = function () {
    return this.string_1;
  };
  protoOf(ConstantFormatStructure).toString = function () {
    return 'ConstantFormatStructure(' + this.string_1 + ')';
  };
  protoOf(ConstantFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConstantFormatStructure) {
      tmp = this.string_1 === other.string_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConstantFormatStructure).hashCode = function () {
    return getStringHashCode(this.string_1);
  };
  protoOf(ConstantFormatStructure).parser_ggn3z5_k$ = function () {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.string_1;
    if (charSequenceLength(this_0) === 0) {
      tmp = emptyList();
    } else {
      // Inline function 'kotlin.collections.buildList' call
      // Inline function 'kotlin.collections.buildListInternal' call
      // Inline function 'kotlin.apply' call
      var this_1 = ArrayList_init_$Create$_0();
      // Inline function 'kotlinx.datetime.internal.format.ConstantFormatStructure.parser.<anonymous>' call
      var tmp_0;
      if (isAsciiDigit(charSequenceGet(this.string_1, 0))) {
        var tmp0 = this.string_1;
        var tmp$ret$4;
        $l$block: {
          // Inline function 'kotlin.text.takeWhile' call
          var inductionVariable = 0;
          var last = tmp0.length;
          if (inductionVariable < last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'kotlinx.datetime.internal.format.ConstantFormatStructure.parser.<anonymous>.<anonymous>' call
              var it = charSequenceGet(tmp0, index);
              if (!isAsciiDigit(it)) {
                // Inline function 'kotlin.text.substring' call
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$4 = tmp0.substring(0, index);
                break $l$block;
              }
            }
             while (inductionVariable < last);
          tmp$ret$4 = tmp0;
        }
        this_1.add_utx5q5_k$(new NumberSpanParserOperation(listOf_0(new ConstantNumberConsumer(tmp$ret$4))));
        var tmp2 = this.string_1;
        var tmp$ret$8;
        $l$block_0: {
          // Inline function 'kotlin.text.dropWhile' call
          var inductionVariable_0 = 0;
          var last_0 = charSequenceLength(tmp2) - 1 | 0;
          if (inductionVariable_0 <= last_0)
            do {
              var index_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              // Inline function 'kotlinx.datetime.internal.format.ConstantFormatStructure.parser.<anonymous>.<anonymous>' call
              var it_0 = charSequenceGet(tmp2, index_0);
              if (!isAsciiDigit(it_0)) {
                // Inline function 'kotlin.text.substring' call
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$8 = tmp2.substring(index_0);
                break $l$block_0;
              }
            }
             while (inductionVariable_0 <= last_0);
          tmp$ret$8 = '';
        }
        tmp_0 = tmp$ret$8;
      } else {
        tmp_0 = this.string_1;
      }
      var suffix = tmp_0;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(suffix) > 0) {
        if (isAsciiDigit(charSequenceGet(suffix, suffix.length - 1 | 0))) {
          var tmp$ret$13;
          $l$block_1: {
            // Inline function 'kotlin.text.dropLastWhile' call
            var inductionVariable_1 = get_lastIndex(suffix);
            if (0 <= inductionVariable_1)
              do {
                var index_1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + -1 | 0;
                // Inline function 'kotlinx.datetime.internal.format.ConstantFormatStructure.parser.<anonymous>.<anonymous>' call
                var it_1 = charSequenceGet(suffix, index_1);
                if (!isAsciiDigit(it_1)) {
                  // Inline function 'kotlin.text.substring' call
                  var endIndex = index_1 + 1 | 0;
                  // Inline function 'kotlin.js.asDynamic' call
                  tmp$ret$13 = suffix.substring(0, endIndex);
                  break $l$block_1;
                }
              }
               while (0 <= inductionVariable_1);
            tmp$ret$13 = '';
          }
          this_1.add_utx5q5_k$(new PlainStringParserOperation(tmp$ret$13));
          var tmp$ret$17;
          $l$block_2: {
            // Inline function 'kotlin.text.takeLastWhile' call
            var inductionVariable_2 = get_lastIndex(suffix);
            if (0 <= inductionVariable_2)
              do {
                var index_2 = inductionVariable_2;
                inductionVariable_2 = inductionVariable_2 + -1 | 0;
                // Inline function 'kotlinx.datetime.internal.format.ConstantFormatStructure.parser.<anonymous>.<anonymous>' call
                var it_2 = charSequenceGet(suffix, index_2);
                if (!isAsciiDigit(it_2)) {
                  // Inline function 'kotlin.text.substring' call
                  var startIndex = index_2 + 1 | 0;
                  // Inline function 'kotlin.js.asDynamic' call
                  tmp$ret$17 = suffix.substring(startIndex);
                  break $l$block_2;
                }
              }
               while (0 <= inductionVariable_2);
            tmp$ret$17 = suffix;
          }
          this_1.add_utx5q5_k$(new NumberSpanParserOperation(listOf_0(new ConstantNumberConsumer(tmp$ret$17))));
        } else {
          this_1.add_utx5q5_k$(new PlainStringParserOperation(suffix));
        }
      }
      tmp = this_1.build_nmwvly_k$();
    }
    return new ParserStructure(tmp, emptyList());
  };
  protoOf(ConstantFormatStructure).formatter_tykoui_k$ = function () {
    return new ConstantStringFormatterStructure(this.string_1);
  };
  function _get_fieldSigns__pfistt($this) {
    return $this.fieldSigns_1;
  }
  function formatter$checkIfAllNegative(this$0, value) {
    var seenNonZero = false;
    var tmp0_iterator = this$0.fieldSigns_1.iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var check = tmp0_iterator.next_20eer_k$();
      if (check.get_isNegative_i24zqw_k$().getter_8mvnhr_k$(value) === true)
        seenNonZero = true;
      else if (check.isZero_yccjay_k$(value))
        continue $l$loop;
      else
        return false;
    }
    return seenNonZero;
  }
  function SignedFormatStructure$parser$lambda(this$0) {
    return function (value, isNegative) {
      var tmp0_iterator = this$0.fieldSigns_1.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var field = tmp0_iterator.next_20eer_k$();
        var wasNegative = field.get_isNegative_i24zqw_k$().getter_8mvnhr_k$(value) === true;
        field.get_isNegative_i24zqw_k$().trySetWithoutReassigning_itlg4a_k$(value, !(isNegative === wasNegative));
      }
      return Unit_getInstance();
    };
  }
  function SignedFormatStructure$formatter$checkIfAllNegative$ref(this$0) {
    var l = function (p0) {
      return formatter$checkIfAllNegative(this$0, p0);
    };
    l.callableName = 'checkIfAllNegative';
    return l;
  }
  function SignedFormatStructure(format, withPlusSign) {
    this.format_1 = format;
    this.withPlusSign_1 = withPlusSign;
    var tmp = this;
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0 = basicFormats(this.format_1);
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'kotlinx.datetime.internal.format.SignedFormatStructure.fieldSigns.<anonymous>' call
      var tmp0_safe_receiver = element.get_field_irdnf5_k$().get_sign_woubd2_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
        destination.add_utx5q5_k$(tmp0_safe_receiver);
      }
    }
    tmp.fieldSigns_1 = toSet(destination);
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!this.fieldSigns_1.isEmpty_y1axqb_k$()) {
      // Inline function 'kotlinx.datetime.internal.format.SignedFormatStructure.<anonymous>' call
      var message = 'Signed format must contain at least one field with a sign';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(SignedFormatStructure).get_format_dfdtds_k$ = function () {
    return this.format_1;
  };
  protoOf(SignedFormatStructure).get_withPlusSign_fo0zhi_k$ = function () {
    return this.withPlusSign_1;
  };
  protoOf(SignedFormatStructure).toString = function () {
    return 'SignedFormatStructure(' + toString(this.format_1) + ')';
  };
  protoOf(SignedFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof SignedFormatStructure) {
      tmp_0 = equals(this.format_1, other.format_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.withPlusSign_1 === other.withPlusSign_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SignedFormatStructure).hashCode = function () {
    return imul(31, hashCode(this.format_1)) + getBooleanHashCode(this.withPlusSign_1) | 0;
  };
  protoOf(SignedFormatStructure).parser_ggn3z5_k$ = function () {
    return concat(listOf([new ParserStructure(listOf_0(new SignParser(SignedFormatStructure$parser$lambda(this), this.withPlusSign_1, 'sign for ' + toString(this.fieldSigns_1))), emptyList()), this.format_1.parser_ggn3z5_k$()]));
  };
  protoOf(SignedFormatStructure).formatter_tykoui_k$ = function () {
    var innerFormat = this.format_1.formatter_tykoui_k$();
    return new SignedFormatter(innerFormat, SignedFormatStructure$formatter$checkIfAllNegative$ref(this), this.withPlusSign_1);
  };
  function _get_accessor__agzfks($this) {
    return $this.accessor_1;
  }
  function _get_defaultValue__cxgql7($this) {
    return $this.defaultValue_1;
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  protoOf(Companion_9).fromField_3ctjbq_k$ = function (field) {
    var default_0 = field.get_defaultValue_6cv1mv_k$();
    // Inline function 'kotlin.require' call
    if (!!(default_0 == null)) {
      // Inline function 'kotlinx.datetime.internal.format.Companion.fromField.<anonymous>' call
      var message = "The field '" + field.get_name_woqyms_k$() + "' does not define a default value";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new PropertyWithDefault(field.get_accessor_3q8qa8_k$(), default_0);
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function access$_get_accessor__yxxs4k($this) {
    return $this.accessor_1;
  }
  function access$_get_defaultValue__8tt04b($this) {
    return $this.defaultValue_1;
  }
  function Accessor$getter$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.getter_8mvnhr_k$(p0);
    };
    l.callableName = 'getter';
    return l;
  }
  function _get_fields__njv4he($this) {
    return $this.fields_1;
  }
  function PropertyWithDefault(accessor, defaultValue) {
    Companion_getInstance_10();
    this.accessor_1 = accessor;
    this.defaultValue_1 = defaultValue;
  }
  protoOf(PropertyWithDefault).assignDefault_8zxcab_k$ = function (target) {
    access$_get_accessor__yxxs4k(this).trySetWithoutReassigning_itlg4a_k$(target, access$_get_defaultValue__8tt04b(this));
  };
  protoOf(PropertyWithDefault).isDefaultComparisonPredicate_8hfvxz_k$ = function () {
    var tmp = access$_get_defaultValue__8tt04b(this);
    return new ComparisonPredicate(tmp, Accessor$getter$ref(access$_get_accessor__yxxs4k(this)));
  };
  function OptionalFormatStructure$parser$lambda(this$0) {
    return function (it) {
      var tmp0_iterator = this$0.fields_1.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var field = tmp0_iterator.next_20eer_k$();
        // Inline function 'kotlinx.datetime.internal.format.PropertyWithDefault.assignDefault' call
        access$_get_accessor__yxxs4k(field).trySetWithoutReassigning_itlg4a_k$(it, access$_get_defaultValue__8tt04b(field));
      }
      return Unit_getInstance();
    };
  }
  function Accessor$getter$ref_0($boundThis) {
    var l = function (p0) {
      return $boundThis.getter_8mvnhr_k$(p0);
    };
    l.callableName = 'getter';
    return l;
  }
  function Predicate$test$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.test_kxdenx_k$(p0);
    };
    l.callableName = 'test';
    return l;
  }
  function Truth$test$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.test_o6ugz1_k$(p0);
    };
    l.callableName = 'test';
    return l;
  }
  function OptionalFormatStructure(onZero, format) {
    this.onZero_1 = onZero;
    this.format_1 = format;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = basicFormats(this.format_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlinx.datetime.internal.format.OptionalFormatStructure.fields.<anonymous>' call
      var tmp$ret$0 = item.get_field_irdnf5_k$();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.map' call
    var this_1 = distinct(destination);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s_0 = this_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var item_0 = _iterator__ex2g4s_0.next_20eer_k$();
      // Inline function 'kotlinx.datetime.internal.format.OptionalFormatStructure.fields.<anonymous>' call
      var tmp$ret$3 = Companion_getInstance_10().fromField_3ctjbq_k$(item_0);
      destination_0.add_utx5q5_k$(tmp$ret$3);
    }
    tmp.fields_1 = destination_0;
  }
  protoOf(OptionalFormatStructure).get_onZero_hnt54g_k$ = function () {
    return this.onZero_1;
  };
  protoOf(OptionalFormatStructure).get_format_dfdtds_k$ = function () {
    return this.format_1;
  };
  protoOf(OptionalFormatStructure).toString = function () {
    return 'Optional(' + this.onZero_1 + ', ' + toString(this.format_1) + ')';
  };
  protoOf(OptionalFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof OptionalFormatStructure) {
      tmp_0 = this.onZero_1 === other.onZero_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.format_1, other.format_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(OptionalFormatStructure).hashCode = function () {
    return imul(31, getStringHashCode(this.onZero_1)) + hashCode(this.format_1) | 0;
  };
  protoOf(OptionalFormatStructure).parser_ggn3z5_k$ = function () {
    var tmp = emptyList();
    var tmp_0 = this.format_1.parser_ggn3z5_k$();
    var tmp_1 = (new ConstantFormatStructure(this.onZero_1)).parser_ggn3z5_k$();
    var tmp_2;
    if (this.fields_1.isEmpty_y1axqb_k$()) {
      tmp_2 = emptyList();
    } else {
      tmp_2 = listOf_0(new UnconditionalModification(OptionalFormatStructure$parser$lambda(this)));
    }
    return new ParserStructure(tmp, listOf([tmp_0, concat(listOf([tmp_1, new ParserStructure(tmp_2, emptyList())]))]));
  };
  protoOf(OptionalFormatStructure).formatter_tykoui_k$ = function () {
    var formatter = this.format_1.formatter_tykoui_k$();
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.fields_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlinx.datetime.internal.format.OptionalFormatStructure.formatter.<anonymous>' call
      // Inline function 'kotlinx.datetime.internal.format.PropertyWithDefault.isDefaultComparisonPredicate' call
      var tmp = access$_get_defaultValue__8tt04b(item);
      var tmp$ret$1 = new ComparisonPredicate(tmp, Accessor$getter$ref_0(access$_get_accessor__yxxs4k(item)));
      destination.add_utx5q5_k$(tmp$ret$1);
    }
    var predicate = conjunctionPredicate(destination);
    var tmp_0;
    if (predicate instanceof Truth) {
      tmp_0 = new ConstantStringFormatterStructure(this.onZero_1);
    } else {
      var tmp_1 = to(Predicate$test$ref(predicate), new ConstantStringFormatterStructure(this.onZero_1));
      tmp_0 = new ConditionalFormatter(listOf([tmp_1, to(Truth$test$ref(Truth_getInstance()), formatter)]));
    }
    return tmp_0;
  };
  function AlternativesParsingFormatStructure(mainFormat, formats) {
    this.mainFormat_1 = mainFormat;
    this.formats_1 = formats;
  }
  protoOf(AlternativesParsingFormatStructure).get_mainFormat_iprtrb_k$ = function () {
    return this.mainFormat_1;
  };
  protoOf(AlternativesParsingFormatStructure).get_formats_9xs0wd_k$ = function () {
    return this.formats_1;
  };
  protoOf(AlternativesParsingFormatStructure).toString = function () {
    return 'AlternativesParsing(' + toString(this.formats_1) + ')';
  };
  protoOf(AlternativesParsingFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AlternativesParsingFormatStructure) {
      tmp_0 = equals(this.mainFormat_1, other.mainFormat_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.formats_1, other.formats_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AlternativesParsingFormatStructure).hashCode = function () {
    return imul(31, hashCode(this.mainFormat_1)) + hashCode(this.formats_1) | 0;
  };
  protoOf(AlternativesParsingFormatStructure).parser_ggn3z5_k$ = function () {
    var tmp = emptyList();
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlinx.datetime.internal.format.AlternativesParsingFormatStructure.parser.<anonymous>' call
    this_0.add_utx5q5_k$(this.mainFormat_1.parser_ggn3z5_k$());
    var tmp0_iterator = this.formats_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var format = tmp0_iterator.next_20eer_k$();
      this_0.add_utx5q5_k$(format.parser_ggn3z5_k$());
    }
    var tmp$ret$2 = this_0.build_nmwvly_k$();
    return new ParserStructure(tmp, tmp$ret$2);
  };
  protoOf(AlternativesParsingFormatStructure).formatter_tykoui_k$ = function () {
    return this.mainFormat_1.formatter_tykoui_k$();
  };
  function ConcatenatedFormatStructure(formats) {
    this.formats_1 = formats;
  }
  protoOf(ConcatenatedFormatStructure).get_formats_9xs0wd_k$ = function () {
    return this.formats_1;
  };
  protoOf(ConcatenatedFormatStructure).toString = function () {
    return 'ConcatenatedFormatStructure(' + joinToString(this.formats_1, ', ') + ')';
  };
  protoOf(ConcatenatedFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConcatenatedFormatStructure) {
      tmp = equals(this.formats_1, other.formats_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConcatenatedFormatStructure).hashCode = function () {
    return hashCode(this.formats_1);
  };
  protoOf(ConcatenatedFormatStructure).parser_ggn3z5_k$ = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.formats_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlinx.datetime.internal.format.ConcatenatedFormatStructure.parser.<anonymous>' call
      var tmp$ret$0 = item.parser_ggn3z5_k$();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return concat(destination);
  };
  protoOf(ConcatenatedFormatStructure).formatter_tykoui_k$ = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.formats_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlinx.datetime.internal.format.ConcatenatedFormatStructure.formatter.<anonymous>' call
      var tmp$ret$0 = item.formatter_tykoui_k$();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var formatters = destination;
    var tmp;
    if (formatters.get_size_woubt6_k$() === 1) {
      tmp = single(formatters);
    } else {
      tmp = new ConcatenatedFormatter(formatters);
    }
    return tmp;
  };
  function NonConcatenatedFormatStructure() {
  }
  function basicFormats(format) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlinx.datetime.internal.format.basicFormats.<anonymous>' call
    basicFormats$_anonymous_$rec_hkf0lf(this_0, format);
    return this_0.build_nmwvly_k$();
  }
  function basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format) {
    if (format instanceof BasicFormatStructure) {
      $this_buildList.add_utx5q5_k$(format.directive_1);
    } else {
      if (format instanceof ConcatenatedFormatStructure) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = format.formats_1.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'kotlinx.datetime.internal.format.basicFormats.<anonymous>$rec.<anonymous>' call
          basicFormats$_anonymous_$rec_hkf0lf($this_buildList, element);
        }
      } else {
        if (!(format instanceof ConstantFormatStructure)) {
          if (format instanceof SignedFormatStructure) {
            basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.format_1);
          } else {
            if (format instanceof AlternativesParsingFormatStructure) {
              basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.mainFormat_1);
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_0 = format.formats_1.iterator_jk1svi_k$();
              while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
                var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
                // Inline function 'kotlinx.datetime.internal.format.basicFormats.<anonymous>$rec.<anonymous>' call
                basicFormats$_anonymous_$rec_hkf0lf($this_buildList, element_0);
              }
            } else {
              if (format instanceof OptionalFormatStructure) {
                basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.format_1);
              }
            }
          }
        }
      }
    }
  }
  function Predicate() {
  }
  function conjunctionPredicate(predicates) {
    return predicates.isEmpty_y1axqb_k$() ? Truth_getInstance() : predicates.get_size_woubt6_k$() === 1 ? single(predicates) : new ConjunctionPredicate(predicates);
  }
  function _get_expectedValue__2yfcd4($this) {
    return $this.expectedValue_1;
  }
  function _get_getter__ygn3c0($this) {
    return $this.getter_1;
  }
  function ComparisonPredicate(expectedValue, getter) {
    this.expectedValue_1 = expectedValue;
    this.getter_1 = getter;
  }
  protoOf(ComparisonPredicate).test_kxdenx_k$ = function (value) {
    return equals(this.getter_1(value), this.expectedValue_1);
  };
  function Truth() {
    Truth_instance = this;
  }
  protoOf(Truth).test_o6ugz1_k$ = function (value) {
    return true;
  };
  protoOf(Truth).test_kxdenx_k$ = function (value) {
    return this.test_o6ugz1_k$((value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  var Truth_instance;
  function Truth_getInstance() {
    if (Truth_instance == null)
      new Truth();
    return Truth_instance;
  }
  function _get_predicates__4drt75($this) {
    return $this.predicates_1;
  }
  function ConjunctionPredicate(predicates) {
    this.predicates_1 = predicates;
  }
  protoOf(ConjunctionPredicate).test_kxdenx_k$ = function (value) {
    var tmp0 = this.predicates_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlinx.datetime.internal.format.ConjunctionPredicate.test.<anonymous>' call
        if (!element.test_kxdenx_k$(value)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function FormatterStructure() {
  }
  function _get_formatter__g99gl5($this) {
    return $this.formatter_1;
  }
  function _get_padding__n2y8rk_9($this) {
    return $this.padding_1;
  }
  function SpacePaddedFormatter(formatter, padding) {
    this.formatter_1 = formatter;
    this.padding_1 = padding;
  }
  protoOf(SpacePaddedFormatter).format_bqb1zl_k$ = function (obj, builder, minusNotRequired) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.datetime.internal.format.formatter.SpacePaddedFormatter.format.<anonymous>' call
    var it = StringBuilder_init_$Create$();
    this.formatter_1.format_bqb1zl_k$(obj, it, minusNotRequired);
    var string = it.toString();
    // Inline function 'kotlin.repeat' call
    var times = this.padding_1 - string.length | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.datetime.internal.format.formatter.SpacePaddedFormatter.format.<anonymous>' call
        builder.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
      }
       while (inductionVariable < times);
    builder.append_jgojdo_k$(string);
  };
  function _get_formatter__g99gl5_0($this) {
    return $this.formatter_1;
  }
  function _get_allSubFormatsNegative__1l9a69($this) {
    return $this.allSubFormatsNegative_1;
  }
  function _get_alwaysOutputSign__djuftq($this) {
    return $this.alwaysOutputSign_1;
  }
  function SignedFormatter(formatter, allSubFormatsNegative, alwaysOutputSign) {
    this.formatter_1 = formatter;
    this.allSubFormatsNegative_1 = allSubFormatsNegative;
    this.alwaysOutputSign_1 = alwaysOutputSign;
  }
  protoOf(SignedFormatter).format_bqb1zl_k$ = function (obj, builder, minusNotRequired) {
    var tmp;
    if (!minusNotRequired && this.allSubFormatsNegative_1(obj)) {
      tmp = _Char___init__impl__6a9atx(45);
    } else if (this.alwaysOutputSign_1) {
      tmp = _Char___init__impl__6a9atx(43);
    } else {
      tmp = null;
    }
    var sign = tmp;
    var tmp_0 = sign;
    if ((tmp_0 == null ? null : new Char(tmp_0)) == null)
      null;
    else {
      var tmp_1 = sign;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.internal.format.formatter.SignedFormatter.format.<anonymous>' call
      var it = (tmp_1 == null ? null : new Char(tmp_1)).value_1;
      builder.append_am5a4z_k$(it);
    }
    var tmp_2;
    if (minusNotRequired) {
      tmp_2 = true;
    } else {
      var tmp_3 = sign;
      tmp_2 = equals(tmp_3 == null ? null : new Char(tmp_3), new Char(_Char___init__impl__6a9atx(45)));
    }
    this.formatter_1.format_bqb1zl_k$(obj, builder, tmp_2);
  };
  function _get_formatters__6rcv26($this) {
    return $this.formatters_1;
  }
  function ConditionalFormatter(formatters) {
    this.formatters_1 = formatters;
  }
  protoOf(ConditionalFormatter).format_bqb1zl_k$ = function (obj, builder, minusNotRequired) {
    var tmp0_iterator = this.formatters_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
      var condition = tmp1_loop_parameter.component1_7eebsc_k$();
      var formatter = tmp1_loop_parameter.component2_7eebsb_k$();
      if (condition(obj)) {
        formatter.format_bqb1zl_k$(obj, builder, minusNotRequired);
        return Unit_getInstance();
      }
    }
  };
  function _get_formatters__6rcv26_0($this) {
    return $this.formatters_1;
  }
  function ConcatenatedFormatter(formatters) {
    this.formatters_1 = formatters;
  }
  protoOf(ConcatenatedFormatter).format_bqb1zl_k$ = function (obj, builder, minusNotRequired) {
    var tmp0_iterator = this.formatters_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var formatter = tmp0_iterator.next_20eer_k$();
      formatter.format_bqb1zl_k$(obj, builder, minusNotRequired);
    }
  };
  function _get_number__4pkqn6($this) {
    return $this.number_1;
  }
  function _get_zeroPadding__4dvl9k($this) {
    return $this.zeroPadding_1;
  }
  function _get_outputPlusOnExceededWidth__7vsxp4_0($this) {
    return $this.outputPlusOnExceededWidth_1;
  }
  function SignedIntFormatterStructure(number, zeroPadding, outputPlusOnExceededWidth) {
    this.number_1 = number;
    this.zeroPadding_1 = zeroPadding;
    this.outputPlusOnExceededWidth_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    if (!(this.zeroPadding_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.SignedIntFormatterStructure.<anonymous>' call
      var message = 'The minimum number of digits (' + this.zeroPadding_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.zeroPadding_1 <= 9)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.SignedIntFormatterStructure.<anonymous>' call
      var message_0 = 'The minimum number of digits (' + this.zeroPadding_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(SignedIntFormatterStructure).format_bqb1zl_k$ = function (obj, builder, minusNotRequired) {
    var innerBuilder = StringBuilder_init_$Create$();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.datetime.internal.format.formatter.SignedIntFormatterStructure.format.<anonymous>' call
    var it = this.number_1(obj);
    var number = minusNotRequired && it < 0 ? -it | 0 : it;
    if (!(this.outputPlusOnExceededWidth_1 == null) && number >= get_POWERS_OF_TEN()[this.outputPlusOnExceededWidth_1]) {
      innerBuilder.append_am5a4z_k$(_Char___init__impl__6a9atx(43));
    }
    // Inline function 'kotlin.math.absoluteValue' call
    if (abs(number) < get_POWERS_OF_TEN()[this.zeroPadding_1 - 1 | 0]) {
      if (number >= 0) {
        innerBuilder.append_uppzia_k$(number + get_POWERS_OF_TEN()[this.zeroPadding_1] | 0).deleteAt_mq1vvq_k$(0);
      } else {
        innerBuilder.append_uppzia_k$(number - get_POWERS_OF_TEN()[this.zeroPadding_1] | 0).deleteAt_mq1vvq_k$(1);
      }
    } else {
      innerBuilder.append_uppzia_k$(number);
    }
    builder.append_jgojdo_k$(innerBuilder);
  };
  function _get_number__4pkqn6_0($this) {
    return $this.number_1;
  }
  function _get_digits__5rvfvf_0($this) {
    return $this.digits_1;
  }
  function _get_base__d46q3e_0($this) {
    return $this.base_1;
  }
  function ReducedIntFormatterStructure(number, digits, base) {
    this.number_1 = number;
    this.digits_1 = digits;
    this.base_1 = base;
  }
  protoOf(ReducedIntFormatterStructure).format_bqb1zl_k$ = function (obj, builder, minusNotRequired) {
    var number = this.number_1(obj);
    var containsUpper = get_POWERS_OF_TEN()[this.digits_1];
    var containsArg = number - this.base_1 | 0;
    if (0 <= containsArg ? containsArg < containsUpper : false) {
      var numberStr = (number % get_POWERS_OF_TEN()[this.digits_1] | 0).toString();
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = this.digits_1 - numberStr.length | 0;
      var tmp$ret$0 = Math.max(0, b);
      var zeroPaddingStr = repeat('0', tmp$ret$0);
      append(builder, [zeroPaddingStr, numberStr]);
    } else {
      if (number >= 0) {
        builder.append_jgojdo_k$('+');
      }
      builder.append_jgojdo_k$(number.toString());
    }
  };
  function _get_number__4pkqn6_1($this) {
    return $this.number_1;
  }
  function _get_zeroPadding__4dvl9k_0($this) {
    return $this.zeroPadding_1;
  }
  function UnsignedIntFormatterStructure(number, zeroPadding) {
    this.number_1 = number;
    this.zeroPadding_1 = zeroPadding;
    // Inline function 'kotlin.require' call
    if (!(this.zeroPadding_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.UnsignedIntFormatterStructure.<anonymous>' call
      var message = 'The minimum number of digits (' + this.zeroPadding_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.zeroPadding_1 <= 9)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.UnsignedIntFormatterStructure.<anonymous>' call
      var message_0 = 'The minimum number of digits (' + this.zeroPadding_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(UnsignedIntFormatterStructure).format_bqb1zl_k$ = function (obj, builder, minusNotRequired) {
    var num = this.number_1(obj);
    var numberStr = num.toString();
    // Inline function 'kotlin.repeat' call
    var times = this.zeroPadding_1 - numberStr.length | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.datetime.internal.format.formatter.UnsignedIntFormatterStructure.format.<anonymous>' call
        builder.append_am5a4z_k$(_Char___init__impl__6a9atx(48));
      }
       while (inductionVariable < times);
    builder.append_jgojdo_k$(numberStr);
  };
  function _get_string__6oa3oa($this) {
    return $this.string_1;
  }
  function StringFormatterStructure(string) {
    this.string_1 = string;
  }
  protoOf(StringFormatterStructure).format_bqb1zl_k$ = function (obj, builder, minusNotRequired) {
    builder.append_jgojdo_k$(this.string_1(obj));
  };
  function _get_number__4pkqn6_2($this) {
    return $this.number_1;
  }
  function _get_minDigits__4wf98n_3($this) {
    return $this.minDigits_1;
  }
  function _get_maxDigits__p8x9uv_3($this) {
    return $this.maxDigits_1;
  }
  function _get_zerosToAdd__m3gu6o_0($this) {
    return $this.zerosToAdd_1;
  }
  function DecimalFractionFormatterStructure(number, minDigits, maxDigits, zerosToAdd) {
    this.number_1 = number;
    this.minDigits_1 = minDigits;
    this.maxDigits_1 = maxDigits;
    this.zerosToAdd_1 = zerosToAdd;
    var containsArg = this.minDigits_1;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg ? containsArg <= 9 : false)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.DecimalFractionFormatterStructure.<anonymous>' call
      var message = 'The minimum number of digits (' + this.minDigits_1 + ') is not in range 1..9';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsLower = this.minDigits_1;
    var containsArg_0 = this.maxDigits_1;
    // Inline function 'kotlin.require' call
    if (!(containsLower <= containsArg_0 ? containsArg_0 <= 9 : false)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.DecimalFractionFormatterStructure.<anonymous>' call
      var message_0 = 'The maximum number of digits (' + this.maxDigits_1 + ') is not in range ' + this.minDigits_1 + '..9';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(DecimalFractionFormatterStructure).format_bqb1zl_k$ = function (obj, builder, minusNotRequired) {
    var number = this.number_1(obj);
    var numberWithRequiredPrecision = number.fractionalPartWithNDigits_sivm3u_k$(this.maxDigits_1);
    var zerosToStrip = 0;
    while (this.maxDigits_1 > (this.minDigits_1 + zerosToStrip | 0) && (numberWithRequiredPrecision % get_POWERS_OF_TEN()[zerosToStrip + 1 | 0] | 0) === 0) {
      zerosToStrip = zerosToStrip + 1 | 0;
    }
    var zerosToAddBack = this.zerosToAdd_1.get_c1px32_k$((this.maxDigits_1 - zerosToStrip | 0) - 1 | 0);
    if (zerosToStrip >= zerosToAddBack)
      zerosToStrip = zerosToStrip - zerosToAddBack | 0;
    var digitsToOutput = this.maxDigits_1 - zerosToStrip | 0;
    var numberToOutput = numberWithRequiredPrecision / get_POWERS_OF_TEN()[zerosToStrip] | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = (numberToOutput + get_POWERS_OF_TEN()[digitsToOutput] | 0).toString().substring(1);
    builder.append_jgojdo_k$(tmp$ret$1);
  };
  function _get_string__6oa3oa_0($this) {
    return $this.string_1;
  }
  function ConstantStringFormatterStructure(string) {
    this.string_1 = string;
  }
  protoOf(ConstantStringFormatterStructure).format_bqb1zl_k$ = function (obj, builder, minusNotRequired) {
    builder.append_jgojdo_k$(this.string_1);
  };
  function _get_minLength__vbub2f($this) {
    return $this.minLength_1;
  }
  function _get_maxLength__16hryx($this) {
    return $this.maxLength_1;
  }
  function _get_setter__e3slw($this) {
    return $this.setter_1;
  }
  function FractionPartConsumer(minLength, maxLength, setter, name) {
    NumberConsumer.call(this, minLength === maxLength ? minLength : null, name);
    this.minLength_1 = minLength;
    this.maxLength_1 = maxLength;
    this.setter_1 = setter;
    var containsArg = this.minLength_1;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg ? containsArg <= 9 : false)) {
      // Inline function 'kotlinx.datetime.internal.format.parser.FractionPartConsumer.<anonymous>' call
      var message = 'Invalid minimum length ' + this.minLength_1 + ' for field ' + this.whatThisExpects_1 + ': expected 1..9';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsLower = this.minLength_1;
    var containsArg_0 = this.maxLength_1;
    // Inline function 'kotlin.require' call
    if (!(containsLower <= containsArg_0 ? containsArg_0 <= 9 : false)) {
      // Inline function 'kotlinx.datetime.internal.format.parser.FractionPartConsumer.<anonymous>' call
      var message_0 = 'Invalid maximum length ' + this.maxLength_1 + ' for field ' + this.whatThisExpects_1 + ': expected ' + this.minLength_1 + '..9';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(FractionPartConsumer).consume_o77i9d_k$ = function (storage, input, start, end) {
    return (end - start | 0) < this.minLength_1 ? new TooFewDigits(this.minLength_1) : (end - start | 0) > this.maxLength_1 ? new TooManyDigits(this.maxLength_1) : setWithoutReassigning(this.setter_1, storage, new DecimalFraction(parseAsciiInt(input, start, end), end - start | 0));
  };
  function _get_expected__qj1cer($this) {
    return $this.expected_1;
  }
  function ConstantNumberConsumer(expected) {
    NumberConsumer.call(this, expected.length, 'the predefined string ' + expected);
    this.expected_1 = expected;
  }
  protoOf(ConstantNumberConsumer).consume_o77i9d_k$ = function (storage, input, start, end) {
    var tmp;
    // Inline function 'kotlin.text.substring' call
    if (toString(charSequenceSubSequence(input, start, end)) === this.expected_1) {
      tmp = null;
    } else {
      tmp = new WrongConstant(this.expected_1);
    }
    return tmp;
  };
  function NumberConsumer(length, whatThisExpects) {
    this.length_1 = length;
    this.whatThisExpects_1 = whatThisExpects;
  }
  protoOf(NumberConsumer).get_length_g42xv3_k$ = function () {
    return this.length_1;
  };
  protoOf(NumberConsumer).get_whatThisExpects_s3n635_k$ = function () {
    return this.whatThisExpects_1;
  };
  function ExpectedInt() {
    ExpectedInt_instance = this;
  }
  protoOf(ExpectedInt).errorMessage_jwdivz_k$ = function () {
    return 'expected an Int value';
  };
  var ExpectedInt_instance;
  function ExpectedInt_getInstance() {
    if (ExpectedInt_instance == null)
      new ExpectedInt();
    return ExpectedInt_instance;
  }
  function TooManyDigits(maxDigits) {
    this.maxDigits_1 = maxDigits;
  }
  protoOf(TooManyDigits).get_maxDigits_8axv7j_k$ = function () {
    return this.maxDigits_1;
  };
  protoOf(TooManyDigits).errorMessage_jwdivz_k$ = function () {
    return 'expected at most ' + this.maxDigits_1 + ' digits';
  };
  function TooFewDigits(minDigits) {
    this.minDigits_1 = minDigits;
  }
  protoOf(TooFewDigits).get_minDigits_4gz12n_k$ = function () {
    return this.minDigits_1;
  };
  protoOf(TooFewDigits).errorMessage_jwdivz_k$ = function () {
    return 'expected at least ' + this.minDigits_1 + ' digits';
  };
  function WrongConstant(expected) {
    this.expected_1 = expected;
  }
  protoOf(WrongConstant).get_expected_77p56p_k$ = function () {
    return this.expected_1;
  };
  protoOf(WrongConstant).errorMessage_jwdivz_k$ = function () {
    return "expected '" + this.expected_1 + "'";
  };
  function Conflicting(conflicting) {
    this.conflicting_1 = conflicting;
  }
  protoOf(Conflicting).get_conflicting_bt04nt_k$ = function () {
    return this.conflicting_1;
  };
  protoOf(Conflicting).errorMessage_jwdivz_k$ = function () {
    return "attempted to overwrite the existing value '" + toString(this.conflicting_1) + "'";
  };
  function NumberConsumptionError() {
  }
  function setWithoutReassigning(_this__u8e3s4, receiver, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.trySetWithoutReassigning_itlg4a_k$(receiver, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var conflictingValue = tmp;
    return new Conflicting(conflictingValue);
  }
  function parseAsciiInt(_this__u8e3s4, start, end) {
    var result = 0;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = charSequenceGet(_this__u8e3s4, i);
        result = imul(result, 10) + asciiDigitToInt(digit) | 0;
      }
       while (inductionVariable < end);
    return result;
  }
  function _get_minLength__vbub2f_0($this) {
    return $this.minLength_1;
  }
  function _get_maxLength__16hryx_0($this) {
    return $this.maxLength_1;
  }
  function _get_setter__e3slw_0($this) {
    return $this.setter_1;
  }
  function _get_multiplyByMinus1__aiyltd($this) {
    return $this.multiplyByMinus1__1;
  }
  function UnsignedIntConsumer(minLength, maxLength, setter, name, multiplyByMinus1) {
    multiplyByMinus1 = multiplyByMinus1 === VOID ? false : multiplyByMinus1;
    NumberConsumer.call(this, minLength == maxLength ? minLength : null, name);
    this.minLength_1 = minLength;
    this.maxLength_1 = maxLength;
    this.setter_1 = setter;
    this.multiplyByMinus1__1 = multiplyByMinus1;
    // Inline function 'kotlin.require' call
    if (!(this.get_length_g42xv3_k$() == null || numberRangeToNumber(1, 9).contains_7q95ev_k$(this.get_length_g42xv3_k$()))) {
      // Inline function 'kotlinx.datetime.internal.format.parser.UnsignedIntConsumer.<anonymous>' call
      var message = 'Invalid length for field ' + this.whatThisExpects_1 + ': ' + this.get_length_g42xv3_k$();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(UnsignedIntConsumer).consume_o77i9d_k$ = function (storage, input, start, end) {
    var tmp;
    if (!(this.maxLength_1 == null) && (end - start | 0) > this.maxLength_1) {
      tmp = new TooManyDigits(this.maxLength_1);
    } else if (!(this.minLength_1 == null) && (end - start | 0) < this.minLength_1) {
      tmp = new TooFewDigits(this.minLength_1);
    } else {
      var result = parseAsciiIntOrNull(input, start, end);
      tmp = result == null ? ExpectedInt_getInstance() : setWithoutReassigning(this.setter_1, storage, this.multiplyByMinus1__1 ? -result | 0 : result);
    }
    return tmp;
  };
  function _get_setter__e3slw_1($this) {
    return $this.setter_1;
  }
  function _get_modulo__cxp5ez($this) {
    return $this.modulo_1;
  }
  function _get_baseMod__6opps0($this) {
    return $this.baseMod_1;
  }
  function _get_baseFloor__tllk3a($this) {
    return $this.baseFloor_1;
  }
  function ReducedIntConsumer(length, setter, name, base) {
    NumberConsumer.call(this, length, name);
    this.length_2 = length;
    this.setter_1 = setter;
    this.base_1 = base;
    this.modulo_1 = get_POWERS_OF_TEN()[this.length_2];
    this.baseMod_1 = this.base_1 % this.modulo_1 | 0;
    this.baseFloor_1 = this.base_1 - this.baseMod_1 | 0;
    var containsArg = this.length_2;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg ? containsArg <= 9 : false)) {
      // Inline function 'kotlinx.datetime.internal.format.parser.ReducedIntConsumer.<anonymous>' call
      var message = 'Invalid length for field ' + this.whatThisExpects_1 + ': ' + this.length_2;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(ReducedIntConsumer).get_length_g42xv3_k$ = function () {
    return this.length_2;
  };
  protoOf(ReducedIntConsumer).get_base_wojaxm_k$ = function () {
    return this.base_1;
  };
  protoOf(ReducedIntConsumer).consume_o77i9d_k$ = function (storage, input, start, end) {
    var result = parseAsciiInt(input, start, end);
    var tmp;
    if (result >= this.baseMod_1) {
      tmp = this.baseFloor_1 + result | 0;
    } else {
      tmp = (this.baseFloor_1 + this.modulo_1 | 0) + result | 0;
    }
    return setWithoutReassigning(this.setter_1, storage, tmp);
  };
  function parseAsciiIntOrNull(_this__u8e3s4, start, end) {
    var result = 0;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = charSequenceGet(_this__u8e3s4, i);
        result = imul(result, 10) + asciiDigitToInt(digit) | 0;
        if (result < 0)
          return null;
      }
       while (inductionVariable < end);
    return result;
  }
  function ParseError(position, message) {
    this.position_1 = position;
    this.message_1 = message;
  }
  protoOf(ParseError).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(ParseError).get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  function _ParseResult___init__impl__gvz3cn(value) {
    return value;
  }
  function _ParseResult___get_value__impl__86mnxf($this) {
    return $this;
  }
  function Companion_10() {
    Companion_instance_10 = this;
  }
  protoOf(Companion_10).Ok_6vkbj8_k$ = function (indexOfNextUnparsed) {
    return _ParseResult___init__impl__gvz3cn(indexOfNextUnparsed);
  };
  protoOf(Companion_10).Error_ca056s_k$ = function (position, message) {
    return _ParseResult___init__impl__gvz3cn(new ParseError(position, message));
  };
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function ParseResult__match_impl_30t8rc($this, onSuccess, onFailure) {
    var tmp0_subject = _ParseResult___get_value__impl__86mnxf($this);
    var tmp;
    if (typeof tmp0_subject === 'number') {
      tmp = onSuccess(_ParseResult___get_value__impl__86mnxf($this));
    } else {
      if (tmp0_subject instanceof ParseError) {
        tmp = onFailure(_ParseResult___get_value__impl__86mnxf($this));
      } else {
        var message = 'Unexpected parse result: ' + toString(_ParseResult___get_value__impl__86mnxf($this));
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp;
  }
  function ParseResult__toString_impl_foa9an($this) {
    return 'ParseResult(value=' + toString($this) + ')';
  }
  function ParseResult__hashCode_impl_xlnvvm($this) {
    return hashCode($this);
  }
  function ParseResult__equals_impl_1a2goy($this, other) {
    if (!(other instanceof ParseResult))
      return false;
    var tmp0_other_with_cast = other instanceof ParseResult ? other.value_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ParseResult(value) {
    Companion_getInstance_11();
    this.value_1 = value;
  }
  protoOf(ParseResult).toString = function () {
    return ParseResult__toString_impl_foa9an(this.value_1);
  };
  protoOf(ParseResult).hashCode = function () {
    return ParseResult__hashCode_impl_xlnvvm(this.value_1);
  };
  protoOf(ParseResult).equals = function (other) {
    return ParseResult__equals_impl_1a2goy(this.value_1, other);
  };
  function Copyable() {
  }
  function _Parser___init__impl__gdyfby(commands) {
    return commands;
  }
  function _get_commands__a20n1($this) {
    return $this;
  }
  function parse($this, input, startIndex, initialContainer, allowDanglingInput, onError, onSuccess) {
    var parseOptions = mutableListOf([new ParserState(initialContainer, _get_commands__a20n1($this), startIndex)]);
    iterate_over_alternatives: while (true) {
      var tmp0_elvis_lhs = removeLastOrNull(parseOptions);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break iterate_over_alternatives;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var state = tmp;
      var output = state.output_1.copy_1tks5_k$();
      var inputPosition = state.inputPosition_1;
      var parserStructure = state.parserStructure_1;
      // Inline function 'kotlin.run' call
      $l$block: {
        // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse.<anonymous>' call
        var inductionVariable = 0;
        var last = parserStructure.operations_1.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var ix = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlinx.datetime.internal.format.parser.ParseResult.match' call
            var this_0 = parserStructure.operations_1.get_c1px32_k$(ix).consume_ew3o91_k$(output, input, inputPosition);
            var tmp0_subject = _ParseResult___get_value__impl__86mnxf(this_0);
            if (typeof tmp0_subject === 'number') {
              // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse.<anonymous>.<anonymous>' call
              inputPosition = _ParseResult___get_value__impl__86mnxf(this_0);
            } else {
              if (tmp0_subject instanceof ParseError) {
                // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse.<anonymous>.<anonymous>' call
                onError(_ParseResult___get_value__impl__86mnxf(this_0));
                break $l$block;
              } else {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected parse result: ' + toString(_ParseResult___get_value__impl__86mnxf(this_0));
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
           while (inductionVariable <= last);
        if (parserStructure.followedBy_1.isEmpty_y1axqb_k$()) {
          if (allowDanglingInput || inputPosition === charSequenceLength(input)) {
            onSuccess(inputPosition, output);
          } else {
            var tmp_0 = inputPosition;
            onError(new ParseError(tmp_0, Parser$parse$lambda));
          }
        } else {
          var inductionVariable_0 = parserStructure.followedBy_1.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var ix_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              parseOptions.add_utx5q5_k$(new ParserState(output, parserStructure.followedBy_1.get_c1px32_k$(ix_0), inputPosition));
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
  }
  function Parser__match_impl_nzt83d($this, input, initialContainer, startIndex) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var errors = ArrayList_init_$Create$_0();
    // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse' call
    var parseOptions = mutableListOf([new ParserState(initialContainer, _get_commands__a20n1($this), startIndex)]);
    iterate_over_alternatives: while (true) {
      var tmp0_elvis_lhs = removeLastOrNull(parseOptions);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break iterate_over_alternatives;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var state = tmp;
      var output = state.output_1.copy_1tks5_k$();
      var inputPosition = state.inputPosition_1;
      var parserStructure = state.parserStructure_1;
      // Inline function 'kotlin.run' call
      $l$block: {
        // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse.<anonymous>' call
        var inductionVariable = 0;
        var last = parserStructure.operations_1.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var ix = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlinx.datetime.internal.format.parser.ParseResult.match' call
            var this_0 = parserStructure.operations_1.get_c1px32_k$(ix).consume_ew3o91_k$(output, input, inputPosition);
            var tmp0_subject = _ParseResult___get_value__impl__86mnxf(this_0);
            if (typeof tmp0_subject === 'number') {
              // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse.<anonymous>.<anonymous>' call
              inputPosition = _ParseResult___get_value__impl__86mnxf(this_0);
            } else {
              if (tmp0_subject instanceof ParseError) {
                // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse.<anonymous>.<anonymous>' call
                // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
                var it = _ParseResult___get_value__impl__86mnxf(this_0);
                errors.add_utx5q5_k$(it);
                break $l$block;
              } else {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected parse result: ' + toString(_ParseResult___get_value__impl__86mnxf(this_0));
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
           while (inductionVariable <= last);
        if (parserStructure.followedBy_1.isEmpty_y1axqb_k$()) {
          if (false || inputPosition === charSequenceLength(input)) {
            // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
            return output;
          } else {
            var tmp_0 = inputPosition;
            // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
            var it_0 = new ParseError(tmp_0, Parser$match$lambda);
            errors.add_utx5q5_k$(it_0);
          }
        } else {
          var inductionVariable_0 = parserStructure.followedBy_1.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var ix_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              parseOptions.add_utx5q5_k$(new ParserState(output, parserStructure.followedBy_1.get_c1px32_k$(ix_0), inputPosition));
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    // Inline function 'kotlin.collections.sortByDescending' call
    if (errors.get_size_woubt6_k$() > 1) {
      // Inline function 'kotlin.comparisons.compareByDescending' call
      var tmp_1 = Parser$match$lambda_0;
      var tmp$ret$4 = new sam$kotlin_Comparator$0(tmp_1);
      sortWith(errors, tmp$ret$4);
    }
    throw new ParseException(errors);
  }
  function Parser__match$default_impl_x2xlti($this, input, initialContainer, startIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    var tmp;
    if ($super === VOID) {
      tmp = Parser__match_impl_nzt83d($this, input, initialContainer, startIndex);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Parser(tmp_0)).match_pog3ge_k$.call(new Parser($this), input, initialContainer, startIndex);
    }
    return tmp;
  }
  function Parser__matchOrNull_impl_yx0kgz($this, input, initialContainer, startIndex) {
    // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse' call
    var parseOptions = mutableListOf([new ParserState(initialContainer, _get_commands__a20n1($this), startIndex)]);
    iterate_over_alternatives: while (true) {
      var tmp0_elvis_lhs = removeLastOrNull(parseOptions);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break iterate_over_alternatives;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var state = tmp;
      var output = state.output_1.copy_1tks5_k$();
      var inputPosition = state.inputPosition_1;
      var parserStructure = state.parserStructure_1;
      // Inline function 'kotlin.run' call
      $l$block: {
        // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse.<anonymous>' call
        var inductionVariable = 0;
        var last = parserStructure.operations_1.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var ix = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlinx.datetime.internal.format.parser.ParseResult.match' call
            var this_0 = parserStructure.operations_1.get_c1px32_k$(ix).consume_ew3o91_k$(output, input, inputPosition);
            var tmp0_subject = _ParseResult___get_value__impl__86mnxf(this_0);
            if (typeof tmp0_subject === 'number') {
              // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse.<anonymous>.<anonymous>' call
              inputPosition = _ParseResult___get_value__impl__86mnxf(this_0);
            } else {
              if (tmp0_subject instanceof ParseError) {
                // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse.<anonymous>.<anonymous>' call
                // Inline function 'kotlinx.datetime.internal.format.parser.Parser.matchOrNull.<anonymous>' call
                _ParseResult___get_value__impl__86mnxf(this_0);
                break $l$block;
              } else {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected parse result: ' + toString(_ParseResult___get_value__impl__86mnxf(this_0));
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
           while (inductionVariable <= last);
        if (parserStructure.followedBy_1.isEmpty_y1axqb_k$()) {
          if (false || inputPosition === charSequenceLength(input)) {
            // Inline function 'kotlinx.datetime.internal.format.parser.Parser.matchOrNull.<anonymous>' call
            return output;
          } else {
            var tmp_0 = inputPosition;
            // Inline function 'kotlinx.datetime.internal.format.parser.Parser.matchOrNull.<anonymous>' call
            new ParseError(tmp_0, Parser$matchOrNull$lambda);
          }
        } else {
          var inductionVariable_0 = parserStructure.followedBy_1.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var ix_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              parseOptions.add_utx5q5_k$(new ParserState(output, parserStructure.followedBy_1.get_c1px32_k$(ix_0), inputPosition));
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    return null;
  }
  function Parser__matchOrNull$default_impl_e6vq3k($this, input, initialContainer, startIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    var tmp;
    if ($super === VOID) {
      tmp = Parser__matchOrNull_impl_yx0kgz($this, input, initialContainer, startIndex);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Parser(tmp_0)).matchOrNull_1t7l9k_k$.call(new Parser($this), input, initialContainer, startIndex);
    }
    return tmp;
  }
  function ParserState(output, parserStructure, inputPosition) {
    this.output_1 = output;
    this.parserStructure_1 = parserStructure;
    this.inputPosition_1 = inputPosition;
  }
  protoOf(ParserState).get_output_hs4j62_k$ = function () {
    return this.output_1;
  };
  protoOf(ParserState).get_parserStructure_anduzv_k$ = function () {
    return this.parserStructure_1;
  };
  protoOf(ParserState).get_inputPosition_jmowru_k$ = function () {
    return this.inputPosition_1;
  };
  function Parser__toString_impl_x33iea($this) {
    return 'Parser(commands=' + $this.toString() + ')';
  }
  function Parser__hashCode_impl_bbxllf($this) {
    return hashCode($this);
  }
  function Parser__equals_impl_djxokv($this, other) {
    if (!(other instanceof Parser))
      return false;
    var tmp0_other_with_cast = other instanceof Parser ? other.commands_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
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
  function Parser$parse$lambda() {
    return 'There is more input to consume';
  }
  function Parser$match$lambda() {
    return 'There is more input to consume';
  }
  function Parser$match$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
    var tmp = b.get_position_jfponi_k$();
    // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
    var tmp$ret$1 = a.get_position_jfponi_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function Parser$matchOrNull$lambda() {
    return 'There is more input to consume';
  }
  function Parser(commands) {
    this.commands_1 = commands;
  }
  protoOf(Parser).toString = function () {
    return Parser__toString_impl_x33iea(this.commands_1);
  };
  protoOf(Parser).hashCode = function () {
    return Parser__hashCode_impl_bbxllf(this.commands_1);
  };
  protoOf(Parser).equals = function (other) {
    return Parser__equals_impl_djxokv(this.commands_1, other);
  };
  function ParserStructure(operations, followedBy) {
    this.operations_1 = operations;
    this.followedBy_1 = followedBy;
  }
  protoOf(ParserStructure).get_operations_k3re6j_k$ = function () {
    return this.operations_1;
  };
  protoOf(ParserStructure).get_followedBy_hcb40g_k$ = function () {
    return this.followedBy_1;
  };
  protoOf(ParserStructure).toString = function () {
    return joinToString(this.operations_1, ', ') + '(' + joinToString(this.followedBy_1, ';') + ')';
  };
  function ParseException(errors) {
    Exception_init_$Init$(formatError(errors), this);
    captureStack(this, ParseException);
  }
  function concat(_this__u8e3s4) {
    // Inline function 'kotlin.collections.foldRight' call
    var accumulator = new ParserStructure(emptyList(), emptyList());
    if (!_this__u8e3s4.isEmpty_y1axqb_k$()) {
      var iterator = _this__u8e3s4.listIterator_70e65o_k$(_this__u8e3s4.get_size_woubt6_k$());
      while (iterator.hasPrevious_qh0629_k$()) {
        var tmp2 = iterator.previous_l2dfd5_k$();
        // Inline function 'kotlinx.datetime.internal.format.parser.concat.<anonymous>' call
        var acc = accumulator;
        accumulator = concat$append(tmp2, acc);
      }
    }
    var naiveParser = accumulator;
    return concat$simplify(naiveParser, emptyList());
  }
  function formatError(errors) {
    if (errors.get_size_woubt6_k$() === 1) {
      return 'Position ' + errors.get_c1px32_k$(0).get_position_jfponi_k$() + ': ' + errors.get_c1px32_k$(0).get_message_h23axq_k$()();
    }
    var averageMessageLength = 33;
    var tmp0_buffer = StringBuilder_init_$Create$_0(imul(averageMessageLength, errors.get_size_woubt6_k$()));
    return joinTo(errors, tmp0_buffer, ', ', 'Errors: ', VOID, VOID, VOID, formatError$lambda).toString();
  }
  function concat$append(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4.followedBy_1.isEmpty_y1axqb_k$()) {
      tmp = new ParserStructure(plus_0(_this__u8e3s4.operations_1, other.operations_1), other.followedBy_1);
    } else {
      // Inline function 'kotlin.collections.map' call
      var this_0 = _this__u8e3s4.followedBy_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlinx.datetime.internal.format.parser.concat.append.<anonymous>' call
        var tmp$ret$0 = concat$append(item, other);
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      tmp = new ParserStructure(_this__u8e3s4.operations_1, destination);
    }
    return tmp;
  }
  function concat$simplify(_this__u8e3s4, unconditionalModifications) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var newOperations = ArrayList_init_$Create$_0();
    var currentNumberSpan = null;
    var unconditionalModificationsForTails = toMutableList(unconditionalModifications);
    var tmp0_iterator = _this__u8e3s4.operations_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var op = tmp0_iterator.next_20eer_k$();
      if (op instanceof NumberSpanParserOperation) {
        if (!(currentNumberSpan == null)) {
          currentNumberSpan.addAll_4lagoh_k$(op.get_consumers_1jv82c_k$());
        } else {
          currentNumberSpan = toMutableList(op.get_consumers_1jv82c_k$());
        }
      } else {
        if (op instanceof UnconditionalModification) {
          unconditionalModificationsForTails.add_utx5q5_k$(op);
        } else {
          if (!(currentNumberSpan == null)) {
            newOperations.add_utx5q5_k$(new NumberSpanParserOperation(currentNumberSpan));
            currentNumberSpan = null;
          }
          newOperations.add_utx5q5_k$(op);
        }
      }
    }
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = _this__u8e3s4.followedBy_1;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>' call
      var simplified = concat$simplify(element, unconditionalModificationsForTails);
      var tmp;
      if (simplified.operations_1.isEmpty_y1axqb_k$()) {
        // Inline function 'kotlin.collections.ifEmpty' call
        var this_0 = simplified.followedBy_1;
        var tmp_0;
        if (this_0.isEmpty_y1axqb_k$()) {
          // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>.<anonymous>' call
          tmp_0 = listOf_0(simplified);
        } else {
          tmp_0 = this_0;
        }
        tmp = tmp_0;
      } else {
        tmp = listOf_0(simplified);
      }
      var list = tmp;
      addAll(destination, list);
    }
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (destination.isEmpty_y1axqb_k$()) {
      // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>' call
      tmp_1 = listOf_0(new ParserStructure(unconditionalModificationsForTails, emptyList()));
    } else {
      tmp_1 = destination;
    }
    var mergedTails = tmp_1;
    var tmp_2;
    if (currentNumberSpan == null) {
      tmp_2 = new ParserStructure(newOperations, mergedTails);
    } else {
      var tmp$ret$8;
      $l$block_0: {
        // Inline function 'kotlin.collections.none' call
        var tmp_3;
        if (isInterface(mergedTails, Collection)) {
          tmp_3 = mergedTails.isEmpty_y1axqb_k$();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$8 = true;
          break $l$block_0;
        }
        var _iterator__ex2g4s_0 = mergedTails.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
          var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
          // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>' call
          var tmp0_safe_receiver = firstOrNull(element_0.operations_1);
          var tmp_4;
          if (tmp0_safe_receiver == null) {
            tmp_4 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>.<anonymous>' call
            tmp_4 = tmp0_safe_receiver instanceof NumberSpanParserOperation;
          }
          if (tmp_4 === true) {
            tmp$ret$8 = false;
            break $l$block_0;
          }
        }
        tmp$ret$8 = true;
      }
      if (tmp$ret$8) {
        newOperations.add_utx5q5_k$(new NumberSpanParserOperation(currentNumberSpan));
        tmp_2 = new ParserStructure(newOperations, mergedTails);
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(mergedTails, 10));
        var _iterator__ex2g4s_1 = mergedTails.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
          var item = _iterator__ex2g4s_1.next_20eer_k$();
          // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>' call
          var firstOperation = firstOrNull(item.operations_1);
          var tmp_5;
          if (firstOperation instanceof NumberSpanParserOperation) {
            tmp_5 = new ParserStructure(plus_0(listOf_0(new NumberSpanParserOperation(plus_0(currentNumberSpan, firstOperation.get_consumers_1jv82c_k$()))), drop(item.operations_1, 1)), item.followedBy_1);
          } else {
            if (firstOperation == null) {
              tmp_5 = new ParserStructure(listOf_0(new NumberSpanParserOperation(currentNumberSpan)), item.followedBy_1);
            } else {
              tmp_5 = new ParserStructure(plus_0(listOf_0(new NumberSpanParserOperation(currentNumberSpan)), item.operations_1), item.followedBy_1);
            }
          }
          var tmp$ret$12 = tmp_5;
          destination_0.add_utx5q5_k$(tmp$ret$12);
        }
        var newTails = destination_0;
        tmp_2 = new ParserStructure(newOperations, newTails);
      }
    }
    return tmp_2;
  }
  function formatError$lambda(it) {
    return 'position ' + it.get_position_jfponi_k$() + ": '" + it.get_message_h23axq_k$()() + "'";
  }
  function SignedIntParser(minDigits, maxDigits, spacePadding, setter, name, plusOnExceedsWidth) {
    var parsers = mutableListOf([spaceAndZeroPaddedUnsignedInt(minDigits, maxDigits, spacePadding, setter, name, true)]);
    if (!(plusOnExceedsWidth == null)) {
      parsers.add_utx5q5_k$(spaceAndZeroPaddedUnsignedInt(minDigits, plusOnExceedsWidth, spacePadding, setter, name));
      parsers.add_utx5q5_k$(new ParserStructure(listOf([new PlainStringParserOperation('+'), new NumberSpanParserOperation(listOf_0(new UnsignedIntConsumer(plusOnExceedsWidth + 1 | 0, maxDigits, setter, name, false)))]), emptyList()));
    } else {
      parsers.add_utx5q5_k$(spaceAndZeroPaddedUnsignedInt(minDigits, maxDigits, spacePadding, setter, name));
    }
    return new ParserStructure(emptyList(), parsers);
  }
  function ReducedIntParser(digits, base, setter, name) {
    return new ParserStructure(emptyList(), listOf([new ParserStructure(listOf_0(new NumberSpanParserOperation(listOf_0(new ReducedIntConsumer(digits, setter, name, base)))), emptyList()), new ParserStructure(listOf([new PlainStringParserOperation('+'), new NumberSpanParserOperation(listOf_0(new UnsignedIntConsumer(null, null, setter, name, false)))]), emptyList()), new ParserStructure(listOf([new PlainStringParserOperation('-'), new NumberSpanParserOperation(listOf_0(new UnsignedIntConsumer(null, null, setter, name, true)))]), emptyList())]));
  }
  function spaceAndZeroPaddedUnsignedInt(minDigits, maxDigits, spacePadding, setter, name, withMinus) {
    withMinus = withMinus === VOID ? false : withMinus;
    var minNumberLength = (minDigits == null ? 1 : minDigits) + (withMinus ? 1 : 0) | 0;
    var tmp;
    if (maxDigits == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.internal.format.parser.spaceAndZeroPaddedUnsignedInt.<anonymous>' call
      tmp = withMinus ? maxDigits + 1 | 0 : maxDigits;
    }
    var tmp2_elvis_lhs = tmp;
    var maxNumberLength = tmp2_elvis_lhs == null ? 2147483647 : tmp2_elvis_lhs;
    var spacePadding_0 = spacePadding == null ? 0 : spacePadding;
    // Inline function 'kotlin.comparisons.minOf' call
    var maxPaddedNumberLength = Math.min(maxNumberLength, spacePadding_0);
    if (minNumberLength >= maxPaddedNumberLength)
      return spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, minNumberLength, maxNumberLength);
    var accumulated = spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, minNumberLength, minNumberLength);
    var inductionVariable = minNumberLength;
    if (inductionVariable < maxPaddedNumberLength)
      do {
        var accumulatedWidth = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        accumulated = new ParserStructure(emptyList(), listOf([spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, accumulatedWidth + 1 | 0, accumulatedWidth + 1 | 0), concat(listOf([new ParserStructure(listOf_0(new PlainStringParserOperation(' ')), emptyList()), accumulated]))]));
      }
       while (inductionVariable < maxPaddedNumberLength);
    var tmp_0;
    if (spacePadding_0 > maxNumberLength) {
      var prepadding = new PlainStringParserOperation(repeat(' ', spacePadding_0 - maxNumberLength | 0));
      tmp_0 = concat(listOf([new ParserStructure(listOf_0(prepadding), emptyList()), accumulated]));
    } else if (spacePadding_0 === maxNumberLength) {
      tmp_0 = accumulated;
    } else {
      var r = new ParserStructure(emptyList(), listOf([spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, spacePadding_0 + 1 | 0, maxNumberLength), accumulated]));
      tmp_0 = r;
    }
    return tmp_0;
  }
  function AssignableField() {
  }
  function _get_setter__e3slw_2($this) {
    return $this.setter_1;
  }
  function _get_whatThisExpects__4pg11j($this) {
    return $this.whatThisExpects_1;
  }
  function TrieNode(children, isTerminal) {
    var tmp;
    if (children === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$_0();
    } else {
      tmp = children;
    }
    children = tmp;
    isTerminal = isTerminal === VOID ? false : isTerminal;
    this.children_1 = children;
    this.isTerminal_1 = isTerminal;
  }
  protoOf(TrieNode).get_children_4cwbp4_k$ = function () {
    return this.children_1;
  };
  protoOf(TrieNode).set_isTerminal_fxlojy_k$ = function (_set____db54di) {
    this.isTerminal_1 = _set____db54di;
  };
  protoOf(TrieNode).get_isTerminal_i7a6hb_k$ = function () {
    return this.isTerminal_1;
  };
  function _get_trie__dedo4x($this) {
    return $this.trie_1;
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
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
  protoOf(sam$kotlin_Comparator$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function _init_$reduceTrie(trie) {
    var tmp0_iterator = trie.children_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var child = tmp0_iterator.next_20eer_k$().component2_7eebsb_k$();
      _init_$reduceTrie(child);
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var newChildren = ArrayList_init_$Create$_0();
    var tmp2_iterator = trie.children_1.iterator_jk1svi_k$();
    while (tmp2_iterator.hasNext_bitz1p_k$()) {
      var tmp3_loop_parameter = tmp2_iterator.next_20eer_k$();
      var key = tmp3_loop_parameter.component1_7eebsc_k$();
      var child_0 = tmp3_loop_parameter.component2_7eebsb_k$();
      if (!child_0.isTerminal_1 && child_0.children_1.get_size_woubt6_k$() === 1) {
        var tmp4_container = single(child_0.children_1);
        var grandChildKey = tmp4_container.component1_7eebsc_k$();
        var grandChild = tmp4_container.component2_7eebsb_k$();
        newChildren.add_utx5q5_k$(to(key + grandChildKey, grandChild));
      } else {
        newChildren.add_utx5q5_k$(to(key, child_0));
      }
    }
    trie.children_1.clear_j9egeb_k$();
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = StringSetParserOperation$reduceTrie$lambda;
    var tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp);
    var tmp$ret$2 = sortedWith(newChildren, tmp$ret$1);
    trie.children_1.addAll_4lagoh_k$(tmp$ret$2);
  }
  function StringSetParserOperation$lambda($key) {
    return function (it) {
      // Inline function 'kotlinx.datetime.internal.format.parser.StringSetParserOperation.<anonymous>' call
      var tmp$ret$0 = it.get_first_irdx8n_k$();
      return compareValues(tmp$ret$0, $key);
    };
  }
  function StringSetParserOperation$consume$lambda(this$0, $input, $startIndex, $index) {
    return function () {
      var tmp0 = $input;
      var tmp1 = $startIndex;
      // Inline function 'kotlin.text.substring' call
      var endIndex = $index._v;
      var tmp$ret$0 = toString(charSequenceSubSequence(tmp0, tmp1, endIndex));
      return 'Expected ' + this$0.whatThisExpects_1 + ' but got ' + tmp$ret$0;
    };
  }
  function StringSetParserOperation$reduceTrie$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'kotlinx.datetime.internal.format.parser.StringSetParserOperation.reduceTrie.<anonymous>' call
    var tmp = a.get_first_irdx8n_k$();
    // Inline function 'kotlinx.datetime.internal.format.parser.StringSetParserOperation.reduceTrie.<anonymous>' call
    var tmp$ret$1 = b.get_first_irdx8n_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function StringSetParserOperation(strings, setter, whatThisExpects) {
    this.setter_1 = setter;
    this.whatThisExpects_1 = whatThisExpects;
    this.trie_1 = new TrieNode();
    var tmp0_iterator = strings.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var string = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.text.isNotEmpty' call
      // Inline function 'kotlin.require' call
      if (!(charSequenceLength(string) > 0)) {
        // Inline function 'kotlinx.datetime.internal.format.parser.StringSetParserOperation.<anonymous>' call
        var message = 'Found an empty string in ' + this.whatThisExpects_1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var node = this.trie_1;
      var inductionVariable = 0;
      var last = string.length;
      while (inductionVariable < last) {
        var char = charSequenceGet(string, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        var tmp2 = node.children_1;
        // Inline function 'kotlin.collections.binarySearchBy' call
        var key = toString_0(char);
        var toIndex = tmp2.get_size_woubt6_k$();
        var searchResult = binarySearch(tmp2, 0, toIndex, StringSetParserOperation$lambda(key));
        var tmp;
        if (searchResult < 0) {
          // Inline function 'kotlin.also' call
          var this_0 = new TrieNode();
          // Inline function 'kotlinx.datetime.internal.format.parser.StringSetParserOperation.<anonymous>' call
          node.children_1.add_dl6gt3_k$((-searchResult | 0) - 1 | 0, to(toString_0(char), this_0));
          tmp = this_0;
        } else {
          tmp = node.children_1.get_c1px32_k$(searchResult).get_second_jf7fjx_k$();
        }
        node = tmp;
      }
      // Inline function 'kotlin.require' call
      if (!!node.isTerminal_1) {
        // Inline function 'kotlinx.datetime.internal.format.parser.StringSetParserOperation.<anonymous>' call
        var message_0 = "The string '" + string + "' was passed several times";
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      node.isTerminal_1 = true;
    }
    _init_$reduceTrie(this.trie_1);
  }
  protoOf(StringSetParserOperation).consume_ew3o91_k$ = function (storage, input, startIndex) {
    var node = this.trie_1;
    var index = {_v: startIndex};
    var lastMatch = null;
    loop: while (index._v <= charSequenceLength(input)) {
      if (node.isTerminal_1)
        lastMatch = index._v;
      var tmp0_iterator = node.children_1.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
        var key = tmp1_loop_parameter.component1_7eebsc_k$();
        var child = tmp1_loop_parameter.component2_7eebsb_k$();
        if (startsWith(input, key, index._v)) {
          node = child;
          index._v = index._v + key.length | 0;
          continue loop;
        }
      }
      break loop;
    }
    var tmp;
    if (!(lastMatch == null)) {
      // Inline function 'kotlin.text.substring' call
      var endIndex = lastMatch;
      var tmp$ret$0 = toString(charSequenceSubSequence(input, startIndex, endIndex));
      tmp = setWithoutReassigning_0(this.setter_1, storage, tmp$ret$0, startIndex, lastMatch);
    } else {
      var tmp_0 = Companion_getInstance_11();
      tmp = tmp_0.Error_ca056s_k$(startIndex, StringSetParserOperation$consume$lambda(this, input, startIndex, index));
    }
    return tmp;
  };
  function _get_minLength__vbub2f_1($this) {
    return $this.minLength_1;
  }
  function _get_isFlexible__uf3yfq($this) {
    return $this.isFlexible_1;
  }
  function _get_whatThisExpects__4pg11j_0($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.consumers_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<get-whatThisExpects>.<anonymous>' call
      var length = item.get_length_g42xv3_k$();
      var tmp$ret$0 = (length == null ? 'at least one digit' : '' + length + ' digits') + (' for ' + item.get_whatThisExpects_s3n635_k$());
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var consumerLengths = destination;
    var tmp;
    if ($this.isFlexible_1) {
      tmp = 'a number with at least ' + $this.minLength_1 + ' digits: ' + toString(consumerLengths);
    } else {
      tmp = 'a number with exactly ' + $this.minLength_1 + ' digits: ' + toString(consumerLengths);
    }
    return tmp;
  }
  function NumberSpanParserOperation$consume$lambda(this$0) {
    return function () {
      return 'Unexpected end of input: yet to parse ' + _get_whatThisExpects__4pg11j_0(this$0);
    };
  }
  function NumberSpanParserOperation$consume$lambda_0($digitsInRow, this$0) {
    return function () {
      return 'Only found ' + $digitsInRow._v + ' digits in a row, but need to parse ' + _get_whatThisExpects__4pg11j_0(this$0);
    };
  }
  function NumberSpanParserOperation$consume$lambda_1($numberString, this$0, $i, $error) {
    return function () {
      return "Can not interpret the string '" + $numberString + "' as " + this$0.consumers_1.get_c1px32_k$($i).get_whatThisExpects_s3n635_k$() + ': ' + $error.errorMessage_jwdivz_k$();
    };
  }
  function NumberSpanParserOperation(consumers) {
    this.consumers_1 = consumers;
    var tmp = this;
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s = this.consumers_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var tmp_0 = sum;
      // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.minLength.<anonymous>' call
      var tmp0_elvis_lhs = element.get_length_g42xv3_k$();
      sum = tmp_0 + (tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs) | 0;
    }
    tmp.minLength_1 = sum;
    var tmp_1 = this;
    var tmp0 = this.consumers_1;
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_2;
      if (isInterface(tmp0, Collection)) {
        tmp_2 = tmp0.isEmpty_y1axqb_k$();
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$2 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
        // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.isFlexible.<anonymous>' call
        if (element_0.get_length_g42xv3_k$() == null) {
          tmp$ret$2 = true;
          break $l$block_0;
        }
      }
      tmp$ret$2 = false;
    }
    tmp_1.isFlexible_1 = tmp$ret$2;
    var tmp0_0 = this.consumers_1;
    var tmp$ret$4;
    $l$block_2: {
      // Inline function 'kotlin.collections.all' call
      var tmp_3;
      if (isInterface(tmp0_0, Collection)) {
        tmp_3 = tmp0_0.isEmpty_y1axqb_k$();
      } else {
        tmp_3 = false;
      }
      if (tmp_3) {
        tmp$ret$4 = true;
        break $l$block_2;
      }
      var _iterator__ex2g4s_1 = tmp0_0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
        var element_1 = _iterator__ex2g4s_1.next_20eer_k$();
        // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<anonymous>' call
        var tmp0_elvis_lhs_0 = element_1.get_length_g42xv3_k$();
        if (!((tmp0_elvis_lhs_0 == null ? 2147483647 : tmp0_elvis_lhs_0) > 0)) {
          tmp$ret$4 = false;
          break $l$block_2;
        }
      }
      tmp$ret$4 = true;
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!tmp$ret$4) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp3 = this.consumers_1;
    var tmp$ret$7;
    $l$block_3: {
      // Inline function 'kotlin.collections.count' call
      var tmp_4;
      if (isInterface(tmp3, Collection)) {
        tmp_4 = tmp3.isEmpty_y1axqb_k$();
      } else {
        tmp_4 = false;
      }
      if (tmp_4) {
        tmp$ret$7 = 0;
        break $l$block_3;
      }
      var count = 0;
      var _iterator__ex2g4s_2 = tmp3.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
        var element_2 = _iterator__ex2g4s_2.next_20eer_k$();
        // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<anonymous>' call
        if (element_2.get_length_g42xv3_k$() == null) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$7 = count;
    }
    // Inline function 'kotlin.require' call
    if (!(tmp$ret$7 <= 1)) {
      // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<anonymous>' call
      // Inline function 'kotlin.collections.filter' call
      var tmp0_1 = this.consumers_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s_3 = tmp0_1.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_3.hasNext_bitz1p_k$()) {
        var element_3 = _iterator__ex2g4s_3.next_20eer_k$();
        // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<anonymous>.<anonymous>' call
        if (element_3.get_length_g42xv3_k$() == null) {
          destination.add_utx5q5_k$(element_3);
        }
      }
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
      var _iterator__ex2g4s_4 = destination.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_4.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s_4.next_20eer_k$();
        // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<anonymous>.<anonymous>' call
        var tmp$ret$12 = item.get_whatThisExpects_s3n635_k$();
        destination_0.add_utx5q5_k$(tmp$ret$12);
      }
      var fieldNames = destination_0;
      var message_0 = 'At most one variable-length numeric field in a row is allowed, but got several: ' + toString(fieldNames) + '. ' + 'Parsing is undefined: for example, with variable-length month number ' + "and variable-length day of month, '111' can be parsed as Jan 11th or Nov 1st.";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(NumberSpanParserOperation).get_consumers_1jv82c_k$ = function () {
    return this.consumers_1;
  };
  protoOf(NumberSpanParserOperation).consume_ew3o91_k$ = function (storage, input, startIndex) {
    if ((startIndex + this.minLength_1 | 0) > charSequenceLength(input)) {
      var tmp = Companion_getInstance_11();
      return tmp.Error_ca056s_k$(startIndex, NumberSpanParserOperation$consume$lambda(this));
    }
    var digitsInRow = {_v: 0};
    while ((startIndex + digitsInRow._v | 0) < charSequenceLength(input) && isAsciiDigit(charSequenceGet(input, startIndex + digitsInRow._v | 0))) {
      digitsInRow._v = digitsInRow._v + 1 | 0;
      digitsInRow._v;
    }
    if (digitsInRow._v < this.minLength_1) {
      var tmp_0 = Companion_getInstance_11();
      return tmp_0.Error_ca056s_k$(startIndex, NumberSpanParserOperation$consume$lambda_0(digitsInRow, this));
    }
    var index = startIndex;
    var inductionVariable = 0;
    var last = this.consumers_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_elvis_lhs = this.consumers_1.get_c1px32_k$(i).get_length_g42xv3_k$();
        var length = tmp1_elvis_lhs == null ? (digitsInRow._v - this.minLength_1 | 0) + 1 | 0 : tmp1_elvis_lhs;
        var error = this.consumers_1.get_c1px32_k$(i).consume_o77i9d_k$(storage, input, index, index + length | 0);
        if (!(error == null)) {
          var tmp1 = index;
          // Inline function 'kotlin.text.substring' call
          var endIndex = index + length | 0;
          var numberString = toString(charSequenceSubSequence(input, tmp1, endIndex));
          var tmp_1 = Companion_getInstance_11();
          var tmp_2 = index;
          return tmp_1.Error_ca056s_k$(tmp_2, NumberSpanParserOperation$consume$lambda_1(numberString, this, i, error));
        }
        index = index + length | 0;
      }
       while (inductionVariable <= last);
    return Companion_getInstance_11().Ok_6vkbj8_k$(index);
  };
  protoOf(NumberSpanParserOperation).toString = function () {
    return _get_whatThisExpects__4pg11j_0(this);
  };
  function ParserOperation() {
  }
  function PlainStringParserOperation$consume$lambda(this$0) {
    return function () {
      return "Unexpected end of input: yet to parse '" + this$0.string_1 + "'";
    };
  }
  function PlainStringParserOperation$consume$lambda_0(this$0, $input, $startIndex, $i) {
    return function () {
      var tmp0 = $input;
      var tmp1 = $startIndex;
      // Inline function 'kotlin.text.substring' call
      var endIndex = ($startIndex + $i | 0) + 1 | 0;
      var tmp$ret$0 = toString(charSequenceSubSequence(tmp0, tmp1, endIndex));
      return 'Expected ' + this$0.string_1 + ' but got ' + tmp$ret$0;
    };
  }
  function PlainStringParserOperation(string) {
    this.string_1 = string;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.string_1;
    // Inline function 'kotlin.require' call
    if (!(charSequenceLength(this_0) > 0)) {
      // Inline function 'kotlinx.datetime.internal.format.parser.PlainStringParserOperation.<anonymous>' call
      var message = 'Empty string is not allowed';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!isAsciiDigit(charSequenceGet(this.string_1, 0))) {
      // Inline function 'kotlinx.datetime.internal.format.parser.PlainStringParserOperation.<anonymous>' call
      var message_0 = "String '" + this.string_1 + "' starts with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!!isAsciiDigit(charSequenceGet(this.string_1, this.string_1.length - 1 | 0))) {
      // Inline function 'kotlinx.datetime.internal.format.parser.PlainStringParserOperation.<anonymous>' call
      var message_1 = "String '" + this.string_1 + "' ends with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  protoOf(PlainStringParserOperation).get_string_jnpst6_k$ = function () {
    return this.string_1;
  };
  protoOf(PlainStringParserOperation).consume_ew3o91_k$ = function (storage, input, startIndex) {
    if ((startIndex + this.string_1.length | 0) > charSequenceLength(input)) {
      var tmp = Companion_getInstance_11();
      return tmp.Error_ca056s_k$(startIndex, PlainStringParserOperation$consume$lambda(this));
    }
    var inductionVariable = 0;
    var last = charSequenceLength(this.string_1) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet(input, startIndex + i | 0) === charSequenceGet(this.string_1, i))) {
          var tmp_0 = Companion_getInstance_11();
          return tmp_0.Error_ca056s_k$(startIndex, PlainStringParserOperation$consume$lambda_0(this, input, startIndex, i));
        }
      }
       while (inductionVariable <= last);
    return Companion_getInstance_11().Ok_6vkbj8_k$(startIndex + this.string_1.length | 0);
  };
  protoOf(PlainStringParserOperation).toString = function () {
    return "'" + this.string_1 + "'";
  };
  function _get_isNegativeSetter__oxw04t($this) {
    return $this.isNegativeSetter_1;
  }
  function _get_withPlusSign__em2ueq($this) {
    return $this.withPlusSign_1;
  }
  function _get_whatThisExpects__4pg11j_1($this) {
    return $this.whatThisExpects_1;
  }
  function SignParser$consume$lambda(this$0, $char) {
    return function () {
      return 'Expected ' + this$0.whatThisExpects_1 + ' but got ' + toString_0($char);
    };
  }
  function SignParser(isNegativeSetter, withPlusSign, whatThisExpects) {
    this.isNegativeSetter_1 = isNegativeSetter;
    this.withPlusSign_1 = withPlusSign;
    this.whatThisExpects_1 = whatThisExpects;
  }
  protoOf(SignParser).consume_ew3o91_k$ = function (storage, input, startIndex) {
    if (startIndex >= charSequenceLength(input))
      return Companion_getInstance_11().Ok_6vkbj8_k$(startIndex);
    var char = charSequenceGet(input, startIndex);
    if (char === _Char___init__impl__6a9atx(45)) {
      this.isNegativeSetter_1(storage, true);
      return Companion_getInstance_11().Ok_6vkbj8_k$(startIndex + 1 | 0);
    }
    if (char === _Char___init__impl__6a9atx(43) && this.withPlusSign_1) {
      this.isNegativeSetter_1(storage, false);
      return Companion_getInstance_11().Ok_6vkbj8_k$(startIndex + 1 | 0);
    }
    var tmp = Companion_getInstance_11();
    return tmp.Error_ca056s_k$(startIndex, SignParser$consume$lambda(this, char));
  };
  protoOf(SignParser).toString = function () {
    return this.whatThisExpects_1;
  };
  function _get_operation__lk4gty($this) {
    return $this.operation_1;
  }
  function UnconditionalModification(operation) {
    this.operation_1 = operation;
  }
  protoOf(UnconditionalModification).consume_ew3o91_k$ = function (storage, input, startIndex) {
    this.operation_1(storage);
    return Companion_getInstance_11().Ok_6vkbj8_k$(startIndex);
  };
  function setWithoutReassigning_0(_this__u8e3s4, receiver, value, position, nextIndex) {
    var conflictingValue = _this__u8e3s4.trySetWithoutReassigning_itlg4a_k$(receiver, value);
    var tmp;
    if (conflictingValue === null) {
      tmp = Companion_getInstance_11().Ok_6vkbj8_k$(nextIndex);
    } else {
      var tmp_0 = Companion_getInstance_11();
      tmp = tmp_0.Error_ca056s_k$(position, setWithoutReassigning$lambda(conflictingValue, value, _this__u8e3s4));
    }
    return tmp;
  }
  function spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths($withMinus, $setter, $name, minNumberLength, maxNumberLength) {
    // Inline function 'kotlin.check' call
    if (!(maxNumberLength >= (1 + ($withMinus ? 1 : 0) | 0))) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlinx.datetime.internal.format.parser.spaceAndZeroPaddedUnsignedInt.numberOfRequiredLengths.<anonymous>' call
    if ($withMinus) {
      this_0.add_utx5q5_k$(new PlainStringParserOperation('-'));
    }
    this_0.add_utx5q5_k$(new NumberSpanParserOperation(listOf_0(new UnsignedIntConsumer(minNumberLength - ($withMinus ? 1 : 0) | 0, maxNumberLength - ($withMinus ? 1 : 0) | 0, $setter, $name, $withMinus))));
    var tmp$ret$2 = this_0.build_nmwvly_k$();
    return new ParserStructure(tmp$ret$2, emptyList());
  }
  function setWithoutReassigning$lambda($conflictingValue, $value, $this_setWithoutReassigning) {
    return function () {
      return "Attempting to assign conflicting values '" + toString_1($conflictingValue) + "' and '" + toString_1($value) + "' to field '" + $this_setWithoutReassigning.get_name_woqyms_k$() + "'";
    };
  }
  function get_POWERS_OF_TEN() {
    _init_properties_math_kt__tgcmt4();
    return POWERS_OF_TEN;
  }
  var POWERS_OF_TEN;
  function DecimalFraction(fractionalPart, digits) {
    this.fractionalPart_1 = fractionalPart;
    this.digits_1 = digits;
    // Inline function 'kotlin.require' call
    if (!(this.digits_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.DecimalFraction.<anonymous>' call
      var message = 'Digits must be non-negative, but was ' + this.digits_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(DecimalFraction).get_fractionalPart_8dxf0p_k$ = function () {
    return this.fractionalPart_1;
  };
  protoOf(DecimalFraction).get_digits_cdspnz_k$ = function () {
    return this.digits_1;
  };
  protoOf(DecimalFraction).fractionalPartWithNDigits_sivm3u_k$ = function (newDigits) {
    return newDigits === this.digits_1 ? this.fractionalPart_1 : newDigits > this.digits_1 ? imul(this.fractionalPart_1, get_POWERS_OF_TEN()[newDigits - this.digits_1 | 0]) : this.fractionalPart_1 / get_POWERS_OF_TEN()[this.digits_1 - newDigits | 0] | 0;
  };
  protoOf(DecimalFraction).compareTo_8eflqd_k$ = function (other) {
    var tmp0 = this.digits_1;
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = other.digits_1;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.datetime.internal.DecimalFraction.compareTo.<anonymous>' call
    var maxPrecision = Math.max(tmp0, b);
    return compareTo(this.fractionalPartWithNDigits_sivm3u_k$(maxPrecision), other.fractionalPartWithNDigits_sivm3u_k$(maxPrecision));
  };
  protoOf(DecimalFraction).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_8eflqd_k$(other instanceof DecimalFraction ? other : THROW_CCE());
  };
  protoOf(DecimalFraction).equals = function (other) {
    var tmp;
    if (other instanceof DecimalFraction) {
      tmp = this.compareTo_8eflqd_k$(other) === 0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DecimalFraction).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.datetime.internal.DecimalFraction.toString.<anonymous>' call
    var denominator = get_POWERS_OF_TEN()[this.digits_1];
    this_0.append_uppzia_k$(this.fractionalPart_1 / denominator | 0);
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(46));
    this_0.append_22ad7x_k$(removePrefix((denominator + (this.fractionalPart_1 % denominator | 0) | 0).toString(), '1'));
    return this_0.toString();
  };
  protoOf(DecimalFraction).hashCode = function () {
    throw UnsupportedOperationException_init_$Create$('DecimalFraction is not supposed to be used as a hash key');
  };
  var properties_initialized_math_kt_amm9wq;
  function _init_properties_math_kt__tgcmt4() {
    if (!properties_initialized_math_kt_amm9wq) {
      properties_initialized_math_kt_amm9wq = true;
      // Inline function 'kotlin.intArrayOf' call
      POWERS_OF_TEN = new Int32Array([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]);
    }
  }
  function toKotlinCode_2(_this__u8e3s4) {
    return _this__u8e3s4 === _Char___init__impl__6a9atx(39) ? "'\\''" : "'" + toString_0(_this__u8e3s4) + "'";
  }
  function toKotlinCode_3(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.datetime.internal.toKotlinCode.<anonymous>' call
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(34));
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var c = charSequenceGet(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (c === _Char___init__impl__6a9atx(34)) {
        this_0.append_22ad7x_k$('\\"');
      } else if (c === _Char___init__impl__6a9atx(92)) {
        this_0.append_22ad7x_k$('\\\\');
      } else if (c === _Char___init__impl__6a9atx(8)) {
        this_0.append_22ad7x_k$('\\b');
      } else if (c === _Char___init__impl__6a9atx(9)) {
        this_0.append_22ad7x_k$('\\t');
      } else if (c === _Char___init__impl__6a9atx(10)) {
        this_0.append_22ad7x_k$('\\n');
      } else if (c === _Char___init__impl__6a9atx(13)) {
        this_0.append_22ad7x_k$('\\r');
      } else {
        this_0.append_am5a4z_k$(c);
      }
    }
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(34));
    return this_0.toString();
  }
  function isAsciiDigit(_this__u8e3s4) {
    return _Char___init__impl__6a9atx(48) <= _this__u8e3s4 ? _this__u8e3s4 <= _Char___init__impl__6a9atx(57) : false;
  }
  function asciiDigitToInt(_this__u8e3s4) {
    return Char__minus_impl_a2frrh(_this__u8e3s4, _Char___init__impl__6a9atx(48));
  }
  function InstantIso8601Serializer() {
    InstantIso8601Serializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('kotlinx.datetime.Instant', STRING_getInstance());
  }
  protoOf(InstantIso8601Serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(InstantIso8601Serializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance_12().parse$default_czyhit_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(InstantIso8601Serializer).serialize_1cezrs_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.toString());
  };
  protoOf(InstantIso8601Serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_1cezrs_k$(encoder, value instanceof Instant_0 ? value : THROW_CCE());
  };
  var InstantIso8601Serializer_instance;
  function InstantIso8601Serializer_getInstance() {
    if (InstantIso8601Serializer_instance == null)
      new InstantIso8601Serializer();
    return InstantIso8601Serializer_instance;
  }
  function LocalDateIso8601Serializer() {
    LocalDateIso8601Serializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('kotlinx.datetime.LocalDate', STRING_getInstance());
  }
  protoOf(LocalDateIso8601Serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LocalDateIso8601Serializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance_13().parse$default_krgov1_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(LocalDateIso8601Serializer).serialize_4wlsk8_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.toString());
  };
  protoOf(LocalDateIso8601Serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_4wlsk8_k$(encoder, value instanceof LocalDate_0 ? value : THROW_CCE());
  };
  var LocalDateIso8601Serializer_instance;
  function LocalDateIso8601Serializer_getInstance() {
    if (LocalDateIso8601Serializer_instance == null)
      new LocalDateIso8601Serializer();
    return LocalDateIso8601Serializer_instance;
  }
  function LocalDateTimeIso8601Serializer() {
    LocalDateTimeIso8601Serializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('kotlinx.datetime.LocalDateTime', STRING_getInstance());
  }
  protoOf(LocalDateTimeIso8601Serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LocalDateTimeIso8601Serializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance_14().parse$default_rpbnp3_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(LocalDateTimeIso8601Serializer).serialize_d9j408_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.toString());
  };
  protoOf(LocalDateTimeIso8601Serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_d9j408_k$(encoder, value instanceof LocalDateTime_0 ? value : THROW_CCE());
  };
  var LocalDateTimeIso8601Serializer_instance;
  function LocalDateTimeIso8601Serializer_getInstance() {
    if (LocalDateTimeIso8601Serializer_instance == null)
      new LocalDateTimeIso8601Serializer();
    return LocalDateTimeIso8601Serializer_instance;
  }
  function LocalTimeIso8601Serializer() {
    LocalTimeIso8601Serializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('kotlinx.datetime.LocalTime', STRING_getInstance());
  }
  protoOf(LocalTimeIso8601Serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LocalTimeIso8601Serializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance_15().parse$default_id2jrv_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(LocalTimeIso8601Serializer).serialize_401kjc_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.toString());
  };
  protoOf(LocalTimeIso8601Serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_401kjc_k$(encoder, value instanceof LocalTime_0 ? value : THROW_CCE());
  };
  var LocalTimeIso8601Serializer_instance;
  function LocalTimeIso8601Serializer_getInstance() {
    if (LocalTimeIso8601Serializer_instance == null)
      new LocalTimeIso8601Serializer();
    return LocalTimeIso8601Serializer_instance;
  }
  function UtcOffsetSerializer() {
    UtcOffsetSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('kotlinx.datetime.UtcOffset', STRING_getInstance());
  }
  protoOf(UtcOffsetSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(UtcOffsetSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance_18().parse$default_j5dbmh_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(UtcOffsetSerializer).serialize_2fqg06_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.toString());
  };
  protoOf(UtcOffsetSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_2fqg06_k$(encoder, value instanceof UtcOffset ? value : THROW_CCE());
  };
  var UtcOffsetSerializer_instance;
  function UtcOffsetSerializer_getInstance() {
    if (UtcOffsetSerializer_instance == null)
      new UtcOffsetSerializer();
    return UtcOffsetSerializer_instance;
  }
  function TimeZoneSerializer() {
    TimeZoneSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('kotlinx.datetime.TimeZone', STRING_getInstance());
  }
  protoOf(TimeZoneSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(TimeZoneSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance_16().of_5gnbr7_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(TimeZoneSerializer).serialize_pkxsts_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.get_id_kntnx8_k$());
  };
  protoOf(TimeZoneSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_pkxsts_k$(encoder, value instanceof TimeZone ? value : THROW_CCE());
  };
  var TimeZoneSerializer_instance;
  function TimeZoneSerializer_getInstance() {
    if (TimeZoneSerializer_instance == null)
      new TimeZoneSerializer();
    return TimeZoneSerializer_instance;
  }
  function FixedOffsetTimeZoneSerializer() {
    FixedOffsetTimeZoneSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('kotlinx.datetime.FixedOffsetTimeZone', STRING_getInstance());
  }
  protoOf(FixedOffsetTimeZoneSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(FixedOffsetTimeZoneSerializer).deserialize_sy6x50_k$ = function (decoder) {
    var zone = Companion_getInstance_16().of_5gnbr7_k$(decoder.decodeString_x3hxsx_k$());
    if (zone instanceof FixedOffsetTimeZone) {
      return zone;
    } else {
      throw SerializationException_init_$Create$("Timezone identifier '" + zone.toString() + "' does not correspond to a fixed-offset timezone");
    }
  };
  protoOf(FixedOffsetTimeZoneSerializer).serialize_sozlhl_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.get_id_kntnx8_k$());
  };
  protoOf(FixedOffsetTimeZoneSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_sozlhl_k$(encoder, value instanceof FixedOffsetTimeZone ? value : THROW_CCE());
  };
  var FixedOffsetTimeZoneSerializer_instance;
  function FixedOffsetTimeZoneSerializer_getInstance() {
    if (FixedOffsetTimeZoneSerializer_instance == null)
      new FixedOffsetTimeZoneSerializer();
    return FixedOffsetTimeZoneSerializer_instance;
  }
  var DayOfWeek_MONDAY_instance;
  var DayOfWeek_TUESDAY_instance;
  var DayOfWeek_WEDNESDAY_instance;
  var DayOfWeek_THURSDAY_instance;
  var DayOfWeek_FRIDAY_instance;
  var DayOfWeek_SATURDAY_instance;
  var DayOfWeek_SUNDAY_instance;
  function values_1() {
    return [DayOfWeek_MONDAY_getInstance(), DayOfWeek_TUESDAY_getInstance(), DayOfWeek_WEDNESDAY_getInstance(), DayOfWeek_THURSDAY_getInstance(), DayOfWeek_FRIDAY_getInstance(), DayOfWeek_SATURDAY_getInstance(), DayOfWeek_SUNDAY_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'MONDAY':
        return DayOfWeek_MONDAY_getInstance();
      case 'TUESDAY':
        return DayOfWeek_TUESDAY_getInstance();
      case 'WEDNESDAY':
        return DayOfWeek_WEDNESDAY_getInstance();
      case 'THURSDAY':
        return DayOfWeek_THURSDAY_getInstance();
      case 'FRIDAY':
        return DayOfWeek_FRIDAY_getInstance();
      case 'SATURDAY':
        return DayOfWeek_SATURDAY_getInstance();
      case 'SUNDAY':
        return DayOfWeek_SUNDAY_getInstance();
      default:
        DayOfWeek_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var DayOfWeek_entriesInitialized;
  function DayOfWeek_initEntries() {
    if (DayOfWeek_entriesInitialized)
      return Unit_getInstance();
    DayOfWeek_entriesInitialized = true;
    DayOfWeek_MONDAY_instance = new DayOfWeek_0('MONDAY', 0);
    DayOfWeek_TUESDAY_instance = new DayOfWeek_0('TUESDAY', 1);
    DayOfWeek_WEDNESDAY_instance = new DayOfWeek_0('WEDNESDAY', 2);
    DayOfWeek_THURSDAY_instance = new DayOfWeek_0('THURSDAY', 3);
    DayOfWeek_FRIDAY_instance = new DayOfWeek_0('FRIDAY', 4);
    DayOfWeek_SATURDAY_instance = new DayOfWeek_0('SATURDAY', 5);
    DayOfWeek_SUNDAY_instance = new DayOfWeek_0('SUNDAY', 6);
  }
  var $ENTRIES_1;
  function DayOfWeek_0(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toDayOfWeek(_this__u8e3s4) {
    return DayOfWeek(_this__u8e3s4.value());
  }
  function DayOfWeek_MONDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_MONDAY_instance;
  }
  function DayOfWeek_TUESDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_TUESDAY_instance;
  }
  function DayOfWeek_WEDNESDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_WEDNESDAY_instance;
  }
  function DayOfWeek_THURSDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_THURSDAY_instance;
  }
  function DayOfWeek_FRIDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_FRIDAY_instance;
  }
  function DayOfWeek_SATURDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_SATURDAY_instance;
  }
  function DayOfWeek_SUNDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_SUNDAY_instance;
  }
  function Companion_11() {
    Companion_instance_11 = this;
    var tmp = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    // Inline function 'kotlinx.datetime.Companion.DISTANT_PAST.<anonymous>' call
    var tmp$ret$1 = Instant.ofEpochSecond((new Long(-931914497, -750)).toDouble_ygsx0s_k$(), 999999999);
    tmp.DISTANT_PAST_1 = new Instant_0(tmp$ret$1);
    var tmp_0 = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    // Inline function 'kotlinx.datetime.Companion.DISTANT_FUTURE.<anonymous>' call
    var tmp$ret$3 = Instant.ofEpochSecond((new Long(1151527680, 720)).toDouble_ygsx0s_k$(), 0);
    tmp_0.DISTANT_FUTURE_1 = new Instant_0(tmp$ret$3);
    this.MIN_1 = new Instant_0(Instant.MIN);
    this.MAX_1 = new Instant_0(Instant.MAX);
  }
  protoOf(Companion_11).now_2cba_k$ = function () {
    return new Instant_0(Clock.systemUTC().instant());
  };
  protoOf(Companion_11).fromEpochMilliseconds_e2resj_k$ = function (epochMilliseconds) {
    var tmp;
    try {
      // Inline function 'kotlin.Long.div' call
      var tmp_0 = epochMilliseconds.div_jun7gj_k$(toLong(1000));
      // Inline function 'kotlin.Long.rem' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$2 = epochMilliseconds.rem_bsnl9o_k$(toLong(1000)).times_nfzjiw_k$(toLong(1000000));
      tmp = this.fromEpochSeconds_labkcg_k$(tmp_0, tmp$ret$2);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e))
          throw e;
        tmp_1 = epochMilliseconds.compareTo_9jj042_k$(new Long(0, 0)) > 0 ? this.MAX_1 : this.MIN_1;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  protoOf(Companion_11).parse_tkh7xn_k$ = function (input, format) {
    var tmp;
    try {
      tmp = format.parse_xovy9i_k$(input).toInstantUsingOffset_6s0427_k$();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        throw DateTimeFormatException_init_$Create$_2("Failed to parse an instant from '" + toString(input) + "'", e);
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_11).parse$default_czyhit_k$ = function (input, format, $super) {
    format = format === VOID ? Formats_getInstance().get_ISO_DATE_TIME_OFFSET_7s4r8p_k$() : format;
    return $super === VOID ? this.parse_tkh7xn_k$(input, format) : $super.parse_tkh7xn_k$.call(this, input, format);
  };
  protoOf(Companion_11).parse_pc1q8p_k$ = function (isoString) {
    return this.parse$default_czyhit_k$(isoString);
  };
  protoOf(Companion_11).fromEpochSeconds_labkcg_k$ = function (epochSeconds, nanosecondAdjustment) {
    var tmp;
    try {
      // Inline function 'kotlin.floorDiv' call
      var other = new Long(1000000000, 0);
      var q = nanosecondAdjustment.div_jun7gj_k$(other);
      if (nanosecondAdjustment.xor_qzz94j_k$(other).compareTo_9jj042_k$(new Long(0, 0)) < 0 && !q.times_nfzjiw_k$(other).equals(nanosecondAdjustment)) {
        q = q.dec_24n6_k$();
      }
      var tmp$ret$0 = q;
      var secs = safeAdd(epochSeconds, tmp$ret$0);
      // Inline function 'kotlin.mod' call
      var other_0 = new Long(1000000000, 0);
      var r = nanosecondAdjustment.rem_bsnl9o_k$(other_0);
      var nos = r.plus_r93sks_k$(other_0.and_4spn93_k$(r.xor_qzz94j_k$(other_0).and_4spn93_k$(r.or_v7fvkl_k$(r.unaryMinus_6uz0qp_k$())).shr_9fl3wl_k$(63))).toInt_1tsl84_k$();
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.fromEpochSeconds.<anonymous>' call
      var tmp$ret$3 = Instant.ofEpochSecond(secs.toDouble_ygsx0s_k$(), nos);
      tmp = new Instant_0(tmp$ret$3);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_1;
        if (!isJodaDateTimeException(e)) {
          tmp_1 = !(e instanceof ArithmeticException);
        } else {
          tmp_1 = false;
        }
        if (tmp_1)
          throw e;
        tmp_0 = epochSeconds.compareTo_9jj042_k$(new Long(0, 0)) > 0 ? this.MAX_1 : this.MIN_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_11).fromEpochSeconds$default_ryd2jg_k$ = function (epochSeconds, nanosecondAdjustment, $super) {
    nanosecondAdjustment = nanosecondAdjustment === VOID ? new Long(0, 0) : nanosecondAdjustment;
    return $super === VOID ? this.fromEpochSeconds_labkcg_k$(epochSeconds, nanosecondAdjustment) : $super.fromEpochSeconds_labkcg_k$.call(this, epochSeconds, nanosecondAdjustment);
  };
  protoOf(Companion_11).fromEpochSeconds_idu11y_k$ = function (epochSeconds, nanosecondAdjustment) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.fromEpochSeconds.<anonymous>' call
      var tmp$ret$1 = Instant.ofEpochSecond(epochSeconds.toDouble_ygsx0s_k$(), nanosecondAdjustment);
      tmp = new Instant_0(tmp$ret$1);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e))
          throw e;
        tmp_0 = epochSeconds.compareTo_9jj042_k$(new Long(0, 0)) > 0 ? this.MAX_1 : this.MIN_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_11).get_DISTANT_PAST_yzdqbd_k$ = function () {
    return this.DISTANT_PAST_1;
  };
  protoOf(Companion_11).get_DISTANT_FUTURE_gftwmi_k$ = function () {
    return this.DISTANT_FUTURE_1;
  };
  protoOf(Companion_11).get_MIN_za2zu4_k$ = function () {
    return this.MIN_1;
  };
  protoOf(Companion_11).get_MAX_ieaqrm_k$ = function () {
    return this.MAX_1;
  };
  protoOf(Companion_11).serializer_9w0wvi_k$ = function () {
    return InstantIso8601Serializer_getInstance();
  };
  var Companion_instance_11;
  function Companion_getInstance_12() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function Instant_0(value) {
    Companion_getInstance_12();
    this.value_1 = value;
  }
  protoOf(Instant_0).get_value_r9d4id_k$ = function () {
    return this.value_1;
  };
  protoOf(Instant_0).get_epochSeconds_w76ght_k$ = function () {
    return numberToLong(this.value_1.epochSecond());
  };
  protoOf(Instant_0).get_nanosecondsOfSecond_n2ey8j_k$ = function () {
    return numberToInt(this.value_1.nano());
  };
  protoOf(Instant_0).toEpochMilliseconds_82cfls_k$ = function () {
    // Inline function 'kotlin.Long.times' call
    var tmp2 = this.get_epochSeconds_w76ght_k$().times_nfzjiw_k$(toLong(1000));
    // Inline function 'kotlin.Long.plus' call
    var other = this.get_nanosecondsOfSecond_n2ey8j_k$() / 1000000 | 0;
    return tmp2.plus_r93sks_k$(toLong(other));
  };
  protoOf(Instant_0).plus_oeswd1_k$ = function (duration) {
    // Inline function 'kotlin.time.Duration.toComponents' call
    var tmp1 = _Duration___get_inWholeSeconds__impl__hpy7b3(duration);
    var nanoseconds = _Duration___get_nanosecondsComponent__impl__nh19kq(duration);
    var tmp;
    try {
      tmp = new Instant_0(this.plusFix_tht55c_k$(tmp1.toDouble_ygsx0s_k$(), nanoseconds));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e))
          throw e;
        tmp_0 = Duration__isPositive_impl_tvkkt2(duration) ? Companion_getInstance_12().MAX_1 : Companion_getInstance_12().MIN_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).plusFix_tht55c_k$ = function (seconds, nanos) {
    var newSeconds = this.value_1.epochSecond() + seconds;
    var newNanos = this.value_1.nano() + nanos;
    // Inline function 'kotlinx.datetime.jsTry' call
    // Inline function 'kotlinx.datetime.Instant.plusFix.<anonymous>' call
    return Instant.ofEpochSecond(newSeconds, numberToInt(newNanos));
  };
  protoOf(Instant_0).minus_j7epkb_k$ = function (duration) {
    return this.plus_oeswd1_k$(Duration__unaryMinus_impl_x2k1y0(duration));
  };
  protoOf(Instant_0).minus_mev7kl_k$ = function (other) {
    var diff = Duration.between(other.value_1, this.value_1);
    Companion_getInstance();
    // Inline function 'kotlin.time.Companion.seconds' call
    var this_0 = diff.seconds();
    var tmp = toDuration(this_0, DurationUnit_SECONDS_getInstance());
    Companion_getInstance();
    // Inline function 'kotlin.time.Companion.nanoseconds' call
    var this_1 = diff.nano();
    var tmp$ret$1 = toDuration(this_1, DurationUnit_NANOSECONDS_getInstance());
    return Duration__plus_impl_yu9v8f(tmp, tmp$ret$1);
  };
  protoOf(Instant_0).compareTo_rgp57f_k$ = function (other) {
    return this.value_1.compareTo(other.value_1);
  };
  protoOf(Instant_0).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_rgp57f_k$(other instanceof Instant_0 ? other : THROW_CCE());
  };
  protoOf(Instant_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = this.value_1 === other.value_1 || this.value_1.equals(other.value_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).hashCode = function () {
    return this.value_1.hashCode();
  };
  protoOf(Instant_0).toString = function () {
    return this.value_1.toString();
  };
  function isJodaDateTimeParseException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'DateTimeParseException');
  }
  function isJodaDateTimeException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'DateTimeException');
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.MIN_1 = new LocalDate_0(LocalDate.MIN);
    this.MAX_1 = new LocalDate_0(LocalDate.MAX);
  }
  protoOf(Companion_12).parse_18ba6d_k$ = function (input, format) {
    var tmp;
    if (format === Formats_getInstance_0().get_ISO_18jrwk_k$()) {
      var tmp_0;
      try {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.Companion.parse.<anonymous>' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlinx.datetime.Companion.parse.stub_for_inlining' call
        var p0 = LocalDate.parse(toString(input));
        tmp_0 = new LocalDate_0(p0);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          if (isJodaDateTimeParseException(e))
            throw DateTimeFormatException_init_$Create$_1(e);
          throw e;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    } else {
      tmp = format.parse_xovy9i_k$(input);
    }
    return tmp;
  };
  protoOf(Companion_12).parse$default_krgov1_k$ = function (input, format, $super) {
    format = format === VOID ? getIsoDateFormat() : format;
    return $super === VOID ? this.parse_18ba6d_k$(input, format) : $super.parse_18ba6d_k$.call(this, input, format);
  };
  protoOf(Companion_12).parse_pc1q8p_k$ = function (isoString) {
    return this.parse$default_krgov1_k$(isoString);
  };
  protoOf(Companion_12).get_MIN_za2zu4_k$ = function () {
    return this.MIN_1;
  };
  protoOf(Companion_12).get_MAX_ieaqrm_k$ = function () {
    return this.MAX_1;
  };
  protoOf(Companion_12).fromEpochDays_msuzxa_k$ = function (epochDays) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.fromEpochDays.<anonymous>' call
      var tmp$ret$1 = LocalDate.ofEpochDay(epochDays);
      tmp = new LocalDate_0(tmp$ret$1);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_12).Format_rqffoz_k$ = function (block) {
    return Companion_getInstance_5().build_o3smjo_k$(block);
  };
  protoOf(Companion_12).serializer_9w0wvi_k$ = function () {
    return LocalDateIso8601Serializer_getInstance();
  };
  var Companion_instance_12;
  function Companion_getInstance_13() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function Formats_0() {
    Formats_instance_0 = this;
    this.ISO_BASIC_1 = get_ISO_DATE_BASIC();
  }
  protoOf(Formats_0).get_ISO_18jrwk_k$ = function () {
    return get_ISO_DATE();
  };
  protoOf(Formats_0).get_ISO_BASIC_3n1nuz_k$ = function () {
    return this.ISO_BASIC_1;
  };
  var Formats_instance_0;
  function Formats_getInstance_0() {
    if (Formats_instance_0 == null)
      new Formats_0();
    return Formats_instance_0;
  }
  function LocalDate_init_$Init$(year, monthNumber, dayOfMonth, $this) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.LocalDate.<init>.<anonymous>' call
      tmp = LocalDate.of(year, monthNumber, dayOfMonth);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    LocalDate_0.call($this, tmp);
    return $this;
  }
  function LocalDate_init_$Create$(year, monthNumber, dayOfMonth) {
    return LocalDate_init_$Init$(year, monthNumber, dayOfMonth, objectCreate(protoOf(LocalDate_0)));
  }
  function LocalDate_init_$Init$_0(year, month, dayOfMonth, $this) {
    LocalDate_init_$Init$(year, get_number(month), dayOfMonth, $this);
    return $this;
  }
  function LocalDate_init_$Create$_0(year, month, dayOfMonth) {
    return LocalDate_init_$Init$_0(year, month, dayOfMonth, objectCreate(protoOf(LocalDate_0)));
  }
  function LocalDate_0(value) {
    Companion_getInstance_13();
    this.value_1 = value;
  }
  protoOf(LocalDate_0).get_value_r9d4id_k$ = function () {
    return this.value_1;
  };
  protoOf(LocalDate_0).get_year_woy26e_k$ = function () {
    return this.value_1.year();
  };
  protoOf(LocalDate_0).get_monthNumber_nb47ls_k$ = function () {
    return this.value_1.monthValue();
  };
  protoOf(LocalDate_0).get_month_ivc8d3_k$ = function () {
    return toMonth(this.value_1.month());
  };
  protoOf(LocalDate_0).get_dayOfMonth_vblo3a_k$ = function () {
    return this.value_1.dayOfMonth();
  };
  protoOf(LocalDate_0).get_dayOfWeek_3kfgci_k$ = function () {
    return toDayOfWeek(this.value_1.dayOfWeek());
  };
  protoOf(LocalDate_0).get_dayOfYear_3ke6gp_k$ = function () {
    return this.value_1.dayOfYear();
  };
  protoOf(LocalDate_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDate_0) {
        tmp_0 = this.value_1 === other.value_1 || this.value_1.equals(other.value_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDate_0).hashCode = function () {
    return this.value_1.hashCode();
  };
  protoOf(LocalDate_0).toString = function () {
    return this.value_1.toString();
  };
  protoOf(LocalDate_0).compareTo_phv9sr_k$ = function (other) {
    return this.value_1.compareTo(other.value_1);
  };
  protoOf(LocalDate_0).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_phv9sr_k$(other instanceof LocalDate_0 ? other : THROW_CCE());
  };
  protoOf(LocalDate_0).toEpochDays_tp9eth_k$ = function () {
    return numberToInt(this.value_1.toEpochDay());
  };
  function LocalDateTime_init_$Init$(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond, $this) {
    second = second === VOID ? 0 : second;
    nanosecond = nanosecond === VOID ? 0 : nanosecond;
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.LocalDateTime.<init>.<anonymous>' call
      tmp = LocalDateTime.of(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    LocalDateTime_0.call($this, tmp);
    return $this;
  }
  function LocalDateTime_init_$Create$(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond) {
    return LocalDateTime_init_$Init$(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond, objectCreate(protoOf(LocalDateTime_0)));
  }
  function LocalDateTime_init_$Init$_0(year, month, dayOfMonth, hour, minute, second, nanosecond, $this) {
    second = second === VOID ? 0 : second;
    nanosecond = nanosecond === VOID ? 0 : nanosecond;
    LocalDateTime_init_$Init$(year, get_number(month), dayOfMonth, hour, minute, second, nanosecond, $this);
    return $this;
  }
  function LocalDateTime_init_$Create$_0(year, month, dayOfMonth, hour, minute, second, nanosecond) {
    return LocalDateTime_init_$Init$_0(year, month, dayOfMonth, hour, minute, second, nanosecond, objectCreate(protoOf(LocalDateTime_0)));
  }
  function LocalDateTime_init_$Init$_1(date, time, $this) {
    // Inline function 'kotlinx.datetime.jsTry' call
    // Inline function 'kotlinx.datetime.LocalDateTime.<init>.<anonymous>' call
    var tmp$ret$1 = LocalDateTime.of(date.get_value_r9d4id_k$(), time.get_value_r9d4id_k$());
    LocalDateTime_0.call($this, tmp$ret$1);
    return $this;
  }
  function LocalDateTime_init_$Create$_1(date, time) {
    return LocalDateTime_init_$Init$_1(date, time, objectCreate(protoOf(LocalDateTime_0)));
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.MIN_1 = new LocalDateTime_0(LocalDateTime.MIN);
    this.MAX_1 = new LocalDateTime_0(LocalDateTime.MAX);
  }
  protoOf(Companion_13).parse_bq7xns_k$ = function (input, format) {
    var tmp;
    if (format === Formats_getInstance_1().ISO_1) {
      var tmp_0;
      try {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.Companion.parse.<anonymous>' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlinx.datetime.Companion.parse.stub_for_inlining' call
        var p0 = LocalDateTime.parse(toString(input));
        tmp_0 = new LocalDateTime_0(p0);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          if (isJodaDateTimeParseException(e))
            throw DateTimeFormatException_init_$Create$_1(e);
          throw e;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    } else {
      tmp = format.parse_xovy9i_k$(input);
    }
    return tmp;
  };
  protoOf(Companion_13).parse$default_rpbnp3_k$ = function (input, format, $super) {
    format = format === VOID ? getIsoDateTimeFormat() : format;
    return $super === VOID ? this.parse_bq7xns_k$(input, format) : $super.parse_bq7xns_k$.call(this, input, format);
  };
  protoOf(Companion_13).parse_pc1q8p_k$ = function (isoString) {
    return this.parse$default_rpbnp3_k$(isoString);
  };
  protoOf(Companion_13).get_MIN_za2zu4_k$ = function () {
    return this.MIN_1;
  };
  protoOf(Companion_13).get_MAX_ieaqrm_k$ = function () {
    return this.MAX_1;
  };
  protoOf(Companion_13).Format_52y7ju_k$ = function (builder) {
    return Companion_getInstance_6().build_jyqq35_k$(builder);
  };
  protoOf(Companion_13).serializer_9w0wvi_k$ = function () {
    return LocalDateTimeIso8601Serializer_getInstance();
  };
  var Companion_instance_13;
  function Companion_getInstance_14() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function Formats_1() {
    Formats_instance_1 = this;
    this.ISO_1 = get_ISO_DATETIME();
  }
  protoOf(Formats_1).get_ISO_18jrwk_k$ = function () {
    return this.ISO_1;
  };
  var Formats_instance_1;
  function Formats_getInstance_1() {
    if (Formats_instance_1 == null)
      new Formats_1();
    return Formats_instance_1;
  }
  function LocalDateTime_0(value) {
    Companion_getInstance_14();
    this.value_1 = value;
  }
  protoOf(LocalDateTime_0).get_value_r9d4id_k$ = function () {
    return this.value_1;
  };
  protoOf(LocalDateTime_0).get_year_woy26e_k$ = function () {
    return this.value_1.year();
  };
  protoOf(LocalDateTime_0).get_monthNumber_nb47ls_k$ = function () {
    return this.value_1.monthValue();
  };
  protoOf(LocalDateTime_0).get_month_ivc8d3_k$ = function () {
    return toMonth(this.value_1.month());
  };
  protoOf(LocalDateTime_0).get_dayOfMonth_vblo3a_k$ = function () {
    return this.value_1.dayOfMonth();
  };
  protoOf(LocalDateTime_0).get_dayOfWeek_3kfgci_k$ = function () {
    return toDayOfWeek(this.value_1.dayOfWeek());
  };
  protoOf(LocalDateTime_0).get_dayOfYear_3ke6gp_k$ = function () {
    return this.value_1.dayOfYear();
  };
  protoOf(LocalDateTime_0).get_hour_wonfal_k$ = function () {
    return this.value_1.hour();
  };
  protoOf(LocalDateTime_0).get_minute_gnc10d_k$ = function () {
    return this.value_1.minute();
  };
  protoOf(LocalDateTime_0).get_second_jf7fjx_k$ = function () {
    return this.value_1.second();
  };
  protoOf(LocalDateTime_0).get_nanosecond_fws9td_k$ = function () {
    return numberToInt(this.value_1.nano());
  };
  protoOf(LocalDateTime_0).get_date_wokkxj_k$ = function () {
    return new LocalDate_0(this.value_1.toLocalDate());
  };
  protoOf(LocalDateTime_0).get_time_wouyhi_k$ = function () {
    return new LocalTime_0(this.value_1.toLocalTime());
  };
  protoOf(LocalDateTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDateTime_0) {
        tmp_0 = this.value_1 === other.value_1 || this.value_1.equals(other.value_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDateTime_0).hashCode = function () {
    return this.value_1.hashCode();
  };
  protoOf(LocalDateTime_0).toString = function () {
    return this.value_1.toString();
  };
  protoOf(LocalDateTime_0).compareTo_fh2md_k$ = function (other) {
    return this.value_1.compareTo(other.value_1);
  };
  protoOf(LocalDateTime_0).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_fh2md_k$(other instanceof LocalDateTime_0 ? other : THROW_CCE());
  };
  function LocalTime_init_$Init$(hour, minute, second, nanosecond, $this) {
    second = second === VOID ? 0 : second;
    nanosecond = nanosecond === VOID ? 0 : nanosecond;
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.LocalTime.<init>.<anonymous>' call
      tmp = LocalTime.of(hour, minute, second, nanosecond);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    LocalTime_0.call($this, tmp);
    return $this;
  }
  function LocalTime_init_$Create$(hour, minute, second, nanosecond) {
    return LocalTime_init_$Init$(hour, minute, second, nanosecond, objectCreate(protoOf(LocalTime_0)));
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.MIN_1 = new LocalTime_0(LocalTime.MIN);
    this.MAX_1 = new LocalTime_0(LocalTime.MAX);
  }
  protoOf(Companion_14).parse_keg146_k$ = function (input, format) {
    var tmp;
    if (format === Formats_getInstance_2().get_ISO_18jrwk_k$()) {
      var tmp_0;
      try {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.Companion.parse.<anonymous>' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlinx.datetime.Companion.parse.stub_for_inlining' call
        var p0 = LocalTime.parse(toString(input));
        tmp_0 = new LocalTime_0(p0);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          if (isJodaDateTimeParseException(e))
            throw DateTimeFormatException_init_$Create$_1(e);
          throw e;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    } else {
      tmp = format.parse_xovy9i_k$(input);
    }
    return tmp;
  };
  protoOf(Companion_14).parse$default_id2jrv_k$ = function (input, format, $super) {
    format = format === VOID ? getIsoTimeFormat() : format;
    return $super === VOID ? this.parse_keg146_k$(input, format) : $super.parse_keg146_k$.call(this, input, format);
  };
  protoOf(Companion_14).parse_pc1q8p_k$ = function (isoString) {
    return this.parse$default_id2jrv_k$(isoString);
  };
  protoOf(Companion_14).fromSecondOfDay_ahegcx_k$ = function (secondOfDay) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.fromSecondOfDay.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.Companion.fromSecondOfDay.stub_for_inlining' call
      var p0 = LocalTime.ofSecondOfDay(secondOfDay, 0);
      tmp = new LocalTime_0(p0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        throw IllegalArgumentException_init_$Create$_0(e);
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_14).fromMillisecondOfDay_pjhtva_k$ = function (millisecondOfDay) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.fromMillisecondOfDay.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.Companion.fromMillisecondOfDay.stub_for_inlining' call
      var p0 = LocalTime.ofNanoOfDay(millisecondOfDay * 1000000.0);
      tmp = new LocalTime_0(p0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        throw IllegalArgumentException_init_$Create$_0(e);
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_14).fromNanosecondOfDay_iksazp_k$ = function (nanosecondOfDay) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.fromNanosecondOfDay.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.Companion.fromNanosecondOfDay.stub_for_inlining' call
      var p0 = LocalTime.ofNanoOfDay(nanosecondOfDay.toDouble_ygsx0s_k$());
      tmp = new LocalTime_0(p0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        throw IllegalArgumentException_init_$Create$_0(e);
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_14).get_MIN_za2zu4_k$ = function () {
    return this.MIN_1;
  };
  protoOf(Companion_14).get_MAX_ieaqrm_k$ = function () {
    return this.MAX_1;
  };
  protoOf(Companion_14).Format_tnsr8s_k$ = function (builder) {
    return Companion_getInstance_7().build_agwrib_k$(builder);
  };
  protoOf(Companion_14).serializer_9w0wvi_k$ = function () {
    return LocalTimeIso8601Serializer_getInstance();
  };
  var Companion_instance_14;
  function Companion_getInstance_15() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function Formats_2() {
    Formats_instance_2 = this;
  }
  protoOf(Formats_2).get_ISO_18jrwk_k$ = function () {
    return get_ISO_TIME();
  };
  var Formats_instance_2;
  function Formats_getInstance_2() {
    if (Formats_instance_2 == null)
      new Formats_2();
    return Formats_instance_2;
  }
  function LocalTime_0(value) {
    Companion_getInstance_15();
    this.value_1 = value;
  }
  protoOf(LocalTime_0).get_value_r9d4id_k$ = function () {
    return this.value_1;
  };
  protoOf(LocalTime_0).get_hour_wonfal_k$ = function () {
    return this.value_1.hour();
  };
  protoOf(LocalTime_0).get_minute_gnc10d_k$ = function () {
    return this.value_1.minute();
  };
  protoOf(LocalTime_0).get_second_jf7fjx_k$ = function () {
    return this.value_1.second();
  };
  protoOf(LocalTime_0).get_nanosecond_fws9td_k$ = function () {
    return numberToInt(this.value_1.nano());
  };
  protoOf(LocalTime_0).toSecondOfDay_a2clsa_k$ = function () {
    return this.value_1.toSecondOfDay();
  };
  protoOf(LocalTime_0).toMillisecondOfDay_936hwh_k$ = function () {
    return numberToInt(this.value_1.toNanoOfDay() / 1000000);
  };
  protoOf(LocalTime_0).toNanosecondOfDay_dywvsy_k$ = function () {
    return numberToLong(this.value_1.toNanoOfDay());
  };
  protoOf(LocalTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalTime_0) {
        tmp_0 = this.value_1 === other.value_1 || this.value_1.equals(other.value_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalTime_0).hashCode = function () {
    return this.value_1.hashCode();
  };
  protoOf(LocalTime_0).toString = function () {
    return this.value_1.toString();
  };
  protoOf(LocalTime_0).compareTo_ax7xad_k$ = function (other) {
    return this.value_1.compareTo(other.value_1);
  };
  protoOf(LocalTime_0).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_ax7xad_k$(other instanceof LocalTime_0 ? other : THROW_CCE());
  };
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function values_2() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'JANUARY':
        return Month_JANUARY_getInstance();
      case 'FEBRUARY':
        return Month_FEBRUARY_getInstance();
      case 'MARCH':
        return Month_MARCH_getInstance();
      case 'APRIL':
        return Month_APRIL_getInstance();
      case 'MAY':
        return Month_MAY_getInstance();
      case 'JUNE':
        return Month_JUNE_getInstance();
      case 'JULY':
        return Month_JULY_getInstance();
      case 'AUGUST':
        return Month_AUGUST_getInstance();
      case 'SEPTEMBER':
        return Month_SEPTEMBER_getInstance();
      case 'OCTOBER':
        return Month_OCTOBER_getInstance();
      case 'NOVEMBER':
        return Month_NOVEMBER_getInstance();
      case 'DECEMBER':
        return Month_DECEMBER_getInstance();
      default:
        Month_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_getInstance();
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month_0('JANUARY', 0);
    Month_FEBRUARY_instance = new Month_0('FEBRUARY', 1);
    Month_MARCH_instance = new Month_0('MARCH', 2);
    Month_APRIL_instance = new Month_0('APRIL', 3);
    Month_MAY_instance = new Month_0('MAY', 4);
    Month_JUNE_instance = new Month_0('JUNE', 5);
    Month_JULY_instance = new Month_0('JULY', 6);
    Month_AUGUST_instance = new Month_0('AUGUST', 7);
    Month_SEPTEMBER_instance = new Month_0('SEPTEMBER', 8);
    Month_OCTOBER_instance = new Month_0('OCTOBER', 9);
    Month_NOVEMBER_instance = new Month_0('NOVEMBER', 10);
    Month_DECEMBER_instance = new Month_0('DECEMBER', 11);
  }
  var $ENTRIES_2;
  function Month_0(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toMonth(_this__u8e3s4) {
    return Month(_this__u8e3s4.value());
  }
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  function toLocalDateTime(_this__u8e3s4, offset) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.toLocalDateTime.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.toLocalDateTime.stub_for_inlining' call
      var p0 = LocalDateTime.ofInstant(_this__u8e3s4.get_value_r9d4id_k$(), offset.get_zoneOffset_je8jnv_k$());
      tmp = new LocalDateTime_0(p0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function ofZone($this, zoneId) {
    var tmp;
    if (zoneId instanceof ZoneOffset) {
      tmp = FixedOffsetTimeZone_init_$Create$(new UtcOffset(zoneId));
    } else {
      if (zoneId.rules().isFixedOffset()) {
        var tmp_0 = zoneId.normalized();
        tmp = new FixedOffsetTimeZone(new UtcOffset(tmp_0 instanceof ZoneOffset ? tmp_0 : THROW_CCE()), zoneId);
      } else {
        tmp = new TimeZone(zoneId);
      }
    }
    return tmp;
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.UTC_1 = asTimeZone(new UtcOffset(ZoneOffset.UTC));
  }
  protoOf(Companion_15).currentSystemDefault_9rduv_k$ = function () {
    return ofZone(this, ZoneId.systemDefault());
  };
  protoOf(Companion_15).get_UTC_18jizp_k$ = function () {
    return this.UTC_1;
  };
  protoOf(Companion_15).of_5gnbr7_k$ = function (zoneId) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.of.<anonymous>' call
      var tmp$ret$1 = ZoneId.of(zoneId);
      tmp = ofZone(this, tmp$ret$1);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalTimeZoneException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_15).get_availableZoneIds_kceyfo_k$ = function () {
    return getAvailableZoneIdsSet();
  };
  protoOf(Companion_15).serializer_9w0wvi_k$ = function () {
    return TimeZoneSerializer_getInstance();
  };
  var Companion_instance_15;
  function Companion_getInstance_16() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function TimeZone(zoneId) {
    Companion_getInstance_16();
    this.zoneId_1 = zoneId;
  }
  protoOf(TimeZone).get_zoneId_6sbnu5_k$ = function () {
    return this.zoneId_1;
  };
  protoOf(TimeZone).get_id_kntnx8_k$ = function () {
    return this.zoneId_1.id();
  };
  protoOf(TimeZone).toLocalDateTime_szu0i4_k$ = function (_this__u8e3s4) {
    return toLocalDateTime_0(_this__u8e3s4, this);
  };
  protoOf(TimeZone).toInstant_o48wgh_k$ = function (_this__u8e3s4) {
    return toInstant(_this__u8e3s4, this);
  };
  protoOf(TimeZone).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeZone) {
        tmp_0 = this.zoneId_1 === other.zoneId_1 || this.zoneId_1.equals(other.zoneId_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeZone).hashCode = function () {
    return this.zoneId_1.hashCode();
  };
  protoOf(TimeZone).toString = function () {
    return this.zoneId_1.toString();
  };
  function toLocalDateTime_0(_this__u8e3s4, timeZone) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.toLocalDateTime.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.toLocalDateTime.stub_for_inlining' call
      var p0 = LocalDateTime.ofInstant(_this__u8e3s4.get_value_r9d4id_k$(), timeZone.zoneId_1);
      tmp = new LocalDateTime_0(p0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function toInstant(_this__u8e3s4, timeZone) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.datetime.toInstant.stub_for_inlining' call
    var p0 = _this__u8e3s4.get_value_r9d4id_k$().atZone(timeZone.zoneId_1).toInstant();
    return new Instant_0(p0);
  }
  function FixedOffsetTimeZone_init_$Init$(offset, $this) {
    FixedOffsetTimeZone.call($this, offset, offset.get_zoneOffset_je8jnv_k$());
    return $this;
  }
  function FixedOffsetTimeZone_init_$Create$(offset) {
    return FixedOffsetTimeZone_init_$Init$(offset, objectCreate(protoOf(FixedOffsetTimeZone)));
  }
  function Companion_16() {
    Companion_instance_16 = this;
  }
  protoOf(Companion_16).serializer_9w0wvi_k$ = function () {
    return FixedOffsetTimeZoneSerializer_getInstance();
  };
  var Companion_instance_16;
  function Companion_getInstance_17() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function FixedOffsetTimeZone(offset, zoneId) {
    Companion_getInstance_17();
    TimeZone.call(this, zoneId);
    this.offset_1 = offset;
  }
  protoOf(FixedOffsetTimeZone).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(FixedOffsetTimeZone).get_totalSeconds_oq5924_k$ = function () {
    return this.offset_1.get_totalSeconds_oq5924_k$();
  };
  function get_isoFormat() {
    _init_properties_UtcOffset_kt__93zod7();
    var tmp0 = isoFormat$delegate;
    // Inline function 'kotlin.getValue' call
    isoFormat$factory();
    return tmp0.get_value_j01efc_k$();
  }
  var isoFormat$delegate;
  function get_isoBasicFormat() {
    _init_properties_UtcOffset_kt__93zod7();
    var tmp0 = isoBasicFormat$delegate;
    // Inline function 'kotlin.getValue' call
    isoBasicFormat$factory();
    return tmp0.get_value_j01efc_k$();
  }
  var isoBasicFormat$delegate;
  function get_fourDigitsFormat() {
    _init_properties_UtcOffset_kt__93zod7();
    var tmp0 = fourDigitsFormat$delegate;
    // Inline function 'kotlin.getValue' call
    fourDigitsFormat$factory();
    return tmp0.get_value_j01efc_k$();
  }
  var fourDigitsFormat$delegate;
  function Companion_17() {
    Companion_instance_17 = this;
    this.ZERO_1 = new UtcOffset(ZoneOffset.UTC);
  }
  protoOf(Companion_17).get_ZERO_wodlgx_k$ = function () {
    return this.ZERO_1;
  };
  protoOf(Companion_17).parse_i4pxzt_k$ = function (input, format) {
    return format === Formats_getInstance_3().get_ISO_18jrwk_k$() ? parseWithFormat(input, get_isoFormat()) : format === Formats_getInstance_3().get_ISO_BASIC_3n1nuz_k$() ? parseWithFormat(input, get_isoBasicFormat()) : format === Formats_getInstance_3().get_FOUR_DIGITS_7a8eh6_k$() ? parseWithFormat(input, get_fourDigitsFormat()) : format.parse_xovy9i_k$(input);
  };
  protoOf(Companion_17).parse$default_j5dbmh_k$ = function (input, format, $super) {
    format = format === VOID ? getIsoUtcOffsetFormat() : format;
    return $super === VOID ? this.parse_i4pxzt_k$(input, format) : $super.parse_i4pxzt_k$.call(this, input, format);
  };
  protoOf(Companion_17).parse_pc1q8p_k$ = function (offsetString) {
    return this.parse$default_j5dbmh_k$(offsetString);
  };
  protoOf(Companion_17).Format_lu8ljq_k$ = function (block) {
    return Companion_getInstance_9().build_dzztnl_k$(block);
  };
  protoOf(Companion_17).serializer_9w0wvi_k$ = function () {
    return UtcOffsetSerializer_getInstance();
  };
  var Companion_instance_17;
  function Companion_getInstance_18() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function Formats_3() {
    Formats_instance_3 = this;
  }
  protoOf(Formats_3).get_ISO_18jrwk_k$ = function () {
    return get_ISO_OFFSET();
  };
  protoOf(Formats_3).get_ISO_BASIC_3n1nuz_k$ = function () {
    return get_ISO_OFFSET_BASIC();
  };
  protoOf(Formats_3).get_FOUR_DIGITS_7a8eh6_k$ = function () {
    return get_FOUR_DIGIT_OFFSET();
  };
  var Formats_instance_3;
  function Formats_getInstance_3() {
    if (Formats_instance_3 == null)
      new Formats_3();
    return Formats_instance_3;
  }
  function UtcOffset(zoneOffset) {
    Companion_getInstance_18();
    this.zoneOffset_1 = zoneOffset;
  }
  protoOf(UtcOffset).get_zoneOffset_je8jnv_k$ = function () {
    return this.zoneOffset_1;
  };
  protoOf(UtcOffset).get_totalSeconds_oq5924_k$ = function () {
    return this.zoneOffset_1.totalSeconds();
  };
  protoOf(UtcOffset).hashCode = function () {
    return this.zoneOffset_1.hashCode();
  };
  protoOf(UtcOffset).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffset) {
      tmp = this.zoneOffset_1 === other.zoneOffset_1 || this.zoneOffset_1.equals(other.zoneOffset_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffset).toString = function () {
    return this.zoneOffset_1.toString();
  };
  function UtcOffset_0(hours, minutes, seconds) {
    hours = hours === VOID ? null : hours;
    minutes = minutes === VOID ? null : minutes;
    seconds = seconds === VOID ? null : seconds;
    _init_properties_UtcOffset_kt__93zod7();
    var tmp;
    try {
      var tmp_0;
      if (!(hours == null)) {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.UtcOffset.<anonymous>' call
        var tmp_1 = ZoneOffset;
        var tmp_2 = minutes == null ? 0 : minutes;
        var tmp$ret$1 = tmp_1.ofHoursMinutesSeconds(hours, tmp_2, seconds == null ? 0 : seconds);
        tmp_0 = new UtcOffset(tmp$ret$1);
      } else if (!(minutes == null)) {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.UtcOffset.<anonymous>' call
        var tmp_3 = ZoneOffset;
        var tmp_4 = minutes / 60 | 0;
        var tmp_5 = minutes % 60 | 0;
        var tmp$ret$3 = tmp_3.ofHoursMinutesSeconds(tmp_4, tmp_5, seconds == null ? 0 : seconds);
        tmp_0 = new UtcOffset(tmp$ret$3);
      } else {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.UtcOffset.<anonymous>' call
        var tmp_6 = ZoneOffset;
        var tmp$ret$5 = tmp_6.ofTotalSeconds(seconds == null ? 0 : seconds);
        tmp_0 = new UtcOffset(tmp$ret$5);
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_7;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_8;
        if (isJodaDateTimeException(e)) {
          throw IllegalArgumentException_init_$Create$_0(e);
        } else {
          throw e;
        }
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function parseWithFormat(input, format) {
    _init_properties_UtcOffset_kt__93zod7();
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.parseWithFormat.<anonymous>' call
      tmp = format.parse(toString(input)).get(ChronoField.OFFSET_SECONDS);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_$Create$_1(e);
        if (isJodaDateTimeException(e))
          throw DateTimeFormatException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return UtcOffset_0(VOID, VOID, tmp);
  }
  function isoFormat$delegate$lambda() {
    _init_properties_UtcOffset_kt__93zod7();
    return (new DateTimeFormatterBuilder()).parseCaseInsensitive().appendOffsetId().toFormatter(ResolverStyle.STRICT);
  }
  function isoBasicFormat$delegate$lambda() {
    _init_properties_UtcOffset_kt__93zod7();
    return (new DateTimeFormatterBuilder()).parseCaseInsensitive().appendOffset('+HHmmss', 'Z').toFormatter(ResolverStyle.STRICT);
  }
  function fourDigitsFormat$delegate$lambda() {
    _init_properties_UtcOffset_kt__93zod7();
    return (new DateTimeFormatterBuilder()).parseCaseInsensitive().appendOffset('+HHMM', '+0000').toFormatter(ResolverStyle.STRICT);
  }
  function isoFormat$factory() {
    return getPropertyCallableRef('isoFormat', 0, KProperty0, function () {
      return get_isoFormat();
    }, null);
  }
  function isoBasicFormat$factory() {
    return getPropertyCallableRef('isoBasicFormat', 0, KProperty0, function () {
      return get_isoBasicFormat();
    }, null);
  }
  function fourDigitsFormat$factory() {
    return getPropertyCallableRef('fourDigitsFormat', 0, KProperty0, function () {
      return get_fourDigitsFormat();
    }, null);
  }
  var properties_initialized_UtcOffset_kt_4gxffr;
  function _init_properties_UtcOffset_kt__93zod7() {
    if (!properties_initialized_UtcOffset_kt_4gxffr) {
      properties_initialized_UtcOffset_kt_4gxffr = true;
      isoFormat$delegate = lazy(isoFormat$delegate$lambda);
      isoBasicFormat$delegate = lazy(isoBasicFormat$delegate$lambda);
      fourDigitsFormat$delegate = lazy(fourDigitsFormat$delegate$lambda);
    }
  }
  function safeMultiply(a, b) {
    if (b.equals(new Long(-1, -1))) {
      if (a.equals(new Long(0, -2147483648))) {
        throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
      }
      return a.unaryMinus_6uz0qp_k$();
    } else if (b.equals(new Long(0, 0)))
      return new Long(0, 0);
    else if (b.equals(new Long(1, 0)))
      return a;
    var total = a.times_nfzjiw_k$(b);
    if (!total.div_jun7gj_k$(b).equals(a)) {
      throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
    }
    return total;
  }
  function safeAdd(a, b) {
    var sum = a.plus_r93sks_k$(b);
    if (a.xor_qzz94j_k$(sum).compareTo_9jj042_k$(new Long(0, 0)) < 0 && a.xor_qzz94j_k$(b).compareTo_9jj042_k$(new Long(0, 0)) >= 0) {
      throw ArithmeticException_init_$Create$('Addition overflows a long: ' + a.toString() + ' + ' + b.toString());
    }
    return sum;
  }
  function hasJsExceptionName(_this__u8e3s4, name) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == name;
  }
  function getAvailableZoneIdsSet() {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = ZoneId.getAvailableZoneIds();
    return toSet_0(tmp$ret$1);
  }
  //region block: post-declaration
  protoOf(Builder).appendAlternativeParsingImpl_9hljk3_k$ = appendAlternativeParsingImpl;
  protoOf(Builder).appendOptionalImpl_725ywl_k$ = appendOptionalImpl;
  protoOf(Builder).chars_pe6iqb_k$ = chars;
  protoOf(Builder).build_1k0s4u_k$ = build;
  protoOf(Builder).addFormatStructureForDate_t2v9hh_k$ = addFormatStructureForDate;
  protoOf(Builder).addFormatStructureForTime_h3r7lv_k$ = addFormatStructureForTime;
  protoOf(Builder).dateTime_q9thih_k$ = dateTime;
  protoOf(Builder).year_8xsdsn_k$ = year;
  protoOf(Builder).year$default_562wrd_k$ = year$default;
  protoOf(Builder).yearTwoDigits_3qj73h_k$ = yearTwoDigits;
  protoOf(Builder).monthNumber_vowj11_k$ = monthNumber;
  protoOf(Builder).monthNumber$default_3p5p8b_k$ = monthNumber$default;
  protoOf(Builder).monthName_asbkgr_k$ = monthName;
  protoOf(Builder).dayOfMonth_xcq6p3_k$ = dayOfMonth;
  protoOf(Builder).dayOfMonth$default_hpz3yh_k$ = dayOfMonth$default;
  protoOf(Builder).dayOfWeek_tn8lxa_k$ = dayOfWeek;
  protoOf(Builder).date_aq11yp_k$ = date;
  protoOf(Builder).hour_8zk8ds_k$ = hour;
  protoOf(Builder).hour$default_sexqwx_k$ = hour$default;
  protoOf(Builder).amPmHour_pqhb5l_k$ = amPmHour;
  protoOf(Builder).amPmHour$default_jl1w4q_k$ = amPmHour$default;
  protoOf(Builder).amPmMarker_x3f1xv_k$ = amPmMarker;
  protoOf(Builder).minute_n70fvk_k$ = minute;
  protoOf(Builder).minute$default_g584a9_k$ = minute$default;
  protoOf(Builder).second_9gil1c_k$ = second;
  protoOf(Builder).second$default_h6j21d_k$ = second$default;
  protoOf(Builder).secondFraction_6m5e86_k$ = secondFraction_0;
  protoOf(Builder).secondFraction$default_94vkzq_k$ = secondFraction$default;
  protoOf(Builder).secondFraction_ezpdma_k$ = secondFraction;
  protoOf(Builder).time_eev9o3_k$ = time;
  protoOf(Builder).offsetHours_ci3yns_k$ = offsetHours;
  protoOf(Builder).offsetHours$default_2ga4wd_k$ = offsetHours$default;
  protoOf(Builder).offsetMinutesOfHour_jd2q5v_k$ = offsetMinutesOfHour;
  protoOf(Builder).offsetMinutesOfHour$default_3itngo_k$ = offsetMinutesOfHour$default;
  protoOf(Builder).offsetSecondsOfMinute_vkij2b_k$ = offsetSecondsOfMinute;
  protoOf(Builder).offsetSecondsOfMinute$default_fqi77c_k$ = offsetSecondsOfMinute$default;
  protoOf(Builder).offset_8ge9gu_k$ = offset;
  protoOf(Builder_0).appendAlternativeParsingImpl_9hljk3_k$ = appendAlternativeParsingImpl;
  protoOf(Builder_0).appendOptionalImpl_725ywl_k$ = appendOptionalImpl;
  protoOf(Builder_0).chars_pe6iqb_k$ = chars;
  protoOf(Builder_0).build_1k0s4u_k$ = build;
  protoOf(Builder_0).year_8xsdsn_k$ = year;
  protoOf(Builder_0).year$default_562wrd_k$ = year$default;
  protoOf(Builder_0).yearTwoDigits_3qj73h_k$ = yearTwoDigits;
  protoOf(Builder_0).monthNumber_vowj11_k$ = monthNumber;
  protoOf(Builder_0).monthNumber$default_3p5p8b_k$ = monthNumber$default;
  protoOf(Builder_0).monthName_asbkgr_k$ = monthName;
  protoOf(Builder_0).dayOfMonth_xcq6p3_k$ = dayOfMonth;
  protoOf(Builder_0).dayOfMonth$default_hpz3yh_k$ = dayOfMonth$default;
  protoOf(Builder_0).dayOfWeek_tn8lxa_k$ = dayOfWeek;
  protoOf(Builder_0).date_aq11yp_k$ = date;
  protoOf(Builder_1).appendAlternativeParsingImpl_9hljk3_k$ = appendAlternativeParsingImpl;
  protoOf(Builder_1).appendOptionalImpl_725ywl_k$ = appendOptionalImpl;
  protoOf(Builder_1).chars_pe6iqb_k$ = chars;
  protoOf(Builder_1).build_1k0s4u_k$ = build;
  protoOf(Builder_1).addFormatStructureForDate_t2v9hh_k$ = addFormatStructureForDate;
  protoOf(Builder_1).addFormatStructureForTime_h3r7lv_k$ = addFormatStructureForTime;
  protoOf(Builder_1).dateTime_q9thih_k$ = dateTime;
  protoOf(Builder_1).year_8xsdsn_k$ = year;
  protoOf(Builder_1).year$default_562wrd_k$ = year$default;
  protoOf(Builder_1).yearTwoDigits_3qj73h_k$ = yearTwoDigits;
  protoOf(Builder_1).monthNumber_vowj11_k$ = monthNumber;
  protoOf(Builder_1).monthNumber$default_3p5p8b_k$ = monthNumber$default;
  protoOf(Builder_1).monthName_asbkgr_k$ = monthName;
  protoOf(Builder_1).dayOfMonth_xcq6p3_k$ = dayOfMonth;
  protoOf(Builder_1).dayOfMonth$default_hpz3yh_k$ = dayOfMonth$default;
  protoOf(Builder_1).dayOfWeek_tn8lxa_k$ = dayOfWeek;
  protoOf(Builder_1).date_aq11yp_k$ = date;
  protoOf(Builder_1).hour_8zk8ds_k$ = hour;
  protoOf(Builder_1).hour$default_sexqwx_k$ = hour$default;
  protoOf(Builder_1).amPmHour_pqhb5l_k$ = amPmHour;
  protoOf(Builder_1).amPmHour$default_jl1w4q_k$ = amPmHour$default;
  protoOf(Builder_1).amPmMarker_x3f1xv_k$ = amPmMarker;
  protoOf(Builder_1).minute_n70fvk_k$ = minute;
  protoOf(Builder_1).minute$default_g584a9_k$ = minute$default;
  protoOf(Builder_1).second_9gil1c_k$ = second;
  protoOf(Builder_1).second$default_h6j21d_k$ = second$default;
  protoOf(Builder_1).secondFraction_6m5e86_k$ = secondFraction_0;
  protoOf(Builder_1).secondFraction$default_94vkzq_k$ = secondFraction$default;
  protoOf(Builder_1).secondFraction_ezpdma_k$ = secondFraction;
  protoOf(Builder_1).time_eev9o3_k$ = time;
  protoOf(IncompleteLocalTime).set_fractionOfSecond_ixjooe_k$ = set_fractionOfSecond;
  protoOf(IncompleteLocalTime).get_fractionOfSecond_3ubmju_k$ = get_fractionOfSecond;
  protoOf(Builder_2).appendAlternativeParsingImpl_9hljk3_k$ = appendAlternativeParsingImpl;
  protoOf(Builder_2).appendOptionalImpl_725ywl_k$ = appendOptionalImpl;
  protoOf(Builder_2).chars_pe6iqb_k$ = chars;
  protoOf(Builder_2).build_1k0s4u_k$ = build;
  protoOf(Builder_2).hour_8zk8ds_k$ = hour;
  protoOf(Builder_2).hour$default_sexqwx_k$ = hour$default;
  protoOf(Builder_2).amPmHour_pqhb5l_k$ = amPmHour;
  protoOf(Builder_2).amPmHour$default_jl1w4q_k$ = amPmHour$default;
  protoOf(Builder_2).amPmMarker_x3f1xv_k$ = amPmMarker;
  protoOf(Builder_2).minute_n70fvk_k$ = minute;
  protoOf(Builder_2).minute$default_g584a9_k$ = minute$default;
  protoOf(Builder_2).second_9gil1c_k$ = second;
  protoOf(Builder_2).second$default_h6j21d_k$ = second$default;
  protoOf(Builder_2).secondFraction_6m5e86_k$ = secondFraction_0;
  protoOf(Builder_2).secondFraction$default_94vkzq_k$ = secondFraction$default;
  protoOf(Builder_2).secondFraction_ezpdma_k$ = secondFraction;
  protoOf(Builder_2).time_eev9o3_k$ = time;
  protoOf(Builder_3).appendAlternativeParsingImpl_9hljk3_k$ = appendAlternativeParsingImpl;
  protoOf(Builder_3).appendOptionalImpl_725ywl_k$ = appendOptionalImpl;
  protoOf(Builder_3).chars_pe6iqb_k$ = chars;
  protoOf(Builder_3).build_1k0s4u_k$ = build;
  protoOf(Builder_3).offsetHours_ci3yns_k$ = offsetHours;
  protoOf(Builder_3).offsetHours$default_2ga4wd_k$ = offsetHours$default;
  protoOf(Builder_3).offsetMinutesOfHour_jd2q5v_k$ = offsetMinutesOfHour;
  protoOf(Builder_3).offsetMinutesOfHour$default_3itngo_k$ = offsetMinutesOfHour$default;
  protoOf(Builder_3).offsetSecondsOfMinute_vkij2b_k$ = offsetSecondsOfMinute;
  protoOf(Builder_3).offsetSecondsOfMinute$default_fqi77c_k$ = offsetSecondsOfMinute$default;
  protoOf(Builder_3).offset_8ge9gu_k$ = offset;
  protoOf(PropertyAccessor).getterNotNull_rjcshh_k$ = getterNotNull;
  protoOf(SpacePaddedFormatter).format$default_fwaxfk_k$ = format$default;
  protoOf(SignedFormatter).format$default_fwaxfk_k$ = format$default;
  protoOf(ConditionalFormatter).format$default_fwaxfk_k$ = format$default;
  protoOf(ConcatenatedFormatter).format$default_fwaxfk_k$ = format$default;
  protoOf(SignedIntFormatterStructure).format$default_fwaxfk_k$ = format$default;
  protoOf(ReducedIntFormatterStructure).format$default_fwaxfk_k$ = format$default;
  protoOf(UnsignedIntFormatterStructure).format$default_fwaxfk_k$ = format$default;
  protoOf(StringFormatterStructure).format$default_fwaxfk_k$ = format$default;
  protoOf(DecimalFractionFormatterStructure).format$default_fwaxfk_k$ = format$default;
  protoOf(ConstantStringFormatterStructure).format$default_fwaxfk_k$ = format$default;
  //endregion
  //region block: init
  DISTANT_PAST_SECONDS = new Long(-931914497, -750);
  DISTANT_FUTURE_SECONDS = new Long(1151527680, 720);
  CODE_INDENT = '    ';
  YEAR_OF_ERA_COMMENT = ' /** TODO: the original format had an `y` directive, so the behavior is different on years earlier than 1 AD. See the [kotlinx.datetime.format.byUnicodePattern] documentation for details. */';
  NANOS_PER_MILLI = 1000000;
  SECONDS_PER_10000_YEARS = new Long(2036907392, 73);
  SECONDS_PER_DAY = 86400;
  MILLIS_PER_ONE = 1000;
  NANOS_PER_ONE = 1000000000;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LocalTime_init_$Create$;
  _.$_$.b = System_getInstance;
  _.$_$.c = Companion_getInstance_16;
  _.$_$.d = toLocalDateTime_0;
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime.js.map
