package com.remoteexperimentapp

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.util.Log
import android.widget.Toast
import com.remoteexperimentapp.network.ExperimentApi
import com.remoteexperimentapp.network.ScreenStateInfo
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import java.sql.Timestamp

class ScreenOnReceiver: BroadcastReceiver() {
    override fun onReceive(context: Context?, intent: Intent?) {
        val timestamp = Timestamp(System.currentTimeMillis())
        if(intent!!.action == Intent.ACTION_SCREEN_ON) {
            val screenStateInfo = ScreenStateInfo(
                    screenState = "on",
                    timestamp = timestamp
            )
            GlobalScope.launch {
                ExperimentApi.retrofitService.screenStateChange(screenStateInfo)
            }
            Toast.makeText(context!!, "Screen On", Toast.LENGTH_SHORT).show()
            Log.d("TAG", "THIIIIS WOOOORKS")
        }
    }
}