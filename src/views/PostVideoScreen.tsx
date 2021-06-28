import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { UserState } from '../redux/user/user.types'
import ReactNativeAN from 'react-native-alarm-notification';
import BackgroundTimer from 'react-native-background-timer';
import { NativeModules } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';



export const PostVideoSreen = ({ navigation }) => {
    const [disabled, setDisabled] = useState(true)
    const userState: UserState = useSelector(state => state.userState)


    useEffect(() => {
        NativeModules.ScreenListenerModule.startScreenChangeService(userState.id)
        scheduleAlarm();
        return () => {
            NativeModules.ScreenListenerModule.stopScreenChangeService()
        }
    }, [])



    const scheduleAlarm = async () => {
        const fireDate = ReactNativeAN.parseDate(new Date(Date.now() + 15000));     // set the fire date for 1 second from now

        const alarmNotifData = {
            title: "Your Pause Is Finished",
            message: "Please return to the app and continue with the questionnaire",
            channel: "my_channel_id",
            small_icon: "ic_launcher",

            // You can add any additional data that is important for the notification
            // It will be added to the PendingIntent along with the rest of the bundle.
            // e.g.
            data: { foo: "bar" },
        };

        await ReactNativeAN.scheduleAlarm({ ...alarmNotifData, fire_date: fireDate })
        BackgroundTimer.setTimeout(() => {
            setDisabled(false)
        }, 15000);
        
    }




    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <View>
                    <Text style={styles.splashHeader}>
                        Thank you for watching the video. Please wait until you receive a notification to continue with the experiment.
                        In the meantime, you can leave the experiment app and use your phone normally.
                    </Text>
                </View>
            </View>
            <View style={styles.buttonsWrapper}>
                <TouchableOpacity
                    disabled={disabled}
                    onPress={() => {
                        ReactNativeAN.stopAlarmSound();
                        ReactNativeAN.removeAllFiredNotifications();
                        NativeModules.ScreenListenerModule.stopScreenChangeService()
                        navigation.navigate('PostVideoScreen')
                    }}
                    style={styles.buttonContainer}
                >
                    <LinearGradient style={styles.gradient} colors={disabled ? ['#e5e5e5', '#ADADAD'] : ['#38B0C0', '#27D6EB']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    splashText: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 24,
        color: '#80969F',
        fontFamily: 'Poppins-Regular',
        width: 300,
        paddingTop: 10,
    },
    splashHeader: {

        fontFamily: 'Poppins-SemiBold',
        fontSize: 30,
        color: '#002D40',
        textAlign: 'center',

    },
    textWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3
    },
    buttonsWrapper: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        width: 300

    },

    buttonContainer: {
        flex: 0.4,
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 16,
        alignSelf: 'center',
        color: '#FFFFFF',
        fontFamily: 'Poppins-SemiBold'

    },
    gradient: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        elevation: 6,
    }
})