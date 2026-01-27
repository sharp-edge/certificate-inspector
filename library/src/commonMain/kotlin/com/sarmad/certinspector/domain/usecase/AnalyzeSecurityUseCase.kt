package com.sarmad.certinspector.domain.usecase

import com.sarmad.certinspector.domain.model.*
import kotlinx.datetime.Clock
import kotlin.time.Duration.Companion.days

class AnalyzeSecurityUseCase {
    operator fun invoke(
        chain: CertificateChain,
        trustStatus: TrustStatus,
        hostname: String? = null
    ): SecurityAnalysis {
        val issues = mutableListOf<SecurityIssue>()

        chain.all.forEach { cert ->
            issues.addAll(checkSignatureAlgorithm(cert))
            issues.addAll(checkPublicKey(cert))
            issues.addAll(checkValidity(cert))
        }

        hostname?.let {
            issues.addAll(checkHostname(chain.leaf, it))
        }

        if (trustStatus is TrustStatus.SelfSigned) {
            issues.add(SecurityIssue.SelfSigned())
        }

        if (chain.root == null) {
            issues.add(SecurityIssue.ChainIncomplete())
        }

        val recommendations = generateRecommendations(issues)
        val score = calculateScore(issues)
        val status = determineStatus(issues)

        return SecurityAnalysis(status, issues, recommendations, score)
    }

    private fun checkSignatureAlgorithm(cert: Certificate): List<SecurityIssue> {
        val weak = listOf("sha1", "md5", "md2")
        return if (weak.any { cert.signatureAlgorithm.lowercase().contains(it) }) {
            listOf(SecurityIssue.WeakSignature(cert.signatureAlgorithm))
        } else emptyList()
    }

    private fun checkPublicKey(cert: Certificate): List<SecurityIssue> {
        val key = cert.publicKey
        val isWeak = when {
            key.algorithm.contains("RSA", ignoreCase = true) && key.size < 2048 -> true
            key.algorithm.contains("EC", ignoreCase = true) && key.size < 256 -> true
            else -> false
        }

        return if (isWeak) {
            listOf(SecurityIssue.WeakPublicKey(key.algorithm, key.size))
        } else emptyList()
    }

    private fun checkValidity(cert: Certificate): List<SecurityIssue> {
        val now = Clock.System.now()
        val remaining = cert.validity.notAfter - now

        return when {
            remaining < 30.days -> {
                val days = remaining.inWholeDays.toInt()
                listOf(SecurityIssue.ExpiringSoon(cert.validity.notAfter, days))
            }
            else -> emptyList()
        }
    }

    private fun checkHostname(cert: Certificate, hostname: String): List<SecurityIssue> {
        val names = listOf(cert.subject.commonName) + cert.subjectAlternativeNames
        val matches = names.any { matchHostname(it, hostname) }

        return if (!matches) {
            listOf(SecurityIssue.HostnameMismatch(hostname, names))
        } else emptyList()
    }

    private fun matchHostname(pattern: String, hostname: String): Boolean {
        val regex = pattern
            .replace(".", "\\.")
            .replace("*", ".*")
            .toRegex(RegexOption.IGNORE_CASE)
        return regex.matches(hostname)
    }

    private fun generateRecommendations(issues: List<SecurityIssue>): List<String> {
        return issues.mapNotNull { issue ->
            when (issue) {
                is SecurityIssue.WeakSignature ->
                    "Upgrade to SHA-256 or stronger signature algorithm"
                is SecurityIssue.WeakPublicKey ->
                    "Use ${if (issue.algorithm.contains("RSA")) "2048" else "256"}-bit or larger keys"
                is SecurityIssue.ExpiringSoon ->
                    "Renew certificate before expiration"
                is SecurityIssue.SelfSigned ->
                    "Use a certificate from a trusted CA for production"
                is SecurityIssue.ChainIncomplete ->
                    "Ensure complete certificate chain is provided"
                is SecurityIssue.HostnameMismatch ->
                    "Certificate must match the hostname"
            }
        }.distinct()
    }

    private fun calculateScore(issues: List<SecurityIssue>): Int {
        val penalty = issues.sumOf { issue ->
            when (issue.severity) {
                Severity.CRITICAL -> 40
                Severity.HIGH -> 25
                Severity.MEDIUM -> 15
                Severity.LOW -> 5
            }.toInt()
        }
        return (100 - penalty).coerceAtLeast(0)
    }

    private fun determineStatus(issues: List<SecurityIssue>): SecurityStatus {
        return when {
            issues.any { it.severity == Severity.CRITICAL } -> SecurityStatus.CRITICAL
            issues.any { it.severity == Severity.HIGH } -> SecurityStatus.WARNING
            else -> SecurityStatus.SECURE
        }
    }
}