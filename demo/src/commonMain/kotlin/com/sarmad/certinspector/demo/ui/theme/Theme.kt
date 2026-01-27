package com.sarmad.certinspector.demo.ui.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val LightColors = lightColorScheme(
    primary = Primary,
    onPrimary = Color.White,
    secondary = Secondary,
    background = Background,
    surface = Surface,
    error = Error
)

private val DarkColors = darkColorScheme(
    primary = DarkPrimary,
    background = DarkBackground,
    surface = DarkSurface
)

@Composable
fun CertInspectorTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val colorScheme = if (darkTheme) DarkColors else LightColors

    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography(),
        content = content
    )
}