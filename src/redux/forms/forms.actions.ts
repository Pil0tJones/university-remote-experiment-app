import { FormsActionTypes } from './forms.types';
import { StandardAction } from 'redux-logic';

export const validateForm = (
    validated: boolean
): StandardAction<FormsActionTypes.validated, {validated:boolean}> => ({
    type: FormsActionTypes.validated,
    payload: {
        validated
    }
});