import { AnswersActionTypes, AnswersState, AnswerActions  } from './answers.types';

export const initialState: AnswersState = {
    answers:[],
    loaded: false,
    updating: false,
    error: false
}

export function answersReducer(
    state: AnswersState = initialState,
    action: AnswerActions
): AnswersState {
    switch (action.type) {
        case AnswersActionTypes.SetAnswer:
            return Object.assign({}, state, {
                updating: true,
            });
        case AnswersActionTypes.TrySendAnswer:
            return Object.assign({}, state, {
                updating: true,
            });
        case AnswersActionTypes.SuccessSendAnswer:
            return Object.assign({}, state, {
                answers: action.payload.answers,
                updating: false,
                loaded: true,
            });
        case AnswersActionTypes.FailSendAnswer:
            return Object.assign({}, state, {
                error: true,
                loaded: true,
                updating: false,
            });
        default:
            return state
    }
}