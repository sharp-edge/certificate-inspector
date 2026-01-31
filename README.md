# Certificate Inspector

[![JitPack](https://jitpack.io/v/sharp-edge/certificate-inspector.svg)](https://jitpack.io/#sharp-edge/certificate-inspector)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Kotlin](https://img.shields.io/badge/Kotlin-2.1.0-blue.svg)](https://kotlinlang.org)
[![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20JVM%20%7C%20iOS-green.svg)](https://kotlinlang.org/docs/multiplatform.html)


A Kotlin Multiplatform library for SSL/TLS certificate inspection and security analysis. Provides detailed certificate information, chain validation, and security assessments across Android, iOS, Desktop, and Web platforms.

## Motivation

During development of a banking application, we needed a reliable way to inspect SSL certificates, validate certificate chains, and detect potential security issues across multiple platforms. While browser-based tools exist for certificate inspection, there was no comprehensive Kotlin Multiplatform solution that could be integrated directly into applications.

This library bridges that gap. It extracts and analyzes SSL certificate details programmatically, making it useful for security audits, certificate pinning verification, MITM detection, and general SSL/TLS monitoring in production applications.

## Features

**Certificate Information Extraction**
- Complete certificate chain (leaf, intermediate, root)
- Subject and Issuer details (CN, Organization, Locality, etc.)
- Validity periods with expiration tracking
- Public key information (algorithm, size)
- Subject Alternative Names (SANs)
- Key usage and extended key usage flags
- Certificate fingerprints (SHA-256, SHA-1, MD5)
- Serial numbers and signature algorithms

**Security Analysis**
- Automated vulnerability detection
- Weak cryptography identification (MD5, SHA-1, weak RSA keys)
- Certificate expiration warnings
- Self-signed certificate detection
- Hostname mismatch validation
- Chain completeness verification
- Security scoring (0-100 scale)
- Actionable recommendations

**Connection Details**
- TLS/SSL version detection
- Cipher suite information
- Trust status validation against system trust stores

**Certificate Export**
- PEM format export
- DER format export

## Platform Support

| Platform | Status | Implementation |
|----------|--------|----------------|
| Android | ✅ Full Support | Native (HttpsURLConnection, X509Certificate) |
| Desktop (JVM) | ✅ Full Support | Native (javax.net.ssl) |
| iOS | 🔄 Architecture Ready | Stub implementation (contributions welcome) |
| Web (JS) | ⚠️ Limited | Browser security restrictions prevent direct inspection |

### Note on Web Platform

Modern browsers intentionally prevent JavaScript from accessing SSL certificate details for security and privacy reasons. The web target includes proper error messaging explaining this limitation. Web-based certificate inspection tools (like SSL Labs) work by performing inspections on backend servers, not in the browser itself.

## Installation

### Gradle (Kotlin DSL)

Add JitPack repository in your `settings.gradle.kts`:
```kotlin
dependencyResolutionManagement {
    repositories {
        google()
        mavenCentral()
        maven("https://jitpack.io")
    }
}
```

Add the dependency to your `build.gradle.kts`:
```kotlin
dependencies {
    implementation("com.github.sharp-edge:certificate-inspector:1.0.3")
}
```

### For Kotlin Multiplatform projects:
```kotlin
kotlin {
    sourceSets {
        commonMain {
            dependencies {
                implementation("com.github.sharp-edge:certificate-inspector:1.0.3")
            }
        }
    }
}
```

[![](https://jitpack.io/v/sharp-edge/certificate-inspector.svg)](https://jitpack.io/#sharp-edge/certificate-inspector)

## Usage

### Basic Certificate Inspection
```kotlin
import com.sarmad.certinspector.CertInspector
import com.sarmad.certinspector.domain.model.InspectionResult

val inspector = CertInspector()

val result = inspector.inspectUrl("github.com")

when (result) {
    is InspectionResult.Success -> {
        val analysis = result.data
        
        val leafCert = analysis.chain.leaf
        println("Common Name: ${leafCert.subject.commonName}")
        println("Expires: ${leafCert.validity.notAfter}")
        println("Issuer: ${leafCert.issuer.commonName}")
        
        println("Security Score: ${analysis.security.score}/100")
        println("Status: ${analysis.security.overallStatus}")
        
        println("Trust Status: ${analysis.trustStatus}")
    }
    
    is InspectionResult.Error -> {
        println("Error: ${result.exception.message}")
    }
}
```

### Advanced Usage
```kotlin
val result = inspector.inspectUrl("https://example.com")

if (result is InspectionResult.Success) {
    val chain = result.data.chain
    
    println("Certificate Chain Depth: ${chain.depth}")
    
    chain.all.forEachIndexed { index, cert ->
        println("Certificate $index:")
        println("  Subject: ${cert.subject.commonName}")
        println("  Valid: ${cert.validity.isValid}")
        println("  Key: ${cert.publicKey.algorithm} ${cert.publicKey.size}-bit")
    }
    
    val security = result.data.security
    
    if (security.issues.isNotEmpty()) {
        println("\nSecurity Issues Detected:")
        security.issues.forEach { issue ->
            println("  [${issue.severity}] ${issue.description}")
        }
        
        println("\nRecommendations:")
        security.recommendations.forEach { recommendation ->
            println("  - $recommendation")
        }
    }
    
    val pem = CertificateFormatter.toPem(chain.leaf)
    println("\nCertificate (PEM):\n$pem")
}
```

### Inspect Certificate Files
```kotlin
val certData: ByteArray = File("certificate.crt").readBytes()

val result = inspector.inspectFile(certData)

when (result) {
    is InspectionResult.Success -> {
        val cert = result.data.certificate
        println("Certificate loaded: ${cert.subject.commonName}")
        println("Fingerprint (SHA-256): ${cert.fingerprints.sha256}")
    }
    is InspectionResult.Error -> {
        println("Failed to parse certificate")
    }
}
```

### Security Monitoring Example
```kotlin
suspend fun monitorCertificate(url: String) {
    val inspector = CertInspector()
    val result = inspector.inspectUrl(url)
    
    if (result is InspectionResult.Success) {
        val analysis = result.data
        
        val cert = analysis.chain.leaf
        val now = Clock.System.now()
        val daysUntilExpiry = ((cert.validity.notAfter - now) / 1.days).toInt()
        
        when {
            daysUntilExpiry < 0 -> 
                alertCritical("Certificate expired!")
            daysUntilExpiry < 30 -> 
                alertWarning("Certificate expires in $daysUntilExpiry days")
            else -> 
                println("Certificate valid for $daysUntilExpiry days")
        }
        
        analysis.security.issues
            .filterIsInstance<SecurityIssue.WeakSignature>()
            .forEach { issue ->
                alertWarning("Weak signature detected: ${issue.algorithm}")
            }
        
        if (analysis.trustStatus !is TrustStatus.Trusted) {
            alertCritical("Certificate not trusted: ${analysis.trustStatus}")
        }
    }
}
```

## API Reference

### Main Classes

**`CertInspector`**
- `suspend fun inspectUrl(url: String): InspectionResult<ChainAnalysis>`
- `suspend fun inspectFile(fileData: ByteArray): InspectionResult<CertificateAnalysis>`

**`ChainAnalysis`**
- `chain: CertificateChain` - Complete certificate chain
- `trustStatus: TrustStatus` - System trust validation result
- `security: SecurityAnalysis` - Security assessment

**`Certificate`**
- `subject: Subject` - Certificate subject information
- `issuer: Issuer` - Certificate issuer information
- `validity: Validity` - Validity period and status
- `serialNumber: String` - Certificate serial number
- `signatureAlgorithm: String` - Signature algorithm used
- `publicKey: PublicKeyInfo` - Public key details
- `subjectAlternativeNames: List<String>` - All SANs
- `keyUsage: List<String>` - Key usage flags
- `fingerprints: Fingerprints` - SHA-256, SHA-1, MD5 fingerprints

**`SecurityAnalysis`**
- `overallStatus: SecurityStatus` - SECURE, WARNING, or CRITICAL
- `issues: List<SecurityIssue>` - Detected security problems
- `recommendations: List<String>` - Actionable advice
- `score: Int` - Security score (0-100)

**`CertificateFormatter`**
- `fun toPem(certificate: Certificate): String`
- `fun toDer(certificate: Certificate): ByteArray`

### Exception Handling
```kotlin
sealed class InspectionException {
    class NetworkError(message: String, cause: Throwable?)
    class InvalidUrl(url: String)
    class InvalidCertificate(message: String)
    class TimeoutError(message: String)
    class UnknownError(message: String, cause: Throwable?)
}
```

## Architecture

The library follows clean architecture principles with clear separation of concerns:
```
┌─────────────────────────────────────┐
│  Public API (CertInspector)         │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│  Domain Layer (Pure Kotlin)         │
│  - Use Cases (business logic)       │
│  - Repository Interfaces            │
│  - Domain Models                    │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│  Data Layer                         │
│  - Repository Implementation        │
│  - Platform Sources (expect/actual) │
└─────────────────────────────────────┘
               │
    ┌──────────┼──────────┬──────────┐
    ▼          ▼          ▼          ▼
Android    Desktop     iOS       Web
(Java)     (JVM)    (Native)    (JS)
```

**Expect/Actual Mechanism**

Platform-specific implementations use Kotlin's `expect`/`actual` declarations, allowing shared business logic in `commonMain` while delegating platform-specific operations to targeted implementations.

## Demo Applications

The repository includes sample applications demonstrating library usage:

- **Android App** - Jetpack Compose UI with full inspection capabilities
- **Desktop App** - Compose Desktop application for JVM platforms
- **Web App** - Compose for Web demonstrating browser limitations

Run the demos:
```bash
# Android
./gradlew :demo:installDebug

# Desktop
./gradlew :demo:run

# Web
./gradlew :demo:jsBrowserDevelopmentRun
```

## Building from Source
```bash
# Clone repository
git clone https://github.com/yourusername/certificate-inspector.git
cd certificate-inspector

# Build library
./gradlew :library:build

# Run tests
./gradlew :library:test

# Build all targets
./gradlew build
```

## Requirements

- **Library:** Kotlin 2.1.0+, Coroutines 1.9.0+
- **Android:** API 24+ (Android 7.0)
- **Desktop:** JVM 11+
- **iOS:** iOS 13+ (implementation pending)
- **Web:** Modern browsers with ES6 support

## Use Cases

- **Security Monitoring** - Automated certificate expiration tracking
- **Certificate Pinning** - Validate expected certificates in mobile apps
- **MITM Detection** - Identify unexpected certificate changes
- **Compliance Audits** - Verify cryptographic standards compliance
- **Development Tools** - Build certificate inspection utilities
- **Educational** - Learn SSL/TLS certificate structure and validation

## Known Limitations

1. **Web Platform:** Browsers block JavaScript access to certificate details. The web target provides educational value and proper error handling but cannot perform actual inspections.

2. **iOS Platform:** Architecture is complete but requires platform-specific SSL implementation using SecTrust APIs. Contributions welcome.

3. **Revocation Checking:** OCSP and CRL verification not yet implemented. Current trust validation uses system trust stores only.

4. **Certificate Transparency:** CT log verification not included in v1.0.

## Contributing

Contributions are welcome, especially:
- iOS platform implementation
- Additional security checks (OCSP, CRL, CT logs)
- Bug fixes and optimizations
- Documentation improvements
- Example applications

Please open an issue before starting significant work to discuss your approach.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Built with Kotlin Multiplatform, leveraging platform-native SSL/TLS APIs for reliable certificate inspection. Inspired by browser certificate viewers and professional SSL analysis tools.

## Contact

For questions, issues, or feature requests, please use GitHub Issues.

---

**Note:** This library is provided as-is for educational and development purposes. Always implement proper security practices and consult security professionals for production deployments handling sensitive data.
