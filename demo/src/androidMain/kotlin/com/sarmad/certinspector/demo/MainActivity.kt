package com.sarmad.certinspector.demo

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.ui.Modifier
import com.sarmad.certinspector.demo.ui.screen.InspectorScreen
import com.sarmad.certinspector.demo.ui.theme.CertInspectorTheme
import com.sarmad.certinspector.demo.viewmodel.InspectorViewModel

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        setContent {
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
}