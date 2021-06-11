import { CurrentAnswerActionTypes, CurrentAnswerState  } from './currentAnswer.types';

export const initialState: CurrentAnswerState = {
    currentAnswer: undefined,
}

export function currentAnswerReducer(
    state: CurrentAnswerState = initialState,
    action: any
): any {
    switch (action.type) {
        case CurrentAnswerActionTypes.Set:
            return Object.assign({}, state, {
                currentAnswer: action.payload.currentAnswer,
            });
        case CurrentAnswerActionTypes.Clear:
            return initialState
        default:
            return state
    }
}