package com.sarmad.certinspector.domain.model

import kotlinx.datetime.Instant

data class SecurityAnalysis(
    val overallStatus: SecurityStatus,
    val issues: List<SecurityIssue>,
    val recommendations: List<String>,
    val score: Int
)

enum class SecurityStatus {
    SECURE,
    WARNING,
    CRITICAL
}

sealed class SecurityIssue {
    abstract val severity: Severity
    abstract val description: String

    data class WeakSignature(
        val algorithm: String,
        override val severity: Severity = Severity.HIGH
    ) : SecurityIssue() {
        override val description: String = "Weak signature algorithm: $algorithm"
    }

    data class WeakPublicKey(
        val algorithm: String,
        val size: Int,
        override val severity: Severity = Severity.HIGH
    ) : SecurityIssue() {
        override val description: String = "$algorithm key size $size bits is weak"
    }

    data class ExpiringSoon(
        val expiresAt: Instant,
        val daysRemaining: Int,
        override val severity: Severity = Severity.MEDIUM
    ) : SecurityIssue() {
        override val description: String = "Certificate expires in $daysRemaining days"
    }

    data class SelfSigned(
        override val severity: Severity = Severity.MEDIUM
    ) : SecurityIssue() {
        override val description: String = "Certificate is self-signed"
    }

    data class HostnameMismatch(
        val expected: String,
        val actual: List<String>,
        override val severity: Severity = Severity.CRITICAL
    ) : SecurityIssue() {
        override val description: String = "Hostname mismatch: expected $expected"
    }

    data class ChainIncomplete(
        override val severity: Severity = Severity.MEDIUM
    ) : SecurityIssue() {
        override val description: String = "Certificate chain is incomplete"
    }
}

enum class Severity {
    LOW,
    MEDIUM,
    HIGH,
    CRITICAL
}