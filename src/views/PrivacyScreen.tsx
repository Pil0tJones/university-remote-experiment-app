import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import LinearGradient from 'react-native-linear-gradient';



export const PrivacyScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <View>
                    <Text style={styles.privacyHeader}>
                        During the experiment the app will collect the following information anonymously
                    </Text>
                </View>
                    <Unorderedlist style={styles.align}>
                        <Text style={styles.splashText}>
                            Demopgraphicsj
                    </Text>
                    </Unorderedlist>


                    <Unorderedlist style={styles.align}>
                        <Text style={styles.splashText}>
                            Demopgraphics
                    </Text>
                    </Unorderedlist>
                    <Unorderedlist style={styles.align}>
                        <Text style={styles.splashText}>
                            Demopgraphics
                    </Text>
                    </Unorderedlist>
                    <Unorderedlist style={styles.align}>
                        <Text style={styles.splashText}>
                            Demopgraphics
                    </Text>
                    </Unorderedlist>
                    <Unorderedlist style={styles.align}>
                        <Text style={styles.splashText}>
                            Demopgraphics
                    </Text>
                    </Unorderedlist>
                    <Unorderedlist style={styles.align}>
                        <Text style={styles.splashText}>
                            Demopgraphics
                    </Text>
                    </Unorderedlist>
                    <Unorderedlist style={styles.align}>
                        <Text style={styles.splashText}>
                            Demopgraphics
                    </Text>
                    </Unorderedlist>

            </View>
            <View style={styles.buttonsWrapper}>
                <View style={styles.consentNoteContainer}>
                    <Text style={styles.consentNote}>
                        By clicking on get started, you consent that we collect the above mentioned data.
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Demographics')
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
    splashText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#80969F',
        fontFamily: 'Poppins-Regular',
    },
    privacyHeader: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: '#002D40',
        textAlign: 'center',
        paddingBottom: 50
    },
    textContainer: {
    },
    align: {
        alignSelf: 'center',
        marginVertical: 5
    },
    textWrapper: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 2.5,
        marginTop: 100,
        marginHorizontal: 35
    },
    buttonsWrapper: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        width: 300

    },

    buttonContainer: {
        flex: 0.5,
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 16,
        alignSelf: 'center',
        color: '#FFFFFF',
        fontFamily: 'Poppins-SemiBold'

    },
    consentNote: {
        fontSize: 12,
        color: '#80969F',
        fontFamily: 'Poppins-Regular',
    },
    consentNoteContainer: {
        marginHorizontal: 15,
  
        marginBottom: 10
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