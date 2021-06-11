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