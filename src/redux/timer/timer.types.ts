import { startTimer, clearTimer} from './timer.actions'

export enum TimerActionTypes {
    Start = '@timer/set',
    // Stop = '@timer/stop',
    Clear = '@timer/clear'
}

export interface TimerStartPayload {
    time: number;
}

export interface TimerStopPayload {
    startTime: number;
}

export interface TimerState {
    startTime: number;
    time: number;
    currentlyRunning: boolean;
}

export interface HasTimerState {
    timerState: TimerState
}

export type TimerActions =
|ReturnType<typeof startTimer>
|ReturnType<typeof clearTimer>