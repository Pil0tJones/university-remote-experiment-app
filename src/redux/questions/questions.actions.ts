import { QuestionsActionTypes, QuestionRequestPayload, Question, QuestionResponsePayload } from './questions.types';
import { StandardAction } from 'redux-logic';


export const requestQuestion= (
    questionId: number
): StandardAction<QuestionsActionTypes.Request, QuestionRequestPayload> => ({
    type: QuestionsActionTypes.Request,
    payload: {
        questionId
    }
});

export const receiveQuestion = (
    questionId: number,
    questionType: string,
    question: Question,
    questionAnswers: string[]
): StandardAction<QuestionsActionTypes.Receive, QuestionResponsePayload> => ({
    type: QuestionsActionTypes.Receive,
    payload: {
        questionType,
        questionId,
        question,
        questionAnswers

    }
});

export const failQuestion = (
    err: Error
  ): StandardAction<QuestionsActionTypes.Fail, Error> => ({
    type: QuestionsActionTypes.Fail,
    payload: err,
  });