import React, {useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    BackHandler,
    NativeModules
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import { UserState } from '../redux/user/user.types';
import { AppState } from '../redux/types';

import { StackNavigationProp } from '@react-navigation/stack';
import { MainButton } from './partials/buttons/mainButton';

import Messages from './messages/messages.de';
import { RootStackParamList } from '../../App';
import { Headline } from './partials/textPartials/headline';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList,'PrivacyScreen'>;

type Props = {navigation: ProfileScreenNavigationProp;};



export const PrivacyScreen = ({ navigation }:Props) => {
    const userState: UserState = useSelector((state: AppState) => state.userState)
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true);
    }, [])

    // MOVE THIS TO AFTER VIDEO
    // useEffect(() => {
    //     if (userState.id) {
    //         NativeModules.ScreenListenerModule.startScreenChangeService(userState.id);
    //     }
    // }, [userState])

    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Headline marginTop={50} fontSize={20}>
                    {Messages.anonymusDataCollection}
                    </Headline>
                <FlatList
                    style={styles.list}
                    data={[
                        { key: 'Demografische Daten' },
                        { key: 'Bildschirmzeit ' },
                        { key: 'Antworten' },
                        { key: 'Antwortzeiten' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
            <View style={styles.consentNoteContainer}>
                <Text style={styles.consentNote}>
                    {Messages.privacyNote}
                    </Text>
                <MainButton
                    onPress={() => {
                        navigation.navigate('DemographicsScreen')
                    }}
                >
                    {Messages.buttonWeiter}
                    </MainButton>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 35,
    },
    item: {
        fontSize: 16,
        marginTop: 25,
        lineHeight: 24,
        color: 'grey',
        fontFamily: 'Poppins-Bold',
        fontWeight: '700',
        textAlign: 'center'
    },
    textWrapper: {
        flex: 2.8,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    list: {
        marginTop: 75,
    },
    consentNote: {
        paddingTop: 45,
        paddingLeft: 10,
        width: 300,
        fontSize: 12,
        color: 'red',
        fontFamily: 'Poppins-Regular',
        textAlign: 'left',  

    },
    consentNoteContainer: {
        flex: 1,
        alignItems: 'center',
    },
})