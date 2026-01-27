package com.sarmad.certinspector.data.source

import com.sarmad.certinspector.domain.model.Certificate
import com.sarmad.certinspector.domain.model.CertificateChain
import com.sarmad.certinspector.domain.model.TrustStatus

actual class CertificateSource {
    actual suspend fun fetchFromUrl(url: String): CertificateChain {
        throw UnsupportedOperationException(
            "Browser security policies prevent direct certificate inspection. " +
                    "Modern browsers do not expose SSL/TLS certificate details to JavaScript or WebAssembly for security reasons. " +
                    "Web-based certificate inspectors use backend servers to perform inspections. " +
                    "Please use the Android or Desktop application for full functionality."
        )
    }

    actual suspend fun parseFromBytes(data: ByteArray): Certificate {
        throw UnsupportedOperationException(
            "Certificate parsing from files is not supported in web browsers. " +
                    "Please use the Android or Desktop application."
        )
    }

    actual fun validateTrust(certificate: Certificate): TrustStatus {
        return TrustStatus.Unknown("Trust validation not available in browser")
    }
}