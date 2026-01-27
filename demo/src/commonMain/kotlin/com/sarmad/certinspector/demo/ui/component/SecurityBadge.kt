package com.sarmad.certinspector.demo.ui.component

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.sarmad.certinspector.demo.ui.theme.CriticalRed
import com.sarmad.certinspector.demo.ui.theme.SuccessGreen
import com.sarmad.certinspector.demo.ui.theme.WarningOrange
import com.sarmad.certinspector.domain.model.SecurityStatus

@Composable
fun SecurityBadge(
    status: SecurityStatus,
    score: Int,
    modifier: Modifier = Modifier
) {
    val (color, label, icon) = when (status) {
        SecurityStatus.SECURE -> Triple(SuccessGreen, "Secure", "✓")
        SecurityStatus.WARNING -> Triple(WarningOrange, "Warning", "⚠")
        SecurityStatus.CRITICAL -> Triple(CriticalRed, "Critical", "✕")
    }

    Row(
        modifier = modifier
            .background(color.copy(alpha = 0.1f), RoundedCornerShape(8.dp))
            .padding(horizontal = 16.dp, vertical = 8.dp),
        horizontalArrangement = Arrangement.spacedBy(8.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Text(
            text = icon,
            style = MaterialTheme.typography.titleMedium,
            color = color
        )

        Column {
            Text(
                text = label,
                style = MaterialTheme.typography.titleSmall,
                color = color
            )
            Text(
                text = "Score: $score/100",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f)
            )
        }
    }
}