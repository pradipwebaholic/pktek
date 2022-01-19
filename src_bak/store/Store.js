import React, { Component } from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/';

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
