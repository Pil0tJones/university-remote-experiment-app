import { createLogic } from 'redux-logic';
import { UserActionTypes, UserRequestPayload, UserState } from './user.types';
import { userCreationFail, userCreationSuccess, userCreationRequest } from './user.actions';
import axios from 'axios';

export const createUserLogic = createLogic<UserState, UserRequestPayload>({
  type: UserActionTypes.CreationRequest,
  process: async ({ getState, action }, dispatch, done) => {
    try {
      const api = `http://585a0f4abab5.ngrok.io/api/user/create-user`
      await axios.post(api, {
        id: action.payload.id,
        age: action.payload.age,
        gender: action.payload.gender,
        phone_usage: action.payload.phoneUsage
      })
        .then((response: any) => {
          console.log('user response',response)
          console.log('user response data',response.data)
          return dispatch(userCreationSuccess(action.payload.id, action.payload.age, action.payload.gender, action.payload.phoneUsage));
        }).catch((error: any) => { console.log(error) });

    }
    catch (err) {
      dispatch(userCreationFail(err));
    }
    done();
  },
});



export const userLogic = [createUserLogic];

export default [userLogic];