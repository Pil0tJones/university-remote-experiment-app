import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { AppState } from '../../../redux/types'
import { validateForm } from '../../../redux/forms/forms.actions'
import { setCurrentAnswer } from '../../../redux/currentAnswer/currentAnswer.actions'
import CheckBox from '@react-native-community/checkbox';
import { useDispatch, useSelector } from 'react-redux';

interface DisturbedState {
    disturbed: boolean | undefined;
    notDisturbed: boolean | undefined;
}


export const BinaryOpenAnswer = () => {
    const dispatch = useDispatch();
    const [disturbed, setDisturbed] = useState<DisturbedState>({
        disturbed: undefined,
        notDisturbed: undefined
    })
    const [input, setInput] = useState("")

    useEffect(() => {
        if(disturbed.disturbed !== undefined || disturbed.notDisturbed !== undefined) {
            dispatch(validateForm(true))
        } else {
            dispatch(validateForm(false))
        }
    })

   const changeHandler = () => {
        dispatch(setCurrentAnswer(input))
   }

    return (
        <View style={styles.binaryAnswerContainer}>
            <View style={styles.answersWrapper}>
                <View style={styles.answer}>
                    <CheckBox value={disturbed.disturbed} onValueChange={() => {
                        setDisturbed({disturbed: true,notDisturbed:false})
                    }}
                    />
                    <Text>Ja</Text>
                </View>
                <View style={styles.answer}>
                    <CheckBox value={disturbed.notDisturbed} onValueChange={() => {
                        dispatch(setCurrentAnswer(2))
                        setDisturbed({disturbed: false,notDisturbed:true})
                    }}
                    />
                    <Text>Nein</Text>
                </View>
            </View>
            {disturbed.disturbed && (
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Bitte beschreibe wie du gestört wurdest..." value={input} onChange={changeHandler} onChangeText={setInput} style={styles.textInput} />
                </View>

            )}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
    flex: 1,
    paddingTop: 30
    },
    binaryAnswerContainer: {
        display: 'flex',
        flex: 1,
        paddingBottom: 30
    },
    textInput: {
        borderColor: 'black',
        textAlignVertical: 'top',
        borderWidth: .5,
        borderRadius: 10,
        flex: 10,
    },
    answer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    answersWrapper: {
        flexDirection: 'row',
        justifyContent:'center',
        paddingTop: 15
    },
})