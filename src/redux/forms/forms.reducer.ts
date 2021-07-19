import { FormsActionTypes, FormsState, FormsActions } from './forms.types';

export const initialState: FormsState = {
    validated: false
}

export function multipleChoiceQuestionReducer(
    state: FormsState = initialState,
    action: FormsActions
): FormsState {
    switch (action.type) { 
        case FormsActionTypes.validated:
            return Object.assign({}, state, {
                validated: action.payload.validated,
            });
        default:
            return state
    }
}