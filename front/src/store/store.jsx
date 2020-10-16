import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import reducerA from '../store/reducers/reducer-a';
import reducerB from '../store/reducers/reducer-b';
import { userReducer } from '../store/reducers/userReducer';

const rootReducer = combineReducers({
    reducerA,
    reducerB,
    userReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
