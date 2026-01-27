plugins {
    alias(libs.plugins.kotlin.multiplatform)
    alias(libs.plugins.android.application)
    alias(libs.plugins.compose.compiler)
    alias(libs.plugins.compose.multiplatform)
}

kotlin {
    androidTarget {
        compilerOptions {
            jvmTarget.set(org.jetbrains.kotlin.gradle.dsl.JvmTarget.JVM_11)
        }
    }

    jvm("desktop")

    js(IR) {
        browser()
        binaries.executable()
    }

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(project(":library"))
                implementation(compose.runtime)
                implementation(compose.foundation)
                implementation(compose.material3)
                implementation(compose.ui)
                implementation(libs.kotlinx.coroutines.core)
                implementation(libs.kotlinx.datetime)
            }
        }

        val androidMain by getting {
            dependencies {
                implementation(libs.androidx.activity.compose)
                implementation(libs.androidx.lifecycle.viewmodel)
                implementation(libs.androidx.lifecycle.runtime.compose)
            }
        }

        val desktopMain by getting {
            dependencies {
                implementation(compose.desktop.currentOs)
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-swing:1.9.0")
            }
        }

        val jsMain by getting {
            dependencies {
                implementation(compose.html.core)
            }
        }
    }
}

android {
    namespace = "com.sarmad.certinspector.demo"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.sarmad.certinspector.demo"
        minSdk = 24
        targetSdk = 35
        versionCode = 1
        versionName = "1.0.0"
    }

    buildTypes {
        release {
            isMinifyEnabled = true
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
}

compose.desktop {
    application {
        mainClass = "com.sarmad.certinspector.demo.MainKt"
    }
}