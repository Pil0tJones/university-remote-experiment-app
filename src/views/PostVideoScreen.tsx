import React, { useEffect, useState } from 'react';
import { RootStackParamList } from '../../App'
import { StackNavigationProp } from '@react-navigation/stack';
import ReactNativeAN from 'react-native-alarm-notification';
import BackgroundTimer from 'react-native-background-timer';
import { NativeModules } from 'react-native';
import Orientation from 'react-native-orientation';
import { Headline } from './partials/headline/headline'
import { MainButton } from './partials/buttons/mainButton';
import {
    StyleSheet,
    View,
} from 'react-native';


type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PostVideoScreen'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
  };


export const PostVideoSreen = ({ navigation }:Props) => {
    const [disabled, setDisabled] = useState(true)


    useEffect(() => {
        Orientation.lockToPortrait();
        scheduleAlarm();
        return () => {
            NativeModules.ScreenListenerModule.stopScreenChangeService();
        }
    }, [])



    const scheduleAlarm = async () => {
        const fireDate = ReactNativeAN.parseDate(new Date(Date.now() + 60000));     // set the fire date for 1 second from now
        const alarmNotifData = {
            title: "Ihre Pause ist zu ende",
            message: "Bitte fahren Sie mit dem Experiment fort",
            channel: "my_channel_id",
            small_icon: "ic_launcher",
        };

        await ReactNativeAN.scheduleAlarm({ ...alarmNotifData, fire_date: fireDate })
        BackgroundTimer.setTimeout(() => {
            setDisabled(false)
        }, 60000);
        
    }




    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Headline marginTop={50} fontSize={24} text={"Es gibt nun eine kurze Pause. Bitte nutzen Sie Ihr Smartphone, wie auch sonst, wenn Sie in einer Situation sind, in der Sie warten müssen. In Kürze ertönt dann ein Signalton. Dann geht es mit der Studie weiter."} />
            </View>
            <MainButton
                validated={disabled}
                buttonText = "Weiter"
                onPress={() => {
                    ReactNativeAN.stopAlarmSound();
                    ReactNativeAN.removeAllFiredNotifications();
                    NativeModules.ScreenListenerModule.stopScreenChangeService()
                    navigation.navigate('QuestionScreen')
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 35,
        flex: 1,
        alignItems: 'center',
    },
    textWrapper: {
        alignItems: 'center',
        flex: 3
    },

})