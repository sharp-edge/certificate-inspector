package com.sarmad.certinspector.domain.usecase

import com.sarmad.certinspector.domain.model.Certificate
import com.sarmad.certinspector.domain.model.InspectionResult
import com.sarmad.certinspector.domain.repository.CertificateRepository

class InspectFileUseCase(
    private val repository: CertificateRepository
) {
    suspend operator fun invoke(fileData: ByteArray): InspectionResult<Certificate> {
        return repository.parseCertificateFile(fileData)
    }
}