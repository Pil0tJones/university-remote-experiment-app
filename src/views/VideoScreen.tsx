import React, { useState } from 'react';
import { RootStackParamList } from '../../App'
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Dimensions, StyleSheet, Alert, Text } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'VideoScreen'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
  };



export const VideoScreen = ({ navigation }:Props) => {
    const { width: SCREEN_WIDTH } = Dimensions.get("window");
    const [isFullScreen, setIsFullScreen] = useState(false)

    const screenChangeHandler = () => {
        setIsFullScreen(() => !isFullScreen)
    }


    const onStateChange = (state: string) => {
        if (state === "ended") {
            Alert.alert(
                "Vielen Dank für Ihre Aufmerksamkeit",
                "Bitte fahren Sie fort",
                [
                    { text: "Weiter", onPress: () => navigation.navigate("PostVideoScreen") }
                ]
            );
        }
    }

    return (
        <View style={styles.container}>
            <YoutubePlayer
                play={true}
                height={250}
                width={SCREEN_WIDTH}
                videoId={'J_lEs4FYkhs'}
                onChangeState={onStateChange}
                onFullScreenChange={screenChangeHandler}
            />
            {!isFullScreen &&
                <View style={styles.clue}>
                    <Text>Bitte Vollbild Modus nutzen</Text>
                </View>
            }
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center'

    },
    clue: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 16,
        lineHeight: 24,
        color: '#80969F',
        fontFamily: 'Poppins-Regular',
    }
})
