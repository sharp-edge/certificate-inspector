package com.sarmad.certinspector.domain.model

sealed class InspectionResult<out T> {
    data class Success<T>(val data: T) : InspectionResult<T>()
    data class Error(val exception: InspectionException) : InspectionResult<Nothing>()
}

sealed class InspectionException(message: String, cause: Throwable? = null) : Exception(message, cause) {
    class NetworkError(message: String, cause: Throwable? = null) : InspectionException(message, cause)
    class InvalidUrl(url: String) : InspectionException("Invalid URL: $url")
    class InvalidCertificate(message: String) : InspectionException(message)
    class TimeoutError(message: String) : InspectionException(message)
    class UnknownError(message: String, cause: Throwable? = null) : InspectionException(message, cause)
}