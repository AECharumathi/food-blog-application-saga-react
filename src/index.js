import React from 'react';
import ReactDOM, {render} from 'react-dom';

import createSagaMiddleware from '@redux-saga/core';
import {logger} from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'

import App from './components/App';

import reducer from "./reducers";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware,logger))

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

