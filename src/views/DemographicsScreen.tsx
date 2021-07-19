import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../redux/types';
import { RootStackParamList } from '../../App'
import { StackNavigationProp } from '@react-navigation/stack';
import { UserState } from '../redux/user/user.types';
import { userCreationRequest } from '../redux/user/user.actions'
import { MainButton } from './partials/buttons/mainButton'
import { Headline } from './partials/headline/headline'
import InputSpinner from "react-native-input-spinner";
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DemographicsScreen'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
  };

export const DemographicsScreen = ({ navigation }:Props) => {
    const dispatch = useDispatch();
    const userState: UserState = useSelector((state: AppState) => state.userState)
    const [genderMale, setGenderMale] = useState(false);
    const [genderFemale, setGenderFemale] = useState(false);
    const [genderOther, setGenderOther] = useState(false);
    const [age, setAge] = useState(0);
    const validated = ((genderMale === true || genderFemale === true || genderOther === true))

    const onPressHandler = () => {
        if (!userState.id) {
            let gender = '';
            if (genderMale) { gender = 'male' };
            if (genderFemale) { gender = 'female' };
            if (genderOther) { gender = 'other' };
            const userId = + new Date;
            dispatch(userCreationRequest(userId.toString(), gender, age))
        }
        navigation.navigate("QuestionScreen");
    }



    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
            <Headline text="Bitte fülle folgende Felder aus" marginTop={25} fontSize={30} />  
                <View style={styles.questionContainer}>
                    <View style={styles.questionWrapper}>
                        <Text style={styles.splashText}>
                            Geschlecht
                        </Text>
                        <View style={styles.answersWrapper}>
                            <View style={styles.answer}>
                                <CheckBox value={genderMale} onValueChange={value => {
                                    setGenderMale(() => !genderMale)
                                    setGenderFemale(() => false)
                                    setGenderOther(() => false)
                                }}
                                />
                                <Text>Mann</Text>
                            </View>
                            <View style={styles.answer}>
                                <CheckBox value={genderFemale} onValueChange={value => {
                                    setGenderMale(() => false)
                                    setGenderFemale(() => !genderFemale)
                                    setGenderOther(() => false)
                                }}
                                />
                                <Text>Frau</Text>
                            </View>
                            <View style={styles.answer}>
                                <CheckBox value={genderOther} onValueChange={value => {
                                    setGenderMale(() => false)
                                    setGenderFemale(() => false)
                                    setGenderOther(() => !genderOther)
                                }}
                                />
                                <Text>Divers</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.questionWrapper}>
                        <Text style={styles.splashText}>
                            Alter
                    </Text>
                        <View style={styles.numericInput}>
                            <InputSpinner
                                buttonStyle={{backgroundColor:"#38B0C0"}}
                                style={{backgroundColor:"#fff"}}
                                initialValue={20}
                                step={1}
                                skin={"modern"}
                                fontSize={16}
                                value={age}
                                onChange={(num:number) => setAge(num)}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <MainButton onPress={onPressHandler} buttonText={"Weiter"} validated={!validated}/>
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
        justifyContent: 'space-around',
        display: 'flex',
        flex: 1,
        marginBottom: 100
    },
    contentWrapper: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 50,
        flex: 2.5,
    },
    questionWrapper: {
        marginTop: 30
    },
    splashText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: '#002D40',
        textAlign: 'center',
        paddingBottom:15
    },
    answersWrapper: {
        flexDirection: 'row',
        alignContent: 'center',
        paddingTop: 15
    },
    splashHeader: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 30,
        color: '#002D40',
        textAlign: 'center',
        paddingBottom: 30

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
    answer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
})


