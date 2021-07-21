import React, {useEffect} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import { RootStackParamList } from '../../App'
import { StackNavigationProp } from '@react-navigation/stack';

import {CustomText} from './partials/textPartials/customText'
import { MainButton } from './partials/buttons/mainButton';
import Messages from './messages/messages.de'
import Orientation from 'react-native-orientation';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList,'PreVideoScreen'>;
type Props = {navigation: ProfileScreenNavigationProp;}

export const PreVideoScreen = ({ navigation }:Props) => {

    useEffect(() => {
        return () => {
            Orientation.unlockAllOrientations()
        }
    })
    
    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <CustomText>
                   {Messages.preVideoText}
                </CustomText>
            </View>
            <MainButton onPress={() => navigation.navigate("VideoScreen")}>
                {Messages.watchVideo}
                </MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal:35
    },
    preVideoHeader: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: '#002D40',
        textAlign: 'center',

    },
    textWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3,
    }
})


