import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



export const PreVideoScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Text style={styles.preVideoHeader}>
                    You will be now shown a short video. Please watch it attentively 
                </Text>
            </View>
            <View style={styles.buttonsWrapper}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Question1')
                    }}
                    style={styles.buttonContainer}
                >
                    <LinearGradient style={styles.gradient} colors={['#38B0C0', '#27D6EB']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
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


