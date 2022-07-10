import React from 'react'
import {legacy_createStore, combineReducers, applyMiddleware, compose} from 'redux';
import blogReducer from './Blogs/reducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    blogReducer
});

const composeEnhancers  =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
    rootReducer,
    composeEnhancers (applyMiddleware(thunk))
);