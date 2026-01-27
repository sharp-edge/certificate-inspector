package com.sarmad.certinspector.domain.repository

import com.sarmad.certinspector.domain.model.Certificate
import com.sarmad.certinspector.domain.model.CertificateChain
import com.sarmad.certinspector.domain.model.InspectionResult
import com.sarmad.certinspector.domain.model.TrustStatus

interface CertificateRepository {
    suspend fun fetchChainFromUrl(url: String): InspectionResult<CertificateChain>
    suspend fun parseCertificateFile(data: ByteArray): InspectionResult<Certificate>
    suspend fun validateTrust(certificate: Certificate): TrustStatus
}