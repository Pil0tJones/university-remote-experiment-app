# Remote Experiment App on Emotional Clarity

## What is this project?

This is a React-Native app that is used for remote-experiment on emotional clarity, which is part of my master thesis project. Below is a quick summary of the project followed by a comprehensive guide how to deploy the application.

Main features of the app:
  * Introduction
  * Participants are asked for demographic data
  * Participants are shown an emotional video (YouTube iFrame)
  * There is a 'break' where participants are allowed to use their phone as they like
  -> There is a foregroundservice running (a native module written in Kotlin) that measures the screen time
  * After a certain time there is a notification alarm
  * Participants answer various questions (open, multiple-choice, etc..), while the response time for every question is measured

Technologies used:
  * React-Native
  * Redux (+ Redux Logic for asynchronous actions)
  * TypeScript

### How to get the project running

If you want to reuse the app for further research, follow these steps:
 * Replace all the API calls in the logic files in `src/redux` with the according link to your backend and start your backend (learn how to set up and start the backend [here](https://github.com/Pil0tJones/university-remote-experiment-rest))
 * To start the app locally, please make sure you have followed all the steps to correctly set up the React-Native environment for Android (find all information [here](https://reactnative.dev/docs/environment-setup))
 * If your environment is correctly set up, you can start the app locally with by running `react-native start` in one terminal and `react-native run-android` in another one

### How to create an APK

If you want to create an APK, open a terminal and navigate to `android` and run `./gradlew assembleRelease` for Mac/ Linux or `gradlew assembleRelease` from Windows. A comprehensive guide to creating APK's can be found [here](https://www.instamobile.io/android-development/generate-react-native-release-build-android/).
