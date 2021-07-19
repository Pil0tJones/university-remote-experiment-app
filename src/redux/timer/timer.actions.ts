import { TimerActionTypes } from './timer.types';
import { StandardAction } from 'redux-logic';


export const startTimer = (): StandardAction<TimerActionTypes.Start, undefined> => ({
    type: TimerActionTypes.Start,
});

export const clearTimer = (): StandardAction<TimerActionTypes.Clear, undefined> => ({
    type: TimerActionTypes.Clear,
});