# university-remote-experiment-app

## What is this project?

This is a React-Native app that is used for remote-experiment on emotional clarity, through wich I collect data that I will use in master thesis.

Main features of the app:
  * Introduction
  * Participants are asked for demographic data
  * Participants are shown an emotional video (YouTube iFrame)
  * There is a 'break' where participants are allowed to use their phone as they like
  -> There is a foregroundservice running (a native module written in Kotlin) that measures the screen time
  * After a certain time there is a notification alarm
  * Participants answer various questions (open, multiple-choice, etc..), while the response time for every question is measured

The goal is to find out if phone usage decreases emotional clarity (the controle group is not allowed to use their phone during the break).

Technologies used:
  * React-Native
  * Redux (+ Redux Logic for asynchronous actions)
  * TypeScript

You can find the REST API for this project here.

Pease note that there is a strict workflow for this experiment, the structure and architecture of this app is quite different compared to a 'regular' app and the UI is kept as simple as possible to rule out factors that influence the participants.
