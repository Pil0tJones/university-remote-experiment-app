import { TimerActionTypes, TimerState  } from './timer.types';

export const initialState: TimerState = {
    startTime: 0,
    time:0,
    currentlyRunning: false
}

export function timerReducer(
    state: TimerState = initialState,
    action: any
): any {
    switch (action.type) {
        case TimerActionTypes.Start:
            return Object.assign({}, state, {
                currentlyRunning: true,
                startTime: Date.now()
            });
        // case TimerActionTypes.Stop:
        //     return Object.assign({}, state, {
        //         time: state.startTime - Date.now(),
        //         currentlyRunning: false,
        //     });
        case TimerActionTypes.Clear:
            return initialState
        default:
            return state
    }
}