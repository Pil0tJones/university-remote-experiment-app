package com.remoteexperimentapp

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.widget.Toast
import com.remoteexperimentapp.network.ExperimentApi
import com.remoteexperimentapp.network.ScreenStateInfo
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import java.sql.Timestamp


class ScreenOffReceiver: BroadcastReceiver() {


    override fun onReceive(context: Context?, intent: Intent?) {
        if(intent!!.action == Intent.ACTION_SCREEN_OFF) {
            Toast.makeText(context!!, "Screen Off", Toast.LENGTH_SHORT).show()
            val timestamp = Timestamp(System.currentTimeMillis())
            val screenStateInfo = ScreenStateInfo(
                    screenState = "off",
                    timestamp = timestamp
            )
            GlobalScope.launch {
                ExperimentApi.retrofitService.screenStateChange(screenStateInfo)
            }

        }
    }
}