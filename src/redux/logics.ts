import { userLogic } from './user/user.logic'
import { answersLogic } from './answers/answers.logic'
import { questionsLogic } from './questions/questions.logic'


export const logics = [
    ...userLogic,
    ...answersLogic,
    ...questionsLogic
]