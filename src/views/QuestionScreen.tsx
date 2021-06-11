import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { startTimer, stopTimer, clearTimer } from '../redux/timer/timer.actions';
import { QuestionState } from '../redux/questions/questions.types'; 
import { UserState } from '../redux/user/user.types'; 
import { trySendAnswer } from '../redux/answers/answers.actions'
import { requestQuestion } from '../redux/questions/questions.actions'
import { clearCurrentAnswer } from '../redux/currentAnswer/currentAnswer.actions';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import {ScaleAnswers} from './partials/scaleAnswers/scaleAnswers'
import {LoadingSpinner} from './partials/loadingSpinner/loadingSpinner'
import LinearGradient from 'react-native-linear-gradient';



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
            dispatch(requestQuestion(1));
        }
    }, [navigation])

   useEffect(() => {
       if (questionState.loaded) dispatch(startTimer());
   }, [questionState.loaded])

    const onPressHandler = (time: number) => {
        dispatch(trySendAnswer(userState.id, [...answerState.answers, {
            questionType: questionState.questionType,
            questionId: questionState.questionId,
            answer: currentAnswerState.currentAnswer,
            responseTime: timerState.startTime - time
        }]))
        dispatch(clearCurrentAnswer());
        dispatch(clearTimer());
        if (questionState.questionId < 12) {
            dispatch(requestQuestion(questionState.questionId + 1));
        } else {
            navigation.navigate('PrivacyScreen');
        }
    }

    if (!questionState.loaded && questionState.updating) {
        return (
            <LoadingSpinner />
        )
    }



    return (
        <View style={styles.container}>
            <View style={styles.question}>
                <Text style={styles.questionText}>{questionState.question.question}</Text>
            </View>
            <ScaleAnswers />
            <View style={styles.button}>
                <TouchableOpacity
                    onPress={() => {
                        const now = Date.now()
                        onPressHandler(now);
                    }}
                    style={styles.buttonContainer}
                    disabled={disabled}>
                    <LinearGradient style={styles.gradient} colors={disabled ? ['#e5e5e5', '#ADADAD'] : ['#38B0C0', '#27D6EB']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                        <Text style={styles.buttonText}>Next Question</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 35
    },
    question: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    questionText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 30,
        color: '#002D40',
        textAlign: 'center'
    },
    button: {
        flex: 0.7,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 0.5,
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
    loadingSpinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})