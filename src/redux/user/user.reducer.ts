import { UserActionTypes, UserState, UserActions } from './user.types';

export const initialState: UserState = {
    id: '',
    age: 0,
    gender: undefined,
    updating: false,
    loaded: false,
    error: false
}

export function userReducer(
    state: UserState = initialState,
    action: UserActions
): UserState {
    switch (action.type) {
        case UserActionTypes.CreationRequest:
            return Object.assign({}, state, {
                updating: true,
            });
        case UserActionTypes.Success:
            return Object.assign({}, state, {
                id: action.payload.id,
                age: action.payload.age,
                gender: action.payload.gender,
                updating: false,
                loaded: true,
            });
        case UserActionTypes.Fail:
            return Object.assign({}, state, {
                error: true,
                loaded: true,
                updating: false,
            });
        default:
            return state
    }
}