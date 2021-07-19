import {validateForm} from './forms.actions'

export enum FormsActionTypes {
    validated = '@forms/validated'
}

export interface FormsState {
    validated: boolean;
}

export interface HasFormsState {
    formsState: FormsState
}

export type FormsActions =
|ReturnType<typeof validateForm>