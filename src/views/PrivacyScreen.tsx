import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { NativeModules } from 'react-native';
import { UserState } from '../redux/user/user.types';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    BackHandler
} from 'react-native';
import { MainButton } from './partials/buttons/mainButton'
import { Headline } from './partials/headline/headline'



export const PrivacyScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const userState: UserState = useSelector(state => state.userState)
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true);
    }, [])

    useEffect(() => {
        if (userState.id) {
            NativeModules.ScreenListenerModule.startScreenChangeService(userState.id);
        }
    }, [userState])

    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Headline text="Während des Experiments sammelt die App anonymisiert folgende Daten" marginTop={50} fontSize={20} />
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
                    Klicken Sie auf "Weiter", erklären Sie sich damit einverstanden, dass wir die oben genannten Daten erheben.
                    </Text>
                <MainButton
                    onPress={() => {
                        navigation.navigate('DemographicsScreen')
                    }}
                    buttonText={"Weiter"}
                />

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