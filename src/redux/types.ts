import { HasUserState } from './user/user.types'
import { HasAnswersState } from './answers/answers.types'
import { HasFormsState } from './forms/forms.types'
import { HasQuestionState } from './questions/questions.types'
import { HasCurrentAnswerState } from './currentAnswer/currentAnswer.types'
import { HasTimerState } from './timer/timer.types'
import { HasVideoState } from './video/video.types'
import { createReducer } from './reducer'

export type AppReducer = ReturnType<typeof createReducer>;

export type ObjectReturn<T> = {
    [K in keyof T]: ReturnType<() => T[K]>;
  };
  
  export type GlobalState = {
    [K in keyof AppReducer]: ReturnType<ObjectReturn<AppReducer>[K]>
  };

  export type AppState =  
  GlobalState&
  HasUserState &
  HasAnswersState&
  HasFormsState&
  HasCurrentAnswerState&
  HasQuestionState&
  HasTimerState&
  HasVideoState