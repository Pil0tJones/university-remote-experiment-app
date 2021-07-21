import React from 'react';
import {
    StyleSheet,
    View,
    Dimensions
} from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

import Messages from './messages/messages.de';
import Unorderedlist from 'react-native-unordered-list';

import { CustomText } from './partials/textPartials/customText';
import { Headline } from './partials/textPartials/headline';
import { MainButton } from './partials/buttons/mainButton';

//Navigation Props
type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Intro'>;
type Props = { navigation: ProfileScreenNavigationProp; };

export const OnboardingScreen = ({ navigation }: Props) => {
    const { width: SCREEN_WIDTH } = Dimensions.get("window");

    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Headline marginTop={50} fontSize={24} style={{"marginBottom": 30}}>
                    {Messages.payAttention}
                </Headline>
                <View>
                    {Messages.payAttentionPoints.map((item, index) => {
                        return (
                            <Unorderedlist style={styles.list}>
                                <CustomText style={{ "textAlign": "left", "fontSize": 18, paddingTop: 25 }}>
                                    {item}
                                </CustomText>
                            </Unorderedlist>
                        )
                    })}
                </View>
            </View>
            <MainButton onPress={() => navigation.navigate('PrivacyScreen')}>
                {Messages.buttonWeiter}
            </MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 35
    },
    textWrapper: {

        justifyContent: 'flex-start',
        flex: 2.5,
    },
    list: {
        alignSelf: 'flex-start',
        paddingTop: 28,

    }
})


