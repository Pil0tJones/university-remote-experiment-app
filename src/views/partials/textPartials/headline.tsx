import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface MainButtonProps {
    fontSize: number;
    marginTop: number;
    children: React.ReactNode;
    style?: any

}

export const Headline = (props: MainButtonProps) => {
    return (
        <View style={[styles.textContainer,{ marginTop: props.marginTop}]}>
            <Text style={[styles.header,{ fontSize: props.fontSize, ...props.style }]}>{props.children}</Text>
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