package com.sarmad.certinspector.domain.model

data class CertificateChain(
    val leaf: Certificate,
    val intermediates: List<Certificate>,
    val root: Certificate?,
    val connectionInfo: ConnectionInfo
) {
    val all: List<Certificate>
        get() = buildList {
            add(leaf)
            addAll(intermediates)
            root?.let { add(it) }
        }

    val depth: Int
        get() = all.size
}

data class ConnectionInfo(
    val tlsVersion: String,
    val cipherSuite: String,
    val protocol: String
)