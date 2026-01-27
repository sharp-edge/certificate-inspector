package com.sarmad.certinspector.demo.ui.component

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.layout.*
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.PathEffect
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp

@Composable
fun ChainVisualization(
    depth: Int,
    modifier: Modifier = Modifier
) {
    val color = MaterialTheme.colorScheme.primary

    Column(
        modifier = modifier.fillMaxWidth(),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = "Certificate Chain",
            style = MaterialTheme.typography.titleSmall,
            color = MaterialTheme.colorScheme.primary
        )

        Spacer(modifier = Modifier.height(8.dp))

        Box(
            modifier = Modifier
                .fillMaxWidth()
                .height(80.dp),
            contentAlignment = Alignment.Center
        ) {
            Canvas(modifier = Modifier.fillMaxSize()) {
                val nodeRadius = 15f
                val spacing = size.width / (depth + 1)
                val centerY = size.height / 2

                for (i in 0 until depth) {
                    val x = spacing * (i + 1)

                    drawCircle(
                        color = color,
                        radius = nodeRadius,
                        center = Offset(x, centerY)
                    )

                    if (i < depth - 1) {
                        val nextX = spacing * (i + 2)
                        drawLine(
                            color = color,
                            start = Offset(x + nodeRadius, centerY),
                            end = Offset(nextX - nodeRadius, centerY),
                            strokeWidth = 2f,
                            pathEffect = PathEffect.dashPathEffect(floatArrayOf(8f, 8f))
                        )
                    }
                }
            }
        }

        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceEvenly
        ) {
            Text(
                text = "Leaf",
                style = MaterialTheme.typography.labelSmall,
                textAlign = TextAlign.Center
            )
            if (depth > 2) {
                Text(
                    text = "Intermediate",
                    style = MaterialTheme.typography.labelSmall,
                    textAlign = TextAlign.Center
                )
            }
            if (depth > 1) {
                Text(
                    text = "Root",
                    style = MaterialTheme.typography.labelSmall,
                    textAlign = TextAlign.Center
                )
            }
        }
    }
}
