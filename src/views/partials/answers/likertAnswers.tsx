import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { AppState } from '../../../redux/types'
import { validateForm } from '../../../redux/forms/forms.actions'
import { setCurrentAnswer } from '../../../redux/currentAnswer/currentAnswer.actions'
import { useDispatch, useSelector } from 'react-redux';
import { QuestionState } from '../../../redux/questions/questions.types'
import CheckBox from '@react-native-community/checkbox';



export const LikertAnswers = () => {
    console.log('here')
    const dispatch = useDispatch();
    const questionState: QuestionState = useSelector((state: AppState) => state.questionState)
    const currentAnswerState = useSelector((state: AppState) => state.currentAnswerState)

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex !== 0) {
            dispatch(validateForm(true))
        } else {
            dispatch(validateForm(false))
        }

    }, [currentIndex, currentAnswerState])

    return (
        <View style={styles.answers}>
            {questionState.question.questionAnswers && questionState.question.questionAnswers.length > 0 && (
                questionState.question.questionAnswers.map((item, index) => {
                    return (
                    <TouchableOpacity onPress={() => {
                        setCurrentIndex(() => index + 1)
                        dispatch(setCurrentAnswer(index + 1))
                    }}>
                        <View style={styles.answer}>
                            <CheckBox
                                disabled={false}
                                value={currentIndex === index + 1 ? true : false}
                                onChange={() => {
                                    setCurrentIndex(() => index + 1)
                                    dispatch(setCurrentAnswer(index + 1))
                                }}
                            />
                            <Text style={styles.answerText}>{item}</Text>
                        </View>
                    </TouchableOpacity>
                    )
                })
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    answers: {
        flex: 2.5,
        justifyContent: 'space-between',
    },
    answer: {
        backgroundColor: '#FAF6F6',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'nowrap',
        paddingVertical: 20,
        paddingLeft: 30,

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