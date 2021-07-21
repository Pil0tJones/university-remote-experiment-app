import {createLogic} from 'redux-logic';
import { AnswersActionTypes, AnswerRequestPayload, AnswersState } from './answers.types';
import { trySendAnswer, successSendAnswer, failSendAnswer } from './answers.actions';
import axios from 'axios';

export const trySendAnswerLogic = createLogic<AnswersState, AnswerRequestPayload>({
    type: AnswersActionTypes.TrySendAnswer,
    process: async ({getState, action}, dispatch, done) => {
      try {
        const api = `http://773a0e14c2c1.ngrok.io/api/answer` //adjust api
        await axios.post(api, {
            user_id: action.payload.userId,
            answers: action.payload.answers,
        })
            .then((response: any) => {
              console.log(response)
                return dispatch(successSendAnswer(action.payload.answers));
            }).catch((error: any) => { dispatch(failSendAnswer(error)) });
      }
      catch (error) {
        dispatch(failSendAnswer(error)) 
      }
      done();
    },
  });



export const answersLogic = [trySendAnswerLogic];

export default [answersLogic];