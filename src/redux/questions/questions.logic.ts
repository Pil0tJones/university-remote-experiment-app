import {createLogic} from 'redux-logic';
import { QuestionsActionTypes, QuestionRequestPayload, QuestionState, Question } from './questions.types';
import { receiveQuestion, failQuestion } from './questions.actions';
import axios from 'axios';

export const requestQuestionLogic = createLogic<QuestionState, QuestionRequestPayload>({
    type: QuestionsActionTypes.Request,
    process: async ({getState, action}, dispatch, done) => {
      try {
        const id = action.payload.questionId
        const api = `http://773a0e14c2c1.ngrok.io/api/questions/${id}` //adjust api
        await axios.get(api)
            .then((response: any) => {
              console.log('question response', response)
              console.log('question data response', response.data.question)
              dispatch(receiveQuestion( response.data.question_id, response.data.question_type, response.data.question,response.data.question_answers))
            }).catch((error: any) => { dispatch(failQuestion(error)) });
      }
      catch (error) {
        dispatch(failQuestion(error)) 
      }
      done();
    },
  });



export const questionsLogic = [requestQuestionLogic];

export default [questionsLogic];
