import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import {validateForm} from '../../../redux/forms/forms.actions'
import {setCurrentAnswer} from '../../../redux/currentAnswer/currentAnswer.actions'
import {useDispatch, useSelector} from 'react-redux';
import {QuestionState} from '../../../redux/questions/questions.types'
import CheckBox from '@react-native-community/checkbox';


export const Likert4Answers = () => {
    const dispatch = useDispatch();
    const questionState: QuestionState = useSelector(state=> state.questionState)
    const currentAnswerState = useSelector(state=> state.currentAnswerState)

    const [answer1, setAnswer1] = useState(false);
    const [answer2, setAnswer2] = useState(false);
    const [answer3, setAnswer3] = useState(false);
    const [answer4, setAnswer4] = useState(false);

    useEffect(() => {
        if (answer1 || answer2 || answer3 || answer4) {
            dispatch(validateForm(true))
        } else {
            dispatch(validateForm(false))
        }

        if (!currentAnswerState.currentAnswer) {
            setAnswer1(() => false)
            setAnswer2(() => false)
            setAnswer3(() => false)
            setAnswer4(() => false)
        }
    },[answer1, answer2, answer3, answer4, currentAnswerState])

    return (
        <View style={styles.answers}>
            { questionState.question.questionAnswers && questionState.question.questionAnswers.length === 4 && 
            <>
            <TouchableOpacity onPress={() => {
                setAnswer2(() => false)
                setAnswer3(() => false)
                setAnswer4(() => false)
                setAnswer1(!answer1)
                dispatch(setCurrentAnswer(1))
            }}>
                <View style={styles.answer}>
                    <CheckBox
                        disabled={false}
                        value={answer1}
                        onChange={() => {
                            setAnswer2(() => false)
                            setAnswer3(() => false)
                            setAnswer4(() => false)
                            setAnswer1(!answer1)
                            dispatch(setCurrentAnswer(1))
                        }}
                    />
                    <Text style={styles.answerText}>{questionState.question.questionAnswers[0]}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                setAnswer1(() => false)
                setAnswer3(() => false)
                setAnswer4(() => false)
                setAnswer2(!answer2)
                dispatch(setCurrentAnswer(2))
            }}>
                <View style={styles.answer}>
                    <CheckBox
                        disabled={false}
                        value={answer2}
                        onChange={() => {
                            setAnswer2(() => false)
                            setAnswer3(() => false)
                            setAnswer4(() => false)
                            setAnswer2(!answer2)
                            dispatch(setCurrentAnswer(2))
                        }}
                    />
                    <Text style={styles.answerText}>{questionState.question.questionAnswers[1]}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                setAnswer1(() => false)
                setAnswer2(() => false)
                setAnswer4(() => false)
                setAnswer3(!answer3)
                dispatch(setCurrentAnswer(3))
            }}>
                <View style={styles.answer}>
                    <CheckBox
                        disabled={false}
                        value={answer3}
                        onChange={() => {
                            setAnswer2(() => false)
                            setAnswer3(() => false)
                            setAnswer4(() => false)
                            setAnswer3(!answer3)
                            dispatch(setCurrentAnswer(3))
                        }}
                    />
                    <Text style={styles.answerText}>{questionState.question.questionAnswers[2]}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                setAnswer1(() => false)
                setAnswer2(() => false)
                setAnswer3(() => false)
                setAnswer4(!answer4)
                dispatch(setCurrentAnswer(4))
            }}>
                <View style={styles.answer}>
                    <CheckBox
                        disabled={false}
                        value={answer4}
                        onChange={() => {
                            setAnswer2(() => false)
                            setAnswer3(() => false)
                            setAnswer4(() => false)
                            setAnswer4(!answer4)
                            dispatch(setCurrentAnswer(4))
                        }}
                    />
                    <Text style={styles.answerText}>{questionState.question.questionAnswers[3]}</Text>
                </View>
            </TouchableOpacity>
            </>
            }
        </View>
    )
}

export const Likert5Answers = (props: any) => {
    const dispatch = useDispatch();
    const questionState: QuestionState = useSelector(state=> state.questionState)
    const currentAnswerState = useSelector(state=> state.currentAnswerState)

    const [answer1, setAnswer1] = useState(false);
    const [answer2, setAnswer2] = useState(false);
    const [answer3, setAnswer3] = useState(false);
    const [answer4, setAnswer4] = useState(false);
    const [answer5, setAnswer5] = useState(false);

    useEffect(() => {
        if (answer1 || answer2 || answer3 || answer4 || answer5) {
            dispatch(validateForm(true))
        } else {
            dispatch(validateForm(false))
        }

        if (!currentAnswerState.currentAnswer) {
            setAnswer1(() => false)
            setAnswer2(() => false)
            setAnswer3(() => false)
            setAnswer4(() => false)
            setAnswer5(() => false)
        }
    },[answer1, answer2, answer3, answer4, answer5, currentAnswerState])

    return (
        <View style={styles.answers}>
            { questionState.question.questionAnswers  && 
            <>
            <TouchableOpacity onPress={() => {
                setAnswer2(() => false)
                setAnswer3(() => false)
                setAnswer4(() => false)
                setAnswer5(() => false)
                setAnswer1(!answer1)
                dispatch(setCurrentAnswer(1))
            }}>
                <View style={styles.answer}>
                    <CheckBox
                        disabled={false}
                        value={answer1}
                        onChange={() => {
                            setAnswer2(() => false)
                            setAnswer3(() => false)
                            setAnswer4(() => false)
                            setAnswer5(() => false)
                            setAnswer1(!answer1)
                            dispatch(setCurrentAnswer(1))
                        }}
                    />
                    <Text style={styles.answerText}>{questionState.question.questionAnswers[0]}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                setAnswer1(() => false)
                setAnswer3(() => false)
                setAnswer4(() => false)
                setAnswer5(() => false)
                setAnswer2(!answer2)
                dispatch(setCurrentAnswer(2))
            }}>
                <View style={styles.answer}>
                    <CheckBox
                        disabled={false}
                        value={answer2}
                        onChange={() => {
                            setAnswer2(() => false)
                            setAnswer3(() => false)
                            setAnswer4(() => false)
                            setAnswer5(() => false)
                            setAnswer2(!answer2)
                            dispatch(setCurrentAnswer(2))
                        }}
                    />
                    <Text style={styles.answerText}>{questionState.question.questionAnswers[1]}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                setAnswer1(() => false)
                setAnswer2(() => false)
                setAnswer4(() => false)
                setAnswer5(() => false)
                setAnswer3(!answer3)
                dispatch(setCurrentAnswer(3))
            }}>
                <View style={styles.answer}>
                    <CheckBox
                        disabled={false}
                        value={answer3}
                        onChange={() => {
                            setAnswer2(() => false)
                            setAnswer3(() => false)
                            setAnswer4(() => false)
                            setAnswer5(() => false)
                            setAnswer3(!answer3)
                            dispatch(setCurrentAnswer(3))
                        }}
                    />
                    <Text style={styles.answerText}>{questionState.question.questionAnswers[2]}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                setAnswer1(() => false)
                setAnswer2(() => false)
                setAnswer3(() => false)
                setAnswer5(() => false)
                setAnswer4(!answer4)
                dispatch(setCurrentAnswer(4))
            }}>
                <View style={styles.answer}>
                    <CheckBox
                        disabled={false}
                        value={answer4}
                        onChange={() => {
                            setAnswer1(() => false)
                            setAnswer2(() => false)
                            setAnswer3(() => false)
                            setAnswer5(() => false)
                            setAnswer4(!answer4)
                            dispatch(setCurrentAnswer(4))
                        }}
                    />
                    <Text style={styles.answerText}>{questionState.question.questionAnswers[3]}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                setAnswer1(() => false)
                setAnswer2(() => false)
                setAnswer3(() => false)
                setAnswer4(() => false)
                setAnswer5(!answer5)
                dispatch(setCurrentAnswer(5))
            }}>
                <View style={styles.answer}>
                    <CheckBox
                        disabled={false}
                        value={answer5}
                        onChange={() => {
                            setAnswer1(() => false)
                            setAnswer2(() => false)
                            setAnswer3(() => false)
                            setAnswer4(() => false)
                            setAnswer5(!answer5)
                            dispatch(setCurrentAnswer(5))
                        }}
                    />
                    <Text style={styles.answerText}>{questionState.question.questionAnswers[4]}</Text>
                </View>
            </TouchableOpacity>
            </>
            }
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