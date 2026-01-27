-keep class com.sarmad.certinspector.** { *; }
-keep interface com.sarmad.certinspector.** { *; }

-keepattributes Signature
-keepattributes *Annotation*
-keepattributes EnclosingMethod
-keepattributes InnerClasses

-dontwarn java.lang.invoke.StringConcatFactory