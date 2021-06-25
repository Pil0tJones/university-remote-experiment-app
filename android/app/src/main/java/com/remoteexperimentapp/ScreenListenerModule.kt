package com.remoteexperimentapp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod


class ScreenListenerModule internal constructor(context: ReactApplicationContext?) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "ScreenListenerModule"
    }

    @ReactMethod
    fun startScreenChangeService() {
        ScreenChangeService.startService(this.reactApplicationContext, "Foreground Service is running...")
    }

    @ReactMethod
    fun stopScreenChangeService() {
        ScreenChangeService.stopService(reactApplicationContext)
    }
}