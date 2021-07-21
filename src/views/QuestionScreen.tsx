import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Messages from './messages/messages.de'
import { RootStackParamList } from '../../App'

import { StackNavigationProp } from '@react-navigation/stack';
import { startTimer, clearTimer } from '../redux/timer/timer.actions';
import { QuestionState } from '../redux/questions/questions.types';
import { UserState } from '../redux/user/user.types';
import { trySendAnswer } from '../redux/answers/answers.actions'
import { AppState } from '../redux/types';
import { requestQuestion } from '../redux/questions/questions.actions'
import { clearCurrentAnswer } from '../redux/currentAnswer/currentAnswer.actions';

import { MainButton } from './partials/buttons/mainButton';
import { LikertAnswers } from './partials/answers/likertAnswers'
import { Headline } from './partials/textPartials/headline'
import { OpenAnswer } from './partials/answers/openAnswer'
import { BinaryOpenAnswer } from './partials/answers/binaryOpenAnswer'
import { LoadingSpinner } from './partials/loadingSpinner/loadingSpinner'


//Navigation Props
type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'QuestionScreen'>;
type Props = { navigation: ProfileScreenNavigationProp; };

export const QuestionScreen = ({ navigation }: Props) => {

    const dispatch = useDispatch();

    //States
    const questionState: QuestionState = useSelector((state: AppState) => state.questionState);
    const userState: UserState = useSelector((state: AppState) => state.userState);
    const currentAnswerState = useSelector((state: AppState) => state.currentAnswerState);
    const answerState = useSelector((state: AppState) => state.answersState);
    const timerState = useSelector((state: AppState) => state.timerState);
    const disabled = !useSelector((state: AppState) => state.formsState.validated);



    useEffect(() => {
        if (!questionState.loaded && !questionState.updating) {
            dispatch(requestQuestion(1));
        }
    }, [navigation])

    useEffect(() => {
        if (questionState.loaded) dispatch(startTimer());
    }, [questionState.loaded])


    const onPressHandler = (time: number) => {

        sendUserAnswers(time);
        clearAnswerAndTimer();


        if (questionState.questionId && questionState.questionId < 59) {
            dispatch(requestQuestion(questionState.questionId + 1));
        } else {
            navigation.navigate('ThankYouScreen');
        }

    }

    /**
    * Send User Answers to API
    * @param time Current timestamp
    */
    const sendUserAnswers = (time: number) => {
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
    }

    const clearAnswerAndTimer = () => {
        dispatch(clearCurrentAnswer());
        dispatch(clearTimer());
    }


    if (!questionState.loaded && questionState.updating) {
        return (
            <LoadingSpinner />
        )
    }

    if (questionState.loaded && questionState.error) {
        return (
            <View style={styles.errorContainer}>
                <Headline fontSize={20} marginTop={0}>
                    {Messages.errorTryAgain}
                </Headline>
                <View style={styles.errorButton}>
                    <MainButton
                        onPress={() => {
                            dispatch(requestQuestion(questionState.questionId + 1))
                        }} >
                        {Messages.tryAgainButton}
                    </MainButton>
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
                {(questionState.questionType === 'likert' || questionState.questionType === 'smartphone_usage' || questionState.questionType === 'likert_affective') && (
                    <LikertAnswers />
                )}
                {questionState.questionType === 'binary_variant' && (
                    <BinaryOpenAnswer />
                )}
            </View>


            <View style={styles.buttonContainer}>
                <MainButton
                    validated={disabled}
                    onPress={() => {
                        const now = Date.now()
                        onPressHandler(now);
                    }}>
                    {Messages.nextQuestion}
                </MainButton>

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