package com.sarmad.certinspector.data.source

import com.sarmad.certinspector.domain.model.Certificate
import com.sarmad.certinspector.domain.model.CertificateChain
import com.sarmad.certinspector.domain.model.TrustStatus

actual class CertificateSource {
    actual suspend fun fetchFromUrl(url: String): CertificateChain {
        throw NotImplementedError("iOS implementation pending")
    }

    actual suspend fun parseFromBytes(data: ByteArray): Certificate {
        throw NotImplementedError("iOS implementation pending")
    }

    actual fun validateTrust(certificate: Certificate): TrustStatus {
        throw NotImplementedError("iOS implementation pending")
    }
}