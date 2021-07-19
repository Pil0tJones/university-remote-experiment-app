import {failQuestion, receiveQuestion, requestQuestion} from './questions.actions';

export enum QuestionsActionTypes {
    Request = '@questions/request',
    Receive = '@questions/receive',
    Fail = '@questions/fail'
}

export interface QuestionRequestPayload {
    questionId: number;
}

export interface QuestionResponsePayload {
    questionId: number;
    questionType: string;
    question: Question;
    questionAnswers: string[];
}

export interface Question {
    question: string;
    questionAnswers?: string[];
}
export interface QuestionState {
    question: Question,
    questionId: number;
    questionType: string;
    loaded: boolean;
    updating: boolean;
    error: boolean;
}

export interface HasQuestionState {
    questionState: QuestionState
}

export type QuestionActions =
    |ReturnType<typeof failQuestion>
    |ReturnType<typeof receiveQuestion>
    |ReturnType<typeof requestQuestion>

