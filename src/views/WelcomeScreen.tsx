import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App'

import Messages from './messages/messages.de'
import Orientation from 'react-native-orientation';
import { MainButton } from './partials/buttons/mainButton'
import { CustomText } from './partials/textPartials/customText'
import { Headline } from './partials/textPartials/headline'

//Navigation Props
type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList,'Intro'>;
type Props = { navigation: ProfileScreenNavigationProp; };


export const WelcomeScreen = ({ navigation }: Props) => {

    useEffect(() => {
        Orientation.lockToPortrait();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <View>
                    <Image source={require("../assets/images/uni-potsdam-logo.png")} />
                </View>
                <Headline marginTop={25} fontSize={30}>
                    {Messages.welcomeHeader}
                </Headline>
                <View>
                    <CustomText style={{"paddingTop": 30}}>
                        {Messages.welcomeText}
                    </CustomText>
                </View>
            </View>
            <MainButton onPress={() => navigation.navigate("OnboardingScreen")}>
                {Messages.buttonWeiter}
                </MainButton>
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
    textContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 2.5,
        marginTop: 50
    }
})


