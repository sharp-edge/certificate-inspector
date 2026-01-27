package com.sarmad.certinspector.data.source

import com.sarmad.certinspector.domain.model.*
import com.sarmad.certinspector.util.FingerprintGenerator
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import kotlinx.datetime.Instant
import java.io.ByteArrayInputStream
import java.net.URL
import java.security.KeyStore
import java.security.cert.CertificateFactory
import java.security.cert.X509Certificate
import javax.net.ssl.*

actual class CertificateSource {

    private val certificateFactory = CertificateFactory.getInstance("X.509")
    private val trustManager = createTrustManager()

    actual suspend fun fetchFromUrl(url: String): CertificateChain = withContext(Dispatchers.IO) {
        val urlString = if (!url.startsWith("http")) "https://$url" else url
        val parsedUrl = java.net.URI(urlString).toURL()
        val connection = parsedUrl.openConnection() as HttpsURLConnection

        try {
            connection.connectTimeout = 10_000
            connection.readTimeout = 10_000
            connection.connect()

            val certificates = connection.serverCertificates
                .filterIsInstance<X509Certificate>()

            if (certificates.isEmpty()) {
                throw IllegalStateException("No certificates found")
            }

            val protocol = connection.cipherSuite ?: "Unknown"
            val tlsVersion = extractTlsVersion(connection)

            val leaf = certificates.first().toCertificate()
            val intermediates = certificates.drop(1).dropLast(1).map { it.toCertificate() }
            val root = certificates.lastOrNull()?.let {
                if (it.subjectX500Principal == it.issuerX500Principal) it.toCertificate() else null
            }

            CertificateChain(
                leaf = leaf,
                intermediates = intermediates,
                root = root,
                connectionInfo = ConnectionInfo(
                    tlsVersion = tlsVersion,
                    cipherSuite = protocol,
                    protocol = "HTTPS"
                )
            )
        } finally {
            connection.disconnect()
        }
    }

    actual suspend fun parseFromBytes(data: ByteArray): Certificate = withContext(Dispatchers.IO) {
        val x509 = certificateFactory.generateCertificate(ByteArrayInputStream(data)) as X509Certificate
        x509.toCertificate()
    }

    actual fun validateTrust(certificate: Certificate): TrustStatus {
        val x509 = certificateFactory.generateCertificate(
            ByteArrayInputStream(certificate.raw)
        ) as X509Certificate

        if (x509.subjectX500Principal == x509.issuerX500Principal) {
            return TrustStatus.SelfSigned
        }

        return try {
            trustManager.checkServerTrusted(arrayOf(x509), "RSA")
            TrustStatus.Trusted
        } catch (e: Exception) {
            when {
                e.message?.contains("expired", ignoreCase = true) == true ->
                    TrustStatus.Expired
                e.message?.contains("not yet valid", ignoreCase = true) == true ->
                    TrustStatus.NotYetValid
                else ->
                    TrustStatus.Untrusted
            }
        }
    }

    private fun X509Certificate.toCertificate(): Certificate {
        val subjectPrincipal = subjectX500Principal.name
        val issuerPrincipal = issuerX500Principal.name

        return Certificate(
            subject = parseSubject(subjectPrincipal),
            issuer = parseIssuer(issuerPrincipal),
            validity = Validity(
                notBefore = Instant.fromEpochMilliseconds(notBefore.time),
                notAfter = Instant.fromEpochMilliseconds(notAfter.time)
            ),
            serialNumber = serialNumber.toString(16).uppercase(),
            signatureAlgorithm = sigAlgName,
            publicKey = PublicKeyInfo(
                algorithm = publicKey.algorithm,
                size = getKeySize(publicKey),
                encoded = publicKey.encoded
            ),
            subjectAlternativeNames = extractSANs(),
            keyUsage = extractKeyUsage(),
            extendedKeyUsage = extractExtendedKeyUsage(),
            fingerprints = Fingerprints(
                sha256 = FingerprintGenerator.sha256(encoded),
                sha1 = FingerprintGenerator.sha1(encoded),
                md5 = FingerprintGenerator.md5(encoded)
            ),
            raw = encoded
        )
    }

    private fun parseSubject(dn: String): Subject {
        val parts = parseDN(dn)
        return Subject(
            commonName = parts["CN"] ?: "",
            organization = parts["O"],
            organizationalUnit = parts["OU"],
            locality = parts["L"],
            state = parts["ST"],
            country = parts["C"],
            distinguishedName = dn
        )
    }

    private fun parseIssuer(dn: String): Issuer {
        val parts = parseDN(dn)
        return Issuer(
            commonName = parts["CN"] ?: "",
            organization = parts["O"],
            distinguishedName = dn
        )
    }

    private fun parseDN(dn: String): Map<String, String> {
        return dn.split(",")
            .mapNotNull { part ->
                val trimmed = part.trim()
                val index = trimmed.indexOf('=')
                if (index > 0) {
                    trimmed.substring(0, index).trim() to trimmed.substring(index + 1).trim()
                } else null
            }
            .toMap()
    }

    private fun X509Certificate.extractSANs(): List<String> {
        return try {
            subjectAlternativeNames?.mapNotNull { san ->
                (san as? List<*>)?.get(1)?.toString()
            } ?: emptyList()
        } catch (e: Exception) {
            emptyList()
        }
    }

    private fun X509Certificate.extractKeyUsage(): List<String> {
        val usage = keyUsage ?: return emptyList()
        val usageNames = listOf(
            "Digital Signature",
            "Non Repudiation",
            "Key Encipherment",
            "Data Encipherment",
            "Key Agreement",
            "Key Cert Sign",
            "CRL Sign",
            "Encipher Only",
            "Decipher Only"
        )

        return usage.indices
            .filter { usage[it] }
            .mapNotNull { index -> usageNames.getOrNull(index) }
    }

    private fun X509Certificate.extractExtendedKeyUsage(): List<String> {
        return try {
            extendedKeyUsage?.map { oid ->
                when (oid) {
                    "1.3.6.1.5.5.7.3.1" -> "TLS Web Server Authentication"
                    "1.3.6.1.5.5.7.3.2" -> "TLS Web Client Authentication"
                    "1.3.6.1.5.5.7.3.3" -> "Code Signing"
                    "1.3.6.1.5.5.7.3.4" -> "Email Protection"
                    "1.3.6.1.5.5.7.3.8" -> "Time Stamping"
                    "1.3.6.1.5.5.7.3.9" -> "OCSP Signing"
                    else -> oid
                }
            } ?: emptyList()
        } catch (e: Exception) {
            emptyList()
        }
    }

    private fun getKeySize(key: java.security.PublicKey): Int {
        return when (key) {
            is java.security.interfaces.RSAPublicKey -> key.modulus.bitLength()
            is java.security.interfaces.ECPublicKey -> {
                val params = key.params
                params.order.bitLength()
            }
            is java.security.interfaces.DSAPublicKey -> key.params.p.bitLength()
            else -> 0
        }
    }

    private fun extractTlsVersion(connection: HttpsURLConnection): String {
        return try {
            val context = SSLContext.getInstance("TLS")
            context.init(null, null, null)
            val socket = context.socketFactory.createSocket(
                connection.url.host,
                connection.url.port.takeIf { it != -1 } ?: 443
            ) as SSLSocket
            val version = socket.session.protocol
            socket.close()
            version
        } catch (e: Exception) {
            "Unknown"
        }
    }

    private fun createTrustManager(): X509TrustManager {
        val trustManagerFactory = TrustManagerFactory.getInstance(
            TrustManagerFactory.getDefaultAlgorithm()
        )
        trustManagerFactory.init(null as KeyStore?)

        return trustManagerFactory.trustManagers
            .filterIsInstance<X509TrustManager>()
            .first()
    }
}