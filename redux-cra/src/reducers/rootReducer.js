import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer.js';
import counter from './counter.js';

export default combineReducers({
    counter,
    simpleReducer,
});