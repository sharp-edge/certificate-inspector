package com.sarmad.certinspector

import com.sarmad.certinspector.data.repository.CertificateRepositoryImpl
import com.sarmad.certinspector.data.source.CertificateSource
import com.sarmad.certinspector.domain.model.*
import com.sarmad.certinspector.domain.usecase.*

class CertInspector {
    private val source = CertificateSource()
    private val repository = CertificateRepositoryImpl(source)

    private val inspectUrlUseCase = InspectUrlUseCase(repository)
    private val inspectFileUseCase = InspectFileUseCase(repository)
    private val analyzeSecurityUseCase = AnalyzeSecurityUseCase()
    private val validateTrustUseCase = ValidateTrustUseCase(repository)

    suspend fun inspectUrl(url: String): InspectionResult<ChainAnalysis> {
        return when (val result = inspectUrlUseCase(url)) {
            is InspectionResult.Success -> {
                val chain = result.data
                val trustStatus = validateTrustUseCase(chain.leaf)
                val analysis = analyzeSecurityUseCase(chain, trustStatus, extractHostname(url))
                InspectionResult.Success(ChainAnalysis(chain, trustStatus, analysis))
            }
            is InspectionResult.Error -> result
        }
    }

    suspend fun inspectFile(fileData: ByteArray): InspectionResult<CertificateAnalysis> {
        return when (val result = inspectFileUseCase(fileData)) {
            is InspectionResult.Success -> {
                val cert = result.data
                val trustStatus = validateTrustUseCase(cert)
                InspectionResult.Success(CertificateAnalysis(cert, trustStatus))
            }
            is InspectionResult.Error -> result
        }
    }

    private fun extractHostname(url: String): String {
        return url.removePrefix("https://")
            .removePrefix("http://")
            .substringBefore("/")
            .substringBefore(":")
    }
}

data class ChainAnalysis(
    val chain: CertificateChain,
    val trustStatus: TrustStatus,
    val security: SecurityAnalysis
)

data class CertificateAnalysis(
    val certificate: Certificate,
    val trustStatus: TrustStatus
)