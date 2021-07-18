import React, {useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { MainButton } from './partials/buttons/mainButton';
import Orientation from 'react-native-orientation';



export const PreVideoScreen = ({ navigation }) => {

    useEffect(() => {
        return () => {
            Orientation.unlockAllOrientations()
        }
    })
    
    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Text style={styles.preVideoHeader}>
                    Ihnen wird nun ein Video gezeigt. Bitte schauen Sie es aufmerksam an. 
                </Text>
            </View>
            <MainButton buttonText={"Video anschauen"} onPress={() => navigation.navigate("VideoScreen")} />
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


