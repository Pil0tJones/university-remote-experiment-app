import React from 'react';
import { RootStackParamList } from '../../App'
import { StackNavigationProp } from '@react-navigation/stack';
import { Headline } from './partials/headline/headline'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ThankYouScreen'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
  };


export const ThankYouScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
            <Headline text="Vielen Dank für Ihre Teilnahme" marginTop={50} fontSize={20} />
                <View>
                    <Text style={styles.splashText}>
                        Das Ziel dieses Experimentes ist die Untersuchung der Fragestellung, ob die Smartphone Nutzung affektive Klarheit reduziert. Einfach gesagt bedeutet affektive Klarheit 
                        das Bewusstsein bzw. Wissen über die aktuelle Stimmungslage und Emotionen. Es scheint eine Korrelation zwischen der Smartphone Nutzung und einer gesenkten affektiven Klarheit zu geben –
                        dies bedeutet, dass Menschen die nach emotional aufwühlenden Ereignissen ihr Smartphone benutzen, sich weniger mit ihren Gefühlen auseinander setzen und daher unsicherer sind, wie sie sich gerade eigentlich fühlen.
                        {"\n"}
                        {"\n"}
                        Du kannst die App nun schließen und von deinem Handy löschen.
                        {"\n"}
                        {"\n"}
                        Sollte es irgendwelche Probleme mit dem Experiment gegeben haben, schreibe mir bitte eine kurze Mail an: n.kastunowicz@gmail.com.
                    </Text>
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
    splashText: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 24,
        color: '#80969F',
        fontFamily: 'Poppins-Regular',
        paddingTop: 20,
    },
    textWrapper: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 2.5,

    }
})


