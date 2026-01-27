package com.sarmad.certinspector.demo.ui.component

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.sarmad.certinspector.demo.ui.theme.WarningOrange
import com.sarmad.certinspector.domain.model.Certificate
import kotlinx.datetime.Clock
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import kotlin.time.Duration.Companion.days

@Composable
fun CertificateCard(
    certificate: Certificate,
    title: String,
    modifier: Modifier = Modifier
) {
    var expanded by remember { mutableStateOf(false) }

    Card(
        modifier = modifier
            .fillMaxWidth()
            .clickable { expanded = !expanded },
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surface
        )
    ) {
        Column(
            modifier = Modifier.padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Text(
                text = title,
                style = MaterialTheme.typography.titleSmall,
                color = MaterialTheme.colorScheme.primary
            )

            Text(
                text = certificate.subject.commonName,
                style = MaterialTheme.typography.titleMedium
            )

            val daysUntilExpiry = ((certificate.validity.notAfter - Clock.System.now()) / 1.days).toInt()
            val expiryColor = when {
                daysUntilExpiry < 0 -> MaterialTheme.colorScheme.error
                daysUntilExpiry < 30 -> WarningOrange
                else -> MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f)
            }

            Text(
                text = "Expires: ${formatDate(certificate.validity.notAfter)} (${daysUntilExpiry}d)",
                style = MaterialTheme.typography.bodySmall,
                color = expiryColor
            )

            Text(
                text = "Issuer: ${certificate.issuer.commonName}",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f)
            )

            AnimatedVisibility(visible = expanded) {
                Column(
                    modifier = Modifier.padding(top = 8.dp),
                    verticalArrangement = Arrangement.spacedBy(4.dp)
                ) {
                    HorizontalDivider(modifier = Modifier.padding(vertical = 8.dp))

                    DetailRow("Serial", certificate.serialNumber)
                    DetailRow("Algorithm", certificate.signatureAlgorithm)
                    DetailRow("Public Key", "${certificate.publicKey.algorithm} ${certificate.publicKey.size}-bit")
                    DetailRow("SHA-256", certificate.fingerprints.sha256)

                    if (certificate.subjectAlternativeNames.isNotEmpty()) {
                        DetailRow("SANs", certificate.subjectAlternativeNames.joinToString(", "))
                    }

                    if (certificate.keyUsage.isNotEmpty()) {
                        DetailRow("Key Usage", certificate.keyUsage.joinToString(", "))
                    }
                }
            }

            Text(
                text = if (expanded) "Show less ▲" else "Show more ▼",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.primary,
                modifier = Modifier.padding(top = 4.dp)
            )
        }
    }
}

@Composable
private fun DetailRow(label: String, value: String) {
    Column(modifier = Modifier.padding(vertical = 2.dp)) {
        Text(
            text = label,
            style = MaterialTheme.typography.labelSmall,
            color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f)
        )
        Text(
            text = value,
            style = MaterialTheme.typography.bodySmall
        )
    }
}

private fun formatDate(instant: kotlinx.datetime.Instant): String {
    val date = instant.toLocalDateTime(TimeZone.currentSystemDefault())
    return "${date.monthNumber}/${date.dayOfMonth}/${date.year}"
}