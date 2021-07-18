import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface MainButtonProps {
    fontSize: number;
    marginTop: number;
    text: string;
}

export const Headline = (props: MainButtonProps) => {
    return (
        <View style={[styles.textContainer,{ marginTop: props.marginTop}]}>
            <Text style={[styles.header,{ fontSize: props.fontSize}]}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        marginTop: 30
    },
    header: {
        fontFamily: 'Poppins-SemiBold',
        color: '#002D40',
        textAlign: 'center',
    }
})