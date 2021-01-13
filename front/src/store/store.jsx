import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { userReducer } from '../store/reducers/userReducer';
import { settingsReducer } from '../store/reducers/settingsReducer';
import systemReducer from './reducers/systemReducer';


const rootReducer = combineReducers({
    user: userReducer,
    system: systemReducer,
    settingsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
