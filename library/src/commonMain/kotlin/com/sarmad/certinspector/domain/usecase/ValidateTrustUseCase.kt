package com.sarmad.certinspector.domain.usecase

import com.sarmad.certinspector.domain.model.Certificate
import com.sarmad.certinspector.domain.model.TrustStatus
import com.sarmad.certinspector.domain.repository.CertificateRepository

class ValidateTrustUseCase(
    private val repository: CertificateRepository
) {
    suspend operator fun invoke(certificate: Certificate): TrustStatus {
        if (!certificate.validity.isValid) {
            val now = kotlinx.datetime.Clock.System.now()
            return if (now < certificate.validity.notBefore) {
                TrustStatus.NotYetValid
            } else {
                TrustStatus.Expired
            }
        }

        return repository.validateTrust(certificate)
    }
}