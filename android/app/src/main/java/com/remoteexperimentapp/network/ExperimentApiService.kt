package com.remoteexperimentapp.network

import com.google.gson.annotations.SerializedName
import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.Body
import retrofit2.http.POST
import java.sql.Timestamp


class ScreenStateInfo(
        @field:SerializedName("screenState") val screenState: String,
        @field:SerializedName("timestamp") val timestamp: Timestamp
)



private val retrofit = Retrofit.Builder()
        .addConverterFactory(GsonConverterFactory.create())
        .baseUrl("https://05d059e5970c.ngrok.io")
        .build()


interface ExperimentApiService {
    @POST("screen-state-change")
    suspend fun screenStateChange(@Body screenStateInfo: ScreenStateInfo): Call<ScreenStateInfo>
}
object ExperimentApi {
    val retrofitService : ExperimentApiService by lazy {
        retrofit.create(ExperimentApiService::class.java)
    }
}
