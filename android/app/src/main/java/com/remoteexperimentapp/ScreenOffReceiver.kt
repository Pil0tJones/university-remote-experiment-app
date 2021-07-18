package com.remoteexperimentapp

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.util.Log
import com.remoteexperimentapp.network.ExperimentApi
import com.remoteexperimentapp.network.ScreenStateInfo
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import java.sql.Timestamp


class ScreenOffReceiver: BroadcastReceiver() {

    override fun onReceive(context: Context?, intent: Intent?) {
        if(intent!!.action == Intent.ACTION_SCREEN_OFF) {
            val timestamp = Timestamp(System.currentTimeMillis())
            val userPref = context!!.getSharedPreferences("user_preferences", Context.MODE_PRIVATE)
            val userId = userPref.getString("user_id","userID")
            val screenStateInfo = ScreenStateInfo(
                    screenState = "off",
                    timestamp = timestamp,
                    user_id = userId!!
            )
            GlobalScope.launch {
                try {
                    ExperimentApi.retrofitService.screenStateChange(screenStateInfo)
                } catch(e: Exception) {
                    Log.d("ERROR", e.toString())
                }
            }

        }
    }
}