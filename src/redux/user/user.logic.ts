import { createLogic } from 'redux-logic';
import { UserActionTypes, UserRequestPayload, UserState } from './user.types';
import { userCreationFail, userCreationSuccess, userCreationRequest } from './user.actions';
import axios from 'axios';

export const createUserLogic = createLogic<UserState, UserRequestPayload>({
  type: UserActionTypes.CreationRequest,
  process: async ({ getState, action }, dispatch, done) => {
    try {
      const api = `http://236e77569cae.ngrok.io/api/user/create-user`
      await axios.post(api, {
        id: action.payload.id,
        age: action.payload.age,
        gender: action.payload.gender,
      })
        .then((response: any) => {
          return dispatch(userCreationSuccess(action.payload.id, action.payload.age, action.payload.gender));
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