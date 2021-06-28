package com.remoteexperimentapp

import android.content.Context
import android.content.SharedPreferences
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod


class ScreenListenerModule internal constructor(context: ReactApplicationContext?) : ReactContextBaseJavaModule(context) {

    override fun getName(): String {
        return "ScreenListenerModule"
    }


    private fun setPreferences (user_id:String) {
        Log.d("PREFERENCE", user_id)
        val userSharedPrefFile = "userPrefFile"
        val sharedPreferences: SharedPreferences = this.reactApplicationContext.getSharedPreferences(userSharedPrefFile, Context.MODE_PRIVATE)
        val editor: SharedPreferences.Editor =  sharedPreferences.edit()
        editor.putString("user_id", user_id)
        editor.apply()
        editor.commit()
    }


    @ReactMethod
    fun startScreenChangeService(user_id:String) {
        Log.d("LOOOOOOOGGGer_id", "LOG DAT SHIT")
        Log.d("PREFERENCEEEEEEEEEEEE", user_id)
        setPreferences(user_id)
        ScreenChangeService.startService(this.reactApplicationContext, "Foreground Service is running...")

    }

    @ReactMethod
    fun stopScreenChangeService() {
        ScreenChangeService.stopService(reactApplicationContext)
    }
}