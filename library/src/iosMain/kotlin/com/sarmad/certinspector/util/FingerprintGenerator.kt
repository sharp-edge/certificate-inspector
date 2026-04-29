package com.sarmad.certinspector.util

actual object FingerprintGenerator {
    actual fun sha256(data: ByteArray): String {
        throw NotImplementedError("iOS implementation pending")
    }

    actual fun sha1(data: ByteArray): String {
        throw NotImplementedError("iOS implementation pending")
    }

    actual fun md5(data: ByteArray): String {
        throw NotImplementedError("iOS implementation pending")
    }
}
// Last reviewed: 2026-04-29
