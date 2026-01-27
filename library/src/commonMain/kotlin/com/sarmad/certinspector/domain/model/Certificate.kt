package com.sarmad.certinspector.domain.model

import kotlinx.datetime.Instant

data class Certificate(
    val subject: Subject,
    val issuer: Issuer,
    val validity: Validity,
    val serialNumber: String,
    val signatureAlgorithm: String,
    val publicKey: PublicKeyInfo,
    val subjectAlternativeNames: List<String>,
    val keyUsage: List<String>,
    val extendedKeyUsage: List<String>,
    val fingerprints: Fingerprints,
    val raw: ByteArray
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false
        other as Certificate
        return serialNumber == other.serialNumber &&
                fingerprints == other.fingerprints
    }

    override fun hashCode(): Int {
        var result = serialNumber.hashCode()
        result = 31 * result + fingerprints.hashCode()
        return result
    }
}

data class Subject(
    val commonName: String,
    val organization: String?,
    val organizationalUnit: String?,
    val locality: String?,
    val state: String?,
    val country: String?,
    val distinguishedName: String
)

data class Issuer(
    val commonName: String,
    val organization: String?,
    val distinguishedName: String
)

data class Validity(
    val notBefore: Instant,
    val notAfter: Instant
) {
    val isValid: Boolean
        get() {
            val now = kotlinx.datetime.Clock.System.now()
            return now >= notBefore && now <= notAfter
        }
}

data class PublicKeyInfo(
    val algorithm: String,
    val size: Int,
    val encoded: ByteArray
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false
        other as PublicKeyInfo
        return algorithm == other.algorithm && size == other.size
    }

    override fun hashCode(): Int {
        var result = algorithm.hashCode()
        result = 31 * result + size
        return result
    }
}

data class Fingerprints(
    val sha256: String,
    val sha1: String,
    val md5: String
)