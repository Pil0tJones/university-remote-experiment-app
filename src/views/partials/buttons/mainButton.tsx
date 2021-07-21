import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface MainButtonProps {
    validated?: boolean;
    onPress: (() => void);
    children: React.ReactNode;
}

export const MainButton = (props: MainButtonProps) => {
    return (
        <View style={styles.buttonsWrapper}>
            <TouchableOpacity
                disabled={props.validated}
                onPress={props.onPress}
                style={styles.button}>
                <LinearGradient style={styles.gradient} colors={props.validated ? ['#e5e5e5', '#ADADAD'] : ['#38B0C0', '#27D6EB']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        maxHeight: 85
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
    },
    buttonsWrapper: {
        maxHeight: 100,
        paddingBottom: 20,
        flex: 1,
        justifyContent: 'flex-end',
        width: 300,
    },
})