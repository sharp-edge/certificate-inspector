package com.sarmad.certinspector.util

expect object FingerprintGenerator {
    fun sha256(data: ByteArray): String
    fun sha1(data: ByteArray): String
    fun md5(data: ByteArray): String
}