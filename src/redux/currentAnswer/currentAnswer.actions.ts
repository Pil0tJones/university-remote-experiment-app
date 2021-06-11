import { CurrentAnswerPayload, CurrentAnswerActionTypes} from './currentAnswer.types';
import { StandardAction } from 'redux-logic';


export const setCurrentAnswer= (
    currentAnswer: number | string
): StandardAction<CurrentAnswerActionTypes.Set, CurrentAnswerPayload> => ({
    type: CurrentAnswerActionTypes.Set,
    payload: {
        currentAnswer
    }
});


export const clearCurrentAnswer = (): StandardAction<CurrentAnswerActionTypes.Clear, undefined> => {
    return {
      type: CurrentAnswerActionTypes.Clear
    };
  };