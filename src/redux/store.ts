import { createStore, applyMiddleware, compose, Store, AnyAction } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { combinedReducers } from './reducer'
import {logics} from './logics'
import { composeWithDevTools } from 'redux-devtools-extension';


    const logicMiddleware = createLogicMiddleware(logics, {});
    const middlewares = [
      // Add other middleware here...
      logicMiddleware,
    ];
  
    export const store = createStore(combinedReducers, {}, composeWithDevTools(applyMiddleware(...middlewares)));