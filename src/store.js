import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import portfolioReducer from './reducer/reducer';

const store = createStore(
  combineReducers(
    {portfolio: portfolioReducer}), 
    applyMiddleware(thunk)
);

export default store;