import {trySendAnswer, successSendAnswer, failSendAnswer, setAnswer} from './answers.actions'

export enum AnswersActionTypes {
    SetAnswer = '@answers/set',
    TrySendAnswer = '@answers/try',
    SuccessSendAnswer = '@answers/success',
    FailSendAnswer = '@answers/fail'
}

export interface AnswerRequestPayload {
    answers: Answer[];
    userId: string;
}
export interface Answer {
    questionType: string;
    questionId: number;
    answer: number | string|undefined;
    responseTime?: number;
}

export interface AnswersState {
    answers: Answer[];
    loaded: boolean;
    updating: boolean;
    error: boolean;
}

export interface HasAnswersState {
    answersState: AnswersState
}

export type AnswerActions =
| ReturnType<typeof trySendAnswer> 
| ReturnType<typeof successSendAnswer> 
| ReturnType<typeof setAnswer> 
| ReturnType<typeof failSendAnswer> 
