import { FormsActionTypes, FormsState } from './forms.types';

export const initialState: FormsState = {
    validated: false
}

export function multipleChoiceQuestionReducer(
    state: FormsState = initialState,
    action: any
): any {
    switch (action.type) {
        
        case FormsActionTypes.validated:
            return Object.assign({}, state, {
                validated: action.payload.validated,
            });
        default:
            return state
    }
}