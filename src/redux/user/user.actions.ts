import { UserActionTypes, UserRequestPayload } from './user.types';
import { StandardAction } from 'redux-logic';


export const userCreationRequest = (
    id: string,
    gender: string,
    age: number,
    phoneUsage: number
): StandardAction<UserActionTypes.CreationRequest, UserRequestPayload> => ({
    type: UserActionTypes.CreationRequest,
    payload: {
        id,
        gender,
        age,
        phoneUsage
    }
});

export const userCreationSuccess = (
    id: string,
    age: number,
    gender: string,
    phoneUsage: number
): StandardAction<UserActionTypes.Success, UserRequestPayload> => ({
    type: UserActionTypes.Success,
    payload: {
        id,
        age,
        gender,
        phoneUsage
    }
});

export const userCreationFail = (
    err: Error
  ): StandardAction<UserActionTypes.Fail, Error> => ({
    type: UserActionTypes.Fail,
    payload: err,
  });