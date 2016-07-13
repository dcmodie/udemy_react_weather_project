import { combineReducers } from 'redux';
import ForcastListReducer from './reducer_forcast.js'

const rootReducer = combineReducers({
  forcasts: ForcastListReducer
});

export default rootReducer;
