import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { validateForm } from '../../../redux/forms/forms.actions'
import { setCurrentAnswer } from '../../../redux/currentAnswer/currentAnswer.actions'
import { useDispatch } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import { CustomText } from '../textPartials/customText';
import { Headline } from '../textPartials/headline';
import MESSAGES from '../../messages/messages.de';



export const MultipleChoice = () => {
    const dispatch = useDispatch();
    const [currentInput, setCurrentInput] = useState("");

    useEffect(() => {
        if (currentInput === "male" || currentInput === 'female' || currentInput === 'other') {
            dispatch(validateForm(true))
            dispatch(setCurrentAnswer(currentInput))
        } else {
            dispatch(validateForm(false))
        }

    }, [currentInput])

    return (
        <>
            <Headline fontSize={20} marginTop={0}>
                {MESSAGES.gender}
            </Headline>
            <View style={styles.answersWrapper}>
                <View style={styles.answer}>
                    <CheckBox value={currentInput === 'male' ? true : false} onValueChange={value => {
                        setCurrentInput(() => 'male')
                    }}
                    />
                    <CustomText>{MESSAGES.genderMale}</CustomText>
                </View>
                <View style={styles.answer}>
                    <CheckBox value={currentInput === 'female' ? true : false} onValueChange={value => {
                        setCurrentInput(() => 'female')
                    }}
                    />
                    <CustomText>{MESSAGES.genderFemale}</CustomText>
                </View>
                <View style={styles.answer}>
                    <CheckBox value={currentInput === 'other' ? true : false} onValueChange={value => {
                        setCurrentInput(() => 'other')
                    }}
                    />
                    <CustomText>{MESSAGES.genderOther}</CustomText>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    answers: {
        flex: 2.5,
        justifyContent: 'space-between',
    },
    answer: {
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,


    },
    answersWrapper: {
        flexDirection: 'row',
        alignContent: 'center',
        paddingTop: 15
    },
    answerText: {
        fontSize: 18,
        lineHeight: 24,
        flex: 1,
        paddingRight: 50,
        color: '#80969F',
        fontFamily: 'Poppins-Regular',
        textAlign: 'center'
    }
})