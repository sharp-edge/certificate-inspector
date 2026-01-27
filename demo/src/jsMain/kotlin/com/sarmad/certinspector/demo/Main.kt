package com.sarmad.certinspector.demo

import androidx.compose.runtime.*
import com.sarmad.certinspector.demo.viewmodel.InspectorViewModel
import com.sarmad.certinspector.demo.viewmodel.UiState
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.renderComposable

fun main() {
    renderComposable(rootElementId = "root") {
        WebApp()
    }
}

@Composable
fun WebApp() {
    val viewModel = remember { InspectorViewModel() }
    val uiState by viewModel.uiState.collectAsState()
    var urlInput by remember { mutableStateOf("") }

    Style(AppStyles)

    Div({ classes(AppStyles.container) }) {
        H1({ classes(AppStyles.title) }) {
            Text("Certificate Inspector")
        }

        P({ classes(AppStyles.subtitle) }) {
            Text("Kotlin Multiplatform Demo - Web Platform")
        }

        Div({ classes(AppStyles.inputGroup) }) {
            Input(type = InputType.Text) {
                classes(AppStyles.input)
                value(urlInput)
                onInput { urlInput = it.value }
                attr("placeholder", "example.com or https://example.com")
            }

            Button({
                classes(AppStyles.button)
                if (uiState is UiState.Loading) {
                    attr("disabled", "true")
                }
                onClick { viewModel.inspectUrl(urlInput) }
            }) {
                Text(if (uiState is UiState.Loading) "Inspecting..." else "Inspect Certificate")
            }
        }

        when (val state = uiState) {
            is UiState.Idle -> {
                Div({ classes(AppStyles.infoBox) }) {
                    P { Text("Enter a URL to inspect its SSL certificate") }
                }
            }

            is UiState.Loading -> {
                Div({ classes(AppStyles.loading) }) {
                    P { Text("Loading...") }
                }
            }

            is UiState.Success -> {
                Div({ classes(AppStyles.successBox) }) {
                    P { Text("Success! But this shouldn't happen in browser...") }
                }
            }

            is UiState.Error -> {
                Div({ classes(AppStyles.errorBox) }) {
                    H3 { Text("Browser Limitation") }
                    P({ classes(AppStyles.errorMessage) }) {
                        Text(state.message)
                    }

                    Div({ classes(AppStyles.infoSection) }) {
                        H4 { Text("Why This Happens") }
                        P {
                            Text("Modern browsers intentionally block JavaScript from accessing SSL/TLS certificate details for security reasons. ")
                            Text("This prevents websites from fingerprinting users and violating privacy.")
                        }

                        H4 { Text("Available Options") }
                        Ul {
                            Li { Text("📱 Use the Android app for full certificate inspection") }
                            Li { Text("🖥️ Use the Desktop app for full certificate inspection") }
                            Li { Text("🌐 Web-based inspectors (like SSL Labs) use backend servers to perform inspections") }
                        }
                    }

                    Button({
                        classes(AppStyles.button, AppStyles.secondaryButton)
                        onClick { viewModel.reset() }
                    }) {
                        Text("Try Another URL")
                    }
                }
            }
        }
    }
}

object AppStyles : StyleSheet() {
    val container by style {
        display(DisplayStyle.Flex)
        flexDirection(FlexDirection.Column)
        alignItems(AlignItems.Center)
        padding(32.px)
        fontFamily("system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif")
        maxWidth(800.px)
        margin(0.px)
        property("margin-left", "auto")
        property("margin-right", "auto")
    }

    val title by style {
        color(Color("#1976D2"))
        marginBottom(8.px)
    }

    val subtitle by style {
        color(Color("#666"))
        marginTop(0.px)
        marginBottom(32.px)
    }

    val inputGroup by style {
        display(DisplayStyle.Flex)
        flexDirection(FlexDirection.Column)
        width(100.percent)
        property("gap", "12px")
        marginBottom(24.px)
    }

    val input by style {
        padding(12.px)
        fontSize(16.px)
        property("border-radius", "8px")
        border(1.px, LineStyle.Solid, Color("#ddd"))
        width(100.percent)
        property("box-sizing", "border-box")
    }

    val button by style {
        padding(12.px, 24.px)
        fontSize(16.px)
        backgroundColor(Color("#1976D2"))
        color(Color.white)
        border(0.px)
        property("border-radius", "8px")
        property("cursor", "pointer")
        property("font-weight", "bold")
        property("transition", "background-color 0.3s")
    }

    val secondaryButton by style {
        backgroundColor(Color("#666"))
        marginTop(16.px)
    }

    val infoBox by style {
        padding(24.px)
        backgroundColor(Color("#f5f5f5"))
        property("border-radius", "8px")
        property("text-align", "center")
        color(Color("#666"))
        width(100.percent)
        property("box-sizing", "border-box")
    }

    val loading by style {
        property("text-align", "center")
        padding(48.px)
        fontSize(18.px)
    }

    val successBox by style {
        padding(24.px)
        backgroundColor(Color("#e8f5e9"))
        property("border-radius", "8px")
        color(Color("#2e7d32"))
        width(100.percent)
        property("box-sizing", "border-box")
    }

    val errorBox by style {
        padding(24.px)
        backgroundColor(Color("#fff3e0"))
        property("border-radius", "8px")
        border(2.px, LineStyle.Solid, Color("#ff9800"))
        width(100.percent)
        property("box-sizing", "border-box")
    }

    val errorMessage by style {
        color(Color("#d84315"))
        property("font-weight", "500")
        property("line-height", "1.6")
        marginBottom(16.px)
    }

    val infoSection by style {
        backgroundColor(Color.white)
        padding(16.px)
        property("border-radius", "8px")
        marginTop(16.px)
        property("text-align", "left")
    }
}