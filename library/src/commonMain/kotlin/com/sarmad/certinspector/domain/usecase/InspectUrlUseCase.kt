package com.sarmad.certinspector.domain.usecase

import com.sarmad.certinspector.domain.model.CertificateChain
import com.sarmad.certinspector.domain.model.InspectionResult
import com.sarmad.certinspector.domain.repository.CertificateRepository

class InspectUrlUseCase(
    private val repository: CertificateRepository
) {
    suspend operator fun invoke(url: String): InspectionResult<CertificateChain> {
        return repository.fetchChainFromUrl(url)
    }
}