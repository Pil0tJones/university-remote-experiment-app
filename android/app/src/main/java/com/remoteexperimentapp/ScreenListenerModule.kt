package com.remoteexperimentapp

import android.content.Context
import android.content.SharedPreferences
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod


class ScreenListenerModule internal constructor(context: ReactApplicationContext?) : ReactContextBaseJavaModule(context) {

    override fun getName(): String {
        return "ScreenListenerModule"
    }

    private var PRIVATE_MODE = 0
    private val PREF_NAME = "user_id"
    val sharedPref: SharedPreferences = this.reactApplicationContext.getSharedPreferences(PREF_NAME, PRIVATE_MODE)

    private fun setPreferences (user_id: String) {
        val userIdPref = "user_preferences"
        val sharedPreferences: SharedPreferences = this.reactApplicationContext.getSharedPreferences(userIdPref, Context.MODE_PRIVATE)
        val editor: SharedPreferences.Editor =  sharedPreferences.edit()
        editor.putString("user_id", user_id)
        editor.apply()
        editor.commit()
    }

    @ReactMethod
    fun startScreenChangeService(user_id:String) {
        setPreferences(user_id)
        ScreenChangeService.startService(this.reactApplicationContext, "Datenmessung")

    }

    @ReactMethod
    fun stopScreenChangeService() {
        ScreenChangeService.stopService(reactApplicationContext)
    }
}