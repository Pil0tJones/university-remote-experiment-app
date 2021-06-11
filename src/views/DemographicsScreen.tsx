import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../redux/user/user.types';
import { userCreationRequest } from '../redux/user/user.actions'
import NumericInput from 'react-native-numeric-input'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';



export const DemographicsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const userState: UserState = useSelector(state => state.userState)
    const [genderMale, setGenderMale] = useState(false);
    const [genderFemale, setGenderFemale] = useState(false);
    const [genderOther, setGenderOther] = useState(false);
    const [age, setAge] = useState(0);
    const [phoneUsage, setPhoneUsage] = useState(0);
    const validated = ((genderMale === true || genderFemale === true || genderOther === true) && age !== 0 && phoneUsage !== 0)

    const registerUser = () => {
        if (!userState.id) {
            let gender = '';
            if (genderMale) { gender = 'male' };
            if (genderFemale) { gender = 'female' };
            if (genderOther) { gender = 'other' };
            const userId = + new Date;
            dispatch(userCreationRequest(userId.toString(), gender, age, phoneUsage))
        }
        navigation.navigate("PreVideoScreen");
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
                <View>
                    <Text style={styles.splashHeader}>
                        Please fill out the following field
                    </Text>
                </View>
                <View>
                    <View style={styles.questionWrapper}>
                        <Text style={styles.splashText}>
                            Gender
                        </Text>
                        <View style={styles.answersWrapper}>
                            <View style={styles.answer}>
                                <CheckBox value={genderMale} onValueChange={value => {
                                    setGenderMale(() => !genderMale)
                                    setGenderFemale(() => false)
                                    setGenderOther(() => false)
                                }}
                                />
                                <Text>Male</Text>
                            </View>
                            <View style={styles.answer}>
                                <CheckBox value={genderFemale} onValueChange={value => {
                                    setGenderMale(() => false)
                                    setGenderFemale(() => !genderFemale)
                                    setGenderOther(() => false)
                                }}
                                />
                                <Text>Female</Text>
                            </View>
                            <View style={styles.answer}>
                                <CheckBox value={genderOther} onValueChange={value => {
                                    setGenderMale(() => false)
                                    setGenderFemale(() => false)
                                    setGenderOther(() => !genderOther)
                                }}
                                />
                                <Text>Other</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.questionWrapper}>
                        <Text style={styles.splashText}>
                            Age
                    </Text>
                        <View style={styles.numericInput}>
                            <NumericInput
                                rounded={true}
                                value={age}
                                minValue={0}
                                onChange={value => setAge(() => {
                                    console.log(value)
                                    return (
                                        value
                                )})} />
                        </View>
                    </View>
                    <View style={styles.questionWrapper}>
                        <Text style={styles.splashText}>
                            Daily Smartphone Usage (in h)
                    </Text>
                        <View style={styles.numericInput}>
                            <NumericInput
                                rounded={true}
                                value={phoneUsage}
                                minValue={0}
                                onChange={value => setPhoneUsage(() => value)} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.buttonsWrapper}>
                <TouchableOpacity
                disabled={!validated}
                    onPress={() => {
                        registerUser();
                    }}
                    style={styles.buttonContainer}>
                    <LinearGradient style={styles.gradient} colors={!validated ? ['#e5e5e5', '#ADADAD'] : ['#38B0C0', '#27D6EB']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
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
    contentWrapper: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 50,
        flex: 3,
    },
    questionWrapper: {
        marginBottom: 20
    },
    splashText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: '#002D40',
        textAlign: 'center',
    },
    answersWrapper: {
        flexDirection: 'row',
        alignContent: 'center',
        paddingTop: 15
    },
    buttonsWrapper: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        width: 300
    },
    splashHeader: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 30,
        color: '#002D40',
        textAlign: 'center',
        paddingBottom: 30

    },
    buttonContainer: {
        flex: 0.4,
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


