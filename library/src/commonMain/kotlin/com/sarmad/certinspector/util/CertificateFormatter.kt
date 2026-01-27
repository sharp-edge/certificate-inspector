package com.sarmad.certinspector.util

import com.sarmad.certinspector.domain.model.Certificate

object CertificateFormatter {
    fun toPem(certificate: Certificate): String {
        val base64 = certificate.raw.toBase64()
        return buildString {
            appendLine("-----BEGIN CERTIFICATE-----")
            base64.chunked(64).forEach { appendLine(it) }
            appendLine("-----END CERTIFICATE-----")
        }
    }

    fun toDer(certificate: Certificate): ByteArray = certificate.raw
}