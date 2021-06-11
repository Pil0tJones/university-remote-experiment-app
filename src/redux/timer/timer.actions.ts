import { TimerActionTypes, TimerStartPayload, TimerStopPayload } from './timer.types';
import { StandardAction } from 'redux-logic';


export const startTimer = (): StandardAction<TimerActionTypes.Start, undefined> => ({
    type: TimerActionTypes.Start,
});
// export const stopTimer = (): StandardAction<TimerActionTypes.Stop, undefined> => ({ NOT NEEDED
//     type: TimerActionTypes.Stop,
// });
export const clearTimer = (): StandardAction<TimerActionTypes.Clear, undefined> => ({
    type: TimerActionTypes.Clear,
});