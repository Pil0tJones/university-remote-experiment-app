import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import Messages from './messages/messages.de'
import {CustomText} from './partials/textPartials/customText'
import { Headline } from './partials/textPartials/headline'


export const ThankYouScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
            <Headline marginTop={50} fontSize={20} >
                {Messages.thankYouHeader}
                </Headline>
                <View>
                    <CustomText>
                    {Messages.thankYouText}
                    </CustomText>
                </View>
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
    textWrapper: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 2.5,

    }
})


