package com.sarmad.certinspector.data.source

import com.sarmad.certinspector.domain.model.Certificate
import com.sarmad.certinspector.domain.model.CertificateChain
import com.sarmad.certinspector.domain.model.TrustStatus

expect class CertificateSource() {
    suspend fun fetchFromUrl(url: String): CertificateChain
    suspend fun parseFromBytes(data: ByteArray): Certificate
    fun validateTrust(certificate: Certificate): TrustStatus
}