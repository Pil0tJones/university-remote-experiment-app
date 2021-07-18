import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, clearTimer } from '../redux/timer/timer.actions';
import { QuestionState } from '../redux/questions/questions.types';
import { UserState } from '../redux/user/user.types';
import { trySendAnswer } from '../redux/answers/answers.actions'
import { requestQuestion } from '../redux/questions/questions.actions'
import { clearCurrentAnswer } from '../redux/currentAnswer/currentAnswer.actions';
import { MainButton } from './partials/buttons/mainButton';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Likert4Answers, Likert5Answers } from './partials/answers/scaleAnswers'
import { Headline } from './partials/headline/headline'
import { OpenAnswer } from './partials/answers/openAnswer'
import { BinaryOpenAnswer } from './partials/answers/binaryOpenAnswer'
import { LoadingSpinner } from './partials/loadingSpinner/loadingSpinner'



export const QuestionScreen = ({ navigation }) => {
    const disabled = !useSelector(state => state.multipleChoiceValidated.validated);
    const questionState: QuestionState = useSelector(state => state.questionState);
    const userState: UserState = useSelector(state => state.userState);
    const currentAnswerState = useSelector(state => state.currentAnswerState);
    const answerState = useSelector(state => state.answersState);
    const timerState = useSelector(state => state.timerState);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!questionState.loaded && !questionState.updating) {
            dispatch(requestQuestion(41));
        }
    }, [navigation])

    useEffect(() => {
        if (questionState.loaded) dispatch(startTimer());
    }, [questionState.loaded])

    const onPressHandler = (time: number) => {
        if (questionState.questionType === 'likert' || questionState.questionType === 'likert_affective') {
            dispatch(trySendAnswer(userState.id, [...answerState.answers, {
                questionType: questionState.questionType,
                questionId: questionState.questionId,
                answer: currentAnswerState.currentAnswer,
                responseTime: timerState.startTime - time
            }]))

        }

        if (questionState.questionType === 'open' || questionState.questionType === 'binary_variant' || questionState.questionType === 'smartphone_usage') {
            dispatch(trySendAnswer(userState.id, [...answerState.answers, {
                questionType: questionState.questionType,
                questionId: questionState.questionId,
                answer: currentAnswerState.currentAnswer,
            }]))
        }

        dispatch(clearCurrentAnswer());
        dispatch(clearTimer());
        if (questionState.questionId && questionState.questionId < 59) {
            dispatch(requestQuestion(questionState.questionId + 1));
        } else {
            navigation.navigate('ThankYouScreen');
        }
    }


    if (!questionState.loaded && questionState.updating) {
        return (
            <LoadingSpinner />
        )
    }

    if (questionState.loaded && questionState.error) {
        return (
            <View style={styles.errorContainer}>
                <Headline text="Etwas ist schiefgelaufen, überprüfe deine Internetverbindung und versuche es nocheinmal" fontSize={20} marginTop={0} />
                <View style={styles.errorButton}>
                    <MainButton
                        buttonText="Nochmal versuchen"
                        validated={disabled}
                        onPress={() => {
                            dispatch(requestQuestion(questionState.questionId + 1))
                        }} />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.question}>
                <Text style={styles.questionText}>{questionState.question.question}</Text>
            </View>
            <View style={styles.answerContainer}>
                {questionState.questionType === 'open' && (
                    <OpenAnswer onPress={onPressHandler} />
                )}
                {(questionState.questionType === 'likert' || questionState.questionType === 'smartphone_usage') && (
                    <Likert5Answers />
                )}
                {questionState.questionType === 'likert_affective' && (
                    <Likert4Answers />
                )}
                {questionState.questionType === 'binary_variant' && (
                    <BinaryOpenAnswer />
                )}
            </View>


            <View style={styles.buttonContainer}>
                <MainButton
                    buttonText="Nächste Frage"
                    validated={disabled}
                    onPress={() => {
                        const now = Date.now()
                        onPressHandler(now);
                    }} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 35,
    },
    question: {
        flex: 1,
        zIndex: 11,
        alignItems: 'center',
        justifyContent: 'center',
    },
    questionText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 24,
        color: '#002D40',
        textAlign: 'center'
    },
    loadingSpinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    answerContainer: {
        flex: 2,
    },
    buttonContainer: {
        flex: .5,
        alignItems: 'center',
        marginTop: 30
    },
    errorContainer: {
        marginHorizontal: 35,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorButton: {
        paddingTop: 30
    }


})