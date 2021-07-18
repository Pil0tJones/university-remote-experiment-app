import 'react-native-gesture-handler';
import React, { useEffect, useState, useRef } from 'react';
import { AppState, AppRegistry, NativeModules } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { IntroScreen } from './src/views/WelcomeScreen';
import { DemographicsScreen } from './src/views/DemographicsScreen';
import { PrivacyScreen } from './src/views/PrivacyScreen';
import { VideoScreen } from './src/views/VideoScreen';
import { PreVideoScreen } from './src/views/PreVideoScreen';
import { PostVideoSreen } from './src/views/PostVideoScreen';
import { QuestionScreen } from './src/views/QuestionScreen';
import { ThankYouScreen } from './src/views/ThankYouScreen';



declare const global: { HermesInternal: null | {} };
const Stack = createStackNavigator();


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
            component={IntroScreen}
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