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
    answer: number | string;
    responseTime: number;
}

export interface AnswersState {
    answers: Answer[];
    loaded: boolean;
    updating: boolean;
    error: boolean;
}

