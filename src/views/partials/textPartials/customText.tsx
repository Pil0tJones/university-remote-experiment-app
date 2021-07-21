import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface CustomTextProps {
    children: React.ReactNode
    style?: {[key:string]: String|Number}
}

export const CustomText = (props: CustomTextProps) => {
    return (
        <Text style={{ ...styles.splashText, ...props.style }}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    splashText: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 24,
        color: '#80969F',
        fontFamily: 'Poppins-Regular',
    }
})