package com.sarmad.certinspector.demo

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application
import androidx.compose.ui.window.rememberWindowState
import com.sarmad.certinspector.demo.ui.screen.InspectorScreen
import com.sarmad.certinspector.demo.ui.theme.CertInspectorTheme
import com.sarmad.certinspector.demo.viewmodel.InspectorViewModel

fun main() = application {
    Window(
        onCloseRequest = ::exitApplication,
        title = "Certificate Inspector",
        state = rememberWindowState(width = 800.dp, height = 900.dp)
    ) {
        CertInspectorTheme {
            Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                val viewModel = InspectorViewModel()

                InspectorScreen(
                    viewModel = viewModel,
                    modifier = Modifier.padding(innerPadding)
                )
            }
        }
    }
}
