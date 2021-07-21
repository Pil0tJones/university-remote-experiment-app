import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { WelcomeScreen, 
        DemographicsScreen,
        PrivacyScreen,
        VideoScreen,
        PreVideoScreen,
        PostVideoSreen,
        QuestionScreen,
        ThankYouScreen,
        OnboardingScreen
      } from './src/views/Index';



export type RootStackParamList = {
  Intro: undefined, // undefined because you aren't passing any params to the home screen
  WelcomeScreen: { name: string }; 
  PrivacyScreen: { name: string }; 
  DemographicsScreen: { name: string }; 
  PreVideoScreen: { name: string }; 
  VideoScreen: { name: string }; 
  PostVideoScreen: { name: string }; 
  QuestionScreen: { name: string }; 
  ThankYouScreen: { name: string }; 
  OnboardingScreen: { name: string }; 
};

const Stack = createStackNavigator<RootStackParamList>();

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 255, 255)',
    background: 'rgb(255, 255, 255)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Intro"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PrivacyScreen"
            component={PrivacyScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DemographicsScreen"
            component={DemographicsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PreVideoScreen"
            component={PreVideoScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VideoScreen"
            component={VideoScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PostVideoScreen"
            component={PostVideoSreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="QuestionScreen"
            component={QuestionScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ThankYouScreen"
            component={ThankYouScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  );
};


export default App;