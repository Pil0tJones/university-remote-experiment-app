import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../redux/types';
import { UserState } from '../redux/user/user.types';
import { userCreationRequest } from '../redux/user/user.actions'
import { FormsState } from '../redux/forms/forms.types';
import { CurrentAnswerState } from '../redux/currentAnswer/currentAnswer.types';

import { RootStackParamList } from '../../App'
import { StackNavigationProp } from '@react-navigation/stack';

import {MultipleChoice} from './partials/answers/multipleChoiceAnswer'
import Messages from './messages/messages.de'
import { MainButton } from './partials/buttons/mainButton'
import { Headline } from './partials/textPartials/headline'
import InputSpinner from "react-native-input-spinner";


//Navigation Types
type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'DemographicsScreen'>;
type Props = { navigation: ProfileScreenNavigationProp; };


export const DemographicsScreen = ({ navigation }:Props) => {
    const dispatch = useDispatch();

    //States
    const userState: UserState = useSelector((state: AppState) => state.userState)
    const formState: FormsState = useSelector((state: AppState) => state.formsState)
    const currentAnswerState: CurrentAnswerState = useSelector((state: AppState) => state.currentAnswerState)
    const [age, setAge] = useState(20);

    //onPress Handler to dispatch user creation
    const onPressHandler = () => {
        if (!userState.id) {
            const userId = + new Date;
            if (currentAnswerState.currentAnswer && typeof(currentAnswerState.currentAnswer) ==='string') {
                dispatch(userCreationRequest(userId.toString(),currentAnswerState.currentAnswer , age))
            }
        }
        navigation.navigate("QuestionScreen");
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
            <Headline marginTop={25} fontSize={24}>
                {Messages.formFill}
                </Headline>  
                <View style={styles.questionContainer}>
                    <View style={styles.questionWrapper}>
                        <MultipleChoice />
                    </View>
                    <View style={styles.questionWrapper}>
                        <Headline fontSize={20} marginTop={0}>
                            {Messages.age}
                    </Headline>
                        <View style={styles.numericInput}>
                            <InputSpinner
                                buttonStyle={{backgroundColor:"#38B0C0"}}
                                style={{backgroundColor:"#fff"}}
                                initialValue={20}
                                step={1}
                                skin={"modern"}
                                fontSize={16}
                                value={age}
                                onChange={(num:number) => setAge(() => num)}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <MainButton onPress={onPressHandler} validated={!formState.validated}>
                {Messages.buttonWeiter}
                </MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 35
    },
    questionContainer:{
        justifyContent: 'center',
        display: 'flex',
        flex: 1,
        marginBottom: 100
    },
    contentWrapper: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 50,
        flex: 1,
    },
    questionWrapper: {
        marginTop: 30
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#80969F'
    },
    numericInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 20,
    },
})


