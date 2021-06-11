export enum CurrentAnswerActionTypes {
    Set = '@currentAnswer/set',
    Clear = '@currentAnswer/clear'
}

export interface CurrentAnswerPayload {
    currentAnswer: number | string;
}
export interface CurrentAnswerState {
    currentAnswer: number | string | undefined;
}


