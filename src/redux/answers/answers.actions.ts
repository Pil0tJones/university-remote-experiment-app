import { AnswersActionTypes, AnswerRequestPayload, Answer } from './answers.types';
import { StandardAction } from 'redux-logic';


export const trySendAnswer= (
    userId: string,
    answers: Answer[]
): StandardAction<AnswersActionTypes.TrySendAnswer, AnswerRequestPayload> => ({
    type: AnswersActionTypes.TrySendAnswer,
    payload: {
        userId,
        answers
    }
});

export const setAnswer= (
): StandardAction<AnswersActionTypes.SetAnswer, undefined> => ({
    type: AnswersActionTypes.SetAnswer,
});

export const successSendAnswer = (
    answers: Answer[]
): StandardAction<AnswersActionTypes.SuccessSendAnswer, {answers:Answer[]}> => ({
    type: AnswersActionTypes.SuccessSendAnswer,
    payload: {
        answers
    }
});

export const failSendAnswer = (
    err: Error
  ): StandardAction<AnswersActionTypes.FailSendAnswer, Error> => ({
    type: AnswersActionTypes.FailSendAnswer,
    payload: err,
  });