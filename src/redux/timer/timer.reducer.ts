import { TimerActionTypes, TimerState, TimerActions  } from './timer.types';

export const initialState: TimerState = {
    startTime: 0,
    time:0,
    currentlyRunning: false
}

export function timerReducer(
    state: TimerState = initialState,
    action: TimerActions
): TimerState {
    switch (action.type) {
        case TimerActionTypes.Start:
            return Object.assign({}, state, {
                currentlyRunning: true,
                startTime: Date.now()
            });
        case TimerActionTypes.Clear:
            return initialState
        default:
            return state
    }
}