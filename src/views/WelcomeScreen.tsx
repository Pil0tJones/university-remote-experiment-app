import React, { useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import Orientation from 'react-native-orientation';
import { MainButton } from './partials/buttons/mainButton'
import { Headline } from './partials/headline/headline'

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Intro'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
  };


export const    IntroScreen = ({ navigation }: Props) => {

    useEffect(() => {
        Orientation.lockToPortrait();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <View>
                    <Image source={require("../assets/images/uni-potsdam-logo.png")} />
                </View>
                <Headline text="Willkommen zum 'Remote - Experiment'" marginTop={25} fontSize={30} />
                <View>
                    <Text style={styles.splashText}>
                        Auf dem folgenden Screen informieren wir Sie über die von uns gesammelten Daten und bitten Sie um Ihre Zustimmung.
                    </Text>
                </View>
            </View>
            <MainButton buttonText={"Weiter"} onPress={() => navigation.navigate("PrivacyScreen")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 35
    },
    splashText: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 24,
        color: '#80969F',
        fontFamily: 'Poppins-Regular',
        paddingTop: 40,
    },
    textWrapper: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 2.5,
        marginTop: 50
    }
})


