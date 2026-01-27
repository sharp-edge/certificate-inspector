package com.sarmad.certinspector.util

import android.util.Base64

actual fun ByteArray.toBase64(): String {
    return Base64.encodeToString(this, Base64.NO_WRAP)
}