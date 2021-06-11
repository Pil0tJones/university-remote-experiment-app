import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';



export const PostVideoSreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <View>
                    <Text style={styles.splashHeader}>
                    Thank you for watching the video. Please wait until you receive a notification to continue with the experiment. 
                    In the meantime, you can leave the experiment app and use your phone normally.
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    splashText: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 24,
        color: '#80969F',
        fontFamily: 'Poppins-Regular',
        width: 300,
        paddingTop: 10,
    },
    splashHeader: {

        fontFamily: 'Poppins-SemiBold',
        fontSize: 30,
        color: '#002D40',
        textAlign: 'center',

    },
    textWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3
    },
})