package com.sarmad.certinspector.domain.model

sealed class TrustStatus {
    data object Trusted : TrustStatus()
    data object Untrusted : TrustStatus()
    data object SelfSigned : TrustStatus()
    data object Expired : TrustStatus()
    data object NotYetValid : TrustStatus()
    data class Revoked(val reason: String) : TrustStatus()
    data class Unknown(val reason: String) : TrustStatus()
}