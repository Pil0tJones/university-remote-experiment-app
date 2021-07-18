import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TextInput } from 'react-native';
import {validateForm} from '../../../redux/forms/forms.actions'
import {setCurrentAnswer} from '../../../redux/currentAnswer/currentAnswer.actions'
import {useDispatch, useSelector} from 'react-redux';
import {QuestionState} from '../../../redux/questions/questions.types'


export const OpenAnswer = (props: any) => {
    const dispatch = useDispatch();
    const questionState: QuestionState = useSelector(state=> state.questionState)
    const currentAnswerState = useSelector(state=> state.currentAnswerState)
    const [input, setInput] = useState("")

    const setUserInput = () => {
        dispatch(setCurrentAnswer(input))
    }

    return (
        <View style={styles.container}>
            <TextInput value={input} onChangeText={setInput} onChange={setUserInput} style={styles.textInput}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flex: 1,
        paddingTop: 30,
        justifyContent: 'center',
    },
    textInput: {
        borderColor: 'black',
        borderWidth: .5,
        borderRadius: 10,
        textAlignVertical: 'top',
        flex: 2,
    },


})