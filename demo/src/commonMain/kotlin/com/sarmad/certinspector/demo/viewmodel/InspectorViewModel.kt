package com.sarmad.certinspector.demo.viewmodel

import com.sarmad.certinspector.CertInspector
import com.sarmad.certinspector.ChainAnalysis
import com.sarmad.certinspector.domain.model.InspectionResult
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

class InspectorViewModel {

    private val inspector = CertInspector()
    private val viewModelScope = CoroutineScope(SupervisorJob() + Dispatchers.Default)

    private val _uiState = MutableStateFlow<UiState>(UiState.Idle)
    val uiState: StateFlow<UiState> = _uiState.asStateFlow()

    fun inspectUrl(url: String) {
        if (url.isBlank()) {
            _uiState.value = UiState.Error("URL cannot be empty")
            return
        }

        _uiState.value = UiState.Loading

        viewModelScope.launch {
            when (val result = inspector.inspectUrl(url)) {
                is InspectionResult.Success -> {
                    _uiState.value = UiState.Success(result.data)
                }
                is InspectionResult.Error -> {
                    _uiState.value = UiState.Error(result.exception.message ?: "Unknown error")
                }
            }
        }
    }

    fun reset() {
        _uiState.value = UiState.Idle
    }
}

sealed class UiState {
    data object Idle : UiState()
    data object Loading : UiState()
    data class Success(val analysis: ChainAnalysis) : UiState()
    data class Error(val message: String) : UiState()
}