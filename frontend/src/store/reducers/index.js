import {combineReducers} from 'redux';
import fruitsReducer from './fruits.reducer.js';

const reducer = combineReducers({
    fruitsReducer,
});

export default reducer;
