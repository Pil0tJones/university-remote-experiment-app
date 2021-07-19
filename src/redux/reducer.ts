import { combineReducers } from 'redux';
import { AppState } from './types'
import { userReducer as userState } from './user/user.reducer';
import { multipleChoiceQuestionReducer as formsState } from './forms/forms.reducer';
import { questionReducer as questionState } from './questions/questions.reducer';
import { answersReducer as answersState } from './answers/answers.reducer';
import { currentAnswerReducer as currentAnswerState } from './currentAnswer/currentAnswer.reducer';
import { timerReducer as timerState } from './timer/timer.reducer';
import { videoReducer as videoState } from './video/video.reducer';


export const createReducer = () => ({
    userState,
    formsState,
    questionState,
    answersState,
    currentAnswerState,
    timerState,
    videoState
});


const reducer = createReducer();

export const combinedReducers = combineReducers<AppState>(reducer);
