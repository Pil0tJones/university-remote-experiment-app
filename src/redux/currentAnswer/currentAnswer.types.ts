import {setCurrentAnswer, clearCurrentAnswer} from './currentAnswer.actions'

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

export interface HasCurrentAnswerState {
    currentAnswerState: CurrentAnswerState
}

export type CurrentAnswerActions = 
    |ReturnType<typeof setCurrentAnswer>
    |ReturnType<typeof clearCurrentAnswer>



