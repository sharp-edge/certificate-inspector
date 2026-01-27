package com.sarmad.certinspector.util

import java.util.Base64

actual fun ByteArray.toBase64(): String {
    return Base64.getEncoder().encodeToString(this)
}