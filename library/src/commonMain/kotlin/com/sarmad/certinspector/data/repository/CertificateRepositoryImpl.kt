package com.sarmad.certinspector.data.repository

import com.sarmad.certinspector.data.source.CertificateSource
import com.sarmad.certinspector.domain.model.Certificate
import com.sarmad.certinspector.domain.model.CertificateChain
import com.sarmad.certinspector.domain.model.InspectionException
import com.sarmad.certinspector.domain.model.InspectionResult
import com.sarmad.certinspector.domain.model.TrustStatus
import com.sarmad.certinspector.domain.repository.CertificateRepository

class CertificateRepositoryImpl(
    private val source: CertificateSource
) : CertificateRepository {

    override suspend fun fetchChainFromUrl(url: String): InspectionResult<CertificateChain> {
        return try {
            val chain = source.fetchFromUrl(url)
            InspectionResult.Success(chain)
        } catch (e: Exception) {
            InspectionResult.Error(mapException(e))
        }
    }

    override suspend fun parseCertificateFile(data: ByteArray): InspectionResult<Certificate> {
        return try {
            val cert = source.parseFromBytes(data)
            InspectionResult.Success(cert)
        } catch (e: Exception) {
            InspectionResult.Error(mapException(e))
        }
    }

    override suspend fun validateTrust(certificate: Certificate): TrustStatus {
        return source.validateTrust(certificate)
    }

    private fun mapException(e: Exception): InspectionException {
        return when {
            e.message?.contains("timeout", ignoreCase = true) == true ->
                InspectionException.TimeoutError(e.message ?: "Connection timeout")
            e.message?.contains("network", ignoreCase = true) == true ->
                InspectionException.NetworkError(e.message ?: "Network error", e)
            e.message?.contains("certificate", ignoreCase = true) == true ->
                InspectionException.InvalidCertificate(e.message ?: "Invalid certificate")
            else ->
                InspectionException.UnknownError(e.message ?: "Unknown error", e)
        }
    }
}