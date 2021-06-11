import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../redux/user/user.types';
import { userCreationRequest } from '../redux/user/user.actions'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



export const IntroScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const userState: UserState = useSelector(state => state.userState)

    // const registerUser = () => {
    //     if(!userState.id) {
    //         const userId = + new Date;
    //         dispatch(userCreationRequest(userId.toString(), true, 21))
    //     }
    // }

    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <View>
                    <Image source={require("../assets/images/uni-potsdam-logo.png")} />
                </View>
                <View>
                    <Text style={styles.splashHeader}>
                        Welcome to our remote experiment App
                    </Text>
                </View>
                <View>
                    <Text style={styles.splashText}>
                        On the follwing slide we are informing you about the data we collect and ask for your informed conset
                    </Text>
                </View>
            </View>
            <View style={styles.buttonsWrapper}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('PrivacyScreen')                    
                    }}
                    style={styles.buttonContainer}>
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
    splashHeader: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 30,
        color: '#002D40',
        textAlign: 'center',
        marginTop: 20
    },
    textWrapper: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 2.5,
        marginTop: 50
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


