import { QuestionsActionTypes, QuestionState  } from './questions.types';

export const initialState: QuestionState = {
    question: {
        question: '',
        questionAnswers: []
    },
    questionType: '',
    questionId: 0,
    loaded: false,
    updating: false,
    error: false
}

export function questionReducer(
    state: QuestionState = initialState,
    action: any
): QuestionState {
    switch (action.type) {
        case QuestionsActionTypes.Request:
            return Object.assign({}, state, {
                updating: true,
                loaded: false
            });
        case QuestionsActionTypes.Receive:
            return Object.assign({}, state, {
                question: {
                    question: action.payload.question,
                    questionAnswers: action.payload.questionAnswers
                },
                questionId: action.payload.questionId,
                questionType: action.payload.questionType,
                updating: false,
                loaded: true,
                error:false
            });
        case QuestionsActionTypes.Fail:
            return Object.assign({}, state, {
                error: true,
                loaded: true,
                updating: false,
            });
        default:
            return state
    }
}