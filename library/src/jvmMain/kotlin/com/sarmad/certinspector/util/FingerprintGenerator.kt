package com.sarmad.certinspector.util

import java.security.MessageDigest

actual object FingerprintGenerator {
    actual fun sha256(data: ByteArray): String {
        return hash(data, "SHA-256")
    }

    actual fun sha1(data: ByteArray): String {
        return hash(data, "SHA-1")
    }

    actual fun md5(data: ByteArray): String {
        return hash(data, "MD5")
    }

    private fun hash(data: ByteArray, algorithm: String): String {
        val digest = MessageDigest.getInstance(algorithm)
        val bytes = digest.digest(data)
        return bytes.joinToString(":") { "%02X".format(it) }
    }
}