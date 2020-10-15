import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

import history from './history';

import { Router } from 'react-router-dom';

import "./assets/css/main.css";

import reducerA from './store/reducers/reducer-a';
import reducerB from './store/reducers/reducer-b';


const rootReducer = combineReducers({
  reducerA,
  reducerB
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
