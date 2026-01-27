package com.sarmad.certinspector.util

actual object FingerprintGenerator {
    actual fun sha256(data: ByteArray): String {
        return "N/A"
    }

    actual fun sha1(data: ByteArray): String {
        return "N/A"
    }

    actual fun md5(data: ByteArray): String {
        return "N/A"
    }
}