package com.sarmad.certinspector.demo.ui.screen

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import com.sarmad.certinspector.demo.ui.component.CertificateCard
import com.sarmad.certinspector.demo.ui.component.ChainVisualization
import com.sarmad.certinspector.demo.ui.component.SecurityBadge
import com.sarmad.certinspector.demo.ui.theme.CriticalRed
import com.sarmad.certinspector.demo.ui.theme.WarningOrange
import com.sarmad.certinspector.demo.viewmodel.InspectorViewModel
import com.sarmad.certinspector.demo.viewmodel.UiState
import com.sarmad.certinspector.domain.model.Severity

@Composable
fun InspectorScreen(
    viewModel: InspectorViewModel,
    modifier: Modifier = Modifier
) {
    val uiState by viewModel.uiState.collectAsState()
    var urlInput by remember { mutableStateOf("") }

    Column(
        modifier = modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        Text(
            text = "Certificate Inspector",
            style = MaterialTheme.typography.headlineMedium,
            color = MaterialTheme.colorScheme.primary
        )

        OutlinedTextField(
            value = urlInput,
            onValueChange = { urlInput = it },
            label = { Text("Enter URL or Domain") },
            placeholder = { Text("example.com or https://example.com") },
            modifier = Modifier.fillMaxWidth(),
            singleLine = true,
            keyboardOptions = KeyboardOptions(
                keyboardType = KeyboardType.Uri,
                imeAction = ImeAction.Done
            ),
            keyboardActions = KeyboardActions(
                onDone = {
                    viewModel.inspectUrl(urlInput)
                }
            )
        )

        Button(
            onClick = {
                viewModel.inspectUrl(urlInput)
            },
            modifier = Modifier.fillMaxWidth(),
            enabled = uiState !is UiState.Loading
        ) {
            Text(if (uiState is UiState.Loading) "Inspecting..." else "Inspect Certificate")
        }

        when (val state = uiState) {
            is UiState.Idle -> {
                Box(
                    modifier = Modifier.fillMaxSize(),
                    contentAlignment = Alignment.Center
                ) {
                    Text(
                        text = "Enter a URL to inspect its SSL certificate",
                        style = MaterialTheme.typography.bodyLarge,
                        color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f)
                    )
                }
            }

            is UiState.Loading -> {
                Box(
                    modifier = Modifier.fillMaxSize(),
                    contentAlignment = Alignment.Center
                ) {
                    CircularProgressIndicator()
                }
            }

            is UiState.Success -> {
                ResultSection(
                    state = state,
                    onReset = { viewModel.reset() }
                )
            }

            is UiState.Error -> {
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    colors = CardDefaults.cardColors(
                        containerColor = MaterialTheme.colorScheme.errorContainer
                    )
                ) {
                    Column(
                        modifier = Modifier.padding(16.dp),
                        verticalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        Text(
                            text = "Error",
                            style = MaterialTheme.typography.titleMedium,
                            color = MaterialTheme.colorScheme.error
                        )
                        Text(
                            text = state.message,
                            style = MaterialTheme.typography.bodyMedium
                        )
                        TextButton(onClick = { viewModel.reset() }) {
                            Text("Dismiss")
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun ResultSection(
    state: UiState.Success,
    onReset: () -> Unit
) {
    val analysis = state.analysis

    LazyColumn(
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        item {
            Card(
                modifier = Modifier.fillMaxWidth(),
                colors = CardDefaults.cardColors(
                    containerColor = MaterialTheme.colorScheme.surfaceVariant
                )
            ) {
                Column(
                    modifier = Modifier.padding(16.dp),
                    verticalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(
                            text = "Security Analysis",
                            style = MaterialTheme.typography.titleMedium
                        )

                        SecurityBadge(
                            status = analysis.security.overallStatus,
                            score = analysis.security.score
                        )
                    }

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceEvenly
                    ) {
                        InfoChip("TLS ${analysis.chain.connectionInfo.tlsVersion}")
                        InfoChip("Chain Depth: ${analysis.chain.depth}")
                    }
                }
            }
        }

        item {
            ChainVisualization(depth = analysis.chain.depth)
        }

        item {
            CertificateCard(
                certificate = analysis.chain.leaf,
                title = "Leaf Certificate"
            )
        }

        items(analysis.chain.intermediates) { cert ->
            CertificateCard(
                certificate = cert,
                title = "Intermediate Certificate"
            )
        }

        analysis.chain.root?.let { root ->
            item {
                CertificateCard(
                    certificate = root,
                    title = "Root Certificate"
                )
            }
        }

        if (analysis.security.issues.isNotEmpty()) {
            item {
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    colors = CardDefaults.cardColors(
                        containerColor = MaterialTheme.colorScheme.errorContainer.copy(alpha = 0.3f)
                    )
                ) {
                    Column(
                        modifier = Modifier.padding(16.dp),
                        verticalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        Text(
                            text = "Security Issues",
                            style = MaterialTheme.typography.titleMedium,
                            color = MaterialTheme.colorScheme.error
                        )

                        analysis.security.issues.forEach { issue ->
                            IssueItem(
                                description = issue.description,
                                severity = issue.severity
                            )
                        }
                    }
                }
            }
        }

        if (analysis.security.recommendations.isNotEmpty()) {
            item {
                Card(
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Column(
                        modifier = Modifier.padding(16.dp),
                        verticalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        Text(
                            text = "Recommendations",
                            style = MaterialTheme.typography.titleMedium
                        )

                        analysis.security.recommendations.forEach { recommendation ->
                            Row(
                                modifier = Modifier.padding(vertical = 4.dp),
                                horizontalArrangement = Arrangement.spacedBy(8.dp)
                            ) {
                                Text(
                                    text = "•",
                                    style = MaterialTheme.typography.bodyMedium,
                                    color = MaterialTheme.colorScheme.primary
                                )
                                Text(
                                    text = recommendation,
                                    style = MaterialTheme.typography.bodyMedium
                                )
                            }
                        }
                    }
                }
            }
        }

        item {
            OutlinedButton(
                onClick = onReset,
                modifier = Modifier.fillMaxWidth()
            ) {
                Text("Inspect Another URL")
            }
        }

        item {
            Spacer(modifier = Modifier.height(16.dp))
        }
    }
}

@Composable
private fun InfoChip(text: String) {
    Surface(
        shape = MaterialTheme.shapes.small,
        color = MaterialTheme.colorScheme.primary.copy(alpha = 0.1f)
    ) {
        Text(
            text = text,
            style = MaterialTheme.typography.bodySmall,
            modifier = Modifier.padding(horizontal = 12.dp, vertical = 6.dp),
            color = MaterialTheme.colorScheme.primary
        )
    }
}

@Composable
private fun IssueItem(
    description: String,
    severity: Severity
) {
    val color = when (severity) {
        Severity.CRITICAL -> CriticalRed
        Severity.HIGH -> MaterialTheme.colorScheme.error
        Severity.MEDIUM -> WarningOrange
        Severity.LOW -> MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f)
    }

    Row(
        modifier = Modifier.padding(vertical = 4.dp),
        horizontalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        Text(
            text = when (severity) {
                Severity.CRITICAL -> "⚠"
                Severity.HIGH -> "⚠"
                Severity.MEDIUM -> "⚡"
                Severity.LOW -> "ℹ"
            },
            color = color
        )
        Column {
            Text(
                text = severity.name,
                style = MaterialTheme.typography.labelSmall,
                color = color
            )
            Text(
                text = description,
                style = MaterialTheme.typography.bodyMedium
            )
        }
    }
}